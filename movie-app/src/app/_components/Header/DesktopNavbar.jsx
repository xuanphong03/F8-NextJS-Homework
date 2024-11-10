"use client";
import Link from "next/link";
import { Tooltip } from "@nextui-org/react";
import { useDebounce } from "@uidotdev/usehooks";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import queryString from "query-string";
import { useEffect, useRef, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import SettingOptions from "./SettingOptions";
import movieApi from "@/app/service/movieApi";
import SuggestKeywordList from "./SuggestKeywordList";

export default function DesktopNavbar() {
  const t = useTranslations("Header");
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [focusingSearchBox, setFocusingSearchBox] = useState(false);
  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  const suggestKeywordModalRef = useRef(null);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchMovie = (e) => {
    e.preventDefault();
    if (!searchTerm) return;
    setSearchTerm("");
    const queryParams = { page: 1, query: searchTerm };
    router.push(`/search?${queryString.stringify(queryParams)}`);
  };

  const handleClickOutsideSearchBox = (event) => {
    if (
      suggestKeywordModalRef.current &&
      !suggestKeywordModalRef.current.contains(event.target)
    ) {
      setFocusingSearchBox(false);
    }
  };

  useEffect(() => {
    (async () => {
      let results = [];
      if (debouncedSearchTerm) {
        const response = await movieApi.getSuggestKeyword({
          query: debouncedSearchTerm,
        });
        results = response?.results || [];
      }
      setResults(results);
    })();
  }, [debouncedSearchTerm]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideSearchBox);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideSearchBox);
    };
  }, []);

  return (
    <nav className="hidden lg:block">
      <ul className="flex items-center gap-4 lg:gap-6">
        <Tooltip
          radius="sm"
          placement="bottom-start"
          content={
            <ul className="dark:text-white py-2 min-w-40">
              <li>
                <Link
                  href="/movie/popular"
                  className={`flex py-2 relative text-sm px-3 dark:hover:bg-gray-700 hover:bg-gray-100 rounded`}
                >
                  {t("popular")}
                </Link>
              </li>
              <li>
                <Link
                  href="/movie/now-playing"
                  className={`flex py-2 relative text-sm px-3 dark:hover:bg-gray-700 hover:bg-gray-100 rounded`}
                >
                  {t("now-playing")}
                </Link>
              </li>
              <li>
                <Link
                  href="/movie/upcoming"
                  className={`flex py-2 relative text-sm px-3 dark:hover:bg-gray-700 hover:bg-gray-100 rounded`}
                >
                  {t("upcoming")}
                </Link>
              </li>
              <li>
                <Link
                  href="/movie/top-rated"
                  className={`flex py-2 relative text-sm px-3 dark:hover:bg-gray-700 hover:bg-gray-100 rounded`}
                >
                  {t("top-rated")}
                </Link>
              </li>
            </ul>
          }
          closeDelay={100}
        >
          {t("movie")}
        </Tooltip>

        <Tooltip
          radius="sm"
          placement="bottom-start"
          content={
            <ul className="dark:text-white py-2 min-w-40">
              <li>
                <Link
                  href="/tv/popular"
                  className={`flex py-2 relative text-sm px-3 dark:hover:bg-gray-700 hover:bg-gray-100 rounded`}
                >
                  {t("popular")}
                </Link>
              </li>
              <li>
                <Link
                  href="/tv/airing-today"
                  className={`flex py-2 relative text-sm px-3 dark:hover:bg-gray-700 hover:bg-gray-100 rounded`}
                >
                  {t("airing-today")}
                </Link>
              </li>
              <li>
                <Link
                  href="/tv/on-the-air"
                  className={`flex py-2 relative text-sm px-3 dark:hover:bg-gray-700 hover:bg-gray-100 rounded`}
                >
                  {t("on-tv")}
                </Link>
              </li>
              <li>
                <Link
                  href="/tv/top-rated"
                  className={`flex py-2 relative text-sm px-3 dark:hover:bg-gray-700 hover:bg-gray-100 rounded`}
                >
                  {t("top-rated")}
                </Link>
              </li>
            </ul>
          }
          closeDelay={100}
        >
          {t("tv-series")}
        </Tooltip>
        <li className="relative xl:w-64" ref={suggestKeywordModalRef}>
          <form
            onSubmit={handleSearchMovie}
            className="flex items-center text-black dark:text-white rounded overflow-hidden"
          >
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              onFocus={() => setFocusingSearchBox(true)}
              placeholder={t("search-placeholder")}
              className="flex-1 text-sm px-4 py-2 outline-none "
            />
            <button
              type="submit"
              className={`flex items-center justify-center size-9 bg-gray-200 dark:bg-blue-500 ${
                searchTerm
                  ? "hover:bg-gray-300 cursor-pointer"
                  : "cursor-not-allowed"
              }`}
            >
              <IoSearchOutline />
            </button>
          </form>
          {focusingSearchBox && results.length > 0 && (
            <div className="absolute mt-2 top-full right-0 w-full rounded overflow-hidden">
              <SuggestKeywordList suggestList={results.slice(0, 10)} />
            </div>
          )}
        </li>
        <li className="relative flex items-center gap-2 lg:gap-4">
          <Link
            href="/auth/sign-in"
            className="flex items-center justify-center h-9 px-4 py-1 border border-solid border-slate-400 rounded hover:bg-slate-400 hover:text-white transition-colors duration-300"
          >
            {t("sign-in-button")}
          </Link>
          <SettingOptions />
        </li>
      </ul>
    </nav>
  );
}
