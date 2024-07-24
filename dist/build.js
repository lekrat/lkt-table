import { reactive as $, defineComponent as z, ref as C, watch as N, nextTick as fe, computed as p, resolveComponent as L, openBlock as u, createBlock as b, withCtx as O, createTextVNode as ae, toDisplayString as J, unref as T, createElementBlock as f, Fragment as R, withModifiers as Ae, resolveDynamicComponent as X, createCommentVNode as y, normalizeClass as oe, createElementVNode as w, createVNode as _, renderList as j, renderSlot as H, withDirectives as te, vShow as le, useSlots as rt, onMounted as dt, createSlots as Me } from "vue";
import { httpCall as ct } from "lkt-http-client";
import { __ as G } from "lkt-i18n";
import { createLktEvent as pe } from "lkt-events";
import { replaceAll as Fe, generateRandomString as mt } from "lkt-string-tools";
import { DataState as ft } from "lkt-data-state";
import pt from "sortablejs";
import vt from "lkt-loader";
import ht from "lkt-button";
import kt from "lkt-paginator";
import yt from "lkt-field-text";
import bt from "lkt-field-textarea";
import gt from "lkt-field-select";
import Ct from "lkt-field-switch";
import St from "lkt-field-file";
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
      const t = await ct(this.resource, this.resourceData);
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
const Il = (l, t, r = !0) => $(new A(l, t).setIsSortable(r)), Tl = (l, t, r, n = !0) => $(new A(l, t).setIsSortable(n).defineAsLink(r)), Ll = (l, t, r, n = !0) => $(new A(l, t).setIsSortable(n).defineAsAction(r)), Ml = (l, t, r = !0) => $(new A(l, t).setIsSortable(r).defineAsText()), Rl = (l, t, r = !0) => $(new A(l, t).setIsSortable(r).defineAsInteger()), $l = (l, t, r = !0) => $(new A(l, t).setIsSortable(r).defineAsFloat()), Al = (l, t, r = !0) => $(new A(l, t).setIsSortable(r).defineAsEmail()), Fl = (l, t, r = !0) => $(new A(l, t).setIsSortable(r).defineAsTel()), Ol = (l, t, r = !0) => $(new A(l, t).setIsSortable(r).defineAsCheck()), Nl = (l, t, r = !0) => $(new A(l, t).setIsSortable(r).defineAsSwitch()), Ul = (l, t, r, n = !0) => $(new A(l, t).setIsSortable(n).defineAsSelect(r)), Wl = (l, t, r = !0) => $(new A(l, t).setIsSortable(r).defineAsFile()), Hl = (l, t, r = !0) => $(new A(l, t).setIsSortable(r).setIsHidden(!0)), Re = (l, t, r, n) => {
  if (!r) return 0;
  let s = l[r.key], o = t[r.key];
  if (n === "asc") {
    if (s > o) return 1;
    if (o > s) return -1;
  } else {
    if (s > o) return -1;
    if (o > s) return 1;
  }
  return 0;
}, x = (l, t, r, n = []) => {
  if (l.extractTitleFromColumn) {
    let s = n.find((o) => o.key === l.extractTitleFromColumn);
    if (s)
      return x(s, t, r, n);
  }
  if (l.formatter && typeof l.formatter == "function") {
    let s = l.formatter(t[l.key], t, l, r);
    return s.startsWith("__:") ? G(s.substring(3)) : s;
  }
  return t[l.key];
}, Vt = (l, t, r) => {
  if (!l.colspan) return -1;
  let n = t;
  return r.forEach((s) => {
    let o = ve(l, s);
    o > 0 && o < n && (n = o);
  }), n;
}, ve = (l, t) => l.colspan === !1 ? !1 : typeof l.colspan == "function" ? l.colspan(t) : l.colspan, Bt = (l, t, r) => {
  if (typeof l != "object" || !l.key || t.indexOf(l.key) > -1) return !1;
  let n = ve(l, r);
  return typeof l.colspan > "u" ? !0 : (typeof l.colspan < "u" && (typeof l.colspan == "function" ? n = parseInt(l.colspan()) : n = parseInt(l.colspan)), n > 0);
}, Et = (l = []) => {
  if (l.length > 0) {
    for (let t = 0; t < l.length; ++t)
      if (l[t].sortable) return l[t].key;
  }
  return "";
}, Dt = (l, t) => {
  if (l.length > 0) {
    for (let r = 0; r < l.length; ++r)
      if (l[r].key === t) return l[r];
  }
  return null;
}, Oe = /* @__PURE__ */ z({
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
    const r = t, n = l, s = C(n.modelValue), o = C(s.value[n.column.key]), h = C(null), k = C(n.column.showLoading());
    N(o, (a) => {
      const i = JSON.parse(JSON.stringify(s.value));
      i[n.column.key] = a, r("update:modelValue", i);
    }), N(() => n.modelValue, (a) => {
      s.value = a, o.value = s.value[n.column.key];
    }), N(() => n.column, () => {
      n.column.resourceLoaded && fe(() => k.value = !1);
    }, { deep: !0 }), n.column.hasToLoadResource() && n.column.loadResource();
    const v = p(() => ({ ...n.column.slotData, item: s.value }));
    return (a, i) => {
      const q = L("lkt-anchor"), K = L("lkt-field-text"), F = L("lkt-field-switch"), Y = L("lkt-field-file"), d = L("lkt-loader"), M = L("lkt-field-select");
      return a.column.type === "link" ? (u(), b(q, {
        key: 0,
        to: a.column.getHref(s.value)
      }, {
        default: O(() => [
          ae(J(T(x)(a.column, s.value, a.i)), 1)
        ]),
        _: 1
      }, 8, ["to"])) : a.column.type === "action" ? (u(), f("a", {
        key: 1,
        href: "#",
        onClick: i[0] || (i[0] = (c) => a.column.doAction(s.value))
      }, J(T(x)(a.column, s.value, a.i)), 1)) : a.column.type === "text" ? (u(), b(K, {
        key: 2,
        "read-mode": !a.column.editable || !a.editModeEnabled,
        ref: (c) => h.value = c,
        "edit-slot": a.column.editSlot,
        "value-slot": a.column.valueSlot,
        "slot-data": v.value,
        modelValue: o.value,
        "onUpdate:modelValue": i[1] || (i[1] = (c) => o.value = c)
      }, null, 8, ["read-mode", "edit-slot", "value-slot", "slot-data", "modelValue"])) : a.column.type === "email" ? (u(), b(K, {
        key: 3,
        "read-mode": !a.column.editable || !a.editModeEnabled,
        ref: (c) => h.value = c,
        "edit-slot": a.column.editSlot,
        "value-slot": a.column.valueSlot,
        "slot-data": v.value,
        "is-email": "",
        modelValue: o.value,
        "onUpdate:modelValue": i[2] || (i[2] = (c) => o.value = c)
      }, null, 8, ["read-mode", "edit-slot", "value-slot", "slot-data", "modelValue"])) : a.column.type === "tel" ? (u(), b(K, {
        key: 4,
        "read-mode": !a.column.editable || !a.editModeEnabled,
        ref: (c) => h.value = c,
        "edit-slot": a.column.editSlot,
        "value-slot": a.column.valueSlot,
        "slot-data": v.value,
        "is-tel": "",
        modelValue: o.value,
        "onUpdate:modelValue": i[3] || (i[3] = (c) => o.value = c)
      }, null, 8, ["read-mode", "edit-slot", "value-slot", "slot-data", "modelValue"])) : a.column.type === "int" ? (u(), b(K, {
        key: 5,
        "read-mode": !a.column.editable || !a.editModeEnabled,
        ref: (c) => h.value = c,
        "edit-slot": a.column.editSlot,
        "value-slot": a.column.valueSlot,
        "slot-data": v.value,
        "is-number": "",
        modelValue: o.value,
        "onUpdate:modelValue": i[4] || (i[4] = (c) => o.value = c)
      }, null, 8, ["read-mode", "edit-slot", "value-slot", "slot-data", "modelValue"])) : a.column.type === "float" ? (u(), b(K, {
        key: 6,
        "read-mode": !a.column.editable || !a.editModeEnabled,
        ref: (c) => h.value = c,
        "edit-slot": a.column.editSlot,
        "value-slot": a.column.valueSlot,
        "slot-data": v.value,
        "is-number": "",
        modelValue: o.value,
        "onUpdate:modelValue": i[5] || (i[5] = (c) => o.value = c)
      }, null, 8, ["read-mode", "edit-slot", "value-slot", "slot-data", "modelValue"])) : a.column.type === "check" ? (u(), b(F, {
        key: 7,
        "is-check": "",
        "read-mode": !a.column.editable || !a.editModeEnabled,
        ref: (c) => h.value = c,
        modelValue: o.value,
        "onUpdate:modelValue": i[6] || (i[6] = (c) => o.value = c)
      }, null, 8, ["read-mode", "modelValue"])) : a.column.type === "switch" ? (u(), b(F, {
        key: 8,
        "read-mode": !a.column.editable || !a.editModeEnabled,
        ref: (c) => h.value = c,
        modelValue: o.value,
        "onUpdate:modelValue": i[7] || (i[7] = (c) => o.value = c)
      }, null, 8, ["read-mode", "modelValue"])) : a.column.type === "file" ? (u(), b(Y, {
        key: 9,
        "read-mode": !a.column.editable || !a.editModeEnabled,
        ref: (c) => h.value = c,
        modelValue: o.value,
        "onUpdate:modelValue": i[8] || (i[8] = (c) => o.value = c)
      }, null, 8, ["read-mode", "modelValue"])) : a.column.type === "select" ? (u(), f(R, { key: 10 }, [
        k.value ? (u(), b(d, { key: 0 })) : (u(), b(M, {
          key: 1,
          "read-mode": !a.column.editable || !a.editModeEnabled,
          ref: (c) => h.value = c,
          modelValue: o.value,
          "onUpdate:modelValue": i[9] || (i[9] = (c) => o.value = c),
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
        ae(J(T(x)(a.column, s.value, a.i, a.columns)), 1)
      ], 64));
    };
  }
}), U = {
  navButtonSlot: "",
  dropButtonSlot: "",
  editButtonSlot: "",
  createButtonSlot: ""
}, wt = /* @__PURE__ */ z({
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
    const r = t, n = l, s = p(() => U.dropButtonSlot !== ""), o = p(() => U.dropButtonSlot), h = p(() => n.text.startsWith("__:") ? G(n.text.substring(3)) : n.text);
    return (k, v) => {
      const a = L("lkt-button");
      return u(), b(a, {
        palette: "table-delete",
        icon: s.value ? "" : k.icon,
        text: s.value ? "" : h.value,
        resource: k.resource,
        "resource-data": k.resourceData,
        "confirm-modal": k.confirm,
        disabled: k.disabled,
        onClick: v[0] || (v[0] = Ae((i) => r("click"), ["prevent", "stop"]))
      }, {
        default: O(() => [
          s.value ? (u(), b(X(o.value), { key: 0 })) : y("", !0)
        ]),
        _: 1
      }, 8, ["icon", "text", "resource", "resource-data", "confirm-modal", "disabled"]);
    };
  }
}), It = /* @__PURE__ */ z({
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
    const r = t, n = l, s = p(() => U.editButtonSlot !== ""), o = p(() => U.editButtonSlot), h = p(() => n.text.startsWith("__:") ? G(n.text.substring(3)) : n.text);
    return (k, v) => {
      const a = L("lkt-button");
      return u(), b(a, {
        palette: "table-delete",
        icon: s.value ? "" : k.icon,
        text: s.value ? "" : h.value,
        "on-click-to": k.link,
        resource: k.resource,
        "resource-data": k.resourceData,
        "confirm-modal": k.confirm,
        disabled: k.disabled,
        onClick: v[0] || (v[0] = Ae((i) => r("click"), ["prevent", "stop"]))
      }, {
        default: O(() => [
          s.value ? (u(), b(X(o.value), { key: 0 })) : y("", !0)
        ]),
        _: 1
      }, 8, ["icon", "text", "on-click-to", "resource", "resource-data", "confirm-modal", "disabled"]);
    };
  }
}), Tt = ["data-i", "data-draggable"], Lt = {
  key: 1,
  "data-role": "invalid-drag-indicator"
}, Mt = {
  key: 2,
  class: "lkt-table-nav-cell"
}, Rt = { class: "lkt-table-nav-container" }, $t = /* @__PURE__ */ w("i", { class: "" }, null, -1), At = /* @__PURE__ */ w("i", { class: "" }, null, -1), Ft = ["data-column", "colspan", "title", "onClick"], Ot = {
  key: 4,
  class: "lkt-table-col-drop"
}, Nt = {
  key: 5,
  class: "lkt-table-col-edit"
}, Ut = /* @__PURE__ */ z({
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
    const r = t, n = l, s = C(n.modelValue), o = C(n.editLink);
    for (let d in s.value) o.value = Fe(o.value, ":" + d, s.value[d]);
    const h = (d, M, c) => {
      r("click", d, pe("", { item: M, column: c }));
    }, k = (d, M) => {
      r("show", d, pe("", { i: M }));
    }, v = p(() => {
      let d = [];
      return n.sortable && n.isDraggable && d.push("handle"), d.join(" ");
    }), a = p(() => U.navButtonSlot !== ""), i = p(() => U.navButtonSlot), q = () => {
      r("item-up", n.i);
    }, K = () => {
      r("item-down", n.i);
    }, F = () => {
      r("item-drop", n.i);
    }, Y = () => {
    };
    return N(() => n.modelValue, (d) => s.value = d), N(s, (d) => {
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
          class: oe(v.value)
        }, null, 2)) : d.sortable && d.editModeEnabled ? (u(), f("td", Lt)) : y("", !0),
        d.addNavigation && d.editModeEnabled ? (u(), f("td", Mt, [
          w("div", Rt, [
            _(c, {
              palette: "table-nav",
              disabled: d.i === 0,
              onClick: q
            }, {
              default: O(() => [
                a.value ? (u(), b(X(i.value), {
                  key: 0,
                  direction: "up"
                })) : (u(), f(R, { key: 1 }, [
                  $t,
                  ae(" UP ")
                ], 64))
              ]),
              _: 1
            }, 8, ["disabled"]),
            _(c, {
              palette: "table-nav",
              disabled: d.latestRow,
              onClick: K
            }, {
              default: O(() => [
                a.value ? (u(), b(X(i.value), {
                  key: 0,
                  direction: "down"
                })) : (u(), f(R, { key: 1 }, [
                  At,
                  ae(" DOWN ")
                ], 64))
              ]),
              _: 1
            }, 8, ["disabled"])
          ])
        ])) : y("", !0),
        d.displayHiddenColumnsIndicator ? (u(), f("td", {
          key: 3,
          onClick: M[0] || (M[0] = (D) => k(D, d.i)),
          "data-role": "show-more",
          class: oe(d.hiddenIsVisible ? "state-open" : "")
        }, null, 2)) : y("", !0),
        (u(!0), f(R, null, j(d.visibleColumns, (D) => (u(), f(R, null, [
          T(Bt)(D, d.emptyColumns, s.value) ? (u(), f("td", {
            key: 0,
            "data-column": D.key,
            colspan: T(ve)(D, s.value),
            title: T(x)(D, s.value, d.i, d.visibleColumns),
            onClick: (ee) => h(ee, s.value, D)
          }, [
            d.$slots[D.key] ? H(d.$slots, D.key, {
              key: 0,
              value: s.value[D.key],
              item: s.value,
              column: D,
              i: d.i
            }) : s.value ? (u(), b(Oe, {
              key: 1,
              modelValue: s.value,
              "onUpdate:modelValue": M[1] || (M[1] = (ee) => s.value = ee),
              column: D,
              columns: d.visibleColumns,
              "edit-mode-enabled": d.editModeEnabled,
              i: d.i
            }, null, 8, ["modelValue", "column", "columns", "edit-mode-enabled", "i"])) : y("", !0)
          ], 8, Ft)) : y("", !0)
        ], 64))), 256)),
        d.canDrop && d.editModeEnabled ? (u(), f("td", Ot, [
          _(wt, {
            resource: d.dropResource,
            "resource-data": s.value,
            confirm: d.dropConfirm,
            text: d.dropText,
            icon: d.dropIcon,
            onClick: F
          }, null, 8, ["resource", "resource-data", "confirm", "text", "icon"])
        ])) : y("", !0),
        d.canEdit && d.editModeEnabled ? (u(), f("td", Nt, [
          _(It, {
            "resource-data": s.value,
            text: d.editText,
            icon: d.editIcon,
            link: o.value,
            onClick: Y
          }, null, 8, ["resource-data", "text", "icon", "link"])
        ])) : y("", !0)
      ], 8, Tt);
    };
  }
}), Wt = { "data-role": "hidden-row" }, Ht = ["colspan"], Kt = ["data-column"], Pt = ["data-i"], jt = ["data-column", "title", "onClick"], qt = /* @__PURE__ */ z({
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
    const r = t, n = l, s = C(n.modelValue), o = (h, k, v) => {
      r("click", h, pe("", { item: k, column: v }));
    };
    return N(() => n.modelValue, (h) => s.value = h), N(s, () => r("update:modelValue", s.value)), (h, k) => te((u(), f("tr", Wt, [
      w("td", { colspan: h.hiddenColumnsColSpan }, [
        w("table", null, [
          w("tr", null, [
            (u(!0), f(R, null, j(h.hiddenColumns, (v) => (u(), f("th", {
              "data-column": v.key
            }, [
              w("div", null, J(v.label), 1)
            ], 8, Kt))), 256))
          ]),
          w("tr", { "data-i": h.i }, [
            (u(!0), f(R, null, j(h.hiddenColumns, (v, a) => (u(), f("td", {
              "data-column": v.key,
              title: T(x)(v, s.value, a, h.hiddenColumns),
              onClick: (i) => o(i, s.value, v)
            }, [
              h.$slots[v.key] ? H(h.$slots, v.key, {
                key: 0,
                value: s.value[v.key],
                item: s.value,
                column: v,
                i: a
              }) : (u(), b(Oe, {
                key: 1,
                column: v,
                columns: h.hiddenColumns,
                modelValue: s.value,
                "onUpdate:modelValue": k[0] || (k[0] = (i) => s.value = i),
                i: a
              }, null, 8, ["column", "columns", "modelValue", "i"]))
            ], 8, jt))), 256))
          ], 8, Pt)
        ])
      ], 8, Ht)
    ], 512)), [
      [le, h.hiddenIsVisible]
    ]);
  }
}), $e = /* @__PURE__ */ z({
  __name: "CreateButton",
  props: {
    disabled: { type: Boolean, default: !1 },
    text: { default: "" },
    icon: { default: "" },
    to: { default: "" }
  },
  emits: ["click"],
  setup(l, { emit: t }) {
    const r = t, n = l, s = p(() => U.createButtonSlot !== ""), o = p(() => U.createButtonSlot), h = p(() => n.text.startsWith("__:") ? G(n.text.substring(3)) : n.text);
    return (k, v) => {
      const a = L("lkt-button");
      return u(), b(a, {
        palette: "table-create",
        disabled: k.disabled,
        icon: s.value ? "" : k.icon,
        text: s.value ? "" : h.value,
        "on-click-to": k.to,
        onClick: v[0] || (v[0] = (i) => r("click"))
      }, {
        default: O(() => [
          s.value ? (u(), b(X(o.value), { key: 0 })) : y("", !0)
        ]),
        _: 1
      }, 8, ["disabled", "icon", "text", "on-click-to"]);
    };
  }
}), Jt = ["data-column", "data-sortable", "data-sort", "colspan", "title"], Gt = /* @__PURE__ */ z({
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
    const r = t, n = l, s = p(() => Vt(n.column, n.amountOfColumns, n.items)), o = p(() => n.column.sortable === !0), h = p(() => o.value && n.sortBy === n.column.key ? n.sortDirection : ""), k = p(() => n.column.label.startsWith("__:") ? G(n.column.label.substring(3)) : n.column.label), v = () => {
      r("click", n.column);
    };
    return (a, i) => (u(), f("th", {
      "data-column": a.column.key,
      "data-sortable": o.value,
      "data-sort": h.value,
      colspan: s.value,
      title: k.value,
      onClick: v
    }, [
      w("div", null, J(k.value), 1)
    ], 8, Jt));
  }
}), zt = ["id"], Qt = { key: 0 }, Xt = { class: "lkt-table-page-buttons" }, Yt = { key: 1 }, Zt = { class: "switch-edition-mode" }, _t = {
  key: 0,
  class: "lkt-table-page-buttons"
}, xt = {
  key: 1,
  class: "lkt-table-page-filters"
}, el = ["data-sortable"], tl = { key: 0 }, ll = {
  key: 0,
  "data-role": "drag-indicator"
}, ol = { key: 1 }, al = { key: 2 }, nl = {
  key: 3,
  class: "lkt-table-col-drop"
}, ul = {
  key: 4,
  class: "lkt-table-col-edit"
}, il = ["id"], sl = { class: "lkt-table-item" }, rl = {
  key: 3,
  class: "lkt-empty-table"
}, dl = {
  key: 4,
  class: "lkt-table-page-empty"
}, cl = {
  key: 5,
  class: "lkt-table-page-buttons lkt-table-page-buttons-bottom"
}, ml = /* @__PURE__ */ z({
  __name: "LktTable",
  props: {
    modelValue: { default: () => [] },
    columns: { default: () => [] },
    sorter: { type: Function, default: Re },
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
    const n = r, s = rt(), o = l, h = {}, k = C(typeof o.sorter == "function" ? o.sorter : Re), v = C(Et(o.columns)), a = C("asc"), i = C(o.modelValue), q = C(h), K = C(null), F = C(o.columns), Y = C(o.page), d = C(!1), M = C(!1), c = C(o.perms), D = C(null), ee = C({}), Z = C(new ft({ items: i.value }, o.dataStateConfig)), I = C(o.editMode), Ne = (e) => {
      Array.isArray(e) && (i.value = e), d.value = !1, M.value = !0, Z.value.store({ items: i.value }).turnStoredIntoOriginal();
    }, Ue = (e) => {
      c.value = e;
    }, We = (e) => {
    }, He = (e) => {
      n("read-response", e);
    }, Ke = () => fe(() => d.value = !0), Pe = () => {
      D.value.doRefresh();
    }, ne = mt(12), se = p(() => {
      if (!o.hideEmptyColumns) return [];
      let e = [];
      return F.value.forEach((m) => {
        let g = m.key, B = !1;
        i.value.forEach((S) => {
          if (typeof S.checkEmpty == "function")
            return S.checkEmpty(S);
          S[g] && (B = !0);
        }), B || e.push(g);
      }), e;
    }), ue = p(() => F.value.filter((e) => !e.hidden)), re = p(() => F.value.filter((e) => e.hidden)), je = p(() => {
      let e = ue.value.length + 1;
      return o.sortable && ++e, e;
    }), qe = p(() => F.value.filter((e) => e.isForRowKey)), he = p(() => re.value.length > 0 && !o.sortable), Je = p(() => F.value.map((e) => e.key)), ke = p(() => {
      let e = [];
      for (let m in s) Je.value.indexOf(m) !== -1 && e.push(m);
      return e;
    }), ye = p(() => o.hiddenSave || d.value || !o.saveResource ? !1 : I.value && Z.value.changed() ? !0 : I.value), Ge = p(() => ie.value || o.switchEditionEnabled ? !0 : ye.value || I.value && o.canCreate), ze = p(() => o.saveDisabled || typeof o.saveValidator == "function" && !o.saveValidator(i.value) ? !1 : Z.value.changed()), Qe = p(() => i.value.length), Xe = p(() => ({
      items: i.value,
      ...o.saveResourceData
    })), Ye = p(() => o.titleTag === "" ? "h2" : o.titleTag), Ze = p(() => o.wrapContentTag === "" ? "div" : o.wrapContentTag), de = p(() => o.title.startsWith("__:") ? G(o.title.substring(3)) : o.title), _e = p(() => o.saveText.startsWith("__:") ? G(o.saveText.substring(3)) : o.saveText), xe = p(() => o.editModeText.startsWith("__:") ? G(o.editModeText.substring(3)) : o.editModeText), be = p(() => c.value.includes("create")), et = p(() => c.value.includes("read")), ce = p(() => c.value.includes("update")), me = p(() => c.value.includes("drop")), tt = (e) => {
      let m = e.target;
      if (typeof m.dataset.column > "u")
        do
          m = m.parentNode;
        while (typeof m.dataset.column > "u" && m.tagName !== "TABLE" && m.tagName !== "body");
      if (m.tagName === "TD" && (m = m.parentNode, m = m.dataset.i, typeof m < "u"))
        return i.value[m];
    }, ge = (e) => q.value["tr_" + e] === !0, Ce = (e) => {
      e && e.sortable && (i.value = i.value.sort((m, g) => k.value(m, g, e, a.value)), a.value = a.value === "asc" ? "desc" : "asc", v.value = e.key, n("sort", [v.value, a.value]));
    }, Se = (e, m) => {
      n("click", e, m);
    }, Ve = (e, m) => {
      let g = "tr_" + m.value.i;
      q.value[g] = typeof q.value[g] > "u" ? !0 : !q.value[g];
    }, Be = () => {
      F.value.forEach((e) => {
        if (e.type === "select" && e.autoLoadSelectOptions) {
          let m = e.autoLoadSelectOptionsKey !== "" ? e.autoLoadSelectOptionsKey : e.key, g = [];
          i.value.forEach((S) => {
            Array.isArray(S[m]) && S[m].forEach((W) => g.push(W));
          });
          let B = {};
          g = g.filter(function(S) {
            return B[S.value] ? !1 : (B[S.value] = !0, !0);
          }), e.setOptions(g);
        }
      });
    }, lt = (e) => typeof o.checkValidDrag == "function" ? o.checkValidDrag(e) : !0, Ee = (e) => typeof o.draggableChecker == "function" ? o.draggableChecker(e) : !0, De = () => {
      if (o.canCreateWithoutEdition)
        n("click-create");
      else {
        if (typeof o.newValueGenerator == "function") {
          let e = o.newValueGenerator();
          if (typeof e == "object") {
            i.value.push(e);
            return;
          }
        }
        i.value.push({});
      }
    }, ot = () => {
      d.value = !0;
    }, at = () => {
      d.value = !1;
    }, nt = (e, m) => {
      if (n("before-save"), o.saveResource && (d.value = !1, !m.success)) {
        n("error", m.httpStatus);
        return;
      }
      Z.value.turnStoredIntoOriginal(), n("save", m);
    }, we = (e, m, g) => {
      if (g >= e.length) {
        let B = g - e.length + 1;
        for (; B--; ) e.push(void 0);
      }
      return e.splice(g, 0, e.splice(m, 1)[0]), e;
    }, ut = (e) => {
      we(i.value, e, e - 1);
    }, it = (e) => {
      we(i.value, e, e + 1);
    }, Ie = (e) => {
      i.value.splice(e, 1);
    }, st = () => {
      let e = document.getElementById("lkt-table-body-" + ne);
      ee.value = new pt(e, {
        direction: "vertical",
        handle: ".handle",
        animation: 150,
        onEnd: function(m) {
          let g = m.oldIndex, B = m.newIndex, S = JSON.parse(JSON.stringify(i.value));
          i.value.splice(g, 1, S[B]), i.value.splice(B, 1, S[g]);
        },
        onMove: function(m, g) {
          return lt(m);
        }
      });
    }, Te = (e, m, g = !1) => {
      let B = [ne, "row", m];
      return g && B.push("hidden"), qe.value.forEach((S) => {
        let W = String(e[S.key]).toLowerCase();
        W.length > 50 && (W = W.substring(0, 50)), W = Fe(W, " ", "-"), B.push(W);
      }), B.join("-");
    }, Le = p(() => typeof o.createEnabledValidator == "function" ? o.createEnabledValidator({ items: i.value }) : !0), ie = p(() => be.value ? o.canCreateWithoutEdition || o.canCreate && I.value : !1);
    return dt(() => {
      Be(), Ce(Dt(o.columns, v.value)), Z.value.store({ items: i.value }).turnStoredIntoOriginal(), o.sortable && fe(() => {
        st();
      });
    }), N(() => o.editMode, (e) => I.value = e), N(() => o.columns, (e) => F.value = e), N(() => o.modelValue, (e) => i.value = e), N(i, (e) => {
      Be(), Z.value.increment({ items: e }), n("update:modelValue", e);
    }, { deep: !0 }), t({
      getItemByEvent: tt,
      doRefresh: Pe
    }), (e, m) => {
      const g = L("lkt-button"), B = L("lkt-field-switch"), S = L("lkt-loader"), W = L("lkt-paginator");
      return u(), f("section", {
        class: "lkt-table-page",
        id: "lkt-table-page-" + T(ne)
      }, [
        de.value || T(s).title ? (u(), f("header", Qt, [
          de.value ? (u(), b(X(Ye.value), { key: 0 }, {
            default: O(() => [
              e.titleIcon ? (u(), f("i", {
                key: 0,
                class: oe(e.titleIcon)
              }, null, 2)) : y("", !0),
              ae(" " + J(de.value), 1)
            ]),
            _: 1
          })) : y("", !0),
          T(s).title ? H(e.$slots, "title", { key: 1 }) : y("", !0)
        ])) : y("", !0),
        (u(), b(X(Ze.value), {
          class: oe(["lkt-table-page-content-wrapper", e.wrapContentClass])
        }, {
          default: O(() => [
            te(w("div", Xt, [
              te(_(g, {
                ref: "saveButton",
                palette: "success",
                disabled: !ze.value,
                "confirm-modal": e.saveConfirm,
                "confirm-data": e.confirmData,
                resource: e.saveResource,
                "resource-data": Xe.value,
                onLoading: ot,
                onLoaded: at,
                onClick: nt
              }, {
                default: O(() => [
                  T(s)["button-save"] ? H(e.$slots, "button-save", {
                    key: 0,
                    items: i.value,
                    editMode: e.editMode,
                    canUpdate: !e.saveDisabled
                  }) : (u(), f("span", Yt, J(_e.value), 1))
                ]),
                _: 3
              }, 8, ["disabled", "confirm-modal", "confirm-data", "resource", "resource-data"]), [
                [le, ye.value]
              ]),
              ie.value && i.value.length >= e.requiredItemsForTopCreate ? (u(), b($e, {
                key: 0,
                disabled: !Le.value,
                text: e.createText,
                icon: e.createIcon,
                to: e.createRoute,
                onClick: De
              }, null, 8, ["disabled", "text", "icon", "to"])) : y("", !0),
              w("div", Zt, [
                te(_(B, {
                  modelValue: I.value,
                  "onUpdate:modelValue": m[0] || (m[0] = (V) => I.value = V),
                  label: xe.value
                }, null, 8, ["modelValue", "label"]), [
                  [le, e.switchEditionEnabled]
                ])
              ])
            ], 512), [
              [le, Ge.value]
            ]),
            T(s).buttons ? (u(), f("div", _t, [
              H(e.$slots, "buttons")
            ])) : y("", !0),
            M.value && T(s).filters ? (u(), f("div", xt, [
              H(e.$slots, "filters", {
                items: i.value,
                isLoading: d.value
              })
            ])) : y("", !0),
            d.value ? (u(), b(S, { key: 2 })) : y("", !0),
            te(w("div", {
              class: "lkt-table",
              "data-sortable": e.sortable
            }, [
              e.itemMode ? (u(), f("div", {
                key: 1,
                class: oe(["lkt-table-items-container", e.itemsContainerClass])
              }, [
                (u(!0), f(R, null, j(i.value, (V, E) => (u(), f("div", sl, [
                  H(e.$slots, "item", {
                    item: V,
                    index: E,
                    canCreate: be.value,
                    canRead: et.value,
                    canUpdate: ce.value,
                    canDrop: me.value,
                    isLoading: d.value,
                    doDrop: () => Ie(E)
                  })
                ]))), 256))
              ], 2)) : (u(), f("table", tl, [
                w("thead", null, [
                  w("tr", null, [
                    e.sortable && I.value ? (u(), f("th", ll)) : y("", !0),
                    e.addNavigation && I.value ? (u(), f("th", ol)) : y("", !0),
                    he.value ? (u(), f("th", al)) : y("", !0),
                    (u(!0), f(R, null, j(ue.value, (V) => (u(), f(R, null, [
                      se.value.indexOf(V.key) === -1 ? (u(), b(Gt, {
                        key: 0,
                        column: V,
                        "sort-by": v.value,
                        "sort-direction": a.value,
                        "amount-of-columns": e.columns.length,
                        items: i.value,
                        onClick: (E) => Ce(V)
                      }, null, 8, ["column", "sort-by", "sort-direction", "amount-of-columns", "items", "onClick"])) : y("", !0)
                    ], 64))), 256)),
                    e.canDrop && me.value && I.value ? (u(), f("th", nl)) : y("", !0),
                    e.canEditButton && ce.value && I.value ? (u(), f("th", ul)) : y("", !0)
                  ])
                ]),
                w("tbody", {
                  ref: (V) => K.value = V,
                  id: "lkt-table-body-" + T(ne)
                }, [
                  (u(!0), f(R, null, j(i.value, (V, E) => (u(), b(Ut, {
                    modelValue: i.value[E],
                    "onUpdate:modelValue": (P) => i.value[E] = P,
                    key: Te(V, E),
                    i: E,
                    "display-hidden-columns-indicator": he.value,
                    "is-draggable": Ee(V),
                    sortable: e.sortable,
                    "visible-columns": ue.value,
                    "empty-columns": se.value,
                    "add-navigation": e.addNavigation,
                    "hidden-is-visible": ge(E),
                    "latest-row": E + 1 === Qe.value,
                    "can-drop": e.canDrop && me.value && I.value,
                    "drop-confirm": e.dropConfirm,
                    "drop-resource": e.dropResource,
                    "drop-text": e.dropText,
                    "drop-icon": e.dropIcon,
                    "can-edit": e.canEditButton && ce.value && I.value,
                    "edit-text": e.editText,
                    "edit-icon": e.editIcon,
                    "edit-link": e.editLink,
                    "edit-mode-enabled": I.value,
                    onClick: Se,
                    onShow: Ve,
                    onItemUp: ut,
                    onItemDown: it,
                    onItemDrop: Ie
                  }, Me({ _: 2 }, [
                    j(ke.value, (P) => ({
                      name: P,
                      fn: O((Q) => [
                        H(e.$slots, P, {
                          item: Q.item,
                          value: Q.value,
                          column: Q.column
                        })
                      ])
                    }))
                  ]), 1032, ["modelValue", "onUpdate:modelValue", "i", "display-hidden-columns-indicator", "is-draggable", "sortable", "visible-columns", "empty-columns", "add-navigation", "hidden-is-visible", "latest-row", "can-drop", "drop-confirm", "drop-resource", "drop-text", "drop-icon", "can-edit", "edit-text", "edit-icon", "edit-link", "edit-mode-enabled"]))), 128)),
                  re.value.length > 0 ? (u(!0), f(R, { key: 0 }, j(i.value, (V, E) => (u(), b(qt, {
                    modelValue: i.value[E],
                    "onUpdate:modelValue": (P) => i.value[E] = P,
                    key: Te(V, E, !0),
                    i: E,
                    "hidden-columns": re.value,
                    "hidden-columns-col-span": je.value,
                    "is-draggable": Ee(V),
                    sortable: e.sortable,
                    "visible-columns": ue.value,
                    "empty-columns": se.value,
                    "hidden-is-visible": ge(E),
                    onClick: Se,
                    onShow: Ve
                  }, Me({ _: 2 }, [
                    j(ke.value, (P) => ({
                      name: P,
                      fn: O((Q) => [
                        H(e.$slots, P, {
                          item: Q.item,
                          value: Q.value,
                          column: Q.column
                        })
                      ])
                    }))
                  ]), 1032, ["modelValue", "onUpdate:modelValue", "i", "hidden-columns", "hidden-columns-col-span", "is-draggable", "sortable", "visible-columns", "empty-columns", "hidden-is-visible"]))), 128)) : y("", !0)
                ], 8, il)
              ]))
            ], 8, el), [
              [le, !d.value && i.value.length > 0]
            ]),
            e.$slots["no-items"] ? (u(), f("div", rl, [
              H(e.$slots, "no-items")
            ])) : y("", !0),
            !d.value && i.value.length === 0 ? (u(), f("div", dl, J(e.noResultsText), 1)) : y("", !0),
            ie.value ? (u(), f("div", cl, [
              ie.value && i.value.length >= e.requiredItemsForBottomCreate ? (u(), b($e, {
                key: 0,
                disabled: !Le.value,
                text: e.createText,
                icon: e.createIcon,
                to: e.createRoute,
                onClick: De
              }, null, 8, ["disabled", "text", "icon", "to"])) : y("", !0)
            ])) : y("", !0),
            e.resource.length > 0 ? (u(), b(W, {
              key: 6,
              ref_key: "paginator",
              ref: D,
              modelValue: Y.value,
              "onUpdate:modelValue": m[1] || (m[1] = (V) => Y.value = V),
              resource: e.resource,
              filters: e.filters,
              onResults: Ne,
              onLoading: Ke,
              onPerms: Ue,
              onCustom: We,
              onResponse: He
            }, null, 8, ["modelValue", "resource", "filters"])) : y("", !0)
          ]),
          _: 3
        }, 8, ["class"]))
      ], 8, zt);
    };
  }
}), Kl = {
  install: (l) => {
    l.component("lkt-loader") === void 0 && l.use(vt), l.component("lkt-button") === void 0 && l.use(ht), l.component("lkt-paginator") === void 0 && l.use(kt), l.component("lkt-field-text") === void 0 && l.use(yt), l.component("lkt-field-textarea") === void 0 && l.use(bt), l.component("lkt-field-select") === void 0 && l.use(gt), l.component("lkt-field-switch") === void 0 && l.use(Ct), l.component("lkt-field-file") === void 0 && l.use(St), l.component("lkt-table") === void 0 && l.component("lkt-table", ml);
  }
}, Pl = (l) => (U.navButtonSlot = l, !0), jl = (l) => (U.dropButtonSlot = l, !0), ql = (l) => (U.createButtonSlot = l, !0);
export {
  A as LktTableColumn,
  Ll as createActionColumn,
  Ol as createCheckColumn,
  Il as createColumn,
  Al as createEmailColumn,
  Wl as createFileColumn,
  $l as createFloatColumn,
  Hl as createHiddenColumn,
  Rl as createIntegerColumn,
  Tl as createLinkColumn,
  Ul as createSelectColumn,
  Nl as createSwitchColumn,
  Fl as createTelColumn,
  Ml as createTextColumn,
  Kl as default,
  ql as setTableCreateButtonSlot,
  jl as setTableDropButtonSlot,
  Pl as setTableNavButtonSlot
};
