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
  { id: 'h-what-it-is-and-why-it-matters', label: 'What It Is, and Why It Matters' },
  { id: 'h-the-five-account-types', label: 'The Five Account Types' },
  { id: 'h-how-the-numbering-works', label: 'How the Numbering Works' },
  { id: 'h-the-gst-accounts', label: 'The GST Accounts' },
  { id: 'h-what-it-looks-like-in-practice', label: 'What It Looks Like in Practice' },
  { id: 'h-keeping-it-clean', label: 'Keeping It Clean' },
  { id: 'h-frequently-asked-questions', label: 'Frequently Asked Questions' },
];

const htmlContent = `<p>A <strong>chart of accounts</strong> is the list of every account your bookkeeping can post to — the filing system every transaction gets sorted into. It is unglamorous, it takes an afternoon to set up properly, and it quietly determines whether every report you ever run tells you the truth.</p>

<h2 id="h-what-it-is-and-why-it-matters">What It Is, and Why It Matters</h2>
<figure><img src="/blog/what-is-a-chart-of-accounts-workshop.webp" alt="A small business owner comparing a printed page against a laptop at a workshop bench." width="1400" height="788" loading="lazy" /></figure>
<p>Every time money moves, it lands in one account. Those accounts roll up into your <a href="/what-is-a-profit-and-loss-statement">profit and loss statement</a> and your <a href="/how-to-read-a-balance-sheet">balance sheet</a>. Which means the structure of the list decides what those reports can tell you.</p>
<p>Get it right and four things follow:</p>
<ul>
<li><strong>Reports mean something.</strong> You can see where money came from and where it went, without reconstructing it from bank statements.</li>
<li><strong>BAS gets easier.</strong> Dedicated GST accounts turn activity statement preparation into a read rather than an investigation.</li>
<li><strong>Decisions get sharper.</strong> Marketing split by channel tells you which channel works. Marketing as one line tells you nothing.</li>
<li><strong>Your accountant costs you less.</strong> Clean categorisation is the difference between a review and a reconstruction.</li>
</ul>
<blockquote>
<p>The chart of accounts is the one piece of bookkeeping setup that is genuinely worth doing slowly. Everything downstream inherits its decisions, and fixing it later means re-coding history.</p>
</blockquote>

<h2 id="h-the-five-account-types">The Five Account Types</h2>
<p>Every account belongs to one of five categories. Three describe what the business <em>is</em> at a point in time; two describe what it <em>did</em> over a period.</p>
<div class="compare-cards">
<div class="compare-card">
<h4>Assets</h4>
<dl>
<dt>What it is</dt><dd>What the business owns.</dd>
<dt>Typical accounts</dt><dd>Cash at bank, accounts receivable, inventory, equipment, the work ute.</dd>
</dl>
</div>
<div class="compare-card">
<h4>Liabilities</h4>
<dl>
<dt>What it is</dt><dd>What the business owes.</dd>
<dt>Typical accounts</dt><dd>Accounts payable, credit cards, business loans, GST payable, PAYG withholding.</dd>
</dl>
</div>
<div class="compare-card">
<h4>Equity</h4>
<dl>
<dt>What it is</dt><dd>What is left for the owner — assets minus liabilities.</dd>
<dt>Typical accounts</dt><dd>Owner's capital, retained earnings, owner's drawings.</dd>
</dl>
</div>
</div>
<p>Those three always satisfy the accounting equation:</p>
<blockquote>
<p><strong>Assets = Liabilities + Equity</strong></p>
</blockquote>
<p>Everything the business owns was funded either by debt or by the owner. If that equation stops balancing, something is miscoded.</p>
<div class="compare-cards">
<div class="compare-card">
<h4>Revenue</h4>
<dl>
<dt>What it is</dt><dd>Income from what you actually do.</dd>
<dt>Typical accounts</dt><dd>Sales, service fees, project income — ideally split by stream, not lumped.</dd>
</dl>
</div>
<div class="compare-card">
<h4>Expenses</h4>
<dl>
<dt>What it is</dt><dd>The cost of earning that income.</dd>
<dt>Typical accounts</dt><dd>Rent, wages, subscriptions, fuel, insurance, marketing.</dd>
</dl>
</div>
</div>

<h2 id="h-how-the-numbering-works">How the Numbering Works</h2>
<figure><img src="/blog/what-is-a-chart-of-accounts-folders.webp" alt="Manila folders standing in an open desk drawer." width="1400" height="788" loading="lazy" /></figure>
<p>Accounts are numbered in bands, one per type. The convention is near-universal, which is why an accountant can open an unfamiliar file and navigate it immediately.</p>
<ul>
<li><strong>1000s — Assets.</strong> Cash at bank 1100, accounts receivable 1200, equipment 1500.</li>
<li><strong>2000s — Liabilities.</strong> Accounts payable 2100, credit cards 2200, loans 2500.</li>
<li><strong>3000s — Equity.</strong> Owner's capital, retained earnings, drawings.</li>
<li><strong>4000s — Revenue.</strong> One account per meaningful income stream.</li>
<li><strong>5000s — Cost of goods sold.</strong> Direct costs only, kept deliberately apart from overheads.</li>
<li><strong>6000s — Expenses.</strong> Overheads. Usually the longest section.</li>
</ul>
<p>That separation between 5000s and 6000s is the one people skip, and it is the one that matters most. Direct costs sit above gross profit; overheads sit below it. Blur them and your gross margin becomes fiction — which then feeds straight into your pricing.</p>

<h3>Sub-accounts, used sparingly</h3>
<p>Detail comes from sub-accounts under a parent:</p>
<ul>
<li>6100 Marketing</li>
<li>6110 — Social media advertising</li>
<li>6120 — Search advertising</li>
<li>6130 — Design and content</li>
</ul>
<p>Now "are we getting anything back from the ad spend?" is answerable. The temptation is to keep going, and that is where charts of accounts go wrong — see the maintenance section.</p>

<h2 id="h-the-gst-accounts">The GST Accounts</h2>
<p>If you are registered for GST, two accounts do the work, and getting them right is what makes BAS preparation routine.</p>
<ul>
<li><strong>GST collected</strong> — the 10% you charge customers. This is a <strong>liability</strong>. It was never your money; you are holding it for the ATO.</li>
<li><strong>GST paid</strong> — the GST on your purchases, claimable as an input tax credit. This <em>reduces</em> what you owe.</li>
</ul>
<p>The net of the two is what you remit or get refunded. Most cloud software handles the mechanics once your tax codes are set correctly on each account — the errors almost always trace back to an account with the wrong default tax code, not to the GST calculation itself.</p>
<blockquote>
<p>Treat GST collected as money in transit. Businesses that get into trouble with the ATO are usually not the ones that miscalculated — they are the ones that spent it.</p>
</blockquote>
<p>If registration is still ahead of you, our guide on <a href="/should-your-small-business-register-for-gst">whether to register for GST</a> covers the threshold and the decision.</p>

<h2 id="h-what-it-looks-like-in-practice">What It Looks Like in Practice</h2>
<figure><img src="/blog/what-is-a-chart-of-accounts-review.webp" alt="Two people reviewing accounts together on a laptop in a small back office." width="1400" height="788" loading="lazy" /></figure>
<p>The right structure depends on what the business actually does. Three shapes cover most small businesses.</p>

<h3>Sole trader or contractor</h3>
<p>Lean, and built around the business-versus-personal line. One revenue account is often enough. The expense accounts should mirror the deductions you actually claim — motor vehicle, home office, software, tools — so tax time is a read rather than a reconstruction. The account that earns its keep is <strong>owner's drawings</strong>, which keeps personal withdrawals out of your expenses where they would otherwise distort profit.</p>

<h3>Retail</h3>
<p>Inventory and margin drive everything. You need <strong>inventory</strong> as an asset, <strong>cost of goods sold</strong> in the 5000s, and enough expense detail to see the real cost of trading — shop rent, wages, merchant fees. Without COGS separated out, gross margin cannot be calculated at all, and pricing becomes guesswork.</p>

<h3>Services</h3>
<p>Revenue streams are the point. Splitting <strong>retainer income</strong> from <strong>project income</strong> tells you how much of next month is already committed — the single most useful number in a service business. Subcontractor costs belong in cost of sales, not overheads, so project profitability stays visible.</p>

<h2 id="h-keeping-it-clean">Keeping It Clean</h2>
<p>Every accounting platform ships a default chart of accounts. <a href="https://www.xero.com/au/" target="_blank" rel="noopener noreferrer">Xero</a> and <a href="https://www.myob.com/au/" target="_blank" rel="noopener noreferrer">MYOB</a> both give you a workable starting frame — our <a href="/best-accounting-software-for-small-business-australia">software comparison</a> covers choosing between them. The work is customising it, then not letting it sprawl.</p>

<h3>Four habits</h3>
<ul>
<li><strong>Archive what you do not use.</strong> A default chart includes accounts for businesses unlike yours. Every one you leave visible is one someone can miscode into.</li>
<li><strong>Resist creating an account per oddity.</strong> The instinct to add a new account for every unusual expense is how a clean list becomes 300 accounts nobody trusts. Route it through whoever maintains the chart.</li>
<li><strong>Review quarterly.</strong> Archive the dead, add what the business genuinely needs now, and check nothing is being coded to a catch-all.</li>
<li><strong>Never delete an account with history.</strong> Make it inactive instead. Deleting one that has transactions against it damages your comparatives and your audit trail.</li>
</ul>
<blockquote>
<p>The most common failure is not too little detail — it is too much. A chart nobody can navigate gets coded carelessly, and careless coding produces reports that are worse than none, because they still look authoritative.</p>
</blockquote>
<p>If your books are already messy, our guide to <a href="/top-small-business-bookkeeping-tips">small business bookkeeping</a> covers the clean-up, and our <a href="/services/bookkeeping">bookkeeping service</a> covers having it done for you.</p>

<h2 id="h-frequently-asked-questions">Frequently Asked Questions</h2>

<h3>How many accounts should I have?</h3>
<p>Enough to answer the questions you actually ask, and no more. A sole trader might run comfortably on thirty or forty; a retailer tracking several product lines and sales channels will need considerably more. Start from your software's default and add only when you find yourself wanting a number the reports cannot give you.</p>

<h3>Can I change it later?</h3>
<p>Yes, and you should as the business changes. The one rule is to make old accounts inactive rather than deleting them, so history and comparatives survive. A yearly review with your accountant is the natural time.</p>

<h3>What is the difference between this and the general ledger?</h3>
<p>The chart of accounts is the table of contents — the list of categories that exist. The general ledger is the book itself — every transaction, in order, filed under those categories. One is structure; the other is content.</p>

<h3>Does it have to follow the standard numbering?</h3>
<p>No, but there is little to gain from inventing your own. The convention is what lets a bookkeeper, an accountant or a lender read your file without a briefing. Idiosyncratic numbering is a cost you pay every time someone new looks at the books.</p>

<h3>Should I set it up myself?</h3>
<p>You can, and for a straightforward sole trader the default template plus some sensible archiving will do. It is worth a professional eye once there is inventory, payroll, multiple revenue streams or a plan to borrow — those are the cases where a structural mistake compounds quietly for years.</p>

<hr>
<p>A chart of accounts is infrastructure. Nobody admires it, and its value shows up indirectly — in reports you can trust, a BAS that takes an hour, and an accountant who is analysing rather than untangling.</p>
<p>Trew North Accounting sets these up for Melbourne small businesses and keeps them tidy. See our <a href="/services/bookkeeping">bookkeeping</a> and <a href="/services/small-business-accountant">small business accounting</a> services, or <a href="/contact">get in touch</a>.</p>`;

const TITLE = 'What Is a Chart of Accounts? A Guide for Australian Business';
const DESCRIPTION =
  'The five account types, how the numbering works, the GST accounts that make BAS simple, and why separating cost of goods sold from overheads matters most.';
const SLUG = '/what-is-a-chart-of-accounts';
const PUBLISHED = '2026-09-02';

export default function BlogPostWhatIsAChartOfAccounts() {
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
                Bookkeeping
              </span>
            </div>
            <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.1] text-foreground mb-6" style={{ letterSpacing: '-0.03em' }}>
              {TITLE}
            </h1>
            <div className="flex flex-wrap items-center gap-5 text-sm text-foreground/70">
              <span className="flex items-center gap-1.5"><User className="h-4 w-4" aria-hidden="true" /> Darren Trew, CA</span>
              <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" aria-hidden="true" /> 2 September 2026</span>
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
