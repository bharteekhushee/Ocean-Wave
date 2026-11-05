
import {
  Handshake,
  Package,
  ShoppingCart,
} from "lucide-react";

import { Container } from "@/shared/components/common/Container";

import "@/features/contact/components/ContactHero/ContactHero.css";

const contactHighlights = [
  {
    id: "partnerships",
    icon: Handshake,
    title: "Trade",
    subtitle: "Partnerships",
  },
  {
    id: "imports",
    icon: Package,
    title: "UK Imports",
    subtitle: "& Distribution",
  },
  {
    id: "ecommerce",
    icon: ShoppingCart,
    title: "E-commerce",
    subtitle: "Support",
  },
];

export function ContactHero() {
  return (
    <section
      className="contact-hero"
      aria-labelledby="contact-hero-title"
    >
      <Container>
        <div className="contact-hero__content">

          {/* Eyebrow */}
          <div className="contact-hero__eyebrow">
            <span>Contact Us</span>

            <span
              className="contact-hero__eyebrow-line"
              aria-hidden="true"
            />
          </div>

          {/* Main Heading */}
          <h1
            id="contact-hero-title"
            className="contact-hero__title"
          >
            Let’s Talk Business
          </h1>

          {/* Description */}
          <p className="contact-hero__description">
            Reach our team for UK imports, distribution,
            e-commerce and trade partnerships.
          </p>

          {/* Highlights */}
          <div className="contact-hero__highlights">
            {contactHighlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  className="contact-hero__highlight"
                  key={item.id}
                >
                  <div
                    className="contact-hero__highlight-icon"
                    aria-hidden="true"
                  >
                    <Icon
                      size={23}
                      strokeWidth={1.9}
                    />
                  </div>

                  <div className="contact-hero__highlight-text">
                    <span>{item.title}</span>
                    <span>{item.subtitle}</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </Container>
    </section>
  );
}
