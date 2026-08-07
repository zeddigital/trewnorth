/**
 * Shared layout for DRAFT blog posts.
 * These pages are routed in App.tsx but intentionally:
 *   - NOT linked from /blog index
 *   - NOT included in sitemap.xml
 *   - Marked noindex so crawlers skip them
 */
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowLeft, ArrowRight, Clock, Calendar, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { BlogCTA } from '@/components/blog-cta';
import { BlogBreadcrumb } from '@/components/blog-breadcrumb';
import { BookConsultation } from '@/components/book-consultation';

export interface DraftBlogPostProps {
  slug: string;
  title: string;
  /** Formatted display date, e.g. "11 January 2026" */
  displayDate: string;
  category: string;
  /** Minutes to read */
  readingTime: number;
  toc: { id: string; label: string }[];
  htmlContent: string;
}

export default function DraftBlogPost({
  title,
  displayDate,
  category,
  readingTime,
  toc,
  htmlContent,
}: DraftBlogPostProps) {
  return (
    <div className="min-h-screen">
      {/* noindex — drafts must not be crawled or indexed */}
      <Helmet>
        <title>{title} | Trew North Accounting</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <Navbar />
      <BlogBreadcrumb postTitle={title} />

      {/* Draft banner */}
      <div className="bg-amber-50 border-b border-amber-200 text-amber-800 text-center text-sm font-medium py-2 px-4">
        ⚠ Draft — not published. Visible at this URL for preview only.
      </div>

      {/* Hero */}
      <section className="pt-28 pb-12 sm:pt-36 sm:pb-16 bg-muted/40 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline mb-6">
              <ArrowLeft className="h-4 w-4" /> Back to articles
            </Link>
            <div className="mb-4">
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                {category}
              </span>
            </div>
            <h1
              className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.1] text-foreground mb-6"
              style={{ letterSpacing: '-0.03em' }}
            >
              {title}
            </h1>
            <div className="flex flex-wrap items-center gap-5 text-sm text-foreground/70">
              <span className="flex items-center gap-1.5">
                <User className="h-4 w-4" aria-hidden="true" /> Darren Trew, CA
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" aria-hidden="true" /> {displayDate}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" aria-hidden="true" /> {readingTime} min read
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Body */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-16">

            {/* Article */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="min-w-0"
            >
              <div
                className="prose-article"
                dangerouslySetInnerHTML={{ __html: htmlContent }}
              />
            </motion.article>

            {/* Sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-28 space-y-6">
                {toc.length > 0 && (
                  <nav aria-label="Table of contents" className="bg-muted/40 border border-border rounded-xl p-6">
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                      In this article
                    </p>
                    <ul className="space-y-2">
                      {toc.map((item) => (
                        <li key={item.id}>
                          <a
                            href={`#${item.id}`}
                            className="text-sm text-foreground/70 hover:text-primary transition-colors leading-snug block py-0.5"
                          >
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                )}
                <div className="bg-secondary text-secondary-foreground rounded-xl p-6">
                  <p className="font-semibold text-base mb-2">Talk to Darren directly</p>
                  <p className="text-sm text-secondary-foreground/75 mb-5 leading-relaxed">
                    Get specific advice for your business — not generic answers.
                  </p>
                  <BookConsultation><Button size="sm" className="w-full btn-cta">
                      Book a Free Consultation
                      <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                    </Button></BookConsultation>
                </div>
              </div>
            </aside>

          </div>
        </div>
      </section>

      <BlogCTA />
      <Footer />
    </div>
  );
}
