"use client";
import { toast } from "react-toastify";
import { FaCommentDots } from "react-icons/fa";

export default function ReplyCommentButton() {
  const handleReplyComment = () => {
    return toast.info("Please sign in to reply comment");
  };
  return (
    <button
      onClick={handleReplyComment}
      className="flex items-center gap-2 text-sm"
    >
      <FaCommentDots /> Reply
    </button>
  );
}
