"use client";

import SectionHeading from "@/app/_components/Heading/SectionHeading";
import TrailerMovie from "@/app/_components/TrailerMovie/TrailerMovie";
import moment from "moment";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { toast } from "react-toastify";
import CardList from "./CardList";

export default function DetailTvCard({ detail_tv }) {
  const t = useTranslations("TvSeries");
  const [watchingTrailer, setWatchingTrailer] = useState(false);
  const moviePoster = detail_tv?.poster_path
    ? `${process.env.TMDB_BASE_URL_IMAGE}/original/${detail_tv?.poster_path}`
    : "https://st4.depositphotos.com/14953852/24787/v/450/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg";

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
              src={moviePoster}
              width={220}
              height={220}
              className="w-full h-auto object-cover rounded-lg flex-shrink-0"
            />
          </div>
          <div className="flex flex-col gap-2 lg:gap-5 flex-1 text-sm md:text-base">
            <div>
              <h2 className="text-xl lg:font-2xl xl:text-3xl font-bold">
                {detail_tv?.name}{" "}
                <span>({moment(detail_tv?.release_date).format("YYYY")})</span>
              </h2>
              <h3 className="">{detail_tv?.original_name}</h3>
            </div>
            <hr></hr>
            <table className="w-fit">
              <tbody className="space-y-2">
                {detail_tv?.number_of_seasons && (
                  <tr>
                    <th className="align-top font-normal text-start pr-5">
                      {t("number_of_seasons")}:
                    </th>
                    <td className="align-top">
                      {detail_tv?.number_of_seasons} {t("season")}
                    </td>
                  </tr>
                )}
                <tr>
                  <th className="align-top font-normal text-start pr-5">
                    {" "}
                    {t("number_of_episodes")}:
                  </th>
                  <td className="align-top">
                    {detail_tv?.number_of_episodes} {t("episodes")}
                  </td>
                </tr>
                <tr>
                  <th className="align-top font-normal text-start pr-5">
                    {t("runtime")}:
                  </th>
                  <td className="align-top">
                    60 {t("minutes")}/{t("episodes")}
                  </td>
                </tr>

                <tr>
                  <th className="align-top font-normal text-start pr-5">
                    {t("release")}:
                  </th>
                  <td className="align-top">
                    {moment(detail_tv?.release_date).format("DD/MM/YYYY")}
                  </td>
                </tr>

                <tr>
                  <th className="align-top font-normal text-start pr-5">
                    {t("genre")}:
                  </th>
                  <td className="align-top">
                    {detail_tv?.genres.map((genre, index) => {
                      return (
                        <span key={genre.id} className="capitalize">
                          {genre.name}
                          {index !== detail_tv?.genres.length - 1 && (
                            <span>, </span>
                          )}
                        </span>
                      );
                    })}
                  </td>
                </tr>
                <tr>
                  <th className="align-top font-normal text-start pr-5">
                    {t("country")}:
                  </th>
                  <td className="align-top">
                    {detail_tv?.production_countries.map((country, index) => {
                      return (
                        <span key={country.iso_3166_1} className="capitalize">
                          {country.name}
                          {index !==
                            detail_tv?.production_countries.length - 1 && (
                            <span>, </span>
                          )}
                        </span>
                      );
                    })}
                  </td>
                </tr>
                <tr>
                  <th className="align-top font-normal text-start pr-5">
                    {t("rating")}:
                  </th>
                  <td className="align-top">
                    <p className="flex items-center gap-1">
                      {detail_tv?.vote_average.toFixed(1)}{" "}
                      <FaStar className="text-yellow-400" />{" "}
                      <span>
                        ({detail_tv?.vote_count} {t("voted")})
                      </span>
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="flex flex-wrap gap-1 md:gap-2 lg:gap-3 xl:gap-4 items-center">
              <button
                onClick={handleClickWatchTrailer}
                className="text-white px-2 flex items-center justify-center h-8 lg:h-10 min-w-24 sm:min-w-28 md:min-w-32 lg:min-w-36 bg-yellow-600 rounded-full hover:bg-opacity-80 transition-colors"
              >
                {t("watch-trailer")}
              </button>
              <button
                onClick={handleClickWatchMovie}
                className="text-white px-2 flex items-center justify-center h-8 lg:h-10 min-w-24 sm:min-w-28 md:min-w-32 lg:min-w-36 bg-indigo-600 rounded-full hover:bg-opacity-80 transition-colors"
              >
                {t("watch-now")}
              </button>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-2">
          <SectionHeading title={t("current_seasons")} />
          <CardList
            seasons={detail_tv?.seasons}
            defaultLimit={3}
            defaultPage={1}
          />
        </div>
        <div className="mt-8 flex flex-col gap-2">
          <SectionHeading title={t("overview")} />
          <p className="text-sm lg:text-base">
            {detail_tv?.overview ||
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
            <TrailerMovie movie={detail_tv} />
          </div>
        </div>
      )}
    </>
  );
}
