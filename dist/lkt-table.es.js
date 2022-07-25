import T from "vuedraggable";
import { isFunction as v, isObject as N, isUndefined as g, generateRandomString as w, getSlots as R } from "lkt-tools";
import { openBlock as l, createElementBlock as a, Fragment as u, createElementVNode as h, normalizeClass as F, createCommentVNode as y, renderList as b, renderSlot as c, createTextVNode as V, toDisplayString as p, withDirectives as O, vShow as q, defineComponent as z, resolveComponent as E, createBlock as D, withCtx as I, createSlots as B } from "vue";
class j {
  constructor(t = "", n = "") {
    this.key = t, this.label = n, this.sortable = !0, this.hidden = !1, this.formatter = void 0, this.checkEmpty = void 0, this.colspan = void 0;
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
const ke = (e, t) => new j(e, t), G = (e, t, n, r) => {
  if (!n)
    return 0;
  let d = e[n.key], o = t[n.key];
  if (r === "asc") {
    if (d > o)
      return 1;
    if (o > d)
      return -1;
  } else {
    if (d > o)
      return -1;
    if (o > d)
      return 1;
  }
  return 0;
}, K = (e, t, n) => v(e.formatter) ? e.formatter(t[e.key], t, e, n) : t[e.key], L = (e, t, n) => {
  if (!e.colspan)
    return -1;
  let r = t;
  return n.forEach((d) => {
    let o = S(e, d);
    o > 0 && o < r && (r = o);
  }), r;
}, S = (e, t) => e.colspan === !1 ? !1 : v(e.colspan) ? e.colspan(t) : e.colspan, U = (e, t, n) => {
  if (!N(e) || !e.key || t.indexOf(e.key) > -1)
    return !1;
  let r = S(e, n);
  return g(e.colspan) ? !0 : (g(e.colspan) || (v(e.colspan) ? r = parseInt(e.colspan()) : r = parseInt(e.colspan)), r > 0);
}, J = (e = []) => {
  if (e.length > 0) {
    for (let t = 0; t < e.length; ++t)
      if (e[t].sortable === !0)
        return e[t].key;
  }
  return "";
}, M = {
  name: "LktTableRow",
  emits: ["click", "show"],
  props: {
    isDraggable: { type: Boolean, default: !0 },
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
    canRenderColumn: U,
    getColumnDisplayContent: K,
    getVerticalColSpan: L,
    getHorizontalColSpan: S
  }
}, H = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, d] of t)
    n[r] = d;
  return n;
}, P = ["data-i", "data-handle-drag"], Q = {
  key: 0,
  "data-role": "drag-indicator"
}, W = {
  key: 1,
  "data-role": "invalid-drag-indicator"
}, X = ["data-column", "colspan", "title", "onClick"], Y = {
  key: 0,
  "data-role": "hidden-row"
}, Z = ["colspan"], $ = ["data-column"], _ = ["data-i"], x = ["data-column", "title", "onClick"];
function ee(e, t, n, r, d, o) {
  return l(), a(u, null, [
    h("tr", {
      "data-i": n.i,
      "data-handle-drag": n.isDraggable
    }, [
      n.isDraggable ? (l(), a("td", Q)) : (l(), a("td", W)),
      n.hiddenColumns.length > 0 ? (l(), a("td", {
        key: 2,
        onClick: t[0] || (t[0] = (i) => e.$emit("show", { $event: i, i: n.i })),
        "data-role": "show-more",
        class: F(n.hiddenIsVisible ? "state-open" : "")
      }, null, 2)) : y("", !0),
      (l(!0), a(u, null, b(n.visibleColumns, (i) => (l(), a(u, null, [
        o.canRenderColumn(i, n.emptyColumns, n.item) ? (l(), a("td", {
          key: 0,
          "data-column": i.key,
          colspan: o.getHorizontalColSpan(i, n.item),
          title: o.getColumnDisplayContent(i, n.item, n.i),
          onClick: (k) => e.$emit("click", { $event: k, item: n.item, column: i })
        }, [
          e.$slots[i.key] ? c(e.$slots, i.key, {
            key: 0,
            value: n.item[i.key],
            item: n.item,
            column: i,
            i: n.i
          }) : n.item ? (l(), a(u, { key: 1 }, [
            V(p(o.getColumnDisplayContent(i, n.item, n.i)), 1)
          ], 64)) : y("", !0)
        ], 8, X)) : y("", !0)
      ], 64))), 256))
    ], 8, P),
    n.hiddenColumns.length > 0 ? O((l(), a("tr", Y, [
      h("td", { colspan: n.hiddenColumnsColSpan }, [
        h("table", null, [
          h("tr", null, [
            (l(!0), a(u, null, b(n.hiddenColumns, (i) => (l(), a("th", {
              "data-column": i.key
            }, [
              h("div", null, p(i.label), 1)
            ], 8, $))), 256))
          ]),
          h("tr", { "data-i": n.i }, [
            (l(!0), a(u, null, b(n.hiddenColumns, (i, k) => (l(), a("td", {
              "data-column": i.key,
              title: o.getColumnDisplayContent(i, n.item, k),
              onClick: (s) => e.$emit("click", { $event: s, item: n.item, column: i })
            }, [
              e.$slots[i.key] ? c(e.$slots, i.key, {
                key: 0,
                value: n.item[i.key],
                item: n.item,
                column: i,
                i: k
              }) : (l(), a(u, { key: 1 }, [
                V(p(o.getColumnDisplayContent(i, n.item, k)), 1)
              ], 64))
            ], 8, x))), 256))
          ], 8, _)
        ])
      ], 8, Z)
    ], 512)), [
      [q, n.hiddenIsVisible]
    ]) : y("", !0)
  ], 64);
}
const te = /* @__PURE__ */ H(M, [["render", ee]]), ne = z({
  name: "LktTable",
  components: { LktTableRow: te, draggable: T },
  props: {
    value: { type: Array, default: () => [] },
    columns: { type: Array, default: () => [] },
    sorter: { type: Function },
    sortable: { type: Boolean, default: !1 },
    hideEmptyColumns: { type: Boolean, default: !1 },
    draggableChecker: { type: Function, default: (e) => !0 },
    checkValidDrag: { type: Function, default: (e) => !0 },
    draggableItemKey: { type: String, default: "name" }
  },
  emits: ["input", "sort", "click"],
  data() {
    return {
      Sorter: v(this.sorter) ? this.sorter : G,
      SortBy: J(this.columns),
      SortDirection: "asc",
      Items: this.value,
      Hidden: {},
      drag: !1,
      dragGroup: w(16),
      uniqueId: w(12)
    };
  },
  computed: {
    slots() {
      return R(this.$slots);
    },
    hasData() {
      return this.Items.length > 0;
    },
    emptyColumns() {
      if (!this.hideEmptyColumns)
        return [];
      let e = [];
      return this.columns.forEach((t) => {
        let n = t.key, r = !1;
        this.Items.forEach((d) => {
          if (v(d.checkEmpty))
            return d.checkEmpty(d);
          d[n] && (r = !0);
        }), r || e.push(n);
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
    }
  },
  watch: {
    value: {
      handler(e) {
        this.Items = e;
      },
      deep: !0
    },
    Items: {
      handler(e) {
        this.$emit("input", e);
      },
      deep: !0
    }
  },
  methods: {
    getVerticalColSpan: L,
    getHorizontalColSpan: S,
    getItemByEvent(e) {
      let t = e.target;
      if (g(t.dataset.column))
        do
          t = t.parentNode;
        while (g(t.dataset.column) && t.tagName !== "TABLE" && t.tagName !== "body");
      if (t.tagName === "TD" && (t = t.parentNode, t = t.dataset.i, !g(t)))
        return this.Items[t];
    },
    isVisible(e) {
      return this.Hidden["tr_" + e] === !0;
    },
    sort(e) {
      e.sortable === !0 && (this.Items = this.Items.sort((t, n) => this.Sorter(t, n, e, this.SortDirection)), this.SortDirection = this.SortDirection === "asc" ? "desc" : "asc", this.SortBy = e.key, this.$emit("sort", [this.SortBy, this.SortDirection]));
    },
    onClick(e) {
      this.$emit("click", e);
    },
    show(e) {
      let t = "tr_" + e.i;
      this.Hidden[t] = g(this.Hidden[t]) ? !0 : !this.Hidden[t];
    }
  }
}), ie = ["data-sortable"], le = {
  key: 0,
  "data-role": "drag-indicator"
}, ae = { key: 1 }, se = ["data-column", "data-sortable", "data-sort", "colspan", "title", "onClick"], re = { key: 1 }, oe = {
  key: 1,
  "data-lkt": "empty-table"
};
function de(e, t, n, r, d, o) {
  const i = E("LktTableRow"), k = E("draggable");
  return l(), a("div", null, [
    e.hasData ? (l(), a("div", {
      key: 0,
      "data-lkt": "table",
      "data-sortable": e.sortable
    }, [
      h("table", null, [
        h("thead", null, [
          h("tr", null, [
            e.sortable ? (l(), a("th", le)) : y("", !0),
            e.hiddenColumns.length > 0 ? (l(), a("th", ae)) : y("", !0),
            (l(!0), a(u, null, b(e.visibleColumns, (s) => (l(), a(u, null, [
              e.emptyColumns.indexOf(s.key) === -1 ? (l(), a("th", {
                key: 0,
                "data-column": s.key,
                "data-sortable": s.sortable === !0,
                "data-sort": s.sortable === !0 && e.SortBy === s.key ? e.SortDirection : "",
                colspan: e.getVerticalColSpan(s, e.columns.length, e.Items),
                title: s.label,
                onClick: (m) => e.sort(s)
              }, [
                h("div", null, p(s.label), 1)
              ], 8, se)) : y("", !0)
            ], 64))), 256))
          ])
        ]),
        e.sortable ? (l(), D(k, {
          key: 0,
          modelValue: e.Items,
          "onUpdate:modelValue": t[0] || (t[0] = (s) => e.Items = s),
          group: e.dragGroup,
          move: e.checkValidDrag,
          "item-key": e.draggableItemKey,
          onStart: t[1] || (t[1] = (s) => e.drag = !0),
          onEnd: t[2] || (t[2] = (s) => e.drag = !1),
          tag: "tbody",
          "data-lkt": "sortable-table",
          handle: "[data-handle-drag]"
        }, {
          item: I(({ element: s, index: m }) => [
            (l(), D(i, {
              key: e.uniqueId + "-" + m,
              i: m,
              item: s,
              "hidden-columns": e.hiddenColumns,
              "hidden-columns-col-span": e.hiddenColumnsColSpan,
              "is-draggable": e.draggableChecker ? e.draggableChecker(s) : !0,
              "visible-columns": e.visibleColumns,
              "empty-columns": e.emptyColumns,
              "hidden-is-visible": e.isVisible(m),
              onClick: e.onClick,
              onShow: e.show
            }, B({ _: 2 }, [
              b(e.slots, (A, C) => ({
                name: C,
                fn: I((f) => [
                  c(e.$slots, C, {
                    item: f.item,
                    value: f.value,
                    column: f.column
                  })
                ])
              }))
            ]), 1032, ["i", "item", "hidden-columns", "hidden-columns-col-span", "is-draggable", "visible-columns", "empty-columns", "hidden-is-visible", "onClick", "onShow"]))
          ]),
          _: 3
        }, 8, ["modelValue", "group", "move", "item-key"])) : (l(), a("tbody", re, [
          (l(!0), a(u, null, b(e.Items, (s, m) => (l(), D(i, {
            key: e.uniqueId + "-" + m,
            i: m,
            item: s,
            "hidden-columns": e.hiddenColumns,
            "hidden-columns-col-span": e.hiddenColumnsColSpan,
            "is-draggable": e.draggableChecker ? e.draggableChecker(s) : !0,
            "visible-columns": e.visibleColumns,
            "empty-columns": e.emptyColumns,
            "hidden-is-visible": e.isVisible(m),
            onClick: e.onClick,
            onShow: e.show
          }, B({ _: 2 }, [
            b(e.slots, (A, C) => ({
              name: C,
              fn: I((f) => [
                c(e.$slots, C, {
                  item: f.item,
                  value: f.value,
                  column: f.column
                })
              ])
            }))
          ]), 1032, ["i", "item", "hidden-columns", "hidden-columns-col-span", "is-draggable", "visible-columns", "empty-columns", "hidden-is-visible", "onClick", "onShow"]))), 128))
        ]))
      ])
    ], 8, ie)) : e.$slots["no-items"] ? (l(), a("div", oe, [
      c(e.$slots, "no-items")
    ])) : y("", !0)
  ]);
}
const ue = /* @__PURE__ */ H(ne, [["render", de]]), fe = {
  install: (e, t) => {
    e.component("lktTable", ue);
    let n = !0;
    N(t) && !g(t.mountDraggableComponent) && t.mountDraggableComponent === !1 && (n = !1), n && e.component("draggable", T);
  }
};
export {
  ke as createColumn,
  fe as default
};
