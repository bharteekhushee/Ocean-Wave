import { ArrowRight } from "lucide-react";
import { Container } from "@/shared/components/common/Container";
import "@/features/home/components/TradeNetworkSection/TradeNetworkSection.css";
const ecosystemPartners = [
  {
    id: "exporter",
    name: "Exporter.AI",
    role: "Trade Intelligence",
    theme: "orange",
  },
  {
    id: "origin",
    name: "Origin Connect",
    role: "Buyer Representative",
    theme: "purple",
  },
];
const ukMarkets = [
  "E-commerce Platforms",
  "Retail Chains & Stores",
  "Wholesalers & Distributors",
  "Direct-to-Consumer (D2C)",
];
export function TradeNetworkSection() {
  return (
    <section
      className="trade-network"
      aria-labelledby="trade-network-title"
    >
      <Container>
        <div className="trade-network__inner">
          {/* SECTION HEADER */}
          <header className="trade-network__header">
            <div className="trade-network__eyebrow">
              <span />
              <p>OCEAN WAVE LOGISTICS LTD</p>
              <span />
            </div>
            <h2 id="trade-network-title">
              Your <span>UK Trade & Distribution</span> Partner
            </h2>
          </header>
          {/* NETWORK DIAGRAM */}
          <div className="trade-network__diagram">
            {/* INDIA-SIDE ECOSYSTEM */}
            <article className="trade-network__ecosystem">
              <h3 className="trade-network__group-title">
                India-side Ecosystem
              </h3>
              <div className="trade-network__partner-list">
                {ecosystemPartners.map((partner) => (
                  <div
                    className={`trade-network__partner trade-network__partner--${partner.theme}`}
                    key={partner.id}
                  >
                    <span
                      className="trade-network__partner-accent"
                      aria-hidden="true"
                    />
                    <div className="trade-network__partner-info">
                      <h4>{partner.name}</h4>
                      <p>{partner.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </article>
            {/* FIRST CONNECTOR */}
            <div
              className="trade-network__connector"
              aria-hidden="true"
            >
              <ArrowRight />
            </div>
            {/* OCEAN WAVE CENTRAL BRAND */}
            <article className="trade-network__brand">
              <img
                src="/assets/images/logo/favicon.png"
                alt="Ocean Wave"
                className="trade-network__brand-icon"
              />
              <h3>
                Ocean Wave
                <br />
                Logistics Ltd
              </h3>
              <div className="trade-network__brand-divider" />
              <p>
                UK IMPORTER <span>•</span> TRADER <span>•</span> DISTRIBUTOR
              </p>
            </article>
            {/* SECOND CONNECTOR */}
            <div
              className="trade-network__connector"
              aria-hidden="true"
            >
              <ArrowRight />
            </div>
            {/* UK MARKET REACH */}
            <article className="trade-network__market">
              <h3 className="trade-network__group-title">
                UK Market Reach
              </h3>
              <div className="trade-network__market-grid">
                {ukMarkets.map((market, index) => (
                  <div
                    className="trade-network__market-item"
                    key={market}
                  >
                    <span
                      className="trade-network__market-accent"
                      aria-hidden="true"
                    />
                    <h4>{market}</h4>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </Container>
    </section>
  );
}