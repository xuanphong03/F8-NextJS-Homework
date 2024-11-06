"use client";
import mindmapApi from "@/app/service/mindmapApi";
import { clearCacheByTag } from "@/app/utils/cache";
import { UserContext } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import LoadingSpinner from "./LoadingSpinner";

export default function CreateMindmapButton() {
  const { user } = useContext(UserContext);
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleCreateMindMap = async () => {
    if (loading) return;
    try {
      setLoading(true);
      const createAt = new Date().toISOString();
      const mindmap = {
        id: uuidv4(),
        userSub: user?.sub,
        name: "",
        desc: "",
        nodes: [
          {
            id: "0",
            type: "root-node",
            data: { label: "My Mindmap" },
            position: { x: 0, y: 50 },
          },
        ],
        edges: [],
        public: false,
        createAt,
      };
      await mindmapApi.create(mindmap);
      clearCacheByTag("mindmap-list");
      router.refresh();
      // router.push(`/mindmap/${mindmap.id}`);
    } catch (error) {
      throw new Error("Create new mind map to failed");
    } finally {
      setLoading(false);
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
      <button
        onClick={handleCreateMindMap}
        className="rounded-lg px-4 py-2 bg-blue-500 text-blue-100 hover:bg-blue-600 duration-300"
      >
        Thêm mới
      </button>
    </>
  );
}
