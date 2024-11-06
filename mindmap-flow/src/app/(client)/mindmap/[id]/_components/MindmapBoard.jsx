"use client";
import { SHARE_MODE } from "@/app/constants/share-mode";
import mindmapApi from "@/app/service/mindmapApi";
import { useUser } from "@auth0/nextjs-auth0/client";
import {
  addEdge,
  Background,
  Controls,
  MiniMap,
  ReactFlow,
  ReactFlowProvider,
  useEdgesState,
  useNodesState,
  useReactFlow,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { notFound } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { FaSave } from "react-icons/fa";
import { FaShare } from "react-icons/fa6";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 as uuidv4 } from "uuid";
import AccessModifierModal from "./AccessModifierModal";
import LeafNode from "./customs/LeafNode";
import RootNode from "./customs/RootNode";
import "./MindmapBoard.css";

const nodeTypes = {
  "root-node": RootNode,
  "leaf-node": LeafNode,
};

function Mindmap({ mindmap }) {
  const { user } = useUser();
  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [mindmapName, setMindmapName] = useState(mindmap?.name);
  const [mindmapDesc, setMindmapDesc] = useState(mindmap?.desc);
  const [accessMode, setAccessMode] = useState(
    mindmap?.public ? SHARE_MODE.PUBLIC : SHARE_MODE.PRIVATE
  );

  const [showAccessModifierModal, setShowAccessModifierModal] = useState(false);
  const { screenToFlowPosition } = useReactFlow();

  const handleShareAccessModifier = async (shareMode) => {
    try {
      const cloneMindmap = {
        ...mindmap,
        public: shareMode === SHARE_MODE.PUBLIC,
      };
      await mindmapApi.update(mindmap.id, cloneMindmap);
      setAccessMode(shareMode);
      toast.success("Cập nhật mindmap thành công 👌");
    } catch (error) {
      toast.error("Cập nhật mindmap thất bại");
      throw new Error("Update share mode to failed");
    }
  };

  const handleUpdateMindmap = async () => {
    try {
      const updatedMindmap = {
        ...mindmap,
        nodes,
        edges,
        name: mindmapName,
        desc: mindmapDesc,
      };
      const response = await mindmapApi.update(mindmap.id, updatedMindmap);
      setMindmapName(response.name);
      setMindmapDesc(response.desc);
      toast.success("Cập nhật mindmap thành công");
    } catch (error) {
      toast.error("Cập nhật mindmap thất bại");
    }
  };

  const onConnect = useCallback(
    (connection) => {
      return setEdges((eds) => addEdge(connection, eds));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [setEdges]
  );

  const onConnectStart = useCallback(() => {
    console.log("sayhi");
  }, []);

  const onConnectEnd = useCallback(
    (event, connectionState) => {
      // when a connection is dropped on the pane it's not valid
      if (!connectionState.isValid) {
        // we need to remove the wrapper bounds, in order to get the correct position
        const id = uuidv4();
        const { clientX, clientY } =
          "changedTouches" in event ? event.changedTouches[0] : event;
        const newNode = {
          id,
          position: screenToFlowPosition({
            x: clientX,
            y: clientY,
          }),
          data: { label: `Text new` },
          origin: [0.5, 0.0],
          type: "leaf-node",
        };
        setNodes((nds) => nds.concat(newNode));
        setEdges((eds) =>
          eds.concat({ id, source: connectionState.fromNode.id, target: id })
        );
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [screenToFlowPosition]
  );

  useEffect(() => {
    if (mindmap) {
      setNodes(mindmap.nodes);
      setEdges(mindmap.edges);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    document.title = mindmapName || "Chưa có tiêu đề";
  }, [mindmapName]);

  useEffect(() => {
    // Trường hợp mindmap được không được public mà user khác cố tình vào
    if (!mindmap.public && user && user.sub !== mindmap.userSub) {
      return notFound();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <>
      <div className="flex flex-wrap px-5">
        <div className="w-4/5">
          <div className="text-2xl md:text-4xl font-medium my-2">
            <input
              type="text"
              name="name"
              value={mindmapName ?? ""}
              onChange={(e) => setMindmapName(e.target.value)}
              placeholder="Chưa có tiêu đề..."
              className="w-full outline-none"
            />
          </div>

          <p className="outline-0">
            <input
              type="text"
              name="desc"
              value={mindmapDesc ?? ""}
              onChange={(e) => setMindmapDesc(e.target.value)}
              placeholder="Chưa có mô tả..."
              className="w-full outline-none"
            />
          </p>
        </div>
        {user && user.sub === mindmap.userSub && (
          <>
            <div className="w-1/5">
              <div className="flex justify-end items-center">
                <button
                  onClick={handleUpdateMindmap}
                  className="gap-1 border-2 duration-200 ease inline-flex items-center mb-1 mr-1 transition py-1 px-2 text-sm rounded text-white border-green-600 bg-green-600 hover:bg-green-700 hover:border-green-700"
                >
                  <FaSave /> Lưu thay đổi
                </button>
                <button
                  onClick={() => setShowAccessModifierModal(true)}
                  className="gap-1 border-2 duration-200 ease inline-flex items-center mb-1 mr-1 transition py-1 px-2 text-sm rounded text-white border-blue-600 bg-blue-600 hover:bg-blue-700 hover:border-blue-700"
                >
                  <FaShare /> Chia sẻ
                </button>
              </div>
            </div>
          </>
        )}
      </div>
      {showAccessModifierModal && (
        <AccessModifierModal
          accessMode={accessMode}
          mindmapId={mindmap.id}
          mindmapName={mindmapName}
          mindmapDesc={mindmapDesc}
          onClose={() => setShowAccessModifierModal(false)}
          onUpdate={handleShareAccessModifier}
        />
      )}
      <div className="flex-1 py-5">
        <div ref={reactFlowWrapper} className="wrapper">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onConnectStart={onConnectStart}
            onConnectEnd={onConnectEnd}
            nodeTypes={nodeTypes}
            fitView
            fitViewOptions={{ padding: 1, minZoom: 0.5 }}
            nodeOrigin={[0.5, 0]}
          >
            <Controls />
            <MiniMap
              nodeColor={(n) => {
                if (n.type === "defaultNode") return "blue";
                return "#FFCC00";
              }}
            />
            <Background variant="dots" gap={12} size={1} />
          </ReactFlow>
        </div>
      </div>
      <ToastContainer autoClose={2000} closeOnClick={true} />
    </>
  );
}

export default function MindmapBoard({ mindmap }) {
  return (
    <ReactFlowProvider>
      <Mindmap mindmap={mindmap} />
    </ReactFlowProvider>
  );
}
