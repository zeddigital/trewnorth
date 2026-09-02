import { motion } from 'framer-motion';
import { Link, useParams } from 'wouter';
import {
  Calculator,
  TrendingUp,
  Wallet,
  FileText,
  Shield,
  Users,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { LucideIcon } from 'lucide-react';
import { SEOHead, breadcrumbSchema, serviceSchema } from '@/components/seo-head';
import { BookConsultation } from '@/components/book-consultation';

interface ServiceData {
  icon: LucideIcon;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  extras: { heading: string; body: string }[];
}

const services: Record<string, ServiceData> = {
  'accounting-and-tax-planning': {
    icon: Calculator,
    title: 'Accounting & Tax Planning',
    tagline: 'Year-round strategy, not just EOFY scrambles.',
    description:
      'Most accountants react at tax time. We plan ahead. Our accounting and tax planning service is built around keeping your business compliant while actively reducing your tax liability through smart, proactive strategies.',
    features: [
      'Year-round proactive tax planning',
      'Tax return preparation and lodgement',
      'ATO correspondence and audit support',
      'Tax minimisation strategies',
      'Business restructuring advice',
      'BAS preparation and lodgement',
      'PAYG and GST reconciliation',
      'ATO payment plan assistance',
    ],
    extras: [
      {
        heading: 'Proactive, not reactive',
        body: 'We review your tax position throughout the year, not just in June, so there are no surprises and every opportunity to save is captured.',
      },
      {
        heading: 'ATO audit support',
        body: 'If the ATO comes knocking, we handle all correspondence and representation on your behalf, so you can stay focused on running your business.',
      },
      {
        heading: 'Restructuring advice',
        body: 'As your business grows, your structure may need to evolve. We advise on the right entity type, trust structures, and family arrangements to optimise your tax position.',
      },
    ],
  },
  'small-business-planning': {
    icon: TrendingUp,
    title: 'Small Business Planning',
    tagline: 'A clear path forward for ambitious owners.',
    description:
      'Numbers tell a story, but only if someone is reading them strategically. Our small business planning service gives Melbourne business owners a dedicated advisory partner to help them grow with clarity, make better decisions, and plan for the future.',
    features: [
      'Strategic planning sessions',
      'Cash flow forecasting and modelling',
      'Business structure and entity advice',
      'Growth and expansion strategy',
      'KPI tracking and reporting dashboards',
      'Budgeting and financial targets',
      'Succession and exit planning',
      'Profit improvement analysis',
    ],
    extras: [
      {
        heading: 'Your numbers, your roadmap',
        body: 'We translate your financial data into a clear picture of where you are, where you\'re going, and what decisions will get you there faster.',
      },
      {
        heading: 'Cash flow is king',
        body: 'We build forward-looking cash flow models so you can plan hiring, capital investment, and growth initiatives with confidence, not guesswork.',
      },
      {
        heading: 'Exit and succession',
        body: 'Whether you plan to sell in 2 years or 20, we help structure the business to maximise its value and make the transition smooth.',
      },
    ],
  },
  'personal-tax-and-finance': {
    icon: Wallet,
    title: 'Personal Tax & Finance',
    tagline: 'Get more back. Keep more of what you earn.',
    description:
      'Personal tax is more than a form, it\'s an opportunity. From investment properties to share portfolios, we make sure your individual tax return captures every legal deduction while fitting into your broader financial picture.',
    features: [
      'Individual tax return preparation',
      'Investment property income and expenses',
      'Capital gains tax advice and planning',
      'Salary packaging and novated leases',
      'Rental property depreciation schedules',
      'Share portfolio and dividend reporting',
      'Foreign income and assets',
      'Personal financial planning referrals',
    ],
    extras: [
      {
        heading: 'Maximise your refund',
        body: 'We take the time to understand your full financial situation, not just your payslip, so no deduction is overlooked.',
      },
      {
        heading: 'Investment property specialists',
        body: 'From negative gearing to depreciation schedules, we handle the complexity of property investment tax so you can focus on growing your portfolio.',
      },
      {
        heading: 'Capital gains planning',
        body: 'Timing a sale, holding an asset, or splitting income. CGT planning can make a significant difference. We help you plan before you transact.',
      },
    ],
  },
  'bookkeeping': {
    icon: FileText,
    title: 'Bookkeeping',
    tagline: 'Clean books. Clear decisions. No stress.',
    description:
      'Accurate, timely bookkeeping is the foundation of every healthy business. We keep your records in order, your bank reconciled, and your reporting up-to-date, so you always know exactly where your business stands.',
    features: [
      'Full bookkeeping and data entry',
      'Accounts payable and receivable',
      'Bank and credit card reconciliation',
      'Xero and MYOB setup and training',
      'Payroll processing and STP compliance',
      'Monthly financial reporting',
      'Debtor management support',
      'BAS preparation from clean books',
    ],
    extras: [
      {
        heading: 'Cloud-based and real-time',
        body: 'We work in Xero and MYOB, giving you live visibility into your financials from anywhere. No more waiting until year-end to see how you\'re tracking.',
      },
      {
        heading: 'Payroll handled properly',
        body: 'From Single Touch Payroll compliance to superannuation obligations, we make sure your team gets paid correctly and the ATO stays happy.',
      },
      {
        heading: 'Foundation for good decisions',
        body: 'Clean books mean accurate reports, which mean better decisions. Bookkeeping isn\'t just a compliance task, it\'s the engine of good financial management.',
      },
    ],
  },
  'self-managed-super-funds': {
    icon: Shield,
    title: 'Self-Managed Super Funds',
    tagline: 'Build long-term wealth on your own terms.',
    description:
      'A self-managed super fund gives you control over your retirement savings and investment strategy. Our SMSF specialists handle the setup, compliance, and annual obligations, so you can focus on the investment decisions that matter.',
    features: [
      'SMSF establishment and ATO registration',
      'Annual financial statements and audit',
      'Tax return preparation and lodgement',
      'Investment strategy documentation',
      'Pension phase planning and setup',
      'Contribution strategy and limits advice',
      'SMSF borrowing (LRBA) advice',
      'SMSF wind-up and rollover',
    ],
    extras: [
      {
        heading: 'Full compliance, handled',
        body: 'SMSF compliance is demanding. We manage every annual obligation, from audit coordination to ATO lodgement, so your fund stays in good standing.',
      },
      {
        heading: 'Investment strategy',
        body: 'We help you document and review your investment strategy to ensure it meets the sole purpose test and aligns with your retirement goals.',
      },
      {
        heading: 'Pension phase expertise',
        body: 'Transitioning to pension phase is one of the most tax-effective moves available. We plan and execute it properly to maximise your retirement income.',
      },
    ],
  },
  'small-business-accountant': {
    icon: Users,
    title: 'Small Business Accountant',
    tagline: 'A true partner, not just a once-a-year call.',
    description:
      'Trew North was built for small business owners. We act as a genuine accounting partner (across tax, bookkeeping, compliance, and strategy) so you have one trusted team that knows your business inside and out.',
    features: [
      'Dedicated account manager',
      'Tax planning and lodgement',
      'BAS and GST compliance',
      'Bookkeeping and payroll',
      'Cloud accounting setup (Xero/MYOB)',
      'Year-end financial statements',
      'Business advisory and strategy',
      'Unlimited phone and email support',
    ],
    extras: [
      {
        heading: 'One team, everything covered',
        body: 'No more juggling a separate bookkeeper, tax agent, and advisor. We handle it all, and each piece informs the others, giving you a cohesive, complete picture.',
      },
      {
        heading: 'Proactive by default',
        body: 'We don\'t wait for you to call us. We reach out with reminders, opportunities, and recommendations before they become urgent.',
      },
      {
        heading: 'Grows with your business',
        body: 'Whether you\'re a sole trader, partnership, or growing a team, our service scales with you, and we\'re always thinking ahead to the next stage.',
      },
    ],
  },
};

const serviceOrder = [
  'accounting-and-tax-planning',
  'small-business-planning',
  'personal-tax-and-finance',
  'bookkeeping',
  'self-managed-super-funds',
  'small-business-accountant',
];

export default function ServiceDetail() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug ?? '';
  const service = services[slug];

  if (!service) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <section className="pt-40 pb-20 text-center">
          <h1 className="font-serif text-4xl text-foreground mb-4">Service not found</h1>
          <Button asChild variant="outline">
            <Link href="/services"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Services</Link>
          </Button>
        </section>
        <Footer />
      </div>
    );
  }

  const Icon = service.icon;
  const currentIndex = serviceOrder.indexOf(slug);
  const prevSlug = currentIndex > 0 ? serviceOrder[currentIndex - 1] : null;
  const nextSlug = currentIndex < serviceOrder.length - 1 ? serviceOrder[currentIndex + 1] : null;

  return (
    <div className="min-h-screen">
      <SEOHead
        title={`${service.title} Melbourne | Trew North Accounting`}
        description={service.description}
        canonical={`/services/${slug}`}
        schema={[
          serviceSchema({
            name: service.title,
            description: service.description,
            url: `/services/${slug}`,
          }),
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Services', url: '/services' },
            { name: service.title, url: `/services/${slug}` },
          ]),
        ]}
      />
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link href="/services" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
              <ArrowLeft className="h-4 w-4" /> All Services
            </Link>
            <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <Icon className="h-8 w-8 text-primary" />
            </div>
            <h1 className="font-serif font-semibold text-5xl sm:text-6xl lg:text-7xl leading-[1.1] text-foreground mb-4">
              {service.title}
            </h1>
            <p className="text-xl sm:text-2xl text-primary font-medium mb-6">{service.tagline}</p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              {service.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* What's included */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="font-serif font-semibold text-3xl sm:text-4xl text-foreground mb-8">
                What's included
              </h2>
              <ul className="space-y-4">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Deep-dives */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="space-y-8"
            >
              {service.extras.map((extra, i) => (
                <div key={i} className="bg-card border border-card-border rounded-lg p-8">
                  <h3 className="font-serif font-semibold text-xl text-foreground mb-3">{extra.heading}</h3>
                  <p className="text-muted-foreground leading-relaxed">{extra.body}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Prev / Next navigation */}
      {(prevSlug || nextSlug) && (
        <section className="py-12 border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between gap-4">
            {prevSlug ? (
              <Link href={`/services/${prevSlug}`} className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
                <span className="text-sm font-medium">{services[prevSlug].title}</span>
              </Link>
            ) : <div />}
            {nextSlug ? (
              <Link href={`/services/${nextSlug}`} className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                <span className="text-sm font-medium">{services[nextSlug].title}</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            ) : <div />}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 sm:py-28 bg-secondary text-secondary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif font-semibold text-4xl sm:text-5xl mb-6">
              Ready to get started?
            </h2>
            <p className="text-lg text-secondary-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed text-balance">
              Book a free consultation and let's talk through your situation. No obligation, no jargon, just a straight conversation about what's possible.
            </p>
            <BookConsultation><Button size="lg" className="text-base btn-cta">
                Book a Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button></BookConsultation>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
