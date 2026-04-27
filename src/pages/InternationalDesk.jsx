import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Globe, ChevronRight, Building2, FileText, ShieldCheck, Users, ArrowRight, CheckCircle2 } from 'lucide-react';
import usePageMeta from '../hooks/usePageMeta';

const countries = [
  {
    id: 'uk',
    name: 'United Kingdom',
    flag: 'GB',
    hero: 'Company Incorporation in the UK',
    intro: 'The UK offers numerous benefits for companies, including ease of setup, tax advantages, and legal protections. Whether you are a UK resident or an international entrepreneur, understanding the incorporation process can help ensure a smooth and legally compliant business operation.',
    whyIncorporate: [
      { title: 'Limited Liability Protection', desc: 'Business owners’ personal assets are protected from company debts and liabilities.' },
      { title: 'Credibility & Trust', desc: 'An incorporated company appears more credible to customers, suppliers, and investors.' },
      { title: 'Tax Efficiency', desc: 'Corporation tax rates can be lower than personal income tax rates, offering potential savings.' },
      { title: 'Access to Funding', desc: 'Incorporated companies have better access to bank loans, grants, and investment opportunities.' },
      { title: 'Perpetual Existence', desc: 'A company continues to exist even if the ownership structure changes.' },
    ],
    structures: [
      { name: 'Sole Trader', desc: 'Simple and inexpensive to set up. No legal distinction between the owner and the business. The owner is personally liable for business debts.' },
      { name: 'Partnership (GP / LP)', desc: 'Formed when two or more individuals run a business together. General Partners share responsibility; Limited Partners have limited liability.' },
      { name: 'Limited Liability Partnership (LLP)', desc: 'Offers limited liability protection. Requires at least two partners. Taxed like a partnership, but operates with corporate features.' },
      { name: 'Private Limited Company (Ltd)', desc: 'Separate legal entity from its owners. Liability limited to the amount invested. Most popular structure for startups and small businesses.' },
      { name: 'Public Limited Company (PLC)', desc: 'Can sell shares to the public. Requires minimum share capital of £50,000. Subject to stricter regulations and reporting.' },
    ],
    steps: [
      'Choose a unique company name complying with Companies House regulations',
      'Appoint Directors (at least one individual) and optionally a Company Secretary',
      'Determine Shareholders and Share Structure (at least one shareholder required)',
      'Register with Companies House via Form IN01 with MoA, AoA, PSC details',
      'Obtain Certificate of Incorporation confirming registration under Companies Act 2006',
      'Register for Corporation Tax with HMRC within three months',
      'Register for VAT if annual turnover exceeds £90,000',
      'Open a Corporate Bank Account for managing company finances',
    ],
    compliance: [
      'File Annual Confirmation Statement (CS01) with Companies House',
      'File annual accounts with Companies House and corporation tax returns with HMRC',
      'Employers’ Liability Insurance (mandatory with employees)',
      'Comply with UK GDPR and Data Protection Act 2018',
    ],
    faqs: [
      { q: 'Can a foreigner incorporate a company in the UK?', a: 'Yes. Both UK residents and foreign entrepreneurs can incorporate. There are no residency requirements for directors or shareholders.' },
      { q: 'How long does it take?', a: 'Online registration with Companies House normally takes 3–24 hours. Postal applications can take 8–10 days.' },
      { q: 'Do I need a UK bank account?', a: 'Not for incorporation, but a bank account is required to run the business, receive payments, and pay taxes.' },
    ],
  },
  {
    id: 'usa',
    name: 'United States',
    flag: 'US',
    hero: 'Company Incorporation in the USA',
    intro: 'Incorporating a company in the United States provides numerous benefits such as liability protection, credibility, and potential tax advantages. Both U.S. citizens and foreign entrepreneurs can incorporate without needing to be physically present.',
    whyIncorporate: [
      { title: 'Legal Entity Formation', desc: 'A separate legal entity distinct from its owners, affecting liability, taxation, and operations.' },
      { title: 'Credibility & Trust', desc: 'Customers, suppliers, and investors tend to trust incorporated businesses more.' },
      { title: 'Tax Benefits', desc: 'Potential tax advantages depending on the state and business structure.' },
      { title: 'Perpetual Existence', desc: 'Incorporated businesses continue to exist even if ownership changes.' },
      { title: 'Access to Funding', desc: 'Corporations and LLCs often have better access to bank loans and investments.' },
      { title: 'Access to Massive Market', desc: 'Population of over 330 million people offering vast growth opportunities.' },
    ],
    structures: [
      { name: 'Sole Proprietorship', desc: 'Simple and inexpensive to set up. No legal distinction between owner and business. Owner is personally liable.' },
      { name: 'Partnership (GP / LP)', desc: 'Two or more individuals operate together. General Partners share liability; Limited Partners have protection. Pass-through taxation.' },
      { name: 'Limited Liability Company (LLC)', desc: 'Offers liability protection with pass-through taxation. Less paperwork than a corporation. Ideal for small to medium businesses.' },
      { name: 'C Corporation (C-Corp)', desc: 'Separate legal entity with limited liability. Subject to double taxation but can offer various classes of stock for investor flexibility.' },
      { name: 'S Corporation (S-Corp)', desc: 'Avoids double taxation with pass-through taxation. Limited to 100 or fewer U.S. shareholders.' },
    ],
    steps: [
      'Choose a State for Incorporation (Delaware, Wyoming, and Nevada are popular)',
      'Select a unique Business Name complying with state requirements',
      'Appoint a Registered Agent with a physical address in the incorporation state',
      'File Articles of Incorporation (Corporation) or Articles of Organization (LLC)',
      'Obtain an Employer Identification Number (EIN) from the IRS',
      'Create an Operating Agreement (LLC) or Corporate Bylaws (Corporation)',
      'Register for State and Federal Taxes (sales tax, payroll tax, franchise tax)',
      'Open a U.S. Business Bank Account',
    ],
    compliance: [
      'File Annual Reports and pay renewal fees as required by your state',
      'Comply with corporate taxes, payroll taxes, and sales taxes',
      'Maintain accurate records of financial transactions and meeting minutes',
      'Submit state and federal tax filings on time to avoid penalties',
    ],
    faqs: [
      { q: 'Can a non-U.S. resident incorporate?', a: 'Yes. The USA allows foreign entrepreneurs to form a business without physical presence. Non-residents may need extra steps like getting an EIN and U.S. bank account.' },
      { q: 'How long does incorporation take?', a: 'Duration is state-specific, mostly 1–10 business days. Most states have expedited processing at a fee.' },
      { q: 'Do I need a U.S. address?', a: 'You don’t need your own address. However, you need a registered agent with a U.S. address in your state of incorporation.' },
    ],
  },
  {
    id: 'dubai',
    name: 'Dubai (UAE)',
    flag: 'AE',
    hero: 'Company Incorporation in Dubai',
    intro: 'Dubai has emerged as a global hub for business and commerce. Known for its strategic location, state-of-the-art infrastructure, and business-friendly policies, Dubai offers immense opportunities for entrepreneurs and corporations alike.',
    whyIncorporate: [
      { title: 'Strategic Location', desc: 'Gateway between East and West, providing easy access to markets in Europe, Asia, and Africa.' },
      { title: 'Tax Benefits', desc: 'Zero personal income tax and favorable corporate tax rates make Dubai an attractive business jurisdiction.' },
      { title: 'World-Class Infrastructure', desc: 'State-of-the-art transportation and advanced communication networks.' },
      { title: '100% Foreign Ownership', desc: 'In free zones, foreign investors enjoy complete ownership of their business.' },
      { title: 'Repatriation of Profits', desc: 'Companies can repatriate profits and capital without restrictions.' },
      { title: 'Global Connectivity', desc: 'Dubai’s airports and seaports provide excellent connectivity for trade and travel.' },
    ],
    structures: [
      { name: 'Mainland Company', desc: 'Operates anywhere in the UAE. May require a local sponsor for certain activities. Suitable for direct UAE market trade.' },
      { name: 'Free Zone Company', desc: '100% foreign ownership. Exempt from import/export duties. Popular zones: JAFZA, Dubai Internet City, DMCC.' },
      { name: 'Offshore Company', desc: 'For international operations without UAE physical presence. Provides asset protection, tax optimization, and confidentiality.' },
    ],
    steps: [
      'Determine Business Activity and required license type (commercial, industrial, professional)',
      'Choose Jurisdiction — Mainland, Free Zone, or Offshore',
      'Reserve a unique Trade Name through DED or free zone authority',
      'Obtain Initial Approvals from relevant authorities (DED, free zone, Ministry of Economy)',
      'Draft and Notarize the Memorandum of Association (MoA)',
      'Lease Office Space (mandatory for mainland; flexi-desk options for free zones)',
      'Apply for Business License and pay necessary fees',
      'Register with UAE Ministry of Labor and GDRFA; apply for visas',
    ],
    compliance: [
      'Maintain valid business license and renew annually',
      'Comply with UAE corporate tax regulations',
      'File VAT returns if registered for VAT',
      'Maintain proper accounting records as per UAE Commercial Companies Law',
    ],
    faqs: [
      { q: 'Can foreigners own 100% of a company in Dubai?', a: 'Yes. Under updated UAE ownership rules, foreign investors can own 100% in free zones and most mainland operations.' },
      { q: 'How long does incorporation take?', a: 'The process typically takes 3–10 business days depending on jurisdiction. Free zone setups tend to be quicker.' },
      { q: 'Do I need a physical office?', a: 'Mainland companies require physical office space. Free zone companies can use flexi-desks, shared offices, or virtual offices.' },
    ],
  },
  {
    id: 'singapore',
    name: 'Singapore',
    flag: 'SG',
    hero: 'Company Incorporation in Singapore',
    intro: 'Singapore is widely recognized as one of the most business-friendly destinations in the world. With its strategic location, robust legal framework, and favorable tax policies, the city-state attracts entrepreneurs and corporations from across the globe.',
    whyIncorporate: [
      { title: 'Ease of Doing Business', desc: 'Ranked among the easiest places globally with a transparent and efficient regulatory environment.' },
      { title: 'Attractive Tax System', desc: 'Competitive corporate tax rates with various exemptions and incentives for startups and SMEs.' },
      { title: 'Robust Legal Framework', desc: 'Strong legal and regulatory system ensures business stability and investor protection.' },
      { title: 'Strategic Location', desc: 'At the heart of Southeast Asia with excellent connectivity to global markets.' },
      { title: 'Political Stability', desc: 'Stable government, pro-business policies, and strong intellectual property protection.' },
      { title: 'Skilled Workforce', desc: 'Highly skilled and multilingual workforce ideal for business growth.' },
    ],
    structures: [
      { name: 'Private Limited Company (Pte Ltd)', desc: 'Most popular structure. Limited liability, eligible for tax incentives and government grants. Can be 100% foreign-owned.' },
      { name: 'Sole Proprietorship', desc: 'For individual entrepreneurs. Unlimited personal liability. Suitable for small-scale ventures.' },
      { name: 'Partnership (GP / LP / LLP)', desc: 'GP, LP, and LLP options available. Commonly used for professional services. Profits taxed at personal income tax rates.' },
      { name: 'Branch Office', desc: 'For foreign companies expanding to Singapore. Not a separate legal entity; liabilities extend to parent company.' },
      { name: 'Representative Office', desc: 'For market research only. Cannot engage in profit-generating activities. Temporary (up to 3 years).' },
    ],
    steps: [
      'Choose a unique Business Name approved by ACRA',
      'Appoint at least one Singapore-resident Director (citizen, PR, or pass holder)',
      'Appoint a qualified Company Secretary within six months',
      'Determine Paid-Up Capital (minimum SGD 1)',
      'Register a Local Office Address (physical location, not P.O. Box)',
      'Submit incorporation documents via ACRA’s BizFile+ online system',
      'Obtain business licenses if required (finance, F&B, healthcare)',
      'Open a Corporate Bank Account and register for GST if revenue exceeds SGD 1 million',
    ],
    compliance: [
      'File Annual Returns with ACRA within 7 months of financial year-end',
      'File corporate tax returns with IRAS (Inland Revenue Authority of Singapore)',
      'Hold Annual General Meetings (unless exempted)',
      'Maintain proper accounting records for at least 5 years',
      'Submit quarterly GST returns if registered',
    ],
    faqs: [
      { q: 'Can a foreigner incorporate in Singapore?', a: 'Yes. Foreign shareholders can own 100% of the company. At least one local resident director is required.' },
      { q: 'How long does incorporation take?', a: 'Typically 1–3 working days provided all documents are in order and no additional name approval is needed.' },
      { q: 'Do I need to be physically present?', a: 'No. The entire registration can be done remotely through a registered filing agent.' },
    ],
  },
];

