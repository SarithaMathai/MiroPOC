import * as React from "react";
import "@enterprise-ui/canvas-ui-css";
import "./App.css";
import TemplateBuilder from "./components/TemplateBuilder";
import { miroBoardInit } from "./utils/miroHelper";

function App() {
  return (
    <>
      <TemplateBuilder />
    </>
  );
}

export default App;

miroBoardInit();
