import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, CalendarCheck, ArrowRight, Sparkles } from 'lucide-react';
import usePageMeta from '../hooks/usePageMeta';
import { APPS_SCRIPT_URL, countryCodes } from '../config/formsConfig';

const services = [
  'Business Setup Advisory',
  'Transaction Advisory',
  'Taxation & Regulatory',
  'Audit & Assurance',
  'Non-Core Process Outsourcing',
  'Forensic Accounting',
  'GST Services',
  'IND-AS Implementation',
  'Internal Financial Controls',
  'Internal Audit',
  'Bookkeeping & Accounting',
  'Physical Verification',
  'Startup Services',
  'Other',
];

const offices = [
  {
    name: 'New Delhi',
    badge: 'HQ',
    address: 'A-15/32, LGF, Vasant Vihar, New Delhi - 110057',
  },
  {
    name: 'Jammu & Kashmir',
    badge: null,
    address: 'Regional Office, J&K, India',
  },
  {
    name: 'Uttar Pradesh',
    badge: null,
    address: 'Regional Office, UP, India',
  },
  {
    name: 'Maharashtra',
    badge: null,
    address: 'Regional Office, Maharashtra, India',
  },
  {
    name: 'Karnataka',
    badge: null,
    address: 'New No. 233, Plot No. 16A, Doddanekundi II Phase, Bengaluru',
  },
];

const initialFormData = {
  fullName: '',
  email: '',
  countryCode: '+91',
  phone: '',
  service: '',
  message: '',
};

function validate(data) {
  const errors = {};
  if (!data.fullName.trim()) errors.fullName = 'Full name is required.';
  if (!data.email.trim()) errors.email = 'Email address is required.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    errors.email = 'Please enter a valid email address.';
  if (data.phone && !/^\d{4,15}$/.test(data.phone.replace(/[\s()-]/g, '')))
    errors.phone = 'Please enter a valid phone number.';
  if (!data.message.trim()) errors.message = 'Message is required.';
  return errors;
}

