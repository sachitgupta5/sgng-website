import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Upload, Send, CheckCircle2, ArrowLeft, FileText, X } from 'lucide-react';
import usePageMeta from '../hooks/usePageMeta';

const positions = [
  'Senior Auditor',
  'Tax Consultant',
  'GST Analyst',
  'Audit Associate',
  'Accounts Executive',
  'Intern / Articleship',
  'Other (specify in cover letter)',
];

const WEB3FORMS_KEY = 'YOUR_ACCESS_KEY';

const initialForm = {
  fullName: '',
  email: '',
  phone: '',
  position: '',
  experience: '',
  coverLetter: '',
};

function validate(data, resume) {
  const errors = {};
  if (!data.fullName.trim()) errors.fullName = 'Full name is required.';
  if (!data.email.trim()) errors.email = 'Email is required.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    errors.email = 'Enter a valid email.';
  if (!data.phone.trim()) errors.phone = 'Phone number is required.';
  else if (!/^[+\d\s()-]{7,20}$/.test(data.phone))
    errors.phone = 'Enter a valid phone number.';
  if (!data.position) errors.position = 'Select a position.';
  if (!resume) errors.resume = 'Please upload your resume.';
  else if (resume.size > 5 * 1024 * 1024)
    errors.resume = 'File size must be under 5 MB.';
  return errors;
}

