var ae = Object.defineProperty;
var ne = (e, t, a) => t in e ? ae(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a;
var $ = (e, t, a) => (ne(e, typeof t != "symbol" ? t + "" : t, a), a);
import { defineComponent as x, openBlock as s, createElementBlock as o, createCommentVNode as C, normalizeClass as ie, Fragment as k, renderList as g, unref as v, renderSlot as B, createTextVNode as Y, toDisplayString as L, withDirectives as re, createElementVNode as p, vShow as se, useSlots as oe, ref as V, computed as I, onMounted as de, watch as Q, createBlock as N, withCtx as H, createSlots as M } from "vue";
import ue from "vuedraggable";
import { createLktEvent as U } from "lkt-events";
import { generateRandomString as ce } from "lkt-string-tools";
class Z {
  constructor(t = "", a = "") {
    $(this, "key");
    $(this, "label");
    $(this, "sortable");
    $(this, "hidden");
    $(this, "formatter");
    $(this, "checkEmpty");
    $(this, "colspan");
    this.key = t, this.label = a, this.sortable = !0, this.hidden = !1, this.formatter = void 0, this.checkEmpty = void 0, this.colspan = void 0;
  }
  setIsSortable(t = !0) {
    return this.sortable = t, this;
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
}
const qe = (e, t, a = !0) => new Z(e, t).setIsSortable(a), Me = (e, t, a = !0) => new Z(e, t).setIsSortable(a).setIsHidden(!0), W = (e, t, a, c) => {
  if (!a)
    return 0;
  let f = e[a.key], n = t[a.key];
  if (c === "asc") {
    if (f > n)
      return 1;
    if (n > f)
      return -1;
  } else {
    if (f > n)
      return -1;
    if (n > f)
      return 1;
  }
  return 0;
}, T = (e, t, a) => e.formatter && typeof e.formatter == "function" ? e.formatter(t[e.key], t, e, a) : t[e.key], fe = (e, t, a) => {
  if (!e.colspan)
    return -1;
  let c = t;
  return a.forEach((f) => {
    let n = G(e, f);
    n > 0 && n < c && (c = n);
  }), c;
}, G = (e, t) => e.colspan === !1 ? !1 : typeof e.colspan == "function" ? e.colspan(t) : e.colspan, me = (e, t, a) => {
  if (typeof e != "object" || !e.key || t.indexOf(e.key) > -1)
    return !1;
  let c = G(e, a);
  return typeof e.colspan > "u" ? !0 : (typeof e.colspan < "u" && (typeof e.colspan == "function" ? c = parseInt(e.colspan()) : c = parseInt(e.colspan)), c > 0);
}, ye = (e = []) => {
  if (e.length > 0) {
    for (let t = 0; t < e.length; ++t)
      if (e[t].sortable)
        return e[t].key;
  }
  return "";
}, he = (e, t) => {
  if (e.length > 0) {
    for (let a = 0; a < e.length; ++a)
      if (e[a].key === t)
        return e[a];
  }
  return null;
}, be = ["data-i", "data-handle-drag"], ve = {
  key: 0,
  "data-role": "drag-indicator"
}, ke = {
  key: 1,
  "data-role": "invalid-drag-indicator"
}, ge = ["data-column", "colspan", "title", "onClick"], Ce = { name: "LktTableRow", inheritAttrs: !1 }, X = /* @__PURE__ */ x({
  ...Ce,
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
  emits: ["click", "show"],
  setup(e, { emit: t }) {
    const a = t, c = (n, d, u) => {
      a("click", n, U("", { item: d, column: u }));
    }, f = (n, d) => {
      a("show", n, U("", { i: d }));
    };
    return (n, d) => (s(), o("tr", {
      "data-i": e.i,
      "data-handle-drag": e.isDraggable
    }, [
      e.sortable && e.isDraggable ? (s(), o("td", ve)) : e.sortable ? (s(), o("td", ke)) : C("", !0),
      e.displayHiddenColumnsIndicator ? (s(), o("td", {
        key: 2,
        onClick: d[0] || (d[0] = (u) => f(u, e.i)),
        "data-role": "show-more",
        class: ie(e.hiddenIsVisible ? "state-open" : "")
      }, null, 2)) : C("", !0),
      (s(!0), o(k, null, g(e.visibleColumns, (u) => (s(), o(k, null, [
        v(me)(u, e.emptyColumns, e.item) ? (s(), o("td", {
          key: 0,
          "data-column": u.key,
          colspan: v(G)(u, e.item),
          title: v(T)(u, e.item, e.i),
          onClick: (S) => c(S, e.item, u)
        }, [
          n.$slots[u.key] ? B(n.$slots, u.key, {
            key: 0,
            value: e.item[u.key],
            item: e.item,
            column: u,
            i: e.i
          }) : e.item ? (s(), o(k, { key: 1 }, [
            Y(L(v(T)(u, e.item, e.i)), 1)
          ], 64)) : C("", !0)
        ], 8, ge)) : C("", !0)
      ], 64))), 256))
    ], 8, be));
  }
}), pe = { "data-role": "hidden-row" }, Se = ["colspan"], $e = ["data-column"], Ie = ["data-i"], Ve = ["data-column", "title", "onClick"], Be = { name: "LktHiddenRow", inheritAttrs: !1 }, Ee = /* @__PURE__ */ x({
  ...Be,
  props: {
    isDraggable: { type: Boolean, default: !0 },
    sortable: { type: Boolean, default: !0 },
    i: { type: [Number], default: 0 },
    hiddenColumnsColSpan: { type: Number, default: 0 },
    visibleColumns: { type: Array, default: () => [] },
    hiddenColumns: { type: Array, default: () => [] },
    emptyColumns: { type: Array, default: () => [] },
    hiddenIsVisible: { type: Boolean, default: !1 },
    item: { type: Object, default: () => ({}) }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const a = t, c = (f, n, d) => {
      a("click", f, U("", { item: n, column: d }));
    };
    return (f, n) => re((s(), o("tr", pe, [
      p("td", { colspan: e.hiddenColumnsColSpan }, [
        p("table", null, [
          p("tr", null, [
            (s(!0), o(k, null, g(e.hiddenColumns, (d) => (s(), o("th", {
              "data-column": d.key
            }, [
              p("div", null, L(d.label), 1)
            ], 8, $e))), 256))
          ]),
          p("tr", { "data-i": e.i }, [
            (s(!0), o(k, null, g(e.hiddenColumns, (d, u) => (s(), o("td", {
              "data-column": d.key,
              title: v(T)(d, e.item, u),
              onClick: (S) => c(S, e.item, d)
            }, [
              f.$slots[d.key] ? B(f.$slots, d.key, {
                key: 0,
                value: e.item[d.key],
                item: e.item,
                column: d,
                i: u
              }) : (s(), o(k, { key: 1 }, [
                Y(L(v(T)(d, e.item, u)), 1)
              ], 64))
            ], 8, Ve))), 256))
          ], 8, Ie)
        ])
      ], 8, Se)
    ], 512)), [
      [se, e.hiddenIsVisible]
    ]);
  }
}), De = ["data-sortable"], we = {
  key: 0,
  "data-role": "drag-indicator"
}, Ae = { key: 1 }, Ne = ["data-column", "data-sortable", "data-sort", "colspan", "title", "onClick"], He = { key: 1 }, Le = {
  key: 1,
  class: "lkt-empty-table"
}, Te = { name: "LktTable", inheritAttrs: !1 }, Ke = /* @__PURE__ */ x({
  ...Te,
  props: {
    modelValue: { type: Array, default: () => [] },
    columns: { type: Array, default: () => [] },
    sorter: { type: Function, default: W },
    sortable: { type: Boolean, default: !1 },
    hideEmptyColumns: { type: Boolean, default: !1 },
    draggableChecker: { type: Function, default: (e) => !0 },
    checkValidDrag: { type: Function, default: (e) => !0 },
    draggableItemKey: { type: String, default: "name" }
  },
  emits: ["update:modelValue", "sort", "click"],
  setup(e, { expose: t, emit: a }) {
    const c = a, f = oe(), n = e, d = {}, u = V(typeof n.sorter == "function" ? n.sorter : W), S = V(ye(n.columns)), E = V("asc"), h = V(n.modelValue), w = V(d), J = V(!1), K = ce(12), _ = I(() => h.value.length > 0), A = I(() => {
      if (!n.hideEmptyColumns)
        return [];
      let l = [];
      return n.columns.forEach((i) => {
        let r = i.key, m = !1;
        h.value.forEach((y) => {
          if (typeof y.checkEmpty == "function")
            return y.checkEmpty(y);
          y[r] && (m = !0);
        }), m || l.push(r);
      }), l;
    }), D = I(() => n.columns.filter((l) => !l.hidden)), F = I(() => n.columns.filter((l) => l.hidden)), ee = I(() => {
      let l = D.value.length + 1;
      return n.sortable && ++l, l;
    }), O = I(() => F.value.length > 0 && !n.sortable), te = I(() => n.columns.map((l) => l.key)), R = I(() => {
      let l = [];
      for (let i in f)
        te.value.indexOf(i) !== -1 && l.push(i);
      return l;
    }), le = (l) => {
      let i = l.target;
      if (typeof i.dataset.column > "u")
        do
          i = i.parentNode;
        while (typeof i.dataset.column > "u" && i.tagName !== "TABLE" && i.tagName !== "body");
      if (i.tagName === "TD" && (i = i.parentNode, i = i.dataset.i, typeof i < "u"))
        return h.value[i];
    }, j = (l) => w.value["tr_" + l] === !0, P = (l) => {
      !l || l.sortable && (h.value = h.value.sort((i, r) => u.value(i, r, l, E.value)), E.value = E.value === "asc" ? "desc" : "asc", S.value = l.key, c("sort", [S.value, E.value]));
    }, z = (l, i) => {
      c("click", l, i);
    }, q = (l, i) => {
      let r = "tr_" + i.value.i;
      w.value[r] = typeof w.value[r] > "u" ? !0 : !w.value[r];
    };
    return de(() => {
      P(he(n.columns, S.value));
    }), Q(() => n.modelValue, (l) => h.value = l), Q(h, (l) => c("update:modelValue", l)), t({ getItemByEvent: le }), (l, i) => _.value ? (s(), o("div", {
      key: 0,
      class: "lkt-table",
      "data-sortable": e.sortable
    }, [
      p("table", null, [
        p("thead", null, [
          p("tr", null, [
            e.sortable ? (s(), o("th", we)) : C("", !0),
            O.value ? (s(), o("th", Ae)) : C("", !0),
            (s(!0), o(k, null, g(D.value, (r) => (s(), o(k, null, [
              A.value.indexOf(r.key) === -1 ? (s(), o("th", {
                key: 0,
                "data-column": r.key,
                "data-sortable": r.sortable === !0,
                "data-sort": r.sortable === !0 && S.value === r.key ? E.value : "",
                colspan: v(fe)(r, e.columns.length, h.value),
                title: r.label,
                onClick: (m) => P(r)
              }, [
                p("div", null, L(r.label), 1)
              ], 8, Ne)) : C("", !0)
            ], 64))), 256))
          ])
        ]),
        e.sortable ? (s(), N(v(ue), {
          key: 0,
          modelValue: h.value,
          "onUpdate:modelValue": i[0] || (i[0] = (r) => h.value = r),
          move: e.checkValidDrag,
          itemKey: e.draggableItemKey,
          onStart: i[1] || (i[1] = (r) => J.value = !0),
          onEnd: i[2] || (i[2] = (r) => J.value = !1),
          tag: "tbody",
          class: "lkt-sortable-table",
          handle: "[data-handle-drag]"
        }, {
          item: H(({ element: r, index: m }) => [
            (s(), N(X, {
              key: v(K) + "-" + m,
              i: m,
              item: r,
              "display-hidden-columns-indicator": O.value,
              "is-draggable": e.draggableChecker ? e.draggableChecker(r) : !0,
              sortable: e.sortable,
              "visible-columns": D.value,
              "empty-columns": A.value,
              "hidden-is-visible": j(m),
              onClick: z,
              onShow: q
            }, M({ _: 2 }, [
              g(R.value, (y) => ({
                name: y,
                fn: H((b) => [
                  B(l.$slots, y, {
                    item: b.item,
                    value: b.value,
                    column: b.column
                  })
                ])
              }))
            ]), 1032, ["i", "item", "display-hidden-columns-indicator", "is-draggable", "sortable", "visible-columns", "empty-columns", "hidden-is-visible"]))
          ]),
          _: 3
        }, 8, ["modelValue", "move", "itemKey"])) : (s(), o("tbody", He, [
          (s(!0), o(k, null, g(h.value, (r, m) => (s(), N(X, {
            key: v(K) + "-" + m,
            i: m,
            item: r,
            "display-hidden-columns-indicator": O.value,
            "is-draggable": e.draggableChecker ? e.draggableChecker(r) : !0,
            sortable: e.sortable,
            "visible-columns": D.value,
            "empty-columns": A.value,
            "hidden-is-visible": j(m),
            onClick: z,
            onShow: q
          }, M({ _: 2 }, [
            g(R.value, (y) => ({
              name: y,
              fn: H((b) => [
                B(l.$slots, y, {
                  item: b.item,
                  value: b.value,
                  column: b.column
                })
              ])
            }))
          ]), 1032, ["i", "item", "display-hidden-columns-indicator", "is-draggable", "sortable", "visible-columns", "empty-columns", "hidden-is-visible"]))), 128)),
          F.value.length > 0 ? (s(!0), o(k, { key: 0 }, g(h.value, (r, m) => (s(), N(Ee, {
            key: v(K) + "-" + m,
            i: m,
            item: r,
            "hidden-columns": F.value,
            "hidden-columns-col-span": ee.value,
            "is-draggable": e.draggableChecker ? e.draggableChecker(r) : !0,
            sortable: e.sortable,
            "visible-columns": D.value,
            "empty-columns": A.value,
            "hidden-is-visible": j(m),
            onClick: z,
            onShow: q
          }, M({ _: 2 }, [
            g(R.value, (y) => ({
              name: y,
              fn: H((b) => [
                B(l.$slots, y, {
                  item: b.item,
                  value: b.value,
                  column: b.column
                })
              ])
            }))
          ]), 1032, ["i", "item", "hidden-columns", "hidden-columns-col-span", "is-draggable", "sortable", "visible-columns", "empty-columns", "hidden-is-visible"]))), 128)) : C("", !0)
        ]))
      ])
    ], 8, De)) : l.$slots["no-items"] ? (s(), o("div", Le, [
      B(l.$slots, "no-items")
    ])) : C("", !0);
  }
}), Ue = {
  install: (e) => {
    e.component("lkt-table", Ke);
  }
};
export {
  qe as createColumn,
  Me as createHiddenColumn,
  Ue as default
};
