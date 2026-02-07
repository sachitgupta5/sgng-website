import { Target, Compass, Shield, Award, Lightbulb, Heart } from "lucide-react";

const coreValues = [
  {
    icon: Shield,
    title: "Integrity",
    description:
      "Maintaining the highest ethical and professional standards in every interaction, ensuring trust and transparency with our clients.",
    color: "bg-blue-100 text-blue-700",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "Delivering superior quality in every engagement, striving for precision and thoroughness that set the benchmark in the industry.",
    color: "bg-amber-100 text-amber-700",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Leveraging cutting-edge technology and modern methodologies for efficient, future-ready solutions that drive measurable results.",
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    icon: Heart,
    title: "Client-Centricity",
    description:
      "Putting client interests at the heart of everything we do, building lasting partnerships rooted in understanding and responsiveness.",
    color: "bg-rose-100 text-rose-700",
  },
];

function AboutVision() {
  return (
    <div>
      {/* Hero Banner */}
      <section className="relative bg-primary-900 py-24 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 opacity-90" />
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl animate-fade-in-up">
            Our Vision &amp; Mission
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-200 animate-fade-in-up animation-delay-200">
            Guided by purpose, driven by values — shaping the future of
            professional financial services.
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="flex justify-center lg:order-2">
              <div className="flex h-40 w-40 items-center justify-center rounded-full bg-primary-100 sm:h-52 sm:w-52">
                <Target className="h-20 w-20 text-primary-600 sm:h-28 sm:w-28" strokeWidth={1.5} />
              </div>
            </div>
            <div className="lg:order-1">
              <span className="inline-block rounded-full bg-primary-100 px-4 py-1.5 text-sm font-semibold tracking-wide text-primary-700">
                Our Vision
              </span>
              <h2 className="mt-4 font-serif text-3xl font-bold text-gray-900 sm:text-4xl">
                Where We Are Headed
              </h2>
              <div className="mt-2 h-1 w-16 rounded bg-accent-500" />
              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                To be a leading tech-enabled chartered accountancy firm,
                delivering innovative and reliable financial solutions that
                empower businesses to achieve sustainable growth across India
                and the UAE.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-gray-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="flex justify-center">
              <div className="flex h-40 w-40 items-center justify-center rounded-full bg-accent-500/10 sm:h-52 sm:w-52">
                <Compass className="h-20 w-20 text-accent-600 sm:h-28 sm:w-28" strokeWidth={1.5} />
              </div>
            </div>
            <div>
              <span className="inline-block rounded-full bg-accent-500/10 px-4 py-1.5 text-sm font-semibold tracking-wide text-accent-600">
                Our Mission
              </span>
              <h2 className="mt-4 font-serif text-3xl font-bold text-gray-900 sm:text-4xl">
                What Drives Us Every Day
              </h2>
              <div className="mt-2 h-1 w-16 rounded bg-accent-500" />
              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                To provide comprehensive, technology-driven professional
                services with the highest standards of integrity, fostering
                collaborative growth and exceeding client expectations through
                expert financial guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-block rounded-full bg-primary-100 px-4 py-1.5 text-sm font-semibold tracking-wide text-primary-700">
              Our Foundation
            </span>
            <h2 className="mt-4 font-serif text-3xl font-bold text-gray-900 sm:text-4xl">
              Core Values We Live By
            </h2>
            <div className="mx-auto mt-2 h-1 w-16 rounded bg-accent-500" />
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
              These principles form the bedrock of our practice and guide every
              decision we make as a firm.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((value) => (
              <div
                key={value.title}
                className="group rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-xl ${value.color} transition-transform duration-300 group-hover:scale-110`}
                >
                  <value.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-gray-900">
                  {value.title}
                </h3>
                <p className="mt-3 leading-relaxed text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-primary-900 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl">
            Built on Trust. Driven by Purpose.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-200">
            Our vision and values are not just words on a page — they define how
            we work with every client, every day.
          </p>
        </div>
      </section>
    </div>
  );
}

export default AboutVision;
