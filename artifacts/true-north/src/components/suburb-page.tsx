import { motion } from 'framer-motion';
import { Link } from 'wouter';
import {
  Calculator, TrendingUp, Wallet, FileText, Shield, Users,
  BookOpen, ReceiptText, UserCheck, BarChart3, Briefcase,
  Laptop, Scale, SlidersHorizontal, CalendarDays, Layers,
  MapPin, ArrowRight, CheckCircle2, Phone,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { SEOHead, breadcrumbSchema, serviceSchema, localBusinessSchemaForSuburb } from '@/components/seo-head';
import { SuburbBreadcrumb } from '@/components/suburb-breadcrumb';

export interface SuburbPageProps {
  suburb: string;           // e.g. "Mordialloc"
  slug: string;             // e.g. "mordialloc"
  seoTitle: string;
  seoDescription: string;
  personalTaxImage: string; // confirmed CDN URL
  smsfImage: string;        // confirmed CDN URL
  heroImage?: string;       // optional — hero right-pane photo
  smallBizImage?: string;   // optional — small business section photo
}

const services = [
  { name: 'Small Business Planning',    href: '/services/small-business-planning',     icon: TrendingUp },
  { name: 'Accounting & Tax Planning',  href: '/services/accounting-and-tax-planning', icon: Calculator },
  { name: 'Monthly Bookkeeping',        href: '/services/bookkeeping',                 icon: FileText },
  { name: 'Self-Managed Super Funds',   href: '/services/self-managed-super-funds',    icon: Shield },
  { name: 'Personal Tax & Finance',     href: '/services/personal-tax-and-finance',    icon: Wallet },
  { name: 'Other Financial Services',   href: '/contact',                              icon: Users },
];

const personalTaxServices = [
  'Tax Return Preparation and Filing',
  'Tax Planning and Advice',
  'Compliance and Reporting',
  'Audit Assistance',
  'Investment and Retirement Planning',
  'Capital Gains Tax (CGT) Management',
  'Wealth Management',
  'Salary Packaging and Benefits',
];

const personalTaxBenefits = [
  {
    title: 'Expert Knowledge',
    body: 'Benefit from professional expertise in tax laws and regulations. Get accurate and up-to-date information on tax matters.',
  },
  {
    title: 'Time-Saving',
    body: 'Save time by outsourcing complex and time-consuming tax tasks. Avoid the hassle of dealing with tax forms and calculations.',
  },
  {
    title: 'Financial Optimisation',
    body: 'Identify deductions and strategies that reduce your tax liability, maximise refunds, and strengthen your overall financial position.',
  },
];

const keyServices = [
  { icon: BookOpen,    title: 'Bookkeeping',                  body: 'Maintain accurate records of all financial transactions and reconcile bank statements.' },
  { icon: ReceiptText, title: 'Tax Compliance & Planning',    body: 'Prepare and lodge BAS and Income Tax Returns. Advise on obligations and tax savings.' },
  { icon: UserCheck,   title: 'Payroll Services',             body: 'Process payroll accurately and on time. Ensure super compliance and STP reporting.' },
  { icon: BarChart3,   title: 'Financial Reporting',          body: 'Prepare financial statements and management reports with actionable insights.' },
  { icon: Briefcase,   title: 'Business Advisory',            body: 'Strategic advice on business structure, growth, and financial planning.' },
  { icon: Calculator,  title: 'GST and BAS Services',         body: 'Manage GST reporting and ensure accurate, timely BAS submission.' },
  { icon: Scale,       title: 'Compliance and Legal',         body: 'Ensure compliance with ATO regulations and changes in tax law.' },
  { icon: Laptop,      title: 'Software Setup & Training',    body: 'Set up and customise Xero and provide staff training for efficient use.' },
];

const smsfFeatures = [
  { title: 'Control and Flexibility', body: 'SMSF members act as trustees and have full control over investment decisions across a wide range of asset classes.' },
  { title: 'Up to Six Members',       body: 'Pool superannuation with family members. All members must be trustees or directors of the corporate trustee.' },
  { title: 'Trustee Structure',       body: 'Choose individual trustees (each member) or a corporate trustee (a company acts as trustee, each member a director).' },
  { title: 'Full Compliance Support', body: 'SMSFs must comply with the SIS Act. We handle annual audits, ATO reporting, and keep you fully compliant.' },
];

const smsfBenefits = [
  { icon: SlidersHorizontal, title: 'Investment Control', body: 'Full control over strategy and asset allocation — direct property, shares, fixed income, and more.' },
  { icon: ReceiptText,        title: 'Tax Benefits',       body: 'Concessional tax rate of 15% on income with strategic planning for franking credits and CGT.' },
  { icon: FileText,           title: 'Estate Planning',    body: 'Flexibility in estate planning and control over distribution of benefits to family members.' },
  { icon: CalendarDays,       title: 'Cost Efficiency',    body: 'Lower management fees than retail funds for balances over $200k — fixed costs spread over more.' },
  { icon: Layers,             title: 'Retirement Flex',    body: 'Plan your pension drawdowns well in advance. Transition to tax-free pension mode at retirement.' },
  { icon: Shield,             title: 'Asset Protection',   body: 'Safeguard retirement savings with greater control and professional compliance oversight.' },
];

const fadeUp = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, ease: 'easeOut' as const },
};

