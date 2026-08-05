import { Link } from 'wouter';
import { ChevronRight, Home } from 'lucide-react';

interface SuburbBreadcrumbProps {
  /** The display name of the current suburb page, e.g. "Bentleigh" */
  suburbName: string;
}

/**
 * Visible breadcrumb bar for suburb pages: Home → Suburbs → [Suburb Name]
 * Pair with breadcrumbSchema() in SEOHead for full schema coverage.
 */
export function SuburbBreadcrumb({ suburbName }: SuburbBreadcrumbProps) {
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
              href="/suburbs"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Suburbs
            </Link>
          </li>
          <li aria-hidden="true">
            <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/50" />
          </li>
          <li>
            <span className="text-foreground font-medium" aria-current="page">
              {suburbName}
            </span>
          </li>
        </ol>
      </div>
    </nav>
  );
}
