import { lazy, Suspense, useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, Router as WouterRouter, useLocation } from 'wouter';

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
}

// Lazy-load all page components so each route gets its own JS chunk.
// entry-server.tsx keeps static imports for SSR (renderToString is synchronous).
const Home = lazy(() => import('@/pages/home'));
const Services = lazy(() => import('@/pages/services'));
const ServiceDetail = lazy(() => import('@/pages/service-detail'));
const SmallBusinessAccountant = lazy(() => import('@/pages/small-business-accountant'));
const About = lazy(() => import('@/pages/about'));
const Contact = lazy(() => import('@/pages/contact'));
const FAQs = lazy(() => import('@/pages/faqs'));
const Blog = lazy(() => import('@/pages/blog'));
const BlogPostGST = lazy(() => import('@/pages/blog-post-gst'));
const BlogPostInterestRates = lazy(() => import('@/pages/blog-post-interest-rates'));
const BlogPostTradies = lazy(() => import('@/pages/blog-post-tradies'));
const BlogPostBookkeepingTips = lazy(() => import('@/pages/blog-post-bookkeeping-tips'));
const BlogPostAISmallBusiness = lazy(() => import('@/pages/blog-post-ai-small-business'));
const BlogPostGrants2025 = lazy(() => import('@/pages/blog-post-grants-2025'));
const BlogPostSuccessionPlanningForSmallBusinesses = lazy(() => import('@/pages/blog-post-succession-planning-for-small-businesses'));
const BlogPost10WaysToReduceYourBusinessTaxBill = lazy(() => import('@/pages/blog-post-10-ways-to-reduce-your-business-tax-bill'));
const BlogPostNavigatingThe2025TaxChanges = lazy(() => import('@/pages/blog-post-navigating-the-2025-tax-changes-what-small-businesses-in-melbourne-need-to-know'));
const BlogPostHowToPayYourselfAsABusinessOwner = lazy(() => import('@/pages/blog-post-how-to-pay-yourself-as-a-business-owner-without-triggering-ato-red-flags'));
const BlogPostStrategicPlanForSmallBusiness = lazy(() => import('@/pages/blog-post-strategic-plan-for-small-business'));
const BlogPostBusinessStructuresProsCons = lazy(() => import('@/pages/blog-post-business-structures-pros-cons'));
const BlogPostBestMelbourneAccountants2024 = lazy(() => import('@/pages/blog-post-your-guide-to-the-best-melbourne-accountants-in-2024'));
const BlogPostHowToHandleAtoAuditLetter = lazy(() => import('@/pages/blog-post-how-to-handle-an-ato-audit-letter-step-by-step-guide'));
const BlogPostCashFlowProblems = lazy(() => import('@/pages/blog-post-cash-flow-problems-in-small-business'));
const BlogPostBestAccountingSoftware = lazy(() => import('@/pages/blog-post-best-accounting-software-for-small-business-australia'));
const BlogPostTaxDeductionsSoleTrader = lazy(() => import('@/pages/blog-post-tax-deductions-sole-trader'));
const BlogPostTaxReturnDeadline = lazy(() => import('@/pages/blog-post-tax-return-deadline'));
const BlogPostSalarySacrificeIsItWorthIt = lazy(() => import('@/pages/blog-post-salary-sacrifice-is-it-worth-it'));
const BlogPostPropertyInvestmentSuperannuation = lazy(() => import('@/pages/blog-post-property-investment-using-superannuation'));
const BlogPostVictoriaPayrollTax = lazy(() => import('@/pages/blog-post-victoria-payroll-tax'));
const BlogPostHowToReadABalanceSheet = lazy(() => import('@/pages/blog-post-how-to-read-a-balance-sheet'));
const BlogPostDiscretionaryTrustVsFamilyTrust = lazy(() => import('@/pages/blog-post-discretionary-trust-vs-family-trust'));
const BlogPostInvestmentPropertyTaxDeductions = lazy(() => import('@/pages/blog-post-investment-property-tax-deductions-australia'));
const BlogPostHowToSalarySacrificeSuper = lazy(() => import('@/pages/blog-post-how-to-salary-sacrifice-super'));
const BlogPostPaydaySuper2026 = lazy(() => import('@/pages/blog-post-payday-super-for-2026-the-small-business-accountants-checklist-to-stay-compliant-and-protect-cash-flow'));
const BlogPostAtoSuperClearingHouseClosing = lazy(() => import('@/pages/blog-post-the-atos-free-super-clearing-house-is-closing-what-your-melbourne-small-business-needs-to-do-before-30-june-2026'));

