import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about/vision" },
  { name: "Industries", path: "/industries" },
  { name: "Our Services", path: "/services" },
  { name: "Career", path: "/career" },
  { name: "International Desk", path: "/international-desk" },
  { name: "Resources", path: "/resources" },
  { name: "Contact Us", path: "/contact" },
];

const serviceLinks = [
  { name: "Business Setup Advisory", path: "/services" },
  { name: "Taxation & Regulatory Services", path: "/services" },
  { name: "Audit & Assurance Services", path: "/services" },
  { name: "Forensic Accounting", path: "/services" },
  { name: "GST Services", path: "/services" },
  { name: "Internal Audit", path: "/services" },
  { name: "Bookkeeping Services", path: "/services" },
  { name: "Startup Services", path: "/services" },
];

const industryLinks = [
  { name: "Restaurants", path: "/industries" },
  { name: "Transport", path: "/industries" },
  { name: "Travel & Tourism", path: "/industries" },
  { name: "Manufacturing", path: "/industries" },
  { name: "Forex", path: "/industries" },
  { name: "Malls / Societies", path: "/industries" },
  { name: "Companies", path: "/industries" },
  { name: "Retail Trading", path: "/industries" },
  { name: "Banking", path: "/industries" },
];

function ColumnHeading({ children }) {
  return (
    <div className="mb-6">
      <h4 className="text-lg font-semibold tracking-wide text-primary-50">
        {children}
      </h4>
      <div className="mt-2 h-[2px] w-10 rounded-full bg-gradient-to-r from-accent-500 to-accent-600" />
    </div>
  );
}

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-primary-900">
      {/* Subtle gold shimmer line at the very top */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-accent-500/60 to-transparent" />

      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* ── Column 1 — About Us ── */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="font-serif text-2xl font-bold leading-tight text-accent-500">
              SGNG<span className="text-primary-50"> &amp; Associates (I)</span>
            </h3>

            <p className="mt-5 text-sm leading-relaxed text-primary-100/70">
              A tech-enabled Chartered Accountancy firm delivering innovative financial solutions across India, UAE, USA, Canada, UK, Singapore &amp; Australia.
            </p>

          </div>

          {/* ── Column 2 — Quick Links ── */}
          <div>
            <ColumnHeading>Quick Links</ColumnHeading>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="inline-block text-sm text-primary-100/60 transition-colors duration-200 hover:text-accent-500"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Column 3 — Services ── */}
          <div>
            <ColumnHeading>Services</ColumnHeading>
            <ul className="space-y-2.5">
              {serviceLinks.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="inline-block text-sm text-primary-100/60 transition-colors duration-200 hover:text-accent-500"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Column 4 — Industries ── */}
          <div>
            <ColumnHeading>Industries</ColumnHeading>
            <ul className="space-y-2.5">
              {industryLinks.map((industry) => (
                <li key={industry.name}>
                  <Link
                    to={industry.path}
                    className="inline-block text-sm text-primary-100/60 transition-colors duration-200 hover:text-accent-500"
                  >
                    {industry.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Column 5 — Contact Info ── */}
          <div>
            <ColumnHeading>Contact Info</ColumnHeading>
            <ul className="space-y-5">
              {/* Address */}
              <li className="flex items-start gap-3 text-sm text-primary-100/60">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" />
                <span>
                  A-15/32, LGF, Vasant Vihar,
                  <br />
                  New Delhi - 110057
                </span>
              </li>

              {/* Locations */}
              <li className="flex items-start gap-3 text-sm text-primary-100/60">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" />
                <span>New Delhi, J&amp;K, UP, Maharashtra, Karnataka</span>
              </li>

              {/* Phone */}
              <li>
                <a
                  href="tel:+919059052673"
                  className="flex items-start gap-3 text-sm text-primary-100/60 transition-colors duration-200 hover:text-accent-500"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" />
                  <span>
                    +91 90590 52673
                    <br />
                    +91 98731 64704
                  </span>
                </a>
              </li>

              {/* Email */}
              <li>
                <a
                  href="mailto:info@sgng.in"
                  className="flex items-start gap-3 text-sm text-primary-100/60 transition-colors duration-200 hover:text-accent-500"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" />
                  <span>info@sgng.in</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-100/10">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-primary-100/40">
            &copy; 2024 SGNG &amp; Associates (I). All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
