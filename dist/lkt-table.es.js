var ue = Object.defineProperty;
var se = (e, t, l) => t in e ? ue(e, t, { enumerable: !0, configurable: !0, writable: !0, value: l }) : e[t] = l;
var y = (e, t, l) => (se(e, typeof t != "symbol" ? t + "" : t, l), l);
import { reactive as w, defineComponent as K, ref as S, watch as T, nextTick as re, resolveComponent as x, openBlock as i, createBlock as b, withCtx as R, createTextVNode as _, toDisplayString as O, unref as V, createElementBlock as h, Fragment as A, createCommentVNode as E, normalizeClass as de, renderList as $, renderSlot as H, withDirectives as ce, createElementVNode as D, vShow as me, useSlots as fe, computed as B, onMounted as he, createSlots as W } from "vue";
import ye from "vuedraggable";
import { httpCall as ve } from "lkt-http-client";
import { createLktEvent as X } from "lkt-events";
import { generateRandomString as ke } from "lkt-string-tools";
import be from "lkt-field-check";
import ge from "lkt-field-text";
import Ce from "lkt-field-switch";
import Se from "lkt-field-select";
import Ve from "lkt-loader";
class I {
  constructor(t = "", l = "") {
    y(this, "key");
    y(this, "label");
    y(this, "sortable");
    y(this, "hidden");
    y(this, "editable");
    y(this, "formatter");
    y(this, "checkEmpty");
    y(this, "colspan");
    y(this, "type");
    y(this, "link");
    y(this, "action");
    y(this, "options");
    y(this, "resource");
    y(this, "resourceData");
    y(this, "isMultiple");
    y(this, "isLoading");
    y(this, "resourceLoaded");
    y(this, "valueSlot");
    y(this, "editSlot");
    y(this, "multipleDisplay");
    this.key = t, this.label = l, this.sortable = !0, this.hidden = !1, this.formatter = void 0, this.checkEmpty = void 0, this.colspan = void 0, this.resource = "", this.resourceData = {}, this.isMultiple = !1, this.isLoading = !1, this.resourceLoaded = !1, this.valueSlot = "", this.editSlot = "", this.multipleDisplay = "";
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
      const t = await ve(this.resource, this.resourceData);
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
}
const nt = (e, t, l = !0) => w(new I(e, t).setIsSortable(l)), ot = (e, t, l, n = !0) => w(new I(e, t).setIsSortable(n).defineAsLink(l)), ut = (e, t, l, n = !0) => w(new I(e, t).setIsSortable(n).defineAsAction(l)), st = (e, t, l = !0) => w(new I(e, t).setIsSortable(l).defineAsText()), rt = (e, t, l = !0) => w(new I(e, t).setIsSortable(l).defineAsEmail()), dt = (e, t, l = !0) => w(new I(e, t).setIsSortable(l).defineAsTel()), ct = (e, t, l = !0) => w(new I(e, t).setIsSortable(l).defineAsCheck()), mt = (e, t, l = !0) => w(new I(e, t).setIsSortable(l).defineAsSwitch()), ft = (e, t, l, n = !0) => w(new I(e, t).setIsSortable(n).defineAsSelect(l)), ht = (e, t, l = !0) => w(new I(e, t).setIsSortable(l).setIsHidden(!0)), ee = (e, t, l, n) => {
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
}, U = (e, t, l) => e.formatter && typeof e.formatter == "function" ? e.formatter(t[e.key], t, e, l) : t[e.key], pe = (e, t, l) => {
  if (!e.colspan)
    return -1;
  let n = t;
  return l.forEach((u) => {
    let a = Y(e, u);
    a > 0 && a < n && (n = a);
  }), n;
}, Y = (e, t) => e.colspan === !1 ? !1 : typeof e.colspan == "function" ? e.colspan(t) : e.colspan, Le = (e, t, l) => {
  if (typeof e != "object" || !e.key || t.indexOf(e.key) > -1)
    return !1;
  let n = Y(e, l);
  return typeof e.colspan > "u" ? !0 : (typeof e.colspan < "u" && (typeof e.colspan == "function" ? n = parseInt(e.colspan()) : n = parseInt(e.colspan)), n > 0);
}, Ae = (e = []) => {
  if (e.length > 0) {
    for (let t = 0; t < e.length; ++t)
      if (e[t].sortable)
        return e[t].key;
  }
  return "";
}, we = (e, t) => {
  if (e.length > 0) {
    for (let l = 0; l < e.length; ++l)
      if (e[l].key === t)
        return e[l];
  }
  return null;
}, Ie = { name: "LktTableCell", inheritAttrs: !1 }, le = /* @__PURE__ */ K({
  ...Ie,
  props: {
    modelValue: { type: Object, default: () => ({}) },
    column: { type: Object, default: () => ({}) },
    i: { type: [Number], default: 0 }
  },
  emits: ["edited"],
  setup(e, { emit: t }) {
    const l = t, n = e, u = S(n.modelValue), a = S(u.value[n.column.key]), v = S(null), p = S(n.column.showLoading());
    return T(a, () => {
      const s = JSON.parse(JSON.stringify(u.value));
      s[n.column.key] = a.value, l("edited", s, n.i);
    }), T(() => n.modelValue, (s) => {
      u.value = s, a.value = u.value[n.column.key];
    }), T(() => n.column, () => {
      n.column.resourceLoaded && re(() => p.value = !1);
    }, { deep: !0 }), n.column.hasToLoadResource() && n.column.loadResource(), (s, r) => {
      const d = x("router-link"), C = x("lkt-field-text"), M = x("lkt-field-check"), F = x("lkt-field-switch"), j = x("lkt-loader"), N = x("lkt-field-select");
      return e.column.type === "link" ? (i(), b(d, {
        key: 0,
        to: e.column.getHref(u.value)
      }, {
        default: R(() => [
          _(O(V(U)(e.column, u.value, e.i)), 1)
        ]),
        _: 1
      }, 8, ["to"])) : e.column.type === "action" ? (i(), h("a", {
        key: 1,
        href: "#",
        onClick: r[0] || (r[0] = (f) => e.column.doAction(u.value))
      }, O(V(U)(e.column, u.value, e.i)), 1)) : e.column.type === "text" ? (i(), b(C, {
        key: 2,
        "read-mode": !e.column.editable,
        ref: (f) => v.value = f,
        "edit-slot": e.column.editSlot,
        "value-slot": e.column.valueSlot,
        modelValue: a.value,
        "onUpdate:modelValue": r[1] || (r[1] = (f) => a.value = f)
      }, null, 8, ["read-mode", "edit-slot", "value-slot", "modelValue"])) : e.column.type === "email" ? (i(), b(C, {
        key: 3,
        "read-mode": !e.column.editable,
        ref: (f) => v.value = f,
        "edit-slot": e.column.editSlot,
        "value-slot": e.column.valueSlot,
        "is-email": "",
        modelValue: a.value,
        "onUpdate:modelValue": r[2] || (r[2] = (f) => a.value = f)
      }, null, 8, ["read-mode", "edit-slot", "value-slot", "modelValue"])) : e.column.type === "tel" ? (i(), b(C, {
        key: 4,
        "read-mode": !e.column.editable,
        ref: (f) => v.value = f,
        "edit-slot": e.column.editSlot,
        "value-slot": e.column.valueSlot,
        "is-tel": "",
        modelValue: a.value,
        "onUpdate:modelValue": r[3] || (r[3] = (f) => a.value = f)
      }, null, 8, ["read-mode", "edit-slot", "value-slot", "modelValue"])) : e.column.type === "check" ? (i(), b(M, {
        key: 5,
        "read-mode": !e.column.editable,
        ref: (f) => v.value = f,
        modelValue: a.value,
        "onUpdate:modelValue": r[4] || (r[4] = (f) => a.value = f)
      }, null, 8, ["read-mode", "modelValue"])) : e.column.type === "switch" ? (i(), b(F, {
        key: 6,
        "read-mode": !e.column.editable,
        ref: (f) => v.value = f,
        modelValue: a.value,
        "onUpdate:modelValue": r[5] || (r[5] = (f) => a.value = f)
      }, null, 8, ["read-mode", "modelValue"])) : e.column.type === "select" ? (i(), h(A, { key: 7 }, [
        p.value ? (i(), b(j, { key: 0 })) : (i(), b(N, {
          key: 1,
          "read-mode": !e.column.editable,
          ref: (f) => v.value = f,
          modelValue: a.value,
          "onUpdate:modelValue": r[6] || (r[6] = (f) => a.value = f),
          resource: e.column.resource,
          "resource-data": e.column.resourceData,
          options: e.column.options,
          multiple: e.column.isMultiple,
          "multiple-display": e.column.multipleDisplay
        }, null, 8, ["read-mode", "modelValue", "resource", "resource-data", "options", "multiple", "multiple-display"]))
      ], 64)) : (i(), h(A, { key: 8 }, [
        _(O(V(U)(e.column, u.value, e.i)), 1)
      ], 64));
    };
  }
}), $e = ["data-i", "data-handle-drag"], Ee = {
  key: 0,
  "data-role": "drag-indicator"
}, De = {
  key: 1,
  "data-role": "invalid-drag-indicator"
}, Te = ["data-column", "colspan", "title", "onClick"], Be = { name: "LktTableRow", inheritAttrs: !1 }, te = /* @__PURE__ */ K({
  ...Be,
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
    const l = t, n = e, u = S(n.item), a = (s, r, d) => {
      l("click", s, X("", { item: r, column: d }));
    }, v = (s, r) => {
      l("show", s, X("", { i: r }));
    }, p = (s, r) => {
      u.value = s;
    };
    return T(() => n.item, (s) => u.value = s), T(u, () => l("edited", u.value, n.i)), (s, r) => (i(), h("tr", {
      "data-i": e.i,
      "data-handle-drag": e.isDraggable
    }, [
      e.sortable && e.isDraggable ? (i(), h("td", Ee)) : e.sortable ? (i(), h("td", De)) : E("", !0),
      e.displayHiddenColumnsIndicator ? (i(), h("td", {
        key: 2,
        onClick: r[0] || (r[0] = (d) => v(d, e.i)),
        "data-role": "show-more",
        class: de(e.hiddenIsVisible ? "state-open" : "")
      }, null, 2)) : E("", !0),
      (i(!0), h(A, null, $(e.visibleColumns, (d) => (i(), h(A, null, [
        V(Le)(d, e.emptyColumns, e.item) ? (i(), h("td", {
          key: 0,
          "data-column": d.key,
          colspan: V(Y)(d, e.item),
          title: V(U)(d, e.item, e.i),
          onClick: (C) => a(C, e.item, d)
        }, [
          s.$slots[d.key] ? H(s.$slots, d.key, {
            key: 0,
            value: e.item[d.key],
            item: e.item,
            column: d,
            i: e.i
          }) : e.item ? (i(), b(le, {
            key: 1,
            column: d,
            modelValue: u.value,
            "onUpdate:modelValue": r[1] || (r[1] = (C) => u.value = C),
            i: e.i,
            onEdited: p
          }, null, 8, ["column", "modelValue", "i"])) : E("", !0)
        ], 8, Te)) : E("", !0)
      ], 64))), 256))
    ], 8, $e));
  }
}), Ne = { "data-role": "hidden-row" }, xe = ["colspan"], He = ["data-column"], Fe = ["data-i"], Re = ["data-column", "title", "onClick"], Oe = { name: "LktHiddenRow", inheritAttrs: !1 }, Ue = /* @__PURE__ */ K({
  ...Oe,
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
    const l = t, n = e, u = S(n.modelValue), a = (v, p, s) => {
      l("click", v, X("", { item: p, column: s }));
    };
    return T(() => n.modelValue, (v) => u.value = v), T(u, () => l("update:modelValue", u.value)), (v, p) => ce((i(), h("tr", Ne, [
      D("td", { colspan: e.hiddenColumnsColSpan }, [
        D("table", null, [
          D("tr", null, [
            (i(!0), h(A, null, $(e.hiddenColumns, (s) => (i(), h("th", {
              "data-column": s.key
            }, [
              D("div", null, O(s.label), 1)
            ], 8, He))), 256))
          ]),
          D("tr", { "data-i": e.i }, [
            (i(!0), h(A, null, $(e.hiddenColumns, (s, r) => (i(), h("td", {
              "data-column": s.key,
              title: V(U)(s, u.value, r),
              onClick: (d) => a(d, u.value, s)
            }, [
              v.$slots[s.key] ? H(v.$slots, s.key, {
                key: 0,
                value: u.value[s.key],
                item: u.value,
                column: s,
                i: r
              }) : (i(), b(le, {
                key: 1,
                column: s,
                modelValue: u.value,
                "onUpdate:modelValue": p[0] || (p[0] = (d) => u.value = d),
                i: r
              }, null, 8, ["column", "modelValue", "i"]))
            ], 8, Re))), 256))
          ], 8, Fe)
        ])
      ], 8, xe)
    ], 512)), [
      [me, e.hiddenIsVisible]
    ]);
  }
}), Me = ["data-sortable"], Ke = {
  key: 0,
  "data-role": "drag-indicator"
}, je = { key: 1 }, ze = ["data-column", "data-sortable", "data-sort", "colspan", "title", "onClick"], Je = { key: 1 }, qe = {
  key: 1,
  class: "lkt-empty-table"
}, Ge = { name: "LktTable", inheritAttrs: !1 }, Pe = /* @__PURE__ */ K({
  ...Ge,
  props: {
    modelValue: { type: Array, default: () => [] },
    columns: { type: Array, default: () => [] },
    sorter: { type: Function, default: ee },
    sortable: { type: Boolean, default: !1 },
    hideEmptyColumns: { type: Boolean, default: !1 },
    draggableChecker: { type: Function, default: (e) => !0 },
    checkValidDrag: { type: Function, default: (e) => !0 },
    draggableItemKey: { type: String, default: "name" }
  },
  emits: ["update:modelValue", "sort", "click"],
  setup(e, { expose: t, emit: l }) {
    const n = l, u = fe(), a = e, v = {}, p = S(typeof a.sorter == "function" ? a.sorter : ee), s = S(Ae(a.columns)), r = S("asc"), d = S(a.modelValue), C = S(v), M = S(!1), F = ke(12), j = B(() => d.value.length > 0), N = B(() => {
      if (!a.hideEmptyColumns)
        return [];
      let o = [];
      return a.columns.forEach((c) => {
        let m = c.key, k = !1;
        d.value.forEach((g) => {
          if (typeof g.checkEmpty == "function")
            return g.checkEmpty(g);
          g[m] && (k = !0);
        }), k || o.push(m);
      }), o;
    }), f = B(() => a.columns.filter((o) => !o.hidden)), z = B(() => a.columns.filter((o) => o.hidden)), ae = B(() => {
      let o = f.value.length + 1;
      return a.sortable && ++o, o;
    }), J = B(() => z.value.length > 0 && !a.sortable), ie = B(() => a.columns.map((o) => o.key)), q = B(() => {
      let o = [];
      for (let c in u)
        ie.value.indexOf(c) !== -1 && o.push(c);
      return o;
    }), ne = (o) => {
      let c = o.target;
      if (typeof c.dataset.column > "u")
        do
          c = c.parentNode;
        while (typeof c.dataset.column > "u" && c.tagName !== "TABLE" && c.tagName !== "body");
      if (c.tagName === "TD" && (c = c.parentNode, c = c.dataset.i, typeof c < "u"))
        return d.value[c];
    }, G = (o) => C.value["tr_" + o] === !0, Z = (o) => {
      !o || o.sortable && (d.value = d.value.sort((c, m) => p.value(c, m, o, r.value)), r.value = r.value === "asc" ? "desc" : "asc", s.value = o.key, n("sort", [s.value, r.value]));
    }, P = (o, c) => {
      n("click", o, c);
    }, Q = (o, c) => {
      let m = "tr_" + c.value.i;
      C.value[m] = typeof C.value[m] > "u" ? !0 : !C.value[m];
    }, oe = (o, c) => {
      d.value[c] = o;
    };
    return he(() => {
      Z(we(a.columns, s.value));
    }), T(() => a.modelValue, (o) => d.value = o), T(d, (o) => {
      n("update:modelValue", o);
    }), t({ getItemByEvent: ne }), (o, c) => j.value ? (i(), h("div", {
      key: 0,
      class: "lkt-table",
      "data-sortable": e.sortable
    }, [
      D("table", null, [
        D("thead", null, [
          D("tr", null, [
            e.sortable ? (i(), h("th", Ke)) : E("", !0),
            J.value ? (i(), h("th", je)) : E("", !0),
            (i(!0), h(A, null, $(f.value, (m) => (i(), h(A, null, [
              N.value.indexOf(m.key) === -1 ? (i(), h("th", {
                key: 0,
                "data-column": m.key,
                "data-sortable": m.sortable === !0,
                "data-sort": m.sortable === !0 && s.value === m.key ? r.value : "",
                colspan: V(pe)(m, e.columns.length, d.value),
                title: m.label,
                onClick: (k) => Z(m)
              }, [
                D("div", null, O(m.label), 1)
              ], 8, ze)) : E("", !0)
            ], 64))), 256))
          ])
        ]),
        e.sortable ? (i(), b(V(ye), {
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
          item: R(({ element: m, index: k }) => [
            (i(), b(te, {
              key: V(F) + "-" + k,
              i: k,
              item: m,
              "display-hidden-columns-indicator": J.value,
              "is-draggable": e.draggableChecker ? e.draggableChecker(m) : !0,
              sortable: e.sortable,
              "visible-columns": f.value,
              "empty-columns": N.value,
              "hidden-is-visible": G(k),
              onClick: P,
              onShow: Q
            }, W({ _: 2 }, [
              $(q.value, (g) => ({
                name: g,
                fn: R((L) => [
                  H(o.$slots, g, {
                    item: L.item,
                    value: L.value,
                    column: L.column
                  })
                ])
              }))
            ]), 1032, ["i", "item", "display-hidden-columns-indicator", "is-draggable", "sortable", "visible-columns", "empty-columns", "hidden-is-visible"]))
          ]),
          _: 3
        }, 8, ["modelValue", "move", "itemKey"])) : (i(), h("tbody", Je, [
          (i(!0), h(A, null, $(d.value, (m, k) => (i(), b(te, {
            key: V(F) + "-" + k,
            i: k,
            item: m,
            "display-hidden-columns-indicator": J.value,
            "is-draggable": e.draggableChecker ? e.draggableChecker(m) : !0,
            sortable: e.sortable,
            "visible-columns": f.value,
            "empty-columns": N.value,
            "hidden-is-visible": G(k),
            onClick: P,
            onShow: Q,
            onEdited: oe
          }, W({ _: 2 }, [
            $(q.value, (g) => ({
              name: g,
              fn: R((L) => [
                H(o.$slots, g, {
                  item: L.item,
                  value: L.value,
                  column: L.column
                })
              ])
            }))
          ]), 1032, ["i", "item", "display-hidden-columns-indicator", "is-draggable", "sortable", "visible-columns", "empty-columns", "hidden-is-visible"]))), 128)),
          z.value.length > 0 ? (i(!0), h(A, { key: 0 }, $(d.value, (m, k) => (i(), b(Ue, {
            key: V(F) + "-" + k,
            i: k,
            item: m,
            "hidden-columns": z.value,
            "hidden-columns-col-span": ae.value,
            "is-draggable": e.draggableChecker ? e.draggableChecker(m) : !0,
            sortable: e.sortable,
            "visible-columns": f.value,
            "empty-columns": N.value,
            "hidden-is-visible": G(k),
            onClick: P,
            onShow: Q
          }, W({ _: 2 }, [
            $(q.value, (g) => ({
              name: g,
              fn: R((L) => [
                H(o.$slots, g, {
                  item: L.item,
                  value: L.value,
                  column: L.column
                })
              ])
            }))
          ]), 1032, ["i", "item", "hidden-columns", "hidden-columns-col-span", "is-draggable", "sortable", "visible-columns", "empty-columns", "hidden-is-visible"]))), 128)) : E("", !0)
        ]))
      ])
    ], 8, Me)) : o.$slots["no-items"] ? (i(), h("div", qe, [
      H(o.$slots, "no-items")
    ])) : E("", !0);
  }
});
const yt = {
  install: (e) => {
    e.component("lkt-table") === void 0 && e.component("lkt-table", Pe), e.component("lkt-loader") === void 0 && e.use(Ve), e.component("lkt-field-select") === void 0 && e.use(Se), e.component("lkt-field-text") === void 0 && e.use(ge), e.component("lkt-field-check") === void 0 && e.use(be), e.component("lkt-field-switch") === void 0 && e.use(Ce);
  }
};
export {
  ut as createActionColumn,
  ct as createCheckColumn,
  nt as createColumn,
  rt as createEmailColumn,
  ht as createHiddenColumn,
  ot as createLinkColumn,
  ft as createSelectColumn,
  mt as createSwitchColumn,
  dt as createTelColumn,
  st as createTextColumn,
  yt as default
};
