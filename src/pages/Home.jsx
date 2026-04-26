import { useRef, useEffect, useState } from "react";
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
  MapPin,
  CalendarCheck,
  UserCheck,
  Cpu,
  ShieldCheck,
  ClipboardList,
  PackageSearch,
  Calculator,
  Building2,
  Rocket,
  Settings,
  ArrowRightLeft,
  Globe,
  Phone,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const stats = [
  { value: "500+", label: "Clients Served",    icon: UserCheck  },
  { value: "13+",  label: "Service Areas",     icon: Briefcase  },
  { value: "7",    label: "Countries",         icon: MapPin     },
  { value: "10+",  label: "Years of Practice", icon: CalendarCheck },
];

const services = [
  { icon: Building2,     title: "Business Setup Advisory",               slug: "business-setup-advisory"         },
  { icon: ArrowRightLeft,title: "Transaction Advisory",                  slug: "transaction-advisory"            },
  { icon: FileText,      title: "Taxation & Regulatory Services",        slug: "taxation-regulatory-services"    },
  { icon: ClipboardCheck,title: "Audit & Assurance Services",            slug: "audit-assurance-services"        },
  { icon: Settings,      title: "Non-Core Process Outsourcing",          slug: "non-core-process-outsourcing"    },
  { icon: SearchCheck,   title: "Forensic Accounting & Fraud Detection", slug: "forensic-accounting"             },
  { icon: ReceiptText,   title: "GST Related Services",                  slug: "gst-related-services"            },
  { icon: Cpu,           title: "Business Automation & AI Advisory",     slug: "business-automation-ai-advisory" },
  { icon: ShieldCheck,   title: "Internal Financial Controls (IFC)",     slug: "internal-financial-controls"     },
  { icon: ClipboardList, title: "Internal Audit",                        slug: "internal-audit"                  },
  { icon: Calculator,    title: "Book Keeping & Accounting Services",    slug: "book-keeping-accounting"         },
  { icon: Rocket,        title: "Startup Services",                      slug: "startup-services"                },
];

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description:
      "Upholding the highest level of professional standards and transparency — we build every client relationship on unwavering trust.",
  },
  {
    icon: Award,
    title: "Passion for Excellence",
    description:
      "Utmost expertise in every engagement is part of our DNA. We strive to succeed by consistently exceeding client expectations.",
  },
  {
    icon: Users,
    title: "Collaborative Growth",
    description:
      "We believe in continuous development and shared success, capitalizing on cultural and ideological diversity to deliver superior outcomes.",
  },
];

