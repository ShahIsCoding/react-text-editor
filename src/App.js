import { useState } from "react";
import Editor from "./components/Editor";
import ToolBar from "./components/ToolBar";

function App() {
  const [text, setText] = useState("<bold>;olesaodh</bold>");
  const handleCallback = (cmd) => {
    let selection = document.getSelection();
    document.execCommand(cmd, false, text);
    console.log(text, selection.anchorNode);
  };
  return (
    <div className="App">
      <ToolBar callback={handleCallback} />
      <Editor text={text} setText={setText} />
    </div>
  );
}

export default App;
