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
  { id: 'h-key-tax-and-regulatory-updates-for-202425', label: 'Key Tax and Regulatory Updates for 2024–25' },
  { id: 'h-new-compliance-obligations-and-reporting-changes-u', label: 'New Compliance Obligations and Reporting Changes under the Shadow Economy Compliance Program' },
  { id: 'h-tax-deductions-and-incentives-for-taxable-income-a', label: 'Tax Deductions and Incentives for Taxable Income Available in 2025' },
  { id: 'h-sectorspecific-impacts-and-considerations', label: 'Sector-Specific Impacts and Considerations' },
  { id: 'h-key-deadlines-and-filing-dates-for-tax-changes-in-', label: 'Key Deadlines and Filing Dates for Tax Changes in 2025' },
  { id: 'h-tips-for-staying-compliant-and-prepared-for-any-ta', label: 'Tips for Staying Compliant and Prepared For Any Tax Changes' },
  { id: 'h-introduction-to-tax-changes', label: 'Introduction to Tax Changes' },
  { id: 'h-understanding-income-tax', label: 'Understanding Income Tax' },
];

const htmlContent = `<h1>Navigating the 2025 Tax Changes: What Small Businesses in Melbourne Need to Know</h1>				
		<p><strong>Melbourne’s small business owners</strong> are facing a host of new tax laws and ATO regulations in the 2024–25 financial year. The government announced these tax changes to address issues such as bracket creep and to simplify the tax system. These changes are expected to benefit small businesses by introducing a new standard $1,000 tax deduction, making it easier to claim work-related expenses.</p><p>Understanding these updates is crucial to stay compliant and financially prepared. Below, we break down the key changes from new tax rates and deductions to reporting obligations and important deadlines and what you need to do to navigate them effectively.</p>		
						<h4>
				Table of Contents			</h4>
															<img width="1344" height="768" src="https://tnaccounting.com.au/wp-content/uploads/2025/05/2025-Tax-Changes.webp" alt="Tax Changes For 2025" />															
					<h2 id="h-key-tax-and-regulatory-updates-for-202425">Key Tax and Regulatory Updates for 2024–25</h2>				
					<h3>Stage 3 Income Tax Cuts</h3>				
		<p>Major personal tax cuts took effect on 1 July 2024. The 19% marginal rate for individuals has been reduced to <strong>16%</strong>, and the 32.5% rate dropped to <strong>30% </strong>(<a href="https://www.ato.gov.au/about-ato/new-legislation/in-detail/individuals/individual-income-tax-rates-and-threshold-changes#:~:text=From%201%C2%A0July%202024%2C%20the%20tax,cuts%20have" target="_blank" rel="noopener"><strong>ATO</strong></a>). The upper thresholds for higher tax brackets also rose (37% kicks in at $135k, 45% at $190k). These cuts address bracket creep by reducing the tax rate for the $18,201 – $45,000 bracket. From 1 July 2026, taxpayers will save one cent for every dollar earned within a specific income bracket. The reduction in the lowest income tax rate will impact different income brackets, providing significant savings. The concept of a tax bracket means that only the income exceeding a bracket's threshold is taxed at the higher rate.</p>		
		<p><strong><em>Implication:</em></strong> If you operate as a sole trader or take business profits as personal income, your 2024–25 tax return may benefit from lower rates. Adjust your PAYG withholding or instalments to reflect these cuts so you’re not overpaying (or underpaying) during the year.</p>		
					<h3>Company Tax Rate</h3>				
		<p>The federal <strong>company tax rate for small businesses</strong> remains unchanged at <strong>25%</strong> (for base rate entities under $50m turnover). There were no new changes to this rate in 2024–25, so incorporated small firms in Melbourne will continue to pay 25% on profits. Keep this steady rate in mind for budgeting and instalment planning.</p>		
					<h3>Superannuation Guarantee Increases</h3>				
		<p>The compulsory super contribution rate continues to rise. From 1 July 2024, the Superannuation Guarantee (SG) rate increased from 11% to <strong>11.5%</strong>, and it is legislated to reach <strong>12%</strong> on 1 July 2025. This means higher super costs for employers.</p>		
		<p><b>Action:</b> <strong>Budget now for increased SG contributions</strong> – for example, every $1,000 of wages now requires $115 in super, climbing to $120 next year. Ensure your payroll systems apply the 11.5% rate for 2024–25, and plan for the 12% rate starting next financial year.</p>		
					<h3>ATO Interest Deductions Denied</h3>				
		<p>A significant integrity measure kicks in from 1 July 2025 – <strong>interest charges owed to the <a href="https://www.ato.gov.au/about-ato/new-legislation/in-detail/businesses/deny-deductions-for-ato-interest-charges#:~:text=These%20amendments%20deny%20deductions%20for,SIC" target="_blank" rel="noopener">ATO</a> will no longer be tax-deductible</strong>. This includes General Interest Charge (GIC) on late payments and Shortfall Interest Charge on amended assessments. Any ATO interest incurred on or after that date cannot be claimed as a tax deduction.</p>		
		<p><strong><em>Implication:</em> </strong>Paying tax debts late will effectively become more expensive. Small businesses should prioritise paying tax liabilities on time or setting up payment plans, since you won’t get any tax break on interest accruing after 30 June 2025. (Note that interest incurred before that date is still deductible.)</p>		
					<h3>Higher Penalties for Non-Compliance</h3>				
		<p>The cost of missing lodgements or payments has gone up. The Commonwealth <strong>penalty unit</strong> value increased from $313 to <strong>$330</strong> as of 7 November 2024. For a small business, each 28-day period late in lodging (e.g. a BAS or tax return) accrues one penalty unit, so a single late lodgement can now cost <strong>$330</strong>, and up to $1,650 for more than 4 months overdue. Directors of companies face strengthened <strong>Director Penalty Notices (DPNs)</strong> enforcement for unpaid PAYG withholding and super if you receive a DPN, you must act quickly to remit the debt or liquidate, or else directors become personally liable. </p>		
		<p><strong>Action:</strong> <strong>Mark your calendar for all tax lodgements and payments</strong>. Lodging on time avoids these hefty fines. If you anticipate a delay or inability to pay, engage with the ATO early – they have shown flexibility with payment plans when approached proactively.</p>		
					<h3>Victorian Payroll Tax Relief</h3>				
		<p>On the state level, Victoria has raised the payroll tax thresholds to ease the burden on small businesses. As of 1 July 2024, the annual payroll tax–free threshold in Victoria increased from $700,000 to <strong>$900,000</strong>, and it will rise to <strong>$1,000,000</strong> from 1 July 2025. Small businesses under these limits owe no state payroll tax.</p>		
		<p><strong>I<em>mplication:</em></strong> If you’re hiring and growing, more of you will stay under the threshold and avoid payroll tax in 2024–25. Businesses slightly above $900k in wages get a reduced deduction (phasing out at $1.2m). (<strong><a href="https://www.sro.vic.gov.au/rates-taxes-duties-and-levies/payroll-tax-current-rates#:~:text=From%201%20July%202024%2C%20employers,a%20reduced%20deduction%2C%20where" target="_blank" rel="noopener">VICgov</a></strong>)</p>		
		<p><strong>Check your total annual wages</strong> – Melbourne businesses nearing the new threshold might now fall completely out of the payroll tax net, which frees up cash for reinvestment. Ensure you register for payroll tax only if your wages exceed the new limits.</p>		
					<h2 id="h-new-compliance-obligations-and-reporting-changes-u">New Compliance Obligations and Reporting Changes under the Shadow Economy Compliance Program</h2>				
					<h3>Single Touch Payroll (STP) Phase 2</h3>				
		<p>By now, all employers should be reporting wages through STP Phase 2, which requires more detailed payroll data (like income type and tax treatment codes for each employee). If you haven’t transitioned, you are <strong>past the deadline</strong>, as most deferrals ended in 2022. Ensure your payroll software is updated for STP2 so you’re reporting correctly on or before each pay day. <strong>STP Finalisation</strong> of income statements for your staff is due by <strong>14 July</strong> each year don’t forget to finalise 2024–25 payroll data by mid-July 2025 so employees can lodge their returns.</p>		
					<h3>“Payday” Super (Coming Soon)</h3>				
		<p>A major change on the horizon is <strong>Payday Super</strong>, which from 1 July 2026 will require paying employees’ super at the same time as wages (rather than quarterly). This reform is still under consultation, but small businesses should start preparing now. Aligning super payments with each pay run will have cash flow impacts.</p>		
		<p><strong>Action</strong>: <strong>Develop the habit of setting aside super each pay cycle</strong>. Check that your payroll system can support more frequent super contributions. Early preparation will make for a smoother transition when this becomes mandatory.</p>		
					<h3>Monthly GST for Some Businesses</h3>				
		<p>Starting <strong>1 April 2025</strong>, the ATO will <strong>mandate monthly GST lodgements</strong> for businesses that have a poor compliance history. If you consistently lodge BASs late, have unpaid GST debts, or frequently correct errors, you may get a notice requiring you to move from quarterly to monthly GST reporting. Once on monthly, you must continue for at least 12 months before you can request to revert to quarterly. </p>		
		<p><strong><em>Implication:</em> </strong>This is meant to help businesses stay on top of obligations, but it also means <strong>cash flow adjustments</strong> – you’ll remit GST (or claim refunds) every month. To avoid being forced into monthly cycles, <strong>improve your GST compliance now</strong>: lodge BAS on time and address GST debts. If you do get switched to monthly, work with your bookkeeper to manage the more frequent reporting. (On the flip side, some businesses actually prefer monthly BAS to smooth out payments and get quicker GST refunds you can <strong>opt in voluntarily</strong> if it suits your cash flow.)</p>		
					<h3>Data Matching &amp; the Shadow Economy</h3>				
		<p>The ATO has ramped up data-matching programs to sniff out unreported income. <strong>Contractor payments</strong> are under particular scrutiny. Businesses in building &amp; construction, cleaning, courier and delivery, IT, road freight, or security services must lodge a <strong>Taxable Payments Annual Report (TPAR)</strong> by 28 August each year for payments to contractors. The ATO uses these TPARs to check that contractors are declaring that income. </p>		
		<p>If you’re a contractor or subcontractor in these fields, be aware the ATO is actively cross-checking – <strong>omitting contractor income is a key audit focus</strong> in 2025. Separately, the government’s <strong>Shadow Economy</strong> initiative (extended with $155.5 million funding) means industries with traditionally high cash transactions like hospitality and retail can expect more ATO attention on undeclared cash takings and off-the-books wages.</p>		
		<p>The Shadow Economy Compliance Program plays a crucial role in enhancing tax compliance by targeting these sectors. Additionally, the Tax Avoidance Taskforce is focused on improving compliance among large corporations and wealthy groups. The Tax Integrity Program ensures that medium and large businesses, along with wealthy groups, fulfill their tax obligations.</p>		
		<p><strong>Action:</strong> <strong>Declare all your income</strong>, including cash earnings and gig economy payments. If your business hires contractors, ensure you lodge your TPAR and keep records of ABNs and payments. By staying transparent, you avoid penalties and the risk of being moved into stricter reporting (or worse, audited and fined for omissions).</p>		
					<h3>Tax Changes For ABN Holder Obligations</h3>				
		<p>The ATO has begun cancelling ABNs that appear inactive or invalid. If you <strong>haven’t reported any business income</strong> in your tax returns or activity statements, the ATO may assume you’re no longer trading and could <strong>cancel your ABN</strong> after contacting you. Similarly, draft rules (from the Black Economy Taskforce) will allow the ABR to suspend ABNs for businesses that fail to lodge income tax returns for two or more years. </p>		
		<p><strong>Action:</strong> <strong>Maintain your ABN in good standing</strong> – lodge at least one tax return each year (even a nil return) if you have an active ABN, and update the Australian Business Register if your business details change. If you’ve ceased trading, cancel your ABN to avoid compliance letters. Remember, if the ATO does cancel your ABN and you later need it, you’ll have to reapply and explain the lapse in lodgements to get it reinstated.</p>		
					<h3>Electronic Invoicing (E-invoicing)</h3>				
		<p>While not mandatory yet for most small businesses, e-invoicing via the Peppol network is being increasingly adopted. The ATO and government agencies are already capable of receiving e-invoices. It’s worth keeping an eye on this trend – adopting e-invoicing can streamline your accounts and may become a compliance requirement in the future. No action is strictly required in 2025, but consider learning about e-invoicing platforms, especially if you deal with large companies or government clients (some may request e-invoices).</p>		
					<h2 id="h-tax-deductions-and-incentives-for-taxable-income-a">Tax Deductions and Incentives for Taxable Income Available in 2025</h2>				
															<img width="1344" height="768" src="https://tnaccounting.com.au/wp-content/uploads/2025/05/Tax-Deductions-and-Incentives.webp" alt="" />															
					<h3>$20,000 Instant Asset Write-Off (IAWO) – Extended</h3>				
		<p><strong>Good news</strong> – the popular instant asset write-off for small business has been <strong>extended through 30 June 2025</strong>. If your business turnover is under $10 million, you can immediately deduct the full cost of <em>eligible depreciating assets</em> costing less than <strong>$20,000</strong> each, first used or installed between 1 July 2024 and 30 June 2025. This is a per-asset threshold (no overall cap), so you can write off multiple assets under $20k. </p>		
		<p>Assets at or above $20k go into your small business depreciation pool as usual (with 15% deduction first year, 30% thereafter). <em>How to use this:</em> If you need new equipment, tools, or vehicles (subject to the car limit) for your Melbourne business, you’ll get an <strong>immediate tax deduction up to $20k</strong> per item, rather than depreciating over several years. For example, a $15,000 IT system or a $18,000 coffee machine can be expensed in full in the year of purchase, boosting your 2025 deductions and cash flow. <strong>Plan purchases based on genuine business needs</strong>, not just for a tax write-off spending $1 to get 25c in tax back is not wise unless the asset truly adds value.</p>		
		<p>Also note the luxury car depreciation limit (~$69,000 for cars in 2024–25) still caps what can be claimed on passenger vehicles; the IAWO doesn’t override that, so expensive cars won’t be fully deductible. Keep a logbook if you use vehicles for business to substantiate your claims. Additionally, the low income tax offset (LITO) provides tax relief for eligible low-income earners, reducing their overall tax liability. The middle income tax offset (LMITO) is also relevant for the current tax year, offering further tax benefits to middle-income earners.</p>		
		<p><strong>Update:</strong> Initially, the instant write-off was set to drop back to $1,000 from 1 July 2025, but the government has indicated it will <strong>extend the $20,000 threshold for another year (2025–26)</strong>. As of the latest federal budget, a 12-month extension to 30 June 2026 has been announced (pending final legislation). This provides continued support for small business investment. Keep an eye out for the law to pass it likely will, given bipartisan support for small business relief.</p>		
					<h3>Temporary Full Expensing (TFE) Has Ended</h3>				
		<p>The COVID-era TFE program, which allowed unlimited instant expensing of assets, ended on 30 June 2023. The $20k write-off described above is essentially its replacement at a lower cap. If you claimed TFE in prior years, note that it’s no longer available beyond assets installed by June 2023. Now we’re back to threshold-based write-offs or normal depreciation for larger purchases.</p>		
		<p>One related rule: if you have a <strong>small business pooling balance</strong> (from prior depreciation) that is <strong>under $20,000 at 30 June 2025, you can write off that entire pool</strong> in your 2025 tax return.</p>		
		<p>This is a useful clean-up if you have old residual depreciable balances – they can be deducted in full under the simplified depreciation rules at year-end. The Medicare levy is another important consideration, as it funds Australia's universal health care system and impacts tax calculations. The Medicare levy low-income thresholds provide relief for low-income earners, reducing or exempting them from the levy. Recent adjustments to the levy low income thresholds have been announced, aiming to ease the tax burden on low-income earners.</p>		
					<h3>Small Business “Boost” Incentives</h3>				
		<p>The government introduced two temporary bonus deductions to encourage investment in skills and digital technology. These boosts are <strong>one-off 20% extra deductions</strong> on eligible expenditures:</p>		
					<h4>1. Skills and Training Boost</h4>				
		<p>For expenditure <strong>on external training courses for your employees</strong> (provided by registered training providers) between 29 March 2022 and 30 June 2024. You can claim 120% of the cost – i.e. a $1,000 training expense yields a $1,200 deduction. Notably, this is <strong>for training your employees</strong>; you cannot claim the boost on courses for yourself as a sole trader or for non-employees. Also, big businesses &gt;$50m turnover are excluded.</p>		
					<h4>2. Technology Investment Boost</h4>				
		<p>For expenditure on <strong>digital operations or digital assets</strong> (e.g. business software, e-commerce development, cyber security, devices) between 29 March 2022 and 30 June 2023. This is also a 120% deduction, capped at $100k of spend (meaning max $20k bonus).</p>		
		<p>If you took advantage of these boosts, you’ll be claiming the bonus amounts in your tax returns (the boost deductions are claimed in the 2022–23 and 2023–24 returns, since those were the incurring periods). The ATO has flagged that <strong>many businesses are making errors in claiming these boosts</strong>. Common mistakes include claiming the tech boost for spending outside the eligible dates, or claiming the training boost for non-employees or unregistered training providers. </p>		
		<p><strong><em>Tip:</em></strong> If you intend to claim one of these boosts, double-check the eligibility criteria carefully (e.g. ensure the invoice date falls in the allowed window, and keep evidence like course completion or software implementation dates). The ATO is actively reviewing these claims in audits, so don’t be aggressive or casual in claiming the 120% deductions. When used correctly, these incentives are a nice tax break for investing in your team’s skills and your business’s digital capability just keep documentation to substantiate the claim.</p>		
					<h3>Small Business Energy Incentive</h3>				
		<p>A new incentive was available in the 2023–24 year to encourage energy efficiency. If your business (under $50m turnover) invested in eligible assets or upgrades that <strong>improve energy efficiency</strong> between 1 July 2023 and 30 June 2024, you can claim an extra <strong>20% bonus deduction</strong> on those costs (capped at $100k of expenditure, so max $20k bonus). Eligible assets include things like energy-efficient appliances, equipment that electrifies processes (reducing fossil fuel use), or batteries and heat pumps essentially, projects that help save energy or shift to renewables.</p>		
		<p>This incentive works similarly to the tech boost: you claim the normal deduction plus an additional 20% of the cost as a bonus. <em>Status:</em> The energy incentive was a one-year opportunity for FY2023–24. If you did invest in solar panels, efficient HVAC, etc., be sure to claim the extra 20%. If not, keep an eye out there’s discussion that future budgets may reintroduce or extend such green incentives as Australia pushes for lower emissions.</p>		
					<h3>Work-Related Car Deduction (Cents per KM)</h3>				
		<p>For those using personal cars for business travel and claiming mileage, note that the ATO’s <strong>cents-per-kilometre rate increased to 88 cents/km for 2024–25</strong> (up from 85c last year). You can claim up to 5,000 business km per car using this method. Ensure you have a reasonable method for estimating your work-related mileage (such as a logbook or diary) even though detailed logs aren’t required for the cents-per-km method. </p>		
		<p>If your business operates in and around Melbourne, remember that normal commutes from home to your workplace are <em>not</em> claimable only trips for business purposes count. The higher 88c rate slightly boosts the deduction per km to reflect fuel and vehicle cost increases. Alternatively, if your business vehicle usage is substantial, consider the <strong>logbook method</strong> to claim actual expenses (especially if you have costs far exceeding the cents/km allowance). Keep in mind the ATO expects consistent and accurate record-keeping for car claims, whichever method you choose.</p>		
		<p><strong>Other Deduction Tips:</strong> Don’t overlook general small business tax concessions that remain in place:</p>		
		<ul><li><p>You can <strong>pre-pay expenses</strong> spanning no more than 12 months (like insurance, subscriptions, or rent) before 30 June and claim a full deduction this year, as long as your turnover is &lt; $50m. This can bring forward deductions into 2025 for cash outlays you make by year-end.</p></li></ul>		
		<ul><li><p>Write off any <strong>obsolete stock or equipment</strong> before June 30. If you have old inventory that’s unsaleable, or plant and equipment you scrapped, you may be able to claim a deduction by writing it off your books.</p></li></ul>		
		<ul><li><p>For startups, remember <strong>initial startup costs</strong> (legal, accounting, ASIC fees to establish a company or trust, etc.) are immediately deductible for small entities. If you began a new venture in 2025, don’t forget to claim those setup expenses in full.</p></li></ul>		
		<ul><li><p><strong>Bad debts</strong>: If you have any customers who won’t pay, you must formally write off the bad debt <em>before 30 June</em> to deduct it in that year. Document the write-off (e.g. board minute or accounting system record) and ensure the debt was previously included in taxable income.</p></li></ul>		
		<ul><li><p><strong>Home office</strong>: If you run your business from home (common for many solo professionals), you can use the updated fixed rate method of <strong>67¢ per hour</strong> for running expenses (covering electricity, internet, etc.), <em>plus</em> claim depreciation on expensive equipment or the business-use portion of phone costs. Keep a diary of hours worked at home and evidence of expenses.</p></li></ul>		
					<h2 id="h-sectorspecific-impacts-and-considerations">Sector-Specific Impacts and Considerations</h2>				
															<img width="1344" height="768" src="https://tnaccounting.com.au/wp-content/uploads/2025/05/Trades-Construction-Tax.webp" alt="" />															
		<p>Different industries will feel some of these changes in unique ways. Here are a few sector-specific notes for Melbourne’s small businesses:</p>		
					<h3>Tax Changes For Tradies and Construction Services</h3>				
		<p>The crackdown on <strong>contractor income reporting</strong> is highly relevant here. If you’re a builder, electrician, plumber, or similar who hires subcontractors, you likely fall under the Taxable Payments Reporting System. Make sure you <strong>lodge your TPAR by 28 August</strong> each year detailing those payments. Failing to report contractor payments not only risks penalties but also flags you to the ATO and it certainly flags the contractor, who might face an audit for unreported income. Likewise, if you are a contractor, assume that the payer has reported what they paid you.</p>		
		<p>It’s crucial to declare all that income on your BAS and tax return to avoid ATO scrutiny. Also note: the <strong>instant asset write-off extension</strong> is a big help in this sector tools, equipment, and even utes (to the extent they fall under the car limit) up to $20k can be immediately deducted. This is great for upgrading your gear or purchasing new plant (e.g. a work trailer or new power tools) to stay competitive.</p>		
		<p>Just time your asset purchases before 30 June 2025 to use the write-off in this year, and ensure any vehicle claims are adjusted for private use via logbook percentages. Lastly, many tradies operate through family trusts be aware the ATO is keeping a close eye on <strong>trust distributions to family members</strong> (like adult children) that are done purely for tax minimisation.</p>		
		<p>If you run your business profits through a discretionary trust, talk with your accountant about the ATO’s latest guidance on Section 100A (as they are auditing arrangements where funds are distributed to lower-taxed family members but enjoyed by someone else). It’s better to keep distributions above board and within family law/commercial principles to avoid unwelcome ATO adjustments. Additionally, the implications of restricting <strong>foreign ownership</strong> of housing can impact the construction sector by potentially reducing foreign investment, which might affect the demand for new housing projects.</p>		
					<h3>Tax Changes in Retail and Hospitality</h3>				
		<p>These businesses often deal with cash sales and tight margins. The ATO’s enhanced <strong>shadow economy enforcement</strong> means bars, cafes, restaurants, and shops should be meticulous in ringing up all sales (yes, even those $5 cash coffees must be accounted for). Electronic payment data and industry benchmarks make it easier for the ATO to spot under-reporting. Also, be mindful of proper <strong>wage reporting</strong> underpaying staff or paying in cash without tax can trigger not only ATO penalties but Fair Work issues.</p>		
		<p>On the positive side, <strong>energy efficiency upgrades</strong> (like installing energy-saving kitchen equipment or HVAC in your café) that you did by June 2024 can yield that 20% energy bonus deduction, helping reduce future power bills. And from a state perspective, if you’ve grown and now have a substantial staff, the higher Victorian payroll tax threshold is a boon – many medium-sized hospitality businesses that were hovering around the old $700k threshold might find themselves under the new $900k threshold in 2024–25, meaning no payroll tax. </p>		
		<p>This could offset some of the rising award wages and other costs. Finally, fringe benefits like staff meals or entertainment: small businesses in hospitality sometimes provide these. Remember that there are FBT exemptions for things like minor benefits under $300 and for in-house dining for employees make sure you structure any staff perks to take advantage of FBT concessions, which ultimately saves you tax. </p>		
		<p>Talk to an advisor about setting up a compliant register if you provide, say, one free meal per shift to staff, it might fall under exempt or discounted meal rules that keep you from incurring FBT. It's also important to provide housing for <strong>workers</strong>, and there are exceptions for foreign-owned companies that aim to support housing availability specifically for workers in certain contexts.</p>		
					<h3>Tax Changes Professional Services and Tech Startups</h3>				
		<p>Many small firms in consulting, IT, design, etc., operate with a mix of employee and contractor arrangements. The key points here are <strong>tech investment and training incentives</strong>, and correct reporting of any contractor payments. If you upskilled your team (e.g. paid for a staff member’s certification course in late 2023 or early 2024), don’t forget the 120% training deduction it effectively subsidises part of that cost. Similarly, if you invested in new software, hardware or IT services before 30 June 2023 to digitise your operations, claim the tech boost extra deduction.</p>		
		<p>These industries also often claim R&amp;D Tax Incentives while not new for 2025, note that recent reforms mean the R&amp;D offset rates are tied to your company tax rate and intensity of R&amp;D spend. If you’re claiming R&amp;D, ensure you register the activities with AusIndustry and that you’re maintaining the required documentation (the ATO has been reviewing a lot of software development claims).</p>		
		<p>Another common feature in professional firms is <strong>working from home or hybrid work</strong> – make sure you (and your employees, if you have any) are aware of the new fixed-rate method (67¢/hr) for home office claims which now demands <strong>actual records of hours worked</strong> (a 4-week representative diary or similar). Old methods like the 80¢ COVID rate are gone. </p>		
		<p>This is more of an individual deduction issue, but it’s something to communicate if you have staff who might try to claim home office expenses incorrectly. For any founders or directors drawing dividends, keep in mind the <strong>stage 3 tax cuts</strong> could increase your post-tax income possibly freeing up funds to reinvest in the business or pay personal expenses, which might indirectly help the business’s cash flow. </p>		
		<p><strong>Plan holistically:</strong> for example, with no 37% bracket now up to $190k, some owners may choose to pay themselves a slightly higher dividend or salary if the business profits allow, knowing the tax hit isn’t as severe as before. </p>		
		<p>The financial implications of tax changes for a <strong>worker</strong> in the professional services and tech startups sector can be significant, especially with the scheduled tax cuts and thresholds for Australian residents.</p>		
					<h3>Tax Changes Trades &amp; Transport (Logistics, Delivery, Rideshare)</h3>				
															<img width="1536" height="1024" src="https://tnaccounting.com.au/wp-content/uploads/2025/05/Ride-Share.webp" alt="Tax Obligations for Ride Share Drivers" />															
		<p>If you’re an Uber driver or run a courier/delivery operation as a small business, remember that <strong>from the first dollar you earn, you must register for GST in Australia</strong> when providing ride-sourcing or taxi travel the $75k threshold doesn’t apply to such services. This isn’t a new law, but it’s worth reiterating because the ATO continues to data-match income from Uber, Ola, Deliveroo, etc., and ensures people are GST-registered. Many rideshare drivers in Melbourne have been caught out by not registering and then face backdated GST bills. </p>		
		<p>Don’t let that be you in 2025. For logistics businesses using trucks or vans, note that <strong>fuel tax credits</strong> rates fluctuate with fuel excise changes – check the latest rates each BAS period (the ATO provides updated rates for each quarter). </p>		
		<p>Also, heavy vehicle road user charges rose in 2024 and will further rise over the next couple of years, which effectively reduces fuel tax credit entitlements for truck operators. Work with your accountant to correctly calculate fuel credits in your BAS – errors here are another focus area. On a positive note, investing in newer, fuel-efficient vehicles or EVs for deliveries could both reduce your operating costs and potentially qualify for accelerated deductions. </p>		
		<p>Electric vehicles below the luxury car limit are currently <strong>exempt from FBT</strong> (until at least April 2025), which is great if you run a company fleet – this exemption can save thousands per car if you provide an EV (under ~$89k) for employee use. Keep an eye on whether the government extends this EV FBT exemption; it’s slated for review, but as of now it remains a tax-saving opportunity for businesses going green with their vehicles.</p>		
		<p>In short, <em>every sector</em> should: maintain good records, substantiate any deductions or claims (especially if taking advantage of special incentives), and stay within the lines on reporting obligations. The ATO’s message going into 2025 is that most small businesses <strong>want</strong> to do the right thing – and by being informed of these changes, you can do just that and avoid the pitfalls that catch the minority doing the wrong thing.</p>		
					<h2 id="h-key-deadlines-and-filing-dates-for-tax-changes-in-">Key Deadlines and Filing Dates for Tax Changes in 2025</h2>				
		<p><strong>Mark these important dates to stay on track with your tax and compliance obligations:</strong></p>		
					<h3>28 July 2024</h3>				
		<p>Deadline for quarterly BAS (April–June 2024 quarter) lodgement and payment, and also for Super Guarantee contributions for that Q4 2023–24 quarter. (Since 28 July falls on a Sunday in 2024, the effective due date may roll to 29 July – but don’t rely on an extra day; aim for the 28th.) Timely BAS lodgement is critical, especially given the ATO’s new rule about moving late lodgers to monthly GST. </p>		
		<p><strong>Pro tip:</strong> If you’re habitually late, lodging this BAS on time could help keep you off the ATO’s radar for a forced monthly GST change. Additionally, remember that certain tax changes will only take effect once the necessary amending legislation has received royal assent, highlighting its importance in the legislative process.</p>		
					<h3>14 August 2024 Tax Changes</h3>				
		<p>TPAR due (Taxable Payments Annual Report) for those required to report contractor payments (building, cleaning, courier, IT, security, road freight). The statutory due date is 28 August, but if lodging on paper it should reach the ATO by then; electronically you get until 30 August. Many Melbourne businesses in these industries have this extra reporting step put it in your calendar right after EOFY to compile contractor info (name, ABN, address, total paid, GST) and lodge it. The <strong>penalties for late TPAR</strong> can be steep (each 28 days late is one penalty unit, i.e. $330 after Nov 2024). Moreover, not lodging TPAR will almost certainly draw ATO follow-up.</p>		
					<h3>31 October 2024</h3>				
		<p>If you <em>self-lodge</em> your 2023–24 income tax return (i.e. you’re not using a tax agent), it’s due by 31 Oct 2024. However, most small businesses use tax agents, in which case you typically have longer (often up to May 2025) <strong>provided you were in the tax agent’s client list by 31 Oct</strong>. So if you don’t have an accountant and you’re feeling overwhelmed by these changes, consider engaging one by October to get on their books – you’ll not only get expert help but also an extended lodgement deadline for your return.</p>		
					<h3>15 May 2025</h3>				
		<p>This is the final lodgement deadline for 2023–24 company tax returns and many self-managed super fund returns when using a tax agent (some high-risk or earlier-year-overdue cases have a 31 March deadline). It’s also around this time (May each year) that the <strong>Federal Budget</strong> is handed down, often containing new tax measures. </p>		
		<p>By mid-May 2025, we expect clarity on whether the instant asset write-off will indeed extend to 2026, and any other new measures starting 1 July 2025. Stay tuned to budget news it can affect last-minute tax planning moves in June. The results of the recent election, including the victory of Anthony Albanese, may also influence tax policies introduced in the budget.</p>		
					<h3>June 2025 (Pre-30 June Planning)</h3>				
		<p>By late June, ensure you’ve done your <strong>EOFY tax planning</strong>. This includes: making any last-minute asset purchases to qualify for write-off (by June 30, asset must be installed ready for use), writing off bad debts in your accounts, paying super on time (June quarter SG is technically due 28 July, but paying by 30 June lets you claim the deduction in that financial year), and finalising trust distribution resolutions (for those operating through discretionary trusts, you must decide and minute how FY2025 profits will be distributed to beneficiaries by 30 June 2025 to avoid the default 45% tax rate). </p>		
		<p>If you have a <strong>family trust</strong>, also remember to file any required <em>Trustee Beneficiary Statements</em> and <strong>TFN reports for new beneficiaries</strong> – for example, if a trust will distribute to someone for the first time in 2025, you need to lodge a TFN report to the ATO <em>before</em> the distribution or face withholding requirements. These are often overlooked deadlines that can cause headaches if missed.</p>		
					<h3>14 July 2025 Tax Changes</h3>				
		<p>As mentioned, STP finalisation for 2024–25 must be done by 14 July 2025. This means all your employees’ income statements should be marked “Tax Ready” in your STP system by that date. Employees will then use that information to lodge their returns. It’s wise to reconcile your payroll accounts in June so that the year-end finalisation is smooth. (If you have closely-held payees like family members on payroll for a family business, note that small employers have until 30 September to finalise those in STP but you still need to pay their PAYG withholding quarterly. Most <strong><a href="/services/small-business-accountant/">small business</a></strong> owners will already know if this concession applies to them.)</p>		
					<h3>21 July, 21 October, 21 January, 21 April</h3>				
		<p>These are the monthly BAS due dates (for businesses required to lodge monthly). Also, if you’re on <strong>monthly PAYG withholding</strong>, the due date for your activity statement each month is the 21st. While most small businesses are quarterly, a growing number in Melbourne are on monthly cycles either voluntarily or by requirement (e.g. if you’re in the new ATO program for delinquent lodgers, starting April 2025 you’d be on monthly GST). Mark these if relevant. For <strong>quarterly BAS and SG</strong>: the key dates are 28 October 2024 (Q1), 28 February 2025 (Q2, extended due to holiday period), 28 April 2025 (Q3), and 28 July 2025 (Q4). </p>		
		<p>Using a tax or BAS agent can sometimes give you a few extra weeks beyond these dates for instance, agents often get until late May to lodge the March quarter BAS. But you need to have engaged them before the standard due date to get that concession. When in doubt, lodge by the standard date to avoid penalties.</p>		
					<h3>Fringe Benefits Tax (FBT) Returns</h3>				
		<p>If your business provides any fringe benefits to employees (cars, meals, entertainment, etc.), the FBT year runs 1 April to 31 March. FBT returns for the year ending 31 March 2025 are due <strong>21 May 2025</strong> (or 25 June if lodged via agent). Small businesses should review whether they have any FBT obligations – for example, providing a company car that an employee also uses for personal trips will trigger FBT unless exempt. </p>		
		<p>Melbourne businesses that pay for client entertainment or staff Friday drinks should also consider the minor benefits exemption and other strategies to reduce FBT. If you’re unsure, consult your accountant in April to see if an FBT return is needed or if all benefits were exempt. Not lodging when required can result in penalties and denial of deductions for those benefits.</p>		
		<p>Finally, a general piece of advice regarding timing: <strong>Don’t rush to lodge your income tax return on 1 July</strong> just because you’re eager for a refund. It’s wise to wait until at least <strong>mid-July 2025</strong> before filing, to ensure all your income reports are finalised and any third-party data (bank interest, dividends, health insurance, etc.) has been reported to the ATO. </p>		
		<p>Every year, the ATO sees errors from early lodgers who omitted income that hadn’t been uploaded to pre-fill yet. By late July, your MyGov pre-fill should have most information. Lodging with complete data will save you the hassle of amendments or ATO follow-up for missing income. Patience pays off – accuracy is more important than speed when it comes to taxes.</p>		
					<h2 id="h-tips-for-staying-compliant-and-prepared-for-any-ta">Tips for Staying Compliant and Prepared For Any Tax Changes</h2>				
		<p>With so many changes in play, it can feel overwhelming. Here’s a checklist of <strong>action points</strong> to help Melbourne <strong><a href="/services/small-business-accountant/">small business owners</a></strong> stay on top of 2025’s tax and regulatory shifts:</p>		
															<img width="1536" height="1024" src="https://tnaccounting.com.au/wp-content/uploads/2025/05/Staying-Compliant.webp" alt="Tips for Staying Compliant and Prepared" />															
					<h3>Review your payroll and budgets</h3>				
		<p>Incorporate the higher SG rate (11.5%, then 12%) into wage budgeting. Ensure payroll software is updated for new tax scales (reflecting stage 3 cuts) so the correct PAYG is withheld from wages starting 1 July 2024. Start adjusting to the idea of payday super – getting into a routine of more frequent super contributions now will ease the transition in 2026. Additionally, the new standard $1,000 tax deduction is expected to benefit around six million Australians.</p>		
					<h3>Maximise deductions within the new rules</h3>				
		<p>Take advantage of the $20k instant write-off while it’s available – plan asset purchases before the deadline and ensure they’re installed in time. Claim the bonus 20% deductions (skills/tech boosts) if eligible, but double-check the fine print to avoid mistakes. Consider future-proofing your business with energy-efficient assets; even though the energy incentive period has closed, investing in efficiency can have long-term payoffs (and there may be state rebates or future tax incentives for going green).</p>		
		<p>Also keep receipts and documentation for all deductions good record-keeping is your best defense if the ATO questions something. The government is also raising the current $300 deduction limit to simplify the claims process.</p>		
					<h3>Strengthen compliance processes</h3>				
		<p>Lodge every activity statement and tax return on time. If cash flow issues make that tough, <strong>contact the ATO early</strong> to work out a plan. The ATO is more lenient with those who proactively communicate and will often agree to affordable payment plans. By meeting due dates, you’ll avoid extra penalties and also stay under the radar for things like mandatory monthly GST. Now is a great time to implement a compliance calendar or use reminders (many tax agents provide clients with key date reminders).</p>		
		<p>Also, ensure you’re <strong>registered for all required taxes</strong> (GST, PAYGW, etc.) based on your business activities – for instance, if you started taking on employees, you need PAYG withholding and super set up from day one. If you began accepting gigs or ride-share work, register for GST regardless of income level. A person without private health insurance on their Lifetime Health Cover base day will face penalties when rejoining later in life.</p>		
					<h3>Leverage professional advice</h3>				
		<p>Given the complexity of recent changes, consider engaging a qualified tax professional or accountant if you don’t have one. They can provide tailored guidance – for example, determining if you qualify as a “small business entity” for various concessions, or helping you navigate the transition from temporary full expensing to the $20k write-off. </p>		
		<p>They’ll also keep you informed of any late-breaking changes (like new budget measures or state grants). The cost of advice is usually tax-deductible, and it can pay for itself by optimising your tax position and ensuring compliance. As one advisor aptly put it: small businesses aren’t trying to dodge tax, <strong>they’re drowning in it</strong>  meaning in the complexity of tax rules. Don’t hesitate to seek help to stay afloat. Accountability in financial transactions involving money is crucial when claiming deductions.</p>		
					<h3>Keep your ABN and registrations current</h3>				
		<p>If you move addresses, change your business name, or cease trading, update the ABR within 28 days. This will prevent surprise cancellations of your ABN or missing important ATO correspondence. Remember that an active ABN now comes with an expectation of lodged tax returns if you’ve fallen behind, make it a priority to catch up or get on a payment plan, or talk to your tax agent about options.</p>		
		<p>The ATO is giving some latitude to those with good compliance history who hit a rough patch (including remitting interest or penalties in some cases), but you need to demonstrate effort and communication. The tax policy proposals put forth by the Labor government may also impact your tax planning.</p>		
					<h3>Monitor sector-specific updates</h3>				
		<p>Keep an ear out through your industry associations or the ATO’s small business newsroom for any new measures targeted at your field. For example, the ATO sometimes runs “consultation visits” or audits in particular industries each year – if hair salons or restaurants are a focus one quarter, they often publish tips on common mistakes to avoid. The ATO’s small business <strong>focus areas for 2025</strong> were contractors, GST compliance, and correct claims of incentives – align your practices accordingly. </p>		
		<p>Also watch for Victorian state announcements (e.g. any further state tax relief, local council business support programs, or changes to WorkCover premiums). Melbourne’s business environment in 2025 still has some pandemic recovery programs winding down and new economic initiatives starting – staying informed can reveal opportunities (like grants or rebates) and obligations (like COVID support repayments or compliance checks). Various factors can affect the income tax calculation based on the income earned.</p>		
		<p>By understanding these updates and acting on the obligations and opportunities they present, you’ll not only <strong>stay compliant</strong> with the ATO but also keep your business financially healthy. Tax time and regulatory shifts need not be a nightmare with preparation and the right advice, you can navigate the 2025 tax changes confidently and focus on what you do best: running and growing your business in Melbourne. The new tax measures specifically apply to taxpayers and their potential savings.</p>		
		<p><strong>Sources:</strong> Recent ATO publications and legislation updates were referenced to ensure accuracy, including official <strong><a href="https://www.ato.gov.au/businesses-and-organisations/super-for-employers/paying-super-contributions/how-much-super-to-pay#:~:text=The%20minimum%20SG%20rate%20you,on%201%C2%A0July%202025" target="_blank" rel="noopener">ATO guidance</a></strong> on super rates, instant asset write-off law, and interest deductibility changes. We also drew on summaries from reputable accounting and advisory firms for practical insights (e.g. Wolters Kluwer on ATO focus areas, Inside Small Business for EOFY tips, and RSM Australia for state budget impacts). These changes are up-to-date as of mid-2025 and reflect the rules and deadlines that small businesses need to be aware of going forward. Always consult the ATO or a tax professional for personalised advice. Stay compliant, and good luck with the year ahead!</p>		
					<h2 id="h-introduction-to-tax-changes">Introduction to Tax Changes</h2>				
		<p>The Australian government has announced several tax changes aimed at reducing the tax burden on individuals and businesses. These changes include significant tax cuts, adjustments to tax rates, and modifications to tax offsets. The primary goal of these changes is to stimulate economic growth, increase disposable income, and simplify the tax system. </p>		
		<p><strong>For instance</strong>, the government has lowered the tax rates for various income brackets, providing relief to millions of Australians. Understanding these tax changes is crucial for individuals and businesses to navigate the complex tax landscape and make informed decisions about their financial affairs. Staying informed about these updates ensures that you can take full advantage of the benefits and avoid any potential pitfalls.</p>		
					<h2 id="h-understanding-income-tax">Understanding Income Tax</h2>				
		<p><strong><a href="/services/personal-tax-and-finance/">Income tax</a> </strong>is a type of tax levied on an individual’s or business’s income, which includes earnings from employment, investments, and business operations. The income tax system in Australia is progressive, meaning that higher income earners are taxed at a higher rate. Currently, the tax rates range from 19% to 45%, depending on the individual’s taxable income. Taxable income is calculated by subtracting deductions and exemptions from gross income.</p>		
		<p><strong>For example</strong>, if your annual taxable income falls between $18,201 and $45,000, you are taxed at a lower rate compared to higher income brackets. The Australian Taxation Office (ATO) is responsible for collecting income tax and ensuring compliance with tax laws. It’s essential to understand how your taxable income is calculated and what deductions you can claim to optimise your tax return.</p>		
					<h2 id="section-8">Federal Budget Implications</h2>				
		<p>The federal budget has significant implications for taxation in Australia. Each year, the government uses the budget to announce new tax measures, including tax cuts, changes to tax rates, and adjustments to tax offsets. These announcements can have a profound impact on personal income tax, <strong><a href="/services/small-business-accountant/">business tax</a></strong>, and superannuation.</p>		
		<p><strong>For instance,</strong> the recent federal budget introduced new tax cuts aimed at providing relief to middle-income earners and small businesses. Understanding the federal budget is essential for individuals and businesses to anticipate and prepare for changes to the tax system. By staying informed about the budget, you can make strategic financial decisions that align with the government’s fiscal policies and maximise your tax benefits.</p>		
					<h2 id="section-9">Tax Planning and Optimisation</h2>				
		<p><strong><a href="/services/accounting-and-tax-planning/">Tax planning</a></strong> and optimisation involve strategies to minimise tax liability while complying with tax laws. This can include claiming deductions, utilising tax offsets, and structuring investments to reduce tax liabilities. Effective tax planning is essential for individuals and businesses to ensure they are not paying more tax than necessary.</p>		
		<p><strong>Here's an example</strong>, by keeping detailed records of work-related expenses, you can claim deductions that lower your taxable income. It is crucial to stay up-to-date with changes to the tax system and seek professional advice to optimise tax outcomes. By implementing effective tax planning strategies, individuals and businesses can reduce their tax burden, increase their disposable income, and achieve their financial goals. Consulting with a <strong><a href="/services/accounting-and-tax-planning/">tax professional</a></strong> can provide personalised advice and help you navigate the complexities of the tax system.</p>		
					<h2 id="section-10">Get a Free Tax Strategy Session Today!</h2>				
		<p data-pm-slice="1 1 []">At <a href="/"><strong>Trew North Accounting</strong></a>, we help small business owners in Melbourne reduce their tax bills and improve financial efficiency. Book a <strong>FREE Tax Strategy Session</strong> today and discover how you can legally lower your tax obligations and keep more money in your business.</p>		
					<h3>Let's get down to business!</h3>				
		<p>Join hundreds of business owners who trust Trew North Accounting</p>		
					<button>Schedule my first consultation</button>`;

