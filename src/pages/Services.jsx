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
    title: 'IND-AS Implementation',
    slug: 'ind-as-implementation',
    icon: BookOpen,
    description: 'Indian Accounting Standards implementation and first-time adoption.',
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
      <section className="hero-gradient py-28 text-center lg:py-36">
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

      <section className="section-gradient py-20 sm:py-28">
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

      <section className="bg-white py-20">
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
