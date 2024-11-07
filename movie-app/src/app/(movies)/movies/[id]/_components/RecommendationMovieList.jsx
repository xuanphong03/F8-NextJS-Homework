"use client";

import Link from "next/link";
import CardMovie from "@/app/_components/Card/CardMovie";
import SectionHeading from "@/app/_components/Heading/SectionHeading";

export default function RecommendationMovieList({ movieList }) {
  return (
    <div className="flex flex-col gap-4">
      <SectionHeading title={"Recommendation"} />
      <div className="grid grid-cols-12 xl:grid-cols-10 gap-5">
        {movieList.map((movie) => (
          <Link
            href={`/movies/${movie.id}`}
            key={movie.id}
            className="col-span-6 sm:col-span-4 md:col-span-3 xl:col-span-2"
          >
            <CardMovie
              title={movie.title}
              original_title={movie.original_title}
              poster_path={movie.poster_path}
              release_date={movie.release_date}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
