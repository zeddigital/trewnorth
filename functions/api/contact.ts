/**
 * Contact form handler — Cloudflare Pages Function, served at /api/contact.
 *
 * Sends two emails through Resend on each submission:
 *   1. the enquiry itself to the practice, with reply-to set to the enquirer
 *   2. a branded acknowledgement to the enquirer, with reply-to set to Darren
 *
 * The practice notification is the one that matters. If the acknowledgement
 * fails we still report success to the visitor, because the enquiry has landed
 * and telling them otherwise would only prompt a duplicate submission.
 *
 * Required binding (Cloudflare Pages → Settings → Environment variables):
 *   RESEND_API_KEY   secret, from the Resend dashboard
 * Optional overrides:
 *   CONTACT_TO       defaults to darren@tnaccounting.com.au
 *   CONTACT_FROM     defaults to Trew North Accounting <noreply@tnaccounting.com.au>
 *                    — the domain must be verified in Resend
 */

interface Env {
  RESEND_API_KEY?: string;
  CONTACT_TO?: string;
  CONTACT_FROM?: string;
}

interface RequestContext {
  request: Request;
  env: Env;
}

const DEFAULT_TO = 'darren@tnaccounting.com.au';
const DEFAULT_FROM = 'Trew North Accounting <noreply@tnaccounting.com.au>';

const SITE = 'https://tnaccounting.com.au';
const PHONE_DISPLAY = '0411 732 966';
const PHONE_HREF = 'tel:0411732966';

/* Brand palette, mirroring the --secondary / --primary / --accent tokens in
   src/index.css. Hard-coded here because email has no access to the stylesheet
   and no support for CSS custom properties. */
const NAVY = '#111C2C';
const CYAN = '#0DB7E1';
const PAGE_BG = '#F1F4F6';
const CARD_BG = '#FFFFFF';
const TEXT = '#161F2D';
const MUTED = '#636E7E';
const BORDER = '#DAE0E6';

const SERVICE_LABELS: Record<string, string> = {
  'tax-planning': 'Accounting & Tax Planning',
  'small-business': 'Small Business Planning',
  'personal-tax': 'Personal Tax & Finance',
  bookkeeping: 'Bookkeeping',
  smsf: 'Self-Managed Super Funds',
  other: 'Other / Not sure yet',
};

/** Every value below is attacker-controlled and lands in an HTML email. */
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function clean(value: unknown, maxLength: number): string {
  if (typeof value !== 'string') return '';
  // Strip control characters — they serve no purpose in a single-line field and
  // can be used to smuggle header-like content into downstream systems.
  return value.replace(/[\x00-\x1F\x7F]/g, ' ').trim().slice(0, maxLength);
}

/**
 * As clean(), but keeps newlines. The message box is the one field where a
 * person may deliberately write paragraphs, and flattening them into a single
 * line loses meaning the reader put there on purpose. Rendered with
 * white-space:pre-wrap at the other end.
 */
function cleanMultiline(value: unknown, maxLength: number): string {
  if (typeof value !== 'string') return '';
  return value
    .replace(/\r\n?/g, '\n')
    .replace(/[\x00-\x09\x0B-\x1F\x7F]/g, ' ')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
    .slice(0, maxLength);
}

function looksLikeEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value) && value.length <= 254;
}

function json(body: unknown, status: number): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-store',
    },
  });
}

/* ── Shared email chrome ─────────────────────────────────────────────────── */

