import { Link } from "react-router-dom";
import {
  Shield,
  Award,
  Users,
  Briefcase,
  FileText,
  ClipboardCheck,
  ReceiptText,
  Rocket,
  SearchCheck,
  ChevronRight,
  ArrowRight,
  TrendingUp,
  MapPin,
  CalendarCheck,
  UserCheck,
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
    subtitle: "Highest Professional Standards",
    description:
      "We uphold unwavering transparency, ethical conduct, and accountability in every engagement. Our clients trust us because our commitment to doing the right thing is non-negotiable.",
  },
  {
    icon: Award,
    title: "Passion for Excellence",
    subtitle: "Exceeding Client Expectations",
    description:
      "We go above and beyond to deliver solutions that are thorough, timely, and tailored to each client's unique needs. Mediocrity has no place in our practice.",
  },
  {
    icon: Users,
    title: "Collaborative Growth",
    subtitle: "Continuous Development",
    description:
      "We believe in the power of working together — with our clients, our teams, and the broader community. Diverse perspectives drive innovation and sustainable growth.",
  },
];

const services = [
  {
    icon: Briefcase,
    title: "Business Setup Advisory",
    description: "End-to-end assistance for company incorporation and business structuring in India & UAE.",
  },
  {
    icon: FileText,
    title: "Taxation & Regulatory",
    description: "Comprehensive direct and indirect tax planning, compliance, and representation services.",
  },
  {
    icon: ClipboardCheck,
    title: "Audit & Assurance",
    description: "Statutory, internal, and concurrent audits conducted with rigour and independence.",
  },
  {
    icon: ReceiptText,
    title: "GST Services",
    description: "Registration, return filing, refund claims, and advisory across all GST compliances.",
  },
  {
    icon: Rocket,
    title: "Startup Services",
    description: "From DPIIT registration to funding advisory — everything early-stage ventures need.",
  },
  {
    icon: SearchCheck,
    title: "Forensic Accounting",
    description: "Fraud investigation, dispute advisory, and litigation support backed by data analytics.",
  },
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
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-800 to-primary-900">
        {/* Decorative background shapes */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-accent-500/10 blur-2xl" />
        </div>

        <div className="relative mx-auto flex min-h-[600px] max-w-7xl flex-col items-center justify-center px-6 py-28 text-center lg:py-36">
          <h1 className="animate-fade-in-up max-w-4xl font-serif text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Where Chartered Accountancy Meets Technology
          </h1>

          <p className="animate-fade-in-up animation-delay-200 mt-6 max-w-2xl text-lg leading-relaxed text-primary-200 opacity-0 sm:text-xl">
            Tech-enabled CA firm serving clients across India &amp; UAE with expert accounting, auditing, taxation, and compliance services.
          </p>

          <div className="animate-fade-in-up animation-delay-400 mt-10 flex flex-col gap-4 opacity-0 sm:flex-row">
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent-500 px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-accent-600 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 focus:ring-offset-primary-900"
            >
              Our Services
              <ChevronRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Bottom curved divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            className="relative block h-12 w-full sm:h-16"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,0 C300,120 900,120 1200,0 L1200,120 L0,120 Z"
              className="fill-white"
            />
          </svg>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  WHO WE ARE                                                  */}
      {/* ============================================================ */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            {/* Text column */}
            <div>
              <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-accent-500">
                About Us
              </span>
              <h2 className="font-serif text-3xl font-bold text-primary-900 sm:text-4xl">
                Who We Are
              </h2>
              <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
                <p>
                  <strong className="text-primary-800">SGNG &amp; Associates</strong> is a team of proficient Chartered Accountants headquartered in Delhi, with offices across major Indian cities. We combine deep domain expertise with modern technology to deliver solutions that are accurate, timely, and insightful.
                </p>
                <p>
                  Our comprehensive suite of services spans accounting, auditing, taxation, regulatory compliance, and business setup advisory — empowering businesses of every scale to focus on growth while we handle the numbers.
                </p>
                <p>
                  Serving a diverse clientele across <strong className="text-primary-800">India and the UAE</strong>, we pride ourselves on building lasting relationships founded on trust, transparency, and tangible results.
                </p>
              </div>
              <Link
                to="/about"
                className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 transition hover:text-primary-800"
              >
                Learn more about us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Stats column */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="group flex flex-col items-center rounded-2xl border border-primary-100 bg-primary-50/50 p-8 text-center transition hover:border-primary-300 hover:shadow-lg"
                  >
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary-600 text-white shadow-md transition group-hover:scale-110">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-3xl font-bold text-primary-900 lg:text-4xl">
                      {stat.value}
                    </span>
                    <span className="mt-1 text-sm font-medium text-gray-500">
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
      <section className="bg-gray-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-accent-500">
              Our Values
            </span>
            <h2 className="font-serif text-3xl font-bold text-primary-900 sm:text-4xl">
              Why Choose Us
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Our practice is built on three core pillars that guide every decision we make and every engagement we undertake.
            </p>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  {/* Top accent bar */}
                  <div className="absolute inset-x-0 top-0 h-1 bg-primary-600 transition-all group-hover:h-1.5" />

                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary-50 text-primary-600 transition group-hover:bg-primary-600 group-hover:text-white">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="text-xs font-bold uppercase tracking-widest text-accent-500">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-lg font-semibold text-primary-900">
                    {item.subtitle}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  SERVICES OVERVIEW                                           */}
      {/* ============================================================ */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-accent-500">
              What We Offer
            </span>
            <h2 className="font-serif text-3xl font-bold text-primary-900 sm:text-4xl">
              Our Services
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              A full spectrum of financial and advisory services designed to help businesses stay compliant, optimised, and future-ready.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="group flex items-start gap-5 rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition hover:border-primary-200 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-600 transition group-hover:bg-primary-600 group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-900">
                      {service.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-gray-500">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-8 py-3.5 text-sm font-semibold text-white shadow transition hover:bg-primary-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              View All Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  TEAM TEASER                                                 */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-800 to-primary-900">
        {/* Decorative elements */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-10 left-10 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute -bottom-10 right-10 h-80 w-80 rounded-full bg-accent-500/10 blur-3xl" />
        </div>

        <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 py-20 text-center lg:py-28">
          <TrendingUp className="mb-6 h-10 w-10 text-accent-500" />

          <h2 className="max-w-3xl font-serif text-3xl font-bold text-white sm:text-4xl">
            A Team of Distinguished Professionals
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-primary-200">
            Behind every successful financial strategy is a team that understands the nuances. Our seasoned Chartered Accountants, tax specialists, and advisory professionals deliver expert monetary solutions tailored to your business goals.
          </p>

          <Link
            to="/about/team"
            className="mt-10 inline-flex items-center gap-2 rounded-lg bg-accent-500 px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-accent-600 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 focus:ring-offset-primary-900"
          >
            Meet Our Team
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
