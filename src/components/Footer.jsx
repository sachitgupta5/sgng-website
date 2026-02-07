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
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Industries", path: "/industries" },
  { name: "Career", path: "/career" },
  { name: "Contact", path: "/contact" },
];

const services = [
  { name: "Business Setup Advisory", path: "/services/business-setup-advisory" },
  { name: "Taxation & Regulatory", path: "/services/taxation-regulatory" },
  { name: "Audit & Assurance", path: "/services/audit-assurance" },
  { name: "GST Services", path: "/services/gst-services" },
  { name: "Startup Services", path: "/services/startup-services" },
];

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/sgng-associates",
    icon: Linkedin,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/sgngassociates",
    icon: Twitter,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/sgngassociates",
    icon: Facebook,
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
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1 -- About */}
          <div>
            <h3 className="font-serif text-2xl font-bold text-white">
              SGNG &amp; Associates
            </h3>
            <p className="mt-4 leading-relaxed text-gray-400">
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
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="inline-block text-gray-400 transition-colors duration-200 hover:text-accent-500 hover:translate-x-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 -- Our Services */}
          <div>
            <h4 className="text-lg font-semibold text-white">Our Services</h4>
            <div className="mt-1 mb-4 h-0.5 w-12 bg-accent-500" />
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="inline-block text-gray-400 transition-colors duration-200 hover:text-accent-500 hover:translate-x-1"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 -- Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white">Contact Info</h4>
            <div className="mt-1 mb-4 h-0.5 w-12 bg-accent-500" />
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+919910764704"
                  className="flex items-start gap-3 text-gray-400 transition-colors duration-200 hover:text-accent-500"
                >
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-accent-500" />
                  <span>+91 99107 64704</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@sgng.in"
                  className="flex items-start gap-3 text-gray-400 transition-colors duration-200 hover:text-accent-500"
                >
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-accent-500" />
                  <span>info@sgng.in</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-gray-400">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent-500" />
                  <span>New Delhi, India</span>
                </div>
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
