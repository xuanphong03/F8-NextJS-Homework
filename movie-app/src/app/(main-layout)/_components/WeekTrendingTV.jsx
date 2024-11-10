"use client";
import SectionHeading from "@/app/_components/Heading/SectionHeading";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { Fragment } from "react";
import MovieCard from "./MovieCard";

export default function WeekTrendingTV({ tvList }) {
  const t = useTranslations("Sidebar");
  return (
    <div>
      <div className="mb-4">
        <SectionHeading title={t("week-trending-tv-heading")} />
      </div>
      <div className="flex flex-col gap-2">
        {tvList?.slice(0, 5).map((tv) => (
          <Fragment key={tv.id}>
            <Link href={`/movies/${tv.id}`}>
              <MovieCard
                title={tv.name}
                original_title={tv.original_name}
                poster_path={tv.poster_path}
                release_date={tv.release_date}
                vote_average={tv.vote_average}
              />
            </Link>
            <hr className="pb-2"></hr>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
