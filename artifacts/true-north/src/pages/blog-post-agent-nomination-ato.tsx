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
  { id: 'h-what-agent-nomination-is', label: 'What Agent Nomination Is' },
  { id: 'h-before-you-start', label: 'Before You Start' },
  { id: 'h-making-the-nomination', label: 'Making the Nomination' },
  { id: 'h-tax-agent-or-bas-agent', label: 'Tax Agent or BAS Agent?' },
  { id: 'h-when-it-does-not-work', label: 'When It Does Not Work' },
  { id: 'h-frequently-asked-questions', label: 'Frequently Asked Questions' },
];

const htmlContent = `<p><strong>Agent nomination</strong> is the ATO's client-to-agent linking system. Before a registered tax agent, BAS agent or payroll provider can act for your business, you have to nominate them yourself through Online services for business. It takes about five minutes once your digital identity is set up — and it is the setup, not the nomination, where almost everyone gets stuck.</p>

<h2 id="h-what-agent-nomination-is">What Agent Nomination Is</h2>
<figure><img src="/blog/agent-nomination-ato-secure-nomination.webp" alt="A business owner reviewing a secure agent nomination on a laptop." width="1400" height="788" loading="lazy" /></figure>
<p>The system exists because agents used to be able to link themselves to your account. Now the authorisation has to originate with you, which means nobody can gain access to your tax and super information without you deliberately granting it.</p>
<p>It applies whenever you engage a new agent or change who is authorised to act for you.</p>
<ul>
<li><strong>Required for</strong> companies, trusts, partnerships and self-managed super funds.</li>
<li><strong>Not required for</strong> individual taxpayers and sole traders, whose agents can still link using the earlier method. The ATO has signalled this may extend further, so it is worth staying aware of.</li>
</ul>
<blockquote>
<p>One detail causes more failed nominations than everything else combined: <strong>the ATO does not tell your agent you have nominated them</strong>. You have to. A nomination nobody knows about simply expires.</p>
</blockquote>
<p>Once submitted, your agent has <strong>28 calendar days</strong> to accept. Miss that window and the whole thing has to be done again.</p>

<h2 id="h-before-you-start">Before You Start</h2>
<p>Three things need to be in place. Get them sorted first and the nomination itself is trivial; skip them and you will not get past the login screen.</p>
<div class="compare-cards">
<div class="compare-card">
<h4>1. Your myID</h4>
<dl>
<dt>What it is</dt><dd>The Australian Government's digital identity app, renamed from myGovID in late 2024. Same app, same login — new name.</dd>
<dt>What you need</dt><dd>At least <strong>Standard</strong> identity strength, which means verifying two documents such as a passport, driver's licence or Medicare card.</dd>
</dl>
</div>
<div class="compare-card">
<h4>2. Your business link</h4>
<dl>
<dt>What it is</dt><dd>Relationship Authorisation Manager (RAM) connects your personal myID to the business ABN.</dd>
<dt>What you need</dt><dd>Log in to RAM with a Standard-strength myID and claim authority for the business. That makes you its <strong>principal authority</strong>.</dd>
</dl>
</div>
<div class="compare-card">
<h4>3. Your agent's number</h4>
<dl>
<dt>What it is</dt><dd>The <strong>registered agent number</strong> (RAN) — the code that identifies your agent in the ATO's system.</dd>
<dt>What you need</dt><dd>Ask your accountant or bookkeeper for it, and confirm which authorisations they need while you are asking.</dd>
</dl>
</div>
</div>
<p>On that last point, know what you are authorising before you start:</p>
<ul>
<li><strong>Income tax</strong> — annual returns and general tax compliance.</li>
<li><strong>Activity statements</strong> — BAS lodgements, covering GST and PAYG withholding. If GST registration is still ahead of you, our guide on <a href="/should-your-small-business-register-for-gst">whether to register for GST</a> covers the threshold and the decision.</li>
<li><strong>Payroll service provider</strong> — for businesses using a separate provider purely for payroll.</li>
</ul>

<h2 id="h-making-the-nomination">Making the Nomination</h2>
<p>With the groundwork done, log in to <strong>Online services for business</strong> using your myID.</p>

<h3>Find the screen</h3>
<p>From the top navigation, choose <strong>Profile</strong>, then <strong>Agent details</strong>. That page lists any nominations already in place. Select <strong>Add</strong> to start a new one.</p>

<h3>Fill in the form</h3>
<ol>
<li><strong>Find your agent.</strong> Enter the RAN and search. Their practice name appears — check it is the firm you expect before continuing.</li>
<li><strong>Choose the authorisations.</strong> For most small businesses this is income tax and activity statements. If you are not certain, confirm with your agent rather than guessing.</li>
<li><strong>Read the declaration.</strong> It confirms you have authority to appoint an agent for the business. Tick, and submit.</li>
</ol>

<h3>Then tell your agent</h3>
<p>This is the step to write down. No notification is sent. A short email or phone call is all that is needed, and without it the nomination sits unseen until it expires.</p>
<p>You can check progress any time by returning to <strong>Profile → Agent details</strong>, which shows pending nominations and their expiry dates.</p>

<h2 id="h-tax-agent-or-bas-agent">Tax Agent or BAS Agent?</h2>
<figure><img src="/blog/agent-nomination-ato-handshake.webp" alt="Two business professionals shaking hands across a table." width="1400" height="788" loading="lazy" /></figure>
<p>The two are licensed for different work, and nominating the wrong one means either paying for expertise you do not use or leaving a compliance gap open.</p>
<div class="compare-cards">
<div class="compare-card">
<h4>Tax agent</h4>
<dl>
<dt>Can handle</dt><dd>Annual income tax returns, activity statements, GST and PAYG, tax planning and advice, and representing you to the ATO on any tax matter.</dd>
<dt>Best for</dt><dd>Year-round tax management, strategic advice, and lodging the annual return.</dd>
</dl>
</div>
<div class="compare-card">
<h4>BAS agent</h4>
<dl>
<dt>Can handle</dt><dd>Activity statements, GST and PAYG. Advice and ATO representation are limited to BAS matters. <strong>Cannot</strong> lodge your annual income tax return.</dd>
<dt>Best for</dt><dd>Day-to-day transaction compliance and regular GST and payroll reporting.</dd>
</dl>
</div>
</div>
<p>Plenty of businesses use both — a bookkeeper holding BAS authorisation for the quarterly cycle, and an accountant holding tax authorisation for the annual return and planning. Nominating both is perfectly normal.</p>
<p>If you are still choosing, our guide to <a href="/your-guide-to-the-best-melbourne-accountants-in-2024">finding a Melbourne accountant</a> covers what to look for in a firm you intend to stay with.</p>

<h2 id="h-when-it-does-not-work">When It Does Not Work</h2>
<p>Nominations fail for a small number of predictable reasons.</p>

<h3>Wrong entity or wrong agent number</h3>
<p>If you direct several companies it is easy to begin the nomination under the wrong ABN. To undo it, return to <strong>Profile → Agent details</strong>, find the nomination and cancel it.</p>
<p>A single mistyped digit in the RAN will also stop the search returning anything. Before assuming a system fault, confirm the number with the practice directly.</p>

<h3>Identity and authority mismatches</h3>
<p>Most authentication failures come down to your details not matching across systems. Your name as a director on the Australian Business Register has to align with your verified myID identity, and you must hold principal authority for the ABN in RAM.</p>
<blockquote>
<p>If RAM will not let you claim the business, the problem is almost always upstream — outdated director details on the ABR, or a myID that has not reached Standard strength. Fix it there, not in the nomination screen.</p>
</blockquote>

<h3>Why it is worth fixing quickly</h3>
<p>Without a linked agent, lodgements are yours alone to make and to remember. Late lodgement is where penalties start, and for company directors the consequences of unpaid PAYG withholding, GST and super reach through to you personally. Our guide on <a href="/how-to-handle-an-ato-audit-letter-step-by-step-guide">handling an ATO audit letter</a> covers what happens when correspondence does arrive.</p>

<h2 id="h-frequently-asked-questions">Frequently Asked Questions</h2>

<h3>What if I cannot use myID or get online?</h3>
<p>Call the ATO. There is a phone-based pathway for people who genuinely cannot meet the digital identity requirements — you verify your identity and your connection to the business over the phone. Explain your situation and ask whether you qualify.</p>

<h3>How do I change or remove my current agent?</h3>
<p>You do not need to remove anyone first. Nominate the new agent, and when they accept, the previous authorisation is revoked automatically. No awkward conversation required.</p>
<p>If you want to end a relationship without appointing a replacement, remove their access under <strong>Authorised contacts</strong> in the portal instead.</p>

<h3>Does my agent get notified?</h3>
<p>No. This is the single most important thing to remember, which is why it appears three times in this article. Tell them yourself, and do it the same day — the 28-day clock starts when you submit, not when they find out.</p>

<h3>I am a sole trader. Do I need to do this?</h3>
<p>Not currently. The requirement covers companies, trusts, partnerships and SMSFs. Your agent can still add you using the earlier method. Worth keeping an eye on, as the ATO has indicated the scope may widen.</p>

<h3>Can I nominate more than one agent?</h3>
<p>Yes. Authorisations are granted by type, so a BAS agent and a tax agent can be nominated separately for their respective areas. Just be clear about who is responsible for what, so a lodgement does not fall between them.</p>

<hr>
<p>Agent nomination is a five-minute job wrapped around a digital identity setup that can take an afternoon. Do the myID and RAM work first, keep the RAN handy, and tell your agent the moment you submit.</p>
<p>Trew North Accounting handles ATO compliance end to end for Melbourne small businesses. See our <a href="/services/small-business-accountant">small business accounting</a> and <a href="/services/bookkeeping">bookkeeping</a> services, or <a href="/contact">get in touch</a> — we will walk you through the nomination when you come on board.</p>`;

const TITLE = 'ATO Agent Nomination: A Step-by-Step Guide for Business';
const DESCRIPTION =
  'How to nominate your tax or BAS agent with the ATO — myID and RAM setup, the nomination steps, the 28-day window, and why nominations most often fail.';
const SLUG = '/agent-nomination-ato';
const PUBLISHED = '2026-08-15';

export default function BlogPostAgentNominationAto() {
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
            readingTime: 'PT9M',
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
                Business
              </span>
            </div>
            <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.1] text-foreground mb-6" style={{ letterSpacing: '-0.03em' }}>
              {TITLE}
            </h1>
            <div className="flex flex-wrap items-center gap-5 text-sm text-foreground/70">
              <span className="flex items-center gap-1.5"><User className="h-4 w-4" aria-hidden="true" /> Darren Trew, CA</span>
              <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" aria-hidden="true" /> 15 August 2026</span>
              <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" aria-hidden="true" /> 9 min read</span>
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
