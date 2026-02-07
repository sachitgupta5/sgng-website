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
} from 'lucide-react';

const services = [
  {
    title: 'Business Setup Advisory',
    icon: Building2,
    description:
      'Expert guidance for company formation, registration, and compliance setup across India and UAE.',
    color: 'bg-blue-100 text-blue-600',
  },
  {
    title: 'Transaction Advisory',
    icon: ArrowRightLeft,
    description:
      'Strategic advisory for mergers, acquisitions, valuations, and due diligence processes.',
    color: 'bg-emerald-100 text-emerald-600',
  },
  {
    title: 'Taxation & Regulatory Services',
    icon: FileText,
    description:
      'Comprehensive tax planning, compliance, and regulatory advisory for direct and indirect taxes.',
    color: 'bg-amber-100 text-amber-600',
  },
  {
    title: 'Audit & Assurance Services',
    icon: ClipboardCheck,
    description:
      'Statutory audit, internal audit, and assurance services ensuring financial integrity.',
    color: 'bg-violet-100 text-violet-600',
  },
  {
    title: 'Non-Core Process Outsourcing',
    icon: Settings,
    description:
      'Outsource non-core functions to focus on your business growth and core competencies.',
    color: 'bg-rose-100 text-rose-600',
  },
  {
    title: 'Forensic Accounting & Fraud Detection',
    icon: Search,
    description:
      'Specialized investigation services for fraud detection, prevention, and dispute resolution.',
    color: 'bg-red-100 text-red-600',
  },
  {
    title: 'GST Related Services',
    icon: Receipt,
    description:
      'Complete GST compliance including registration, returns, refunds, and advisory services.',
    color: 'bg-teal-100 text-teal-600',
  },
  {
    title: 'IND-AS Implementation',
    icon: BookOpen,
    description:
      'Seamless transition to Indian Accounting Standards with expert implementation support.',
    color: 'bg-indigo-100 text-indigo-600',
  },
  {
    title: 'Internal Financial Controls (IFC)',
    icon: ShieldCheck,
    description:
      'Design and implementation of robust internal financial control frameworks.',
    color: 'bg-sky-100 text-sky-600',
  },
  {
    title: 'Internal Audit',
    icon: Eye,
    description:
      'Risk-based internal audit services to strengthen governance and operational efficiency.',
    color: 'bg-orange-100 text-orange-600',
  },
  {
    title: 'Book Keeping & Accounting Services',
    icon: Calculator,
    description:
      'Accurate and timely bookkeeping, accounting, and financial reporting services.',
    color: 'bg-cyan-100 text-cyan-600',
  },
  {
    title: 'Physical Verification',
    icon: Package,
    description:
      'Systematic physical verification of assets, inventory, and fixed assets.',
    color: 'bg-lime-100 text-lime-600',
  },
  {
    title: 'Startup Services',
    icon: Rocket,
    description:
      'End-to-end support for startups including incorporation, funding advisory, and compliance.',
    color: 'bg-fuchsia-100 text-fuchsia-600',
  },
];

function ServiceCard({ title, icon: Icon, description, color }) {
  return (
    <div
      className="group flex flex-col rounded-2xl border border-gray-200 bg-white p-6
                 shadow-sm transition-all duration-300
                 hover:border-blue-300 hover:shadow-lg hover:-translate-y-1"
    >
      {/* Icon */}
      <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-full ${color}`}>
        <Icon className="h-7 w-7" />
      </div>

      {/* Title */}
      <h3 className="mb-3 text-xl font-semibold text-gray-900">{title}</h3>

      {/* Description */}
      <p className="mb-6 flex-1 text-gray-600 leading-relaxed">{description}</p>

      {/* Learn More link */}
      <Link
        to="/contact"
        className="inline-flex items-center gap-1 text-sm font-medium text-blue-600
                   transition-colors duration-200 hover:text-blue-800"
      >
        Learn More
        <span
          className="inline-block transition-transform duration-200
                     group-hover:translate-x-1"
        >
          &rarr;
        </span>
      </Link>
    </div>
  );
}

function Services() {
  return (
    <main>
      {/* ---- Hero Banner ---- */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Our Services</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-200">
            Comprehensive professional services for your business needs
          </p>
        </div>
      </section>

      {/* ---- Services Grid ---- */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className="grid grid-cols-1 gap-8
                       md:grid-cols-2
                       lg:grid-cols-3"
          >
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* ---- CTA Section ---- */}
      <section className="bg-white py-16 sm:py-20">
        <div
          className="mx-auto max-w-4xl rounded-2xl bg-gradient-to-r from-blue-900 to-blue-700
                     px-6 py-14 text-center shadow-xl sm:px-12"
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Need Help Choosing the Right Service?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-blue-200">
            Our team of experts is ready to understand your requirements and recommend the
            best solutions for your business.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-block rounded-lg bg-white px-8 py-3 text-lg font-semibold
                       text-blue-900 shadow transition-all duration-300
                       hover:bg-blue-50 hover:shadow-lg hover:-translate-y-0.5"
          >
            Contact Our Experts
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Services;
