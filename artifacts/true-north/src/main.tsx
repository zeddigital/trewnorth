import { createRoot, hydrateRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import './index.css';

const rootEl = document.getElementById('root')!;

const app = (
  <HelmetProvider>
    <App />
  </HelmetProvider>
);

// If the root element already has child nodes the page was pre-rendered by the
// SSG build step.  Use hydrateRoot so React reuses the existing DOM and only
// attaches event handlers — no blank flash, correct initial content for
// crawlers that don't run JavaScript.  Fall back to createRoot for the Vite
// dev server and any environment without pre-rendered HTML.
if (rootEl.hasChildNodes()) {
  hydrateRoot(rootEl, app);
} else {
  createRoot(rootEl).render(app);
}
