"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoSearchOutline } from "react-icons/io5";
import GenreMenu from "./GenreMenu";
import { usePathname } from "next/navigation";

export default function TabletNavbar() {
  const [showNavbar, setShowNavbar] = useState(false);
  const pathname = usePathname();
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
        className="text-2xl cursor-pointer flex items-center justify-center size-10"
      >
        <AiOutlineMenu />
      </button>
      <ul
        ref={navbarRef}
        className={`${
          showNavbar ? "block" : "hidden"
        } absolute top-full left-0 right-0 bg-slate-700 border-t border-solid border-gray-300 px-5 pt-2 py-4 flex flex-col gap-2`}
      >
        <li className="link relative">
          <Link
            href="/new-movies"
            className={`py-2 relative ${
              activeLink("/new-movies") ? "text-yellow-500" : ""
            }`}
          >
            Newest
          </Link>
        </li>
        <li className="link relative">
          <Link
            href="/popular"
            className={`py-2 relative ${
              activeLink("/popular") ? "text-yellow-500" : ""
            }`}
          >
            Popular
          </Link>
        </li>
        <li className="link relative">
          <Link
            href="/upcoming"
            className={`py-2 relative ${
              activeLink("/upcoming") ? "text-yellow-500" : ""
            }`}
          >
            Upcoming
          </Link>
        </li>
        <li className="link relative">
          <Link
            href="/now-playing"
            className={`py-2 relative ${
              activeLink("/now-playing") ? "text-yellow-500" : ""
            }`}
          >
            Now Playing
          </Link>
        </li>
        <li className="link relative">
          <Link
            href="#"
            className={`py-2 relative ${
              activeLink("/tv-series") ? "text-yellow-500" : ""
            }`}
          >
            TV Series
          </Link>
        </li>
        <li className="w-full flex items-center bg-white rounded text-black overflow-hidden">
          <input
            type="search"
            placeholder="Search movie by keyword..."
            className="flex-1 text-sm px-4 py-2 outline-none "
          />
          <button className="flex items-center justify-center size-9 bg-gray-200 hover:bg-gray-300">
            <IoSearchOutline />
          </button>
        </li>
      </ul>
    </div>
  );
}
