import { reactive as _, defineComponent as Q, ref as S, watch as N, nextTick as re, computed as c, resolveComponent as M, openBlock as s, createBlock as b, withCtx as O, createTextVNode as G, toDisplayString as F, unref as B, createElementBlock as f, Fragment as E, withModifiers as lt, resolveDynamicComponent as x, createElementVNode as V, normalizeClass as ne, createCommentVNode as g, createVNode as Y, renderList as j, renderSlot as W, withDirectives as te, vShow as le, useSlots as ot, onMounted as at, createSlots as Be } from "vue";
import { httpCall as nt } from "lkt-http-client";
import { __ as q } from "lkt-i18n";
import { createLktEvent as de } from "lkt-events";
import { generateRandomString as st, replaceAll as ut } from "lkt-string-tools";
import { DataState as it } from "lkt-data-state";
import rt from "sortablejs";
import dt from "lkt-loader";
import mt from "lkt-button";
import ct from "lkt-paginator";
import ft from "lkt-field-text";
import pt from "lkt-field-textarea";
import vt from "lkt-field-select";
import ht from "lkt-field-switch";
import yt from "lkt-field-file";
class U {
  constructor(t = "", r = "") {
    this.key = t, this.label = r, this.sortable = !0, this.hidden = !1, this.formatter = void 0, this.checkEmpty = void 0, this.colspan = void 0, this.resource = "", this.resourceData = {}, this.isMultiple = !1, this.isLoading = !1, this.resourceLoaded = !1, this.valueSlot = "", this.editSlot = "", this.multipleDisplay = "", this.multipleDisplayEdition = "";
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
  defineAsFile() {
    return this.type = "file", this;
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
    if (this.resourceLoaded) return this;
    if (!this.resource) return this;
    try {
      this.isLoading = !0;
      const t = await nt(this.resource, this.resourceData);
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
  setAutoLoadSelectOptions(t = !0, r = "") {
    return this.autoLoadSelectOptions = t, this.autoLoadSelectOptionsKey = r, this;
  }
  setTagMode(t = !0) {
    return this.tags = t, this;
  }
  setOptions(t = []) {
    return this.options = t, this;
  }
  setTitleSourceColumn(t) {
    return this.extractTitleFromColumn = t, this;
  }
  useForRowKey(t = !0) {
    return this.isForRowKey = t, this;
  }
}
const gl = (l, t, r = !0) => _(new U(l, t).setIsSortable(r)), Cl = (l, t, r, n = !0) => _(new U(l, t).setIsSortable(n).defineAsLink(r)), Sl = (l, t, r, n = !0) => _(new U(l, t).setIsSortable(n).defineAsAction(r)), Vl = (l, t, r = !0) => _(new U(l, t).setIsSortable(r).defineAsText()), Dl = (l, t, r = !0) => _(new U(l, t).setIsSortable(r).defineAsEmail()), wl = (l, t, r = !0) => _(new U(l, t).setIsSortable(r).defineAsTel()), Tl = (l, t, r = !0) => _(new U(l, t).setIsSortable(r).defineAsCheck()), Bl = (l, t, r = !0) => _(new U(l, t).setIsSortable(r).defineAsSwitch()), El = (l, t, r, n = !0) => _(new U(l, t).setIsSortable(n).defineAsSelect(r)), Ll = (l, t, r = !0) => _(new U(l, t).setIsSortable(r).setIsHidden(!0)), Ee = (l, t, r, n) => {
  if (!r) return 0;
  let i = l[r.key], o = t[r.key];
  if (n === "asc") {
    if (i > o) return 1;
    if (o > i) return -1;
  } else {
    if (i > o) return -1;
    if (o > i) return 1;
  }
  return 0;
}, Z = (l, t, r, n = []) => {
  if (l.extractTitleFromColumn) {
    let i = n.find((o) => o.key === l.extractTitleFromColumn);
    if (i)
      return Z(i, t, r, n);
  }
  if (l.formatter && typeof l.formatter == "function") {
    let i = l.formatter(t[l.key], t, l, r);
    return i.startsWith("__:") ? q(i.substring(3)) : i;
  }
  return t[l.key];
}, kt = (l, t, r) => {
  if (!l.colspan) return -1;
  let n = t;
  return r.forEach((i) => {
    let o = me(l, i);
    o > 0 && o < n && (n = o);
  }), n;
}, me = (l, t) => l.colspan === !1 ? !1 : typeof l.colspan == "function" ? l.colspan(t) : l.colspan, bt = (l, t, r) => {
  if (typeof l != "object" || !l.key || t.indexOf(l.key) > -1) return !1;
  let n = me(l, r);
  return typeof l.colspan > "u" ? !0 : (typeof l.colspan < "u" && (typeof l.colspan == "function" ? n = parseInt(l.colspan()) : n = parseInt(l.colspan)), n > 0);
}, gt = (l = []) => {
  if (l.length > 0) {
    for (let t = 0; t < l.length; ++t)
      if (l[t].sortable) return l[t].key;
  }
  return "";
}, Ct = (l, t) => {
  if (l.length > 0) {
    for (let r = 0; r < l.length; ++r)
      if (l[r].key === t) return l[r];
  }
  return null;
}, Ie = /* @__PURE__ */ Q({
  __name: "LktTableCell",
  props: {
    modelValue: { default: () => ({}) },
    column: { default: () => ({}) },
    columns: { default: () => [] },
    i: { default: 0 },
    editModeEnabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(l, { emit: t }) {
    const r = t, n = l, i = S(n.modelValue), o = S(i.value[n.column.key]), h = S(null), C = S(n.column.showLoading());
    N(o, (a) => {
      const u = JSON.parse(JSON.stringify(i.value));
      u[n.column.key] = a, r("update:modelValue", u);
    }), N(() => n.modelValue, (a) => {
      i.value = a, o.value = i.value[n.column.key];
    }), N(() => n.column, () => {
      n.column.resourceLoaded && re(() => C.value = !1);
    }, { deep: !0 }), n.column.hasToLoadResource() && n.column.loadResource();
    const v = c(() => ({ ...n.column.slotData, item: i.value }));
    return (a, u) => {
      const P = M("router-link"), J = M("lkt-field-text"), d = M("lkt-field-switch"), $ = M("lkt-field-file"), H = M("lkt-loader"), y = M("lkt-field-select");
      return a.column.type === "link" ? (s(), b(P, {
        key: 0,
        to: a.column.getHref(i.value)
      }, {
        default: O(() => [
          G(F(B(Z)(a.column, i.value, a.i)), 1)
        ]),
        _: 1
      }, 8, ["to"])) : a.column.type === "action" ? (s(), f("a", {
        key: 1,
        href: "#",
        onClick: u[0] || (u[0] = (p) => a.column.doAction(i.value))
      }, F(B(Z)(a.column, i.value, a.i)), 1)) : a.column.type === "text" ? (s(), b(J, {
        key: 2,
        "read-mode": !a.column.editable || !a.editModeEnabled,
        ref: (p) => h.value = p,
        "edit-slot": a.column.editSlot,
        "value-slot": a.column.valueSlot,
        "slot-data": v.value,
        modelValue: o.value,
        "onUpdate:modelValue": u[1] || (u[1] = (p) => o.value = p)
      }, null, 8, ["read-mode", "edit-slot", "value-slot", "slot-data", "modelValue"])) : a.column.type === "email" ? (s(), b(J, {
        key: 3,
        "read-mode": !a.column.editable || !a.editModeEnabled,
        ref: (p) => h.value = p,
        "edit-slot": a.column.editSlot,
        "value-slot": a.column.valueSlot,
        "slot-data": v.value,
        "is-email": "",
        modelValue: o.value,
        "onUpdate:modelValue": u[2] || (u[2] = (p) => o.value = p)
      }, null, 8, ["read-mode", "edit-slot", "value-slot", "slot-data", "modelValue"])) : a.column.type === "tel" ? (s(), b(J, {
        key: 4,
        "read-mode": !a.column.editable || !a.editModeEnabled,
        ref: (p) => h.value = p,
        "edit-slot": a.column.editSlot,
        "value-slot": a.column.valueSlot,
        "slot-data": v.value,
        "is-tel": "",
        modelValue: o.value,
        "onUpdate:modelValue": u[3] || (u[3] = (p) => o.value = p)
      }, null, 8, ["read-mode", "edit-slot", "value-slot", "slot-data", "modelValue"])) : a.column.type === "check" ? (s(), b(d, {
        key: 5,
        "is-check": "",
        "read-mode": !a.column.editable || !a.editModeEnabled,
        ref: (p) => h.value = p,
        modelValue: o.value,
        "onUpdate:modelValue": u[4] || (u[4] = (p) => o.value = p)
      }, null, 8, ["read-mode", "modelValue"])) : a.column.type === "switch" ? (s(), b(d, {
        key: 6,
        "read-mode": !a.column.editable || !a.editModeEnabled,
        ref: (p) => h.value = p,
        modelValue: o.value,
        "onUpdate:modelValue": u[5] || (u[5] = (p) => o.value = p)
      }, null, 8, ["read-mode", "modelValue"])) : a.column.type === "file" ? (s(), b($, {
        key: 7,
        "read-mode": !a.column.editable || !a.editModeEnabled,
        ref: (p) => h.value = p,
        modelValue: o.value,
        "onUpdate:modelValue": u[6] || (u[6] = (p) => o.value = p)
      }, null, 8, ["read-mode", "modelValue"])) : a.column.type === "select" ? (s(), f(E, { key: 8 }, [
        C.value ? (s(), b(H, { key: 0 })) : (s(), b(y, {
          key: 1,
          "read-mode": !a.column.editable || !a.editModeEnabled,
          ref: (p) => h.value = p,
          modelValue: o.value,
          "onUpdate:modelValue": u[7] || (u[7] = (p) => o.value = p),
          "slot-data": v.value,
          resource: a.column.resource,
          "use-resource-slot": a.column.resourceSlot ? a.column.resourceSlot : a.column.resource,
          "resource-data": a.column.resourceData,
          options: a.column.options,
          multiple: a.column.isMultiple,
          tags: a.column.tags,
          "multiple-display": a.column.multipleDisplay,
          "multiple-display-edition": a.column.multipleDisplayEdition
        }, null, 8, ["read-mode", "modelValue", "slot-data", "resource", "use-resource-slot", "resource-data", "options", "multiple", "tags", "multiple-display", "multiple-display-edition"]))
      ], 64)) : (s(), f(E, { key: 9 }, [
        G(F(B(Z)(a.column, i.value, a.i, a.columns)), 1)
      ], 64));
    };
  }
}), A = {
  navButtonSlot: "",
  dropButtonSlot: "",
  createButtonSlot: ""
}, St = /* @__PURE__ */ V("i", { class: "" }, null, -1), Vt = /* @__PURE__ */ Q({
  __name: "DropButton",
  props: {
    disabled: { type: Boolean, default: !1 },
    text: { default: "" },
    confirm: { default: "" },
    resource: { default: "" },
    resourceData: { default: () => ({}) }
  },
  emits: ["click"],
  setup(l, { emit: t }) {
    const r = t, n = l, i = c(() => A.dropButtonSlot !== ""), o = c(() => A.dropButtonSlot), h = c(() => n.text.startsWith("__:") ? q(n.text.substring(3)) : n.text);
    return (C, v) => {
      const a = M("lkt-button");
      return s(), b(a, {
        palette: "table-delete",
        resource: C.resource,
        "resource-data": C.resourceData,
        "confirm-modal": C.confirm,
        disabled: C.disabled,
        onClick: v[0] || (v[0] = lt((u) => r("click"), ["prevent", "stop"]))
      }, {
        default: O(() => [
          i.value ? (s(), b(x(o.value), { key: 0 })) : (s(), f(E, { key: 1 }, [
            St,
            G(" " + F(h.value), 1)
          ], 64))
        ]),
        _: 1
      }, 8, ["resource", "resource-data", "confirm-modal", "disabled"]);
    };
  }
}), Dt = ["data-i", "data-draggable"], wt = {
  key: 1,
  "data-role": "invalid-drag-indicator"
}, Tt = {
  key: 2,
  class: "lkt-table-nav-cell"
}, Bt = { class: "lkt-table-nav-container" }, Et = /* @__PURE__ */ V("i", { class: "" }, null, -1), Lt = /* @__PURE__ */ V("i", { class: "" }, null, -1), It = ["data-column", "colspan", "title", "onClick"], Mt = {
  key: 4,
  class: "lkt-table-col-drop"
}, $t = /* @__PURE__ */ Q({
  __name: "LktTableRow",
  props: {
    modelValue: { default: () => ({}) },
    isDraggable: { type: Boolean, default: !0 },
    sortable: { type: Boolean, default: !0 },
    displayHiddenColumnsIndicator: { type: Boolean, default: !1 },
    hiddenIsVisible: { type: Boolean, default: !1 },
    addNavigation: { type: Boolean, default: !1 },
    latestRow: { type: Boolean, default: !1 },
    canDrop: { type: Boolean, default: !1 },
    editModeEnabled: { type: Boolean, default: !1 },
    i: { default: 0 },
    visibleColumns: { default: () => [] },
    emptyColumns: { default: () => [] },
    dropConfirm: { default: "" },
    dropText: { default: "" },
    dropResource: { default: "" }
  },
  emits: ["update:modelValue", "click", "show", "item-up", "item-down", "item-drop"],
  setup(l, { emit: t }) {
    const r = t, n = l, i = S(n.modelValue), o = (d, $, H) => {
      r("click", d, de("", { item: $, column: H }));
    }, h = (d, $) => {
      r("show", d, de("", { i: $ }));
    }, C = c(() => {
      let d = [];
      return n.sortable && n.isDraggable && d.push("handle"), d.join(" ");
    }), v = c(() => A.navButtonSlot !== ""), a = c(() => A.navButtonSlot);
    c(() => A.dropButtonSlot !== ""), c(() => A.dropButtonSlot);
    const u = () => {
      r("item-up", n.i);
    }, P = () => {
      r("item-down", n.i);
    }, J = () => {
      r("item-drop", n.i);
    };
    return N(() => n.modelValue, (d) => i.value = d), N(i, (d) => {
      r("update:modelValue", d, n.i);
    }, { deep: !0 }), (d, $) => {
      const H = M("lkt-button");
      return s(), f("tr", {
        "data-i": d.i,
        "data-draggable": d.isDraggable
      }, [
        d.sortable && d.isDraggable && d.editModeEnabled ? (s(), f("td", {
          key: 0,
          "data-role": "drag-indicator",
          class: ne(C.value)
        }, null, 2)) : d.sortable && d.editModeEnabled ? (s(), f("td", wt)) : g("", !0),
        d.addNavigation && d.editModeEnabled ? (s(), f("td", Tt, [
          V("div", Bt, [
            Y(H, {
              palette: "table-nav",
              disabled: d.i === 0,
              onClick: u
            }, {
              default: O(() => [
                v.value ? (s(), b(x(a.value), {
                  key: 0,
                  direction: "up"
                })) : (s(), f(E, { key: 1 }, [
                  Et,
                  G(" UP ")
                ], 64))
              ]),
              _: 1
            }, 8, ["disabled"]),
            Y(H, {
              palette: "table-nav",
              disabled: d.latestRow,
              onClick: P
            }, {
              default: O(() => [
                v.value ? (s(), b(x(a.value), {
                  key: 0,
                  direction: "down"
                })) : (s(), f(E, { key: 1 }, [
                  Lt,
                  G(" DOWN ")
                ], 64))
              ]),
              _: 1
            }, 8, ["disabled"])
          ])
        ])) : g("", !0),
        d.displayHiddenColumnsIndicator ? (s(), f("td", {
          key: 3,
          onClick: $[0] || ($[0] = (y) => h(y, d.i)),
          "data-role": "show-more",
          class: ne(d.hiddenIsVisible ? "state-open" : "")
        }, null, 2)) : g("", !0),
        (s(!0), f(E, null, j(d.visibleColumns, (y) => (s(), f(E, null, [
          B(bt)(y, d.emptyColumns, i.value) ? (s(), f("td", {
            key: 0,
            "data-column": y.key,
            colspan: B(me)(y, i.value),
            title: B(Z)(y, i.value, d.i, d.visibleColumns),
            onClick: (p) => o(p, i.value, y)
          }, [
            d.$slots[y.key] ? W(d.$slots, y.key, {
              key: 0,
              value: i.value[y.key],
              item: i.value,
              column: y,
              i: d.i
            }) : i.value ? (s(), b(Ie, {
              key: 1,
              modelValue: i.value,
              "onUpdate:modelValue": $[1] || ($[1] = (p) => i.value = p),
              column: y,
              columns: d.visibleColumns,
              "edit-mode-enabled": d.editModeEnabled,
              i: d.i
            }, null, 8, ["modelValue", "column", "columns", "edit-mode-enabled", "i"])) : g("", !0)
          ], 8, It)) : g("", !0)
        ], 64))), 256)),
        d.canDrop && d.editModeEnabled ? (s(), f("td", Mt, [
          Y(Vt, {
            resource: d.dropResource,
            "resource-data": i.value,
            confirm: d.dropConfirm,
            text: d.dropText,
            onClick: J
          }, null, 8, ["resource", "resource-data", "confirm", "text"])
        ])) : g("", !0)
      ], 8, Dt);
    };
  }
}), At = { "data-role": "hidden-row" }, Rt = ["colspan"], Ot = ["data-column"], Nt = ["data-i"], Ft = ["data-column", "title", "onClick"], _t = /* @__PURE__ */ Q({
  __name: "LktHiddenRow",
  props: {
    modelValue: { default: () => ({}) },
    isDraggable: { type: Boolean, default: !0 },
    sortable: { type: Boolean, default: !0 },
    hiddenIsVisible: { type: Boolean, default: !1 },
    i: { default: 0 },
    hiddenColumnsColSpan: { default: 0 },
    visibleColumns: { default: () => [] },
    hiddenColumns: { default: () => [] },
    emptyColumns: { default: () => [] }
  },
  emits: ["update:modelValue", "click"],
  setup(l, { emit: t }) {
    const r = t, n = l, i = S(n.modelValue), o = (h, C, v) => {
      r("click", h, de("", { item: C, column: v }));
    };
    return N(() => n.modelValue, (h) => i.value = h), N(i, () => r("update:modelValue", i.value)), (h, C) => te((s(), f("tr", At, [
      V("td", { colspan: h.hiddenColumnsColSpan }, [
        V("table", null, [
          V("tr", null, [
            (s(!0), f(E, null, j(h.hiddenColumns, (v) => (s(), f("th", {
              "data-column": v.key
            }, [
              V("div", null, F(v.label), 1)
            ], 8, Ot))), 256))
          ]),
          V("tr", { "data-i": h.i }, [
            (s(!0), f(E, null, j(h.hiddenColumns, (v, a) => (s(), f("td", {
              "data-column": v.key,
              title: B(Z)(v, i.value, a, h.hiddenColumns),
              onClick: (u) => o(u, i.value, v)
            }, [
              h.$slots[v.key] ? W(h.$slots, v.key, {
                key: 0,
                value: i.value[v.key],
                item: i.value,
                column: v,
                i: a
              }) : (s(), b(Ie, {
                key: 1,
                column: v,
                columns: h.hiddenColumns,
                modelValue: i.value,
                "onUpdate:modelValue": C[0] || (C[0] = (u) => i.value = u),
                i: a
              }, null, 8, ["column", "columns", "modelValue", "i"]))
            ], 8, Ft))), 256))
          ], 8, Nt)
        ])
      ], 8, Rt)
    ], 512)), [
      [le, h.hiddenIsVisible]
    ]);
  }
}), Ut = /* @__PURE__ */ V("i", { class: "" }, null, -1), Le = /* @__PURE__ */ Q({
  __name: "CreateButton",
  props: {
    disabled: { type: Boolean, default: !1 },
    text: { type: Boolean, default: "" }
  },
  emits: ["click"],
  setup(l, { emit: t }) {
    const r = t, n = l, i = c(() => A.createButtonSlot !== ""), o = c(() => A.createButtonSlot), h = c(() => n.text.startsWith("__:") ? q(n.text.substring(3)) : n.text);
    return (C, v) => {
      const a = M("lkt-button");
      return s(), b(a, {
        palette: "table-create",
        disabled: C.disabled,
        onClick: v[0] || (v[0] = (u) => r("click"))
      }, {
        default: O(() => [
          i.value ? (s(), b(x(o.value), { key: 0 })) : (s(), f(E, { key: 1 }, [
            Ut,
            G(" " + F(h.value), 1)
          ], 64))
        ]),
        _: 1
      }, 8, ["disabled"]);
    };
  }
}), Ht = ["data-column", "data-sortable", "data-sort", "colspan", "title"], Kt = /* @__PURE__ */ Q({
  __name: "TableHeader",
  props: {
    column: { default: () => ({}) },
    sortBy: { default: "" },
    sortDirection: { default: "" },
    amountOfColumns: { default: 0 },
    items: { default: () => [] }
  },
  emits: ["click"],
  setup(l, { emit: t }) {
    const r = t, n = l, i = c(() => kt(n.column, n.amountOfColumns, n.items)), o = c(() => n.column.sortable === !0), h = c(() => o.value && n.sortBy === n.column.key ? n.sortDirection : ""), C = c(() => n.column.label.startsWith("__:") ? q(n.column.label.substring(3)) : n.column.label), v = () => {
      r("click", n.column);
    };
    return (a, u) => (s(), f("th", {
      "data-column": a.column.key,
      "data-sortable": o.value,
      "data-sort": h.value,
      colspan: i.value,
      title: C.value,
      onClick: v
    }, [
      V("div", null, F(C.value), 1)
    ], 8, Ht));
  }
}), Wt = ["id"], Pt = { key: 0 }, jt = { class: "lkt-table-page-buttons" }, Jt = { key: 1 }, zt = { class: "switch-edition-mode" }, qt = {
  key: 0,
  class: "lkt-table-page-buttons"
}, Gt = {
  key: 1,
  class: "lkt-table-page-filters"
}, Qt = ["data-sortable"], Xt = {
  key: 0,
  "data-role": "drag-indicator"
}, Yt = { key: 1 }, Zt = { key: 2 }, xt = {
  key: 3,
  class: "lkt-table-col-drop"
}, el = ["id"], tl = {
  key: 3,
  class: "lkt-empty-table"
}, ll = {
  key: 4,
  class: "lkt-table-page-empty"
}, ol = {
  key: 5,
  class: "lkt-table-page-buttons lkt-table-page-buttons-bottom"
}, al = /* @__PURE__ */ Q({
  __name: "LktTable",
  props: {
    modelValue: { default: () => [] },
    columns: { default: () => [] },
    sorter: { type: Function, default: Ee },
    draggableChecker: { type: Function, default: (l) => !0 },
    checkValidDrag: { type: Function, default: void 0 },
    sortable: { type: Boolean, default: !1 },
    hideEmptyColumns: { type: Boolean, default: !1 },
    draggableItemKey: { default: "name" },
    page: { default: 1 },
    resource: { default: "" },
    noResultsText: { default: "No results" },
    title: { default: "" },
    titleTag: { default: "h2" },
    titleIcon: { default: "h2" },
    wrapContentTag: { default: "div" },
    wrapContentClass: { default: "" },
    filters: { default: () => [] },
    dataStateConfig: { default: () => ({}) },
    hiddenSave: { type: Boolean, default: !1 },
    editMode: { type: Boolean, default: !1 },
    saveDisabled: { type: Boolean, default: !1 },
    saveValidator: { type: Function, default: () => !0 },
    saveConfirm: { default: "" },
    confirmData: { default: () => ({}) },
    saveResource: { default: "" },
    saveResourceData: { default: () => ({}) },
    saveText: { default: "Save" },
    createText: { default: "Add item" },
    dropText: { default: "Delete" },
    editModeText: { default: "Edit mode" },
    switchEditionEnabled: { type: Boolean, default: !1 },
    canCreate: { type: Boolean, default: !1 },
    canDrop: { type: Boolean, default: !1 },
    dropConfirm: { default: "" },
    dropResource: { default: "" },
    addNavigation: { type: Boolean, default: !1 },
    createEnabledValidator: { type: Function, default: void 0 }
  },
  emits: ["update:modelValue", "sort", "click", "save", "error", "before-save"],
  setup(l, { expose: t, emit: r }) {
    const n = r, i = ot(), o = l, h = {}, C = S(typeof o.sorter == "function" ? o.sorter : Ee), v = S(gt(o.columns)), a = S("asc"), u = S(o.modelValue), P = S(h), J = S(null), d = S(o.columns);
    let $ = [];
    const H = S(o.page), y = S(!1), p = S(!1), ee = S($), ce = S(null), Me = S({}), X = S(new it({ items: u.value }, o.dataStateConfig)), L = S(o.editMode), $e = (e) => {
      console.log("onResults", e), Array.isArray(e) && (u.value = e), y.value = !1, p.value = !0, X.value.store({ items: u.value }).turnStoredIntoOriginal();
    }, Ae = (e) => {
      ee.value = e;
    }, Re = () => re(() => y.value = !0), Oe = () => {
      ce.value.doRefresh();
    }, oe = st(12), se = c(() => {
      if (!o.hideEmptyColumns) return [];
      let e = [];
      return d.value.forEach((m) => {
        let k = m.key, w = !1;
        u.value.forEach((D) => {
          if (typeof D.checkEmpty == "function")
            return D.checkEmpty(D);
          D[k] && (w = !0);
        }), w || e.push(k);
      }), e;
    }), ae = c(() => d.value.filter((e) => !e.hidden)), ue = c(() => d.value.filter((e) => e.hidden)), Ne = c(() => {
      let e = ae.value.length + 1;
      return o.sortable && ++e, e;
    }), Fe = c(() => d.value.filter((e) => e.isForRowKey)), fe = c(() => ue.value.length > 0 && !o.sortable), _e = c(() => d.value.map((e) => e.key)), pe = c(() => {
      let e = [];
      for (let m in i) _e.value.indexOf(m) !== -1 && e.push(m);
      return e;
    }), ve = c(() => o.hiddenSave || y.value || !o.saveResource ? !1 : L.value && X.value.changed() ? !0 : L.value), Ue = c(() => o.switchEditionEnabled ? !0 : ve.value || L.value && o.canCreate), He = c(() => o.saveDisabled || typeof o.saveValidator == "function" && !o.saveValidator(u.value) ? !1 : X.value.changed()), Ke = c(() => u.value.length), We = c(() => ({
      items: u.value,
      ...o.saveResourceData
    })), Pe = c(() => o.titleTag === "" ? "h2" : o.titleTag), je = c(() => o.wrapContentTag === "" ? "div" : o.wrapContentTag), ie = c(() => o.title.startsWith("__:") ? q(o.title.substring(3)) : o.title), Je = c(() => o.saveText.startsWith("__:") ? q(o.saveText.substring(3)) : o.saveText), ze = c(() => o.editModeText.startsWith("__:") ? q(o.editModeText.substring(3)) : o.editModeText);
    c(() => ee.value.includes("create")), c(() => ee.value.includes("read")), c(() => ee.value.includes("update"));
    const he = c(() => ee.value.includes("drop")), qe = (e) => {
      let m = e.target;
      if (typeof m.dataset.column > "u")
        do
          m = m.parentNode;
        while (typeof m.dataset.column > "u" && m.tagName !== "TABLE" && m.tagName !== "body");
      if (m.tagName === "TD" && (m = m.parentNode, m = m.dataset.i, typeof m < "u"))
        return u.value[m];
    }, ye = (e) => P.value["tr_" + e] === !0, ke = (e) => {
      e && e.sortable && (u.value = u.value.sort((m, k) => C.value(m, k, e, a.value)), a.value = a.value === "asc" ? "desc" : "asc", v.value = e.key, n("sort", [v.value, a.value]));
    }, be = (e, m) => {
      n("click", e, m);
    }, ge = (e, m) => {
      let k = "tr_" + m.value.i;
      P.value[k] = typeof P.value[k] > "u" ? !0 : !P.value[k];
    }, Ce = () => {
      d.value.forEach((e) => {
        if (e.type === "select" && e.autoLoadSelectOptions) {
          let m = e.autoLoadSelectOptionsKey !== "" ? e.autoLoadSelectOptionsKey : e.key, k = [];
          u.value.forEach((D) => {
            Array.isArray(D[m]) && D[m].forEach((R) => k.push(R));
          });
          let w = {};
          k = k.filter(function(D) {
            return w[D.value] ? !1 : (w[D.value] = !0, !0);
          }), e.setOptions(k);
        }
      });
    }, Ge = (e) => typeof o.checkValidDrag == "function" ? o.checkValidDrag(e) : !0, Se = (e) => typeof o.draggableChecker == "function" ? o.draggableChecker(e) : !0, Ve = () => {
      u.value.push({});
    }, Qe = () => {
      y.value = !0;
    }, Xe = () => {
      y.value = !1;
    }, Ye = (e, m) => {
      if (n("before-save"), o.saveResource && (y.value = !1, !m.success)) {
        n("error", m.httpStatus);
        return;
      }
      X.value.turnStoredIntoOriginal(), n("save", m);
    }, De = (e, m, k) => {
      if (k >= e.length) {
        let w = k - e.length + 1;
        for (; w--; ) e.push(void 0);
      }
      return e.splice(k, 0, e.splice(m, 1)[0]), e;
    }, Ze = (e) => {
      De(u.value, e, e - 1);
    }, xe = (e) => {
      De(u.value, e, e + 1);
    }, et = (e) => {
      u.value.splice(e, 1);
    }, tt = () => {
      let e = document.getElementById("lkt-table-body-" + oe);
      Me.value = new rt(e, {
        direction: "vertical",
        handle: ".handle",
        animation: 150,
        onEnd: function(m) {
          let k = m.oldIndex, w = m.newIndex, D = JSON.parse(JSON.stringify(u.value));
          u.value.splice(k, 1, D[w]), u.value.splice(w, 1, D[k]);
        },
        onMove: function(m, k) {
          return Ge(m);
        }
      });
    }, we = (e, m, k = !1) => {
      let w = [oe, "row", m];
      return k && w.push("hidden"), Fe.value.forEach((D) => {
        let R = String(e[D.key]).toLowerCase();
        R.length > 50 && (R = R.substring(0, 50)), R = ut(R, " ", "-"), w.push(R);
      }), w.join("-");
    }, Te = c(() => typeof o.createEnabledValidator == "function" ? o.createEnabledValidator({ items: u.value }) : !0);
    return at(() => {
      Ce(), ke(Ct(o.columns, v.value)), X.value.store({ items: u.value }).turnStoredIntoOriginal(), o.sortable && re(() => {
        tt();
      });
    }), N(() => o.columns, (e) => d.value = e), N(() => o.modelValue, (e) => u.value = e), N(u, (e) => {
      Ce(), X.value.increment({ items: e }), n("update:modelValue", e);
    }, { deep: !0 }), t({
      getItemByEvent: qe,
      doRefresh: Oe
    }), (e, m) => {
      const k = M("lkt-button"), w = M("lkt-field-switch"), D = M("lkt-loader"), R = M("lkt-paginator");
      return s(), f("section", {
        class: "lkt-table-page",
        id: "lkt-table-page-" + B(oe)
      }, [
        ie.value || B(i).title ? (s(), f("header", Pt, [
          ie.value ? (s(), b(x(Pe.value), { key: 0 }, {
            default: O(() => [
              e.titleIcon ? (s(), f("i", {
                key: 0,
                class: ne(e.titleIcon)
              }, null, 2)) : g("", !0),
              G(" " + F(ie.value), 1)
            ]),
            _: 1
          })) : g("", !0),
          B(i).title ? W(e.$slots, "title", { key: 1 }) : g("", !0)
        ])) : g("", !0),
        (s(), b(x(je.value), {
          class: ne(["lkt-table-page-content-wrapper", e.wrapContentClass])
        }, {
          default: O(() => [
            te(V("div", jt, [
              te(Y(k, {
                ref: "saveButton",
                palette: "success",
                disabled: !He.value,
                "confirm-modal": e.saveConfirm,
                "confirm-data": e.confirmData,
                resource: e.saveResource,
                "resource-data": We.value,
                onLoading: Qe,
                onLoaded: Xe,
                onClick: Ye
              }, {
                default: O(() => [
                  B(i)["button-save"] ? W(e.$slots, "button-save", {
                    key: 0,
                    items: u.value,
                    editMode: e.editMode,
                    canUpdate: !e.saveDisabled
                  }) : (s(), f("span", Jt, F(Je.value), 1))
                ]),
                _: 3
              }, 8, ["disabled", "confirm-modal", "confirm-data", "resource", "resource-data"]), [
                [le, ve.value]
              ]),
              e.canCreate && L.value ? (s(), b(Le, {
                key: 0,
                disabled: !Te.value,
                text: e.createText,
                onClick: Ve
              }, null, 8, ["disabled", "text"])) : g("", !0),
              V("div", zt, [
                te(Y(w, {
                  modelValue: L.value,
                  "onUpdate:modelValue": m[0] || (m[0] = (T) => L.value = T),
                  label: ze.value
                }, null, 8, ["modelValue", "label"]), [
                  [le, e.switchEditionEnabled]
                ])
              ])
            ], 512), [
              [le, Ue.value]
            ]),
            B(i).buttons ? (s(), f("div", qt, [
              W(e.$slots, "buttons")
            ])) : g("", !0),
            p.value && B(i).filters ? (s(), f("div", Gt, [
              W(e.$slots, "filters", {
                items: u.value,
                isLoading: y.value
              })
            ])) : g("", !0),
            y.value ? (s(), b(D, { key: 2 })) : g("", !0),
            te(V("div", {
              class: "lkt-table",
              "data-sortable": e.sortable
            }, [
              V("table", null, [
                V("thead", null, [
                  V("tr", null, [
                    e.sortable && L.value ? (s(), f("th", Xt)) : g("", !0),
                    e.addNavigation && L.value ? (s(), f("th", Yt)) : g("", !0),
                    fe.value ? (s(), f("th", Zt)) : g("", !0),
                    (s(!0), f(E, null, j(ae.value, (T) => (s(), f(E, null, [
                      se.value.indexOf(T.key) === -1 ? (s(), b(Kt, {
                        key: 0,
                        column: T,
                        "sort-by": v.value,
                        "sort-direction": a.value,
                        "amount-of-columns": e.columns.length,
                        items: u.value,
                        onClick: (I) => ke(T)
                      }, null, 8, ["column", "sort-by", "sort-direction", "amount-of-columns", "items", "onClick"])) : g("", !0)
                    ], 64))), 256)),
                    e.canDrop && he.value && L.value ? (s(), f("th", xt)) : g("", !0)
                  ])
                ]),
                V("tbody", {
                  ref: (T) => J.value = T,
                  id: "lkt-table-body-" + B(oe)
                }, [
                  (s(!0), f(E, null, j(u.value, (T, I) => (s(), b($t, {
                    modelValue: u.value[I],
                    "onUpdate:modelValue": (K) => u.value[I] = K,
                    key: we(T, I),
                    i: I,
                    "display-hidden-columns-indicator": fe.value,
                    "is-draggable": Se(T),
                    sortable: e.sortable,
                    "visible-columns": ae.value,
                    "empty-columns": se.value,
                    "add-navigation": e.addNavigation,
                    "hidden-is-visible": ye(I),
                    "latest-row": I + 1 === Ke.value,
                    "can-drop": e.canDrop && he.value && L.value,
                    "drop-confirm": e.dropConfirm,
                    "drop-resource": e.dropResource,
                    "drop-text": e.dropText,
                    "edit-mode-enabled": L.value,
                    onClick: be,
                    onShow: ge,
                    onItemUp: Ze,
                    onItemDown: xe,
                    onItemDrop: et
                  }, Be({ _: 2 }, [
                    j(pe.value, (K) => ({
                      name: K,
                      fn: O((z) => [
                        W(e.$slots, K, {
                          item: z.item,
                          value: z.value,
                          column: z.column
                        })
                      ])
                    }))
                  ]), 1032, ["modelValue", "onUpdate:modelValue", "i", "display-hidden-columns-indicator", "is-draggable", "sortable", "visible-columns", "empty-columns", "add-navigation", "hidden-is-visible", "latest-row", "can-drop", "drop-confirm", "drop-resource", "drop-text", "edit-mode-enabled"]))), 128)),
                  ue.value.length > 0 ? (s(!0), f(E, { key: 0 }, j(u.value, (T, I) => (s(), b(_t, {
                    modelValue: u.value[I],
                    "onUpdate:modelValue": (K) => u.value[I] = K,
                    key: we(T, I, !0),
                    i: I,
                    "hidden-columns": ue.value,
                    "hidden-columns-col-span": Ne.value,
                    "is-draggable": Se(T),
                    sortable: e.sortable,
                    "visible-columns": ae.value,
                    "empty-columns": se.value,
                    "hidden-is-visible": ye(I),
                    onClick: be,
                    onShow: ge
                  }, Be({ _: 2 }, [
                    j(pe.value, (K) => ({
                      name: K,
                      fn: O((z) => [
                        W(e.$slots, K, {
                          item: z.item,
                          value: z.value,
                          column: z.column
                        })
                      ])
                    }))
                  ]), 1032, ["modelValue", "onUpdate:modelValue", "i", "hidden-columns", "hidden-columns-col-span", "is-draggable", "sortable", "visible-columns", "empty-columns", "hidden-is-visible"]))), 128)) : g("", !0)
                ], 8, el)
              ])
            ], 8, Qt), [
              [le, !y.value && u.value.length > 0]
            ]),
            e.$slots["no-items"] ? (s(), f("div", tl, [
              W(e.$slots, "no-items")
            ])) : g("", !0),
            !y.value && u.value.length === 0 ? (s(), f("div", ll, F(e.noResultsText), 1)) : g("", !0),
            e.canCreate && L.value ? (s(), f("div", ol, [
              e.canCreate && L.value ? (s(), b(Le, {
                key: 0,
                disabled: !Te.value,
                text: e.createText,
                onClick: Ve
              }, null, 8, ["disabled", "text"])) : g("", !0)
            ])) : g("", !0),
            Y(R, {
              ref_key: "paginator",
              ref: ce,
              modelValue: H.value,
              "onUpdate:modelValue": m[1] || (m[1] = (T) => H.value = T),
              resource: e.resource,
              filters: e.filters,
              onResults: $e,
              onLoading: Re,
              onPerms: Ae
            }, null, 8, ["modelValue", "resource", "filters"])
          ]),
          _: 3
        }, 8, ["class"]))
      ], 8, Wt);
    };
  }
}), Il = {
  install: (l) => {
    l.component("lkt-loader") === void 0 && l.use(dt), l.component("lkt-button") === void 0 && l.use(mt), l.component("lkt-paginator") === void 0 && l.use(ct), l.component("lkt-field-text") === void 0 && l.use(ft), l.component("lkt-field-textarea") === void 0 && l.use(pt), l.component("lkt-field-select") === void 0 && l.use(vt), l.component("lkt-field-switch") === void 0 && l.use(ht), l.component("lkt-field-file") === void 0 && l.use(yt), l.component("lkt-table") === void 0 && l.component("lkt-table", al);
  }
}, Ml = (l) => (A.navButtonSlot = l, !0), $l = (l) => (A.dropButtonSlot = l, !0), Al = (l) => (A.createButtonSlot = l, !0);
export {
  U as LktTableColumn,
  Sl as createActionColumn,
  Tl as createCheckColumn,
  gl as createColumn,
  Dl as createEmailColumn,
  Ll as createHiddenColumn,
  Cl as createLinkColumn,
  El as createSelectColumn,
  Bl as createSwitchColumn,
  wl as createTelColumn,
  Vl as createTextColumn,
  Il as default,
  Al as setTableCreateButtonSlot,
  $l as setTableDropButtonSlot,
  Ml as setTableNavButtonSlot
};