export default function Contact() {
  usePageMeta("Contact Us", "Get in touch with SGNG & Associates (I) — New Delhi office, phone, email, and inquiry form for all your financial service needs.");
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setIsSubmitting(true);
    setSubmitError('');

    const fullPhone = formData.phone
      ? `${formData.countryCode} ${formData.phone}`
      : '';

    try {
      await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain' },
        body: JSON.stringify({
          formType:  'contact',
          fullName:  formData.fullName,
          email:     formData.email,
          phone:     fullPhone || 'Not provided',
          service:   formData.service || 'Not specified',
          message:   formData.message,
        }),
      });
      // no-cors returns opaque response — assume success
      setSubmitted(true);
      setFormData(initialFormData);
      setErrors({});
    } catch {
      setSubmitError('Network error. Please try again or email info@sgng.in directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = (field) =>
    `mt-1.5 block w-full rounded-lg border px-4 py-3 text-primary-900 shadow-sm placeholder:text-primary-300 focus:outline-none focus:ring-2 transition-colors duration-200 ${
      errors[field]
        ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
        : 'border-primary-200/50 focus:border-accent-500 focus:ring-accent-500/20'
    }`;

  return (
    <>
      {/* Hero */}
      <section className="hero-gradient py-12 text-center lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-accent-500">
            Get In Touch
          </p>
          <h1 className="font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Contact Us
          </h1>
          <div className="mx-auto mt-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-accent-500/40" />
            <span className="h-1.5 w-1.5 rotate-45 bg-accent-500" />
            <span className="h-px w-10 bg-accent-500/40" />
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-100/80">
            Get in touch with our team of experts
          </p>
        </div>
      </section>

      {/* Form & Info */}
      <section className="section-gradient py-10 lg:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="rounded-xl border border-primary-200/30 bg-white p-8 shadow-lg sm:p-10">
                <h2 className="font-serif text-2xl font-bold text-primary-900 sm:text-3xl">
                  Send Us a Message
                </h2>
                <p className="mt-2 text-primary-700/70">
                  Fill out the form below and we will get back to you within 24 hours.
                </p>

                {submitted && (
                  <div className="mt-6 rounded-lg border border-green-200 bg-green-50 p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100">
                        <Send className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-green-800">Message Sent Successfully!</h3>
                        <p className="text-sm text-green-700">
                          Thank you for reaching out. Our team will respond to your inquiry shortly.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {submitError && (
                  <div className="mt-6 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                    {submitError}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-primary-800">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={inputClasses('fullName')}
                      />
                      {errors.fullName && (
                        <p className="mt-1.5 text-sm text-red-600">{errors.fullName}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-primary-800">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className={inputClasses('email')}
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-sm text-red-600">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium text-primary-800">
                        Phone Number
                      </label>
                      <div className="mt-1.5 flex gap-2">
                        <select
                          name="countryCode"
                          value={formData.countryCode}
                          onChange={handleChange}
                          className="w-36 rounded-lg border border-primary-200/50 bg-white px-3 py-3 text-sm text-primary-900 shadow-sm focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/20 transition-colors duration-200"
                        >
                          {countryCodes.map((c) => (
                            <option key={c.code} value={c.code}>
                              {c.code} {c.country}
                            </option>
                          ))}
                        </select>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="XXXXX XXXXX"
                          className={`flex-1 ${inputClasses('phone')}`}
                        />
                      </div>
                      {errors.phone && (
                        <p className="mt-1.5 text-sm text-red-600">{errors.phone}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-primary-800">
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="mt-1.5 block w-full rounded-lg border border-primary-200/50 bg-white px-4 py-3 text-primary-900 shadow-sm focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/20 transition-colors duration-200"
                      >
                        <option value="">Select a service</option>
                        {services.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-primary-800">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us how we can help you..."
                      className={`resize-y ${inputClasses('message')}`}
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-sm text-red-600">{errors.message}</p>
                    )}
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-2 rounded-lg bg-accent-500 px-8 py-3.5 text-sm font-semibold text-primary-900 shadow-sm transition-all duration-200 hover:bg-accent-600 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary-900/30 border-t-primary-900" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Info Cards */}
            <div className="space-y-8">
              <div className="rounded-xl border border-primary-200/30 bg-white p-6 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-50">
                    <Phone className="h-6 w-6 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-900">Phone</h3>
                    <a
                      href="tel:+919059052673"
                      className="mt-1 block text-primary-700/70 transition-colors duration-200 hover:text-accent-600"
                    >
                      +91 90590 52673
                    </a>
                    <a
                      href="tel:+919873164704"
                      className="block text-primary-700/70 transition-colors duration-200 hover:text-accent-600"
                    >
                      +91 98731 64704
                    </a>
                    <a
                      href="https://wa.me/919059052673"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-accent-600 transition-colors duration-200 hover:text-accent-500"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-primary-200/30 bg-white p-6 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-50">
                    <Mail className="h-6 w-6 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-900">Email</h3>
                    <a
                      href="mailto:info@sgng.in"
                      className="mt-1 block text-primary-700/70 transition-colors duration-200 hover:text-accent-600"
                    >
                      info@sgng.in
                    </a>
                    <p className="mt-1 text-sm text-primary-700/50">
                      We typically respond within 24 hours
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-primary-200/30 bg-white p-6 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-50">
                    <Clock className="h-6 w-6 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-900">Office Hours</h3>
                    <p className="mt-1 text-primary-700/70">Mon - Sat</p>
                    <p className="text-primary-700/70">10:00 AM - 7:00 PM</p>
                    <p className="mt-1 text-sm text-primary-700/50">
                      Sunday &amp; public holidays closed
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl hero-gradient p-6 text-white shadow-lg">
                <h3 className="text-lg font-semibold">Need Urgent Help?</h3>
                <p className="mt-2 text-sm text-primary-100/70">
                  Call us directly or send a WhatsApp message for immediate assistance from our
                  experts.
                </p>
                <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="tel:+919059052673"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-primary-500 transition-colors duration-200 hover:bg-primary-50"
                  >
                    <Phone className="h-4 w-4" />
                    Call Now
                  </a>
                  <a
                    href="https://wa.me/919059052673"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent-500 px-4 py-2.5 text-sm font-semibold text-primary-900 transition-colors duration-200 hover:bg-accent-600"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book a Consultation */}
      <section className="relative overflow-hidden bg-white py-14 lg:py-20">
        {/* Background pattern */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-accent-500/5 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-primary-500/5 blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(139,69,19,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(139,69,19,0.4) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">

            {/* Left — text & CTA */}
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent-500/30 bg-accent-500/10 px-4 py-1.5">
                <Sparkles className="h-4 w-4 text-accent-600" />
                <span className="text-xs font-bold uppercase tracking-widest text-accent-600">
                  Book a Consultation
                </span>
              </div>

              <h2 className="font-serif text-3xl font-bold leading-tight text-primary-900 sm:text-4xl lg:text-5xl">
                Ask an Expert,{' '}
                <span className="text-accent-600">Get Answers Now</span>
              </h2>

              <p className="mt-5 max-w-lg text-lg leading-relaxed text-primary-700/80">
                Skip the back-and-forth. Book a live consultation with our Chartered
                Accountants and get personalised advice on tax, compliance, business setup,
                or any financial query &mdash; all in one call.
              </p>

              {/* CTA button */}
              <div className="mt-10">
                <a
                  href="https://calendar.app.google/mbSQb5cabEj4oj7y9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 rounded-xl bg-primary-500 px-8 py-4 text-base font-bold text-white shadow-xl shadow-primary-500/25 transition-all duration-300 hover:bg-primary-600 hover:shadow-2xl hover:shadow-primary-500/35 hover:gap-4"
                >
                  <CalendarCheck className="h-5 w-5" />
                  Book a Consultation
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            {/* Right — visual card */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-accent-500/10 via-primary-500/5 to-transparent blur-2xl" />
              <div className="relative w-full max-w-md rounded-2xl border border-primary-200/40 bg-gradient-to-br from-primary-50 to-white p-8 shadow-2xl sm:p-10">
                {/* Decorative top bar */}
                <div className="absolute inset-x-0 top-0 h-1.5 rounded-t-2xl bg-gradient-to-r from-accent-500 via-accent-600 to-primary-500" />

                <div className="space-y-4 mt-2">
                  {/* Mock calendar slots */}
                  {['Tax & Compliance Query', 'Business Setup Discussion', 'Audit & Assurance Review', 'GST & Regulatory Advice'].map(
                    (slot, i) => (
                      <div
                        key={slot}
                        className={`flex items-center gap-3 rounded-lg border px-4 py-3 transition-all duration-200 ${
                          i === 0
                            ? 'border-accent-500/40 bg-accent-500/5 shadow-sm'
                            : 'border-primary-100 bg-white'
                        }`}
                      >
                        <div
                          className={`h-2.5 w-2.5 rounded-full ${
                            i === 0 ? 'bg-accent-500 shadow-sm shadow-accent-500/50' : 'bg-primary-200'
                          }`}
                        />
                        <span className={`text-sm ${i === 0 ? 'font-semibold text-primary-900' : 'text-primary-600/70'}`}>
                          {slot}
                        </span>
                        {i === 0 && (
                          <span className="ml-auto rounded-full bg-accent-500 px-2 py-0.5 text-[10px] font-bold text-primary-900">
                            POPULAR
                          </span>
                        )}
                      </div>
                    )
                  )}
                </div>

                <div className="mt-6 rounded-lg border border-dashed border-primary-200 bg-primary-50/50 p-4 text-center">
                  <p className="text-xs font-medium text-primary-600/70">
                    Available slots updated in real-time from our calendar
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="section-gradient py-10 lg:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-serif text-3xl font-bold text-primary-900 sm:text-4xl">
              Our Office Locations
            </h2>
            <div className="mx-auto mt-3 h-1 w-16 rounded bg-accent-500" />
            <p className="mx-auto mt-4 max-w-2xl text-primary-700/70">
              With offices across India, we are always close to you. Visit us at any of our locations
              for a consultation.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {offices.map((office) => (
              <div
                key={office.name}
                className="group rounded-xl border border-primary-200/30 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:border-accent-500/40 hover:shadow-lg hover:shadow-primary-500/10"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary-50 transition-all duration-300 group-hover:bg-accent-500 group-hover:text-white">
                  <MapPin className="h-6 w-6 text-primary-500 group-hover:text-white" />
                </div>
                <h3 className="mt-4 font-semibold text-primary-900">
                  {office.name}
                  {office.badge && (
                    <span className="ml-2 inline-block rounded-full bg-accent-500 px-2.5 py-0.5 text-xs font-bold text-primary-900">
                      {office.badge}
                    </span>
                  )}
                </h3>
                <p className="mt-1.5 text-sm text-primary-700/60">{office.address}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
