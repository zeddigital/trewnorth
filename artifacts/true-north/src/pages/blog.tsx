import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { SEOHead, breadcrumbSchema } from '@/components/seo-head';
import { BookConsultation } from '@/components/book-consultation';

type Post = {
  href: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  /** Card image, 800×450. A larger `-lg` variant exists for the featured slot. */
  image?: string;
  internal?: boolean;
};

const posts: Post[] = [
  // ── 2026 ──
  {
    href: '/difference-between-bookkeeping-and-accounting',
    image: '/blog/difference-between-bookkeeping-and-accounting.webp',
    category: 'Bookkeeping',
    title: 'The Difference Between Bookkeeping and Accounting',
    excerpt: 'Bookkeeping records what happened; accounting works out what it means. What each role does, the line Australian law draws between them, and which one your business needs now.',
    date: '3 September 2026',
    internal: true,
  },
  {
    href: '/what-is-a-chart-of-accounts',
    image: '/blog/what-is-a-chart-of-accounts.webp',
    category: 'Bookkeeping',
    title: 'What Is a Chart of Accounts? A Guide for Australian Business',
    excerpt: 'The five account types, how the numbering works, the GST accounts that make BAS simple, and the split that decides whether your gross margin is real.',
    date: '2 September 2026',
    internal: true,
  },
  {
    href: '/tax-write-off-for-donations',
    image: '/blog/tax-write-off-for-donations.webp',
    category: 'Tax Planning',
    title: 'Tax Write-Off for Donations: An Australian Guide',
    excerpt: 'The $2 and DGR tests, gift versus purchase, valuing non-cash gifts, and the rule that stops a donation creating a tax loss.',
    date: '18 August 2026',
    internal: true,
  },
  {
    href: '/what-is-a-profit-and-loss-statement',
    image: '/blog/what-is-a-profit-and-loss-statement.webp',
    category: 'Accounting',
    title: 'What Is a Profit and Loss Statement? A Small Business Guide',
    excerpt: 'Revenue down to net profit with a worked example, the two ways to read the report, and the four errors that make a P&L quietly misleading.',
    date: '17 August 2026',
    internal: true,
  },
  {
    href: '/what-is-payrolling',
    image: '/blog/what-is-payrolling.webp',
    category: 'Payroll',
    title: 'What Is Payrolling? An Australian Employer\u2019s Guide',
    excerpt: 'PAYG withholding, the 12% super guarantee under payday super, STP and payroll tax, plus the handful of errors that account for most payroll trouble.',
    date: '16 August 2026',
    internal: true,
  },
  {
    href: '/agent-nomination-ato',
    image: '/blog/agent-nomination-ato.webp',
    category: 'Business',
    title: 'ATO Agent Nomination: A Step-by-Step Guide for Business',
    excerpt: 'How to nominate your tax or BAS agent, myID and RAM setup, the steps, the 28-day window, and the one detail that causes most nominations to expire.',
    date: '15 August 2026',
    internal: true,
  },
  {
    href: '/set-up-super-fund',
    image: '/blog/set-up-super-fund.webp',
    category: 'Superannuation',
    title: 'How to Set Up an SMSF in Australia: A 2026 Guide',
    excerpt: 'Trustee structure, trust deed, ATO registration and investment strategy, plus the annual obligations you take on for as long as the fund runs.',
    date: '14 August 2026',
    internal: true,
  },
  {
    href: '/what-is-management-accounting',
    image: '/blog/what-is-management-accounting.webp',
    category: 'Accounting',
    title: 'What Is Management Accounting? A Small Business Guide',
    excerpt: 'How it differs from bookkeeping and financial accounting, the four tools that matter, and a six-step checklist for getting started.',
    date: '13 August 2026',
    internal: true,
  },
  {
    href: '/what-is-break-even-analysis',
    image: '/blog/what-is-break-even-analysis.webp',
    category: 'Accounting',
    title: 'What Is Break-Even Analysis? A Guide for Small Business',
    excerpt: 'Fixed and variable costs, contribution margin, both formulas, and a worked example. The number that turns pricing and hiring calls into arithmetic.',
    date: '12 August 2026',
    internal: true,
  },
  {
    href: '/how-to-read-a-balance-sheet',
    image: '/blog/how-to-read-a-balance-sheet.webp',
    category: 'Accounting',
    title: 'How to Read a Balance Sheet: A Guide for Australian Businesses',
    excerpt: 'What assets, liabilities and equity actually mean, the ratios that matter, and how to spot trouble early, with a Melbourne café worked through.',
    date: '11 August 2026',
    internal: true,
  },
  {
    href: '/victoria-payroll-tax',
    image: '/blog/victoria-payroll-tax.webp',
    category: 'Payroll',
    title: 'Victorian Payroll Tax: A 2026 Guide for Melbourne Small Business',
    excerpt: 'When payroll tax applies, the current $1,000,000 threshold and 4.85% rate, grouping rules, exemptions, and worked examples.',
    date: '5 August 2026',
    internal: true,
  },
  {
    href: '/property-investment-using-superannuation',
    image: '/blog/property-investment-using-superannuation.webp',
    category: 'Superannuation',
    title: 'Your Guide to Property Investment Using Superannuation',
    excerpt: 'Can you use your super to buy property? Learn how SMSFs work, what the rules are, and whether it makes sense for your situation.',
    date: '25 June 2026',
    internal: true,
  },
  {
    href: '/the-atos-free-super-clearing-house-is-closing-what-your-melbourne-small-business-needs-to-do-before-30-june-2026',
    image: '/blog/the-atos-free-super-clearing-house-is-closing-what-your-melbourne-small-business-needs-to-do-before-30-june-2026.webp',
    category: 'Superannuation',
    title: "The ATO's Free Super Clearing House Is Closing, What Melbourne Small Businesses Need to Do",
    excerpt: 'The Small Business Superannuation Clearing House is being retired. Here is what you need to switch to before the deadline.',
    date: '16 June 2026',
    internal: true,
  },
  {
    href: '/tax-deductions-sole-trader',
    image: '/blog/tax-deductions-sole-trader.webp',
    category: 'Tax Planning',
    title: 'Tax Deductions for Sole Traders, Tips to Boost Your Refund',
    excerpt: 'The complete list of tax deductions available to sole traders in Australia, with practical examples and ATO compliance tips.',
    date: '27 May 2026',
    internal: true,
  },
  {
    href: '/how-to-salary-sacrifice-super',
    image: '/blog/how-to-salary-sacrifice-super.webp',
    category: 'Superannuation',
    title: 'How to Salary Sacrifice to Super in Australia',
    excerpt: 'A step-by-step guide to salary sacrificing into superannuation. How it works, the limits, and how much tax you can save.',
    date: '18 May 2026',
    internal: true,
  },
  {
    href: '/tax-return-deadline',
    image: '/blog/tax-return-deadline.webp',
    category: 'Tax Planning',
    title: 'Tax Return Deadline, A Quick Guide to Filing on Time',
    excerpt: 'Key tax return deadlines for individuals, sole traders, and small businesses in Australia, and what happens if you miss them.',
    date: '13 May 2026',
    internal: true,
  },
  {
    href: '/discretionary-trust-vs-family-trust',
    image: '/blog/discretionary-trust-vs-family-trust.webp',
    category: 'Business Planning',
    title: 'Discretionary Trust vs Family Trust: A 2026 Guide for Melbourne Businesses',
    excerpt: 'What is the difference between a discretionary trust and a family trust? When should you use one, and what are the tax implications?',
    date: '27 April 2026',
    internal: true,
  },
  {
    href: '/investment-property-tax-deductions-australia',
    image: '/blog/investment-property-tax-deductions-australia.webp',
    category: 'Tax Planning',
    title: 'Your Guide to Investment Property Tax Deductions in Australia',
    excerpt: 'Everything Australian property investors can claim (depreciation, interest, repairs, and more) plus common mistakes to avoid.',
    date: '13 April 2026',
    internal: true,
  },
  {
    href: '/payday-super-for-2026-the-small-business-accountants-checklist-to-stay-compliant-and-protect-cash-flow',
    image: '/blog/payday-super-for-2026-the-small-business-accountants-checklist-to-stay-compliant-and-protect-cash-flow.webp',
    category: 'Superannuation',
    title: 'Payday Super 2026: The Small Business Checklist to Stay Compliant',
    excerpt: 'From 1 July 2026, super must be paid every payday. Here is what small business owners need to do to stay compliant and protect cash flow.',
    date: '30 March 2026',
    internal: true,
  },
  {
    href: '/salary-sacrifice-is-it-worth-it',
    image: '/blog/salary-sacrifice-is-it-worth-it.webp',
    category: 'Tax Planning',
    title: 'Salary Sacrifice, Is It Worth It? Your 2026 Guide to Tax and Savings',
    excerpt: 'A clear breakdown of how salary sacrifice works, what you can sacrifice, and whether the tax savings make it worthwhile for you.',
    date: '10 March 2026',
    internal: true,
  },
  {
    href: '/cash-flow-problems-in-small-business',
    image: '/blog/cash-flow-problems-in-small-business.webp',
    category: 'Business Planning',
    title: 'Solve Cash Flow Problems in Small Business: Quick Fixes and Solutions',
    excerpt: 'Running out of cash despite turning a profit? Here are the most common small business cash flow problems and how to fix them fast.',
    date: '13 February 2026',
    internal: true,
  },
  {
    href: '/best-accounting-software-for-small-business-australia',
    image: '/blog/best-accounting-software-for-small-business-australia.webp',
    category: 'Bookkeeping',
    title: 'The 12 Best Accounting Software for Small Business Australia (2026 Review)',
    excerpt: 'Xero, MYOB, QuickBooks, and more, compared side by side so you can pick the right tool for your business.',
    date: '2 February 2026',
    internal: true,
  },
  // ── 2025 ──
  {
    href: '/how-to-pay-yourself-as-a-business-owner-without-triggering-ato-red-flags',
    image: '/blog/how-to-pay-yourself-as-a-business-owner-without-triggering-ato-red-flags.webp',
    category: 'Tax Planning',
    title: 'How to Pay Yourself as a Business Owner Without Triggering ATO Red Flags',
    excerpt: 'Salary, drawings, dividends, or director fees, the right way to pay yourself depends on your structure. Here is how to get it right.',
    date: '4 August 2025',
    internal: true,
  },
  {
    href: '/should-your-small-business-register-for-gst',
    image: '/blog/should-your-small-business-register-for-gst.webp',
    category: 'Tax Planning',
    title: 'Should Your Small Business Register for GST?',
    excerpt: 'Discover if your small business should register for GST. Weigh the pros and cons to make an informed decision that works for your situation.',
    date: '15 June 2025',
    internal: true,
  },
  {
    href: '/navigating-the-2025-tax-changes-what-small-businesses-in-melbourne-need-to-know',
    image: '/blog/navigating-the-2025-tax-changes-what-small-businesses-in-melbourne-need-to-know.webp',
    category: 'Tax Planning',
    title: 'Navigating the 2025 Tax Changes: What Melbourne Small Businesses Need to Know',
    excerpt: 'Stage 3 tax cuts, instant asset write-off, super guarantee increases. Here is what changed in 2025 and how it affects your business.',
    date: '19 May 2025',
    internal: true,
  },
  {
    href: '/top-small-business-bookkeeping-tips',
    image: '/blog/top-small-business-bookkeeping-tips.webp',
    category: 'Bookkeeping',
    title: 'Top Small Business Bookkeeping Tips: Simplify Your Finances',
    excerpt: 'Effective bookkeeping is essential for managing your finances accurately and ensuring your business thrives. Essential tips, key terms, and tools to make it simpler.',
    date: '23 April 2025',
    internal: true,
  },
  {
    href: '/10-ways-to-reduce-your-business-tax-bill',
    image: '/blog/10-ways-to-reduce-your-business-tax-bill.webp',
    category: 'Tax Planning',
    title: '10 Ways to Reduce Your Business Tax Bill',
    excerpt: 'Practical, ATO-compliant strategies to legally reduce what your small business pays in tax, from deductions to structure choices.',
    date: '5 February 2025',
    internal: true,
  },
  {
    href: '/succession-planning-for-small-businesses',
    image: '/blog/succession-planning-for-small-businesses.webp',
    category: 'Business Planning',
    title: 'Succession Planning for Small Businesses',
    excerpt: 'A well-crafted succession plan is crucial for the longevity of any small business. Learn how to prepare for ownership transfer or retirement.',
    date: '29 January 2025',
    internal: true,
  },
  {
    href: '/top-small-business-grants-for-2025',
    image: '/blog/top-small-business-grants-for-2025.webp',
    category: 'Business Planning',
    title: 'Top Small Business Grants for 2025: Easy Funding Options',
    excerpt: 'Explore the top small business grants for 2025 and find easy funding options to grow your business. Government and private grants covered.',
    date: '20 February 2025',
    internal: true,
  },
  // ── 2024 ──
  {
    href: '/the-impact-of-rising-interest-rates-on-small-businesses',
    image: '/blog/the-impact-of-rising-interest-rates-on-small-businesses.webp',
    category: 'Business Planning',
    title: 'The Impact of Rising Interest Rates on Small Businesses: How to Prepare and Adapt',
    excerpt: 'Discover practical strategies for small businesses to adapt to rising interest rates and manage financial challenges effectively.',
    date: '26 June 2025',
    internal: true,
  },
  {
    href: '/how-to-handle-an-ato-audit-letter-step-by-step-guide',
    image: '/blog/how-to-handle-an-ato-audit-letter-step-by-step-guide.webp',
    category: 'Tax Planning',
    title: 'How to Handle an ATO Audit Letter: Step-by-Step Guide',
    excerpt: 'Received a letter from the ATO? Don\'t panic. Here is exactly what to do, and what not to do, when the ATO comes knocking.',
    date: '11 July 2024',
    internal: true,
  },
  {
    href: '/your-guide-to-the-best-melbourne-accountants-in-2024',
    image: '/blog/your-guide-to-the-best-melbourne-accountants-in-2024.webp',
    category: 'Small Business',
    title: 'Your Guide to the Best Melbourne Accountants in 2024',
    excerpt: 'What to look for when choosing an accountant in Melbourne, qualifications, specialisations, fees, and red flags to avoid.',
    date: '16 April 2024',
    internal: true,
  },
  {
    href: '/the-impact-of-ai-in-small-business',
    image: '/blog/the-impact-of-ai-in-small-business.webp',
    category: 'Small Business',
    title: 'The Impact of AI in Small Business',
    excerpt: 'AI is transforming workflows, automating tasks, and providing deep insights. Explore how small businesses can leverage AI to stay competitive and innovate.',
    date: '19 August 2024',
    internal: true,
  },
  // ── Older ──
  {
    href: '/melbourne-tradies-tax-tips-and-bookkeeping-mistakes',
    image: '/blog/melbourne-tradies-tax-tips-and-bookkeeping-mistakes.webp',
    category: 'Tax Planning',
    title: 'Melbourne Tradies: Tax Tips and Bookkeeping Mistakes to Avoid',
    excerpt: 'Maximise your tax benefits and steer clear of common bookkeeping pitfalls with these essential tips for Melbourne tradies.',
    date: '27 October 2025',
    internal: true,
  },
  {
    href: '/strategic-plan-for-small-business',
    image: '/blog/strategic-plan-for-small-business.webp',
    category: 'Business Planning',
    title: 'Strategic Plan for Small Business',
    excerpt: 'A small business strategic plan provides a clear roadmap for achieving long-term goals, guiding decision-making, and allocating resources effectively.',
    date: '11 May 2020',
    internal: true,
  },
  {
    href: '/business-structures-pros-cons',
    image: '/blog/business-structures-pros-cons.webp',
    category: 'Business Planning',
    title: 'Business Structures, Pros & Cons',
    excerpt: 'Sole trader, partnership, company, or trust? The costs and risks of each legal structure are quite different. Here is how to choose.',
    date: '14 April 2020',
    internal: true,
  },
];

