import H from "vuedraggable";
import { isFunction as v, isObject as A, isUndefined as b, generateRandomString as w, getSlots as R } from "lkt-tools";
import { openBlock as l, createElementBlock as s, Fragment as u, createElementVNode as h, normalizeClass as F, createCommentVNode as y, renderList as c, renderSlot as C, createTextVNode as V, toDisplayString as p, withDirectives as O, vShow as q, defineComponent as z, resolveComponent as B, createBlock as D, withCtx as I, createSlots as E } from "vue";
class j {
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
const ke = (e, t) => new j(e, t), G = (e, t, i, r) => {
  if (!i)
    return 0;
  let d = e[i.key], o = t[i.key];
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
}, U = (e, t, i) => v(e.formatter) ? e.formatter(t[e.key], t, e, i) : t[e.key], T = (e, t, i) => {
  if (!e.colspan)
    return -1;
  let r = t;
  return i.forEach((d) => {
    let o = S(e, d);
    o > 0 && o < r && (r = o);
  }), r;
}, S = (e, t) => e.colspan === !1 ? !1 : v(e.colspan) ? e.colspan(t) : e.colspan, J = (e, t, i) => {
  if (!A(e) || !e.key || t.indexOf(e.key) > -1)
    return !1;
  let r = S(e, i);
  return b(e.colspan) ? !0 : (b(e.colspan) || (v(e.colspan) ? r = parseInt(e.colspan()) : r = parseInt(e.colspan)), r > 0);
}, K = (e = []) => {
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
    canRenderColumn: J,
    getColumnDisplayContent: U,
    getVerticalColSpan: T,
    getHorizontalColSpan: S
  }
}, L = (e, t) => {
  const i = e.__vccOpts || e;
  for (const [r, d] of t)
    i[r] = d;
  return i;
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
function ee(e, t, i, r, d, o) {
  return l(), s(u, null, [
    h("tr", {
      "data-i": i.i,
      "data-handle-drag": i.isDraggable
    }, [
      i.isDraggable ? (l(), s("td", Q)) : (l(), s("td", W)),
      i.hiddenColumns.length > 0 ? (l(), s("td", {
        key: 2,
        onClick: t[0] || (t[0] = (n) => e.$emit("show", { $event: n, i: i.i })),
        "data-role": "show-more",
        class: F(i.hiddenIsVisible ? "state-open" : "")
      }, null, 2)) : y("", !0),
      (l(!0), s(u, null, c(i.visibleColumns, (n) => (l(), s(u, null, [
        o.canRenderColumn(n, i.emptyColumns, i.item) ? (l(), s("td", {
          key: 0,
          "data-column": n.key,
          colspan: o.getHorizontalColSpan(n, i.item),
          title: o.getColumnDisplayContent(n, i.item, i.i),
          onClick: (k) => e.$emit("click", { $event: k, item: i.item, column: n })
        }, [
          e.$slots[n.key] ? C(e.$slots, n.key, {
            key: 0,
            value: i.item[n.key],
            item: i.item,
            column: n,
            i: i.i
          }) : i.item ? (l(), s(u, { key: 1 }, [
            V(p(o.getColumnDisplayContent(n, i.item, i.i)), 1)
          ], 64)) : y("", !0)
        ], 8, X)) : y("", !0)
      ], 64))), 256))
    ], 8, P),
    i.hiddenColumns.length > 0 ? O((l(), s("tr", Y, [
      h("td", { colspan: i.hiddenColumnsColSpan }, [
        h("table", null, [
          h("tr", null, [
            (l(!0), s(u, null, c(i.hiddenColumns, (n) => (l(), s("th", {
              "data-column": n.key
            }, [
              h("div", null, p(n.label), 1)
            ], 8, $))), 256))
          ]),
          h("tr", { "data-i": i.i }, [
            (l(!0), s(u, null, c(i.hiddenColumns, (n, k) => (l(), s("td", {
              "data-column": n.key,
              title: o.getColumnDisplayContent(n, i.item, k),
              onClick: (a) => e.$emit("click", { $event: a, item: i.item, column: n })
            }, [
              e.$slots[n.key] ? C(e.$slots, n.key, {
                key: 0,
                value: i.item[n.key],
                item: i.item,
                column: n,
                i: k
              }) : (l(), s(u, { key: 1 }, [
                V(p(o.getColumnDisplayContent(n, i.item, k)), 1)
              ], 64))
            ], 8, x))), 256))
          ], 8, _)
        ])
      ], 8, Z)
    ], 512)), [
      [q, i.hiddenIsVisible]
    ]) : y("", !0)
  ], 64);
}
const te = /* @__PURE__ */ L(M, [["render", ee]]), ie = z({
  name: "LktTable",
  components: { LktTableRow: te, draggable: H },
  props: {
    value: { type: Array, default: () => [] },
    columns: { type: Array, default: () => [] },
    sorter: { type: Function },
    sortable: { type: Boolean, default: !1 },
    hideEmptyColumns: { type: Boolean, default: !1 },
    draggableChecker: { type: Function, default: (e) => !0 },
    checkValidDrag: { type: Function, default: (e) => !0 }
  },
  emits: ["input", "sort"],
  data() {
    return {
      Sorter: v(this.sorter) ? this.sorter : G,
      SortBy: K(this.columns),
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
        let i = t.key, r = !1;
        this.Items.forEach((d) => {
          if (v(d.checkEmpty))
            return d.checkEmpty(d);
          d[i] && (r = !0);
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
    getVerticalColSpan: T,
    getHorizontalColSpan: S,
    getItemByEvent(e) {
      let t = e.target;
      if (b(t.dataset.column))
        do
          t = t.parentNode;
        while (b(t.dataset.column) && t.tagName !== "TABLE" && t.tagName !== "body");
      if (t.tagName === "TD" && (t = t.parentNode, t = t.dataset.i, !b(t)))
        return this.Items[t];
    },
    isVisible(e) {
      return this.Hidden["tr_" + e] === !0;
    },
    sort(e) {
      console.log("sort", e, this.SortBy, this.SortDirection), e.sortable === !0 && (this.Items = this.Items.sort((t, i) => this.Sorter(t, i, e, this.SortDirection)), this.SortDirection = this.SortDirection === "asc" ? "desc" : "asc", this.SortBy = e.key, this.$emit("sort", [this.SortBy, this.SortDirection]));
    },
    click(e) {
      this.$emit("click", e);
    },
    show(e) {
      let t = "tr_" + e.i;
      this.Hidden[t] = b(this.Hidden[t]) ? !0 : !this.Hidden[t];
    }
  }
}), ne = ["data-sortable"], le = {
  key: 0,
  "data-role": "drag-indicator"
}, se = { key: 1 }, ae = ["data-column", "data-sortable", "data-sort", "colspan", "title", "onClick"], re = { key: 1 }, oe = {
  key: 1,
  "data-lkt": "empty-table"
};
function de(e, t, i, r, d, o) {
  const n = B("LktTableRow"), k = B("draggable");
  return l(), s("div", null, [
    e.hasData ? (l(), s("div", {
      key: 0,
      "data-lkt": "table",
      "data-sortable": e.sortable
    }, [
      h("table", null, [
        h("thead", null, [
          h("tr", null, [
            e.sortable ? (l(), s("th", le)) : y("", !0),
            e.hiddenColumns.length > 0 ? (l(), s("th", se)) : y("", !0),
            (l(!0), s(u, null, c(e.visibleColumns, (a) => (l(), s(u, null, [
              e.emptyColumns.indexOf(a.key) === -1 ? (l(), s("th", {
                key: 0,
                "data-column": a.key,
                "data-sortable": a.sortable === !0,
                "data-sort": a.sortable === !0 && e.SortBy === a.key ? e.SortDirection : "",
                colspan: e.getVerticalColSpan(a, e.columns.length, e.Items),
                title: a.label,
                onClick: (m) => e.sort(a)
              }, [
                h("div", null, p(a.label), 1)
              ], 8, ae)) : y("", !0)
            ], 64))), 256))
          ])
        ]),
        e.sortable ? (l(), D(k, {
          key: 0,
          modelValue: e.Items,
          "onUpdate:modelValue": t[0] || (t[0] = (a) => e.Items = a),
          group: e.dragGroup,
          move: e.checkValidDrag,
          onStart: t[1] || (t[1] = (a) => e.drag = !0),
          onEnd: t[2] || (t[2] = (a) => e.drag = !1),
          tag: "tbody",
          "data-lkt": "sortable-table",
          handle: "[data-handle-drag]"
        }, {
          item: I(({ element: a, index: m }) => [
            (l(), D(n, {
              key: e.uniqueId + "-" + m,
              i: m,
              item: a,
              "hidden-columns": e.hiddenColumns,
              "hidden-columns-col-span": e.hiddenColumnsColSpan,
              "is-draggable": e.draggableChecker ? e.draggableChecker(a) : !0,
              "visible-columns": e.visibleColumns,
              "empty-columns": e.emptyColumns,
              "hidden-is-visible": e.isVisible(m),
              onClick: e.click,
              onShow: e.show
            }, E({ _: 2 }, [
              c(e.slots, (N, g) => ({
                name: g,
                fn: I((f) => [
                  C(e.$slots, g, {
                    item: f.item,
                    value: f.value,
                    column: f.column
                  })
                ])
              }))
            ]), 1032, ["i", "item", "hidden-columns", "hidden-columns-col-span", "is-draggable", "visible-columns", "empty-columns", "hidden-is-visible", "onClick", "onShow"]))
          ]),
          _: 3
        }, 8, ["modelValue", "group", "move"])) : (l(), s("tbody", re, [
          (l(!0), s(u, null, c(e.Items, (a, m) => (l(), D(n, {
            key: e.uniqueId + "-" + m,
            i: m,
            item: a,
            "hidden-columns": e.hiddenColumns,
            "hidden-columns-col-span": e.hiddenColumnsColSpan,
            "is-draggable": e.draggableChecker ? e.draggableChecker(a) : !0,
            "visible-columns": e.visibleColumns,
            "empty-columns": e.emptyColumns,
            "hidden-is-visible": e.isVisible(m),
            onClick: e.click,
            onShow: e.show
          }, E({ _: 2 }, [
            c(e.slots, (N, g) => ({
              name: g,
              fn: I((f) => [
                C(e.$slots, g, {
                  item: f.item,
                  value: f.value,
                  column: f.column
                })
              ])
            }))
          ]), 1032, ["i", "item", "hidden-columns", "hidden-columns-col-span", "is-draggable", "visible-columns", "empty-columns", "hidden-is-visible", "onClick", "onShow"]))), 128))
        ]))
      ])
    ], 8, ne)) : e.$slots["no-items"] ? (l(), s("div", oe, [
      C(e.$slots, "no-items")
    ])) : y("", !0)
  ]);
}
const ue = /* @__PURE__ */ L(ie, [["render", de]]), fe = {
  install: (e, t) => {
    e.component("LktTable", ue);
  }
};
export {
  ke as createColumn,
  fe as default
};
