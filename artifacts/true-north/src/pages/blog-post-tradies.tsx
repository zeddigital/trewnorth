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
  { id: 'overview',           label: 'Tax overview for tradies' },
  { id: 'deductions',         label: 'Deductions you can claim' },
  { id: 'vehicle',            label: 'Vehicle and travel expenses' },
  { id: 'tools-equipment',    label: 'Tools and equipment' },
  { id: 'home-office',        label: 'Home office costs' },
  { id: 'super',              label: 'Superannuation tips' },
  { id: 'bookkeeping-mistakes', label: 'Common bookkeeping mistakes' },
  { id: 'cash-payments',      label: 'Handling cash payments' },
  { id: 'invoicing',          label: 'Invoicing best practices' },
  { id: 'accounting-software', label: 'Choosing accounting software' },
  { id: 'bas',                label: 'BAS and GST obligations' },
  { id: 'working-with-accountant', label: 'Working with an accountant' },
  { id: 'faq',                label: 'Frequently asked questions' },
];

const tradiesFaqs = [
  {
    question: 'What tax deductions can Melbourne tradies claim?',
    answer: 'Tradies can claim deductions for tools and equipment, work vehicles (using logbook or cents-per-kilometre method), protective clothing and uniforms, mobile phone and internet (work-use portion), licences and registrations, insurance premiums, accounting fees, training and professional development, and subcontractor costs. All claims require receipts or records.',
  },
  {
    question: 'Do tradies need to register for GST?',
    answer: 'Yes, if your annual turnover reaches or exceeds $75,000 you must register for GST within 21 days. Many tradies hit this threshold, so it\'s worth monitoring your turnover closely. Once registered, you must charge GST on your invoices and lodge BAS quarterly.',
  },
  {
    question: 'How do I claim vehicle expenses as a tradie?',
    answer: 'There are two methods: the logbook method (keep a logbook for 12 consecutive weeks to establish your business-use percentage, then claim that percentage of all vehicle costs) or the cents-per-kilometre method (claim 88 cents per km for up to 5,000 km of business travel). The logbook method typically gives the larger deduction for tradies who drive frequently.',
  },
  {
    question: 'What records do tradies need to keep for the ATO?',
    answer: 'The ATO requires businesses to keep records for at least 5 years. For tradies, this includes all invoices issued and received, bank statements, vehicle logbooks, receipts for tools and equipment, payroll records (if you have employees), and BAS lodgements. Digital records are acceptable.',
  },
  {
    question: 'Can a self-employed tradie claim super contributions as a tax deduction?',
    answer: 'Yes. If you\'re self-employed, personal superannuation contributions you make to a complying super fund are generally tax-deductible — up to the concessional contributions cap of $30,000 per year (2024–25 and 2025–26). You must lodge a Notice of Intent to Claim form with your super fund before lodging your tax return.',
  },
];

