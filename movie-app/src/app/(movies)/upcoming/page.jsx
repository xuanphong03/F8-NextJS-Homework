import UpcomingMovieList from "./UpcomingMovieList";
import SectionHeading from "@/app/_components/Heading/SectionHeading";

export const metadata = {
  title: "Upcoming - New Movie",
  description: "New Movie - Xem phim online | Phim mới | Phim hay - Vietsub",
  openGraph: {
    title: "Upcoming - New Movie",
    description: "New Movie - Xem phim online | Phim mới | Phim hay - Vietsub",
  },
};

export default function UpcomingMoviesPage() {
  return (
    <div className="flex flex-col gap-4">
      <SectionHeading title="Upcoming" />
      <UpcomingMovieList />
    </div>
  );
}