// Draft blog posts — NOT linked from /blog, NOT in sitemap, noindex
const BlogPostDraftAccountingForASmallBusiness = lazy(() => import('@/pages/blog-post-draft-accounting-for-a-small-business'));
const BlogPostDraftBookkeepingServicesForSmallBusiness = lazy(() => import('@/pages/blog-post-draft-bookkeeping-services-for-small-business'));
const BlogPostDraftSmallBusinessAccountingSoftwareAustralia = lazy(() => import('@/pages/blog-post-draft-small-business-accounting-software-australia'));
const BlogPostDraftAccountantForSmallBusinessMelbourne = lazy(() => import('@/pages/blog-post-draft-accountant-for-small-business-melbourne'));
const BlogPostDraftSmallBusinessAccountingMelbourne = lazy(() => import('@/pages/blog-post-draft-small-business-accounting-melbourne'));
const BlogPostDraftSmallBusinessConcessions = lazy(() => import('@/pages/blog-post-draft-small-business-concessions'));
const BlogPostDraftSuperGuaranteeRate2024 = lazy(() => import('@/pages/blog-post-draft-super-guarantee-rate-2024'));
const BlogPostDraftSmsfAccountantMelbourne = lazy(() => import('@/pages/blog-post-draft-smsf-accountant-melbourne'));
const BlogPostDraftSettingUpSelfManagedSuperFund = lazy(() => import('@/pages/blog-post-draft-setting-up-self-managed-super-fund'));
const BlogPostDraftWhatIsASelfManagedSuperFund = lazy(() => import('@/pages/blog-post-draft-what-is-a-self-managed-super-fund'));
const BlogPostDraftSelfManagedSuperFundCosts = lazy(() => import('@/pages/blog-post-draft-self-managed-super-fund-costs'));
const BlogPostDraftPayrollTaxesAustralia = lazy(() => import('@/pages/blog-post-draft-payroll-taxes-australia'));
const BlogPostDraftSelfManagedSuperFundAdvice = lazy(() => import('@/pages/blog-post-draft-self-managed-super-fund-advice'));
const BlogPostDraftLateTaxReturnPenalties = lazy(() => import('@/pages/blog-post-draft-late-tax-return-penalties'));
const BlogPostDraftWorkFromHomeRate = lazy(() => import('@/pages/blog-post-draft-work-from-home-rate'));
const BlogPostDraftTaxRefundCalculatorAustralia = lazy(() => import('@/pages/blog-post-draft-tax-refund-calculator-australia'));
const BlogPostDraftSmsfAccountingMelbourne = lazy(() => import('@/pages/blog-post-draft-smsf-accounting-melbourne'));
const BlogPostDraftPayrollTaxVictoria = lazy(() => import('@/pages/blog-post-draft-payroll-tax-victoria'));
const BlogPostDraftHowToSetUpAFamilyTrust = lazy(() => import('@/pages/blog-post-draft-how-to-set-up-a-family-trust'));
const BlogPostDraftBookkeepingForBusiness = lazy(() => import('@/pages/blog-post-draft-bookkeeping-for-business'));
const BlogPostDraftSmsfInvestmentStrategies = lazy(() => import('@/pages/blog-post-draft-smsf-investment-strategies'));
const BlogPostDraftWhatIsAProfitAndLossStatement = lazy(() => import('@/pages/blog-post-draft-what-is-a-profit-and-loss-statement'));
const BlogPostDraftWhatIsCloudAccounting = lazy(() => import('@/pages/blog-post-draft-what-is-cloud-accounting'));
const BlogPostDraftHowToCalculatePayrollTaxes = lazy(() => import('@/pages/blog-post-draft-how-to-calculate-payroll-taxes'));
const BlogPostDraftDifferenceBetweenBookkeepingAndAccounting = lazy(() => import('@/pages/blog-post-draft-difference-between-bookkeeping-and-accounting'));
const BlogPostDraftHowToUseXeroSoftware = lazy(() => import('@/pages/blog-post-draft-how-to-use-xero-software'));
const BlogPostDraftLogbookMethodAto = lazy(() => import('@/pages/blog-post-draft-logbook-method-ato'));
const BlogPostDraftNonCommercialLossesRules = lazy(() => import('@/pages/blog-post-draft-non-commercial-losses-rules'));
const BlogPostDraftReportableSuperannuationContributions = lazy(() => import('@/pages/blog-post-draft-reportable-superannuation-contributions'));
const BlogPostDraftWhatIsDiscretionaryTrust = lazy(() => import('@/pages/blog-post-draft-what-is-discretionary-trust'));
const BlogPostDraftWhatAreSmsf = lazy(() => import('@/pages/blog-post-draft-what-are-smsf'));
const BlogPostDraftSmallBusinessTaxDeductions = lazy(() => import('@/pages/blog-post-draft-small-business-tax-deductions'));
const BlogPostDraftWhatIsAccrualAccounting = lazy(() => import('@/pages/blog-post-draft-what-is-accrual-accounting'));
const BlogPostDraftAccountantFeesForSmallBusiness = lazy(() => import('@/pages/blog-post-draft-accountant-fees-for-small-business'));
const BlogPostDraftLogBookForTax = lazy(() => import('@/pages/blog-post-draft-log-book-for-tax'));
const BlogPostDraftReportableSuperContributions = lazy(() => import('@/pages/blog-post-draft-reportable-super-contributions'));
const BlogPostDraftHowMuchCanYouSalarySacrificeToSuper = lazy(() => import('@/pages/blog-post-draft-how-much-can-you-salary-sacrifice-to-super'));
const BlogPostDraftTaxDeductionsForSmallBusiness = lazy(() => import('@/pages/blog-post-draft-tax-deductions-for-small-business'));
const BlogPostDraftWhatIsAChartOfAccounts = lazy(() => import('@/pages/blog-post-draft-what-is-a-chart-of-accounts'));
const BlogPostDraftWhatIsAChartOfAccounts2 = lazy(() => import('@/pages/blog-post-draft-what-is-a-chart-of-accounts-2'));
const BlogPostDraftSmallBusinessTaxClaims = lazy(() => import('@/pages/blog-post-draft-small-business-tax-claims'));
const BlogPostDraftHowDoesAFamilyTrustWork = lazy(() => import('@/pages/blog-post-draft-how-does-a-family-trust-work'));
const BlogPostDraftFbtDueDate = lazy(() => import('@/pages/blog-post-draft-fbt-due-date'));
const BlogPostDraftSmsfSettingUp = lazy(() => import('@/pages/blog-post-draft-smsf-setting-up'));
const BlogPostDraftTaxDeductionsHomeOffice = lazy(() => import('@/pages/blog-post-draft-tax-deductions-home-office'));
const BlogPostDraftWhyDoIHaveToPayPaygInstalments = lazy(() => import('@/pages/blog-post-draft-why-do-i-have-to-pay-payg-instalments'));
const BlogPostDraftHowToDoDepreciation = lazy(() => import('@/pages/blog-post-draft-how-to-do-depreciation'));
const BlogPostDraftSmsfCommercialPropertyLoan = lazy(() => import('@/pages/blog-post-draft-smsf-commercial-property-loan'));
const BlogPostDraftWhatIsNegativeGearingInAustralia = lazy(() => import('@/pages/blog-post-draft-what-is-negative-gearing-in-australia'));
const BlogPostDraftAssetsThatDepreciate = lazy(() => import('@/pages/blog-post-draft-assets-that-depreciate'));
const BlogPostDraftSetUpSuperFund = lazy(() => import('@/pages/blog-post-draft-set-up-super-fund'));
const BlogPostDraftWhatIsPayrolling = lazy(() => import('@/pages/blog-post-draft-what-is-payrolling'));
const BlogPostDraftTaxWriteOffForDonations = lazy(() => import('@/pages/blog-post-draft-tax-write-off-for-donations'));
const BlogPostDraftWhatIsManagementAccounting = lazy(() => import('@/pages/blog-post-draft-what-is-management-accounting'));
const BlogPostDraftHowToReadABalanceSheet = lazy(() => import('@/pages/blog-post-draft-how-to-read-a-balance-sheet'));
const BlogPostDraftWhatIsBreakEvenAnalysis = lazy(() => import('@/pages/blog-post-draft-what-is-break-even-analysis'));
const BlogPostDraftVictoriaPayrollTax = lazy(() => import('@/pages/blog-post-draft-victoria-payroll-tax'));
const BlogPostDraftHowDoTrustsWork = lazy(() => import('@/pages/blog-post-draft-how-do-trusts-work'));
const BlogPostDraftWhatIsReportableFringeBenefits = lazy(() => import('@/pages/blog-post-draft-what-is-reportable-fringe-benefits'));
const BlogPostDraftYourSpousesReportableSuperannuationContributions = lazy(() => import('@/pages/blog-post-draft-your-spouses-reportable-superannuation-contributions'));
const BlogPostDraftAgentNominationAto = lazy(() => import('@/pages/blog-post-draft-agent-nomination-ato'));
const BlogPostDraftCashFlowForecastTemplate = lazy(() => import('@/pages/blog-post-draft-cash-flow-forecast-template'));

