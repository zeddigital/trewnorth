import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { SEOHead, breadcrumbSchema } from '@/components/seo-head';
import { Button } from '@/components/ui/button';
import { BookConsultation } from '@/components/book-consultation';
import { suburbs } from '@/data/suburbs-data';

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.07, ease: 'easeOut' as const },
  }),
};

export default function Suburbs() {
  const suburbNames = suburbs.map((s) => s.name);
  const suburbList =
    suburbNames.length > 1
      ? suburbNames.slice(0, -1).join(', ') + ', and ' + suburbNames[suburbNames.length - 1]
      : suburbNames[0] ?? '';
  const seoDescription = `Trew North Accounting provides local accounting services across Melbourne's Bayside suburbs — ${suburbList}.`;

  return (
    <>
      <SEOHead
        title="Suburbs We Serve | Accountant Bayside Melbourne | Trew North Accounting"
        description={seoDescription}
        canonical="https://tnaccounting.com.au/suburbs"
        schema={[
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Suburbs', url: '/suburbs' },
          ]),
        ]}
      />

      <Navbar />

      {/* Hero */}
      <section className="bg-secondary text-secondary-foreground pt-32 pb-20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          aria-hidden="true"
          style={{ backgroundImage: 'radial-gradient(circle at 70% 40%, hsl(var(--primary)), transparent 60%)' }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4 flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              BAYSIDE MELBOURNE
            </p>
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Suburbs We Serve
            </h1>
            <p className="text-secondary-foreground/80 text-lg md:text-xl leading-relaxed max-w-2xl">
              Based in Beaumaris, Trew North Accounting works with small businesses and individuals
              across Melbourne's southern and bayside suburbs. Select your suburb below to learn more
              about local accounting services near you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Suburb grid */}
      <section className="bg-background py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {suburbs.map((suburb, i) => (
              <motion.div
                key={suburb.slug}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
              >
                <Link
                  href={`/accountant-in-${suburb.slug}`}
                  className="group block rounded-2xl overflow-hidden border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-lg bg-card"
                >
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={suburb.heroImage}
                      alt={`Accountant in ${suburb.name}`}
                      title={`Accountant in ${suburb.name} — Trew North Accounting`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent" />
                    <span className="absolute bottom-3 left-4 font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-white/80">
                      {suburb.tagline}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h2 className="font-serif text-2xl font-bold text-foreground mb-2">
                      Accountant in {suburb.name}
                    </h2>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                      {suburb.description}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary group-hover:gap-2.5 transition-all duration-200">
                      Learn more <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary text-secondary-foreground py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold mb-4">
            Don't see your suburb?
          </h2>
          <p className="text-secondary-foreground/80 text-lg mb-8">
            Darren works with businesses and individuals from all over Melbourne's Bayside and
            south-east corridor. Get in touch to discuss how we can help you.
          </p>
          <div className="flex flex-col gap-6 sm:flex-row sm:gap-4 justify-center">
            <BookConsultation><Button size="lg" className="btn-cta">Book a Free Consultation</Button></BookConsultation>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10"
            >
              <a href="tel:0411732966">Call 0411 732 966</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
