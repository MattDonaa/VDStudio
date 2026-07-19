<?php
/**
 * Veneer Digital Studio - contact form handler
 * Receives the enquiry form (POST) and emails it to the studio.
 * Works on standard Hostinger shared hosting (PHP mail()).
 *
 * If you prefer more reliable delivery, replace mail() below with SMTP
 * (e.g. PHPMailer using your Hostinger mailbox credentials).
 */

header('Content-Type: application/json; charset=utf-8');

// Only accept POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
    exit;
}

// Honeypot: real users never fill this hidden field
if (!empty($_POST['bot-field'])) {
    // Pretend success so bots get no signal
    echo json_encode(['ok' => true]);
    exit;
}

// Where enquiries are delivered
$to      = 'matt@veneerdigital.co.za';
$subject = 'New website enquiry from veneerdigital.co.za';

// Collect + clean fields
function field($key) {
    return isset($_POST[$key]) ? trim((string) $_POST[$key]) : '';
}
$name     = field('name');
$business = field('business');
$email    = field('email');
$phone    = field('phone');
$need     = field('need');
$area     = field('area');
$notes    = field('notes');
$interest = field('interest');

// Basic validation
$errors = [];
if ($name === '')     { $errors[] = 'name'; }
if ($business === '') { $errors[] = 'business'; }
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) { $errors[] = 'email'; }
if ($phone === '')    { $errors[] = 'phone'; }
if ($area === '')     { $errors[] = 'area'; }

if ($errors) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => 'Missing fields', 'fields' => $errors]);
    exit;
}

// Build the email body
$lines = [
    "New enquiry from the Veneer Digital Studio website:",
    "",
    "Name:      $name",
    "Business:  $business",
    "Email:     $email",
    "Phone:     $phone",
    "Needs:     $need",
    "Area:      $area",
    "Interest:  $interest",
    "",
    "Notes:",
    ($notes !== '' ? $notes : '(none)'),
];
$body = implode("\r\n", $lines);

// --- Calendar invite (.ics) so the lead lands in the iPhone Calendar ---
// A 30-minute "call this lead back" event, starting on the next half-hour
// (South African Standard Time). On iPhone, tapping the attachment in Mail
// adds it to Calendar with all the lead's details in the notes.
$tz  = new DateTimeZone('Africa/Johannesburg');
$now = new DateTime('now', $tz);
$mins = (int) $now->format('i');
$now->modify('+' . (($mins < 30 ? 30 : 60) - $mins) . ' minutes')->modify('+1 hour');
$startUtc = clone $now; $startUtc->setTimezone(new DateTimeZone('UTC'));
$endUtc   = clone $startUtc; $endUtc->modify('+30 minutes');

function ics_escape($v) {
    return str_replace(["\\", ";", ",", "\r\n", "\n"], ["\\\\", "\\;", "\\,", "\\n", "\\n"], (string) $v);
}
$icsDesc = ics_escape(
    "New website lead from veneerdigital.co.za\n\n" .
    "Name: $name\nBusiness: $business\nEmail: $email\nPhone: $phone\n" .
    "Needs: $need\nArea: $area\n\nNotes: " . ($notes !== '' ? $notes : '(none)')
);
$ics = implode("\r\n", [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Veneer Digital//Lead Capture//EN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    'UID:' . uniqid('vds-lead-', true) . '@veneerdigital.co.za',
    'DTSTAMP:' . gmdate('Ymd\THis\Z'),
    'DTSTART:' . $startUtc->format('Ymd\THis\Z'),
    'DTEND:' . $endUtc->format('Ymd\THis\Z'),
    'SUMMARY:' . ics_escape("Call lead: $name — $business"),
    'DESCRIPTION:' . $icsDesc,
    'BEGIN:VALARM',
    'TRIGGER:-PT10M',
    'ACTION:DISPLAY',
    'DESCRIPTION:Lead follow-up in 10 minutes',
    'END:VALARM',
    'END:VEVENT',
    'END:VCALENDAR',
]);

// Multipart email: plain-text summary + the .ics attachment.
$safeName = preg_replace('/[\r\n]+/', ' ', $name);
$boundary = 'vds_' . md5(uniqid('', true));
$headers  = "From: Veneer Website <noreply@veneerdigital.co.za>\r\n";
$headers .= "Reply-To: $safeName <$email>\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: multipart/mixed; boundary=\"$boundary\"\r\n";

$mailBody  = "--$boundary\r\n";
$mailBody .= "Content-Type: text/plain; charset=utf-8\r\n\r\n";
$mailBody .= $body . "\r\n\r\n";
$mailBody .= "Tap the attached invite to add this lead to your calendar.\r\n\r\n";
$mailBody .= "--$boundary\r\n";
$mailBody .= "Content-Type: text/calendar; charset=utf-8; method=PUBLISH; name=\"lead-followup.ics\"\r\n";
$mailBody .= "Content-Disposition: attachment; filename=\"lead-followup.ics\"\r\n";
$mailBody .= "Content-Transfer-Encoding: base64\r\n\r\n";
$mailBody .= chunk_split(base64_encode($ics)) . "\r\n";
$mailBody .= "--$boundary--\r\n";

$sent = @mail($to, $subject, $mailBody, $headers);

if ($sent) {
    echo json_encode(['ok' => true]);
} else {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'Mail failed']);
}
