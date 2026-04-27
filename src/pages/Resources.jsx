import { Link } from "react-router-dom";
import {
  ExternalLink,
  BookOpen,
  FileText,
  Scale,
  Building2,
  Globe,
  ArrowRight,
} from "lucide-react";
import usePageMeta from "../hooks/usePageMeta";

const pdicaiLinks = [
  {
    title: "PDICAI Opportunities Portal",
    url: "https://pdicai.org/Opportunities.aspx",
    description:
      "Latest professional opportunities, empanelment notices, and assignments published by the Peer Review Board and ICAI.",
  },
];

const regulatoryResources = [
  {
    title: "Income Tax Department",
    url: "https://www.incometax.gov.in",
    description: "E-filing portal for income tax returns, TDS, and tax-related services.",
    icon: FileText,
  },
  {
    title: "GST Portal",
    url: "https://www.gst.gov.in",
    description: "Official portal for GST registration, returns, refunds, and compliance.",
    icon: Scale,
  },
  {
    title: "Ministry of Corporate Affairs",
    url: "https://www.mca.gov.in",
    description: "Company incorporation, annual filings, LLP registration, and corporate compliance.",
    icon: Building2,
  },
  {
    title: "ICAI – Institute of Chartered Accountants of India",
    url: "https://www.icai.org",
    description: "Professional standards, guidance notes, publications, and member services.",
    icon: BookOpen,
  },
  {
    title: "Reserve Bank of India",
    url: "https://www.rbi.org.in",
    description: "FEMA regulations, forex guidelines, banking circulars, and monetary policy updates.",
    icon: Globe,
  },
  {
    title: "SEBI – Securities and Exchange Board of India",
    url: "https://www.sebi.gov.in",
    description: "Capital market regulations, listing requirements, and investor protection guidelines.",
    icon: Scale,
  },
  {
    title: "DGFT – Directorate General of Foreign Trade",
    url: "https://www.dgft.gov.in",
    description: "Import-export policies, IEC registration, and foreign trade procedures.",
    icon: Globe,
  },
  {
    title: "Startup India",
    url: "https://www.startupindia.gov.in",
    description: "DPIIT recognition, startup registration, tax exemptions, and funding schemes.",
    icon: Building2,
  },
];

export default function Resources() {
  usePageMeta(
    "Resources & Opportunities",
    "Useful regulatory links, ICAI opportunities, and professional resources curated by SGNG & Associates (I) for businesses and CA professionals."
  );

  return (
    <main>
      {/* Hero */}
      <section className="hero-gradient py-12 text-center lg:py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h1 className="font-serif text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Resources &amp; Opportunities
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/70">
            Stay updated with the latest professional opportunities, regulatory
            portals, and useful links curated by our team.
          </p>
        </div>
      </section>

      {/* PDICAI Opportunities */}
      <section className="bg-white py-14 lg:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-10">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-8 bg-accent-500/60" />
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent-600">
                ICAI / PDICAI
              </span>
            </div>
            <h2 className="font-serif text-3xl font-bold text-primary-900">
              Professional Opportunities
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-primary-700/70">
              The ICAI and PDICAI regularly publish empanelment notices,
              assignment opportunities, and professional engagement listings for
              Chartered Accountants.
            </p>
          </div>

          {pdicaiLinks.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-5 rounded-xl border border-primary-100 bg-primary-50/40 p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-500/40 hover:bg-white hover:shadow-lg"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-500/10 text-accent-600 transition-colors group-hover:bg-accent-500/20">
                <BookOpen className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-bold text-primary-900 group-hover:text-accent-600 transition-colors">
                    {link.title}
                  </h3>
                  <ExternalLink className="h-4 w-4 text-primary-300 group-hover:text-accent-500 transition-colors" />
                </div>
                <p className="mt-1.5 text-sm text-primary-700/70">
                  {link.description}
                </p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-accent-600 opacity-0 transition-opacity group-hover:opacity-100">
                  Visit Portal <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            </a>
          ))}

          {/* Embedded iframe */}
          <div className="mt-8 overflow-hidden rounded-xl border border-primary-100 bg-white">
            <div className="border-b border-primary-100 bg-primary-50/60 px-6 py-3">
              <div className="flex items-center gap-2 text-sm font-semibold text-primary-800">
                <Globe className="h-4 w-4 text-accent-600" />
                PDICAI Opportunities — Live Feed
              </div>
            </div>
            <iframe
              src="https://pdicai.org/Opportunities.aspx"
              title="PDICAI Opportunities"
              className="h-[500px] w-full border-0"
              loading="lazy"
              sandbox="allow-scripts allow-same-origin allow-popups"
            />
          </div>
        </div>
      </section>

      {/* Regulatory Resources */}
      <section className="section-gradient py-14 lg:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-10">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-8 bg-accent-500/60" />
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent-600">
                Useful Links
              </span>
            </div>
            <h2 className="font-serif text-3xl font-bold text-primary-900">
              Regulatory &amp; Government Portals
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-primary-700/70">
              Quick access to key regulatory portals and government websites
              relevant to businesses and professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {regulatoryResources.map(
              ({ title, url, description, icon: Icon }) => (
                <a
                  key={url}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 rounded-xl border border-primary-200/40 bg-white/80 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-500/40 hover:bg-white hover:shadow-lg"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-primary-200/60 bg-primary-50 text-primary-500 transition-all duration-300 group-hover:border-accent-500/40 group-hover:bg-accent-500 group-hover:text-white">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-bold text-primary-900 group-hover:text-accent-600 transition-colors truncate">
                        {title}
                      </h3>
                      <ExternalLink className="h-3 w-3 shrink-0 text-primary-300 group-hover:text-accent-500 transition-colors" />
                    </div>
                    <p className="mt-1 text-xs leading-relaxed text-primary-600/60">
                      {description}
                    </p>
                  </div>
                </a>
              )
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-14 lg:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-serif text-3xl font-bold text-primary-900">
            Need Expert Guidance?
          </h2>
          <p className="mt-4 text-primary-700/70">
            Our team of Chartered Accountants can help you navigate regulatory
            compliance, tax filings, and professional opportunities.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-accent-500 px-8 py-3.5 text-sm font-bold text-primary-900 transition-all duration-300 hover:bg-accent-600 hover:text-white shadow-[0_4px_20px_-4px_rgba(255,215,0,0.4)]"
            >
              Get In Touch
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-lg border border-primary-200 px-8 py-3.5 text-sm font-medium text-primary-600 transition-colors hover:bg-primary-50"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
