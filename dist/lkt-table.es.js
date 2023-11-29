var K = Object.defineProperty;
var O = (e, t, i) => t in e ? K(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : e[t] = i;
var k = (e, t, i) => (O(e, typeof t != "symbol" ? t + "" : t, i), i);
import q from "vuedraggable";
import { createLktEvent as S } from "lkt-events";
import { defineComponent as B, openBlock as s, createElementBlock as o, createCommentVNode as y, normalizeClass as j, Fragment as h, renderList as p, renderSlot as g, createTextVNode as A, toDisplayString as I, withDirectives as z, createElementVNode as f, vShow as G, resolveComponent as D, createBlock as v, withCtx as $, createSlots as V } from "vue";
import { generateRandomString as L } from "lkt-string-tools";
import { getSlots as U } from "lkt-vue-tools";
class T {
  constructor(t = "", i = "") {
    k(this, "key");
    k(this, "label");
    k(this, "sortable");
    k(this, "hidden");
    k(this, "formatter");
    k(this, "checkEmpty");
    k(this, "colspan");
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
const Se = (e, t, i = !0) => new T(e, t).setIsSortable(i), Ie = (e, t, i = !0) => new T(e, t).setIsSortable(i).setIsHidden(!0), J = (e, t, i, r) => {
  if (!i)
    return 0;
  let a = e[i.key], u = t[i.key];
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
}, R = (e, t, i) => e.formatter && typeof e.formatter == "function" ? e.formatter(t[e.key], t, e, i) : t[e.key], H = (e, t, i) => {
  if (!e.colspan)
    return -1;
  let r = t;
  return i.forEach((a) => {
    let u = c(e, a);
    u > 0 && u < r && (r = u);
  }), r;
}, c = (e, t) => e.colspan === !1 ? !1 : typeof e.colspan == "function" ? e.colspan(t) : e.colspan, F = (e, t, i) => {
  if (typeof e != "object" || !e.key || t.indexOf(e.key) > -1)
    return !1;
  let r = c(e, i);
  return typeof e.colspan > "u" ? !0 : (typeof e.colspan < "u" && (typeof e.colspan == "function" ? r = parseInt(e.colspan()) : r = parseInt(e.colspan)), r > 0);
}, M = (e = []) => {
  if (e.length > 0) {
    for (let t = 0; t < e.length; ++t)
      if (e[t].sortable)
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
}, Q = B({
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
    canRenderColumn: F,
    getColumnDisplayContent: R,
    getVerticalColSpan: H,
    getHorizontalColSpan: c,
    onClick(e, t, i) {
      this.$emit("click", e, S("", { item: t, column: i }));
    },
    onShow(e, t) {
      this.$emit("show", e, S("", { i: t }));
    }
  }
}), E = (e, t) => {
  const i = e.__vccOpts || e;
  for (const [r, a] of t)
    i[r] = a;
  return i;
}, W = ["data-i", "data-handle-drag"], X = {
  key: 0,
  "data-role": "drag-indicator"
}, Y = {
  key: 1,
  "data-role": "invalid-drag-indicator"
}, Z = ["data-column", "colspan", "title", "onClick"];
function _(e, t, i, r, a, u) {
  return s(), o("tr", {
    "data-i": e.i,
    "data-handle-drag": e.isDraggable
  }, [
    e.sortable && e.isDraggable ? (s(), o("td", X)) : e.sortable ? (s(), o("td", Y)) : y("", !0),
    e.displayHiddenColumnsIndicator ? (s(), o("td", {
      key: 2,
      onClick: t[0] || (t[0] = (n) => e.onShow(n, e.i)),
      "data-role": "show-more",
      class: j(e.hiddenIsVisible ? "state-open" : "")
    }, null, 2)) : y("", !0),
    (s(!0), o(h, null, p(e.visibleColumns, (n) => (s(), o(h, null, [
      e.canRenderColumn(n, e.emptyColumns, e.item) ? (s(), o("td", {
        key: 0,
        "data-column": n.key,
        colspan: e.getHorizontalColSpan(n, e.item),
        title: e.getColumnDisplayContent(n, e.item, e.i),
        onClick: (C) => e.onClick(C, e.item, n)
      }, [
        e.$slots[n.key] ? g(e.$slots, n.key, {
          key: 0,
          value: e.item[n.key],
          item: e.item,
          column: n,
          i: e.i
        }) : e.item ? (s(), o(h, { key: 1 }, [
          A(I(e.getColumnDisplayContent(n, e.item, e.i)), 1)
        ], 64)) : y("", !0)
      ], 8, Z)) : y("", !0)
    ], 64))), 256))
  ], 8, W);
}
const x = /* @__PURE__ */ E(Q, [["render", _]]), ee = B({
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
    canRenderColumn: F,
    getColumnDisplayContent: R,
    getVerticalColSpan: H,
    getHorizontalColSpan: c,
    onClick(e, t, i) {
      this.$emit("click", e, S("", { item: t, column: i }));
    },
    onShow(e, t) {
      this.$emit("show", e, S("", { i: t }));
    }
  }
}), te = { "data-role": "hidden-row" }, ie = ["colspan"], se = ["data-column"], ne = ["data-i"], oe = ["data-column", "title", "onClick"];
function le(e, t, i, r, a, u) {
  return z((s(), o("tr", te, [
    f("td", { colspan: e.hiddenColumnsColSpan }, [
      f("table", null, [
        f("tr", null, [
          (s(!0), o(h, null, p(e.hiddenColumns, (n) => (s(), o("th", {
            "data-column": n.key
          }, [
            f("div", null, I(n.label), 1)
          ], 8, se))), 256))
        ]),
        f("tr", { "data-i": e.i }, [
          (s(!0), o(h, null, p(e.hiddenColumns, (n, C) => (s(), o("td", {
            "data-column": n.key,
            title: e.getColumnDisplayContent(n, e.item, C),
            onClick: (w) => e.onClick(w, e.item, n)
          }, [
            e.$slots[n.key] ? g(e.$slots, n.key, {
              key: 0,
              value: e.item[n.key],
              item: e.item,
              column: n,
              i: C
            }) : (s(), o(h, { key: 1 }, [
              A(I(e.getColumnDisplayContent(n, e.item, C)), 1)
            ], 64))
          ], 8, oe))), 256))
        ], 8, ne)
      ])
    ], 8, ie)
  ], 512)), [
    [G, e.hiddenIsVisible]
  ]);
}
const re = /* @__PURE__ */ E(ee, [["render", le]]), ae = B({
  name: "LktTable",
  components: { LktHiddenRow: re, LktTableRow: x, draggable: q },
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
      Sorter: typeof this.sorter == "function" ? this.sorter : J,
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
      return U(this.$slots);
    },
    hasData() {
      return this.Items.length > 0;
    },
    emptyColumns() {
      if (!this.hideEmptyColumns)
        return [];
      let e = [];
      return this.columns.forEach((t) => {
        let i = t.key, r = !1;
        this.Items.forEach((a) => {
          if (typeof a.checkEmpty == "function")
            return a.checkEmpty(a);
          a[i] && (r = !0);
        }), r || e.push(i);
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
    getVerticalColSpan: H,
    getHorizontalColSpan: c,
    getItemByEvent(e) {
      let t = e.target;
      if (typeof t.dataset.column > "u")
        do
          t = t.parentNode;
        while (typeof t.dataset.column > "u" && t.tagName !== "TABLE" && t.tagName !== "body");
      if (t.tagName === "TD" && (t = t.parentNode, t = t.dataset.i, typeof t < "u"))
        return this.Items[t];
    },
    isVisible(e) {
      return this.Hidden["tr_" + e] === !0;
    },
    sort(e) {
      !e || e.sortable === !0 && (this.Items = this.Items.sort((t, i) => this.Sorter(t, i, e, this.SortDirection)), this.SortDirection = this.SortDirection === "asc" ? "desc" : "asc", this.SortBy = e.key, this.$emit("sort", [this.SortBy, this.SortDirection]));
    },
    onClick(e, t) {
      this.$emit("click", e, t);
    },
    show(e, t) {
      let i = "tr_" + t.value.i;
      this.Hidden[i] = typeof this.Hidden[i] > "u" ? !0 : !this.Hidden[i];
    }
  },
  mounted() {
    this.sort(P(this.columns, this.SortBy));
  }
}), de = ["data-sortable"], ue = {
  key: 0,
  "data-role": "drag-indicator"
}, me = { key: 1 }, he = ["data-column", "data-sortable", "data-sort", "colspan", "title", "onClick"], pe = { key: 1 }, ye = {
  key: 1,
  "data-lkt": "empty-table"
};
function fe(e, t, i, r, a, u) {
  const n = D("lkt-table-row"), C = D("draggable"), w = D("lkt-hidden-row");
  return s(), o("div", null, [
    e.hasData ? (s(), o("div", {
      key: 0,
      "data-lkt": "table",
      "data-sortable": e.sortable
    }, [
      f("table", null, [
        f("thead", null, [
          f("tr", null, [
            e.sortable ? (s(), o("th", ue)) : y("", !0),
            e.displayHiddenColumnsIndicator ? (s(), o("th", me)) : y("", !0),
            (s(!0), o(h, null, p(e.visibleColumns, (l) => (s(), o(h, null, [
              e.emptyColumns.indexOf(l.key) === -1 ? (s(), o("th", {
                key: 0,
                "data-column": l.key,
                "data-sortable": l.sortable === !0,
                "data-sort": l.sortable === !0 && e.SortBy === l.key ? e.SortDirection : "",
                colspan: e.getVerticalColSpan(l, e.columns.length, e.Items),
                title: l.label,
                onClick: (d) => e.sort(l)
              }, [
                f("div", null, I(l.label), 1)
              ], 8, he)) : y("", !0)
            ], 64))), 256))
          ])
        ]),
        e.sortable ? (s(), v(C, {
          key: 0,
          modelValue: e.Items,
          "onUpdate:modelValue": t[0] || (t[0] = (l) => e.Items = l),
          move: e.checkValidDrag,
          itemKey: e.draggableItemKey,
          onStart: t[1] || (t[1] = (l) => e.drag = !0),
          onEnd: t[2] || (t[2] = (l) => e.drag = !1),
          tag: "tbody",
          "data-lkt": "sortable-table",
          handle: "[data-handle-drag]"
        }, {
          item: $(({ element: l, index: d }) => [
            (s(), v(n, {
              key: e.uniqueId + "-" + d,
              i: d,
              item: l,
              "display-hidden-columns-indicator": e.displayHiddenColumnsIndicator,
              "is-draggable": e.draggableChecker ? e.draggableChecker(l) : !0,
              sortable: e.sortable,
              "visible-columns": e.visibleColumns,
              "empty-columns": e.emptyColumns,
              "hidden-is-visible": e.isVisible(d),
              onClick: e.onClick,
              onShow: e.show
            }, V({ _: 2 }, [
              p(e.slots, (N, b) => ({
                name: b,
                fn: $((m) => [
                  g(e.$slots, b, {
                    item: m.item,
                    value: m.value,
                    column: m.column
                  })
                ])
              }))
            ]), 1032, ["i", "item", "display-hidden-columns-indicator", "is-draggable", "sortable", "visible-columns", "empty-columns", "hidden-is-visible", "onClick", "onShow"]))
          ]),
          _: 3
        }, 8, ["modelValue", "move", "itemKey"])) : (s(), o("tbody", pe, [
          (s(!0), o(h, null, p(e.Items, (l, d) => (s(), v(n, {
            key: e.uniqueId + "-" + d,
            i: d,
            item: l,
            "display-hidden-columns-indicator": e.displayHiddenColumnsIndicator,
            "is-draggable": e.draggableChecker ? e.draggableChecker(l) : !0,
            sortable: e.sortable,
            "visible-columns": e.visibleColumns,
            "empty-columns": e.emptyColumns,
            "hidden-is-visible": e.isVisible(d),
            onClick: e.onClick,
            onShow: e.show
          }, V({ _: 2 }, [
            p(e.slots, (N, b) => ({
              name: b,
              fn: $((m) => [
                g(e.$slots, b, {
                  item: m.item,
                  value: m.value,
                  column: m.column
                })
              ])
            }))
          ]), 1032, ["i", "item", "display-hidden-columns-indicator", "is-draggable", "sortable", "visible-columns", "empty-columns", "hidden-is-visible", "onClick", "onShow"]))), 128)),
          e.hiddenColumns.length > 0 ? (s(!0), o(h, { key: 0 }, p(e.Items, (l, d) => (s(), v(w, {
            key: e.uniqueId + "-" + d,
            i: d,
            item: l,
            "hidden-columns": e.hiddenColumns,
            "hidden-columns-col-span": e.hiddenColumnsColSpan,
            "is-draggable": e.draggableChecker ? e.draggableChecker(l) : !0,
            sortable: e.sortable,
            "visible-columns": e.visibleColumns,
            "empty-columns": e.emptyColumns,
            "hidden-is-visible": e.isVisible(d),
            onClick: e.onClick,
            onShow: e.show
          }, V({ _: 2 }, [
            p(e.slots, (N, b) => ({
              name: b,
              fn: $((m) => [
                g(e.$slots, b, {
                  item: m.item,
                  value: m.value,
                  column: m.column
                })
              ])
            }))
          ]), 1032, ["i", "item", "hidden-columns", "hidden-columns-col-span", "is-draggable", "sortable", "visible-columns", "empty-columns", "hidden-is-visible", "onClick", "onShow"]))), 128)) : y("", !0)
        ]))
      ])
    ], 8, de)) : e.$slots["no-items"] ? (s(), o("div", ye, [
      g(e.$slots, "no-items")
    ])) : y("", !0)
  ]);
}
const be = /* @__PURE__ */ E(ae, [["render", fe]]), we = {
  install: (e) => {
    e.component("lkt-table", be);
  }
};
export {
  Se as createColumn,
  Ie as createHiddenColumn,
  we as default
};
