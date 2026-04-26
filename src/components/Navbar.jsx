import { useState, useEffect, useRef, useCallback } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Lock } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Navigation Data                                                    */
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
  to: "/industries",
}));

const serviceLinks = [
  "Business Setup Advisory",
  "Transaction Advisory",
  "Taxation & Regulatory Services",
  "Audit & Assurance Services",
  "Non-Core Process Outsourcing",
  "Forensic Accounting and Fraud Detection",
  "GST Related Services",
  "Business Automation & AI Advisory",
  "Internal Financial Controls (IFC)",
  "Internal Audit",
  "Book Keeping & Accounting Services",
  "Physical Verification",
  "Startup Services",
].map((name) => ({
  label: name,
  to: `/services/${name
    .toLowerCase()
    .replace(/[()]/g, "")
    .replace(/[\s/&]+/g, "-")}`,
}));

/* ------------------------------------------------------------------ */
/*  Desktop Dropdown — premium cream panel with gold accents           */
/* ------------------------------------------------------------------ */

function DesktopDropdown({ label, links, isScrolled }) {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleEnter = () => {
    clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 180);
  };

  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  /* Determine if this is the wide services dropdown */
  const isWide = links.length > 6;

  return (
    <div
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {/* Trigger button */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium tracking-wide transition-all duration-300 cursor-pointer ${
          isScrolled
            ? "text-primary-800 hover:text-accent-600 hover:bg-primary-50/80"
            : "text-white/90 hover:text-white hover:bg-white/10"
        }`}
      >
        {label}
        <ChevronDown
          size={15}
          className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Panel */}
      <div
        className={`absolute left-1/2 -translate-x-1/2 top-full pt-3 z-50 transition-all duration-300 origin-top ${
          open
            ? "opacity-100 scale-y-100 translate-y-0 pointer-events-auto"
            : "opacity-0 scale-y-95 -translate-y-1 pointer-events-none"
        }`}
      >
        <div
          className={`rounded-xl bg-gradient-to-b from-primary-50 to-white shadow-[0_20px_60px_-15px_rgba(139,69,19,0.25)] ring-1 ring-primary-200/40 py-2 ${
            isWide ? "min-w-[520px] columns-2 gap-0" : "min-w-[260px]"
          }`}
        >
          {links.map(({ label: linkLabel, to }) => (
            <Link
              key={linkLabel}
              to={to}
              onClick={() => setOpen(false)}
              className="group flex items-center gap-3 px-5 py-2.5 text-sm text-primary-800 break-inside-avoid transition-all duration-200 hover:bg-primary-50"
            >
              <span className="w-0.5 h-5 rounded-full bg-transparent group-hover:bg-accent-500 transition-colors duration-200 shrink-0" />
              <span className="group-hover:text-accent-600 transition-colors duration-200">
                {linkLabel}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Mobile Accordion — slide-open sections with gold left borders      */
/* ------------------------------------------------------------------ */

function MobileAccordion({ label, links, onNavigate }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-primary-100/60">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between px-6 py-4 text-base font-semibold text-primary-800 hover:bg-primary-50/60 transition-colors duration-200 cursor-pointer"
      >
        {label}
        <ChevronDown
          size={18}
          className={`text-primary-400 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-primary-50/40 py-1 pb-2">
          {links.map(({ label: linkLabel, to }) => (
            <Link
              key={linkLabel}
              to={to}
              onClick={onNavigate}
              className="flex items-center gap-3 px-8 py-2.5 text-sm text-primary-700 hover:text-accent-600 transition-colors duration-200"
            >
              <span className="w-0.5 h-4 rounded-full bg-primary-200 hover:bg-accent-500 shrink-0" />
              {linkLabel}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  NavLink class helper — active/inactive states for top-level links  */
/* ------------------------------------------------------------------ */

function navLinkClasses(isScrolled) {
  return ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium tracking-wide transition-all duration-300 ${
      isActive
        ? isScrolled
          ? "text-accent-600 bg-primary-50/80"
          : "text-white bg-white/15"
        : isScrolled
          ? "text-primary-800 hover:text-accent-600 hover:bg-primary-50/80"
          : "text-white/90 hover:text-white hover:bg-white/10"
    }`;
}

/* ------------------------------------------------------------------ */
/*  Navbar — main export                                               */
/* ------------------------------------------------------------------ */

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  /* Close mobile menu on route change */
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  /* Scroll listener — flip at 32px */
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 32);
    handleScroll();
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
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-primary-50/95 backdrop-blur-lg shadow-[0_4px_30px_-5px_rgba(139,69,19,0.12)] border-b border-primary-100/50"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-16 lg:h-20">
        {/* ---- Logo ---- */}
        <Link to="/" className="flex items-center gap-2 shrink-0 group">
          <div className="flex flex-col">
            <div className="flex items-baseline gap-1.5">
              <span
                className={`text-2xl lg:text-[1.7rem] font-bold tracking-tight font-serif transition-colors duration-500 ${
                  isScrolled ? "text-primary-500" : "text-white"
                }`}
              >
                SGNG
              </span>
              <span
                className={`hidden sm:inline text-sm lg:text-base font-medium transition-colors duration-500 ${
                  isScrolled ? "text-primary-300" : "text-white/70"
                }`}
              >
                &amp; Associates
              </span>
            </div>
            <span
              className={`hidden sm:block text-[10px] tracking-[0.18em] uppercase transition-colors duration-500 leading-tight ${
                isScrolled ? "text-primary-300/80" : "text-white/50"
              }`}
            >
              Serving Globally...
            </span>
          </div>
        </Link>

        {/* ---- Desktop navigation ---- */}
        <div className="hidden lg:flex items-center gap-0.5">
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

          <NavLink to="/resources" className={navLinkClasses(isScrolled)}>
            Resources
          </NavLink>

          <NavLink to="/contact" className={navLinkClasses(isScrolled)}>
            Contact Us
          </NavLink>
        </div>

        {/* ---- CTA + Login (desktop) ---- */}
        <div className="hidden lg:flex items-center gap-2">
          <Link
            to="/contact"
            className={`inline-flex items-center px-6 py-2.5 rounded-lg text-sm font-semibold tracking-wide transition-all duration-500 ${
              isScrolled
                ? "bg-accent-500 text-primary-900 hover:bg-accent-600 hover:text-white shadow-[0_4px_20px_-4px_rgba(255,215,0,0.5)]"
                : "bg-white/95 text-primary-500 hover:bg-white shadow-[0_4px_20px_-4px_rgba(255,255,255,0.3)]"
            }`}
          >
            Get In Touch
          </Link>
          <Link
            to="/login"
            title="Team Login"
            className={`inline-flex items-center justify-center h-9 w-9 rounded-lg transition-all duration-300 ${
              isScrolled
                ? "text-primary-400 hover:text-accent-600 hover:bg-primary-100/60"
                : "text-white/50 hover:text-white hover:bg-white/10"
            }`}
          >
            <Lock size={15} />
          </Link>
        </div>

        {/* ---- Hamburger (mobile / tablet) ---- */}
        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((prev) => !prev)}
          className={`lg:hidden p-2 rounded-lg transition-colors duration-300 cursor-pointer ${
            isScrolled
              ? "text-primary-600 hover:bg-primary-100/60"
              : "text-white hover:bg-white/10"
          }`}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* ---- Mobile overlay (dim background) ---- */}
      <div
        className={`fixed inset-0 top-16 z-40 bg-primary-900/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMobile}
        aria-hidden="true"
      />

      {/* ---- Mobile slide-in panel ---- */}
      <div
        className={`fixed top-16 right-0 z-50 h-[calc(100dvh-4rem)] w-80 max-w-[85vw] bg-gradient-to-b from-primary-50 to-white shadow-[-8px_0_40px_-10px_rgba(139,69,19,0.2)] transition-transform duration-400 ease-in-out lg:hidden overflow-y-auto ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Gold accent strip at the top */}
        <div className="h-0.5 bg-gradient-to-r from-accent-500 via-primary-300 to-accent-500" />

        <div className="flex flex-col py-2">
          {/* Home */}
          <NavLink
            to="/"
            end
            onClick={closeMobile}
            className={({ isActive }) =>
              `px-6 py-4 text-base font-semibold border-b border-primary-100/60 transition-colors duration-200 ${
                isActive
                  ? "text-accent-600 bg-primary-50/60"
                  : "text-primary-800 hover:bg-primary-50/60 hover:text-accent-600"
              }`
            }
          >
            Home
          </NavLink>

          {/* Dropdown sections */}
          <MobileAccordion
            label="About Us"
            links={aboutLinks}
            onNavigate={closeMobile}
          />

          <MobileAccordion
            label="Industries"
            links={industryLinks}
            onNavigate={closeMobile}
          />

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
              `px-6 py-4 text-base font-semibold border-b border-primary-100/60 transition-colors duration-200 ${
                isActive
                  ? "text-accent-600 bg-primary-50/60"
                  : "text-primary-800 hover:bg-primary-50/60 hover:text-accent-600"
              }`
            }
          >
            Career
          </NavLink>

          {/* Resources */}
          <NavLink
            to="/resources"
            onClick={closeMobile}
            className={({ isActive }) =>
              `px-6 py-4 text-base font-semibold border-b border-primary-100/60 transition-colors duration-200 ${
                isActive
                  ? "text-accent-600 bg-primary-50/60"
                  : "text-primary-800 hover:bg-primary-50/60 hover:text-accent-600"
              }`
            }
          >
            Resources
          </NavLink>

          {/* Contact Us */}
          <NavLink
            to="/contact"
            onClick={closeMobile}
            className={({ isActive }) =>
              `px-6 py-4 text-base font-semibold border-b border-primary-100/60 transition-colors duration-200 ${
                isActive
                  ? "text-accent-600 bg-primary-50/60"
                  : "text-primary-800 hover:bg-primary-50/60 hover:text-accent-600"
              }`
            }
          >
            Contact Us
          </NavLink>

          {/* CTA button + Login */}
          <div className="px-6 pt-6 pb-8 space-y-3">
            <Link
              to="/contact"
              onClick={closeMobile}
              className="block w-full text-center rounded-lg bg-accent-500 px-5 py-3.5 text-sm font-bold tracking-wide text-primary-900 hover:bg-accent-600 hover:text-white transition-all duration-300 shadow-[0_4px_20px_-4px_rgba(255,215,0,0.4)]"
            >
              Get In Touch
            </Link>
            <Link
              to="/login"
              onClick={closeMobile}
              className="flex items-center justify-center gap-2 w-full rounded-lg border border-primary-200 px-5 py-2.5 text-xs font-medium text-primary-500 hover:bg-primary-50 transition-colors duration-200"
            >
              <Lock size={13} />
              Team Login
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
