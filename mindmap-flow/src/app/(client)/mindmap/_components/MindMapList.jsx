"use client";
import moment from "moment";
import Link from "next/link";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MindmapDeletionAlert from "./MindmapDeletionAlert";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useEffect, useState } from "react";
import mindmapApi from "@/app/service/mindmapApi";

export default function MindMapList() {
  const { user } = useUser();
  const [mindmapList, setMindmapList] = useState([]);
  const [showDeletionAlert, setShowDeletionAlert] = useState(false);
  const [selectedMindmap, setSelectedMindmap] = useState(null);

  const getMindmapList = async () => {
    try {
      const response = await mindmapApi.getAll({ userSub: user.sub });
      setMindmapList(response);
    } catch (error) {
      throw new Element("Get all mindmap to failed");
    }
  };

  const handleDeleteMindmap = async () => {
    try {
      if (selectedMindmap) {
        await mindmapApi.delete(selectedMindmap);
        toast.success("Delete mindmap successfully");
        getMindmapList();
      }
    } catch (error) {
      toast.error("Delete mindmap to failed");
    } finally {
      setSelectedMindmap(null);
      setShowDeletionAlert(false);
    }
  };

  useEffect(() => {
    if (user) {
      getMindmapList();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <>
      {showDeletionAlert && (
        <MindmapDeletionAlert
          onClose={() => setShowDeletionAlert(false)}
          onDelete={handleDeleteMindmap}
        />
      )}
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
              <button
                onClick={() => setShowAlert(true)}
                className="text-red-600 text-sm"
              >
                Xóa
              </button>
            </div>
          </div>
        );
      })}
      <ToastContainer autoClose={2000} closeOnClick={true} />
    </>
  );
}
