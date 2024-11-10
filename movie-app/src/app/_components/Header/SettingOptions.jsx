"use client";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { useLocale, useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { SlOptionsVertical } from "react-icons/sl";

export default function SettingOptions() {
  const locale = useLocale();
  const router = useRouter();
  const t = useTranslations("Header");
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  const handleChangeTheme = (e) => {
    const theme = e.target.value;
    setTheme(theme);
  };

  const handleChangeLocale = async (e) => {
    const newLocale = e.target.value;
    if (locale === newLocale) return;
    const response = await fetch("/api/locale", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ locale: newLocale }),
    });
    if (response.ok) {
      router.refresh();
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div>
      <Dropdown
        showArrow
        radius="sm"
        classNames={{
          base: "before:bg-default-200",
          content: "p-0 border-small border-divider bg-background",
        }}
      >
        <DropdownTrigger>
          <button className="flex items-center outline-none">
            <SlOptionsVertical />
          </button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Custom item styles"
          disabledKeys={["profile"]}
          className="p-3"
          itemClasses={{
            base: [
              "rounded-md",
              "text-default-500",
              "transition-opacity",
              "data-[hover=true]:text-foreground",
              "data-[hover=true]:bg-default-100",
              "dark:data-[hover=true]:bg-default-50",
              "data-[selectable=true]:focus:bg-default-50",
              "data-[pressed=true]:opacity-70",
              "data-[focus-visible=true]:ring-default-500",
            ],
          }}
        >
          <DropdownItem
            isReadOnly
            key="quick_search"
            className="cursor-default"
            endContent={
              <select
                className="z-10 outline-none w-16 py-0.5 rounded-md text-tiny group-data-[hover=true]:border-default-500 border-small border-default-300 dark:border-default-200 bg-transparent text-default-500"
                id="languages"
                name="languages"
                value={locale}
                onChange={handleChangeLocale}
              >
                <option value="vi">vi-VN</option>
                <option value="en">en-US</option>
              </select>
            }
          >
            {t("language-options")}
          </DropdownItem>
          {mounted && (
            <DropdownItem
              isReadOnly
              key="theme"
              className="cursor-default"
              endContent={
                <select
                  className="z-10 outline-none w-16 py-0.5 rounded-md text-tiny group-data-[hover=true]:border-default-500 border-small border-default-300 dark:border-default-200 bg-transparent text-default-500"
                  id="theme"
                  name="theme"
                  value={resolvedTheme}
                  onChange={handleChangeTheme}
                >
                  <option value="dark">{t("theme-dark")}</option>
                  <option value="light">{t("theme-light")}</option>
                </select>
              }
            >
              {t("theme-options")}
            </DropdownItem>
          )}
          {!mounted && (
            <DropdownItem
              isReadOnly
              key="theme"
              className="cursor-default"
              endContent={
                <select
                  className="z-10 outline-none w-16 py-0.5 rounded-md text-tiny group-data-[hover=true]:border-default-500 border-small border-default-300 dark:border-default-200 bg-transparent text-default-500"
                  id="theme"
                  name="theme"
                >
                  <option value="dark">Dark</option>
                  <option value="light">Light</option>
                </select>
              }
            >
              Theme
            </DropdownItem>
          )}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
