import SectionHeading from "@/app/_components/Heading/SectionHeading";
import { useTranslations } from "next-intl";
import AiringTodayTVSeries from "./AiringTodayTVSeries";

export const metadata = {
  title: "Popular - New Movie",
  description: "New Movie - Xem phim online | Phim mới | Phim hay - Vietsub",
  openGraph: {
    title: "Popular - New Movie",
    description: "New Movie - Xem phim online | Phim mới | Phim hay - Vietsub",
  },
};

export default function AiringTodayTVSeriesPage() {
  const t = useTranslations("TvSeries");

  return (
    <div className="flex flex-col gap-4">
      <SectionHeading title={t("airing-today")} />
      <AiringTodayTVSeries />
    </div>
  );
}
