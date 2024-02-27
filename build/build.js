import { reactive as I, defineComponent as F, ref as C, watch as D, nextTick as oe, resolveComponent as N, openBlock as i, createBlock as k, withCtx as x, createTextVNode as Z, toDisplayString as O, unref as p, createElementBlock as h, Fragment as A, createCommentVNode as E, normalizeClass as ue, renderList as L, renderSlot as H, withDirectives as se, createElementVNode as $, vShow as re, useSlots as de, computed as T, onMounted as ce, createSlots as Q } from "vue";
import me from "vuedraggable";
import { httpCall as fe } from "lkt-http-client";
import { createLktEvent as W } from "lkt-events";
import { generateRandomString as he } from "lkt-string-tools";
class w {
  constructor(t = "", l = "") {
    this.key = t, this.label = l, this.sortable = !0, this.hidden = !1, this.formatter = void 0, this.checkEmpty = void 0, this.colspan = void 0, this.resource = "", this.resourceData = {}, this.isMultiple = !1, this.isLoading = !1, this.resourceLoaded = !1, this.valueSlot = "", this.editSlot = "", this.multipleDisplay = "", this.multipleDisplayEdition = "";
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
  setIsLoading(t = !0) {
    return this.isLoading = t, this;
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
  showLoading() {
    return this.resource !== "" && !this.resourceLoaded;
  }
  hasToLoadResource() {
    return this.resource !== "" && !this.resourceLoaded && !this.isLoading;
  }
  setIsMultiple(t = !0) {
    return this.isMultiple = t, this;
  }
  setResource(t) {
    return this.resource = t, this;
  }
  setResourceData(t) {
    return this.resourceData = t, this;
  }
  async loadResource() {
    if (this.resourceLoaded)
      return this;
    if (!this.resource)
      return this;
    try {
      this.isLoading = !0;
      const t = await fe(this.resource, this.resourceData);
      this.options = t.data, this.isLoading = !1, this.resourceLoaded = !0;
    } catch {
      this.isLoading = !1;
    }
    return this;
  }
  setEditSlot(t) {
    return this.editSlot = t, this;
  }
  setValueSlot(t) {
    return this.valueSlot = t, this;
  }
  setMultipleDisplay(t) {
    return this.multipleDisplay = t, this;
  }
  setMultipleDisplayEdition(t) {
    return this.multipleDisplayEdition = t, this;
  }
}
const Je = (e, t, l = !0) => I(new w(e, t).setIsSortable(l)), qe = (e, t, l, n = !0) => I(new w(e, t).setIsSortable(n).defineAsLink(l)), Ge = (e, t, l, n = !0) => I(new w(e, t).setIsSortable(n).defineAsAction(l)), Pe = (e, t, l = !0) => I(new w(e, t).setIsSortable(l).defineAsText()), Qe = (e, t, l = !0) => I(new w(e, t).setIsSortable(l).defineAsEmail()), We = (e, t, l = !0) => I(new w(e, t).setIsSortable(l).defineAsTel()), Xe = (e, t, l = !0) => I(new w(e, t).setIsSortable(l).defineAsCheck()), Ye = (e, t, l = !0) => I(new w(e, t).setIsSortable(l).defineAsSwitch()), Ze = (e, t, l, n = !0) => I(new w(e, t).setIsSortable(n).defineAsSelect(l)), _e = (e, t, l = !0) => I(new w(e, t).setIsSortable(l).setIsHidden(!0)), _ = (e, t, l, n) => {
  if (!l)
    return 0;
  let u = e[l.key], a = t[l.key];
  if (n === "asc") {
    if (u > a)
      return 1;
    if (a > u)
      return -1;
  } else {
    if (u > a)
      return -1;
    if (a > u)
      return 1;
  }
  return 0;
}, U = (e, t, l) => e.formatter && typeof e.formatter == "function" ? e.formatter(t[e.key], t, e, l) : t[e.key], ye = (e, t, l) => {
  if (!e.colspan)
    return -1;
  let n = t;
  return l.forEach((u) => {
    let a = X(e, u);
    a > 0 && a < n && (n = a);
  }), n;
}, X = (e, t) => e.colspan === !1 ? !1 : typeof e.colspan == "function" ? e.colspan(t) : e.colspan, ve = (e, t, l) => {
  if (typeof e != "object" || !e.key || t.indexOf(e.key) > -1)
    return !1;
  let n = X(e, l);
  return typeof e.colspan > "u" ? !0 : (typeof e.colspan < "u" && (typeof e.colspan == "function" ? n = parseInt(e.colspan()) : n = parseInt(e.colspan)), n > 0);
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
}, ge = { name: "LktTableCell", inheritAttrs: !1 }, te = /* @__PURE__ */ F({
  ...ge,
  props: {
    modelValue: { type: Object, default: () => ({}) },
    column: { type: Object, default: () => ({}) },
    i: { type: [Number], default: 0 }
  },
  emits: ["edited"],
  setup(e, { emit: t }) {
    const l = t, n = e, u = C(n.modelValue), a = C(u.value[n.column.key]), y = C(null), S = C(n.column.showLoading());
    return D(a, () => {
      const s = JSON.parse(JSON.stringify(u.value));
      s[n.column.key] = a.value, l("edited", s, n.i);
    }), D(() => n.modelValue, (s) => {
      u.value = s, a.value = u.value[n.column.key];
    }), D(() => n.column, () => {
      n.column.resourceLoaded && oe(() => S.value = !1);
    }, { deep: !0 }), n.column.hasToLoadResource() && n.column.loadResource(), (s, r) => {
      const d = N("router-link"), g = N("lkt-field-text"), M = N("lkt-field-check"), R = N("lkt-field-switch"), K = N("lkt-loader"), B = N("lkt-field-select");
      return e.column.type === "link" ? (i(), k(d, {
        key: 0,
        to: e.column.getHref(u.value)
      }, {
        default: x(() => [
          Z(O(p(U)(e.column, u.value, e.i)), 1)
        ]),
        _: 1
      }, 8, ["to"])) : e.column.type === "action" ? (i(), h("a", {
        key: 1,
        href: "#",
        onClick: r[0] || (r[0] = (f) => e.column.doAction(u.value))
      }, O(p(U)(e.column, u.value, e.i)), 1)) : e.column.type === "text" ? (i(), k(g, {
        key: 2,
        "read-mode": !e.column.editable,
        ref: (f) => y.value = f,
        "edit-slot": e.column.editSlot,
        "value-slot": e.column.valueSlot,
        modelValue: a.value,
        "onUpdate:modelValue": r[1] || (r[1] = (f) => a.value = f)
      }, null, 8, ["read-mode", "edit-slot", "value-slot", "modelValue"])) : e.column.type === "email" ? (i(), k(g, {
        key: 3,
        "read-mode": !e.column.editable,
        ref: (f) => y.value = f,
        "edit-slot": e.column.editSlot,
        "value-slot": e.column.valueSlot,
        "is-email": "",
        modelValue: a.value,
        "onUpdate:modelValue": r[2] || (r[2] = (f) => a.value = f)
      }, null, 8, ["read-mode", "edit-slot", "value-slot", "modelValue"])) : e.column.type === "tel" ? (i(), k(g, {
        key: 4,
        "read-mode": !e.column.editable,
        ref: (f) => y.value = f,
        "edit-slot": e.column.editSlot,
        "value-slot": e.column.valueSlot,
        "is-tel": "",
        modelValue: a.value,
        "onUpdate:modelValue": r[3] || (r[3] = (f) => a.value = f)
      }, null, 8, ["read-mode", "edit-slot", "value-slot", "modelValue"])) : e.column.type === "check" ? (i(), k(M, {
        key: 5,
        "read-mode": !e.column.editable,
        ref: (f) => y.value = f,
        modelValue: a.value,
        "onUpdate:modelValue": r[4] || (r[4] = (f) => a.value = f)
      }, null, 8, ["read-mode", "modelValue"])) : e.column.type === "switch" ? (i(), k(R, {
        key: 6,
        "read-mode": !e.column.editable,
        ref: (f) => y.value = f,
        modelValue: a.value,
        "onUpdate:modelValue": r[5] || (r[5] = (f) => a.value = f)
      }, null, 8, ["read-mode", "modelValue"])) : e.column.type === "select" ? (i(), h(A, { key: 7 }, [
        S.value ? (i(), k(K, { key: 0 })) : (i(), k(B, {
          key: 1,
          "read-mode": !e.column.editable,
          ref: (f) => y.value = f,
          modelValue: a.value,
          "onUpdate:modelValue": r[6] || (r[6] = (f) => a.value = f),
          resource: e.column.resource,
          "resource-data": e.column.resourceData,
          options: e.column.options,
          multiple: e.column.isMultiple,
          "multiple-display": e.column.multipleDisplay,
          "multiple-display-edition": e.column.multipleDisplayEdition
        }, null, 8, ["read-mode", "modelValue", "resource", "resource-data", "options", "multiple", "multiple-display", "multiple-display-edition"]))
      ], 64)) : (i(), h(A, { key: 8 }, [
        Z(O(p(U)(e.column, u.value, e.i)), 1)
      ], 64));
    };
  }
}), Ce = ["data-i", "data-handle-drag"], pe = {
  key: 0,
  "data-role": "drag-indicator"
}, Se = {
  key: 1,
  "data-role": "invalid-drag-indicator"
}, Ve = ["data-column", "colspan", "title", "onClick"], Ae = { name: "LktTableRow", inheritAttrs: !1 }, ee = /* @__PURE__ */ F({
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
    const l = t, n = e, u = C(n.item), a = (s, r, d) => {
      l("click", s, W("", { item: r, column: d }));
    }, y = (s, r) => {
      l("show", s, W("", { i: r }));
    }, S = (s, r) => {
      u.value = s;
    };
    return D(() => n.item, (s) => u.value = s), D(u, () => l("edited", u.value, n.i)), (s, r) => (i(), h("tr", {
      "data-i": e.i,
      "data-handle-drag": e.isDraggable
    }, [
      e.sortable && e.isDraggable ? (i(), h("td", pe)) : e.sortable ? (i(), h("td", Se)) : E("", !0),
      e.displayHiddenColumnsIndicator ? (i(), h("td", {
        key: 2,
        onClick: r[0] || (r[0] = (d) => y(d, e.i)),
        "data-role": "show-more",
        class: ue(e.hiddenIsVisible ? "state-open" : "")
      }, null, 2)) : E("", !0),
      (i(!0), h(A, null, L(e.visibleColumns, (d) => (i(), h(A, null, [
        p(ve)(d, e.emptyColumns, e.item) ? (i(), h("td", {
          key: 0,
          "data-column": d.key,
          colspan: p(X)(d, e.item),
          title: p(U)(d, e.item, e.i),
          onClick: (g) => a(g, e.item, d)
        }, [
          s.$slots[d.key] ? H(s.$slots, d.key, {
            key: 0,
            value: e.item[d.key],
            item: e.item,
            column: d,
            i: e.i
          }) : e.item ? (i(), k(te, {
            key: 1,
            column: d,
            modelValue: u.value,
            "onUpdate:modelValue": r[1] || (r[1] = (g) => u.value = g),
            i: e.i,
            onEdited: S
          }, null, 8, ["column", "modelValue", "i"])) : E("", !0)
        ], 8, Ve)) : E("", !0)
      ], 64))), 256))
    ], 8, Ce));
  }
}), Ie = { "data-role": "hidden-row" }, we = ["colspan"], Le = ["data-column"], Ee = ["data-i"], $e = ["data-column", "title", "onClick"], De = { name: "LktHiddenRow", inheritAttrs: !1 }, Te = /* @__PURE__ */ F({
  ...De,
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
    const l = t, n = e, u = C(n.modelValue), a = (y, S, s) => {
      l("click", y, W("", { item: S, column: s }));
    };
    return D(() => n.modelValue, (y) => u.value = y), D(u, () => l("update:modelValue", u.value)), (y, S) => se((i(), h("tr", Ie, [
      $("td", { colspan: e.hiddenColumnsColSpan }, [
        $("table", null, [
          $("tr", null, [
            (i(!0), h(A, null, L(e.hiddenColumns, (s) => (i(), h("th", {
              "data-column": s.key
            }, [
              $("div", null, O(s.label), 1)
            ], 8, Le))), 256))
          ]),
          $("tr", { "data-i": e.i }, [
            (i(!0), h(A, null, L(e.hiddenColumns, (s, r) => (i(), h("td", {
              "data-column": s.key,
              title: p(U)(s, u.value, r),
              onClick: (d) => a(d, u.value, s)
            }, [
              y.$slots[s.key] ? H(y.$slots, s.key, {
                key: 0,
                value: u.value[s.key],
                item: u.value,
                column: s,
                i: r
              }) : (i(), k(te, {
                key: 1,
                column: s,
                modelValue: u.value,
                "onUpdate:modelValue": S[0] || (S[0] = (d) => u.value = d),
                i: r
              }, null, 8, ["column", "modelValue", "i"]))
            ], 8, $e))), 256))
          ], 8, Ee)
        ])
      ], 8, we)
    ], 512)), [
      [re, e.hiddenIsVisible]
    ]);
  }
}), Be = ["data-sortable"], Ne = {
  key: 0,
  "data-role": "drag-indicator"
}, He = { key: 1 }, Re = ["data-column", "data-sortable", "data-sort", "colspan", "title", "onClick"], xe = { key: 1 }, Oe = {
  key: 1,
  class: "lkt-empty-table"
}, Ue = /* @__PURE__ */ F({
  __name: "LktTable",
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
    const n = l, u = de(), a = e, y = {}, S = C(typeof a.sorter == "function" ? a.sorter : _), s = C(ke(a.columns)), r = C("asc"), d = C(a.modelValue), g = C(y), M = C(!1), R = he(12), K = T(() => d.value.length > 0), B = T(() => {
      if (!a.hideEmptyColumns)
        return [];
      let o = [];
      return a.columns.forEach((c) => {
        let m = c.key, v = !1;
        d.value.forEach((b) => {
          if (typeof b.checkEmpty == "function")
            return b.checkEmpty(b);
          b[m] && (v = !0);
        }), v || o.push(m);
      }), o;
    }), f = T(() => a.columns.filter((o) => !o.hidden)), j = T(() => a.columns.filter((o) => o.hidden)), le = T(() => {
      let o = f.value.length + 1;
      return a.sortable && ++o, o;
    }), z = T(() => j.value.length > 0 && !a.sortable), ae = T(() => a.columns.map((o) => o.key)), J = T(() => {
      let o = [];
      for (let c in u)
        ae.value.indexOf(c) !== -1 && o.push(c);
      return o;
    }), ie = (o) => {
      let c = o.target;
      if (typeof c.dataset.column > "u")
        do
          c = c.parentNode;
        while (typeof c.dataset.column > "u" && c.tagName !== "TABLE" && c.tagName !== "body");
      if (c.tagName === "TD" && (c = c.parentNode, c = c.dataset.i, typeof c < "u"))
        return d.value[c];
    }, q = (o) => g.value["tr_" + o] === !0, Y = (o) => {
      o && o.sortable && (d.value = d.value.sort((c, m) => S.value(c, m, o, r.value)), r.value = r.value === "asc" ? "desc" : "asc", s.value = o.key, n("sort", [s.value, r.value]));
    }, G = (o, c) => {
      n("click", o, c);
    }, P = (o, c) => {
      let m = "tr_" + c.value.i;
      g.value[m] = typeof g.value[m] > "u" ? !0 : !g.value[m];
    }, ne = (o, c) => {
      d.value[c] = o;
    };
    return ce(() => {
      Y(be(a.columns, s.value));
    }), D(() => a.modelValue, (o) => d.value = o), D(d, (o) => {
      n("update:modelValue", o);
    }), t({ getItemByEvent: ie }), (o, c) => K.value ? (i(), h("div", {
      key: 0,
      class: "lkt-table",
      "data-sortable": e.sortable
    }, [
      $("table", null, [
        $("thead", null, [
          $("tr", null, [
            e.sortable ? (i(), h("th", Ne)) : E("", !0),
            z.value ? (i(), h("th", He)) : E("", !0),
            (i(!0), h(A, null, L(f.value, (m) => (i(), h(A, null, [
              B.value.indexOf(m.key) === -1 ? (i(), h("th", {
                key: 0,
                "data-column": m.key,
                "data-sortable": m.sortable === !0,
                "data-sort": m.sortable === !0 && s.value === m.key ? r.value : "",
                colspan: p(ye)(m, e.columns.length, d.value),
                title: m.label,
                onClick: (v) => Y(m)
              }, [
                $("div", null, O(m.label), 1)
              ], 8, Re)) : E("", !0)
            ], 64))), 256))
          ])
        ]),
        e.sortable ? (i(), k(p(me), {
          key: 0,
          modelValue: d.value,
          "onUpdate:modelValue": c[0] || (c[0] = (m) => d.value = m),
          move: e.checkValidDrag,
          itemKey: e.draggableItemKey,
          onStart: c[1] || (c[1] = (m) => M.value = !0),
          onEnd: c[2] || (c[2] = (m) => M.value = !1),
          tag: "tbody",
          class: "lkt-sortable-table",
          handle: "[data-handle-drag]"
        }, {
          item: x(({ element: m, index: v }) => [
            (i(), k(ee, {
              key: p(R) + "-" + v,
              i: v,
              item: m,
              "display-hidden-columns-indicator": z.value,
              "is-draggable": e.draggableChecker ? e.draggableChecker(m) : !0,
              sortable: e.sortable,
              "visible-columns": f.value,
              "empty-columns": B.value,
              "hidden-is-visible": q(v),
              onClick: G,
              onShow: P
            }, Q({ _: 2 }, [
              L(J.value, (b) => ({
                name: b,
                fn: x((V) => [
                  H(o.$slots, b, {
                    item: V.item,
                    value: V.value,
                    column: V.column
                  })
                ])
              }))
            ]), 1032, ["i", "item", "display-hidden-columns-indicator", "is-draggable", "sortable", "visible-columns", "empty-columns", "hidden-is-visible"]))
          ]),
          _: 3
        }, 8, ["modelValue", "move", "itemKey"])) : (i(), h("tbody", xe, [
          (i(!0), h(A, null, L(d.value, (m, v) => (i(), k(ee, {
            key: p(R) + "-" + v,
            i: v,
            item: m,
            "display-hidden-columns-indicator": z.value,
            "is-draggable": e.draggableChecker ? e.draggableChecker(m) : !0,
            sortable: e.sortable,
            "visible-columns": f.value,
            "empty-columns": B.value,
            "hidden-is-visible": q(v),
            onClick: G,
            onShow: P,
            onEdited: ne
          }, Q({ _: 2 }, [
            L(J.value, (b) => ({
              name: b,
              fn: x((V) => [
                H(o.$slots, b, {
                  item: V.item,
                  value: V.value,
                  column: V.column
                })
              ])
            }))
          ]), 1032, ["i", "item", "display-hidden-columns-indicator", "is-draggable", "sortable", "visible-columns", "empty-columns", "hidden-is-visible"]))), 128)),
          j.value.length > 0 ? (i(!0), h(A, { key: 0 }, L(d.value, (m, v) => (i(), k(Te, {
            key: p(R) + "-" + v,
            i: v,
            item: m,
            "hidden-columns": j.value,
            "hidden-columns-col-span": le.value,
            "is-draggable": e.draggableChecker ? e.draggableChecker(m) : !0,
            sortable: e.sortable,
            "visible-columns": f.value,
            "empty-columns": B.value,
            "hidden-is-visible": q(v),
            onClick: G,
            onShow: P
          }, Q({ _: 2 }, [
            L(J.value, (b) => ({
              name: b,
              fn: x((V) => [
                H(o.$slots, b, {
                  item: V.item,
                  value: V.value,
                  column: V.column
                })
              ])
            }))
          ]), 1032, ["i", "item", "hidden-columns", "hidden-columns-col-span", "is-draggable", "sortable", "visible-columns", "empty-columns", "hidden-is-visible"]))), 128)) : E("", !0)
        ]))
      ])
    ], 8, Be)) : o.$slots["no-items"] ? (i(), h("div", Oe, [
      H(o.$slots, "no-items")
    ])) : E("", !0);
  }
}), et = {
  install: (e) => {
    e.component("lkt-table") === void 0 && e.component("lkt-table", Ue);
  }
};
export {
  w as LktTableColumn,
  Ge as createActionColumn,
  Xe as createCheckColumn,
  Je as createColumn,
  Qe as createEmailColumn,
  _e as createHiddenColumn,
  qe as createLinkColumn,
  Ze as createSelectColumn,
  Ye as createSwitchColumn,
  We as createTelColumn,
  Pe as createTextColumn,
  et as default
};
