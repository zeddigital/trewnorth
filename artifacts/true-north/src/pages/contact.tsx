import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { SEOHead, localBusinessSchema, breadcrumbSchema } from '@/components/seo-head';

const contactDetails = [
  {
    icon: Phone,
    label: 'Phone',
    value: '0411 732 966',
    href: 'tel:0411732966',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'darren@tnaccounting.com.au',
    href: 'mailto:darren@tnaccounting.com.au',
  },
  {
    icon: MapPin,
    label: 'Office',
    // Non-breaking space keeps the postcode with the state, so the four-column
    // layout breaks after "Beaumaris" rather than orphaning "3193".
    value: '14 Keys Street, Beaumaris VIC\u00A03193',
    href: 'https://maps.app.goo.gl/Ue9ZC41Q5Z2ZiF2B8',
  },
  {
    icon: Clock,
    label: 'Hours',
    value: 'Mon – Fri  9:00 AM – 5:00 PM',
    href: null,
  },
];

type SubmitStatus = 'idle' | 'sending' | 'success' | 'error';

/** Red ring on an invalid control, matching the site's focus treatment. */
const fieldClass = (invalid: boolean) =>
  invalid ? 'mt-1.5 border-destructive focus-visible:ring-destructive' : 'mt-1.5';

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="mt-1.5 text-sm text-destructive">
      {message}
    </p>
  );
}

