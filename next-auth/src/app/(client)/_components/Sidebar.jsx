import { useTranslations } from "next-intl";
import Image from "next/image";
import F8_Logo from "@/public/images/f8_logo.webp";

export default function Sidebar() {
  const t = useTranslations("HomePage");

  return (
    <aside className="col-span-3 px-2 space-y-4">
      <div>
        <div className="w-full aspect-square rounded-xl bg-gray-200 shadow-gray-500 shadow-around overflow-hidden">
          <Image
            priority
            alt="F8 Logo"
            src={F8_Logo}
            className="scale-90 hover:scale-105 transition-all"
          />
        </div>
        <h3 className="mt-2 text-center">Fullstack Developer</h3>
      </div>
      <div>
        <h2 className="font-bold text-xl">{t("my-skills-title")}</h2>
        <ul className="space-y-1 mt-2">
          <li>
            <h3 className="">
              {t("first-skill-title")}:{" "}
              <span>{t("first-skill-description")}</span>
            </h3>
          </li>
          <li>
            <h3>
              {t("others-skill-title")}:{" "}
              <span>{t("others-skill-description")}</span>
            </h3>
          </li>
        </ul>
      </div>
      <div>
        <h2 className="font-bold text-xl">{t("my-history-title")}</h2>
        <ul className="space-y-1 mt-2">
          <li>
            <h3 className="">
              2009-2014:
              <span>{t("primary-school-name")}</span>
            </h3>
          </li>
          <li>
            <h3>
              2014-2018:
              <span>{t("secondary-school-name")}</span>
            </h3>
          </li>
          <li>
            <h3>
              2018-2021:
              <span>{t("high-school-name")}</span>
            </h3>
          </li>
          <li>
            <h3>
              2021-2024:
              <span>{t("university-name")}</span>
            </h3>
          </li>
        </ul>
      </div>
    </aside>
  );
}
