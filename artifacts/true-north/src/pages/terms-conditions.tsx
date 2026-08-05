import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { FileText, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { SEOHead, breadcrumbSchema } from '@/components/seo-head';

const sections = [
  {
    heading: 'Interpretation and Definitions',
    subsections: [
      {
        subheading: 'Interpretation',
        content: 'The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.',
      },
      {
        subheading: 'Definitions',
        content: 'For the purposes of these Terms and Conditions:',
        list: [
          '<strong>Affiliate</strong> means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.',
          '<strong>Country</strong> refers to: Australia',
          '<strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Trew North Accounting, Beaumaris, Victoria.',
          '<strong>Device</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.',
          '<strong>Service</strong> refers to the Website.',
          '<strong>Terms and Conditions</strong> (also referred as "Terms") mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service.',
          '<strong>Third-party Social Media Service</strong> means any services or content (including data, information, products or services) provided by a third-party that may be displayed, included or made available by the Service.',
          '<strong>Website</strong> refers to Trew North Accounting, accessible from <a href="https://tnaccounting.com.au/" class="text-primary hover:underline">https://tnaccounting.com.au/</a>',
          '<strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.',
        ],
      },
    ],
  },
  {
    heading: 'Acknowledgment',
    content: [
      'These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.',
      'Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.',
      'By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.',
      'You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service.',
      'Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the Privacy Policy of the Company. Our Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your personal information when You use the Website.',
    ],
  },
  {
    heading: 'Links to Other Websites',
    content: [
      'Our Service may contain links to third-party web sites or services that are not owned or controlled by the Company.',
      'The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such web sites or services.',
      'We strongly advise You to read the terms and conditions and privacy policies of any third-party web sites or services that You visit.',
    ],
  },
  {
    heading: 'Termination',
    content: [
      'We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions.',
      'Upon termination, Your right to use the Service will cease immediately.',
    ],
  },
  {
    heading: 'Limitation of Liability',
    content: [
      'Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of this Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service or 100 AUD if You haven\'t purchased anything through the Service.',
      'To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, for personal injury, loss of privacy arising out of or in any way related to the use of or inability to use the Service), even if the Company or any supplier has been advised of the possibility of such damages.',
    ],
  },
  {
    heading: '"AS IS" and "AS AVAILABLE" Disclaimer',
    content: [
      'The Service is provided to You "AS IS" and "AS AVAILABLE" and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the Company expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the Service, including all implied warranties of merchantability, fitness for a particular purpose, title and non-infringement.',
      'Without limiting the foregoing, neither the Company nor any of the company\'s provider makes any representation or warranty of any kind, express or implied: (i) as to the operation or availability of the Service; (ii) that the Service will be uninterrupted or error-free; (iii) as to the accuracy, reliability, or currency of any information or content provided through the Service; or (iv) that the Service is free of viruses, scripts, trojan horses, worms, malware, timebombs or other harmful components.',
    ],
  },
  {
    heading: 'Governing Law',
    content: [
      'The laws of Australia, excluding its conflicts of law rules, shall govern these Terms and Your use of the Service. Your use of the Service may also be subject to other local, state, national, or international laws.',
    ],
  },
  {
    heading: 'Disputes Resolution',
    content: [
      'If You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting the Company.',
    ],
  },
  {
    heading: 'Severability and Waiver',
    subsections: [
      {
        subheading: 'Severability',
        content: 'If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect.',
      },
      {
        subheading: 'Waiver',
        content: 'Except as provided herein, the failure to exercise a right or to require performance of an obligation under these Terms shall not effect a party\'s ability to exercise such right or require such performance at any time thereafter nor shall the waiver of a breach constitute a waiver of any subsequent breach.',
      },
    ],
  },
  {
    heading: 'Translation Interpretation',
    content: [
      'These Terms and Conditions may have been translated if We have made them available to You on our Service. You agree that the original English text shall prevail in the case of a dispute.',
    ],
  },
  {
    heading: 'Changes to These Terms and Conditions',
    content: [
      'We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material We will make reasonable efforts to provide at least 30 days\' notice prior to any new terms taking effect.',
      'By continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised terms. If You do not agree to the new terms, in whole or in part, please stop using the website and the Service.',
    ],
  },
  {
    heading: 'Contact Us',
    content: [
      'If you have any questions about these Terms and Conditions, please contact us via our contact page or write to: Trew North Accounting, 14 Keys Street, Beaumaris VIC 3193.',
    ],
  },
];

export default function TermsConditions() {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Terms & Conditions | Trew North Accounting"
        description="Terms and Conditions for the Trew North Accounting website. Please read these terms carefully before using our services."
        canonical="/terms-conditions"
        schema={[
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Terms & Conditions', url: '/terms-conditions' },
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
                <FileText className="h-5 w-5 text-primary" />
              </div>
              <p className="text-primary font-medium tracking-widest text-sm uppercase">Legal</p>
            </div>
            <h1 className="font-serif font-semibold text-5xl sm:text-6xl text-white mb-4">
              Terms & Conditions
            </h1>
            <p className="text-white/60 text-sm">
              Please read these terms and conditions carefully before using our service.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-neutral max-w-none">
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

                {'subsections' in section && section.subsections?.map((sub) => (
                  <div key={sub.subheading} className="mb-6">
                    <h3 className="font-semibold text-lg text-foreground mb-3">{sub.subheading}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-3">{sub.content}</p>
                    {'list' in sub && sub.list && (
                      <ul className="space-y-2 ml-4">
                        {sub.list.map((item, i) => (
                          <li
                            key={i}
                            className="text-muted-foreground leading-relaxed text-sm list-disc ml-4"
                            dangerouslySetInnerHTML={{ __html: item }}
                          />
                        ))}
                      </ul>
                    )}
                  </div>
                ))}

                {'content' in section && Array.isArray(section.content) &&
                  section.content.map((para, pi) => (
                    <p key={pi} className="text-muted-foreground leading-relaxed mb-4 last:mb-0">
                      {para}
                    </p>
                  ))
                }
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted/40 py-14 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-semibold text-foreground mb-1">Questions about our terms?</p>
            <p className="text-muted-foreground text-sm">We're happy to clarify anything in plain language.</p>
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
