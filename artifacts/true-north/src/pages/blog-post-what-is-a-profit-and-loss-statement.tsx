import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowLeft, ArrowRight, Clock, Calendar, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { BlogCTA } from '@/components/blog-cta';
import { SEOHead, blogPostingSchema, breadcrumbSchema } from '@/components/seo-head';
import { BlogBreadcrumb } from '@/components/blog-breadcrumb';

const toc = [
  { id: 'h-the-shape-of-the-report', label: 'The Shape of the Report' },
  { id: 'h-a-worked-example', label: 'A Worked Example' },
  { id: 'h-reading-it-properly', label: 'Reading It Properly' },
  { id: 'h-four-ways-a-p-and-l-misleads', label: 'Four Ways a P&L Misleads' },
  { id: 'h-from-net-profit-to-taxable-income', label: 'From Net Profit to Taxable Income' },
  { id: 'h-frequently-asked-questions', label: 'Frequently Asked Questions' },
];

const htmlContent = `<p>A <strong>profit and loss statement</strong> — the P&amp;L, or income statement — reports what your business earned and what it spent over a period, and ends with the one figure everyone looks for first: net profit or loss. Where a balance sheet is a photograph taken at a moment, the P&amp;L is the film of what happened between two moments.</p>

<h2 id="h-the-shape-of-the-report">The Shape of the Report</h2>
<figure><img src="/blog/what-is-a-profit-and-loss-statement-statement.webp" alt="A printed financial report, calculator, notebook and manila folders on a desk in slatted afternoon light." width="1400" height="788" loading="lazy" /></figure>
<p>The report works down the page in stages, and each stage answers a different question. Read only the last line and you learn whether you made money. Read the stages and you learn <em>why</em>.</p>

<h3>Revenue</h3>
<p>The <strong>top line</strong> — everything earned from your core trading activity before a single cost is taken out.</p>

<h3>Cost of Goods Sold</h3>
<p><strong>COGS</strong> is the direct cost of what you sold: raw materials, the wholesale cost of stock, the direct labour that went into the job. It does not include rent, marketing or the office phone bill. That distinction matters more than almost anything else on the page, and we come back to it below.</p>

<h3>Gross Profit</h3>
<blockquote>
<p><strong>Revenue − COGS = Gross Profit</strong></p>
</blockquote>
<p>What is left after paying for the thing you sold. This figure speaks to your pricing and your production efficiency, and nothing else. If gross profit is thin, no amount of overhead-trimming further down will rescue the business — the problem is upstream, in what you charge or what it costs you to deliver.</p>

<h3>Operating Expenses and Operating Profit</h3>
<p>Overheads: administrative wages, rent, utilities, insurance, marketing, software. Subtract them from gross profit and you get <strong>operating profit</strong> — the profitability of the actual business model, before financing and tax enter the picture.</p>

<h3>Net Profit</h3>
<p>The bottom line, after everything: interest, tax, and any one-off items. This is the number that answers "did we make money", and the only one most owners can quote from memory.</p>

<h2 id="h-a-worked-example">A Worked Example</h2>
<p>A small Melbourne homewares retailer, one quarter:</p>
<ul>
<li><strong>Revenue:</strong> $180,000</li>
<li><strong>Cost of goods sold:</strong> $108,000 — wholesale stock and freight in</li>
<li><strong>Operating expenses:</strong> $54,000 — rent, wages, insurance, software, marketing</li>
<li><strong>Interest on a business loan:</strong> $3,000</li>
</ul>
<p>Working down:</p>
<ul>
<li>Gross profit: $180,000 − $108,000 = <strong>$72,000</strong></li>
<li>Gross margin: $72,000 ÷ $180,000 = <strong>40%</strong></li>
<li>Operating profit: $72,000 − $54,000 = <strong>$18,000</strong></li>
<li>Net profit before tax: $18,000 − $3,000 = <strong>$15,000</strong></li>
<li>Net margin: $15,000 ÷ $180,000 = <strong>8.3%</strong></li>
</ul>
<p>The useful observation is not the $15,000. It is that overheads consumed three-quarters of gross profit. A 5% lift in price, holding volume, would add $9,000 straight to the bottom line — a 60% increase in net profit from a change most customers would barely register. That is the kind of thing a P&amp;L tells you and a bank balance never will.</p>

<h2 id="h-reading-it-properly">Reading It Properly</h2>
<figure><img src="/blog/what-is-a-profit-and-loss-statement-review.webp" alt="Two people at a shop counter reviewing a printed report together." width="1400" height="788" loading="lazy" /></figure>
<p>Two habits turn the report from a record into a tool.</p>

<h3>Down the page: everything as a percentage of revenue</h3>
<p>Convert each line to a share of revenue. Suddenly the report describes proportions rather than amounts, and outliers announce themselves. Marketing at $15,000 means little on its own; marketing at 30% of revenue is a conversation.</p>
<p>Percentages also make periods comparable. A bigger quarter with a worse gross margin is a problem that raw dollars will happily hide from you.</p>

<h3>Across periods: the same line, quarter on quarter</h3>
<p>Put this quarter beside the last, and beside the same quarter last year. You are looking for lines moving at different speeds to revenue.</p>
<p>Rising sales with a falling margin is the classic warning: costs are climbing faster than income, and growth is quietly making things worse. Catching that in a quarterly review is straightforward. Discovering it at year end is expensive.</p>
<blockquote>
<p>A single P&amp;L tells you what happened. Two tell you what is changing — and what is changing is nearly always the more useful information.</p>
</blockquote>

<h2 id="h-four-ways-a-p-and-l-misleads">Four Ways a P&amp;L Misleads</h2>
<p>An inaccurate P&amp;L is worse than none, because it carries the authority of a report while pointing the wrong way. Four errors account for most of it.</p>

<h3>Costs in the wrong bucket</h3>
<p>Putting an overhead into COGS, or a direct cost into overheads, distorts gross margin. Since gross margin is what you use to judge pricing, the error propagates directly into your pricing decisions — you conclude a product is profitable when it is not, or discount one that was carrying you.</p>

<h3>Ignoring depreciation</h3>
<p>Depreciation spreads the cost of a vehicle, fit-out or equipment across the years it is used. No cash leaves your account this month, so it is easy to leave out — and leaving it out makes the business look more profitable than it is, right up until the asset needs replacing.</p>

<h3>Leaving out your own wage</h3>
<p>If you work in the business and pay yourself nothing, or less than the role is worth, the P&amp;L is flattered by the difference. It reports a profit that only exists because your labour was free. Any comparison against a competitor who pays a manager is meaningless.</p>

<h3>Books that are behind</h3>
<p>A missed cash sale, an expense entered twice, a bank feed not reconciled for six weeks. Individually trivial, cumulatively enough to move the bottom line. The report can only ever be as good as what feeds it — our guide to <a href="/blog/top-small-business-bookkeeping-tips">small business bookkeeping</a> covers keeping that clean.</p>

<h2 id="h-from-net-profit-to-taxable-income">From Net Profit to Taxable Income</h2>
<figure><img src="/blog/what-is-a-profit-and-loss-statement-reading.webp" alt="A small business owner reviewing a printed financial statement at a desk." width="1400" height="788" loading="lazy" /></figure>
<p>Your net profit is where the tax calculation starts, not where it ends. Accounting profit and taxable income are different numbers, and the gap between them is made of specific adjustments:</p>
<ul>
<li><strong>Non-deductible expenses</strong> get added back. Client entertainment, the private-use share of a vehicle, some fines and penalties — real costs to the business, not deductions in the ATO's view.</li>
<li><strong>Depreciation is recalculated</strong> to the ATO's rules, which will not match whatever rate you chose for your own management reporting.</li>
<li><strong>Prepayments</strong> — insurance or an annual subscription paid in advance — may need to be claimed across the periods they cover rather than when the money left.</li>
</ul>
<p>A clean P&amp;L also does most of the work for your activity statements, since the revenue and expense figures behind your GST reporting come straight off it. Our <a href="/services/accounting-and-tax-planning">accounting and tax planning</a> service handles this reconciliation.</p>

<h2 id="h-frequently-asked-questions">Frequently Asked Questions</h2>

<h3>How often should I look at it?</h3>
<p>Monthly. The ATO only needs one a year, but an annual P&amp;L is a post-mortem — it tells you about decisions you can no longer change. A monthly read catches a drifting margin or a creeping supplier cost while there is still something to do about it.</p>

<h3>What is the difference between this and a cash flow statement?</h3>
<p>The P&amp;L measures <strong>profitability</strong> — did revenue exceed expenses over the period. A cash flow statement measures <strong>liquidity</strong> — is there money in the account to pay this week's bills. You need both, because they can disagree completely.</p>

<h3>Why is my profit high but my bank account empty?</h3>
<p>Because most P&amp;Ls are prepared on an accrual basis: revenue is recognised when you invoice, not when you are paid. Sell well on 30- or 60-day terms and the P&amp;L will show a healthy profit while the cash is still sitting with your customers. Add stock purchases, loan principal repayments and tax set-asides — none of which appear as expenses on the P&amp;L — and the gap widens further. Our guide to <a href="/blog/cash-flow-problems-in-small-business">cash flow problems in small business</a> deals with closing it.</p>

<h3>How does it relate to the other reports?</h3>
<p>The P&amp;L covers a period; the <a href="/blog/how-to-read-a-balance-sheet">balance sheet</a> shows a moment, and your net profit flows into its equity section. <a href="/blog/what-is-break-even-analysis">Break-even analysis</a> uses the same cost information to tell you the sales volume that gets you to zero. Together they are the core of <a href="/blog/what-is-management-accounting">management accounting</a>.</p>

<h3>Can I produce it myself?</h3>
<p>Yes — <a href="https://www.xero.com/au/" target="_blank" rel="noopener noreferrer">Xero</a> and <a href="https://www.myob.com/au/" target="_blank" rel="noopener noreferrer">MYOB</a> generate one in a couple of clicks. The catch is that the report inherits every categorisation decision in your chart of accounts. Getting that structure right at setup is worth more than any amount of tidying afterwards.</p>

<hr>
<p>The bottom line answers one question. The lines above it answer the ones that actually change what you do next — whether the pricing works, whether the overheads are proportionate, and whether this quarter is better or worse than it looks.</p>
<p>Trew North Accounting helps Melbourne small business owners read their numbers and act on them. See our <a href="/services/small-business-accountant">small business accounting</a> service, or <a href="/contact">get in touch</a>.</p>`;

