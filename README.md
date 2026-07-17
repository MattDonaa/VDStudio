# Veneer Digital Studio — veneerdigital.co.za

Static marketing website for Veneer Digital Studio (premium websites, WhatsApp
lead capture, Google Business Profile and SEO for South African businesses),
plus five live **concept demo sites** used to showcase the studio's work.

## Main site

| File | Purpose |
|---|---|
| `index.html` | The whole site (single-page app with clean-URL routing, prompt builder, service pages, policies, showcase) |
| `contact.php` | Emails enquiry-form submissions via PHP `mail()` |
| `.htaccess` | Clean URLs, HTTPS redirect, caching, security headers |
| `robots.txt` / `sitemap.xml` | Crawling and indexing (`/demo/` is disallowed) |
| `assets/` | Images |
| `HOW-TO-UPLOAD.txt` | Plain-English Hostinger deployment guide |

No build step — plain HTML, CSS and vanilla JavaScript.

## Demo showcase (`/demo/`)

Five concept builds, each hosted at `veneerdigital.co.za/demo/<name>/`. All are
committed as **built, deployable output** with images hosted locally (no external
image dependencies). They are `noindex` and excluded from `robots.txt`.

| Demo | Industry | Tech | Notes |
|---|---|---|---|
| `demo/onestone/` | Interior design | Static (CDN React) | — |
| `demo/vuyo-designs/` | Luxury home design | Static HTML/CSS/JS | — |
| `demo/novacode/` | Coding & robotics academy | Next.js static export | Multi-page + local landing pages |
| `demo/dental-clinic/` | Dental practice | Vite SPA | Live online booking + admin (Supabase) |
| `demo/lingenfelder/` | Custom woodwork | Vite SPA | Live online booking + admin (Supabase) |

### Supabase (booking demos)

`demo/dental-clinic/` and `demo/lingenfelder/` each connect to their own Supabase
project. The schema + demo seed data for each is in that demo's
`supabase-setup.sql`. The Supabase **anon/public key** is inlined in each built
bundle — this is safe by design (anon keys are meant to ship in the frontend;
Row-Level Security protects the data).

## Deploying

Upload everything (except this README and `HOW-TO-UPLOAD.txt`) to the hosting
`public_html` folder, keeping the `demo/` structure intact. See
[HOW-TO-UPLOAD.txt](HOW-TO-UPLOAD.txt).
