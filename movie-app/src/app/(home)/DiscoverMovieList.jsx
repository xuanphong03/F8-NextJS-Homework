"use client";

import Image from "next/image";
// Import Swiper React components
import {
  Navigation,
  Pagination,
  A11y,
  Autoplay,
  EffectFade,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import moment from "moment";
import { useState } from "react";
import TrailerMovie from "../_components/TrailerMovie/TrailerMovie";
import movieApi from "../service/movieApi";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function DiscoverMovieList({ movieList }) {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [watchingTrailer, setWatchingTrailer] = useState(false);

  const getDetailMovie = async (id) => {
    try {
      const params = {
        language: "en-US",
        append_to_response: "videos",
      };
      const response = await movieApi.getDetailMovie(id, params);
      setSelectedMovie(response);
    } catch (error) {}
  };

  const handleClickWatchTrailer = async (id) => {
    await getDetailMovie(id);
    setWatchingTrailer(true);
  };

  const handleClickShadowModal = () => {
    setSelectedMovie(null);
    setWatchingTrailer(false);
  };

  const handleClickWatchNow = () => {
    return toast.info(
      "Sorry, this function is not supported by API at the moment."
    );
  };

  return (
    <>
      <div className="h-screen w-full">
        {watchingTrailer && (
          <div className="fixed inset-0 !z-50 flex items-center justify-center">
            <div
              onClick={handleClickShadowModal}
              className="absolute inset-0 bg-black bg-opacity-50"
            ></div>
            <div className="relative">
              <TrailerMovie movie={selectedMovie} />
            </div>
          </div>
        )}
        <Swiper
          modules={[Autoplay, Navigation, Pagination, A11y, EffectFade]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          effect={"fade"}
          className="h-full absolute inset-0"
        >
          {movieList
            ?.filter((movie) => movie.overview)
            ?.map((movie) => {
              return (
                <SwiperSlide key={movie.id} className="px-5 2xl:px-0">
                  <Image
                    alt={movie.original_title}
                    src={`${process.env.TMDB_BASE_URL_IMAGE}/original/${movie.backdrop_path}`}
                    width={1980}
                    height={1024}
                    className="absolute inset-0 w-screen h-screen object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 pointer-events-none"></div>
                  <div className="relative container mx-auto text-white top-1/2 -translate-y-1/2">
                    <div className="flex flex-col gap-2 md:gap-3">
                      <h1 className="text-4xl xl:text-6xl 2xl:text-7xl font-semibold xl:max-w-[70%] 2xl:max-w-[50%]">
                        {movie.title}
                      </h1>
                      <div className="flex items-center gap-2 2xl:gap-4">
                        <p>
                          Rating: {movie.vote_average?.toFixed(1)}{" "}
                          <span>({movie.vote_count} vote)</span>
                        </p>
                        <span className="size-1 rounded-full bg-white"></span>
                        <span>{moment(movie.release_date).format("YYYY")}</span>
                      </div>
                      {movie.overview && (
                        <p className="md:max-w-[80%] xl:max-w-[50%] line-clamp-4">
                          {movie.overview}
                        </p>
                      )}
                      <div className="flex items-center gap-4">
                        <button
                          onClick={() => handleClickWatchTrailer(movie.id)}
                          className="px-6 py-2 xl:px-8 xl:py-3 min-w-36 rounded-lg border border-solid border-gray-200 bg-transparent text-white font-medium hover:bg-gray-50 hover:border-gray-50 hover:text-black transition-all"
                        >
                          Watch trailer
                        </button>
                        <button
                          onClick={handleClickWatchNow}
                          className="px-6 py-2 xl:px-8 xl:py-3 min-w-36 rounded-lg border border-solid border-yellow-400 bg-yellow-400 text-black font-medium hover:bg-yellow-500 hover:border-yellow-500 transition-all"
                        >
                          Watch now
                        </button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
      <ToastContainer
        limit={2}
        closeOnClick
        autoClose={2000}
        position="bottom-right"
      />
    </>
  );
}
