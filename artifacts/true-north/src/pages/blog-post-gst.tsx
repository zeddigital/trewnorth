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
  { id: 'what-is-gst',       label: 'What is GST and how does it work?' },
  { id: 'turnover',          label: 'Calculating your GST turnover' },
  { id: 'when-to-register',  label: 'When must you register?' },
  { id: 'cash-flow',         label: 'How GST impacts cash flow' },
  { id: 'advantages',        label: 'Advantages of registering' },
  { id: 'disadvantages',     label: 'Potential disadvantages' },
  { id: 'calculate',         label: 'How to calculate GST' },
  { id: 'how-to-register',   label: 'How to register' },
  { id: 'invoicing',         label: 'GST and invoicing' },
  { id: 'compliance',        label: 'Staying GST compliant' },
  { id: 'penalties',         label: 'Risks of not registering' },
  { id: 'strategies',        label: 'Clever GST strategies' },
  { id: 'faq',               label: 'Frequently asked questions' },
];

const gstFaqs = [
  {
    question: 'Do I have to register for GST if my turnover is under $75,000?',
    answer: 'No — GST registration is only mandatory once your annual turnover reaches $75,000 (or $150,000 for non-profits). However, you can voluntarily register below this threshold if you want to claim input tax credits on business purchases.',
  },
  {
    question: 'How long do I have to register for GST after reaching the threshold?',
    answer: 'You must register within 21 days of your GST turnover reaching or exceeding the $75,000 threshold. Failing to register in time can result in the ATO backdating your registration and holding you liable for GST you should have collected.',
  },
  {
    question: 'What happens if I don\'t register for GST when I should?',
    answer: 'The ATO can backdating your registration to the date you were required to register, making you liable for all GST that should have been collected and remitted — even if you didn\'t charge it to customers. Penalties and interest may also apply.',
  },
  {
    question: 'How often do I need to lodge a BAS?',
    answer: 'Most small businesses lodge BAS quarterly. However, businesses with a GST turnover of $20 million or more must lodge monthly. You can also elect to lodge annually if your turnover is under $75,000 and you are voluntarily registered.',
  },
  {
    question: 'Can I claim GST on purchases I made before registering?',
    answer: 'Generally, you can only claim GST credits from the date your registration takes effect. In limited circumstances, you may be able to claim credits for certain purchases made prior to registration — speak with your accountant if this situation applies to you.',
  },
];

