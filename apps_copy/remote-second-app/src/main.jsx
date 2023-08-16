import React from "https://esm.sh/react@18.2.0?dev"
import {createRoot} from "https://esm.sh/react-dom@18.2.0/client?dev"
import MicroFrontend from "./MicroFrontend";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <main>
      <MicroFrontend />
    </main>
  </React.StrictMode>
);
