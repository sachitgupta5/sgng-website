import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
} from "lucide-react";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about/vision" },
  { name: "Industries", path: "/industries" },
  { name: "Our Services", path: "/services" },
  { name: "Career", path: "/career" },
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

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/sgng-associates",
    icon: Linkedin,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/sgngassociates",
    icon: Facebook,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/sgngassociates",
    icon: Twitter,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/sgngassociates",
    icon: Instagram,
  },
];

function Footer() {
  return (
    <footer className="bg-primary-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Column 1 -- About */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="font-serif text-2xl font-bold text-white">
              SGNG &amp; Associates
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              A tech-enabled Chartered Accountancy firm delivering innovative
              financial solutions. We combine deep domain expertise with
              modern technology to help businesses navigate complex regulatory
              landscapes and achieve sustainable growth.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-800 text-gray-400 transition-colors duration-200 hover:bg-accent-500 hover:text-white"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 -- Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <div className="mt-1 mb-4 h-0.5 w-12 bg-accent-500" />
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="inline-block text-sm text-gray-400 transition-colors duration-200 hover:text-accent-500"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 -- Our Services */}
          <div>
            <h4 className="text-lg font-semibold text-white">Services</h4>
            <div className="mt-1 mb-4 h-0.5 w-12 bg-accent-500" />
            <ul className="space-y-2.5">
              {serviceLinks.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="inline-block text-sm text-gray-400 transition-colors duration-200 hover:text-accent-500"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 -- Industries */}
          <div>
            <h4 className="text-lg font-semibold text-white">Industries</h4>
            <div className="mt-1 mb-4 h-0.5 w-12 bg-accent-500" />
            <ul className="space-y-2.5">
              {industryLinks.map((industry) => (
                <li key={industry.name}>
                  <Link
                    to={industry.path}
                    className="inline-block text-sm text-gray-400 transition-colors duration-200 hover:text-accent-500"
                  >
                    {industry.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5 -- Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white">Contact Info</h4>
            <div className="mt-1 mb-4 h-0.5 w-12 bg-accent-500" />
            <ul className="space-y-4">
              <li>
                <div className="flex items-start gap-3 text-sm text-gray-400">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" />
                  <span>New Delhi, J&amp;K, UP, Maharashtra, Karnataka</span>
                </div>
              </li>
              <li>
                <a
                  href="tel:+919910764704"
                  className="flex items-start gap-3 text-sm text-gray-400 transition-colors duration-200 hover:text-accent-500"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" />
                  <span>+91 99107 64704</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@sgng.in"
                  className="flex items-start gap-3 text-sm text-gray-400 transition-colors duration-200 hover:text-accent-500"
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
      <div className="border-t border-primary-800">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500">
            &copy; 2024 SGNG &amp; Associates. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
