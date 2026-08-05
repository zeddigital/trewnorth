import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowLeft, ArrowRight, Clock, Calendar, User, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { BlogCTA } from '@/components/blog-cta';
import { SEOHead, blogPostingSchema, breadcrumbSchema, faqSchema } from '@/components/seo-head';
import { BlogBreadcrumb } from '@/components/blog-breadcrumb';

const toc = [
  { id: 'why-bookkeeping',     label: 'Why bookkeeping matters' },
  { id: 'separate-accounts',   label: 'Separate personal and business finances' },
  { id: 'software',            label: 'Choose the right accounting software' },
  { id: 'reconcile',           label: 'Reconcile accounts regularly' },
  { id: 'receipts',            label: 'Keep receipts and records' },
  { id: 'invoicing',           label: 'Invoice promptly and follow up' },
  { id: 'cash-flow',           label: 'Monitor cash flow weekly' },
  { id: 'payroll',             label: 'Stay on top of payroll and super' },
  { id: 'bas',                 label: 'Prepare for BAS on time' },
  { id: 'year-end',            label: 'Year-end preparation' },
  { id: 'bookkeeper-vs-accountant', label: 'Bookkeeper vs accountant' },
  { id: 'key-terms',           label: 'Key bookkeeping terms explained' },
  { id: 'faq',                 label: 'Frequently asked questions' },
];

const bookkeepingFaqs = [
  {
    question: 'How long do I need to keep business records in Australia?',
    answer: 'The ATO requires you to keep most business records for at least 5 years from the date of the transaction, or 5 years from when you prepared or obtained the record. For certain capital assets, records must be kept for 5 years after you dispose of the asset.',
  },
  {
    question: 'What\'s the difference between a bookkeeper and an accountant?',
    answer: 'A bookkeeper records and organises day-to-day financial transactions — including bank reconciliations, payroll, invoicing, and BAS preparation. An accountant interprets that financial data, prepares tax returns, provides strategic advice, and helps with business structure and planning. Many small businesses benefit from both working together.',
  },
  {
    question: 'How often should I reconcile my bank accounts?',
    answer: 'Aim to reconcile at least weekly if you use cloud accounting software with automated bank feeds. Monthly reconciliation is the minimum — but problems can compound quickly if left too long. Weekly reconciliation catches errors early and keeps your financial data reliable for decision-making.',
  },
  {
    question: 'What accounting software is best for Australian small businesses?',
    answer: 'Xero is the most widely used cloud accounting platform in Australia and is particularly popular among small businesses working with accountants or bookkeepers. MYOB is strong for payroll and inventory. QuickBooks offers good value. The best choice depends on your business size, industry, and the preference of your accountant or bookkeeper.',
  },
  {
    question: 'When do I need to lodge a BAS?',
    answer: 'If you\'re registered for GST, you must lodge a Business Activity Statement (BAS) quarterly (most small businesses), monthly (if turnover is $20M+), or annually (if voluntarily registered with under $75K turnover). Quarterly BAS is due 28 days after the end of each quarter, with a slight extension if you lodge online through the ATO portal.',
  },
];