export default function BlogPostNavigatingThe2025TaxChangesWhatSmallBusinessesInMelbourneNeedToKnow() {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Navigating the 2025 Tax Changes: What Small Businesses in Melbourne Need to Know | Trew North Accounting"
        description="Navigating the 2025 Tax Changes: What Small Businesses in Melbourne Need to Know"
        canonical="/blog/navigating-the-2025-tax-changes-what-small-businesses-in-melbourne-need-to-know"
        ogType="article"
        publishedTime="2025-05-19"
        schema={[
          blogPostingSchema({
            title: "Navigating the 2025 Tax Changes: What Small Businesses in Melbourne Need to Know",
            description: "Navigating the 2025 Tax Changes: What Small Businesses in Melbourne Need to Know",
            url: '/blog/navigating-the-2025-tax-changes-what-small-businesses-in-melbourne-need-to-know',
            datePublished: '2025-05-19',
            readingTime: 'PT36M',
          }),
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Blog', url: '/blog' },
            { name: 'Navigating the 2025 Tax Changes: What Small Businesses in Melbourne Need to Know', url: '/blog/navigating-the-2025-tax-changes-what-small-businesses-in-melbourne-need-to-know' },
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
            <BlogBreadcrumb postTitle="Navigating the 2025 Tax Changes: What Small Businesses in Melbourne Need to Know" />
            <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline mb-6">
              <ArrowLeft className="h-4 w-4" /> Back to articles
            </Link>
            <div className="mb-4">
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                Tax Planning
              </span>
            </div>
            <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.1] text-foreground mb-6" style={{ letterSpacing: '-0.03em' }}>
              Navigating the 2025 Tax Changes: What Small Businesses in Melbourne Need to Know
            </h1>
            <div className="flex flex-wrap items-center gap-5 text-sm text-foreground/70">
              <span className="flex items-center gap-1.5"><User className="h-4 w-4" aria-hidden="true" /> Darren Trew, CA</span>
              <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" aria-hidden="true" /> 19 May 2025</span>
              <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" aria-hidden="true" /> 36 min read</span>
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
