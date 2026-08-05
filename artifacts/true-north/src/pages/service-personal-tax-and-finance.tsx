import { motion } from 'framer-motion';
import { Link } from 'wouter';
import {
  MessageCircle, UserCheck, Layers, ArrowRight, Phone,
  ReceiptText, PiggyBank, CreditCard, CheckCircle2,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { SEOHead, breadcrumbSchema, serviceSchema } from '@/components/seo-head';
import { ServiceBreadcrumb } from '@/components/service-breadcrumb';

const features = [
  { icon: MessageCircle, title: 'Unlimited Support',    body: "When you need us we're here. You're not alone — call us anytime for personal tax advice and guidance." },
  { icon: UserCheck,     title: 'Dedicated Accountant', body: 'We speak in plain language with a clear process and helpful resources to make tax as painless as possible.' },
  { icon: Layers,        title: 'All in One Place',     body: 'Combining bookkeeping, accounting, and personal taxes increases efficiency and simplifies your financial life.' },
];

const keys = [
  {
    icon: ReceiptText,
    title: 'Understanding Income Tax and Tax Returns',
    body: "Australia operates on a progressive tax system — the more you earn, the higher the percentage of tax you pay. It's crucial to understand your tax obligations, what bracket you fall into, and the importance of lodging your tax return accurately and on time. We ensure you claim all eligible deductions: work-related expenses, investment loan interest, and charitable donations — all of which can significantly reduce your taxable income.",
    checklist: [
      'Work-related expenses',
      'Interest on investment loans',
      'Charitable donations',
    ],
  },
  {
    icon: PiggyBank,
    title: 'Superannuation and Retirement Planning',
    body: "Superannuation is a critical aspect of personal finance in Australia. Understanding how your super works — including concessional and non-concessional contributions, investment options, and fees — is essential for building a secure retirement. Making additional voluntary contributions can offer significant tax advantages. We help you understand when and how to access your super and the tax implications of doing so.",
    checklist: [],
  },
  {
    icon: CreditCard,
    title: 'Managing Debt and Credit Wisely',
    body: "Debt management is a crucial aspect of personal finance. Whether it's a mortgage, credit card, or personal loan — understanding the interest rates, repayment terms, and potential tax implications is important. In Australia, interest on a home loan for your primary residence is not tax-deductible, but interest on loans for investment properties or business purposes may be. We help you manage debt wisely and consider consolidation options where appropriate.",
    checklist: [],
  },
];

const steps = [
  'Schedule your consultation',
  'Discuss your personal tax situation',
  'We set it all up for you',
];

const fadeUp = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, ease: 'easeOut' as const },
};

export default function ServicePersonalTaxAndFinance() {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Personal Tax & Finance Melbourne | Trew North Accounting"
        description="Personal tax returns and financial advice from Trew North Accounting. We help Melbourne individuals maximise deductions, manage super, and achieve financial goals. Book a free consultation."
        canonical="/services/personal-tax-and-finance"
        schema={[
          serviceSchema({
            name: 'Personal Tax and Finance',
            description: 'Personal tax returns and financial advice for Melbourne individuals. We maximise deductions, manage super, and help you achieve your financial goals.',
            url: '/services/personal-tax-and-finance',
          }),
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Services', url: '/services' },
            { name: 'Personal Tax and Finance', url: '/services/personal-tax-and-finance' },
          ]),
        ]}
      />
      <Navbar />
      {/* ── HERO ── */}
      <section className="relative min-h-[72vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="h-full w-full lg:w-1/2 bg-secondary" />
        </div>
        <div
          className="absolute inset-0 z-0 hidden lg:block"
          style={{
            backgroundImage: `url(/hero-personal-tax-finance.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            clipPath: 'inset(0 0 0 50%)',
          }}
        />
        <div className="absolute inset-0 z-10 hidden lg:block bg-gradient-to-r from-secondary via-secondary/85 to-transparent" style={{ width: '65%' }} />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-40 w-full">
          <div className="max-w-xl">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: 'easeOut' }}>
              <ServiceBreadcrumb serviceName="Personal Tax and Finance" />
              <p className="text-primary font-medium tracking-widest text-sm uppercase mb-5">Our Services</p>
              <h1 className="font-serif font-semibold text-5xl sm:text-6xl lg:text-7xl leading-[1.08] text-white mb-6">
                Personal Tax<br />& Finance
              </h1>
              <p className="text-lg text-white/75 leading-relaxed mb-10">
                We make personal tax and finance easy. With experienced accountants and a clear, jargon-free process — we handle your tax return, super, and financial planning so you don't have to.
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

      {/* ── 3 KEYS ── */}
      <section className="py-20 sm:py-28 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <p className="text-primary font-medium tracking-widest text-sm uppercase mb-4">What Matters Most</p>
            <h2 className="font-serif font-semibold text-4xl sm:text-5xl text-foreground mb-5">
              3 Keys to Personal Tax & Finance
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When managing personal tax and finance in Australia, here are the three most important things to keep in mind.
            </p>
          </motion.div>
          <div className="space-y-12">
            {keys.map((k, i) => {
              const Icon = k.icon;
              return (
                <motion.div
                  key={k.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg mb-3"><span className="text-primary">{i + 1}.</span> {k.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">{k.body}</p>
                    {k.checklist.length > 0 && (
                      <ul className="space-y-1">
                        {k.checklist.map((item) => (
                          <li key={item} className="flex items-center gap-2 text-muted-foreground text-sm">
                            <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 {...fadeUp} className="font-serif font-semibold text-3xl text-foreground text-center mb-10">
            Personal Tax Services We Cover
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'Personal Tax Returns', 'Investment Property Tax', 'Capital Gains Tax',
              'Salary Packaging', 'Superannuation Advice', 'Retirement Planning',
              'Deductions Maximised', 'Wealth Management',
            ].map((s, i) => (
              <motion.div
                key={s}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-background rounded-xl border border-border p-4 text-center"
              >
                <CheckCircle2 className="h-5 w-5 text-primary mx-auto mb-2" />
                <p className="font-medium text-foreground text-sm">{s}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 sm:py-28 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeUp}>
            <h2 className="font-serif font-semibold text-4xl sm:text-5xl text-white mb-6">
              Get started with a free consultation!
            </h2>
            <p className="text-lg text-white/70 mb-10">
              Join hundreds of business owners who trust Trew North Accounting
            </p>
            <div className="flex flex-col md:flex-row gap-5 justify-center mb-10">
              {steps.map((s, i) => (
                <div key={s} className="flex items-center gap-3 text-white/80 text-sm">
                  <span className="w-9 h-9 rounded-full bg-cta flex items-center justify-center text-sm font-bold text-secondary flex-shrink-0">{i + 1}</span>
                  {s}
                </div>
              ))}
            </div>
            <Button asChild size="lg" className="text-base btn-cta">
              <Link href="/contact">
                Schedule My First Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