export default function BlogPostBookkeepingTips() {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Top Small Business Bookkeeping Tips | Trew North Accounting"
        description="Effective bookkeeping is the foundation of a healthy business. Practical tips, key terms, and accounting software recommendations for Melbourne small business owners."
        canonical="/blog/top-small-business-bookkeeping-tips"
        ogType="article"
        publishedTime="2025-04-23"
        schema={[
          blogPostingSchema({
            title: 'Top Small Business Bookkeeping Tips: Simplify Your Finances',
            description: 'Effective bookkeeping is the foundation of a healthy business. These practical tips, key terms, and tool recommendations will help you stay on top of your finances without the stress.',
            url: '/blog/top-small-business-bookkeeping-tips',
            datePublished: '2025-04-23',
            readingTime: 'PT8M',
          }),
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Blog', url: '/blog' },
            { name: 'Top Small Business Bookkeeping Tips', url: '/blog/top-small-business-bookkeeping-tips' },
          ]),
          faqSchema(bookkeepingFaqs),
        ]}
      />
      <Navbar />
      <BlogBreadcrumb postTitle="Top Small Business Bookkeeping Tips" />

      {/* ── Hero ── */}
      <section className="pt-32 pb-12 sm:pt-40 sm:pb-16 bg-muted/40 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline mb-6"
            >
              <ArrowLeft className="h-4 w-4" /> Back to articles
            </Link>

            <div className="mb-4">
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-cta/10 text-cta">
                Bookkeeping
              </span>
            </div>

            <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.1] text-foreground mb-6" style={{ letterSpacing: '-0.03em' }}>
              Top Small Business Bookkeeping Tips: Simplify Your Finances
            </h1>

            <p className="text-xl text-foreground/70 leading-relaxed mb-8">
              Effective bookkeeping is the foundation of a healthy business. These practical tips, key terms, and tool recommendations will help you stay on top of your finances without the stress.
            </p>

            <div className="flex flex-wrap items-center gap-5 text-sm text-foreground/55">
              <span className="flex items-center gap-1.5">
                <User className="h-4 w-4" /> Darren Trew, CA
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" /> 23 April 2025
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" /> 8 min read
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Body ── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-16">

            {/* ── Article content ── */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="min-w-0"
            >
              <div className="prose-article">

                {/* Direct answer block */}
                <div className="callout">
                  <p className="font-semibold text-foreground mb-1">The short answer</p>
                  <p><strong>Good bookkeeping means recording every transaction — income, expenses, and bank movements — accurately and consistently. Australian businesses must keep records for at least 5 years. The single most impactful habit is separating personal and business finances from day one, followed by weekly bank reconciliation and sending invoices the moment work is complete.</strong></p>
                  <p className="text-xs text-foreground/60 mt-2">Source: <a href="https://www.ato.gov.au/businesses-and-organisations/record-keeping-for-business" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">ATO record-keeping for business</a></p>
                </div>

                <p>
                  Good bookkeeping isn't glamorous — but it's one of the most valuable things a small business owner can do. Accurate, up-to-date books give you a clear picture of where your business stands financially, help you make better decisions, reduce stress at tax time, and ensure you stay compliant with the ATO.
                </p>
                <p>
                  The challenge is that many small business owners find bookkeeping confusing, time-consuming, or easy to push to the bottom of the to-do list. This guide cuts through the complexity with practical, actionable tips that any business owner can implement.
                </p>

                <h2 id="why-bookkeeping">Why Bookkeeping Matters</h2>
                <p>
                  Bookkeeping is the process of recording and organising all financial transactions in your business — every sale, every expense, every payment in and out. When done well, it gives you:
                </p>
                <ul>
                  <li><strong>Financial clarity:</strong> Know exactly how much money you have, what you're owed, and what you owe.</li>
                  <li><strong>Tax readiness:</strong> Accurate records make tax time faster, cheaper, and less stressful.</li>
                  <li><strong>Better decisions:</strong> You can't make informed decisions without reliable financial data.</li>
                  <li><strong>ATO compliance:</strong> The ATO requires businesses to keep records for 5 years. Good systems make this automatic.</li>
                  <li><strong>Cash flow control:</strong> Knowing your cash position prevents nasty surprises.</li>
                </ul>

                <h2 id="separate-accounts">Separate Personal and Business Finances</h2>
                <p>
                  This is the single most important bookkeeping rule: keep your personal and business finances completely separate. Open a dedicated business bank account and use it exclusively for business income and expenses. Mixing personal and business transactions creates confusion, makes bookkeeping far more complex, and raises red flags with the ATO.
                </p>
                <p>
                  The same principle applies to credit cards. A dedicated business credit card makes it easy to track expenses and maximise deductions.
                </p>

                <h2 id="software">Choose the Right Accounting Software</h2>
                <p>
                  Modern cloud accounting software has transformed bookkeeping for small businesses. It automates bank feeds, simplifies reconciliation, generates invoices, calculates GST, and produces financial reports — all without needing a bookkeeping degree.
                </p>
                <div className="callout">
                  <p className="font-semibold text-foreground mb-2">Popular options for Australian small businesses:</p>
                  <ul>
                    <li><strong>Xero</strong> — Market-leading, highly intuitive, excellent for businesses with multiple team members or advisors. Connects with hundreds of third-party apps.</li>
                    <li><strong>MYOB</strong> — Long-established Australian software, particularly strong for payroll and inventory management.</li>
                    <li><strong>QuickBooks</strong> — Good value option with solid reporting capabilities.</li>
                    <li><strong>Wave</strong> — Free option for very small businesses with basic needs.</li>
                  </ul>
                </div>
                <p>
                  Any of these is vastly better than a spreadsheet. The right choice depends on your business size, industry, and whether you work with a bookkeeper or accountant who recommends a particular platform.
                </p>

                <h2 id="reconcile">Reconcile Accounts Regularly</h2>
                <p>
                  Bank reconciliation is the process of matching your accounting records against your actual bank statements to ensure they agree. It catches errors, identifies missing transactions, and spots any fraudulent activity.
                </p>
                <p>
                  Most cloud accounting software makes reconciliation straightforward through automated bank feeds — transactions are imported daily, and you simply confirm or categorise them. Aim to reconcile at least weekly. Monthly reconciliation works, but problems can compound quickly if left too long.
                </p>

                <h2 id="receipts">Keep Receipts and Records</h2>
                <p>
                  The ATO requires you to keep records for 5 years. For tax deductions, "no receipt, no deduction" is the practical rule. A digital receipt management system is far more reliable than a shoebox of paper.
                </p>
                <p>
                  Apps like Hubdoc, Dext (formerly Receipt Bank), or even your phone's camera can capture and store receipts automatically. Many integrate directly with Xero or MYOB, so the expense is recorded the moment you photograph the receipt.
                </p>

                <h2 id="invoicing">Invoice Promptly and Follow Up</h2>
                <p>
                  Cash flow problems are often a delayed invoicing problem. Send invoices the moment work is completed or goods are delivered — not at the end of the week or month. Set clear payment terms (14 or 30 days is standard in Australia) and follow up systematically on overdue invoices.
                </p>
                <p>
                  Most accounting software has automated invoice reminders that can be sent 7, 14, and 21 days overdue — set these up and let the software do the chasing.
                </p>

                <h2 id="cash-flow">Monitor Cash Flow Weekly</h2>
                <p>
                  Profit and cash flow are different things. A business can be profitable on paper but run out of cash if customers pay slowly or if there are large upcoming expenses. Monitoring your cash position — what's in the bank, what's owed to you, and what you owe — gives you early warning of potential shortfalls.
                </p>
                <p>
                  Review your cash flow at least weekly. A simple rolling 4–6 week forecast shows you whether you'll have enough cash to meet obligations and when you might need to act.
                </p>

                <h2 id="payroll">Stay on Top of Payroll and Super</h2>
                <p>
                  If you employ staff, payroll is a critical compliance obligation. This includes:
                </p>
                <ul>
                  <li>Paying staff correctly and on time</li>
                  <li>Withholding the correct amount of PAYG tax and remitting it to the ATO</li>
                  <li>Paying superannuation contributions (currently <strong>12% from 1 July 2025</strong>) by the quarterly due dates</li>
                  <li>Reporting via Single Touch Payroll (STP), which is mandatory for all employers</li>
                </ul>
                <p>
                  Late super payments attract the <a href="https://www.ato.gov.au/businesses-and-organisations/super-for-employers/super-guarantee/super-guarantee-charge" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Super Guarantee Charge</a> — which is <strong>not tax-deductible</strong> and significantly more expensive than simply paying on time. The ATO estimates that unpaid or underpaid superannuation remains one of the most common payroll compliance issues for small businesses; ensuring on-time payment is one of the simplest ways to avoid a costly and non-deductible penalty.
                </p>

                <h2 id="bas">Prepare for BAS on Time</h2>
                <p>
                  If you're registered for GST, you must submit a Business Activity Statement (BAS) regularly — usually quarterly. The BAS reports GST collected from sales, GST paid on purchases (input tax credits), and any PAYG withholding.
                </p>
                <p>
                  The best way to make BAS painless is to keep your books up-to-date throughout the quarter, rather than scrambling at deadline. With cloud accounting software connected to your bank, most of the work is done automatically.
                </p>

                <h2 id="year-end">Year-End Preparation</h2>
                <p>
                  The financial year end (30 June) is when clean bookkeeping pays dividends. Businesses with well-maintained books can lodge their tax return quickly and accurately — and are better positioned to take advantage of year-end tax planning strategies.
                </p>
                <p>
                  In the weeks before 30 June, review your financials with your accountant to identify any tax-minimisation opportunities — such as timing large purchases, prepaying deductible expenses, or reviewing your business structure.
                </p>

                <h2 id="bookkeeper-vs-accountant">Bookkeeper vs Accountant — Who Does What?</h2>
                <p>
                  Many small business owners are unclear about the difference. In short:
                </p>
                <ul>
                  <li><strong>Bookkeeper:</strong> Records day-to-day transactions, reconciles accounts, processes payroll, prepares BAS. Focuses on accurate, up-to-date records.</li>
                  <li><strong>Accountant:</strong> Interprets financial data, prepares tax returns, provides strategic advice, and helps with business structure, tax planning, and growth decisions.</li>
                </ul>
                <p>
                  Many small businesses benefit from both — a bookkeeper for ongoing record-keeping and an accountant for tax and strategic advice. The combination is often more cost-effective than you'd expect, and far less expensive than the cost of getting things wrong.
                </p>

                <h2 id="key-terms">Key Bookkeeping Terms Explained</h2>
                <div className="callout">
                  <ul>
                    <li><strong>Accounts receivable (AR):</strong> Money owed to your business by customers. Outstanding invoices you've sent but not yet been paid.</li>
                    <li><strong>Accounts payable (AP):</strong> Money your business owes to suppliers or creditors. Bills you've received but haven't yet paid.</li>
                    <li><strong>Bank reconciliation:</strong> Matching your accounting records to your bank statement to ensure they agree.</li>
                    <li><strong>Chart of accounts:</strong> A categorised list of all accounts used to record transactions in your business (e.g. Sales, Rent, Wages, etc.).</li>
                    <li><strong>Accrual accounting:</strong> Records income and expenses when they are earned or incurred, regardless of when cash changes hands.</li>
                    <li><strong>Cash accounting:</strong> Records income and expenses only when cash is actually received or paid.</li>
                    <li><strong>Profit &amp; loss (P&amp;L):</strong> A financial statement showing revenues and expenses over a period. Shows whether the business is profitable.</li>
                    <li><strong>Balance sheet:</strong> A snapshot of what the business owns (assets), owes (liabilities), and the resulting equity at a point in time.</li>
                  </ul>
                </div>

                {/* FAQ */}
                <h2 id="faq">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  {bookkeepingFaqs.map((faq) => (
                    <div key={faq.question}>
                      <p className="font-semibold text-foreground mb-1">{faq.question}</p>
                      <p>{faq.answer}</p>
                    </div>
                  ))}
                </div>

                {/* Author note */}
                <div className="author-note">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <User className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Darren Trew — Director, Trew North Accounting</p>
                      <p className="text-foreground/65 text-sm leading-relaxed mt-1">
                        Darren is a Chartered Accountant with over 25 years' experience helping Melbourne small businesses get their finances in order. If you'd like help setting up better bookkeeping systems or reviewing your current approach, <Link href="/contact" className="text-primary hover:underline">get in touch</Link>.
                      </p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Bottom nav */}
              <div className="mt-14 pt-8 border-t border-border flex items-center justify-between">
                <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground/60 hover:text-primary transition-colors">
                  <ArrowLeft className="h-4 w-4" /> All articles
                </Link>
                <Link href="/contact" className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline">
                  Speak with Darren <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.article>

            {/* ── Sidebar ── */}
            <aside className="hidden lg:block">
              <div className="sticky top-28 space-y-8">

                {/* Table of contents */}
                <div className="bg-muted/50 rounded-xl p-6 border border-border">
                  <p className="text-xs font-semibold uppercase tracking-widest text-foreground/50 mb-4">In this article</p>
                  <nav>
                    <ul className="space-y-2">
                      {toc.map((item) => (
                        <li key={item.id}>
                          <a
                            href={`#${item.id}`}
                            className="text-sm text-foreground/65 hover:text-primary transition-colors leading-snug block py-0.5"
                          >
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>

                {/* CTA */}
                <div className="bg-secondary rounded-xl p-6 text-secondary-foreground">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <p className="font-semibold text-sm">Need bookkeeping help?</p>
                  </div>
                  <p className="text-secondary-foreground/75 text-sm leading-relaxed mb-5">
                    We can set up clean bookkeeping systems for your business and take the admin off your plate. Book a free consultation with Darren.
                  </p>
                  <Button asChild size="sm" className="w-full btn-cta">
                    <Link href="/contact">Book a free consultation</Link>
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
