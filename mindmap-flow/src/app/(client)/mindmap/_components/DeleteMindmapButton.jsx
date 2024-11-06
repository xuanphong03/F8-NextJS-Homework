"use client";

import { useState } from "react";
import MindmapDeletionAlert from "./MindmapDeletionAlert";
import mindmapApi from "@/app/service/mindmapApi";
import { toast } from "react-toastify";
import { clearCacheByTag } from "@/app/utils/cache";
import { useRouter } from "next/navigation";
import LoadingSpinner from "./LoadingSpinner";

export default function DeleteMindmapButton({ mindmapId }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleDeleteMindmap = async () => {
    try {
      if (mindmapId && !loading) {
        setLoading(true);
        setShowAlert(false);
        await mindmapApi.delete(mindmapId);
        clearCacheByTag("mindmap-list");
        setTimeout(() => toast.success("Delete mindmap successfully"), 500);
      }
    } catch (error) {
      toast.error("Delete mindmap to failed");
    } finally {
      setLoading(false);
      router.refresh();
    }
  };

  return (
    <>
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          <div className="absolute z-10">
            <LoadingSpinner />
          </div>
        </div>
      )}
      {showAlert && (
        <MindmapDeletionAlert
          onClose={() => setShowAlert(false)}
          onDelete={handleDeleteMindmap}
        />
      )}
      <button
        onClick={() => setShowAlert(true)}
        className="text-red-600 text-sm"
      >
        Xóa
      </button>
    </>
  );
}
