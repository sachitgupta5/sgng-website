import { Link } from 'react-router-dom';
import usePageMeta from '../hooks/usePageMeta';
import {
  GraduationCap,
  Globe,
  Users,
  Lightbulb,
  TrendingUp,
  Heart,
  Briefcase,
  MapPin,
  ArrowRight,
  BookOpen,
  Target,
  Rocket,
  Send,
  CheckCircle2,
} from 'lucide-react';

const pillars = [
  {
    icon: GraduationCap,
    title: 'Learn from Day One',
    description:
      'You will work alongside seasoned CAs, SOX experts, and advisors who mentor you on live engagements — not classroom theory. Every project is a masterclass.',
  },
  {
    icon: Globe,
    title: 'Multi-Domain Exposure',
    description:
      'From manufacturing to fintech, from a Delhi startup to a UAE free zone — our breadth of clients means you will build knowledge most professionals take a decade to acquire.',
  },
  {
    icon: TrendingUp,
    title: 'Accelerated Growth',
    description:
      'We promote based on capability, not tenure. High performers move fast — leading audit teams, managing client relationships, and shaping advisory mandates within their first few years.',
  },
  {
    icon: Lightbulb,
    title: 'Tech-Forward Thinking',
    description:
      'We invest in automation, AI advisory, and modern tools. You will not just use Excel — you will build dashboards, automate compliance workflows, and drive digital transformation for clients.',
  },
  {
    icon: Users,
    title: 'Collaborative Culture',
    description:
      'No silos. Audit teams support tax mandates. Advisory teams collaborate with compliance. You will build a cross-functional skill set that makes you indispensable.',
  },
  {
    icon: Heart,
    title: 'People-First Values',
    description:
      'Flexible schedules, real work-life balance, and a leadership team that listens. We have built a firm where people stay — not because they have to, but because they want to.',
  },
];

const growthPath = [
  { step: 'Intern / Articleship', detail: 'Hands-on exposure to audit, tax, and compliance under expert guidance' },
  { step: 'Associate', detail: 'Own client deliverables, lead small teams, and build domain expertise' },
  { step: 'Senior Associate', detail: 'Manage multi-client portfolios, mentor juniors, drive process improvements' },
  { step: 'Manager / Team Lead', detail: 'Lead service verticals, handle key client relationships, shape firm strategy' },
  { step: 'Partner Track', detail: 'For exceptional performers — equity participation, leadership, and firm building' },
];

const openings = [
  {
    title: 'Senior Auditor',
    location: 'Delhi',
    type: 'Full-time',
    description:
      'Lead statutory and internal audit engagements for diverse clients. Manage audit teams, ensure compliance with standards, and deliver insightful reports.',
  },
  {
    title: 'Tax Consultant',
    location: 'Mumbai',
    type: 'Full-time',
    description:
      'Advise clients on direct and indirect taxation, prepare tax computations, and develop planning strategies. Strong knowledge of Income Tax Act essential.',
  },
  {
    title: 'GST Analyst',
    location: 'Delhi',
    type: 'Full-time',
    description:
      'Handle GST return filings, reconciliations, and compliance reviews. Stay updated with latest notifications and assist in resolving client queries.',
  },
  {
    title: 'Audit Associate',
    location: 'Delhi / Remote',
    type: 'Full-time',
    description:
      'Support audit engagements across industries. Prepare working papers, perform substantive testing, and assist in drafting audit reports.',
  },
  {
    title: 'Accounts Executive',
    location: 'Delhi',
    type: 'Full-time',
    description:
      'Manage bookkeeping, payroll processing, and financial reporting for a portfolio of clients. Proficiency in Tally and Excel required.',
  },
  {
    title: 'Intern / Articleship',
    location: 'Delhi',
    type: 'Internship',
    description:
      'Get hands-on experience in audit, taxation, and compliance. Work under CAs on real client engagements from your very first week.',
  },
];

const learningAreas = [
  'Statutory & Internal Audit',
  'Direct & Indirect Taxation',
  'GST Compliance & Advisory',
  'International Tax & Transfer Pricing',
  'SOX & IFC Frameworks',
  'Forensic Accounting',
  'Business Automation & AI Tools',
  'Startup Compliance & DPIIT',
  'Company Law & FEMA',
  'Data Analytics & Reporting',
];

