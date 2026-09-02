import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowLeft, ArrowRight, Clock, Calendar, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { BlogCTA } from '@/components/blog-cta';
import { SEOHead, blogPostingSchema, breadcrumbSchema } from '@/components/seo-head';
import { BlogBreadcrumb } from '@/components/blog-breadcrumb';
import { BookConsultation } from '@/components/book-consultation';

const toc = [
  { id: 'h-what-victorian-payroll-tax-actually-is', label: 'What Victorian Payroll Tax Actually Is' },
  { id: 'h-the-rates-and-thresholds-you-need', label: 'The Rates and Thresholds You Need' },
  { id: 'h-metropolitan-versus-regional-rates', label: 'Metropolitan Versus Regional Rates' },
  { id: 'h-registration-lodgement-and-payment', label: 'Registration, Lodgement and Payment' },
  { id: 'h-grouping-rules-and-exemptions', label: 'Grouping Rules and Exemptions' },
  { id: 'h-working-out-what-you-owe', label: 'Working Out What You Owe' },
  { id: 'h-your-payroll-tax-questions-answered', label: 'Your Payroll Tax Questions, Answered' },
];

const htmlContent = `<p>If your business is growing, Victorian payroll tax is a threshold you will eventually cross. It is a state tax that applies once your total wages pass a set amount, and it is not a penalty for hiring. It is a sign your business has reached a certain scale.</p>
<p>Understanding how it works is the difference between a predictable line in your budget and an unwelcome assessment from the State Revenue Office.</p>

<h2 id="h-what-victorian-payroll-tax-actually-is">What Victorian Payroll Tax Actually Is</h2>
<figure><img src="/blog/victoria-payroll-tax-payroll-tax.jpg" alt="A gauge labelled &quot;Payroll tax zone&quot; with the needle entering the red section." width="2048" height="1152" /></figure>
<p>Payroll tax is a <strong>self-assessed</strong> state tax administered by the Victorian State Revenue Office (SRO), not the ATO. Self-assessed means the responsibility sits with you as the employer: you work out what you owe, you report it, and you pay it.</p>
<p>It is a direct cost to your business. It is not deducted from your employees and it never appears on their payslips.</p>
<p>Because it is state-based, the rules differ in every state and territory. What applies in New South Wales or Queensland does not apply here. If you employ people in Victoria, the SRO's rules are the ones that matter.</p>

<h3>Who Has to Pay</h3>
<p>You have a Victorian payroll tax obligation if you pay wages to staff in Victoria and your total <strong>Australian</strong> wages exceed the annual threshold. Your head office location is irrelevant, if you have people working here, their wages count.</p>
<p>The trigger is your total wage bill, and "wages" is broader than most business owners expect:</p>
<ul>
<li><strong>Taxable wages</strong> include base salary, bonuses, commissions, allowances, superannuation contributions, fringe benefits, and payments to some contractors.</li>
<li><strong>Grouping</strong> means that if you control more than one business, the SRO may combine their wages and assess them as a single entity against one threshold.</li>
</ul>
<blockquote>
<p>Payroll tax is not a penalty for taking on staff. It applies once your business reaches a certain size, and it funds state services, hospitals, schools, emergency services and transport.</p>
</blockquote>

<h3>Why Getting It Right Matters</h3>
<p>The SRO charges penalties and interest on underpayments and late lodgements, and those add up quickly. Being proactive lets you do three things:</p>
<ul>
<li><strong>Forecast accurately.</strong> You can build the liability into your cash flow rather than discovering it at reconciliation.</li>
<li><strong>Stay compliant.</strong> You meet registration, lodgement and payment deadlines without a scramble.</li>
<li><strong>Legitimately reduce the bill.</strong> You claim the exemptions you are entitled to instead of overpaying by default.</li>
</ul>

<h2 id="h-the-rates-and-thresholds-you-need">The Rates and Thresholds You Need</h2>
<figure><img src="/blog/victoria-payroll-tax-tax-data.jpg" alt="Cards comparing the metropolitan Melbourne rate of 4.85% with the regional Victorian rate of 1.2125%." width="2048" height="1152" /></figure>
<p>These are the numbers your entire liability hangs on. Get them right and the rest is arithmetic.</p>

<h3>The Tax-Free Threshold</h3>
<p>The tax-free threshold is your annual allowance, the total Australian wages you can pay before Victorian payroll tax applies. Critically, <em>you only pay tax on the wages above the threshold</em>, not on your entire wage bill.</p>
<ul>
<li><strong>Annual threshold:</strong> <strong>$1,000,000</strong></li>
<li><strong>Monthly threshold:</strong> <strong>$83,333</strong></li>
</ul>
<p>The threshold has risen substantially in recent years, which has taken a large number of smaller Victorian employers out of the system entirely. If you last checked this figure a few years ago, check it again. You may have more headroom than you think.</p>
<blockquote>
<p><strong>Key takeaway:</strong> You do not pay payroll tax on your whole wage bill. Tax applies only to wages above the <strong>$1,000,000</strong> annual threshold.</p>
</blockquote>

<h3>The Rates</h3>
<ul>
<li><strong>Metropolitan employers:</strong> <strong>4.85%</strong> on wages above the threshold.</li>
<li><strong>Regional employers:</strong> <strong>1.2125%</strong> on wages above the threshold.</li>
</ul>

<h2 id="h-metropolitan-versus-regional-rates">Metropolitan Versus Regional Rates</h2>
<p>Victoria runs a deliberate two-tier system to encourage employment outside Melbourne. Which tier you fall into is the first thing to establish, because the difference is a factor of four.</p>

<h4>Metropolitan Employers</h4>
<ul>
<li><strong>Rate:</strong> 4.85%</li>
<li><strong>Applies to:</strong> businesses whose employees are primarily based in greater Melbourne, including the bayside suburbs.</li>
</ul>

<h4>Regional Employers</h4>
<ul>
<li><strong>Rate:</strong> 1.2125%</li>
<li><strong>Applies to:</strong> employers where at least <strong>85%</strong> of Victorian wages go to employees working primarily in designated regional areas.</li>
</ul>
<p>That 85% test is strict, and it is assessed on wages rather than headcount. A business with a regional office but a Melbourne-weighted payroll will not qualify.</p>

<h2 id="h-registration-lodgement-and-payment">Registration, Lodgement and Payment</h2>
<p>Once you are liable, three obligations follow. All of them run through the SRO's online portal, PTX Express.</p>

<h3>Registration</h3>
<p>You must register with the SRO after the end of the month in which your total Australian wages first exceed the monthly threshold of <strong>$83,333</strong>. This is a hard deadline, and missing it is one of the most common ways businesses attract SRO attention.</p>

<h3>Monthly or Annual Lodgement</h3>
<p>How often you lodge depends on the size of your annual liability:</p>
<ul>
<li><strong>Monthly lodgement</strong> is the default. If your annual payroll tax liability exceeds <strong>$100,000</strong>, you lodge a return and pay by the 7th of the following month.</li>
<li><strong>Annual lodgement</strong> applies if your annual liability is <strong>$100,000 or less</strong>. You lodge once a year instead.</li>
</ul>
<p>Qualifying for annual lodgement is worth knowing about. It improves cash flow, since you hold your money longer, and removes eleven reporting events from your year.</p>
<blockquote>
<p><strong>Worth remembering:</strong> If you are registered for monthly lodgement and owe nothing for a given month, you still have to lodge a nil return. Skipping it is a compliance breach in its own right.</p>
</blockquote>

<h2 id="h-grouping-rules-and-exemptions">Grouping Rules and Exemptions</h2>
<p>Grouping and exemptions are where businesses most often get caught out, either by an unexpected assessment or by quietly overpaying for years.</p>

<h3>Grouping</h3>
<p>Grouping exists to stop businesses splitting operations across entities to duck under the threshold. If the SRO considers businesses related (through common control, shared employees or tracing of interests) it combines their wages, and <strong>the group claims only one threshold between them</strong>.</p>
<p>Consider a director who owns two Melbourne cafés:</p>
<ul>
<li><strong>Café A wages:</strong> $600,000</li>
<li><strong>Café B wages:</strong> $650,000</li>
<li><strong>Combined group wages:</strong> $1,250,000</li>
</ul>
<p>Individually, neither café pays a cent. Grouped, they are <strong>$250,000</strong> over the threshold and the group has a payroll tax liability.</p>

<h3>Common Exempt Wages</h3>
<figure><img src="/blog/victoria-payroll-tax-decision-path.jpg" alt="Flowchart showing the payroll tax lodgement decision path based on monthly wages and annual liability." width="1344" height="768" /></figure>
<p>Certain payments can be excluded from your taxable wages. Coding these correctly in your payroll system is one of the simplest ways to avoid overpaying:</p>
<ul>
<li><strong>Paid parental leave:</strong> primary and secondary caregiver leave payments.</li>
<li><strong>Volunteer and emergency services leave:</strong> including CFA and recognised emergency response.</li>
<li><strong>Approved apprentice and trainee wages:</strong> where an approved training contract is in place.</li>
<li><strong>Genuine redundancy payments:</strong> the tax-free component.</li>
<li><strong>Some contractor payments:</strong> though the rules here are strict, and the SRO frequently deems contractors to be employees.</li>
</ul>
<p>If reducing your overall tax position is the goal, exemptions are only one lever. Our guide to <a href="/10-ways-to-reduce-your-business-tax-bill">10 ways to reduce your business tax bill</a> covers the others.</p>

<h2 id="h-working-out-what-you-owe">Working Out What You Owe</h2>
<p>The arithmetic is simpler than it looks. Take a Melbourne design studio, call it Metro Creatives, and work through both scenarios.</p>

<h3>Example 1: A Monthly Calculation</h3>
<p>Metro Creatives paid <strong>$120,000</strong> in total Australian wages in July, which is above the monthly threshold.</p>
<ul>
<li>Total Australian wages for July: <strong>$120,000</strong></li>
<li>Monthly tax-free threshold: <strong>$83,333</strong></li>
<li>Taxable wages: $120,000 − $83,333 = <strong>$36,667</strong></li>
<li>Metropolitan rate: <strong>4.85%</strong></li>
<li>Payroll tax for July: $36,667 × 4.85% = <strong>$1,778.35</strong></li>
</ul>
<p>They declare the wages in PTX Express and pay $1,778.35 by 7 August.</p>

<h3>Example 2: The Annual Reconciliation</h3>
<p>The annual reconciliation is where the true liability is settled. It smooths out the peaks and troughs across the year, so a few busy months do not cost you.</p>
<p>Metro Creatives finished the financial year with <strong>$1,250,000</strong> in total Australian wages.</p>
<ul>
<li>Total Australian wages for the year: <strong>$1,250,000</strong></li>
<li>Annual tax-free threshold: <strong>$1,000,000</strong></li>
<li>Taxable wages: $1,250,000 − $1,000,000 = <strong>$250,000</strong></li>
<li>Metropolitan rate: <strong>4.85%</strong></li>
<li>Total annual liability: $250,000 × 4.85% = <strong>$12,125</strong></li>
</ul>
<p>If they had already paid <strong>$10,000</strong> across their monthly lodgements, the reconciliation leaves a final payment of <strong>$2,125</strong>.</p>
<blockquote>
<p><strong>The key concept:</strong> reconciliation means you pay tax on your <em>annual</em> wage bill, not on individual months. If your total annual wages land below <strong>$1,000,000</strong>, any monthly payments you made are refunded in full.</p>
</blockquote>

<h2 id="h-your-payroll-tax-questions-answered">Your Payroll Tax Questions, Answered</h2>

<h3>Do I pay payroll tax on contractors?</h3>
<p>Sometimes, and this is where the largest unexpected assessments come from. Genuine independent contractors are generally exempt, but the SRO looks past the ABN and the invoice to the substance of the relationship:</p>
<ul>
<li><strong>Control:</strong> who decides how, where and when the work is done?</li>
<li><strong>Tools and equipment:</strong> does the contractor supply their own, or use yours?</li>
<li><strong>Commercial risk:</strong> who bears the cost of rectifying defective work?</li>
</ul>
<p>If a contractor is deemed an employee, every dollar paid to them becomes taxable wages, often retrospectively, with penalties and interest attached.</p>

<h3>What if my wages move above and below the threshold?</h3>
<p>This is normal for seasonal businesses, and the system handles it. You may pay tax in your busy months and none in your quiet ones. The annual reconciliation settles the difference, and if your annual total finishes under <strong>$1,000,000</strong>, you are refunded everything you paid.</p>

<h3>What are the penalties for getting it wrong?</h3>
<p>Penalties are calculated as a percentage of the tax underpaid, and the rate depends on why the error occurred. An honest mistake is treated very differently from deliberate evasion. Interest is charged on top, running from the original due date.</p>
<p>The practical point: the cost of getting advice is almost always lower than the cost of a reassessment.</p>

<h3>Where do I check the current figures?</h3>
<p>Rates and thresholds are reviewed regularly. The <a href="https://www.sro.vic.gov.au/payroll-tax" target="_blank" rel="noopener noreferrer">State Revenue Office</a> publishes the current figures, and it is the only source worth relying on.</p>

<hr>
<p>Payroll tax is a milestone worth planning for rather than reacting to. If your wage bill is approaching $1,000,000, or you run multiple entities and are unsure whether grouping applies, that is the right moment to get advice, not after an assessment arrives.</p>
<p>Trew North Accounting works with growing Melbourne businesses on exactly this. See our <a href="/services/bookkeeping">bookkeeping</a> and <a href="/services/small-business-accountant">small business accounting</a> services, or <a href="/contact">get in touch</a> to talk it through.</p>`;

const TITLE = 'Victorian Payroll Tax: A 2026 Guide for Melbourne Small Business';
const DESCRIPTION =
  'When Victorian payroll tax applies, the current $1,000,000 threshold and 4.85% rate, grouping rules, exemptions, and worked examples for Melbourne businesses.';
const SLUG = '/victoria-payroll-tax';
const PUBLISHED = '2026-08-05';

export default function BlogPostVictoriaPayrollTax() {
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
            readingTime: 'PT14M',
          }),
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Blog', url: '/blog' },
            { name: TITLE, url: SLUG },
          ]),
        ]}
      />
      <Navbar />
      {/* Hero */}
      <section className="pt-32 pb-12 sm:pt-40 sm:pb-16 bg-muted/40 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <BlogBreadcrumb postTitle={TITLE} />
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
              <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" aria-hidden="true" /> 5 August 2026</span>
              <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" aria-hidden="true" /> 14 min read</span>
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
                  <BookConsultation><Button size="sm" className="w-full btn-cta">
                      Book a Free Consultation
                      <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                    </Button></BookConsultation>
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
