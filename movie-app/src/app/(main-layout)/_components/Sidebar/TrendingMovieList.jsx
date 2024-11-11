"use client";
import SectionHeading from "@/app/_components/Heading/SectionHeading";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { Fragment } from "react";
import CardItem from "../Card/CardItem";

export default function TrendingMovieList({ movieList }) {
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
              <CardItem
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
