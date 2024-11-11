import moment from "moment";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

export default function SeasonItem({ season }) {
  const t = useTranslations("TvSeries");

  return (
    <div className="flex w-full h-full gap-4 p-2 rounded-md bg-white dark:bg-slate-500 shadow-xl">
      <div className="w-[100px]">
        <Image
          loading="lazy"
          alt="poster movie"
          width={100}
          height={150}
          src={
            season?.poster_path
              ? `${process.env.TMDB_BASE_URL_IMAGE}/original${season.poster_path}`
              : "/images/noImage.jpg"
          }
          className="w-full h-auto object-cover rounded-lg flex-shrink-0"
        />
      </div>
      <div className="text-light dark:text-white text-start">
        <h3 className="text-xl font-bold">{season.name.trim()}</h3>
        {season.air_date ? (
          <div className="flex items-center gap-2 text-sm">
            <h4>{moment(season.air_date).format("YYYY")}</h4>
            <span className="size-1 rounded-full bg-black dark:bg-white"></span>
            <span>
              {season.episode_count} {t("episodes")}
            </span>
          </div>
        ) : (
          <h4 className="text-sm">{t("upcoming")}</h4>
        )}
        <p className="flex items-center gap-1 text-sm">
          {t("rating")}:{" "}
          <span className="flex gap-1 items-center">
            {season.vote_average} <FaStar className="text-yellow-400" />
          </span>
        </p>
      </div>
    </div>
  );
}
