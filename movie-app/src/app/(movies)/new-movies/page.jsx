import SectionHeading from "@/app/_components/Heading/SectionHeading";
import NewestMovieList from "./NewestMovieList";

export const metadata = {
  title: "New Release - New Movie",
  description: "New Movie - Xem phim online | Phim mới | Phim hay - Vietsub",
  openGraph: {
    title: "New Release - New Movie",
    description: "New Movie - Xem phim online | Phim mới | Phim hay - Vietsub",
  },
};

export default async function NewestMoviesPage() {
  return (
    <div className="flex flex-col gap-4">
      <SectionHeading title={"New Release"} />
      <NewestMovieList />
    </div>
  );
}
