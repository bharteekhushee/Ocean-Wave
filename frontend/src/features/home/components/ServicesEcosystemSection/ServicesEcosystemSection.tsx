import {
  Package,
  Warehouse,
  ShoppingCart,
  Truck,
  BarChart3,
  Search,
  Layers,
  Factory,
  Boxes,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import type {
  PartnerIcon,
  ServiceIcon,
} from "@/features/home/types/home.type";
import { useHomeViewModel } from "@/features/home/viewmodels/useHomeViewModel";
import { Container } from "@/shared/components/common/Container";
import "@/features/home/components/ServicesEcosystemSection/ServicesEcosystemSection.css";
const serviceIcons = {
  package: Package,
  warehouse: Warehouse,
  "shopping-cart": ShoppingCart,
  truck: Truck,
} satisfies Record<ServiceIcon, typeof Package>;
const partnerIcons = {
  chart: BarChart3,
  search: Search,
  layers: Layers,
  factory: Factory,
  boxes: Boxes,
  shield: ShieldCheck,
} satisfies Record<PartnerIcon, typeof BarChart3>;
export function ServicesEcosystemSection() {
  const { servicesOverview, ecosystem } = useHomeViewModel();
  return (
    <section
      id="ecosystem"
      className="services-ecosystem"
      aria-labelledby="services-ecosystem-title"
    >
      {/* Background decoration */}
      <div
        className="services-ecosystem__decoration services-ecosystem__decoration--top"
        aria-hidden="true"
      />
      <div
        className="services-ecosystem__decoration services-ecosystem__decoration--bottom"
        aria-hidden="true"
      />
      <Container>
        <div className="services-ecosystem__content">
          {/* SECTION INTRO */}
          <header className="services-ecosystem__intro">
            <h2 id="services-ecosystem-title">
              {servicesOverview.titlePrefix}{" "}
              <span>{servicesOverview.highlightedText}</span>
            </h2>
            <div
              className="services-ecosystem__accent"
              aria-hidden="true"
            />
            <p>{servicesOverview.description}</p>
          </header>
          {/* MAIN ECOSYSTEM LAYOUT */}
          <div className="ecosystem-layout">
            {/* OCEAN WAVE MAIN COMPANY */}
            <article className="ecosystem-main">
              <div className="ecosystem-main__logo-wrap">
                <img
                  src={servicesOverview.mainLogo}
                  alt={servicesOverview.mainLogoAlt}
                  className="ecosystem-main__logo"
                  loading="lazy"
                />
              </div>
              <div className="ecosystem-main__positioning">
                {servicesOverview.positioning}
              </div>
              <div className="ecosystem-main__services">
                {servicesOverview.services.map((service) => {
                  const Icon = serviceIcons[service.icon];
                  return (
                    <article
                      className="ecosystem-main__service"
                      key={service.id}
                    >
                      <Icon
                        className="ecosystem-main__service-icon"
                        size={38}
                        strokeWidth={1.8}
                        aria-hidden="true"
                      />
                      <h3>{service.title}</h3>
                      {service.id === "destination" &&
                        service.description && (
                          <p>({service.description})</p>
                        )}
                    </article>
                  );
                })}
              </div>
            </article>
            {/* PARTNER CONNECTION */}
            <div
              className="ecosystem-connector"
              aria-label="Ocean Wave Logistics works with its specialist partners"
            >
              <svg
                className="ecosystem-connector__svg"
                viewBox="0 0 180 500"
                preserveAspectRatio="none"
                fill="none"
                aria-hidden="true"
              >
                {/* Exporter.AI connection */}
                <path
                  d="M0 250 H45 C63 250 70 238 70 220 V120 C70 95 85 88 110 88 H168"
                  stroke="#0785F5"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* OriginConnect connection */}
                <path
                  d="M0 250 H45 C63 250 70 262 70 280 V380 C70 405 85 412 110 412 H168"
                  stroke="#0785F5"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="171" cy="88" r="5" fill="#0785F5" />
                <circle cx="171" cy="412" r="5" fill="#0785F5" />
              </svg>
              <div className="ecosystem-connector__hub">
                <ArrowRight
                  size={27}
                  strokeWidth={2}
                  aria-hidden="true"
                />
                <span>{ecosystem.label}</span>
              </div>
            </div>
            {/* SPECIALIST PARTNERS */}
            <div className="ecosystem-partners">
              {ecosystem.partners.map((partner) => (
                <article
                  key={partner.id}
                  className={`ecosystem-partner ecosystem-partner--${partner.theme}`}
                >
                  {/* Partner identity */}
                  <div className="ecosystem-partner__identity">
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ecosystem-partner__logo-link"
                      aria-label={`Visit ${partner.name} website (opens in a new tab)`}
                    >
                      <img
                        src={partner.logo}
                        alt={partner.logoAlt}
                        className="ecosystem-partner__logo"
                        loading="lazy"
                      />
                    </a>
                  </div>
                  {/* Partner information */}
                  <div className="ecosystem-partner__details">
                    <div className="ecosystem-partner__role">
                      {partner.subtitle}
                    </div>
                    <div className="ecosystem-partner__capabilities">
                      {partner.capabilities.map((capability) => {
                        const Icon = partnerIcons[capability.icon];
                        return (
                          <div
                            className="ecosystem-partner__capability"
                            key={capability.id}
                          >
                            <Icon
                              size={36}
                              strokeWidth={1.8}
                              aria-hidden="true"
                            />
                            <h3>{capability.title}</h3>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}