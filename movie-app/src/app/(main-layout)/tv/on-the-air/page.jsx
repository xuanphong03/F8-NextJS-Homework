import SectionHeading from "@/app/_components/Heading/SectionHeading";
import { useTranslations } from "next-intl";
import OnTheAirTVSeries from "./OnTheAirTVSeries";

export const metadata = {
  title: "On The Air TV Series - New Movie",
  description: "New Movie - Xem phim online | Phim mới | Phim hay - Vietsub",
  openGraph: {
    title: "On The Air TV Series - New Movie",
    description: "New Movie - Xem phim online | Phim mới | Phim hay - Vietsub",
  },
};

export default function OnTheAirTVSeriesPage() {
  const t = useTranslations("TvSeries");

  return (
    <div className="flex flex-col gap-4">
      <SectionHeading title={t("on-the-air")} />
      <OnTheAirTVSeries />
    </div>
  );
}
