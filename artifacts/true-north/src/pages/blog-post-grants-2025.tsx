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
  { id: 'overview',           label: 'Overview of grants for 2025' },
  { id: 'federal-grants',     label: 'Federal government grants' },
  { id: 'vic-grants',         label: 'Victorian government grants' },
  { id: 'innovation',         label: 'Innovation and R&D funding' },
  { id: 'digital',            label: 'Digital and technology grants' },
  { id: 'export',             label: 'Export market grants' },
  { id: 'employment',         label: 'Employment and training support' },
  { id: 'sustainability',     label: 'Sustainability grants' },
  { id: 'finding-grants',     label: 'How to find grants you qualify for' },
  { id: 'applying',           label: 'Tips for a successful application' },
  { id: 'tax-treatment',      label: 'Tax treatment of grants' },
  { id: 'faq',                label: 'Frequently asked questions' },
];

const grants2025Faqs = [
  {
    question: 'Are government grants taxable income in Australia?',
    answer: 'Yes, in most cases government grants are assessable income for tax purposes and must be declared in your tax return. However, if you use the grant funds to purchase deductible assets or meet deductible expenses, those deductions may offset the tax liability. Always discuss the tax treatment with your accountant before and after receiving a grant.',
  },
  {
    question: 'How do I find small business grants I\'m eligible for?',
    answer: 'Start with the two main grant finders: business.gov.au (federal programs) and business.vic.gov.au (Victorian programs). Both have guided search tools to filter by industry, business stage, and purpose. Set a quarterly reminder to check for new programs, as grants open and close throughout the year.',
  },
  {
    question: 'What is the Export Market Development Grant (EMDG) and who qualifies?',
    answer: 'The EMDG is a federal program administered by Austrade that reimburses eligible costs incurred promoting Australian products and services in overseas markets — including trade shows, marketing materials, overseas travel, and market research. Businesses with less than $50 million in annual turnover and genuine export ambitions can apply. Over 5,000 Australian SMEs benefit from the program each year.',
  },
  {
    question: 'How competitive are small business grant applications?',
    answer: 'Competitiveness varies widely by program. Some grants are non-competitive (you either meet the eligibility criteria or you don\'t), while others like the Victorian Business Growth Fund are highly competitive. Well-written, specific applications that clearly address the selection criteria and quantify expected outcomes significantly outperform vague submissions.',
  },
  {
    question: 'Can my accountant help me identify and apply for grants?',
    answer: 'Yes, and it\'s well worth asking. A good accountant familiar with small business programs can alert you to relevant grant opportunities, help you assess eligibility, ensure your financials are in order for the application, and advise on the tax treatment of any grant you receive. For large, complex grants, they may recommend a specialist grant writer.',
  },
];

