import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'wouter';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { SEOHead, faqSchema, breadcrumbSchema } from '@/components/seo-head';

const faqs = [
  {
    category: 'Working with Trew North',
    items: [
      {
        question: 'How do I get started with Trew North?',
        answer:
          'The first step is a free 30-minute consultation — no obligation, no hard sell. We\'ll discuss your current situation, what you\'re looking for, and whether we\'re the right fit. You can book through our contact page or call us directly.',
      },
      {
        question: 'Do you work with businesses outside of Melbourne?',
        answer:
          'We work with businesses across Australia. While we\'re based in Beaumaris and have deep knowledge of the Melbourne market, most of our client work happens online via Xero, video calls, and email — so geography isn\'t a barrier.',
      },
      {
        question: 'How much does it cost?',
        answer:
          'Our pricing depends on the scope of work. We offer fixed-fee packages for most services so you always know what you\'re paying — no surprise invoices. We\'ll provide a clear quote after your initial consultation.',
      },
      {
        question: 'Can I switch accountants mid-year?',
        answer:
          'Yes — and it\'s simpler than most people think. We handle the transfer of records from your previous accountant and make the transition as seamless as possible. There\'s never a bad time to make the switch.',
      },
    ],
  },
  {
    category: 'Tax & Compliance',
    items: [
      {
        question: 'When is my tax return due?',
        answer:
          'For individuals lodging through a tax agent, the due date is generally 15 May of the following year (e.g. for the 2024/25 year, the return is due 15 May 2026). Business returns vary depending on entity type. We manage all lodgement dates for our clients and ensure nothing is missed.',
      },
      {
        question: 'What records should I be keeping for my business?',
        answer:
          'You should keep records for at least five years, including: receipts and invoices, bank statements, payroll records, asset registers, and any contracts. Using cloud accounting software like Xero makes this much easier — we can help you set up a solid system.',
      },
      {
        question: 'What is a BAS and when do I need to lodge one?',
        answer:
          'A Business Activity Statement (BAS) reports your GST, PAYG withholding, and other tax obligations to the ATO. Most businesses registered for GST lodge quarterly, though some lodge monthly or annually. We handle BAS preparation and lodgement for all our clients.',
      },
      {
        question: 'I received a letter from the ATO — what should I do?',
        answer:
          'Don\'t ignore it. Contact us as soon as possible with a copy of the letter. ATO correspondence can range from routine checks to serious audit notices, and the earlier we\'re involved, the better the outcome. We represent clients in all ATO dealings.',
      },
    ],
  },
  {
    category: 'Small Business',
    items: [
      {
        question: 'What accounting software do you recommend?',
        answer:
          'We primarily work with Xero and recommend it for most small businesses. It\'s cloud-based, integrates with hundreds of apps, and gives you real-time visibility into your finances. We also support MYOB and can advise on the best fit for your situation.',
      },
      {
        question: 'Should my business be a company, trust, or sole trader?',
        answer:
          'It depends on your circumstances — your income, asset protection needs, succession plans, and growth goals all play a role. This is one of the most important decisions a business owner makes, and we can walk you through the pros and cons of each structure for your specific situation.',
      },
      {
        question: 'What is a trust and do I need one?',
        answer:
          'A discretionary (family) trust is a legal structure that holds assets and distributes income to beneficiaries. They can be very effective for tax planning and asset protection. Whether you need one depends on your situation — book a consultation and we\'ll advise you directly.',
      },
      {
        question: 'How can an accountant help me grow my business?',
        answer:
          'A good accountant does far more than compliance. We help you understand your numbers, forecast cash flow, identify profit leaks, plan for tax, structure for growth, and make smarter financial decisions. Think of us as a financial co-pilot, not just a once-a-year tax agent.',
      },
    ],
  },
  {
    category: 'SMSF',
    items: [
      {
        question: 'Is an SMSF right for me?',
        answer:
          'An SMSF can be an excellent structure for the right person — typically someone with a reasonable super balance (generally $200,000+), who wants control over their investment choices, and is prepared to meet the trustee obligations. We\'ll help you assess whether it\'s the right fit.',
      },
      {
        question: 'How much does it cost to run an SMSF?',
        answer:
          'Costs include setup fees, annual accounting and audit fees, and any investment platform fees. For most funds, the annual compliance cost ranges from $2,000–$4,000 depending on complexity. We provide fixed-fee SMSF packages so you know exactly what to expect.',
      },
      {
        question: 'Can my SMSF borrow to buy property?',
        answer:
          'Yes — through a Limited Recourse Borrowing Arrangement (LRBA). This is a complex area with strict ATO rules. We can advise on whether this strategy makes sense for your fund, and help you navigate the setup correctly.',
      },
    ],
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border last:border-0">
      <button
        className="w-full flex items-start justify-between gap-4 py-6 text-left group"
        onClick={() => setOpen(!open)}
      >
        <span className="font-medium text-foreground group-hover:text-primary transition-colors leading-snug">
          {question}
        </span>
        <span className="flex-shrink-0 mt-0.5 text-primary">
          {open ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-muted-foreground leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQs() {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Accounting FAQs | Trew North Accounting Melbourne"
        description="Answers to common accounting, tax, BAS, SMSF, and small business questions from Darren Trew CA at Trew North Accounting, Beaumaris Melbourne."
        canonical="/faqs"
        schema={[
          faqSchema(
            faqs.flatMap((cat) =>
              cat.items.map((item) => ({ question: item.question, answer: item.answer }))
            )
          ),
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'FAQs', url: '/faqs' },
          ]),
        ]}
      />
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="font-serif font-semibold text-5xl sm:text-6xl lg:text-7xl leading-[1.1] text-foreground mb-6">
              Frequently asked questions
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Answers to the questions we hear most often. Can't find what you're looking for? Get in touch — we're happy to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {faqs.map((section, si) => (
            <motion.div
              key={section.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: si * 0.05 }}
            >
              <h2 className="font-serif font-semibold text-2xl sm:text-3xl text-foreground mb-8 pb-4 border-b-2 border-primary/20">
                {section.category}
              </h2>
              <div>
                {section.items.map((faq) => (
                  <FAQItem key={faq.question} {...faq} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Still have questions */}
      <section className="py-20 sm:py-28 bg-secondary text-secondary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif font-semibold text-4xl sm:text-5xl mb-6">
              Still have questions?
            </h2>
            <p className="text-lg text-secondary-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              Book a free 30-minute consultation and we'll answer anything you need — no obligation, no jargon.
            </p>
            <Button asChild size="lg" className="text-base btn-cta">
              <Link href="/contact">
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
