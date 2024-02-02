var h = Object.defineProperty;
var o = (a, e, t) => e in a ? h(a, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : a[e] = t;
var n = (a, e, t) => (o(a, typeof e != "symbol" ? e + "" : e, t), t);
class c {
  constructor(e, t) {
    n(this, "id");
    n(this, "_eventStatus", {});
    n(this, "_data", {});
    n(this, "_listeners", []);
    this.id = e, t.forEach((s) => {
      this._eventStatus[s] = !1;
    });
  }
  get _state() {
    return Object.values(this._eventStatus).every((t) => t === !0);
  }
  _reset() {
    for (const e in this._eventStatus)
      this._eventStatus[e] = !1;
    this._data = {};
  }
  _getEventListenerIndex(e) {
    let t = -1;
    for (let s = 0; s < this._listeners.length; s++)
      if (this._listeners[s].name === e.name) {
        t = s;
        break;
      }
    return t;
  }
  has(e) {
    return e in this._eventStatus;
  }
  update(e, t) {
    this._eventStatus[e] = !this._eventStatus[e], this._data = { ...this._data, ...t }, this._state && (this._listeners.forEach((s) => {
      s({ id: this.id, ...this._data });
    }), this._reset());
  }
  addListener(e) {
    this._getEventListenerIndex(e) ? this._listeners.push(e) : console.error(
      `Listener ${e.name} already exists on ${this.id} event!`
    );
  }
  removeListener(e) {
    const t = this._getEventListenerIndex(e);
    t !== -1 && this._listeners.splice(t, 1);
  }
}
class l {
  constructor() {
    n(this, "_webSocket", null);
    n(this, "_listeners", /* @__PURE__ */ new Map());
    n(this, "_eventAccumulators", []);
  }
  _getEventListenerIndex(e, t) {
    let s = -1;
    for (let i = 0; i < e.length; i++)
      if (e[i].name === t.name) {
        s = i;
        break;
      }
    return s;
  }
  addEventAccumulator(e) {
    this._eventAccumulators.push(e);
  }
  addEventListener(e, t) {
    let s = !1;
    if (this._eventAccumulators.forEach((i) => {
      i.id === e && (s = !0, i.addListener(t));
    }), !s)
      if (this._listeners.has(e)) {
        const i = this._listeners.get(e);
        this._getEventListenerIndex(
          i,
          t
        ) === -1 ? i.push(t) : console.error(
          `Listener ${t.name} already exists on ${e} event!`
        );
      } else
        this._listeners.set(e, [t]);
  }
  removeEventListener(e, t) {
    let s = !1;
    if (this._eventAccumulators.forEach((i) => {
      i.id === e && (s = !0, i.removeListener(t));
    }), !s && this._listeners.has(e)) {
      const i = this._listeners.get(e);
      if (i) {
        const r = this._getEventListenerIndex(
          i,
          t
        );
        r !== -1 && i.splice(r, 1), i.length === 0 && this._listeners.delete(e);
      }
    }
  }
  startListening() {
    this._webSocket || (this._webSocket = new WebSocket("ws://127.0.0.1:6481/hypr/events"), this._webSocket.onmessage = (e) => {
      const t = JSON.parse(e.data);
      if (this._eventAccumulators.forEach((s) => {
        s.has(t.id) && s.update(t.id, t.data);
      }), this._listeners.has(t.id)) {
        const s = this._listeners.get(t.id);
        Array.isArray(s) && s.forEach((i) => {
          i({ id: t.id, ...t.data });
        });
      }
    });
  }
  stopListening() {
    this._webSocket && (this._webSocket.close(), this._webSocket = null);
  }
}
const _ = new c("activewindow", [
  "activewindow",
  "activewindowv2"
]), d = new l();
d.addEventAccumulator(_);
export {
  d as hyprEventsHandler
};
