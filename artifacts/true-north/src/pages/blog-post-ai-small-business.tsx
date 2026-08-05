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
  { id: 'overview',          label: 'AI and the small business landscape' },
  { id: 'automating-tasks',  label: 'Automating repetitive tasks' },
  { id: 'customer-service',  label: 'AI-powered customer service' },
  { id: 'marketing',         label: 'Marketing and content creation' },
  { id: 'accounting',        label: 'AI in accounting and finance' },
  { id: 'data-insights',     label: 'Turning data into insights' },
  { id: 'tools',             label: 'Practical AI tools to try now' },
  { id: 'challenges',        label: 'Challenges and limitations' },
  { id: 'getting-started',   label: 'Getting started with AI' },
  { id: 'future',            label: 'The future of AI for small business' },
  { id: 'faq',               label: 'Frequently asked questions' },
];

const aiSmallBusinessFaqs = [
  {
    question: 'What AI tools are most useful for small businesses right now?',
    answer: 'The highest-impact starting points are: ChatGPT or Claude for writing, research, and drafting; Xero or MYOB with AI features for automated bookkeeping and receipt capture; Canva AI for marketing design; and an AI chatbot (Tidio, Intercom) for handling customer enquiries outside business hours. Most have free tiers or cost under $50/month.',
  },
  {
    question: 'Is it safe to use AI tools with confidential business or financial data?',
    answer: 'You should be cautious. Consumer AI tools like ChatGPT may use your inputs to train their models unless you opt out or use an enterprise plan. For financial data, stick to purpose-built accounting platforms (Xero, MYOB) that have explicit data protection commitments. Always review the privacy policy of any AI service before sharing sensitive information.',
  },
  {
    question: 'How can AI help with my bookkeeping and accounting?',
    answer: 'Modern cloud accounting platforms use AI to automatically categorise bank transactions, extract data from photos of receipts, predict future cash positions, and flag unusual transactions. These features can reduce the time a bookkeeper or business owner spends on data entry by 50–70%, allowing them to focus on reviewing and decision-making rather than manual coding.',
  },
  {
    question: 'Will AI replace accountants and bookkeepers?',
    answer: 'AI is automating the most repetitive parts of accounting — data entry, transaction coding, and basic report generation — but it cannot replace the judgement, tax expertise, and strategic advice that a qualified accountant provides. The most likely outcome is that AI makes accountants and bookkeepers significantly more efficient, allowing them to focus on higher-value advisory work.',
  },
  {
    question: 'How much time can AI realistically save a small business?',
    answer: 'The McKinsey Global Institute\'s 2023 research on generative AI found significant automation potential for knowledge work activities — particularly data processing, routine communication, and document generation. In practice, small businesses using AI writing assistants and automated accounting software commonly report meaningful reductions in routine admin time, freeing owners to focus on clients and decisions. The actual saving depends on which tasks you automate and how well the tools are configured.',
  },
];

