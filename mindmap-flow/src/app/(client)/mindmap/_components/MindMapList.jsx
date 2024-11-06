// "use client";
import moment from "moment";
import Link from "next/link";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DeleteMindmapButton from "./DeleteMindmapButton";

export default function MindMapList({ mindmapList }) {
  return (
    <>
      {mindmapList.map((mindmap) => {
        return (
          <div
            key={mindmap.id}
            className="hover:bg-gray-200 cursor-pointer bg-white shadow flex items-center mb-5 rounded-lg"
          >
            <div className="w-1/2">
              <div className="flex items-center">
                <div className="ml-4">
                  <span className="capitalize block text-gray-800">
                    <Link href={`/mindmap/${mindmap?.id}`}>
                      {mindmap?.name || "Mindmap chưa có tên"}
                    </Link>
                  </span>
                  <span className="text-sm block text-gray-600">
                    {mindmap?.desc || "Chưa có mô tả"}
                  </span>
                </div>
              </div>
            </div>
            <div className="w-1/4">
              <span className="text-gray-600 text-sm">
                {moment(mindmap?.createAt).format("DD/MM/YYYY HH:mm:ss")}
              </span>
            </div>
            <div className="w-1/4 flex items-center gap-5">
              <button className="text-blue-600 text-sm">
                <Link href={`/mindmap/${mindmap?.id}`}>Sửa</Link>
              </button>
              <DeleteMindmapButton mindmapId={mindmap.id} />
            </div>
          </div>
        );
      })}
      <ToastContainer autoClose={2000} closeOnClick={true} />
    </>
  );
}
