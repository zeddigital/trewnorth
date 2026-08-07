import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'wouter';
import {
  Calculator,
  TrendingUp,
  TrendingDown,
  Wallet,
  FileText,
  Shield,
  Users,
  BookOpen,
  ReceiptText,
  UserCheck,
  BarChart3,
  Briefcase,
  Scale,
  Laptop,
  CheckCircle2,
  ArrowRight,
  Plus,
  Minus,
  Star,
  SlidersHorizontal,
  CalendarDays,
  Layers,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { SEOHead, faqSchema, breadcrumbSchema, serviceSchema } from '@/components/seo-head';
import { ServiceBreadcrumb } from '@/components/service-breadcrumb';
import { BookConsultation } from '@/components/book-consultation';

/* ─── Service mini-grid ─── */
const relatedServices = [
  { name: 'Accounting & Tax Planning', href: '/services/accounting-and-tax-planning', icon: Calculator },
  { name: 'Personal Tax & Finance', href: '/services/personal-tax-and-finance', icon: Wallet },
  { name: 'Small Business Planning', href: '/services/small-business-planning', icon: TrendingUp },
  { name: 'Monthly Bookkeeping', href: '/services/bookkeeping', icon: FileText },
  { name: 'Self-Managed Super Funds', href: '/services/self-managed-super-funds', icon: Shield },
  { name: 'Other Financial Services', href: '/contact', icon: Users },
];

/* ─── 8 Key Services ─── */
const keyServices = [
  {
    icon: BookOpen,
    title: 'Bookkeeping',
    points: [
      'Maintain accurate records of all financial transactions.',
      'Reconcile bank statements and manage accounts payable/receivable.',
    ],
  },
  {
    icon: ReceiptText,
    title: 'Tax Compliance and Planning',
    points: [
      'Prepare and lodge Business Activity Statements (BAS) and Income Tax Returns.',
      'Advise on tax obligations and opportunities for tax savings.',
    ],
  },
  {
    icon: UserCheck,
    title: 'Payroll Services',
    points: [
      'Process payroll for employees accurately and on time.',
      'Ensure compliance with superannuation obligations and STP reporting.',
    ],
  },
  {
    icon: BarChart3,
    title: 'Financial Reporting',
    points: [
      'Prepare financial statements and management reports.',
      'Provide insights into business performance and financial health.',
    ],
  },
  {
    icon: Briefcase,
    title: 'Business Advisory',
    points: [
      'Offer strategic advice on business structure, growth strategies, and financial planning.',
      'Assist with business plans, budgets, and financial forecasts.',
    ],
  },
  {
    icon: Calculator,
    title: 'GST and BAS Services',
    points: [
      'Manage Goods and Services Tax (GST) reporting and payments.',
      'Ensure accurate and timely submission of BAS.',
    ],
  },
  {
    icon: Scale,
    title: 'Compliance and Legal',
    points: [
      'Ensure compliance with Australian Taxation Office (ATO) regulations and other legal requirements.',
      'Keep up-to-date with changes in tax laws and accounting standards.',
    ],
  },
  {
    icon: Laptop,
    title: 'Software Setup and Training',
    points: [
      'Set up and customise accounting software like Xero, MYOB, or QuickBooks.',
      'Provide training for using accounting software efficiently.',
    ],
  },
];

/* ─── 5 Reasons ─── */
const reasons = [
  {
    title: 'Expertise in Small Business Accounting',
    body: 'At Trew North, we specialise in working with small businesses, understanding the unique challenges and needs of business owners. Our team has more than 20 years of experience in bookkeeping, tax compliance, financial reporting, and strategic financial planning, ensuring your business stays on track financially while you focus on growth.',
  },
  {
    title: 'Tailored Tax Planning & Compliance',
    body: 'We take the complexity out of tax planning and compliance. Our team stays up-to-date with the latest tax laws and ensures you take advantage of all available deductions and credits, minimising your tax liabilities. Whether it\'s BAS lodgement, GST, or annual tax returns, we handle it all so you stay compliant with ATO regulations.',
  },
  {
    title: 'Proactive Financial Advice',
    body: 'At Trew North we don\'t just crunch numbers — we provide proactive financial advice to help you make informed decisions. From cash flow management to budgeting and financial forecasting, we offer insights that help you manage your business efficiently and position it for future growth.',
  },
  {
    title: 'Personalised Service',
    body: 'We pride ourselves on offering personalised, hands-on service. Every business is different, so we take the time to understand your specific needs and goals. At Trew North, you get a dedicated accountant who works closely with you, providing tailored advice and support as your business evolves.',
  },
  {
    title: 'Transparent and Affordable Pricing',
    body: 'We offer competitive and transparent pricing, so there are no surprises when it comes to fees. Our service delivery is of the highest quality, which means we can deliver these services at an affordable rate — ensuring that even small businesses can access expert accounting without breaking the bank.',
  },
];

/* ─── SMSF Benefits ─── */
const smsfBenefits = [
  {
    title: 'Investment Control',
    icon: SlidersHorizontal,
    points: [
      'Full control over investment strategy and asset allocation.',
      'Ability to invest in a diverse range of assets, including real estate and private companies.',
    ],
  },
  {
    title: 'Tax Benefits',
    icon: ReceiptText,
    points: [
      'Potential for tax savings through effective tax management and planning.',
      'Concessional tax rate of 15% on income within the fund.',
    ],
  },
  {
    title: 'Estate Planning',
    icon: FileText,
    points: [
      'Flexibility in estate planning and control over the distribution of benefits.',
      'Ability to tailor the SMSF to meet specific family or personal circumstances.',
    ],
  },
  {
    title: 'Cost Efficiency',
    icon: TrendingDown,
    points: [
      'Potential for lower management fees compared to retail or industry super funds, especially for larger balances.',
      'Fixed costs spread over a larger fund balance can reduce per-member costs.',
    ],
  },
  {
    title: 'Retirement Flexibility',
    icon: CalendarDays,
    points: [
      'Plan your retirement income strategy well in advance.',
      'Tailor contributions and pension drawdowns to suit your goals.',
    ],
  },
  {
    title: 'Broader Investment Choice',
    icon: Layers,
    points: [
      'Access a wider range of investment classes than standard super funds.',
      'Invest in direct property, unlisted shares, collectibles, and more.',
    ],
  },
];

/* ─── FAQs ─── */
const faqs = [
  {
    question: 'How much does a small business accountant in Melbourne charge?',
    answer:
      'Costs vary based on the scope of services. We offer fixed-fee packages so you always know what you\'re paying — no surprise invoices. Typical small business packages range from bookkeeping and compliance through to full advisory services. Book a free consultation and we\'ll provide a clear, tailored quote.',
  },
  {
    question: 'Can a small business accountant help with my cash flow management?',
    answer:
      'Absolutely. Cash flow management is one of the most valuable things a good accountant does. We build forward-looking cash flow models, identify pressure points before they become crises, and help you make decisions about hiring, investment, and growth with real data behind them.',
  },
  {
    question: 'Can a small business accountant assist with my business growth?',
    answer:
      'Yes — and this is where a proactive accountant earns their keep. Beyond compliance, we help you understand your margins, plan for tax as you grow, structure your business efficiently, and identify opportunities that numbers alone might not reveal. Think of us as a financial co-pilot.',
  },
  {
    question: 'How do I choose the right small business accountant in Melbourne?',
    answer:
      'Look for an accountant who specialises in small businesses (not just large corporates), is CA or CPA qualified, takes a proactive rather than reactive approach, and communicates clearly without jargon. A good fit matters — book a free consultation to see if Trew North feels right for you.',
  },
  {
    question: 'What are the benefits of working with a local Melbourne accountant?',
    answer:
      'A local accountant understands the Victorian business environment, local market conditions, and Melbourne-specific considerations — from state taxes and payroll tax thresholds to local industry trends. You also get the benefit of being able to meet in person when it matters.',
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  const id = `faq-${question.toLowerCase().replace(/[^a-z0-9]+/g, '-').slice(0, 48)}`;
  return (
    <div className="border-b border-border last:border-0">
      <button
        className="w-full flex items-start justify-between gap-4 py-5 text-left group"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={id}
      >
        <span className="font-medium text-foreground group-hover:text-primary transition-colors leading-snug">
          {question}
        </span>
        <span className="flex-shrink-0 mt-0.5 text-primary" aria-hidden="true">
          {open ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={id}
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

/* ═══════════════════════════════════════════════════════ */
export default function SmallBusinessAccountant() {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Small Business Accountant Melbourne | Trew North Accounting"
        description="Dedicated small business accountant in Melbourne. Trew North Accounting helps with tax, bookkeeping, cash flow, structure, and strategic growth. Book a free consultation."
        canonical="/services/small-business-accountant"
        schema={[
          serviceSchema({
            name: 'Small Business Accountant',
            description: 'Dedicated small business accountant in Melbourne. Trew North Accounting helps with tax, bookkeeping, cash flow, structure, and strategic growth.',
            url: '/services/small-business-accountant',
          }),
          faqSchema(faqs),
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Services', url: '/services' },
            { name: 'Small Business Accountant', url: '/services/small-business-accountant' },
          ]),
        ]}
      />
      <Navbar />
      {/* ── HERO ── */}
      <section className="relative min-h-[75vh] flex items-center overflow-hidden">
        {/* Left dark panel */}
        <div className="absolute inset-0 z-0">
          <div className="h-full w-full lg:w-1/2 bg-secondary" />
        </div>
        {/* Right image panel */}
        {/* Hero image. Scoped to the right half rather than spanning the
            section and being clipped, so `cover` is measured against this
            box and the 1024px source is not upscaled to the full width. */}
        <div
          className="absolute inset-y-0 right-0 w-1/2 z-0 hidden lg:block"
          style={{
            backgroundImage: `url(${import.meta.env.BASE_URL}hero-compass.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 35%',
          }}
        />
        {/* Blend overlay at the midpoint */}
        <div className="absolute inset-0 z-10 hidden lg:block bg-gradient-to-r from-secondary/100 via-secondary/80 to-transparent" style={{ width: '65%' }} />

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-40 w-full">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
            >
              <ServiceBreadcrumb serviceName="Small Business Accountant" />
              <p className="text-primary font-medium tracking-widest text-sm uppercase mb-5">
                Melbourne Small Business
              </p>
              <h1 className="font-serif font-semibold text-5xl sm:text-6xl lg:text-7xl leading-[1.08] text-white mb-6">
                Small Business<br />Accountant
              </h1>
              <p className="text-lg text-white/75 leading-relaxed mb-10">
                If you're searching for a Small Business Accountant in Melbourne that possesses a blend of technical expertise, strong interpersonal skills, and a deep understanding of financial regulations and business practices — the search is over.
              </p>
              <div className="flex flex-col gap-6 sm:flex-row sm:gap-4">
                <BookConsultation><Button size="lg" className="text-base btn-cta">
                    Schedule Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button></BookConsultation>
                <Button asChild variant="outline" size="lg" className="text-base border-white/30 text-white bg-white/5 hover:bg-white/15 hover:border-white/50">
                  <Link href="/about">More About Us →</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── WELCOME / DARREN TREW ── */}
      <section className="py-20 sm:py-28 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-serif font-semibold text-4xl sm:text-5xl text-foreground mb-8">
              Welcome To Trew North Accounting
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Hi, my name is <strong className="text-foreground">Darren Trew</strong> and we believe that to be a great accountant is much more than just balancing the books. They should be proactive, detail-oriented, and committed to their clients' success, continuously learning and adapting to provide the best possible service. They act with integrity and build strong, trust-based relationships with their clients, helping them navigate financial complexities and achieve their goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── HOW CAN WE HELP YOU ── */}
      <section className="py-16 sm:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif font-semibold text-3xl sm:text-4xl text-foreground text-center mb-12"
          >
            How can we help you?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
            {relatedServices.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                >
                  <Link href={service.href}>
                    <div className="group flex items-center gap-4 bg-background border border-border rounded-xl p-5 hover:border-primary/40 hover:shadow-md transition-all duration-300 cursor-pointer h-full">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <span className="font-medium text-foreground text-sm leading-snug">{service.name}</span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SMALL BUSINESS ACCOUNTANT IN MELBOURNE ── */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="font-serif font-semibold text-4xl sm:text-5xl text-foreground mb-5">
              Small Business Accountant in Melbourne
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Hiring a skilled accountant can be a significant asset for your small business, helping you manage finances effectively and supporting your business growth. Here are the key services and benefits a small business accountant in Melbourne can provide.
            </p>
          </motion.div>

          {/* 8 Key Services — card grid matching homepage style */}
          <div>
            <h3 className="font-serif font-semibold text-3xl sm:text-4xl text-foreground mb-2 text-center">
              8 Key Services For Small Business
            </h3>
            <div className="w-16 h-0.5 bg-primary mx-auto mb-14" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {keyServices.map((svc, i) => {
                const Icon = svc.icon;
                return (
                  <motion.div
                    key={svc.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.55, delay: (i % 4) * 0.07 }}
                  >
                    <div className="group h-full bg-card border border-card-border rounded-xl p-7 hover:shadow-lg transition-all duration-300 hover:border-primary/30">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h4 className="font-serif font-semibold text-xl text-foreground mb-4 leading-snug">
                        {svc.title}
                      </h4>
                      <ul className="space-y-2.5">
                        {svc.points.map((p, pi) => (
                          <li key={pi} className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
                            <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── MID-PAGE CTA ── */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif font-semibold text-4xl sm:text-5xl text-white mb-3">
                Let's get down to business!
              </h2>
              <p className="text-secondary-foreground/75 text-lg">
                Join hundreds of business owners who trust Trew North Accounting.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex-shrink-0"
            >
              <BookConsultation><Button size="lg" className="text-base btn-cta whitespace-nowrap">
                  Schedule My First Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button></BookConsultation>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── TOP 5 REASONS ── */}
      <section className="py-20 sm:py-28 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="font-serif font-semibold text-4xl sm:text-5xl text-foreground mb-5">
              Top 5 Reasons to Hire Trew North as your Small Business Accountant
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Hiring Trew North Accounting gives your business access to experienced professionals who are dedicated to helping you succeed, providing reliable financial management and advice at every stage of your journey.
            </p>
          </motion.div>

          <div className="divide-y divide-border/60">
            {reasons.map((reason, i) => {
              const num = String(i + 1).padStart(2, '0');
              return (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.65, delay: 0.05 }}
                  className="grid grid-cols-[auto_1fr] gap-8 sm:gap-16 py-12 items-start group"
                >
                  {/* Oversized number */}
                  <div className="w-20 sm:w-32 pt-1 flex-shrink-0">
                    <span
                      className="font-serif font-semibold leading-none select-none text-primary/20 group-hover:text-primary/40 transition-colors duration-500"
                      style={{ fontSize: 'clamp(4rem, 7vw, 6.5rem)' }}
                    >
                      {num}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="py-2">
                    <h3 className="font-serif font-semibold text-2xl sm:text-3xl lg:text-4xl text-foreground mb-4 leading-tight">
                      {reason.title}
                    </h3>
                    <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                      {reason.body}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SMSF SECTION ── */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="font-serif font-semibold text-4xl sm:text-5xl text-foreground mb-5">
              Small Business Accountant &amp; Self-Managed Super Funds
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Setting up and managing an SMSF requires careful consideration and a clear understanding of the responsibilities involved. Seeking professional advice can help ensure the fund is managed effectively and in compliance with all legal requirements.
            </p>
          </motion.div>

          <div className="mb-10">
            <h3 className="font-serif font-semibold text-2xl sm:text-3xl text-foreground mb-8 text-center">
              Benefits of an SMSF
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {smsfBenefits.map((benefit, i) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.55, delay: (i % 3) * 0.08 }}
                >
                  <div className="group h-full bg-card border border-card-border rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:border-primary/30">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                      {(() => { const BenefitIcon = benefit.icon; return <BenefitIcon className="h-6 w-6 text-primary" />; })()}
                    </div>
                    <h4 className="font-serif font-semibold text-xl text-foreground mb-4 leading-snug">
                      {benefit.title}
                    </h4>
                    <ul className="space-y-2.5">
                      {benefit.points.map((p, pi) => (
                        <li key={pi} className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
                          <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <Button asChild size="lg" variant="outline" className="text-base">
              <Link href="/services/self-managed-super-funds">
                Learn More About Our SMSF Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ── FAQs ── */}
      <section className="py-20 sm:py-28 bg-muted/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-serif font-semibold text-4xl sm:text-5xl text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-lg">
              Common questions from Melbourne small business owners.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-background border border-border rounded-xl px-8 divide-y divide-border"
          >
            {faqs.map((faq) => (
              <FAQItem key={faq.question} {...faq} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-20 sm:py-28 bg-secondary text-secondary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif font-semibold text-4xl sm:text-5xl mb-6">
              Ready to find clarity?
            </h2>
            <p className="text-lg text-secondary-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              Join hundreds of business owners who trust Trew North Accounting. Book your free consultation and let's talk through what's possible.
            </p>
            <BookConsultation><Button size="lg" className="text-base btn-cta">
                Schedule My First Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button></BookConsultation>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
