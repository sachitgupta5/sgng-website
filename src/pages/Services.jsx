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
      'As entry strategy specialists, we understand that setting up business in a complex Indian jurisdiction can be challenging. With over a decade of experience, our project management service supports every stage of your business setting up.',
    color: 'bg-blue-100 text-blue-600',
  },
  {
    title: 'Transaction Advisory',
    icon: ArrowRightLeft,
    description:
      'Expert M&A, due diligence, and deal structuring services.',
    color: 'bg-emerald-100 text-emerald-600',
  },
  {
    title: 'Taxation & Regulatory Services',
    icon: FileText,
    description:
      'Comprehensive tax planning, compliance, and regulatory advisory.',
    color: 'bg-amber-100 text-amber-600',
  },
  {
    title: 'Audit & Assurance Services',
    icon: ClipboardCheck,
    description:
      'Statutory audits, internal audits, and assurance services.',
    color: 'bg-violet-100 text-violet-600',
  },
  {
    title: 'Non-Core Process Outsourcing',
    icon: Settings,
    description:
      'Outsourcing of accounting, payroll, and administrative functions.',
    color: 'bg-rose-100 text-rose-600',
  },
  {
    title: 'Forensic Accounting and Fraud Detection',
    icon: Search,
    description:
      'Fraud investigation, forensic audits, and financial crime detection.',
    color: 'bg-red-100 text-red-600',
  },
  {
    title: 'GST Related Services',
    icon: Receipt,
    description:
      'GST registration, compliance, return filing, and advisory.',
    color: 'bg-teal-100 text-teal-600',
  },
  {
    title: 'IND-AS Implementation',
    icon: BookOpen,
    description:
      'Indian Accounting Standards implementation and compliance.',
    color: 'bg-indigo-100 text-indigo-600',
  },
  {
    title: 'Internal Financial Controls (IFC)',
    icon: ShieldCheck,
    description:
      'Designing and implementing robust internal control systems.',
    color: 'bg-sky-100 text-sky-600',
  },
  {
    title: 'Internal Audit',
    icon: Eye,
    description:
      'Risk-based internal audits and process improvement.',
    color: 'bg-orange-100 text-orange-600',
  },
  {
    title: 'Book Keeping & Accounting Services',
    icon: Calculator,
    description:
      'Day-to-day bookkeeping, financial statements, and MIS reporting.',
    color: 'bg-cyan-100 text-cyan-600',
  },
  {
    title: 'Physical Verification',
    icon: Package,
    description:
      'Fixed asset verification, inventory audits, and stock verification.',
    color: 'bg-lime-100 text-lime-600',
  },
  {
    title: 'Startup Services',
    icon: Rocket,
    description:
      'End-to-end support for startups including compliance, funding, and advisory.',
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
