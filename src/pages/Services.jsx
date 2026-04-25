import { Link } from 'react-router-dom';
import {
  Building2,
  ArrowRightLeft,
  FileText,
  ClipboardCheck,
  Settings,
  Search,
  Receipt,
  BookOpen,
  ShieldCheck,
  Eye,
  Calculator,
  Package,
  Rocket,
  ArrowRight,
} from 'lucide-react';

const services = [
  {
    title: 'Business Setup Advisory',
    slug: 'business-setup-advisory',
    icon: Building2,
    description: 'Expert guidance for company formation and regulatory approvals across India.',
  },
  {
    title: 'Transaction Advisory',
    slug: 'transaction-advisory',
    icon: ArrowRightLeft,
    description: 'M&A advisory, due diligence, valuations and financial modeling.',
  },
  {
    title: 'Taxation & Regulatory Services',
    slug: 'taxation-regulatory-services',
    icon: FileText,
    description: 'Tax planning, international taxation, transfer pricing and compliance.',
  },
  {
    title: 'Audit & Assurance Services',
    slug: 'audit-assurance-services',
    icon: ClipboardCheck,
    description: 'Cost reduction, management, mystery, and revenue audits.',
  },
  {
    title: 'Non-Core Process Outsourcing',
    slug: 'non-core-process-outsourcing',
    icon: Settings,
    description: 'Virtual CFO, payroll, compliance diagnostics and reconciliation.',
  },
  {
    title: 'Forensic Accounting and Fraud Detection',
    slug: 'forensic-accounting',
    icon: Search,
    description: 'Prevention, detection and investigation of financial fraud.',
  },
  {
    title: 'GST Related Services',
    slug: 'gst-related-services',
    icon: Receipt,
    description: 'Registration, compliance, certifications, annual returns and GST audit.',
  },
  {
    title: 'Business Automation & AI Advisory',
    slug: 'business-automation-ai-advisory',
    icon: BookOpen,
    description: 'AI-powered automation solutions for accounting, compliance, and business processes.',
  },
  {
    title: 'Internal Financial Controls (IFC)',
    slug: 'internal-financial-controls',
    icon: ShieldCheck,
    description: 'Design and implementation of ICFR frameworks.',
  },
  {
    title: 'Internal Audit',
    slug: 'internal-audit',
    icon: Eye,
    description: 'Risk-based internal audit and fraud risk management.',
  },
  {
    title: 'Book Keeping & Accounting Services',
    slug: 'book-keeping-accounting',
    icon: Calculator,
    description: 'Complete bookkeeping, financial statements and MIS reporting.',
  },
  {
    title: 'Physical Verification',
    slug: 'physical-verification',
    icon: Package,
    description: 'Inventory verification and fixed asset management.',
  },
  {
    title: 'Startup Services',
    slug: 'startup-services',
    icon: Rocket,
    description: 'End-to-end support from incorporation to funding advisory.',
  },
];

export default function Services() {
  return (
    <main>
      <section className="hero-gradient py-12 text-center lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-accent-500">What We Offer</p>
          <h1 className="font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">Our Services</h1>
          <div className="mx-auto mt-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-accent-500/40" />
            <span className="h-1.5 w-1.5 rotate-45 bg-accent-500" />
            <span className="h-px w-10 bg-accent-500/40" />
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-100/80">
            Providing a comprehensive range of financial services
          </p>
        </div>
      </section>

      <section className="section-gradient py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.title}
                  to={`/services/${service.slug}`}
                  className="group flex flex-col rounded-xl border border-primary-200/30 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent-500/40 hover:shadow-lg hover:shadow-primary-500/10"
                >
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary-50 text-primary-500 transition-all duration-300 group-hover:bg-accent-500 group-hover:text-white group-hover:shadow-lg group-hover:shadow-accent-500/20">
                    <Icon className="h-7 w-7" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-primary-900">{service.title}</h3>
                  <p className="mt-3 flex-1 leading-relaxed text-primary-700/70">{service.description}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent-600 transition-all duration-200 group-hover:gap-3">
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-10 lg:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-block rounded-full bg-accent-500/10 px-4 py-1.5 text-sm font-semibold tracking-wide text-accent-600">
              Serving Globally
            </span>
            <h2 className="mt-3 font-serif text-3xl font-bold text-primary-900 sm:text-4xl">
              International Compliance Coverage
            </h2>
            <div className="mx-auto mt-3 h-1 w-16 rounded bg-accent-500" />
            <p className="mx-auto mt-4 max-w-2xl text-primary-700/70">
              In addition to India, we manage local compliance requirements for businesses operating
              in the following countries.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
            {[
              { flag: '\u{1F1E6}\u{1F1EA}', country: 'UAE', detail: 'VAT, Corporate Tax, Free Zone compliance' },
              { flag: '\u{1F1FA}\u{1F1F8}', country: 'USA', detail: 'Federal & State tax filings, IRS compliance' },
              { flag: '\u{1F1E8}\u{1F1E6}', country: 'Canada', detail: 'CRA filings, GST/HST, payroll compliance' },
              { flag: '\u{1F1EC}\u{1F1E7}', country: 'UK', detail: 'HMRC, VAT, Companies House filings' },
              { flag: '\u{1F1F8}\u{1F1EC}', country: 'Singapore', detail: 'IRAS, GST, ACRA compliance' },
              { flag: '\u{1F1E6}\u{1F1FA}', country: 'Australia', detail: 'ATO, GST, BAS, ASIC compliance' },
            ].map(({ flag, country, detail }) => (
              <div
                key={country}
                className="group flex flex-col items-center rounded-xl border border-primary-200/30 bg-white p-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent-500/40 hover:shadow-lg hover:shadow-primary-500/10"
              >
                <span className="text-4xl">{flag}</span>
                <h3 className="mt-3 font-bold text-primary-900">{country}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-primary-700/60">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-gradient py-10">
        <div className="mx-auto max-w-4xl rounded-xl hero-gradient px-8 py-16 text-center shadow-2xl sm:px-14">
          <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl">Need Help Choosing the Right Service?</h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-100/70">
            Our team of experts is ready to understand your requirements and recommend the best solutions for your business.
          </p>
          <Link
            to="/contact"
            className="mt-10 inline-block bg-accent-500 px-10 py-4 text-sm font-bold uppercase tracking-widest text-primary-900 shadow-lg transition-all duration-300 hover:bg-accent-600 hover:shadow-xl"
          >
            Contact Our Experts
          </Link>
        </div>
      </section>
    </main>
  );
}
