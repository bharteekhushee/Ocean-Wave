import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Container } from "@/shared/components/common/Container";
import "@/shared/components/layout/Navbar/Navbar.css";

const navigationItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/#about" },
  { label: "Our Ecosystem", href: "/#ecosystem" },
  { label: "Textiles", href: "/#textiles" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const closeMenu = () => setMenuOpen(false);
  // Close mobile menu whenever route or section changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname, location.hash]);
  // Active navigation detection
  const isActive = (href: string) => {
    // Home page
    if (href === "/") {
      return (
        location.pathname === "/" &&
        location.hash === ""
      );
    }
    // Contact page
    if (href === "/contact") {
      return location.pathname === "/contact";
    }
    // Homepage section navigation
    if (href.startsWith("/#")) {
      return (
        location.pathname === "/" &&
        location.hash === href.substring(1)
      );
    }
    return false;
  };
  return (
    <header className="site-header">
      <Container className="navbar-container">
        {/* LOGO */}
        <Link
          to="/"
          className="navbar-logo"
          aria-label="Ocean Wave Logistics home"
          onClick={closeMenu}
        >
          <img
            src="/assets/images/logo/ocean-wave-logo-light.png"
            alt="Ocean Wave Logistics Ltd"
            fetchPriority="high"
          />
        </Link>
        {/* DESKTOP NAVIGATION */}
        <nav
          className="desktop-navigation"
          aria-label="Main navigation"
        >
          {navigationItems.map((item) => {
            const active = isActive(item.href);
            const isContact = item.href === "/contact";
            return (
              <Link
                key={item.label}
                to={item.href}
                className={`nav-link ${
                  active ? "active" : ""
                } ${
                  isContact ? "nav-contact-cta" : ""
                }`}
                aria-current={
                  active
                    ? isContact ? "page" : "location"
                    : undefined
                }
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          className="mobile-menu-toggle"
          onClick={() => setMenuOpen((previous) => !previous)}
          aria-label={
            menuOpen ? "Close navigation" : "Open navigation"
          }
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? (
            <X size={25} aria-hidden="true" />
          ) : (
            <Menu size={25} aria-hidden="true" />
          )}
        </button>
      </Container>
      {/* MOBILE NAVIGATION */}
      <nav
        id="mobile-navigation"
        className={`mobile-navigation ${
          menuOpen ? "open" : ""
        }`}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
        inert={!menuOpen}
      >
        <Container className="mobile-navigation-inner">
          {navigationItems.map((item) => {
            const active = isActive(item.href);
            const isContact = item.href === "/contact";
            return (
              <Link
                key={item.label}
                to={item.href}
                onClick={closeMenu}
                className={`mobile-nav-link ${
                  active ? "active" : ""
                } ${
                  isContact ? "mobile-contact-cta" : ""
                }`}
                aria-current={
                  active
                    ? isContact ? "page" : "location"
                    : undefined
                }
              >
                {item.label}
              </Link>
            );
          })}
        </Container>
      </nav>
    </header>
  );
}