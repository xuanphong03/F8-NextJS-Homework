import React from "react";
import NowPlayingMovieList from "./NowPlayingMovieList";
import SectionHeading from "@/app/_components/Heading/SectionHeading";

export const metadata = {
  title: "Now Playing - New Movie",
  description: "New Movie - Xem phim online | Phim mới | Phim hay - Vietsub",
  openGraph: {
    title: "Now Playing - New Movie",
    description: "New Movie - Xem phim online | Phim mới | Phim hay - Vietsub",
  },
};

export default function UpcomingMoviesPage() {
  return (
    <div className="flex flex-col gap-4">
      <SectionHeading title="Now Playing" />
      <NowPlayingMovieList />
    </div>
  );
}
