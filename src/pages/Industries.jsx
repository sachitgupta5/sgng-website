import { Link } from 'react-router-dom';
import usePageMeta from '../hooks/usePageMeta';
import {
  UtensilsCrossed,
  Truck,
  Plane,
  Factory,
  DollarSign,
  Building,
  Briefcase,
  ShoppingCart,
  Landmark,
  ArrowRight,
} from 'lucide-react';

const industries = [
  {
    name: 'Restaurants',
    icon: UtensilsCrossed,
    description:
      'Specialized accounting and compliance for restaurant chains and food businesses.',
  },
  {
    name: 'Transport',
    icon: Truck,
    description: 'Tax planning and regulatory services for logistics and transport companies.',
  },
  {
    name: 'Travel & Tourism',
    icon: Plane,
    description: 'Financial advisory for travel agencies, tour operators, and hospitality.',
  },
  {
    name: 'Manufacturing',
    icon: Factory,
    description: 'Comprehensive solutions for manufacturing units and industrial enterprises.',
  },
  {
    name: 'Forex',
    icon: DollarSign,
    description: 'Regulatory compliance and advisory for foreign exchange businesses.',
  },
  {
    name: 'Malls / Societies',
    icon: Building,
    description:
      'Facility management accounting and compliance for malls and housing societies.',
  },
  {
    name: 'Companies',
    icon: Briefcase,
    description: 'Corporate advisory, compliance, and secretarial services.',
  },
  {
    name: 'Retail Trading',
    icon: ShoppingCart,
    description: 'Accounting and tax solutions for retail businesses.',
  },
  {
    name: 'Banking',
    icon: Landmark,
    description: 'Specialized services for banking and financial institutions.',
  },
];

function Industries() {
  usePageMeta("Industries We Serve", "SGNG & Associates serves restaurants, transport, travel, manufacturing, forex, retail, banking, and more with tailored financial solutions.");
  return (
    <main>
      {/* Hero */}
      <section className="hero-gradient py-12 text-center lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-accent-500">
            Sectors We Serve
          </p>
          <h1 className="font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Industries We Serve
          </h1>
          <div className="mx-auto mt-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-accent-500/40" />
            <span className="h-1.5 w-1.5 rotate-45 bg-accent-500" />
            <span className="h-px w-10 bg-accent-500/40" />
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-100/80">
            Specialized expertise across diverse industry verticals
          </p>
        </div>
      </section>

      {/* Industry Cards */}
      <section className="section-gradient py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <div
                key={industry.name}
                className="group flex flex-col rounded-xl border border-primary-200/30 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent-500/40 hover:shadow-lg hover:shadow-primary-500/10"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary-50 text-primary-500 transition-all duration-300 group-hover:bg-accent-500 group-hover:text-white group-hover:shadow-lg group-hover:shadow-accent-500/20">
                  <industry.icon className="h-7 w-7" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-primary-900">{industry.name}</h3>
                <p className="mt-3 flex-1 leading-relaxed text-primary-700/70">
                  {industry.description}
                </p>
                <Link
                  to="/contact"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent-600 transition-all duration-200 group-hover:gap-3"
                >
                  Get in Touch
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient py-8 sm:py-12">
        <div className="mx-auto max-w-4xl px-8 text-center">
          <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl">
            Looking for industry-specific solutions?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-100/70">
            Our team of experts is ready to help you navigate the unique challenges of your industry
            with tailored financial solutions.
          </p>
          <Link
            to="/contact"
            className="mt-10 inline-block bg-accent-500 px-10 py-4 text-sm font-bold uppercase tracking-widest text-primary-900 shadow-lg transition-all duration-300 hover:bg-accent-600 hover:shadow-xl"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Industries;
