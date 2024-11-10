"use client";

import Link from "next/link";
import CardMovie from "@/app/_components/Card/CardMovie";
import SectionHeading from "@/app/_components/Heading/SectionHeading";
import { useTranslations } from "next-intl";

export default function RecommendationTvList({ tvList }) {
  const t = useTranslations("Movie");

  return (
    <div className="flex flex-col gap-4">
      <SectionHeading title={t("recommendation")} />
      <div className="grid grid-cols-12 xl:grid-cols-10 gap-5">
        {tvList.map((tv) => (
          <Link
            href={`/tv/${tv.id}`}
            key={tv.id}
            className="col-span-6 sm:col-span-4 md:col-span-3 xl:col-span-2"
          >
            <CardMovie
              title={tv.name}
              original_title={tv.original_name}
              poster_path={tv.poster_path}
              release_date={tv.release_date}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
