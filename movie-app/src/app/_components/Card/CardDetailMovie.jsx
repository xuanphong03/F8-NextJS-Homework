"use client";

import moment from "moment";
import Image from "next/image";
import { useState } from "react";
import { toast } from "react-toastify";
import SectionHeading from "../Heading/SectionHeading";
import TrailerMovie from "../TrailerMovie/TrailerMovie";
import { FaStar } from "react-icons/fa";

export default function CardDetailMovie({ movie }) {
  const [watchingTrailer, setWatchingTrailer] = useState(false);
  const moviePoster = movie.poster_path
    ? `${process.env.TMDB_BASE_URL_IMAGE}/original/${movie.poster_path}`
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
      <article>
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
              <h2 className="text-xl lg:text-2xl">
                {movie.title}{" "}
                <span>({moment(movie.release_date).format("YYYY")})</span>
              </h2>
              <h3 className="">{movie.original_title}</h3>
            </div>
            <hr></hr>
            <table>
              <tbody className="space-y-2">
                <tr>
                  <th className="align-top font-normal text-start">Runtime:</th>
                  <td>{movie.runtime} minutes</td>
                </tr>
                <tr>
                  <th className="align-top font-normal text-start">Release:</th>
                  <td className="align-top">
                    {moment(movie.release_date).format("DD/MM/YYYY")}
                  </td>
                </tr>

                <tr>
                  <th className="align-top font-normal text-start">Genre:</th>
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
                  <th className="align-top font-normal text-start">Country:</th>
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
                  <th className="align-top font-normal text-start">Rating:</th>
                  <td>
                    <p className="flex items-center gap-1">
                      {movie.vote_average.toFixed(1)}{" "}
                      <FaStar className="text-yellow-400" />{" "}
                      <span>({movie.vote_count} voted)</span>
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="flex gap-4 items-center">
              <button
                onClick={handleClickWatchTrailer}
                className="flex items-center justify-center h-8 lg:h-10 min-w-36 bg-yellow-600 rounded-full hover:bg-opacity-80 transition-colors"
              >
                Watch trailer
              </button>
              <button
                onClick={handleClickWatchMovie}
                className="flex items-center justify-center h-8 lg:h-10 min-w-36 bg-indigo-600 rounded-full hover:bg-opacity-80 transition-colors"
              >
                Watch now
              </button>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-2">
          <SectionHeading title={"Overview"} />
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
