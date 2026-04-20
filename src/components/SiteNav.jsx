import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const navItems = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About Me" },
  { to: "/resume", label: "Resume" },
  { to: "/tutoring", label: "Tutoring" },
  { to: "/web", label: "Web Services" },
];

export default function SiteNav() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen || typeof window === "undefined") return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const mediaQuery = window.matchMedia("(min-width: 769px)");
    const handleChange = (event) => {
      if (event.matches) {
        setIsOpen(false);
      }
    };

    handleChange(mediaQuery);

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }

    mediaQuery.addListener(handleChange);
    return () => mediaQuery.removeListener(handleChange);
  }, []);

  return (
    <header className="siteNavShell">
      <nav className="siteNav" aria-label="Primary">
        <Link
          to="/"
          className="siteNav__brand"
          aria-label="Stephen Matheny home dashboard"
          onClick={() => setIsOpen(false)}
        >
          <span className="siteNav__eyebrow">smatheny.com</span>
          <span className="siteNav__title">Stephen Matheny</span>
        </Link>

        <button
          type="button"
          className={`siteNav__toggle${isOpen ? " is-open" : ""}`}
          aria-expanded={isOpen}
          aria-controls="site-navigation-links"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span className="siteNav__toggleLine" />
          <span className="siteNav__toggleLine" />
          <span className="siteNav__toggleLine" />
        </button>

        <div
          id="site-navigation-links"
          className={`siteNav__panel${isOpen ? " is-open" : ""}`}
        >
          <div className="siteNav__links">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `siteNav__link${isActive ? " is-active" : ""}`
                }
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>

      {isOpen ? (
        <button
          type="button"
          className="siteNav__backdrop"
          aria-label="Close navigation menu"
          onClick={() => setIsOpen(false)}
        />
      ) : null}
    </header>
  );
}
