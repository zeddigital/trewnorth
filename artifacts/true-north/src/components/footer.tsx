import { Link } from 'wouter';
import { Mail, Phone, MapPin } from 'lucide-react';

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

const navigation = {
  services: [
    { name: 'Small Business Accountant', href: '/services/small-business-accountant' },
    { name: 'Tax Planning & Accounting', href: '/services/accounting-and-tax-planning' },
    { name: 'Small Business Planning', href: '/services/small-business-planning' },
    { name: 'Personal Tax & Finance', href: '/services/personal-tax-and-finance' },
    { name: 'Bookkeeping', href: '/services/bookkeeping' },
    { name: 'Self-Managed Super Funds', href: '/services/self-managed-super-funds' },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Service Areas', href: '/service-areas' },
    { name: 'Contact', href: '/contact' },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img
              src={`${import.meta.env.BASE_URL}logo.svg`}
              alt="Trew North Accounting"
              className="h-10 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-secondary-foreground/80 mb-8 leading-relaxed text-sm">
              Chartered Accountants helping Melbourne's small businesses find clarity, direction, and sustained growth.
            </p>
            {/* Credential badges */}
            <div className="flex flex-row items-center gap-5 flex-wrap">
              <img
                src={`${import.meta.env.BASE_URL}ca-logo.svg`}
                alt="Chartered Accountants Australia & New Zealand"
                className="h-12 w-auto"
              />
              <img
                src={`${import.meta.env.BASE_URL}xero-certified.svg`}
                alt="Xero Certified Partner Advisor"
                className="h-12 w-auto"
              />
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-sans font-semibold text-sm uppercase tracking-widest mb-4 text-primary">Services</h3>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-sans font-semibold text-sm uppercase tracking-widest mb-4 text-primary">Company</h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors text-sm"
                    data-testid={`link-footer-${item.name.toLowerCase()}`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Connect */}
          <div>
            <h3 className="font-sans font-semibold text-sm uppercase tracking-widest mb-4 text-primary">Contact</h3>
            <ul className="space-y-3 text-sm text-secondary-foreground/80 mb-8">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <a
                  href="https://maps.google.com/?q=14+Keys+Street,+Beaumaris+VIC+3193"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary-foreground transition-colors"
                >14 Keys Street, Beaumaris VIC 3193</a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <a href="tel:0411732966" className="hover:text-secondary-foreground transition-colors">0411 732 966</a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <a href="mailto:darren@tnaccounting.com.au" className="hover:text-secondary-foreground transition-colors">darren@tnaccounting.com.au</a>
              </li>
            </ul>

            <h3 className="font-sans font-semibold text-sm uppercase tracking-widest mb-4 text-primary">Connect</h3>
            <a
              href="https://www.linkedin.com/company/true-north-accounting"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
              aria-label="Trew North Accounting on LinkedIn"
            >
              <LinkedInIcon className="h-5 w-5" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Stacks until xl so both iPad orientations (768 and 1024) get one
            item per line; only true desktop widths use the single row. */}
        <div className="border-t border-secondary-foreground/10 mt-12 pt-8 flex flex-col xl:flex-row justify-between items-center gap-4 text-center xl:text-left text-sm text-secondary-foreground/60">
          <p>&copy; {currentYear} Trew North Accounting. All rights reserved.</p>
          <div className="flex flex-col xl:flex-row items-center gap-4">
            <p>Proudly serving Melbourne small businesses since 2015</p>
            <a
              href="https://7marketing.com.au/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary-foreground/90 transition-colors"
            >
              Website By 7M
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