const TITLE = 'What Is a Profit and Loss Statement? A Small Business Guide';
const DESCRIPTION =
  'How a P&L is built from revenue down to net profit, a worked example, the two ways to read it, and the four errors that make one misleading.';
const SLUG = '/blog/what-is-a-profit-and-loss-statement';
const PUBLISHED = '2026-08-17';

export default function BlogPostWhatIsAProfitAndLossStatement() {
  return (
    <div className="min-h-screen">
      <SEOHead
        title={`${TITLE} | Trew North Accounting`}
        description={DESCRIPTION}
        canonical={SLUG}
        ogType="article"
        publishedTime={PUBLISHED}
        schema={[
          blogPostingSchema({
            title: TITLE,
            description: DESCRIPTION,
            url: SLUG,
            datePublished: PUBLISHED,
            readingTime: 'PT11M',
          }),
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Blog', url: '/blog' },
            { name: TITLE, url: SLUG },
          ]),
        ]}
      />
      <Navbar />
      <BlogBreadcrumb postTitle={TITLE} />

      {/* Hero */}
      <section className="pt-32 pb-12 sm:pt-40 sm:pb-16 bg-muted/40 border-b border-border">
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
                Accounting
              </span>
            </div>
            <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.1] text-foreground mb-6" style={{ letterSpacing: '-0.03em' }}>
              {TITLE}
            </h1>
            <div className="flex flex-wrap items-center gap-5 text-sm text-foreground/70">
              <span className="flex items-center gap-1.5"><User className="h-4 w-4" aria-hidden="true" /> Darren Trew, CA</span>
              <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" aria-hidden="true" /> 17 August 2026</span>
              <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" aria-hidden="true" /> 11 min read</span>
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
                <nav aria-label="Table of contents" className="bg-muted/40 border border-border rounded-xl p-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">In this article</p>
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
                <div className="bg-secondary text-secondary-foreground rounded-xl p-6">
                  <p className="font-semibold text-base mb-2">Talk to Darren directly</p>
                  <p className="text-sm text-secondary-foreground/75 mb-5 leading-relaxed">
                    Get specific advice for your business — not generic answers.
                  </p>
                  <Button asChild size="sm" className="w-full btn-cta">
                    <Link href="/contact">
                      Book a Free Consultation
                      <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                    </Link>
                  </Button>
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