const categoryColors: Record<string, string> = {
  'Tax Planning':      'bg-primary/10 text-primary',
  'Payroll':           'bg-primary/10 text-primary',
  'Accounting':        'bg-primary/10 text-primary',
  'Bookkeeping':       'bg-cta/10 text-cta',
  'Business Planning': 'bg-primary/10 text-primary',
  'Small Business':    'bg-primary/10 text-primary',
  'Superannuation':    'bg-primary/10 text-primary',
};

function CategoryChip({ category }: { category: string }) {
  return (
    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[category] ?? 'bg-muted text-muted-foreground'}`}>
      {category}
    </span>
  );
}

/**
 * Image slot for a post card. Posts migrated from WordPress carry a featured
 * image; anything written since may not, so fall back to a navy panel carrying
 * the category rather than leaving a hole in the grid.
 */
function PostImage({ post, sizeClass, lg = false }: { post: Post; sizeClass: string; lg?: boolean }) {
  if (!post.image) {
    return (
      <div className={`${sizeClass} bg-secondary flex items-center justify-center`}>
        <span className="font-serif text-2xl text-white/25 px-6 text-center leading-tight">
          {post.category}
        </span>
      </div>
    );
  }
  return (
    <img
      src={lg ? post.image.replace('.webp', '-lg.webp') : post.image}
      alt=""
      width={lg ? 1400 : 800}
      height={lg ? 788 : 450}
      loading="lazy"
      decoding="async"
      className={`${sizeClass} object-cover`}
    />
  );
}

/** The most recent post, given a wider editorial treatment above the grid. */
function FeaturedPost({ post }: { post: Post }) {
  return (
    <article className="bg-card border border-card-border rounded-xl overflow-hidden shadow-xl shadow-secondary/10">
      <Link href={post.href} className="group grid grid-cols-1 lg:grid-cols-2">
        <div className="relative overflow-hidden bg-secondary">
          <PostImage
            post={post}
            lg
            sizeClass="w-full h-56 sm:h-72 lg:h-full lg:min-h-[26rem] transition-transform duration-700 group-hover:scale-[1.03]"
          />
        </div>
        <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              Latest
            </span>
            <span className="h-px w-8 bg-primary/30" aria-hidden="true" />
            <CategoryChip category={post.category} />
          </div>
          <h2 className="font-serif font-semibold text-3xl sm:text-4xl leading-[1.15] text-foreground mb-5 group-hover:text-primary transition-colors">
            {post.title}
          </h2>
          <p className="text-foreground/65 leading-relaxed text-lg mb-8">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-sm text-foreground/50">{post.date}</span>
            <span className="flex items-center gap-1.5 text-sm font-medium text-primary">
              Read article <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}

function PostCard({ post }: { post: Post }) {
  const className = "group h-full bg-card border border-card-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-primary/30 flex flex-col";
  const body = (
    <>
      <div className="overflow-hidden bg-secondary">
        <PostImage
          post={post}
          sizeClass="w-full h-48 transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </div>
      <div className="p-7 flex flex-col flex-1">
        <div className="mb-4">
          <CategoryChip category={post.category} />
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
      </div>
    </>
  );

  if (post.internal) {
    return <Link href={post.href} className={className}>{body}</Link>;
  }
  return <a href={post.href} target="_blank" rel="noopener noreferrer" className={className}>{body}</a>;
}

export default function Blog() {
  const [featured, ...rest] = posts;

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

      {/* Hero — deep navy, matching the service page heroes and the footer.
          Extra bottom padding leaves room for the featured card to overlap. */}
      <section className="relative pt-32 pb-32 sm:pt-40 sm:pb-44 bg-secondary text-secondary-foreground overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle at 78% 22%, hsl(var(--primary)) 0%, transparent 55%)',
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <p className="text-primary font-medium tracking-widest text-sm uppercase mb-5">
              Insights &amp; Articles
            </p>
            <h1 className="font-serif font-semibold text-5xl sm:text-6xl lg:text-7xl leading-[1.05] text-white mb-6">
              Straight answers on tax, <span className="text-primary">without the jargon.</span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed max-w-2xl">
              Practical accounting and tax advice for Melbourne small business owners, written by Darren Trew CA.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured — the newest article, lifted out of the hero into the page */}
      {featured && (
        <section className="relative z-10 -mt-20 sm:-mt-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <FeaturedPost post={featured} />
            </motion.div>
          </div>
        </section>
      )}

      {/* Posts grid */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="font-serif font-semibold text-2xl sm:text-3xl text-foreground">
              All articles
            </h2>
            <span className="h-px flex-1 bg-border" aria-hidden="true" />
            <span className="text-sm text-muted-foreground">{rest.length} more</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((post, index) => (
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
            <p className="text-lg text-secondary-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed text-balance">
              Every business is different. Book a free consultation and get specific answers for your exact situation.
            </p>
            <BookConsultation><Button size="lg" className="text-base btn-cta">
                Book a Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button></BookConsultation>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