// Legal pages
const TermsConditions = lazy(() => import('@/pages/terms-conditions'));
const PrivacyPolicy = lazy(() => import('@/pages/privacy-policy'));

// Service pages
const ServiceSmallBusinessPlanning = lazy(() => import('@/pages/service-small-business-planning'));
const ServiceAccountingTaxPlanning = lazy(() => import('@/pages/service-accounting-and-tax-planning'));
const ServiceBookkeeping = lazy(() => import('@/pages/service-bookkeeping'));
const ServiceSelfManagedSuperFunds = lazy(() => import('@/pages/service-self-managed-super-funds'));
const ServicePersonalTaxAndFinance = lazy(() => import('@/pages/service-personal-tax-and-finance'));

// Suburb pages
const SuburbMordialloc = lazy(() => import('@/pages/suburb-mordialloc'));
const SuburbCheltenham = lazy(() => import('@/pages/suburb-cheltenham'));
const SuburbBrighton = lazy(() => import('@/pages/suburb-brighton'));
const SuburbMoorabbin = lazy(() => import('@/pages/suburb-moorabbin'));
const SuburbBentleigh = lazy(() => import('@/pages/suburb-bentleigh'));
const SuburbBraeside = lazy(() => import('@/pages/suburb-braeside'));
const SuburbParkdale = lazy(() => import('@/pages/suburb-parkdale'));
const SuburbSandringham = lazy(() => import('@/pages/suburb-sandringham'));
const ServiceAreas = lazy(() => import('@/pages/service-areas'));
const Suburbs = lazy(() => import('@/pages/suburbs'));

