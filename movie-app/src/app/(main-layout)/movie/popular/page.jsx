import PopularMovieList from "./PopularMovieList";
import SectionHeading from "@/app/_components/Heading/SectionHeading";
import { useTranslations } from "next-intl";

export const metadata = {
  title: "Popular Movie - New Movie",
  description: "New Movie - Xem phim online | Phim mới | Phim hay - Vietsub",
  openGraph: {
    title: "Popular Movie - New Movie",
    description: "New Movie - Xem phim online | Phim mới | Phim hay - Vietsub",
  },
};

export default function PopularMoviesPage() {
  const t = useTranslations("Movie");

  return (
    <div className="flex flex-col gap-4">
      <SectionHeading title={t("popular")} />
      <PopularMovieList />
    </div>
  );
}
