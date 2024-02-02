import { hyprEventsHandler as o } from "./HyprEvents.js";
var c;
((t) => {
  const v = [
    "workspace",
    "focusedmon",
    "activewindow",
    "fullscreen",
    "monitorremoved",
    "monitoradded",
    "createworkspace",
    "destroyworkspace",
    "moveworkspace",
    "activelayout",
    "openwindow",
    "closewindow",
    "movewindow",
    "openlayer",
    "closelayer",
    "submap",
    "changefloatingmode",
    "urgent",
    "minimize",
    "screencast",
    "windowtitle"
  ], s = {
    add: (n, e) => {
      o.addEventListener(n, e);
    },
    remove: (n, e) => {
      o.removeEventListener(n, e);
    }
  };
  function a(n, e, i) {
    Array.isArray(e) && e.forEach((r) => n(r, i)), typeof e == "string" && (e === "all" ? v.forEach(
      (r) => n(r, i)
    ) : n(e, i));
  }
  function d(n, e) {
    a(s.add, n, e);
  }
  t.addEventListener = d;
  function m(n, e) {
    a(s.remove, n, e);
  }
  t.removeEventListener = m;
  function f() {
    o.startListening();
  }
  t.startEventsListening = f;
  function E() {
    o.stopListening();
  }
  t.stopEventsListening = E;
})(c || (c = {}));
export {
  c as Hypr
};