export default function Apply() {
  usePageMeta(
    'Apply Now',
    'Submit your application to join SGNG & Associates (I) — upload your resume and apply for open positions in audit, tax, GST, and advisory.'
  );

  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState(initialForm);
  const [resume, setResume] = useState(null);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  useEffect(() => {
    const pos = searchParams.get('position');
    if (pos && positions.includes(pos)) {
      setFormData((prev) => ({ ...prev, position: pos }));
    }
  }, [searchParams]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => { const n = { ...prev }; delete n[name]; return n; });
  };

  const handleFile = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setResume(file);
      if (errors.resume) setErrors((prev) => { const n = { ...prev }; delete n.resume; return n; });
    }
  };

  const removeFile = () => {
    setResume(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError('');
    const validationErrors = validate(formData, resume);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmitting(true);

    const payload = new FormData();
    payload.append('access_key', WEB3FORMS_KEY);
    payload.append('subject', `New Job Application: ${formData.position}`);
    payload.append('from_name', formData.fullName);
    payload.append('Full Name', formData.fullName);
    payload.append('Email', formData.email);
    payload.append('Phone', formData.phone);
    payload.append('Position', formData.position);
    payload.append('Experience', formData.experience || 'Not specified');
    payload.append('Cover Letter', formData.coverLetter || 'Not provided');
    payload.append('Resume', resume);

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: payload,
      });
      const result = await res.json();
      if (result.success) {
        setSubmitted(true);
        setFormData(initialForm);
        setResume(null);
        setErrors({});
      } else {
        setSubmitError(result.message || 'Submission failed. Please try again or email partner@sgng.in directly.');
      }
    } catch {
      setSubmitError('Network error. Please try again or email partner@sgng.in directly.');
    } finally {
      setSubmitting(false);
    }
  };

  const inputCls = (field) =>
    `mt-1.5 block w-full rounded-lg border px-4 py-3 text-primary-900 shadow-sm placeholder:text-primary-300 focus:outline-none focus:ring-2 transition-colors duration-200 ${
      errors[field]
        ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
        : 'border-primary-200/50 focus:border-accent-500 focus:ring-accent-500/20'
    }`;

  return (
    <div>
      {/* Hero */}
      <section className="hero-gradient py-12 text-center lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-accent-500">
            Join Our Team
          </p>
          <h1 className="font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Apply Now
          </h1>
          <div className="mx-auto mt-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-accent-500/40" />
            <span className="h-1.5 w-1.5 rotate-45 bg-accent-500" />
            <span className="h-px w-10 bg-accent-500/40" />
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-100/80">
            Upload your resume and tell us about yourself. We review every application personally.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="section-gradient py-12 lg:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link
            to="/career"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-primary-500 transition-colors hover:text-accent-600"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Careers
          </Link>

          <div className="rounded-xl border border-primary-200/30 bg-white p-8 shadow-lg sm:p-10">
            {submitted ? (
              <div className="py-12 text-center">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-50">
                  <CheckCircle2 className="h-10 w-10 text-green-500" />
                </div>
                <h2 className="font-serif text-2xl font-bold text-primary-900">Application Submitted!</h2>
                <p className="mx-auto mt-3 max-w-md text-primary-700/70">
                  Thank you for your interest in joining SGNG & Associates (I). Our team will review
                  your application and get back to you shortly.
                </p>
                <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                  <Link
                    to="/career"
                    className="inline-flex items-center gap-2 rounded-lg bg-accent-500 px-6 py-3 text-sm font-bold text-primary-900 transition-all hover:bg-accent-600 hover:text-white"
                  >
                    View More Openings
                  </Link>
                  <Link
                    to="/"
                    className="inline-flex items-center gap-2 rounded-lg border border-primary-200 px-6 py-3 text-sm font-medium text-primary-600 transition-colors hover:bg-primary-50"
                  >
                    Go Home
                  </Link>
                </div>
              </div>
            ) : (
              <>
                <h2 className="font-serif text-2xl font-bold text-primary-900 sm:text-3xl">
                  Your Application
                </h2>
                <p className="mt-2 text-primary-700/70">
                  Fields marked with <span className="text-red-500">*</span> are required.
                </p>

                {submitError && (
                  <div className="mt-6 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                    {submitError}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                  {/* Name + Email */}
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
                        placeholder="Your full name"
                        className={inputCls('fullName')}
                      />
                      {errors.fullName && <p className="mt-1.5 text-sm text-red-600">{errors.fullName}</p>}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-primary-800">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className={inputCls('email')}
                      />
                      {errors.email && <p className="mt-1.5 text-sm text-red-600">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Phone + Position */}
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-primary-800">
                        Phone <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        className={inputCls('phone')}
                      />
                      {errors.phone && <p className="mt-1.5 text-sm text-red-600">{errors.phone}</p>}
                    </div>
                    <div>
                      <label htmlFor="position" className="block text-sm font-medium text-primary-800">
                        Position <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="position"
                        name="position"
                        value={formData.position}
                        onChange={handleChange}
                        className={`${inputCls('position')} bg-white`}
                      >
                        <option value="">Select a position</option>
                        {positions.map((p) => (
                          <option key={p} value={p}>{p}</option>
                        ))}
                      </select>
                      {errors.position && <p className="mt-1.5 text-sm text-red-600">{errors.position}</p>}
                    </div>
                  </div>

                  {/* Experience */}
                  <div>
                    <label htmlFor="experience" className="block text-sm font-medium text-primary-800">
                      Years of Experience
                    </label>
                    <select
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      className="mt-1.5 block w-full rounded-lg border border-primary-200/50 bg-white px-4 py-3 text-primary-900 shadow-sm focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/20 transition-colors duration-200"
                    >
                      <option value="">Select experience</option>
                      <option value="Fresher / Student">Fresher / Student</option>
                      <option value="0-1 years">0-1 years</option>
                      <option value="1-3 years">1-3 years</option>
                      <option value="3-5 years">3-5 years</option>
                      <option value="5-10 years">5-10 years</option>
                      <option value="10+ years">10+ years</option>
                    </select>
                  </div>

                  {/* Resume Upload */}
                  <div>
                    <label className="block text-sm font-medium text-primary-800">
                      Resume / CV <span className="text-red-500">*</span>
                    </label>
                    {resume ? (
                      <div className="mt-1.5 flex items-center gap-4 rounded-lg border border-accent-500/30 bg-accent-500/5 px-4 py-3">
                        <FileText className="h-5 w-5 shrink-0 text-accent-600" />
                        <div className="flex-1 min-w-0">
                          <p className="truncate text-sm font-medium text-primary-900">{resume.name}</p>
                          <p className="text-xs text-primary-500">{(resume.size / 1024).toFixed(0)} KB</p>
                        </div>
                        <button
                          type="button"
                          onClick={removeFile}
                          className="shrink-0 rounded-full p-1 text-primary-400 hover:bg-primary-100 hover:text-primary-600 transition-colors cursor-pointer"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    ) : (
                      <label
                        htmlFor="resume"
                        className={`mt-1.5 flex cursor-pointer flex-col items-center gap-3 rounded-lg border-2 border-dashed px-6 py-8 text-center transition-colors duration-200 ${
                          errors.resume
                            ? 'border-red-300 bg-red-50/30'
                            : 'border-primary-200 bg-primary-50/30 hover:border-accent-500/40 hover:bg-accent-500/5'
                        }`}
                      >
                        <Upload className="h-8 w-8 text-primary-300" />
                        <div>
                          <span className="text-sm font-semibold text-accent-600">Click to upload</span>
                          <span className="text-sm text-primary-500"> or drag and drop</span>
                        </div>
                        <p className="text-xs text-primary-400">PDF, DOC, DOCX (max 5 MB)</p>
                        <input
                          type="file"
                          id="resume"
                          accept=".pdf,.doc,.docx"
                          onChange={handleFile}
                          className="hidden"
                        />
                      </label>
                    )}
                    {errors.resume && <p className="mt-1.5 text-sm text-red-600">{errors.resume}</p>}
                  </div>

                  {/* Cover Letter */}
                  <div>
                    <label htmlFor="coverLetter" className="block text-sm font-medium text-primary-800">
                      Cover Letter / Message
                    </label>
                    <textarea
                      id="coverLetter"
                      name="coverLetter"
                      rows={4}
                      value={formData.coverLetter}
                      onChange={handleChange}
                      placeholder="Tell us why you'd like to join SGNG & Associates (I)..."
                      className="mt-1.5 block w-full resize-y rounded-lg border border-primary-200/50 px-4 py-3 text-primary-900 shadow-sm placeholder:text-primary-300 focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/20 transition-colors duration-200"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent-500 px-8 py-3.5 text-sm font-bold text-primary-900 shadow-sm transition-all duration-300 hover:bg-accent-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 cursor-pointer"
                  >
                    {submitting ? (
                      <>
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary-900/30 border-t-primary-900" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Submit Application
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-primary-500">
                    By submitting, you agree that your information will be reviewed by our HR team.
                    You can also email your resume directly to{' '}
                    <a href="mailto:partner@sgng.in" className="font-medium text-accent-600 hover:underline">
                      partner@sgng.in
                    </a>
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