function shell(heading: string, subheading: string, inner: string): string {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="color-scheme" content="light">
<title>${escapeHtml(heading)}</title>
</head>
<body style="margin:0;padding:0;background:${PAGE_BG};">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;">${escapeHtml(subheading)}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${PAGE_BG};padding:24px 12px;">
<tr><td align="center">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;background:${CARD_BG};border:1px solid ${BORDER};border-radius:12px;overflow:hidden;">

<tr><td style="background:${NAVY};padding:28px 32px;">
<div style="font-family:Georgia,'Times New Roman',serif;font-size:21px;font-weight:700;color:#ffffff;letter-spacing:-0.01em;line-height:1.2;">Trew North Accounting</div>
<div style="font-family:Arial,Helvetica,sans-serif;font-size:12px;color:${CYAN};letter-spacing:0.09em;text-transform:uppercase;padding-top:7px;">Chartered Accountants &middot; Beaumaris</div>
</td></tr>

<tr><td style="height:4px;background:${CYAN};font-size:0;line-height:0;">&nbsp;</td></tr>

<tr><td style="padding:32px;">
<h1 style="margin:0 0 6px;font-family:Georgia,'Times New Roman',serif;font-size:23px;line-height:1.3;color:${TEXT};font-weight:700;">${escapeHtml(heading)}</h1>
<p style="margin:0 0 24px;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.6;color:${MUTED};">${escapeHtml(subheading)}</p>
${inner}
</td></tr>

<tr><td style="background:${PAGE_BG};border-top:1px solid ${BORDER};padding:22px 32px;">
<p style="margin:0 0 4px;font-family:Arial,Helvetica,sans-serif;font-size:13px;line-height:1.6;color:${MUTED};">
<a href="${PHONE_HREF}" style="color:${TEXT};text-decoration:none;font-weight:bold;">${PHONE_DISPLAY}</a>
&nbsp;&middot;&nbsp;
<a href="mailto:${DEFAULT_TO}" style="color:${TEXT};text-decoration:none;">${DEFAULT_TO}</a>
</p>
<p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:13px;line-height:1.6;color:${MUTED};">
14 Keys Street, Beaumaris VIC 3193 &nbsp;&middot;&nbsp;
<a href="${SITE}" style="color:${MUTED};text-decoration:underline;">tnaccounting.com.au</a>
</p>
</td></tr>

</table>
</td></tr>
</table>
</body>
</html>`;
}

function detailRow(label: string, valueHtml: string): string {
  return `<tr>
<td style="padding:11px 0;border-bottom:1px solid ${BORDER};font-family:Arial,Helvetica,sans-serif;font-size:12px;letter-spacing:0.07em;text-transform:uppercase;color:${MUTED};white-space:nowrap;vertical-align:top;width:132px;">${escapeHtml(label)}</td>
<td style="padding:11px 0;border-bottom:1px solid ${BORDER};font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.6;color:${TEXT};vertical-align:top;">${valueHtml}</td>
</tr>`;
}

/* ── The two emails ──────────────────────────────────────────────────────── */

interface Enquiry {
  firstName: string;
  lastName: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}

/**
 * The submitted details, as a table. Both emails show the same set: the
 * practice needs it to act on the enquiry, and the sender needs it as a
 * receipt — so a typo in their own phone or email is visible to them
 * immediately rather than after a call that never comes.
 *
 * `linked` turns the email and phone into mailto:/tel: links. Useful in the
 * practice copy, pointless in the sender's own copy of their own details.
 */
function detailsTable(e: Enquiry, linked: boolean): string {
  const email = linked
    ? `<a href="mailto:${escapeHtml(e.email)}" style="color:${CYAN};text-decoration:none;">${escapeHtml(e.email)}</a>`
    : escapeHtml(e.email);
  const phone = linked
    ? `<a href="tel:${escapeHtml(e.phone.replace(/[^\d+]/g, ''))}" style="color:${CYAN};text-decoration:none;">${escapeHtml(e.phone)}</a>`
    : escapeHtml(e.phone);
  const rows = [
    detailRow('Name', escapeHtml(e.name)),
    detailRow('Email', email),
    detailRow('Phone', phone),
    e.company ? detailRow('Business', escapeHtml(e.company)) : '',
    detailRow('Service', escapeHtml(e.service)),
  ].join('');
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-top:1px solid ${BORDER};">${rows}</table>`;
}

