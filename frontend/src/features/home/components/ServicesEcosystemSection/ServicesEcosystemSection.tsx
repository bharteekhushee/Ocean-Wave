
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
  ArrowUp,
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
      {/* Decorative background */}
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

          {/* SECTION INTRODUCTION */}

          <header className="services-ecosystem__intro">
            <h2
              id="services-ecosystem-title"
              className="services-ecosystem__heading"
            >
              {servicesOverview.titlePrefix}{" "}
              <span>{servicesOverview.highlightedText}</span>
            </h2>

            <div
              className="services-ecosystem__heading-accent"
              aria-hidden="true"
            />

            <p className="services-ecosystem__description">
              {servicesOverview.description}
            </p>
          </header>

          {/* OCEAN WAVE MAIN PANEL */}

          <div className="services-ecosystem__main-panel">

            {/* Brand */}

            <div className="services-ecosystem__brand">
              <img
                src={servicesOverview.mainLogo}
                alt={servicesOverview.mainLogoAlt}
                className="services-ecosystem__main-logo"
                loading="lazy"
              />

              <div className="services-ecosystem__positioning">
                {servicesOverview.positioning}
              </div>
            </div>

            {/* Four Main Services */}

            <div className="services-ecosystem__services">
              {servicesOverview.services.map((service) => {
                const Icon = serviceIcons[service.icon];

                return (
                  <article
                    className="services-ecosystem__service-card"
                    key={service.id}
                  >
                    <div className="services-ecosystem__service-icon-wrap">
                      <Icon
                        className="services-ecosystem__service-icon"
                        size={43}
                        strokeWidth={1.9}
                        aria-hidden="true"
                      />
                    </div>

                    <h3>{service.title}</h3>

                    {service.id === "destination" &&
                      service.description && (
                        <p>({service.description})</p>
                      )}
                  </article>
                );
              })}
            </div>
          </div>

          {/* CONNECTOR AREA */}

          <div className="services-ecosystem__connection">

            <svg
              className="services-ecosystem__connector-svg"
              viewBox="0 0 1000 100"
              preserveAspectRatio="none"
              fill="none"
              aria-hidden="true"
            >
              {/* Left branch */}
              <path
                d="M500 0 V12 C500 42 250 15 250 92"
                stroke="#087FF0"
                strokeWidth="3"
                strokeLinecap="round"
              />

              {/* Right branch */}
              <path
                d="M500 0 V12 C500 42 750 15 750 92"
                stroke="#087FF0"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>

            {/* Center Arrow */}

            <div className="services-ecosystem__arrow">
              <ArrowUp
                size={26}
                strokeWidth={2.8}
                aria-hidden="true"
              />
            </div>

            {/* Partner Label */}

            <div className="services-ecosystem__partner-label">
              {ecosystem.label}
            </div>
          </div>

          {/* SPECIALIST PARTNERS */}

          <div className="services-ecosystem__partners">

            {ecosystem.partners.map((partner) => (
              <article
                className={`services-ecosystem__partner services-ecosystem__partner--${partner.theme}`}
                key={partner.id}
              >

                {/* Partner Logo */}

                <a
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="services-ecosystem__partner-logo-link"
                  aria-label={`Visit ${partner.name} website (opens in a new tab)`}
                >
                  <img
                    src={partner.logo}
                    alt={partner.logoAlt}
                    className="services-ecosystem__partner-logo"
                    loading="lazy"
                  />
                </a>

                {/* Partner Role */}

                <div className="services-ecosystem__partner-subtitle">
                  {partner.subtitle}
                </div>

                {/* Partner Capabilities */}

                <div className="services-ecosystem__capabilities">
                  {partner.capabilities.map((capability) => {
                    const Icon = partnerIcons[capability.icon];

                    return (
                      <div
                        className="services-ecosystem__capability"
                        key={capability.id}
                      >
                        <Icon
                          className="services-ecosystem__capability-icon"
                          size={37}
                          strokeWidth={1.9}
                          aria-hidden="true"
                        />

                        <h3>{capability.title}</h3>
                      </div>
                    );
                  })}
                </div>

              </article>
            ))}

          </div>
        </div>
      </Container>
    </section>
  );
}
