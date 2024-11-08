"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoSearchOutline } from "react-icons/io5";
import GenreMenu from "./GenreMenu";
import { usePathname, useRouter } from "next/navigation";
import queryString from "query-string";

export default function TabletNavbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [showNavbar, setShowNavbar] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navbarRef = useRef(null);
  const menuButtonRef = useRef(null);

  const activeLink = (path) => {
    return pathname.startsWith(path);
  };

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

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="lg:hidden">
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
        } absolute top-full left-0 right-0 bg-slate-700 border-t border-solid border-gray-300 pt-2 py-4 flex flex-col gap-2`}
      >
        <li className="link relative cursor-pointer">
          <Link
            href="/new-movies"
            className={`block px-5 py-2 relative transition-all ${
              activeLink("/new-movies")
                ? "text-yellow-500"
                : "hover:text-yellow-400 hover:bg-gray-400"
            }`}
          >
            Newest
          </Link>
        </li>
        <li className="link relative hover:text-yellow-400 hover:bg-gray-400 transition-all cursor-pointer">
          <Link
            href="/popular"
            className={`block px-5 py-2 relative transition-all ${
              activeLink("/popular")
                ? "text-yellow-500"
                : "hover:text-yellow-400 hover:bg-gray-400"
            }`}
          >
            Popular
          </Link>
        </li>
        <li className="link relative hover:text-yellow-400 hover:bg-gray-400 transition-all cursor-pointer">
          <Link
            href="/upcoming"
            className={`block px-5 py-2 relative transition-all ${
              activeLink("/upcoming")
                ? "text-yellow-500"
                : "hover:text-yellow-400 hover:bg-gray-400"
            }`}
          >
            Upcoming
          </Link>
        </li>
        <li className="link relative hover:text-yellow-400 hover:bg-gray-400 transition-all cursor-pointer">
          <Link
            href="/now-playing"
            className={`block px-5 py-2 relative transition-all ${
              activeLink("/now-playing")
                ? "text-yellow-500"
                : "hover:text-yellow-400 hover:bg-gray-400"
            }`}
          >
            Now Playing
          </Link>
        </li>
        <li className="link relative hover:text-yellow-400 hover:bg-gray-400 transition-all cursor-pointer">
          <Link
            href="/tv-series"
            className={`block px-5 py-2 relative transition-all ${
              activeLink("/tv-series")
                ? "text-yellow-500"
                : "hover:text-yellow-400 hover:bg-gray-400"
            }`}
          >
            TV Series
          </Link>
        </li>
        <li className="w-full px-5 text-black">
          <form
            onSubmit={handleSearchMovie}
            className="flex items-center w-full bg-white rounded overflow-hidden"
          >
            <input
              type="text"
              value={searchTerm}
              onChange={handleChangeSearchTerm}
              placeholder="Search movie by keyword..."
              className="flex-1 text-sm px-4 py-2 outline-none "
            />
            <button
              type="submit"
              className="flex items-center justify-center size-9 bg-gray-200 hover:bg-gray-300"
            >
              <IoSearchOutline />
            </button>
          </form>
        </li>
      </ul>
    </div>
  );
}
