import { ROLE } from "@/app/constants/role";
import MindmapBoard from "./_components/MindmapBoard";
import mindmapApi from "@/app/service/mindmapApi";
import { getSession } from "@auth0/nextjs-auth0";
import "@xyflow/react/dist/style.css";
import { notFound } from "next/navigation";

const getMindmap = async (id) => {
  try {
    const session = await getSession();
    const mindmap = await mindmapApi.getDetail(id);
    const userSub = session?.user?.sub;
    const authorSub = mindmap?.userSub;
    let role = ROLE.OWNER;
    if (userSub !== authorSub) {
      role = ROLE.GUESS;
    }
    return {
      mindmap,
      role,
    };
  } catch (error) {
    return notFound();
  }
};

export const generateMetadata = async ({ params }) => {
  const { id: mindmapId } = params;
  const { mindmap } = await getMindmap(mindmapId);
  return {
    title: mindmap?.name || "Chưa có tiêu đề",
    description: mindmap?.desc || "Chưa có mô tả",
    openGraph: {
      title: mindmap?.name || "Chưa có tiêu đề",
      description: mindmap?.desc || "Chưa có mô tả",
    },
  };
};

export default async function MindMapDetail({ params }) {
  const { id: mindmapId } = params;
  const { mindmap, role } = await getMindmap(mindmapId);
  console.log("role", role);

  return (
    <div className="h-[calc(100vh-80px)] py-5 mx-auto flex flex-col">
      <MindmapBoard mindmap={mindmap} role={role} />
    </div>
  );
}
