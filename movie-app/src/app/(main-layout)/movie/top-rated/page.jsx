import SectionHeading from "@/app/_components/Heading/SectionHeading";
import { useTranslations } from "next-intl";
import TopRatedMovieList from "./TopRatedMovieList";

export const metadata = {
  title: "Popular - New Movie",
  description: "New Movie - Xem phim online | Phim mới | Phim hay - Vietsub",
  openGraph: {
    title: "Popular - New Movie",
    description: "New Movie - Xem phim online | Phim mới | Phim hay - Vietsub",
  },
};

export default function TopRatedMoviesPage() {
  const t = useTranslations("Movie");

  return (
    <div className="flex flex-col gap-4">
      <SectionHeading title={t("top-rated")} />
      <TopRatedMovieList />
    </div>
  );
}
