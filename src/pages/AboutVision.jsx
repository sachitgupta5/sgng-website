import { Target, Compass, Shield, Award, Lightbulb, Heart } from 'lucide-react';

const coreValues = [
  {
    icon: Shield,
    title: 'Integrity',
    description:
      'Maintaining the highest ethical and professional standards in every interaction, ensuring trust and transparency with our clients.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description:
      'Delivering superior quality in every engagement, striving for precision and thoroughness that set the benchmark in the industry.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description:
      'Leveraging cutting-edge technology and modern methodologies for efficient, future-ready solutions that drive measurable results.',
  },
  {
    icon: Heart,
    title: 'Client-Centricity',
    description:
      'Putting client interests at the heart of everything we do, building lasting partnerships rooted in understanding and responsiveness.',
  },
];

function AboutVision() {
  return (
    <div>
      {/* Hero Banner */}
      <section className="hero-gradient py-28 text-center lg:py-36">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-accent-500">
            Who We Are
          </p>
          <h1 className="font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Our Vision &amp; Mission
          </h1>
          <div className="mx-auto mt-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-accent-500/40" />
            <span className="h-1.5 w-1.5 rotate-45 bg-accent-500" />
            <span className="h-px w-10 bg-accent-500/40" />
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-100/80">
            Guided by purpose, driven by values — shaping the future of professional financial
            services.
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="flex justify-center lg:order-2">
              <div className="flex h-40 w-40 items-center justify-center rounded-full bg-primary-50 shadow-lg shadow-primary-500/10 sm:h-52 sm:w-52">
                <Target className="h-20 w-20 text-primary-500 sm:h-28 sm:w-28" strokeWidth={1.5} />
              </div>
            </div>
            <div className="lg:order-1">
              <span className="inline-block rounded-full bg-primary-50 px-4 py-1.5 text-sm font-semibold tracking-wide text-primary-500">
                Our Vision
              </span>
              <h2 className="mt-4 font-serif text-3xl font-bold text-primary-900 sm:text-4xl">
                &ldquo;Seeing invisible, achieving impossible&rdquo;
              </h2>
              <div className="mt-2 h-1 w-16 rounded bg-accent-500" />
              <p className="mt-6 text-lg leading-relaxed text-primary-700/80">
                Our vision is to raise benchmarks with every assignment by imparting knowledge with a
                goal to provide timely deliverable which makes us victorious in achieving
                client&apos;s satisfaction adding to SGNG &amp; Associates as a professional firm.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-gradient py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="flex justify-center">
              <div className="flex h-40 w-40 items-center justify-center rounded-full bg-accent-500/10 shadow-lg shadow-accent-500/10 sm:h-52 sm:w-52">
                <Compass
                  className="h-20 w-20 text-accent-600 sm:h-28 sm:w-28"
                  strokeWidth={1.5}
                />
              </div>
            </div>
            <div>
              <span className="inline-block rounded-full bg-accent-500/10 px-4 py-1.5 text-sm font-semibold tracking-wide text-accent-600">
                Our Mission
              </span>
              <h2 className="mt-4 font-serif text-3xl font-bold text-primary-900 sm:text-4xl">
                &ldquo;Let ideas transform into innovation&rdquo;
              </h2>
              <div className="mt-2 h-1 w-16 rounded bg-accent-500" />
              <p className="mt-6 text-lg leading-relaxed text-primary-700/80">
                Our mission is to provide comprehensive professional services which clients refer to
                their associates, employees boast upon, competitors acknowledge and set as standards
                for themselves.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-block rounded-full bg-primary-50 px-4 py-1.5 text-sm font-semibold tracking-wide text-primary-500">
              Our Foundation
            </span>
            <h2 className="mt-4 font-serif text-3xl font-bold text-primary-900 sm:text-4xl">
              Core Values We Live By
            </h2>
            <div className="mx-auto mt-2 h-1 w-16 rounded bg-accent-500" />
            <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-700/70">
              These principles form the bedrock of our practice and guide every decision we make as a
              firm.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((value) => (
              <div
                key={value.title}
                className="group rounded-xl border border-primary-200/30 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent-500/40 hover:shadow-lg hover:shadow-primary-500/10"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-50 text-primary-500 transition-all duration-300 group-hover:bg-accent-500 group-hover:text-white group-hover:shadow-lg group-hover:shadow-accent-500/20">
                  <value.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-primary-900">{value.title}</h3>
                <p className="mt-3 leading-relaxed text-primary-700/70">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="hero-gradient py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl">
            Built on Trust. Driven by Purpose.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-100/70">
            Our vision and values are not just words on a page — they define how we work with every
            client, every day.
          </p>
        </div>
      </section>
    </div>
  );
}

export default AboutVision;
