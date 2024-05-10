import { reactive as I, defineComponent as F, ref as p, watch as $, nextTick as se, resolveComponent as B, openBlock as i, createBlock as k, withCtx as R, createTextVNode as Z, toDisplayString as x, unref as C, createElementBlock as f, Fragment as D, createCommentVNode as w, normalizeClass as oe, renderList as E, renderSlot as N, withDirectives as ue, createElementVNode as L, vShow as re, useSlots as de, computed as T, onMounted as ce, createSlots as Q } from "vue";
import me from "vuedraggable";
import { httpCall as he } from "lkt-http-client";
import { createLktEvent as W } from "lkt-events";
import { generateRandomString as fe } from "lkt-string-tools";
class A {
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
      const t = await he(this.resource, this.resourceData);
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
    return this.setIsMultiple(!0), this.multipleDisplay = t, this;
  }
  setMultipleDisplayToList() {
    return this.setIsMultiple(!0), this.multipleDisplay = "list", this;
  }
  setMultipleDisplayToInline() {
    return this.setIsMultiple(!0), this.multipleDisplay = "inline", this;
  }
  setMultipleDisplayToCount() {
    return this.setIsMultiple(!0), this.multipleDisplay = "count", this;
  }
  setMultipleDisplayEdition(t) {
    return this.setIsMultiple(!0), this.multipleDisplayEdition = t, this;
  }
  setMultipleDisplayEditionToList() {
    return this.setIsMultiple(!0), this.multipleDisplayEdition = "list", this;
  }
  setMultipleDisplayEditionToInline() {
    return this.setIsMultiple(!0), this.multipleDisplayEdition = "inline", this;
  }
  setSlotData(t) {
    return this.slotData = t, this;
  }
}
const Je = (e, t, l = !0) => I(new A(e, t).setIsSortable(l)), qe = (e, t, l, n = !0) => I(new A(e, t).setIsSortable(n).defineAsLink(l)), Ge = (e, t, l, n = !0) => I(new A(e, t).setIsSortable(n).defineAsAction(l)), Pe = (e, t, l = !0) => I(new A(e, t).setIsSortable(l).defineAsText()), Qe = (e, t, l = !0) => I(new A(e, t).setIsSortable(l).defineAsEmail()), We = (e, t, l = !0) => I(new A(e, t).setIsSortable(l).defineAsTel()), Xe = (e, t, l = !0) => I(new A(e, t).setIsSortable(l).defineAsCheck()), Ye = (e, t, l = !0) => I(new A(e, t).setIsSortable(l).defineAsSwitch()), Ze = (e, t, l, n = !0) => I(new A(e, t).setIsSortable(n).defineAsSelect(l)), _e = (e, t, l = !0) => I(new A(e, t).setIsSortable(l).setIsHidden(!0)), _ = (e, t, l, n) => {
  if (!l)
    return 0;
  let o = e[l.key], a = t[l.key];
  if (n === "asc") {
    if (o > a)
      return 1;
    if (a > o)
      return -1;
  } else {
    if (o > a)
      return -1;
    if (a > o)
      return 1;
  }
  return 0;
}, O = (e, t, l) => e.formatter && typeof e.formatter == "function" ? e.formatter(t[e.key], t, e, l) : t[e.key], ye = (e, t, l) => {
  if (!e.colspan)
    return -1;
  let n = t;
  return l.forEach((o) => {
    let a = X(e, o);
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
    const l = t, n = e, o = p(n.modelValue), a = p(o.value[n.column.key]), y = p(null), S = p(n.column.showLoading());
    return $(a, () => {
      const u = JSON.parse(JSON.stringify(o.value));
      u[n.column.key] = a.value, l("edited", u, n.i);
    }), $(() => n.modelValue, (u) => {
      o.value = u, a.value = o.value[n.column.key];
    }), $(() => n.column, () => {
      n.column.resourceLoaded && se(() => S.value = !1);
    }, { deep: !0 }), n.column.hasToLoadResource() && n.column.loadResource(), (u, r) => {
      const d = B("router-link"), g = B("lkt-field-text"), U = B("lkt-field-check"), H = B("lkt-field-switch"), K = B("lkt-loader"), M = B("lkt-field-select");
      return e.column.type === "link" ? (i(), k(d, {
        key: 0,
        to: e.column.getHref(o.value)
      }, {
        default: R(() => [
          Z(x(C(O)(e.column, o.value, e.i)), 1)
        ]),
        _: 1
      }, 8, ["to"])) : e.column.type === "action" ? (i(), f("a", {
        key: 1,
        href: "#",
        onClick: r[0] || (r[0] = (h) => e.column.doAction(o.value))
      }, x(C(O)(e.column, o.value, e.i)), 1)) : e.column.type === "text" ? (i(), k(g, {
        key: 2,
        "read-mode": !e.column.editable,
        ref: (h) => y.value = h,
        "edit-slot": e.column.editSlot,
        "value-slot": e.column.valueSlot,
        "slot-data": e.column.slotData,
        modelValue: a.value,
        "onUpdate:modelValue": r[1] || (r[1] = (h) => a.value = h)
      }, null, 8, ["read-mode", "edit-slot", "value-slot", "slot-data", "modelValue"])) : e.column.type === "email" ? (i(), k(g, {
        key: 3,
        "read-mode": !e.column.editable,
        ref: (h) => y.value = h,
        "edit-slot": e.column.editSlot,
        "value-slot": e.column.valueSlot,
        "slot-data": e.column.slotData,
        "is-email": "",
        modelValue: a.value,
        "onUpdate:modelValue": r[2] || (r[2] = (h) => a.value = h)
      }, null, 8, ["read-mode", "edit-slot", "value-slot", "slot-data", "modelValue"])) : e.column.type === "tel" ? (i(), k(g, {
        key: 4,
        "read-mode": !e.column.editable,
        ref: (h) => y.value = h,
        "edit-slot": e.column.editSlot,
        "value-slot": e.column.valueSlot,
        "slot-data": e.column.slotData,
        "is-tel": "",
        modelValue: a.value,
        "onUpdate:modelValue": r[3] || (r[3] = (h) => a.value = h)
      }, null, 8, ["read-mode", "edit-slot", "value-slot", "slot-data", "modelValue"])) : e.column.type === "check" ? (i(), k(U, {
        key: 5,
        "read-mode": !e.column.editable,
        ref: (h) => y.value = h,
        modelValue: a.value,
        "onUpdate:modelValue": r[4] || (r[4] = (h) => a.value = h)
      }, null, 8, ["read-mode", "modelValue"])) : e.column.type === "switch" ? (i(), k(H, {
        key: 6,
        "read-mode": !e.column.editable,
        ref: (h) => y.value = h,
        modelValue: a.value,
        "onUpdate:modelValue": r[5] || (r[5] = (h) => a.value = h)
      }, null, 8, ["read-mode", "modelValue"])) : e.column.type === "select" ? (i(), f(D, { key: 7 }, [
        S.value ? (i(), k(K, { key: 0 })) : (i(), k(M, {
          key: 1,
          "read-mode": !e.column.editable,
          ref: (h) => y.value = h,
          modelValue: a.value,
          "onUpdate:modelValue": r[6] || (r[6] = (h) => a.value = h),
          "slot-data": e.column.slotData,
          resource: e.column.resource,
          "resource-data": e.column.resourceData,
          options: e.column.options,
          multiple: e.column.isMultiple,
          "multiple-display": e.column.multipleDisplay,
          "multiple-display-edition": e.column.multipleDisplayEdition
        }, null, 8, ["read-mode", "modelValue", "slot-data", "resource", "resource-data", "options", "multiple", "multiple-display", "multiple-display-edition"]))
      ], 64)) : (i(), f(D, { key: 8 }, [
        Z(x(C(O)(e.column, o.value, e.i)), 1)
      ], 64));
    };
  }
}), pe = ["data-i", "data-handle-drag"], Ce = {
  key: 0,
  "data-role": "drag-indicator"
}, Se = {
  key: 1,
  "data-role": "invalid-drag-indicator"
}, Ve = ["data-column", "colspan", "title", "onClick"], De = { name: "LktTableRow", inheritAttrs: !1 }, ee = /* @__PURE__ */ F({
  ...De,
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
    const l = t, n = e, o = p(n.item), a = (u, r, d) => {
      l("click", u, W("", { item: r, column: d }));
    }, y = (u, r) => {
      l("show", u, W("", { i: r }));
    }, S = (u, r) => {
      o.value = u;
    };
    return $(() => n.item, (u) => o.value = u), $(o, () => l("edited", o.value, n.i)), (u, r) => (i(), f("tr", {
      "data-i": e.i,
      "data-handle-drag": e.isDraggable
    }, [
      e.sortable && e.isDraggable ? (i(), f("td", Ce)) : e.sortable ? (i(), f("td", Se)) : w("", !0),
      e.displayHiddenColumnsIndicator ? (i(), f("td", {
        key: 2,
        onClick: r[0] || (r[0] = (d) => y(d, e.i)),
        "data-role": "show-more",
        class: oe(e.hiddenIsVisible ? "state-open" : "")
      }, null, 2)) : w("", !0),
      (i(!0), f(D, null, E(e.visibleColumns, (d) => (i(), f(D, null, [
        C(ve)(d, e.emptyColumns, e.item) ? (i(), f("td", {
          key: 0,
          "data-column": d.key,
          colspan: C(X)(d, e.item),
          title: C(O)(d, e.item, e.i),
          onClick: (g) => a(g, e.item, d)
        }, [
          u.$slots[d.key] ? N(u.$slots, d.key, {
            key: 0,
            value: e.item[d.key],
            item: e.item,
            column: d,
            i: e.i
          }) : e.item ? (i(), k(te, {
            key: 1,
            column: d,
            modelValue: o.value,
            "onUpdate:modelValue": r[1] || (r[1] = (g) => o.value = g),
            i: e.i,
            onEdited: S
          }, null, 8, ["column", "modelValue", "i"])) : w("", !0)
        ], 8, Ve)) : w("", !0)
      ], 64))), 256))
    ], 8, pe));
  }
}), Ie = { "data-role": "hidden-row" }, Ae = ["colspan"], Ee = ["data-column"], we = ["data-i"], Le = ["data-column", "title", "onClick"], $e = { name: "LktHiddenRow", inheritAttrs: !1 }, Te = /* @__PURE__ */ F({
  ...$e,
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
    const l = t, n = e, o = p(n.modelValue), a = (y, S, u) => {
      l("click", y, W("", { item: S, column: u }));
    };
    return $(() => n.modelValue, (y) => o.value = y), $(o, () => l("update:modelValue", o.value)), (y, S) => ue((i(), f("tr", Ie, [
      L("td", { colspan: e.hiddenColumnsColSpan }, [
        L("table", null, [
          L("tr", null, [
            (i(!0), f(D, null, E(e.hiddenColumns, (u) => (i(), f("th", {
              "data-column": u.key
            }, [
              L("div", null, x(u.label), 1)
            ], 8, Ee))), 256))
          ]),
          L("tr", { "data-i": e.i }, [
            (i(!0), f(D, null, E(e.hiddenColumns, (u, r) => (i(), f("td", {
              "data-column": u.key,
              title: C(O)(u, o.value, r),
              onClick: (d) => a(d, o.value, u)
            }, [
              y.$slots[u.key] ? N(y.$slots, u.key, {
                key: 0,
                value: o.value[u.key],
                item: o.value,
                column: u,
                i: r
              }) : (i(), k(te, {
                key: 1,
                column: u,
                modelValue: o.value,
                "onUpdate:modelValue": S[0] || (S[0] = (d) => o.value = d),
                i: r
              }, null, 8, ["column", "modelValue", "i"]))
            ], 8, Le))), 256))
          ], 8, we)
        ])
      ], 8, Ae)
    ], 512)), [
      [re, e.hiddenIsVisible]
    ]);
  }
}), Me = ["data-sortable"], Be = {
  key: 0,
  "data-role": "drag-indicator"
}, Ne = { key: 1 }, He = ["data-column", "data-sortable", "data-sort", "colspan", "title", "onClick"], Re = { key: 1 }, xe = {
  key: 1,
  class: "lkt-empty-table"
}, Oe = /* @__PURE__ */ F({
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
    const n = l, o = de(), a = e, y = {}, S = p(typeof a.sorter == "function" ? a.sorter : _), u = p(ke(a.columns)), r = p("asc"), d = p(a.modelValue), g = p(y), U = p(!1), H = fe(12), K = T(() => d.value.length > 0), M = T(() => {
      if (!a.hideEmptyColumns)
        return [];
      let s = [];
      return a.columns.forEach((c) => {
        let m = c.key, v = !1;
        d.value.forEach((b) => {
          if (typeof b.checkEmpty == "function")
            return b.checkEmpty(b);
          b[m] && (v = !0);
        }), v || s.push(m);
      }), s;
    }), h = T(() => a.columns.filter((s) => !s.hidden)), j = T(() => a.columns.filter((s) => s.hidden)), le = T(() => {
      let s = h.value.length + 1;
      return a.sortable && ++s, s;
    }), z = T(() => j.value.length > 0 && !a.sortable), ae = T(() => a.columns.map((s) => s.key)), J = T(() => {
      let s = [];
      for (let c in o)
        ae.value.indexOf(c) !== -1 && s.push(c);
      return s;
    }), ie = (s) => {
      let c = s.target;
      if (typeof c.dataset.column > "u")
        do
          c = c.parentNode;
        while (typeof c.dataset.column > "u" && c.tagName !== "TABLE" && c.tagName !== "body");
      if (c.tagName === "TD" && (c = c.parentNode, c = c.dataset.i, typeof c < "u"))
        return d.value[c];
    }, q = (s) => g.value["tr_" + s] === !0, Y = (s) => {
      s && s.sortable && (d.value = d.value.sort((c, m) => S.value(c, m, s, r.value)), r.value = r.value === "asc" ? "desc" : "asc", u.value = s.key, n("sort", [u.value, r.value]));
    }, G = (s, c) => {
      n("click", s, c);
    }, P = (s, c) => {
      let m = "tr_" + c.value.i;
      g.value[m] = typeof g.value[m] > "u" ? !0 : !g.value[m];
    }, ne = (s, c) => {
      d.value[c] = s;
    };
    return ce(() => {
      Y(be(a.columns, u.value));
    }), $(() => a.modelValue, (s) => d.value = s), $(d, (s) => {
      n("update:modelValue", s);
    }), t({ getItemByEvent: ie }), (s, c) => K.value ? (i(), f("div", {
      key: 0,
      class: "lkt-table",
      "data-sortable": e.sortable
    }, [
      L("table", null, [
        L("thead", null, [
          L("tr", null, [
            e.sortable ? (i(), f("th", Be)) : w("", !0),
            z.value ? (i(), f("th", Ne)) : w("", !0),
            (i(!0), f(D, null, E(h.value, (m) => (i(), f(D, null, [
              M.value.indexOf(m.key) === -1 ? (i(), f("th", {
                key: 0,
                "data-column": m.key,
                "data-sortable": m.sortable === !0,
                "data-sort": m.sortable === !0 && u.value === m.key ? r.value : "",
                colspan: C(ye)(m, e.columns.length, d.value),
                title: m.label,
                onClick: (v) => Y(m)
              }, [
                L("div", null, x(m.label), 1)
              ], 8, He)) : w("", !0)
            ], 64))), 256))
          ])
        ]),
        e.sortable ? (i(), k(C(me), {
          key: 0,
          modelValue: d.value,
          "onUpdate:modelValue": c[0] || (c[0] = (m) => d.value = m),
          move: e.checkValidDrag,
          itemKey: e.draggableItemKey,
          onStart: c[1] || (c[1] = (m) => U.value = !0),
          onEnd: c[2] || (c[2] = (m) => U.value = !1),
          tag: "tbody",
          class: "lkt-sortable-table",
          handle: "[data-handle-drag]"
        }, {
          item: R(({ element: m, index: v }) => [
            (i(), k(ee, {
              key: C(H) + "-" + v,
              i: v,
              item: m,
              "display-hidden-columns-indicator": z.value,
              "is-draggable": e.draggableChecker ? e.draggableChecker(m) : !0,
              sortable: e.sortable,
              "visible-columns": h.value,
              "empty-columns": M.value,
              "hidden-is-visible": q(v),
              onClick: G,
              onShow: P
            }, Q({ _: 2 }, [
              E(J.value, (b) => ({
                name: b,
                fn: R((V) => [
                  N(s.$slots, b, {
                    item: V.item,
                    value: V.value,
                    column: V.column
                  })
                ])
              }))
            ]), 1032, ["i", "item", "display-hidden-columns-indicator", "is-draggable", "sortable", "visible-columns", "empty-columns", "hidden-is-visible"]))
          ]),
          _: 3
        }, 8, ["modelValue", "move", "itemKey"])) : (i(), f("tbody", Re, [
          (i(!0), f(D, null, E(d.value, (m, v) => (i(), k(ee, {
            key: C(H) + "-" + v,
            i: v,
            item: m,
            "display-hidden-columns-indicator": z.value,
            "is-draggable": e.draggableChecker ? e.draggableChecker(m) : !0,
            sortable: e.sortable,
            "visible-columns": h.value,
            "empty-columns": M.value,
            "hidden-is-visible": q(v),
            onClick: G,
            onShow: P,
            onEdited: ne
          }, Q({ _: 2 }, [
            E(J.value, (b) => ({
              name: b,
              fn: R((V) => [
                N(s.$slots, b, {
                  item: V.item,
                  value: V.value,
                  column: V.column
                })
              ])
            }))
          ]), 1032, ["i", "item", "display-hidden-columns-indicator", "is-draggable", "sortable", "visible-columns", "empty-columns", "hidden-is-visible"]))), 128)),
          j.value.length > 0 ? (i(!0), f(D, { key: 0 }, E(d.value, (m, v) => (i(), k(Te, {
            key: C(H) + "-" + v,
            i: v,
            item: m,
            "hidden-columns": j.value,
            "hidden-columns-col-span": le.value,
            "is-draggable": e.draggableChecker ? e.draggableChecker(m) : !0,
            sortable: e.sortable,
            "visible-columns": h.value,
            "empty-columns": M.value,
            "hidden-is-visible": q(v),
            onClick: G,
            onShow: P
          }, Q({ _: 2 }, [
            E(J.value, (b) => ({
              name: b,
              fn: R((V) => [
                N(s.$slots, b, {
                  item: V.item,
                  value: V.value,
                  column: V.column
                })
              ])
            }))
          ]), 1032, ["i", "item", "hidden-columns", "hidden-columns-col-span", "is-draggable", "sortable", "visible-columns", "empty-columns", "hidden-is-visible"]))), 128)) : w("", !0)
        ]))
      ])
    ], 8, Me)) : s.$slots["no-items"] ? (i(), f("div", xe, [
      N(s.$slots, "no-items")
    ])) : w("", !0);
  }
}), et = {
  install: (e) => {
    e.component("lkt-table") === void 0 && e.component("lkt-table", Oe);
  }
};
export {
  A as LktTableColumn,
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
