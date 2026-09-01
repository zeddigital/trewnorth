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
  { id: 'h-what-a-balance-sheet-tells-you', label: 'What a Balance Sheet Tells You' },
  { id: 'h-decoding-your-assets', label: 'Decoding Your Assets' },
  { id: 'h-understanding-what-you-owe', label: 'Understanding What You Owe' },
  { id: 'h-working-out-your-net-worth', label: 'Working Out Your Net Worth' },
  { id: 'h-reading-the-numbers-for-red-flags', label: 'Reading the Numbers for Red Flags' },
  { id: 'h-turning-the-numbers-into-action', label: 'Turning the Numbers into Action' },
  { id: 'h-frequently-asked-questions', label: 'Frequently Asked Questions' },
];

const htmlContent = `<p>Reading a balance sheet comes down to one formula: <strong>Assets = Liabilities + Equity</strong>. That single line gives you a financial snapshot of your business at a specific point in time — what you own, what you owe, and what the business is actually worth.</p>
<p>It is one of the few reports that tells you, in one glance, whether the business is on solid ground.</p>

<h2 id="h-what-a-balance-sheet-tells-you">What a Balance Sheet Tells You</h2>
<figure><img src="/blog/how-to-read-a-balance-sheet-balance-sheet.webp" alt="A balance sheet, calculator and cash laid out on a desk." width="1400" height="788" /></figure>
<p>It is tempting to treat the balance sheet as another compliance document. It is closer to a diagnostic tool — the business equivalent of taking your vitals. Four things it answers immediately:</p>
<ul>
<li><strong>Can you cover what you owe?</strong> If your assets exceed your liabilities, you are solvent. If they do not, you are not.</li>
<li><strong>Will a lender back you?</strong> Banks read your balance sheet before they read anything else about your business.</li>
<li><strong>Can you afford the next move?</strong> Expansion, equipment, another hire — the answer is on this page.</li>
<li><strong>Are your tax numbers sound?</strong> Accurate BAS and tax reporting rest on the same underlying records.</li>
</ul>
<blockquote>
<p><strong>The rule the name comes from:</strong> both sides must always balance. Total assets have to equal liabilities plus owner's equity. If they do not, there is an error in the bookkeeping — not a quirk of your business.</p>
</blockquote>

<h3>A Worked Example: A Melbourne Café</h3>
<p>To keep this concrete, take a fictional Melbourne café — call it Bayside Brews. Its balance sheet shows the cash in the bank, the value of the espresso machine, what it owes suppliers for milk and beans, and the balance left on the business loan.</p>
<p>That is not a list of numbers. It is the story of where the café stands on one particular day, usually 30 June at the end of the financial year. We will follow it through each section.</p>

<h2 id="h-decoding-your-assets">Decoding Your Assets</h2>
<figure><img src="/blog/how-to-read-a-balance-sheet-financial-report.webp" alt="A tablet showing a balance sheet with current and non-current assets, beside an espresso machine." width="1400" height="788" /></figure>
<p><strong>Assets</strong> are everything the business owns that carries value. The section is an inventory of what you have available to generate income, split into two groups by how quickly you could turn them into cash.</p>

<h3>Current Assets</h3>
<p><strong>Current assets</strong> are what you expect to use or convert to cash within a year. They are the clearest signal of short-term health — if these run thin, you struggle to pay suppliers, meet payroll, or absorb a surprise.</p>
<p>For Bayside Brews:</p>
<ul>
<li><strong>Cash and cash equivalents</strong> — the bank accounts and the till.</li>
<li><strong>Accounts receivable</strong> — money owed by corporate catering clients who have not paid yet.</li>
<li><strong>Inventory</strong> — beans, milk, pastries, takeaway cups.</li>
</ul>
<blockquote>
<p><strong>Worth doing this week:</strong> chasing accounts receivable is the fastest way to improve cash flow that does not involve selling anything. Set clear terms and send reminders before invoices age.</p>
</blockquote>

<h3>Non-Current Assets</h3>
<p><strong>Non-current assets</strong> — long-term or fixed assets — are the investments you expect to use for more than a year and cannot easily convert to cash. For the café:</p>
<ul>
<li><strong>Property, plant and equipment</strong> — the espresso machine, grinders, ovens, fridges, furniture.</li>
<li><strong>Vehicles</strong> — a delivery or catering van, if the business owns one.</li>
<li><strong>Intangible assets</strong> — goodwill, trademarks, brand value.</li>
</ul>

<h3>Depreciation</h3>
<p><strong>Depreciation</strong> spreads the cost of a non-current asset across its useful life. The ATO publishes effective-life guidance for asset classes, and the espresso machine will not be worth what you paid for it indefinitely.</p>
<p>Each year you record a depreciation expense, which reduces the asset's book value on the balance sheet. This is not box-ticking: it gives a realistic view of what your assets are worth, and it is deductible.</p>
<p>Cloud accounting software such as <a href="https://www.xero.com/au/" target="_blank" rel="noopener noreferrer">Xero</a> or <a href="https://www.myob.com/au/" target="_blank" rel="noopener noreferrer">MYOB</a> will automate the calculation once the asset is set up correctly.</p>

<h2 id="h-understanding-what-you-owe">Understanding What You Owe</h2>
<p>Liabilities are the claims against your assets — what you owe suppliers, lenders and the ATO. They split the same way assets do.</p>

<h3>Current Liabilities</h3>
<p><strong>Current liabilities</strong> fall due within twelve months. For Bayside Brews that means:</p>
<ul>
<li><strong>Accounts payable</strong> — unpaid supplier invoices for goods already received.</li>
<li><strong>Short-term loans</strong> — a line of credit, or the portion of a larger loan due this year.</li>
<li><strong>Accrued expenses</strong> — costs incurred but not yet paid, such as wages for the current pay cycle.</li>
<li><strong>GST and PAYG withholding payable</strong> — GST collected on sales and tax withheld from wages, owed to the ATO at the next BAS.</li>
</ul>
<blockquote>
<p><strong>A lever most owners forget:</strong> supplier payment terms are negotiable. An extra 15 or 30 days on your largest accounts changes your cash position without costing you anything.</p>
</blockquote>

<h3>Non-Current Liabilities</h3>
<p><strong>Non-current liabilities</strong> are commitments due beyond the next year — the portion of a business loan falling due after twelve months, or future rent under a multi-year lease. They feel less urgent, which is exactly why they get away from people.</p>
<p>The two that most often catch small businesses out are accumulated GST instalments and unpaid superannuation. Both are other people's money sitting in your account, and both attract ATO attention when they slip.</p>

<h2 id="h-working-out-your-net-worth">Working Out Your Net Worth</h2>
<figure><img src="/blog/how-to-read-a-balance-sheet-balance-sheet-1.webp" alt="A person working through financial calculations in a notebook beside a laptop." width="1400" height="788" /></figure>
<p>If you sold every asset and settled every debt today, what would be left? That is your <strong>equity</strong> — the part of the business that genuinely belongs to you.</p>
<blockquote>
<p><strong>Equity = Total Assets − Total Liabilities</strong></p>
</blockquote>
<p>It usually breaks into two parts:</p>
<ul>
<li><strong>Share capital</strong> — what the owners originally put in. Owner's capital for a sole trader; issued shares for a company.</li>
<li><strong>Retained earnings</strong> — the running total of profits kept in the business rather than drawn out.</li>
</ul>

<h3>What Equity Means in Practice</h3>
<p>Say Bayside Brews has:</p>
<ul>
<li><strong>Total assets:</strong> $150,000</li>
<li><strong>Total liabilities:</strong> $90,000</li>
</ul>
<p>Equity is <strong>$60,000</strong>. That figure is what a lender weighs when the owner asks to fund a second site.</p>
<p>If equity were negative, the business would owe more than it owns — technically insolvent. Taking on further debt in that position is not a growth decision, it is a solvency problem.</p>

<h2 id="h-reading-the-numbers-for-red-flags">Reading the Numbers for Red Flags</h2>
<p>The balance sheet becomes genuinely useful when you run a few ratios across it. These are rules of thumb rather than rules — they vary by industry and business age — but they are the ones lenders and accountants reach for first.</p>

<h3>Current Ratio: can you pay the bills?</h3>
<p>Current assets divided by current liabilities. As a rough guide, aim for <strong>1.5 to 2.0</strong>. Below 1.0 means short-term obligations exceed the assets available to meet them.</p>
<p>Bayside Brews has $75,000 in current assets and $40,000 in current liabilities:</p>
<ul>
<li>$75,000 ÷ $40,000 = <strong>1.875</strong></li>
</ul>
<p>Roughly $1.88 of accessible assets for every $1 owed in the short term. Comfortable.</p>
<blockquote>
<p><strong>Higher is not always better.</strong> A current ratio drifting past 3.0 can mean idle cash or inventory that is not moving — assets that are not working.</p>
</blockquote>

<h3>Debt-to-Equity: how is the business funded?</h3>
<p>Total liabilities divided by total equity. Lenders watch this one closely. Below <strong>1.5</strong> is generally comfortable; above <strong>2.0</strong> and new borrowing gets harder.</p>
<p>With $90,000 of liabilities and $60,000 of equity:</p>
<ul>
<li>$90,000 ÷ $60,000 = <strong>1.5</strong></li>
</ul>
<p>$1.50 of debt for every $1 of owner's equity — at the edge of the comfortable range, and a signal to pay down debt or lift profit.</p>

<h3>Return on Equity: is your money working?</h3>
<p>Net profit after tax divided by total equity. A net profit of $12,000 against $60,000 of equity gives:</p>
<ul>
<li>$12,000 ÷ $60,000 = <strong>20%</strong></li>
</ul>
<p>Twenty cents of profit for every dollar the owner has invested.</p>
<figure><img src="/blog/how-to-read-a-balance-sheet-financial-ratios.webp" alt="Diagram explaining the current ratio, debt-to-equity ratio and return on equity." width="1344" height="768" /></figure>

<h3>Other Signals Worth Watching</h3>
<ul>
<li><strong>Negative equity</strong> — liabilities exceed assets. The business is technically insolvent.</li>
<li><strong>Falling cash reserves</strong> — cash dropping month on month even while the P&amp;L shows a profit. A classic early warning.</li>
<li><strong>Debt outgrowing assets</strong> — liabilities climbing faster than what they are funding.</li>
</ul>

<h2 id="h-turning-the-numbers-into-action">Turning the Numbers into Action</h2>
<p>Reading the balance sheet is the first step. Changing what it says is the point.</p>

<h3>On the asset side</h3>
<ul>
<li><strong>Get paid faster.</strong> Every dollar in accounts receivable is cash you have earned but cannot use. Tighten terms and automate reminders.</li>
<li><strong>Move slow stock.</strong> Excess inventory is cash sitting on a shelf. Watch your turnover rate and clear what is not selling.</li>
</ul>
<p>Both of these are covered in more depth in our guide to <a href="/cash-flow-problems-in-small-business">solving cash flow problems in small business</a>.</p>

<h3>On the liability and equity side</h3>
<ul>
<li><strong>Pay down expensive debt first.</strong> High-interest facilities like credit cards drag on both cash flow and your debt-to-equity ratio.</li>
<li><strong>Negotiate supplier terms.</strong> The cheapest financing available to most small businesses.</li>
<li><strong>Grow retained earnings.</strong> Reinvesting profit is the most durable way to build equity.</li>
</ul>

<h2 id="h-frequently-asked-questions">Frequently Asked Questions</h2>

<h3>How often should I review my balance sheet?</h3>
<p>Monthly is the sweet spot for most small businesses — often enough to catch a trend before it becomes a problem. Quarterly is the practical minimum. Less than that and you are reading history rather than managing the business.</p>

<h3>What is the difference between a balance sheet and a profit and loss statement?</h3>
<ul>
<li><strong>Balance sheet</strong> — a snapshot on a <em>single day</em>. What you own and owe at that moment.</li>
<li><strong>Profit and loss</strong> — a story across a <em>period</em>. Revenue less expenses, showing whether you made money.</li>
</ul>
<blockquote>
<p>The balance sheet shows where the business <em>stands</em>. The P&amp;L shows how it <em>performed</em>.</p>
</blockquote>

<h3>Can a business be profitable and still have negative equity?</h3>
<p>Yes, and it is more common than you would think. A profitable year does not erase accumulated losses from earlier ones, and drawings taken above what the business earned will pull equity down regardless of how the current year looks. It is usually a sign that past problems are still weighing on the balance sheet.</p>

<hr>
<p>If your balance sheet is a report you file rather than a report you use, that is worth fixing — it is the fastest way to know whether the business is actually working.</p>
<p>Trew North Accounting helps Melbourne small business owners read their numbers and act on them. See our <a href="/services/bookkeeping">bookkeeping</a> and <a href="/services/small-business-accountant">small business accounting</a> services, or <a href="/contact">get in touch</a> to talk it through.</p>`;

const TITLE = 'How to Read a Balance Sheet: A Guide for Australian Businesses';
const DESCRIPTION =
  'What assets, liabilities and equity actually mean, the ratios that matter, and how to spot trouble early — worked through with a Melbourne café example.';
const SLUG = '/how-to-read-a-balance-sheet';
const PUBLISHED = '2026-08-11';

export default function BlogPostHowToReadABalanceSheet() {
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
              <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" aria-hidden="true" /> 11 August 2026</span>
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
