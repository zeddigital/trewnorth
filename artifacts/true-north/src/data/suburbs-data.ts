export interface Suburb {
  name: string;
  slug: string;
  heroImage: string;
  tagline: string;
  description: string;
}

export const suburbs: Suburb[] = [
  {
    name: 'Brighton',
    slug: 'brighton',
    heroImage: '/hero-brighton.jpg',
    tagline: 'Affluent bayside suburb',
    description: "Tax planning, SMSF advisory, and strategic accounting for Brighton's professionals and small business owners.",
  },
  {
    name: 'Cheltenham',
    slug: 'cheltenham',
    heroImage: '/hero-cheltenham.jpg',
    tagline: 'Busy residential community',
    description: "Accounting, bookkeeping, and personal tax services tailored for Cheltenham's tradespeople, retailers, and families.",
  },
  {
    name: 'Moorabbin',
    slug: 'moorabbin',
    heroImage: '/hero-moorabbin.jpg',
    tagline: 'Commercial & industrial hub',
    description: "Tax compliance, BAS lodgement, and business planning for Moorabbin's thriving small business community.",
  },
  {
    name: 'Bentleigh',
    slug: 'bentleigh',
    heroImage: '/hero-bentleigh.jpg',
    tagline: 'Residential heartland',
    description: 'Personal tax returns, superannuation advice, and small business accounting across Bentleigh and East Bentleigh.',
  },
  {
    name: 'Mordialloc',
    slug: 'mordialloc',
    heroImage: '/hero-mordialloc.jpg',
    tagline: 'Coastal bayside suburb',
    description: "Local accounting and tax planning for Mordialloc's hospitality operators, sole traders, and families.",
  },
  {
    name: 'Parkdale',
    slug: 'parkdale',
    heroImage: '/hero-parkdale.jpg',
    tagline: 'Relaxed beachside community',
    description: "Friendly, expert accounting for Parkdale's small business owners, investors, and individual taxpayers.",
  },
  {
    name: 'Braeside',
    slug: 'braeside',
    heroImage: '/hero-braeside.jpg',
    tagline: 'Industrial & trade precinct',
    description: "Practical accounting, payroll, and tax support for Braeside's tradespeople and small operators.",
  },
  {
    name: 'Sandringham',
    slug: 'sandringham',
    heroImage: '/hero-sandringham.jpg',
    tagline: 'Elegant bayside village',
    description: "Tax planning, SMSF advisory, and personal accounting for Sandringham's professionals, investors, and families.",
  },
];
