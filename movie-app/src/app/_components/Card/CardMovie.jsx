import moment from "moment";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";

export default function CardMovie({
  title,
  original_title,
  poster_path,
  release_date,
}) {
  const moviePoster = poster_path
    ? `${process.env.TMDB_BASE_URL_IMAGE}/original/${poster_path}`
    : "https://st4.depositphotos.com/14953852/24787/v/450/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg";

  return (
    <article className="text-light dark:text-dark h-full flex flex-col gap-1 cursor-pointer overflow-hidden">
      <div className="flex-1 w-full relative group overflow-hidden rounded-lg ">
        <Image
          loading="lazy"
          alt="thumbnail movie"
          src={moviePoster}
          width={160}
          height={220}
          className="w-full h-full object-cover rounded-lg flex-shrink-0 group-hover:scale-125 transition-all"
        />
        <div className="absolute inset-0 bg-black group-hover:bg-opacity-20 bg-opacity-0 transition-all rounded-lg"></div>
        <FaPlay className="opacity-0 group-hover:opacity-100 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl transition-all" />
      </div>
      <div>
        <h3 className="line-clamp-1">
          {title}{" "}
          {release_date && <span>({moment(release_date).format("YYYY")})</span>}
        </h3>
        <h4 className="text-sm text-gray-500 dark:text-gray-300 line-clamp-1">
          {original_title}
        </h4>
      </div>
    </article>
  );
}
