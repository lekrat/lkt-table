import { reactive as A, defineComponent as F, ref as g, watch as D, nextTick as oe, computed as w, resolveComponent as R, openBlock as u, createBlock as b, withCtx as x, createTextVNode as ee, toDisplayString as K, unref as C, createElementBlock as f, Fragment as I, createCommentVNode as T, normalizeClass as re, renderList as $, renderSlot as B, withDirectives as de, createElementVNode as M, vShow as ce, useSlots as me, onMounted as he, createSlots as W } from "vue";
import fe from "vuedraggable";
import { httpCall as ye } from "lkt-http-client";
import { createLktEvent as X } from "lkt-events";
import { generateRandomString as ve } from "lkt-string-tools";
class L {
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
  setResourceSlot(t) {
    return this.resourceSlot = t, this;
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
      const t = await ye(this.resource, this.resourceData);
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
  setAutoLoadSelectOptions(t = !0, l = "") {
    return this.autoLoadSelectOptions = t, this.autoLoadSelectOptionsKey = l, this;
  }
  setTagMode(t = !0) {
    return this.tags = t, this;
  }
  setOptions(t = []) {
    return this.options = t, this;
  }
}
const Ge = (e, t, l = !0) => A(new L(e, t).setIsSortable(l)), Pe = (e, t, l, s = !0) => A(new L(e, t).setIsSortable(s).defineAsLink(l)), Qe = (e, t, l, s = !0) => A(new L(e, t).setIsSortable(s).defineAsAction(l)), We = (e, t, l = !0) => A(new L(e, t).setIsSortable(l).defineAsText()), Xe = (e, t, l = !0) => A(new L(e, t).setIsSortable(l).defineAsEmail()), Ye = (e, t, l = !0) => A(new L(e, t).setIsSortable(l).defineAsTel()), Ze = (e, t, l = !0) => A(new L(e, t).setIsSortable(l).defineAsCheck()), _e = (e, t, l = !0) => A(new L(e, t).setIsSortable(l).defineAsSwitch()), et = (e, t, l, s = !0) => A(new L(e, t).setIsSortable(s).defineAsSelect(l)), tt = (e, t, l = !0) => A(new L(e, t).setIsSortable(l).setIsHidden(!0)), te = (e, t, l, s) => {
  if (!l)
    return 0;
  let o = e[l.key], n = t[l.key];
  if (s === "asc") {
    if (o > n)
      return 1;
    if (n > o)
      return -1;
  } else {
    if (o > n)
      return -1;
    if (n > o)
      return 1;
  }
  return 0;
}, U = (e, t, l) => e.formatter && typeof e.formatter == "function" ? e.formatter(t[e.key], t, e, l) : t[e.key], ke = (e, t, l) => {
  if (!e.colspan)
    return -1;
  let s = t;
  return l.forEach((o) => {
    let n = Y(e, o);
    n > 0 && n < s && (s = n);
  }), s;
}, Y = (e, t) => e.colspan === !1 ? !1 : typeof e.colspan == "function" ? e.colspan(t) : e.colspan, be = (e, t, l) => {
  if (typeof e != "object" || !e.key || t.indexOf(e.key) > -1)
    return !1;
  let s = Y(e, l);
  return typeof e.colspan > "u" ? !0 : (typeof e.colspan < "u" && (typeof e.colspan == "function" ? s = parseInt(e.colspan()) : s = parseInt(e.colspan)), s > 0);
}, pe = (e = []) => {
  if (e.length > 0) {
    for (let t = 0; t < e.length; ++t)
      if (e[t].sortable)
        return e[t].key;
  }
  return "";
}, ge = (e, t) => {
  if (e.length > 0) {
    for (let l = 0; l < e.length; ++l)
      if (e[l].key === t)
        return e[l];
  }
  return null;
}, Ce = { name: "LktTableCell", inheritAttrs: !1 }, ae = /* @__PURE__ */ F({
  ...Ce,
  props: {
    modelValue: { type: Object, default: () => ({}) },
    column: { type: Object, default: () => ({}) },
    i: { type: [Number], default: 0 }
  },
  emits: ["edited"],
  setup(e, { emit: t }) {
    const l = t, s = e, o = g(s.modelValue), n = g(o.value[s.column.key]), k = g(null), S = g(s.column.showLoading());
    D(n, () => {
      const h = JSON.parse(JSON.stringify(o.value));
      h[s.column.key] = n.value, l("edited", h, s.i);
    }), D(() => s.modelValue, (h) => {
      o.value = h, n.value = o.value[s.column.key];
    }), D(() => s.column, () => {
      s.column.resourceLoaded && oe(() => S.value = !1);
    }, { deep: !0 }), s.column.hasToLoadResource() && s.column.loadResource();
    const c = w(() => ({ ...s.column.slotData, item: o.value }));
    return (h, a) => {
      const V = R("router-link"), O = R("lkt-field-text"), E = R("lkt-field-switch"), N = R("lkt-loader"), j = R("lkt-field-select");
      return e.column.type === "link" ? (u(), b(V, {
        key: 0,
        to: e.column.getHref(o.value)
      }, {
        default: x(() => [
          ee(K(C(U)(e.column, o.value, e.i)), 1)
        ]),
        _: 1
      }, 8, ["to"])) : e.column.type === "action" ? (u(), f("a", {
        key: 1,
        href: "#",
        onClick: a[0] || (a[0] = (m) => e.column.doAction(o.value))
      }, K(C(U)(e.column, o.value, e.i)), 1)) : e.column.type === "text" ? (u(), b(O, {
        key: 2,
        "read-mode": !e.column.editable,
        ref: (m) => k.value = m,
        "edit-slot": e.column.editSlot,
        "value-slot": e.column.valueSlot,
        "slot-data": c.value,
        modelValue: n.value,
        "onUpdate:modelValue": a[1] || (a[1] = (m) => n.value = m)
      }, null, 8, ["read-mode", "edit-slot", "value-slot", "slot-data", "modelValue"])) : e.column.type === "email" ? (u(), b(O, {
        key: 3,
        "read-mode": !e.column.editable,
        ref: (m) => k.value = m,
        "edit-slot": e.column.editSlot,
        "value-slot": e.column.valueSlot,
        "slot-data": c.value,
        "is-email": "",
        modelValue: n.value,
        "onUpdate:modelValue": a[2] || (a[2] = (m) => n.value = m)
      }, null, 8, ["read-mode", "edit-slot", "value-slot", "slot-data", "modelValue"])) : e.column.type === "tel" ? (u(), b(O, {
        key: 4,
        "read-mode": !e.column.editable,
        ref: (m) => k.value = m,
        "edit-slot": e.column.editSlot,
        "value-slot": e.column.valueSlot,
        "slot-data": c.value,
        "is-tel": "",
        modelValue: n.value,
        "onUpdate:modelValue": a[3] || (a[3] = (m) => n.value = m)
      }, null, 8, ["read-mode", "edit-slot", "value-slot", "slot-data", "modelValue"])) : e.column.type === "check" ? (u(), b(E, {
        key: 5,
        "is-check": "",
        "read-mode": !e.column.editable,
        ref: (m) => k.value = m,
        modelValue: n.value,
        "onUpdate:modelValue": a[4] || (a[4] = (m) => n.value = m)
      }, null, 8, ["read-mode", "modelValue"])) : e.column.type === "switch" ? (u(), b(E, {
        key: 6,
        "read-mode": !e.column.editable,
        ref: (m) => k.value = m,
        modelValue: n.value,
        "onUpdate:modelValue": a[5] || (a[5] = (m) => n.value = m)
      }, null, 8, ["read-mode", "modelValue"])) : e.column.type === "select" ? (u(), f(I, { key: 7 }, [
        S.value ? (u(), b(N, { key: 0 })) : (u(), b(j, {
          key: 1,
          "read-mode": !e.column.editable,
          ref: (m) => k.value = m,
          modelValue: n.value,
          "onUpdate:modelValue": a[6] || (a[6] = (m) => n.value = m),
          "slot-data": c.value,
          resource: e.column.resource,
          "use-resource-slot": e.column.resourceSlot ? e.column.resourceSlot : e.column.resource,
          "resource-data": e.column.resourceData,
          options: e.column.options,
          multiple: e.column.isMultiple,
          tags: e.column.tags,
          "multiple-display": e.column.multipleDisplay,
          "multiple-display-edition": e.column.multipleDisplayEdition
        }, null, 8, ["read-mode", "modelValue", "slot-data", "resource", "use-resource-slot", "resource-data", "options", "multiple", "tags", "multiple-display", "multiple-display-edition"]))
      ], 64)) : (u(), f(I, { key: 8 }, [
        ee(K(C(U)(e.column, o.value, e.i)), 1)
      ], 64));
    };
  }
}), Se = ["data-i", "data-handle-drag"], Ve = {
  key: 0,
  "data-role": "drag-indicator"
}, Ie = {
  key: 1,
  "data-role": "invalid-drag-indicator"
}, De = ["data-column", "colspan", "title", "onClick"], Ae = { name: "LktTableRow", inheritAttrs: !1 }, le = /* @__PURE__ */ F({
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
    const l = t, s = e, o = g(s.item), n = (c, h, a) => {
      l("click", c, X("", { item: h, column: a }));
    }, k = (c, h) => {
      l("show", c, X("", { i: h }));
    }, S = (c, h) => {
      o.value = c;
    };
    return D(() => s.item, (c) => o.value = c), D(o, () => l("edited", o.value, s.i)), (c, h) => (u(), f("tr", {
      "data-i": e.i,
      "data-handle-drag": e.isDraggable
    }, [
      e.sortable && e.isDraggable ? (u(), f("td", Ve)) : e.sortable ? (u(), f("td", Ie)) : T("", !0),
      e.displayHiddenColumnsIndicator ? (u(), f("td", {
        key: 2,
        onClick: h[0] || (h[0] = (a) => k(a, e.i)),
        "data-role": "show-more",
        class: re(e.hiddenIsVisible ? "state-open" : "")
      }, null, 2)) : T("", !0),
      (u(!0), f(I, null, $(e.visibleColumns, (a) => (u(), f(I, null, [
        C(be)(a, e.emptyColumns, e.item) ? (u(), f("td", {
          key: 0,
          "data-column": a.key,
          colspan: C(Y)(a, e.item),
          title: C(U)(a, e.item, e.i),
          onClick: (V) => n(V, e.item, a)
        }, [
          c.$slots[a.key] ? B(c.$slots, a.key, {
            key: 0,
            value: e.item[a.key],
            item: e.item,
            column: a,
            i: e.i
          }) : e.item ? (u(), b(ae, {
            key: 1,
            column: a,
            modelValue: o.value,
            "onUpdate:modelValue": h[1] || (h[1] = (V) => o.value = V),
            i: e.i,
            onEdited: S
          }, null, 8, ["column", "modelValue", "i"])) : T("", !0)
        ], 8, De)) : T("", !0)
      ], 64))), 256))
    ], 8, Se));
  }
}), Le = { "data-role": "hidden-row" }, Ee = ["colspan"], we = ["data-column"], $e = ["data-i"], Te = ["data-column", "title", "onClick"], Me = { name: "LktHiddenRow", inheritAttrs: !1 }, Oe = /* @__PURE__ */ F({
  ...Me,
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
    const l = t, s = e, o = g(s.modelValue), n = (k, S, c) => {
      l("click", k, X("", { item: S, column: c }));
    };
    return D(() => s.modelValue, (k) => o.value = k), D(o, () => l("update:modelValue", o.value)), (k, S) => de((u(), f("tr", Le, [
      M("td", { colspan: e.hiddenColumnsColSpan }, [
        M("table", null, [
          M("tr", null, [
            (u(!0), f(I, null, $(e.hiddenColumns, (c) => (u(), f("th", {
              "data-column": c.key
            }, [
              M("div", null, K(c.label), 1)
            ], 8, we))), 256))
          ]),
          M("tr", { "data-i": e.i }, [
            (u(!0), f(I, null, $(e.hiddenColumns, (c, h) => (u(), f("td", {
              "data-column": c.key,
              title: C(U)(c, o.value, h),
              onClick: (a) => n(a, o.value, c)
            }, [
              k.$slots[c.key] ? B(k.$slots, c.key, {
                key: 0,
                value: o.value[c.key],
                item: o.value,
                column: c,
                i: h
              }) : (u(), b(ae, {
                key: 1,
                column: c,
                modelValue: o.value,
                "onUpdate:modelValue": S[0] || (S[0] = (a) => o.value = a),
                i: h
              }, null, 8, ["column", "modelValue", "i"]))
            ], 8, Te))), 256))
          ], 8, $e)
        ])
      ], 8, Ee)
    ], 512)), [
      [ce, e.hiddenIsVisible]
    ]);
  }
}), Be = ["data-sortable"], Ne = {
  key: 0,
  "data-role": "drag-indicator"
}, He = { key: 1 }, Re = ["data-column", "data-sortable", "data-sort", "colspan", "title", "onClick"], xe = { key: 1 }, Ke = {
  key: 1,
  class: "lkt-empty-table"
}, Ue = /* @__PURE__ */ F({
  __name: "LktTable",
  props: {
    modelValue: { type: Array, default: () => [] },
    columns: { type: Array, default: () => [] },
    sorter: { type: Function, default: te },
    sortable: { type: Boolean, default: !1 },
    hideEmptyColumns: { type: Boolean, default: !1 },
    draggableChecker: { type: Function, default: (e) => !0 },
    checkValidDrag: { type: Function, default: (e) => !0 },
    draggableItemKey: { type: String, default: "name" }
  },
  emits: ["update:modelValue", "sort", "click"],
  setup(e, { expose: t, emit: l }) {
    const s = l, o = me(), n = e, k = {}, S = g(typeof n.sorter == "function" ? n.sorter : te), c = g(pe(n.columns)), h = g("asc"), a = g(n.modelValue), V = g(k), O = g(!1), E = g(n.columns), N = ve(12), j = w(() => a.value.length > 0), m = w(() => {
      if (!n.hideEmptyColumns)
        return [];
      let i = [];
      return E.value.forEach((r) => {
        let d = r.key, v = !1;
        a.value.forEach((y) => {
          if (typeof y.checkEmpty == "function")
            return y.checkEmpty(y);
          y[d] && (v = !0);
        }), v || i.push(d);
      }), i;
    }), H = w(() => E.value.filter((i) => !i.hidden)), z = w(() => E.value.filter((i) => i.hidden)), ie = w(() => {
      let i = H.value.length + 1;
      return n.sortable && ++i, i;
    }), J = w(() => z.value.length > 0 && !n.sortable), ne = w(() => E.value.map((i) => i.key)), q = w(() => {
      let i = [];
      for (let r in o)
        ne.value.indexOf(r) !== -1 && i.push(r);
      return i;
    }), se = (i) => {
      let r = i.target;
      if (typeof r.dataset.column > "u")
        do
          r = r.parentNode;
        while (typeof r.dataset.column > "u" && r.tagName !== "TABLE" && r.tagName !== "body");
      if (r.tagName === "TD" && (r = r.parentNode, r = r.dataset.i, typeof r < "u"))
        return a.value[r];
    }, G = (i) => V.value["tr_" + i] === !0, Z = (i) => {
      i && i.sortable && (a.value = a.value.sort((r, d) => S.value(r, d, i, h.value)), h.value = h.value === "asc" ? "desc" : "asc", c.value = i.key, s("sort", [c.value, h.value]));
    }, P = (i, r) => {
      s("click", i, r);
    }, Q = (i, r) => {
      let d = "tr_" + r.value.i;
      V.value[d] = typeof V.value[d] > "u" ? !0 : !V.value[d];
    }, _ = () => {
      E.value.forEach((i) => {
        if (i.type === "select" && i.autoLoadSelectOptions) {
          let r = i.autoLoadSelectOptionsKey !== "" ? i.autoLoadSelectOptionsKey : i.key, d = [];
          a.value.forEach((y) => {
            Array.isArray(y[r]) && y[r].forEach((p) => d.push(p));
          });
          let v = {};
          d = d.filter(function(y) {
            return v[y.value] ? !1 : (v[y.value] = !0, !0);
          }), i.setOptions(d);
        }
      });
    }, ue = (i, r) => {
      a.value[r] = i;
    };
    return he(() => {
      _(), Z(ge(n.columns, c.value));
    }), D(() => n.columns, (i) => E.value = i), D(() => n.modelValue, (i) => a.value = i), D(a, (i) => {
      _(), s("update:modelValue", i);
    }), t({ getItemByEvent: se }), (i, r) => j.value ? (u(), f("div", {
      key: 0,
      class: "lkt-table",
      "data-sortable": e.sortable
    }, [
      M("table", null, [
        M("thead", null, [
          M("tr", null, [
            e.sortable ? (u(), f("th", Ne)) : T("", !0),
            J.value ? (u(), f("th", He)) : T("", !0),
            (u(!0), f(I, null, $(H.value, (d) => (u(), f(I, null, [
              m.value.indexOf(d.key) === -1 ? (u(), f("th", {
                key: 0,
                "data-column": d.key,
                "data-sortable": d.sortable === !0,
                "data-sort": d.sortable === !0 && c.value === d.key ? h.value : "",
                colspan: C(ke)(d, e.columns.length, a.value),
                title: d.label,
                onClick: (v) => Z(d)
              }, [
                M("div", null, K(d.label), 1)
              ], 8, Re)) : T("", !0)
            ], 64))), 256))
          ])
        ]),
        e.sortable ? (u(), b(C(fe), {
          key: 0,
          modelValue: a.value,
          "onUpdate:modelValue": r[0] || (r[0] = (d) => a.value = d),
          move: e.checkValidDrag,
          itemKey: e.draggableItemKey,
          onStart: r[1] || (r[1] = (d) => O.value = !0),
          onEnd: r[2] || (r[2] = (d) => O.value = !1),
          tag: "tbody",
          class: "lkt-sortable-table",
          handle: "[data-handle-drag]"
        }, {
          item: x(({ element: d, index: v }) => [
            (u(), b(le, {
              key: C(N) + "-" + v,
              i: v,
              item: d,
              "display-hidden-columns-indicator": J.value,
              "is-draggable": e.draggableChecker ? e.draggableChecker(d) : !0,
              sortable: e.sortable,
              "visible-columns": H.value,
              "empty-columns": m.value,
              "hidden-is-visible": G(v),
              onClick: P,
              onShow: Q
            }, W({ _: 2 }, [
              $(q.value, (y) => ({
                name: y,
                fn: x((p) => [
                  B(i.$slots, y, {
                    item: p.item,
                    value: p.value,
                    column: p.column
                  })
                ])
              }))
            ]), 1032, ["i", "item", "display-hidden-columns-indicator", "is-draggable", "sortable", "visible-columns", "empty-columns", "hidden-is-visible"]))
          ]),
          _: 3
        }, 8, ["modelValue", "move", "itemKey"])) : (u(), f("tbody", xe, [
          (u(!0), f(I, null, $(a.value, (d, v) => (u(), b(le, {
            key: C(N) + "-" + v,
            i: v,
            item: d,
            "display-hidden-columns-indicator": J.value,
            "is-draggable": e.draggableChecker ? e.draggableChecker(d) : !0,
            sortable: e.sortable,
            "visible-columns": H.value,
            "empty-columns": m.value,
            "hidden-is-visible": G(v),
            onClick: P,
            onShow: Q,
            onEdited: ue
          }, W({ _: 2 }, [
            $(q.value, (y) => ({
              name: y,
              fn: x((p) => [
                B(i.$slots, y, {
                  item: p.item,
                  value: p.value,
                  column: p.column
                })
              ])
            }))
          ]), 1032, ["i", "item", "display-hidden-columns-indicator", "is-draggable", "sortable", "visible-columns", "empty-columns", "hidden-is-visible"]))), 128)),
          z.value.length > 0 ? (u(!0), f(I, { key: 0 }, $(a.value, (d, v) => (u(), b(Oe, {
            key: C(N) + "-" + v,
            i: v,
            item: d,
            "hidden-columns": z.value,
            "hidden-columns-col-span": ie.value,
            "is-draggable": e.draggableChecker ? e.draggableChecker(d) : !0,
            sortable: e.sortable,
            "visible-columns": H.value,
            "empty-columns": m.value,
            "hidden-is-visible": G(v),
            onClick: P,
            onShow: Q
          }, W({ _: 2 }, [
            $(q.value, (y) => ({
              name: y,
              fn: x((p) => [
                B(i.$slots, y, {
                  item: p.item,
                  value: p.value,
                  column: p.column
                })
              ])
            }))
          ]), 1032, ["i", "item", "hidden-columns", "hidden-columns-col-span", "is-draggable", "sortable", "visible-columns", "empty-columns", "hidden-is-visible"]))), 128)) : T("", !0)
        ]))
      ])
    ], 8, Be)) : i.$slots["no-items"] ? (u(), f("div", Ke, [
      B(i.$slots, "no-items")
    ])) : T("", !0);
  }
}), lt = {
  install: (e) => {
    e.component("lkt-table") === void 0 && e.component("lkt-table", Ue);
  }
};
export {
  L as LktTableColumn,
  Qe as createActionColumn,
  Ze as createCheckColumn,
  Ge as createColumn,
  Xe as createEmailColumn,
  tt as createHiddenColumn,
  Pe as createLinkColumn,
  et as createSelectColumn,
  _e as createSwitchColumn,
  Ye as createTelColumn,
  We as createTextColumn,
  lt as default
};
