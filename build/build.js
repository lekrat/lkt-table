import { reactive as $, defineComponent as J, ref as C, watch as O, nextTick as ve, computed as p, resolveComponent as L, openBlock as u, createBlock as b, withCtx as U, createTextVNode as ne, toDisplayString as G, unref as I, createElementBlock as f, Fragment as R, withModifiers as Ue, resolveDynamicComponent as X, createCommentVNode as y, normalizeClass as ae, createElementVNode as D, createVNode as _, renderList as q, renderSlot as H, withDirectives as le, vShow as oe, useSlots as ct, onMounted as mt, createSlots as $e } from "vue";
import { httpCall as ft } from "lkt-http-client";
import { __ as z } from "lkt-i18n";
import { createLktEvent as he } from "lkt-events";
import { replaceAll as Oe, generateRandomString as pt } from "lkt-string-tools";
import { DataState as vt } from "lkt-data-state";
import ht from "sortablejs";
import { time as re } from "lkt-date-tools";
import kt from "lkt-loader";
import yt from "lkt-button";
import bt from "lkt-paginator";
import gt from "lkt-field-text";
import Ct from "lkt-field-textarea";
import St from "lkt-field-select";
import Vt from "lkt-field-switch";
import Et from "lkt-field-file";
class A {
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
  setIsEquivalentToSelectValue(t = !0) {
    return this.equivalentToSelectValue = t, this;
  }
}
const Ml = (l, t, r = !0) => $(new A(l, t).setIsSortable(r)), Rl = (l, t, r, n = !0) => $(new A(l, t).setIsSortable(n).defineAsLink(r)), $l = (l, t, r, n = !0) => $(new A(l, t).setIsSortable(n).defineAsAction(r)), Al = (l, t, r = !0) => $(new A(l, t).setIsSortable(r).defineAsText()), Fl = (l, t, r = !0) => $(new A(l, t).setIsSortable(r).defineAsInteger()), Ul = (l, t, r = !0) => $(new A(l, t).setIsSortable(r).defineAsFloat()), Ol = (l, t, r = !0) => $(new A(l, t).setIsSortable(r).defineAsEmail()), Nl = (l, t, r = !0) => $(new A(l, t).setIsSortable(r).defineAsTel()), Wl = (l, t, r = !0) => $(new A(l, t).setIsSortable(r).defineAsCheck()), Hl = (l, t, r = !0) => $(new A(l, t).setIsSortable(r).defineAsSwitch()), Kl = (l, t, r, n = !0) => $(new A(l, t).setIsSortable(n).defineAsSelect(r)), Pl = (l, t, r = !0) => $(new A(l, t).setIsSortable(r).defineAsFile()), ql = (l, t, r = !0) => $(new A(l, t).setIsSortable(r).setIsHidden(!0)), Ae = (l, t, r, n) => {
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
}, x = (l, t, r, n = []) => {
  if (l.extractTitleFromColumn) {
    let i = n.find((o) => o.key === l.extractTitleFromColumn);
    if (i)
      return x(i, t, r, n);
  }
  if (l.formatter && typeof l.formatter == "function") {
    let i = l.formatter(t[l.key], t, l, r);
    return i.startsWith("__:") ? z(i.substring(3)) : i;
  }
  return t[l.key];
}, Bt = (l, t, r) => {
  if (!l.colspan) return -1;
  let n = t;
  return r.forEach((i) => {
    let o = ke(l, i);
    o > 0 && o < n && (n = o);
  }), n;
}, ke = (l, t) => l.colspan === !1 ? !1 : typeof l.colspan == "function" ? l.colspan(t) : l.colspan, Dt = (l, t, r) => {
  if (typeof l != "object" || !l.key || t.indexOf(l.key) > -1) return !1;
  let n = ke(l, r);
  return typeof l.colspan > "u" ? !0 : (typeof l.colspan < "u" && (typeof l.colspan == "function" ? n = parseInt(l.colspan()) : n = parseInt(l.colspan)), n > 0);
}, Tt = (l = []) => {
  if (l.length > 0) {
    for (let t = 0; t < l.length; ++t)
      if (l[t].sortable) return l[t].key;
  }
  return "";
}, wt = (l, t) => {
  if (l.length > 0) {
    for (let r = 0; r < l.length; ++r)
      if (l[r].key === t) return l[r];
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
    const r = t, n = l, i = C(n.modelValue), o = C(i.value[n.column.key]), h = C(null), k = C(n.column.showLoading());
    O(o, (a) => {
      const s = JSON.parse(JSON.stringify(i.value));
      s[n.column.key] = a, r("update:modelValue", s);
    }), O(() => n.modelValue, (a) => {
      i.value = a, o.value = i.value[n.column.key];
    }), O(() => n.column, () => {
      n.column.resourceLoaded && ve(() => k.value = !1);
    }, { deep: !0 }), n.column.hasToLoadResource() && n.column.loadResource();
    const v = p(() => ({ ...n.column.slotData, item: i.value }));
    return (a, s) => {
      const j = L("lkt-anchor"), K = L("lkt-field-text"), F = L("lkt-field-switch"), Y = L("lkt-field-file"), d = L("lkt-loader"), M = L("lkt-field-select");
      return a.column.type === "link" ? (u(), b(j, {
        key: 0,
        to: a.column.getHref(i.value)
      }, {
        default: U(() => [
          ne(G(I(x)(a.column, i.value, a.i)), 1)
        ]),
        _: 1
      }, 8, ["to"])) : a.column.type === "action" ? (u(), f("a", {
        key: 1,
        href: "#",
        onClick: s[0] || (s[0] = (c) => a.column.doAction(i.value))
      }, G(I(x)(a.column, i.value, a.i)), 1)) : a.column.type === "text" ? (u(), b(K, {
        key: 2,
        "read-mode": !a.column.editable || !a.editModeEnabled,
        ref: (c) => h.value = c,
        "edit-slot": a.column.editSlot,
        "value-slot": a.column.valueSlot,
        "slot-data": v.value,
        modelValue: o.value,
        "onUpdate:modelValue": s[1] || (s[1] = (c) => o.value = c)
      }, null, 8, ["read-mode", "edit-slot", "value-slot", "slot-data", "modelValue"])) : a.column.type === "email" ? (u(), b(K, {
        key: 3,
        "read-mode": !a.column.editable || !a.editModeEnabled,
        ref: (c) => h.value = c,
        "edit-slot": a.column.editSlot,
        "value-slot": a.column.valueSlot,
        "slot-data": v.value,
        "is-email": "",
        modelValue: o.value,
        "onUpdate:modelValue": s[2] || (s[2] = (c) => o.value = c)
      }, null, 8, ["read-mode", "edit-slot", "value-slot", "slot-data", "modelValue"])) : a.column.type === "tel" ? (u(), b(K, {
        key: 4,
        "read-mode": !a.column.editable || !a.editModeEnabled,
        ref: (c) => h.value = c,
        "edit-slot": a.column.editSlot,
        "value-slot": a.column.valueSlot,
        "slot-data": v.value,
        "is-tel": "",
        modelValue: o.value,
        "onUpdate:modelValue": s[3] || (s[3] = (c) => o.value = c)
      }, null, 8, ["read-mode", "edit-slot", "value-slot", "slot-data", "modelValue"])) : a.column.type === "int" ? (u(), b(K, {
        key: 5,
        "read-mode": !a.column.editable || !a.editModeEnabled,
        ref: (c) => h.value = c,
        "edit-slot": a.column.editSlot,
        "value-slot": a.column.valueSlot,
        "slot-data": v.value,
        "is-number": "",
        modelValue: o.value,
        "onUpdate:modelValue": s[4] || (s[4] = (c) => o.value = c)
      }, null, 8, ["read-mode", "edit-slot", "value-slot", "slot-data", "modelValue"])) : a.column.type === "float" ? (u(), b(K, {
        key: 6,
        "read-mode": !a.column.editable || !a.editModeEnabled,
        ref: (c) => h.value = c,
        "edit-slot": a.column.editSlot,
        "value-slot": a.column.valueSlot,
        "slot-data": v.value,
        "is-number": "",
        modelValue: o.value,
        "onUpdate:modelValue": s[5] || (s[5] = (c) => o.value = c)
      }, null, 8, ["read-mode", "edit-slot", "value-slot", "slot-data", "modelValue"])) : a.column.type === "check" ? (u(), b(F, {
        key: 7,
        "is-check": "",
        "read-mode": !a.column.editable || !a.editModeEnabled,
        ref: (c) => h.value = c,
        modelValue: o.value,
        "onUpdate:modelValue": s[6] || (s[6] = (c) => o.value = c)
      }, null, 8, ["read-mode", "modelValue"])) : a.column.type === "switch" ? (u(), b(F, {
        key: 8,
        "read-mode": !a.column.editable || !a.editModeEnabled,
        ref: (c) => h.value = c,
        modelValue: o.value,
        "onUpdate:modelValue": s[7] || (s[7] = (c) => o.value = c)
      }, null, 8, ["read-mode", "modelValue"])) : a.column.type === "file" ? (u(), b(Y, {
        key: 9,
        "read-mode": !a.column.editable || !a.editModeEnabled,
        ref: (c) => h.value = c,
        modelValue: o.value,
        "onUpdate:modelValue": s[8] || (s[8] = (c) => o.value = c)
      }, null, 8, ["read-mode", "modelValue"])) : a.column.type === "select" ? (u(), f(R, { key: 10 }, [
        k.value ? (u(), b(d, { key: 0 })) : (u(), b(M, {
          key: 1,
          "read-mode": !a.column.editable || !a.editModeEnabled,
          ref: (c) => h.value = c,
          modelValue: o.value,
          "onUpdate:modelValue": s[9] || (s[9] = (c) => o.value = c),
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
      ], 64)) : (u(), f(R, { key: 11 }, [
        ne(G(I(x)(a.column, i.value, a.i, a.columns)), 1)
      ], 64));
    };
  }
}), N = {
  navButtonSlot: "",
  dropButtonSlot: "",
  editButtonSlot: "",
  createButtonSlot: ""
}, It = /* @__PURE__ */ J({
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
    const r = t, n = l, i = p(() => N.dropButtonSlot !== ""), o = p(() => N.dropButtonSlot), h = p(() => n.text.startsWith("__:") ? z(n.text.substring(3)) : n.text);
    return (k, v) => {
      const a = L("lkt-button");
      return u(), b(a, {
        palette: "table-delete",
        icon: i.value ? "" : k.icon,
        text: i.value ? "" : h.value,
        resource: k.resource,
        "resource-data": k.resourceData,
        "confirm-modal": k.confirm,
        disabled: k.disabled,
        onClick: v[0] || (v[0] = Ue((s) => r("click"), ["prevent", "stop"]))
      }, {
        default: U(() => [
          i.value ? (u(), b(X(o.value), { key: 0 })) : y("", !0)
        ]),
        _: 1
      }, 8, ["icon", "text", "resource", "resource-data", "confirm-modal", "disabled"]);
    };
  }
}), Lt = /* @__PURE__ */ J({
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
    const r = t, n = l, i = p(() => N.editButtonSlot !== ""), o = p(() => N.editButtonSlot), h = p(() => n.text.startsWith("__:") ? z(n.text.substring(3)) : n.text);
    return (k, v) => {
      const a = L("lkt-button");
      return u(), b(a, {
        palette: "table-delete",
        icon: i.value ? "" : k.icon,
        text: i.value ? "" : h.value,
        "on-click-to": k.link,
        "is-anchor": k.link !== "",
        resource: k.resource,
        "resource-data": k.resourceData,
        "confirm-modal": k.confirm,
        disabled: k.disabled,
        onClick: v[0] || (v[0] = Ue((s) => r("click"), ["prevent", "stop"]))
      }, {
        default: U(() => [
          i.value ? (u(), b(X(o.value), { key: 0 })) : y("", !0)
        ]),
        _: 1
      }, 8, ["icon", "text", "on-click-to", "is-anchor", "resource", "resource-data", "confirm-modal", "disabled"]);
    };
  }
}), Mt = ["data-i", "data-draggable"], Rt = {
  key: 1,
  "data-role": "invalid-drag-indicator"
}, $t = {
  key: 2,
  class: "lkt-table-nav-cell"
}, At = { class: "lkt-table-nav-container" }, Ft = /* @__PURE__ */ D("i", { class: "" }, null, -1), Ut = /* @__PURE__ */ D("i", { class: "" }, null, -1), Ot = ["data-column", "colspan", "title", "onClick"], Nt = {
  key: 4,
  class: "lkt-table-col-drop"
}, Wt = {
  key: 5,
  class: "lkt-table-col-edit"
}, Ht = /* @__PURE__ */ J({
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
    const r = t, n = l, i = C(n.modelValue), o = C(n.editLink);
    for (let d in i.value) o.value = Oe(o.value, ":" + d, i.value[d]);
    const h = (d, M, c) => {
      r("click", d, he("", { item: M, column: c }));
    }, k = (d, M) => {
      r("show", d, he("", { i: M }));
    }, v = p(() => {
      let d = [];
      return n.sortable && n.isDraggable && d.push("handle"), d.join(" ");
    }), a = p(() => N.navButtonSlot !== ""), s = p(() => N.navButtonSlot), j = () => {
      r("item-up", n.i);
    }, K = () => {
      r("item-down", n.i);
    }, F = () => {
      r("item-drop", n.i);
    }, Y = () => {
    };
    return O(() => n.modelValue, (d) => i.value = d), O(i, (d) => {
      r("update:modelValue", d, n.i);
    }, { deep: !0 }), (d, M) => {
      const c = L("lkt-button");
      return u(), f("tr", {
        "data-i": d.i,
        "data-draggable": d.isDraggable
      }, [
        d.sortable && d.isDraggable && d.editModeEnabled ? (u(), f("td", {
          key: 0,
          "data-role": "drag-indicator",
          class: ae(v.value)
        }, null, 2)) : d.sortable && d.editModeEnabled ? (u(), f("td", Rt)) : y("", !0),
        d.addNavigation && d.editModeEnabled ? (u(), f("td", $t, [
          D("div", At, [
            _(c, {
              palette: "table-nav",
              disabled: d.i === 0,
              onClick: j
            }, {
              default: U(() => [
                a.value ? (u(), b(X(s.value), {
                  key: 0,
                  direction: "up"
                })) : (u(), f(R, { key: 1 }, [
                  Ft,
                  ne(" UP ")
                ], 64))
              ]),
              _: 1
            }, 8, ["disabled"]),
            _(c, {
              palette: "table-nav",
              disabled: d.latestRow,
              onClick: K
            }, {
              default: U(() => [
                a.value ? (u(), b(X(s.value), {
                  key: 0,
                  direction: "down"
                })) : (u(), f(R, { key: 1 }, [
                  Ut,
                  ne(" DOWN ")
                ], 64))
              ]),
              _: 1
            }, 8, ["disabled"])
          ])
        ])) : y("", !0),
        d.displayHiddenColumnsIndicator ? (u(), f("td", {
          key: 3,
          onClick: M[0] || (M[0] = (E) => k(E, d.i)),
          "data-role": "show-more",
          class: ae(d.hiddenIsVisible ? "state-open" : "")
        }, null, 2)) : y("", !0),
        (u(!0), f(R, null, q(d.visibleColumns, (E) => (u(), f(R, null, [
          I(Dt)(E, d.emptyColumns, i.value) ? (u(), f("td", {
            key: "td" + d.i,
            "data-column": E.key,
            colspan: I(ke)(E, i.value),
            title: I(x)(E, i.value, d.i, d.visibleColumns),
            onClick: (ee) => h(ee, i.value, E)
          }, [
            d.$slots[E.key] ? H(d.$slots, E.key, {
              key: 0,
              value: i.value[E.key],
              item: i.value,
              column: E,
              i: d.i
            }) : i.value ? (u(), b(Ne, {
              key: 1,
              modelValue: i.value,
              "onUpdate:modelValue": M[1] || (M[1] = (ee) => i.value = ee),
              column: E,
              columns: d.visibleColumns,
              "edit-mode-enabled": d.editModeEnabled,
              i: d.i
            }, null, 8, ["modelValue", "column", "columns", "edit-mode-enabled", "i"])) : y("", !0)
          ], 8, Ot)) : y("", !0)
        ], 64))), 256)),
        d.canDrop && d.editModeEnabled ? (u(), f("td", Nt, [
          _(It, {
            resource: d.dropResource,
            "resource-data": i.value,
            confirm: d.dropConfirm,
            text: d.dropText,
            icon: d.dropIcon,
            onClick: F
          }, null, 8, ["resource", "resource-data", "confirm", "text", "icon"])
        ])) : y("", !0),
        d.canEdit && d.editModeEnabled ? (u(), f("td", Wt, [
          _(Lt, {
            "resource-data": i.value,
            text: d.editText,
            icon: d.editIcon,
            link: o.value,
            onClick: Y
          }, null, 8, ["resource-data", "text", "icon", "link"])
        ])) : y("", !0)
      ], 8, Mt);
    };
  }
}), Kt = { "data-role": "hidden-row" }, Pt = ["colspan"], qt = ["data-column"], jt = ["data-i"], Gt = ["data-column", "title", "onClick"], zt = /* @__PURE__ */ J({
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
    const r = t, n = l, i = C(n.modelValue), o = (h, k, v) => {
      r("click", h, he("", { item: k, column: v }));
    };
    return O(() => n.modelValue, (h) => i.value = h), O(i, () => r("update:modelValue", i.value)), (h, k) => le((u(), f("tr", Kt, [
      D("td", { colspan: h.hiddenColumnsColSpan }, [
        D("table", null, [
          D("tr", null, [
            (u(!0), f(R, null, q(h.hiddenColumns, (v) => (u(), f("th", {
              "data-column": v.key
            }, [
              D("div", null, G(v.label), 1)
            ], 8, qt))), 256))
          ]),
          D("tr", { "data-i": h.i }, [
            (u(!0), f(R, null, q(h.hiddenColumns, (v, a) => (u(), f("td", {
              "data-column": v.key,
              title: I(x)(v, i.value, a, h.hiddenColumns),
              onClick: (s) => o(s, i.value, v)
            }, [
              h.$slots[v.key] ? H(h.$slots, v.key, {
                key: 0,
                value: i.value[v.key],
                item: i.value,
                column: v,
                i: a
              }) : (u(), b(Ne, {
                key: 1,
                column: v,
                columns: h.hiddenColumns,
                modelValue: i.value,
                "onUpdate:modelValue": k[0] || (k[0] = (s) => i.value = s),
                i: a
              }, null, 8, ["column", "columns", "modelValue", "i"]))
            ], 8, Gt))), 256))
          ], 8, jt)
        ])
      ], 8, Pt)
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
    const r = t, n = l, i = p(() => N.createButtonSlot !== ""), o = p(() => N.createButtonSlot), h = p(() => n.text.startsWith("__:") ? z(n.text.substring(3)) : n.text);
    return (k, v) => {
      const a = L("lkt-button");
      return u(), b(a, {
        palette: "table-create",
        disabled: k.disabled,
        icon: i.value ? "" : k.icon,
        text: i.value ? "" : h.value,
        "on-click-to": k.to,
        onClick: v[0] || (v[0] = (s) => r("click"))
      }, {
        default: U(() => [
          i.value ? (u(), b(X(o.value), { key: 0 })) : y("", !0)
        ]),
        _: 1
      }, 8, ["disabled", "icon", "text", "on-click-to"]);
    };
  }
}), Jt = ["data-column", "data-sortable", "data-sort", "colspan", "title"], Qt = /* @__PURE__ */ J({
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
    const r = t, n = l, i = p(() => Bt(n.column, n.amountOfColumns, n.items)), o = p(() => n.column.sortable === !0), h = p(() => o.value && n.sortBy === n.column.key ? n.sortDirection : ""), k = p(() => n.column.label.startsWith("__:") ? z(n.column.label.substring(3)) : n.column.label), v = () => {
      r("click", n.column);
    };
    return (a, s) => (u(), f("th", {
      "data-column": a.column.key,
      "data-sortable": o.value,
      "data-sort": h.value,
      colspan: i.value,
      title: k.value,
      onClick: v
    }, [
      D("div", null, G(k.value), 1)
    ], 8, Jt));
  }
}), Xt = ["id"], Yt = { key: 0 }, Zt = { class: "lkt-table-page-buttons" }, _t = { key: 1 }, xt = { class: "switch-edition-mode" }, el = {
  key: 0,
  class: "lkt-table-page-buttons"
}, tl = {
  key: 1,
  class: "lkt-table-page-filters"
}, ll = ["data-sortable"], ol = { key: 0 }, al = {
  key: 0,
  "data-role": "drag-indicator"
}, nl = { key: 1 }, ul = { key: 2 }, il = {
  key: 3,
  class: "lkt-table-col-drop"
}, sl = {
  key: 4,
  class: "lkt-table-col-edit"
}, rl = ["id"], dl = { class: "lkt-table-item" }, cl = {
  key: 3,
  class: "lkt-empty-table"
}, ml = {
  key: 4,
  class: "lkt-table-page-empty"
}, fl = {
  key: 5,
  class: "lkt-table-page-buttons lkt-table-page-buttons-bottom"
}, pl = /* @__PURE__ */ J({
  __name: "LktTable",
  props: {
    modelValue: { default: () => [] },
    columns: { default: () => [] },
    sorter: { type: Function, default: Ae },
    draggableChecker: { type: Function, default: (l) => !0 },
    checkValidDrag: { type: Function, default: void 0 },
    sortable: { type: Boolean, default: !1 },
    hideEmptyColumns: { type: Boolean, default: !1 },
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
  emits: ["update:modelValue", "sort", "click", "save", "error", "before-save", "read-response", "click-create"],
  setup(l, { expose: t, emit: r }) {
    const n = r, i = ct(), o = l, h = {}, k = C(typeof o.sorter == "function" ? o.sorter : Ae), v = C(Tt(o.columns)), a = C("asc"), s = C(o.modelValue), j = C(h), K = C(null), F = C(o.columns), Y = C(o.page), d = C(!1), M = C(!1), c = C(o.perms), E = C(null), ee = C({}), Z = C(new vt({ items: s.value }, o.dataStateConfig)), T = C(o.editMode), te = C(0), We = (e) => {
      Array.isArray(e) && (s.value = e), d.value = !1, M.value = !0, Z.value.store({ items: s.value }).turnStoredIntoOriginal();
    }, He = (e) => {
      c.value = e;
    }, Ke = (e) => {
    }, Pe = (e) => {
      n("read-response", e);
    }, qe = () => ve(() => d.value = !0), je = () => {
      E.value.doRefresh();
    }, ue = pt(12), de = p(() => {
      if (!o.hideEmptyColumns) return [];
      let e = [];
      return F.value.forEach((m) => {
        let g = m.key, B = !1;
        s.value.forEach((w) => {
          if (typeof w.checkEmpty == "function")
            return w.checkEmpty(w);
          w[g] && (B = !0);
        }), B || e.push(g);
      }), e;
    }), ie = p(() => F.value.filter((e) => !e.hidden)), ce = p(() => F.value.filter((e) => e.hidden)), Ge = p(() => {
      let e = ie.value.length + 1;
      return o.sortable && ++e, e;
    }), ze = p(() => F.value.filter((e) => e.isForRowKey)), ye = p(() => ce.value.length > 0 && !o.sortable), Je = p(() => F.value.map((e) => e.key)), be = p(() => {
      let e = [];
      for (let m in i) Je.value.indexOf(m) !== -1 && e.push(m);
      return e;
    }), ge = p(() => o.hiddenSave || d.value || !o.saveResource ? !1 : T.value && Z.value.changed() ? !0 : T.value), Qe = p(() => se.value || o.switchEditionEnabled ? !0 : ge.value || T.value && o.canCreate), Xe = p(() => o.saveDisabled || typeof o.saveValidator == "function" && !o.saveValidator(s.value) ? !1 : Z.value.changed()), Ye = p(() => s.value.length), Ze = p(() => ({
      items: s.value,
      ...o.saveResourceData
    })), _e = p(() => o.titleTag === "" ? "h2" : o.titleTag), xe = p(() => o.wrapContentTag === "" ? "div" : o.wrapContentTag), me = p(() => o.title.startsWith("__:") ? z(o.title.substring(3)) : o.title), et = p(() => o.saveText.startsWith("__:") ? z(o.saveText.substring(3)) : o.saveText), tt = p(() => o.editModeText.startsWith("__:") ? z(o.editModeText.substring(3)) : o.editModeText), Ce = p(() => c.value.includes("create")), lt = p(() => c.value.includes("read")), fe = p(() => c.value.includes("update")), pe = p(() => c.value.includes("drop")), ot = (e) => {
      let m = e.target;
      if (typeof m.dataset.column > "u")
        do
          m = m.parentNode;
        while (typeof m.dataset.column > "u" && m.tagName !== "TABLE" && m.tagName !== "body");
      if (m.tagName === "TD" && (m = m.parentNode, m = m.dataset.i, typeof m < "u"))
        return s.value[m];
    }, Se = (e) => j.value["tr_" + e] === !0, Ve = (e) => {
      e && e.sortable && (s.value = s.value.sort((m, g) => k.value(m, g, e, a.value)), a.value = a.value === "asc" ? "desc" : "asc", v.value = e.key, n("sort", [v.value, a.value]));
    }, Ee = (e, m) => {
      n("click", e, m);
    }, Be = (e, m) => {
      let g = "tr_" + m.value.i;
      j.value[g] = typeof j.value[g] > "u" ? !0 : !j.value[g];
    }, De = () => {
      F.value.forEach((e) => {
        if (e.type === "select" && e.autoLoadSelectOptions) {
          let m = e.autoLoadSelectOptionsKey !== "" ? e.autoLoadSelectOptionsKey : e.key, g = [];
          s.value.forEach((w) => {
            Array.isArray(w[m]) && w[m].forEach((W) => g.push(W));
          });
          let B = {};
          g = g.filter(function(w) {
            return B[w.value] ? !1 : (B[w.value] = !0, !0);
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
            s.value.push(e);
            return;
          }
        }
        s.value.push({});
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
        let B = g - e.length + 1;
        for (; B--; ) e.push(void 0);
      }
      return e.splice(g, 0, e.splice(m, 1)[0]), e;
    }, st = (e) => {
      Ie(s.value, e, e - 1), te.value = re();
    }, rt = (e) => {
      Ie(s.value, e, e + 1), te.value = re();
    }, Le = (e) => {
      s.value.splice(e, 1), te.value = re();
    }, dt = () => {
      let e = document.getElementById("lkt-table-body-" + ue);
      ee.value = new ht(e, {
        direction: "vertical",
        handle: ".handle",
        animation: 150,
        onEnd: function(m) {
          let g = m.oldIndex, B = m.newIndex;
          s.value.splice(B, 0, s.value.splice(g, 1)[0]), te.value = re();
        },
        onMove: function(m, g) {
          return at(m);
        }
      });
    }, Me = (e, m, g = !1) => {
      let B = [te.value, ue, "row", m];
      return g && B.push("hidden"), ze.value.forEach((w) => {
        let W = String(e[w.key]).toLowerCase();
        W.length > 50 && (W = W.substring(0, 50)), W = Oe(W, " ", "-"), B.push(W);
      }), B.join("-");
    }, Re = p(() => typeof o.createEnabledValidator == "function" ? o.createEnabledValidator({ items: s.value }) : !0), se = p(() => Ce.value ? o.canCreateWithoutEdition || o.canCreate && T.value : !1);
    return mt(() => {
      De(), Ve(wt(o.columns, v.value)), Z.value.store({ items: s.value }).turnStoredIntoOriginal(), o.sortable && ve(() => {
        dt();
      });
    }), O(() => o.editMode, (e) => T.value = e), O(() => o.columns, (e) => F.value = e), O(() => o.modelValue, (e) => s.value = e), O(s, (e) => {
      De(), Z.value.increment({ items: e }), n("update:modelValue", e);
    }, { deep: !0 }), t({
      getItemByEvent: ot,
      doRefresh: je
    }), (e, m) => {
      const g = L("lkt-button"), B = L("lkt-field-switch"), w = L("lkt-loader"), W = L("lkt-paginator");
      return u(), f("section", {
        class: "lkt-table-page",
        id: "lkt-table-page-" + I(ue)
      }, [
        me.value || I(i).title ? (u(), f("header", Yt, [
          me.value ? (u(), b(X(_e.value), { key: 0 }, {
            default: U(() => [
              e.titleIcon ? (u(), f("i", {
                key: 0,
                class: ae(e.titleIcon)
              }, null, 2)) : y("", !0),
              ne(" " + G(me.value), 1)
            ]),
            _: 1
          })) : y("", !0),
          I(i).title ? H(e.$slots, "title", { key: 1 }) : y("", !0)
        ])) : y("", !0),
        (u(), b(X(xe.value), {
          class: ae(["lkt-table-page-content-wrapper", e.wrapContentClass])
        }, {
          default: U(() => [
            le(D("div", Zt, [
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
                default: U(() => [
                  I(i)["button-save"] ? H(e.$slots, "button-save", {
                    key: 0,
                    items: s.value,
                    editMode: e.editMode,
                    canUpdate: !e.saveDisabled
                  }) : (u(), f("span", _t, G(et.value), 1))
                ]),
                _: 3
              }, 8, ["disabled", "confirm-modal", "confirm-data", "resource", "resource-data"]), [
                [oe, ge.value]
              ]),
              se.value && s.value.length >= e.requiredItemsForTopCreate ? (u(), b(Fe, {
                key: 0,
                disabled: !Re.value,
                text: e.createText,
                icon: e.createIcon,
                to: e.createRoute,
                onClick: we
              }, null, 8, ["disabled", "text", "icon", "to"])) : y("", !0),
              D("div", xt, [
                le(_(B, {
                  modelValue: T.value,
                  "onUpdate:modelValue": m[0] || (m[0] = (S) => T.value = S),
                  label: tt.value
                }, null, 8, ["modelValue", "label"]), [
                  [oe, e.switchEditionEnabled]
                ])
              ])
            ], 512), [
              [oe, Qe.value]
            ]),
            I(i).buttons ? (u(), f("div", el, [
              H(e.$slots, "buttons")
            ])) : y("", !0),
            M.value && I(i).filters ? (u(), f("div", tl, [
              H(e.$slots, "filters", {
                items: s.value,
                isLoading: d.value
              })
            ])) : y("", !0),
            d.value ? (u(), b(w, { key: 2 })) : y("", !0),
            le(D("div", {
              class: "lkt-table",
              "data-sortable": e.sortable
            }, [
              e.itemMode ? (u(), f("div", {
                key: 1,
                class: ae(["lkt-table-items-container", e.itemsContainerClass])
              }, [
                (u(!0), f(R, null, q(s.value, (S, V) => (u(), f("div", dl, [
                  H(e.$slots, "item", {
                    item: S,
                    index: V,
                    canCreate: Ce.value,
                    canRead: lt.value,
                    canUpdate: fe.value,
                    canDrop: pe.value,
                    isLoading: d.value,
                    doDrop: () => Le(V)
                  })
                ]))), 256))
              ], 2)) : (u(), f("table", ol, [
                D("thead", null, [
                  D("tr", null, [
                    e.sortable && T.value ? (u(), f("th", al)) : y("", !0),
                    e.addNavigation && T.value ? (u(), f("th", nl)) : y("", !0),
                    ye.value ? (u(), f("th", ul)) : y("", !0),
                    (u(!0), f(R, null, q(ie.value, (S) => (u(), f(R, null, [
                      de.value.indexOf(S.key) === -1 ? (u(), b(Qt, {
                        key: 0,
                        column: S,
                        "sort-by": v.value,
                        "sort-direction": a.value,
                        "amount-of-columns": e.columns.length,
                        items: s.value,
                        onClick: (V) => Ve(S)
                      }, null, 8, ["column", "sort-by", "sort-direction", "amount-of-columns", "items", "onClick"])) : y("", !0)
                    ], 64))), 256)),
                    e.canDrop && pe.value && T.value ? (u(), f("th", il)) : y("", !0),
                    e.canEditButton && fe.value && T.value ? (u(), f("th", sl)) : y("", !0)
                  ])
                ]),
                D("tbody", {
                  ref: (S) => K.value = S,
                  id: "lkt-table-body-" + I(ue)
                }, [
                  (u(!0), f(R, null, q(s.value, (S, V) => (u(), b(Ht, {
                    modelValue: s.value[V],
                    "onUpdate:modelValue": (P) => s.value[V] = P,
                    key: Me(S, V),
                    i: V,
                    "display-hidden-columns-indicator": ye.value,
                    "is-draggable": Te(S),
                    sortable: e.sortable,
                    "visible-columns": ie.value,
                    "empty-columns": de.value,
                    "add-navigation": e.addNavigation,
                    "hidden-is-visible": Se(V),
                    "latest-row": V + 1 === Ye.value,
                    "can-drop": e.canDrop && pe.value && T.value,
                    "drop-confirm": e.dropConfirm,
                    "drop-resource": e.dropResource,
                    "drop-text": e.dropText,
                    "drop-icon": e.dropIcon,
                    "can-edit": e.canEditButton && fe.value && T.value,
                    "edit-text": e.editText,
                    "edit-icon": e.editIcon,
                    "edit-link": e.editLink,
                    "edit-mode-enabled": T.value,
                    onClick: Ee,
                    onShow: Be,
                    onItemUp: st,
                    onItemDown: rt,
                    onItemDrop: Le
                  }, $e({ _: 2 }, [
                    q(be.value, (P) => ({
                      name: P,
                      fn: U((Q) => [
                        H(e.$slots, P, {
                          item: Q.item,
                          value: Q.value,
                          column: Q.column
                        })
                      ])
                    }))
                  ]), 1032, ["modelValue", "onUpdate:modelValue", "i", "display-hidden-columns-indicator", "is-draggable", "sortable", "visible-columns", "empty-columns", "add-navigation", "hidden-is-visible", "latest-row", "can-drop", "drop-confirm", "drop-resource", "drop-text", "drop-icon", "can-edit", "edit-text", "edit-icon", "edit-link", "edit-mode-enabled"]))), 128)),
                  ce.value.length > 0 ? (u(!0), f(R, { key: 0 }, q(s.value, (S, V) => (u(), b(zt, {
                    modelValue: s.value[V],
                    "onUpdate:modelValue": (P) => s.value[V] = P,
                    key: Me(S, V, !0),
                    i: V,
                    "hidden-columns": ce.value,
                    "hidden-columns-col-span": Ge.value,
                    "is-draggable": Te(S),
                    sortable: e.sortable,
                    "visible-columns": ie.value,
                    "empty-columns": de.value,
                    "hidden-is-visible": Se(V),
                    onClick: Ee,
                    onShow: Be
                  }, $e({ _: 2 }, [
                    q(be.value, (P) => ({
                      name: P,
                      fn: U((Q) => [
                        H(e.$slots, P, {
                          item: Q.item,
                          value: Q.value,
                          column: Q.column
                        })
                      ])
                    }))
                  ]), 1032, ["modelValue", "onUpdate:modelValue", "i", "hidden-columns", "hidden-columns-col-span", "is-draggable", "sortable", "visible-columns", "empty-columns", "hidden-is-visible"]))), 128)) : y("", !0)
                ], 8, rl)
              ]))
            ], 8, ll), [
              [oe, !d.value && s.value.length > 0]
            ]),
            e.$slots["no-items"] ? (u(), f("div", cl, [
              H(e.$slots, "no-items")
            ])) : y("", !0),
            !d.value && s.value.length === 0 ? (u(), f("div", ml, G(e.noResultsText), 1)) : y("", !0),
            se.value ? (u(), f("div", fl, [
              se.value && s.value.length >= e.requiredItemsForBottomCreate ? (u(), b(Fe, {
                key: 0,
                disabled: !Re.value,
                text: e.createText,
                icon: e.createIcon,
                to: e.createRoute,
                onClick: we
              }, null, 8, ["disabled", "text", "icon", "to"])) : y("", !0)
            ])) : y("", !0),
            e.resource.length > 0 ? (u(), b(W, {
              key: 6,
              ref_key: "paginator",
              ref: E,
              modelValue: Y.value,
              "onUpdate:modelValue": m[1] || (m[1] = (S) => Y.value = S),
              resource: e.resource,
              filters: e.filters,
              onResults: We,
              onLoading: qe,
              onPerms: He,
              onCustom: Ke,
              onResponse: Pe
            }, null, 8, ["modelValue", "resource", "filters"])) : y("", !0)
          ]),
          _: 3
        }, 8, ["class"]))
      ], 8, Xt);
    };
  }
}), jl = {
  install: (l) => {
    l.component("lkt-loader") === void 0 && l.use(kt), l.component("lkt-button") === void 0 && l.use(yt), l.component("lkt-paginator") === void 0 && l.use(bt), l.component("lkt-field-text") === void 0 && l.use(gt), l.component("lkt-field-textarea") === void 0 && l.use(Ct), l.component("lkt-field-select") === void 0 && l.use(St), l.component("lkt-field-switch") === void 0 && l.use(Vt), l.component("lkt-field-file") === void 0 && l.use(Et), l.component("lkt-table") === void 0 && l.component("lkt-table", pl);
  }
}, Gl = (l) => (N.navButtonSlot = l, !0), zl = (l) => (N.dropButtonSlot = l, !0), Jl = (l) => (N.createButtonSlot = l, !0);
export {
  A as LktTableColumn,
  $l as createActionColumn,
  Wl as createCheckColumn,
  Ml as createColumn,
  Ol as createEmailColumn,
  Pl as createFileColumn,
  Ul as createFloatColumn,
  ql as createHiddenColumn,
  Fl as createIntegerColumn,
  Rl as createLinkColumn,
  Kl as createSelectColumn,
  Hl as createSwitchColumn,
  Nl as createTelColumn,
  Al as createTextColumn,
  jl as default,
  Jl as setTableCreateButtonSlot,
  zl as setTableDropButtonSlot,
  Gl as setTableNavButtonSlot
};
