var oe = Object.defineProperty;
var ue = (e, t, l) => t in e ? oe(e, t, { enumerable: !0, configurable: !0, writable: !0, value: l }) : e[t] = l;
var C = (e, t, l) => (ue(e, typeof t != "symbol" ? t + "" : t, l), l);
import { defineComponent as z, ref as A, watch as L, resolveComponent as F, openBlock as n, createBlock as I, withCtx as K, createTextVNode as H, toDisplayString as E, unref as k, createElementBlock as c, Fragment as y, createCommentVNode as h, createElementVNode as V, normalizeClass as se, renderList as N, renderSlot as x, withDirectives as re, vShow as de, useSlots as ce, computed as D, onMounted as me, createSlots as W } from "vue";
import fe from "vuedraggable";
import { createLktEvent as X } from "lkt-events";
import { generateRandomString as ye } from "lkt-string-tools";
class T {
  constructor(t = "", l = "") {
    C(this, "key");
    C(this, "label");
    C(this, "sortable");
    C(this, "hidden");
    C(this, "editable");
    C(this, "formatter");
    C(this, "checkEmpty");
    C(this, "colspan");
    C(this, "type");
    C(this, "link");
    C(this, "action");
    C(this, "options");
    this.key = t, this.label = l, this.sortable = !0, this.hidden = !1, this.formatter = void 0, this.checkEmpty = void 0, this.colspan = void 0;
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
}
const We = (e, t, l = !0) => new T(e, t).setIsSortable(l), Xe = (e, t, l, r = !0) => new T(e, t).setIsSortable(r).defineAsLink(l), Ye = (e, t, l, r = !0) => new T(e, t).setIsSortable(r).defineAsAction(l), Ze = (e, t, l = !0) => new T(e, t).setIsSortable(l).defineAsText(), _e = (e, t, l = !0) => new T(e, t).setIsSortable(l).defineAsCheck(), et = (e, t, l = !0) => new T(e, t).setIsSortable(l).defineAsSwitch(), tt = (e, t, l, r = !0) => new T(e, t).setIsSortable(r).defineAsSelect(l), lt = (e, t, l = !0) => new T(e, t).setIsSortable(l).setIsHidden(!0), _ = (e, t, l, r) => {
  if (!l)
    return 0;
  let i = e[l.key], o = t[l.key];
  if (r === "asc") {
    if (i > o)
      return 1;
    if (o > i)
      return -1;
  } else {
    if (i > o)
      return -1;
    if (o > i)
      return 1;
  }
  return 0;
}, B = (e, t, l) => e.formatter && typeof e.formatter == "function" ? e.formatter(t[e.key], t, e, l) : t[e.key], he = (e, t, l) => {
  if (!e.colspan)
    return -1;
  let r = t;
  return l.forEach((i) => {
    let o = Y(e, i);
    o > 0 && o < r && (r = o);
  }), r;
}, Y = (e, t) => e.colspan === !1 ? !1 : typeof e.colspan == "function" ? e.colspan(t) : e.colspan, ke = (e, t, l) => {
  if (typeof e != "object" || !e.key || t.indexOf(e.key) > -1)
    return !1;
  let r = Y(e, l);
  return typeof e.colspan > "u" ? !0 : (typeof e.colspan < "u" && (typeof e.colspan == "function" ? r = parseInt(e.colspan()) : r = parseInt(e.colspan)), r > 0);
}, ve = (e = []) => {
  if (e.length > 0) {
    for (let t = 0; t < e.length; ++t)
      if (e[t].sortable)
        return e[t].key;
  }
  return "";
}, be = (e, t) => {
  if (e.length > 0) {
    for (let l = 0; l < e.length; ++l)
      if (e[l].key === t)
        return e[l];
  }
  return null;
}, ge = /* @__PURE__ */ V("i", { class: "lkt-cell-text" }, null, -1), Ce = /* @__PURE__ */ V("i", { class: "lkt-cell-check" }, null, -1), Ve = /* @__PURE__ */ V("i", { class: "lkt-cell-check" }, null, -1), Se = /* @__PURE__ */ V("i", { class: "lkt-cell-check" }, null, -1), pe = { name: "LktTableCell", inheritAttrs: !1 }, te = /* @__PURE__ */ z({
  ...pe,
  props: {
    column: { type: Object, default: () => ({}) },
    i: { type: [Number], default: 0 },
    modelValue: { type: Object, default: () => ({}) }
  },
  emits: ["edited"],
  setup(e, { emit: t }) {
    const l = t, r = e, i = A(r.modelValue), o = A(i.value[r.column.key]), S = A(null);
    return L(o, () => {
      const b = JSON.parse(JSON.stringify(i.value));
      b[r.column.key] = o.value, l("edited", b, r.i);
    }), L(() => r.modelValue, (b) => {
      i.value = b, o.value = i.value[r.column.key];
    }), (b, a) => {
      const f = F("router-link"), s = F("lkt-field-text"), w = F("lkt-field-check"), j = F("lkt-field-switch"), O = F("lkt-field-select");
      return e.column.type === "link" ? (n(), I(f, {
        key: 0,
        to: e.column.getHref(i.value)
      }, {
        default: K(() => [
          H(E(k(B)(e.column, i.value, e.i)), 1)
        ]),
        _: 1
      }, 8, ["to"])) : e.column.type === "action" ? (n(), c("a", {
        key: 1,
        href: "#",
        onClick: a[0] || (a[0] = (p) => e.column.doAction(i.value))
      }, E(k(B)(e.column, i.value, e.i)), 1)) : e.column.type === "text" ? (n(), c(y, { key: 2 }, [
        e.column.editable ? (n(), I(s, {
          key: 0,
          ref: (p) => S.value = p,
          modelValue: o.value,
          "onUpdate:modelValue": a[1] || (a[1] = (p) => o.value = p)
        }, null, 8, ["modelValue"])) : h("", !0),
        e.column.editable ? h("", !0) : (n(), c(y, { key: 1 }, [
          ge,
          H(E(k(B)(e.column, i.value, e.i)), 1)
        ], 64))
      ], 64)) : e.column.type === "check" ? (n(), c(y, { key: 3 }, [
        e.column.editable ? (n(), I(w, {
          key: 0,
          modelValue: o.value,
          "onUpdate:modelValue": a[2] || (a[2] = (p) => o.value = p)
        }, null, 8, ["modelValue"])) : h("", !0),
        e.column.editable ? h("", !0) : (n(), c(y, { key: 1 }, [
          Ce,
          H(E(k(B)(e.column, i.value, e.i)), 1)
        ], 64))
      ], 64)) : e.column.type === "switch" ? (n(), c(y, { key: 4 }, [
        e.column.editable ? (n(), I(j, {
          key: 0,
          modelValue: o.value,
          "onUpdate:modelValue": a[3] || (a[3] = (p) => o.value = p)
        }, null, 8, ["modelValue"])) : h("", !0),
        e.column.editable ? h("", !0) : (n(), c(y, { key: 1 }, [
          Ve,
          H(E(k(B)(e.column, i.value, e.i)), 1)
        ], 64))
      ], 64)) : e.column.type === "select" ? (n(), c(y, { key: 5 }, [
        e.column.editable ? (n(), I(O, {
          key: 0,
          modelValue: o.value,
          "onUpdate:modelValue": a[4] || (a[4] = (p) => o.value = p),
          options: e.column.options
        }, null, 8, ["modelValue", "options"])) : h("", !0),
        e.column.editable ? h("", !0) : (n(), c(y, { key: 1 }, [
          Se,
          H(E(k(B)(e.column, i.value, e.i)), 1)
        ], 64))
      ], 64)) : (n(), c(y, { key: 6 }, [
        H(E(k(B)(e.column, i.value, e.i)), 1)
      ], 64));
    };
  }
}), $e = ["data-i", "data-handle-drag"], Ae = {
  key: 0,
  "data-role": "drag-indicator"
}, Ie = {
  key: 1,
  "data-role": "invalid-drag-indicator"
}, we = ["data-column", "colspan", "title", "onClick"], Ee = { name: "LktTableRow", inheritAttrs: !1 }, ee = /* @__PURE__ */ z({
  ...Ee,
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
    const l = t, r = e, i = A(r.item), o = (a, f, s) => {
      l("click", a, X("", { item: f, column: s }));
    }, S = (a, f) => {
      l("show", a, X("", { i: f }));
    }, b = (a, f) => {
      i.value = a;
    };
    return L(() => r.item, (a) => i.value = a), L(i, () => l("edited", i.value, r.i)), (a, f) => (n(), c("tr", {
      "data-i": e.i,
      "data-handle-drag": e.isDraggable
    }, [
      e.sortable && e.isDraggable ? (n(), c("td", Ae)) : e.sortable ? (n(), c("td", Ie)) : h("", !0),
      e.displayHiddenColumnsIndicator ? (n(), c("td", {
        key: 2,
        onClick: f[0] || (f[0] = (s) => S(s, e.i)),
        "data-role": "show-more",
        class: se(e.hiddenIsVisible ? "state-open" : "")
      }, null, 2)) : h("", !0),
      (n(!0), c(y, null, N(e.visibleColumns, (s) => (n(), c(y, null, [
        k(ke)(s, e.emptyColumns, e.item) ? (n(), c("td", {
          key: 0,
          "data-column": s.key,
          colspan: k(Y)(s, e.item),
          title: k(B)(s, e.item, e.i),
          onClick: (w) => o(w, e.item, s)
        }, [
          a.$slots[s.key] ? x(a.$slots, s.key, {
            key: 0,
            value: e.item[s.key],
            item: e.item,
            column: s,
            i: e.i
          }) : e.item ? (n(), I(te, {
            key: 1,
            column: s,
            modelValue: i.value,
            "onUpdate:modelValue": f[1] || (f[1] = (w) => i.value = w),
            i: e.i,
            onEdited: b
          }, null, 8, ["column", "modelValue", "i"])) : h("", !0)
        ], 8, we)) : h("", !0)
      ], 64))), 256))
    ], 8, $e));
  }
}), Be = { "data-role": "hidden-row" }, Ne = ["colspan"], De = ["data-column"], Le = ["data-i"], Te = ["data-column", "title", "onClick"], He = { name: "LktHiddenRow", inheritAttrs: !1 }, xe = /* @__PURE__ */ z({
  ...He,
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
    const l = t, r = e, i = A(r.modelValue), o = (S, b, a) => {
      l("click", S, X("", { item: b, column: a }));
    };
    return L(() => r.modelValue, (S) => i.value = S), L(i, () => l("update:modelValue", i.value)), (S, b) => re((n(), c("tr", Be, [
      V("td", { colspan: e.hiddenColumnsColSpan }, [
        V("table", null, [
          V("tr", null, [
            (n(!0), c(y, null, N(e.hiddenColumns, (a) => (n(), c("th", {
              "data-column": a.key
            }, [
              V("div", null, E(a.label), 1)
            ], 8, De))), 256))
          ]),
          V("tr", { "data-i": e.i }, [
            (n(!0), c(y, null, N(e.hiddenColumns, (a, f) => (n(), c("td", {
              "data-column": a.key,
              title: k(B)(a, i.value, f),
              onClick: (s) => o(s, i.value, a)
            }, [
              S.$slots[a.key] ? x(S.$slots, a.key, {
                key: 0,
                value: i.value[a.key],
                item: i.value,
                column: a,
                i: f
              }) : (n(), I(te, {
                key: 1,
                column: a,
                modelValue: i.value,
                "onUpdate:modelValue": b[0] || (b[0] = (s) => i.value = s),
                i: f
              }, null, 8, ["column", "modelValue", "i"]))
            ], 8, Te))), 256))
          ], 8, Le)
        ])
      ], 8, Ne)
    ], 512)), [
      [de, e.hiddenIsVisible]
    ]);
  }
}), Oe = ["data-sortable"], Ue = {
  key: 0,
  "data-role": "drag-indicator"
}, Fe = { key: 1 }, Ke = ["data-column", "data-sortable", "data-sort", "colspan", "title", "onClick"], je = { key: 1 }, Re = {
  key: 1,
  class: "lkt-empty-table"
}, ze = { name: "LktTable", inheritAttrs: !1 }, Je = /* @__PURE__ */ z({
  ...ze,
  props: {
    modelValue: { type: Array, default: () => [] },
    columns: { type: Array, default: () => [] },
    sorter: { type: Function, default: _ },
    sortable: { type: Boolean, default: !1 },
    hideEmptyColumns: { type: Boolean, default: !1 },
    draggableChecker: { type: Function, default: (e) => !0 },
    checkValidDrag: { type: Function, default: (e) => !0 },
    draggableItemKey: { type: String, default: "name" }
  },
  emits: ["update:modelValue", "sort", "click"],
  setup(e, { expose: t, emit: l }) {
    const r = l, i = ce(), o = e, S = {}, b = A(typeof o.sorter == "function" ? o.sorter : _), a = A(ve(o.columns)), f = A("asc"), s = A(o.modelValue), w = A(S), j = A(!1), O = ye(12), p = D(() => s.value.length > 0), R = D(() => {
      if (!o.hideEmptyColumns)
        return [];
      let u = [];
      return o.columns.forEach((d) => {
        let m = d.key, v = !1;
        s.value.forEach((g) => {
          if (typeof g.checkEmpty == "function")
            return g.checkEmpty(g);
          g[m] && (v = !0);
        }), v || u.push(m);
      }), u;
    }), U = D(() => o.columns.filter((u) => !u.hidden)), J = D(() => o.columns.filter((u) => u.hidden)), le = D(() => {
      let u = U.value.length + 1;
      return o.sortable && ++u, u;
    }), q = D(() => J.value.length > 0 && !o.sortable), ne = D(() => o.columns.map((u) => u.key)), M = D(() => {
      let u = [];
      for (let d in i)
        ne.value.indexOf(d) !== -1 && u.push(d);
      return u;
    }), ae = (u) => {
      let d = u.target;
      if (typeof d.dataset.column > "u")
        do
          d = d.parentNode;
        while (typeof d.dataset.column > "u" && d.tagName !== "TABLE" && d.tagName !== "body");
      if (d.tagName === "TD" && (d = d.parentNode, d = d.dataset.i, typeof d < "u"))
        return s.value[d];
    }, G = (u) => w.value["tr_" + u] === !0, Z = (u) => {
      !u || u.sortable && (s.value = s.value.sort((d, m) => b.value(d, m, u, f.value)), f.value = f.value === "asc" ? "desc" : "asc", a.value = u.key, r("sort", [a.value, f.value]));
    }, P = (u, d) => {
      r("click", u, d);
    }, Q = (u, d) => {
      let m = "tr_" + d.value.i;
      w.value[m] = typeof w.value[m] > "u" ? !0 : !w.value[m];
    }, ie = (u, d) => {
      s.value[d] = u;
    };
    return me(() => {
      Z(be(o.columns, a.value));
    }), L(() => o.modelValue, (u) => s.value = u), L(s, (u) => {
      r("update:modelValue", u);
    }), t({ getItemByEvent: ae }), (u, d) => p.value ? (n(), c("div", {
      key: 0,
      class: "lkt-table",
      "data-sortable": e.sortable
    }, [
      V("table", null, [
        V("thead", null, [
          V("tr", null, [
            e.sortable ? (n(), c("th", Ue)) : h("", !0),
            q.value ? (n(), c("th", Fe)) : h("", !0),
            (n(!0), c(y, null, N(U.value, (m) => (n(), c(y, null, [
              R.value.indexOf(m.key) === -1 ? (n(), c("th", {
                key: 0,
                "data-column": m.key,
                "data-sortable": m.sortable === !0,
                "data-sort": m.sortable === !0 && a.value === m.key ? f.value : "",
                colspan: k(he)(m, e.columns.length, s.value),
                title: m.label,
                onClick: (v) => Z(m)
              }, [
                V("div", null, E(m.label), 1)
              ], 8, Ke)) : h("", !0)
            ], 64))), 256))
          ])
        ]),
        e.sortable ? (n(), I(k(fe), {
          key: 0,
          modelValue: s.value,
          "onUpdate:modelValue": d[0] || (d[0] = (m) => s.value = m),
          move: e.checkValidDrag,
          itemKey: e.draggableItemKey,
          onStart: d[1] || (d[1] = (m) => j.value = !0),
          onEnd: d[2] || (d[2] = (m) => j.value = !1),
          tag: "tbody",
          class: "lkt-sortable-table",
          handle: "[data-handle-drag]"
        }, {
          item: K(({ element: m, index: v }) => [
            (n(), I(ee, {
              key: k(O) + "-" + v,
              i: v,
              item: m,
              "display-hidden-columns-indicator": q.value,
              "is-draggable": e.draggableChecker ? e.draggableChecker(m) : !0,
              sortable: e.sortable,
              "visible-columns": U.value,
              "empty-columns": R.value,
              "hidden-is-visible": G(v),
              onClick: P,
              onShow: Q
            }, W({ _: 2 }, [
              N(M.value, (g) => ({
                name: g,
                fn: K(($) => [
                  x(u.$slots, g, {
                    item: $.item,
                    value: $.value,
                    column: $.column
                  })
                ])
              }))
            ]), 1032, ["i", "item", "display-hidden-columns-indicator", "is-draggable", "sortable", "visible-columns", "empty-columns", "hidden-is-visible"]))
          ]),
          _: 3
        }, 8, ["modelValue", "move", "itemKey"])) : (n(), c("tbody", je, [
          (n(!0), c(y, null, N(s.value, (m, v) => (n(), I(ee, {
            key: k(O) + "-" + v,
            i: v,
            item: m,
            "display-hidden-columns-indicator": q.value,
            "is-draggable": e.draggableChecker ? e.draggableChecker(m) : !0,
            sortable: e.sortable,
            "visible-columns": U.value,
            "empty-columns": R.value,
            "hidden-is-visible": G(v),
            onClick: P,
            onShow: Q,
            onEdited: ie
          }, W({ _: 2 }, [
            N(M.value, (g) => ({
              name: g,
              fn: K(($) => [
                x(u.$slots, g, {
                  item: $.item,
                  value: $.value,
                  column: $.column
                })
              ])
            }))
          ]), 1032, ["i", "item", "display-hidden-columns-indicator", "is-draggable", "sortable", "visible-columns", "empty-columns", "hidden-is-visible"]))), 128)),
          J.value.length > 0 ? (n(!0), c(y, { key: 0 }, N(s.value, (m, v) => (n(), I(xe, {
            key: k(O) + "-" + v,
            i: v,
            item: m,
            "hidden-columns": J.value,
            "hidden-columns-col-span": le.value,
            "is-draggable": e.draggableChecker ? e.draggableChecker(m) : !0,
            sortable: e.sortable,
            "visible-columns": U.value,
            "empty-columns": R.value,
            "hidden-is-visible": G(v),
            onClick: P,
            onShow: Q
          }, W({ _: 2 }, [
            N(M.value, (g) => ({
              name: g,
              fn: K(($) => [
                x(u.$slots, g, {
                  item: $.item,
                  value: $.value,
                  column: $.column
                })
              ])
            }))
          ]), 1032, ["i", "item", "hidden-columns", "hidden-columns-col-span", "is-draggable", "sortable", "visible-columns", "empty-columns", "hidden-is-visible"]))), 128)) : h("", !0)
        ]))
      ])
    ], 8, Oe)) : u.$slots["no-items"] ? (n(), c("div", Re, [
      x(u.$slots, "no-items")
    ])) : h("", !0);
  }
}), nt = {
  install: (e) => {
    e.component("lkt-table", Je);
  }
};
export {
  Ye as createActionColumn,
  _e as createCheckColumn,
  We as createColumn,
  lt as createHiddenColumn,
  Xe as createLinkColumn,
  tt as createSelectColumn,
  et as createSwitchColumn,
  Ze as createTextColumn,
  nt as default
};
