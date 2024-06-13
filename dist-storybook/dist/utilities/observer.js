import "../chunks/chunk.DJOAQ4JU.js";

// src/utilities/observer.ts
var MediaObserver = class {
  constructor() {
    this.currentBreakpoint = "";
    this.subscriptions = [];
    this.init();
  }
  init() {
    SCREEN_SIZES.forEach(({ name, query }) => {
      const mediaQuery = window.matchMedia(query);
      const handleMediaQueryChange = () => {
        if (mediaQuery.matches && this.currentBreakpoint !== name) {
          this.currentBreakpoint = name;
          this.subscriptions.forEach(({ callback }) => callback(name));
        }
      };
      mediaQuery.addEventListener("change", handleMediaQueryChange);
      handleMediaQueryChange();
    });
  }
  subscribe(callback) {
    this.subscriptions.push({ callback });
    if (this.currentBreakpoint) {
      callback(this.currentBreakpoint);
    }
  }
  unsubscribeAll() {
    SCREEN_SIZES.forEach(({ query }) => {
      const mediaQuery = window.matchMedia(query);
      mediaQuery.removeEventListener("change", () => {
      });
    });
    this.subscriptions = [];
  }
};
var MediaOrientationObserver = class {
  constructor() {
    this.currentOrientation = "";
    this.subscriptions = [];
    this.init();
  }
  handleOrientationChange(mediaQuery) {
    if (mediaQuery.matches && this.currentOrientation !== mediaQuery.media) {
      this.currentOrientation = mediaQuery.media;
      this.subscriptions.forEach(({ callback }) => callback(mediaQuery.media));
    }
  }
  init() {
    ORIENTATION_QUERIES.forEach((query) => {
      const mediaQuery = window.matchMedia(query.query);
      if (mediaQuery.addEventListener) {
        mediaQuery.addEventListener("change", () => this.handleOrientationChange(mediaQuery));
        this.handleOrientationChange(mediaQuery);
      }
    });
  }
  subscribe(callback) {
    this.subscriptions.push({ callback });
    if (this.currentOrientation) {
      callback(this.currentOrientation);
    }
  }
  unsubscribeAll() {
    ORIENTATION_QUERIES.forEach((query) => {
      const mediaQuery = window.matchMedia(query.query);
      mediaQuery.removeEventListener("change", () => {
      });
    });
    this.subscriptions = [];
  }
};
var getMediaBreakpoints = (leftName, rightName = "") => {
  const root = document.documentElement;
  const leftBreakpoint = getComputedStyle(root).getPropertyValue(`--koerber-breakpoints-${leftName}`);
  const rightBreakpoint = getComputedStyle(root).getPropertyValue(`--koerber-breakpoints-${rightName}`);
  let leftMediaWidth = "";
  if (leftBreakpoint !== "") {
    leftMediaWidth = `(min-width: ${leftBreakpoint})`;
  }
  let rightMediaWidth = "";
  if (rightBreakpoint !== "") {
    rightMediaWidth = `(max-width: ${rightBreakpoint})`;
  }
  if (rightBreakpoint === "") {
    return `${leftMediaWidth}`;
  }
  return `${leftMediaWidth} and ${rightMediaWidth}`;
};
var ORIENTATION_QUERIES = [
  { name: "landscape", query: "(orientation: landscape)" },
  { name: "portrait", query: "(orientation: portrait)" }
];
var SCREEN_SIZES = [
  { name: "xsm", query: getMediaBreakpoints("xsm", "sm") },
  { name: "sm", query: getMediaBreakpoints("sm", "md") },
  { name: "md", query: getMediaBreakpoints("md", "lg") },
  { name: "lg", query: getMediaBreakpoints("lg", "xl") },
  { name: "xl", query: getMediaBreakpoints("xl", "2xl") },
  { name: "2xl", query: getMediaBreakpoints("2xl") }
];
export {
  MediaObserver,
  MediaOrientationObserver,
  ORIENTATION_QUERIES,
  SCREEN_SIZES
};
//# sourceMappingURL=observer.js.map
