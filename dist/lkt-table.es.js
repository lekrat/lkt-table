import T from "vuedraggable";
import { isFunction as c, isObject as R, isUndefined as C, generateRandomString as L, getSlots as q } from "lkt-tools";
import { defineComponent as H, openBlock as i, createElementBlock as n, createCommentVNode as y, normalizeClass as j, Fragment as m, renderList as p, renderSlot as g, createTextVNode as F, toDisplayString as I, withDirectives as z, createElementVNode as b, vShow as U, resolveComponent as V, createBlock as $, withCtx as S, createSlots as B } from "vue";
class G {
  constructor(t = "", s = "") {
    this.key = t, this.label = s, this.sortable = !0, this.hidden = !1, this.formatter = void 0, this.checkEmpty = void 0, this.colspan = void 0;
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
const ve = (e, t) => new G(e, t), J = (e, t, s, r) => {
  if (!s)
    return 0;
  let a = e[s.key], u = t[s.key];
  if (r === "asc") {
    if (a > u)
      return 1;
    if (u > a)
      return -1;
  } else {
    if (a > u)
      return -1;
    if (u > a)
      return 1;
  }
  return 0;
}, O = (e, t, s) => e.formatter && c(e.formatter) ? e.formatter(t[e.key], t, e, s) : t[e.key], E = (e, t, s) => {
  if (!e.colspan)
    return -1;
  let r = t;
  return s.forEach((a) => {
    let u = v(e, a);
    u > 0 && u < r && (r = u);
  }), r;
}, v = (e, t) => e.colspan === !1 ? !1 : c(e.colspan) ? e.colspan(t) : e.colspan, K = (e, t, s) => {
  if (!R(e) || !e.key || t.indexOf(e.key) > -1)
    return !1;
  let r = v(e, s);
  return C(e.colspan) ? !0 : (C(e.colspan) || (c(e.colspan) ? r = parseInt(e.colspan()) : r = parseInt(e.colspan)), r > 0);
}, M = (e = []) => {
  if (e.length > 0) {
    for (let t = 0; t < e.length; ++t)
      if (e[t].sortable === !0)
        return e[t].key;
  }
  return "";
}, P = (e, t) => {
  if (e.length > 0) {
    for (let s = 0; s < e.length; ++s)
      if (e[s].key === t)
        return e[s];
  }
  return null;
};
class Q {
  constructor(t, s) {
    this.id = void 0, this.value = void 0, this.id = t, this.value = s;
  }
}
const w = (e, t) => new Q(e, t), W = H({
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
    canRenderColumn: K,
    getColumnDisplayContent: O,
    getVerticalColSpan: E,
    getHorizontalColSpan: v,
    onClick(e, t, s) {
      this.$emit("click", e, w("", { item: t, column: s }));
    },
    onShow(e, t) {
      this.$emit("show", e, w("", { i: t }));
    }
  }
}), N = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [r, a] of t)
    s[r] = a;
  return s;
}, X = ["data-i", "data-handle-drag"], Y = {
  key: 0,
  "data-role": "drag-indicator"
}, Z = {
  key: 1,
  "data-role": "invalid-drag-indicator"
}, _ = ["data-column", "colspan", "title", "onClick"];
function x(e, t, s, r, a, u) {
  return i(), n("tr", {
    "data-i": e.i,
    "data-handle-drag": e.isDraggable
  }, [
    e.sortable && e.isDraggable ? (i(), n("td", Y)) : e.sortable ? (i(), n("td", Z)) : y("", !0),
    e.displayHiddenColumnsIndicator ? (i(), n("td", {
      key: 2,
      onClick: t[0] || (t[0] = (l) => e.onShow(l, e.i)),
      "data-role": "show-more",
      class: j(e.hiddenIsVisible ? "state-open" : "")
    }, null, 2)) : y("", !0),
    (i(!0), n(m, null, p(e.visibleColumns, (l) => (i(), n(m, null, [
      e.canRenderColumn(l, e.emptyColumns, e.item) ? (i(), n("td", {
        key: 0,
        "data-column": l.key,
        colspan: e.getHorizontalColSpan(l, e.item),
        title: e.getColumnDisplayContent(l, e.item, e.i),
        onClick: (k) => e.onClick(k, e.item, l)
      }, [
        e.$slots[l.key] ? g(e.$slots, l.key, {
          key: 0,
          value: e.item[l.key],
          item: e.item,
          column: l,
          i: e.i
        }) : e.item ? (i(), n(m, { key: 1 }, [
          F(I(e.getColumnDisplayContent(l, e.item, e.i)), 1)
        ], 64)) : y("", !0)
      ], 8, _)) : y("", !0)
    ], 64))), 256))
  ], 8, X);
}
const ee = /* @__PURE__ */ N(W, [["render", x]]), te = H({
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
    canRenderColumn: K,
    getColumnDisplayContent: O,
    getVerticalColSpan: E,
    getHorizontalColSpan: v,
    onClick(e, t, s) {
      this.$emit("click", e, w("", { item: t, column: s }));
    },
    onShow(e, t) {
      this.$emit("show", e, w("", { i: t }));
    }
  }
}), se = { "data-role": "hidden-row" }, ie = ["colspan"], le = ["data-column"], ne = ["data-i"], oe = ["data-column", "title", "onClick"];
function re(e, t, s, r, a, u) {
  return z((i(), n("tr", se, [
    b("td", { colspan: e.hiddenColumnsColSpan }, [
      b("table", null, [
        b("tr", null, [
          (i(!0), n(m, null, p(e.hiddenColumns, (l) => (i(), n("th", {
            "data-column": l.key
          }, [
            b("div", null, I(l.label), 1)
          ], 8, le))), 256))
        ]),
        b("tr", { "data-i": e.i }, [
          (i(!0), n(m, null, p(e.hiddenColumns, (l, k) => (i(), n("td", {
            "data-column": l.key,
            title: e.getColumnDisplayContent(l, e.item, k),
            onClick: (D) => e.onClick(D, e.item, l)
          }, [
            e.$slots[l.key] ? g(e.$slots, l.key, {
              key: 0,
              value: e.item[l.key],
              item: e.item,
              column: l,
              i: k
            }) : (i(), n(m, { key: 1 }, [
              F(I(e.getColumnDisplayContent(l, e.item, k)), 1)
            ], 64))
          ], 8, oe))), 256))
        ], 8, ne)
      ])
    ], 8, ie)
  ], 512)), [
    [U, e.hiddenIsVisible]
  ]);
}
const ae = /* @__PURE__ */ N(te, [["render", re]]), de = H({
  name: "LktTable",
  components: { LktHiddenRow: ae, LktTableRow: ee, draggable: T },
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
      Sorter: c(this.sorter) ? this.sorter : J,
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
      return q(this.$slots);
    },
    hasData() {
      return this.Items.length > 0;
    },
    emptyColumns() {
      if (!this.hideEmptyColumns)
        return [];
      let e = [];
      return this.columns.forEach((t) => {
        let s = t.key, r = !1;
        this.Items.forEach((a) => {
          if (c(a.checkEmpty))
            return a.checkEmpty(a);
          a[s] && (r = !0);
        }), r || e.push(s);
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
      !e || e.sortable === !0 && (this.Items = this.Items.sort((t, s) => this.Sorter(t, s, e, this.SortDirection)), this.SortDirection = this.SortDirection === "asc" ? "desc" : "asc", this.SortBy = e.key, this.$emit("sort", [this.SortBy, this.SortDirection]));
    },
    onClick(e, t) {
      this.$emit("click", e, t);
    },
    show(e, t) {
      let s = "tr_" + t.value.i;
      this.Hidden[s] = C(this.Hidden[s]) ? !0 : !this.Hidden[s];
    }
  },
  mounted() {
    this.sort(P(this.columns, this.SortBy));
  }
}), ue = ["data-sortable"], he = {
  key: 0,
  "data-role": "drag-indicator"
}, me = { key: 1 }, pe = ["data-column", "data-sortable", "data-sort", "colspan", "title", "onClick"], ye = { key: 1 }, be = {
  key: 1,
  "data-lkt": "empty-table"
};
function fe(e, t, s, r, a, u) {
  const l = V("lkt-table-row"), k = V("draggable"), D = V("lkt-hidden-row");
  return i(), n("div", null, [
    e.hasData ? (i(), n("div", {
      key: 0,
      "data-lkt": "table",
      "data-sortable": e.sortable
    }, [
      b("table", null, [
        b("thead", null, [
          b("tr", null, [
            e.sortable ? (i(), n("th", he)) : y("", !0),
            e.displayHiddenColumnsIndicator ? (i(), n("th", me)) : y("", !0),
            (i(!0), n(m, null, p(e.visibleColumns, (o) => (i(), n(m, null, [
              e.emptyColumns.indexOf(o.key) === -1 ? (i(), n("th", {
                key: 0,
                "data-column": o.key,
                "data-sortable": o.sortable === !0,
                "data-sort": o.sortable === !0 && e.SortBy === o.key ? e.SortDirection : "",
                colspan: e.getVerticalColSpan(o, e.columns.length, e.Items),
                title: o.label,
                onClick: (d) => e.sort(o)
              }, [
                b("div", null, I(o.label), 1)
              ], 8, pe)) : y("", !0)
            ], 64))), 256))
          ])
        ]),
        e.sortable ? (i(), $(k, {
          key: 0,
          modelValue: e.Items,
          "onUpdate:modelValue": t[0] || (t[0] = (o) => e.Items = o),
          move: e.checkValidDrag,
          itemKey: e.draggableItemKey,
          onStart: t[1] || (t[1] = (o) => e.drag = !0),
          onEnd: t[2] || (t[2] = (o) => e.drag = !1),
          tag: "tbody",
          "data-lkt": "sortable-table",
          handle: "[data-handle-drag]"
        }, {
          item: S(({ element: o, index: d }) => [
            (i(), $(l, {
              key: e.uniqueId + "-" + d,
              i: d,
              item: o,
              "display-hidden-columns-indicator": e.displayHiddenColumnsIndicator,
              "is-draggable": e.draggableChecker ? e.draggableChecker(o) : !0,
              sortable: e.sortable,
              "visible-columns": e.visibleColumns,
              "empty-columns": e.emptyColumns,
              "hidden-is-visible": e.isVisible(d),
              onClick: e.onClick,
              onShow: e.show
            }, B({ _: 2 }, [
              p(e.slots, (A, f) => ({
                name: f,
                fn: S((h) => [
                  g(e.$slots, f, {
                    item: h.item,
                    value: h.value,
                    column: h.column
                  })
                ])
              }))
            ]), 1032, ["i", "item", "display-hidden-columns-indicator", "is-draggable", "sortable", "visible-columns", "empty-columns", "hidden-is-visible", "onClick", "onShow"]))
          ]),
          _: 3
        }, 8, ["modelValue", "move", "itemKey"])) : (i(), n("tbody", ye, [
          (i(!0), n(m, null, p(e.Items, (o, d) => (i(), $(l, {
            key: e.uniqueId + "-" + d,
            i: d,
            item: o,
            "display-hidden-columns-indicator": e.displayHiddenColumnsIndicator,
            "is-draggable": e.draggableChecker ? e.draggableChecker(o) : !0,
            sortable: e.sortable,
            "visible-columns": e.visibleColumns,
            "empty-columns": e.emptyColumns,
            "hidden-is-visible": e.isVisible(d),
            onClick: e.onClick,
            onShow: e.show
          }, B({ _: 2 }, [
            p(e.slots, (A, f) => ({
              name: f,
              fn: S((h) => [
                g(e.$slots, f, {
                  item: h.item,
                  value: h.value,
                  column: h.column
                })
              ])
            }))
          ]), 1032, ["i", "item", "display-hidden-columns-indicator", "is-draggable", "sortable", "visible-columns", "empty-columns", "hidden-is-visible", "onClick", "onShow"]))), 128)),
          e.hiddenColumns.length > 0 ? (i(!0), n(m, { key: 0 }, p(e.Items, (o, d) => (i(), $(D, {
            key: e.uniqueId + "-" + d,
            i: d,
            item: o,
            "hidden-columns": e.hiddenColumns,
            "hidden-columns-col-span": e.hiddenColumnsColSpan,
            "is-draggable": e.draggableChecker ? e.draggableChecker(o) : !0,
            sortable: e.sortable,
            "visible-columns": e.visibleColumns,
            "empty-columns": e.emptyColumns,
            "hidden-is-visible": e.isVisible(d),
            onClick: e.onClick,
            onShow: e.show
          }, B({ _: 2 }, [
            p(e.slots, (A, f) => ({
              name: f,
              fn: S((h) => [
                g(e.$slots, f, {
                  item: h.item,
                  value: h.value,
                  column: h.column
                })
              ])
            }))
          ]), 1032, ["i", "item", "hidden-columns", "hidden-columns-col-span", "is-draggable", "sortable", "visible-columns", "empty-columns", "hidden-is-visible", "onClick", "onShow"]))), 128)) : y("", !0)
        ]))
      ])
    ], 8, ue)) : e.$slots["no-items"] ? (i(), n("div", be, [
      g(e.$slots, "no-items")
    ])) : y("", !0)
  ]);
}
const ke = /* @__PURE__ */ N(de, [["render", fe]]), $e = {
  install: (e, t) => {
    e.component("lkt-table", ke);
    let s = !0;
    R(t) && !C(t.mountDraggableComponent) && t.mountDraggableComponent === !1 && (s = !1), s && e.component("draggable", T);
  }
};
export {
  ve as createColumn,
  $e as default
};
