import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { Link } from 'wouter';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
  href?: string;
}

export function ServiceCard({ icon: Icon, title, description, index, href = '/services' }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Link href={href} data-testid={`card-service-${index}`}>
        <div className="group h-full bg-card border border-card-border rounded-lg p-8 hover:shadow-lg transition-all duration-300 hover:border-primary/30">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <h3 className="font-serif font-semibold text-xl mb-3 text-foreground">{title}</h3>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </Link>
    </motion.div>
  );
}
