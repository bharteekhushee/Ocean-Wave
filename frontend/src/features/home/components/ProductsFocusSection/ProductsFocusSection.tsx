import { Layers } from "lucide-react";
import { Container } from "@/shared/components/common/Container";
import "@/features/home/components/ProductsFocusSection/ProductsFocusSection.css";
const products = [
  {
    id: "jeans",
    title: "Jeans & Denim",
    description: "Denim jeans and allied products.",
    image: "/assets/images/home/jeans-denim.jpg",
    imageAlt: "Jeans and denim apparel products",
  },
  {
    id: "trousers",
    title: "Trousers & Bottomwear",
    description: "Cotton, casual and formal trousers.",
    image: "/assets/images/home/trousers-bottomwear.png",
    imageAlt: "Folded cotton and formal trousers",
  },
  {
    id: "shirts",
    title: "Shirts & Shirting",
    description: "Finished shirts and shirting products.",
    image: "/assets/images/home/shirts-shirting.jpg",
    imageAlt: "Formal shirts and shirting fabrics",
  },
];
export function ProductsFocusSection() {
  return (
    <section
      className="products-focus"
      id="textiles"
      aria-labelledby="products-focus-title"
    >
      <Container>
        <div className="products-focus__inner">
          {/* SECTION HEADER */}
          <header className="products-focus__header">
            <div className="products-focus__eyebrow">
              <span aria-hidden="true" />
              <p>PRODUCTS FOR UK TRADE</p>
              <span aria-hidden="true" />
            </div>
            <h2 id="products-focus-title">
              Apparel & Textiles for{" "}
              <span>UK Trade & Distribution</span>
            </h2>
            <p className="products-focus__description">
              Working with established manufacturing partners, Ocean Wave
              brings selected apparel and textile products into UK
              wholesale, retail and e-commerce markets.
            </p>
          </header>
          {/* PRODUCT FOCUS DIVIDER */}
          <div className="products-focus__divider">
            <span />
            <h3>INITIAL PRODUCT FOCUS</h3>
            <span />
          </div>
          {/* PRODUCT CARDS */}
          <div className="products-focus__grid">
            {products.map((product) => (
              <article
                className="products-focus__card"
                key={product.id}
              >
                <div className="products-focus__image-wrap">
                  <img
                    src={product.image}
                    alt={product.imageAlt}
                    className="products-focus__image"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="products-focus__card-content">
                  <h4>{product.title}</h4>
                  <p>{product.description}</p>
                </div>
              </article>
            ))}
            {/* PORTFOLIO EXPANSION */}
            <article className="products-focus__expansion">
              <div className="products-focus__expansion-icon">
                <Layers
                  size={43}
                  strokeWidth={2}
                  aria-hidden="true"
                />
              </div>
              <h4>Planned Portfolio Expansion</h4>
              <span
                className="products-focus__expansion-divider"
                aria-hidden="true"
              />
              <p>
                Additional apparel, shawls and scarves, towels, bed
                linen and home textiles.
              </p>
            </article>
          </div>
        </div>
      </Container>
    </section>
  );
}