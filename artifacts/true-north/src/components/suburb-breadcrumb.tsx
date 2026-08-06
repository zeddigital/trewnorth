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
            <Link
              href="/suburbs"
              className="hover:text-white transition-colors"
            >
              Suburbs
            </Link>
          </li>
          <li aria-hidden="true">
            <ChevronRight className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-white/30" />
          </li>
          <li>
            <span className="text-white/85 font-medium" aria-current="page">
              {suburbName}
            </span>
          </li>
      </ol>
    </nav>
  );
}