function Career() {
  usePageMeta(
    'Careers',
    'Join SGNG & Associates — build a career in audit, taxation, GST, advisory, and more at a tech-enabled CA firm that invests in your growth.'
  );

  return (
    <div>
      {/* Hero */}
      <section className="hero-gradient py-12 text-center lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-accent-500">
            Build Your Future With Us
          </p>
          <h1 className="font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Where Talent Meets<br />
            <span className="gold-shimmer">Opportunity</span>
          </h1>
          <div className="mx-auto mt-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-accent-500/40" />
            <span className="h-1.5 w-1.5 rotate-45 bg-accent-500" />
            <span className="h-px w-10 bg-accent-500/40" />
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-100/80">
            We do not just hire professionals — we grow them. At SGNG, every team member gains
            diverse expertise, mentorship from industry veterans, and the freedom to build a career
            that truly matters.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              to="/apply"
              className="inline-flex items-center gap-2 rounded-lg bg-accent-500 px-8 py-3.5 text-sm font-bold text-primary-900 transition-all duration-300 hover:bg-accent-600 hover:text-white shadow-[0_4px_20px_-4px_rgba(255,215,0,0.4)]"
            >
              Apply Now
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="#openings"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-8 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:bg-white/10"
            >
              View Open Positions
            </a>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="bg-white py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-3 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-accent-500/60" />
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent-600">Why SGNG</span>
              <span className="h-px w-8 bg-accent-500/60" />
            </div>
            <h2 className="font-serif text-3xl font-bold text-primary-900 sm:text-4xl">
              More Than Just a Job
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-primary-700/70">
              We have built a firm where ambitious professionals thrive. Here is what makes
              SGNG different.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((item) => (
              <div
                key={item.title}
                className="group rounded-xl border border-primary-200/30 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent-500/40 hover:shadow-lg hover:shadow-primary-500/10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50 text-primary-500 transition-all duration-300 group-hover:bg-accent-500 group-hover:text-white">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-primary-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-primary-700/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Will Learn */}
      <section className="section-gradient py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-3 flex items-center gap-3">
                <span className="h-px w-8 bg-accent-500/60" />
                <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent-600">Diverse Knowledge</span>
              </div>
              <h2 className="font-serif text-3xl font-bold text-primary-900 sm:text-4xl">
                What You Will Learn Here
              </h2>
              <p className="mt-4 text-primary-700/70">
                Our multi-service, multi-industry practice means you will develop expertise across
                domains that most professionals never get to touch in a single firm. Every quarter brings
                new challenges, new industries, and new skills.
              </p>
              <div className="mt-6 border-l-4 border-accent-500 bg-white/60 p-5">
                <p className="font-serif text-lg italic text-primary-800">
                  &ldquo;In two years at SGNG, I gained the breadth of experience that would have taken
                  a decade elsewhere.&rdquo;
                </p>
                <p className="mt-2 text-xs font-bold uppercase tracking-wider text-accent-600">
                  — Team Member
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {learningAreas.map((area) => (
                <div
                  key={area}
                  className="flex items-center gap-2.5 rounded-lg border border-primary-200/40 bg-white/80 px-4 py-3 text-sm text-primary-800"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-accent-600" />
                  {area}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Growth Path */}
      <section className="bg-white py-14 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-3 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-accent-500/60" />
              <Rocket className="h-4 w-4 text-accent-600" />
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent-600">Career Path</span>
              <Rocket className="h-4 w-4 text-accent-600" />
              <span className="h-px w-8 bg-accent-500/60" />
            </div>
            <h2 className="font-serif text-3xl font-bold text-primary-900 sm:text-4xl">
              Your Growth Trajectory
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-primary-700/70">
              Clear milestones, real ownership, and a leadership team invested in your success.
            </p>
          </div>

          <div className="relative mt-14">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-accent-500 via-primary-300 to-accent-500 sm:left-1/2" />

            {growthPath.map((item, i) => (
              <div
                key={item.step}
                className={`relative mb-10 last:mb-0 flex items-start gap-6 ${
                  i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                }`}
              >
                {/* Dot */}
                <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 flex h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-accent-500 text-sm font-bold text-primary-900 shadow-lg z-10">
                  {i + 1}
                </div>

                {/* Card */}
                <div className={`ml-20 sm:ml-0 sm:w-[calc(50%-2rem)] ${i % 2 === 0 ? 'sm:pr-8' : 'sm:pl-8'}`}>
                  <div className="rounded-xl border border-primary-200/30 bg-white p-5 shadow-sm">
                    <h3 className="text-base font-bold text-primary-900">{item.step}</h3>
                    <p className="mt-1.5 text-sm text-primary-700/70">{item.detail}</p>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden sm:block sm:w-[calc(50%-2rem)]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section id="openings" className="section-gradient py-14 lg:py-20 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-3 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-accent-500/60" />
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent-600">Opportunities</span>
              <span className="h-px w-8 bg-accent-500/60" />
            </div>
            <h2 className="font-serif text-3xl font-bold text-primary-900 sm:text-4xl">
              Current Openings
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-primary-700/70">
              Find a role that matches your skills and ambitions. Every position is a launchpad.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {openings.map((job) => (
              <div
                key={job.title}
                className="group flex flex-col rounded-xl border border-primary-200/30 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent-500/40 hover:shadow-lg hover:shadow-primary-500/10"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-500 transition-all duration-300 group-hover:bg-accent-500 group-hover:text-white">
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary-900">{job.title}</h3>
                    <div className="mt-1 flex flex-wrap items-center gap-3 text-xs text-primary-700/60">
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5" />
                        {job.location}
                      </span>
                      <span className="rounded-full bg-accent-500/10 px-2.5 py-0.5 font-medium text-accent-600">
                        {job.type}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="mt-4 flex-grow text-sm leading-relaxed text-primary-700/70">
                  {job.description}
                </p>
                <Link
                  to={`/apply?position=${encodeURIComponent(job.title)}`}
                  className="mt-5 inline-flex items-center justify-center gap-2 rounded-lg bg-accent-500 px-5 py-2.5 text-sm font-semibold text-primary-900 transition-all duration-300 hover:bg-accent-600 hover:gap-3 hover:text-white"
                >
                  Apply Now
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary-800/50">
            <Send className="h-8 w-8 text-accent-500" />
          </div>
          <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl">
            Don&apos;t See Your Role?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-100/70">
            We are always looking for exceptional people. Submit your profile and we will reach
            out when a matching opportunity arises.
          </p>
          <Link
            to="/apply"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-accent-500 px-8 py-3.5 text-lg font-bold text-primary-900 shadow-lg transition-all duration-300 hover:bg-accent-600 hover:text-white hover:gap-3"
          >
            Submit Your Application
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Career;
