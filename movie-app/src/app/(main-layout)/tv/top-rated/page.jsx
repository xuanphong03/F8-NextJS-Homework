import SectionHeading from "@/app/_components/Heading/SectionHeading";
import { useTranslations } from "next-intl";
import TopRatedTVSeries from "./TopRatedTVSeries";

export const metadata = {
  title: "Popular - New Movie",
  description: "New Movie - Xem phim online | Phim mới | Phim hay - Vietsub",
  openGraph: {
    title: "Popular - New Movie",
    description: "New Movie - Xem phim online | Phim mới | Phim hay - Vietsub",
  },
};

export default function OnTheAirTVSeriesPage() {
  const t = useTranslations("TvSeries");

  return (
    <div className="flex flex-col gap-4">
      <SectionHeading title={t("top-rated")} />
      <TopRatedTVSeries />
    </div>
  );
}
