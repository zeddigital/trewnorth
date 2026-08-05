import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { Award, ArrowRight, BadgeCheck, PhoneCall, Clock3, Lightbulb, Target, Heart, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { SEOHead, breadcrumbSchema, personSchema } from '@/components/seo-head';

const values = [
  {
    icon: Target,
    title: 'Clear Direction',
    description:
      'We translate your numbers into decisions. Every report, every meeting, every conversation is aimed at giving you clarity — not more confusion.',
  },
  {
    icon: Heart,
    title: 'Genuine Partnership',
    description:
      'Your success is our success. Darren measures his own performance by your business outcomes, not by how many clients are on the books.',
  },
  {
    icon: Award,
    title: 'Professional Excellence',
    description:
      'Chartered Accountant qualified and continuously learning. You get advice that is technically rigorous, clearly communicated, and backed by 25+ years of practice.',
  },
  {
    icon: Shield,
    title: 'Local Expertise',
    description:
      'Based in Beaumaris, Darren has deep knowledge of the Melbourne small business landscape — including Victorian state taxes, local industry trends, and market conditions.',
  },
];

const directAccessPoints = [
  {
    icon: PhoneCall,
    title: 'You call Darren',
    body: 'Not a receptionist. Not a junior accountant. When you pick up the phone or send an email, you reach the person who knows your file, your business, and your goals.',
  },
  {
    icon: Clock3,
    title: 'No handover losses',
    body: 'Every detail of your situation lives in one head. There are no internal handovers, no briefing a new team member, no explaining yourself from scratch after a staff change.',
  },
  {
    icon: Lightbulb,
    title: 'Faster, sharper advice',
    body: 'With a boutique practice, decisions happen quickly. No committee sign-offs, no partner approval chains — just a qualified CA who knows your business giving you a straight answer.',
  },
];

const highlights = [
  { value: '25+', label: 'Years of experience' },
  { value: 'CA', label: 'Chartered Accountant (ANZ)' },
  { value: 'Xero', label: 'Certified Advisor' },
  { value: '100%', label: 'Direct principal access' },
];

export default function About() {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Darren Trew | Chartered Accountant | Trew North Accounting"
        description="Darren Trew is a Chartered Accountant based in Beaumaris, Melbourne, with 25+ years' experience helping small businesses with tax, bookkeeping, SMSF and strategic advice."
        canonical="/about"
        ogImage="/og-about.jpg"
        schema={[
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'About', url: '/about' },
          ]),
          personSchema,
        ]}
      />
      <Navbar />

      {/* ── Hero ── */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 bg-secondary text-secondary-foreground overflow-hidden relative">
        {/* Subtle compass watermark */}
        <div
          className="absolute right-0 top-0 bottom-0 w-1/2 opacity-5 bg-no-repeat bg-right-center bg-contain pointer-events-none"
          style={{ backgroundImage: `url(${import.meta.env.BASE_URL}hero-compass.jpg)` }}
          aria-hidden="true"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">
              Beaumaris, Melbourne
            </p>
            <h1 className="font-serif font-bold text-5xl sm:text-6xl lg:text-7xl leading-[1.08] mb-4" style={{ letterSpacing: '-0.03em' }}>
              You always deal with Darren. Directly.
            </h1>
            <p className="text-primary text-base font-semibold tracking-wide mb-6">
              Chartered Accountant &amp; Registered Tax Agent · Beaumaris, Melbourne VIC
            </p>
            <p className="text-xl text-secondary-foreground/75 leading-relaxed">
              Trew North is a boutique accounting practice built around one belief: small business owners deserve a qualified, experienced accountant they can actually reach — not a rotating door of juniors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Darren's Story ── */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative lg:sticky lg:top-28 lg:self-start"
            >
              {/* Cyan accent block behind photo */}
              <div
                className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl bg-primary/15"
                aria-hidden="true"
              />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={`${import.meta.env.BASE_URL}darren-trew.webp`}
                  alt="Darren Trew, Chartered Accountant and founder of Trew North Accounting, Beaumaris Melbourne"
                  className="w-full object-cover object-top aspect-[4/5]"
                  width={600}
                  height={750}
                />
                {/* Name plate overlay */}
                <div className="absolute bottom-0 inset-x-0 bg-secondary/90 backdrop-blur-sm px-6 py-4">
                  <p className="font-serif font-bold text-white text-lg leading-tight">Darren Trew</p>
                  <p className="text-primary text-sm font-medium mt-0.5">CA ANZ · Founder &amp; Principal</p>
                </div>
              </div>
            </motion.div>

            {/* Story text + stats + credentials */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="space-y-8"
            >
              <div>
                <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">
                  The story
                </p>
                <h2 className="font-serif font-bold text-4xl sm:text-5xl leading-[1.1] text-foreground mb-8" style={{ letterSpacing: '-0.02em' }}>
                  25 years in the making
                </h2>
                <div className="space-y-5 text-muted-foreground leading-relaxed text-[1.0625rem]">
                  <p>
                    Darren Trew is a Chartered Accountant with over 25 years' experience working with small and medium businesses across Melbourne. He's seen the full spectrum — from start-ups finding their footing to established businesses planning succession — and he's built Trew North around the clients that most accounting firms overlook: ambitious small business owners who need more than once-a-year tax compliance.
                  </p>
                  <p>
                    After spending years watching small business owners get lost inside larger firms — handed off to juniors, waiting days for a callback, getting boilerplate advice that didn't fit their situation — Darren set out to build something different. A practice that runs lean, moves fast, and puts the client relationship front and centre.
                  </p>
                  <p>
                    Trew North is based in Beaumaris on Melbourne's bayside, and serves small businesses across Melbourne and Australia-wide via Xero, video calls, and email. When you work with Trew North, you work with Darren — that's not a marketing line, it's how the practice is built.
                  </p>
                </div>
              </div>

              {/* Stat cards */}
              <div className="grid grid-cols-2 gap-4">
                {highlights.map((h) => (
                  <div
                    key={h.label}
                    className="bg-muted/60 border border-border rounded-xl p-6"
                  >
                    <p className="font-serif font-bold text-3xl text-primary mb-1">{h.value}</p>
                    <p className="text-sm text-muted-foreground font-medium">{h.label}</p>
                  </div>
                ))}
              </div>

              {/* Credential badges */}
              <div className="bg-card border border-border rounded-xl p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-5">
                  Professional credentials
                </p>
                <div className="flex flex-wrap items-center gap-6">
                  <img
                    src={`${import.meta.env.BASE_URL}ca-logo.svg`}
                    alt="Chartered Accountants Australia and New Zealand"
                    className="h-10 w-auto"
                  />
                  <img
                    src={`${import.meta.env.BASE_URL}xero-certified.svg`}
                    alt="Xero Certified Advisor"
                    className="h-10 w-auto"
                  />
                </div>
                <div className="mt-5 space-y-2">
                  {[
                    'Chartered Accountant (CA ANZ)',
                    'Xero Certified Advisor',
                    'Registered Tax Agent',
                  ].map((cred) => (
                    <div key={cred} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <BadgeCheck className="h-4 w-4 text-primary flex-shrink-0" aria-hidden="true" />
                      {cred}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Direct Access Section (replaces team) ── */}
      <section className="py-20 sm:py-28 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mb-14"
          >
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">
              Why it matters
            </p>
            <h2 className="font-serif font-bold text-4xl sm:text-5xl leading-[1.1] text-foreground mb-5" style={{ letterSpacing: '-0.02em' }}>
              What direct principal access actually means
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Working directly with a senior Chartered Accountant — not a delegation chain — changes the quality of advice you receive and how quickly it arrives.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {directAccessPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: index * 0.12 }}
                  className="bg-card border border-border rounded-xl p-8"
                >
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                    <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-3">{point.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{point.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">
              How we work
            </p>
            <h2 className="font-serif font-bold text-4xl sm:text-5xl text-foreground mb-4" style={{ letterSpacing: '-0.02em' }}>
              The principles behind Trew North
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every client engagement, every piece of advice, every conversation is guided by these.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex gap-5 bg-card border border-border rounded-xl p-7"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-2">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">{value.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 sm:py-28 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="font-serif font-bold text-4xl sm:text-5xl text-foreground mb-5" style={{ letterSpacing: '-0.02em' }}>
              Ready to work directly with your accountant?
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Book a free 30-minute consultation with Darren. No obligation, no hard sell — just an honest conversation about your situation and how Trew North can help.
            </p>
            <Button
              asChild
              size="lg"
              className="text-base btn-cta"
              data-testid="button-about-cta"
            >
              <Link href="/contact">
                Book a Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
