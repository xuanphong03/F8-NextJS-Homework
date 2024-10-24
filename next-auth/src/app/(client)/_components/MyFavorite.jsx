import { useTranslations } from "next-intl";
import React from "react";

export default function MyFavoriteSession() {
  const t = useTranslations("HomePage");

  return (
    <div className="py-10">
      <h2 className="mb-4 text-center text-2xl font-bold">
        {t("my-favorite-title")}
      </h2>
      <ul className="space-y-2 list-disc">
        <li>{t("first-favorite")}</li>
        <li>{t("second-favorite")}</li>
        <li>{t("third-favorite")}</li>
      </ul>
    </div>
  );
}
