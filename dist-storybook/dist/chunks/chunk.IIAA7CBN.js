import {
  requestInclude
} from "./chunk.ZSX2OJOB.js";

// src/components/icon/request.ts
var iconFiles = /* @__PURE__ */ new Map();
async function requestIcon(url) {
  if (iconFiles.has(url)) {
    return iconFiles.get(url);
  }
  const fileData = await requestInclude(url);
  const iconFileData = {
    ok: fileData.ok,
    status: fileData.status,
    svg: null
  };
  if (fileData.ok) {
    const div = document.createElement("div");
    div.innerHTML = fileData.html;
    const svg = div.firstElementChild;
    iconFileData.svg = (svg == null ? void 0 : svg.tagName.toLowerCase()) === "svg" ? svg.outerHTML : "";
  }
  iconFiles.set(url, iconFileData);
  return iconFileData;
}

export {
  requestIcon
};
//# sourceMappingURL=chunk.IIAA7CBN.js.map
