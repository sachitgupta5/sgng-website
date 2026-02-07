import { useState, useEffect, useRef, useCallback } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const aboutLinks = [
  { label: "Our Vision & Mission", to: "/about/vision" },
  { label: "Our Team", to: "/about/team" },
];

const industryLinks = [
  "Restaurants",
  "Transport",
  "Travel & Tourism",
  "Manufacturing",
  "Forex",
  "Malls / Societies",
  "Companies",
  "Retail Trading",
  "Banking",
].map((name) => ({
  label: name,
  to: `/industries#${name.toLowerCase().replace(/[\s/&]+/g, "-")}`,
}));

const serviceLinks = [
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
].map((name) => ({
  label: name,
  to: `/services#${name.toLowerCase().replace(/[\s/&]+/g, "-")}`,
}));

/* ------------------------------------------------------------------ */
/*  Desktop dropdown                                                   */
/* ------------------------------------------------------------------ */

function DesktopDropdown({ label, links, isScrolled }) {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleEnter = () => {
    clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 150);
  };

  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  return (
    <div
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 cursor-pointer ${
          isScrolled
            ? "text-gray-700 hover:text-primary-600 hover:bg-primary-50"
            : "text-white/90 hover:text-white hover:bg-white/10"
        }`}
      >
        {label}
        <ChevronDown
          size={16}
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Dropdown panel */}
      <div
        className={`absolute left-0 top-full pt-2 z-50 transition-all duration-200 origin-top ${
          open
            ? "opacity-100 scale-y-100 pointer-events-auto"
            : "opacity-0 scale-y-95 pointer-events-none"
        }`}
      >
        <div className="min-w-60 rounded-lg bg-white shadow-lg ring-1 ring-black/5 py-2">
          {links.map(({ label: linkLabel, to }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-150"
            >
              {linkLabel}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Mobile accordion                                                   */
/* ------------------------------------------------------------------ */

function MobileAccordion({ label, links, onNavigate }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 last:border-b-0">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between px-4 py-3 text-base font-medium text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-150 cursor-pointer"
      >
        {label}
        <ChevronDown
          size={18}
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-gray-50 py-1">
          {links.map(({ label: linkLabel, to }) => (
            <Link
              key={to}
              to={to}
              onClick={onNavigate}
              className="block px-8 py-2.5 text-sm text-gray-600 hover:text-primary-600 hover:bg-primary-50 transition-colors duration-150"
            >
              {linkLabel}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Nav link style helper                                              */
/* ------------------------------------------------------------------ */

function navLinkClasses(isScrolled) {
  return ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
      isActive
        ? isScrolled
          ? "text-primary-600 bg-primary-50"
          : "text-white bg-white/15"
        : isScrolled
          ? "text-gray-700 hover:text-primary-600 hover:bg-primary-50"
          : "text-white/90 hover:text-white hover:bg-white/10"
    }`;
}