export default function BlogPostAISmallBusiness() {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="The Impact of AI in Small Business | Trew North Accounting"
        description="AI is transforming how small businesses operate — automating tasks, improving customer service, and unlocking financial insights. A practical guide for Melbourne business owners."
        canonical="/blog/the-impact-of-ai-in-small-business"
        ogType="article"
        publishedTime="2024-08-19"
        schema={[
          blogPostingSchema({
            title: 'The Impact of AI in Small Business',
            description: "AI is transforming how small businesses operate — automating tasks, improving customer service, and unlocking insights that were previously out of reach. Here's how to leverage it to stay competitive.",
            url: '/blog/the-impact-of-ai-in-small-business',
            datePublished: '2024-08-19',
            readingTime: 'PT7M',
          }),
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Blog', url: '/blog' },
            { name: 'The Impact of AI in Small Business', url: '/blog/the-impact-of-ai-in-small-business' },
          ]),
          faqSchema(aiSmallBusinessFaqs),
        ]}
      />
      <Navbar />
      <BlogBreadcrumb postTitle="The Impact of AI in Small Business" />

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
                Small Business
              </span>
            </div>

            <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.1] text-foreground mb-6" style={{ letterSpacing: '-0.03em' }}>
              The Impact of AI in Small Business
            </h1>

            <p className="text-xl text-foreground/70 leading-relaxed mb-8">
              AI is transforming how small businesses operate — automating tasks, improving customer service, and unlocking insights that were previously out of reach. Here's how to leverage it to stay competitive.
            </p>

            <div className="flex flex-wrap items-center gap-5 text-sm text-foreground/55">
              <span className="flex items-center gap-1.5">
                <User className="h-4 w-4" /> Darren Trew, CA
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" /> 19 August 2024
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" /> 7 min read
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
                  <p><strong>AI tools can save small businesses meaningful hours of admin per week by automating routine tasks — email drafting, social media, receipt capture, and customer FAQs. The McKinsey Global Institute (2023) found generative AI could automate 60–70% of worker activity across functions involving data processing and routine communication. The best starting points are AI writing assistants, cloud accounting with AI features, and AI chatbots for after-hours enquiries.</strong></p>
                  <p className="text-xs text-foreground/60 mt-2">Source: <a href="https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/the-economic-potential-of-generative-ai-the-next-productivity-frontier" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">McKinsey Global Institute — The economic potential of generative AI (2023)</a></p>
                </div>

                <p>
                  Artificial Intelligence is no longer just for large corporations with deep technology budgets. Accessible, affordable AI tools are now within reach of any small business — and those that embrace them are finding real competitive advantages in efficiency, customer experience, and decision-making.
                </p>
                <p>
                  The question for most small business owners isn't <em>whether</em> AI will affect their business — it's how to get started and where it can add the most value. This article breaks down the practical opportunities and how to approach them without overwhelm.
                </p>

                <h2 id="overview">AI and the Small Business Landscape</h2>
                <p>
                  The AI revolution is being driven largely by large language models (LLMs) like ChatGPT, Claude, and Gemini, which can generate text, summarise information, answer questions, and assist with a remarkable range of tasks. Alongside these, AI is being integrated into the business software small businesses already use — from accounting platforms to customer relationship management (CRM) tools to e-commerce platforms. The key is knowing what to look for and how to make use of them.
                </p>
                <p>
                  This means you don't necessarily need to seek out specialised AI tools — AI capabilities are increasingly coming to the tools you already use. The key is knowing what to look for and how to make use of them.
                </p>

                <h2 id="automating-tasks">Automating Repetitive Tasks</h2>
                <p>
                  One of the most immediate and valuable applications of AI for small businesses is automating routine, repetitive tasks that consume time without requiring genuine human judgement. Examples include:
                </p>
                <ul>
                  <li><strong>Email drafting and responses:</strong> AI writing assistants can draft professional emails in seconds, reducing the time spent on routine correspondence.</li>
                  <li><strong>Document creation:</strong> Proposals, quotes, and standard contracts can be generated from templates with AI assistance.</li>
                  <li><strong>Data entry and processing:</strong> AI tools can extract information from receipts, invoices, and documents and enter it automatically into your systems.</li>
                  <li><strong>Scheduling:</strong> AI-powered scheduling tools can manage appointment bookings and calendar coordination without manual intervention.</li>
                  <li><strong>Social media:</strong> AI can suggest, draft, and schedule social media posts based on your business and audience.</li>
                </ul>

                <h2 id="customer-service">AI-Powered Customer Service</h2>
                <p>
                  Customer expectations for fast, helpful responses have never been higher — but small businesses often can't afford to staff 24/7 customer support. AI chatbots and virtual assistants can fill this gap effectively, handling common enquiries, booking requests, and FAQs around the clock.
                </p>
                <p>
                  Modern AI chatbots can be trained on your specific business information — your products, services, pricing, and policies — and handle a significant proportion of customer interactions without human intervention. When a query is too complex, they can escalate to a human seamlessly.
                </p>
                <div className="callout">
                  <p className="font-semibold text-foreground mb-2">Customer service AI in practice:</p>
                  <ul>
                    <li>Answering FAQs instantly, any time of day</li>
                    <li>Capturing lead information from website visitors</li>
                    <li>Booking appointments or reservations automatically</li>
                    <li>Providing order status updates for e-commerce businesses</li>
                    <li>Triaging support requests before escalating to staff</li>
                  </ul>
                </div>

                <h2 id="marketing">Marketing and Content Creation</h2>
                <p>
                  Creating consistent, high-quality marketing content is a challenge for any small business — it's time-consuming, and many business owners don't feel confident as writers. AI has transformed this area dramatically.
                </p>
                <p>
                  AI writing tools (ChatGPT, Claude, Jasper, and others) can produce first drafts of blog posts, social media captions, email newsletters, and website copy in minutes. The quality won't replace a skilled human writer, but it provides an excellent starting point that can be refined quickly.
                </p>
                <p>
                  AI image generation tools (Midjourney, DALL-E, Adobe Firefly) can create custom visuals for marketing materials without the cost of a graphic designer or stock photography subscription.
                </p>

                <h2 id="accounting">AI in Accounting and Finance</h2>
                <p>
                  The accounting and finance space has been one of the earliest and most impactful adopters of AI. Modern cloud accounting platforms like Xero and MYOB are increasingly AI-powered, offering features like:
                </p>
                <ul>
                  <li><strong>Automatic transaction categorisation:</strong> AI learns from your categorisation history and automatically codes new transactions.</li>
                  <li><strong>Receipt capture:</strong> Photo a receipt and AI extracts the key information, creating the expense transaction automatically.</li>
                  <li><strong>Cash flow forecasting:</strong> AI analyses your historical patterns to project future cash positions.</li>
                  <li><strong>Anomaly detection:</strong> Identifies unusual transactions that might indicate errors or fraud.</li>
                  <li><strong>Tax preparation support:</strong> Some platforms are integrating AI to help identify deductions and prepare BAS automatically.</li>
                </ul>

                <h2 id="data-insights">Turning Data into Insights</h2>
                <p>
                  Small businesses generate a great deal of data — sales figures, customer behaviour, website traffic, inventory levels — but extracting useful insights from it has traditionally required significant analytical skills or dedicated staff. AI tools are making this more accessible.
                </p>
                <p>
                  Tools like Microsoft Copilot in Excel, or AI features in Google Analytics, can answer plain-English questions about your data: "Which products have the highest margin?", "What time of day do most of my customers enquire?", "Which customer segment is growing fastest?"
                </p>
                <p>
                  This kind of insight, previously the domain of large businesses with data analysts, is increasingly available to any business that asks the right questions.
                </p>

                <h2 id="tools">Practical AI Tools to Try Now</h2>
                <div className="callout">
                  <p className="font-semibold text-foreground mb-2">A starter toolkit for small businesses:</p>
                  <ul>
                    <li><strong>ChatGPT / Claude:</strong> General-purpose AI assistants for writing, research, brainstorming, and problem-solving.</li>
                    <li><strong>Canva AI:</strong> Design tools with AI-powered image generation and layout suggestions — great for marketing materials.</li>
                    <li><strong>Xero / MYOB with AI features:</strong> Automated bookkeeping, receipt capture, and financial insights.</li>
                    <li><strong>Tidio / Intercom:</strong> AI-powered customer chat and support automation.</li>
                    <li><strong>Notion AI / Microsoft Copilot:</strong> AI-enhanced document creation, note-taking, and knowledge management.</li>
                    <li><strong>Calendly / Acuity:</strong> Automated appointment scheduling with AI assistance.</li>
                  </ul>
                </div>

                <h2 id="challenges">Challenges and Limitations</h2>
                <p>
                  AI is powerful, but it's not without limitations. According to the <a href="https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/the-economic-potential-of-generative-ai-the-next-productivity-frontier" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">McKinsey Global Institute</a>, while AI's automation potential is significant, successful adoption requires human oversight to manage accuracy and quality. Small business owners should be aware of:
                </p>
                <ul>
                  <li><strong>Accuracy:</strong> AI tools can be confidently wrong. Always review AI-generated content, particularly for anything factual, financial, or legal.</li>
                  <li><strong>Data privacy:</strong> Be cautious about what confidential information you share with AI tools. Review the privacy policies of any AI service you use.</li>
                  <li><strong>Over-reliance:</strong> AI works best as an assistant, not a replacement for human judgement. Use it to speed up your work, not to remove your oversight.</li>
                  <li><strong>Learning curve:</strong> Getting value from AI tools requires some experimentation and learning. The payoff is worth the investment, but expect a period of adjustment.</li>
                  <li><strong>Cost:</strong> Many advanced AI tools carry subscription costs. Evaluate ROI carefully before committing.</li>
                </ul>

                <h2 id="getting-started">Getting Started with AI</h2>
                <p>
                  The best approach is to start small and experiment. Pick one area of your business where you feel the pain of repetition or inefficiency most acutely — email drafting, social media, customer enquiries, bookkeeping — and try one AI tool in that area for 30 days.
                </p>
                <p>
                  Measure the time saved and the quality of the output. If it's working, expand. If not, try a different tool or approach. The AI landscape is evolving rapidly, so what doesn't work today may be much better in six months.
                </p>

                <h2 id="future">The Future of AI for Small Business</h2>
                <p>
                  AI is developing at a remarkable pace. What's possible today was science fiction five years ago — and in five more years, the capabilities available to small businesses will likely be equally transformative. Businesses that develop AI literacy and experimentation habits now will be far better positioned to take advantage of what's coming.
                </p>
                <p>
                  The most important thing isn't to have all the answers — it's to stay curious, keep experimenting, and focus on where AI can free up your time for the things that only humans can do well: building relationships, making judgement calls, and providing genuinely personal service.
                </p>

                {/* FAQ */}
                <h2 id="faq">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  {aiSmallBusinessFaqs.map((faq) => (
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
                        Darren is a Chartered Accountant with over 25 years' experience helping Melbourne small business owners improve their financial performance. If you'd like to discuss how technology — including AI — can improve your financial operations, <Link href="/contact" className="text-primary hover:underline">get in touch</Link>.
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
                    <p className="font-semibold text-sm">Ready to modernise?</p>
                  </div>
                  <p className="text-secondary-foreground/75 text-sm leading-relaxed mb-5">
                    We help Melbourne businesses use technology — including cloud accounting and AI tools — to run smarter. Book a free consultation.
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
