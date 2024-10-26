import Link from "next/link";
import React from "react";

export default function MyMindmapPage() {
  return (
    <div className="container px-4 mx-auto">
      <div className="text-start">
        <h1 className="text-3xl md:text-4xl font-medium my-2">
          Mindmap của tôi
        </h1>
        <div className="py-4">
          <Link
            href="#"
            className="rounded-lg px-4 py-2 bg-blue-500 text-blue-100 hover:bg-blue-600 duration-300"
          >
            Thêm mới
          </Link>
        </div>
        <div className="py-4">
          <div className="flex items-center py-2">
            <span className="w-1/6 text-center">
              <input type="checkbox" />
            </span>
            <span className="w-1/2">
              <span className="text-xs uppercase text-gray-600 font-bold">
                Tên
              </span>
            </span>
            <span className="w-1/4">
              <span className="text-xs uppercase text-gray-600 font-bold">
                Tạo lúc
              </span>
            </span>
            <span className="w-1/4">
              <span className="text-xs uppercase text-gray-600 font-bold">
                Hành động
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