function practiceEmail(e: Enquiry): { html: string; text: string } {

  // Everything below is laid out with tables and cell padding rather than
  // margins on block elements. Margins on a table are unreliable across mail
  // clients — an earlier version put the reply button in a margin-spaced table
  // and it collapsed onto the message block in Darren's client.
  const message = e.message
    ? `<tr><td style="padding:26px 0 8px;font-family:Arial,Helvetica,sans-serif;font-size:12px;letter-spacing:0.07em;text-transform:uppercase;color:${MUTED};">Message</td></tr>
<tr><td>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${PAGE_BG};border-left:3px solid ${CYAN};">
<tr><td style="padding:16px 18px;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.65;color:${TEXT};white-space:pre-wrap;">${escapeHtml(e.message)}</td></tr>
</table>
</td></tr>`
    : `<tr><td style="padding:26px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.6;color:${MUTED};font-style:italic;">No message was included.</td></tr>`;

  const inner = `${detailsTable(e, true)}
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
${message}
<tr><td style="padding:24px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.6;color:${MUTED};">
Reply to this email to answer ${escapeHtml(e.firstName)} directly, or call
<a href="tel:${escapeHtml(e.phone.replace(/[^\d+]/g, ''))}" style="color:${CYAN};text-decoration:none;font-weight:bold;">${escapeHtml(e.phone)}</a>.
</td></tr>
</table>`;

  const text = [
    `New enquiry from the website`,
    ``,
    `Name:     ${e.name}`,
    `Email:    ${e.email}`,
    `Phone:    ${e.phone}`,
    e.company ? `Business: ${e.company}` : '',
    e.service ? `Service:  ${e.service}` : '',
    ``,
    `Message:`,
    e.message || '(none)',
    ``,
    `Reply directly to this email to reach them.`,
  ].filter(Boolean).join('\n');

  return {
    html: shell('New enquiry from the website', `${e.name}, reply to this email to respond directly.`, inner),
    text,
  };
}

function acknowledgementEmail(e: Enquiry): { html: string; text: string } {
  const summary = `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
<tr><td style="padding:0 0 10px;font-family:Arial,Helvetica,sans-serif;font-size:12px;letter-spacing:0.07em;text-transform:uppercase;color:${MUTED};">What you sent us</td></tr>
</table>
${detailsTable(e, false)}
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
<tr><td style="padding:22px 0 8px;font-family:Arial,Helvetica,sans-serif;font-size:12px;letter-spacing:0.07em;text-transform:uppercase;color:${MUTED};">Your message</td></tr>
<tr><td>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${PAGE_BG};border-left:3px solid ${CYAN};">
<tr><td style="padding:16px 18px;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.65;color:${TEXT};white-space:pre-wrap;">${escapeHtml(e.message)}</td></tr>
</table>
</td></tr>
<tr><td style="padding:18px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.6;color:${MUTED};">
If any of that is wrong, just reply to this email and we will correct it.
</td></tr>
</table>`;

  const inner = `<p style="margin:0 0 18px;font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:1.7;color:${TEXT};">Hi ${escapeHtml(e.firstName)},</p>
<p style="margin:0 0 18px;font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:1.7;color:${TEXT};">Thanks for getting in touch with Trew North Accounting. Your enquiry has come through and Darren will come back to you within one business day.</p>
<p style="margin:0 0 26px;font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:1.7;color:${TEXT};">If it is urgent, the quickest way to reach us is on <a href="${PHONE_HREF}" style="color:${CYAN};text-decoration:none;font-weight:bold;">${PHONE_DISPLAY}</a>.</p>
${summary}
<p style="margin:26px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.7;color:${MUTED};">Kind regards,<br><span style="color:${TEXT};font-weight:bold;">Darren Trew</span><br>Trew North Accounting</p>`;

  const text = [
    `Hi ${e.firstName},`,
    ``,
    `Thanks for getting in touch with Trew North Accounting. Your enquiry has`,
    `come through and Darren will come back to you within one business day.`,
    ``,
    `If it is urgent, call us on ${PHONE_DISPLAY}.`,
    ``,
    `What you sent us`,
    `Name:     ${e.name}`,
    `Email:    ${e.email}`,
    `Phone:    ${e.phone}`,
    e.company ? `Business: ${e.company}` : '',
    `Service:  ${e.service}`,
    ``,
    `Your message:`,
    e.message,
    ``,
    `If any of that is wrong, just reply to this email and we will correct it.`,
    ``,
    `Kind regards,`,
    `Darren Trew`,
    `Trew North Accounting`,
    `${PHONE_DISPLAY}, ${DEFAULT_TO}, ${SITE}`,
  ].filter(Boolean).join('\n');

  return {
    html: shell("Thanks, we've got your enquiry", 'Darren will be in touch within one business day.', inner),
    text,
  };
}

