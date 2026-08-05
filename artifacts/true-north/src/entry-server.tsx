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
import Suburbs from '@/pages/suburbs';

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
        </Switch>
      </WouterRouter>
    </HelmetProvider>,
  );

  return { html, helmetContext };
}
