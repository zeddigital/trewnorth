import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { 
  Calculator, 
  TrendingUp, 
  Shield, 
  Users, 
  FileText, 
  Wallet,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { SEOHead, localBusinessSchema, websiteSchema } from '@/components/seo-head';
import { ServiceCard } from '@/components/service-card';
import { TestimonialCard } from '@/components/testimonial-card';
import { BookConsultation } from '@/components/book-consultation';

const services = [
  {
    icon: Calculator,
    title: 'Accounting & Tax Planning',
    description: 'Strategic, year-round tax planning that minimises your liability while keeping you fully compliant with ATO requirements.',
    href: '/services/accounting-and-tax-planning',
  },
  {
    icon: TrendingUp,
    title: 'Small Business Planning',
    description: 'Growth-focused advisory for Melbourne small business owners ready to scale with clarity and confidence.',
    href: '/services/small-business-planning',
  },
  {
    icon: Wallet,
    title: 'Personal Tax & Finance',
    description: 'Personal tax returns done right — capturing every deduction from investment properties, shares, and beyond.',
    href: '/services/personal-tax-and-finance',
  },
  {
    icon: FileText,
    title: 'Bookkeeping',
    description: 'Accurate, real-time bookkeeping that keeps your records clean and your decisions data-driven.',
    href: '/services/bookkeeping',
  },
  {
    icon: Shield,
    title: 'Self-Managed Super Funds',
    description: 'SMSF setup, compliance, and strategic investment advice to build long-term wealth on your own terms.',
    href: '/services/self-managed-super-funds',
  },
  {
    icon: Users,
    title: 'Small Business Accountant',
    description: 'A dedicated accounting partner — covering tax, bookkeeping, compliance, and strategy under one roof.',
    href: '/services/small-business-accountant',
  },
];

const testimonials = [
  {
    quote: "Excellent advice and friendly, professional service from the team at Trew North. Darren always takes time to work through the details and respond promptly to any queries. Highly recommend for their tax and personal financial advice. We have been with them for years now and wouldn't go anywhere else.",
    author: "Pat Hanson",
    role: "Long-term Client",
  },
  {
    quote: "In many years of experience it comes a time when you end up finding the right person/company. The person leading that company is Darren Trew. Not only does he carry a wealth of experience, his communication skills keep you in the loop, coupled with valuable and alternative solutions for your business.",
    author: "Versatile Accounts",
    role: "Business Client",
  },
  {
    quote: "I have had the pleasure of dealing with Darren for 10 years for all my tax requirements. When it comes to taxation advice, I choose to deal with someone who has over 25 years in the business. Knowledge is everything. Thank you, Darren, for years of professional support.",
    author: "Joshua Freney",
    role: "10-Year Client",
  },
];

const whyReasons = [
  {
    title: 'Proactive, Not Reactive',
    description: 'We reach out before issues arise. Tax planning happens year-round, not just at EOFY.',
  },
  {
    title: 'Melbourne-Local Expertise',
    description: 'Deep knowledge of Victorian business conditions and the Melbourne small business ecosystem.',
  },
  {
    title: 'CA-Qualified Team',
    description: 'All our senior accountants are Chartered Accountants with decades of combined experience.',
  },
  {
    title: 'Small Business Specialists',
    description: 'We work exclusively with businesses like yours — not massive corporates or one-person contractors.',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Trew North Accounting | Chartered Accountants, Bayside Melbourne"
        description="Trew North Accounting is Melbourne's trusted small business accountant in Beaumaris. Tax planning, bookkeeping, SMSF and strategic advice for ambitious business owners."
        canonical="/"
        schema={[localBusinessSchema, websiteSchema]}
      />
      <Navbar darkHero />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Compass background image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${import.meta.env.BASE_URL}hero-compass.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 40%',
          }}
        />
        {/* Dark overlay — heavier on the left for text legibility, lets the cyan glow breathe on the right */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#050f1c]/90 via-[#050f1c]/70 to-[#050f1c]/40" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 py-40">
          <div className="max-w-2xl xl:max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              {/* Eyebrow */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-primary font-medium tracking-widest text-sm uppercase mb-6 2xl:mb-8"
              >
                Melbourne Small Business Accountants
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.2 }}
                className="font-serif font-semibold text-5xl sm:text-6xl lg:text-7xl leading-[1.08] text-white mb-7 2xl:mb-12"
              >
                Find your business's<br />
                <span className="text-primary">true direction.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.35 }}
                className="text-xl sm:text-2xl text-white/75 leading-relaxed mb-10 2xl:mb-16 max-w-xl"
              >
                The accounting firm Melbourne's sharpest small business owners choose when they are ready for strategic partnership, not just compliance.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <BookConsultation>
                  <Button size="lg" className="text-base btn-cta shadow-lg shadow-cta/20" data-testid="button-hero-consultation">
                    Book a Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </BookConsultation>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="text-base border-white/30 text-white bg-white/5 hover:bg-white/15 hover:border-white/50 backdrop-blur-sm"
                  data-testid="button-hero-services"
                >
                  <Link href="/services">Our Services</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Trew North */}
      <section className="py-20 sm:py-28 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif font-semibold text-4xl sm:text-5xl text-foreground mb-4">
              Why Trew North
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We are different because we believe accountants should be growth partners, not just tax lodgers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyReasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex gap-4"
                data-testid={`why-reason-${index}`}
              >
                <div className="flex-shrink-0">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-1" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl text-foreground mb-2">{reason.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif font-semibold text-4xl sm:text-5xl text-foreground mb-4">
              How We Help
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive accounting services designed for ambitious Melbourne small businesses.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Button asChild variant="outline" size="lg" data-testid="button-view-all-services">
              <Link href="/services">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 sm:py-28 bg-secondary text-secondary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif font-semibold text-4xl sm:text-5xl mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-secondary-foreground/80 max-w-2xl mx-auto">
              Melbourne business owners who've made the switch to Trew North.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={testimonial.author} {...testimonial} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif font-semibold text-4xl sm:text-5xl text-foreground mb-6">
              Ready to find clarity?
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Book a free consultation with our team. We'll review your current situation and show you what's possible when you have the right accounting partner.
            </p>
            <BookConsultation><Button size="lg" className="text-base btn-cta" data-testid="button-cta-book">
                Book Your Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button></BookConsultation>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
