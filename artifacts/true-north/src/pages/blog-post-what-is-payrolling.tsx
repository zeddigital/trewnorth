import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowLeft, ArrowRight, Clock, Calendar, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { BlogCTA } from '@/components/blog-cta';
import { SEOHead, blogPostingSchema, breadcrumbSchema } from '@/components/seo-head';
import { BlogBreadcrumb } from '@/components/blog-breadcrumb';

const PAYDAY_SUPER =
  '/blog/payday-super-for-2026-the-small-business-accountants-checklist-to-stay-compliant-and-protect-cash-flow';

const toc = [
  { id: 'h-what-payrolling-covers', label: 'What Payrolling Covers' },
  { id: 'h-employee-or-contractor', label: 'Employee or Contractor?' },
  { id: 'h-your-obligations-as-an-employer', label: 'Your Obligations as an Employer' },
  { id: 'h-setting-up-payroll-in-five-steps', label: 'Setting Up Payroll in Five Steps' },
  { id: 'h-where-employers-come-unstuck', label: 'Where Employers Come Unstuck' },
  { id: 'h-when-to-bring-in-help', label: 'When to Bring in Help' },
  { id: 'h-frequently-asked-questions', label: 'Frequently Asked Questions' },
];

const htmlContent = `<p><strong>Payrolling</strong> is everything involved in paying your people properly: calculating wages, withholding tax, paying super, tracking leave, and reporting all of it to the ATO. It runs in the background of every business with staff, and it is the area where an honest mistake most reliably turns into a bill.</p>

<h2 id="h-what-payrolling-covers">What Payrolling Covers</h2>
<figure><img src="/blog/what-is-payrolling-financial-planning.webp" alt="A laptop, numbered sticky notes and superannuation paperwork on a desk." width="1400" height="788" loading="lazy" /></figure>
<p>Four functions make up the cycle, and they repeat every pay run:</p>
<ul>
<li><strong>Calculating wages.</strong> Gross pay from salary or hours worked, including overtime and any penalty rates the relevant modern award requires.</li>
<li><strong>Withholding tax.</strong> Deducting the correct amount of PAYG withholding from each payment and remitting it to the ATO.</li>
<li><strong>Paying superannuation.</strong> Contributions for eligible staff, calculated on <strong>ordinary time earnings</strong> and paid into each employee's chosen fund.</li>
<li><strong>Tracking leave.</strong> Annual leave, personal leave and long service leave, accrued and recorded accurately.</li>
</ul>
<blockquote>
<p>Payroll is not really an admin task. It is a compliance obligation with an employment relationship attached — which is why errors cost money and goodwill at the same time.</p>
</blockquote>

<h2 id="h-employee-or-contractor">Employee or Contractor?</h2>
<p>This is the first decision, and it determines almost everything that follows. Getting it wrong — treating someone as a contractor when the working relationship makes them an employee — is <strong>sham contracting</strong>, and the correction is retrospective: back-paid super, back-paid leave, and penalties on top.</p>
<div class="compare-cards">
<div class="compare-card">
<h4>Employee</h4>
<dl>
<dt>Tax</dt><dd>You withhold PAYG from each pay and remit it to the ATO.</dd>
<dt>Super</dt><dd>You pay the superannuation guarantee into their chosen fund.</dd>
<dt>Leave</dt><dd>Paid leave entitlements apply.</dd>
<dt>Insurance</dt><dd>You must hold workers' compensation cover for them.</dd>
</dl>
</div>
<div class="compare-card">
<h4>Contractor</h4>
<dl>
<dt>Tax</dt><dd>They handle their own income tax and invoice you, usually with GST.</dd>
<dt>Super</dt><dd>Generally none — but see the caution below.</dd>
<dt>Leave</dt><dd>No paid leave from your business.</dd>
<dt>Insurance</dt><dd>They carry their own public liability and professional indemnity.</dd>
</dl>
</div>
</div>
<p>The caution on super is worth stating plainly: a contractor engaged <em>wholly or principally for their labour</em> can still be entitled to the superannuation guarantee, even holding an ABN and invoicing you. An ABN is not the test. The substance of the working relationship is.</p>
<blockquote>
<p>If the classification is genuinely unclear, resolve it before the first payment rather than after the first year. The cost of asking is a conversation; the cost of guessing wrong compounds every pay run.</p>
</blockquote>

<h2 id="h-your-obligations-as-an-employer">Your Obligations as an Employer</h2>

<h3>PAYG Withholding</h3>
<p>Register for PAYG withholding before you pay anyone — at business registration, or as soon as you decide to hire. From then on you use the ATO's tax tables to work out how much to withhold based on earnings and pay frequency, and remit it by the due date. Most small businesses report and pay this with their quarterly activity statement.</p>

<h3>Superannuation — and What Changed in 2026</h3>
<p>The superannuation guarantee is <strong>12%</strong> of ordinary time earnings, paid into each eligible employee's fund.</p>
<p>The timing is the part that changed. From <strong>1 July 2026</strong>, super is no longer a quarterly obligation: contributions must be paid on payday, and must be <em>received by the employee's fund</em> within seven business days. If you are still working to a quarterly rhythm, that is now out of date — and the quarterly cash buffer that came with it is gone.</p>
<p>Our guide to <a href="${PAYDAY_SUPER}">payday super for 2026</a> covers the transition, the timing rule and the cash flow consequences in detail.</p>
<blockquote>
<p>Missed or late super triggers the superannuation guarantee charge, which is not deductible and carries interest and an administration component. Under payday super the same mistake can now repeat weekly or fortnightly rather than quarterly, so errors surface faster and multiply faster.</p>
</blockquote>

<h3>Single Touch Payroll</h3>
<p>Every time you finalise a pay run, STP-enabled software reports salaries, wages, tax withheld and super information to the ATO. The requirement is <strong>on or before each payday</strong> — not monthly, not quarterly. In practice this is automatic once your software is configured correctly.</p>

<h3>State Payroll Tax</h3>
<p>Payroll tax is a state tax, separate from everything above, and it only applies once your total Australian wages pass a threshold. In Victoria the annual threshold is <strong>$1,000,000</strong>, with a metropolitan rate of <strong>4.85%</strong> applied to wages above it.</p>
<p>Most small businesses never reach it. Those approaching it should read our <a href="/blog/victoria-payroll-tax">Victorian payroll tax guide</a>, particularly the grouping rules — related businesses are assessed together, which catches people out.</p>

<h3>Records</h3>
<p>Keep payroll records for at least <strong>five years</strong>: how each figure was calculated, evidence of every wage, tax and super payment made, and each employee's TFN declaration and super choice form. These records are what an ATO review actually examines.</p>

<h2 id="h-setting-up-payroll-in-five-steps">Setting Up Payroll in Five Steps</h2>
<p>The first hire is the moment you become an employer, with everything that carries. The setup itself is manageable in an afternoon.</p>
<ol>
<li><strong>Register for PAYG withholding.</strong> Through the Australian Business Register or your existing ATO channels. This is the legal precondition to paying anyone.</li>
<li><strong>Choose payroll software.</strong> Spreadsheets cannot meet the STP obligation. <a href="https://www.xero.com/au/" target="_blank" rel="noopener noreferrer">Xero</a> and <a href="https://www.myob.com/au/" target="_blank" rel="noopener noreferrer">MYOB</a> both handle STP, update tax tables automatically and generate payslips — our <a href="/blog/best-accounting-software-for-small-business-australia">software comparison</a> covers the choice.</li>
<li><strong>Collect employee details.</strong> A TFN declaration, a superannuation standard choice form, and personal and bank details. If an employee does not nominate a fund, you must request their <strong>stapled fund</strong> from the ATO rather than defaulting them anywhere.</li>
<li><strong>Set up their profile.</strong> Pay rate, tax details, and employment type — full-time, part-time or casual. That last field drives leave accrual, so a wrong setting compounds quietly for months.</li>
<li><strong>Run the first pay.</strong> Check gross, tax and net before finalising. Finalising generates payslips and files the STP report, then you transfer the net pay.</li>
</ol>

<h2 id="h-where-employers-come-unstuck">Where Employers Come Unstuck</h2>
<figure><img src="/blog/what-is-payrolling-business-stress.webp" alt="A café worker reviewing financial paperwork with a calculator." width="1400" height="788" loading="lazy" /></figure>
<p>Most payroll problems are not exotic. They are the same handful of errors, made in good faith.</p>

<h3>Getting ordinary time earnings wrong</h3>
<p>A café owner pays penalty rates for a public holiday, calculates super on the base rate only, and treats the extra as a one-off outside super. A review a year later finds the shortfall, and the correction arrives with interest and an administration charge attached.</p>
<p>Ordinary time earnings is a defined concept, and it is not simply base pay. Confirm which payments are included rather than assuming — this is the single most common super error there is.</p>

<h3>Misclassifying employment type</h3>
<p>Recording a part-time employee as casual, or an employee as a contractor. Both lead to back-payment of leave and super, and neither is forgiven because it was unintentional.</p>

<h3>Missing STP deadlines</h3>
<p>Reporting late, or not at all, attracts penalties and marks the business for closer attention. Configured software handles this automatically — the failure is usually a setup gap, not a discipline problem.</p>

<h3>Mishandling final pay</h3>
<p>Termination payments mix unused leave, leave loading and sometimes redundancy, and each component has its own tax treatment. Work through a checklist every time, or get the calculation checked. This one is worth not improvising.</p>

<h3>Stale tax tables</h3>
<p>Withholding against last year's rates produces wrong deductions for every employee until someone notices. Any current payroll software updates these for you; manual calculation does not.</p>

<h2 id="h-when-to-bring-in-help">When to Bring in Help</h2>
<p>Software handles routine payroll for most small businesses perfectly well. The point to bring someone in is when the cost of an error would exceed the cost of advice — which arrives sooner than most owners expect.</p>
<ul>
<li><strong>Your first hire.</strong> Setting it up correctly once is far cheaper than unwinding it later.</li>
<li><strong>A growing team.</strong> More people means mixed employment types, award complexity, and eventually payroll tax.</li>
<li><strong>Modern awards.</strong> Penalty rates, allowances and classification levels are genuinely difficult, and misreading them produces underpayment claims.</li>
<li><strong>Terminations and redundancies.</strong> Specific tax rules, one chance to get the final payment right.</li>
<li><strong>An ATO review.</strong> Worth having someone who has handled one before.</li>
</ul>
<p>Our <a href="/services/bookkeeping">bookkeeping</a> and <a href="/services/small-business-accountant">small business accounting</a> services cover payroll setup and the ongoing run.</p>

<h2 id="h-frequently-asked-questions">Frequently Asked Questions</h2>

<h3>Do I pay super for casual employees?</h3>
<p>Yes. Casual employees aged 18 or over receive the superannuation guarantee on their ordinary time earnings regardless of how much they earn — the old $450 monthly minimum was abolished in 2022. For employees under 18, super is payable only if they work more than <strong>30 hours in a week</strong>.</p>

<h3>What is the difference between salary and wages?</h3>
<p>A salary is a fixed annual amount paid in regular instalments, independent of exact hours. Wages are paid at an hourly rate, so the total varies with hours worked. The practical difference is that wages require reliable timesheets and salaries do not — though salaried staff covered by an award still need their pay checked against award minimums.</p>

<h3>How often do I report through STP?</h3>
<p>On or before every payday. Each finalised pay run sends the data automatically. There is no separate monthly or quarterly STP lodgement.</p>

<h3>Can I still pay super quarterly?</h3>
<p>No. From 1 July 2026 super must be paid on payday and received by the fund within seven business days. Quarterly payment no longer satisfies the obligation.</p>

<h3>What if an employee does not choose a super fund?</h3>
<p>Request their stapled fund from the ATO and pay into that. Only if the ATO returns no stapled fund may you use your default fund — you cannot simply pick one.</p>

<hr>
<p>Payroll rewards a careful setup and punishes a rushed one. Classify workers correctly, get ordinary time earnings right, and keep the software current — those three cover most of the risk.</p>
<p>Trew North Accounting sets up and runs payroll for Melbourne small businesses. See our <a href="/services/bookkeeping">bookkeeping service</a>, or <a href="/contact">get in touch</a> before your first hire rather than after.</p>`;

const TITLE = 'What Is Payrolling? An Australian Employer’s Guide';
const DESCRIPTION =
  'Payroll obligations for Australian small business — PAYG withholding, the 12% super guarantee under payday super, STP, payroll tax, and the errors that cost most.';
const SLUG = '/blog/what-is-payrolling';
const PUBLISHED = '2026-08-16';

export default function BlogPostWhatIsPayrolling() {
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
                Payroll
              </span>
            </div>
            <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.1] text-foreground mb-6" style={{ letterSpacing: '-0.03em' }}>
              {TITLE}
            </h1>
            <div className="flex flex-wrap items-center gap-5 text-sm text-foreground/70">
              <span className="flex items-center gap-1.5"><User className="h-4 w-4" aria-hidden="true" /> Darren Trew, CA</span>
              <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" aria-hidden="true" /> 16 August 2026</span>
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
