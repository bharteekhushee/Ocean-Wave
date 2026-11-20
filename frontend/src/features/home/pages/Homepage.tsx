import {
  HeroSection,
  ServicesEcosystemSection,
  TradeNetworkSection,
  CommercialChannelsSection,
  ProductsFocusSection,
  HomeContactCTASection,
} from "@/features/home/components";
export function Homepage() {
  return (
    <main id="main-content">
      <HeroSection />
      <ServicesEcosystemSection />
      <TradeNetworkSection />
      <CommercialChannelsSection />
      <ProductsFocusSection />
      <HomeContactCTASection />
    </main>
  );
}