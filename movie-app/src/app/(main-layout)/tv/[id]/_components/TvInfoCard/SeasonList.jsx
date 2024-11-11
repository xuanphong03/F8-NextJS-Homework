// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import {
  A11y,
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper/modules";
import "./SeasonList.css";
import SeasonItem from "./SeasonItem";

export default function SeasonList({ seasons }) {
  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination, A11y, EffectFade]}
      slidesPerView={1}
      spaceBetween={10}
      navigation
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },

        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
      className="h-full w-full bg-white dark:bg-slate-600 py-2 px-4 rounded-xl shadow-xl"
    >
      {seasons.map((season) => {
        return (
          <SwiperSlide
            key={season.id}
            className="bg-transparent border-none p-2"
          >
            <SeasonItem season={season} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
