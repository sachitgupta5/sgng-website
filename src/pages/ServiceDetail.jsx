import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, ArrowRight } from 'lucide-react';

const serviceData = {
  'business-setup-advisory': {
    title: 'Business Setup Advisory',
    tagline: 'Expert guidance for company formation and regulatory approvals across India.',
    overview:
      'SGNG & Associates provides comprehensive business setup advisory services to help entrepreneurs and businesses establish their presence in India. From entry strategy to regulatory approvals, we handle every aspect of business formation.',
    sections: [
      {
        heading: 'Entry Strategy',
        items: [
          'Market analysis and feasibility studies',
          'Business structure recommendations',
          'Joint venture and partnership advisory',
          'Foreign investment structuring',
        ],
      },
      {
        heading: 'Location Study & Incentives',
        items: [
          'State-wise incentive analysis',
          'SEZ and industrial park advisory',
          'Land and infrastructure assessment',
          'Government subsidy identification',
        ],
      },
      {
        heading: 'Project Management',
        items: [
          'End-to-end project coordination',
          'Timeline and milestone management',
          'Vendor and contractor liaison',
          'Budget planning and monitoring',
        ],
      },
      {
        heading: 'Regulatory Approvals',
        items: [
          'Company incorporation (Private/Public/LLP)',
          'Industry-specific licenses and permits',
          'Environmental clearances',
          'FEMA and RBI approvals',
        ],
      },
      {
        heading: 'Startup Support',
        items: [
          'Startup India registration',
          'DPIIT recognition',
          'Tax exemption applications',
          'Seed funding facilitation',
        ],
      },
      {
        heading: 'Secretarial Support',
        items: [
          'Board meeting compliance',
          'Annual filing management',
          'Statutory register maintenance',
          'Director and shareholder services',
        ],
      },
    ],
  },
  'transaction-advisory': {
    title: 'Transaction Advisory',
    tagline: 'M&A advisory, due diligence, valuations and financial modeling.',
    overview:
      'Our Transaction Advisory practice supports clients through the entire deal lifecycle — from identifying targets and structuring transactions to performing rigorous due diligence and post-merger integration.',
    sections: [
      {
        heading: 'Mergers & Acquisitions',
        items: [
          'Target identification and screening',
          'Deal structuring and negotiation',
          'Regulatory and antitrust advisory',
          'Post-merger integration support',
        ],
      },
      {
        heading: 'Buy-Side Advisory',
        items: [
          'Acquisition strategy development',
          'Target valuation and pricing',
          'Synergy assessment',
          'Transaction execution support',
        ],
      },
      {
        heading: 'Sell-Side Advisory',
        items: [
          'Business valuation for exit',
          'Information memorandum preparation',
          'Buyer identification and outreach',
          'Deal negotiation and closure',
        ],
      },
      {
        heading: 'Valuation Services',
        items: [
          'Business valuation (DCF, comparable analysis)',
          'Intangible asset valuation',
          'Purchase price allocation',
          'Fairness opinions',
        ],
      },
      {
        heading: 'Due Diligence',
        items: [
          'Financial due diligence',
          'Tax due diligence',
          'Commercial due diligence',
          'Operational due diligence',
        ],
      },
      {
        heading: 'Corporate Debt Restructuring',
        items: [
          'Debt advisory and restructuring',
          'Lender negotiation support',
          'Working capital optimization',
          'Financial modeling and projections',
        ],
      },
    ],
  },
  'taxation-regulatory-services': {
    title: 'Taxation & Regulatory Services',
    tagline: 'Tax planning, international taxation, transfer pricing and compliance.',
    overview:
      'We provide end-to-end taxation and regulatory services that help businesses optimize their tax positions while maintaining full compliance with Indian and international tax laws.',
    sections: [
      {
        heading: 'Tax Planning & Advisory',
        items: [
          'Corporate tax planning and optimization',
          'Personal tax planning',
          'Tax-efficient structuring',
          'Capital gains advisory',
        ],
      },
      {
        heading: 'International Taxation',
        items: [
          'Double taxation avoidance agreements (DTAA)',
          'Cross-border transaction structuring',
          'Expatriate taxation',
          'Permanent establishment advisory',
        ],
      },
      {
        heading: 'Transfer Pricing',
        items: [
          'Transfer pricing documentation',
          'Benchmarking studies',
          'Advance pricing agreements',
          'Transfer pricing audit defense',
        ],
      },
      {
        heading: 'Indirect Tax Advisory',
        items: [
          'GST planning and optimization',
          'Customs duty advisory',
          'Anti-dumping duty matters',
          'Indirect tax litigation support',
        ],
      },
      {
        heading: 'Dispute Resolution',
        items: [
          'Tax litigation management',
          'Appeals before CIT(A) and ITAT',
          'Advance ruling applications',
          'Settlement commission representations',
        ],
      },
    ],
  },
  'audit-assurance-services': {
    title: 'Audit & Assurance Services',
    tagline: 'Cost reduction, management, mystery, and revenue audits.',
    overview:
      'Our audit and assurance practice delivers comprehensive audit solutions that go beyond compliance to provide meaningful business insights. We combine deep industry knowledge with rigorous methodologies.',
    sections: [
      {
        heading: 'Cost Reduction Audit',
        items: [
          'Process cost analysis',
          'Operational efficiency review',
          'Vendor cost optimization',
          'Overhead rationalization',
        ],
      },
      {
        heading: 'Management Audit',
        items: [
          'Organizational effectiveness review',
          'Strategic alignment assessment',
          'Performance benchmarking',
          'Governance framework evaluation',
        ],
      },
      {
        heading: 'Mystery Audit',
        items: [
          'Customer experience assessment',
          'Service quality evaluation',
          'Compliance verification visits',
          'Brand standard adherence checks',
        ],
      },
      {
        heading: 'Revenue Audit',
        items: [
          'Revenue leakage identification',
          'Billing accuracy review',
          'Contract compliance verification',
          'Revenue recognition assessment',
        ],
      },
      {
        heading: 'Statutory Audit',
        items: [
          'Companies Act audit',
          'Tax audit under Section 44AB',
          'Bank audit',
          'Co-operative society audit',
        ],
      },
      {
        heading: 'IPO Advisory',
        items: [
          'IPO readiness assessment',
          'DRHP preparation support',
          'Financial restructuring for listing',
          'Post-listing compliance advisory',
        ],
      },
    ],
  },
  'non-core-process-outsourcing': {
    title: 'Non-Core Process Outsourcing',
    tagline: 'Virtual CFO, payroll, compliance diagnostics and reconciliation.',
    overview:
      'We help businesses focus on their core competencies by managing their non-core financial and administrative processes. Our outsourcing solutions reduce costs while improving accuracy and compliance.',
    sections: [
      {
        heading: 'Virtual CFO Services',
        items: [
          'Financial strategy and planning',
          'Cash flow management',
          'Investor and board reporting',
          'Budgeting and forecasting',
        ],
      },
      {
        heading: 'Payroll Management',
        items: [
          'Monthly payroll processing',
          'PF, ESI and PT compliance',
          'Form 16 generation',
          'Payroll tax optimization',
        ],
      },
      {
        heading: 'Compliance Diagnostics',
        items: [
          'Regulatory compliance health check',
          'Gap analysis and remediation',
          'Compliance calendar management',
          'Penalty risk assessment',
        ],
      },
      {
        heading: 'Reconciliation Services',
        items: [
          'Bank reconciliation',
          'Intercompany reconciliation',
          'Vendor and customer ledger reconciliation',
          'GST reconciliation (GSTR-2A/2B)',
        ],
      },
      {
        heading: 'MIS Reporting',
        items: [
          'Customized management reports',
          'Dashboard creation',
          'KPI tracking and analysis',
          'Variance analysis',
        ],
      },
      {
        heading: 'Secretarial Compliance',
        items: [
          'Annual return filing',
          'Board meeting management',
          'Statutory register maintenance',
          'ROC compliance',
        ],
      },
      {
        heading: 'Back Office Support',
        items: [
          'Data entry and processing',
          'Invoice management',
          'Document digitization',
          'Administrative support',
        ],
      },
    ],
  },
  'forensic-accounting': {
    title: 'Forensic Accounting and Fraud Detection',
    tagline: 'Prevention, detection and investigation of financial fraud.',
    overview:
      'Our forensic accounting team combines financial expertise with investigative skills to help organizations prevent, detect, and respond to fraud and financial irregularities.',
    sections: [
      {
        heading: 'Fraud Prevention',
        items: [
          'Anti-fraud framework design',
          'Internal control strengthening',
          'Fraud risk assessment',
          'Employee awareness training',
          'Whistleblower mechanism setup',
        ],
      },
      {
        heading: 'Fraud Detection',
        items: [
          'Data analytics and pattern recognition',
          'Transaction monitoring',
          'Anomaly detection',
          'Forensic data mining',
          'Digital forensics',
        ],
      },
      {
        heading: 'Fraud Investigation',
        items: [
          'Evidence collection and preservation',
          'Witness interviews and statements',
          'Asset tracing',
          'Quantification of losses',
          'Expert witness services',
        ],
      },
      {
        heading: 'Coverage Areas',
        items: [
          'Financial statement fraud',
          'Asset misappropriation',
          'Corruption and bribery',
          'Cyber fraud and identity theft',
          'Insurance claims fraud',
          'Vendor and procurement fraud',
        ],
      },
    ],
  },
  'gst-related-services': {
    title: 'GST Related Services',
    tagline: 'Registration, compliance, certifications, annual returns and GST audit.',
    overview:
      "We provide comprehensive GST services from registration to audit, helping businesses navigate the complexities of India's goods and services tax regime with confidence.",
    sections: [
      {
        heading: 'GST Registration',
        items: [
          'New GST registration',
          'Amendment of registration',
          'Cancellation and revocation',
          'Registration for e-commerce operators',
        ],
      },
      {
        heading: 'GST Compliance',
        items: [
          'Monthly/quarterly return filing (GSTR-1, GSTR-3B)',
          'Input tax credit reconciliation',
          'GSTR-2A/2B matching',
          'E-way bill compliance',
        ],
      },
      {
        heading: 'GST Certifications',
        items: [
          'Reconciliation certificates',
          'Refund certifications',
          'Export documentation',
          'Special category certifications',
        ],
      },
      {
        heading: 'Annual Returns & Audit',
        items: [
          'GSTR-9 annual return preparation',
          'GSTR-9C reconciliation statement',
          'GST audit under Section 65',
          'Department audit representation',
        ],
      },
      {
        heading: 'GST Advisory',
        items: [
          'GST impact analysis',
          'Rate classification advisory',
          'Place of supply determination',
          'Anti-profiteering compliance',
        ],
      },
    ],
  },
  'ind-as-implementation': {
    title: 'IND-AS Implementation',
    tagline: 'Indian Accounting Standards implementation and first-time adoption.',
    overview:
      'We assist companies in transitioning from Indian GAAP to IND-AS (Indian Accounting Standards converged with IFRS), ensuring smooth implementation with minimal business disruption.',
    sections: [
      {
        heading: 'Impact Assessment',
        items: [
          'Gap analysis between existing GAAP and IND-AS',
          'Financial impact quantification',
          'System and process change identification',
          'Stakeholder impact assessment',
        ],
      },
      {
        heading: 'First-Time Adoption (IND-AS 101)',
        items: [
          'Opening balance sheet preparation',
          'Exemption and exception election',
          'Comparative period adjustments',
          'Reconciliation statement preparation',
        ],
      },
      {
        heading: 'Standards Implementation',
        items: [
          'Revenue recognition (IND-AS 115)',
          'Financial instruments (IND-AS 109)',
          'Leases (IND-AS 116)',
          'Fair value measurement (IND-AS 113)',
        ],
      },
      {
        heading: 'Process & System Changes',
        items: [
          'Accounting policy redesign',
          'Chart of accounts restructuring',
          'ERP system configuration',
          'Training and capacity building',
        ],
      },
    ],
  },
  'internal-financial-controls': {
    title: 'Internal Financial Controls (IFC)',
    tagline: 'Design and implementation of ICFR frameworks.',
    overview:
      'We help companies design, implement, and test Internal Controls over Financial Reporting (ICFR) as mandated by the Companies Act, 2013, ensuring robust governance and accurate financial reporting.',
    sections: [
      {
        heading: 'Legal Requirements',
        items: [
          'Section 134(5)(e) compliance',
          'Section 143(3)(i) auditor reporting',
          'CARO 2020 requirements',
          'Board and audit committee responsibilities',
        ],
      },
      {
        heading: 'ICFR Framework Design',
        items: [
          'Risk assessment and control mapping',
          'Process documentation and flowcharts',
          'Control design and implementation',
          'Policy and procedure development',
        ],
      },
      {
        heading: 'Control Testing',
        items: [
          'Test of design effectiveness',
          'Test of operating effectiveness',
          'Deficiency identification and classification',
          'Remediation support',
        ],
      },
      {
        heading: 'Ongoing Monitoring',
        items: [
          'Continuous monitoring framework',
          'Control self-assessment programs',
          'Periodic review and updates',
          'Management reporting on IFC status',
        ],
      },
    ],
  },
  'internal-audit': {
    title: 'Internal Audit',
    tagline: 'Risk-based internal audit and fraud risk management.',
    overview:
      'Our risk-based internal audit approach helps organizations strengthen governance, improve operational efficiency, and manage risks effectively. We align our audit methodology with global standards (IIA).',
    sections: [
      {
        heading: 'Section 138 Compliance',
        items: [
          'Applicability assessment',
          'Internal audit function setup',
          'Audit committee reporting',
          'Regulatory compliance verification',
        ],
      },
      {
        heading: 'Audit Methodology',
        items: [
          'Risk-based audit planning',
          'Process and transaction testing',
          'Data analytics-driven auditing',
          'Continuous auditing techniques',
        ],
      },
      {
        heading: 'Audit Areas',
        items: [
          'Financial controls and reporting',
          'Procurement and vendor management',
          'Revenue and receivables',
          'Human resource processes',
          'IT general and application controls',
        ],
      },
      {
        heading: 'Fraud Risk Management',
        items: [
          'Fraud risk assessment',
          'Red flag identification',
          'Forensic audit integration',
          'Anti-fraud program development',
        ],
      },
    ],
  },
  'book-keeping-accounting': {
    title: 'Book Keeping & Accounting Services',
    tagline: 'Complete bookkeeping, financial statements and MIS reporting.',
    overview:
      'We provide comprehensive bookkeeping and accounting services that give businesses accurate, timely financial information. Our team is proficient across all major accounting software platforms.',
    sections: [
      {
        heading: 'Bookkeeping Services',
        items: [
          'Day-to-day transaction recording',
          'Accounts payable and receivable management',
          'Bank and credit card reconciliation',
          'Expense categorization and tracking',
        ],
      },
      {
        heading: 'Financial Statements',
        items: [
          'Balance sheet preparation',
          'Profit and loss statement',
          'Cash flow statement',
          'Notes to accounts',
        ],
      },
      {
        heading: 'MIS Reporting',
        items: [
          'Customized management reports',
          'Budget vs. actual analysis',
          'Department-wise profitability',
          'Cash flow forecasting',
        ],
      },
      {
        heading: 'Software Expertise',
        items: [
          'Tally Prime / Tally ERP 9',
          'QuickBooks',
          'Zoho Books',
          'SAP and Oracle Financials',
          'Microsoft Dynamics',
        ],
      },
      {
        heading: 'Specialized Services',
        items: [
          'Fixed asset accounting',
          'Inventory accounting',
          'Intercompany accounting',
          'Multi-currency accounting',
        ],
      },
    ],
  },
  'physical-verification': {
    title: 'Physical Verification',
    tagline: 'Inventory verification and fixed asset management.',
    overview:
      'Our physical verification services help organizations maintain accurate records of their inventory and fixed assets, ensuring compliance with accounting standards and internal control requirements.',
    sections: [
      {
        heading: 'Inventory Verification',
        items: [
          'Complete stock taking and counting',
          'Sample-based verification',
          'Obsolete and slow-moving stock identification',
          'Inventory valuation review',
          'Warehouse and storage audit',
        ],
      },
      {
        heading: 'Fixed Asset Management',
        items: [
          'Physical verification of fixed assets',
          'Asset tagging and labeling',
          'Asset register reconciliation',
          'Impairment assessment',
          'Disposal and write-off verification',
        ],
      },
      {
        heading: 'Reporting',
        items: [
          'Verification reports with observations',
          'Discrepancy analysis',
          'Recommendations for improvement',
          'Management action tracking',
        ],
      },
    ],
  },
  'startup-services': {
    title: 'Startup Services',
    tagline: 'End-to-end support from incorporation to funding advisory.',
    overview:
      'We are passionate about supporting startups at every stage of their journey. From incorporation to fundraising, our comprehensive suite of services is designed to help startups build strong financial foundations.',
    sections: [
      {
        heading: 'Company Incorporation',
        items: [
          'Private limited company registration',
          'LLP formation',
          'One Person Company (OPC) setup',
          'Section 8 company (NGO) registration',
        ],
      },
      {
        heading: 'Startup India Registration',
        items: [
          'DPIIT recognition application',
          'Tax exemption under Section 80-IAC',
          'Self-certification compliance',
          'Intellectual property fast-tracking',
        ],
      },
      {
        heading: 'Funding Advisory',
        items: [
          'Pitch deck and financial model preparation',
          'Investor connect and introductions',
          'Term sheet negotiation support',
          'Due diligence preparation',
        ],
      },
      {
        heading: 'Compliance & Accounting',
        items: [
          'Monthly bookkeeping',
          'GST and TDS compliance',
          'Annual filings (ROC, IT, GST)',
          'Statutory audit',
        ],
      },
      {
        heading: 'Virtual CFO for Startups',
        items: [
          'Financial planning and budgeting',
          'Burn rate monitoring',
          'Runway analysis',
          'Board and investor reporting',
        ],
      },
    ],
  },
};

