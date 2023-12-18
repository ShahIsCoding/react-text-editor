import React from "react";

const Editor = ({ text, setText }) => {
  return (
    <pre
      contentEditable
      suppressContentEditableWarning
      className="p-3 border"
      onChange={(e) => {
        setText(e.target.value);
      }}
    >
      {text}
    </pre>
  );
};

export default Editor;
