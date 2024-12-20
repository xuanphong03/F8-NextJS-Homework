import { Divider, Tooltip } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

export default function MyProjectsSession() {
  const t = useTranslations("HomePage");

  return (
    <div className="py-10 space-y-5">
      <h2 className="text-center text-2xl font-bold">
        {t("my-project-title")}
      </h2>
      <ul className="space-y-5">
        <li className="dark:text-teal-500 space-y-2">
          <h3 className="text-xl font-bold">Project Playlist</h3>
          <p>{t("project-playlist-complete-time")}</p>
          <p>{t("project-playlist-description")}</p>
          <div className="flex gap-5 items-center">
            <Tooltip
              color="warning"
              content="https://huynguyen3107.github.io/F8_Fullstack_Offline_K4/Day_26/player.html"
            >
              <Link
                target="_blank"
                className="text-orange-600"
                href="https://huynguyen3107.github.io/F8_Fullstack_Offline_K4/Day_26/player.html"
              >
                Demo
              </Link>
            </Tooltip>
            <Tooltip
              color="warning"
              content="https://github.com/HuyNguyen3107/F8_Fullstack_Offline_K4/tree/main/Day_26"
            >
              <Link
                target="_blank"
                className="text-orange-600"
                href="https://github.com/HuyNguyen3107/F8_Fullstack_Offline_K4/tree/main/Day_26"
              >
                Code
              </Link>
            </Tooltip>
          </div>
        </li>
        <li>
          <Divider />
        </li>
        <li className="dark:text-teal-500 space-y-2">
          <h3 className="text-xl font-bold">Project Playlist</h3>
          <p>{t("project-playlist-complete-time")}</p>
          <p>{t("project-playlist-description")}</p>
          <div className="flex gap-5 items-center">
            <Tooltip
              color="warning"
              content="https://huynguyen3107.github.io/F8_Fullstack_Offline_K4/Day_26/player.html"
            >
              <Link
                target="_blank"
                className="text-orange-600"
                href="https://huynguyen3107.github.io/F8_Fullstack_Offline_K4/Day_26/player.html"
              >
                Demo
              </Link>
            </Tooltip>
            <Tooltip
              color="warning"
              content="https://github.com/HuyNguyen3107/F8_Fullstack_Offline_K4/tree/main/Day_26"
            >
              <Link
                target="_blank"
                className="text-orange-600"
                href="https://github.com/HuyNguyen3107/F8_Fullstack_Offline_K4/tree/main/Day_26"
              >
                Code
              </Link>
            </Tooltip>
          </div>
        </li>
        <li>
          <Divider />
        </li>
        <li className="dark:text-teal-500 space-y-2">
          <h3 className="text-xl font-bold">Project Playlist</h3>
          <p>{t("project-playlist-complete-time")}</p>
          <p>{t("project-playlist-description")}</p>
          <div className="flex gap-5 items-center">
            <Tooltip
              color="warning"
              content="https://huynguyen3107.github.io/F8_Fullstack_Offline_K4/Day_26/player.html"
            >
              <Link
                target="_blank"
                className="text-orange-600"
                href="https://huynguyen3107.github.io/F8_Fullstack_Offline_K4/Day_26/player.html"
              >
                Demo
              </Link>
            </Tooltip>
            <Tooltip
              color="warning"
              content="https://github.com/HuyNguyen3107/F8_Fullstack_Offline_K4/tree/main/Day_26"
            >
              <Link
                target="_blank"
                className="text-orange-600"
                href="https://github.com/HuyNguyen3107/F8_Fullstack_Offline_K4/tree/main/Day_26"
              >
                Code
              </Link>
            </Tooltip>
          </div>
        </li>
      </ul>
      <Divider />
      <Link
        href="https://github.com/HuyNguyen3107"
        target="_blank"
        className="block mt-5"
      >
        https://github.com/HuyNguyen3107
      </Link>
    </div>
  );
}
