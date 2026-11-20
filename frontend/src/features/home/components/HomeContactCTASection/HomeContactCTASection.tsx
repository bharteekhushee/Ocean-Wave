import { ShoppingBag, Factory, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "@/shared/components/common/Container";
import "@/features/home/components/HomeContactCTASection/HomeContactCTASection.css";
export function HomeContactCTASection() {
  return (
    <section
      className="home-contact-cta"
      aria-labelledby="home-contact-cta-title"
    >
      <Container>
        <div className="home-contact-cta__wrapper">
          {/* Section Heading */}
          <div className="home-contact-cta__header">
            <div className="home-contact-cta__eyebrow">
              <span aria-hidden="true" />
              GET IN TOUCH
            </div>
            <h2 id="home-contact-cta-title">
              Let’s Discuss Your{" "}
              <span>UK Trade &amp; Supply Requirements</span>
            </h2>
            <p>
              Whether you are looking to source products for the UK market
              or supply through a UK-based trading and distribution partner,
              connect with Ocean Wave.
            </p>
          </div>
          {/* Enquiry Cards */}
          <div className="home-contact-cta__panel">
            {/* UK Buyers */}
            <article className="home-contact-cta__card">
              <div className="home-contact-cta__icon home-contact-cta__icon--blue">
                <ShoppingBag size={29} strokeWidth={1.9} aria-hidden="true" />
              </div>
              <h3>UK Buyers &amp; Businesses</h3>
              <p>
                Enquire for product sourcing, buying requirements
                and wholesale, trade or distribution support in the UK.
              </p>
              <Link
                to="/contact"
                className="home-contact-cta__button home-contact-cta__button--dark"
                aria-label="Submit a buying enquiry"
              >
                Submit a Buying Enquiry
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </article>
            {/* Indian Manufacturers */}
            <article className="home-contact-cta__card">
              <div className="home-contact-cta__icon home-contact-cta__icon--orange">
                <Factory size={29} strokeWidth={1.9} aria-hidden="true" />
              </div>
              <h3>Indian Manufacturers</h3>
              <p>
                Discuss product supply opportunities and explore
                UK trading and distribution partnerships with us.
              </p>
              <Link
                to="/contact"
                className="home-contact-cta__button home-contact-cta__button--outline"
                aria-label="Explore supply partnership"
              >
                Explore Supply Partnership
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </article>
          </div>
        </div>
      </Container>
    </section>
  );
}