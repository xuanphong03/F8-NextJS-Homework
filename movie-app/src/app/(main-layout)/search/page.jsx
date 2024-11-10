import { useTranslations } from "next-intl";
import SearchMovieList from "./SearchMovieList";
import SectionHeading from "@/app/_components/Heading/SectionHeading";

export const metadata = {
  title: "Search Movie - New Movie",
  description: "New Movie - Xem phim online | Phim mới | Phim hay - Vietsub",
  openGraph: {
    title: "Search Movie - New Movie",
    description: "New Movie - Xem phim online | Phim mới | Phim hay - Vietsub",
  },
};

export default function SearchMoviesPage({ searchParams }) {
  const { query } = searchParams;
  const t = useTranslations("Section");

  return (
    <div className="flex flex-col gap-4">
      <SectionHeading title={`${t("search-section")}: ${query}`} />
      <SearchMovieList />
    </div>
  );
}
