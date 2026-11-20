import {
  ShoppingCart,
  Store,
  Boxes,
  Landmark,
} from "lucide-react";
import { Container } from "@/shared/components/common/Container";
import "@/features/home/components/CommercialChannelsSection/CommercialChannelsSection.css";
const commercialChannels = [
  {
    id: "ecommerce",
    title: "E-commerce & Online Retail",
    description: "Online marketplaces and digital retailers.",
    icon: ShoppingCart,
  },
  {
    id: "retailers",
    title: "Retailers & Buying Groups",
    description: "Independent and organised retail.",
    icon: Store,
  },
  {
    id: "wholesale",
    title: "Wholesale & Trade Distribution",
    description: "Wholesalers and regional distributors.",
    icon: Boxes,
  },
  {
    id: "institutional",
    title: "Institutional & B2B Supply",
    description: "Business and institutional procurement.",
    icon: Landmark,
  },
];
export function CommercialChannelsSection() {
  return (
    <section
      className="commercial-channels"
      id="commercial-channels"
      aria-labelledby="commercial-channels-title"
    >
      <Container>
        <div className="commercial-channels__inner">
          {/* SECTION HEADER */}
          <header className="commercial-channels__header">
            <div className="commercial-channels__eyebrow">
              <span aria-hidden="true" />
              <p>UK COMMERCIAL CHANNELS</p>
              <span aria-hidden="true" />
            </div>
            <h2 id="commercial-channels-title">
              Connecting UK Businesses Across
              <span> Trade & Distribution Channels</span>
            </h2>
            <p className="commercial-channels__description">
              Serving diverse business segments through local trade and
              distribution.
            </p>
          </header>
          {/* CHANNEL CARDS */}
          <div className="commercial-channels__grid">
            {commercialChannels.map((channel) => {
              const Icon = channel.icon;
              return (
                <article
                  className="commercial-channels__card"
                  key={channel.id}
                >
                  <div className="commercial-channels__icon">
                    <Icon
                      size={43}
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                  </div>
                  <h3>{channel.title}</h3>
                  <span
                    className="commercial-channels__card-accent"
                    aria-hidden="true"
                  />
                  <p>{channel.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}