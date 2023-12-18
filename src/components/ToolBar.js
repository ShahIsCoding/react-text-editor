import React from "react";

import { FaBold } from "react-icons/fa";

const ToolBar = ({ callback }) => {
  return (
    <div className="border p-3 cursor-pointer">
      <FaBold onClick={() => callback("bold")} />
    </div>
  );
};

export default ToolBar;
