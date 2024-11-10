import CommentItem from "./CommentItem";
import SectionHeading from "@/app/_components/Heading/SectionHeading";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function CommentList({ commentList }) {
  const t = useTranslations("Movie");
  return (
    <div className="flex flex-col gap-4 text-light dark:text-dark ">
      <SectionHeading title={`${t("comments")} (${commentList.length})`} />
      <div className="px-5 py-4 shadow-comment-container dark:bg-slate-600 rounded-md">
        <h3 className="mb-4">
          {t("please")}{" "}
          <Link
            href="/auth/sign-in"
            className="text-yellow-500 cursor-pointer font-medium capitalize text-sm lg:text-base"
          >
            {t("sign-in")}
          </Link>{" "}
          {t("to-comment")}
        </h3>
        <hr className="my-4" />
        <div className="flex flex-col gap-3">
          {commentList.map((comment) => (
            <CommentItem key={comment.id} comment={comment} />
          ))}
        </div>
      </div>
    </div>
  );
}
