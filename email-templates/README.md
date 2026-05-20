# Email templates

Reference markup for the EmailJS template that powers the **Contact** page form
([src/pages/ContactPage.jsx](../src/pages/ContactPage.jsx)).

EmailJS templates live in their dashboard — these files are the source of truth
you copy from when you create or update the template.

## Files

| File | Use |
|------|-----|
| `contact-form.html` | HTML body — paste into the **Content** tab of the EmailJS template editor |
| `contact-form.txt`  | Plain-text fallback — paste into the **Plain text** tab (optional but recommended; some clients prefer it) |

## EmailJS template settings

When you create the template at <https://dashboard.emailjs.com/admin/templates>, fill in:

| Field | Value |
|-------|-------|
| **Subject** | `New brief — {{from_name}} ({{company}})` |
| **To Email** | `{{to_email}}` |
| **Reply To** | `{{reply_to}}` |
| **From Name** | `3.0 Labs Contact Form` |
| **Content** | paste `contact-form.html` |
| **Plain text** | paste `contact-form.txt` |

## Variables used

Each `{{var}}` placeholder maps to a field the form sends. Don't rename them
without also updating the params in `ContactPage.jsx`.

| Variable | Source field | Notes |
|----------|--------------|-------|
| `{{from_name}}` | "Your name" | required |
| `{{from_email}}` | "Work email" | required |
| `{{company}}` | "Company" | optional |
| `{{role}}` | "Your role" | optional |
| `{{start}}` | "Ideal start" | dropdown — sends the option's label, not its key |
| `{{brief}}` | "Project brief" | required; preserves line breaks via `white-space: pre-line` |
| `{{to_email}}` | `VITE_CONTACT_EMAIL_TO` in `.env` | destination address |
| `{{reply_to}}` | same as `from_email` | used for the **Reply To** header so hitting reply lands on the sender |

## After editing

1. Save the template in EmailJS — version is published immediately.
2. No code change needed unless you rename variables.
3. Test by submitting the contact form locally with `npm run dev`.

## Preview

Open `contact-form.html` directly in a browser to preview the layout. The
`{{var}}` tokens will appear as literal text since EmailJS does the substitution
server-side, but the styles and structure render correctly.
