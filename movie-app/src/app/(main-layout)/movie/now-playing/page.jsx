import React from "react";
import NowPlayingMovieList from "./NowPlayingMovieList";
import SectionHeading from "@/app/_components/Heading/SectionHeading";
import { useTranslations } from "next-intl";

export const metadata = {
  title: "Now Playing Movie - New Movie",
  description: "New Movie - Xem phim online | Phim mới | Phim hay - Vietsub",
  openGraph: {
    title: "Now Playing Movie - New Movie",
    description: "New Movie - Xem phim online | Phim mới | Phim hay - Vietsub",
  },
};

export default function NowPlayingMoviesPage() {
  const t = useTranslations("Movie");

  return (
    <div className="flex flex-col gap-4">
      <SectionHeading title={t("now-playing")} />
      <NowPlayingMovieList />
    </div>
  );
}
