import moment from "moment";
import Image from "next/image";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LikeCommentButton from "./LikeCommentButton";
import ReplyCommentButton from "./ReplyCommentButton";
import { FaStar } from "react-icons/fa";

export default function CommentItem({ comment }) {
  return (
    <>
      <article className="px-4 py-2 bg-slate-500 rounded">
        <div className="flex gap-2 items-center mb-2">
          <Image
            loading="lazy"
            alt="thumbnail movie"
            src={`${process.env.TMDB_BASE_URL_IMAGE}/original/${comment.author_details.avatar_path}`}
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
            <p className="flex items-center gap-1 text-xs md:text-sm text-gray-300">
              Rating: {comment.author_details.rating?.toFixed(1) || 0}{" "}
              <FaStar className="text-yellow-400" />
            </p>
          </div>
        </div>
        <p
          className="text-xs md:text-sm"
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
