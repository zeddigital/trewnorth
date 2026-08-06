import { Link } from 'wouter';
import { ChevronRight, Home } from 'lucide-react';

interface BlogBreadcrumbProps {
  /** The display title of the current blog post */
  postTitle: string;
}

/**
 * Visible breadcrumb bar for blog post pages: Home → Blog → [Post Title]
 * Pair with breadcrumbSchema() in SEOHead for full schema coverage.
 */
export function BlogBreadcrumb({ postTitle }: BlogBreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-5">
      <ol className="flex items-center gap-1 sm:gap-1.5 text-xs sm:text-sm flex-wrap text-foreground/60">
          <li>
            <Link
              href="/"
              className="flex items-center gap-1 hover:text-primary transition-colors"
            >
              <Home className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
              <span>Home</span>
            </Link>
          </li>
          <li aria-hidden="true">
            <ChevronRight className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-foreground/30" />
          </li>
          <li>
            <Link
              href="/blog"
              className="hover:text-primary transition-colors"
            >
              Blog
            </Link>
          </li>
          <li aria-hidden="true">
            <ChevronRight className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-foreground/30" />
          </li>
          <li>
            <span className="text-foreground/85 font-medium" aria-current="page">
              {postTitle}
            </span>
          </li>
      </ol>
    </nav>
  );
}
