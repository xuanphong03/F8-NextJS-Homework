"use client";
import { toast } from "react-toastify";
import { FaHeart } from "react-icons/fa";

export default function LikeCommentButton() {
  const handleLikeComment = () => {
    return toast.info("Please sign in to like comment");
  };
  return (
    <button
      onClick={handleLikeComment}
      className="flex items-center gap-2 text-sm hover:text-red-500 transition-colors"
    >
      <FaHeart /> Like
    </button>
  );
}
