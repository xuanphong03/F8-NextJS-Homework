"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TabletMenu() {
  const pathname = usePathname();
  const { user, isLoading } = useUser();
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
    <div className="md:hidden fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="absolute top-0 left-0 bottom-0 w-3/5 bg-white flex flex-col gap-2 px-5 py-4">
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
            <Link
              href="/mindmap"
              className={`p-2 lg:px-4 md:mx-2 rounded ${
                activeLink("/contact")
                  ? "text-white bg-indigo-600"
                  : "text-gray-600 hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
              }`}
            >
              Mindmap
            </Link>
            <div className="flex items-center gap-2 p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-transparent rounded hover:bg-indigo-100 hover:text-indigo-700 transition-colors duration-300">
              <img
                alt="avatar"
                src={user?.picture}
                className="size-10 rounded-full object-cover"
              />
              Hi, {user?.given_name} {user?.family_name}
            </div>
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
    </div>
  );
}
