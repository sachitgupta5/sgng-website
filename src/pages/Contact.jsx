import { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const services = [
  "Business Setup Advisory",
  "Transaction Advisory",
  "Taxation & Regulatory",
  "Audit & Assurance",
  "Non-Core Process Outsourcing",
  "Forensic Accounting",
  "GST Services",
  "IND-AS Implementation",
  "Internal Financial Controls",
  "Internal Audit",
  "Bookkeeping & Accounting",
  "Physical Verification",
  "Startup Services",
  "Other",
];

const offices = [
  {
    name: "New Delhi",
    badge: "HQ",
    address: "Head Office, New Delhi, India",
  },
  {
    name: "Jammu & Kashmir",
    badge: null,
    address: "Regional Office, J&K, India",
  },
  {
    name: "Uttar Pradesh",
    badge: null,
    address: "Regional Office, UP, India",
  },
  {
    name: "Maharashtra",
    badge: null,
    address: "Regional Office, Maharashtra, India",
  },
  {
    name: "Karnataka",
    badge: null,
    address: "Regional Office, Karnataka, India",
  },
];

const initialFormData = {
  fullName: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

/* ------------------------------------------------------------------ */
/*  Validation helpers                                                 */
/* ------------------------------------------------------------------ */

function validate(data) {
  const errors = {};

  if (!data.fullName.trim()) {
    errors.fullName = "Full name is required.";
  }

  if (!data.email.trim()) {
    errors.email = "Email address is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (data.phone && !/^[+\d\s()-]{7,20}$/.test(data.phone)) {
    errors.phone = "Please enter a valid phone number.";
  }

  if (!data.message.trim()) {
    errors.message = "Message is required.";
  }

  return errors;
}

/* ------------------------------------------------------------------ */
/*  Contact Page                                                       */
/* ------------------------------------------------------------------ */

export default function Contact() {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear field error on change
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate async submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData(initialFormData);
      setErrors({});
    }, 1200);
  };

  return (
    <>
      {/* ============================================================ */}
      {/*  Hero Banner                                                  */}
      {/* ============================================================ */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 pt-28 pb-20 lg:pt-36 lg:pb-28">
        {/* Decorative overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.04%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-100" />

        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl animate-fade-in-up">
            Contact Us
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-200 sm:text-xl animate-fade-in-up animation-delay-200">
            Get in touch with our team of experts
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  Contact Form & Information                                   */}
      {/* ============================================================ */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {/* ---- LEFT COLUMN: Contact Form ---- */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl bg-white p-8 shadow-lg sm:p-10">
                <h2 className="font-serif text-2xl font-bold text-gray-900 sm:text-3xl">
                  Send Us a Message
                </h2>
                <p className="mt-2 text-gray-600">
                  Fill out the form below and we will get back to you within 24
                  hours.
                </p>

                {/* Success message */}
                {submitted && (
                  <div className="mt-6 rounded-lg border border-green-200 bg-green-50 p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100">
                        <Send className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-green-800">
                          Message Sent Successfully!
                        </h3>
                        <p className="text-sm text-green-700">
                          Thank you for reaching out. Our team will respond to
                          your inquiry shortly.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Form */}
                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                  {/* Full Name & Email -- side by side on larger screens */}
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    {/* Full Name */}
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={`mt-1.5 block w-full rounded-lg border px-4 py-3 text-gray-900 shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 transition-colors duration-200 ${
                          errors.fullName
                            ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                            : "border-gray-300 focus:border-primary-500 focus:ring-primary-200"
                        }`}
                      />
                      {errors.fullName && (
                        <p className="mt-1.5 text-sm text-red-600">
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className={`mt-1.5 block w-full rounded-lg border px-4 py-3 text-gray-900 shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 transition-colors duration-200 ${
                          errors.email
                            ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                            : "border-gray-300 focus:border-primary-500 focus:ring-primary-200"
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-sm text-red-600">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Phone & Service -- side by side */}
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 99107 64704"
                        className={`mt-1.5 block w-full rounded-lg border px-4 py-3 text-gray-900 shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 transition-colors duration-200 ${
                          errors.phone
                            ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                            : "border-gray-300 focus:border-primary-500 focus:ring-primary-200"
                        }`}
                      />
                      {errors.phone && (
                        <p className="mt-1.5 text-sm text-red-600">
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    {/* Service Interested In */}
                    <div>
                      <label
                        htmlFor="service"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="mt-1.5 block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200 transition-colors duration-200"
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

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us how we can help you..."
                      className={`mt-1.5 block w-full resize-y rounded-lg border px-4 py-3 text-gray-900 shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 transition-colors duration-200 ${
                        errors.message
                          ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                          : "border-gray-300 focus:border-primary-500 focus:ring-primary-200"
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-sm text-red-600">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
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

            {/* ---- RIGHT COLUMN: Contact Information ---- */}
            <div className="space-y-8">
              {/* Phone */}
              <div className="rounded-2xl bg-white p-6 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-100">
                    <Phone className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <a
                      href="tel:+919910764704"
                      className="mt-1 block text-gray-600 transition-colors duration-200 hover:text-primary-600"
                    >
                      +91 99107 64704
                    </a>
                    <a
                      href="https://wa.me/919910764704"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-green-600 transition-colors duration-200 hover:text-green-700"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="rounded-2xl bg-white p-6 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-100">
                    <Mail className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <a
                      href="mailto:info@sgng.in"
                      className="mt-1 block text-gray-600 transition-colors duration-200 hover:text-primary-600"
                    >
                      info@sgng.in
                    </a>
                    <p className="mt-1 text-sm text-gray-500">
                      We typically respond within 24 hours
                    </p>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="rounded-2xl bg-white p-6 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-100">
                    <Clock className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Office Hours
                    </h3>
                    <p className="mt-1 text-gray-600">Mon - Sat</p>
                    <p className="text-gray-600">9:00 AM - 6:00 PM</p>
                    <p className="mt-1 text-sm text-gray-500">
                      Sunday &amp; public holidays closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick CTA */}
              <div className="rounded-2xl bg-gradient-to-br from-primary-600 to-primary-800 p-6 text-white shadow-lg">
                <h3 className="text-lg font-semibold">Need Urgent Help?</h3>
                <p className="mt-2 text-sm text-primary-200">
                  Call us directly or send a WhatsApp message for immediate
                  assistance from our experts.
                </p>
                <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="tel:+919910764704"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-primary-600 transition-colors duration-200 hover:bg-primary-50"
                  >
                    <Phone className="h-4 w-4" />
                    Call Now
                  </a>
                  <a
                    href="https://wa.me/919910764704"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-green-500 px-4 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-green-600"
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

      {/* ============================================================ */}
      {/*  Office Locations                                             */}
      {/* ============================================================ */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section heading */}
          <div className="text-center">
            <h2 className="font-serif text-3xl font-bold text-gray-900 sm:text-4xl">
              Our Office Locations
            </h2>
            <div className="mx-auto mt-3 h-1 w-16 rounded bg-accent-500" />
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              With offices across India, we are always close to you. Visit us at
              any of our locations for a consultation.
            </p>
          </div>

          {/* Office cards grid */}
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {offices.map((office) => (
              <div
                key={office.name}
                className="group rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:border-primary-200 hover:shadow-md"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary-50 transition-colors duration-300 group-hover:bg-primary-100">
                  <MapPin className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="mt-4 font-semibold text-gray-900">
                  {office.name}
                  {office.badge && (
                    <span className="ml-2 inline-block rounded-full bg-accent-500 px-2.5 py-0.5 text-xs font-bold text-white">
                      {office.badge}
                    </span>
                  )}
                </h3>
                <p className="mt-1.5 text-sm text-gray-500">{office.address}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  Google Maps Embed                                            */}
      {/* ============================================================ */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-serif text-3xl font-bold text-gray-900 sm:text-4xl">
              Find Us on the Map
            </h2>
            <div className="mx-auto mt-3 h-1 w-16 rounded bg-accent-500" />
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Our head office is located in New Delhi. Feel free to visit us
              during business hours.
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-2xl shadow-lg">
            <iframe
              title="SGNG &amp; Associates - New Delhi Office"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83923192776!2d77.06889754725782!3d28.52758200617607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi%2C%20India!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div>
        </div>
      </section>
    </>
  );
}
