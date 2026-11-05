
export type ServiceIcon =
  | "package"
  | "warehouse"
  | "shopping-cart"
  | "truck";

export type PartnerIcon =
  | "chart"
  | "search"
  | "layers"
  | "factory"
  | "boxes"
  | "shield";

export interface HeroContent {
  eyebrow: string;
  titlePrefix: string;
  highlightedText: string;
  titleSuffix: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  backgroundImage: string;
}

export interface ServiceCard {
  id: string;
  title: string;
  description: string;
  icon: ServiceIcon;
}

export interface PartnerCapability {
  id: string;
  title: string;
  icon: PartnerIcon;
}

export interface EcosystemPartner {
  id: string;
  name: string;
  logo: string;
  logoAlt: string;
  subtitle: string;
  theme: "blue" | "orange";
  capabilities: PartnerCapability[];
  website: string;
}

export interface ServicesOverviewContent {
  titlePrefix: string;
  highlightedText: string;
  description: string;
  mainLogo: string;
  mainLogoAlt: string;
  positioning: string;
  services: ServiceCard[];
}

export interface EcosystemContent {
  label: string;
  partners: EcosystemPartner[];
}

export interface HomePageContent {
  hero: HeroContent;
  servicesOverview: ServicesOverviewContent;
  ecosystem: EcosystemContent;
}
