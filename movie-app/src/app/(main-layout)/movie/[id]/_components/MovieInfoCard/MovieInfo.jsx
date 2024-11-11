"use client";

import moment from "moment";
import Image from "next/image";
import { useState } from "react";
import { toast } from "react-toastify";
import { FaStar } from "react-icons/fa";
import { useTranslations } from "next-intl";
import SectionHeading from "@/app/_components/Heading/SectionHeading";
import TrailerMovie from "@/app/_components/TrailerMovie/TrailerMovie";

export default function MovieInfo({ movie }) {
  const t = useTranslations("Movie");
  const [watchingTrailer, setWatchingTrailer] = useState(false);

  const handleToggleWatchTrailer = () => {
    setWatchingTrailer(!watchingTrailer);
  };

  const handleClickWatchTrailer = () => {
    handleToggleWatchTrailer();
  };

  const handleClickWatchMovie = () => {
    return toast.info(
      "Sorry, this function is not supported by API at the moment."
    );
  };

  return (
    <>
      <article className="text-light dark:text-dark">
        <div className="flex gap-5">
          <div className="w-40 sm:w-48 md:w-56 lg:w-60 flex-shrink-0">
            <Image
              loading="lazy"
              alt="poster movie"
              src={
                movie?.poster_path
                  ? `${process.env.TMDB_BASE_URL_IMAGE}/original${movie.poster_path}`
                  : "/images/noImage.jpg"
              }
              width={220}
              height={220}
              className="w-full h-auto object-cover rounded-lg flex-shrink-0"
            />
          </div>
          <div className="flex flex-col gap-2 lg:gap-5 flex-1 text-sm md:text-base">
            <div>
              <h2 className="text-xl lg:font-2xl xl:text-3xl font-bold">
                {movie.title}{" "}
                {movie.release_date && (
                  <span>({moment(movie.release_date).format("YYYY")})</span>
                )}
              </h2>
              <h3 className="">{movie.original_title}</h3>
            </div>
            <hr></hr>
            <table>
              <tbody className="space-y-2">
                <tr>
                  <th className="align-top font-normal text-start">
                    {t("runtime")}:
                  </th>
                  <td>
                    {movie.runtime} {t("minutes")}
                  </td>
                </tr>
                <tr>
                  <th className="align-top font-normal text-start">
                    {t("release")}:
                  </th>
                  <td className="align-top">
                    {moment(movie.release_date).format("DD/MM/YYYY")}
                  </td>
                </tr>

                <tr>
                  <th className="align-top font-normal text-start">
                    {t("genre")}:
                  </th>
                  <td>
                    {movie.genres.map((genre, index) => {
                      return (
                        <span key={genre.id} className="capitalize">
                          {genre.name}
                          {index !== movie.genres.length - 1 && <span>, </span>}
                        </span>
                      );
                    })}
                  </td>
                </tr>
                <tr>
                  <th className="align-top font-normal text-start">
                    {t("country")}:
                  </th>
                  <td>
                    {movie.production_countries.map((country, index) => {
                      return (
                        <span key={country.iso_3166_1} className="capitalize">
                          {country.name}
                          {index !== movie.production_countries.length - 1 && (
                            <span>, </span>
                          )}
                        </span>
                      );
                    })}
                  </td>
                </tr>
                <tr>
                  <th className="align-top font-normal text-start">
                    {t("rating")}:
                  </th>
                  <td>
                    <p className="flex items-center gap-1">
                      {movie.vote_average.toFixed(1)}{" "}
                      <FaStar className="text-yellow-400" />{" "}
                      <span>
                        ({movie.vote_count} {t("voted")})
                      </span>
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="flex gap-4 items-center">
              <button
                onClick={handleClickWatchTrailer}
                className="text-white flex items-center justify-center h-8 lg:h-10 min-w-36 bg-yellow-600 rounded-full hover:bg-opacity-80 transition-colors"
              >
                {t("watch-trailer")}
              </button>
              <button
                onClick={handleClickWatchMovie}
                className="text-white flex items-center justify-center h-8 lg:h-10 min-w-36 bg-indigo-600 rounded-full hover:bg-opacity-80 transition-colors"
              >
                {t("watch-now")}
              </button>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-2">
          <SectionHeading title={t("overview")} />
          <p className="text-sm lg:text-base">
            {movie.overview ||
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro rerum totam quod harum ullam asperiores ea repellat iste, voluptatem sapiente reprehenderit a sequi illo pariatur distinctio dicta molestiae voluptas doloremque."}
          </p>
        </div>
      </article>
      {watchingTrailer && (
        <div className="fixed inset-0 flex items-center justify-center !z-50">
          <div
            onClick={handleToggleWatchTrailer}
            className="absolute inset-0 bg-black bg-opacity-50"
          ></div>
          <div className="relative">
            <TrailerMovie movie={movie} />
          </div>
        </div>
      )}
    </>
  );
}
