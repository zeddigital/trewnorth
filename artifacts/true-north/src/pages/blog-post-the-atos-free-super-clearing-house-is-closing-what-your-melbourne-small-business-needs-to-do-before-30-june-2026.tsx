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
  { id: 'h-what-is-the-small-business-super-clearing-house', label: 'What Is the Small Business Super Clearing House?' },
  { id: 'h-why-is-the-small-business-superannuation-clearing-', label: 'Why Is the Small Business Superannuation Clearing House Closing?' },
  { id: 'h-key-dates-you-cannot-afford-to-miss', label: 'Key Dates You Cannot Afford to Miss' },
  { id: 'h-what-happens-if-you-dont-transition-in-time', label: 'What Happens If You Don\'t Transition in Time?' },
  { id: 'h-what-you-need-to-do-right-now', label: 'What You Need to Do Right Now' },
  { id: 'h-what-about-the-new-concessional-contributions-cap', label: 'What About the New Concessional Contributions Cap?' },
];

const htmlContent = `<p>There's a service that over 200,000 Australian small businesses have quietly relied on for years to manage superannuation payments. It's free, it's government-run, and most business owners have never given it a second thought — because it just worked. That service is the ATO's <strong>Small Business Super Clearing House</strong>, and it's closing permanently on 30 June 2026.</p><p><img src="https://tnaccounting.com.au/wp-content/uploads/2026/06/Business-owner-discusiing-super.webp" alt="Super Clearing House Is Closing. What to Do Before 30 June 2026" width="1672" height="941" /></p><p>If you currently use the SBSCH to pay your employees' super, you need to act now. Not because the ATO is being unreasonable, but because the deadline is real, the closure is complete, and there is no grace period once the switch is flipped. After 11:59pm AEST on 30 June 2026, the portal shuts down entirely. You won't be able to log in, process payments, or even retrieve your past records. The system will simply be gone.</p><p>This post explains what the SBSCH is, why it's closing, what that means for your payroll, and exactly what steps you need to take before the end of this financial year. If you'd rather have someone guide you through the transition, our <a href="/services/bookkeeping/">bookkeeping team</a> works with Melbourne small businesses on exactly this kind of payroll setup.</p><h2 id="h-what-is-the-small-business-super-clearing-house">What Is the Small Business Super Clearing House?</h2><h3>A Quick Refresher for Business Owners</h3><p>The Small Business Super Clearing House is a free online service provided by the ATO that lets eligible small employers pay all of their employees' super contributions in a single transaction. Rather than logging into multiple super fund portals and making separate payments to each employee's fund individually — which could mean five, ten, or fifteen separate transfers per pay run — employers submit one consolidated payment to the SBSCH and the system distributes the correct amounts to each employee's nominated fund.</p><p>To be eligible, a business needed to have either 19 or fewer employees, or an annual turnover of less than $10 million. For businesses that qualified, it was an attractive option: genuinely free, reasonably straightforward to use, and it allowed employers to meet their super obligations with a single payment. The ATO counted contributions as paid on the date the SBSCH received the funds, which gave employers some additional flexibility around the quarterly super deadlines.</p><h3>Why Did So Many Small Businesses Rely on It?</h3><p>For small business owners without a sophisticated payroll setup — and there are a lot of them, particularly in trades, hospitality, retail, and professional services across Melbourne's bayside suburbs — the SBSCH was often the simplest way to manage super. It didn't require expensive software or a dedicated payroll system. Business owners could log in through their myGov or ATO Online Services account, enter their employees' super fund details, make a payment, and get on with running their business.</p><p>It was one of those ATO services that worked quietly in the background and rarely caused problems. Which is exactly why its closure is catching so many employers off guard.</p><h2 id="h-why-is-the-small-business-superannuation-clearing-">Why Is the Small Business Superannuation Clearing House Closing?</h2><h3>The Payday Super Connection</h3><p>The SBSCH is closing because it was built for a world that no longer exists after 1 July 2026. Under Payday Super — which we covered in detail in our <a href="/payday-super-for-2026-the-small-business-accountants-checklist-to-stay-compliant-and-protect-cash-flow/">recent blog on Payday Super</a> — employers are now required to pay superannuation at the same time as wages, with contributions arriving in the employee's super fund within 7 calendar days of each payday. The quarterly model is over.</p><p>The SBSCH was fundamentally designed around quarterly super payments. It was never built to handle the volume, frequency, or speed required under Payday Super. For a business with a weekly payroll, that means 52 super transactions per year instead of four. The system simply cannot support that kind of frequency or the real-time processing requirements that come with it.</p><p>Rather than attempting to rebuild the SBSCH from the ground up, the ATO has made the decision to retire it entirely and direct employers toward commercial payroll solutions and clearing houses that are already built for frequent, automated super payments. From the ATO's perspective, it's the right call. For business owners, it means finding an alternative — and doing so before 30 June.</p><h3>The Broader Compliance Shift</h3><p>There's a bigger picture here too. The ATO has increasingly been moving toward real-time data reporting and automated compliance. Single Touch Payroll (STP) already requires businesses to report wages and super to the ATO every time they run payroll. Payday Super extends this further, with super contributions being tracked in near real-time against payroll reports. The SBSCH, with its manual entry model and quarterly payment approach, simply doesn't fit within this architecture.</p><p>The closure of the SBSCH is not a standalone event — it's part of a fundamental modernisation of how payroll and super obligations work in Australia. Understanding that context helps explain why there is no extended transition, no legacy access period, and no workaround after 30 June.</p><h2 id="h-key-dates-you-cannot-afford-to-miss">Key Dates You Cannot Afford to Miss</h2><p><img src="https://tnaccounting.com.au/wp-content/uploads/2026/06/Plumber-with-Accountant.webp" alt="" width="1672" height="941" /></p><h3>The Small Business Super Clearing House Timeline at a Glance</h3><p>Understanding the timeline is critical. Here are the dates that matter:</p><p><strong>1 October 2025</strong></p><p>The SBSCH stopped accepting new registrations. If your business wasn't already registered, you cannot sign up now. Only existing users can continue to access the service through to 30 June.</p><p><strong>28 April 2026</strong></p><p>The ATO recommends this quarterly super payment (for the January to March 2026 quarter) be the last payment you make through the SBSCH. If you are still paying quarterly super, this is the natural point to make your final SBSCH payment and begin your transition.</p><p><strong>30 June 2026</strong></p><p>At 11:59pm AEST the SBSCH closes permanently . This is the absolute final deadline. Any payments not processed before this time will not go through. Any records not downloaded before this time will be permanently inaccessible.</p><p><strong>1 July 2026</strong></p><p>Payday Super begins. From this date, every employer must pay super as part of each payroll run, using a SuperStream-compliant clearing house or payroll platform with integrated super.</p><p>If you have been putting off this transition, the window is very narrow now. Given that it's already June 2026, acting this week is not an overstatement.</p><h2 id="h-what-happens-if-you-dont-transition-in-time">What Happens If You Don't Transition in Time?</h2><h3>Loss of Access to Historical Records</h3><p>This is the part that surprises a lot of business owners when they first hear it. When the SBSCH closes on 30 June 2026, you will lose permanent access to all of your historical payment records stored in the system. Every payment transaction, every employee contribution record, every confirmation — gone. There is no archive, no ATO backup you can request later, and no way to retrieve the data after the portal shuts down.</p><p>This matters because you may need those records in the future. The ATO can audit super payments for up to five years. If an employee disputes their super contributions, or if the ATO queries your historical obligations, you will need documentation to demonstrate compliance. Without your SBSCH records, you'll be trying to reconstruct payment history from bank statements and fund confirmation emails — which is time-consuming, stressful, and not always complete.</p><p>The ATO has been clear: download your records now, while you still can.</p><h3>Missed Super Payments and ATO Penalties</h3><p>If your business is still relying on the SBSCH on 1 July 2026 and has not set up an alternative, you will have no way to pay super. Not a delayed way — no way at all. Under Payday Super, super must be paid within 7 days of each payroll run. If you miss that window, you're immediately in breach of your Superannuation Guarantee obligations.</p><p>The consequences include the Superannuation Guarantee Charge (SGC), which is not simply the missed super amount. The SGC includes the unpaid super, a nominal interest charge, and an administration fee. Under the new Payday Super penalty framework, the ATO can identify missed or late payments in near real-time through STP data matching, which means the penalties can escalate quickly. There is no longer the buffer of a quarterly review cycle before non-compliance is detected.</p><h3>The Risk to Your Employees</h3><p>Beyond the financial penalties, there's a responsibility to your team. Your employees rely on their super contributions arriving on time and in full. Missed or late super payments affect their retirement savings, and in some cases their insurance cover within their super fund, which can be tied to minimum contribution activity. Getting this wrong isn't just a compliance problem — it's a staff relations problem.</p><h2 id="h-what-you-need-to-do-right-now">What You Need to Do Right Now</h2><p><img src="https://tnaccounting.com.au/wp-content/uploads/2026/06/Cafe-Owner-With-Accountant.webp" alt="" width="1672" height="941" /></p><h3>Step 1: Check Whether You're Using the SBSCH</h3><p>Start by confirming how your business currently pays super. Log into your ATO Online Services account or myGov and check whether the SBSCH is your current payment method. Some businesses set this up years ago and may not remember doing so. Others may have moved to payroll software already and don't realise they're no longer using the SBSCH.</p><p>If you're not sure, check your bank statements for recent super payments. When those payments are being sent through a clearing house integrated with payroll software such as Xero, MYOB, or QuickBooks, you're likely already in good shape. Payments processed through a manual ATO portal login, however, almost certainly mean you're using the SBSCH and need to act.</p><h3>Step 2: Download and Save All Your SBSCH Records Immediately</h3><p>Before you do anything else, log into the SBSCH and download your complete transaction and employee payment history. The ATO recommends downloading both your employee payment transaction history and your employee details records. Save these in a secure, backed-up location — ideally both on your business computer and in a cloud storage service.</p><p>Do not leave this until late June. If there are any technical issues logging in, or if the portal experiences high traffic as the deadline approaches, you want time to resolve those problems. The ATO has published a step-by-step guide on downloading records at their <a href="https://www.ato.gov.au/businesses-and-organisations/super-for-employers/payday-super/payday-super-resources/how-to-transition-from-the-small-business-superannuation-clearing-house" target="_blank" rel="noopener">SBSCH transition page</a>, which is worth bookmarking.</p><h3>Step 3: Choose Your Alternative Super Payment Method</h3><p>This is the most important decision you'll make during this transition. There are two main options for Melbourne small business owners.</p><p><strong>Option A: Payroll software with an integrated clearing house.</strong></p><p>Platforms like Xero, MYOB, and QuickBooks all have built-in super payment functionality connected to commercial clearing houses. When you run a payroll, super is calculated automatically and can be initiated as part of the same process. The clearing house then distributes payments to each employee's fund. This is the approach we recommend to most of our clients because it removes the manual step entirely and sets your business up correctly for Payday Super from day one. Our <a href="/best-accounting-software-for-small-business-australia/">guide to the best accounting software for Australian small businesses</a> walks through how these platforms compare.</p><p><strong>Option B: A standalone SuperStream-compliant clearing house.</strong></p><p>If you're not ready to change payroll platforms, you can sign up with a commercial clearing house that operates independently of your accounting software. These services are SuperStream compliant, meaning they meet the ATO's data and payment standards. However, for most small businesses, a standalone clearing house adds an extra manual step that integrated payroll software eliminates entirely.</p><p>The ATO maintains a <a href="https://www.ato.gov.au/businesses-and-organisations/super-for-employers/paying-super-contributions/how-to-pay-super/superstream-for-employers/superstream-product-register" target="_blank" rel="noopener">SuperStream Product Register</a> that lists compliant providers if you want to compare options.</p><h3>Step 4: Set Up and Test Your New System Before 30 June</h3><p>Whatever alternative you choose, don't wait until 1 July to test it. Set up your new clearing house or payroll software now, enter your employee super fund details, and if possible, run a test payment before the end of June. Identify any employees whose fund details may be incomplete or incorrect — these will cause payment failures under the new system just as they would have under the SBSCH.</p><p>Pay particular attention to employees who have Self-Managed Super Funds (SMSFs). SMSF payment processing can work differently across clearing houses, and not all platforms handle SMSFs in the same way. If any of your staff have an SMSF, confirm your new system can process those payments correctly. Our <a href="/services/self-managed-super-funds/">SMSF team</a> can help if you need guidance on the SMSF side of this.</p><h3>Step 5: Update Employee Super Fund Details</h3><p>While you're setting up your new system, take the opportunity to audit every employee's super fund information. Check that you have the correct fund name, USI (Unique Superannuation Identifier), and member account number for every staff member. Outdated or incorrect details are one of the most common causes of failed super payments, and under Payday Super's 7-day receipt rule, a failed payment that needs to be reprocessed can quickly become a late payment.</p><p>If any employees have changed funds recently and haven't notified you, now is the time to collect updated super choice forms. Under the superannuation stapling rules that have applied since November 2021, new employees who don't nominate a fund must have contributions paid to their 'stapled' fund identified through the ATO — your payroll software should be able to handle this lookup process.</p><h3>Step 6: Review Your Cash Flow for the New Payment Rhythm</h3><p>If you've been paying super quarterly and you're moving to a payroll system that processes super every pay run, your cash flow timing will change. Super money that previously sat in your business account for up to three months will now be leaving much sooner — within days of each payroll.</p><p>For some businesses, this is a manageable shift. For others, particularly those with tight working capital or irregular revenue, it requires some planning. Our <a href="/services/small-business-accountant/">small business accounting team</a> can help you model out the cash flow impact and build a plan that accounts for the new payment rhythm before it catches you off guard.</p><h2 id="h-what-about-the-new-concessional-contributions-cap">What About the New Concessional Contributions Cap?</h2><p>While you're reviewing your super arrangements, it's worth noting that the concessional contributions cap is increasing from $30,000 to $32,500 on 1 July 2026. This doesn't affect your employer obligations directly, but if you're a business owner who uses salary sacrifice into super as part of your own tax planning, your planning window increases from the new financial year. Our guide on <a href="/how-to-salary-sacrifice-super/">how to salary sacrifice to super</a> covers this in detail and is worth revisiting as you update your super arrangements this year.</p><h3>A Note on Record Keeping Requirements</h3><p>Even after you've downloaded your <strong>Small Business Super Clearing House</strong> records and transitioned to a new system, your obligations around record keeping don't change. The ATO requires employers to keep super records for a minimum of five years. This includes records of contributions made, employee fund details, and any correspondence related to super payments. Your new payroll software will maintain these records going forward, but you are responsible for retaining your Small Business Super Clearing House historical records independently once the portal closes.</p><p>It's worth storing these in a secure, labelled folder — either in your accounting platform's document storage or a dedicated cloud folder — so they're easy to locate if needed in the future.</p><h3>Getting Help With the Transition</h3><p>The Small Business Super Clearing House closure is one of those changes that sounds straightforward but has a lot of moving parts when you actually work through it — choosing a new platform, migrating employee data, testing payments, updating fund details, reviewing cash flow, and downloading records before the deadline. For business owners who are already stretched managing day-to-day operations, this can slip down the priority list until it becomes urgent.</p><p>If you'd like support navigating the transition, the team at <a href="/">Trew North Accounting</a> works with small businesses across Beaumaris and the wider Bayside area on exactly this kind of payroll and super setup.</p><p>Whether you need help choosing the right payroll platform, setting up integrated super payments, or just want someone to check that your business is ready for 1 July, we're here to help. <a href="/contact/">Get in touch with us today</a> and we'll make sure you're not caught out by the deadline.</p>`;

