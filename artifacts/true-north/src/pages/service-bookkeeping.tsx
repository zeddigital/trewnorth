import { motion } from 'framer-motion';
import {
  BookOpen, DollarSign, Calculator, CheckCircle2, ArrowRight, Phone,
  FileText, Clock, Shield,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { SEOHead, breadcrumbSchema, serviceSchema } from '@/components/seo-head';
import { ServiceBreadcrumb } from '@/components/service-breadcrumb';
import { BookConsultation } from '@/components/book-consultation';

const features = [
  {
    icon: BookOpen,
    title: 'Accurate, Detailed Books Done For You',
    body: 'We use Xero — a cloud-based application that is affordable, easy to use, and gives you real-time visibility over your business finances.',
  },
  {
    icon: DollarSign,
    title: 'Transparent Pricing',
    body: 'Fixed monthly fee. No unexpected compliance costs. No surprise invoices at tax time. Complete peace of mind.',
  },
  {
    icon: Calculator,
    title: 'Accounting for Everything',
    body: "Whether you're a small business or an individual needing a personal accounting solution, we've got you covered — all in one place.",
  },
];

const benefits = [
  { icon: Clock,       title: 'Save Time', body: 'Stop spending your evenings doing books. Hand them over and spend that time on your business and family.' },
  { icon: CheckCircle2, title: 'Stay Compliant', body: 'Accurate BAS lodgement, GST reporting, and ATO compliance — handled on time, every time.' },
  { icon: Shield,      title: 'Avoid Costly Errors', body: 'Bookkeeping mistakes cost money. Our accurate records keep you safe from ATO penalties and cash flow surprises.' },
  { icon: FileText,    title: 'Better Decisions', body: 'Clean books give you real numbers to make informed decisions about your business — pricing, hiring, investing.' },
];

const steps = [
  'Schedule your bookkeeping consultation',
  'Find the right combination of services for your business',
  "We'll match you with a dedicated accountant",
];

const fadeUp = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, ease: 'easeOut' as const },
};

export default function ServiceBookkeeping() {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Monthly Bookkeeping Melbourne | Trew North Accounting"
        description="Professional bookkeeping services for Melbourne small businesses. Trew North Accounting uses Xero for accurate, stress-free books on a fixed monthly fee. Book a free consultation."
        canonical="/services/bookkeeping"
        schema={[
          serviceSchema({
            name: 'Monthly Bookkeeping',
            description: 'Professional bookkeeping services for Melbourne small businesses. Trew North Accounting uses Xero for accurate, stress-free books on a fixed monthly fee.',
            url: '/services/bookkeeping',
          }),
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Services', url: '/services' },
            { name: 'Bookkeeping', url: '/services/bookkeeping' },
          ]),
        ]}
      />
      <Navbar />
      {/* ── HERO ── */}
      <section className="relative min-h-[72vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="h-full w-full lg:w-1/2 bg-secondary" />
        </div>
        {/* Hero image. Scoped to the right half rather than spanning the
            section and being clipped, so `cover` is measured against this
            box and the 1024px source is not upscaled to the full width. */}
        <div
          className="absolute inset-y-0 right-0 w-1/2 z-0 hidden lg:block"
          style={{
            backgroundImage: `url(/hero-bookkeeping.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 z-10 hidden lg:block bg-gradient-to-r from-secondary via-secondary/85 to-transparent" style={{ width: '65%' }} />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-40 w-full">
          <div className="max-w-xl">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: 'easeOut' }}>
              <ServiceBreadcrumb serviceName="Monthly Bookkeeping" />
              <p className="text-primary font-medium tracking-widest text-sm uppercase mb-5">Our Services</p>
              <h1 className="font-serif font-semibold text-5xl sm:text-6xl lg:text-7xl leading-[1.08] text-white mb-6">
                Monthly<br />Bookkeeping
              </h1>
              <p className="text-lg text-white/75 leading-relaxed mb-10">
                Get your books organised. Accuracy guaranteed. Let's face it — when you get home after a long day at work, doing your books is the last thing on your mind. Let us handle it all.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <BookConsultation><Button size="lg" className="text-base btn-cta">
                    Schedule Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
                  </Button></BookConsultation>
                <Button asChild variant="outline" size="lg" className="text-base border-white/30 text-white bg-white/5 hover:bg-white/15">
                  <a href="tel:0411732966"><Phone className="mr-2 h-4 w-4" />0411 732 966</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 3 FEATURES ── */}
      <section className="py-16 sm:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: i * 0.1 }}
                  className="bg-background rounded-lg border border-border p-8"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-serif font-semibold text-xl mb-3 text-foreground">{f.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{f.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── WHY BOOKKEEPING MATTERS ── */}
      <section className="py-20 sm:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-primary font-medium tracking-widest text-sm uppercase mb-4">Why It Matters</p>
            <h2 className="font-serif font-semibold text-4xl sm:text-5xl text-foreground mb-5">
              Why Professional Bookkeeping?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We prefer Xero for small business accounts and have a large number of satisfied clients who can attest to the simplicity of handling their books on Xero. We handle the setup, the training, and the day-to-day recording.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex gap-6 bg-muted/40 rounded-lg border border-border p-8"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold text-xl mb-2 text-foreground">{b.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{b.body}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── XERO CALLOUT ── */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif font-semibold text-3xl sm:text-4xl text-secondary mb-4">
            We Use Xero — Australia's #1 Small Business Accounting Software
          </h2>
          <p className="text-secondary/75 leading-relaxed">
            Cloud-based, real-time, and easy to use. We set you up, connect your bank feeds, and keep everything reconciled — so you always have accurate numbers when you need them.
          </p>
        </div>
      </section>

      {/* ── GETTING STARTED ── */}
      <section className="py-20 sm:py-28 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeUp}>
            <h2 className="font-serif font-semibold text-4xl sm:text-5xl text-white mb-6">
              Let us handle your bookkeeping!
            </h2>
            <p className="text-lg text-white/70 mb-10">
              Join hundreds of business owners who trust Trew North Accounting
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center mb-10">
              {steps.map((s, i) => (
                <div key={s} className="flex items-center gap-3 text-white/80 text-sm">
                  <span className="w-9 h-9 rounded-full bg-cta flex items-center justify-center text-sm font-bold text-secondary flex-shrink-0">{i + 1}</span>
                  {s}
                </div>
              ))}
            </div>
            <BookConsultation><Button size="lg" className="text-base btn-cta">
                Schedule My First Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Button></BookConsultation>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
