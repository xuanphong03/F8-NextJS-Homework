"use client";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import SectionHeading from "@/app/_components/Heading/SectionHeading";
import { FaStar } from "react-icons/fa";
import { useTranslations } from "next-intl";
import MovieCard from "./MovieCard";

export default function WeekTrendingMovie({ movieList }) {
  const t = useTranslations("Sidebar");

  return (
    <div>
      <div className="mb-4">
        <SectionHeading title={t("week-trending-movie-heading")} />
      </div>
      <div className="flex flex-col gap-2">
        {movieList?.slice(0, 5).map((movie) => (
          <Fragment key={movie.id}>
            <Link href={`/movie/${movie.id}`}>
              <MovieCard
                title={movie.title}
                original_title={movie.original_title}
                poster_path={movie.poster_path}
                release_date={movie.release_date}
                vote_average={movie.vote_average}
              />
            </Link>
            <hr className="pb-2"></hr>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
