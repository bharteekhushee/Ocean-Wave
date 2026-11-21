import {
  ExternalLink,
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "@/shared/components/common/Container";
import "@/shared/components/layout/footer/Footer.css";
const companyLinks = [
  { label: "About Us", href: "/#about" },
  { label: "Our Ecosystem", href: "/#ecosystem" },
  { label: "Textiles", href: "/#textiles" },
  { label: "Contact", href: "/contact" },
];
const ecosystemPartners = [
  {
    label: "Exporter.AI",
    href: "https://exporterai.com/",
  },
  {
    label: "OriginConnect",
    href: "https://originconnect.uk/",
  },
];
const contactDetails = [
  {
    icon: MapPin,
    label: "Address",
    value: (
      <>
        4 St Catherines Road,
        <br />
        Poundhill, Crawley, UK. RH10 3TA
      </>
    ),
    href: undefined,
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+44 7417 325737",
    href: "tel:+44 7417 325737",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@oceanwavelogistics.co.uk",
    href: "mailto:info@oceanwavelogistics.co.uk",
  },
];
export function Footer() {
  return (
    <footer className="site-footer">
      <Container>
        <div className="footer-main">
          {/* Brand Column */}
          <div className="footer-column footer-brand-column">
            <Link
              to="/"
              className="footer-logo-link"
              aria-label="Ocean Wave Logistics home"
            >
              <img
                src="/assets/images/logo/ocean-wave-logo-light.png"
                alt="Ocean Wave Logistics Ltd"
                className="footer-logo"
                loading="lazy"
              />
            </Link>
            <div className="footer-brand-divider" />
            <div className="footer-ecosystem">
              <h3 className="footer-heading footer-partner-heading">
                Ecosystem Partners
              </h3>
              <ul className="footer-partner-list">
                {ecosystemPartners.map((partner) => (
                  <li key={partner.label}>
                    <a
                      href={partner.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer-partner-link"
                    >
                      <span>{partner.label}</span>
                      <ExternalLink
                        size={15}
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Company Column */}
          <div className="footer-column footer-company-column">
            <h3 className="footer-heading">
              Company
            </h3>
            <nav aria-label="Footer company navigation">
              <ul className="footer-company-links">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="footer-company-link"
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight
                        className="footer-company-arrow"
                        size={20}
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          {/* Contact Column */}
          <div className="footer-column footer-contact-column">
            <h3 className="footer-heading">
              Contact
            </h3>
            <address className="footer-contact-list">
              {contactDetails.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    className="footer-contact-item"
                    key={item.label}
                  >
                    <div
                      className="footer-contact-icon"
                      aria-hidden="true"
                    >
                      <Icon size={20} strokeWidth={2} />
                    </div>
                    <div
                      className="footer-contact-divider"
                      aria-hidden="true"
                    />
                    {item.href ? (
                      <a
                        href={item.href}
                        className="footer-contact-value"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="footer-contact-value">
                        {item.value}
                      </p>
                    )}
                  </div>
                );
              })}
            </address>
          </div>
        </div>
        {/* Copyright */}
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Ocean Wave Logistics Ltd.
            All rights reserved.
          </p>
        </div>
      </Container>
      <a
        href="https://wa.me/447417325737"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed-whatsapp"
        aria-label="fixed Whatsapp icon"
      >
        <img src="/assets/icons/fixed-whatsapp.svg" alt="fixed Whatsapp icon" title="fixed Whatsapp icon" loading="lazy" />
      </a>
    </footer>
  );
}