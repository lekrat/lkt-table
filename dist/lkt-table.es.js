var se = Object.defineProperty;
var ue = (e, t, l) => t in e ? se(e, t, { enumerable: !0, configurable: !0, writable: !0, value: l }) : e[t] = l;
var y = (e, t, l) => (ue(e, typeof t != "symbol" ? t + "" : t, l), l);
import { reactive as w, defineComponent as M, ref as p, watch as T, nextTick as re, resolveComponent as H, openBlock as n, createBlock as b, withCtx as O, createTextVNode as _, toDisplayString as U, unref as V, createElementBlock as h, Fragment as I, createCommentVNode as E, normalizeClass as de, renderList as $, renderSlot as R, withDirectives as ce, createElementVNode as D, vShow as me, useSlots as fe, computed as B, onMounted as he, createSlots as W } from "vue";
import ye from "vuedraggable";
import { httpCall as ve } from "lkt-http-client";
import { createLktEvent as X } from "lkt-events";
import { generateRandomString as ke } from "lkt-string-tools";
class L {
  constructor(t = "", l = "") {
    y(this, "key");
    y(this, "label");
    y(this, "sortable");
    y(this, "hidden");
    y(this, "editable");
    y(this, "formatter");
    y(this, "checkEmpty");
    y(this, "colspan");
    y(this, "type");
    y(this, "link");
    y(this, "action");
    y(this, "options");
    y(this, "resource");
    y(this, "resourceData");
    y(this, "isMultiple");
    y(this, "isLoading");
    y(this, "resourceLoaded");
    this.key = t, this.label = l, this.sortable = !0, this.hidden = !1, this.formatter = void 0, this.checkEmpty = void 0, this.colspan = void 0, this.resource = "", this.resourceData = {}, this.isMultiple = !1, this.isLoading = !1, this.resourceLoaded = !1;
  }
  setIsSortable(t = !0) {
    return this.sortable = t, this;
  }
  setIsEditable(t = !0) {
    return this.editable = t, this;
  }
  setIsHidden(t = !0) {
    return this.hidden = t, this;
  }
  setIsLoading(t = !0) {
    return this.isLoading = t, this;
  }
  setFormatter(t = void 0) {
    return this.formatter = t, this;
  }
  setEmptyChecker(t = void 0) {
    return this.checkEmpty = t, this;
  }
  setColSpan(t = void 0) {
    return this.colspan = void 0, this;
  }
  getHref(t) {
    return typeof this.link == "function" ? this.link(t) : this.link;
  }
  doAction(t) {
    if (typeof this.action == "function")
      return this.action(t);
    console.warn("No action defined");
  }
  defineAsLink(t) {
    return this.type = "link", this.link = t, this;
  }
  defineAsText() {
    return this.type = "text", this;
  }
  defineAsEmail() {
    return this.type = "email", this;
  }
  defineAsTel() {
    return this.type = "tel", this;
  }
  defineAsInt() {
    return this.type = "int", this;
  }
  defineAsFloat() {
    return this.type = "float", this;
  }
  defineAsCheck() {
    return this.type = "check", this;
  }
  defineAsSwitch() {
    return this.type = "switch", this;
  }
  defineAsAction(t) {
    return this.type = "action", this.action = t, this;
  }
  defineAsSelect(t) {
    return this.type = "select", this.options = t, this;
  }
  showLoading() {
    return this.resource !== "" && !this.resourceLoaded;
  }
  hasToLoadResource() {
    return this.resource !== "" && !this.resourceLoaded && !this.isLoading;
  }
  setIsMultiple(t = !0) {
    return this.isMultiple = t, this;
  }
  setResource(t) {
    return this.resource = t, this;
  }
  setResourceData(t) {
    return this.resourceData = t, this;
  }
  async loadResource() {
    if (this.resourceLoaded)
      return this;
    if (!this.resource)
      return this;
    try {
      this.isLoading = !0;
      const t = await ve(this.resource, this.resourceData);
      this.options = t.data, this.isLoading = !1, this.resourceLoaded = !0;
    } catch {
      this.isLoading = !1;
    }
    return this;
  }
}
const We = (e, t, l = !0) => w(new L(e, t).setIsSortable(l)), Xe = (e, t, l, i = !0) => w(new L(e, t).setIsSortable(i).defineAsLink(l)), Ye = (e, t, l, i = !0) => w(new L(e, t).setIsSortable(i).defineAsAction(l)), Ze = (e, t, l = !0) => w(new L(e, t).setIsSortable(l).defineAsText()), _e = (e, t, l = !0) => w(new L(e, t).setIsSortable(l).defineAsEmail()), et = (e, t, l = !0) => w(new L(e, t).setIsSortable(l).defineAsTel()), tt = (e, t, l = !0) => w(new L(e, t).setIsSortable(l).defineAsCheck()), lt = (e, t, l = !0) => w(new L(e, t).setIsSortable(l).defineAsSwitch()), at = (e, t, l, i = !0) => w(new L(e, t).setIsSortable(i).defineAsSelect(l)), nt = (e, t, l = !0) => w(new L(e, t).setIsSortable(l).setIsHidden(!0)), ee = (e, t, l, i) => {
  if (!l)
    return 0;
  let s = e[l.key], a = t[l.key];
  if (i === "asc") {
    if (s > a)
      return 1;
    if (a > s)
      return -1;
  } else {
    if (s > a)
      return -1;
    if (a > s)
      return 1;
  }
  return 0;
}, F = (e, t, l) => e.formatter && typeof e.formatter == "function" ? e.formatter(t[e.key], t, e, l) : t[e.key], be = (e, t, l) => {
  if (!e.colspan)
    return -1;
  let i = t;
  return l.forEach((s) => {
    let a = Y(e, s);
    a > 0 && a < i && (i = a);
  }), i;
}, Y = (e, t) => e.colspan === !1 ? !1 : typeof e.colspan == "function" ? e.colspan(t) : e.colspan, ge = (e, t, l) => {
  if (typeof e != "object" || !e.key || t.indexOf(e.key) > -1)
    return !1;
  let i = Y(e, l);
  return typeof e.colspan > "u" ? !0 : (typeof e.colspan < "u" && (typeof e.colspan == "function" ? i = parseInt(e.colspan()) : i = parseInt(e.colspan)), i > 0);
}, Ce = (e = []) => {
  if (e.length > 0) {
    for (let t = 0; t < e.length; ++t)
      if (e[t].sortable)
        return e[t].key;
  }
  return "";
}, pe = (e, t) => {
  if (e.length > 0) {
    for (let l = 0; l < e.length; ++l)
      if (e[l].key === t)
        return e[l];
  }
  return null;
}, Ve = { name: "LktTableCell", inheritAttrs: !1 }, le = /* @__PURE__ */ M({
  ...Ve,
  props: {
    modelValue: { type: Object, default: () => ({}) },
    column: { type: Object, default: () => ({}) },
    i: { type: [Number], default: 0 }
  },
  emits: ["edited"],
  setup(e, { emit: t }) {
    const l = t, i = e, s = p(i.modelValue), a = p(s.value[i.column.key]), v = p(null), S = p(i.column.showLoading());
    return T(a, () => {
      const u = JSON.parse(JSON.stringify(s.value));
      u[i.column.key] = a.value, l("edited", u, i.i);
    }), T(() => i.modelValue, (u) => {
      s.value = u, a.value = s.value[i.column.key];
    }), T(() => i.column, () => {
      i.column.resourceLoaded && re(() => S.value = !1);
    }, { deep: !0 }), i.column.hasToLoadResource() && i.column.loadResource(), (u, r) => {
      const d = H("router-link"), C = H("lkt-field-text"), K = H("lkt-field-check"), x = H("lkt-field-switch"), j = H("lkt-loader"), N = H("lkt-field-select");
      return e.column.type === "link" ? (n(), b(d, {
        key: 0,
        to: e.column.getHref(s.value)
      }, {
        default: O(() => [
          _(U(V(F)(e.column, s.value, e.i)), 1)
        ]),
        _: 1
      }, 8, ["to"])) : e.column.type === "action" ? (n(), h("a", {
        key: 1,
        href: "#",
        onClick: r[0] || (r[0] = (f) => e.column.doAction(s.value))
      }, U(V(F)(e.column, s.value, e.i)), 1)) : e.column.type === "text" ? (n(), b(C, {
        key: 2,
        "read-mode": !e.column.editable,
        ref: (f) => v.value = f,
        modelValue: a.value,
        "onUpdate:modelValue": r[1] || (r[1] = (f) => a.value = f)
      }, null, 8, ["read-mode", "modelValue"])) : e.column.type === "email" ? (n(), b(C, {
        key: 3,
        "read-mode": !e.column.editable,
        ref: (f) => v.value = f,
        "is-email": "",
        modelValue: a.value,
        "onUpdate:modelValue": r[2] || (r[2] = (f) => a.value = f)
      }, null, 8, ["read-mode", "modelValue"])) : e.column.type === "tel" ? (n(), b(C, {
        key: 4,
        "read-mode": !e.column.editable,
        ref: (f) => v.value = f,
        "is-tel": "",
        modelValue: a.value,
        "onUpdate:modelValue": r[3] || (r[3] = (f) => a.value = f)
      }, null, 8, ["read-mode", "modelValue"])) : e.column.type === "check" ? (n(), b(K, {
        key: 5,
        "read-mode": !e.column.editable,
        ref: (f) => v.value = f,
        modelValue: a.value,
        "onUpdate:modelValue": r[4] || (r[4] = (f) => a.value = f)
      }, null, 8, ["read-mode", "modelValue"])) : e.column.type === "switch" ? (n(), b(x, {
        key: 6,
        "read-mode": !e.column.editable,
        ref: (f) => v.value = f,
        modelValue: a.value,
        "onUpdate:modelValue": r[5] || (r[5] = (f) => a.value = f)
      }, null, 8, ["read-mode", "modelValue"])) : e.column.type === "select" ? (n(), h(I, { key: 7 }, [
        S.value ? (n(), b(j, { key: 0 })) : (n(), b(N, {
          key: 1,
          "read-mode": !e.column.editable,
          ref: (f) => v.value = f,
          modelValue: a.value,
          "onUpdate:modelValue": r[6] || (r[6] = (f) => a.value = f),
          resource: e.column.resource,
          "resource-data": e.column.resourceData,
          options: e.column.options,
          multiple: e.column.isMultiple
        }, null, 8, ["read-mode", "modelValue", "resource", "resource-data", "options", "multiple"]))
      ], 64)) : (n(), h(I, { key: 8 }, [
        _(U(V(F)(e.column, s.value, e.i)), 1)
      ], 64));
    };
  }
}), Se = ["data-i", "data-handle-drag"], Ae = {
  key: 0,
  "data-role": "drag-indicator"
}, Ie = {
  key: 1,
  "data-role": "invalid-drag-indicator"
}, we = ["data-column", "colspan", "title", "onClick"], Le = { name: "LktTableRow", inheritAttrs: !1 }, te = /* @__PURE__ */ M({
  ...Le,
  props: {
    isDraggable: { type: Boolean, default: !0 },
    sortable: { type: Boolean, default: !0 },
    i: { type: [Number], default: 0 },
    displayHiddenColumnsIndicator: { type: Boolean, default: !1 },
    visibleColumns: { type: Array, default: () => [] },
    emptyColumns: { type: Array, default: () => [] },
    hiddenIsVisible: { type: Boolean, default: !1 },
    item: { type: Object, default: () => ({}) }
  },
  emits: ["edited", "click", "show"],
  setup(e, { emit: t }) {
    const l = t, i = e, s = p(i.item), a = (u, r, d) => {
      l("click", u, X("", { item: r, column: d }));
    }, v = (u, r) => {
      l("show", u, X("", { i: r }));
    }, S = (u, r) => {
      s.value = u;
    };
    return T(() => i.item, (u) => s.value = u), T(s, () => l("edited", s.value, i.i)), (u, r) => (n(), h("tr", {
      "data-i": e.i,
      "data-handle-drag": e.isDraggable
    }, [
      e.sortable && e.isDraggable ? (n(), h("td", Ae)) : e.sortable ? (n(), h("td", Ie)) : E("", !0),
      e.displayHiddenColumnsIndicator ? (n(), h("td", {
        key: 2,
        onClick: r[0] || (r[0] = (d) => v(d, e.i)),
        "data-role": "show-more",
        class: de(e.hiddenIsVisible ? "state-open" : "")
      }, null, 2)) : E("", !0),
      (n(!0), h(I, null, $(e.visibleColumns, (d) => (n(), h(I, null, [
        V(ge)(d, e.emptyColumns, e.item) ? (n(), h("td", {
          key: 0,
          "data-column": d.key,
          colspan: V(Y)(d, e.item),
          title: V(F)(d, e.item, e.i),
          onClick: (C) => a(C, e.item, d)
        }, [
          u.$slots[d.key] ? R(u.$slots, d.key, {
            key: 0,
            value: e.item[d.key],
            item: e.item,
            column: d,
            i: e.i
          }) : e.item ? (n(), b(le, {
            key: 1,
            column: d,
            modelValue: s.value,
            "onUpdate:modelValue": r[1] || (r[1] = (C) => s.value = C),
            i: e.i,
            onEdited: S
          }, null, 8, ["column", "modelValue", "i"])) : E("", !0)
        ], 8, we)) : E("", !0)
      ], 64))), 256))
    ], 8, Se));
  }
}), $e = { "data-role": "hidden-row" }, Ee = ["colspan"], De = ["data-column"], Te = ["data-i"], Be = ["data-column", "title", "onClick"], Ne = { name: "LktHiddenRow", inheritAttrs: !1 }, He = /* @__PURE__ */ M({
  ...Ne,
  props: {
    isDraggable: { type: Boolean, default: !0 },
    sortable: { type: Boolean, default: !0 },
    i: { type: [Number], default: 0 },
    hiddenColumnsColSpan: { type: Number, default: 0 },
    visibleColumns: { type: Array, default: () => [] },
    hiddenColumns: { type: Array, default: () => [] },
    emptyColumns: { type: Array, default: () => [] },
    hiddenIsVisible: { type: Boolean, default: !1 },
    modelValue: { type: Object, default: () => ({}) }
  },
  emits: ["update:modelValue", "click"],
  setup(e, { emit: t }) {
    const l = t, i = e, s = p(i.modelValue), a = (v, S, u) => {
      l("click", v, X("", { item: S, column: u }));
    };
    return T(() => i.modelValue, (v) => s.value = v), T(s, () => l("update:modelValue", s.value)), (v, S) => ce((n(), h("tr", $e, [
      D("td", { colspan: e.hiddenColumnsColSpan }, [
        D("table", null, [
          D("tr", null, [
            (n(!0), h(I, null, $(e.hiddenColumns, (u) => (n(), h("th", {
              "data-column": u.key
            }, [
              D("div", null, U(u.label), 1)
            ], 8, De))), 256))
          ]),
          D("tr", { "data-i": e.i }, [
            (n(!0), h(I, null, $(e.hiddenColumns, (u, r) => (n(), h("td", {
              "data-column": u.key,
              title: V(F)(u, s.value, r),
              onClick: (d) => a(d, s.value, u)
            }, [
              v.$slots[u.key] ? R(v.$slots, u.key, {
                key: 0,
                value: s.value[u.key],
                item: s.value,
                column: u,
                i: r
              }) : (n(), b(le, {
                key: 1,
                column: u,
                modelValue: s.value,
                "onUpdate:modelValue": S[0] || (S[0] = (d) => s.value = d),
                i: r
              }, null, 8, ["column", "modelValue", "i"]))
            ], 8, Be))), 256))
          ], 8, Te)
        ])
      ], 8, Ee)
    ], 512)), [
      [me, e.hiddenIsVisible]
    ]);
  }
}), Re = ["data-sortable"], xe = {
  key: 0,
  "data-role": "drag-indicator"
}, Oe = { key: 1 }, Ue = ["data-column", "data-sortable", "data-sort", "colspan", "title", "onClick"], Fe = { key: 1 }, Ke = {
  key: 1,
  class: "lkt-empty-table"
}, Me = { name: "LktTable", inheritAttrs: !1 }, je = /* @__PURE__ */ M({
  ...Me,
  props: {
    modelValue: { type: Array, default: () => [] },
    columns: { type: Array, default: () => [] },
    sorter: { type: Function, default: ee },
    sortable: { type: Boolean, default: !1 },
    hideEmptyColumns: { type: Boolean, default: !1 },
    draggableChecker: { type: Function, default: (e) => !0 },
    checkValidDrag: { type: Function, default: (e) => !0 },
    draggableItemKey: { type: String, default: "name" }
  },
  emits: ["update:modelValue", "sort", "click"],
  setup(e, { expose: t, emit: l }) {
    const i = l, s = fe(), a = e, v = {}, S = p(typeof a.sorter == "function" ? a.sorter : ee), u = p(Ce(a.columns)), r = p("asc"), d = p(a.modelValue), C = p(v), K = p(!1), x = ke(12), j = B(() => d.value.length > 0), N = B(() => {
      if (!a.hideEmptyColumns)
        return [];
      let o = [];
      return a.columns.forEach((c) => {
        let m = c.key, k = !1;
        d.value.forEach((g) => {
          if (typeof g.checkEmpty == "function")
            return g.checkEmpty(g);
          g[m] && (k = !0);
        }), k || o.push(m);
      }), o;
    }), f = B(() => a.columns.filter((o) => !o.hidden)), z = B(() => a.columns.filter((o) => o.hidden)), ae = B(() => {
      let o = f.value.length + 1;
      return a.sortable && ++o, o;
    }), J = B(() => z.value.length > 0 && !a.sortable), ne = B(() => a.columns.map((o) => o.key)), q = B(() => {
      let o = [];
      for (let c in s)
        ne.value.indexOf(c) !== -1 && o.push(c);
      return o;
    }), ie = (o) => {
      let c = o.target;
      if (typeof c.dataset.column > "u")
        do
          c = c.parentNode;
        while (typeof c.dataset.column > "u" && c.tagName !== "TABLE" && c.tagName !== "body");
      if (c.tagName === "TD" && (c = c.parentNode, c = c.dataset.i, typeof c < "u"))
        return d.value[c];
    }, G = (o) => C.value["tr_" + o] === !0, Z = (o) => {
      !o || o.sortable && (d.value = d.value.sort((c, m) => S.value(c, m, o, r.value)), r.value = r.value === "asc" ? "desc" : "asc", u.value = o.key, i("sort", [u.value, r.value]));
    }, P = (o, c) => {
      i("click", o, c);
    }, Q = (o, c) => {
      let m = "tr_" + c.value.i;
      C.value[m] = typeof C.value[m] > "u" ? !0 : !C.value[m];
    }, oe = (o, c) => {
      d.value[c] = o;
    };
    return he(() => {
      Z(pe(a.columns, u.value));
    }), T(() => a.modelValue, (o) => d.value = o), T(d, (o) => {
      i("update:modelValue", o);
    }), t({ getItemByEvent: ie }), (o, c) => j.value ? (n(), h("div", {
      key: 0,
      class: "lkt-table",
      "data-sortable": e.sortable
    }, [
      D("table", null, [
        D("thead", null, [
          D("tr", null, [
            e.sortable ? (n(), h("th", xe)) : E("", !0),
            J.value ? (n(), h("th", Oe)) : E("", !0),
            (n(!0), h(I, null, $(f.value, (m) => (n(), h(I, null, [
              N.value.indexOf(m.key) === -1 ? (n(), h("th", {
                key: 0,
                "data-column": m.key,
                "data-sortable": m.sortable === !0,
                "data-sort": m.sortable === !0 && u.value === m.key ? r.value : "",
                colspan: V(be)(m, e.columns.length, d.value),
                title: m.label,
                onClick: (k) => Z(m)
              }, [
                D("div", null, U(m.label), 1)
              ], 8, Ue)) : E("", !0)
            ], 64))), 256))
          ])
        ]),
        e.sortable ? (n(), b(V(ye), {
          key: 0,
          modelValue: d.value,
          "onUpdate:modelValue": c[0] || (c[0] = (m) => d.value = m),
          move: e.checkValidDrag,
          itemKey: e.draggableItemKey,
          onStart: c[1] || (c[1] = (m) => K.value = !0),
          onEnd: c[2] || (c[2] = (m) => K.value = !1),
          tag: "tbody",
          class: "lkt-sortable-table",
          handle: "[data-handle-drag]"
        }, {
          item: O(({ element: m, index: k }) => [
            (n(), b(te, {
              key: V(x) + "-" + k,
              i: k,
              item: m,
              "display-hidden-columns-indicator": J.value,
              "is-draggable": e.draggableChecker ? e.draggableChecker(m) : !0,
              sortable: e.sortable,
              "visible-columns": f.value,
              "empty-columns": N.value,
              "hidden-is-visible": G(k),
              onClick: P,
              onShow: Q
            }, W({ _: 2 }, [
              $(q.value, (g) => ({
                name: g,
                fn: O((A) => [
                  R(o.$slots, g, {
                    item: A.item,
                    value: A.value,
                    column: A.column
                  })
                ])
              }))
            ]), 1032, ["i", "item", "display-hidden-columns-indicator", "is-draggable", "sortable", "visible-columns", "empty-columns", "hidden-is-visible"]))
          ]),
          _: 3
        }, 8, ["modelValue", "move", "itemKey"])) : (n(), h("tbody", Fe, [
          (n(!0), h(I, null, $(d.value, (m, k) => (n(), b(te, {
            key: V(x) + "-" + k,
            i: k,
            item: m,
            "display-hidden-columns-indicator": J.value,
            "is-draggable": e.draggableChecker ? e.draggableChecker(m) : !0,
            sortable: e.sortable,
            "visible-columns": f.value,
            "empty-columns": N.value,
            "hidden-is-visible": G(k),
            onClick: P,
            onShow: Q,
            onEdited: oe
          }, W({ _: 2 }, [
            $(q.value, (g) => ({
              name: g,
              fn: O((A) => [
                R(o.$slots, g, {
                  item: A.item,
                  value: A.value,
                  column: A.column
                })
              ])
            }))
          ]), 1032, ["i", "item", "display-hidden-columns-indicator", "is-draggable", "sortable", "visible-columns", "empty-columns", "hidden-is-visible"]))), 128)),
          z.value.length > 0 ? (n(!0), h(I, { key: 0 }, $(d.value, (m, k) => (n(), b(He, {
            key: V(x) + "-" + k,
            i: k,
            item: m,
            "hidden-columns": z.value,
            "hidden-columns-col-span": ae.value,
            "is-draggable": e.draggableChecker ? e.draggableChecker(m) : !0,
            sortable: e.sortable,
            "visible-columns": f.value,
            "empty-columns": N.value,
            "hidden-is-visible": G(k),
            onClick: P,
            onShow: Q
          }, W({ _: 2 }, [
            $(q.value, (g) => ({
              name: g,
              fn: O((A) => [
                R(o.$slots, g, {
                  item: A.item,
                  value: A.value,
                  column: A.column
                })
              ])
            }))
          ]), 1032, ["i", "item", "hidden-columns", "hidden-columns-col-span", "is-draggable", "sortable", "visible-columns", "empty-columns", "hidden-is-visible"]))), 128)) : E("", !0)
        ]))
      ])
    ], 8, Re)) : o.$slots["no-items"] ? (n(), h("div", Ke, [
      R(o.$slots, "no-items")
    ])) : E("", !0);
  }
}), it = {
  install: (e) => {
    e.component("lkt-table", je);
  }
};
export {
  Ye as createActionColumn,
  tt as createCheckColumn,
  We as createColumn,
  _e as createEmailColumn,
  nt as createHiddenColumn,
  Xe as createLinkColumn,
  at as createSelectColumn,
  lt as createSwitchColumn,
  et as createTelColumn,
  Ze as createTextColumn,
  it as default
};
