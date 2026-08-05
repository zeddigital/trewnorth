import { Link } from 'wouter';
import { ChevronRight, Home } from 'lucide-react';

interface ServiceBreadcrumbProps {
  /** The display name of the current service page */
  serviceName: string;
}

/**
 * Breadcrumb trail for service pages: Home → Services → [Service Name]
 *
 * Renders inline at the top of the hero content rather than as its own bar,
 * so it sits over the hero's dark background instead of wedging a strip
 * between the fixed header and the hero. Colours assume a dark hero.
 *
 * Pair with breadcrumbSchema() in SEOHead for full schema coverage.
 */
export function ServiceBreadcrumb({ serviceName }: ServiceBreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-5">
      <ol className="flex items-center gap-1 sm:gap-1.5 text-xs sm:text-sm flex-wrap text-white/55">
        <li>
          <Link
            href="/"
            className="flex items-center gap-1 hover:text-white transition-colors"
          >
            <Home className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
            <span>Home</span>
          </Link>
        </li>
        <li aria-hidden="true">
          <ChevronRight className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-white/30" />
        </li>
        <li>
          <Link href="/services" className="hover:text-white transition-colors">
            Services
          </Link>
        </li>
        <li aria-hidden="true">
          <ChevronRight className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-white/30" />
        </li>
        <li>
          <span className="text-white/85 font-medium" aria-current="page">
            {serviceName}
          </span>
        </li>
      </ol>
    </nav>
  );
}
