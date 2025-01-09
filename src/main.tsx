import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

const rootEl = document.getElementById("root") as HTMLElement;

const app = createRoot(rootEl);

app.render(
  <StrictMode>
    <App />
  </StrictMode>
);
