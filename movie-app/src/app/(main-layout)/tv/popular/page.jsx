import SectionHeading from "@/app/_components/Heading/SectionHeading";
import { useTranslations } from "next-intl";
import PopularTVSeries from "./PopularTVSeries";

export const metadata = {
  title: "Popular TV Series - New Movie",
  description: "New Movie - Xem phim online | Phim mới | Phim hay - Vietsub",
  openGraph: {
    title: "Popular TV Series - New Movie",
    description: "New Movie - Xem phim online | Phim mới | Phim hay - Vietsub",
  },
};

export default function PopularTVSeriesPage() {
  const t = useTranslations("TvSeries");

  return (
    <div className="flex flex-col gap-4">
      <SectionHeading title={t("popular")} />
      <PopularTVSeries />
    </div>
  );
}
