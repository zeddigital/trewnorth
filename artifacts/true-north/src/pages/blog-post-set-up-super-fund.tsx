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
  { id: 'h-is-an-smsf-right-for-you', label: 'Is an SMSF Right for You?' },
  { id: 'h-choosing-a-trustee-structure', label: 'Choosing a Trustee Structure' },
  { id: 'h-the-trust-deed', label: 'The Trust Deed' },
  { id: 'h-registering-the-fund', label: 'Registering the Fund' },
  { id: 'h-your-investment-strategy', label: 'Your Investment Strategy' },
  { id: 'h-getting-money-into-the-fund', label: 'Getting Money Into the Fund' },
  { id: 'h-what-you-take-on-every-year', label: 'What You Take On Every Year' },
  { id: 'h-frequently-asked-questions', label: 'Frequently Asked Questions' },
];

const htmlContent = `<p>Setting up a <strong>self-managed super fund</strong> means choosing trustees, executing a trust deed, registering with the ATO and writing a compliant investment strategy — usually two to six weeks of work. What you get is direct control over where every dollar of your retirement savings goes. What you take on is a legal obligation that renews every year.</p>

<h2 id="h-is-an-smsf-right-for-you">Is an SMSF Right for You?</h2>
<figure><img src="/blog/set-up-super-fund-financial-review.webp" alt="A woman reviewing superannuation documents and financial data on a laptop." width="1400" height="788" loading="lazy" /></figure>
<p>In an industry or retail fund, professionals make the investment calls and your choice is between broad options — Growth, Balanced, Conservative. In an SMSF you are the trustee, and every decision is yours.</p>
<p>That control is the whole appeal. It is also the whole cost. Three things separate the two arrangements:</p>
<ul>
<li><strong>Investment control.</strong> An SMSF can hold individual shares, direct residential or commercial property, and some alternative assets, within strict rules. A retail or industry fund holds pre-mixed portfolios.</li>
<li><strong>Responsibility.</strong> As trustee you carry the legal, administrative and investment obligations personally, and they recur annually. In a public fund, a professional trustee carries them.</li>
<li><strong>Fee structure.</strong> SMSF costs are largely fixed — audit, accounting, the ATO levy — so they fall as a percentage as the balance grows. Public fund fees are usually a percentage of the balance, so they rise with it.</li>
</ul>
<p>That last point is why balance size matters so much, and we come back to it in the questions below.</p>
<blockquote>
<p>The real question is not whether control is appealing — it always is. It is whether you want the responsibility that is inseparable from it.</p>
</blockquote>
<div class="compare-cards">
<div class="compare-card">
<h4>Control, and time to use it</h4>
<dl>
<dt>If this is you</dt><dd>You want to choose individual assets, and you can give the fund real attention each quarter.</dd>
<dt>Likely fit</dt><dd>An SMSF, with a corporate trustee.</dd>
</dl>
</div>
<div class="compare-card">
<h4>Control, but not the admin</h4>
<dl>
<dt>If this is you</dt><dd>You want the investment freedom, but not the record-keeping, audit and lodgement work.</dd>
<dt>Likely fit</dt><dd>An SMSF with an accountant running compliance.</dd>
</dl>
</div>
<div class="compare-card">
<h4>Happy to stay hands-off</h4>
<dl>
<dt>If this is you</dt><dd>Choosing between Growth, Balanced and Conservative suits you, and you want no administration at all.</dd>
<dt>Likely fit</dt><dd>An industry or retail fund.</dd>
</dl>
</div>
</div>
<p>There is no wrong answer here. There is only an honest one. Our <a href="/services/self-managed-super-funds">self-managed super fund</a> service covers setup and ongoing compliance if the first two describe you.</p>

<h2 id="h-choosing-a-trustee-structure">Choosing a Trustee Structure</h2>
<p>Every SMSF needs a trustee, and there are two ways to do it. This is the decision that shapes how the fund operates for decades, so it is worth more than a moment.</p>

<h3>Individual Trustees</h3>
<p>Every member is personally named as a trustee. A two-member fund has two individual trustees.</p>
<ul>
<li><strong>Asset ownership.</strong> Every asset is held in the names of all trustees. If a member joins or leaves, every asset title has to be legally updated — a genuine administrative burden, not a formality.</li>
<li><strong>Succession.</strong> If a member dies, a two-member fund is left with a single individual trustee, which is not compliant. You are forced into a restructure at the worst possible time.</li>
<li><strong>Penalties.</strong> ATO administrative penalties can be applied to <em>each</em> trustee. In a four-member fund, one mistake can mean four separate fines.</li>
</ul>

<h3>Corporate Trustee</h3>
<p>A special-purpose proprietary limited company acts as trustee, and the members become its directors.</p>
<ul>
<li><strong>Asset ownership.</strong> Assets are held in the company's name, giving a clean separation between personal wealth and fund assets. Membership changes are handled by updating directorships, not asset titles.</li>
<li><strong>Succession.</strong> The company continues as trustee regardless of what happens to any individual member, which makes death benefits and transfers of control far smoother.</li>
<li><strong>Penalties.</strong> Administrative penalties are generally applied once, against the company, rather than multiplied across trustees.</li>
</ul>
<blockquote>
<p>A corporate trustee costs more upfront — company registration plus a small annual ASIC fee. For most new funds the asset protection, succession and administrative advantages are worth considerably more than that.</p>
</blockquote>

<h2 id="h-the-trust-deed">The Trust Deed</h2>
<p>The <strong>trust deed</strong> is the fund's rulebook: its purpose, its powers, and the rules for contributions, benefits and investments. It is a binding legal document, and it is not the place to save money with a free template.</p>
<p>The reason is that an old or generic deed quietly limits what the fund can do later. The clearest example: if you ever intend to buy property with borrowed money, the deed must contain specific clauses permitting a <strong>limited recourse borrowing arrangement</strong>. If those clauses are absent, the fund simply cannot do it — and by the time you find out, you are amending a deed under time pressure.</p>
<p>Have the deed drafted or reviewed by someone who works with superannuation law regularly, and make sure it reflects what you actually intend to do with the fund.</p>

<h2 id="h-registering-the-fund">Registering the Fund</h2>
<figure><img src="/blog/set-up-super-fund-document-signing.webp" alt="Two people reviewing and signing a legal document at a table." width="1400" height="788" loading="lazy" /></figure>
<p>The fund is established the day the trust deed is signed and executed. From that date you have <strong>60 days</strong> to register it with the ATO. This is not optional and the clock does not pause.</p>

<h3>ABN, TFN and the Regulated Election</h3>
<p>Registration means applying for an Australian Business Number and a Tax File Number for the fund itself, generally through the Australian Business Register. These become the fund's identity for every lodgement and every financial institution it deals with.</p>
<blockquote>
<p>During the ABN application you must elect for the fund to be an <strong>ATO-regulated super fund</strong>. Miss that election and the fund does not receive the concessional tax treatment that is the entire point of it.</p>
</blockquote>

<h3>A Dedicated Bank Account</h3>
<p>Once the ABN issues, open a bank account in the fund's name — not your personal name, not your business name. Every dollar belonging to the fund runs through it, kept completely separate from the trustees' personal and business money.</p>
<p>This is the <strong>separation of assets</strong> principle, and it does three jobs: it gives your auditor a clean trail, it helps shield fund assets if a member strikes personal financial trouble, and it demonstrates to the ATO that the fund is being run properly. Blurring it is one of the faster routes to a compliance breach.</p>

<h3>An Electronic Service Address</h3>
<p>To receive employer contributions — including from your own company — the fund needs an <strong>electronic service address</strong>. It is the digital mailbox that lets the fund receive contribution and rollover data in a SuperStream-compliant format.</p>
<p>You can obtain one from SMSF administrators, accountants, and some banks and share trading platforms. Once you have it, give it to your employer so contributions reach the right place.</p>

<h2 id="h-your-investment-strategy">Your Investment Strategy</h2>
<p>Before the fund invests a dollar it needs a written investment strategy. This is a legal requirement, not a formality, and a vague one-pager will not survive an audit. It must be reviewed at least annually, and updated whenever circumstances change materially.</p>
<p>Four things have to be addressed:</p>
<ul>
<li><strong>Risk and return.</strong> The level of risk the fund will accept and the returns it is targeting, showing you have weighed growth against preserving capital.</li>
<li><strong>Diversification.</strong> How investments are spread across asset classes. Concentrating in a single asset — one commercial property, say — is permitted, but it needs a documented justification.</li>
<li><strong>Liquidity.</strong> How the fund will meet its ongoing costs and member benefits. Audit fees, the ATO levy and pension payments all have to be payable when due.</li>
<li><strong>Insurance.</strong> Evidence that you have <em>considered</em> life and total and permanent disability cover for each member. Buying a policy is optional; recording that you thought about it is not.</li>
</ul>

<h2 id="h-getting-money-into-the-fund">Getting Money Into the Fund</h2>
<p>With the strategy documented, money can start arriving — usually by rolling over existing super and then setting up ongoing contributions.</p>
<p>Consolidating means contacting your existing funds with the SMSF's bank details and electronic service address. Allow a few weeks; every fund processes at its own pace.</p>
<blockquote>
<p>Check what insurance you hold inside your existing fund <em>before</em> you roll anything over. Cover held through a large fund can be difficult and expensive to replace individually, particularly as you get older or if your health has changed.</p>
</blockquote>
<p>Once money is arriving, each dollar has to be allocated to the correct member's account and recorded precisely. Three kinds of contribution are common:</p>
<ul>
<li><strong>Employer contributions.</strong> Superannuation guarantee payments. If you are an employee of your own company, the business pays these into the fund directly.</li>
<li><strong>Personal concessional contributions.</strong> Made from pre-tax income, typically by salary sacrifice, and taxed at 15% inside the fund. Our guide to <a href="/blog/salary-sacrifice-is-it-worth-it">whether salary sacrifice is worth it</a> works through the arithmetic, and <a href="/blog/how-to-salary-sacrifice-super">how to salary sacrifice to super</a> covers setting it up.</li>
<li><strong>Personal non-concessional contributions.</strong> Made from after-tax income, so no deduction — but earnings on them are taxed at the concessional rate inside the fund. Annual caps apply and they are worth planning around.</li>
</ul>

<h2 id="h-what-you-take-on-every-year">What You Take On Every Year</h2>
<figure><img src="/blog/set-up-super-fund-financial-planning.webp" alt="A tablet showing an investment allocation chart alongside coins, a model house and a calculator." width="1400" height="788" loading="lazy" /></figure>
<p>Setup is the short part. Running a compliant fund is an annual commitment, closer to operating a small business than holding an investment.</p>

<h3>The Annual Cycle</h3>
<ul>
<li><strong>Financial statements.</strong> An operating statement and a statement of financial position for the fund.</li>
<li><strong>An independent audit.</strong> An approved SMSF auditor must review the financials and compliance — and this happens <em>before</em> the annual return is lodged, not after.</li>
<li><strong>The SMSF annual return.</strong> More than a tax return: it reports income tax, regulatory compliance and member contributions together.</li>
<li><strong>The supervisory levy.</strong> Paid to the ATO, generally alongside the annual return.</li>
</ul>
<p>Records must be kept for at least five years, and some documents — trustee declarations and minutes among them — for longer. Good records make the audit faster and cheaper; poor ones make it neither. Our guide on <a href="/blog/how-to-handle-an-ato-audit-letter-step-by-step-guide">handling an ATO audit letter</a> is worth reading before you need it.</p>

<h3>Three Ways Trustees Come Unstuck</h3>
<p><strong>Breaching the sole purpose test.</strong> The fund exists solely to provide retirement benefits to its members. Buying a holiday house in the fund and using it for family holidays is the textbook breach. Before any decision, the test is simple: is this purely for members' retirement?</p>
<p><strong>Lending to members.</strong> The fund cannot lend money to a member or a related party. Not as a short-term bridge, not with every intention of repaying it, not at commercial rates. The wall between fund money and personal or business money has no doors in it.</p>
<p><strong>Carrying assets at cost.</strong> Assets must be valued at market value every year. A property sitting on the books at what it cost in 2015 is a finding waiting to happen. Get supportable evidence annually — an agent appraisal for property, statements for shares.</p>

<h2 id="h-frequently-asked-questions">Frequently Asked Questions</h2>

<h3>What balance do I need to make it worthwhile?</h3>
<p>There is no legal minimum. The practical constraint is arithmetic: an SMSF carries fixed annual costs — audit, accounting and administration, the ATO levy — that do not shrink with a smaller balance. On a modest balance those costs are a large share of returns; on a substantial one they are a small share. Work out the actual annual cost of running the fund and compare it against the percentage-based fee you are paying now. That comparison, not a rule of thumb, is the answer for your situation.</p>

<h3>Can the fund buy a house for me to live in?</h3>
<p>No. This is the most common and most costly misconception. Living in a property your fund owns uses a fund asset for present-day personal benefit, breaching the sole purpose test. The in-house asset rules separately prohibit you, your family and related parties from living in or renting residential property the fund owns. The penalties are severe.</p>

<h3>How long does setup take?</h3>
<p>Two to six weeks is typical — finalising the deed, settling the trustee structure, registering for an ABN and TFN, and opening the bank account. Delays almost always come from incomplete paperwork or from rollovers of existing balances, which move at the old fund's pace rather than yours.</p>

<h3>Can I run it myself without an accountant?</h3>
<p>The audit must be done by an approved independent SMSF auditor, so that part is never in-house. Everything else can be, in principle. Whether it should be depends on an honest estimate of the hours involved and how comfortable you are that a mistake carries a penalty attached to you personally.</p>

<hr>
<p>An SMSF gives you control of your retirement savings and hands you the responsibility that comes with it. Both halves are real, and the setup decisions — trustee structure and trust deed especially — are the ones you live with longest.</p>
<p>Trew North Accounting sets up and administers self-managed super funds for Melbourne clients. See our <a href="/services/self-managed-super-funds">SMSF service</a>, or <a href="/contact">get in touch</a> to work out whether one suits you.</p>`;

const TITLE = 'How to Set Up an SMSF in Australia: A 2026 Guide';
const DESCRIPTION =
  'Setting up a self-managed super fund step by step — trustee structure, trust deed, ATO registration, investment strategy, and the annual obligations you take on.';
const SLUG = '/blog/set-up-super-fund';
const PUBLISHED = '2026-08-14';

export default function BlogPostSetUpSuperFund() {
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
            readingTime: 'PT13M',
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
                Superannuation
              </span>
            </div>
            <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.1] text-foreground mb-6" style={{ letterSpacing: '-0.03em' }}>
              {TITLE}
            </h1>
            <div className="flex flex-wrap items-center gap-5 text-sm text-foreground/70">
              <span className="flex items-center gap-1.5"><User className="h-4 w-4" aria-hidden="true" /> Darren Trew, CA</span>
              <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" aria-hidden="true" /> 14 August 2026</span>
              <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" aria-hidden="true" /> 13 min read</span>
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
