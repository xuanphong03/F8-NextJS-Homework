import SectionHeading from "@/app/_components/Heading/SectionHeading";
import TVSerieList from "./TVSerieList";

export const metadata = {
  title: "TV Series - New Movie",
  description: "New Movie - Xem phim online | Phim mới | Phim hay - Vietsub",
  openGraph: {
    title: "TV Series - New Movie",
    description: "New Movie - Xem phim online | Phim mới | Phim hay - Vietsub",
  },
};

export default function TVSeriesPage() {
  return (
    <div className="flex flex-col gap-4">
      <SectionHeading title="TV Series" />
      <TVSerieList />
    </div>
  );
}
