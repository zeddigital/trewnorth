import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { SEOHead, breadcrumbSchema } from '@/components/seo-head';

type Post = {
  href: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  internal?: boolean;
};

const posts: Post[] = [
  // ── 2026 ──
  {
    href: '/blog/property-investment-using-superannuation',
    category: 'Superannuation',
    title: 'Your Guide to Property Investment Using Superannuation',
    excerpt: 'Can you use your super to buy property? Learn how SMSFs work, what the rules are, and whether it makes sense for your situation.',
    date: '25 June 2026',
    internal: true,
  },
  {
    href: '/blog/the-atos-free-super-clearing-house-is-closing-what-your-melbourne-small-business-needs-to-do-before-30-june-2026',
    category: 'Superannuation',
    title: "The ATO's Free Super Clearing House Is Closing — What Melbourne Small Businesses Need to Do",
    excerpt: 'The Small Business Superannuation Clearing House is being retired. Here is what you need to switch to before the deadline.',
    date: '16 June 2026',
    internal: true,
  },
  {
    href: '/blog/tax-deductions-sole-trader',
    category: 'Tax Planning',
    title: 'Tax Deductions for Sole Traders — Tips to Boost Your Refund',
    excerpt: 'The complete list of tax deductions available to sole traders in Australia, with practical examples and ATO compliance tips.',
    date: '27 May 2026',
    internal: true,
  },
  {
    href: '/blog/how-to-salary-sacrifice-super',
    category: 'Superannuation',
    title: 'How to Salary Sacrifice to Super in Australia',
    excerpt: 'A step-by-step guide to salary sacrificing into superannuation — how it works, the limits, and how much tax you can save.',
    date: '18 May 2026',
    internal: true,
  },
  {
    href: '/blog/tax-return-deadline',
    category: 'Tax Planning',
    title: 'Tax Return Deadline — A Quick Guide to Filing on Time',
    excerpt: 'Key tax return deadlines for individuals, sole traders, and small businesses in Australia, and what happens if you miss them.',
    date: '13 May 2026',
    internal: true,
  },
  {
    href: '/blog/discretionary-trust-vs-family-trust',
    category: 'Business Planning',
    title: 'Discretionary Trust vs Family Trust: A 2026 Guide for Melbourne Businesses',
    excerpt: 'What is the difference between a discretionary trust and a family trust? When should you use one, and what are the tax implications?',
    date: '27 April 2026',
    internal: true,
  },
  {
    href: '/blog/investment-property-tax-deductions-australia',
    category: 'Tax Planning',
    title: 'Your Guide to Investment Property Tax Deductions in Australia',
    excerpt: 'Everything Australian property investors can claim — depreciation, interest, repairs, and more — plus common mistakes to avoid.',
    date: '13 April 2026',
    internal: true,
  },
  {
    href: '/blog/payday-super-for-2026-the-small-business-accountants-checklist-to-stay-compliant-and-protect-cash-flow',
    category: 'Superannuation',
    title: 'Payday Super 2026: The Small Business Checklist to Stay Compliant',
    excerpt: 'From 1 July 2026, super must be paid every payday. Here is what small business owners need to do to stay compliant and protect cash flow.',
    date: '30 March 2026',
    internal: true,
  },
  {
    href: '/blog/salary-sacrifice-is-it-worth-it',
    category: 'Tax Planning',
    title: 'Salary Sacrifice — Is It Worth It? Your 2026 Guide to Tax and Savings',
    excerpt: 'A clear breakdown of how salary sacrifice works, what you can sacrifice, and whether the tax savings make it worthwhile for you.',
    date: '10 March 2026',
    internal: true,
  },
  {
    href: '/blog/cash-flow-problems-in-small-business',
    category: 'Business Planning',
    title: 'Solve Cash Flow Problems in Small Business: Quick Fixes and Solutions',
    excerpt: 'Running out of cash despite turning a profit? Here are the most common small business cash flow problems and how to fix them fast.',
    date: '13 February 2026',
    internal: true,
  },
  {
    href: '/blog/best-accounting-software-for-small-business-australia',
    category: 'Bookkeeping',
    title: 'The 12 Best Accounting Software for Small Business Australia (2026 Review)',
    excerpt: 'Xero, MYOB, QuickBooks, and more — compared side by side so you can pick the right tool for your business.',
    date: '2 February 2026',
    internal: true,
  },
  // ── 2025 ──
  {
    href: '/blog/how-to-pay-yourself-as-a-business-owner-without-triggering-ato-red-flags',
    category: 'Tax Planning',
    title: 'How to Pay Yourself as a Business Owner Without Triggering ATO Red Flags',
    excerpt: 'Salary, drawings, dividends, or director fees — the right way to pay yourself depends on your structure. Here is how to get it right.',
    date: '4 August 2025',
    internal: true,
  },
  {
    href: '/blog/should-your-small-business-register-for-gst',
    category: 'Tax Planning',
    title: 'Should Your Small Business Register for GST?',
    excerpt: 'Discover if your small business should register for GST. Weigh the pros and cons to make an informed decision that works for your situation.',
    date: '15 June 2025',
    internal: true,
  },
  {
    href: '/blog/navigating-the-2025-tax-changes-what-small-businesses-in-melbourne-need-to-know',
    category: 'Tax Planning',
    title: 'Navigating the 2025 Tax Changes: What Melbourne Small Businesses Need to Know',
    excerpt: 'Stage 3 tax cuts, instant asset write-off, super guarantee increases — here is what changed in 2025 and how it affects your business.',
    date: '19 May 2025',
    internal: true,
  },
  {
    href: '/blog/top-small-business-bookkeeping-tips',
    category: 'Bookkeeping',
    title: 'Top Small Business Bookkeeping Tips: Simplify Your Finances',
    excerpt: 'Effective bookkeeping is essential for managing your finances accurately and ensuring your business thrives. Essential tips, key terms, and tools to make it simpler.',
    date: '23 April 2025',
    internal: true,
  },
  {
    href: '/blog/10-ways-to-reduce-your-business-tax-bill',
    category: 'Tax Planning',
    title: '10 Ways to Reduce Your Business Tax Bill',
    excerpt: 'Practical, ATO-compliant strategies to legally reduce what your small business pays in tax — from deductions to structure choices.',
    date: '5 February 2025',
    internal: true,
  },
  {
    href: '/blog/succession-planning-for-small-businesses',
    category: 'Business Planning',
    title: 'Succession Planning for Small Businesses',
    excerpt: 'A well-crafted succession plan is crucial for the longevity of any small business. Learn how to prepare for ownership transfer or retirement.',
    date: '29 January 2025',
    internal: true,
  },
  {
    href: '/blog/top-small-business-grants-for-2025',
    category: 'Business Planning',
    title: 'Top Small Business Grants for 2025: Easy Funding Options',
    excerpt: 'Explore the top small business grants for 2025 and find easy funding options to grow your business. Government and private grants covered.',
    date: '20 February 2025',
    internal: true,
  },
  // ── 2024 ──
  {
    href: '/blog/the-impact-of-rising-interest-rates-on-small-businesses',
    category: 'Business Planning',
    title: 'The Impact of Rising Interest Rates on Small Businesses: How to Prepare and Adapt',
    excerpt: 'Discover practical strategies for small businesses to adapt to rising interest rates and manage financial challenges effectively.',
    date: '26 June 2025',
    internal: true,
  },
  {
    href: '/blog/how-to-handle-an-ato-audit-letter-step-by-step-guide',
    category: 'Tax Planning',
    title: 'How to Handle an ATO Audit Letter: Step-by-Step Guide',
    excerpt: 'Received a letter from the ATO? Don\'t panic. Here is exactly what to do — and what not to do — when the ATO comes knocking.',
    date: '11 July 2024',
    internal: true,
  },
  {
    href: '/blog/your-guide-to-the-best-melbourne-accountants-in-2024',
    category: 'Small Business',
    title: 'Your Guide to the Best Melbourne Accountants in 2024',
    excerpt: 'What to look for when choosing an accountant in Melbourne — qualifications, specialisations, fees, and red flags to avoid.',
    date: '16 April 2024',
    internal: true,
  },
  {
    href: '/blog/the-impact-of-ai-in-small-business',
    category: 'Small Business',
    title: 'The Impact of AI in Small Business',
    excerpt: 'AI is transforming workflows, automating tasks, and providing deep insights. Explore how small businesses can leverage AI to stay competitive and innovate.',
    date: '19 August 2024',
    internal: true,
  },
  // ── Older ──
  {
    href: '/blog/melbourne-tradies-tax-tips-and-bookkeeping-mistakes',
    category: 'Tax Planning',
    title: 'Melbourne Tradies: Tax Tips and Bookkeeping Mistakes to Avoid',
    excerpt: 'Maximise your tax benefits and steer clear of common bookkeeping pitfalls with these essential tips for Melbourne tradies.',
    date: '27 October 2025',
    internal: true,
  },
  {
    href: '/blog/strategic-plan-for-small-business',
    category: 'Business Planning',
    title: 'Strategic Plan for Small Business',
    excerpt: 'A small business strategic plan provides a clear roadmap for achieving long-term goals, guiding decision-making, and allocating resources effectively.',
    date: '11 May 2020',
    internal: true,
  },
  {
    href: '/blog/business-structures-pros-cons',
    category: 'Business Planning',
    title: 'Business Structures — Pros & Cons',
    excerpt: 'Sole trader, partnership, company, or trust? The costs and risks of each legal structure are quite different. Here is how to choose.',
    date: '14 April 2020',
    internal: true,
  },
];