export default function BlogPostTheAtosFreeSuperClearingHouseIsClosingWhatYourMelbourneSmallBusinessNeedsToDoBefore30June2026() {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="The ATO's Free Super Clearing House Is Closing - What Your Melbourne Small Business Needs to Do Before 30 June 2026 | Trew North Accounting"
        description="The ATO's Free Super Clearing House Is Closing - What Your Melbourne Small Business Needs to Do Before 30 June 2026"
        canonical="/blog/the-atos-free-super-clearing-house-is-closing-what-your-melbourne-small-business-needs-to-do-before-30-june-2026"
        ogType="article"
        publishedTime="2026-06-16"
        schema={[
          blogPostingSchema({
            title: "The ATO's Free Super Clearing House Is Closing - What Your Melbourne Small Business Needs to Do Before 30 June 2026",
            description: "The ATO's Free Super Clearing House Is Closing - What Your Melbourne Small Business Needs to Do Before 30 June 2026",
            url: '/blog/the-atos-free-super-clearing-house-is-closing-what-your-melbourne-small-business-needs-to-do-before-30-june-2026',
            datePublished: '2026-06-16',
            readingTime: 'PT13M',
          }),
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Blog', url: '/blog' },
            { name: "The ATO's Free Super Clearing House Is Closing - What Your Melbourne Small Business Needs to Do Before 30 June 2026", url: '/blog/the-atos-free-super-clearing-house-is-closing-what-your-melbourne-small-business-needs-to-do-before-30-june-2026' },
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
            <BlogBreadcrumb postTitle="The ATO's Free Super Clearing House Is Closing - What Your Melbourne Small Business Needs to Do Before 30 June 2026" />
            <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline mb-6">
              <ArrowLeft className="h-4 w-4" /> Back to articles
            </Link>
            <div className="mb-4">
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                Tax Planning
              </span>
            </div>
            <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.1] text-foreground mb-6" style={{ letterSpacing: '-0.03em' }}>
              The ATO&#39;s Free Super Clearing House Is Closing - What Your Melbourne Small Business Needs to Do Before 30 June 2026
            </h1>
            <div className="flex flex-wrap items-center gap-5 text-sm text-foreground/70">
              <span className="flex items-center gap-1.5"><User className="h-4 w-4" aria-hidden="true" /> Darren Trew, CA</span>
              <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" aria-hidden="true" /> 16 June 2026</span>
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
