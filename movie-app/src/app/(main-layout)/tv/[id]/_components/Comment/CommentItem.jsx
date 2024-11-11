import moment from "moment";
import Image from "next/image";

import { FaStar } from "react-icons/fa";
import { useTranslations } from "next-intl";
import ReplyCommentButton from "./ReplyCommentButton";
import LikeCommentButton from "./LikeCommentButton";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CommentItem({ comment }) {
  const t = useTranslations("Movie");
  return (
    <>
      <article className="px-4 py-2 bg-white dark:bg-slate-500 rounded shadow-comment-item">
        <div className="flex gap-2 items-center mb-2">
          <Image
            loading="lazy"
            alt="thumbnail movie"
            src={
              comment?.author_details?.avatar_path
                ? `${process.env.TMDB_BASE_URL_IMAGE}/original${comment.author_details.avatar_path}`
                : "/images/noImage.jpg"
            }
            width={40}
            height={40}
            className="size-6 sm:size-8 md:size-10 object-cover rounded-full flex-shrink-0"
          />
          <div>
            <h3 className="text-sm md:text-base">
              {comment.author}{" "}
              <span className="italic font-light">
                ({moment(comment.created_at).fromNow()})
              </span>
            </h3>
            <p className="flex items-center gap-1 text-xs md:text-sm text-gray-500 dark:text-gray-300">
              {t("rating")}: {comment.author_details.rating?.toFixed(1) || 0}{" "}
              <FaStar className="text-yellow-400" />
            </p>
          </div>
        </div>
        <p
          className="text-sm"
          dangerouslySetInnerHTML={{ __html: comment.content }}
        ></p>
        <div className="flex items-center gap-4 mt-3">
          <LikeCommentButton />
          <ReplyCommentButton />
        </div>
      </article>
      <ToastContainer
        limit={2}
        closeOnClick
        autoClose={2000}
        position="bottom-right"
      />
    </>
  );
}
