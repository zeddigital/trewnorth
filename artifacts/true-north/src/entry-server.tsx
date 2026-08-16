import { useSyncExternalStore } from 'react';
import { renderToString } from 'react-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import { Route, Switch, Router as WouterRouter } from 'wouter';

import Home from '@/pages/home';
import Services from '@/pages/services';
import ServiceDetail from '@/pages/service-detail';
import SmallBusinessAccountant from '@/pages/small-business-accountant';
import ServiceBookkeeping from '@/pages/service-bookkeeping';
import ServiceAccountingTaxPlanning from '@/pages/service-accounting-and-tax-planning';
import ServiceSmallBusinessPlanning from '@/pages/service-small-business-planning';
import ServiceSelfManagedSuperFunds from '@/pages/service-self-managed-super-funds';
import ServicePersonalTaxAndFinance from '@/pages/service-personal-tax-and-finance';
import About from '@/pages/about';
import Contact from '@/pages/contact';
import FAQs from '@/pages/faqs';
import Blog from '@/pages/blog';
import BlogPostGST from '@/pages/blog-post-gst';
import BlogPostInterestRates from '@/pages/blog-post-interest-rates';
import BlogPostTradies from '@/pages/blog-post-tradies';
import BlogPostBookkeepingTips from '@/pages/blog-post-bookkeeping-tips';
import BlogPostAISmallBusiness from '@/pages/blog-post-ai-small-business';
import BlogPostGrants2025 from '@/pages/blog-post-grants-2025';
import BlogPostSuccessionPlanningForSmallBusinesses from '@/pages/blog-post-succession-planning-for-small-businesses';
import BlogPost10WaysToReduceYourBusinessTaxBill from '@/pages/blog-post-10-ways-to-reduce-your-business-tax-bill';
import BlogPostNavigatingThe2025TaxChanges from '@/pages/blog-post-navigating-the-2025-tax-changes-what-small-businesses-in-melbourne-need-to-know';
import BlogPostHowToPayYourselfAsABusinessOwner from '@/pages/blog-post-how-to-pay-yourself-as-a-business-owner-without-triggering-ato-red-flags';
import BlogPostStrategicPlanForSmallBusiness from '@/pages/blog-post-strategic-plan-for-small-business';
import BlogPostBusinessStructuresProsCons from '@/pages/blog-post-business-structures-pros-cons';
import BlogPostBestMelbourneAccountants2024 from '@/pages/blog-post-your-guide-to-the-best-melbourne-accountants-in-2024';
import BlogPostHowToHandleAtoAuditLetter from '@/pages/blog-post-how-to-handle-an-ato-audit-letter-step-by-step-guide';
import BlogPostCashFlowProblems from '@/pages/blog-post-cash-flow-problems-in-small-business';
import BlogPostBestAccountingSoftware from '@/pages/blog-post-best-accounting-software-for-small-business-australia';
import BlogPostTaxDeductionsSoleTrader from '@/pages/blog-post-tax-deductions-sole-trader';
import BlogPostTaxReturnDeadline from '@/pages/blog-post-tax-return-deadline';
import BlogPostSalarySacrificeIsItWorthIt from '@/pages/blog-post-salary-sacrifice-is-it-worth-it';
import BlogPostPropertyInvestmentSuperannuation from '@/pages/blog-post-property-investment-using-superannuation';
import BlogPostDiscretionaryTrustVsFamilyTrust from '@/pages/blog-post-discretionary-trust-vs-family-trust';
import BlogPostInvestmentPropertyTaxDeductions from '@/pages/blog-post-investment-property-tax-deductions-australia';
import BlogPostHowToSalarySacrificeSuper from '@/pages/blog-post-how-to-salary-sacrifice-super';
import BlogPostPaydaySuper2026 from '@/pages/blog-post-payday-super-for-2026-the-small-business-accountants-checklist-to-stay-compliant-and-protect-cash-flow';
import BlogPostAtoSuperClearingHouseClosing from '@/pages/blog-post-the-atos-free-super-clearing-house-is-closing-what-your-melbourne-small-business-needs-to-do-before-30-june-2026';
import BlogPostVictoriaPayrollTax from '@/pages/blog-post-victoria-payroll-tax';
import BlogPostHowToReadABalanceSheet from '@/pages/blog-post-how-to-read-a-balance-sheet';
import BlogPostWhatIsBreakEvenAnalysis from '@/pages/blog-post-what-is-break-even-analysis';
import BlogPostWhatIsManagementAccounting from '@/pages/blog-post-what-is-management-accounting';
import BlogPostSetUpSuperFund from '@/pages/blog-post-set-up-super-fund';
import BlogPostAgentNominationAto from '@/pages/blog-post-agent-nomination-ato';
import BlogPostWhatIsPayrolling from '@/pages/blog-post-what-is-payrolling';
import Suburbs from '@/pages/suburbs';
import SuburbBrighton from '@/pages/suburb-brighton';
import SuburbCheltenham from '@/pages/suburb-cheltenham';
import SuburbMoorabbin from '@/pages/suburb-moorabbin';
import SuburbBentleigh from '@/pages/suburb-bentleigh';
import SuburbMordialloc from '@/pages/suburb-mordialloc';
import SuburbParkdale from '@/pages/suburb-parkdale';
import SuburbBraeside from '@/pages/suburb-braeside';
import SuburbSandringham from '@/pages/suburb-sandringham';
import ServiceAreas from '@/pages/service-areas';
import PrivacyPolicy from '@/pages/privacy-policy';
import TermsConditions from '@/pages/terms-conditions';

