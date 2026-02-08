import { Link } from "react-router-dom";
import { Users, GraduationCap, Clock, Star, ArrowRight } from "lucide-react";

const teamMembers = [
  {
    name: "CA Sachit Gupta",
    designation: "Founding Partner",
    initials: "SG",
    color: "bg-primary-600",
    bio: "A visionary leader with over 15 years of experience in taxation, audit, and business advisory. Sachit founded SGNG with a mission to blend technology with traditional CA practices.",
  },
  {
    name: "CA Naman Gupta",
    designation: "Partner",
    initials: "NG",
    color: "bg-accent-500",
    bio: "Specializing in corporate finance and regulatory compliance, Naman brings deep expertise in helping businesses navigate complex financial landscapes across India and the UAE.",
  },
  {
    name: "CA Priya Sharma",
    designation: "Senior Associate",
    initials: "PS",
    color: "bg-emerald-600",
    bio: "Priya leads the audit and assurance vertical with meticulous attention to detail and a commitment to delivering thorough, timely, and insightful audit reports.",
  },
  {
    name: "CA Rajesh Kumar",
    designation: "Tax Consultant",
    initials: "RK",
    color: "bg-rose-600",
    bio: "With extensive experience in direct and indirect taxation, Rajesh helps clients optimize their tax positions while ensuring full compliance with the latest regulations.",
  },
];

const highlights = [
  {
    icon: GraduationCap,
    title: "Deep Expertise",
    description:
      "Qualified Chartered Accountants with specialized knowledge in taxation, audit, GST, and corporate advisory.",
  },
  {
    icon: Clock,
    title: "Decades of Experience",
    description:
      "Our team brings decades of combined experience across diverse industries and financial disciplines.",
  },
  {
    icon: Star,
    title: "Unwavering Dedication",
    description:
      "Committed to exceeding client expectations through proactive service delivery and personalized attention.",
  },
];

function AboutTeam() {
  return (
    <div>
      {/* Hero Banner */}
      <section className="relative bg-primary-900 py-24 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 opacity-90" />
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl animate-fade-in-up">
            Our Team
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-200 animate-fade-in-up animation-delay-200">
            Meet the people behind SGNG &amp; Associates
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary-100">
              <Users className="h-8 w-8 text-primary-600" />
            </div>
            <h2 className="font-serif text-3xl font-bold text-gray-900 sm:text-4xl">
              A Team of Distinguished Pros
            </h2>
            <div className="mx-auto mt-2 h-1 w-16 rounded bg-accent-500" />
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              We provide an all-inclusive agglomeration of specially designed and
              multidisciplinary expert services that meet the requirements of
              every single need of our clients. Our company of Chartered
              Accountants constitutes a group of expert skill set that is
              equipped to provide excellent monetary solutions and counsel.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              We are defined by our drive to make a difference. Good
              isn&apos;t the best. We aim for the skies at whatever we do –
              from helping businesses understand their true potential to
              magnifying their profits.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="bg-gray-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-block rounded-full bg-primary-100 px-4 py-1.5 text-sm font-semibold tracking-wide text-primary-700">
              Leadership
            </span>
            <h2 className="mt-4 font-serif text-3xl font-bold text-gray-900 sm:text-4xl">
              Meet Our Leaders
            </h2>
            <div className="mx-auto mt-2 h-1 w-16 rounded bg-accent-500" />
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="group rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Avatar */}
                <div
                  className={`mx-auto flex h-24 w-24 items-center justify-center rounded-full ${member.color} text-2xl font-bold text-white shadow-md transition-transform duration-300 group-hover:scale-105`}
                >
                  {member.initials}
                </div>

                {/* Info */}
                <h3 className="mt-6 text-xl font-bold text-gray-900">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-accent-600">
                  {member.designation}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-gray-600">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Team Section */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-block rounded-full bg-accent-500/10 px-4 py-1.5 text-sm font-semibold tracking-wide text-accent-600">
              Our Edge
            </span>
            <h2 className="mt-4 font-serif text-3xl font-bold text-gray-900 sm:text-4xl">
              Why Our Team Stands Out
            </h2>
            <div className="mx-auto mt-2 h-1 w-16 rounded bg-accent-500" />
          </div>

          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {highlights.map((item) => (
              <div key={item.title} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-100 text-primary-600">
                  <item.icon className="h-8 w-8" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-3 leading-relaxed text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-900 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl">
            Want to Be Part of Our Team?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-200">
            We are always looking for talented professionals who share our
            passion for excellence and innovation.
          </p>
          <Link
            to="/career"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-accent-500 px-8 py-3.5 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:bg-accent-600 hover:gap-3"
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