const queryClient = new QueryClient();

function Router() {
  return (
    <>
    <ScrollToTop />
    <Suspense fallback={null}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/services/small-business-accountant" component={SmallBusinessAccountant} />
        <Route path="/services/small-business-planning" component={ServiceSmallBusinessPlanning} />
        <Route path="/services/accounting-and-tax-planning" component={ServiceAccountingTaxPlanning} />
        <Route path="/services/bookkeeping" component={ServiceBookkeeping} />
        <Route path="/services/self-managed-super-funds" component={ServiceSelfManagedSuperFunds} />
        <Route path="/services/personal-tax-and-finance" component={ServicePersonalTaxAndFinance} />
        <Route path="/services/:slug" component={ServiceDetail} />
        <Route path="/accountant-in-mordialloc" component={SuburbMordialloc} />
        <Route path="/accountant-in-cheltenham" component={SuburbCheltenham} />
        <Route path="/accountant-in-brighton" component={SuburbBrighton} />
        <Route path="/accountant-in-moorabbin" component={SuburbMoorabbin} />
        <Route path="/accountant-in-bentleigh" component={SuburbBentleigh} />
        <Route path="/accountant-in-braeside" component={SuburbBraeside} />
        <Route path="/accountant-in-parkdale" component={SuburbParkdale} />
        <Route path="/accountant-in-sandringham" component={SuburbSandringham} />
        <Route path="/service-areas" component={ServiceAreas} />
        <Route path="/suburbs" component={Suburbs} />
        <Route path="/terms-conditions" component={TermsConditions} />
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/faqs" component={FAQs} />
        <Route path="/blog" component={Blog} />
        <Route path="/blog/should-your-small-business-register-for-gst" component={BlogPostGST} />
        <Route path="/blog/the-impact-of-rising-interest-rates-on-small-businesses" component={BlogPostInterestRates} />
        <Route path="/blog/melbourne-tradies-tax-tips-and-bookkeeping-mistakes" component={BlogPostTradies} />
        <Route path="/blog/top-small-business-bookkeeping-tips" component={BlogPostBookkeepingTips} />
        <Route path="/blog/the-impact-of-ai-in-small-business" component={BlogPostAISmallBusiness} />
        <Route path="/blog/top-small-business-grants-for-2025" component={BlogPostGrants2025} />
        <Route path="/blog/succession-planning-for-small-businesses" component={BlogPostSuccessionPlanningForSmallBusinesses} />
        <Route path="/blog/10-ways-to-reduce-your-business-tax-bill" component={BlogPost10WaysToReduceYourBusinessTaxBill} />
        <Route path="/blog/navigating-the-2025-tax-changes-what-small-businesses-in-melbourne-need-to-know" component={BlogPostNavigatingThe2025TaxChanges} />
        <Route path="/blog/how-to-pay-yourself-as-a-business-owner-without-triggering-ato-red-flags" component={BlogPostHowToPayYourselfAsABusinessOwner} />
        <Route path="/blog/strategic-plan-for-small-business" component={BlogPostStrategicPlanForSmallBusiness} />
        <Route path="/blog/business-structures-pros-cons" component={BlogPostBusinessStructuresProsCons} />
        <Route path="/blog/your-guide-to-the-best-melbourne-accountants-in-2024" component={BlogPostBestMelbourneAccountants2024} />
        <Route path="/blog/how-to-handle-an-ato-audit-letter-step-by-step-guide" component={BlogPostHowToHandleAtoAuditLetter} />
        <Route path="/blog/cash-flow-problems-in-small-business" component={BlogPostCashFlowProblems} />
        <Route path="/blog/best-accounting-software-for-small-business-australia" component={BlogPostBestAccountingSoftware} />
        <Route path="/blog/tax-deductions-sole-trader" component={BlogPostTaxDeductionsSoleTrader} />
        <Route path="/blog/tax-return-deadline" component={BlogPostTaxReturnDeadline} />
        <Route path="/blog/salary-sacrifice-is-it-worth-it" component={BlogPostSalarySacrificeIsItWorthIt} />
        <Route path="/blog/property-investment-using-superannuation" component={BlogPostPropertyInvestmentSuperannuation} />
        <Route path="/blog/victoria-payroll-tax" component={BlogPostVictoriaPayrollTax} />
        <Route path="/blog/how-to-read-a-balance-sheet" component={BlogPostHowToReadABalanceSheet} />
        <Route path="/blog/discretionary-trust-vs-family-trust" component={BlogPostDiscretionaryTrustVsFamilyTrust} />
        <Route path="/blog/investment-property-tax-deductions-australia" component={BlogPostInvestmentPropertyTaxDeductions} />
        <Route path="/blog/how-to-salary-sacrifice-super" component={BlogPostHowToSalarySacrificeSuper} />
        <Route path="/blog/payday-super-for-2026-the-small-business-accountants-checklist-to-stay-compliant-and-protect-cash-flow" component={BlogPostPaydaySuper2026} />
        <Route path="/blog/the-atos-free-super-clearing-house-is-closing-what-your-melbourne-small-business-needs-to-do-before-30-june-2026" component={BlogPostAtoSuperClearingHouseClosing} />
        {/* Draft posts — preview only, noindex, not in sitemap or /blog listing */}
        <Route path="/blog/accounting-for-a-small-business" component={BlogPostDraftAccountingForASmallBusiness} />
        <Route path="/blog/bookkeeping-services-for-small-business" component={BlogPostDraftBookkeepingServicesForSmallBusiness} />
        <Route path="/blog/small-business-accounting-software-australia" component={BlogPostDraftSmallBusinessAccountingSoftwareAustralia} />
        <Route path="/blog/accountant-for-small-business-melbourne" component={BlogPostDraftAccountantForSmallBusinessMelbourne} />
        <Route path="/blog/small-business-accounting-melbourne" component={BlogPostDraftSmallBusinessAccountingMelbourne} />
        <Route path="/blog/small-business-concessions" component={BlogPostDraftSmallBusinessConcessions} />
        <Route path="/blog/super-guarantee-rate-2024" component={BlogPostDraftSuperGuaranteeRate2024} />
        <Route path="/blog/smsf-accountant-melbourne" component={BlogPostDraftSmsfAccountantMelbourne} />
        <Route path="/blog/setting-up-self-managed-super-fund" component={BlogPostDraftSettingUpSelfManagedSuperFund} />
        <Route path="/blog/what-is-a-self-managed-super-fund" component={BlogPostDraftWhatIsASelfManagedSuperFund} />
        <Route path="/blog/self-managed-super-fund-costs" component={BlogPostDraftSelfManagedSuperFundCosts} />
        <Route path="/blog/payroll-taxes-australia" component={BlogPostDraftPayrollTaxesAustralia} />
        <Route path="/blog/self-managed-super-fund-advice" component={BlogPostDraftSelfManagedSuperFundAdvice} />
        <Route path="/blog/late-tax-return-penalties" component={BlogPostDraftLateTaxReturnPenalties} />
        <Route path="/blog/work-from-home-rate" component={BlogPostDraftWorkFromHomeRate} />
        <Route path="/blog/tax-refund-calculator-australia" component={BlogPostDraftTaxRefundCalculatorAustralia} />
        <Route path="/blog/smsf-accounting-melbourne" component={BlogPostDraftSmsfAccountingMelbourne} />
        <Route path="/blog/payroll-tax-victoria" component={BlogPostDraftPayrollTaxVictoria} />
        <Route path="/blog/how-to-set-up-a-family-trust" component={BlogPostDraftHowToSetUpAFamilyTrust} />
        <Route path="/blog/bookkeeping-for-business" component={BlogPostDraftBookkeepingForBusiness} />
        <Route path="/blog/smsf-investment-strategies" component={BlogPostDraftSmsfInvestmentStrategies} />
        <Route path="/blog/what-is-a-profit-and-loss-statement" component={BlogPostDraftWhatIsAProfitAndLossStatement} />
        <Route path="/blog/what-is-cloud-accounting" component={BlogPostDraftWhatIsCloudAccounting} />
        <Route path="/blog/how-to-calculate-payroll-taxes" component={BlogPostDraftHowToCalculatePayrollTaxes} />
        <Route path="/blog/difference-between-bookkeeping-and-accounting" component={BlogPostDraftDifferenceBetweenBookkeepingAndAccounting} />
        <Route path="/blog/how-to-use-xero-software" component={BlogPostDraftHowToUseXeroSoftware} />
        <Route path="/blog/logbook-method-ato" component={BlogPostDraftLogbookMethodAto} />
        <Route path="/blog/non-commercial-losses-rules" component={BlogPostDraftNonCommercialLossesRules} />
        <Route path="/blog/reportable-superannuation-contributions" component={BlogPostDraftReportableSuperannuationContributions} />
        <Route path="/blog/what-is-discretionary-trust" component={BlogPostDraftWhatIsDiscretionaryTrust} />
        <Route path="/blog/what-are-smsf" component={BlogPostDraftWhatAreSmsf} />
        <Route path="/blog/small-business-tax-deductions" component={BlogPostDraftSmallBusinessTaxDeductions} />
        <Route path="/blog/what-is-accrual-accounting" component={BlogPostDraftWhatIsAccrualAccounting} />
        <Route path="/blog/accountant-fees-for-small-business" component={BlogPostDraftAccountantFeesForSmallBusiness} />
        <Route path="/blog/log-book-for-tax" component={BlogPostDraftLogBookForTax} />
        <Route path="/blog/reportable-super-contributions" component={BlogPostDraftReportableSuperContributions} />
        <Route path="/blog/how-much-can-you-salary-sacrifice-to-super" component={BlogPostDraftHowMuchCanYouSalarySacrificeToSuper} />
        <Route path="/blog/tax-deductions-for-small-business" component={BlogPostDraftTaxDeductionsForSmallBusiness} />
        <Route path="/blog/what-is-a-chart-of-accounts" component={BlogPostDraftWhatIsAChartOfAccounts} />
        <Route path="/blog/what-is-a-chart-of-accounts-2" component={BlogPostDraftWhatIsAChartOfAccounts2} />
        <Route path="/blog/small-business-tax-claims" component={BlogPostDraftSmallBusinessTaxClaims} />
        <Route path="/blog/how-does-a-family-trust-work" component={BlogPostDraftHowDoesAFamilyTrustWork} />
        <Route path="/blog/fbt-due-date" component={BlogPostDraftFbtDueDate} />
        <Route path="/blog/smsf-setting-up" component={BlogPostDraftSmsfSettingUp} />
        <Route path="/blog/tax-deductions-home-office" component={BlogPostDraftTaxDeductionsHomeOffice} />
        <Route path="/blog/why-do-i-have-to-pay-payg-instalments" component={BlogPostDraftWhyDoIHaveToPayPaygInstalments} />
        <Route path="/blog/how-to-do-depreciation" component={BlogPostDraftHowToDoDepreciation} />
        <Route path="/blog/smsf-commercial-property-loan" component={BlogPostDraftSmsfCommercialPropertyLoan} />
        <Route path="/blog/what-is-negative-gearing-in-australia" component={BlogPostDraftWhatIsNegativeGearingInAustralia} />
        <Route path="/blog/assets-that-depreciate" component={BlogPostDraftAssetsThatDepreciate} />
        <Route path="/blog/set-up-super-fund" component={BlogPostDraftSetUpSuperFund} />
        <Route path="/blog/what-is-payrolling" component={BlogPostDraftWhatIsPayrolling} />
        <Route path="/blog/tax-write-off-for-donations" component={BlogPostDraftTaxWriteOffForDonations} />
        <Route path="/blog/what-is-management-accounting" component={BlogPostDraftWhatIsManagementAccounting} />
        <Route path="/blog/how-to-read-a-balance-sheet" component={BlogPostDraftHowToReadABalanceSheet} />
        <Route path="/blog/what-is-break-even-analysis" component={BlogPostDraftWhatIsBreakEvenAnalysis} />
        <Route path="/blog/victoria-payroll-tax" component={BlogPostDraftVictoriaPayrollTax} />
        <Route path="/blog/how-do-trusts-work" component={BlogPostDraftHowDoTrustsWork} />
        <Route path="/blog/what-is-reportable-fringe-benefits" component={BlogPostDraftWhatIsReportableFringeBenefits} />
        <Route path="/blog/your-spouses-reportable-superannuation-contributions" component={BlogPostDraftYourSpousesReportableSuperannuationContributions} />
        <Route path="/blog/agent-nomination-ato" component={BlogPostDraftAgentNominationAto} />
        <Route path="/blog/cash-flow-forecast-template" component={BlogPostDraftCashFlowForecastTemplate} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
