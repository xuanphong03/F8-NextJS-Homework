import SectionHeading from "@/app/_components/Heading/SectionHeading";
import Link from "next/link";
import ReviewItem from "./ReviewItem";
import { useTranslations } from "next-intl";

export default function ReviewList({ reviewList }) {
  const t = useTranslations("TvSeries");
  return (
    <div className="flex flex-col gap-4 text-light dark:text-dark">
      <SectionHeading title={"Review"} />
      <div className="px-5 py-4 dark:bg-slate-600 rounded-md review-list">
        <Link href="/auth/sign-in" className="mb-4 text-sm lg:text-base">
          {t("please")}{" "}
          <span className="text-yellow-500 cursor-pointer font-medium capitalize">
            {t("sign-in")}
          </span>{" "}
          {t("to-comment")}
        </Link>
        <hr className="my-4" />
        <div className="flex flex-col gap-3">
          {reviewList.map((review) => (
            <ReviewItem key={review.id} review={review} />
          ))}
        </div>
      </div>
    </div>
  );
}
