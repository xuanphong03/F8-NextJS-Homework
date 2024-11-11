import { useTranslations } from "next-intl";
import UpcomingMovieList from "./UpcomingMovieList";
import SectionHeading from "@/app/_components/Heading/SectionHeading";

export const metadata = {
  title: "Upcoming Movie - New Movie",
  description: "New Movie - Xem phim online | Phim mới | Phim hay - Vietsub",
  openGraph: {
    title: "Upcoming Movie - New Movie",
    description: "New Movie - Xem phim online | Phim mới | Phim hay - Vietsub",
  },
};

export default function UpcomingMoviesPage() {
  const t = useTranslations("Movie");
  return (
    <div className="flex flex-col gap-4">
      <SectionHeading title={t("upcoming")} />
      <UpcomingMovieList />
    </div>
  );
}
