import { hyprEventsHandler as n } from "./HyprEvents.js";
var w;
((i) => {
  let a;
  ((e) => {
    e.workspace = "workspace", e.focusedmon = "focusedmon", e.activewindow = "activewindow", e.fullscreen = "fullscreen", e.monitorremoved = "monitorremoved", e.monitoradded = "monitoradded", e.createworkspace = "createworkspace", e.destroyworkspace = "destroyworkspace", e.moveworkspace = "moveworkspace", e.activelayout = "activelayout", e.openwindow = "openwindow", e.closewindow = "closewindow", e.movewindow = "movewindow", e.openlayer = "openlayer", e.closelayer = "closelayer", e.submap = "submap", e.changefloatingmode = "changefloatingmode", e.urgent = "urgent", e.minimize = "minimize", e.screencast = "screencast", e.windowtitle = "windowtitle";
  })(a = i.EventIds || (i.EventIds = {}));
  const c = {
    add: (e, o) => {
      n.addEventListener(e, o);
    },
    remove: (e, o) => {
      n.removeEventListener(e, o);
    }
  };
  function s(e, o, r) {
    if (Array.isArray(o) && o.forEach((t) => e(t, r)), typeof o == "string")
      if (o === "all")
        for (const t in a)
          e(t, r);
      else
        e(o, r);
  }
  function m(e, o) {
    s(c.add, e, o);
  }
  i.addEventListener = m;
  function l(e, o) {
    s(c.remove, e, o);
  }
  i.removeEventListener = l;
  function f() {
    n.startListening();
  }
  i.startEventsListening = f;
  function p() {
    n.stopListening();
  }
  i.stopEventsListening = p;
})(w || (w = {}));
export {
  w as Hypr
};
