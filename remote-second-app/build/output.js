// src/App.jsx
import React, { useState } from "https://esm.sh/react@18.2.0?dev";
import { BasicButton } from "https://esm.sh/gh/apoorva-srivastav/microfrontend-with-esm@4fe1dbde20/custom-library/output1/output.js";
var App = () => {
  const [count, setCount] = useState(0);
  return /* @__PURE__ */ React.createElement("section", { className: "app-b" }, /* @__PURE__ */ React.createElement("h3", null, "This is a remote app"), /* @__PURE__ */ React.createElement(BasicButton, { text: count, onClick: () => setCount(count + 1) }));
};
var App_default = App;

// src/MicroFrontend.jsx
var MicroFrontend = () => /* @__PURE__ */ React.createElement(App_default, null);
var MicroFrontend_default = MicroFrontend;
export {
  MicroFrontend_default as default
};
//# sourceMappingURL=output.js.map
