import MindMapList from "./_components/MindMapList";
import CreateMindmapButton from "./_components/CreateMindmapButton";
import { getSession } from "@auth0/nextjs-auth0";

export const metadata = {
  title: "Mindmap của tôi",
  description: "Mindmap Flow - Công cụ xây dựng sơ đồ tư duy mạnh mẽ",
  openGraph: {
    title: "Mindmap của tôi",
    description: "Mindmap Flow - Công cụ xây dựng sơ đồ tư duy mạnh mẽ",
  },
};

const getMindmapList = async (sub) => {
  try {
    const response = await fetch(
      `${process.env.SERVER_API}/mindmaps?userSub=${sub}`,
      {
        next: {
          tags: ["mindmap-list"],
        },
      }
    );
    // return response.json();
    return response.json();
  } catch (error) {}
};

export default async function MindMapPage() {
  // const { user } = await getSession();
  // // console.log("user:", user);
  // let mindmapList = [];
  // if (user) {
  //   mindmapList = await getMindmapList(user.sub);
  // }
  const mindmapList = [];
  return (
    <div className="container px-4 mx-auto">
      <div className="text-start">
        <h1 className="text-3xl md:text-4xl font-medium my-2">
          Mindmap của tôi
        </h1>
        <div className="py-4">
          <CreateMindmapButton />
        </div>
        <div className="py-4">
          <div className="flex items-center py-2">
            <span className="w-1/2">
              <span className="text-xs uppercase text-gray-600 font-bold pl-4">
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
          <MindMapList mindmapList={mindmapList} />
        </div>
      </div>
    </div>
  );
}
