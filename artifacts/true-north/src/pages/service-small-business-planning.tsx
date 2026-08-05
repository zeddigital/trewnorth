import { motion } from 'framer-motion';
import { Link } from 'wouter';
import {
  TrendingUp, Cpu, DollarSign, Target, BarChart3, Shield,
  Users, ArrowRight, CheckCircle2, Phone,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { SEOHead, breadcrumbSchema, serviceSchema } from '@/components/seo-head';
import { ServiceBreadcrumb } from '@/components/service-breadcrumb';

const features = [
  { icon: TrendingUp,  title: 'Experienced Specialists',  body: 'Over 20 years in small business. We have seen every challenge — and we help you navigate them with confidence.' },
  { icon: Cpu,         title: 'Modern Software',          body: 'We use the latest cloud-based accounting software to give you real-time visibility over your business performance.' },
  { icon: DollarSign,  title: 'Fair, Fixed Prices',       body: 'Set up on a monthly fixed fee so there are no unexpected compliance costs. Peace of mind, guaranteed.' },
];

const keys = [
  {
    title: 'Clear Vision and Goals',
    body: 'Start with a clear vision for your business and set specific, measurable goals. Your vision should outline where you want your business to be in the future, while your goals provide a roadmap to get there — from increasing sales to achieving financial independence.',
  },
  {
    title: 'Comprehensive Business Plan',
    body: "A well-structured business plan covers your value proposition, target market, competitive analysis, marketing strategy, operations plan, and financial projections. It's your guide for daily operations and a tool for securing funding. We help you keep it current as your business grows.",
  },
  {
    title: 'Financial Management and Budgeting',
    body: "Effective financial management means setting a realistic budget, forecasting cash flow, and managing expenses. We track all income and outgoings, review your financial statements for profitability, plan for taxes, and identify growth opportunities — helping you avoid potential financial pitfalls.",
  },
  {
    title: 'Marketing and Sales Strategy',
    body: "A strong marketing and sales strategy is essential for attracting and retaining customers. We help you understand your target audience, develop a compelling value proposition, and identify the mix of channels that work best for your business.",
  },
  {
    title: 'Adaptability and Risk Management',
    body: "The ability to adapt to changing market conditions is crucial for long-term success. We monitor industry trends, identify risks — economic downturns, regulatory changes, supply chain issues — and help you build contingency plans to keep your business resilient.",
  },
];

const steps = [
  'Answer a few questions about your business',
  'Choose the right combination of services',
  "We'll handle all the setup and paperwork",
];

const fadeUp = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, ease: 'easeOut' as const },
};

export default function ServiceSmallBusinessPlanning() {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Small Business Planning Melbourne | Trew North Accounting"
        description="Strategic small business planning from Trew North Accounting. Quarterly cash flow, business plans, and 12–24 month forecasting for Melbourne small businesses. Book a free consultation."
        canonical="/services/small-business-planning"
        schema={[
          serviceSchema({
            name: 'Small Business Planning',
            description: 'Strategic small business planning for Melbourne businesses. Quarterly cash flow statements, business plans, and 12–24 month forecasting to help your business prosper.',
            url: '/services/small-business-planning',
          }),
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Services', url: '/services' },
            { name: 'Small Business Planning', url: '/services/small-business-planning' },
          ]),
        ]}
      />
      <Navbar />
      <ServiceBreadcrumb serviceName="Small Business Planning" />

      {/* ── HERO ── */}
      <section className="relative min-h-[72vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="h-full w-full lg:w-1/2 bg-secondary" />
        </div>
        <div
          className="absolute inset-0 z-0 hidden lg:block"
          style={{
            backgroundImage: `url(/hero-small-business-planning.jpg)`,
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
                Small Business<br />Planning
              </h1>
              <p className="text-lg text-white/75 leading-relaxed mb-10">
                Every small business needs help along the way. The old saying is true — "If you fail to plan then you plan to fail." We prepare quarterly cash flow statements, strategic plans, and 12–24 month forecasts to help your business prosper.
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

      {/* ── 5 KEYS ── */}
      <section className="py-20 sm:py-28 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <p className="text-primary font-medium tracking-widest text-sm uppercase mb-4">Framework</p>
            <h2 className="font-serif font-semibold text-4xl sm:text-5xl text-foreground mb-5">
              5 Keys To Small Business Planning
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Effective small business planning is essential for long-term success. Here are the five key elements we focus on with every client.
            </p>
          </motion.div>
          <div className="space-y-8">
            {keys.map((k, i) => (
              <motion.div
                key={k.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="flex gap-6"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg mb-2">{k.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{k.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '500+', label: 'Happy Clients' },
              { value: '20+',  label: 'Years Experience' },
              { value: '100%', label: 'Satisfaction Rate' },
              { value: '$0',   label: 'Surprise Fees' },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-serif font-semibold text-4xl text-primary mb-1">{s.value}</p>
                <p className="text-white/70 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GETTING STARTED ── */}
      <section className="py-20 sm:py-28 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeUp}>
            <p className="text-primary font-medium tracking-widest text-sm uppercase mb-4">Get Started</p>
            <h2 className="font-serif font-semibold text-4xl sm:text-5xl text-foreground mb-6">
              Getting started is quick & easy
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              Join hundreds of business owners who trust Trew North Accounting
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {steps.map((step, i) => (
                <div key={step} className="flex flex-col items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                    {i + 1}
                  </div>
                  <p className="text-muted-foreground text-sm text-center">{step}</p>
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
