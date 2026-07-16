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

// Headers. Keep From on your own domain for deliverability; Reply-To is the lead.
$safeName = preg_replace('/[\r\n]+/', ' ', $name);
$headers  = "From: Veneer Website <noreply@veneerdigital.co.za>\r\n";
$headers .= "Reply-To: $safeName <$email>\r\n";
$headers .= "Content-Type: text/plain; charset=utf-8\r\n";
$headers .= "MIME-Version: 1.0\r\n";

$sent = @mail($to, $subject, $body, $headers);

if ($sent) {
    echo json_encode(['ok' => true]);
} else {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'Mail failed']);
}