const categoryColors: Record<string, string> = {
  'Tax Planning':      'bg-primary/10 text-primary',
  'Bookkeeping':       'bg-cta/10 text-cta',
  'Business Planning': 'bg-primary/10 text-primary',
  'Small Business':    'bg-primary/10 text-primary',
  'Superannuation':    'bg-primary/10 text-primary',
};

function PostCard({ post }: { post: Post }) {
  const className = "group h-full bg-card border border-card-border rounded-lg p-8 hover:shadow-lg transition-all duration-300 hover:border-primary/30 flex flex-col";
  const body = (
    <>
      <div className="mb-4">
        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[post.category] ?? 'bg-muted text-muted-foreground'}`}>
          {post.category}
        </span>
      </div>
      <h2 className="font-semibold text-lg text-foreground mb-3 leading-snug group-hover:text-primary transition-colors">
        {post.title}
      </h2>
      <p className="text-foreground/65 leading-relaxed text-base flex-1 mb-6">
        {post.excerpt}
      </p>
      <div className="flex items-center justify-between pt-4 border-t border-border">
        <span className="text-sm text-foreground/50">{post.date}</span>
        <span className="flex items-center gap-1 text-sm font-medium text-primary">
          Read article <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </>
  );

  if (post.internal) {
    return <Link href={post.href} className={className}>{body}</Link>;
  }
  return <a href={post.href} target="_blank" rel="noopener noreferrer" className={className}>{body}</a>;
}

export default function Blog() {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Small Business Tax & Accounting Tips | Trew North Blog"
        description="Practical accounting, tax, and business finance articles for Australian small business owners, written by Darren Trew CA at Trew North Accounting."
        canonical="/blog"
        schema={breadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Blog', url: '/blog' },
        ])}
      />
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="font-serif font-semibold text-5xl sm:text-6xl lg:text-7xl leading-[1.1] text-foreground mb-6">
              Insights &amp; Articles
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Practical accounting and tax advice for Melbourne small business owners — written in plain English, not accountant-speak.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Posts grid */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.div
                key={post.href}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: (index % 9) * 0.06 }}
              >
                <PostCard post={post} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28 bg-secondary text-secondary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif font-semibold text-4xl sm:text-5xl mb-6">
              Want advice tailored to your business?
            </h2>
            <p className="text-lg text-secondary-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              Every business is different. Book a free consultation and get specific answers for your exact situation.
            </p>
            <Button asChild size="lg" className="text-base btn-cta">
              <Link href="/contact">
                Book a Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
