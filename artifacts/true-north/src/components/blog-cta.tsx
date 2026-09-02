import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BookConsultation } from '@/components/book-consultation';

export function BlogCTA() {
  return (
    <section className="bg-secondary py-16 sm:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <p className="text-primary font-medium tracking-widest text-sm uppercase mb-4">
            Trew North Accounting
          </p>
          <h2 className="font-serif font-semibold text-3xl sm:text-4xl text-white leading-tight mb-4">
            Ready to take control of your finances?
          </h2>
          <p className="text-white/65 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Book a free 30-minute consultation with Darren. No obligation, no jargon, just clear, practical advice tailored to your situation.
          </p>
          <div className="flex flex-col gap-6 sm:flex-row sm:gap-4 justify-center">
            <BookConsultation><Button size="lg" className="text-base btn-cta">
                Book a Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Button></BookConsultation>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-base border-white/30 text-white bg-white/5 hover:bg-white/15"
            >
              <a href="tel:0411732966">
                <Phone className="mr-2 h-4 w-4" /> 0411 732 966
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
