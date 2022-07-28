import T from "vuedraggable";
import { isFunction as v, isObject as H, isUndefined as g, generateRandomString as V, getSlots as O } from "lkt-tools";
import { openBlock as i, createElementBlock as a, Fragment as u, createElementVNode as h, normalizeClass as R, createCommentVNode as y, renderList as c, renderSlot as C, createTextVNode as w, toDisplayString as p, withDirectives as q, vShow as z, defineComponent as j, resolveComponent as E, createBlock as D, withCtx as I, createSlots as B } from "vue";
class G {
  constructor(t = "", l = "") {
    this.key = t, this.label = l, this.sortable = !0, this.hidden = !1, this.formatter = void 0, this.checkEmpty = void 0, this.colspan = void 0;
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
const ge = (e, t) => new G(e, t), K = (e, t, l, o) => {
  if (!l)
    return 0;
  let d = e[l.key], r = t[l.key];
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
}, U = (e, t, l) => v(e.formatter) ? e.formatter(t[e.key], t, e, l) : t[e.key], A = (e, t, l) => {
  if (!e.colspan)
    return -1;
  let o = t;
  return l.forEach((d) => {
    let r = S(e, d);
    r > 0 && r < o && (o = r);
  }), o;
}, S = (e, t) => e.colspan === !1 ? !1 : v(e.colspan) ? e.colspan(t) : e.colspan, J = (e, t, l) => {
  if (!H(e) || !e.key || t.indexOf(e.key) > -1)
    return !1;
  let o = S(e, l);
  return g(e.colspan) ? !0 : (g(e.colspan) || (v(e.colspan) ? o = parseInt(e.colspan()) : o = parseInt(e.colspan)), o > 0);
}, M = (e = []) => {
  if (e.length > 0) {
    for (let t = 0; t < e.length; ++t)
      if (e[t].sortable === !0)
        return e[t].key;
  }
  return "";
};
class P {
  constructor(t, l) {
    this.id = void 0, this.value = void 0, this.id = t, this.value = l;
  }
}
const N = (e, t) => new P(e, t), Q = {
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
    getVerticalColSpan: A,
    getHorizontalColSpan: S,
    onClick(e, t, l) {
      this.$emit("click", e, N("", { item: t, column: l }));
    },
    onShow(e, t) {
      this.$emit("show", e, N("", { i: t }));
    }
  }
}, L = (e, t) => {
  const l = e.__vccOpts || e;
  for (const [o, d] of t)
    l[o] = d;
  return l;
}, W = ["data-i", "data-handle-drag"], X = {
  key: 0,
  "data-role": "drag-indicator"
}, Y = {
  key: 1,
  "data-role": "invalid-drag-indicator"
}, Z = ["data-column", "colspan", "title", "onClick"], _ = {
  key: 0,
  "data-role": "hidden-row"
}, $ = ["colspan"], x = ["data-column"], ee = ["data-i"], te = ["data-column", "title", "onClick"];
function le(e, t, l, o, d, r) {
  return i(), a(u, null, [
    h("tr", {
      "data-i": l.i,
      "data-handle-drag": l.isDraggable
    }, [
      l.isDraggable ? (i(), a("td", X)) : (i(), a("td", Y)),
      l.hiddenColumns.length > 0 ? (i(), a("td", {
        key: 2,
        onClick: t[0] || (t[0] = (n) => r.onShow(n, l.i)),
        "data-role": "show-more",
        class: R(l.hiddenIsVisible ? "state-open" : "")
      }, null, 2)) : y("", !0),
      (i(!0), a(u, null, c(l.visibleColumns, (n) => (i(), a(u, null, [
        r.canRenderColumn(n, l.emptyColumns, l.item) ? (i(), a("td", {
          key: 0,
          "data-column": n.key,
          colspan: r.getHorizontalColSpan(n, l.item),
          title: r.getColumnDisplayContent(n, l.item, l.i),
          onClick: (k) => r.onClick(k, l.item, n)
        }, [
          e.$slots[n.key] ? C(e.$slots, n.key, {
            key: 0,
            value: l.item[n.key],
            item: l.item,
            column: n,
            i: l.i
          }) : l.item ? (i(), a(u, { key: 1 }, [
            w(p(r.getColumnDisplayContent(n, l.item, l.i)), 1)
          ], 64)) : y("", !0)
        ], 8, Z)) : y("", !0)
      ], 64))), 256))
    ], 8, W),
    l.hiddenColumns.length > 0 ? q((i(), a("tr", _, [
      h("td", { colspan: l.hiddenColumnsColSpan }, [
        h("table", null, [
          h("tr", null, [
            (i(!0), a(u, null, c(l.hiddenColumns, (n) => (i(), a("th", {
              "data-column": n.key
            }, [
              h("div", null, p(n.label), 1)
            ], 8, x))), 256))
          ]),
          h("tr", { "data-i": l.i }, [
            (i(!0), a(u, null, c(l.hiddenColumns, (n, k) => (i(), a("td", {
              "data-column": n.key,
              title: r.getColumnDisplayContent(n, l.item, k),
              onClick: (s) => r.onClick(s, l.item, n)
            }, [
              e.$slots[n.key] ? C(e.$slots, n.key, {
                key: 0,
                value: l.item[n.key],
                item: l.item,
                column: n,
                i: k
              }) : (i(), a(u, { key: 1 }, [
                w(p(r.getColumnDisplayContent(n, l.item, k)), 1)
              ], 64))
            ], 8, te))), 256))
          ], 8, ee)
        ])
      ], 8, $)
    ], 512)), [
      [z, l.hiddenIsVisible]
    ]) : y("", !0)
  ], 64);
}
const ne = /* @__PURE__ */ L(Q, [["render", le]]), ie = j({
  name: "LktTable",
  components: { LktTableRow: ne, draggable: T },
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
      Sorter: v(this.sorter) ? this.sorter : K,
      SortBy: M(this.columns),
      SortDirection: "asc",
      Items: this.modelValue,
      Hidden: {},
      drag: !1,
      dragGroup: V(16),
      uniqueId: V(12)
    };
  },
  computed: {
    slots() {
      return O(this.$slots);
    },
    hasData() {
      return this.Items.length > 0;
    },
    emptyColumns() {
      if (!this.hideEmptyColumns)
        return [];
      let e = [];
      return this.columns.forEach((t) => {
        let l = t.key, o = !1;
        this.Items.forEach((d) => {
          if (v(d.checkEmpty))
            return d.checkEmpty(d);
          d[l] && (o = !0);
        }), o || e.push(l);
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
    getVerticalColSpan: A,
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
      e.sortable === !0 && (this.Items = this.Items.sort((t, l) => this.Sorter(t, l, e, this.SortDirection)), this.SortDirection = this.SortDirection === "asc" ? "desc" : "asc", this.SortBy = e.key, this.$emit("sort", [this.SortBy, this.SortDirection]));
    },
    onClick(e, t) {
      this.$emit("click", e, t);
    },
    show(e, t) {
      let l = "tr_" + t.value.i;
      this.Hidden[l] = g(this.Hidden[l]) ? !0 : !this.Hidden[l];
    }
  }
}), ae = ["data-sortable"], se = {
  key: 0,
  "data-role": "drag-indicator"
}, re = { key: 1 }, oe = ["data-column", "data-sortable", "data-sort", "colspan", "title", "onClick"], de = { key: 1 }, ue = {
  key: 1,
  "data-lkt": "empty-table"
};
function he(e, t, l, o, d, r) {
  const n = E("lkt-table-row"), k = E("draggable");
  return i(), a("div", null, [
    e.hasData ? (i(), a("div", {
      key: 0,
      "data-lkt": "table",
      "data-sortable": e.sortable
    }, [
      h("table", null, [
        h("thead", null, [
          h("tr", null, [
            e.sortable ? (i(), a("th", se)) : y("", !0),
            e.hiddenColumns.length > 0 ? (i(), a("th", re)) : y("", !0),
            (i(!0), a(u, null, c(e.visibleColumns, (s) => (i(), a(u, null, [
              e.emptyColumns.indexOf(s.key) === -1 ? (i(), a("th", {
                key: 0,
                "data-column": s.key,
                "data-sortable": s.sortable === !0,
                "data-sort": s.sortable === !0 && e.SortBy === s.key ? e.SortDirection : "",
                colspan: e.getVerticalColSpan(s, e.columns.length, e.Items),
                title: s.label,
                onClick: (m) => e.sort(s)
              }, [
                h("div", null, p(s.label), 1)
              ], 8, oe)) : y("", !0)
            ], 64))), 256))
          ])
        ]),
        e.sortable ? (i(), D(k, {
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
            (i(), D(n, {
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
              c(e.slots, (F, b) => ({
                name: b,
                fn: I((f) => [
                  C(e.$slots, b, {
                    item: f.item,
                    value: f.value,
                    column: f.column
                  })
                ])
              }))
            ]), 1032, ["i", "item", "hidden-columns", "hidden-columns-col-span", "is-draggable", "visible-columns", "empty-columns", "hidden-is-visible", "onClick", "onShow"]))
          ]),
          _: 3
        }, 8, ["modelValue", "group", "move", "item-key"])) : (i(), a("tbody", de, [
          (i(!0), a(u, null, c(e.Items, (s, m) => (i(), D(n, {
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
            c(e.slots, (F, b) => ({
              name: b,
              fn: I((f) => [
                C(e.$slots, b, {
                  item: f.item,
                  value: f.value,
                  column: f.column
                })
              ])
            }))
          ]), 1032, ["i", "item", "hidden-columns", "hidden-columns-col-span", "is-draggable", "visible-columns", "empty-columns", "hidden-is-visible", "onClick", "onShow"]))), 128))
        ]))
      ])
    ], 8, ae)) : e.$slots["no-items"] ? (i(), a("div", ue, [
      C(e.$slots, "no-items")
    ])) : y("", !0)
  ]);
}
const me = /* @__PURE__ */ L(ie, [["render", he]]), ce = {
  install: (e, t) => {
    e.component("lkt-table", me);
    let l = !0;
    H(t) && !g(t.mountDraggableComponent) && t.mountDraggableComponent === !1 && (l = !1), l && e.component("draggable", T);
  }
};
export {
  ge as createColumn,
  ce as default
};
