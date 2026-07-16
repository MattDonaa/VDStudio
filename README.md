# Veneer Digital Studio — veneerdigital.co.za

Static website for Veneer Digital Studio: premium websites and WhatsApp
lead-capture systems for South African businesses.

## What's here

| File | Purpose |
|---|---|
| `index.html` | The whole site (single-page app with clean-URL routing) |
| `contact.php` | Emails enquiry-form submissions via PHP `mail()` |
| `.htaccess` | Clean URLs (`/about`, `/privacy`, ...), HTTPS redirect, caching, security headers |
| `robots.txt` / `sitemap.xml` | Search-engine crawling and indexing |
| `assets/` | Images |
| `HOW-TO-UPLOAD.txt` | Plain-English Hostinger deployment guide |

## Deploying

Upload everything except `HOW-TO-UPLOAD.txt` (and this README) to the
hosting `public_html` folder. Full step-by-step instructions are in
[HOW-TO-UPLOAD.txt](HOW-TO-UPLOAD.txt).

No build step — plain HTML, CSS and vanilla JavaScript.
