import { Link } from 'react-router-dom';
import {
  TrendingUp,
  Scale,
  Layers,
  Cpu,
  MapPin,
  Briefcase,
  Mail,
  ArrowRight,
  Send,
} from 'lucide-react';

const whyWorkWithUs = [
  {
    icon: TrendingUp,
    title: 'Professional Growth',
    description:
      'Continuous learning and development opportunities with exposure to complex, high-impact engagements that accelerate your career.',
  },
  {
    icon: Scale,
    title: 'Work-Life Balance',
    description:
      'A flexible and supportive work environment that values your well-being and empowers you to do your best work.',
  },
  {
    icon: Layers,
    title: 'Diverse Projects',
    description:
      'Work across industries and service verticals — from startups to established corporations, taxation to audit and advisory.',
  },
  {
    icon: Cpu,
    title: 'Innovation Culture',
    description:
      'Be part of a tech-enabled CA firm that embraces modern tools, automation, and forward-thinking approaches to professional services.',
  },
];

const openings = [
  {
    title: 'Senior Auditor',
    location: 'Delhi',
    type: 'Full-time',
    description:
      'Lead statutory and internal audit engagements for diverse clients. You will manage audit teams, ensure compliance with auditing standards, and deliver insightful audit reports to stakeholders.',
  },
  {
    title: 'Tax Consultant',
    location: 'Mumbai',
    type: 'Full-time',
    description:
      'Advise clients on direct and indirect taxation matters, prepare tax computations, and develop tax planning strategies. Strong knowledge of Income Tax Act and recent amendments is essential.',
  },
  {
    title: 'GST Analyst',
    location: 'Delhi',
    type: 'Full-time',
    description:
      'Handle GST return filings, reconciliations, and compliance reviews for clients across sectors. Stay updated with the latest GST notifications and assist in resolving client queries.',
  },
];

function Career() {
  return (
    <div>
      {/* Hero */}
      <section className="hero-gradient py-28 text-center lg:py-36">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-accent-500">
            Join Us
          </p>
          <h1 className="font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Career at SGNG
          </h1>
          <div className="mx-auto mt-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-accent-500/40" />
            <span className="h-1.5 w-1.5 rotate-45 bg-accent-500" />
            <span className="h-px w-10 bg-accent-500/40" />
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-100/80">
            Join a team where growth is collaborative and excellence is the standard.
          </p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-block rounded-full bg-primary-50 px-4 py-1.5 text-sm font-semibold tracking-wide text-primary-500">
              Life at SGNG
            </span>
            <h2 className="mt-4 font-serif text-3xl font-bold text-primary-900 sm:text-4xl">
              Why Work With Us
            </h2>
            <div className="mx-auto mt-2 h-1 w-16 rounded bg-accent-500" />
            <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-700/70">
              At SGNG &amp; Associates, we foster an environment where professionals thrive,
              innovate, and build meaningful careers.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {whyWorkWithUs.map((item) => (
              <div
                key={item.title}
                className="group rounded-xl border border-primary-200/30 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent-500/40 hover:shadow-lg hover:shadow-primary-500/10"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-50 text-primary-500 transition-all duration-300 group-hover:bg-accent-500 group-hover:text-white group-hover:shadow-lg group-hover:shadow-accent-500/20">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-primary-900">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-primary-700/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="section-gradient py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-block rounded-full bg-accent-500/10 px-4 py-1.5 text-sm font-semibold tracking-wide text-accent-600">
              Opportunities
            </span>
            <h2 className="mt-4 font-serif text-3xl font-bold text-primary-900 sm:text-4xl">
              Current Openings
            </h2>
            <div className="mx-auto mt-2 h-1 w-16 rounded bg-accent-500" />
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {openings.map((job) => (
              <div
                key={job.title}
                className="group flex flex-col rounded-xl border border-primary-200/30 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent-500/40 hover:shadow-lg hover:shadow-primary-500/10"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary-500">
                    <Briefcase className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary-900">{job.title}</h3>
                    <div className="mt-1 flex flex-wrap items-center gap-3 text-sm text-primary-700/60">
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {job.location}
                      </span>
                      <span className="rounded-full bg-accent-500/10 px-2.5 py-0.5 text-xs font-medium text-accent-600">
                        {job.type}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="mt-5 flex-grow leading-relaxed text-primary-700/70">
                  {job.description}
                </p>
                <a
                  href={`mailto:careers@sgng.in?subject=Application for ${job.title} - ${job.location}`}
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-accent-500 px-6 py-3 text-sm font-semibold text-primary-900 transition-all duration-300 hover:bg-accent-600 hover:gap-3"
                >
                  Apply Now
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary-800/50">
            <Send className="h-8 w-8 text-accent-500" />
          </div>
          <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl">
            Don&apos;t See a Suitable Position?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-100/70">
            We are always on the lookout for talented professionals. Send your resume and we will
            reach out when a matching opportunity arises.
          </p>
          <a
            href="mailto:careers@sgng.in?subject=General Career Inquiry"
            className="mt-8 inline-flex items-center gap-2 bg-accent-500 px-8 py-3.5 text-lg font-semibold text-primary-900 shadow-lg transition-all duration-300 hover:bg-accent-600 hover:gap-3"
          >
            <Mail className="h-5 w-5" />
            careers@sgng.in
          </a>
        </div>
      </section>
    </div>
  );
}

export default Career;