const allSlugs = Object.keys(serviceData);

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = serviceData[slug];

  if (!service) {
    return (
      <main className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
        <h1 className="font-serif text-4xl font-bold text-primary-900">Service Not Found</h1>
        <p className="mt-4 text-primary-700/70">The service you are looking for does not exist.</p>
        <Link
          to="/services"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-accent-500 px-6 py-3 font-semibold text-primary-900 transition-all duration-300 hover:bg-accent-600"
        >
          <ArrowLeft className="h-4 w-4" />
          View All Services
        </Link>
      </main>
    );
  }

  const currentIndex = allSlugs.indexOf(slug);
  const prevSlug = currentIndex > 0 ? allSlugs[currentIndex - 1] : null;
  const nextSlug = currentIndex < allSlugs.length - 1 ? allSlugs[currentIndex + 1] : null;

  return (
    <main>
      {/* Hero */}
      <section className="hero-gradient py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            to="/services"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-primary-100/70 transition-colors duration-200 hover:text-accent-500"
          >
            <ArrowLeft className="h-4 w-4" />
            All Services
          </Link>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-accent-500">
            Our Services
          </p>
          <h1 className="font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {service.title}
          </h1>
          <div className="mt-4 flex items-center gap-3">
            <span className="h-px w-10 bg-accent-500/40" />
            <span className="h-1.5 w-1.5 rotate-45 bg-accent-500" />
            <span className="h-px w-10 bg-accent-500/40" />
          </div>
          <p className="mt-6 max-w-2xl text-lg text-primary-100/80">{service.tagline}</p>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-serif text-3xl font-bold text-primary-900 sm:text-4xl">Overview</h2>
            <div className="mt-2 h-1 w-16 rounded bg-accent-500" />
            <p className="mt-6 text-lg leading-relaxed text-primary-700/80">{service.overview}</p>
          </div>
        </div>
      </section>

      {/* Service Sections */}
      <section className="section-gradient py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {service.sections.map((section) => (
              <div
                key={section.heading}
                className="rounded-xl border border-primary-200/30 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent-500/40 hover:shadow-lg hover:shadow-primary-500/10"
              >
                <h3 className="text-lg font-bold text-primary-900">{section.heading}</h3>
                <div className="mt-1 h-0.5 w-10 rounded bg-accent-500/60" />
                <ul className="mt-5 space-y-3">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-primary-700/80">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="border-t border-primary-200/30 bg-white py-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {prevSlug ? (
            <Link
              to={`/services/${prevSlug}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary-700 transition-colors duration-200 hover:text-accent-600"
            >
              <ArrowLeft className="h-4 w-4" />
              {serviceData[prevSlug].title}
            </Link>
          ) : (
            <span />
          )}
          {nextSlug ? (
            <Link
              to={`/services/${nextSlug}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary-700 transition-colors duration-200 hover:text-accent-600"
            >
              {serviceData[nextSlug].title}
              <ArrowRight className="h-4 w-4" />
            </Link>
          ) : (
            <span />
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient py-16">
        <div className="mx-auto max-w-4xl px-8 text-center">
          <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl">
            Ready to Get Started?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-100/70">
            Let our experts help you with {service.title.toLowerCase()}. Reach out today for a
            consultation.
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
