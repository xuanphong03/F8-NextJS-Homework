"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoSearchOutline } from "react-icons/io5";
import { usePathname, useRouter } from "next/navigation";
import queryString from "query-string";
import { useLocale, useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { IoIosArrowDown } from "react-icons/io";

export default function MobileNavbar() {
  const t = useTranslations("Header");
  const router = useRouter();
  const pathname = usePathname();
  const [showNavbar, setShowNavbar] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [mounted, setMounted] = useState(false);
  const locale = useLocale();
  const { setTheme, resolvedTheme } = useTheme();
  const navbarRef = useRef(null);
  const menuButtonRef = useRef(null);

  const handleClickMenu = () => {
    setShowNavbar((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (
      navbarRef.current &&
      !navbarRef.current.contains(event.target) &&
      !menuButtonRef.current.contains(event.target)
    ) {
      setShowNavbar(false);
    }
  };

  const handleChangeSearchTerm = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchMovie = (e) => {
    e.preventDefault();
    if (!searchTerm) return;
    setSearchTerm("");
    setShowNavbar(false);
    const queryParams = { page: 1, query: searchTerm };
    router.push(`/search-movie?${queryString.stringify(queryParams)}`);
  };

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

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setShowNavbar(false);
  }, [pathname]);

  return (
    <div className="lg:hidden ">
      <button
        ref={menuButtonRef}
        onClick={handleClickMenu}
        className="text-2xl cursor-pointer flex items-center justify-center size-10 hover:bg-gray-500 rounded transition-colors"
      >
        <AiOutlineMenu />
      </button>
      <ul
        ref={navbarRef}
        className={`${
          showNavbar ? "block" : "hidden"
        } absolute top-full left-0 right-0 bg-slate-700 border-t border-solid border-gray-300 pt-2 py-4 flex flex-col gap-1 md:gap-2`}
      >
        <li className="relative cursor-pointer px-5 py-1 nav-group-tablet">
          <input type="checkbox" id="movie" name="movie" hidden />

          <label
            htmlFor="movie"
            className="bg-slate-500 rounded px-2 py-2 flex items-center justify-between"
          >
            {t("movie")}
            <span className="rotate-180 transition-all arrow-icon">
              <IoIosArrowDown />
            </span>
          </label>
          <ul className="nav-menu mt-2">
            <li className="hover:bg-slate-400 rounded">
              <Link href="/movie/popular" className="px-5 py-2 text-sm block">
                {t("popular")}
              </Link>
            </li>
            <li className="hover:bg-slate-400 rounded">
              <Link
                href="/movie/now-playing"
                className="px-5 py-2 text-sm block"
              >
                {t("now-playing")}
              </Link>
            </li>
            <li className="hover:bg-slate-400 rounded">
              <Link href="/movie/upcoming" className="px-5 py-2 text-sm block">
                {t("upcoming")}
              </Link>
            </li>
            <li className="hover:bg-slate-400 rounded">
              <Link href="/movie/top-rated" className="px-5 py-2 text-sm block">
                {t("top-rated")}
              </Link>
            </li>
          </ul>
        </li>

        <li className="relative cursor-pointer px-5 py-1 nav-group-tablet">
          <input type="checkbox" id="tv-series" name="tv-series" hidden />
          <label
            htmlFor="tv-series"
            className="bg-slate-500 rounded px-2 py-2 flex items-center justify-between"
          >
            {t("tv-series")}
            <span className="rotate-180 transition-all arrow-icon">
              <IoIosArrowDown />
            </span>
          </label>
          <ul className="nav-menu mt-2">
            <li className="hover:bg-slate-400 rounded">
              <Link href="/tv/popular" className="px-5 py-2 text-sm block">
                {t("popular")}
              </Link>
            </li>
            <li className="hover:bg-slate-400 rounded">
              <Link href="/tv/airing-today" className="px-5 py-2 text-sm block">
                {t("airing-today")}
              </Link>
            </li>
            <li className="hover:bg-slate-400 rounded">
              <Link href="/tv/on-the-air" className="px-5 py-2 text-sm block">
                {t("on-tv")}
              </Link>
            </li>
            <li className="hover:bg-slate-400 rounded">
              <Link href="/tv/top-rated" className="px-5 py-2 text-sm block">
                {t("top-rated")}
              </Link>
            </li>
          </ul>
        </li>

        <li className="relative cursor-pointer px-5 py-2 flex gap-2">
          <label htmlFor="language" className="min-w-20">
            {t("language-options")}
          </label>
          <select
            className="bg-transparent border border-solid border-gray-200 px-4 rounded outline-none text-sm"
            id="language"
            name="language"
            value={locale}
            onChange={handleChangeLocale}
          >
            <option className="text-black text-xs" value="vi">
              vi-VN
            </option>
            <option className="text-black text-xs" value="en">
              en-US
            </option>
          </select>
        </li>
        {mounted && (
          <li className=" relative cursor-pointer px-5 py-2 flex gap-2">
            <label htmlFor="theme" className="min-w-20">
              {t("theme-options")}
            </label>
            <select
              className="bg-transparent border border-solid border-gray-200 px-4 rounded outline-none text-sm"
              id="theme"
              name="theme"
              value={resolvedTheme}
              onChange={handleChangeTheme}
            >
              <option className="text-black text-xs" value="dark">
                {t("theme-dark")}
              </option>
              <option className="text-black text-xs" value="light">
                {t("theme-light")}
              </option>
            </select>
          </li>
        )}

        {!mounted && (
          <li className=" relative cursor-pointer px-5 py-2 flex gap-2">
            <label htmlFor="theme" className="min-w-20">
              {t("theme-options")}
            </label>
            <select
              className="bg-transparent border border-solid border-gray-200 px-4 rounded outline-none text-sm"
              id="theme"
              name="theme"
            >
              <option className="text-black text-xs" value="dark">
                {t("theme-dark")}
              </option>
              <option className="text-black text-xs" value="light">
                {t("theme-light")}
              </option>
            </select>
          </li>
        )}

        <li className="w-full px-5 text-black">
          <form
            onSubmit={handleSearchMovie}
            className="flex items-center w-full bg-white rounded overflow-hidden"
          >
            <input
              type="text"
              value={searchTerm}
              onChange={handleChangeSearchTerm}
              placeholder={t("search-placeholder")}
              className="flex-1 text-sm px-4 py-2 outline-none text-white dark:text-white"
            />
            <button
              type="submit"
              className="flex items-center justify-center size-9 bg-gray-200 hover:bg-gray-300"
            >
              <IoSearchOutline />
            </button>
          </form>
        </li>
        <li className="relative px-5 text-sm transition-all cursor-pointer">
          <Link
            href="/auth/sign-in"
            className={`flex items-center justify-center rounded py-2 relative transition-all bg-yellow-400 hover:bg-opacity-80`}
          >
            {t("sign-in-button")}
          </Link>
        </li>
      </ul>
    </div>
  );
}
