import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { StoresProvider, stores } from "./stores";
import './index.css'

import App from "./App";

const rootElement = document.getElementById("root");

if (rootElement){
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <StoresProvider value={stores}>
        <App />
      </StoresProvider>
    </StrictMode>
  );
}