export default function Contact() {
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
    // Honeypot. Hidden from people, so anything here means a bot.
    website: '',
  });

  const formSubmitted = status === 'success';

  /**
   * Validation runs here rather than through the browser because the service
   * picker is a Radix listbox, not a native <select> — `required` on it would
   * never fire. Doing every field the same way keeps one consistent style of
   * error message instead of mixing native bubbles with inline text.
   */
  const validate = () => {
    const next: Record<string, string> = {};
    if (!formData.firstName.trim()) next.firstName = 'Please enter your first name.';
    if (!formData.lastName.trim()) next.lastName = 'Please enter your last name.';
    if (!formData.phone.trim()) next.phone = 'Please enter a phone number.';
    if (!formData.email.trim()) next.email = 'Please enter your email address.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(formData.email.trim())) {
      next.email = 'That email address does not look right.';
    }
    if (!formData.service) next.service = 'Please choose the area you need help with.';
    if (!formData.message.trim()) next.message = 'Please tell us a little about what you need.';
    return next;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'sending') return;

    const found = validate();
    setErrors(found);
    if (Object.keys(found).length > 0) {
      const first = document.getElementById(Object.keys(found)[0]);
      first?.focus();
      first?.scrollIntoView({ block: 'center', behavior: 'smooth' });
      return;
    }

    setStatus('sending');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setErrors(prev => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Contact Trew North Accounting | Beaumaris, Melbourne"
        description="Get in touch with Trew North Accounting in Beaumaris, Melbourne. Call 0411 732 966, email darren@tnaccounting.com.au, or send us a message. We respond within one business day."
        canonical="/contact"
        schema={[
          localBusinessSchema,
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Contact', url: '/contact' },
          ]),
        ]}
      />
      <Navbar />

      {/* ── Hero ── */}
      <section
        className="relative min-h-[52vh] flex items-end pb-16 sm:pb-24 overflow-hidden"
        style={{ backgroundImage: `url(${import.meta.env.BASE_URL}hero-compass.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center 40%' }}
      >
        <div className="absolute inset-0 bg-secondary/88" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <p className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-5">
              Beaumaris, Melbourne
            </p>
            <h1 className="font-serif font-semibold text-5xl sm:text-6xl lg:text-7xl leading-[1.08] text-white mb-6">
              Professional accounting is right here around the corner.
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              Reach out directly or use the form below — we respond within one business day.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Contact bar ── */}
      <section className="bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Dark navy text on cyan — ~7.2:1 contrast. Original used white/white-70 which was ~2.4:1 (WCAG fail). */}
          {/* One column on phones, two on tablets, four on desktop.
              Rules are drawn per cell rather than with divide-x, which follows
              DOM order and so hangs a stray vertical line at the start of the
              second row once the grid wraps. Here the top border separates
              stacked rows and the left border separates columns, each turned
              off at the breakpoint where it would sit on an outside edge. */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {contactDetails.map(({ icon: Icon, label, value, href }) => (
              <div
                key={label}
                className="px-6 py-5 flex items-start gap-3 border-secondary/20
                           border-t first:border-t-0
                           sm:[&:nth-child(-n+2)]:border-t-0 sm:[&:nth-child(even)]:border-l
                           lg:border-t-0 lg:[&:not(:first-child)]:border-l"
              >
                <Icon className="h-5 w-5 text-secondary/60 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div className="min-w-0">
                  <p className="text-secondary/60 text-xs uppercase tracking-wider mb-0.5">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-secondary text-sm font-medium hover:text-secondary/70 transition-colors block break-words"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-secondary text-sm font-medium break-words">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Form + Map ── */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="font-serif font-semibold text-3xl sm:text-4xl text-foreground mb-2">
                Send us a message
              </h2>
              <p className="text-muted-foreground mb-8">
                Tell us a little about your situation and we'll come back to you with the right next step.
              </p>

              {!formSubmitted ? (
                <form onSubmit={handleSubmit} noValidate className="space-y-5 relative">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleChange('firstName', e.target.value)}
                        autoComplete="given-name"
                        aria-invalid={!!errors.firstName}
                        aria-describedby={errors.firstName ? 'firstName-error' : undefined}
                        placeholder="Jane"
                        className={fieldClass(!!errors.firstName)}
                      />
                      <FieldError id="firstName-error" message={errors.firstName} />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleChange('lastName', e.target.value)}
                        autoComplete="family-name"
                        aria-invalid={!!errors.lastName}
                        aria-describedby={errors.lastName ? 'lastName-error' : undefined}
                        placeholder="Smith"
                        className={fieldClass(!!errors.lastName)}
                      />
                      <FieldError id="lastName-error" message={errors.lastName} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <Label htmlFor="phone">Phone *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        autoComplete="tel"
                        aria-invalid={!!errors.phone}
                        aria-describedby={errors.phone ? 'phone-error' : undefined}
                        placeholder="0412 345 678"
                        className={fieldClass(!!errors.phone)}
                      />
                      <FieldError id="phone-error" message={errors.phone} />
                    </div>
                    <div>
                      <Label htmlFor="company">Business / Company Name</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleChange('company', e.target.value)}
                        autoComplete="organization"
                        placeholder="Acme Pty Ltd"
                        className="mt-1.5"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      autoComplete="email"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      placeholder="jane@business.com.au"
                      className={fieldClass(!!errors.email)}
                    />
                    <FieldError id="email-error" message={errors.email} />
                  </div>

                  <div>
                    <Label htmlFor="service">How can we help? *</Label>
                    <Select
                      value={formData.service}
                      onValueChange={(v) => handleChange('service', v)}
                    >
                      <SelectTrigger
                        id="service"
                        aria-invalid={!!errors.service}
                        aria-describedby={errors.service ? 'service-error' : undefined}
                        className={fieldClass(!!errors.service)}
                      >
                        <SelectValue placeholder="Select a service area" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="tax-planning">Accounting & Tax Planning</SelectItem>
                        <SelectItem value="small-business">Small Business Planning</SelectItem>
                        <SelectItem value="personal-tax">Personal Tax & Finance</SelectItem>
                        <SelectItem value="bookkeeping">Bookkeeping</SelectItem>
                        <SelectItem value="smsf">Self-Managed Super Funds</SelectItem>
                        <SelectItem value="other">Other / Not sure yet</SelectItem>
                      </SelectContent>
                    </Select>
                    <FieldError id="service-error" message={errors.service} />
                  </div>

                  <div>
                    <Label htmlFor="message">Your question or message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                      placeholder="Tell us about your business and what you're looking to achieve..."
                      rows={4}
                      className={fieldClass(!!errors.message)}
                    />
                    <FieldError id="message-error" message={errors.message} />
                  </div>

                  {/* Honeypot — positioned off-screen rather than display:none,
                      which some bots detect and skip. Never shown to people. */}
                  <div aria-hidden="true" className="absolute left-[-9999px] w-px h-px overflow-hidden">
                    <label htmlFor="website">Leave this field blank</label>
                    <input
                      id="website"
                      name="website"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      value={formData.website}
                      onChange={(e) => handleChange('website', e.target.value)}
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={status === 'sending'}
                    className="w-full btn-cta gap-2 disabled:opacity-70"
                  >
                    {status === 'sending' ? 'Sending…' : (
                      <>Send Enquiry <ArrowRight className="h-4 w-4" /></>
                    )}
                  </Button>

                  {status === 'error' && (
                    <div
                      role="alert"
                      className="rounded-lg border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-foreground leading-relaxed"
                    >
                      Sorry — your message didn't send. Please call{' '}
                      <a href="tel:0411732966" className="font-semibold text-primary hover:underline">0411&nbsp;732&nbsp;966</a>{' '}
                      or email{' '}
                      <a href="mailto:darren@tnaccounting.com.au" className="font-semibold text-primary hover:underline">darren@tnaccounting.com.au</a>{' '}
                      and we'll pick it up straight away.
                    </div>
                  )}

                  <p className="text-xs text-muted-foreground text-center">
                    We respond within one business day. Your details are kept strictly confidential.
                  </p>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="bg-primary/5 border border-primary/20 rounded-xl p-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-serif font-semibold text-2xl text-foreground mb-3">
                    Thanks — we'll be in touch soon.
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We've sent a confirmation to your inbox. Darren will contact you within one business day to arrange your free consultation.
                  </p>
                </motion.div>
              )}
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="flex flex-col gap-10"
            >
              {/* Google Maps embed */}
              <div className="rounded-xl overflow-hidden border border-border shadow-sm" style={{ height: '320px' }}>
                <iframe
                  title="Trew North Accounting location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3145.6!2d145.0435!3d-37.9835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad66f8e4f8b8b8b%3A0x0!2s14+Keys+St%2C+Beaumaris+VIC+3193!5e0!3m2!1sen!2sau!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <a
                href="https://maps.app.goo.gl/Ue9ZC41Q5Z2ZiF2B8"
                target="_blank"
                rel="noopener noreferrer"
                className="-mt-4 text-sm text-primary hover:underline inline-flex items-center gap-1"
              >
                <MapPin className="h-4 w-4" /> 14 Keys Street, Beaumaris VIC 3193 — Get directions →
              </a>

            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
