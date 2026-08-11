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
  { id: 'h-what-break-even-analysis-is', label: 'What Break-Even Analysis Is' },
  { id: 'h-the-three-pieces-you-need', label: 'The Three Pieces You Need' },
  { id: 'h-calculating-your-break-even-point', label: 'Calculating Your Break-Even Point' },
  { id: 'h-a-worked-example', label: 'A Worked Example' },
  { id: 'h-putting-the-number-to-work', label: 'Putting the Number to Work' },
  { id: 'h-when-you-sell-more-than-one-thing', label: 'When You Sell More Than One Thing' },
  { id: 'h-frequently-asked-questions', label: 'Frequently Asked Questions' },
];

const htmlContent = `<p><strong>Break-even analysis</strong> finds the point where total sales exactly cover total costs — the moment you stop losing money but have not yet made any. It is the financial baseline for the whole operation, and it is arguably the single most useful number a small business owner can know.</p>

<h2 id="h-what-break-even-analysis-is">What Break-Even Analysis Is</h2>
<figure><img src="/blog/what-is-break-even-analysis-break-even.webp" alt="A balance scale weighing coins against a shop model and sales receipt." width="1400" height="788" /></figure>
<p>Picture the business as a seesaw. On one side sit your costs — rent, wages, materials. On the other sits the revenue from every sale. Your break-even point is where the seesaw balances.</p>
<p>Knowing it moves you from hoping you are profitable to knowing precisely how many units you need to shift, or how much revenue you need to bring in, just to keep the lights on.</p>

<h3>Why It Earns Its Keep</h3>
<ul>
<li><strong>Pricing.</strong> It tells you whether a price genuinely contributes to the business or merely covers its own cost.</li>
<li><strong>Targets.</strong> Sales goals stop being arbitrary. You know the number that has to be hit.</li>
<li><strong>Big decisions.</strong> You can price the financial impact of a hire or a bigger lease <em>before</em> you commit.</li>
<li><strong>Planning.</strong> It underpins cash flow forecasting and any loan application you put in front of a lender.</li>
</ul>
<blockquote>
<p>Break-even reframes the monthly review. Instead of asking "did we make a profit?", you can ask the sharper question: "did we sell enough to support the business?"</p>
</blockquote>

<h2 id="h-the-three-pieces-you-need">The Three Pieces You Need</h2>
<figure><img src="/blog/what-is-break-even-analysis-cost-concepts.webp" alt="Three pillars labelled Fixed Costs, Variable Costs and Selling Price." width="1400" height="788" /></figure>

<h3>Fixed Costs</h3>
<p><strong>Fixed costs</strong> are what you pay every month regardless of sales. Sell one item or a thousand — these do not move:</p>
<ul>
<li><strong>Rent</strong> on the shop, office or workshop</li>
<li><strong>Salaries</strong> for permanent staff, and your own director's salary</li>
<li><strong>Insurance</strong> premiums</li>
<li><strong>Software subscriptions</strong> — accounting, hosting, scheduling</li>
<li><strong>Loan repayments</strong> at a fixed monthly amount</li>
</ul>
<p>They are the hurdle you clear each month before profit is even on the table.</p>

<h3>Variable Costs</h3>
<p><strong>Variable costs</strong> rise and fall with sales volume. A month with no sales should mean close to no variable costs:</p>
<ul>
<li><strong>Raw materials</strong> — coffee beans for a café, fabric for a clothing label</li>
<li><strong>Direct labour</strong> — casual hours rostered to customer demand</li>
<li><strong>Sales commissions</strong></li>
<li><strong>Shipping and packaging</strong> for an online store</li>
</ul>

<h3>Contribution Margin</h3>
<p>Subtract the variable cost of one unit from its selling price and you get the <strong>contribution margin</strong>:</p>
<blockquote>
<p><strong>Selling Price Per Unit − Variable Cost Per Unit = Contribution Margin Per Unit</strong></p>
</blockquote>
<p>That is the amount from each sale that goes toward paying off fixed costs. Once fixed costs are covered, the same figure becomes your profit on every sale after that. It is the engine of the whole thing.</p>

<h2 id="h-calculating-your-break-even-point">Calculating Your Break-Even Point</h2>
<figure><img src="/blog/what-is-break-even-analysis-cost-analysis.webp" alt="A calculator and notebook showing a break-even analysis formula." width="1400" height="788" /></figure>
<p>Two formulas, answering slightly different questions.</p>

<h3>In Units</h3>
<blockquote>
<p><strong>Break-Even Point (Units) = Total Fixed Costs ÷ Contribution Margin Per Unit</strong></p>
</blockquote>
<p>Best when you have a fairly straightforward product line and want a tangible sales target.</p>

<h3>In Dollars</h3>
<blockquote>
<p><strong>Break-Even Point (Dollars) = Total Fixed Costs ÷ Contribution Margin Ratio</strong></p>
</blockquote>
<p>The <strong>contribution margin ratio</strong> is the contribution margin per unit divided by the selling price — the share of every dollar earned that is available to cover fixed costs. This version suits businesses selling at multiple price points, or service businesses billing in varied amounts.</p>

<h2 id="h-a-worked-example">A Worked Example</h2>
<p>Take a small Melbourne online store selling custom tote bags. Monthly numbers:</p>
<ul>
<li><strong>Total fixed costs:</strong> $4,000 — studio rent, hosting, software, a modest marketing budget</li>
<li><strong>Selling price per unit:</strong> $50</li>
<li><strong>Variable cost per unit:</strong> $20 — blank bag, printing, packaging</li>
</ul>
<p>Contribution margin first:</p>
<ul>
<li>$50 − $20 = <strong>$30 per bag</strong></li>
</ul>
<p>Then the break-even point:</p>
<ul>
<li>$4,000 ÷ $30 = <strong>133.33 units</strong></li>
</ul>
<p>You cannot sell a third of a tote bag, so round up: <strong>134 bags a month</strong> covers costs. Every bag after that is profit.</p>
<p>Check it: 134 × $30 = $4,020 of contribution margin against $4,000 of fixed costs. Covered, with $20 to spare.</p>

<h3>Automating It</h3>
<p>A spreadsheet is fine at the start. As the business grows it becomes a chore and errors creep in. If your expenses are correctly categorised as fixed or variable in cloud accounting software such as <a href="https://www.xero.com/au/" target="_blank" rel="noopener noreferrer">Xero</a> or <a href="https://www.myob.com/au/" target="_blank" rel="noopener noreferrer">MYOB</a>, the analysis becomes a routine check rather than a project.</p>

<h2 id="h-putting-the-number-to-work">Putting the Number to Work</h2>
<figure><img src="/blog/what-is-break-even-analysis-break-even-graph.webp" alt="A break-even chart showing where the total revenue line crosses total costs." width="1400" height="788" /></figure>

<h3>Pricing</h3>
<p>With the contribution margin in hand you can model changes before making them:</p>
<ul>
<li><strong>Raise the price 10%</strong> — you need fewer units to break even, but you have to weigh whether demand holds.</li>
<li><strong>Run a discount</strong> — how many extra units does the promotion need to shift before it pays for itself? Often the answer is sobering.</li>
</ul>

<h3>Sales Targets</h3>
<p>"Let's have a good month" is not a target. "134 bags" is. It breaks a financial goal into something a team can act on daily, and every sale past it is visibly profit rather than survival.</p>

<h3>Major Decisions</h3>
<ul>
<li><strong>Hiring.</strong> A salaried hire lifts fixed costs. The analysis tells you exactly how much additional monthly revenue is needed to carry it.</li>
<li><strong>Equipment.</strong> New machinery may cut variable cost per unit. Model whether the saving justifies the outlay and the temporary rise in your break-even point.</li>
<li><strong>New products.</strong> Run a separate analysis on the line before committing to stock and marketing.</li>
</ul>

<h3>Cash Flow and Lending</h3>
<p>Break-even volume sharpens cash flow forecasting, and presenting the analysis in a loan application demonstrates you understand your own numbers. Our guide to <a href="/blog/cash-flow-problems-in-small-business">solving cash flow problems in small business</a> covers the forecasting side in more depth, and the <a href="/blog/how-to-read-a-balance-sheet">balance sheet guide</a> covers where these costs end up.</p>

<h2 id="h-when-you-sell-more-than-one-thing">When You Sell More Than One Thing</h2>
<p>Most businesses do not sell a single product at a single price, which makes a single contribution margin misleading. The fix is a <strong>weighted-average contribution margin</strong>:</p>
<ol>
<li>Work out the contribution margin for each product or service.</li>
<li>Work out what share of total unit sales each one represents.</li>
<li>Multiply each margin by its share.</li>
<li>Add the results together.</li>
</ol>
<p>More work, but it reflects what the business actually sells rather than an average that describes nothing.</p>

<h2 id="h-frequently-asked-questions">Frequently Asked Questions</h2>

<h3>How often should I recalculate it?</h3>
<p>Any time your cost base or pricing changes materially — a rent review, a new hire, a supplier increase, a price rise. Otherwise a quarterly check is enough to catch drift.</p>

<h3>Is my own salary a fixed cost?</h3>
<p>If you pay yourself a set amount each month, yes. Leaving it out is one of the most common ways a break-even calculation flatters the business, because it implies your time is free.</p>

<h3>What if my costs are not neatly fixed or variable?</h3>
<p>Some are genuinely mixed — a phone plan with a base fee plus usage, or staff on guaranteed minimum hours with overtime. Split them into their fixed and variable parts rather than forcing them into one column.</p>

<hr>
<p>Break-even is the number that turns a pricing debate, a hiring decision or a loan application from a matter of opinion into a matter of arithmetic.</p>
<p>Trew North Accounting helps Melbourne small business owners build these models and act on them. See our <a href="/services/small-business-planning">small business planning</a> and <a href="/services/small-business-accountant">small business accounting</a> services, or <a href="/contact">get in touch</a> to talk it through.</p>`;

const TITLE = 'What Is Break-Even Analysis? A Guide for Small Business';
const DESCRIPTION =
  'How to work out the point where sales cover costs — fixed and variable costs, contribution margin, both formulas, and a worked example for a Melbourne store.';
const SLUG = '/blog/what-is-break-even-analysis';
const PUBLISHED = '2026-08-12';

export default function BlogPostWhatIsBreakEvenAnalysis() {
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
              <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" aria-hidden="true" /> 12 August 2026</span>
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
