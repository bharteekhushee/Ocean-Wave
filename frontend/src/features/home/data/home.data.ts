
import type { HomePageContent } from "@/features/home/types/home.type";

export const homeData: HomePageContent = {
  hero: {
    eyebrow: "Your trusted UK market partner",
    titlePrefix: "Your",
    highlightedText: "UK",
    titleSuffix:
      "Import, Distribution & Market Execution Partner",
    description:
      "Connecting Indian manufacturers to the UK market.",
    buttonText: "Explore Our UK Network",
    buttonLink: "#ecosystem",
    backgroundImage: "/assets/images/home/hero-bg.jpg",
  },

  servicesOverview: {
    titlePrefix: "UK Trade & Distribution.",
    highlightedText: "Driven by Ocean Wave.",
    description:
      "Connecting Indian manufacturing with UK markets backed by trade intelligence, sourcing expertise and local execution.",

    mainLogo:
      "/assets/images/logo/Ocean Wave Logistics Logo.png",

    mainLogoAlt: "Ocean Wave Logistics Ltd",

    positioning:
      "UK Importer  ·  Distributor  ·  E-commerce Facilitator",

    services: [
      {
        id: "uk-import",
        title: "UK Import",
        description: "Import and market entry",
        icon: "package",
      },
      {
        id: "distribution",
        title: "Distribution",
        description: "UK distribution network",
        icon: "warehouse",
      },
      {
        id: "ecommerce",
        title: "E-commerce Enablement",
        description: "Online marketplace support",
        icon: "shopping-cart",
      },
      {
        id: "destination",
        title: "Destination Execution",
        description: "Fulfillment & Logistics",
        icon: "truck",
      },
    ],
  },

  ecosystem: {
    label: "Powered by Specialist Partners",

    partners: [
      {
        id: "exporter-ai",
        name: "Exporter.AI",
        logo: "/assets/images/home/exporterai-logo.jpg",
        logoAlt: "Exporter.AI Global EXIM Growth Mechanism",
        subtitle: "Trade Intelligence Partner",
        theme: "blue",
        website: "https://exporterai.com/",

        capabilities: [
          {
            id: "market-intelligence",
            title: "Market Intelligence",
            icon: "chart",
          },
          {
            id: "buyer-discovery",
            title: "Buyer Discovery",
            icon: "search",
          },
          {
            id: "opportunity-identification",
            title: "Opportunity Identification",
            icon: "layers",
          },
        ],
      },

      {
        id: "origin-connect",
        name: "OriginConnect",
        logo: "/assets/images/home/originconnect-logo.jpg",
        logoAlt: "OriginConnect",
        subtitle: "India-side Buyer Representative",
        theme: "orange",
        website: "https://originconnect.uk/",

        capabilities: [
          {
            id: "manufacturer-sourcing",
            title: "Manufacturer Sourcing",
            icon: "factory",
          },
          {
            id: "supplier-coordination",
            title: "Supplier Coordination",
            icon: "boxes",
          },
          {
            id: "production-quality",
            title: "Production & Quality Alignment",
            icon: "shield",
          },
        ],
      },
    ],
  },
};
