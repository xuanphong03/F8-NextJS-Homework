"use client";
import movieApi from "@/app/service/movieApi";
import { useDebounce } from "@uidotdev/usehooks";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import queryString from "query-string";
import { useEffect, useRef, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import SuggestKeywordList from "./SuggestKeywordList";

export default function DesktopNavbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [focusingSearchBox, setFocusingSearchBox] = useState(false);
  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  const suggestKeywordModalRef = useRef(null);

  const activeLink = (path) => {
    return pathname.startsWith(path);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchMovie = (e) => {
    e.preventDefault();
    if (!searchTerm) return;
    setSearchTerm("");
    const queryParams = { page: 1, query: searchTerm };
    router.push(`/search-movie?${queryString.stringify(queryParams)}`);
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
    <nav className="text-white hidden lg:block">
      <ul className="flex items-center lg:gap-8 ">
        <li className="link relative">
          <Link
            href="/new-movies"
            className={`py-2 relative ${
              activeLink("/new-movies") ? "active-link" : "inactive-link"
            }`}
          >
            Newest
          </Link>
        </li>
        <li className="link relative">
          <Link
            href="/popular"
            className={`py-2 relative ${
              activeLink("/popular") ? "active-link" : "inactive-link"
            }`}
          >
            Popular
          </Link>
        </li>
        <li className="link relative">
          <Link
            href="/upcoming"
            className={`py-2 relative ${
              activeLink("/upcoming") ? "active-link" : "inactive-link"
            }`}
          >
            Upcoming
          </Link>
        </li>
        <li className="link relative">
          <Link
            href="/now-playing"
            className={`py-2 relative ${
              activeLink("/now-playing") ? "active-link" : "inactive-link"
            }`}
          >
            Now Playing
          </Link>
        </li>
        <li className="link relative">
          <Link
            href="/tv-series"
            className={`py-2 relative ${
              activeLink("/tv-series") ? "active-link" : "inactive-link"
            }`}
          >
            TV Series
          </Link>
        </li>
        <li className="relative xl:w-64 2xl:w-72" ref={suggestKeywordModalRef}>
          <form
            onSubmit={handleSearchMovie}
            className="flex items-center bg-white rounded text-black overflow-hidden"
          >
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              onFocus={() => setFocusingSearchBox(true)}
              placeholder="Search movie by keyword..."
              className="flex-1 text-sm px-4 py-2 outline-none "
            />
            <button
              type="submit"
              className={`flex items-center justify-center size-9 bg-gray-200 ${
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
        <li className="flex items-center gap-2 lg:gap-4">
          <Link
            href="/auth/sign-in"
            className="flex items-center justify-center h-9 px-4 py-1 border border-transparent rounded hover:bg-white hover:text-slate-700 transition-colors duration-300"
          >
            Sign In
          </Link>
          <Link
            href="/auth/sign-up"
            className="flex items-center justify-center h-9 px-4 py-1 border border-solid border-slate-400 rounded hover:bg-slate-400 hover:text-white transition-colors duration-300 "
          >
            Sign Up
          </Link>
        </li>
      </ul>
    </nav>
  );
}
