import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { Lock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { SEOHead, breadcrumbSchema } from '@/components/seo-head';

const sections = [
  {
    heading: 'Key Details',
    content: [
      'This website privacy policy describes how Trew North Accounting protects and makes use of the information you give the company when you use this website.',
      'If you are asked to provide information when using this website, it will only be used in the ways described in this privacy policy.',
      'This policy is updated from time to time. The latest version is published on this page. This website privacy policy was last updated on: 29/09/2022.',
      'If you have any questions about this policy, please contact us via our contact page or write to: Trew North Accounting, 14 Keys Street, Beaumaris, Victoria, Australia 3193.',
    ],
  },
  {
    heading: 'Introduction',
    content: [
      'We gather and use certain information about individuals in order to provide products and services and to enable certain functions on this website.',
      'We also collect information to better understand how visitors use this website and to present timely, relevant information to them.',
    ],
  },
  {
    heading: 'What Data We Gather',
    intro: 'We may collect the following information:',
    list: [
      'Name',
      'Contact information including email address',
      'Demographic information, such as postcode, suburb, state',
      'Website usage data',
      'Other information relevant to client enquiries',
      'Other information pertaining to special offers and surveys',
    ],
  },
  {
    heading: 'How We Use This Data',
    content: [
      'Collecting this data helps us understand what you are looking for from the company, enabling us to deliver improved products and services.',
    ],
    intro2: 'Specifically, we may use data:',
    list: [
      'For our own internal records',
      'To improve the products and services we provide',
      'To contact you in response to a specific enquiry',
      'To customise the website for you',
      'To send you promotional emails about products, services, offers and other things we think might be relevant to you',
      'To contact you via email, telephone or mail for market research reasons',
    ],
  },
  {
    heading: 'Cookies and How We Use Them',
    subsections: [
      {
        subheading: 'What is a cookie?',
        content: 'A cookie is a small file placed on your computer\'s hard drive. It enables our website to identify your computer as you view different pages on our website. Cookies allow websites and applications to store your preferences in order to present content, options or functions that are specific to you. They also enable us to see information like how many people use the website and what pages they tend to visit.',
      },
      {
        subheading: 'How we use cookies',
        content: 'We may use cookies to:',
        list: [
          'Analyse our web traffic using an analytics package. Aggregated usage data helps us improve the website structure, design, content and functions.',
          'Identify whether you are signed in to our website.',
          'Test content on our website.',
          'Store information about your preferences so the website can present you with information you will find more relevant and interesting.',
          'Recognise when you return to our website.',
        ],
      },
    ],
  },
  {
    heading: 'Controlling Cookies',
    content: [
      'You can use your web browser\'s cookie settings to determine how our website uses cookies. If you do not want our website to store cookies on your computer or device, you should set your web browser to refuse cookies.',
      'However, please note that doing this may affect how our website functions. Some pages and services may become unavailable to you.',
      'Unless you have changed your browser to refuse cookies, our website will issue cookies when you visit it.',
    ],
  },
  {
    heading: 'Controlling Information About You',
    content: [
      'When you fill in a form or provide your details on our website, you have given us permission to receive communications from us by email, telephone, text message or post.',
      'We will never lease, distribute or sell your personal information to third parties unless we have your permission or the law requires us to.',
      'Any personal information we hold about you is stored and processed under our data protection policy, in line with the Australian Data Protection Act 1988.',
    ],
  },
  {
    heading: 'Security',
    content: [
      'We will always hold your information securely.',
      'To prevent unauthorised disclosure or access to your information, we have implemented strong physical and electronic security safeguards.',
      'We also follow stringent procedures to ensure we work with all personal data in line with the Australian Data Protection Act 1988.',
    ],
  },
  {
    heading: 'Links From Our Site',
    content: [
      'Our website may contain links to other websites.',
      'Please note that we have no control of websites outside the tnaccounting.com.au domain. If you provide information to a website to which we link, we are not responsible for its protection and privacy.',
      'Always be wary when submitting data to websites. Read the site\'s data protection and privacy policies fully.',
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Privacy Policy | Trew North Accounting"
        description="Privacy Policy for Trew North Accounting. Learn how we collect, use, and protect your personal information when you use our website and services."
        canonical="/privacy-policy"
        schema={[
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Privacy Policy', url: '/privacy-policy' },
          ]),
        ]}
      />
      <Navbar />

      {/* Hero */}
      <section className="bg-secondary py-24 sm:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                <Lock className="h-5 w-5 text-primary" />
              </div>
              <p className="text-primary font-medium tracking-widest text-sm uppercase">Legal</p>
            </div>
            <h1 className="font-serif font-semibold text-5xl sm:text-6xl text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-white/60 text-sm">
              Last updated: 29 September 2022
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {sections.map((section, si) => (
            <motion.div
              key={section.heading}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: si * 0.04 }}
              className="mb-12 pb-12 border-b border-border last:border-0 last:mb-0 last:pb-0"
            >
              <h2 className="font-serif font-semibold text-2xl sm:text-3xl text-foreground mb-6">
                {section.heading}
              </h2>

              {'content' in section && Array.isArray(section.content) &&
                section.content.map((para, pi) => (
                  <p key={pi} className="text-muted-foreground leading-relaxed mb-4">
                    {para}
                  </p>
                ))
              }

              {'intro' in section && section.intro && (
                <p className="text-muted-foreground leading-relaxed mb-3">{section.intro}</p>
              )}

              {'intro2' in section && section.intro2 && (
                <p className="text-muted-foreground leading-relaxed mb-3 mt-2">{section.intro2}</p>
              )}

              {'list' in section && Array.isArray(section.list) && (
                <ul className="space-y-2 ml-4 mb-4">
                  {section.list.map((item, i) => (
                    <li key={i} className="text-muted-foreground text-sm leading-relaxed list-disc ml-4">
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {'subsections' in section && section.subsections?.map((sub) => (
                <div key={sub.subheading} className="mb-6">
                  <h3 className="font-semibold text-lg text-foreground mb-3">{sub.subheading}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">{sub.content}</p>
                  {'list' in sub && sub.list && (
                    <ul className="space-y-2 ml-4">
                      {sub.list.map((item, i) => (
                        <li key={i} className="text-muted-foreground text-sm leading-relaxed list-disc ml-4">
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted/40 py-14 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-semibold text-foreground mb-1">Questions about our privacy practices?</p>
            <p className="text-muted-foreground text-sm">Contact us and we'll answer in plain language.</p>
          </div>
          <Button asChild className="btn-cta flex-shrink-0">
            <Link href="/contact">
              Contact Us <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
