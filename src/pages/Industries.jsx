import { Link } from "react-router-dom";
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
} from "lucide-react";

const industries = [
  {
    name: "Restaurants",
    icon: UtensilsCrossed,
    description:
      "Complete financial management, GST compliance, and inventory accounting for restaurant businesses.",
  },
  {
    name: "Transport",
    icon: Truck,
    description:
      "Specialized accounting, fleet management reporting, and regulatory compliance for transport operators.",
  },
  {
    name: "Travel & Tourism",
    icon: Plane,
    description:
      "Financial planning, foreign exchange management, and tax optimization for travel businesses.",
  },
  {
    name: "Manufacturing",
    icon: Factory,
    description:
      "Cost accounting, inventory valuation, excise compliance, and financial reporting for manufacturers.",
  },
  {
    name: "Forex",
    icon: DollarSign,
    description:
      "Expert handling of foreign exchange transactions, FEMA compliance, and international trade accounting.",
  },
  {
    name: "Malls / Societies",
    icon: Building,
    description:
      "Comprehensive accounting, audit, and compliance services for malls and housing societies.",
  },
  {
    name: "Companies",
    icon: Briefcase,
    description:
      "Full-spectrum corporate accounting, compliance, and advisory services for companies of all sizes.",
  },
  {
    name: "Retail Trading",
    icon: ShoppingCart,
    description:
      "Point-of-sale integration, inventory management, and tax compliance for retail businesses.",
  },
  {
    name: "Banking",
    icon: Landmark,
    description:
      "Specialized audit, regulatory compliance, and financial reporting for banking institutions.",
  },
];

function Industries() {
  return (
    <main>
      {/* Hero Banner */}
      <section className="bg-primary-900 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl">
            Industries We Serve
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
            Specialized expertise across diverse industry verticals
          </p>
        </div>
      </section>

      {/* Industry Cards Grid */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <div
                key={industry.name}
                className="group flex flex-col rounded-xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Icon */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-accent-50 text-accent-500 transition-colors duration-300 group-hover:bg-accent-500 group-hover:text-white">
                  <industry.icon className="h-7 w-7" strokeWidth={1.5} />
                </div>

                {/* Heading */}
                <h3 className="text-xl font-semibold text-primary-900">
                  {industry.name}
                </h3>

                {/* Description */}
                <p className="mt-3 flex-1 leading-relaxed text-gray-600">
                  {industry.description}
                </p>

                {/* Learn More Link */}
                <Link
                  to="/contact"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent-500 transition-colors duration-200 hover:text-accent-600"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="bg-primary-900 py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl">
            Looking for industry-specific solutions?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
            Our team of experts is ready to help you navigate the unique
            challenges of your industry with tailored financial solutions.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-block rounded-lg bg-accent-500 px-8 py-3.5 text-base font-semibold text-white shadow-sm transition-all duration-200 hover:bg-accent-600 hover:shadow-md"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Industries;
