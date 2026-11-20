import { homeData } from "@/features/home/data/home.data";
import type { HomePageContent } from "@/features/home/types/home.type";
export const homeService = {
  getHomePageData(): HomePageContent {
    return homeData;
  },
};