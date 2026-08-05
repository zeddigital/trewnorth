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
    value: '14 Keys Street, Beaumaris VIC 3193',
    href: 'https://maps.app.goo.gl/Ue9ZC41Q5Z2ZiF2B8',
  },
  {
    icon: Clock,
    label: 'Hours',
    value: 'Mon – Fri  9:00 AM – 5:00 PM',
    href: null,
  },
];

const expectations = [
  {
    step: '01',
    title: 'Free 30-minute consultation',
    body: 'No cost, no obligation. We listen to your situation and tell you exactly where we can help.',
  },
  {
    step: '02',
    title: 'Clear proposal',
    body: 'You receive a plain-English proposal outlining scope and fixed fees — no surprises.',
  },
  {
    step: '03',
    title: 'Seamless onboarding',
    body: 'We handle the transition from your previous accountant. You barely lift a finger.',
  },
];

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Contact Trew North Accounting | Book a Free Consultation"
        description="Book a free consultation with Trew North Accounting in Beaumaris, Melbourne. Call 0411 732 966 or email darren@tnaccounting.com.au. We respond within one business day."
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
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-secondary/20">
            {contactDetails.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="px-6 py-5 flex items-center gap-3">
                <Icon className="h-5 w-5 text-secondary/60 flex-shrink-0" aria-hidden="true" />
                <div className="min-w-0">
                  <p className="text-secondary/60 text-xs uppercase tracking-wider mb-0.5">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-secondary text-sm font-medium hover:text-secondary/70 transition-colors truncate block"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-secondary text-sm font-medium truncate">{value}</p>
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
                Book a free consultation
              </h2>
              <p className="text-muted-foreground mb-8">
                Tell us a little about your situation and we'll be in touch to arrange a time.
              </p>

              {!formSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        required
                        placeholder="Jane Smith"
                        className="mt-1.5"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        required
                        placeholder="0412 345 678"
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
                      required
                      placeholder="jane@business.com.au"
                      className="mt-1.5"
                    />
                  </div>

                  <div>
                    <Label htmlFor="company">Business / Company Name</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleChange('company', e.target.value)}
                      placeholder="Acme Pty Ltd"
                      className="mt-1.5"
                    />
                  </div>

                  <div>
                    <Label htmlFor="service">How can we help?</Label>
                    <Select
                      value={formData.service}
                      onValueChange={(v) => handleChange('service', v)}
                    >
                      <SelectTrigger id="service" className="mt-1.5">
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
                  </div>

                  <div>
                    <Label htmlFor="message">Your question or message</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      placeholder="Tell us about your business and what you're looking to achieve..."
                      rows={4}
                      className="mt-1.5"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full btn-cta gap-2"
                  >
                    Send Enquiry <ArrowRight className="h-4 w-4" />
                  </Button>

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
                    Darren or a member of the team will contact you within one business day to arrange your free consultation.
                  </p>
                </motion.div>
              )}
            </motion.div>

            {/* Map + What to expect */}
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

              {/* What to expect */}
              <div>
                <h3 className="font-serif font-semibold text-2xl text-foreground mb-6">
                  What to expect
                </h3>
                <div className="space-y-6">
                  {expectations.map((item) => (
                    <div key={item.step} className="flex gap-5">
                      <span className="font-serif font-semibold text-3xl leading-none text-primary/50 flex-shrink-0 w-10 text-right">
                        {item.step}
                      </span>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
