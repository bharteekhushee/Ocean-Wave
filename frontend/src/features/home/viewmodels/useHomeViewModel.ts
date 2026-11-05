
import { useMemo } from "react";
import { homeService } from "@/features/home/services/home.service";

export function useHomeViewModel() {
  const homeContent = useMemo(
    () => homeService.getHomePageData(),
    []
  );

  return {
    hero: homeContent.hero,
    servicesOverview: homeContent.servicesOverview,
    ecosystem: homeContent.ecosystem,
  };
}
