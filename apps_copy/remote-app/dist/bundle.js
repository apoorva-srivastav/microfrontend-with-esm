(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".app-b{color:#7c3aed}")),document.head.appendChild(e)}}catch(c){console.error("vite-plugin-css-injected-by-js",c)}})();
import u from"react";var _={exports:{}},n={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c=u,m=Symbol.for("react.element"),x=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,y=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(o,e,i){var r,t={},s=null,f=null;i!==void 0&&(s=""+i),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(f=e.ref);for(r in e)d.call(e,r)&&!a.hasOwnProperty(r)&&(t[r]=e[r]);if(o&&o.defaultProps)for(r in e=o.defaultProps,e)t[r]===void 0&&(t[r]=e[r]);return{$$typeof:m,type:o,key:s,ref:f,props:t,_owner:y.current}}n.Fragment=x;n.jsx=l;n.jsxs=l;_.exports=n;var p=_.exports;const v=()=>p.jsx("section",{children:p.jsx("h3",{children:"This is new remote app"})}),O=()=>p.jsx(v,{});export{O as default};