export default function BlogPostGST() {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Should Your Small Business Register for GST? | Trew North Accounting"
        description="Understand GST registration thresholds ($75k turnover), voluntary registration, and ATO compliance obligations. Expert guidance from Darren Trew CA, Melbourne."
        canonical="/blog/should-your-small-business-register-for-gst"
        ogType="article"
        publishedTime="2025-10-27"
        schema={[
          blogPostingSchema({
            title: 'Should Your Small Business Register for GST?',
            description: 'Understanding when and why your small business should register for GST is vital for compliance and financial planning. This guide explains everything you need to know.',
            url: '/blog/should-your-small-business-register-for-gst',
            datePublished: '2025-10-27',
            readingTime: 'PT8M',
          }),
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Blog', url: '/blog' },
            { name: 'Should Your Small Business Register for GST?', url: '/blog/should-your-small-business-register-for-gst' },
          ]),
          faqSchema(gstFaqs),
        ]}
      />
      <Navbar />
      <BlogBreadcrumb postTitle="Should Your Small Business Register for GST?" />

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
              Should Your Small Business Register for GST?
            </h1>

            <p className="text-xl text-foreground/70 leading-relaxed mb-8">
              Understanding when and why your small business should register for GST is vital for compliance and financial planning. This guide explains everything you need to know.
            </p>

            <div className="flex flex-wrap items-center gap-5 text-sm text-foreground/70">
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
                  <p><strong>You must register for GST once your annual turnover reaches $75,000 — and you have 21 days to do so. Voluntarily registering below that threshold lets you claim input tax credits on business purchases. More than 3.5 million Australian businesses are GST-registered, and the ATO uses sophisticated data-matching to identify those who should be but aren't.</strong></p>
                  <p className="text-xs text-foreground/60 mt-2">Sources: <a href="https://www.ato.gov.au/businesses-and-organisations/gst-excise-and-indirect-taxes/gst/registering-for-gst" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">ATO GST registration</a> · <a href="https://www.ato.gov.au/about-ato/research-and-statistics/in-detail/tax-statistics/tax-statistics-2022-23/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">ATO Tax Statistics 2022–23</a></p>
                </div>

                <p>
                  In Australia, GST is a 10% tax on most goods and services sold or consumed domestically. Businesses collect GST on their sales and remit it to the Australian Taxation Office (ATO). This guide will clearly explain everything you need to know about registering your small business for GST, and help you determine if it's the right move for your business.
                </p>

                {/* Section 1 */}
                <h2 id="what-is-gst">What Exactly is GST and How Does it Work?</h2>
                <p>
                  GST is a broad-based tax that impacts nearly every business transaction in Australia. Businesses registered for GST must collect an additional 10% on taxable supplies — goods and services subject to GST under Australian law, excluding GST-free or input-taxed items — which they later remit to the ATO.
                </p>
                <p>
                  The total price charged to customers often includes GST, meaning the GST portion is embedded within the sale amount. When a price is marked as <em>'GST included'</em>, the GST is already part of the total amount paid, and you can calculate the GST portion by dividing the total by 11.
                </p>
                <div className="callout">
                  <p className="font-semibold text-foreground mb-2">Key GST points for small businesses:</p>
                  <ul>
                    <li>You are responsible for charging GST on your taxable sales once your business is registered.</li>
                    <li>You pay GST on business-related expenses but can claim credits for GST you've paid.</li>
                    <li>You report GST through a Business Activity Statement (BAS), submitted to the ATO detailing GST collected from sales and GST paid on expenses.</li>
                  </ul>
                </div>

                {/* Section 2 */}
                <h2 id="turnover">Calculating Your GST Turnover – Are You Over the Threshold?</h2>
                <p>
                  The GST turnover threshold is <strong>$75,000</strong> for most businesses and <strong>$150,000</strong> for non-profit organisations. To work out if you need to register, add up your total sales from all business activities, but exclude any GST-free or input-taxed sales.
                </p>
                <p>
                  According to the <a href="https://www.ato.gov.au/about-ato/research-and-statistics/in-detail/tax-statistics/tax-statistics-2022-23/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">ATO's 2022–23 Tax Statistics</a>, more than <strong>3.5 million Australian businesses</strong> are registered for GST. The ATO cross-references BAS data, bank records, and industry benchmarks to identify businesses operating above the threshold without registering — making non-compliance increasingly difficult to sustain undetected.
                </p>
                <p>
                  Regularly monitoring your GST turnover helps you stay on top of your obligations and avoid unexpected tax issues. If you're unsure how to calculate your GST turnover, a registered tax agent can help you review your figures and ensure you remain compliant.
                </p>

                {/* Section 3 */}
                <h2 id="when-to-register">When Must You Register for GST?</h2>
                <p>
                  The most critical factor is your annual business turnover — specifically whether it exceeds the $75,000 threshold. The ATO introduced this threshold and a simplified BAS format in July 2017 to make GST reporting easier for small businesses.
                </p>

                <p className="font-semibold text-foreground">Mandatory GST registration applies when:</p>
                <ul>
                  <li>Your annual turnover reaches or exceeds $75,000.</li>
                  <li>You expect your annual turnover to reach or exceed $75,000 in the current financial year.</li>
                  <li>You provide taxi or rideshare services (compulsory regardless of turnover).</li>
                  <li>Your business deals with luxury car tax.</li>
                </ul>

                <p className="font-semibold text-foreground">Voluntary registration:</p>
                <ul>
                  <li>You can voluntarily register even if your turnover is below $75,000.</li>
                  <li>Some businesses choose this to claim more GST credits or refunds on business expenses.</li>
                </ul>

                {/* Section 4 */}
                <h2 id="cash-flow">How GST Impacts Your Cash Flow</h2>
                <p>
                  Being registered for GST can have a significant impact on your cash flow. When you charge GST on your sales, you're collecting money on behalf of the ATO — which means you'll need to pay it to the government regularly. On the flip side, you can claim GST credits on your business purchases, which helps reduce the amount you owe.
                </p>
                <p>
                  For small businesses and sole traders, managing this carefully is crucial. If you don't track your GST obligations, you might find yourself short when it's time to pay the ATO. Using accounting software or working with a bookkeeper can help you monitor GST payments and credits and avoid cash flow surprises.
                </p>

                {/* Section 5 */}
                <h2 id="advantages">Advantages of Registering for GST</h2>
                <p>Registering for GST can bring several genuine benefits to your small business:</p>
                <ul>
                  <li><strong>Input Tax Credits:</strong> You can claim back GST paid on business purchases.</li>
                  <li><strong>Business Credibility:</strong> Many customers and businesses prefer dealing with GST-registered entities.</li>
                  <li><strong>Cash Flow Management:</strong> Effective GST planning can help smooth cash flow.</li>
                  <li><strong>Administrative efficiency:</strong> Technology and professional services can reduce the administrative burden of GST and other business registrations.</li>
                </ul>

                {/* Section 6 */}
                <h2 id="disadvantages">The Flip Side – Potential Disadvantages</h2>
                <p>While GST registration has benefits, it also comes with added responsibilities:</p>
                <ul>
                  <li><strong>Increased paperwork:</strong> Registering for GST means more administrative overhead and higher compliance costs.</li>
                  <li><strong>Regular BAS submissions:</strong> You must submit accurate BAS statements to the ATO on time.</li>
                  <li><strong>Accurate bookkeeping required:</strong> You need solid systems to manage GST collections, payments and credits.</li>
                  <li><strong>Penalties for non-compliance:</strong> Failing to meet obligations can result in fines from the ATO.</li>
                </ul>

                {/* Section 7 */}
                <h2 id="calculate">How to Calculate GST on Your Sales and Purchases</h2>
                <p>
                  Calculating GST is straightforward once you know the basics:
                </p>
                <div className="callout">
                  <p className="font-semibold text-foreground mb-2">Quick reference:</p>
                  <ul>
                    <li><strong>Adding GST to a price:</strong> Multiply the GST-exclusive price by <strong>1.1</strong>. E.g. $100 × 1.1 = <strong>$110</strong>.</li>
                    <li><strong>Finding GST in a GST-inclusive price:</strong> Divide the total by <strong>11</strong>. E.g. $110 ÷ 11 = <strong>$10 GST</strong>.</li>
                    <li><strong>Finding the GST-exclusive price:</strong> Divide the total by <strong>1.1</strong>. E.g. $110 ÷ 1.1 = <strong>$100</strong>.</li>
                  </ul>
                </div>
                <p>
                  Using a GST calculator or accounting software makes this even easier and ensures you claim all the GST you're entitled to.
                </p>

                {/* Section 8 */}
                <h2 id="how-to-register">How to Register Your Small Business for GST</h2>
                <p>GST registration is straightforward if you follow the proper steps:</p>
                <ol>
                  <li>Obtain an <strong>Australian Business Number (ABN)</strong>.</li>
                  <li>Complete the GST registration process through the ATO's Business Portal or via an accountant.</li>
                  <li>Set up accounting systems to handle GST invoicing and reporting.</li>
                  <li>Ensure you issue a <strong>tax invoice</strong> for all taxable sales — this is required for GST compliance and allows customers to claim GST credits.</li>
                </ol>
                <p>
                  If you are a new business, consider your GST and other business registrations early to ensure compliance from the start.
                </p>

                {/* Section 9 */}
                <h2 id="invoicing">GST and Invoicing — What You Need to Know</h2>
                <p>
                  If your business is registered for GST, every invoice you issue should clearly show the GST amount — either as a separate line or included in the total price. Invoices must include:
                </p>
                <ul>
                  <li>A description of the goods or services sold</li>
                  <li>The date of the sale</li>
                  <li>The GST amount (separate line or as part of the total)</li>
                  <li>Your ABN</li>
                </ul>
                <p>
                  A well-organised invoicing system keeps your business compliant and makes it easy to track the GST you've charged and collected. Invoicing software or a bookkeeper can help you create professional, compliant invoices.
                </p>

                {/* Section 10 */}
                <h2 id="compliance">Staying GST Compliant – What You Need to Know</h2>
                <p>
                  Once registered, staying compliant is crucial to avoid fines and penalties. GST reporting is done through BAS statements, which must be accurate and submitted on time to the ATO.
                </p>
                <p>
                  Businesses can report GST on either an <strong>accruals basis</strong> (GST reported when invoices are issued) or a <strong>cash basis</strong> (GST reported only when payment is received).
                </p>
                <div className="callout">
                  <p className="font-semibold text-foreground mb-2">Essential compliance tips:</p>
                  <ul>
                    <li>Keep accurate and timely records of all transactions.</li>
                    <li>Track GST on all items sold to ensure accurate reporting.</li>
                    <li>Regularly submit your BAS to the ATO.</li>
                    <li>Clearly indicate GST amounts on all customer invoices.</li>
                    <li>Consult regularly with your accountant to ensure ongoing compliance.</li>
                  </ul>
                </div>

                {/* Section 11 */}
                <h2 id="penalties">What Happens If You Don't Register?</h2>
                <p>
                  Failing to register for GST when required can lead to serious consequences. The ATO may impose penalties and fines, and you'll miss out on claiming GST credits for your business purchases. Non-compliance can also damage your business's credibility — especially if customers or clients discover you're operating outside the rules.
                </p>
                <p>
                  The <a href="https://www.ato.gov.au/individuals-and-families/your-tax-return/penalties-and-interest/failure-to-lodge-on-time-penalty" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">ATO's failure-to-lodge penalty</a> is one penalty unit per 28-day period for small businesses (currently <strong>$330 per period</strong> for 2024–25), and can escalate significantly depending on the size of the debt and how long the non-compliance continues. Under the <a href="https://www.ato.gov.au/individuals-and-families/your-tax-return/penalties-and-interest/tax-shortfall-penalties" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">ATO's tax shortfall penalty framework</a>, intentional disregard of GST obligations can attract penalties of up to <strong>75% of the shortfall amount</strong>.
                </p>
                <p>
                  For sole traders and small businesses, taking GST registration seriously is essential. If you're unsure, a registered tax agent or accountant can guide you through the process and help you stay compliant.
                </p>

                {/* Section 12 */}
                <h2 id="strategies">Clever GST Strategies for Your Small Business</h2>
                <p>Being strategic about GST can positively impact your finances:</p>
                <ul>
                  <li><strong>Time large purchases strategically</strong> to maximise GST claims in the right BAS period.</li>
                  <li><strong>Regularly review GST arrangements</strong> to identify potential savings or improvements.</li>
                  <li><strong>Check if any of your offerings are GST-free</strong> — for example, certain education courses or food items — to optimise your GST position.</li>
                  <li><strong>Consider cash accounting</strong> if eligible, to better manage cash flow around GST payments.</li>
                </ul>

                {/* FAQ */}
                <h2 id="faq">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  {gstFaqs.map((faq) => (
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
                        Darren is a Chartered Accountant with over 25 years' experience helping Melbourne small business owners navigate tax, compliance and financial strategy. If you have questions about GST registration or any aspect of your business finances, <Link href="/contact" className="text-primary hover:underline">get in touch</Link>.
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
                  <nav aria-label="Table of contents">
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
                    <p className="font-semibold text-sm">Need GST advice?</p>
                  </div>
                  <p className="text-secondary-foreground/75 text-sm leading-relaxed mb-5">
                    Unsure whether you need to register, or want help setting up your BAS? Book a free consultation with Darren.
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