export default function InternationalDesk() {
  usePageMeta(
    'International Desk',
    'Company incorporation services in UK, USA, Dubai & Singapore. SGNG & Associates (I) helps businesses set up globally with expert advisory on compliance, tax, and registration.'
  );

  const [activeTab, setActiveTab] = useState('uk');
  const country = countries.find((c) => c.id === activeTab);

  return (
    <div>
      {/* Hero */}
      <section className="hero-gradient py-12 text-center lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-accent-500">
            Global Business Setup
          </p>
          <h1 className="font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            International Desk
          </h1>
          <div className="mx-auto mt-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-accent-500/40" />
            <span className="h-1.5 w-1.5 rotate-45 bg-accent-500" />
            <span className="h-px w-10 bg-accent-500/40" />
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-100/80">
            Expert guidance for company incorporation across the world&rsquo;s most
            business-friendly jurisdictions.
          </p>
        </div>
      </section>

      {/* Country Tabs */}
      <section className="sticky top-16 z-30 border-b border-primary-200/40 bg-white/95 backdrop-blur-md lg:top-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto py-2 scrollbar-hide">
            {countries.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveTab(c.id)}
                className={`shrink-0 rounded-lg px-5 py-2.5 text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  activeTab === c.id
                    ? 'bg-primary-500 text-white shadow-md shadow-primary-500/20'
                    : 'text-primary-700 hover:bg-primary-50 hover:text-primary-900'
                }`}
              >
                <Globe className="mr-1.5 inline-block h-4 w-4" />
                {c.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Country Content */}
      <section className="section-gradient py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Intro */}
          <div className="mb-12">
            <h2 className="font-serif text-3xl font-bold text-primary-900 sm:text-4xl">
              {country.hero}
            </h2>
            <div className="mt-3 h-1 w-16 rounded bg-accent-500" />
            <p className="mt-6 max-w-4xl text-lg leading-relaxed text-primary-700/80">
              {country.intro}
            </p>
          </div>

          {/* Why Incorporate */}
          <div className="mb-14">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-accent-500/60" />
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent-600">
                Why Incorporate
              </span>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {country.whyIncorporate.map((item) => (
                <div
                  key={item.title}
                  className="group rounded-xl border border-primary-200/40 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-500/40 hover:shadow-lg"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-50 text-primary-500 transition-colors group-hover:bg-accent-500 group-hover:text-white">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <h3 className="text-sm font-bold text-primary-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-primary-700/70">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Business Structures */}
          <div className="mb-14">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-accent-500/60" />
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent-600">
                Business Structures
              </span>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {country.structures.map((s) => (
                <div
                  key={s.name}
                  className="rounded-xl border border-primary-200/40 bg-white p-6 shadow-sm"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-accent-500/10 text-accent-600">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <h3 className="text-sm font-bold text-primary-900">{s.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-primary-700/70">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Steps to Incorporate */}
          <div className="mb-14">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-accent-500/60" />
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent-600">
                Steps to Incorporate
              </span>
            </div>
            <div className="rounded-xl border border-primary-200/40 bg-white p-8 shadow-sm">
              <ol className="space-y-4">
                {country.steps.map((step, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-500 text-sm font-bold text-white">
                      {i + 1}
                    </span>
                    <p className="pt-1 text-sm leading-relaxed text-primary-800">{step}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Compliance */}
          <div className="mb-14">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-accent-500/60" />
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent-600">
                Ongoing Compliance
              </span>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {country.compliance.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-lg border border-primary-200/30 bg-white p-4 shadow-sm"
                >
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-accent-600" />
                  <p className="text-sm text-primary-800">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQs */}
          <div className="mb-14">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-accent-500/60" />
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent-600">
                Frequently Asked Questions
              </span>
            </div>
            <div className="space-y-4">
              {country.faqs.map((faq, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-primary-200/40 bg-white p-6 shadow-sm"
                >
                  <h3 className="flex items-start gap-2 font-semibold text-primary-900">
                    <FileText className="mt-0.5 h-5 w-5 shrink-0 text-primary-400" />
                    {faq.q}
                  </h3>
                  <p className="mt-3 pl-7 text-sm leading-relaxed text-primary-700/80">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Users className="mx-auto mb-4 h-10 w-10 text-accent-500/60" />
          <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl">
            Need Help Incorporating Your Business?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-100/70">
            Our international desk team at SGNG &amp; Associates (I) guides you through every step &mdash;
            from choosing the right jurisdiction to post-incorporation compliance.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2.5 bg-accent-500 px-10 py-4 text-sm font-bold uppercase tracking-widest text-primary-900 shadow-lg shadow-accent-500/25 transition-all duration-300 hover:bg-accent-600 hover:gap-3.5"
            >
              Get Expert Advisory
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="https://wa.me/919059052673"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 border border-white/25 px-10 py-4 text-sm font-bold uppercase tracking-widest text-white/90 transition-all duration-300 hover:border-accent-500/60 hover:bg-white/5"
            >
              <ChevronRight className="h-4 w-4" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
