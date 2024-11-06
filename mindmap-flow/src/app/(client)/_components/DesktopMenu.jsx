"use client";
import { UserContext } from "@auth0/nextjs-auth0/client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useContext } from "react";

export default function DesktopMenu() {
  const pathname = usePathname();
  const { user, isLoading } = useContext(UserContext);

  const activeLink = (path) => {
    return pathname === path;
  };

  if (isLoading) {
    return (
      <div className="h-screen w-screen fixed inset-0 z-50 bg-white">
        Loading...
      </div>
    );
  }
  return (
    <div className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0">
      <Link
        href="/"
        className={`p-2 lg:px-4 md:mx-2 rounded ${
          activeLink("/")
            ? "text-white bg-indigo-600"
            : "text-gray-600 hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
        }`}
      >
        Trang chủ
      </Link>
      <Link
        href="/about"
        className={`p-2 lg:px-4 md:mx-2 rounded ${
          activeLink("/about")
            ? "text-white bg-indigo-600"
            : "text-gray-600 hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
        }`}
      >
        Giới thiệu
      </Link>
      <Link
        href="/features"
        className={`p-2 lg:px-4 md:mx-2 rounded ${
          activeLink("/features")
            ? "text-white bg-indigo-600"
            : "text-gray-600 hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
        }`}
      >
        Tính năng
      </Link>
      <Link
        href="/price"
        className={`p-2 lg:px-4 md:mx-2 rounded ${
          activeLink("/price")
            ? "text-white bg-indigo-600"
            : "text-gray-600 hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
        }`}
      >
        Bảng giá
      </Link>
      <Link
        href="/contact"
        className={`p-2 lg:px-4 md:mx-2 rounded ${
          activeLink("/contact")
            ? "text-white bg-indigo-600"
            : "text-gray-600 hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
        }`}
      >
        Liên hệ
      </Link>
      {user ? (
        <>
          <p className="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-transparent rounded hover:bg-indigo-100 hover:text-indigo-700 transition-colors duration-300">
            Hi, {user?.given_name} {user?.family_name}
          </p>
          <Link
            href="/mindmap"
            className="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-transparent rounded hover:bg-indigo-100 hover:text-indigo-700 transition-colors duration-300"
          >
            Mindmap
          </Link>
          <Link
            href="/api/auth/logout"
            className="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-solid border-indigo-600 rounded hover:bg-indigo-600 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1"
          >
            Đăng xuất
          </Link>
        </>
      ) : (
        <>
          <Link
            href="/api/auth/login"
            className="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-transparent rounded hover:bg-indigo-100 hover:text-indigo-700 transition-colors duration-300"
          >
            Đăng nhập
          </Link>
          <Link
            href="/api/auth/login"
            className="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-solid border-indigo-600 rounded hover:bg-indigo-600 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1"
          >
            Đăng ký
          </Link>
        </>
      )}
    </div>
  );
}
