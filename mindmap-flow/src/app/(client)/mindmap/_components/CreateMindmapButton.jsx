"use client";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";
import { useUser } from "@auth0/nextjs-auth0/client";
import { clearCacheByTag } from "@/app/utils/cache";
import mindmapApi from "@/app/service/mindmapApi";

export default function CreateMindmapButton() {
  const { user } = useUser();
  const router = useRouter();

  const handleCreateMindMap = async () => {
    try {
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
      router.push(`/mindmap/${mindmap.id}`);
    } catch (error) {
      throw new Error("Create new mind map to failed");
    }
  };
  return (
    <>
      <button
        onClick={handleCreateMindMap}
        className="rounded-lg px-4 py-2 bg-blue-500 text-blue-100 hover:bg-blue-600 duration-300"
      >
        Thêm mới
      </button>
    </>
  );
}