export default function BlogPostGrants2025() {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Top Small Business Grants Australia 2025 | Trew North Accounting"
        description="Discover federal and Victorian government grants available to Australian small businesses in 2025. Eligibility, application tips, and tax treatment explained by Trew North Accounting."
        canonical="/blog/top-small-business-grants-for-2025"
        ogType="article"
        publishedTime="2025-02-20"
        schema={[
          blogPostingSchema({
            title: 'Top Small Business Grants for 2025: Easy Funding Options',
            description: "Government and private grants can provide a real boost for small businesses — but many owners don't know what's available or how to access it. Here's a practical guide to the top funding options for 2025.",
            url: '/blog/top-small-business-grants-for-2025',
            datePublished: '2025-02-20',
            readingTime: 'PT9M',
          }),
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Blog', url: '/blog' },
            { name: 'Top Small Business Grants for 2025', url: '/blog/top-small-business-grants-for-2025' },
          ]),
          faqSchema(grants2025Faqs),
        ]}
      />
      <Navbar />
      <BlogBreadcrumb postTitle="Top Small Business Grants for 2025" />

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
                Business Planning
              </span>
            </div>

            <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.1] text-foreground mb-6" style={{ letterSpacing: '-0.03em' }}>
              Top Small Business Grants for 2025: Easy Funding Options
            </h1>

            <p className="text-xl text-foreground/70 leading-relaxed mb-8">
              Government and private grants can provide a real boost for small businesses — but many owners don't know what's available or how to access it. Here's a practical guide to the top funding options for 2025.
            </p>

            <div className="flex flex-wrap items-center gap-5 text-sm text-foreground/55">
              <span className="flex items-center gap-1.5">
                <User className="h-4 w-4" /> Darren Trew, CA
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" /> 20 February 2025
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" /> 9 min read
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
                  <p><strong>Australian small businesses can access grants from federal, state, and local government — including the R&amp;D Tax Incentive, the Export Market Development Grants program, digital transformation funding, and the Victorian Business Growth Fund. Unlike loans, grants don't need to be repaid — but most are assessable income for tax purposes.</strong></p>
                  <p className="text-xs text-foreground/60 mt-2">Sources: <a href="https://www.austrade.gov.au/en/information-for-exporters/export-grants" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Austrade EMDG</a> · <a href="https://business.vic.gov.au/grants-and-programs/victorian-business-growth-fund" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Victorian Business Growth Fund</a> · <a href="https://www.ato.gov.au/businesses-and-organisations/income-deductions-and-concessions/income-exemptions/tax-treatment-of-government-grants-and-payments" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">ATO grant tax treatment</a></p>
                </div>

                <div className="callout">
                  <p className="font-semibold text-foreground mb-2">Important: always verify program availability</p>
                  <p>Grant programs open and close throughout the year, and eligibility criteria can change. The programs listed in this article represent categories and examples that have been available to Australian small businesses — but you should always confirm current status and requirements directly with the administering agency before applying. Use <a href="https://business.gov.au/grants-and-programs" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">business.gov.au</a> and <a href="https://business.vic.gov.au" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">business.vic.gov.au</a> as your primary sources for live program information.</p>
                </div>

                <p>
                  Grants are one of the most underutilised sources of funding for Australian small businesses. Unlike loans, grants don't need to be repaid — making them an attractive option for funding growth, innovation, digital transformation, and more. Yet many business owners don't know what's available, or assume the process is too complex or competitive to be worth pursuing.
                </p>
                <p>
                  The reality is that with the right information and a methodical approach, many small businesses are eligible for grants they've never applied for. This guide covers key grant categories and programs relevant to Melbourne and Victorian small businesses in 2025.
                </p>

                <h2 id="overview">Overview of Grants for 2025</h2>
                <p>
                  Grant programs in Australia come from multiple levels of government — federal, state, and local — as well as private foundations and industry bodies. Programs open and close throughout the year, and eligibility criteria vary widely based on business size, industry, location, and the purpose of the funding.
                </p>
                <div className="callout">
                  <p className="font-semibold text-foreground mb-2">Key grant categories available in 2025:</p>
                  <ul>
                    <li>Government business support programs</li>
                    <li>Innovation and R&amp;D funding</li>
                    <li>Digital transformation and technology grants</li>
                    <li>Export market development assistance</li>
                    <li>Sustainability and energy efficiency grants</li>
                    <li>Employment and workforce training support</li>
                    <li>Disaster recovery and resilience programs</li>
                    <li>Industry-specific support programs</li>
                  </ul>
                </div>

                <h2 id="federal-grants">Federal Government Grants</h2>
                <p>
                  The Australian federal government provides a range of grants and support programs for small businesses through agencies including the ATO, Austrade, the Department of Industry, and Services Australia.
                </p>
                <ul>
                  <li>
                    <strong>Business.gov.au grants finder:</strong> The Australian Government's central portal for grants, funding, and support programs. Use the guided search tool to filter by location, business stage, and industry to find relevant programs.
                  </li>
                  <li>
                    <strong>Small Business Support Line:</strong> Free advice and referrals to relevant programs via the government's small business support services.
                  </li>
                  <li>
                    <strong>AusIndustry programs:</strong> Various programs supporting business growth, commercialisation, and capability development.
                  </li>
                </ul>

                <h2 id="vic-grants">Victorian Government Grants</h2>
                <p>
                  Business Victoria administers a range of grant and support programs for Victorian small businesses. Programs change throughout the year, so checking their website regularly is worthwhile.
                </p>
                <ul>
                  <li>
                    <strong>Business Victoria Grant Finder:</strong> An online tool that helps Victorian businesses identify relevant grants based on their industry, size, and needs. Available at business.vic.gov.au. The Business Victoria Hotline (13 22 15) can also help you navigate available options.
                  </li>
                  <li>
                    <strong><a href="https://business.vic.gov.au/grants-and-programs/victorian-business-growth-fund" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Victorian Business Growth Fund:</a></strong> Offers grants from $50,000 to $5 million for SMEs with strong growth potential. Focused on businesses ready to scale and make a significant economic contribution. Partnering with private investors, it helps businesses secure capital for expansion.
                  </li>
                  <li>
                    <strong>LaunchVic:</strong> Supports Victorian startups and early-stage innovative businesses through grants and programs designed to accelerate growth.
                  </li>
                  <li>
                    <strong>Sector-specific programs:</strong> Various programs targeting industries including agriculture, manufacturing, retail, and the creative industries.
                  </li>
                </ul>

                <h2 id="innovation">Innovation and R&D Funding</h2>
                <p>
                  Australia has strong support for businesses engaged in research, development, and innovation — and the available funding is more accessible than many business owners realise.
                </p>
                <ul>
                  <li>
                    <strong>Research and Development Tax Incentive:</strong> Not a grant, but one of the most valuable government support programs available. Eligible businesses can claim a tax offset (or cash refund if in a tax loss position) for qualifying R&amp;D expenditure. Worth exploring if your business develops new products, processes, or software solutions.
                  </li>
                  <li>
                    <strong>CSIRO Kick-Start Program:</strong> Provides matched funding for startups and SMEs to access CSIRO's world-class research expertise. Designed to help businesses develop new products or processes by partnering with Australia's national science agency.
                  </li>
                  <li>
                    <strong>Innovate to Grow:</strong> A 10-week program helping SMEs identify and pursue R&amp;D opportunities, with support to develop innovation strategies and connect with research partners.
                  </li>
                </ul>

                <h2 id="digital">Digital and Technology Grants</h2>
                <p>
                  Digital transformation is a priority for many government support programs. If your business is investing in technology to improve operations, reach new customers, or enhance cybersecurity, there may be funding available.
                </p>
                <ul>
                  <li>
                    <strong>Digital Solutions Program:</strong> Provides small businesses with low-cost access to digital advisors and tools to help them improve their online presence, use digital tools effectively, and protect against cyber threats.
                  </li>
                  <li>
                    <strong>Victorian Digital Jobs Program:</strong> Supports businesses digitising their operations and upskilling their workforce in digital capabilities.
                  </li>
                  <li>
                    <strong>Cybersecurity support:</strong> Various federal and state programs helping small businesses improve cybersecurity posture, recognising that cyber attacks disproportionately affect smaller operators.
                  </li>
                </ul>

                <h2 id="export">Export Market Development Grants (EMDG)</h2>
                <p>
                  The <a href="https://www.austrade.gov.au/en/information-for-exporters/export-grants" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Export Market Development Grants (EMDG) program</a> is one of the most significant federal grants available to Australian small businesses with international ambitions. Administered by Austrade, it helps offset the costs of promoting products and services in overseas markets.
                </p>
                <p>
                  Key features include:
                </p>
                <ul>
                  <li>Available to businesses with less than $50 million in annual turnover</li>
                  <li>Reimburses eligible overseas marketing expenses including trade shows, marketing materials, travel, and market research</li>
                  <li>Multiple tiers of funding available depending on export stage and strategy</li>
                  <li>More than 4,000 Australian exporters have benefited from the program (per <a href="https://www.austrade.gov.au/en/information-for-exporters/export-grants" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Austrade</a>)</li>
                </ul>
                <p>
                  If your business sells — or wants to sell — to international markets, EMDG is worth investigating as a priority.
                </p>

                <h2 id="employment">Employment and Training Support</h2>
                <p>
                  Several programs support small businesses with the cost of hiring new staff, particularly from disadvantaged groups, or training and upskilling existing employees.
                </p>
                <ul>
                  <li>
                    <strong>Workforce Australia:</strong> Federal employment programs that provide wage subsidies for businesses hiring eligible job seekers, including long-term unemployed individuals, young people, and those with a disability.
                  </li>
                  <li>
                    <strong>Australian Apprenticeships Incentives:</strong> Financial incentives for businesses that take on apprentices or trainees, including wage subsidies and training supplements.
                  </li>
                  <li>
                    <strong>Skills Victoria:</strong> Programs supporting training and skills development for Victorian workers, including subsidised training through the Skills First program.
                  </li>
                </ul>

                <h2 id="sustainability">Sustainability Grants</h2>
                <p>
                  With sustainability increasingly important to customers and regulators, grant programs supporting energy efficiency, emissions reduction, and environmental practices have expanded significantly.
                </p>
                <ul>
                  <li>
                    <strong>Solar for Business Program:</strong> Victorian program providing rebates for small businesses installing solar panels.</li>
                  <li>
                    <strong>Energy Efficiency grants:</strong> Various programs helping businesses reduce energy costs through equipment upgrades and efficiency improvements.</li>
                  <li>
                    <strong>Recycling and Circular Economy programs:</strong> Support for businesses integrating recycling or circular economy practices into their operations.</li>
                </ul>

                <h2 id="finding-grants">How to Find Grants You Qualify For</h2>
                <p>
                  The challenge with grants is that they're spread across many agencies and programs, and eligibility criteria vary widely. The most effective approach:
                </p>
                <ol>
                  <li><strong>Start with the grant finders:</strong> Use Business.gov.au and Business Victoria's grant finder tools to identify programs relevant to your industry and situation.</li>
                  <li><strong>Check regularly:</strong> New programs open throughout the year. Set a quarterly reminder to check for new opportunities.</li>
                  <li><strong>Talk to your accountant:</strong> A good accountant familiar with small business programs can alert you to relevant opportunities and help you assess eligibility.</li>
                  <li><strong>Join industry associations:</strong> Many industry bodies communicate relevant grant programs to their members.</li>
                  <li><strong>Contact Business Victoria or your local council:</strong> They often have advisors who can help identify relevant programs for your specific situation.</li>
                </ol>

                <h2 id="applying">Tips for a Successful Application</h2>
                <p>
                  Grant applications can be competitive, but a well-prepared application significantly improves your chances. Key tips:
                </p>
                <div className="callout">
                  <ul>
                    <li><strong>Read the guidelines carefully:</strong> Understand exactly what the grant is designed to fund and ensure your project aligns with the program's objectives.</li>
                    <li><strong>Address all criteria:</strong> Grant assessors score applications against specific criteria. Ensure you address every one explicitly.</li>
                    <li><strong>Be specific and quantified:</strong> Vague statements are less persuasive than specific, measurable claims. Use numbers, data, and concrete examples.</li>
                    <li><strong>Demonstrate impact:</strong> Show how the grant funding will create tangible outcomes — jobs, revenue growth, innovation, environmental benefits.</li>
                    <li><strong>Allow enough time:</strong> Good applications take time. Don't rush — start well before the deadline.</li>
                    <li><strong>Get professional help if needed:</strong> For large grants, engaging a grant writer or advisor may be worthwhile.</li>
                  </ul>
                </div>

                <h2 id="tax-treatment">Tax Treatment of Grants</h2>
                <p>
                  An important consideration that many business owners overlook: grants are generally assessable income for tax purposes. This means you need to declare grant income in your tax return and may need to pay tax on it, depending on your overall tax position.
                </p>
                <p>
                  However, if the grant funds are used to purchase deductible assets or meet deductible expenses, those deductions may offset the tax liability. The tax treatment can be complex, particularly for larger grants or those with specific conditions — so always discuss the tax implications with your accountant before and after receiving a grant.
                </p>
                <p>
                  The key exception is certain payments received as part of COVID support programs and some emergency relief programs, which may have had different tax treatment — but this should always be confirmed with professional advice.
                </p>

                {/* FAQ */}
                <h2 id="faq">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  {grants2025Faqs.map((faq) => (
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
                        Darren is a Chartered Accountant with over 25 years' experience helping Melbourne small businesses access funding and manage their tax obligations. If you'd like help identifying grants you may be eligible for or understanding the tax treatment of a grant, <Link href="/contact" className="text-primary hover:underline">get in touch</Link>.
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
                    <p className="font-semibold text-sm">Explore your funding options</p>
                  </div>
                  <p className="text-secondary-foreground/75 text-sm leading-relaxed mb-5">
                    We help Melbourne businesses identify grants they qualify for and navigate the application process. Book a free consultation with Darren.
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
