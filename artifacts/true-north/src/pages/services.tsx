import { motion } from 'framer-motion';
import { Link } from 'wouter';
import {
  Calculator,
  TrendingUp,
  Wallet,
  FileText,
  Shield,
  Users,
  ArrowRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { SEOHead, breadcrumbSchema } from '@/components/seo-head';

const services = [
  {
    slug: 'accounting-and-tax-planning',
    icon: Calculator,
    title: 'Accounting & Tax Planning',
    description:
      'Strategic, year-round tax planning that minimises your liability while keeping you fully compliant with ATO requirements. We plan ahead — not just at EOFY.',
    highlights: [
      'Year-round proactive tax planning',
      'Tax return preparation and lodgement',
      'BAS lodgement and GST compliance',
      'ATO audit support and representation',
    ],
  },
  {
    slug: 'small-business-planning',
    icon: TrendingUp,
    title: 'Small Business Planning',
    description:
      'Growth-focused advisory for Melbourne small business owners ready to scale with clarity. We translate your numbers into a roadmap and help you execute it.',
    highlights: [
      'Strategic planning sessions',
      'Cash flow forecasting and modelling',
      'KPI tracking and dashboards',
      'Succession and exit planning',
    ],
  },
  {
    slug: 'personal-tax-and-finance',
    icon: Wallet,
    title: 'Personal Tax & Finance',
    description:
      'Personal tax returns done right — capturing every deduction from investment properties, share portfolios, and beyond. More than a form; an opportunity.',
    highlights: [
      'Individual tax return preparation',
      'Investment property income and expenses',
      'Capital gains tax advice',
      'Salary packaging and novated leases',
    ],
  },
  {
    slug: 'bookkeeping',
    icon: FileText,
    title: 'Bookkeeping',
    description:
      'Accurate, real-time bookkeeping that keeps your records clean and your decisions data-driven. We work in Xero and MYOB, giving you live financial visibility.',
    highlights: [
      'Full bookkeeping and reconciliation',
      'Accounts payable and receivable',
      'Payroll and STP compliance',
      'Monthly financial reporting',
    ],
  },
  {
    slug: 'self-managed-super-funds',
    icon: Shield,
    title: 'Self-Managed Super Funds',
    description:
      'SMSF setup, annual compliance, and strategic investment advice to build long-term wealth on your own terms. We handle every obligation so you can focus on the strategy.',
    highlights: [
      'SMSF establishment and ATO registration',
      'Annual financial statements and audit',
      'Investment strategy documentation',
      'Pension phase planning',
    ],
  },
  {
    slug: 'small-business-accountant',
    icon: Users,
    title: 'Small Business Accountant',
    description:
      'A dedicated accounting partner for your business — covering tax, bookkeeping, compliance, and strategy. One team that knows your business inside and out.',
    highlights: [
      'Dedicated account manager',
      'Tax, BAS, and compliance',
      'Bookkeeping and payroll',
      'Unlimited phone and email support',
    ],
  },
];

export default function Services() {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Accounting & Tax Services Melbourne | Trew North Accounting"
        description="Explore Trew North Accounting's services — tax planning, bookkeeping, SMSF, personal tax, and small business strategy for Melbourne businesses."
        canonical="/services"
        schema={breadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
        ])}
      />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="font-serif font-semibold text-5xl sm:text-6xl lg:text-7xl leading-[1.1] text-foreground mb-6">
              Services built for growing businesses
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Comprehensive accounting, tax, and advisory services designed to help Melbourne small businesses thrive — not just comply.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, delay: (index % 2) * 0.1 }}
                  data-testid={`service-card-${index}`}
                >
                  <Link href={`/services/${service.slug}`}>
                    <div className="group h-full bg-card border border-card-border rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:border-primary/30 cursor-pointer">
                      <div className="flex items-start gap-5 mb-5">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h2 className="font-serif font-semibold text-2xl text-foreground group-hover:text-primary transition-colors leading-tight mb-1">
                            {service.title}
                          </h2>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                      <ul className="space-y-2 mb-6">
                        {service.highlights.map((h, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                            {h}
                          </li>
                        ))}
                      </ul>
                      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary group-hover:gap-2.5 transition-all">
                        Learn more <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-28 bg-secondary text-secondary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif font-semibold text-4xl sm:text-5xl mb-6">
              Let's discuss your needs
            </h2>
            <p className="text-lg text-secondary-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              Every business is different. Book a free consultation and we'll build a service package that fits your exact situation.
            </p>
            <Button asChild size="lg" className="text-base btn-cta" data-testid="button-services-cta">
              <Link href="/contact">
                Book a Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
