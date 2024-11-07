import SectionHeading from "@/app/_components/Heading/SectionHeading";
import SearchMovieList from "./SearchMovieList";

export const metadata = {
  title: "Search Movie - New Movie",
  description: "New Movie - Xem phim online | Phim mới | Phim hay - Vietsub",
  openGraph: {
    title: "Search Movie - New Movie",
    description: "New Movie - Xem phim online | Phim mới | Phim hay - Vietsub",
  },
};

export default async function SearchedMoviesPage({ searchParams }) {
  const { query } = searchParams;

  return (
    <div className="flex flex-col gap-4">
      <SectionHeading title={`Search Term: ${query}`} />
      <SearchMovieList />
    </div>
  );
}
