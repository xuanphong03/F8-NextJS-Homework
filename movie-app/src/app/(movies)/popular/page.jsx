import React from "react";
import PopularMovieList from "./PopularMovieList";
import SectionHeading from "@/app/_components/Heading/SectionHeading";

export const metadata = {
  title: "Popular - New Movie",
  description: "New Movie - Xem phim online | Phim mới | Phim hay - Vietsub",
  openGraph: {
    title: "Popular - New Movie",
    description: "New Movie - Xem phim online | Phim mới | Phim hay - Vietsub",
  },
};

export default function PopularMoviesPage() {
  return (
    <div className="flex flex-col gap-4">
      <SectionHeading title="Popular" />
      <PopularMovieList />
    </div>
  );
}
