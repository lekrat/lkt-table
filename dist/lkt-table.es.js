var ue = Object.defineProperty;
var oe = (e, t, l) => t in e ? ue(e, t, { enumerable: !0, configurable: !0, writable: !0, value: l }) : e[t] = l;
var S = (e, t, l) => (oe(e, typeof t != "symbol" ? t + "" : t, l), l);
import { defineComponent as z, ref as I, watch as L, resolveComponent as F, openBlock as a, createBlock as A, withCtx as K, createTextVNode as H, toDisplayString as N, unref as v, createElementBlock as m, Fragment as y, createCommentVNode as h, createElementVNode as C, normalizeClass as se, renderList as E, renderSlot as x, withDirectives as re, vShow as de, useSlots as ce, computed as B, onMounted as me, createSlots as W } from "vue";
import fe from "vuedraggable";
import { createLktEvent as X } from "lkt-events";
import { generateRandomString as ye } from "lkt-string-tools";
class T {
  constructor(t = "", l = "") {
    S(this, "key");
    S(this, "label");
    S(this, "sortable");
    S(this, "hidden");
    S(this, "editable");
    S(this, "formatter");
    S(this, "checkEmpty");
    S(this, "colspan");
    S(this, "type");
    S(this, "link");
    S(this, "options");
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
  defineAsSelect(t) {
    return this.type = "select", this.options = t, this;
  }
}
const We = (e, t, l = !0) => new T(e, t).setIsSortable(l), Xe = (e, t, l, d = !0) => new T(e, t).setIsSortable(d).defineAsLink(l), Ye = (e, t, l = !0) => new T(e, t).setIsSortable(l).defineAsText(), Ze = (e, t, l = !0) => new T(e, t).setIsSortable(l).defineAsCheck(), _e = (e, t, l = !0) => new T(e, t).setIsSortable(l).defineAsSwitch(), et = (e, t, l, d = !0) => new T(e, t).setIsSortable(d).defineAsSelect(l), tt = (e, t, l = !0) => new T(e, t).setIsSortable(l).setIsHidden(!0), _ = (e, t, l, d) => {
  if (!l)
    return 0;
  let o = e[l.key], n = t[l.key];
  if (d === "asc") {
    if (o > n)
      return 1;
    if (n > o)
      return -1;
  } else {
    if (o > n)
      return -1;
    if (n > o)
      return 1;
  }
  return 0;
}, D = (e, t, l) => e.formatter && typeof e.formatter == "function" ? e.formatter(t[e.key], t, e, l) : t[e.key], he = (e, t, l) => {
  if (!e.colspan)
    return -1;
  let d = t;
  return l.forEach((o) => {
    let n = Y(e, o);
    n > 0 && n < d && (d = n);
  }), d;
}, Y = (e, t) => e.colspan === !1 ? !1 : typeof e.colspan == "function" ? e.colspan(t) : e.colspan, ke = (e, t, l) => {
  if (typeof e != "object" || !e.key || t.indexOf(e.key) > -1)
    return !1;
  let d = Y(e, l);
  return typeof e.colspan > "u" ? !0 : (typeof e.colspan < "u" && (typeof e.colspan == "function" ? d = parseInt(e.colspan()) : d = parseInt(e.colspan)), d > 0);
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
}, ge = /* @__PURE__ */ C("i", { class: "lkt-cell-text" }, null, -1), Ce = /* @__PURE__ */ C("i", { class: "lkt-cell-check" }, null, -1), Ve = /* @__PURE__ */ C("i", { class: "lkt-cell-check" }, null, -1), Se = /* @__PURE__ */ C("i", { class: "lkt-cell-check" }, null, -1), pe = { name: "LktTableCell", inheritAttrs: !1 }, te = /* @__PURE__ */ z({
  ...pe,
  props: {
    column: { type: Object, default: () => ({}) },
    i: { type: [Number], default: 0 },
    modelValue: { type: Object, default: () => ({}) }
  },
  emits: ["edited"],
  setup(e, { emit: t }) {
    const l = t, d = e, o = I(d.modelValue), n = I(o.value[d.column.key]), V = I(null);
    return L(n, () => {
      const b = JSON.parse(JSON.stringify(o.value));
      b[d.column.key] = n.value, l("edited", b, d.i);
    }), L(() => d.modelValue, (b) => {
      o.value = b, n.value = o.value[d.column.key];
    }), (b, i) => {
      const f = F("router-link"), s = F("lkt-field-text"), w = F("lkt-field-check"), j = F("lkt-field-switch"), O = F("lkt-field-select");
      return e.column.type === "link" ? (a(), A(f, {
        key: 0,
        to: e.column.getHref(o.value)
      }, {
        default: K(() => [
          H(N(v(D)(e.column, o.value, e.i)), 1)
        ]),
        _: 1
      }, 8, ["to"])) : e.column.type === "text" ? (a(), m(y, { key: 1 }, [
        e.column.editable ? (a(), A(s, {
          key: 0,
          ref: (p) => V.value = p,
          modelValue: n.value,
          "onUpdate:modelValue": i[0] || (i[0] = (p) => n.value = p)
        }, null, 8, ["modelValue"])) : h("", !0),
        e.column.editable ? h("", !0) : (a(), m(y, { key: 1 }, [
          ge,
          H(N(v(D)(e.column, o.value, e.i)), 1)
        ], 64))
      ], 64)) : e.column.type === "check" ? (a(), m(y, { key: 2 }, [
        e.column.editable ? (a(), A(w, {
          key: 0,
          modelValue: n.value,
          "onUpdate:modelValue": i[1] || (i[1] = (p) => n.value = p)
        }, null, 8, ["modelValue"])) : h("", !0),
        e.column.editable ? h("", !0) : (a(), m(y, { key: 1 }, [
          Ce,
          H(N(v(D)(e.column, o.value, e.i)), 1)
        ], 64))
      ], 64)) : e.column.type === "switch" ? (a(), m(y, { key: 3 }, [
        e.column.editable ? (a(), A(j, {
          key: 0,
          modelValue: n.value,
          "onUpdate:modelValue": i[2] || (i[2] = (p) => n.value = p)
        }, null, 8, ["modelValue"])) : h("", !0),
        e.column.editable ? h("", !0) : (a(), m(y, { key: 1 }, [
          Ve,
          H(N(v(D)(e.column, o.value, e.i)), 1)
        ], 64))
      ], 64)) : e.column.type === "select" ? (a(), m(y, { key: 4 }, [
        e.column.editable ? (a(), A(O, {
          key: 0,
          modelValue: n.value,
          "onUpdate:modelValue": i[3] || (i[3] = (p) => n.value = p),
          options: e.column.options
        }, null, 8, ["modelValue", "options"])) : h("", !0),
        e.column.editable ? h("", !0) : (a(), m(y, { key: 1 }, [
          Se,
          H(N(v(D)(e.column, o.value, e.i)), 1)
        ], 64))
      ], 64)) : (a(), m(y, { key: 5 }, [
        H(N(v(D)(e.column, o.value, e.i)), 1)
      ], 64));
    };
  }
}), $e = ["data-i", "data-handle-drag"], Ie = {
  key: 0,
  "data-role": "drag-indicator"
}, Ae = {
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
    const l = t, d = e, o = I(d.item), n = (i, f, s) => {
      l("click", i, X("", { item: f, column: s }));
    }, V = (i, f) => {
      l("show", i, X("", { i: f }));
    }, b = (i, f) => {
      o.value = i;
    };
    return L(() => d.item, (i) => o.value = i), L(o, () => l("edited", o.value, d.i)), (i, f) => (a(), m("tr", {
      "data-i": e.i,
      "data-handle-drag": e.isDraggable
    }, [
      e.sortable && e.isDraggable ? (a(), m("td", Ie)) : e.sortable ? (a(), m("td", Ae)) : h("", !0),
      e.displayHiddenColumnsIndicator ? (a(), m("td", {
        key: 2,
        onClick: f[0] || (f[0] = (s) => V(s, e.i)),
        "data-role": "show-more",
        class: se(e.hiddenIsVisible ? "state-open" : "")
      }, null, 2)) : h("", !0),
      (a(!0), m(y, null, E(e.visibleColumns, (s) => (a(), m(y, null, [
        v(ke)(s, e.emptyColumns, e.item) ? (a(), m("td", {
          key: 0,
          "data-column": s.key,
          colspan: v(Y)(s, e.item),
          title: v(D)(s, e.item, e.i),
          onClick: (w) => n(w, e.item, s)
        }, [
          i.$slots[s.key] ? x(i.$slots, s.key, {
            key: 0,
            value: e.item[s.key],
            item: e.item,
            column: s,
            i: e.i
          }) : e.item ? (a(), A(te, {
            key: 1,
            column: s,
            modelValue: o.value,
            "onUpdate:modelValue": f[1] || (f[1] = (w) => o.value = w),
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
    const l = t, d = e, o = I(d.modelValue), n = (V, b, i) => {
      l("click", V, X("", { item: b, column: i }));
    };
    return L(() => d.modelValue, (V) => o.value = V), L(o, () => l("update:modelValue", o.value)), (V, b) => re((a(), m("tr", Be, [
      C("td", { colspan: e.hiddenColumnsColSpan }, [
        C("table", null, [
          C("tr", null, [
            (a(!0), m(y, null, E(e.hiddenColumns, (i) => (a(), m("th", {
              "data-column": i.key
            }, [
              C("div", null, N(i.label), 1)
            ], 8, De))), 256))
          ]),
          C("tr", { "data-i": e.i }, [
            (a(!0), m(y, null, E(e.hiddenColumns, (i, f) => (a(), m("td", {
              "data-column": i.key,
              title: v(D)(i, o.value, f),
              onClick: (s) => n(s, o.value, i)
            }, [
              V.$slots[i.key] ? x(V.$slots, i.key, {
                key: 0,
                value: o.value[i.key],
                item: o.value,
                column: i,
                i: f
              }) : (a(), A(te, {
                key: 1,
                column: i,
                modelValue: o.value,
                "onUpdate:modelValue": b[0] || (b[0] = (s) => o.value = s),
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
    const d = l, o = ce(), n = e, V = {}, b = I(typeof n.sorter == "function" ? n.sorter : _), i = I(ve(n.columns)), f = I("asc"), s = I(n.modelValue), w = I(V), j = I(!1), O = ye(12), p = B(() => s.value.length > 0), R = B(() => {
      if (!n.hideEmptyColumns)
        return [];
      let u = [];
      return n.columns.forEach((r) => {
        let c = r.key, k = !1;
        s.value.forEach((g) => {
          if (typeof g.checkEmpty == "function")
            return g.checkEmpty(g);
          g[c] && (k = !0);
        }), k || u.push(c);
      }), u;
    }), U = B(() => n.columns.filter((u) => !u.hidden)), J = B(() => n.columns.filter((u) => u.hidden)), le = B(() => {
      let u = U.value.length + 1;
      return n.sortable && ++u, u;
    }), q = B(() => J.value.length > 0 && !n.sortable), ae = B(() => n.columns.map((u) => u.key)), M = B(() => {
      let u = [];
      for (let r in o)
        ae.value.indexOf(r) !== -1 && u.push(r);
      return u;
    }), ne = (u) => {
      let r = u.target;
      if (typeof r.dataset.column > "u")
        do
          r = r.parentNode;
        while (typeof r.dataset.column > "u" && r.tagName !== "TABLE" && r.tagName !== "body");
      if (r.tagName === "TD" && (r = r.parentNode, r = r.dataset.i, typeof r < "u"))
        return s.value[r];
    }, G = (u) => w.value["tr_" + u] === !0, Z = (u) => {
      !u || u.sortable && (s.value = s.value.sort((r, c) => b.value(r, c, u, f.value)), f.value = f.value === "asc" ? "desc" : "asc", i.value = u.key, d("sort", [i.value, f.value]));
    }, P = (u, r) => {
      d("click", u, r);
    }, Q = (u, r) => {
      let c = "tr_" + r.value.i;
      w.value[c] = typeof w.value[c] > "u" ? !0 : !w.value[c];
    }, ie = (u, r) => {
      s.value[r] = u;
    };
    return me(() => {
      Z(be(n.columns, i.value));
    }), L(() => n.modelValue, (u) => s.value = u), L(s, (u) => {
      d("update:modelValue", u);
    }), t({ getItemByEvent: ne }), (u, r) => p.value ? (a(), m("div", {
      key: 0,
      class: "lkt-table",
      "data-sortable": e.sortable
    }, [
      C("table", null, [
        C("thead", null, [
          C("tr", null, [
            e.sortable ? (a(), m("th", Ue)) : h("", !0),
            q.value ? (a(), m("th", Fe)) : h("", !0),
            (a(!0), m(y, null, E(U.value, (c) => (a(), m(y, null, [
              R.value.indexOf(c.key) === -1 ? (a(), m("th", {
                key: 0,
                "data-column": c.key,
                "data-sortable": c.sortable === !0,
                "data-sort": c.sortable === !0 && i.value === c.key ? f.value : "",
                colspan: v(he)(c, e.columns.length, s.value),
                title: c.label,
                onClick: (k) => Z(c)
              }, [
                C("div", null, N(c.label), 1)
              ], 8, Ke)) : h("", !0)
            ], 64))), 256))
          ])
        ]),
        e.sortable ? (a(), A(v(fe), {
          key: 0,
          modelValue: s.value,
          "onUpdate:modelValue": r[0] || (r[0] = (c) => s.value = c),
          move: e.checkValidDrag,
          itemKey: e.draggableItemKey,
          onStart: r[1] || (r[1] = (c) => j.value = !0),
          onEnd: r[2] || (r[2] = (c) => j.value = !1),
          tag: "tbody",
          class: "lkt-sortable-table",
          handle: "[data-handle-drag]"
        }, {
          item: K(({ element: c, index: k }) => [
            (a(), A(ee, {
              key: v(O) + "-" + k,
              i: k,
              item: c,
              "display-hidden-columns-indicator": q.value,
              "is-draggable": e.draggableChecker ? e.draggableChecker(c) : !0,
              sortable: e.sortable,
              "visible-columns": U.value,
              "empty-columns": R.value,
              "hidden-is-visible": G(k),
              onClick: P,
              onShow: Q
            }, W({ _: 2 }, [
              E(M.value, (g) => ({
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
        }, 8, ["modelValue", "move", "itemKey"])) : (a(), m("tbody", je, [
          (a(!0), m(y, null, E(s.value, (c, k) => (a(), A(ee, {
            key: v(O) + "-" + k,
            i: k,
            item: c,
            "display-hidden-columns-indicator": q.value,
            "is-draggable": e.draggableChecker ? e.draggableChecker(c) : !0,
            sortable: e.sortable,
            "visible-columns": U.value,
            "empty-columns": R.value,
            "hidden-is-visible": G(k),
            onClick: P,
            onShow: Q,
            onEdited: ie
          }, W({ _: 2 }, [
            E(M.value, (g) => ({
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
          J.value.length > 0 ? (a(!0), m(y, { key: 0 }, E(s.value, (c, k) => (a(), A(xe, {
            key: v(O) + "-" + k,
            i: k,
            item: c,
            "hidden-columns": J.value,
            "hidden-columns-col-span": le.value,
            "is-draggable": e.draggableChecker ? e.draggableChecker(c) : !0,
            sortable: e.sortable,
            "visible-columns": U.value,
            "empty-columns": R.value,
            "hidden-is-visible": G(k),
            onClick: P,
            onShow: Q
          }, W({ _: 2 }, [
            E(M.value, (g) => ({
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
    ], 8, Oe)) : u.$slots["no-items"] ? (a(), m("div", Re, [
      x(u.$slots, "no-items")
    ])) : h("", !0);
  }
}), lt = {
  install: (e) => {
    e.component("lkt-table", Je);
  }
};
export {
  Ze as createCheckColumn,
  We as createColumn,
  tt as createHiddenColumn,
  Xe as createLinkColumn,
  et as createSelectColumn,
  _e as createSwitchColumn,
  Ye as createTextColumn,
  lt as default
};
