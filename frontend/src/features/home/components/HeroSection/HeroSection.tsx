import {
  ArrowRight,
  ArrowLeftRight,
  Factory,
  Globe2,
  Package,
  Store,
  Truck,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "@/shared/components/common/Container";
import "@/features/home/components/HeroSection/HeroSection.css";
export function HeroSection() {
  return (
    <section
      className="home-hero"
      aria-labelledby="home-hero-title"
    >
      <div className="home-hero__overlay" aria-hidden="true" />
      <Container>
        <div className="home-hero__layout">
          {/* LEFT: HERO CONTENT */}
          <div className="home-hero__content">
            <div className="home-hero__eyebrow">
              <span className="home-hero__eyebrow-line" />
              <span>OCEAN WAVE LOGISTICS LTD</span>
            </div>
            <h1
              id="home-hero-title"
              className="home-hero__title"
            >
              Connecting <span>UK Demand</span>
              <br />
              with <span>Indian Manufacturing.</span>
            </h1>
            <p className="home-hero__description">
              UK-based importing, trading and distribution,
              helping Indian manufacturers reach buyers across
              retail, wholesale and e-commerce channels.
            </p>
            <Link
              to="/#ecosystem"
              className="home-hero__button"
            >
              <span>Explore Our Business</span>
              <ArrowRight size={19} aria-hidden="true" />
            </Link>
          </div>
          {/* RIGHT: GLOBAL TRADE VISUAL */}
          <div
            className="home-hero__visual"
            aria-label="Ocean Wave connects Indian manufacturers with UK markets"
          >
            <div className="home-hero__visual-glow" />
            <div className="home-hero__visual-heading">
              <Globe2 size={19} />
              <span>Connecting Markets Globally</span>
            </div>
            {/* UK MARKET */}
            <div className="home-hero__market-card home-hero__market-card--uk">
              <div className="home-hero__market-icon">
                <Store size={27} strokeWidth={1.7} />
              </div>
              <div className="home-hero__market-info">
                <span className="home-hero__market-label">
                  UK MARKET
                </span>
                <h2>Retail & Distribution</h2>
                <p>Buyers and market access</p>
              </div>
              <span className="home-hero__market-number">01</span>
            </div>
            {/* CONNECTION */}
            <div className="home-hero__route">
              <span className="home-hero__route-line" />
              <div className="home-hero__route-center">
                <ArrowLeftRight size={21} />
              </div>
              <span className="home-hero__route-label">
                Trade Connection
              </span>
            </div>
            {/* INDIAN MANUFACTURING */}
            <div className="home-hero__market-card home-hero__market-card--india">
              <div className="home-hero__market-icon">
                <Factory size={27} strokeWidth={1.7} />
              </div>
              <div className="home-hero__market-info">
                <span className="home-hero__market-label">
                  INDIA
                </span>
                <h2>Manufacturing Network</h2>
                <p>Suppliers and production</p>
              </div>
              <span className="home-hero__market-number">02</span>
            </div>
            {/* BOTTOM SERVICES */}
            <div className="home-hero__visual-footer">
              <div className="home-hero__visual-feature">
                <Package size={18} />
                <span>Importing</span>
              </div>
              <span className="home-hero__feature-divider" />
              <div className="home-hero__visual-feature">
                <Factory size={18} />
                <span>Sourcing</span>
              </div>
              <span className="home-hero__feature-divider" />
              <div className="home-hero__visual-feature">
                <Truck size={18} />
                <span>Distribution</span>
              </div>
            </div>
            <div className="home-hero__visual-decoration" />
          </div>
        </div>
      </Container>
    </section>
  );
}