export default function SuburbPage({
  suburb, slug, seoTitle, seoDescription,
  personalTaxImage, smsfImage, heroImage,
}: SuburbPageProps) {

  return (
    <div className="min-h-screen">
      <SEOHead
        title={seoTitle}
        description={seoDescription}
        canonical={`/accountant-in-${slug}`}
        ogImage={heroImage}
        schema={[
          localBusinessSchemaForSuburb(suburb),
          serviceSchema({
            name: `Accounting Services in ${suburb}`,
            description: seoDescription,
            url: `/accountant-in-${slug}`,
            areaServed: { '@type': 'City', name: suburb },
          }),
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Suburbs', url: '/suburbs' },
            { name: suburb, url: `/accountant-in-${slug}` },
          ]),
        ]}
      />
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative min-h-[72vh] flex items-center overflow-hidden">
        {/* Left dark pane */}
        <div className="absolute inset-0 z-0">
          <div className="h-full w-full lg:w-1/2 bg-secondary" />
        </div>
        {/* Right photo pane (desktop only). The box is the right half rather
            than the full section clipped down to it, so `cover` is measured
            against roughly half the width and the 1024px source is not
            upscaled. Stays a CSS background: below lg the box is display:none
            and the file is never fetched, which an img element would not do. */}
        {heroImage && (
          <div
            className="absolute inset-y-0 right-0 w-1/2 z-0 hidden lg:block"
            style={{
              backgroundImage: `url(${heroImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        )}
        {/* Gradient blend over photo */}
        {heroImage && (
          <div
            className="absolute inset-0 z-10 hidden lg:block bg-gradient-to-r from-secondary via-secondary/85 to-transparent"
            style={{ width: '65%' }}
          />
        )}
        {/* Fallback subtle glow for pages without a photo */}
        {!heroImage && (
          <div
            className="absolute inset-0 z-0 opacity-10"
            style={{
              backgroundImage: 'radial-gradient(ellipse 80% 60% at 70% 40%, #0DB7E1 0%, transparent 65%)',
            }}
          />
        )}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-40 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="max-w-xl"
          >
            <SuburbBreadcrumb suburbName={suburb} />
            <div className="flex items-center gap-2 mb-5">
              <MapPin className="h-4 w-4 text-primary" />
              <p className="text-primary font-medium tracking-widest text-sm uppercase">
                Bayside Melbourne
              </p>
            </div>
            <h1 className="font-serif font-semibold text-5xl sm:text-6xl lg:text-7xl leading-[1.08] text-white mb-6">
              Accountant in<br />{suburb}
            </h1>
            <p className="text-lg text-white/75 leading-relaxed mb-10 max-w-xl">
              If you're searching for an Accountant in {suburb} that blends technical expertise, strong interpersonal skills, and a deep understanding of financial regulations — the search is over.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-base btn-cta">
                <Link href="/contact">
                  Schedule Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base border-white/30 text-white bg-white/5 hover:bg-white/15 hover:border-white/50">
                <a href="tel:0411732966">
                  <Phone className="mr-2 h-4 w-4" />
                  0411 732 966
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 3-FEATURE STRIP ── */}
      <section className="bg-primary py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-secondary">
            {[
              { icon: TrendingUp, title: '20+ Years Experience',  body: 'In small business accounting, tax, and super.' },
              { icon: Users,      title: '500+ Happy Clients',    body: 'Trusted by small businesses across Bayside Melbourne.' },
              { icon: Shield,     title: 'Fixed Monthly Fees',    body: 'No surprise invoices. Clear, transparent pricing always.' },
            ].map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="flex items-start gap-4">
                  <Icon className="h-6 w-6 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">{f.title}</p>
                    <p className="text-secondary/75 text-sm">{f.body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── WELCOME / DARREN ── */}
      <section className="py-20 sm:py-28 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeUp}>
            <h2 className="font-serif font-semibold text-4xl sm:text-5xl text-foreground mb-8">
              Welcome To Trew North Accounting
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Hi, my name is <strong className="text-foreground">Darren Trew</strong> and I believe that to be a great accountant is much more than just balancing the books. A great accountant should be proactive, detail-oriented, and committed to their clients' success — continuously learning and adapting to provide the best possible service. I act with integrity, build strong trust-based relationships, and help clients navigate financial complexities and achieve their goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section className="py-16 sm:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 {...fadeUp} className="font-serif font-semibold text-3xl sm:text-4xl text-foreground text-center mb-12">
            How can we help you?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                >
                  <Link href={s.href}>
                    <div className="group flex items-center gap-4 bg-background border border-border rounded-xl p-5 hover:border-primary/40 hover:shadow-md transition-all duration-300 cursor-pointer h-full">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <span className="font-medium text-foreground text-sm leading-snug">{s.name}</span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── PERSONAL TAX ── */}
      <section className="py-20 sm:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Image */}
            <motion.div {...fadeUp} className="order-2 lg:order-1 lg:sticky lg:top-28">
              <img
                src={personalTaxImage}
                alt={`Personal Tax Accountant ${suburb}`}
                title={`Personal Tax Accountant in ${suburb} — Trew North Accounting`}
                className="rounded-2xl w-full object-cover shadow-lg"
                loading="lazy"
              />
            </motion.div>
            {/* Content */}
            <motion.div {...fadeUp} className="order-1 lg:order-2">
              <p className="text-primary font-medium tracking-widest text-sm uppercase mb-4">Personal Tax</p>
              <h2 className="font-serif font-semibold text-4xl sm:text-5xl text-foreground mb-6">
                Personal Tax Accountant in {suburb}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Finding a personal tax accountant in {suburb} can significantly ease the process of managing your finances and ensuring compliance with tax laws. Here's what we can do for you.
              </p>
              <h3 className="font-semibold text-foreground mb-4">Personal Tax Services</h3>
              <ul className="space-y-2 mb-10">
                {personalTaxServices.map((svc) => (
                  <li key={svc} className="flex items-center gap-3 text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>{svc}</span>
                  </li>
                ))}
              </ul>
              <h3 className="font-semibold text-foreground mb-6">Benefits of a Personal Tax Accountant</h3>
              <div className="space-y-5">
                {personalTaxBenefits.map((b, i) => (
                  <div key={b.title} className="flex gap-4">
                    <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center flex-shrink-0 text-white font-bold">
                      {i + 1}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">{b.title}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">{b.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SMALL BUSINESS ── */}
      <section className="py-20 sm:py-28 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-primary font-medium tracking-widest text-sm uppercase mb-4">Small Business</p>
            <h2 className="font-serif font-semibold text-4xl sm:text-5xl text-foreground mb-5">
              Small Business Accountant in {suburb}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A skilled small business accountant can be your most valuable asset. Here are the 8 key services we provide to help your business stay compliant, profitable, and on track for growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {keyServices.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="bg-background rounded-lg border border-border p-6"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-serif font-semibold text-xl mb-3 text-foreground">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{s.body}</p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── SMSF ── */}
      <section className="py-20 sm:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-primary font-medium tracking-widest text-sm uppercase mb-4">Super Funds</p>
            <h2 className="font-serif font-semibold text-4xl sm:text-5xl text-foreground mb-5">
              Accountant in {suburb} — Self-Managed Super Funds
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Setting up and managing an SMSF requires careful consideration and a clear understanding of your responsibilities. We guide you through every step.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
            {/* Key Features */}
            <div>
              <h3 className="font-serif font-semibold text-2xl text-foreground mb-7">Key Features of SMSF</h3>
              <div className="space-y-5">
                {smsfFeatures.map((f, i) => (
                  <motion.div
                    key={f.title}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="flex gap-4"
                  >
                    <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center flex-shrink-0 text-white font-bold">
                      {i + 1}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">{f.title}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">{f.body}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* SMSF Image */}
            <motion.div {...fadeUp} className="lg:sticky lg:top-28">
              <img
                src={smsfImage}
                alt={`Self Managed Super Fund Accountant ${suburb}`}
                title={`Self Managed Super Fund Accountant in ${suburb} — Trew North Accounting`}
                className="rounded-2xl w-full object-cover shadow-lg"
                loading="lazy"
              />
            </motion.div>
          </div>

          {/* Benefits grid */}
          <div>
            <h3 className="font-serif font-semibold text-2xl text-foreground text-center mb-8">Benefits of SMSF</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {smsfBenefits.map((b, i) => {
                const Icon = b.icon;
                return (
                  <motion.div
                    key={b.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-30px' }}
                    transition={{ duration: 0.5, delay: i * 0.07 }}
                    className="bg-muted/40 rounded-lg border border-border p-8"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="font-serif font-semibold text-xl mb-3 text-foreground">{b.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{b.body}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section className="bg-secondary py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeUp}>
            <h2 className="font-serif font-semibold text-4xl sm:text-5xl text-white mb-6">
              Let's get down to business!
            </h2>
            <p className="text-lg text-white/70 leading-relaxed mb-10">
              Join hundreds of business owners across Bayside Melbourne who trust Trew North Accounting for their tax, bookkeeping, and super needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-base btn-cta">
                <Link href="/contact">
                  Schedule My Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base border-white/30 text-white bg-white/5 hover:bg-white/15 hover:border-white/50">
                <a href="tel:0411732966">
                  <Phone className="mr-2 h-4 w-4" />
                  0411 732 966
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