/* ── Handler ─────────────────────────────────────────────────────────────── */

async function sendViaResend(apiKey: string, payload: Record<string, unknown>): Promise<void> {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      authorization: `Bearer ${apiKey}`,
      'content-type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    // Read the body for the log, but never return it to the browser — it can
    // echo request detail and we do not want provider internals reaching a form.
    const detail = await res.text().catch(() => '');
    throw new Error(`Resend responded ${res.status}: ${detail.slice(0, 500)}`);
  }
}

export const onRequestPost = async (ctx: RequestContext): Promise<Response> => {
  const { request, env } = ctx;

  const apiKey = env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('RESEND_API_KEY is not set on this environment');
    return json({ ok: false, error: 'Email is not configured.' }, 500);
  }

  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return json({ ok: false, error: 'Invalid request.' }, 400);
  }

  // Honeypot: a real person never fills this in because it is not rendered.
  // Bots that do get a success response rather than a signal to retry.
  if (clean(body.website, 200)) {
    return json({ ok: true }, 200);
  }

  const firstName = clean(body.firstName, 80);
  const lastName = clean(body.lastName, 80);

  const enquiry: Enquiry = {
    firstName,
    lastName,
    name: [firstName, lastName].filter(Boolean).join(' '),
    email: clean(body.email, 254),
    phone: clean(body.phone, 40),
    company: clean(body.company, 160),
    service: SERVICE_LABELS[clean(body.service, 40)] ?? '',
    message: cleanMultiline(body.message, 5000),
  };

  // Mirrors the required fields on the form. The endpoint is public, so it
  // cannot rely on the client having checked any of this.
  if (
    !enquiry.firstName ||
    !enquiry.lastName ||
    !enquiry.phone ||
    !looksLikeEmail(enquiry.email) ||
    !enquiry.service ||
    !enquiry.message
  ) {
    return json({ ok: false, error: 'Please complete all required fields.' }, 400);
  }

  const to = env.CONTACT_TO || DEFAULT_TO;
  const from = env.CONTACT_FROM || DEFAULT_FROM;

  const practice = practiceEmail(enquiry);
  try {
    await sendViaResend(apiKey, {
      from,
      to: [to],
      reply_to: enquiry.email,
      subject: `New enquiry, ${enquiry.name}${enquiry.company ? ` (${enquiry.company})` : ''}`,
      html: practice.html,
      text: practice.text,
    });
  } catch (err) {
    console.error('Practice notification failed:', err);
    return json({ ok: false, error: 'We could not send your message just now.' }, 502);
  }

  // Best effort. The enquiry is already safely with the practice, so a failure
  // here must not be surfaced as a failed submission.
  const ack = acknowledgementEmail(enquiry);
  try {
    await sendViaResend(apiKey, {
      from,
      to: [enquiry.email],
      reply_to: to,
      subject: 'We received your enquiry, Trew North Accounting',
      html: ack.html,
      text: ack.text,
    });
  } catch (err) {
    console.error('Acknowledgement to enquirer failed:', err);
  }

  return json({ ok: true }, 200);
};
