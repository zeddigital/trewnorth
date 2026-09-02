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
  { id: 'h-looking-forward-not-back', label: 'Looking Forward, Not Back' },
  { id: 'h-three-jobs-often-confused', label: 'Three Jobs, Often Confused' },
  { id: 'h-the-four-core-tools', label: 'The Four Core Tools' },
  { id: 'h-what-it-changes-in-practice', label: 'What It Changes in Practice' },
  { id: 'h-a-six-step-starting-checklist', label: 'A Six-Step Starting Checklist' },
  { id: 'h-when-to-bring-in-help', label: 'When to Bring in Help' },
  { id: 'h-frequently-asked-questions', label: 'Frequently Asked Questions' },
];

const htmlContent = `<p>If financial accounting is the rear-view mirror, <strong>management accounting</strong> is the dashboard, the fuel gauge, the speedometer and the route ahead. It is the practice of using your own numbers to run the business, rather than to report on it.</p>

<h2 id="h-looking-forward-not-back">Looking Forward, Not Back</h2>
<p>Financial accounting exists to satisfy people outside the business: the ATO, a lender, an investor. It looks backwards, and it has to follow prescribed standards.</p>
<p>Management accounting has no external audience and no prescribed format. It exists to answer the questions that actually keep an owner awake:</p>
<ul>
<li><strong>Pricing.</strong> Is this product line genuinely making money once everything is counted?</li>
<li><strong>Capacity.</strong> Can we afford another staff member next quarter?</li>
<li><strong>Efficiency.</strong> Which service costs more to deliver than it earns?</li>
</ul>
<blockquote>
<p>Financial accounting gives you last year's history lesson. Management accounting gives you next quarter's forecast, and the reports are shaped around your questions, not a regulator's.</p>
</blockquote>
<p>Take a construction company in Melbourne. Its financial accounts report annual profit to the ATO. That is compliance, and it happens once. Its management accounts track cost by job, which sharpens every quote it writes and tells the owner months ahead when payroll and material orders will collide.</p>

<h2 id="h-three-jobs-often-confused">Three Jobs, Often Confused</h2>
<p>Bookkeeping, financial accounting and management accounting get used interchangeably. They are three different jobs, and each depends on the one before it.</p>
<div class="compare-cards">
<div class="compare-card">
<h4>Bookkeeping</h4>
<dl>
<dt>Looks at</dt><dd>The past, daily</dd>
<dt>Made for</dt><dd>Everyone downstream</dd>
<dt>Produces</dt><dd>A clean general ledger</dd>
</dl>
</div>
<div class="compare-card">
<h4>Financial Accounting</h4>
<dl>
<dt>Looks at</dt><dd>The past, periodically</dd>
<dt>Made for</dt><dd>The ATO, banks, investors</dd>
<dt>Produces</dt><dd>P&amp;L, balance sheet, cash flow statement</dd>
</dl>
</div>
<div class="compare-card compare-card--accent">
<h4>Management Accounting</h4>
<dl>
<dt>Looks at</dt><dd>The months ahead</dd>
<dt>Made for</dt><dd>You</dd>
<dt>Produces</dt><dd>Budgets, forecasts, KPIs</dd>
</dl>
</div>
</div>

<h3>Bookkeeping: The Record</h3>
<p>The ground-level work of capturing every transaction: sales, purchases, payments, receipts. The output is a clean <strong>general ledger</strong>. Nothing else in this article is possible without it, which is why "our books are a bit behind" is never a small problem.</p>

<h3>Financial Accounting, The Report</h3>
<p>Turns that raw data into standardised statements, the <strong>profit and loss</strong>, the <strong>balance sheet</strong>, the <strong>cash flow statement</strong>, prepared in line with Australian Accounting Standards and handed to the ATO, the bank or an investor. Our guides to <a href="/how-to-read-a-balance-sheet">reading a balance sheet</a> and <a href="/top-small-business-bookkeeping-tips">keeping the books straight</a> cover this ground in detail.</p>

<h3>Management Accounting: The Decision</h3>
<p>Same underlying data, entirely different purpose. Budgets, cash flow forecasts, cost analyses and performance dashboards, built to answer a specific question you are facing right now. Nobody outside the business ever sees them.</p>
<blockquote>
<p>Financial accounting reports the past to outsiders. Management accounting uses that same data to help insiders shape what happens next.</p>
</blockquote>

<h2 id="h-the-four-core-tools">The Four Core Tools</h2>
<figure><img src="/blog/what-is-management-accounting-business-analysis.webp" alt="A desk with a laptop showing data, a calculator, a KPI report with a bar chart and a magnifying glass." width="1400" height="788" loading="lazy" /></figure>
<p>Four instruments do most of the work. None of them require a finance degree.</p>

<h3>Cost Accounting</h3>
<p>Working out what things genuinely cost, materials and labour, but also the share of rent, power and insurance that each job or product should carry.</p>
<p>Without it you are pricing blind, and a bestseller can quietly be your least profitable line. A café that knows a flat white costs it $1.85 to make can price it at $4.50 with confidence rather than by looking at the shop next door.</p>
<p>The natural companion here is <a href="/what-is-break-even-analysis">break-even analysis</a>, which turns your cost structure into a sales target you can actually act on.</p>

<h3>Budgeting and Forecasting</h3>
<p>A budget is the plan for the period. A forecast is the projection of what will really happen, updated as reality arrives.</p>
<p>A trade contractor budgets the quarter (revenue, materials, subcontractors, overheads) and runs a cash flow forecast alongside it that shows cash tightening in May. Knowing that in February means arranging a facility or renegotiating terms calmly, rather than in a panic in May. Our guide to <a href="/cash-flow-problems-in-small-business">cash flow problems in small business</a> goes deeper on the forecasting side.</p>

<h3>Performance Measurement</h3>
<p><strong>Key performance indicators</strong> are the handful of numbers that tell you whether the business is doing what you need it to. Total revenue rarely qualifies. For an online retailer, the informative ones might be:</p>
<ul>
<li><strong>Customer acquisition cost:</strong> what it costs in marketing to win one customer</li>
<li><strong>Average order value:</strong> whether customers are spending more per transaction over time</li>
<li><strong>Gross profit margin:</strong> what share of revenue survives the cost of goods sold</li>
</ul>
<blockquote>
<p>A KPI is a vital sign. A doctor does not check every measurement available, they check the few that reveal the most, and they check them regularly.</p>
</blockquote>

<h3>Variance Analysis</h3>
<p>Comparing what happened against what you planned, then asking why they differ. This is the step that ties the other three together.</p>
<p>An agency budgets $5,000 for project expenses and spends $6,500. The $1,500 gap is not the finding. The reason for it is. A software price rise is a permanent adjustment to future budgets; a project that consumed more resource than scoped is a quoting problem. Two very different responses, and you only find out which by looking.</p>

<h2 id="h-what-it-changes-in-practice">What It Changes in Practice</h2>

<h3>Decisions Stop Being Guesses</h3>
<p>You can model a move before committing to it: what a 10% price rise does to margin and volume, what a new hire costs in real terms, which services are genuinely carrying the business. Understanding your own cost base also tells you exactly how far you can go on price and still make money, useful information when a competitive quote is on the table.</p>

<h3>Cash Flow Becomes Predictable</h3>
<p>Forecasting income and outgoings means spotting a shortfall while there is still time to do something about it. Most cash crises are visible months in advance to anyone who is looking. See our <a href="/services/small-business-planning">small business planning</a> service for how we set this up.</p>

<h3>Budgets Become Useful</h3>
<p>A budget built this way stops being a wish list and starts doing three jobs: allocating money where the return is best, setting targets a team can be measured against, and flagging constraints before they bite.</p>

<h3>Pricing Gets Precise</h3>
<p>An electrician who costs each job properly (materials, their own and an apprentice's time, and a calculated share of van insurance, tools and phone) knows a job will cost $780 and quotes $1,100 with a clear margin. The same electrician working on instinct might quote $900 and barely cover costs.</p>

<h3>Compliance Gets Easier</h3>
<p>This is the side benefit nobody expects. Clean, well-categorised data prepared for your own decision-making is the same data that makes BAS and tax time straightforward. Our <a href="/services/accounting-and-tax-planning">accounting and tax planning</a> work runs on exactly this principle.</p>

<h2 id="h-a-six-step-starting-checklist">A Six-Step Starting Checklist</h2>
<figure><img src="/blog/what-is-management-accounting-checklist.webp" alt="A hand beside a Get Started checklist, a smartphone and a coffee on a desk." width="1400" height="788" loading="lazy" /></figure>
<p>None of this needs to start as a project. Six steps, in order.</p>

<h3>1. Get the bookkeeping clean</h3>
<p>Reconcile every bank account, credit card and loan. Categorise expenses properly and confirm all income is recorded. Reports built on messy data are worse than no reports, because they carry false authority.</p>

<h3>2. Learn your software's reporting</h3>
<p>Platforms such as <a href="https://www.xero.com/au/" target="_blank" rel="noopener noreferrer">Xero</a> and <a href="https://www.myob.com/au/" target="_blank" rel="noopener noreferrer">MYOB</a> hold everything you need. Learn to run a profit and loss, a balance sheet and an accounts receivable ageing summary. Our <a href="/best-accounting-software-for-small-business-australia">software comparison</a> covers choosing between them.</p>

<h3>3. Write down your goals</h3>
<p>Pick your top three for the next twelve months and make them measurable. "Lift net profit margin from 10% to 15%" gives you something to analyse. "Make more money" does not.</p>

<h3>4. Choose three to five KPIs</h3>
<p>Tie them to the goals you just wrote. Chasing profitability points you at gross and net margin; chasing cash points you at days sales outstanding. Three well-chosen numbers beat twenty you never look at.</p>

<h3>5. Build one simple budget</h3>
<p>Use last year's figures to project the coming quarter's revenue and expenses. An approximate budget you actually compare against is worth far more than a precise one you never finish.</p>

<h3>6. Book a monthly review</h3>
<p>One hour in the calendar, treated like a client meeting. Run the reports, compare actual against budget, check the KPIs, and answer three questions: what worked, what did not, and what changes next month.</p>

<h2 id="h-when-to-bring-in-help">When to Bring in Help</h2>
<p>Four situations reliably signal that the do-it-yourself stage has been outgrown.</p>
<ul>
<li><strong>Rapid growth.</strong> Sales climbing and headcount rising is exactly when financial control slips, because the informal systems that worked at half the size quietly stop working.</li>
<li><strong>Persistent cash pressure.</strong> Profitable on paper but always short in the bank means cash is trapped somewhere specific (in debtors, in stock, or in payment timing) and it needs finding.</li>
<li><strong>Approaching a lender or investor.</strong> Both expect projections and budgets that stand up to scrutiny. A shoebox of receipts and a good story is not enough.</li>
<li><strong>No one to think it through with.</strong> Plenty of data, nobody to help interpret it. This is the least urgent trigger and often the most valuable one.</li>
</ul>
<p>If you are spending more time in spreadsheets than in the business, that is the signal. Our <a href="/services/small-business-accountant">small business accounting</a> service is built around exactly this work.</p>

<h2 id="h-frequently-asked-questions">Frequently Asked Questions</h2>

<h3>Can I do this myself in Xero?</h3>
<p>You can get a long way. Xero and MYOB generate the underlying reports perfectly well. The harder part is interpretation, knowing which report answers your question, what the numbers mean in your context, and which of them warrants acting on.</p>

<h3>How often should I review the reports?</h3>
<p>Monthly suits most small businesses. It is frequent enough to catch a trend while it is still forming, and infrequent enough to stay realistic alongside running the business. Waiting until year-end means making decisions on old news.</p>

<h3>Is this worth paying for?</h3>
<p>The fair way to judge it is whether the decisions it improves are worth more than it costs. Better pricing, tighter costs and fewer cash surprises tend to settle that question quickly, but it is a reasonable thing to ask before starting, not after.</p>

<h3>What if my business is small?</h3>
<p>The tools scale down cleanly. A sole trader who knows their break-even point, tracks three KPIs and reviews the numbers monthly is doing management accounting, whatever it gets called.</p>

<hr>
<p>Compliance tells you what the business did. Management accounting tells you what to do next, and it runs on the numbers you are already collecting.</p>
<p>Trew North Accounting helps Melbourne small business owners set up the reports, read them properly and act on what they show. See our <a href="/services/small-business-planning">small business planning</a> and <a href="/services/small-business-accountant">small business accounting</a> services, or <a href="/contact">get in touch</a> to talk it through.</p>`;

const TITLE = 'What Is Management Accounting? A Small Business Guide';
const DESCRIPTION =
  'How management accounting differs from bookkeeping and financial accounting, the four tools that matter, and a six-step checklist for getting started.';
const SLUG = '/what-is-management-accounting';
const PUBLISHED = '2026-08-13';

export default function BlogPostWhatIsManagementAccounting() {
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
            readingTime: 'PT12M',
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
              <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" aria-hidden="true" /> 13 August 2026</span>
              <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" aria-hidden="true" /> 12 min read</span>
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
                    Get specific advice for your business, not generic answers.
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
