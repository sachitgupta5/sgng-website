import { Link } from 'react-router-dom';
import { Users, GraduationCap, Clock, Star, ArrowRight } from 'lucide-react';

const teamMembers = [
  {
    name: 'Sachit Gupta',
    designation: 'Co-Founder & Managing Partner, FCA',
    initials: 'SG',
    bio: '15+ years post-qualification experience specializing in Direct Taxation Advisory, Compliance Advisory, Business AI Automation Advisory, and International & Cross-Border Taxations.',
  },
  {
    name: 'Nitika Gupta',
    designation: 'Co-Founder & Partner, FCA',
    initials: 'NG',
    bio: '15 years of experience specializing in Agriculture audit and quality certification, helping businesses in Supply Chain Management.',
  },
  {
    name: 'Gaurav Singla',
    designation: 'Senior Partner, FCA',
    initials: 'GS',
    bio: '15+ years in practice with deep experience in finalization of accounts for Banks and PSUs. Expert in Financial Planning, Capital Restructuring, Public Issues, Takeovers, and corporate advisory with top corporate houses in India and abroad.',
  },
  {
    name: 'Ravi Garg',
    designation: 'SOX Expert',
    initials: 'RG',
    bio: '8+ years of experience specializing in SOX Audit for international clients. Also handles Internal Process Audit engagements.',
  },
  {
    name: 'Nand Kishor Agarwal',
    designation: 'Startup Advisor, CA',
    initials: 'NA',
    bio: 'Strong experience in Corporate Audit & Assurance, Taxation and Compliances. Specializes in Startup funding, structuring, aggregators and assistance.',
  },
  {
    name: 'JS Dangwal',
    designation: 'Advisor',
    initials: 'JD',
    bio: 'Retired Bank Manager from a reputed PSU Bank with 35+ years in Banking. Associated with the firm for 5+ years, specializing in Bank audit and Stock audit assignments.',
  },
  {
    name: 'Arun Koul',
    designation: 'Internal Audit, CA',
    initials: 'AK',
    bio: '20+ years in Management Consultancy with specialization in Forex, Hotels, and Telecom industries. Actively engaged in GST implementation including E-invoicing for large corporates and knowledge sharing on Indirect Taxation.',
  },
];

const highlights = [
  {
    icon: GraduationCap,
    title: 'Deep Expertise',
    description:
      'Qualified Chartered Accountants with specialized knowledge in taxation, audit, GST, and corporate advisory.',
  },
  {
    icon: Clock,
    title: 'Decades of Experience',
    description:
      'Our team brings decades of combined experience across diverse industries and financial disciplines.',
  },
  {
    icon: Star,
    title: 'Unwavering Dedication',
    description:
      'Committed to exceeding client expectations through proactive service delivery and personalized attention.',
  },
];

function AboutTeam() {
  return (
    <div>
      {/* Hero Banner */}
      <section className="hero-gradient py-12 text-center lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-accent-500">
            Our People
          </p>
          <h1 className="font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Our Team
          </h1>
          <div className="mx-auto mt-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-accent-500/40" />
            <span className="h-1.5 w-1.5 rotate-45 bg-accent-500" />
            <span className="h-px w-10 bg-accent-500/40" />
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-100/80">
            Meet the people behind SGNG &amp; Associates
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="bg-white py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary-50">
              <Users className="h-8 w-8 text-primary-500" />
            </div>
            <h2 className="font-serif text-3xl font-bold text-primary-900 sm:text-4xl">
              A Team of Distinguished Pros
            </h2>
            <div className="mx-auto mt-2 h-1 w-16 rounded bg-accent-500" />
            <p className="mt-6 text-lg leading-relaxed text-primary-700/80">
              We provide an all-inclusive agglomeration of specially designed and multidisciplinary
              expert services that meet the requirements of every single need of our clients. Our
              company of Chartered Accountants constitutes a group of expert skill set that is
              equipped to provide excellent monetary solutions and counsel.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-primary-700/80">
              We are defined by our drive to make a difference. Good isn&apos;t the best. We aim for
              the skies at whatever we do – from helping businesses understand their true potential to
              magnifying their profits.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="section-gradient py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-block rounded-full bg-primary-50 px-4 py-1.5 text-sm font-semibold tracking-wide text-primary-500">
              Leadership
            </span>
            <h2 className="mt-4 font-serif text-3xl font-bold text-primary-900 sm:text-4xl">
              Meet Our Leaders
            </h2>
            <div className="mx-auto mt-2 h-1 w-16 rounded bg-accent-500" />
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="group rounded-xl border border-primary-200/30 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent-500/40 hover:shadow-lg hover:shadow-primary-500/10"
              >
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-primary-500 text-2xl font-bold text-white shadow-md transition-all duration-300 group-hover:bg-accent-500 group-hover:shadow-accent-500/30">
                  {member.initials}
                </div>
                <h3 className="mt-6 text-xl font-bold text-primary-900">{member.name}</h3>
                <p className="mt-1 text-sm font-medium text-accent-600">{member.designation}</p>
                <p className="mt-4 text-sm leading-relaxed text-primary-700/70">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Team Section */}
      <section className="bg-white py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-block rounded-full bg-accent-500/10 px-4 py-1.5 text-sm font-semibold tracking-wide text-accent-600">
              Our Edge
            </span>
            <h2 className="mt-4 font-serif text-3xl font-bold text-primary-900 sm:text-4xl">
              Why Our Team Stands Out
            </h2>
            <div className="mx-auto mt-2 h-1 w-16 rounded bg-accent-500" />
          </div>

          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {highlights.map((item) => (
              <div key={item.title} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-50 text-primary-500 transition-all duration-300 hover:bg-accent-500 hover:text-white hover:shadow-lg hover:shadow-accent-500/20">
                  <item.icon className="h-8 w-8" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-primary-900">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-primary-700/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="hero-gradient py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl">
            Want to Be Part of Our Team?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-100/70">
            We are always looking for talented professionals who share our passion for excellence and
            innovation.
          </p>
          <Link
            to="/career"
            className="mt-8 inline-flex items-center gap-2 bg-accent-500 px-8 py-3.5 text-lg font-semibold text-primary-900 shadow-lg transition-all duration-300 hover:bg-accent-600 hover:gap-3"
          >
            Join Our Team
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default AboutTeam;
