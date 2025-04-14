import React, { useState, useRef, useEffect } from "react";
import { FaFolder, FaFolderOpen, FaFile } from "react-icons/fa";
import { MdAdd } from "react-icons/md";

const initialDirectory = {
  name: "root",
  type: "folder",
  children: [
    { name: "src", type: "folder", children: [] },
    { name: "index.js", type: "file" }
  ]
};

const Folder = ({ data }) => {
  const [expanded, setExpanded] = useState(false);
  const [children, setChildren] = useState(data.children || []);
  const [showInput, setShowInput] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (showInput && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showInput]);

  const toggleExpand = () => setExpanded(!expanded);

  const addNewItem = (type) => {
    setShowInput(type);
  };

  const handleBlur = () => setShowInput(false);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && e.target.value.trim()) {
      setChildren([
        ...children,
        { name: e.target.value, type: showInput, children: showInput === "folder" ? [] : null }
      ]);
      setShowInput(false);
    }
  };

  return (
    <div className="pl-4">
      <div className="flex items-center space-x-2 cursor-pointer" onClick={toggleExpand}>
        {data.type === "folder" && (expanded ? <FaFolderOpen /> : <FaFolder />)}
        {data.type === "file" && <FaFile />}
        <span>{data.name}</span>
        {data.type === "folder" && (
          <button onClick={(e) => { e.stopPropagation(); addNewItem("folder"); }}>
            <MdAdd />
          </button>
        )}
        {data.type === "folder" && (
          <button onClick={(e) => { e.stopPropagation(); addNewItem("file"); }}>
            📄
          </button>
        )}
      </div>

      {expanded && (
        <div className="ml-4">
          {children.map((child, index) => (
            <Folder key={index} data={child} />
          ))}
          {showInput && (
            <input
              ref={inputRef}
              type="text"
              className="border p-1 mt-2"
              onKeyDown={handleKeyDown}
              onBlur={handleBlur}
            />
          )}
        </div>
      )}
    </div>
  );
};

const FileExplorer = () => {
  return (
    <div className="p-4 border w-64">
      <Folder data={initialDirectory} />
    </div>
  );
};

export default FileExplorer;
