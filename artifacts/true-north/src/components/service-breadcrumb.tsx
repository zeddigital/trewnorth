import { Link } from 'wouter';
import { ChevronRight, Home } from 'lucide-react';

interface ServiceBreadcrumbProps {
  /** The display name of the current service page */
  serviceName: string;
}

/**
 * Visible breadcrumb bar for service pages: Home → Services → [Service Name]
 * Pair with breadcrumbSchema() in SEOHead for full schema coverage.
 */
export function ServiceBreadcrumb({ serviceName }: ServiceBreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="mt-20 bg-muted/40 border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <ol className="flex items-center gap-1.5 text-sm flex-wrap">
          <li>
            <Link
              href="/"
              className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Home className="h-3.5 w-3.5" />
              <span>Home</span>
            </Link>
          </li>
          <li aria-hidden="true">
            <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/50" />
          </li>
          <li>
            <Link
              href="/services"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Services
            </Link>
          </li>
          <li aria-hidden="true">
            <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/50" />
          </li>
          <li>
            <span className="text-foreground font-medium" aria-current="page">
              {serviceName}
            </span>
          </li>
        </ol>
      </div>
    </nav>
  );
}
