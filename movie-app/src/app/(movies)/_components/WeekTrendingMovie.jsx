"use client";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import SectionHeading from "@/app/_components/Heading/SectionHeading";
import { FaStar } from "react-icons/fa";

export default function WeekTrendingMovie({ movieList }) {
  return (
    <div>
      <div className="mb-4">
        <SectionHeading title={"Week Trending Movie"} />
      </div>
      <div className="flex flex-col gap-2">
        {movieList?.slice(0, 5).map((movie) => (
          <Fragment key={movie.id}>
            <Link href={`/movies/${movie.id}`}>
              <article className="flex gap-2 cursor-pointer hover:bg-slate-400 p-2 rounded transition-colors">
                <Image
                  alt="thumbnail movie"
                  src={`${process.env.TMDB_BASE_URL_IMAGE}/original/${movie.poster_path}`}
                  width={64}
                  height={64}
                  className="size-16 object-cover rounded flex-shrink-0"
                  priority
                />

                <div>
                  <h3 className="line-clamp-1">
                    {movie.title}{" "}
                    <span>({moment(movie.release_date).format("YYYY")})</span>
                  </h3>
                  <h4 className="text-sm text-gray-300 line-clamp-1">
                    {movie.original_title}
                  </h4>
                  <p className="text-sm text-gray-300 flex items-center gap-1">
                    Vote: {movie.vote_average}{" "}
                    <FaStar className="text-yellow-400" />
                  </p>
                </div>
              </article>
            </Link>
            <hr className="pb-2"></hr>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
