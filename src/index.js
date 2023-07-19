import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";

const myElement = <App />;
const root = createRoot(document.getElementById("root"));
root.render(myElement);
