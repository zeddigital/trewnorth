import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'wouter';
import {
  Shield, ShieldCheck, SlidersHorizontal, DollarSign, Leaf, Users2, Lock,
  Star, ArrowRight, Phone, Plus, Minus, TrendingUp, Receipt, Settings2, PiggyBank,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { SEOHead, faqSchema, breadcrumbSchema, serviceSchema } from '@/components/seo-head';
import { ServiceBreadcrumb } from '@/components/service-breadcrumb';

const benefits = [
  {
    icon: SlidersHorizontal,
    title: 'Full Investment Control',
    body: 'Not limited to standard investment options. Invest in direct property, shares, managed funds, fixed income, cash, term deposits, and more.',
  },
  {
    icon: DollarSign,
    title: 'Potential Cost Savings',
    body: 'For larger balances, an SMSF can be more cost-effective than traditional super funds — administration and investment fees lower on a per-member basis.',
  },
  {
    icon: Star,
    title: 'Tax Efficiency',
    body: 'SMSFs benefit from a concessional tax rate of 15%, with strategic options including franking credits, CGT concessions, and tax-free income in retirement.',
  },
  {
    icon: Leaf,
    title: 'Retirement Planning & Estate',
    body: 'Structure your SMSF to suit your long-term financial goals, including passing on wealth to family members in a tax-efficient manner.',
  },
  {
    icon: Users2,
    title: 'Combine with Family Members',
    body: 'An SMSF can have up to six members, allowing families to pool superannuation funds and build wealth together.',
  },
  {
    icon: Lock,
    title: 'Asset Protection',
    body: 'Greater control over how your retirement savings are invested and safeguarded — with professional compliance support at every step.',
  },
];

const whyPoints = [
  { icon: TrendingUp,  title: 'Investment Control',  body: 'Decide where and how your retirement savings are invested — shares, property, term deposits, and more.' },
  { icon: Receipt,     title: 'Tax Advantages',      body: 'Enjoy lower tax rates and strategic tax planning opportunities throughout accumulation and retirement phases.' },
  { icon: Settings2,   title: 'Greater Flexibility', body: 'Structure your super fund to suit your retirement and estate planning goals — not a one-size-fits-all approach.' },
  { icon: PiggyBank,   title: 'Cost-Effective',      body: 'For balances over $200,000, SMSFs can be more cost-effective than retail or industry super funds.' },
  { icon: ShieldCheck, title: 'Asset Protection',    body: 'Safeguard your retirement savings with greater control over how your money is invested and managed.' },
];

const atTrewNorth = [
  { icon: DollarSign, title: 'Fair Prices',  body: 'We arrange for SMSF clients to be on a fixed monthly fee to assist with cashflow. No surprises.' },
  { icon: Lock,       title: 'Privacy',      body: 'All your information is securely stored. Your financial details stay confidential, always.' },
  { icon: Star,       title: 'Expertise',    body: 'With over 30 years\' experience in this field we can provide you with the best SMSF advice possible.' },
];

const faqs = [
  { question: 'Who can set up a Self-Managed Super Fund?',              answer: 'Anyone who meets the eligibility requirements under Australian superannuation law. SMSFs can have up to six members, all of whom must be trustees or directors of the corporate trustee.' },
  { question: 'How much money do I need to start an SMSF?',             answer: 'While there is no strict minimum, it\'s generally recommended to have at least $200,000 in superannuation savings to make an SMSF cost-effective.' },
  { question: 'What are my responsibilities as an SMSF trustee?',        answer: 'SMSF trustees must ensure compliance with superannuation laws, lodge annual tax returns, maintain proper records, and act in the best interest of fund members.' },
  { question: 'Can I use my SMSF to buy property?',                     answer: 'Yes, an SMSF can purchase residential and commercial property under specific conditions, including limited recourse borrowing arrangements (LRBAs).' },
  { question: 'Do SMSFs have ongoing costs?',                            answer: 'Yes, there are setup and ongoing costs such as administration fees, accounting fees, audit costs, and investment-related expenses.' },
  { question: 'What happens to my SMSF when I retire?',                  answer: 'You can transition your SMSF into pension mode, where investment earnings become tax-free, providing you with a retirement income stream.' },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border last:border-0">
      <button
        className="w-full flex items-start justify-between gap-4 py-5 text-left group"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-medium text-foreground group-hover:text-primary transition-colors leading-snug">{question}</span>
        <span className="flex-shrink-0 mt-0.5 text-primary" aria-hidden="true">
          {open ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-muted-foreground leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const fadeUp = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, ease: 'easeOut' as const },
};

export default function ServiceSelfManagedSuperFunds() {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Self-Managed Super Funds Melbourne | Trew North Accounting"
        description="Expert SMSF setup and management from Trew North Accounting. We help Melbourne small business owners establish compliant, cost-effective self-managed super funds. Book a free consultation."
        canonical="/services/self-managed-super-funds"
        schema={[
          serviceSchema({
            name: 'Self-Managed Super Funds',
            description: 'Expert SMSF setup and management for Melbourne small business owners. We help establish compliant, cost-effective self-managed super funds with full compliance support.',
            url: '/services/self-managed-super-funds',
          }),
          faqSchema(faqs),
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Services', url: '/services' },
            { name: 'Self-Managed Super Funds', url: '/services/self-managed-super-funds' },
          ]),
        ]}
      />
      <Navbar />
      <ServiceBreadcrumb serviceName="Self-Managed Super Funds" />

      {/* ── HERO ── */}
      <section className="relative min-h-[72vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="h-full w-full lg:w-1/2 bg-secondary" />
        </div>
        <div
          className="absolute inset-0 z-0 hidden lg:block"
          style={{
            backgroundImage: `url(/hero-self-managed-super-funds.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            clipPath: 'inset(0 0 0 50%)',
          }}
        />
        <div className="absolute inset-0 z-10 hidden lg:block bg-gradient-to-r from-secondary via-secondary/85 to-transparent" style={{ width: '65%' }} />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-40 w-full">
          <div className="max-w-xl">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: 'easeOut' }}>
              <p className="text-primary font-medium tracking-widest text-sm uppercase mb-5">Our Services</p>
              <h1 className="font-serif font-semibold text-5xl sm:text-6xl lg:text-7xl leading-[1.08] text-white mb-6">
                Self-Managed<br />Super Funds
              </h1>
              <p className="text-lg text-white/75 leading-relaxed mb-10">
                Take control of your financial future with an SMSF. We specialise in helping Melbourne small business owners establish and manage their super funds efficiently — with full compliance and maximum flexibility.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-base btn-cta">
                  <Link href="/contact">
                    Schedule Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-base border-white/30 text-white bg-white/5 hover:bg-white/15">
                  <a href="tel:0411732966"><Phone className="mr-2 h-4 w-4" />0411 732 966</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── WHY SMSF ── */}
      <section className="py-20 sm:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div {...fadeUp}>
              <p className="text-primary font-medium tracking-widest text-sm uppercase mb-4">Why SMSF?</p>
              <h2 className="font-serif font-semibold text-4xl sm:text-5xl text-foreground mb-6">
                Why Choose a Self-Managed Super Fund?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                An SMSF gives you the power to control how your superannuation is invested and managed. Unlike traditional super funds, an SMSF allows you to make strategic investment decisions tailored to your financial goals.
              </p>
              <div className="space-y-4">
                {whyPoints.map((p) => {
                  const Icon = p.icon;
                  return (
                    <div key={p.title} className="flex gap-3">
                      <Icon className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-foreground">{p.title} — </span>
                        <span className="text-muted-foreground">{p.body}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
            <motion.div {...fadeUp}>
              <img
                src="https://tnaccounting.com.au/wp-content/uploads/2024/07/self-managed-super.jpg"
                alt="Self Managed Super Fund Melbourne"
                className="rounded-2xl w-full object-cover shadow-lg"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 5 BENEFITS ── */}
      <section className="py-20 sm:py-28 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-primary font-medium tracking-widest text-sm uppercase mb-4">Benefits</p>
            <h2 className="font-serif font-semibold text-4xl sm:text-5xl text-foreground mb-5">
              5 Benefits of a Self-Managed Super Fund
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="bg-background rounded-lg border border-border p-8"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-serif font-semibold text-xl mb-3 text-foreground">{b.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{b.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── AT TREW NORTH ── */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 {...fadeUp} className="font-serif font-semibold text-3xl text-white text-center mb-10">
            At Trew North
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {atTrewNorth.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-5"
                >
                  <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-serif font-semibold text-xl text-white mb-2">{f.title}</p>
                    <p className="text-white/60 leading-relaxed">{f.body}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 sm:py-28 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-12">
            <p className="text-primary font-medium tracking-widest text-sm uppercase mb-4">FAQ</p>
            <h2 className="font-serif font-semibold text-4xl sm:text-5xl text-foreground">
              Frequently Asked Questions
            </h2>
          </motion.div>
          <div className="bg-muted/30 rounded-2xl border border-border px-8 py-2">
            {faqs.map((f) => <FAQItem key={f.question} {...f} />)}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeUp}>
            <h2 className="font-serif font-semibold text-4xl sm:text-5xl text-foreground mb-6">
              Get started with a free consultation!
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Join hundreds of business owners who trust Trew North Accounting with their SMSF
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-base btn-cta">
                <Link href="/contact">
                  Schedule My Consultation <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base">
                <a href="tel:0411732966"><Phone className="mr-2 h-4 w-4" />0411 732 966</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
