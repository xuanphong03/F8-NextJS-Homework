import { Handle, Position, useNodeId, useReactFlow } from "@xyflow/react";
import { cloneDeep } from "lodash";
import { useCallback, useEffect, useState } from "react";

export default function LeafNode({ data, selected, isConnectable }) {
  const id = useNodeId();
  const { setNodes } = useReactFlow();
  const [disabled, setDisabled] = useState(false);

  const handleUpdateLabel = (label) => {
    setNodes((nodes) => {
      const nextNodes = cloneDeep(nodes);
      const targetNode = nextNodes.find((node) => node.id === id);
      if (targetNode) {
        targetNode.data.label = label;
      }
      return nextNodes;
    });
  };

  const handleChange = useCallback(
    (event) => {
      const label = event.target.value;
      handleUpdateLabel(label);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [id]
  );

  useEffect(() => {
    document.addEventListener("keyup", (event) => {
      if (selected && event.key === "Delete") {
        setNodes((nodes) => nodes.filter((node) => node.id !== id));
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected, setNodes]);

  return (
    <div
      className="w-full h-full flex items-center justify-center outline-none"
      onDoubleClick={() => setDisabled(false)}
    >
      <Handle
        type="target"
        position={Position.Top}
        isConnectable={isConnectable}
      />
      <input
        id="text"
        name="text"
        value={data.label}
        disabled={disabled}
        onChange={handleChange}
        onBlur={() => setDisabled(true)}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            setDisabled(true);
          }
        }}
        className="w-full px-2 outline-none h-full text-center bg-transparent block"
      />
      <Handle
        type="source"
        position={Position.Bottom}
        isConnectable={isConnectable}
      />
    </div>
  );
}
