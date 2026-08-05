import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  index: number;
}

export function TestimonialCard({ quote, author, role, index }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="bg-card border border-card-border rounded-lg p-8 relative"
      data-testid={`testimonial-${index}`}
    >
      <Quote className="h-8 w-8 text-primary/20 mb-4" />
      <p className="text-foreground/90 leading-relaxed mb-6 italic">"{quote}"</p>
      <div className="border-t border-border pt-4">
        <p className="font-semibold text-foreground">{author}</p>
        <p className="text-sm text-muted-foreground">{role}</p>
      </div>
    </motion.div>
  );
}
