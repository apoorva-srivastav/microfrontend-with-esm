import * as React from "/Users/aposriva1/Desktop/vite-esm-imports/apps_copy/host-app/node_modules/react/cjs/react.development.js"


var Counter = ({ setCount, count }) => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("button", { onClick: () => setCount(count + 1) }, "Click here"), /* @__PURE__ */ React.createElement("p", null, count));
};

// src/App.jsx
var App = () => {
  const [count, setCount] = React.useState(0);
  return /* @__PURE__ */ React.createElement("section", { className: "app-b" }, /* @__PURE__ */ React.createElement("h3", null, "This is a second remote app"), /* @__PURE__ */ React.createElement(Counter, { count, setCount }));
};
var App_default = App;

// src/MicroFrontend.jsx
var MicroFrontend = () => /* @__PURE__ */ React.createElement(App_default, null);
var MicroFrontend_default = MicroFrontend;
export {
  MicroFrontend_default as default
};
//# sourceMappingURL=output.js.map