/**
 * Create a static wouter location hook that works in React 18 SSR.
 *
 * Wouter's built-in `memoryLocation` calls `useSyncExternalStore` with only
 * two arguments (subscribe + getSnapshot), which causes React 18.3+ to throw
 * "Missing getServerSnapshot" during `renderToString`. This hook passes all
 * three arguments, satisfying the server-rendering contract while keeping the
 * path fixed (navigation is a no-op during SSR).
 */
function createStaticLocationHook(path: string) {
  const noop = () => {};
  const getPath = () => path;
  return (): [string, (to: string) => void] => {
    const currentPath = useSyncExternalStore(
      () => noop,   // subscribe — returns unsubscribe; path never changes in SSR
      getPath,       // getSnapshot
      getPath,       // getServerSnapshot — required by React 18 server rendering
    );
    return [currentPath, noop];
  };
}

/**
 * Server-side render a route and return the HTML string plus the HelmetProvider
 * context, which holds <title>, meta, link, and script tags set by SEOHead.
 *
 * QueryClientProvider and TooltipProvider are intentionally omitted: they use
 * `useSyncExternalStore` without server snapshots and are not needed because
 * no page component makes react-query calls for its static content.
 */
export function render(path: string): {
  html: string;
  helmetContext: Record<string, unknown>;
} {
  const helmetContext: Record<string, unknown> = {};
  const hook = createStaticLocationHook(path);

  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <WouterRouter hook={hook}>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/services" component={Services} />
          <Route
            path="/services/small-business-accountant"
            component={SmallBusinessAccountant}
          />
          <Route path="/services/bookkeeping" component={ServiceBookkeeping} />
          <Route path="/services/accounting-and-tax-planning" component={ServiceAccountingTaxPlanning} />
          <Route path="/services/small-business-planning" component={ServiceSmallBusinessPlanning} />
          <Route path="/services/self-managed-super-funds" component={ServiceSelfManagedSuperFunds} />
          <Route path="/services/personal-tax-and-finance" component={ServicePersonalTaxAndFinance} />
          <Route path="/services/:slug" component={ServiceDetail} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/faqs" component={FAQs} />
          <Route path="/suburbs" component={Suburbs} />
          <Route path="/blog" component={Blog} />
          <Route
            path="/blog/should-your-small-business-register-for-gst"
            component={BlogPostGST}
          />
          <Route
            path="/blog/the-impact-of-rising-interest-rates-on-small-businesses"
            component={BlogPostInterestRates}
          />
          <Route
            path="/blog/melbourne-tradies-tax-tips-and-bookkeeping-mistakes"
            component={BlogPostTradies}
          />
          <Route
            path="/blog/top-small-business-bookkeeping-tips"
            component={BlogPostBookkeepingTips}
          />
          <Route
            path="/blog/the-impact-of-ai-in-small-business"
            component={BlogPostAISmallBusiness}
          />
          <Route
            path="/blog/top-small-business-grants-for-2025"
            component={BlogPostGrants2025}
          />
          <Route path="/blog/what-is-payrolling" component={BlogPostWhatIsPayrolling} />
          <Route path="/blog/agent-nomination-ato" component={BlogPostAgentNominationAto} />
          <Route path="/blog/set-up-super-fund" component={BlogPostSetUpSuperFund} />
          <Route path="/blog/what-is-management-accounting" component={BlogPostWhatIsManagementAccounting} />
          <Route path="/blog/what-is-break-even-analysis" component={BlogPostWhatIsBreakEvenAnalysis} />
          <Route path="/blog/how-to-read-a-balance-sheet" component={BlogPostHowToReadABalanceSheet} />
          <Route path="/blog/victoria-payroll-tax" component={BlogPostVictoriaPayrollTax} />
          <Route path="/blog/property-investment-using-superannuation" component={BlogPostPropertyInvestmentSuperannuation} />
          <Route path="/blog/the-atos-free-super-clearing-house-is-closing-what-your-melbourne-small-business-needs-to-do-before-30-june-2026" component={BlogPostAtoSuperClearingHouseClosing} />
          <Route path="/blog/tax-deductions-sole-trader" component={BlogPostTaxDeductionsSoleTrader} />
          <Route path="/blog/how-to-salary-sacrifice-super" component={BlogPostHowToSalarySacrificeSuper} />
          <Route path="/blog/tax-return-deadline" component={BlogPostTaxReturnDeadline} />
          <Route path="/blog/discretionary-trust-vs-family-trust" component={BlogPostDiscretionaryTrustVsFamilyTrust} />
          <Route path="/blog/investment-property-tax-deductions-australia" component={BlogPostInvestmentPropertyTaxDeductions} />
          <Route path="/blog/payday-super-for-2026-the-small-business-accountants-checklist-to-stay-compliant-and-protect-cash-flow" component={BlogPostPaydaySuper2026} />
          <Route path="/blog/salary-sacrifice-is-it-worth-it" component={BlogPostSalarySacrificeIsItWorthIt} />
          <Route path="/blog/cash-flow-problems-in-small-business" component={BlogPostCashFlowProblems} />
          <Route path="/blog/best-accounting-software-for-small-business-australia" component={BlogPostBestAccountingSoftware} />
          <Route path="/blog/how-to-pay-yourself-as-a-business-owner-without-triggering-ato-red-flags" component={BlogPostHowToPayYourselfAsABusinessOwner} />
          <Route path="/blog/navigating-the-2025-tax-changes-what-small-businesses-in-melbourne-need-to-know" component={BlogPostNavigatingThe2025TaxChanges} />
          <Route path="/blog/10-ways-to-reduce-your-business-tax-bill" component={BlogPost10WaysToReduceYourBusinessTaxBill} />
          <Route path="/blog/succession-planning-for-small-businesses" component={BlogPostSuccessionPlanningForSmallBusinesses} />
          <Route path="/blog/how-to-handle-an-ato-audit-letter-step-by-step-guide" component={BlogPostHowToHandleAtoAuditLetter} />
          <Route path="/blog/your-guide-to-the-best-melbourne-accountants-in-2024" component={BlogPostBestMelbourneAccountants2024} />
          <Route path="/blog/strategic-plan-for-small-business" component={BlogPostStrategicPlanForSmallBusiness} />
          <Route path="/blog/business-structures-pros-cons" component={BlogPostBusinessStructuresProsCons} />

          <Route path="/accountant-in-brighton" component={SuburbBrighton} />
          <Route path="/accountant-in-cheltenham" component={SuburbCheltenham} />
          <Route path="/accountant-in-moorabbin" component={SuburbMoorabbin} />
          <Route path="/accountant-in-bentleigh" component={SuburbBentleigh} />
          <Route path="/accountant-in-mordialloc" component={SuburbMordialloc} />
          <Route path="/accountant-in-parkdale" component={SuburbParkdale} />
          <Route path="/accountant-in-braeside" component={SuburbBraeside} />
          <Route path="/accountant-in-sandringham" component={SuburbSandringham} />
          <Route path="/service-areas" component={ServiceAreas} />

          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route path="/terms-conditions" component={TermsConditions} />
        </Switch>
      </WouterRouter>
    </HelmetProvider>,
  );

  return { html, helmetContext };
}
