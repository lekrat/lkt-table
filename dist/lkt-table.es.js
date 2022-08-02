import T from "vuedraggable";
import { isFunction as p, isObject as R, isUndefined as C, generateRandomString as L, getSlots as K } from "lkt-tools";
import { openBlock as l, createElementBlock as a, createCommentVNode as b, normalizeClass as q, Fragment as m, renderList as y, renderSlot as g, createTextVNode as F, toDisplayString as w, withDirectives as j, createElementVNode as f, vShow as z, defineComponent as U, resolveComponent as B, createBlock as S, withCtx as I, createSlots as H } from "vue";
class G {
  constructor(t = "", i = "") {
    this.key = t, this.label = i, this.sortable = !0, this.hidden = !1, this.formatter = void 0, this.checkEmpty = void 0, this.colspan = void 0;
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
const ve = (e, t) => new G(e, t), J = (e, t, i, o) => {
  if (!i)
    return 0;
  let d = e[i.key], r = t[i.key];
  if (o === "asc") {
    if (d > r)
      return 1;
    if (r > d)
      return -1;
  } else {
    if (d > r)
      return -1;
    if (r > d)
      return 1;
  }
  return 0;
}, O = (e, t, i) => p(e.formatter) ? e.formatter(t[e.key], t, e, i) : t[e.key], E = (e, t, i) => {
  if (!e.colspan)
    return -1;
  let o = t;
  return i.forEach((d) => {
    let r = v(e, d);
    r > 0 && r < o && (o = r);
  }), o;
}, v = (e, t) => e.colspan === !1 ? !1 : p(e.colspan) ? e.colspan(t) : e.colspan, $ = (e, t, i) => {
  if (!R(e) || !e.key || t.indexOf(e.key) > -1)
    return !1;
  let o = v(e, i);
  return C(e.colspan) ? !0 : (C(e.colspan) || (p(e.colspan) ? o = parseInt(e.colspan()) : o = parseInt(e.colspan)), o > 0);
}, M = (e = []) => {
  if (e.length > 0) {
    for (let t = 0; t < e.length; ++t)
      if (e[t].sortable === !0)
        return e[t].key;
  }
  return "";
}, P = (e, t) => {
  if (e.length > 0) {
    for (let i = 0; i < e.length; ++i)
      if (e[i].key === t)
        return e[i];
  }
  return null;
};
class Q {
  constructor(t, i) {
    this.id = void 0, this.value = void 0, this.id = t, this.value = i;
  }
}
const D = (e, t) => new Q(e, t), W = {
  name: "LktTableRow",
  emits: ["click", "show"],
  props: {
    isDraggable: { type: Boolean, default: !0 },
    sortable: { type: Boolean, default: !0 },
    i: { type: [Number], default: 0 },
    displayHiddenColumnsIndicator: { type: Boolean, default: !1 },
    visibleColumns: { type: Array, default: () => [] },
    emptyColumns: { type: Array, default: () => [] },
    hiddenIsVisible: { type: Boolean, default: !1 },
    item: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    canRenderColumn: $,
    getColumnDisplayContent: O,
    getVerticalColSpan: E,
    getHorizontalColSpan: v,
    onClick(e, t, i) {
      this.$emit("click", e, D("", { item: t, column: i }));
    },
    onShow(e, t) {
      this.$emit("show", e, D("", { i: t }));
    }
  }
}, N = (e, t) => {
  const i = e.__vccOpts || e;
  for (const [o, d] of t)
    i[o] = d;
  return i;
}, X = ["data-i", "data-handle-drag"], Y = {
  key: 0,
  "data-role": "drag-indicator"
}, Z = {
  key: 1,
  "data-role": "invalid-drag-indicator"
}, _ = ["data-column", "colspan", "title", "onClick"];
function x(e, t, i, o, d, r) {
  return l(), a("tr", {
    "data-i": i.i,
    "data-handle-drag": i.isDraggable
  }, [
    i.sortable && i.isDraggable ? (l(), a("td", Y)) : i.sortable ? (l(), a("td", Z)) : b("", !0),
    i.displayHiddenColumnsIndicator ? (l(), a("td", {
      key: 2,
      onClick: t[0] || (t[0] = (n) => r.onShow(n, i.i)),
      "data-role": "show-more",
      class: q(i.hiddenIsVisible ? "state-open" : "")
    }, null, 2)) : b("", !0),
    (l(!0), a(m, null, y(i.visibleColumns, (n) => (l(), a(m, null, [
      r.canRenderColumn(n, i.emptyColumns, i.item) ? (l(), a("td", {
        key: 0,
        "data-column": n.key,
        colspan: r.getHorizontalColSpan(n, i.item),
        title: r.getColumnDisplayContent(n, i.item, i.i),
        onClick: (c) => r.onClick(c, i.item, n)
      }, [
        e.$slots[n.key] ? g(e.$slots, n.key, {
          key: 0,
          value: i.item[n.key],
          item: i.item,
          column: n,
          i: i.i
        }) : i.item ? (l(), a(m, { key: 1 }, [
          F(w(r.getColumnDisplayContent(n, i.item, i.i)), 1)
        ], 64)) : b("", !0)
      ], 8, _)) : b("", !0)
    ], 64))), 256))
  ], 8, X);
}
const ee = /* @__PURE__ */ N(W, [["render", x]]), te = {
  name: "LktHiddenRow",
  emits: ["click", "show"],
  props: {
    isDraggable: { type: Boolean, default: !0 },
    sortable: { type: Boolean, default: !0 },
    i: { type: [Number], default: 0 },
    hiddenColumnsColSpan: { type: Number, default: 0 },
    visibleColumns: { type: Array, default: () => [] },
    hiddenColumns: { type: Array, default: () => [] },
    emptyColumns: { type: Array, default: () => [] },
    hiddenIsVisible: { type: Boolean, default: !1 },
    item: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    canRenderColumn: $,
    getColumnDisplayContent: O,
    getVerticalColSpan: E,
    getHorizontalColSpan: v,
    onClick(e, t, i) {
      this.$emit("click", e, D("", { item: t, column: i }));
    },
    onShow(e, t) {
      this.$emit("show", e, D("", { i: t }));
    }
  }
}, ie = { "data-role": "hidden-row" }, le = ["colspan"], ne = ["data-column"], ae = ["data-i"], se = ["data-column", "title", "onClick"];
function re(e, t, i, o, d, r) {
  return j((l(), a("tr", ie, [
    f("td", { colspan: i.hiddenColumnsColSpan }, [
      f("table", null, [
        f("tr", null, [
          (l(!0), a(m, null, y(i.hiddenColumns, (n) => (l(), a("th", {
            "data-column": n.key
          }, [
            f("div", null, w(n.label), 1)
          ], 8, ne))), 256))
        ]),
        f("tr", { "data-i": i.i }, [
          (l(!0), a(m, null, y(i.hiddenColumns, (n, c) => (l(), a("td", {
            "data-column": n.key,
            title: r.getColumnDisplayContent(n, i.item, c),
            onClick: (V) => r.onClick(V, i.item, n)
          }, [
            e.$slots[n.key] ? g(e.$slots, n.key, {
              key: 0,
              value: i.item[n.key],
              item: i.item,
              column: n,
              i: c
            }) : (l(), a(m, { key: 1 }, [
              F(w(r.getColumnDisplayContent(n, i.item, c)), 1)
            ], 64))
          ], 8, se))), 256))
        ], 8, ae)
      ])
    ], 8, le)
  ], 512)), [
    [z, i.hiddenIsVisible]
  ]);
}
const oe = /* @__PURE__ */ N(te, [["render", re]]), de = U({
  name: "LktTable",
  components: { LktHiddenRow: oe, LktTableRow: ee, draggable: T },
  props: {
    modelValue: { type: Array, default: () => [] },
    columns: { type: Array, default: () => [] },
    sorter: { type: Function },
    sortable: { type: Boolean, default: !1 },
    hideEmptyColumns: { type: Boolean, default: !1 },
    draggableChecker: { type: Function, default: (e) => !0 },
    checkValidDrag: { type: Function, default: (e) => !0 },
    draggableItemKey: { type: String, default: "name" }
  },
  emits: ["update:modelValue", "sort", "click"],
  data() {
    return {
      Sorter: p(this.sorter) ? this.sorter : J,
      SortBy: M(this.columns),
      SortDirection: "asc",
      Items: this.modelValue,
      Hidden: {},
      drag: !1,
      dragGroup: L(16),
      uniqueId: L(12)
    };
  },
  computed: {
    slots() {
      return K(this.$slots);
    },
    hasData() {
      return this.Items.length > 0;
    },
    emptyColumns() {
      if (!this.hideEmptyColumns)
        return [];
      let e = [];
      return this.columns.forEach((t) => {
        let i = t.key, o = !1;
        this.Items.forEach((d) => {
          if (p(d.checkEmpty))
            return d.checkEmpty(d);
          d[i] && (o = !0);
        }), o || e.push(i);
      }), e;
    },
    visibleColumns() {
      return this.columns.filter((e) => e.hidden !== !0);
    },
    hiddenColumns() {
      return this.columns.filter((e) => e.hidden === !0);
    },
    hiddenColumnsColSpan() {
      let e = this.visibleColumns.length + 1;
      return this.sortable && ++e, e;
    },
    displayHiddenColumnsIndicator() {
      return this.hiddenColumns.length > 0 && !this.sortable;
    }
  },
  watch: {
    modelValue: {
      handler(e) {
        this.Items = e;
      },
      deep: !0
    },
    Items: {
      handler(e) {
        this.$emit("update:modelValue", e);
      },
      deep: !0
    }
  },
  methods: {
    getVerticalColSpan: E,
    getHorizontalColSpan: v,
    getItemByEvent(e) {
      let t = e.target;
      if (C(t.dataset.column))
        do
          t = t.parentNode;
        while (C(t.dataset.column) && t.tagName !== "TABLE" && t.tagName !== "body");
      if (t.tagName === "TD" && (t = t.parentNode, t = t.dataset.i, !C(t)))
        return this.Items[t];
    },
    isVisible(e) {
      return this.Hidden["tr_" + e] === !0;
    },
    sort(e) {
      e.sortable === !0 && (this.Items = this.Items.sort((t, i) => this.Sorter(t, i, e, this.SortDirection)), this.SortDirection = this.SortDirection === "asc" ? "desc" : "asc", this.SortBy = e.key, this.$emit("sort", [this.SortBy, this.SortDirection]));
    },
    onClick(e, t) {
      this.$emit("click", e, t);
    },
    show(e, t) {
      let i = "tr_" + t.value.i;
      this.Hidden[i] = C(this.Hidden[i]) ? !0 : !this.Hidden[i];
    }
  },
  mounted() {
    this.sort(P(this.columns, this.SortBy));
  }
}), ue = ["data-sortable"], he = {
  key: 0,
  "data-role": "drag-indicator"
}, me = { key: 1 }, ye = ["data-column", "data-sortable", "data-sort", "colspan", "title", "onClick"], be = { key: 1 }, fe = {
  key: 1,
  "data-lkt": "empty-table"
};
function ke(e, t, i, o, d, r) {
  const n = B("lkt-table-row"), c = B("draggable"), V = B("lkt-hidden-row");
  return l(), a("div", null, [
    e.hasData ? (l(), a("div", {
      key: 0,
      "data-lkt": "table",
      "data-sortable": e.sortable
    }, [
      f("table", null, [
        f("thead", null, [
          f("tr", null, [
            e.sortable ? (l(), a("th", he)) : b("", !0),
            e.displayHiddenColumnsIndicator ? (l(), a("th", me)) : b("", !0),
            (l(!0), a(m, null, y(e.visibleColumns, (s) => (l(), a(m, null, [
              e.emptyColumns.indexOf(s.key) === -1 ? (l(), a("th", {
                key: 0,
                "data-column": s.key,
                "data-sortable": s.sortable === !0,
                "data-sort": s.sortable === !0 && e.SortBy === s.key ? e.SortDirection : "",
                colspan: e.getVerticalColSpan(s, e.columns.length, e.Items),
                title: s.label,
                onClick: (u) => e.sort(s)
              }, [
                f("div", null, w(s.label), 1)
              ], 8, ye)) : b("", !0)
            ], 64))), 256))
          ])
        ]),
        e.sortable ? (l(), S(c, {
          key: 0,
          modelValue: e.Items,
          "onUpdate:modelValue": t[0] || (t[0] = (s) => e.Items = s),
          move: e.checkValidDrag,
          itemKey: e.draggableItemKey,
          onStart: t[1] || (t[1] = (s) => e.drag = !0),
          onEnd: t[2] || (t[2] = (s) => e.drag = !1),
          tag: "tbody",
          "data-lkt": "sortable-table",
          handle: "[data-handle-drag]"
        }, {
          item: I(({ element: s, index: u }) => [
            (l(), S(n, {
              key: e.uniqueId + "-" + u,
              i: u,
              item: s,
              "display-hidden-columns-indicator": e.displayHiddenColumnsIndicator,
              "is-draggable": e.draggableChecker ? e.draggableChecker(s) : !0,
              sortable: e.sortable,
              "visible-columns": e.visibleColumns,
              "empty-columns": e.emptyColumns,
              "hidden-is-visible": e.isVisible(u),
              onClick: e.onClick,
              onShow: e.show
            }, H({ _: 2 }, [
              y(e.slots, (A, k) => ({
                name: k,
                fn: I((h) => [
                  g(e.$slots, k, {
                    item: h.item,
                    value: h.value,
                    column: h.column
                  })
                ])
              }))
            ]), 1032, ["i", "item", "display-hidden-columns-indicator", "is-draggable", "sortable", "visible-columns", "empty-columns", "hidden-is-visible", "onClick", "onShow"]))
          ]),
          _: 3
        }, 8, ["modelValue", "move", "itemKey"])) : (l(), a("tbody", be, [
          (l(!0), a(m, null, y(e.Items, (s, u) => (l(), S(n, {
            key: e.uniqueId + "-" + u,
            i: u,
            item: s,
            "display-hidden-columns-indicator": e.displayHiddenColumnsIndicator,
            "is-draggable": e.draggableChecker ? e.draggableChecker(s) : !0,
            sortable: e.sortable,
            "visible-columns": e.visibleColumns,
            "empty-columns": e.emptyColumns,
            "hidden-is-visible": e.isVisible(u),
            onClick: e.onClick,
            onShow: e.show
          }, H({ _: 2 }, [
            y(e.slots, (A, k) => ({
              name: k,
              fn: I((h) => [
                g(e.$slots, k, {
                  item: h.item,
                  value: h.value,
                  column: h.column
                })
              ])
            }))
          ]), 1032, ["i", "item", "display-hidden-columns-indicator", "is-draggable", "sortable", "visible-columns", "empty-columns", "hidden-is-visible", "onClick", "onShow"]))), 128)),
          e.hiddenColumns.length > 0 ? (l(!0), a(m, { key: 0 }, y(e.Items, (s, u) => (l(), S(V, {
            key: e.uniqueId + "-" + u,
            i: u,
            item: s,
            "hidden-columns": e.hiddenColumns,
            "hidden-columns-col-span": e.hiddenColumnsColSpan,
            "is-draggable": e.draggableChecker ? e.draggableChecker(s) : !0,
            sortable: e.sortable,
            "visible-columns": e.visibleColumns,
            "empty-columns": e.emptyColumns,
            "hidden-is-visible": e.isVisible(u),
            onClick: e.onClick,
            onShow: e.show
          }, H({ _: 2 }, [
            y(e.slots, (A, k) => ({
              name: k,
              fn: I((h) => [
                g(e.$slots, k, {
                  item: h.item,
                  value: h.value,
                  column: h.column
                })
              ])
            }))
          ]), 1032, ["i", "item", "hidden-columns", "hidden-columns-col-span", "is-draggable", "sortable", "visible-columns", "empty-columns", "hidden-is-visible", "onClick", "onShow"]))), 128)) : b("", !0)
        ]))
      ])
    ], 8, ue)) : e.$slots["no-items"] ? (l(), a("div", fe, [
      g(e.$slots, "no-items")
    ])) : b("", !0)
  ]);
}
const ce = /* @__PURE__ */ N(de, [["render", ke]]), Se = {
  install: (e, t) => {
    e.component("lkt-table", ce);
    let i = !0;
    R(t) && !C(t.mountDraggableComponent) && t.mountDraggableComponent === !1 && (i = !1), i && e.component("draggable", T);
  }
};
export {
  ve as createColumn,
  Se as default
};
