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
  { id: 'h-two-ways-to-claim', label: 'Two Ways to Claim' },
  { id: 'h-check-you-are-driving-a-car', label: 'Check You Are Driving a "Car"' },
  { id: 'h-what-counts-as-a-business-trip', label: 'What Counts as a Business Trip' },
  { id: 'h-keeping-the-twelve-week-logbook', label: 'Keeping the Twelve Week Logbook' },
  { id: 'h-what-you-can-claim', label: 'What You Can Claim' },
  { id: 'h-a-worked-example', label: 'A Worked Example' },
  { id: 'h-where-claims-fall-over', label: 'Where Claims Fall Over' },
  { id: 'h-frequently-asked-questions', label: 'Frequently Asked Questions' },
];

const htmlContent = `<p>If you drive for work, twelve weeks of record keeping decides how much you can claim for the next five years. That is the whole trade: a quarter of a year of noting down odometer readings, in exchange for a deduction based on what your car actually costs you rather than a capped flat rate.</p>
<p>For anyone doing real kilometres, the difference runs to thousands of dollars a year. Here is how the logbook method works, who it suits, and the places we most often see claims come unstuck.</p>

<h2 id="h-two-ways-to-claim">Two Ways to Claim</h2>
<figure><img src="/blog/logbook-method-ato-ute.webp" alt="A tradesperson sitting in the open door of a work ute, writing in a notepad on her knee." width="1400" height="788" loading="lazy" /></figure>
<p>The ATO allows two methods for claiming car expenses, and you choose per car, per year.</p>
<div class="compare-cards">
<div class="compare-card">
<h4>Cents per kilometre</h4>
<dl>
<dt>How it works</dt><dd>A flat rate for every business kilometre, covering all running costs.</dd>
<dt>The catch</dt><dd>Capped at 5,000 business kilometres per car, per year. Kilometres beyond that earn nothing.</dd>
<dt>Records</dt><dd>You must be able to show how you worked out your business kilometres. No receipts needed.</dd>
<dt>Suits</dt><dd>Occasional work driving, well under the cap.</dd>
</dl>
</div>
<div class="compare-card compare-card--accent">
<h4>Logbook</h4>
<dl>
<dt>How it works</dt><dd>A business use percentage, applied to what the car actually costs to run.</dd>
<dt>The catch</dt><dd>Twelve continuous weeks of records, plus receipts for everything you claim.</dd>
<dt>Records</dt><dd>A compliant logbook, odometer readings each year, and evidence of every expense.</dd>
<dt>Suits</dt><dd>Anyone near or over 5,000 business kilometres, or running an expensive car.</dd>
</dl>
</div>
</div>
<p>The rate for cents per kilometre is reset each year. It was <strong>88 cents</strong> for the 2024 to 2025 year, which puts the maximum claim at <strong>$4,400</strong>. Check the current year's rate on the ATO website before you calculate, because it does move.</p>
<blockquote>
<p>The 5,000 kilometre cap is the decision point. If your business driving is anywhere near it, the logbook method will almost certainly pay you more than the twelve weeks of effort costs you.</p>
</blockquote>

<h2 id="h-check-you-are-driving-a-car">Check You Are Driving a "Car"</h2>
<p>This step gets skipped constantly, and it matters most to the people who drive the most.</p>
<p>These rules apply to a <strong>car</strong>, which the tax law defines as a vehicle designed to carry a load of less than one tonne and fewer than nine passengers. A sedan, a wagon, a hatchback, most dual cab utes and most four wheel drives are cars.</p>
<p>A vehicle that carries <strong>one tonne or more</strong> is not. Larger single cab utes, most vans and trucks fall outside the definition, and so do the cents per kilometre and logbook methods entirely. For those vehicles you claim the business portion of actual expenses, worked out on a reasonable basis, with no 5,000 kilometre cap and no twelve week logbook rules to satisfy.</p>
<p>The carrying capacity is not a matter of opinion. It is the manufacturer's gross vehicle mass less the kerb weight, and the compliance plate will tell you. Plenty of tradies assume their ute is exempt when it is not, or keep a logbook they never needed. Worth checking once, because it changes which set of rules you are playing by. Our guide for <a href="/melbourne-tradies-tax-tips-and-bookkeeping-mistakes">tradies</a> covers the other traps in the same territory.</p>

<h2 id="h-what-counts-as-a-business-trip">What Counts as a Business Trip</h2>
<figure><img src="/blog/logbook-method-ato-notepad.webp" alt="An open notepad and pen resting on the passenger seat of a car alongside a folded map and sunglasses." width="1400" height="788" loading="lazy" /></figure>
<p>Getting the percentage right depends entirely on classifying trips correctly, and the single most expensive mistake is including the drive to work.</p>
<p><strong>Home to work travel is private.</strong> It does not matter that you started early, that you were thinking about the job, or that you had a laptop on the passenger seat. The trip from home to your regular place of work, and back again, is not a business trip. This is the error the ATO finds most often, and it is the one that turns a review into an adjustment.</p>
<p>What does count:</p>
<ul>
<li><strong>Travel between workplaces.</strong> Job site to job site, office to client, one work location to another on the same day.</li>
<li><strong>Trips for the business itself.</strong> Collecting supplies, banking, visiting the accountant, picking up materials.</li>
<li><strong>Home to an alternative site.</strong> If you go straight from home to a client or a job that is not your regular workplace, that trip generally is business.</li>
<li><strong>Bulky equipment.</strong> Home to work can qualify in limited circumstances where you must carry bulky tools and there is no secure storage at the workplace. The conditions are narrow, so get advice before relying on it.</li>
</ul>
<p>Being clear about this before you start the twelve weeks matters more than anything else you do, because the percentage you calculate carries forward for years.</p>

<h2 id="h-keeping-the-twelve-week-logbook">Keeping the Twelve Week Logbook</h2>
<p>The logbook runs for <strong>twelve continuous weeks</strong> and needs to be representative of your normal driving. Choosing your busiest quarter and calling it typical is not the idea, and it is exactly the kind of thing a reviewer looks for.</p>
<p>Once complete, the percentage it produces is good for <strong>five years</strong>, counting the year you made it. After that you start again.</p>
<h3>What the logbook itself must show</h3>
<ul>
<li>The start and end dates of the twelve week period.</li>
<li>The odometer reading at the start and at the end of that period.</li>
<li>Total kilometres travelled during the period.</li>
<li>Total business kilometres travelled during the period.</li>
</ul>
<h3>What every business trip must show</h3>
<ul>
<li>The date of the trip.</li>
<li>Odometer readings at the start and end of it.</li>
<li>Kilometres travelled.</li>
<li>The reason for the trip.</li>
</ul>
<p>On that last point, "client meeting" is not a reason. "Site inspection, 14 Industrial Drive Braeside" is. The purpose of the entry is to let someone who was not there confirm the trip was for work, years after the fact.</p>
<p>Private trips do not need individual entries, but they are still in the total. The percentage is business kilometres divided by <em>all</em> kilometres, so leaving private driving out inflates your claim rather than simplifying it.</p>
<h3>Every year, not just logbook years</h3>
<p>Even in the four years you are coasting on an existing percentage, you must record the <strong>opening and closing odometer readings for each financial year</strong>. Without them there is no total to apply the percentage to. This is the requirement people forget, and it is quietly fatal.</p>
<h3>When you need a fresh logbook</h3>
<ul>
<li>The five years are up.</li>
<li>You change cars. The logbook belongs to the vehicle, not to you.</li>
<li>Your driving pattern changes materially, through a new role, a new work location or a shift in what the business does.</li>
</ul>
<p>Paper, spreadsheet or app are all acceptable. What matters is that entries are made at the time or shortly after, not reconstructed in June from memory and a diary.</p>

<h2 id="h-what-you-can-claim">What You Can Claim</h2>
<figure><img src="/blog/logbook-method-ato-receipts.webp" alt="Car expense paperwork, a calculator, keys and a notebook spread on a pale timber table." width="1400" height="788" loading="lazy" /></figure>
<p>Apply your percentage to the car's running costs for the year. Those are:</p>
<ul>
<li><strong>Fuel and oil.</strong> The one expense you can estimate on a reasonable basis rather than keeping every docket, provided you have odometer records.</li>
<li><strong>Servicing, repairs and tyres.</strong></li>
<li><strong>Registration and insurance.</strong></li>
<li><strong>Roadside assistance.</strong></li>
<li><strong>Interest</strong> on a car loan or chattel mortgage. The interest only. Loan principal is not a deduction.</li>
<li><strong>Depreciation</strong>, the decline in the car's value, if you own it.</li>
</ul>
<p>Two things commonly get claimed that should not be. <strong>Fines are never deductible</strong>, however they were incurred. And if you <strong>lease</strong> the car rather than owning it, you claim the business portion of the lease payments <em>instead of</em> depreciation and interest, not as well as. Which applies to you depends on the finance, so check the contract rather than the label the dealer used.</p>
<p>Depreciation is also capped. There is a <strong>car limit</strong>, indexed each year, and it sets the highest value you can depreciate no matter what you paid. Buy a $95,000 car and you depreciate the limit, not the price. The limit applies in the year you first use the car, so the figure that matters is the one for that year.</p>
<p>One more, for anyone registered for GST: claim expenses <strong>net of GST</strong> in your return. The GST comes back through your activity statements instead, and claiming the gross amount in both places is double dipping.</p>

<h2 id="h-a-worked-example">A Worked Example</h2>
<p>A consultant keeps a logbook for twelve weeks. The odometer shows 8,000 kilometres travelled in total, of which 5,600 were business trips correctly classified.</p>
<p><strong>5,600 ÷ 8,000 × 100 = 70%</strong></p>
<p>Over the full financial year her car costs:</p>
<ul>
<li>Fuel and oil: $3,500</li>
<li>Registration and insurance: $1,800</li>
<li>Servicing and tyres: $1,200</li>
<li>Interest on the car loan: $1,500</li>
<li>Depreciation: $5,000</li>
</ul>
<p>That is <strong>$13,000</strong> of running costs. At 70 per cent, her deduction is <strong>$9,100</strong>.</p>
<p>Under cents per kilometre she would have been capped at $4,400. The twelve weeks of notes are worth $4,700 in deductions in this year alone, and the percentage holds for another four.</p>
<blockquote>
<p>The logbook rewards people whose cars are genuinely expensive to run: newer vehicles still depreciating, financed purchases, high kilometre years. The further your real costs sit above the flat rate, the more the flat rate costs you.</p>
</blockquote>

<h2 id="h-where-claims-fall-over">Where Claims Fall Over</h2>
<p>Four failures account for most of what we see.</p>
<ul>
<li><strong>The commute is in the business column.</strong> Covered above, and worth repeating because it is both the most common and the most expensive.</li>
<li><strong>Missing yearly odometer readings.</strong> The logbook is perfect, but there is no record of what the car did in year three, so there is nothing to apply the percentage to.</li>
<li><strong>Reconstructed records.</strong> A logbook written up at tax time from calendar entries is not a contemporaneous record, and it will not hold if it is examined.</li>
<li><strong>No receipts behind the expenses.</strong> The percentage is only half the claim. The other half is proof of what the car cost, and bank statements alone are usually not enough.</li>
</ul>
<p>If any of that sounds familiar, the fix is a fresh twelve week logbook starting now rather than a better guess in June. Our guide to <a href="/how-to-handle-an-ato-audit-letter-step-by-step-guide">handling an ATO letter</a> covers what happens if a claim does get looked at.</p>

<h2 id="h-frequently-asked-questions">Frequently Asked Questions</h2>
<h3>Does the logbook method work for a company car?</h3>
<p>Not in this form. These rules are for individuals and partnerships claiming for a car they own or lease. A company or trust claims actual expenses, and a car available for an employee's private use brings <strong>fringe benefits tax</strong> into it, which is a different and more expensive conversation. If the car is owned by an entity rather than by you, get advice before assuming any of the above applies.</p>
<h3>Can I switch methods between years?</h3>
<p>Yes. The choice is made per car, per year, and nothing stops you using the logbook one year and cents per kilometre the next. Keeping a valid logbook simply gives you the option of whichever produces the better result.</p>
<h3>What if I have two cars?</h3>
<p>Each is treated separately, with its own method, its own logbook and its own 5,000 kilometre cap where that applies.</p>
<h3>Do I need to keep fuel receipts?</h3>
<p>Fuel and oil are the exception: you may estimate them on a reasonable basis using your odometer records rather than keeping every docket. Every other expense needs written evidence, and keeping the fuel receipts anyway makes for a stronger claim.</p>
<h3>How long do I keep the records?</h3>
<p>Generally five years from lodgement, but a logbook lives longer than that. It supports claims for five years, so keep it for five years after the last return that relies on it.</p>
<h3>Can I use a phone app?</h3>
<p>Yes, and GPS tracking removes most of the tedium. It does not remove the judgement: the app records that you drove somewhere, not whether the trip was business. Classifying and describing the trips is still on you.</p>

<hr>
<p>The logbook method is not complicated, but it is unforgiving about detail. The percentage is only as good as the twelve weeks behind it, and those twelve weeks carry for years.</p>
<p>Trew North Accounting sorts out vehicle claims for Melbourne small businesses, sole traders and tradies. See our <a href="/services/small-business-accountant">small business accounting</a> and <a href="/services/bookkeeping">bookkeeping</a> services, or <a href="/contact">get in touch</a> before you start the twelve weeks rather than after.</p>
<p class="text-sm">This article is general information, not advice for your circumstances, and tax rates and thresholds change. Check current figures with the <a href="https://www.ato.gov.au/individuals-and-families/income-deductions-offsets-and-records/deductions-you-can-claim/transport-and-travel-expenses/motor-vehicle-and-car-expenses" rel="nofollow">ATO</a> or with us before you lodge.</p>`;

const TITLE = 'The ATO Logbook Method: A Guide for Australian Business';
const DESCRIPTION =
  'Twelve weeks of records set your car deduction for five years. How the logbook method works, which vehicles it covers, why the commute is not a business trip, and where claims fall over.';
const SLUG = '/logbook-method-ato';
const PUBLISHED = '2026-09-04';

export default function BlogPostLogbookMethodAto() {
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
                Tax
              </span>
            </div>
            <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.1] text-foreground mb-6" style={{ letterSpacing: '-0.03em' }}>
              {TITLE}
            </h1>
            <div className="flex flex-wrap items-center gap-5 text-sm text-foreground/70">
              <span className="flex items-center gap-1.5"><User className="h-4 w-4" aria-hidden="true" /> Darren Trew, CA</span>
              <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" aria-hidden="true" /> 4 September 2026</span>
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
