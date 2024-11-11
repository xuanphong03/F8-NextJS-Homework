"use client";
import { toast } from "react-toastify";
import { FaCommentDots } from "react-icons/fa";
import { useTranslations } from "next-intl";

export default function ReplyButton() {
  const t = useTranslations("TvSeries");
  const handleReplyComment = () => {
    return toast.info("Please sign in to reply comment");
  };
  return (
    <button
      onClick={handleReplyComment}
      className="flex items-center gap-2 text-sm"
    >
      <FaCommentDots /> {t("reply")}
    </button>
  );
}