const countries = [
  { name: "India",     note: "Pan-India presence across 5 states"       },
  { name: "UAE",       note: "VAT, Corporate Tax, Free Zone compliance" },
  { name: "USA",       note: "Federal & State tax, IRS compliance"      },
  { name: "Canada",    note: "CRA filings, GST/HST, payroll"           },
  { name: "UK",        note: "HMRC, VAT, Companies House filings"       },
  { name: "Singapore", note: "IRAS, GST, ACRA compliance"               },
  { name: "Australia", note: "ATO, GST, BAS, ASIC compliance"           },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function Home() {
  const servicesRef = useRef(null);
  const [servicesVisible, setServicesVisible] = useState(false);

  useEffect(() => {
    const el = servicesRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setServicesVisible(true); observer.disconnect(); } },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <main>

      {/* ============================================================ */}
      {/*  HERO                                                        */}
      {/* ============================================================ */}
      <section className="hero-gradient relative overflow-hidden">

        {/* Animated background grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,215,0,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,215,0,0.6) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Floating decorative orbs */}
        <div className="pointer-events-none absolute inset-0">
          <div className="animate-float absolute -top-24 -right-24 h-[420px] w-[420px] rounded-full bg-accent-500/10 blur-3xl" />
          <div className="animate-float-slow absolute -bottom-16 -left-16 h-80 w-80 rounded-full bg-accent-500/8 blur-3xl" />
          <div className="animate-float absolute top-1/3 right-1/4 h-48 w-48 rounded-full bg-accent-500/5 blur-2xl" />

          {/* Corner bracket accents */}
          <div className="absolute top-20 left-20 h-12 w-px bg-gradient-to-b from-accent-500/50 to-transparent" />
          <div className="absolute top-20 left-20 h-px w-12 bg-gradient-to-r from-accent-500/50 to-transparent" />
          <div className="absolute top-20 right-20 h-12 w-px bg-gradient-to-b from-accent-500/50 to-transparent" />
          <div className="absolute top-20 right-20 h-px w-12 bg-gradient-to-l from-accent-500/50 to-transparent" />
          <div className="absolute bottom-24 left-20 h-12 w-px bg-gradient-to-t from-accent-500/30 to-transparent" />
          <div className="absolute bottom-24 left-20 h-px w-12 bg-gradient-to-r from-accent-500/30 to-transparent" />
          <div className="absolute bottom-24 right-20 h-12 w-px bg-gradient-to-t from-accent-500/30 to-transparent" />
          <div className="absolute bottom-24 right-20 h-px w-12 bg-gradient-to-l from-accent-500/30 to-transparent" />

          {/* Rotating ring */}
          <div className="animate-spin-slow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full border border-accent-500/5" />
          <div className="animate-spin-slow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] rounded-full border border-accent-500/3" style={{ animationDirection: "reverse", animationDuration: "25s" }} />

          {/* Diamond accents */}
          <div className="absolute top-1/4 left-12 h-1.5 w-1.5 rotate-45 bg-accent-500/40" />
          <div className="absolute top-1/3 right-16 h-2 w-2 rotate-45 bg-accent-500/30" />
          <div className="absolute bottom-1/3 left-24 h-1 w-1 rotate-45 bg-accent-500/40" />
        </div>

        <div className="relative mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl flex-col items-center justify-center px-6 py-24 text-center">

          {/* Brand label */}
          <div className="animate-fade-in-up mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-accent-500/50" />
            <p className="gold-shimmer text-sm font-bold uppercase tracking-[0.3em] sm:text-base">
              SGNG &amp; Associates
            </p>
            <span className="h-px w-8 bg-accent-500/50" />
          </div>

          {/* Value proposition headline */}
          <h1 className="animate-fade-in-up font-serif text-4xl font-bold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            Expert Financial Solutions <br className="hidden sm:block" />
            <span className="gold-shimmer">Trusted Across 7 Nations</span>
          </h1>

          {/* Designation */}
          <p className="animate-fade-in-up animation-delay-200 mt-5 font-serif text-lg font-light tracking-[0.2em] text-white/60 opacity-0 sm:text-xl">
            Chartered Accountants &bull; Serving Globally
          </p>

          {/* Decorative rule */}
          <div className="animate-fade-in-up animation-delay-400 mt-8 flex items-center gap-5 opacity-0">
            <span className="block h-px w-16 bg-gradient-to-r from-transparent to-accent-500/60 sm:w-24" />
            <span className="block h-2 w-2 rotate-45 bg-accent-500" />
            <span className="block h-px w-16 bg-gradient-to-l from-transparent to-accent-500/60 sm:w-24" />
          </div>

          {/* Supporting text */}
          <p className="animate-fade-in-up animation-delay-400 mt-8 max-w-2xl text-lg leading-relaxed text-primary-100/75 opacity-0">
            Tax, audit, compliance, and business advisory for enterprises across
            India, UAE, USA, Canada, UK, Singapore &amp; Australia.
          </p>

          {/* CTAs */}
          <div className="animate-fade-in-up animation-delay-600 mt-12 flex flex-col items-center gap-4 opacity-0 sm:flex-row">
            <Link
              to="/services"
              className="group inline-flex items-center gap-2.5 bg-accent-500 px-10 py-4 text-sm font-bold uppercase tracking-widest text-primary-900 shadow-lg shadow-accent-500/25 transition-all duration-300 hover:bg-accent-600 hover:shadow-xl hover:shadow-accent-500/35 hover:gap-3.5"
            >
              Our Services
              <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2.5 border border-white/25 px-10 py-4 text-sm font-bold uppercase tracking-widest text-white/90 transition-all duration-300 hover:border-accent-500/60 hover:bg-white/5 hover:text-white"
            >
              <Phone className="h-4 w-4" />
              Get In Touch
            </Link>
          </div>

          {/* Scroll hint */}
          <div className="animate-fade-in-up animation-delay-1000 absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0">
            <div className="flex flex-col items-center gap-1.5">
              <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/30">Scroll</span>
              <div className="h-8 w-px bg-gradient-to-b from-accent-500/40 to-transparent" />
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg className="block h-12 w-full sm:h-16" viewBox="0 0 1200 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,40 C200,80 400,0 600,40 C800,80 1000,0 1200,40 L1200,80 L0,80 Z" fill="#FFF8DC" />
          </svg>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  STATS RIBBON                                                */}
      {/* ============================================================ */}
      <section className="section-gradient py-0">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 divide-x divide-primary-200/40 border-x border-primary-200/40 lg:grid-cols-4">
            {stats.map(({ value, label, icon: Icon }) => (
              <div
                key={label}
                className="group flex flex-col items-center gap-1 py-8 text-center transition-colors duration-300 hover:bg-white/60"
              >
                <Icon className="mb-1 h-5 w-5 text-primary-300 transition-colors group-hover:text-accent-600" />
                <span className="font-serif text-4xl font-bold text-accent-600 lg:text-5xl">{value}</span>
                <span className="text-[11px] font-semibold uppercase tracking-widest text-primary-500/70">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  WHO WE ARE                                                  */}
      {/* ============================================================ */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-14 lg:grid-cols-2">

            {/* Left — text */}
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-accent-500/60" />
                <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent-600">About Us</span>
              </div>
              <h2 className="font-serif text-4xl font-bold leading-tight text-primary-900 sm:text-5xl">
                Who We Are
              </h2>
              <div className="mt-3 h-px w-20 bg-gradient-to-r from-accent-500 to-transparent" />
              <p className="mt-6 text-lg leading-relaxed text-primary-700/80">
                We are a team of proficient and dedicated chartered accountants based in{" "}
                <strong className="font-semibold text-primary-900">New Delhi</strong>, with
                presence across India's major cities. We handle all branches of accounting and
                auditing — accounts outsourcing, business taxation, corporate compliance, company
                formation, and registration of foreign companies.
              </p>
              <p className="mt-4 leading-relaxed text-primary-700/70">
                Our firm blends deep domain expertise with modern technology to deliver faster,
                smarter, and more insightful financial services to every client we serve.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <Link
                  to="/about/vision"
                  className="group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary-500 transition-all duration-200 hover:text-accent-600 hover:gap-3"
                >
                  Our Vision &amp; Mission
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Right — pull-quote card */}
            <div className="relative">
              {/* Background accent */}
              <div className="absolute -inset-4 bg-gradient-to-br from-accent-500/5 to-primary-500/5 blur-2xl" />
              <div className="relative border-l-4 border-accent-500 bg-primary-50/60 p-8 shadow-sm">
                {/* Large quote mark */}
                <div className="font-serif text-7xl leading-none text-accent-500/20 select-none">&ldquo;</div>
                <p className="mt-2 font-serif text-xl font-medium italic leading-relaxed text-primary-800 sm:text-2xl">
                  Seeing invisible,<br />achieving impossible.
                </p>
                <div className="mt-6 h-px bg-gradient-to-r from-accent-500/40 to-transparent" />
                <p className="mt-4 font-serif text-base italic text-primary-600/70">
                  Let ideas transform into innovation.
                </p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-accent-600">
                  — SGNG &amp; Associates
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  OUR SERVICES — Glass cards with slide-in entrance            */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        {/* Dark background */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900 via-[#2a1506] to-primary-900" />

        {/* Ambient glow orbs */}
        <div className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-accent-500/[0.04] blur-[120px] animate-glow-pulse" />
        <div className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-primary-500/[0.06] blur-[120px] animate-glow-pulse animation-delay-800" />
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-accent-600/[0.03] blur-[150px]" />

        {/* Subtle grid pattern */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,215,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,215,0,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6">
          {/* Header — also animated */}
          <div
            className={`mb-14 flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between transition-all duration-1000 ease-out ${
              servicesVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div>
              <div className="mb-3 flex items-center gap-3">
                <span className="h-px w-8 bg-accent-500/40" />
                <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent-500">What We Offer</span>
              </div>
              <h2 className="font-serif text-4xl font-bold text-primary-50 sm:text-5xl">Our Services</h2>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-primary-100/50">
                Comprehensive financial solutions powered by technology, delivered with expertise across borders.
              </p>
            </div>
            <Link
              to="/services"
              className="group shrink-0 inline-flex items-center gap-2 rounded-lg border border-accent-500/20 bg-accent-500/5 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-accent-500 transition-all duration-300 hover:border-accent-500/40 hover:bg-accent-500/10 hover:gap-3"
            >
              View All Services
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Glass-card grid with staggered slide-in */}
          <div ref={servicesRef} className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map(({ icon: Icon, title, slug }, i) => (
              <Link
                key={slug}
                to={`/services/${slug}`}
                className={`glass-card glass-card-shine group relative flex flex-col rounded-xl p-6 card-entrance hover:-translate-y-1 hover:border-accent-500/25 hover:shadow-[0_8px_40px_-8px_rgba(255,215,0,0.15)] ${
                  servicesVisible ? "card-entered" : ""
                }`}
                style={{ "--card-index": i }}
              >
                {/* Icon */}
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-accent-500/10 text-accent-500 ring-1 ring-accent-500/20 transition-all duration-300 group-hover:bg-accent-500/20 group-hover:ring-accent-500/30 group-hover:shadow-[0_0_20px_-4px_rgba(255,215,0,0.3)]">
                  <Icon className="h-5 w-5" />
                </div>

                {/* Title */}
                <h3 className="text-sm font-semibold leading-snug text-primary-50/90 transition-colors duration-300 group-hover:text-primary-50">
                  {title}
                </h3>

                {/* Reveal arrow */}
                <div className="mt-4 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-accent-500/60 transition-all duration-300 group-hover:text-accent-500 group-hover:gap-2.5">
                  Explore <ChevronRight className="h-3 w-3" />
                </div>

                {/* Bottom gold accent line */}
                <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-accent-500/0 to-transparent transition-all duration-500 group-hover:via-accent-500/40" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  GLOBAL PRESENCE                                             */}
      {/* ============================================================ */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-12 text-center">
            <div className="mb-3 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-accent-500/60" />
              <Globe className="h-4 w-4 text-accent-600" />
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent-600">International Reach</span>
              <Globe className="h-4 w-4 text-accent-600" />
              <span className="h-px w-8 bg-accent-500/60" />
            </div>
            <h2 className="font-serif text-4xl font-bold text-primary-900 sm:text-5xl">
              Trusted Across 7 Nations
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-primary-700/70">
              We manage local compliance, taxation, and advisory for businesses operating across these markets.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-7">
            {countries.map(({ name, note }) => (
              <div
                key={name}
                className="group flex flex-col items-center rounded-xl border border-primary-100 bg-primary-50/40 p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-accent-500/40 hover:bg-white hover:shadow-lg hover:shadow-primary-500/8"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-500/10 transition-colors duration-300 group-hover:bg-accent-500/20">
                  <MapPin className="h-5 w-5 text-accent-600" />
                </div>
                <h3 className="mt-3 text-sm font-bold text-primary-900">{name}</h3>
                <p className="mt-1 text-[10px] leading-snug text-primary-600/60">{note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  WHY CHOOSE US                                               */}
      {/* ============================================================ */}
      <section className="section-gradient py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-12 text-center">
            <div className="mb-3 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-accent-500/60" />
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent-600">Our Values</span>
              <span className="h-px w-8 bg-accent-500/60" />
            </div>
            <h2 className="font-serif text-4xl font-bold text-primary-900 sm:text-5xl">Why Choose Us</h2>
            <p className="mx-auto mt-4 max-w-xl text-primary-700/70">
              Three core pillars that guide every decision we make and every engagement we undertake.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {values.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="group relative overflow-hidden border border-primary-200/40 bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-500/8"
              >
                {/* Gold top bar */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent-500 via-accent-600 to-accent-500" />
                {/* Hover background wash */}
                <div className="absolute inset-0 bg-gradient-to-b from-accent-500/3 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center border border-primary-100 bg-primary-50 text-primary-500 transition-all duration-300 group-hover:border-accent-500/40 group-hover:bg-primary-100 group-hover:text-primary-600">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-3 font-serif text-xl font-bold text-primary-900">{title}</h3>
                  <p className="text-sm leading-relaxed text-primary-700/70">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  CTA — GET IN TOUCH                                          */}
      {/* ============================================================ */}
      <section className="hero-gradient relative overflow-hidden py-16 lg:py-24">

        {/* Decorative elements */}
        <div className="pointer-events-none absolute inset-0">
          <div className="animate-float absolute -top-16 -right-16 h-64 w-64 rounded-full bg-accent-500/8 blur-3xl" />
          <div className="animate-float-slow absolute -bottom-12 -left-12 h-56 w-56 rounded-full bg-accent-500/6 blur-3xl" />
          <div className="absolute top-8 left-8 h-10 w-px bg-gradient-to-b from-accent-500/40 to-transparent" />
          <div className="absolute top-8 left-8 h-px w-10 bg-gradient-to-r from-accent-500/40 to-transparent" />
          <div className="absolute bottom-8 right-8 h-10 w-px bg-gradient-to-t from-accent-500/40 to-transparent" />
          <div className="absolute bottom-8 right-8 h-px w-10 bg-gradient-to-l from-accent-500/40 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-4xl px-6 text-center">

          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-accent-500/40" />
            <span className="h-2 w-2 rotate-45 bg-accent-500" />
            <span className="h-px w-10 bg-accent-500/40" />
          </div>

          <h2 className="font-serif text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Ready to Grow <br className="hidden sm:block" />
            <span className="gold-shimmer">Your Business?</span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-primary-100/70">
            Partner with SGNG &amp; Associates for expert financial guidance tailored to your needs
            — from compliance to strategy, we have you covered.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2.5 bg-accent-500 px-10 py-4 text-sm font-bold uppercase tracking-widest text-primary-900 shadow-lg shadow-accent-500/25 transition-all duration-300 hover:bg-accent-600 hover:gap-4 hover:shadow-xl hover:shadow-accent-500/35"
            >
              Contact Our Experts
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 border border-white/25 px-10 py-4 text-sm font-bold uppercase tracking-widest text-white/90 transition-all duration-300 hover:border-accent-500/50 hover:bg-white/5"
            >
              Explore Services
            </Link>
          </div>

          {/* Trust strip */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {["500+ Happy Clients", "10+ Years Experience", "7 Countries", "Fully Certified CA Firm"].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-accent-500" />
                <span className="text-xs font-medium text-white/50">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
