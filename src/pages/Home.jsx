import { Link } from "react-router-dom";
import {
  Shield,
  Award,
  Users,
  Briefcase,
  FileText,
  ClipboardCheck,
  ReceiptText,
  SearchCheck,
  ChevronRight,
  ArrowRight,
  TrendingUp,
  MapPin,
  CalendarCheck,
  UserCheck,
  BookOpen,
  Layers,
  ShieldCheck,
  ClipboardList,
  PackageSearch,
  Calculator,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const stats = [
  { value: "500+", label: "Clients", icon: UserCheck },
  { value: "13+", label: "Services", icon: Briefcase },
  { value: "5", label: "States", icon: MapPin },
  { value: "10+", label: "Years", icon: CalendarCheck },
];

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description:
      "Upholding the highest level of professional standards and reputation for integrity, we platform a culture of transparency and responsibility",
  },
  {
    icon: Award,
    title: "Passion for Excellence",
    description:
      "Utmost expertise and excellence of the services we offer is part of our corporate DNA. We strive to succeed by exceeding client expectations",
  },
  {
    icon: Users,
    title: "Collaborative Growth",
    description:
      "We believe in continuous development and collaborative growth. Capitalizing from our cultural and ideological diversity",
  },
];

const services = [
  { icon: FileText, title: "Taxation & Regulatory Services" },
  { icon: ClipboardCheck, title: "Audit & Assurance Services" },
  { icon: Layers, title: "Non-Core Process Outsourcing" },
  { icon: SearchCheck, title: "Forensic Accounting and Fraud Detection" },
  { icon: ReceiptText, title: "GST Related Services" },
  { icon: BookOpen, title: "IND-AS Implementation" },
  { icon: ShieldCheck, title: "Internal Financial Controls (IFC)" },
  { icon: ClipboardList, title: "Internal Audit" },
  { icon: Calculator, title: "Book Keeping & Accounting Services" },
  { icon: PackageSearch, title: "Physical Verification" },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function Home() {
  return (
    <main>
      {/* ============================================================ */}
      {/*  HERO                                                        */}
      {/* ============================================================ */}
      <section className="hero-gradient relative overflow-hidden">
        {/* Decorative gold accent shapes */}
        <div className="pointer-events-none absolute inset-0">
          {/* Large glowing orb top-right */}
          <div className="absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-accent-500/8 blur-3xl" />
          {/* Subtle orb bottom-left */}
          <div className="absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-accent-500/6 blur-3xl" />
          {/* Small gold accent circle */}
          <div className="absolute top-1/4 right-1/4 h-40 w-40 rounded-full bg-accent-500/5 blur-2xl" />
          {/* Thin gold line accents */}
          <div className="absolute top-20 left-1/3 h-px w-48 bg-gradient-to-r from-transparent via-accent-500/30 to-transparent" />
          <div className="absolute bottom-32 right-1/3 h-px w-64 bg-gradient-to-r from-transparent via-accent-500/20 to-transparent" />
          {/* Corner diamond accents */}
          <div className="absolute top-16 left-16 h-2 w-2 rotate-45 bg-accent-500/40" />
          <div className="absolute top-16 right-16 h-2 w-2 rotate-45 bg-accent-500/40" />
          <div className="absolute bottom-28 left-24 h-1.5 w-1.5 rotate-45 bg-accent-500/30" />
          <div className="absolute bottom-28 right-24 h-1.5 w-1.5 rotate-45 bg-accent-500/30" />
        </div>

        <div className="relative mx-auto flex min-h-[700px] max-w-7xl flex-col items-center justify-center px-6 py-32 text-center lg:min-h-[780px] lg:py-40">
          {/* Tagline */}
          <p className="animate-fade-in-up mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-accent-500">
            Serving Globally...
          </p>

          {/* Firm name */}
          <h1 className="animate-fade-in-up gold-shimmer font-serif text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
            SGNG &amp; Associates
          </h1>

          {/* Designation */}
          <p className="animate-fade-in-up animation-delay-200 mt-4 font-serif text-xl font-light tracking-widest text-white/90 opacity-0 sm:text-2xl lg:text-3xl">
            Chartered Accountants
          </p>

          {/* Decorative divider */}
          <div className="animate-fade-in-up animation-delay-200 mt-8 flex items-center gap-4 opacity-0">
            <span className="block h-px w-12 bg-accent-500/50 sm:w-20" />
            <span className="block h-1.5 w-1.5 rotate-45 bg-accent-500" />
            <span className="block h-px w-12 bg-accent-500/50 sm:w-20" />
          </div>

          {/* Subtext */}
          <p className="animate-fade-in-up animation-delay-400 mt-8 max-w-2xl text-lg leading-relaxed text-primary-100/80 opacity-0 sm:text-xl">
            Providing a comprehensive range of financial services
          </p>

          {/* CTA buttons */}
          <div className="animate-fade-in-up animation-delay-600 mt-12 flex flex-col gap-5 opacity-0 sm:flex-row">
            <Link
              to="/services"
              className="group inline-flex items-center justify-center gap-2.5 rounded-none bg-accent-500 px-10 py-4 text-sm font-bold uppercase tracking-widest text-primary-900 shadow-lg shadow-accent-500/20 transition-all duration-300 hover:bg-accent-600 hover:shadow-xl hover:shadow-accent-500/30 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 focus:ring-offset-primary-900"
            >
              Our Services
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2.5 rounded-none border border-accent-500/40 px-10 py-4 text-sm font-bold uppercase tracking-widest text-accent-500 backdrop-blur-sm transition-all duration-300 hover:border-accent-500 hover:bg-accent-500/10 focus:outline-none focus:ring-2 focus:ring-accent-500/50"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Bottom elegant divider */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg
            className="relative block h-16 w-full sm:h-20"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z"
              fill="#FFF8DC"
            />
          </svg>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  WHO WE ARE                                                  */}
      {/* ============================================================ */}
      <section className="section-gradient relative py-24 lg:py-32">
        {/* Subtle background pattern */}
        <div className="pointer-events-none absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 h-60 w-60 rounded-full border border-primary-500/30" />
          <div className="absolute bottom-10 left-10 h-40 w-40 rounded-full border border-primary-500/20" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6">
          {/* Section header */}
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="block h-px w-10 bg-accent-500/60" />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-accent-600">
                About Us
              </span>
              <span className="block h-px w-10 bg-accent-500/60" />
            </div>
            <h2 className="font-serif text-4xl font-bold text-primary-900 sm:text-5xl">
              Who We Are
            </h2>
          </div>

          <div className="grid items-center gap-16 lg:grid-cols-5">
            {/* Text column */}
            <div className="lg:col-span-3">
              <p className="text-lg leading-relaxed text-primary-700">
                We are a team of proficient and dedicated chartered accountants
                based in{" "}
                <strong className="font-semibold text-primary-900">
                  New Delhi
                </strong>{" "}
                as well as other major cities in India. We typically handle all
                the branches of accounting and auditing including accounts
                outsourcing, Business taxation, corporate compliance, company
                formation in India, starting a business in India, registration
                of foreign companies, taxation of expatriates, etc.
              </p>
              {/* Decorative bottom line */}
              <div className="mt-8 flex items-center gap-3">
                <span className="block h-px w-16 bg-accent-500/40" />
                <span className="block h-1 w-1 rotate-45 bg-accent-500/60" />
              </div>
            </div>

            {/* Stats column */}
            <div className="grid grid-cols-2 gap-5 lg:col-span-2">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="group relative flex flex-col items-center overflow-hidden rounded-sm border border-primary-200/60 bg-white/70 p-8 text-center backdrop-blur-sm transition-all duration-300 hover:border-accent-500/40 hover:shadow-lg hover:shadow-primary-500/5"
                  >
                    {/* Gold top accent */}
                    <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-accent-500 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="mb-3 flex h-10 w-10 items-center justify-center text-primary-400 transition-colors group-hover:text-accent-600">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-serif text-3xl font-bold text-accent-600 lg:text-4xl">
                      {stat.value}
                    </span>
                    <span className="mt-2 text-xs font-semibold uppercase tracking-widest text-primary-500">
                      {stat.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  WHY CHOOSE US                                               */}
      {/* ============================================================ */}
      <section className="relative bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          {/* Section header */}
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="block h-px w-10 bg-accent-500/60" />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-accent-600">
                Our Values
              </span>
              <span className="block h-px w-10 bg-accent-500/60" />
            </div>
            <h2 className="font-serif text-4xl font-bold text-primary-900 sm:text-5xl">
              Why Choose Us
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-primary-600/70">
              Our practice is built on three core pillars that guide every
              decision we make and every engagement we undertake.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group relative overflow-hidden border border-primary-100 bg-white p-10 transition-all duration-500 hover:bg-primary-50/50 hover:shadow-xl hover:shadow-primary-500/5"
                >
                  {/* Gold top border */}
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent-500 via-accent-600 to-accent-500" />

                  {/* Icon */}
                  <div className="mb-6 flex h-14 w-14 items-center justify-center border border-primary-200 bg-primary-50 text-primary-500 transition-all duration-300 group-hover:border-accent-500/30 group-hover:bg-primary-100">
                    <Icon className="h-6 w-6" />
                  </div>

                  {/* Title */}
                  <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-primary-800">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-primary-600/80">
                    {item.description}
                  </p>

                  {/* Bottom accent line on hover */}
                  <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent-500/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  OUR SERVICES                                                */}
      {/* ============================================================ */}
      <section className="section-gradient relative py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          {/* Section header */}
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="block h-px w-10 bg-accent-500/60" />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-accent-600">
                What We Offer
              </span>
              <span className="block h-px w-10 bg-accent-500/60" />
            </div>
            <h2 className="font-serif text-4xl font-bold text-primary-900 sm:text-5xl">
              Our Services
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-primary-600/70">
              A full spectrum of financial and advisory services designed to help
              businesses stay compliant, optimised, and future-ready.
            </p>
          </div>

          {/* Services grid */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  to="/services"
                  key={service.title}
                  className="group relative flex flex-col items-center overflow-hidden border border-primary-200/50 bg-white/80 p-7 text-center backdrop-blur-sm transition-all duration-300 hover:border-accent-500/30 hover:bg-white hover:shadow-lg hover:shadow-primary-500/5"
                >
                  {/* Top gold line */}
                  <div className="absolute inset-x-0 top-0 h-0.5 bg-accent-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="mb-4 flex h-12 w-12 items-center justify-center border border-primary-200/60 bg-primary-50 text-primary-500 transition-all duration-300 group-hover:border-accent-500/40 group-hover:text-accent-600">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="text-xs font-semibold uppercase leading-snug tracking-wider text-primary-800 transition-colors group-hover:text-primary-900">
                    {service.title}
                  </h3>

                  <ArrowRight className="mt-3 h-3.5 w-3.5 text-accent-500 opacity-0 transition-all duration-300 group-hover:opacity-100" />
                </Link>
              );
            })}
          </div>

          {/* View All button */}
          <div className="mt-14 text-center">
            <Link
              to="/services"
              className="group inline-flex items-center gap-2.5 border border-primary-500 bg-primary-500 px-10 py-4 text-sm font-bold uppercase tracking-widest text-white transition-all duration-300 hover:bg-primary-600 hover:shadow-lg hover:shadow-primary-500/20 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              View All Services
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  TEAM TEASER                                                 */}
      {/* ============================================================ */}
      <section className="hero-gradient relative overflow-hidden">
        {/* Decorative elements */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-20 -left-20 h-80 w-80 rounded-full bg-accent-500/6 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-accent-500/8 blur-3xl" />
          {/* Fine horizontal lines */}
          <div className="absolute top-1/3 left-0 h-px w-full bg-gradient-to-r from-transparent via-accent-500/10 to-transparent" />
          <div className="absolute top-2/3 left-0 h-px w-full bg-gradient-to-r from-transparent via-accent-500/8 to-transparent" />
          {/* Corner accents */}
          <div className="absolute top-12 left-12 h-16 w-px bg-gradient-to-b from-accent-500/30 to-transparent" />
          <div className="absolute top-12 left-12 h-px w-16 bg-gradient-to-r from-accent-500/30 to-transparent" />
          <div className="absolute bottom-12 right-12 h-16 w-px bg-gradient-to-t from-accent-500/30 to-transparent" />
          <div className="absolute bottom-12 right-12 h-px w-16 bg-gradient-to-l from-accent-500/30 to-transparent" />
        </div>

        <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center lg:py-32">
          {/* Icon */}
          <div className="mb-8 flex h-16 w-16 items-center justify-center border border-accent-500/30 bg-accent-500/10">
            <TrendingUp className="h-7 w-7 text-accent-500" />
          </div>

          {/* Heading */}
          <h2 className="max-w-3xl font-serif text-4xl font-bold text-white sm:text-5xl">
            A Team of Distinguished Pros
          </h2>

          {/* Decorative divider */}
          <div className="mt-6 flex items-center gap-4">
            <span className="block h-px w-12 bg-accent-500/40 sm:w-16" />
            <span className="block h-1.5 w-1.5 rotate-45 bg-accent-500" />
            <span className="block h-px w-12 bg-accent-500/40 sm:w-16" />
          </div>

          {/* Body text */}
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-primary-100/75">
            We provide an all-inclusive agglomeration of specially designed and
            multidisciplinary expert services that meet the requirements of every
            single need of our clients. Our company of Chartered Accountants
            constitutes a group of expert skill set that is equipped to provide
            excellent monetary solutions and counsel. We are defined by our drive
            to make a difference. Good isn&apos;t the best. We aim for the skies
            at whatever we do &ndash; from helping businesses understand their
            true potential to magnifying their profits.
          </p>

          {/* CTA button */}
          <Link
            to="/about/team"
            className="group mt-12 inline-flex items-center gap-2.5 bg-accent-500 px-10 py-4 text-sm font-bold uppercase tracking-widest text-primary-900 shadow-lg shadow-accent-500/20 transition-all duration-300 hover:bg-accent-600 hover:shadow-xl hover:shadow-accent-500/30 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 focus:ring-offset-primary-900"
          >
            Meet Our Team
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
