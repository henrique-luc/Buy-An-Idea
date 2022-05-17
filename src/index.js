import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { InterpriseListProvider } from "./Providers/interrpiseList";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <InterpriseListProvider>
      <App />
    </InterpriseListProvider>
  </React.StrictMode>
);
