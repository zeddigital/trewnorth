import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, ChevronDown, Calculator, TrendingUp, Wallet, FileText, Shield, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BookConsultation } from '@/components/book-consultation';
import { motion, AnimatePresence } from 'framer-motion';

const serviceLinks = [
  { name: 'Small Business Accountant', href: '/services/small-business-accountant', icon: Users },
  { name: 'Accounting & Tax Planning', href: '/services/accounting-and-tax-planning', icon: Calculator },
  { name: 'Small Business Planning', href: '/services/small-business-planning', icon: TrendingUp },
  { name: 'Personal Tax & Finance', href: '/services/personal-tax-and-finance', icon: Wallet },
  { name: 'Bookkeeping', href: '/services/bookkeeping', icon: FileText },
  { name: 'Self-Managed Super Funds', href: '/services/self-managed-super-funds', icon: Shield },
];

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'FAQs', href: '/faqs' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

interface NavbarProps {
  darkHero?: boolean;
}

export function Navbar({ darkHero = false }: NavbarProps) {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
  }, [location]);

  const isLight = scrolled || !darkHero;
  const isServicesActive = location.startsWith('/services');

  const openDropdown = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesDropdownOpen(true);
  };

  const closeDropdown = () => {
    closeTimer.current = setTimeout(() => setServicesDropdownOpen(false), 120);
  };

  const handleServicesKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setServicesDropdownOpen(false);
    }
  };

  const handleServicesBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    // Only close if focus has moved outside the entire dropdown container
    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
      setServicesDropdownOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isLight
          ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0" data-testid="link-home-logo">
            <img
              src={`${import.meta.env.BASE_URL}logo.svg`}
              alt="Trew North Accounting"
              className={`h-10 w-auto transition-all duration-500 ${!isLight ? 'brightness-0 invert' : ''}`}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-6 lg:gap-8">

            {/* Home */}
            <Link
              href="/"
              className={`text-sm font-medium transition-colors ${
                !isLight
                  ? location === '/' ? 'text-white' : 'text-white/70 hover:text-white'
                  : location === '/' ? 'text-foreground' : 'text-foreground/75 hover:text-primary'
              }`}
              data-testid="link-nav-home"
            >
              Home
            </Link>

            {/* Services dropdown — keyboard accessible via chevron button */}
            <div
              ref={servicesRef}
              className="relative"
              onMouseEnter={openDropdown}
              onMouseLeave={closeDropdown}
              onKeyDown={handleServicesKeyDown}
              onBlur={handleServicesBlur}
            >
              <div className="flex items-center gap-0.5">
                <Link
                  href="/services"
                  className={`text-sm font-medium transition-colors ${
                    !isLight
                      ? isServicesActive ? 'text-white' : 'text-white/70 hover:text-white'
                      : isServicesActive ? 'text-foreground' : 'text-foreground/75 hover:text-primary'
                  }`}
                  data-testid="link-nav-services"
                >
                  Services
                </Link>
                {/* Separate toggle button for keyboard users */}
                <button
                  type="button"
                  aria-haspopup="true"
                  aria-expanded={servicesDropdownOpen}
                  aria-label="Toggle services submenu"
                  onClick={() => servicesDropdownOpen ? setServicesDropdownOpen(false) : openDropdown()}
                  className={`p-1 rounded transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                    !isLight ? 'text-white/70 hover:text-white' : 'text-foreground/75 hover:text-primary'
                  }`}
                >
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                  />
                </button>
              </div>

              <AnimatePresence>
                {servicesDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.18 }}
                    onMouseEnter={openDropdown}
                    onMouseLeave={closeDropdown}
                    role="menu"
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 bg-background border border-border rounded-xl shadow-xl overflow-hidden"
                  >
                    <div className="p-2">
                      {serviceLinks.map((item) => {
                        const Icon = item.icon;
                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            role="menuitem"
                            className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-muted transition-colors group"
                            data-testid={`link-nav-service-${item.href.split('/').pop()}`}
                          >
                            <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                              <Icon className="h-4 w-4 text-primary" aria-hidden="true" />
                            </div>
                            <span className="text-sm font-medium text-foreground leading-tight">{item.name}</span>
                          </Link>
                        );
                      })}
                      <div className="border-t border-border mt-2 pt-2 flex gap-1">
                        <Link
                          href="/services"
                          role="menuitem"
                          className="flex-1 flex items-center gap-2 px-3 py-2.5 rounded-lg hover:bg-muted transition-colors"
                        >
                          <span className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                            All services <span aria-hidden="true">→</span>
                          </span>
                        </Link>
                        <Link
                          href="/service-areas"
                          role="menuitem"
                          className="flex-1 flex items-center gap-2 px-3 py-2.5 rounded-lg hover:bg-muted transition-colors"
                        >
                          <span className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                            Service areas <span aria-hidden="true">→</span>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Other nav items */}
            {navigation.filter(n => n.name !== 'Home').map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  !isLight
                    ? location === item.href ? 'text-white' : 'text-white/70 hover:text-white'
                    : location === item.href ? 'text-foreground' : 'text-foreground/75 hover:text-primary'
                }`}
                data-testid={`link-nav-${item.name.toLowerCase()}`}
              >
                {item.name}
              </Link>
            ))}

            <BookConsultation>
              <Button size="sm" className={isLight ? 'btn-cta-invert' : 'btn-cta'} data-testid="button-cta-consultation">
                Book a Consultation
              </Button>
            </BookConsultation>
          </div>

          {/* Mobile menu button — labelled for screen readers */}
          <button
            type="button"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            className={`md:hidden p-2 rounded-md transition-colors ${!isLight ? 'text-white hover:bg-white/10' : 'text-foreground hover:bg-muted'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border bg-background overflow-hidden"
          >
            <div className="px-4 py-6 space-y-1">
              <Link
                href="/"
                className="block px-3 py-2.5 rounded-lg text-base font-medium text-foreground hover:bg-muted transition-colors"
                data-testid="link-mobile-home"
              >
                Home
              </Link>

              {/* Mobile Services accordion */}
              <div>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  aria-expanded={mobileServicesOpen}
                  aria-controls="mobile-services-menu"
                  className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-medium text-foreground hover:bg-muted transition-colors"
                >
                  Services
                  <ChevronDown className={`h-4 w-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                </button>
                <AnimatePresence initial={false}>
                  {mobileServicesOpen && (
                    <motion.div
                      id="mobile-services-menu"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="ml-3 mt-1 space-y-1 border-l-2 border-primary/20 pl-3">
                        {serviceLinks.map((item) => {
                          const Icon = item.icon;
                          return (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="flex items-center gap-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                              data-testid={`link-mobile-service-${item.href.split('/').pop()}`}
                            >
                              <Icon className="h-4 w-4 text-primary flex-shrink-0" aria-hidden="true" />
                              {item.name}
                            </Link>
                          );
                        })}
                        <Link href="/services" className="block py-2 text-sm text-primary hover:underline font-medium">
                          All services <span aria-hidden="true">→</span>
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navigation.filter(n => n.name !== 'Home').map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2.5 rounded-lg text-base font-medium text-foreground/75 hover:text-foreground hover:bg-muted transition-colors"
                  data-testid={`link-mobile-${item.name.toLowerCase()}`}
                >
                  {item.name}
                </Link>
              ))}

              <div className="pt-3">
                <BookConsultation>
                  <Button className="w-full btn-cta-invert" data-testid="button-mobile-cta">
                    Book a Consultation
                  </Button>
                </BookConsultation>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