export default function BlogPostTradies() {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Melbourne Tradies: Tax Tips & Bookkeeping Mistakes to Avoid | Trew North"
        description="Tradies often miss deductions and make costly bookkeeping errors at tax time. Darren Trew CA shares how Melbourne tradespeople can maximise returns and stay ATO-compliant."
        canonical="/blog/melbourne-tradies-tax-tips-and-bookkeeping-mistakes"
        ogType="article"
        publishedTime="2025-10-27"
        schema={[
          blogPostingSchema({
            title: 'Melbourne Tradies: Tax Tips and Bookkeeping Mistakes to Avoid',
            description: "Tradies often leave money on the table at tax time — and can find themselves in trouble with the ATO from simple bookkeeping errors. Here's how to get it right.",
            url: '/blog/melbourne-tradies-tax-tips-and-bookkeeping-mistakes',
            datePublished: '2025-10-27',
            readingTime: 'PT8M',
          }),
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Blog', url: '/blog' },
            { name: 'Melbourne Tradies: Tax Tips and Bookkeeping Mistakes to Avoid', url: '/blog/melbourne-tradies-tax-tips-and-bookkeeping-mistakes' },
          ]),
          faqSchema(tradiesFaqs),
        ]}
      />
      <Navbar />
      <BlogBreadcrumb postTitle="Melbourne Tradies: Tax Tips and Bookkeeping Mistakes to Avoid" />

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
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                Tax Planning
              </span>
            </div>

            <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.1] text-foreground mb-6" style={{ letterSpacing: '-0.03em' }}>
              Melbourne Tradies: Tax Tips and Bookkeeping Mistakes to Avoid
            </h1>

            <p className="text-xl text-foreground/70 leading-relaxed mb-8">
              Tradies often leave money on the table at tax time — and can find themselves in trouble with the ATO from simple bookkeeping errors. Here's how to get it right.
            </p>

            <div className="flex flex-wrap items-center gap-5 text-sm text-foreground/55">
              <span className="flex items-center gap-1.5">
                <User className="h-4 w-4" /> Darren Trew, CA
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" /> 27 October 2025
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
                  <p><strong>Melbourne tradies can claim deductions for tools, work vehicles, protective clothing, home office costs, and super contributions. You must register for GST if your turnover exceeds $75,000, lodge BAS quarterly, and keep records for 5 years. The ATO actively benchmarks the construction and trades sector — accurate bookkeeping and a separate business bank account are non-negotiable.</strong></p>
                  <p className="text-xs text-foreground/60 mt-2">Sources: <a href="https://www.ato.gov.au/individuals-and-families/jobs-and-employment-types/working-as-an-employee/construction-and-building-employees/deductions-for-construction-workers" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">ATO deductions for construction workers</a> · <a href="https://www.ato.gov.au/businesses-and-organisations/record-keeping-for-business" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">ATO record-keeping requirements</a></p>
                </div>

                <p>
                  Whether you're a plumber, electrician, carpenter, or builder, tax and bookkeeping are a fact of life as a Melbourne tradie. The good news: there are significant deductions available to you. The bad news: many tradies miss them — or make avoidable mistakes that cost them at tax time, or worse, trigger an ATO audit.
                </p>
                <p>
                  This guide covers the key tax tips every Melbourne tradie should know, and the common bookkeeping mistakes you need to avoid.
                </p>

                <h2 id="overview">Tax Overview for Tradies</h2>
                <p>
                  As a tradie running your own business — whether as a sole trader, partnership, or company — you're responsible for managing your own tax obligations. This includes income tax, GST (if registered), superannuation contributions, and potentially payroll tax if you employ staff.
                </p>
                <p>
                  Unlike employees who have tax withheld automatically, business owners need to set aside money for tax throughout the year and pay via PAYG instalments or at tax time. Failing to do this is one of the most common reasons tradies get into financial difficulty.
                </p>
                <div className="callout">
                  <p className="font-semibold text-foreground mb-2">Key tax obligations for tradies:</p>
                  <ul>
                    <li>Lodge an annual tax return declaring all business income</li>
                    <li>Register for GST if your turnover exceeds $75,000</li>
                    <li>Submit Business Activity Statements (BAS) quarterly or monthly</li>
                    <li>Pay superannuation for yourself (if desired) and any employees</li>
                    <li>Keep records for at least 5 years</li>
                  </ul>
                </div>

                <h2 id="deductions">Deductions You Can Claim</h2>
                <p>
                  The ATO allows business deductions for expenses that are directly related to earning your income. As a tradie, this covers a wide range of costs. Maximising legitimate deductions is one of the most effective ways to reduce your tax bill legally.
                </p>
                <ul>
                  <li>Tools, equipment, and machinery used for work</li>
                  <li>Work-related clothing, including branded uniforms and protective gear</li>
                  <li>Vehicle expenses (logbook method or cents-per-kilometre)</li>
                  <li>Mobile phone and internet costs (work-use portion)</li>
                  <li>Licences, registrations, and union fees</li>
                  <li>Training, courses, and professional development</li>
                  <li>Accounting and bookkeeping fees</li>
                  <li>Insurance premiums (public liability, income protection, etc.)</li>
                  <li>Advertising and marketing costs</li>
                  <li>Subcontractor costs</li>
                </ul>

                <h2 id="vehicle">Vehicle and Travel Expenses</h2>
                <p>
                  Vehicle expenses are one of the largest deductions available to tradies — and also one of the most scrutinised by the ATO. There are two main methods for claiming vehicle expenses:
                </p>
                <ul>
                  <li><strong>Logbook method:</strong> Keep a logbook for 12 consecutive weeks to establish the business-use percentage of your vehicle. This percentage then applies to all vehicle costs — fuel, insurance, registration, repairs, depreciation. Generally gives the highest deduction.</li>
                  <li><strong>Cents-per-kilometre method:</strong> Claim a fixed rate per kilometre (<a href="https://www.ato.gov.au/individuals-and-families/income-deductions-offsets-and-records/deductions-you-can-claim/vehicles-and-travel/car-expenses/cents-per-kilometre-method" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">currently <strong>88 cents per km</strong> for the 2024–25 income year, as set by the ATO</a>) for up to 5,000 km of business travel per year. Simpler, but capped at $4,400 per vehicle annually.</li>
                </ul>
                <p>
                  Note that driving between home and work is generally <em>not</em> deductible — unless your home is also your place of business, or you carry heavy tools that can't be stored at the workplace.
                </p>

                <h2 id="tools-equipment">Tools and Equipment</h2>
                <p>
                  Tools and equipment used for work are deductible. Items costing less than $20,000 (under the instant asset write-off threshold, subject to current rules) can be fully deducted in the year of purchase rather than depreciated over time. For larger items, depreciation applies over the asset's effective life.
                </p>
                <p>
                  Always keep receipts for tools and equipment purchases. If a tool is used for both work and personal use, you can only claim the work-use portion.
                </p>

                <h2 id="home-office">Home Office Costs</h2>
                <p>
                  Many tradies run their administrative operations — quoting, invoicing, planning — from home. If you use a dedicated part of your home for business purposes, you may be able to claim a portion of rent/mortgage interest, utilities, and internet costs. The ATO's fixed rate method (70 cents per hour for the 2024–25 and 2025–26 income years) simplifies this calculation.
                </p>

                <h2 id="super">Superannuation Tips</h2>
                <p>
                  As a self-employed tradie, you're not required to pay yourself superannuation — but it's strongly advisable. Super contributions you make for yourself are generally tax-deductible (up to the concessional contributions cap of $30,000 per year), which can significantly reduce your taxable income while building your retirement savings.
                </p>
                <p>
                  If you employ staff, you must pay the Super Guarantee (12% from 1 July 2025) on their ordinary earnings. Failing to do so results in the Super Guarantee Charge, which is not tax-deductible.
                </p>

                <h2 id="bookkeeping-mistakes">Common Bookkeeping Mistakes</h2>
                <p>
                  Good bookkeeping isn't just about compliance — it's about having accurate information to run your business. These are the mistakes we see most often with Melbourne tradies:
                </p>
                <div className="callout">
                  <p className="font-semibold text-foreground mb-2">Mistakes to avoid:</p>
                  <ul>
                    <li><strong>Mixing personal and business expenses:</strong> Always maintain a separate bank account and credit card for your business. Mixing personal and business transactions creates a bookkeeping nightmare and increases your risk of ATO scrutiny.</li>
                    <li><strong>Losing receipts:</strong> No receipt, no deduction. Use a receipt-scanning app or take photos immediately after purchases.</li>
                    <li><strong>Not reconciling accounts regularly:</strong> Monthly bank reconciliation catches errors and fraud early and keeps your books accurate.</li>
                    <li><strong>Ignoring BAS deadlines:</strong> Late BAS lodgements attract penalties. Set calendar reminders or use a bookkeeper to ensure you never miss one.</li>
                    <li><strong>Under-reporting cash income:</strong> The ATO uses data matching extensively. All income — including cash payments — must be declared.</li>
                    <li><strong>Forgetting to account for GST:</strong> If you're registered for GST, GST collected is not your money — it belongs to the ATO. Set it aside in a separate account.</li>
                  </ul>
                </div>

                <h2 id="cash-payments">Handling Cash Payments</h2>
                <p>
                  Cash is common in the trades, but it must be handled correctly. All cash income must be declared in your tax return — the ATO uses industry benchmarking data to identify businesses where reported income seems unusually low for the sector.
                </p>
                <p>
                  Always issue a receipt or tax invoice for cash jobs, and record cash receipts in your accounting system on the day they're received. This protects you and gives you an accurate view of your income.
                </p>

                <h2 id="invoicing">Invoicing Best Practices</h2>
                <p>
                  Professional, accurate invoicing isn't just about looking credible — it's essential for cash flow and compliance. Good invoices include:
                </p>
                <ul>
                  <li>Your business name and ABN</li>
                  <li>The date of issue and a unique invoice number</li>
                  <li>A clear description of work performed</li>
                  <li>The amount charged and, if GST-registered, the GST component</li>
                  <li>Payment terms and due date</li>
                  <li>Your bank details for payment</li>
                </ul>
                <p>
                  Send invoices promptly after completing work, and follow up on overdue invoices systematically. Late payments are one of the biggest cash flow challenges for tradies.
                </p>

                <h2 id="accounting-software">Choosing Accounting Software</h2>
                <p>
                  The days of managing your books in a spreadsheet are over. Modern accounting software like Xero or MYOB makes it easy to track income and expenses, reconcile bank accounts, generate invoices, and prepare BAS statements. Many tradies also benefit from job management apps like ServiceM8 or Tradify that integrate with accounting software.
                </p>
                <p>
                  The right software pays for itself quickly in time saved and errors avoided.
                </p>

                <h2 id="bas">BAS and GST Obligations</h2>
                <p>
                  If your annual turnover exceeds $75,000, you must register for GST and submit Business Activity Statements (BAS). BAS is typically lodged quarterly and reports GST collected on sales, GST paid on purchases, and any PAYG withholding for employees.
                </p>
                <p>
                  Many tradies benefit from setting aside GST in a dedicated account as they collect it — so there are no surprises when BAS is due.
                </p>

                <h2 id="working-with-accountant">Working with an Accountant</h2>
                <p>
                  A good accountant doesn't just lodge your tax return — they help you structure your business, minimise tax, and make smarter financial decisions. For Melbourne tradies especially, having an accountant who understands the construction and trades industry is invaluable.
                </p>
                <p>
                  At a minimum, meet with your accountant once a year before tax time. Ideally, meet quarterly to review your financials and plan ahead.
                </p>

                {/* FAQ */}
                <h2 id="faq">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  {tradiesFaqs.map((faq) => (
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
                        Darren is a Chartered Accountant with over 25 years' experience helping Melbourne small business owners — including many tradies — with tax and financial strategy. If you'd like a review of your current setup, <Link href="/contact" className="text-primary hover:underline">get in touch</Link>.
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
                    <p className="font-semibold text-sm">Tax advice for tradies</p>
                  </div>
                  <p className="text-secondary-foreground/75 text-sm leading-relaxed mb-5">
                    We work with Melbourne tradies to maximise deductions and keep their books clean. Book a free consultation with Darren.
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
