import moment from "moment";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

export default function MovieCard({
  title,
  original_title,
  poster_path,
  release_date,
  vote_average,
}) {
  const t = useTranslations("Movie");
  return (
    <article className="group flex gap-2 cursor-pointer hover:bg-dark dark:hover:bg-slate-400 p-2 rounded transition-colors">
      <Image
        alt="thumbnail movie"
        src={
          poster_path
            ? `${process.env.TMDB_BASE_URL_IMAGE}/original${poster_path}`
            : "/images/noImage.jpg"
        }
        width={64}
        height={64}
        className="size-16 object-cover rounded flex-shrink-0"
        priority
      />

      <div>
        <h3 className="line-clamp-1 text-light group-hover:text-dark dark:text-dark">
          {title}{" "}
          {release_date && <span>({moment(release_date).format("YYYY")})</span>}
        </h3>
        <h4 className="text-sm text-gray-500  group-hover:text-gray-200 dark:text-gray-300 line-clamp-1">
          {original_title}
        </h4>
        {vote_average && (
          <p className="text-sm text-gray-500  group-hover:text-gray-200 dark:text-gray-300 flex items-center gap-1">
            {t("rating")}: {vote_average?.toFixed(1)}{" "}
            <FaStar className="text-yellow-400" />
          </p>
        )}
      </div>
    </article>
  );
}
