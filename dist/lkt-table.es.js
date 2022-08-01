import T from "vuedraggable";
import { isFunction as v, isObject as H, isUndefined as f, generateRandomString as V, getSlots as O } from "lkt-tools";
import { openBlock as a, createElementBlock as i, Fragment as u, createElementVNode as h, createCommentVNode as m, normalizeClass as R, renderList as c, renderSlot as C, createTextVNode as w, toDisplayString as S, withDirectives as K, vShow as q, defineComponent as z, resolveComponent as B, createBlock as D, withCtx as I, createSlots as E } from "vue";
class j {
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
const fe = (e, t) => new j(e, t), U = (e, t, l, o) => {
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
}, G = (e, t, l) => v(e.formatter) ? e.formatter(t[e.key], t, e, l) : t[e.key], A = (e, t, l) => {
  if (!e.colspan)
    return -1;
  let o = t;
  return l.forEach((d) => {
    let r = p(e, d);
    r > 0 && r < o && (o = r);
  }), o;
}, p = (e, t) => e.colspan === !1 ? !1 : v(e.colspan) ? e.colspan(t) : e.colspan, J = (e, t, l) => {
  if (!H(e) || !e.key || t.indexOf(e.key) > -1)
    return !1;
  let o = p(e, l);
  return f(e.colspan) ? !0 : (f(e.colspan) || (v(e.colspan) ? o = parseInt(e.colspan()) : o = parseInt(e.colspan)), o > 0);
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
    canRenderColumn: J,
    getColumnDisplayContent: G,
    getVerticalColSpan: A,
    getHorizontalColSpan: p,
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
  return a(), i(u, null, [
    h("tr", {
      "data-i": l.i,
      "data-handle-drag": l.isDraggable
    }, [
      l.sortable && l.isDraggable ? (a(), i("td", X)) : l.sortable ? (a(), i("td", Y)) : m("", !0),
      l.hiddenColumns.length > 0 ? (a(), i("td", {
        key: 2,
        onClick: t[0] || (t[0] = (n) => r.onShow(n, l.i)),
        "data-role": "show-more",
        class: R(l.hiddenIsVisible ? "state-open" : "")
      }, null, 2)) : m("", !0),
      (a(!0), i(u, null, c(l.visibleColumns, (n) => (a(), i(u, null, [
        r.canRenderColumn(n, l.emptyColumns, l.item) ? (a(), i("td", {
          key: 0,
          "data-column": n.key,
          colspan: r.getHorizontalColSpan(n, l.item),
          title: r.getColumnDisplayContent(n, l.item, l.i),
          onClick: (b) => r.onClick(b, l.item, n)
        }, [
          e.$slots[n.key] ? C(e.$slots, n.key, {
            key: 0,
            value: l.item[n.key],
            item: l.item,
            column: n,
            i: l.i
          }) : l.item ? (a(), i(u, { key: 1 }, [
            w(S(r.getColumnDisplayContent(n, l.item, l.i)), 1)
          ], 64)) : m("", !0)
        ], 8, Z)) : m("", !0)
      ], 64))), 256))
    ], 8, W),
    l.hiddenColumns.length > 0 ? K((a(), i("tr", _, [
      h("td", { colspan: l.hiddenColumnsColSpan }, [
        h("table", null, [
          h("tr", null, [
            (a(!0), i(u, null, c(l.hiddenColumns, (n) => (a(), i("th", {
              "data-column": n.key
            }, [
              h("div", null, S(n.label), 1)
            ], 8, x))), 256))
          ]),
          h("tr", { "data-i": l.i }, [
            (a(!0), i(u, null, c(l.hiddenColumns, (n, b) => (a(), i("td", {
              "data-column": n.key,
              title: r.getColumnDisplayContent(n, l.item, b),
              onClick: (s) => r.onClick(s, l.item, n)
            }, [
              e.$slots[n.key] ? C(e.$slots, n.key, {
                key: 0,
                value: l.item[n.key],
                item: l.item,
                column: n,
                i: b
              }) : (a(), i(u, { key: 1 }, [
                w(S(r.getColumnDisplayContent(n, l.item, b)), 1)
              ], 64))
            ], 8, te))), 256))
          ], 8, ee)
        ])
      ], 8, $)
    ], 512)), [
      [q, l.hiddenIsVisible]
    ]) : m("", !0)
  ], 64);
}
const ne = /* @__PURE__ */ L(Q, [["render", le]]), ae = z({
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
      Sorter: v(this.sorter) ? this.sorter : U,
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
    getHorizontalColSpan: p,
    getItemByEvent(e) {
      let t = e.target;
      if (f(t.dataset.column))
        do
          t = t.parentNode;
        while (f(t.dataset.column) && t.tagName !== "TABLE" && t.tagName !== "body");
      if (t.tagName === "TD" && (t = t.parentNode, t = t.dataset.i, !f(t)))
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
      this.Hidden[l] = f(this.Hidden[l]) ? !0 : !this.Hidden[l];
    }
  }
}), ie = ["data-sortable"], se = {
  key: 0,
  "data-role": "drag-indicator"
}, re = { key: 1 }, oe = ["data-column", "data-sortable", "data-sort", "colspan", "title", "onClick"], de = { key: 1 }, ue = {
  key: 1,
  "data-lkt": "empty-table"
};
function he(e, t, l, o, d, r) {
  const n = B("lkt-table-row"), b = B("draggable");
  return a(), i("div", null, [
    e.hasData ? (a(), i("div", {
      key: 0,
      "data-lkt": "table",
      "data-sortable": e.sortable
    }, [
      h("table", null, [
        h("thead", null, [
          h("tr", null, [
            e.sortable ? (a(), i("th", se)) : m("", !0),
            e.hiddenColumns.length > 0 ? (a(), i("th", re)) : m("", !0),
            (a(!0), i(u, null, c(e.visibleColumns, (s) => (a(), i(u, null, [
              e.emptyColumns.indexOf(s.key) === -1 ? (a(), i("th", {
                key: 0,
                "data-column": s.key,
                "data-sortable": s.sortable === !0,
                "data-sort": s.sortable === !0 && e.SortBy === s.key ? e.SortDirection : "",
                colspan: e.getVerticalColSpan(s, e.columns.length, e.Items),
                title: s.label,
                onClick: (y) => e.sort(s)
              }, [
                h("div", null, S(s.label), 1)
              ], 8, oe)) : m("", !0)
            ], 64))), 256))
          ])
        ]),
        e.sortable ? (a(), D(b, {
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
          item: I(({ element: s, index: y }) => [
            (a(), D(n, {
              key: e.uniqueId + "-" + y,
              i: y,
              item: s,
              "hidden-columns": e.hiddenColumns,
              "hidden-columns-col-span": e.hiddenColumnsColSpan,
              "is-draggable": e.draggableChecker ? e.draggableChecker(s) : !0,
              sortable: e.sortable,
              "visible-columns": e.visibleColumns,
              "empty-columns": e.emptyColumns,
              "hidden-is-visible": e.isVisible(y),
              onClick: e.onClick,
              onShow: e.show
            }, E({ _: 2 }, [
              c(e.slots, (F, g) => ({
                name: g,
                fn: I((k) => [
                  C(e.$slots, g, {
                    item: k.item,
                    value: k.value,
                    column: k.column
                  })
                ])
              }))
            ]), 1032, ["i", "item", "hidden-columns", "hidden-columns-col-span", "is-draggable", "sortable", "visible-columns", "empty-columns", "hidden-is-visible", "onClick", "onShow"]))
          ]),
          _: 3
        }, 8, ["modelValue", "move", "itemKey"])) : (a(), i("tbody", de, [
          (a(!0), i(u, null, c(e.Items, (s, y) => (a(), D(n, {
            key: e.uniqueId + "-" + y,
            i: y,
            item: s,
            "hidden-columns": e.hiddenColumns,
            "hidden-columns-col-span": e.hiddenColumnsColSpan,
            "is-draggable": e.draggableChecker ? e.draggableChecker(s) : !0,
            sortable: e.sortable,
            "visible-columns": e.visibleColumns,
            "empty-columns": e.emptyColumns,
            "hidden-is-visible": e.isVisible(y),
            onClick: e.onClick,
            onShow: e.show
          }, E({ _: 2 }, [
            c(e.slots, (F, g) => ({
              name: g,
              fn: I((k) => [
                C(e.$slots, g, {
                  item: k.item,
                  value: k.value,
                  column: k.column
                })
              ])
            }))
          ]), 1032, ["i", "item", "hidden-columns", "hidden-columns-col-span", "is-draggable", "sortable", "visible-columns", "empty-columns", "hidden-is-visible", "onClick", "onShow"]))), 128))
        ]))
      ])
    ], 8, ie)) : e.$slots["no-items"] ? (a(), i("div", ue, [
      C(e.$slots, "no-items")
    ])) : m("", !0)
  ]);
}
const me = /* @__PURE__ */ L(ae, [["render", he]]), ce = {
  install: (e, t) => {
    e.component("lkt-table", me);
    let l = !0;
    H(t) && !f(t.mountDraggableComponent) && t.mountDraggableComponent === !1 && (l = !1), l && e.component("draggable", T);
  }
};
export {
  fe as createColumn,
  ce as default
};
