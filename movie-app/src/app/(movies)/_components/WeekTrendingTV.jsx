"use client";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import SectionHeading from "@/app/_components/Heading/SectionHeading";
import { FaStar } from "react-icons/fa";

export default function WeekTrendingTV({ tvList }) {
  return (
    <div>
      <div className="mb-4">
        <SectionHeading title={"Week Trending TV"} />
      </div>
      <div className="flex flex-col gap-2">
        {tvList?.slice(0, 5).map((tv) => (
          <Fragment key={tv.id}>
            <Link href={`/movies/${tv.id}`}>
              <article className="flex gap-2 cursor-pointer hover:bg-slate-400 p-2 rounded transition-colors">
                <Image
                  alt="thumbnail movie"
                  src={`${process.env.TMDB_BASE_URL_IMAGE}/original/${tv.poster_path}`}
                  width={64}
                  height={64}
                  className="size-16 object-cover rounded flex-shrink-0"
                  priority
                />

                <div>
                  <h3 className="line-clamp-1">
                    {tv.name}{" "}
                    <span>({moment(tv.release_date).format("YYYY")})</span>
                  </h3>
                  <h4 className="text-sm text-gray-300 line-clamp-1">
                    {tv.original_name}
                  </h4>
                  <p className="text-sm text-gray-300 flex items-center gap-1">
                    Vote: {tv.vote_average}{" "}
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
