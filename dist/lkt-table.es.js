var oe = Object.defineProperty;
var ue = (e, t, l) => t in e ? oe(e, t, { enumerable: !0, configurable: !0, writable: !0, value: l }) : e[t] = l;
var g = (e, t, l) => (ue(e, typeof t != "symbol" ? t + "" : t, l), l);
import { defineComponent as R, ref as S, watch as T, resolveComponent as O, openBlock as o, createBlock as C, withCtx as U, createTextVNode as Z, toDisplayString as x, unref as p, createElementBlock as f, Fragment as B, createCommentVNode as w, normalizeClass as re, renderList as $, renderSlot as D, withDirectives as se, createElementVNode as E, vShow as de, useSlots as me, computed as N, onMounted as ce, createSlots as Q } from "vue";
import fe from "vuedraggable";
import { createLktEvent as W } from "lkt-events";
import { generateRandomString as ye } from "lkt-string-tools";
class I {
  constructor(t = "", l = "") {
    g(this, "key");
    g(this, "label");
    g(this, "sortable");
    g(this, "hidden");
    g(this, "editable");
    g(this, "formatter");
    g(this, "checkEmpty");
    g(this, "colspan");
    g(this, "type");
    g(this, "link");
    g(this, "action");
    g(this, "options");
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
}
const Me = (e, t, l = !0) => new I(e, t).setIsSortable(l), Ge = (e, t, l, s = !0) => new I(e, t).setIsSortable(s).defineAsLink(l), Pe = (e, t, l, s = !0) => new I(e, t).setIsSortable(s).defineAsAction(l), Qe = (e, t, l = !0) => new I(e, t).setIsSortable(l).defineAsText(), We = (e, t, l = !0) => new I(e, t).setIsSortable(l).defineAsEmail(), Xe = (e, t, l = !0) => new I(e, t).setIsSortable(l).defineAsTel(), Ye = (e, t, l = !0) => new I(e, t).setIsSortable(l).defineAsCheck(), Ze = (e, t, l = !0) => new I(e, t).setIsSortable(l).defineAsSwitch(), _e = (e, t, l, s = !0) => new I(e, t).setIsSortable(s).defineAsSelect(l), et = (e, t, l = !0) => new I(e, t).setIsSortable(l).setIsHidden(!0), _ = (e, t, l, s) => {
  if (!l)
    return 0;
  let r = e[l.key], n = t[l.key];
  if (s === "asc") {
    if (r > n)
      return 1;
    if (n > r)
      return -1;
  } else {
    if (r > n)
      return -1;
    if (n > r)
      return 1;
  }
  return 0;
}, F = (e, t, l) => e.formatter && typeof e.formatter == "function" ? e.formatter(t[e.key], t, e, l) : t[e.key], he = (e, t, l) => {
  if (!e.colspan)
    return -1;
  let s = t;
  return l.forEach((r) => {
    let n = X(e, r);
    n > 0 && n < s && (s = n);
  }), s;
}, X = (e, t) => e.colspan === !1 ? !1 : typeof e.colspan == "function" ? e.colspan(t) : e.colspan, ve = (e, t, l) => {
  if (typeof e != "object" || !e.key || t.indexOf(e.key) > -1)
    return !1;
  let s = X(e, l);
  return typeof e.colspan > "u" ? !0 : (typeof e.colspan < "u" && (typeof e.colspan == "function" ? s = parseInt(e.colspan()) : s = parseInt(e.colspan)), s > 0);
}, ke = (e = []) => {
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
}, ge = { name: "LktTableCell", inheritAttrs: !1 }, te = /* @__PURE__ */ R({
  ...ge,
  props: {
    column: { type: Object, default: () => ({}) },
    i: { type: [Number], default: 0 },
    modelValue: { type: Object, default: () => ({}) }
  },
  emits: ["edited"],
  setup(e, { emit: t }) {
    const l = t, s = e, r = S(s.modelValue), n = S(r.value[s.column.key]), h = S(null);
    return T(n, () => {
      const k = JSON.parse(JSON.stringify(r.value));
      k[s.column.key] = n.value, l("edited", k, s.i);
    }), T(() => s.modelValue, (k) => {
      r.value = k, n.value = r.value[s.column.key];
    }), (k, a) => {
      const y = O("router-link"), u = O("lkt-field-text"), A = O("lkt-field-check"), K = O("lkt-field-switch"), L = O("lkt-field-select");
      return e.column.type === "link" ? (o(), C(y, {
        key: 0,
        to: e.column.getHref(r.value)
      }, {
        default: U(() => [
          Z(x(p(F)(e.column, r.value, e.i)), 1)
        ]),
        _: 1
      }, 8, ["to"])) : e.column.type === "action" ? (o(), f("a", {
        key: 1,
        href: "#",
        onClick: a[0] || (a[0] = (c) => e.column.doAction(r.value))
      }, x(p(F)(e.column, r.value, e.i)), 1)) : e.column.type === "text" ? (o(), C(u, {
        key: 2,
        "read-mode": !e.column.editable,
        ref: (c) => h.value = c,
        modelValue: n.value,
        "onUpdate:modelValue": a[1] || (a[1] = (c) => n.value = c)
      }, null, 8, ["read-mode", "modelValue"])) : e.column.type === "email" ? (o(), C(u, {
        key: 3,
        "read-mode": !e.column.editable,
        ref: (c) => h.value = c,
        "is-email": "",
        modelValue: n.value,
        "onUpdate:modelValue": a[2] || (a[2] = (c) => n.value = c)
      }, null, 8, ["read-mode", "modelValue"])) : e.column.type === "tel" ? (o(), C(u, {
        key: 4,
        "read-mode": !e.column.editable,
        ref: (c) => h.value = c,
        "is-tel": "",
        modelValue: n.value,
        "onUpdate:modelValue": a[3] || (a[3] = (c) => n.value = c)
      }, null, 8, ["read-mode", "modelValue"])) : e.column.type === "check" ? (o(), C(A, {
        key: 5,
        "read-mode": !e.column.editable,
        ref: (c) => h.value = c,
        modelValue: n.value,
        "onUpdate:modelValue": a[4] || (a[4] = (c) => n.value = c)
      }, null, 8, ["read-mode", "modelValue"])) : e.column.type === "switch" ? (o(), C(K, {
        key: 6,
        "read-mode": !e.column.editable,
        ref: (c) => h.value = c,
        modelValue: n.value,
        "onUpdate:modelValue": a[5] || (a[5] = (c) => n.value = c)
      }, null, 8, ["read-mode", "modelValue"])) : e.column.type === "select" ? (o(), C(L, {
        key: 7,
        "read-mode": !e.column.editable,
        ref: (c) => h.value = c,
        modelValue: n.value,
        "onUpdate:modelValue": a[6] || (a[6] = (c) => n.value = c),
        options: e.column.options
      }, null, 8, ["read-mode", "modelValue", "options"])) : (o(), f(B, { key: 8 }, [
        Z(x(p(F)(e.column, r.value, e.i)), 1)
      ], 64));
    };
  }
}), Ce = ["data-i", "data-handle-drag"], pe = {
  key: 0,
  "data-role": "drag-indicator"
}, Ve = {
  key: 1,
  "data-role": "invalid-drag-indicator"
}, Se = ["data-column", "colspan", "title", "onClick"], Ae = { name: "LktTableRow", inheritAttrs: !1 }, ee = /* @__PURE__ */ R({
  ...Ae,
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
    const l = t, s = e, r = S(s.item), n = (a, y, u) => {
      l("click", a, W("", { item: y, column: u }));
    }, h = (a, y) => {
      l("show", a, W("", { i: y }));
    }, k = (a, y) => {
      r.value = a;
    };
    return T(() => s.item, (a) => r.value = a), T(r, () => l("edited", r.value, s.i)), (a, y) => (o(), f("tr", {
      "data-i": e.i,
      "data-handle-drag": e.isDraggable
    }, [
      e.sortable && e.isDraggable ? (o(), f("td", pe)) : e.sortable ? (o(), f("td", Ve)) : w("", !0),
      e.displayHiddenColumnsIndicator ? (o(), f("td", {
        key: 2,
        onClick: y[0] || (y[0] = (u) => h(u, e.i)),
        "data-role": "show-more",
        class: re(e.hiddenIsVisible ? "state-open" : "")
      }, null, 2)) : w("", !0),
      (o(!0), f(B, null, $(e.visibleColumns, (u) => (o(), f(B, null, [
        p(ve)(u, e.emptyColumns, e.item) ? (o(), f("td", {
          key: 0,
          "data-column": u.key,
          colspan: p(X)(u, e.item),
          title: p(F)(u, e.item, e.i),
          onClick: (A) => n(A, e.item, u)
        }, [
          a.$slots[u.key] ? D(a.$slots, u.key, {
            key: 0,
            value: e.item[u.key],
            item: e.item,
            column: u,
            i: e.i
          }) : e.item ? (o(), C(te, {
            key: 1,
            column: u,
            modelValue: r.value,
            "onUpdate:modelValue": y[1] || (y[1] = (A) => r.value = A),
            i: e.i,
            onEdited: k
          }, null, 8, ["column", "modelValue", "i"])) : w("", !0)
        ], 8, Se)) : w("", !0)
      ], 64))), 256))
    ], 8, Ce));
  }
}), Ie = { "data-role": "hidden-row" }, $e = ["colspan"], we = ["data-column"], Ee = ["data-i"], Be = ["data-column", "title", "onClick"], Ne = { name: "LktHiddenRow", inheritAttrs: !1 }, Te = /* @__PURE__ */ R({
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
    const l = t, s = e, r = S(s.modelValue), n = (h, k, a) => {
      l("click", h, W("", { item: k, column: a }));
    };
    return T(() => s.modelValue, (h) => r.value = h), T(r, () => l("update:modelValue", r.value)), (h, k) => se((o(), f("tr", Ie, [
      E("td", { colspan: e.hiddenColumnsColSpan }, [
        E("table", null, [
          E("tr", null, [
            (o(!0), f(B, null, $(e.hiddenColumns, (a) => (o(), f("th", {
              "data-column": a.key
            }, [
              E("div", null, x(a.label), 1)
            ], 8, we))), 256))
          ]),
          E("tr", { "data-i": e.i }, [
            (o(!0), f(B, null, $(e.hiddenColumns, (a, y) => (o(), f("td", {
              "data-column": a.key,
              title: p(F)(a, r.value, y),
              onClick: (u) => n(u, r.value, a)
            }, [
              h.$slots[a.key] ? D(h.$slots, a.key, {
                key: 0,
                value: r.value[a.key],
                item: r.value,
                column: a,
                i: y
              }) : (o(), C(te, {
                key: 1,
                column: a,
                modelValue: r.value,
                "onUpdate:modelValue": k[0] || (k[0] = (u) => r.value = u),
                i: y
              }, null, 8, ["column", "modelValue", "i"]))
            ], 8, Be))), 256))
          ], 8, Ee)
        ])
      ], 8, $e)
    ], 512)), [
      [de, e.hiddenIsVisible]
    ]);
  }
}), De = ["data-sortable"], Le = {
  key: 0,
  "data-role": "drag-indicator"
}, He = { key: 1 }, Oe = ["data-column", "data-sortable", "data-sort", "colspan", "title", "onClick"], Ue = { key: 1 }, xe = {
  key: 1,
  class: "lkt-empty-table"
}, Fe = { name: "LktTable", inheritAttrs: !1 }, Ke = /* @__PURE__ */ R({
  ...Fe,
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
    const s = l, r = me(), n = e, h = {}, k = S(typeof n.sorter == "function" ? n.sorter : _), a = S(ke(n.columns)), y = S("asc"), u = S(n.modelValue), A = S(h), K = S(!1), L = ye(12), c = N(() => u.value.length > 0), j = N(() => {
      if (!n.hideEmptyColumns)
        return [];
      let i = [];
      return n.columns.forEach((d) => {
        let m = d.key, v = !1;
        u.value.forEach((b) => {
          if (typeof b.checkEmpty == "function")
            return b.checkEmpty(b);
          b[m] && (v = !0);
        }), v || i.push(m);
      }), i;
    }), H = N(() => n.columns.filter((i) => !i.hidden)), z = N(() => n.columns.filter((i) => i.hidden)), le = N(() => {
      let i = H.value.length + 1;
      return n.sortable && ++i, i;
    }), J = N(() => z.value.length > 0 && !n.sortable), ae = N(() => n.columns.map((i) => i.key)), q = N(() => {
      let i = [];
      for (let d in r)
        ae.value.indexOf(d) !== -1 && i.push(d);
      return i;
    }), ne = (i) => {
      let d = i.target;
      if (typeof d.dataset.column > "u")
        do
          d = d.parentNode;
        while (typeof d.dataset.column > "u" && d.tagName !== "TABLE" && d.tagName !== "body");
      if (d.tagName === "TD" && (d = d.parentNode, d = d.dataset.i, typeof d < "u"))
        return u.value[d];
    }, M = (i) => A.value["tr_" + i] === !0, Y = (i) => {
      !i || i.sortable && (u.value = u.value.sort((d, m) => k.value(d, m, i, y.value)), y.value = y.value === "asc" ? "desc" : "asc", a.value = i.key, s("sort", [a.value, y.value]));
    }, G = (i, d) => {
      s("click", i, d);
    }, P = (i, d) => {
      let m = "tr_" + d.value.i;
      A.value[m] = typeof A.value[m] > "u" ? !0 : !A.value[m];
    }, ie = (i, d) => {
      u.value[d] = i;
    };
    return ce(() => {
      Y(be(n.columns, a.value));
    }), T(() => n.modelValue, (i) => u.value = i), T(u, (i) => {
      s("update:modelValue", i);
    }), t({ getItemByEvent: ne }), (i, d) => c.value ? (o(), f("div", {
      key: 0,
      class: "lkt-table",
      "data-sortable": e.sortable
    }, [
      E("table", null, [
        E("thead", null, [
          E("tr", null, [
            e.sortable ? (o(), f("th", Le)) : w("", !0),
            J.value ? (o(), f("th", He)) : w("", !0),
            (o(!0), f(B, null, $(H.value, (m) => (o(), f(B, null, [
              j.value.indexOf(m.key) === -1 ? (o(), f("th", {
                key: 0,
                "data-column": m.key,
                "data-sortable": m.sortable === !0,
                "data-sort": m.sortable === !0 && a.value === m.key ? y.value : "",
                colspan: p(he)(m, e.columns.length, u.value),
                title: m.label,
                onClick: (v) => Y(m)
              }, [
                E("div", null, x(m.label), 1)
              ], 8, Oe)) : w("", !0)
            ], 64))), 256))
          ])
        ]),
        e.sortable ? (o(), C(p(fe), {
          key: 0,
          modelValue: u.value,
          "onUpdate:modelValue": d[0] || (d[0] = (m) => u.value = m),
          move: e.checkValidDrag,
          itemKey: e.draggableItemKey,
          onStart: d[1] || (d[1] = (m) => K.value = !0),
          onEnd: d[2] || (d[2] = (m) => K.value = !1),
          tag: "tbody",
          class: "lkt-sortable-table",
          handle: "[data-handle-drag]"
        }, {
          item: U(({ element: m, index: v }) => [
            (o(), C(ee, {
              key: p(L) + "-" + v,
              i: v,
              item: m,
              "display-hidden-columns-indicator": J.value,
              "is-draggable": e.draggableChecker ? e.draggableChecker(m) : !0,
              sortable: e.sortable,
              "visible-columns": H.value,
              "empty-columns": j.value,
              "hidden-is-visible": M(v),
              onClick: G,
              onShow: P
            }, Q({ _: 2 }, [
              $(q.value, (b) => ({
                name: b,
                fn: U((V) => [
                  D(i.$slots, b, {
                    item: V.item,
                    value: V.value,
                    column: V.column
                  })
                ])
              }))
            ]), 1032, ["i", "item", "display-hidden-columns-indicator", "is-draggable", "sortable", "visible-columns", "empty-columns", "hidden-is-visible"]))
          ]),
          _: 3
        }, 8, ["modelValue", "move", "itemKey"])) : (o(), f("tbody", Ue, [
          (o(!0), f(B, null, $(u.value, (m, v) => (o(), C(ee, {
            key: p(L) + "-" + v,
            i: v,
            item: m,
            "display-hidden-columns-indicator": J.value,
            "is-draggable": e.draggableChecker ? e.draggableChecker(m) : !0,
            sortable: e.sortable,
            "visible-columns": H.value,
            "empty-columns": j.value,
            "hidden-is-visible": M(v),
            onClick: G,
            onShow: P,
            onEdited: ie
          }, Q({ _: 2 }, [
            $(q.value, (b) => ({
              name: b,
              fn: U((V) => [
                D(i.$slots, b, {
                  item: V.item,
                  value: V.value,
                  column: V.column
                })
              ])
            }))
          ]), 1032, ["i", "item", "display-hidden-columns-indicator", "is-draggable", "sortable", "visible-columns", "empty-columns", "hidden-is-visible"]))), 128)),
          z.value.length > 0 ? (o(!0), f(B, { key: 0 }, $(u.value, (m, v) => (o(), C(Te, {
            key: p(L) + "-" + v,
            i: v,
            item: m,
            "hidden-columns": z.value,
            "hidden-columns-col-span": le.value,
            "is-draggable": e.draggableChecker ? e.draggableChecker(m) : !0,
            sortable: e.sortable,
            "visible-columns": H.value,
            "empty-columns": j.value,
            "hidden-is-visible": M(v),
            onClick: G,
            onShow: P
          }, Q({ _: 2 }, [
            $(q.value, (b) => ({
              name: b,
              fn: U((V) => [
                D(i.$slots, b, {
                  item: V.item,
                  value: V.value,
                  column: V.column
                })
              ])
            }))
          ]), 1032, ["i", "item", "hidden-columns", "hidden-columns-col-span", "is-draggable", "sortable", "visible-columns", "empty-columns", "hidden-is-visible"]))), 128)) : w("", !0)
        ]))
      ])
    ], 8, De)) : i.$slots["no-items"] ? (o(), f("div", xe, [
      D(i.$slots, "no-items")
    ])) : w("", !0);
  }
}), tt = {
  install: (e) => {
    e.component("lkt-table", Ke);
  }
};
export {
  Pe as createActionColumn,
  Ye as createCheckColumn,
  Me as createColumn,
  We as createEmailColumn,
  et as createHiddenColumn,
  Ge as createLinkColumn,
  _e as createSelectColumn,
  Ze as createSwitchColumn,
  Xe as createTelColumn,
  Qe as createTextColumn,
  tt as default
};
