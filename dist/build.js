import { reactive as A, defineComponent as J, ref as C, watch as $, nextTick as ve, computed as p, resolveComponent as L, openBlock as i, createBlock as b, withCtx as N, createTextVNode as ne, toDisplayString as G, unref as D, createElementBlock as f, Fragment as R, withModifiers as Ue, resolveDynamicComponent as X, createCommentVNode as y, normalizeClass as ae, createElementVNode as T, createVNode as _, renderList as q, renderSlot as O, withDirectives as le, vShow as oe, useSlots as ct, onMounted as mt, createSlots as Re } from "vue";
import { httpCall as ft } from "lkt-http-client";
import { __ as z } from "lkt-i18n";
import { createLktEvent as he } from "lkt-events";
import { replaceAll as Oe, generateRandomString as pt } from "lkt-string-tools";
import { DataState as vt } from "lkt-data-state";
import ht from "sortablejs";
import { time as se } from "lkt-date-tools";
import kt from "lkt-loader";
import yt from "lkt-button";
import bt from "lkt-paginator";
import gt from "lkt-field-text";
import Ct from "lkt-field-textarea";
import St from "lkt-field-select";
import Vt from "lkt-field-switch";
import Bt from "lkt-field-file";
class F {
  constructor(t = "", s = "") {
    this.preferSlot = !0, this.key = t, this.label = s, this.sortable = !0, this.hidden = !1, this.formatter = void 0, this.checkEmpty = void 0, this.colspan = void 0, this.preferSlot = !0, this.resource = "", this.resourceData = {}, this.isMultiple = !1, this.isLoading = !1, this.resourceLoaded = !1, this.valueSlot = "", this.editSlot = "", this.multipleDisplay = "", this.multipleDisplayEdition = "";
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
    return this.colspan = t, this;
  }
  setPreferSlot(t = !0) {
    return this.preferSlot = t, this;
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
  defineAsInteger() {
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
      const t = await ft(this.resource, this.resourceData);
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
  setAutoLoadSelectOptions(t = !0, s = "") {
    return this.autoLoadSelectOptions = t, this.autoLoadSelectOptionsKey = s, this;
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
  setIsEquivalentToSelectValue(t = !0) {
    return this.equivalentToSelectValue = t, this;
  }
}
const $l = (l, t, s = !0) => A(new F(l, t).setIsSortable(s)), Rl = (l, t, s, n = !0) => A(new F(l, t).setIsSortable(n).defineAsLink(s)), Al = (l, t, s, n = !0) => A(new F(l, t).setIsSortable(n).defineAsAction(s)), Fl = (l, t, s = !0) => A(new F(l, t).setIsSortable(s).defineAsText()), Ul = (l, t, s = !0) => A(new F(l, t).setIsSortable(s).defineAsInteger()), Ol = (l, t, s = !0) => A(new F(l, t).setIsSortable(s).defineAsFloat()), Nl = (l, t, s = !0) => A(new F(l, t).setIsSortable(s).defineAsEmail()), Wl = (l, t, s = !0) => A(new F(l, t).setIsSortable(s).defineAsTel()), Hl = (l, t, s = !0) => A(new F(l, t).setIsSortable(s).defineAsCheck()), Pl = (l, t, s = !0) => A(new F(l, t).setIsSortable(s).defineAsSwitch()), Kl = (l, t, s, n = !0) => A(new F(l, t).setIsSortable(n).defineAsSelect(s)), ql = (l, t, s = !0) => A(new F(l, t).setIsSortable(s).defineAsFile()), jl = (l, t, s = !0) => A(new F(l, t).setIsSortable(s).setIsHidden(!0)), Ae = (l, t, s, n) => {
  if (!s) return 0;
  let u = l[s.key], o = t[s.key];
  if (n === "asc") {
    if (u > o) return 1;
    if (o > u) return -1;
  } else {
    if (u > o) return -1;
    if (o > u) return 1;
  }
  return 0;
}, x = (l, t, s, n = []) => {
  if (l.extractTitleFromColumn) {
    let u = n.find((o) => o.key === l.extractTitleFromColumn);
    if (u)
      return x(u, t, s, n);
  }
  if (l.formatter && typeof l.formatter == "function") {
    let u = l.formatter(t[l.key], t, l, s);
    return u.startsWith("__:") ? z(u.substring(3)) : u;
  }
  return t[l.key];
}, Dt = (l, t, s) => {
  if (!l.colspan) return -1;
  let n = t;
  return s.forEach((u) => {
    let o = ke(l, u);
    o > 0 && o < n && (n = o);
  }), n;
}, ke = (l, t) => l.colspan === !1 ? !1 : typeof l.colspan == "function" ? l.colspan(t) : l.colspan, Et = (l, t) => typeof l.preferSlot > "u" ? !0 : l.preferSlot === !1 ? !1 : typeof l.preferSlot == "function" ? l.preferSlot(t) : !0, Tt = (l, t, s) => {
  if (typeof l != "object" || !l.key || t.indexOf(l.key) > -1) return !1;
  let n = ke(l, s);
  return typeof l.colspan > "u" ? !0 : (typeof l.colspan < "u" && (typeof l.colspan == "function" ? n = parseInt(l.colspan(s)) : n = parseInt(l.colspan)), n > 0);
}, wt = (l = []) => {
  if (l.length > 0) {
    for (let t = 0; t < l.length; ++t)
      if (l[t].sortable) return l[t].key;
  }
  return "";
}, It = (l, t) => {
  if (l.length > 0) {
    for (let s = 0; s < l.length; ++s)
      if (l[s].key === t) return l[s];
  }
  return null;
}, Ne = /* @__PURE__ */ J({
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
    const s = t, n = l, u = C(n.modelValue), o = C(u.value[n.column.key]), h = C(null), k = C(n.column.showLoading());
    $(o, (a) => {
      const r = JSON.parse(JSON.stringify(u.value));
      r[n.column.key] = a, s("update:modelValue", r);
    }), $(() => n.modelValue, (a) => {
      u.value = a, o.value = u.value[n.column.key];
    }), $(() => n.column, () => {
      n.column.resourceLoaded && ve(() => k.value = !1);
    }, { deep: !0 }), n.column.hasToLoadResource() && n.column.loadResource();
    const v = p(() => ({ ...n.column.slotData, item: u.value }));
    return (a, r) => {
      const j = L("lkt-anchor"), P = L("lkt-field-text"), U = L("lkt-field-switch"), Y = L("lkt-field-file"), d = L("lkt-loader"), M = L("lkt-field-select");
      return a.column.type === "link" ? (i(), b(j, {
        key: 0,
        to: a.column.getHref(u.value)
      }, {
        default: N(() => [
          ne(G(D(x)(a.column, u.value, a.i)), 1)
        ]),
        _: 1
      }, 8, ["to"])) : a.column.type === "action" ? (i(), f("a", {
        key: 1,
        href: "#",
        onClick: r[0] || (r[0] = (c) => a.column.doAction(u.value))
      }, G(D(x)(a.column, u.value, a.i)), 1)) : a.column.type === "text" ? (i(), b(P, {
        key: 2,
        "read-mode": !a.column.editable || !a.editModeEnabled,
        ref: (c) => h.value = c,
        "edit-slot": a.column.editSlot,
        "value-slot": a.column.valueSlot,
        "slot-data": v.value,
        modelValue: o.value,
        "onUpdate:modelValue": r[1] || (r[1] = (c) => o.value = c)
      }, null, 8, ["read-mode", "edit-slot", "value-slot", "slot-data", "modelValue"])) : a.column.type === "email" ? (i(), b(P, {
        key: 3,
        "read-mode": !a.column.editable || !a.editModeEnabled,
        ref: (c) => h.value = c,
        "edit-slot": a.column.editSlot,
        "value-slot": a.column.valueSlot,
        "slot-data": v.value,
        "is-email": "",
        modelValue: o.value,
        "onUpdate:modelValue": r[2] || (r[2] = (c) => o.value = c)
      }, null, 8, ["read-mode", "edit-slot", "value-slot", "slot-data", "modelValue"])) : a.column.type === "tel" ? (i(), b(P, {
        key: 4,
        "read-mode": !a.column.editable || !a.editModeEnabled,
        ref: (c) => h.value = c,
        "edit-slot": a.column.editSlot,
        "value-slot": a.column.valueSlot,
        "slot-data": v.value,
        "is-tel": "",
        modelValue: o.value,
        "onUpdate:modelValue": r[3] || (r[3] = (c) => o.value = c)
      }, null, 8, ["read-mode", "edit-slot", "value-slot", "slot-data", "modelValue"])) : a.column.type === "int" ? (i(), b(P, {
        key: 5,
        "read-mode": !a.column.editable || !a.editModeEnabled,
        ref: (c) => h.value = c,
        "edit-slot": a.column.editSlot,
        "value-slot": a.column.valueSlot,
        "slot-data": v.value,
        "is-number": "",
        modelValue: o.value,
        "onUpdate:modelValue": r[4] || (r[4] = (c) => o.value = c)
      }, null, 8, ["read-mode", "edit-slot", "value-slot", "slot-data", "modelValue"])) : a.column.type === "float" ? (i(), b(P, {
        key: 6,
        "read-mode": !a.column.editable || !a.editModeEnabled,
        ref: (c) => h.value = c,
        "edit-slot": a.column.editSlot,
        "value-slot": a.column.valueSlot,
        "slot-data": v.value,
        "is-number": "",
        modelValue: o.value,
        "onUpdate:modelValue": r[5] || (r[5] = (c) => o.value = c)
      }, null, 8, ["read-mode", "edit-slot", "value-slot", "slot-data", "modelValue"])) : a.column.type === "check" ? (i(), b(U, {
        key: 7,
        "is-check": "",
        "read-mode": !a.column.editable || !a.editModeEnabled,
        ref: (c) => h.value = c,
        modelValue: o.value,
        "onUpdate:modelValue": r[6] || (r[6] = (c) => o.value = c)
      }, null, 8, ["read-mode", "modelValue"])) : a.column.type === "switch" ? (i(), b(U, {
        key: 8,
        "read-mode": !a.column.editable || !a.editModeEnabled,
        ref: (c) => h.value = c,
        modelValue: o.value,
        "onUpdate:modelValue": r[7] || (r[7] = (c) => o.value = c)
      }, null, 8, ["read-mode", "modelValue"])) : a.column.type === "file" ? (i(), b(Y, {
        key: 9,
        "read-mode": !a.column.editable || !a.editModeEnabled,
        ref: (c) => h.value = c,
        modelValue: o.value,
        "onUpdate:modelValue": r[8] || (r[8] = (c) => o.value = c)
      }, null, 8, ["read-mode", "modelValue"])) : a.column.type === "select" ? (i(), f(R, { key: 10 }, [
        k.value ? (i(), b(d, { key: 0 })) : (i(), b(M, {
          key: 1,
          "read-mode": !a.column.editable || !a.editModeEnabled,
          ref: (c) => h.value = c,
          modelValue: o.value,
          "onUpdate:modelValue": r[9] || (r[9] = (c) => o.value = c),
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
      ], 64)) : (i(), f(R, { key: 11 }, [
        ne(G(D(x)(a.column, u.value, a.i, a.columns)), 1)
      ], 64));
    };
  }
}), W = {
  navButtonSlot: "",
  dropButtonSlot: "",
  editButtonSlot: "",
  createButtonSlot: ""
}, Lt = /* @__PURE__ */ J({
  __name: "DropButton",
  props: {
    disabled: { type: Boolean, default: !1 },
    text: { default: "" },
    icon: { default: "" },
    confirm: { default: "" },
    resource: { default: "" },
    resourceData: { default: () => ({}) }
  },
  emits: ["click"],
  setup(l, { emit: t }) {
    const s = t, n = l, u = p(() => W.dropButtonSlot !== ""), o = p(() => W.dropButtonSlot), h = p(() => n.text.startsWith("__:") ? z(n.text.substring(3)) : n.text);
    return (k, v) => {
      const a = L("lkt-button");
      return i(), b(a, {
        palette: "table-delete",
        icon: u.value ? "" : k.icon,
        text: u.value ? "" : h.value,
        resource: k.resource,
        "resource-data": k.resourceData,
        "confirm-modal": k.confirm,
        disabled: k.disabled,
        onClick: v[0] || (v[0] = Ue((r) => s("click"), ["prevent", "stop"]))
      }, {
        default: N(() => [
          u.value ? (i(), b(X(o.value), { key: 0 })) : y("", !0)
        ]),
        _: 1
      }, 8, ["icon", "text", "resource", "resource-data", "confirm-modal", "disabled"]);
    };
  }
}), Mt = /* @__PURE__ */ J({
  __name: "EditButton",
  props: {
    disabled: { type: Boolean, default: !1 },
    text: { default: "" },
    icon: { default: "" },
    confirm: { default: "" },
    link: { default: "" },
    resource: { default: "" },
    resourceData: { default: () => ({}) }
  },
  emits: ["click"],
  setup(l, { emit: t }) {
    const s = t, n = l, u = p(() => W.editButtonSlot !== ""), o = p(() => W.editButtonSlot), h = p(() => n.text.startsWith("__:") ? z(n.text.substring(3)) : n.text);
    return (k, v) => {
      const a = L("lkt-button");
      return i(), b(a, {
        palette: "table-delete",
        icon: u.value ? "" : k.icon,
        text: u.value ? "" : h.value,
        "on-click-to": k.link,
        "is-anchor": k.link !== "",
        resource: k.resource,
        "resource-data": k.resourceData,
        "confirm-modal": k.confirm,
        disabled: k.disabled,
        onClick: v[0] || (v[0] = Ue((r) => s("click"), ["prevent", "stop"]))
      }, {
        default: N(() => [
          u.value ? (i(), b(X(o.value), { key: 0 })) : y("", !0)
        ]),
        _: 1
      }, 8, ["icon", "text", "on-click-to", "is-anchor", "resource", "resource-data", "confirm-modal", "disabled"]);
    };
  }
}), $t = ["data-i", "data-draggable"], Rt = {
  key: 1,
  "data-role": "invalid-drag-indicator"
}, At = {
  key: 2,
  class: "lkt-table-nav-cell"
}, Ft = { class: "lkt-table-nav-container" }, Ut = /* @__PURE__ */ T("i", { class: "" }, null, -1), Ot = /* @__PURE__ */ T("i", { class: "" }, null, -1), Nt = ["data-column", "colspan", "title", "onClick"], Wt = {
  key: 4,
  class: "lkt-table-col-drop"
}, Ht = {
  key: 5,
  class: "lkt-table-col-edit"
}, Pt = /* @__PURE__ */ J({
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
    canEdit: { type: Boolean, default: !1 },
    editModeEnabled: { type: Boolean, default: !1 },
    i: { default: 0 },
    visibleColumns: { default: () => [] },
    emptyColumns: { default: () => [] },
    dropConfirm: { default: "" },
    dropText: { default: "" },
    dropIcon: { default: "" },
    dropResource: { default: "" },
    editText: { default: "" },
    editIcon: { default: "" },
    editLink: { default: "" }
  },
  emits: ["update:modelValue", "click", "show", "item-up", "item-down", "item-drop"],
  setup(l, { emit: t }) {
    const s = t, n = l, u = C(n.modelValue), o = C(n.editLink);
    for (let d in u.value) o.value = Oe(o.value, ":" + d, u.value[d]);
    const h = (d, M, c) => {
      s("click", d, he("", { item: M, column: c }));
    }, k = (d, M) => {
      s("show", d, he("", { i: M }));
    }, v = p(() => {
      let d = [];
      return n.sortable && n.isDraggable && d.push("handle"), d.join(" ");
    }), a = p(() => W.navButtonSlot !== ""), r = p(() => W.navButtonSlot), j = () => {
      s("item-up", n.i);
    }, P = () => {
      s("item-down", n.i);
    }, U = () => {
      s("item-drop", n.i);
    }, Y = () => {
    };
    return $(() => n.modelValue, (d) => u.value = d), $(u, (d) => {
      s("update:modelValue", d, n.i);
    }, { deep: !0 }), (d, M) => {
      const c = L("lkt-button");
      return i(), f("tr", {
        "data-i": d.i,
        "data-draggable": d.isDraggable
      }, [
        d.sortable && d.isDraggable && d.editModeEnabled ? (i(), f("td", {
          key: 0,
          "data-role": "drag-indicator",
          class: ae(v.value)
        }, null, 2)) : d.sortable && d.editModeEnabled ? (i(), f("td", Rt)) : y("", !0),
        d.addNavigation && d.editModeEnabled ? (i(), f("td", At, [
          T("div", Ft, [
            _(c, {
              palette: "table-nav",
              disabled: d.i === 0,
              onClick: j
            }, {
              default: N(() => [
                a.value ? (i(), b(X(r.value), {
                  key: 0,
                  direction: "up"
                })) : (i(), f(R, { key: 1 }, [
                  Ut,
                  ne(" UP ")
                ], 64))
              ]),
              _: 1
            }, 8, ["disabled"]),
            _(c, {
              palette: "table-nav",
              disabled: d.latestRow,
              onClick: P
            }, {
              default: N(() => [
                a.value ? (i(), b(X(r.value), {
                  key: 0,
                  direction: "down"
                })) : (i(), f(R, { key: 1 }, [
                  Ot,
                  ne(" DOWN ")
                ], 64))
              ]),
              _: 1
            }, 8, ["disabled"])
          ])
        ])) : y("", !0),
        d.displayHiddenColumnsIndicator ? (i(), f("td", {
          key: 3,
          onClick: M[0] || (M[0] = (V) => k(V, d.i)),
          "data-role": "show-more",
          class: ae(d.hiddenIsVisible ? "state-open" : "")
        }, null, 2)) : y("", !0),
        (i(!0), f(R, null, q(d.visibleColumns, (V) => (i(), f(R, null, [
          D(Tt)(V, d.emptyColumns, u.value) ? (i(), f("td", {
            key: "td" + d.i,
            "data-column": V.key,
            colspan: D(ke)(V, u.value),
            title: D(x)(V, u.value, d.i, d.visibleColumns),
            onClick: (ee) => h(ee, u.value, V)
          }, [
            d.$slots[V.key] && D(Et)(V, u.value) ? O(d.$slots, V.key, {
              key: 0,
              value: u.value[V.key],
              item: u.value,
              column: V,
              i: d.i
            }) : u.value ? (i(), b(Ne, {
              key: 1,
              modelValue: u.value,
              "onUpdate:modelValue": M[1] || (M[1] = (ee) => u.value = ee),
              column: V,
              columns: d.visibleColumns,
              "edit-mode-enabled": d.editModeEnabled,
              i: d.i
            }, null, 8, ["modelValue", "column", "columns", "edit-mode-enabled", "i"])) : y("", !0)
          ], 8, Nt)) : y("", !0)
        ], 64))), 256)),
        d.canDrop && d.editModeEnabled ? (i(), f("td", Wt, [
          _(Lt, {
            resource: d.dropResource,
            "resource-data": u.value,
            confirm: d.dropConfirm,
            text: d.dropText,
            icon: d.dropIcon,
            onClick: U
          }, null, 8, ["resource", "resource-data", "confirm", "text", "icon"])
        ])) : y("", !0),
        d.canEdit && d.editModeEnabled ? (i(), f("td", Ht, [
          _(Mt, {
            "resource-data": u.value,
            text: d.editText,
            icon: d.editIcon,
            link: o.value,
            onClick: Y
          }, null, 8, ["resource-data", "text", "icon", "link"])
        ])) : y("", !0)
      ], 8, $t);
    };
  }
}), Kt = { "data-role": "hidden-row" }, qt = ["colspan"], jt = ["data-column"], Gt = ["data-i"], zt = ["data-column", "title", "onClick"], Jt = /* @__PURE__ */ J({
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
    const s = t, n = l, u = C(n.modelValue), o = (h, k, v) => {
      s("click", h, he("", { item: k, column: v }));
    };
    return $(() => n.modelValue, (h) => u.value = h), $(u, () => s("update:modelValue", u.value)), (h, k) => le((i(), f("tr", Kt, [
      T("td", { colspan: h.hiddenColumnsColSpan }, [
        T("table", null, [
          T("tr", null, [
            (i(!0), f(R, null, q(h.hiddenColumns, (v) => (i(), f("th", {
              "data-column": v.key
            }, [
              T("div", null, G(v.label), 1)
            ], 8, jt))), 256))
          ]),
          T("tr", { "data-i": h.i }, [
            (i(!0), f(R, null, q(h.hiddenColumns, (v, a) => (i(), f("td", {
              "data-column": v.key,
              title: D(x)(v, u.value, a, h.hiddenColumns),
              onClick: (r) => o(r, u.value, v)
            }, [
              h.$slots[v.key] ? O(h.$slots, v.key, {
                key: 0,
                value: u.value[v.key],
                item: u.value,
                column: v,
                i: a
              }) : (i(), b(Ne, {
                key: 1,
                column: v,
                columns: h.hiddenColumns,
                modelValue: u.value,
                "onUpdate:modelValue": k[0] || (k[0] = (r) => u.value = r),
                i: a
              }, null, 8, ["column", "columns", "modelValue", "i"]))
            ], 8, zt))), 256))
          ], 8, Gt)
        ])
      ], 8, qt)
    ], 512)), [
      [oe, h.hiddenIsVisible]
    ]);
  }
}), Fe = /* @__PURE__ */ J({
  __name: "CreateButton",
  props: {
    disabled: { type: Boolean, default: !1 },
    text: { default: "" },
    icon: { default: "" },
    to: { default: "" }
  },
  emits: ["click"],
  setup(l, { emit: t }) {
    const s = t, n = l, u = p(() => W.createButtonSlot !== ""), o = p(() => W.createButtonSlot), h = p(() => n.text.startsWith("__:") ? z(n.text.substring(3)) : n.text);
    return (k, v) => {
      const a = L("lkt-button");
      return i(), b(a, {
        palette: "table-create",
        disabled: k.disabled,
        icon: u.value ? "" : k.icon,
        text: u.value ? "" : h.value,
        "on-click-to": k.to,
        onClick: v[0] || (v[0] = (r) => s("click"))
      }, {
        default: N(() => [
          u.value ? (i(), b(X(o.value), { key: 0 })) : y("", !0)
        ]),
        _: 1
      }, 8, ["disabled", "icon", "text", "on-click-to"]);
    };
  }
}), Qt = ["data-column", "data-sortable", "data-sort", "colspan", "title"], Xt = /* @__PURE__ */ J({
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
    const s = t, n = l, u = p(() => Dt(n.column, n.amountOfColumns, n.items)), o = p(() => n.column.sortable === !0), h = p(() => o.value && n.sortBy === n.column.key ? n.sortDirection : ""), k = p(() => n.column.label.startsWith("__:") ? z(n.column.label.substring(3)) : n.column.label), v = () => {
      s("click", n.column);
    };
    return (a, r) => (i(), f("th", {
      "data-column": a.column.key,
      "data-sortable": o.value,
      "data-sort": h.value,
      colspan: u.value,
      title: k.value,
      onClick: v
    }, [
      T("div", null, G(k.value), 1)
    ], 8, Qt));
  }
}), Yt = ["id"], Zt = { key: 0 }, _t = { class: "lkt-table-page-buttons" }, xt = { key: 1 }, el = { class: "switch-edition-mode" }, tl = {
  key: 0,
  class: "lkt-table-page-buttons"
}, ll = {
  key: 1,
  class: "lkt-table-page-filters"
}, ol = ["data-sortable"], al = { key: 0 }, nl = {
  key: 0,
  "data-role": "drag-indicator"
}, ul = { key: 1 }, il = { key: 2 }, rl = {
  key: 3,
  class: "lkt-table-col-drop"
}, sl = {
  key: 4,
  class: "lkt-table-col-edit"
}, dl = ["id"], cl = { class: "lkt-table-item" }, ml = {
  key: 3,
  class: "lkt-empty-table"
}, fl = {
  key: 4,
  class: "lkt-table-page-empty"
}, pl = {
  key: 5,
  class: "lkt-table-page-buttons lkt-table-page-buttons-bottom"
}, vl = /* @__PURE__ */ J({
  __name: "LktTable",
  props: {
    modelValue: { default: () => [] },
    columns: { default: () => [] },
    sorter: { type: Function, default: Ae },
    draggableChecker: { type: Function, default: (l) => !0 },
    checkValidDrag: { type: Function, default: void 0 },
    sortable: { type: Boolean, default: !1 },
    hideEmptyColumns: { type: Boolean, default: !1 },
    initialSorting: { type: Boolean, default: !1 },
    draggableItemKey: { default: "name" },
    page: { default: 1 },
    perms: { default: [] },
    resource: { default: "" },
    noResultsText: { default: "No results" },
    title: { default: "" },
    titleTag: { default: "h2" },
    titleIcon: { default: "" },
    wrapContentTag: { default: "div" },
    wrapContentClass: { default: "" },
    itemsContainerClass: { default: "" },
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
    createIcon: { default: "" },
    createRoute: { default: "" },
    dropText: { default: "Delete" },
    dropIcon: { default: "" },
    editText: { default: "Edit" },
    editIcon: { default: "" },
    editLink: { default: "" },
    editModeText: { default: "Edit mode" },
    switchEditionEnabled: { type: Boolean, default: !1 },
    createDisabled: { type: Boolean },
    canCreate: { type: Boolean, default: !1 },
    canCreateWithoutEdition: { type: Boolean, default: !1 },
    canEditButton: { type: Boolean, default: !1 },
    canDrop: { type: Boolean, default: !1 },
    dropConfirm: { default: "" },
    dropResource: { default: "" },
    addNavigation: { type: Boolean, default: !1 },
    itemMode: { type: Boolean, default: !1 },
    createEnabledValidator: { type: Function, default: void 0 },
    newValueGenerator: { type: Function, default: void 0 },
    requiredItemsForTopCreate: { default: 0 },
    requiredItemsForBottomCreate: { default: 0 }
  },
  emits: ["update:modelValue", "update:perms", "sort", "click", "save", "error", "before-save", "read-response", "click-create"],
  setup(l, { expose: t, emit: s }) {
    const n = s, u = ct(), o = l, h = {}, k = C(typeof o.sorter == "function" ? o.sorter : Ae), v = C(wt(o.columns)), a = C("asc"), r = C(o.modelValue), j = C(h), P = C(null), U = C(o.columns), Y = C(o.page), d = C(!1), M = C(!1), c = C(o.perms), V = C(null), ee = C({}), Z = C(new vt({ items: r.value }, o.dataStateConfig)), w = C(o.editMode), te = C(0), We = (e) => {
      Array.isArray(e) && (r.value = e), d.value = !1, M.value = !0, Z.value.store({ items: r.value }).turnStoredIntoOriginal();
    }, He = (e) => {
      c.value = e;
    }, Pe = (e) => {
    }, Ke = (e) => {
      n("read-response", e);
    }, qe = () => ve(() => d.value = !0), je = () => {
      V.value.doRefresh();
    }, ue = pt(12), de = p(() => {
      if (!o.hideEmptyColumns) return [];
      let e = [];
      return U.value.forEach((m) => {
        let g = m.key, E = !1;
        r.value.forEach((I) => {
          if (typeof I.checkEmpty == "function")
            return I.checkEmpty(I);
          I[g] && (E = !0);
        }), E || e.push(g);
      }), e;
    }), ie = p(() => U.value.filter((e) => !e.hidden)), ce = p(() => U.value.filter((e) => e.hidden)), Ge = p(() => {
      let e = ie.value.length + 1;
      return o.sortable && ++e, e;
    }), ze = p(() => U.value.filter((e) => e.isForRowKey)), ye = p(() => ce.value.length > 0 && !o.sortable), Je = p(() => U.value.map((e) => e.key)), be = p(() => {
      let e = [];
      for (let m in u) Je.value.indexOf(m) !== -1 && e.push(m);
      return e;
    }), ge = p(() => o.hiddenSave || d.value || !o.saveResource ? !1 : w.value && Z.value.changed() ? !0 : w.value), Qe = p(() => re.value || o.switchEditionEnabled ? !0 : ge.value || w.value && o.canCreate), Xe = p(() => o.saveDisabled || typeof o.saveValidator == "function" && !o.saveValidator(r.value) ? !1 : Z.value.changed()), Ye = p(() => r.value.length), Ze = p(() => ({
      items: r.value,
      ...o.saveResourceData
    })), _e = p(() => o.titleTag === "" ? "h2" : o.titleTag), xe = p(() => o.wrapContentTag === "" ? "div" : o.wrapContentTag), me = p(() => o.title.startsWith("__:") ? z(o.title.substring(3)) : o.title), et = p(() => o.saveText.startsWith("__:") ? z(o.saveText.substring(3)) : o.saveText), tt = p(() => o.editModeText.startsWith("__:") ? z(o.editModeText.substring(3)) : o.editModeText), Ce = p(() => c.value.includes("create")), lt = p(() => c.value.includes("read")), fe = p(() => c.value.includes("update")), pe = p(() => c.value.includes("drop")), ot = (e) => {
      let m = e.target;
      if (typeof m.dataset.column > "u")
        do
          m = m.parentNode;
        while (typeof m.dataset.column > "u" && m.tagName !== "TABLE" && m.tagName !== "body");
      if (m.tagName === "TD" && (m = m.parentNode, m = m.dataset.i, typeof m < "u"))
        return r.value[m];
    }, Se = (e) => j.value["tr_" + e] === !0, Ve = (e) => {
      e && e.sortable && (r.value = r.value.sort((m, g) => k.value(m, g, e, a.value)), a.value = a.value === "asc" ? "desc" : "asc", v.value = e.key, n("sort", [v.value, a.value]));
    }, Be = (e, m) => {
      n("click", e, m);
    }, De = (e, m) => {
      let g = "tr_" + m.value.i;
      j.value[g] = typeof j.value[g] > "u" ? !0 : !j.value[g];
    }, Ee = () => {
      U.value.forEach((e) => {
        if (e.type === "select" && e.autoLoadSelectOptions) {
          let m = e.autoLoadSelectOptionsKey !== "" ? e.autoLoadSelectOptionsKey : e.key, g = [];
          r.value.forEach((I) => {
            Array.isArray(I[m]) && I[m].forEach((H) => g.push(H));
          });
          let E = {};
          g = g.filter(function(I) {
            return E[I.value] ? !1 : (E[I.value] = !0, !0);
          }), e.setOptions(g);
        }
      });
    }, at = (e) => typeof o.checkValidDrag == "function" ? o.checkValidDrag(e) : !0, Te = (e) => typeof o.draggableChecker == "function" ? o.draggableChecker(e) : !0, we = () => {
      if (o.canCreateWithoutEdition)
        n("click-create");
      else {
        if (typeof o.newValueGenerator == "function") {
          let e = o.newValueGenerator();
          if (typeof e == "object") {
            r.value.push(e);
            return;
          }
        }
        r.value.push({});
      }
    }, nt = () => {
      d.value = !0;
    }, ut = () => {
      d.value = !1;
    }, it = (e, m) => {
      if (n("before-save"), o.saveResource && (d.value = !1, !m.success)) {
        n("error", m.httpStatus);
        return;
      }
      Z.value.turnStoredIntoOriginal(), n("save", m);
    }, Ie = (e, m, g) => {
      if (g >= e.length) {
        let E = g - e.length + 1;
        for (; E--; ) e.push(void 0);
      }
      return e.splice(g, 0, e.splice(m, 1)[0]), e;
    }, rt = (e) => {
      Ie(r.value, e, e - 1), te.value = se();
    }, st = (e) => {
      Ie(r.value, e, e + 1), te.value = se();
    }, Le = (e) => {
      r.value.splice(e, 1), te.value = se();
    }, dt = () => {
      let e = document.getElementById("lkt-table-body-" + ue);
      ee.value = new ht(e, {
        direction: "vertical",
        handle: ".handle",
        animation: 150,
        onEnd: function(m) {
          let g = m.oldIndex, E = m.newIndex;
          r.value.splice(E, 0, r.value.splice(g, 1)[0]), te.value = se();
        },
        onMove: function(m, g) {
          return at(m);
        }
      });
    }, Me = (e, m, g = !1) => {
      let E = [te.value, ue, "row", m];
      return g && E.push("hidden"), ze.value.forEach((I) => {
        let H = String(e[I.key]).toLowerCase();
        H.length > 50 && (H = H.substring(0, 50)), H = Oe(H, " ", "-"), E.push(H);
      }), E.join("-");
    }, $e = p(() => typeof o.createEnabledValidator == "function" ? o.createEnabledValidator({ items: r.value }) : !0), re = p(() => Ce.value ? o.canCreateWithoutEdition || o.canCreate && w.value : !1);
    return mt(() => {
      Ee(), o.initialSorting && Ve(It(o.columns, v.value)), Z.value.store({ items: r.value }).turnStoredIntoOriginal(), o.sortable && ve(() => {
        dt();
      });
    }), $(() => o.perms, (e) => c.value = e), $(c, (e) => n("update:perms", e)), $(() => o.editMode, (e) => w.value = e), $(() => o.columns, (e) => U.value = e), $(() => o.modelValue, (e) => r.value = e), $(r, (e) => {
      Ee(), Z.value.increment({ items: e }), n("update:modelValue", e);
    }, { deep: !0 }), t({
      getItemByEvent: ot,
      doRefresh: je
    }), (e, m) => {
      const g = L("lkt-button"), E = L("lkt-field-switch"), I = L("lkt-loader"), H = L("lkt-paginator");
      return i(), f("section", {
        class: "lkt-table-page",
        id: "lkt-table-page-" + D(ue)
      }, [
        me.value || D(u).title ? (i(), f("header", Zt, [
          me.value ? (i(), b(X(_e.value), { key: 0 }, {
            default: N(() => [
              e.titleIcon ? (i(), f("i", {
                key: 0,
                class: ae(e.titleIcon)
              }, null, 2)) : y("", !0),
              ne(" " + G(me.value), 1)
            ]),
            _: 1
          })) : y("", !0),
          D(u).title ? O(e.$slots, "title", { key: 1 }) : y("", !0)
        ])) : y("", !0),
        (i(), b(X(xe.value), {
          class: ae(["lkt-table-page-content-wrapper", e.wrapContentClass])
        }, {
          default: N(() => [
            le(T("div", _t, [
              le(_(g, {
                ref: "saveButton",
                palette: "success",
                disabled: !Xe.value,
                "confirm-modal": e.saveConfirm,
                "confirm-data": e.confirmData,
                resource: e.saveResource,
                "resource-data": Ze.value,
                onLoading: nt,
                onLoaded: ut,
                onClick: it
              }, {
                default: N(() => [
                  D(u)["button-save"] ? O(e.$slots, "button-save", {
                    key: 0,
                    items: r.value,
                    editMode: e.editMode,
                    canUpdate: !e.saveDisabled
                  }) : (i(), f("span", xt, G(et.value), 1))
                ]),
                _: 3
              }, 8, ["disabled", "confirm-modal", "confirm-data", "resource", "resource-data"]), [
                [oe, ge.value]
              ]),
              re.value && r.value.length >= e.requiredItemsForTopCreate ? (i(), b(Fe, {
                key: 0,
                disabled: !$e.value || e.createDisabled,
                text: e.createText,
                icon: e.createIcon,
                to: e.createRoute,
                onClick: we
              }, null, 8, ["disabled", "text", "icon", "to"])) : y("", !0),
              T("div", el, [
                le(_(E, {
                  modelValue: w.value,
                  "onUpdate:modelValue": m[0] || (m[0] = (S) => w.value = S),
                  label: tt.value
                }, null, 8, ["modelValue", "label"]), [
                  [oe, e.switchEditionEnabled]
                ])
              ])
            ], 512), [
              [oe, Qe.value]
            ]),
            D(u).buttons ? (i(), f("div", tl, [
              O(e.$slots, "buttons")
            ])) : y("", !0),
            M.value && D(u).filters ? (i(), f("div", ll, [
              O(e.$slots, "filters", {
                items: r.value,
                isLoading: d.value
              })
            ])) : y("", !0),
            d.value ? (i(), b(I, { key: 2 })) : y("", !0),
            le(T("div", {
              class: "lkt-table",
              "data-sortable": e.sortable
            }, [
              e.itemMode ? (i(), f("div", {
                key: 1,
                class: ae(["lkt-table-items-container", e.itemsContainerClass])
              }, [
                (i(!0), f(R, null, q(r.value, (S, B) => (i(), f("div", cl, [
                  O(e.$slots, "item", {
                    item: S,
                    index: B,
                    canCreate: Ce.value,
                    canRead: lt.value,
                    canUpdate: fe.value,
                    canDrop: pe.value,
                    isLoading: d.value,
                    doDrop: () => Le(B)
                  })
                ]))), 256))
              ], 2)) : (i(), f("table", al, [
                T("thead", null, [
                  T("tr", null, [
                    e.sortable && w.value ? (i(), f("th", nl)) : y("", !0),
                    e.addNavigation && w.value ? (i(), f("th", ul)) : y("", !0),
                    ye.value ? (i(), f("th", il)) : y("", !0),
                    (i(!0), f(R, null, q(ie.value, (S) => (i(), f(R, null, [
                      de.value.indexOf(S.key) === -1 ? (i(), b(Xt, {
                        key: 0,
                        column: S,
                        "sort-by": v.value,
                        "sort-direction": a.value,
                        "amount-of-columns": e.columns.length,
                        items: r.value,
                        onClick: (B) => Ve(S)
                      }, null, 8, ["column", "sort-by", "sort-direction", "amount-of-columns", "items", "onClick"])) : y("", !0)
                    ], 64))), 256)),
                    e.canDrop && pe.value && w.value ? (i(), f("th", rl)) : y("", !0),
                    e.canEditButton && fe.value && w.value ? (i(), f("th", sl)) : y("", !0)
                  ])
                ]),
                T("tbody", {
                  ref: (S) => P.value = S,
                  id: "lkt-table-body-" + D(ue)
                }, [
                  (i(!0), f(R, null, q(r.value, (S, B) => (i(), b(Pt, {
                    modelValue: r.value[B],
                    "onUpdate:modelValue": (K) => r.value[B] = K,
                    key: Me(S, B),
                    i: B,
                    "display-hidden-columns-indicator": ye.value,
                    "is-draggable": Te(S),
                    sortable: e.sortable,
                    "visible-columns": ie.value,
                    "empty-columns": de.value,
                    "add-navigation": e.addNavigation,
                    "hidden-is-visible": Se(B),
                    "latest-row": B + 1 === Ye.value,
                    "can-drop": e.canDrop && pe.value && w.value,
                    "drop-confirm": e.dropConfirm,
                    "drop-resource": e.dropResource,
                    "drop-text": e.dropText,
                    "drop-icon": e.dropIcon,
                    "can-edit": e.canEditButton && fe.value && w.value,
                    "edit-text": e.editText,
                    "edit-icon": e.editIcon,
                    "edit-link": e.editLink,
                    "edit-mode-enabled": w.value,
                    onClick: Be,
                    onShow: De,
                    onItemUp: rt,
                    onItemDown: st,
                    onItemDrop: Le
                  }, Re({ _: 2 }, [
                    q(be.value, (K) => ({
                      name: K,
                      fn: N((Q) => [
                        O(e.$slots, K, {
                          item: Q.item,
                          value: Q.value,
                          column: Q.column
                        })
                      ])
                    }))
                  ]), 1032, ["modelValue", "onUpdate:modelValue", "i", "display-hidden-columns-indicator", "is-draggable", "sortable", "visible-columns", "empty-columns", "add-navigation", "hidden-is-visible", "latest-row", "can-drop", "drop-confirm", "drop-resource", "drop-text", "drop-icon", "can-edit", "edit-text", "edit-icon", "edit-link", "edit-mode-enabled"]))), 128)),
                  ce.value.length > 0 ? (i(!0), f(R, { key: 0 }, q(r.value, (S, B) => (i(), b(Jt, {
                    modelValue: r.value[B],
                    "onUpdate:modelValue": (K) => r.value[B] = K,
                    key: Me(S, B, !0),
                    i: B,
                    "hidden-columns": ce.value,
                    "hidden-columns-col-span": Ge.value,
                    "is-draggable": Te(S),
                    sortable: e.sortable,
                    "visible-columns": ie.value,
                    "empty-columns": de.value,
                    "hidden-is-visible": Se(B),
                    onClick: Be,
                    onShow: De
                  }, Re({ _: 2 }, [
                    q(be.value, (K) => ({
                      name: K,
                      fn: N((Q) => [
                        O(e.$slots, K, {
                          item: Q.item,
                          value: Q.value,
                          column: Q.column
                        })
                      ])
                    }))
                  ]), 1032, ["modelValue", "onUpdate:modelValue", "i", "hidden-columns", "hidden-columns-col-span", "is-draggable", "sortable", "visible-columns", "empty-columns", "hidden-is-visible"]))), 128)) : y("", !0)
                ], 8, dl)
              ]))
            ], 8, ol), [
              [oe, !d.value && r.value.length > 0]
            ]),
            e.$slots["no-items"] ? (i(), f("div", ml, [
              O(e.$slots, "no-items")
            ])) : y("", !0),
            !d.value && r.value.length === 0 ? (i(), f("div", fl, G(e.noResultsText), 1)) : y("", !0),
            re.value || D(u).bottomButtons ? (i(), f("div", pl, [
              re.value && r.value.length >= e.requiredItemsForBottomCreate ? (i(), b(Fe, {
                key: 0,
                disabled: !$e.value || e.createDisabled,
                text: e.createText,
                icon: e.createIcon,
                to: e.createRoute,
                onClick: we
              }, null, 8, ["disabled", "text", "icon", "to"])) : y("", !0),
              O(e.$slots, "bottom-buttons")
            ])) : y("", !0),
            e.resource.length > 0 ? (i(), b(H, {
              key: 6,
              ref_key: "paginator",
              ref: V,
              modelValue: Y.value,
              "onUpdate:modelValue": m[1] || (m[1] = (S) => Y.value = S),
              resource: e.resource,
              filters: e.filters,
              onResults: We,
              onLoading: qe,
              onPerms: He,
              onCustom: Pe,
              onResponse: Ke
            }, null, 8, ["modelValue", "resource", "filters"])) : y("", !0)
          ]),
          _: 3
        }, 8, ["class"]))
      ], 8, Yt);
    };
  }
}), Gl = {
  install: (l) => {
    l.component("lkt-loader") === void 0 && l.use(kt), l.component("lkt-button") === void 0 && l.use(yt), l.component("lkt-paginator") === void 0 && l.use(bt), l.component("lkt-field-text") === void 0 && l.use(gt), l.component("lkt-field-textarea") === void 0 && l.use(Ct), l.component("lkt-field-select") === void 0 && l.use(St), l.component("lkt-field-switch") === void 0 && l.use(Vt), l.component("lkt-field-file") === void 0 && l.use(Bt), l.component("lkt-table") === void 0 && l.component("lkt-table", vl);
  }
}, zl = (l) => (W.navButtonSlot = l, !0), Jl = (l) => (W.dropButtonSlot = l, !0), Ql = (l) => (W.createButtonSlot = l, !0);
export {
  F as LktTableColumn,
  Al as createActionColumn,
  Hl as createCheckColumn,
  $l as createColumn,
  Nl as createEmailColumn,
  ql as createFileColumn,
  Ol as createFloatColumn,
  jl as createHiddenColumn,
  Ul as createIntegerColumn,
  Rl as createLinkColumn,
  Kl as createSelectColumn,
  Pl as createSwitchColumn,
  Wl as createTelColumn,
  Fl as createTextColumn,
  Gl as default,
  Ql as setTableCreateButtonSlot,
  Jl as setTableDropButtonSlot,
  zl as setTableNavButtonSlot
};
