import { Helmet } from 'react-helmet-async';

const SITE_NAME = 'Trew North Accounting';
const BASE_URL = 'https://tnaccounting.com.au';

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  ogType?: 'website' | 'article';
  /** ISO date string — for articles */
  publishedTime?: string;
  /** ISO date string — for articles */
  modifiedTime?: string;
  /** Path to the og:image (e.g. "/hero-brighton.jpg") — defaults to /hero-compass.jpg */
  ogImage?: string;
  /** Prevent search engines from indexing this page */
  noIndex?: boolean;
  /** One or more JSON-LD schema objects */
  schema?: object | object[];
}

export function SEOHead({
  title,
  description,
  canonical,
  ogType = 'website',
  publishedTime,
  modifiedTime,
  ogImage,
  noIndex,
  schema,
}: SEOHeadProps) {
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
  const canonicalUrl = canonical ? `${BASE_URL}${canonical}` : undefined;

  // Normalise schema to array
  const schemas = schema ? (Array.isArray(schema) ? schema : [schema]) : [];

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_AU" />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      <meta property="og:image" content={`${BASE_URL}${ogImage ?? '/hero-compass.jpg'}`} />
      <meta property="og:image:width" content="1280" />
      <meta property="og:image:height" content="720" />
      <meta name="twitter:image" content={`${BASE_URL}${ogImage ?? '/hero-compass.jpg'}`} />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}

      {/* Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />

      {/* JSON-LD structured data */}
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
}

/* ── Shared schema helpers ─────────────────────────────────────── */

/** LocalBusiness (AccountingService) — used on Home and Contact */
export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'AccountingService'],
  '@id': BASE_URL,
  name: 'Trew North Accounting',
  description:
    "Melbourne's trusted accounting firm for ambitious small business owners. Tax planning, bookkeeping, SMSF, and strategic advice.",
  url: BASE_URL,
  telephone: '+61411732966',
  email: 'darren@tnaccounting.com.au',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '14 Keys Street',
    addressLocality: 'Beaumaris',
    addressRegion: 'VIC',
    postalCode: '3193',
    addressCountry: 'AU',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -37.9885,
    longitude: 145.0476,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '17:00',
    },
  ],
  priceRange: '$$',
  areaServed: {
    '@type': 'City',
    name: 'Melbourne',
  },
  hasCredential: [
    { '@type': 'EducationalOccupationalCredential', credentialCategory: 'CA ANZ Member' },
    { '@type': 'EducationalOccupationalCredential', credentialCategory: 'Xero Certified Advisor' },
    { '@type': 'EducationalOccupationalCredential', credentialCategory: 'Registered Tax Agent' },
  ],
  founder: {
    '@type': 'Person',
    name: 'Darren Trew',
    jobTitle: 'Director & Chartered Accountant',
    hasCredential: { '@type': 'EducationalOccupationalCredential', credentialCategory: 'CA ANZ' },
  },
  sameAs: [
    'https://tnaccounting.com.au',
    'https://maps.app.goo.gl/Ue9ZC41Q5Z2ZiF2B8',
    'https://www.linkedin.com/company/true-north-accounting',
  ],
};

/** LocalBusiness (AccountingService) scoped to a specific suburb — used on suburb pages */
export function localBusinessSchemaForSuburb(suburb: string) {
  return {
    ...localBusinessSchema,
    areaServed: {
      '@type': 'City',
      name: suburb,
    },
  };
}

/** WebSite schema — used on Home */
export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': BASE_URL,
  name: 'Trew North Accounting',
  url: BASE_URL,
  description:
    'Melbourne small business accounting firm. Tax planning, bookkeeping, SMSF and strategic advice.',
  potentialAction: {
    '@type': 'SearchAction',
    target: `${BASE_URL}/blog?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
};

/** BlogPosting schema builder */
export function blogPostingSchema({
  title,
  description,
  url,
  datePublished,
  dateModified,
  readingTime,
}: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  readingTime?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    url: `${BASE_URL}${url}`,
    datePublished,
    dateModified: dateModified ?? datePublished,
    ...(readingTime ? { timeRequired: readingTime } : {}),
    author: {
      '@type': 'Person',
      name: 'Darren Trew',
      jobTitle: 'Director & Chartered Accountant',
      url: `${BASE_URL}/about`,
    },
    publisher: {
      '@type': 'Organization',
      '@id': BASE_URL,
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${BASE_URL}${url}` },
  };
}

/** BreadcrumbList schema builder */
export function breadcrumbSchema(crumbs: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: `${BASE_URL}${c.url}`,
    })),
  };
}

/** Service schema builder — use on each individual service page */
export function serviceSchema({
  name,
  description,
  url,
  areaServed,
}: {
  name: string;
  description: string;
  url: string;
  /** Override areaServed — defaults to the City of Melbourne */
  areaServed?: { '@type': string; name: string };
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: `${BASE_URL}${url}`,
    provider: {
      '@type': ['LocalBusiness', 'AccountingService'],
      '@id': BASE_URL,
      name: 'Trew North Accounting',
      url: BASE_URL,
      telephone: '+61411732966',
      email: 'darren@tnaccounting.com.au',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '14 Keys Street',
        addressLocality: 'Beaumaris',
        addressRegion: 'VIC',
        postalCode: '3193',
        addressCountry: 'AU',
      },
      sameAs: [
        'https://maps.app.goo.gl/Ue9ZC41Q5Z2ZiF2B8',
        'https://www.linkedin.com/company/true-north-accounting',
      ],
    },
    areaServed: areaServed ?? {
      '@type': 'City',
      name: 'Melbourne',
    },
    serviceType: name,
  };
}

/** Person schema — Darren Trew, for use on the About page */
export const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Darren Trew',
  jobTitle: 'Chartered Accountant',
  url: `${BASE_URL}/about`,
  image: `${BASE_URL}/darren-trew.webp`,
  worksFor: {
    '@type': 'Organization',
    '@id': BASE_URL,
  },
  hasCredential: [
    { '@type': 'EducationalOccupationalCredential', credentialCategory: 'Chartered Accountant (CA ANZ)' },
    { '@type': 'EducationalOccupationalCredential', credentialCategory: 'Xero Certified Advisor' },
    { '@type': 'EducationalOccupationalCredential', credentialCategory: 'Registered Tax Agent' },
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Beaumaris',
    addressRegion: 'VIC',
    addressCountry: 'AU',
  },
  knowsAbout: [
    'Tax Planning',
    'Small Business Accounting',
    'Bookkeeping',
    'SMSF',
    'Business Advisory',
  ],
  sameAs: [
    'https://www.linkedin.com/company/true-north-accounting',
    'https://maps.app.goo.gl/Ue9ZC41Q5Z2ZiF2B8',
  ],
};

/** FAQPage schema builder */
export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((i) => ({
      '@type': 'Question',
      name: i.question,
      acceptedAnswer: { '@type': 'Answer', text: i.answer },
    })),
  };
}
