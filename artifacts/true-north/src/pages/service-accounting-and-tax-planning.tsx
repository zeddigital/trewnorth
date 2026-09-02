import { motion } from 'framer-motion';
import { Link } from 'wouter';
import {
  MessageCircle, UserCheck, Layers, ArrowRight, Phone,
  FileText, Wallet, Shield, TrendingUp,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { SEOHead, breadcrumbSchema, serviceSchema } from '@/components/seo-head';
import { ServiceBreadcrumb } from '@/components/service-breadcrumb';
import { BookConsultation } from '@/components/book-consultation';

const features = [
  { icon: MessageCircle, title: 'Unlimited Support',    body: 'When you need us we\'re here. You\'re not alone. Call us anytime for guidance on any accounting or tax matter.' },
  { icon: UserCheck,     title: 'Dedicated Accountant', body: 'We speak in plain language and have a clear process. Helpful resources make accounting as painless as possible.' },
  { icon: Layers,        title: 'All in One Place',     body: 'We combine bookkeeping, accounting, and tax planning to increase efficiency and simplify your financial life.' },
];

const keys = [
  {
    title: 'Understanding the Tax System and Compliance Obligations',
    body: "Australia has a complex tax system with income tax, GST, and FBT. It's crucial to understand the taxes that apply to your situation, whether you're an individual, sole trader, or business owner. Staying compliant with the ATO is essential: timely and accurate filing, correct income reporting, and detailed records.",
  },
  {
    title: 'Maximising Tax Deductions and Credits',
    body: 'There are numerous deductions and credits available in Australia that can significantly reduce your taxable income. For businesses: operating expense deductions, asset depreciation, and R&D incentives. For individuals: work-related expenses, charitable donations, and investment deductions. Understanding what you can claim is vital for minimising your tax liability.',
  },
  {
    title: 'Superannuation and Retirement Planning',
    body: "Superannuation is a mandatory retirement savings scheme in Australia. Both employers and employees need to contribute correctly and on time. Effective superannuation planning offers tax benefits through concessional and non-concessional contributions. Understanding the tax implications of accessing super at retirement is crucial for long-term financial security.",
  },
];

/** Icons match the canonical set used in the navigation. */
const relatedServices = [
  { label: 'Bookkeeping',       href: '/services/bookkeeping',              icon: FileText },
  { label: 'Personal Tax',      href: '/services/personal-tax-and-finance', icon: Wallet },
  { label: 'Self-Managed Super',href: '/services/self-managed-super-funds', icon: Shield },
  { label: 'Business Planning', href: '/services/small-business-planning',  icon: TrendingUp },
];

const steps = [
  'Schedule your consultation',
  'Tell us about your business needs',
  "We'll match you with a dedicated tax advisor",
];

const fadeUp = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, ease: 'easeOut' as const },
};

export default function ServiceAccountingTaxPlanning() {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Accounting and Tax Planning Melbourne | Trew North Accounting"
        description="Proactive accounting and tax planning from Trew North Accounting. We help Melbourne small businesses minimise tax, stay compliant, and make better financial decisions. Book a free consultation."
        canonical="/services/accounting-and-tax-planning"
        schema={[
          serviceSchema({
            name: 'Accounting and Tax Planning',
            description: 'Proactive accounting and tax planning for Melbourne small businesses. We help minimise tax, stay compliant, and make better financial decisions all year round.',
            url: '/services/accounting-and-tax-planning',
          }),
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Services', url: '/services' },
            { name: 'Accounting and Tax Planning', url: '/services/accounting-and-tax-planning' },
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
            backgroundImage: `url(/hero-accounting-tax-planning.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 z-10 hidden lg:block bg-gradient-to-r from-secondary via-secondary/85 to-transparent" style={{ width: '65%' }} />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-40 w-full">
          <div className="max-w-xl">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: 'easeOut' }}>
              <ServiceBreadcrumb serviceName="Accounting and Tax Planning" />
              <p className="text-primary font-medium tracking-widest text-sm uppercase mb-5">Our Services</p>
              <h1 className="font-serif font-semibold text-5xl sm:text-6xl lg:text-7xl leading-[1.08] text-white mb-6">
                Accounting &<br />Tax Planning
              </h1>
              <p className="text-lg text-white/75 leading-relaxed mb-10">
                Save more on taxes, spend less on accounting. As Melbourne based small business accountants, we'll cover what income is taxed, what your business can write off, and how to make smarter financial decisions all year round.
              </p>
              <div className="flex flex-col gap-6 sm:flex-row sm:gap-4">
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

      {/* ── PROACTIVE SECTION ── */}
      <section className="py-20 sm:py-28 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-6">
            <p className="text-primary font-medium tracking-widest text-sm uppercase mb-4">Our Approach</p>
            <h2 className="font-serif font-semibold text-4xl sm:text-5xl text-foreground mb-5">
              Proactive Accounting and Tax Planning
            </h2>
          </motion.div>
          <motion.p {...fadeUp} className="text-lg text-muted-foreground leading-relaxed text-center mb-16">
            Our dynamic and flexible approach helps you make better financial decisions. While working hard to minimise your tax, we provide the best proactive advice that aligns with your business and personal goals. You will gain a better understanding of your financial position and how your decisions impact the tax you pay.
          </motion.p>

          <div className="divide-y divide-border/60">
            {keys.map((k, i) => (
              <motion.div
                key={k.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="grid grid-cols-[auto_1fr] gap-8 sm:gap-16 py-12 items-start group"
              >
                {/* Oversized number — matches the "Top 5 Reasons" treatment
                    on the small business accountant page. */}
                <div className="w-20 sm:w-32 pt-1 flex-shrink-0">
                  <span
                    className="font-serif font-semibold leading-none select-none text-primary/20 group-hover:text-primary/40 transition-colors duration-500"
                    style={{ fontSize: 'clamp(4rem, 7vw, 6.5rem)' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="py-2">
                  <h3 className="font-serif font-semibold text-2xl sm:text-3xl lg:text-4xl text-foreground mb-4 leading-tight">{k.title}</h3>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">{k.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 {...fadeUp} className="font-serif font-semibold text-3xl text-foreground text-center mb-10">
            Related Services
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {relatedServices.map(({ label, href, icon: Icon }) => (
              <Link key={href} href={href}>
                <div className="group bg-background border border-border rounded-xl p-4 text-center hover:border-primary/40 hover:shadow-md transition-all duration-300 cursor-pointer">
                  <Icon className="h-5 w-5 text-primary mx-auto mb-2" aria-hidden="true" />
                  <span className="font-medium text-foreground text-sm">{label}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 sm:py-28 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeUp}>
            <h2 className="font-serif font-semibold text-4xl sm:text-5xl text-white mb-6">
              Need Accounting and Tax Planning?
            </h2>
            <p className="text-lg text-white/70 mb-10">
              Join hundreds of business owners who trust Trew North Accounting
            </p>
            <div className="flex flex-col gap-6 sm:flex-row sm:gap-4 justify-center">
              {steps.map((s, i) => (
                <div key={s} className="flex items-center gap-2 text-white/80 text-sm">
                  <span className="w-9 h-9 rounded-full bg-cta flex items-center justify-center text-sm font-bold text-secondary flex-shrink-0">{i + 1}</span>
                  {s}
                </div>
              ))}
            </div>
            <div className="mt-10">
              <BookConsultation><Button size="lg" className="text-base btn-cta">
                  Schedule My First Consultation <ArrowRight className="ml-2 h-5 w-5" />
                </Button></BookConsultation>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