/* ------------------------------------------------------------------ */
/*  Navbar                                                             */
/* ------------------------------------------------------------------ */

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  /* Close mobile menu on route change */
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  /* Scroll listener */
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll(); // set initial state
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-16 lg:h-20">
        {/* ---- Logo ---- */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <span
            className={`text-xl lg:text-2xl font-bold tracking-tight transition-colors duration-300 ${
              isScrolled ? "text-primary-600" : "text-white"
            }`}
          >
            SGNG
          </span>
          <span
            className={`hidden sm:inline text-sm lg:text-base font-medium transition-colors duration-300 ${
              isScrolled ? "text-gray-500" : "text-white/70"
            }`}
          >
            &amp; Associates
          </span>
        </Link>

        {/* ---- Desktop navigation ---- */}
        <div className="hidden lg:flex items-center gap-1">
          <NavLink to="/" end className={navLinkClasses(isScrolled)}>
            Home
          </NavLink>

          <DesktopDropdown
            label="About Us"
            links={aboutLinks}
            isScrolled={isScrolled}
          />

          <DesktopDropdown
            label="Industries"
            links={industryLinks}
            isScrolled={isScrolled}
          />

          <DesktopDropdown
            label="Our Services"
            links={serviceLinks}
            isScrolled={isScrolled}
          />

          <NavLink to="/career" className={navLinkClasses(isScrolled)}>
            Career
          </NavLink>

          <NavLink to="/contact" className={navLinkClasses(isScrolled)}>
            Contact Us
          </NavLink>
        </div>

        {/* ---- CTA (desktop) ---- */}
        <Link
          to="/contact"
          className={`hidden lg:inline-flex items-center px-5 py-2.5 rounded-md text-sm font-semibold transition-all duration-300 ${
            isScrolled
              ? "bg-primary-600 text-white hover:bg-primary-700 shadow-sm"
              : "bg-white text-primary-600 hover:bg-white/90 shadow-sm"
          }`}
        >
          Get In Touch
        </Link>

        {/* ---- Hamburger button (mobile) ---- */}
        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((prev) => !prev)}
          className={`lg:hidden p-2 rounded-md transition-colors duration-200 cursor-pointer ${
            isScrolled
              ? "text-gray-700 hover:bg-gray-100"
              : "text-white hover:bg-white/10"
          }`}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* ---- Mobile overlay ---- */}
      <div
        className={`fixed inset-0 top-16 z-40 bg-black/40 transition-opacity duration-300 lg:hidden ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMobile}
        aria-hidden="true"
      />

      {/* ---- Mobile slide-in panel ---- */}
      <div
        className={`fixed top-16 right-0 z-50 h-[calc(100dvh-4rem)] w-80 max-w-[85vw] bg-white shadow-2xl transition-transform duration-300 ease-in-out lg:hidden overflow-y-auto ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col py-2">
          {/* Home */}
          <NavLink
            to="/"
            end
            onClick={closeMobile}
            className={({ isActive }) =>
              `px-4 py-3 text-base font-medium border-b border-gray-100 transition-colors duration-150 ${
                isActive
                  ? "text-primary-600 bg-primary-50"
                  : "text-gray-700 hover:bg-primary-50 hover:text-primary-600"
              }`
            }
          >
            Home
          </NavLink>

          {/* About Us */}
          <MobileAccordion
            label="About Us"
            links={aboutLinks}
            onNavigate={closeMobile}
          />

          {/* Industries */}
          <MobileAccordion
            label="Industries"
            links={industryLinks}
            onNavigate={closeMobile}
          />

          {/* Our Services */}
          <MobileAccordion
            label="Our Services"
            links={serviceLinks}
            onNavigate={closeMobile}
          />

          {/* Career */}
          <NavLink
            to="/career"
            onClick={closeMobile}
            className={({ isActive }) =>
              `px-4 py-3 text-base font-medium border-b border-gray-100 transition-colors duration-150 ${
                isActive
                  ? "text-primary-600 bg-primary-50"
                  : "text-gray-700 hover:bg-primary-50 hover:text-primary-600"
              }`
            }
          >
            Career
          </NavLink>

          {/* Contact Us */}
          <NavLink
            to="/contact"
            onClick={closeMobile}
            className={({ isActive }) =>
              `px-4 py-3 text-base font-medium border-b border-gray-100 transition-colors duration-150 ${
                isActive
                  ? "text-primary-600 bg-primary-50"
                  : "text-gray-700 hover:bg-primary-50 hover:text-primary-600"
              }`
            }
          >
            Contact Us
          </NavLink>

          {/* CTA */}
          <div className="px-4 pt-4 pb-6">
            <Link
              to="/contact"
              onClick={closeMobile}
              className="block w-full text-center rounded-md bg-primary-600 px-5 py-3 text-sm font-semibold text-white hover:bg-primary-700 transition-colors duration-200 shadow-sm"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
