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
  { id: 'h-what-makes-a-donation-deductible', label: 'What Makes a Donation Deductible' },
  { id: 'h-gift-or-purchase', label: 'Gift or Purchase?' },
  { id: 'h-what-a-deduction-is-actually-worth', label: 'What a Deduction Is Worth' },
  { id: 'h-donating-something-other-than-cash', label: 'Donating Something Other Than Cash' },
  { id: 'h-the-limit-most-people-miss', label: 'The Limit Most People Miss' },
  { id: 'h-records-the-ato-expects', label: 'Records the ATO Expects' },
  { id: 'h-frequently-asked-questions', label: 'Frequently Asked Questions' },
];

const htmlContent = `<p>A donation of <strong>$2 or more</strong> to an organisation with <strong>deductible gift recipient</strong> status reduces your taxable income. That is the whole rule in one sentence — but three things sit behind it that decide whether a particular gift actually counts, and they catch people out every year.</p>

<h2 id="h-what-makes-a-donation-deductible">What Makes a Donation Deductible</h2>
<p>Generosity alone does not create a deduction. Three tests have to be met, and all three, not two of them.</p>
<div class="compare-cards">
<div class="compare-card">
<h4>1. At least $2</h4>
<dl>
<dt>The rule</dt><dd>Gifts below $2 are not deductible, however worthy the cause.</dd>
<dt>In practice</dt><dd>Rarely the binding constraint, but it is why loose change in a tin needs its own treatment — see the records section.</dd>
</dl>
</div>
<div class="compare-card compare-card--accent">
<h4>2. To a DGR</h4>
<dl>
<dt>The rule</dt><dd>The recipient must hold <strong>deductible gift recipient</strong> endorsement. Not every charity does, and "registered charity" is not the same status.</dd>
<dt>In practice</dt><dd>This is the test that fails most often. Check before you give, not at tax time.</dd>
</dl>
</div>
<div class="compare-card">
<h4>3. A genuine gift</h4>
<dl>
<dt>The rule</dt><dd>You must receive nothing of material value in return.</dd>
<dt>In practice</dt><dd>If you got a ticket, a meal or a chance to win something, it is a purchase — see the next section.</dd>
</dl>
</div>
</div>

<h3>Checking DGR status takes two minutes</h3>
<p>Find the organisation's ABN — it will be on their website or donation page — and search it on <a href="https://abr.business.gov.au/" target="_blank" rel="noopener noreferrer">ABN Lookup</a>. The results page has a "Charity and DGR" section stating plainly whether the endorsement is current.</p>
<blockquote>
<p>Being a registered charity and being endorsed as a DGR are two different things. Plenty of legitimate, well-run charities are not DGRs, and gifts to them are simply not deductible. The lookup is the only reliable check.</p>
</blockquote>

<h2 id="h-gift-or-purchase">Gift or Purchase?</h2>
<figure><img src="/blog/tax-write-off-for-donations-donations-form.webp" alt="A donation record showing fields for the DGR name, ABN and amount." width="1400" height="788" loading="lazy" /></figure>
<p>A deductible gift is a voluntary transfer where you get nothing significant back. The moment you receive something of value, the ATO treats the payment as a transaction rather than a gift.</p>
<p>That rules out several things people commonly assume are deductible:</p>
<ul>
<li><strong>Raffle and lottery tickets.</strong> You are buying a chance at a prize.</li>
<li><strong>Items bought at a charity auction.</strong> You received the item.</li>
<li><strong>Fundraising dinner and gala tickets.</strong> You received a meal and an evening out. A limited concession can apply to contributions above a threshold at eligible fundraising events, but it is narrow and worth confirming rather than assuming.</li>
<li><strong>Sponsorship.</strong> If your business gets signage, naming or advertising in return, it is not a gift — though it may well be deductible as a business expense instead, which is a different and often better outcome.</li>
</ul>
<p>A straightforward payment to a DGR, expecting nothing back, is the clean case.</p>

<h2 id="h-what-a-deduction-is-actually-worth">What a Deduction Is Worth</h2>
<p>A deduction is not a refund. It reduces the income you are taxed on, so what it saves you depends entirely on your marginal rate.</p>
<p>Take a $1,000 gift to a DGR:</p>
<ul>
<li>A sole trader with taxable income in the <strong>30%</strong> bracket saves roughly <strong>$300</strong>.</li>
<li>Someone in the <strong>37%</strong> bracket saves about <strong>$370</strong> on the same gift.</li>
<li>A company taxed at the <strong>25%</strong> base rate saves <strong>$250</strong>.</li>
</ul>
<p>In every case you are still out of pocket by the balance. The deduction reduces the cost of giving; it never pays for it. Anyone describing donations as a way to make money is misreading the arithmetic.</p>
<blockquote>
<p>The higher your marginal rate, the more a deduction is worth — which is also why the timing of a large gift can matter. A donation made in a high-income year is worth more than the same gift in a lean one.</p>
</blockquote>
<p>For the broader picture on lowering a business tax bill, our guide to <a href="/10-ways-to-reduce-your-business-tax-bill">reducing your business tax</a> covers the other levers.</p>

<h2 id="h-donating-something-other-than-cash">Donating Something Other Than Cash</h2>
<p>Cash is simplest — you claim what you gave. Non-cash gifts follow their own valuation rules, and the holding period usually decides the answer.</p>

<h3>Property</h3>
<p>Held for <strong>12 months or more</strong>, you can generally claim market value. Held for <strong>less than 12 months</strong>, the claim is limited to what you paid, even if it has appreciated sharply since.</p>
<p>Property valued above <strong>$5,000</strong> generally requires a valuation from the ATO, which charges a fee for it. Budget for that step rather than discovering it late.</p>

<h3>Shares</h3>
<p>There is a narrow, useful rule for listed shares: if you have held them at least 12 months and they are worth <strong>$5,000 or less</strong>, you can generally claim market value without a formal valuation. Above that, the property rules and their valuation requirement apply.</p>

<h3>Cultural gifts</h3>
<p>Artwork, manuscripts and historically significant items given to eligible public collections fall under the <a href="https://www.arts.gov.au/funding-and-support/cultural-gifts-program" target="_blank" rel="noopener noreferrer">Cultural Gifts Program</a>, which allows a deduction at market value set by approved valuers. The item has to be accepted by a participating institution, so it is a process rather than a transaction.</p>

<h3>Trading stock</h3>
<p>Donating goods your business sells is possible, but the deductible amount is not the retail price and the treatment depends on how the disposal is characterised. Confirm the specific position before you commit stock — this is the non-cash category where assumptions most often turn out to be wrong.</p>

<h2 id="h-the-limit-most-people-miss">The Limit Most People Miss</h2>
<p>A gift deduction <strong>cannot create or increase a tax loss</strong>. If you donate more than your income can absorb, the excess is not simply refunded.</p>
<p>That surprises people who make a large gift in a year when profit was thin. The relief is that for eligible gifts you can elect to spread the deduction across up to <strong>five income years</strong>, choosing how much falls in each. Done deliberately, that can be worth more than claiming it all at once — particularly if you expect a higher-income year ahead.</p>
<blockquote>
<p>The election has to be made properly and before you lodge. It is one of the few genuinely valuable planning decisions available on the giving side, and one of the easiest to miss by lodging on autopilot.</p>
</blockquote>

<h2 id="h-records-the-ato-expects">Records the ATO Expects</h2>
<p>A deduction is only as good as the evidence behind it. For each gift you want a receipt showing the DGR's name and ABN, the amount, the date, and that it was a gift.</p>
<p>Two practical points:</p>
<ul>
<li><strong>Bucket collections.</strong> For contributions to a bucket appeal you can generally claim up to a total of <strong>$10</strong> without receipts. Beyond that, the usual evidence rules apply.</li>
<li><strong>Workplace giving.</strong> If donations come out of your pay, the amounts appear in your income statement and separate receipts are not needed.</li>
</ul>
<p>Keep the records with the rest of your substantiation. If a review ever lands, our guide on <a href="/how-to-handle-an-ato-audit-letter-step-by-step-guide">handling an ATO audit letter</a> covers what happens next, and the <a href="/tax-return-deadline">lodgement deadlines guide</a> covers the timing side.</p>

<h2 id="h-frequently-asked-questions">Frequently Asked Questions</h2>

<h3>Can my company claim, or only me personally?</h3>
<p>Either can, provided the gift meets the same three tests. Which is better depends on the marginal rate involved and where the cash actually comes from. A company at 25% gets less benefit per dollar than an individual at 37%, so for owner-operators it is worth deciding deliberately rather than by default.</p>

<h3>Is crowdfunding deductible?</h3>
<p>Usually not. Most personal fundraising campaigns are not run by DGRs, so however genuine the cause, the gift is not deductible. Some campaigns are hosted on behalf of an endorsed charity — the ABN on the page is what settles it.</p>

<h3>What if I volunteer my time?</h3>
<p>Time is not deductible, however valuable it is. Out-of-pocket expenses you incur while volunteering may be, depending on the circumstances, so keep those receipts separately.</p>

<h3>Do I need to be running a business to claim?</h3>
<p>No. Gift deductions are available to individuals as well as businesses. The tests are the same either way.</p>

<h3>When is the gift made?</h3>
<p>On the date the DGR receives it, not the date you intended to give. A donation made on 30 June and received on 1 July falls in the following year — worth watching if the timing is what makes it worthwhile.</p>

<hr>
<p>Giving is worth doing for its own reasons. The tax treatment simply reduces what it costs — and getting the three tests, the valuation rules and the loss limit right is the difference between a deduction that holds up and one that does not.</p>
<p>Trew North Accounting advises Melbourne small business owners on planning gifts and claiming them properly. See our <a href="/services/accounting-and-tax-planning">accounting and tax planning</a> service, or <a href="/contact">get in touch</a>.</p>`;

const TITLE = 'Tax Write-Off for Donations: An Australian Guide';
const DESCRIPTION =
  'When a donation is deductible in Australia — the $2 and DGR tests, gift versus purchase, non-cash gifts, the rule that stops a gift creating a loss, and what records to keep.';
const SLUG = '/tax-write-off-for-donations';
const PUBLISHED = '2026-08-18';

export default function BlogPostTaxWriteOffForDonations() {
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
            readingTime: 'PT10M',
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
                Tax Planning
              </span>
            </div>
            <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.1] text-foreground mb-6" style={{ letterSpacing: '-0.03em' }}>
              {TITLE}
            </h1>
            <div className="flex flex-wrap items-center gap-5 text-sm text-foreground/70">
              <span className="flex items-center gap-1.5"><User className="h-4 w-4" aria-hidden="true" /> Darren Trew, CA</span>
              <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" aria-hidden="true" /> 18 August 2026</span>
              <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" aria-hidden="true" /> 10 min read</span>
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
