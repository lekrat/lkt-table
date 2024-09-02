import { reactive as F, defineComponent as Q, ref as C, watch as A, nextTick as ve, computed as f, resolveComponent as L, openBlock as i, createBlock as k, withCtx as W, createTextVNode as ee, toDisplayString as G, unref as V, createElementBlock as p, Fragment as M, withModifiers as Ue, resolveDynamicComponent as z, createCommentVNode as b, normalizeClass as ne, createElementVNode as T, createVNode as _, renderList as q, renderSlot as N, withDirectives as oe, vShow as ae, useSlots as ft, onMounted as pt, createSlots as $e } from "vue";
import { httpCall as vt } from "lkt-http-client";
import { __ as J } from "lkt-i18n";
import { createLktEvent as he } from "lkt-events";
import { replaceAll as Oe, generateRandomString as ht } from "lkt-string-tools";
import { DataState as yt } from "lkt-data-state";
import kt from "sortablejs";
import { time as se } from "lkt-date-tools";
import bt from "lkt-loader";
import gt from "lkt-button";
import Ct from "lkt-paginator";
import St from "lkt-field-text";
import Vt from "lkt-field-textarea";
import Et from "lkt-field-select";
import Bt from "lkt-field-switch";
import Dt from "lkt-field-file";
class U {
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
      const t = await vt(this.resource, this.resourceData);
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
const $l = (l, t, s = !0) => F(new U(l, t).setIsSortable(s)), Al = (l, t, s, n = !0) => F(new U(l, t).setIsSortable(n).defineAsLink(s)), Fl = (l, t, s, n = !0) => F(new U(l, t).setIsSortable(n).defineAsAction(s)), Ul = (l, t, s = !0) => F(new U(l, t).setIsSortable(s).defineAsText()), Ol = (l, t, s = !0) => F(new U(l, t).setIsSortable(s).defineAsInteger()), Nl = (l, t, s = !0) => F(new U(l, t).setIsSortable(s).defineAsFloat()), Wl = (l, t, s = !0) => F(new U(l, t).setIsSortable(s).defineAsEmail()), Hl = (l, t, s = !0) => F(new U(l, t).setIsSortable(s).defineAsTel()), Pl = (l, t, s = !0) => F(new U(l, t).setIsSortable(s).defineAsCheck()), Kl = (l, t, s = !0) => F(new U(l, t).setIsSortable(s).defineAsSwitch()), ql = (l, t, s, n = !0) => F(new U(l, t).setIsSortable(n).defineAsSelect(s)), jl = (l, t, s = !0) => F(new U(l, t).setIsSortable(s).defineAsFile()), Gl = (l, t, s = !0) => F(new U(l, t).setIsSortable(s).setIsHidden(!0)), Ae = (l, t, s, n) => {
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
    return u.startsWith("__:") ? J(u.substring(3)) : u;
  }
  return t[l.key];
}, Tt = (l, t, s) => {
  if (!l.colspan) return -1;
  let n = t;
  return s.forEach((u) => {
    let o = ye(l, u);
    o > 0 && o < n && (n = o);
  }), n;
}, ye = (l, t) => l.colspan === !1 ? !1 : typeof l.colspan == "function" ? l.colspan(t) : l.colspan, wt = (l, t) => typeof l.preferSlot > "u" ? !0 : l.preferSlot === !1 ? !1 : typeof l.preferSlot == "function" ? l.preferSlot(t) : !0, It = (l, t, s) => {
  if (typeof l != "object" || !l.key || t.indexOf(l.key) > -1) return !1;
  let n = ye(l, s);
  return typeof l.colspan > "u" ? !0 : (typeof l.colspan < "u" && (typeof l.colspan == "function" ? n = parseInt(l.colspan(s)) : n = parseInt(l.colspan)), n > 0);
}, Lt = (l = []) => {
  if (l.length > 0) {
    for (let t = 0; t < l.length; ++t)
      if (l[t].sortable) return l[t].key;
  }
  return "";
}, Mt = (l, t) => {
  if (l.length > 0) {
    for (let s = 0; s < l.length; ++s)
      if (l[s].key === t) return l[s];
  }
  return null;
}, Ne = /* @__PURE__ */ Q({
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
    const s = t, n = l, u = C(n.modelValue), o = C(u.value[n.column.key]), h = C(null), y = C(n.column.showLoading());
    A(o, (a) => {
      const r = JSON.parse(JSON.stringify(u.value));
      r[n.column.key] = a, s("update:modelValue", r);
    }), A(() => n.modelValue, (a) => {
      u.value = a, o.value = u.value[n.column.key];
    }), A(() => n.column, () => {
      n.column.resourceLoaded && ve(() => y.value = !1);
    }, { deep: !0 }), n.column.hasToLoadResource() && n.column.loadResource();
    const v = f(() => ({ ...n.column.slotData, item: u.value }));
    return (a, r) => {
      const j = L("lkt-anchor"), P = L("lkt-field-text"), O = L("lkt-field-switch"), Y = L("lkt-field-file"), d = L("lkt-loader"), $ = L("lkt-field-select");
      return a.column.type === "link" ? (i(), k(j, {
        key: 0,
        to: a.column.getHref(u.value)
      }, {
        default: W(() => [
          ee(G(V(x)(a.column, u.value, a.i)), 1)
        ]),
        _: 1
      }, 8, ["to"])) : a.column.type === "action" ? (i(), p("a", {
        key: 1,
        href: "#",
        onClick: r[0] || (r[0] = (c) => a.column.doAction(u.value))
      }, G(V(x)(a.column, u.value, a.i)), 1)) : a.column.type === "text" ? (i(), k(P, {
        key: 2,
        "read-mode": !a.column.editable || !a.editModeEnabled,
        ref: (c) => h.value = c,
        "edit-slot": a.column.editSlot,
        "value-slot": a.column.valueSlot,
        "slot-data": v.value,
        modelValue: o.value,
        "onUpdate:modelValue": r[1] || (r[1] = (c) => o.value = c)
      }, null, 8, ["read-mode", "edit-slot", "value-slot", "slot-data", "modelValue"])) : a.column.type === "email" ? (i(), k(P, {
        key: 3,
        "read-mode": !a.column.editable || !a.editModeEnabled,
        ref: (c) => h.value = c,
        "edit-slot": a.column.editSlot,
        "value-slot": a.column.valueSlot,
        "slot-data": v.value,
        "is-email": "",
        modelValue: o.value,
        "onUpdate:modelValue": r[2] || (r[2] = (c) => o.value = c)
      }, null, 8, ["read-mode", "edit-slot", "value-slot", "slot-data", "modelValue"])) : a.column.type === "tel" ? (i(), k(P, {
        key: 4,
        "read-mode": !a.column.editable || !a.editModeEnabled,
        ref: (c) => h.value = c,
        "edit-slot": a.column.editSlot,
        "value-slot": a.column.valueSlot,
        "slot-data": v.value,
        "is-tel": "",
        modelValue: o.value,
        "onUpdate:modelValue": r[3] || (r[3] = (c) => o.value = c)
      }, null, 8, ["read-mode", "edit-slot", "value-slot", "slot-data", "modelValue"])) : a.column.type === "int" ? (i(), k(P, {
        key: 5,
        "read-mode": !a.column.editable || !a.editModeEnabled,
        ref: (c) => h.value = c,
        "edit-slot": a.column.editSlot,
        "value-slot": a.column.valueSlot,
        "slot-data": v.value,
        "is-number": "",
        modelValue: o.value,
        "onUpdate:modelValue": r[4] || (r[4] = (c) => o.value = c)
      }, null, 8, ["read-mode", "edit-slot", "value-slot", "slot-data", "modelValue"])) : a.column.type === "float" ? (i(), k(P, {
        key: 6,
        "read-mode": !a.column.editable || !a.editModeEnabled,
        ref: (c) => h.value = c,
        "edit-slot": a.column.editSlot,
        "value-slot": a.column.valueSlot,
        "slot-data": v.value,
        "is-number": "",
        modelValue: o.value,
        "onUpdate:modelValue": r[5] || (r[5] = (c) => o.value = c)
      }, null, 8, ["read-mode", "edit-slot", "value-slot", "slot-data", "modelValue"])) : a.column.type === "check" ? (i(), k(O, {
        key: 7,
        "is-check": "",
        "read-mode": !a.column.editable || !a.editModeEnabled,
        ref: (c) => h.value = c,
        modelValue: o.value,
        "onUpdate:modelValue": r[6] || (r[6] = (c) => o.value = c)
      }, null, 8, ["read-mode", "modelValue"])) : a.column.type === "switch" ? (i(), k(O, {
        key: 8,
        "read-mode": !a.column.editable || !a.editModeEnabled,
        ref: (c) => h.value = c,
        modelValue: o.value,
        "onUpdate:modelValue": r[7] || (r[7] = (c) => o.value = c)
      }, null, 8, ["read-mode", "modelValue"])) : a.column.type === "file" ? (i(), k(Y, {
        key: 9,
        "read-mode": !a.column.editable || !a.editModeEnabled,
        ref: (c) => h.value = c,
        modelValue: o.value,
        "onUpdate:modelValue": r[8] || (r[8] = (c) => o.value = c)
      }, null, 8, ["read-mode", "modelValue"])) : a.column.type === "select" ? (i(), p(M, { key: 10 }, [
        y.value ? (i(), k(d, { key: 0 })) : (i(), k($, {
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
      ], 64)) : (i(), p(M, { key: 11 }, [
        ee(G(V(x)(a.column, u.value, a.i, a.columns)), 1)
      ], 64));
    };
  }
}), R = {
  navButtonSlot: "",
  dropButtonSlot: "",
  editButtonSlot: "",
  createButtonSlot: "",
  defaultEmptySlot: void 0
}, Rt = /* @__PURE__ */ Q({
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
    const s = t, n = l, u = f(() => R.dropButtonSlot !== ""), o = f(() => R.dropButtonSlot), h = f(() => n.text.startsWith("__:") ? J(n.text.substring(3)) : n.text);
    return (y, v) => {
      const a = L("lkt-button");
      return i(), k(a, {
        palette: "table-delete",
        icon: u.value ? "" : y.icon,
        text: u.value ? "" : h.value,
        resource: y.resource,
        "resource-data": y.resourceData,
        "confirm-modal": y.confirm,
        disabled: y.disabled,
        onClick: v[0] || (v[0] = Ue((r) => s("click"), ["prevent", "stop"]))
      }, {
        default: W(() => [
          u.value ? (i(), k(z(o.value), { key: 0 })) : b("", !0)
        ]),
        _: 1
      }, 8, ["icon", "text", "resource", "resource-data", "confirm-modal", "disabled"]);
    };
  }
}), $t = /* @__PURE__ */ Q({
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
    const s = t, n = l, u = f(() => R.editButtonSlot !== ""), o = f(() => R.editButtonSlot), h = f(() => n.text.startsWith("__:") ? J(n.text.substring(3)) : n.text);
    return (y, v) => {
      const a = L("lkt-button");
      return i(), k(a, {
        palette: "table-delete",
        icon: u.value ? "" : y.icon,
        text: u.value ? "" : h.value,
        "on-click-to": y.link,
        "is-anchor": y.link !== "",
        resource: y.resource,
        "resource-data": y.resourceData,
        "confirm-modal": y.confirm,
        disabled: y.disabled,
        onClick: v[0] || (v[0] = Ue((r) => s("click"), ["prevent", "stop"]))
      }, {
        default: W(() => [
          u.value ? (i(), k(z(o.value), { key: 0 })) : b("", !0)
        ]),
        _: 1
      }, 8, ["icon", "text", "on-click-to", "is-anchor", "resource", "resource-data", "confirm-modal", "disabled"]);
    };
  }
}), At = ["data-i", "data-draggable"], Ft = {
  key: 1,
  "data-role": "invalid-drag-indicator"
}, Ut = {
  key: 2,
  class: "lkt-table-nav-cell"
}, Ot = { class: "lkt-table-nav-container" }, Nt = /* @__PURE__ */ T("i", { class: "" }, null, -1), Wt = /* @__PURE__ */ T("i", { class: "" }, null, -1), Ht = ["data-column", "colspan", "title", "onClick"], Pt = {
  key: 4,
  class: "lkt-table-col-drop"
}, Kt = {
  key: 5,
  class: "lkt-table-col-edit"
}, qt = /* @__PURE__ */ Q({
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
    const h = (d, $, c) => {
      s("click", d, he("", { item: $, column: c }));
    }, y = (d, $) => {
      s("show", d, he("", { i: $ }));
    }, v = f(() => {
      let d = [];
      return n.sortable && n.isDraggable && d.push("handle"), d.join(" ");
    }), a = f(() => R.navButtonSlot !== ""), r = f(() => R.navButtonSlot), j = () => {
      s("item-up", n.i);
    }, P = () => {
      s("item-down", n.i);
    }, O = () => {
      s("item-drop", n.i);
    }, Y = () => {
    };
    return A(() => n.modelValue, (d) => u.value = d), A(u, (d) => {
      s("update:modelValue", d, n.i);
    }, { deep: !0 }), (d, $) => {
      const c = L("lkt-button");
      return i(), p("tr", {
        "data-i": d.i,
        "data-draggable": d.isDraggable
      }, [
        d.sortable && d.isDraggable && d.editModeEnabled ? (i(), p("td", {
          key: 0,
          "data-role": "drag-indicator",
          class: ne(v.value)
        }, null, 2)) : d.sortable && d.editModeEnabled ? (i(), p("td", Ft)) : b("", !0),
        d.addNavigation && d.editModeEnabled ? (i(), p("td", Ut, [
          T("div", Ot, [
            _(c, {
              palette: "table-nav",
              disabled: d.i === 0,
              onClick: j
            }, {
              default: W(() => [
                a.value ? (i(), k(z(r.value), {
                  key: 0,
                  direction: "up"
                })) : (i(), p(M, { key: 1 }, [
                  Nt,
                  ee(" UP ")
                ], 64))
              ]),
              _: 1
            }, 8, ["disabled"]),
            _(c, {
              palette: "table-nav",
              disabled: d.latestRow,
              onClick: P
            }, {
              default: W(() => [
                a.value ? (i(), k(z(r.value), {
                  key: 0,
                  direction: "down"
                })) : (i(), p(M, { key: 1 }, [
                  Wt,
                  ee(" DOWN ")
                ], 64))
              ]),
              _: 1
            }, 8, ["disabled"])
          ])
        ])) : b("", !0),
        d.displayHiddenColumnsIndicator ? (i(), p("td", {
          key: 3,
          onClick: $[0] || ($[0] = (E) => y(E, d.i)),
          "data-role": "show-more",
          class: ne(d.hiddenIsVisible ? "state-open" : "")
        }, null, 2)) : b("", !0),
        (i(!0), p(M, null, q(d.visibleColumns, (E) => (i(), p(M, null, [
          V(It)(E, d.emptyColumns, u.value) ? (i(), p("td", {
            key: "td" + d.i,
            "data-column": E.key,
            colspan: V(ye)(E, u.value),
            title: V(x)(E, u.value, d.i, d.visibleColumns),
            onClick: (te) => h(te, u.value, E)
          }, [
            d.$slots[E.key] && V(wt)(E, u.value) ? N(d.$slots, E.key, {
              key: 0,
              value: u.value[E.key],
              item: u.value,
              column: E,
              i: d.i
            }) : u.value ? (i(), k(Ne, {
              key: 1,
              modelValue: u.value,
              "onUpdate:modelValue": $[1] || ($[1] = (te) => u.value = te),
              column: E,
              columns: d.visibleColumns,
              "edit-mode-enabled": d.editModeEnabled,
              i: d.i
            }, null, 8, ["modelValue", "column", "columns", "edit-mode-enabled", "i"])) : b("", !0)
          ], 8, Ht)) : b("", !0)
        ], 64))), 256)),
        d.canDrop && d.editModeEnabled ? (i(), p("td", Pt, [
          _(Rt, {
            resource: d.dropResource,
            "resource-data": u.value,
            confirm: d.dropConfirm,
            text: d.dropText,
            icon: d.dropIcon,
            onClick: O
          }, null, 8, ["resource", "resource-data", "confirm", "text", "icon"])
        ])) : b("", !0),
        d.canEdit && d.editModeEnabled ? (i(), p("td", Kt, [
          _($t, {
            "resource-data": u.value,
            text: d.editText,
            icon: d.editIcon,
            link: o.value,
            onClick: Y
          }, null, 8, ["resource-data", "text", "icon", "link"])
        ])) : b("", !0)
      ], 8, At);
    };
  }
}), jt = { "data-role": "hidden-row" }, Gt = ["colspan"], zt = ["data-column"], Jt = ["data-i"], Qt = ["data-column", "title", "onClick"], Xt = /* @__PURE__ */ Q({
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
    const s = t, n = l, u = C(n.modelValue), o = (h, y, v) => {
      s("click", h, he("", { item: y, column: v }));
    };
    return A(() => n.modelValue, (h) => u.value = h), A(u, () => s("update:modelValue", u.value)), (h, y) => oe((i(), p("tr", jt, [
      T("td", { colspan: h.hiddenColumnsColSpan }, [
        T("table", null, [
          T("tr", null, [
            (i(!0), p(M, null, q(h.hiddenColumns, (v) => (i(), p("th", {
              "data-column": v.key
            }, [
              T("div", null, G(v.label), 1)
            ], 8, zt))), 256))
          ]),
          T("tr", { "data-i": h.i }, [
            (i(!0), p(M, null, q(h.hiddenColumns, (v, a) => (i(), p("td", {
              "data-column": v.key,
              title: V(x)(v, u.value, a, h.hiddenColumns),
              onClick: (r) => o(r, u.value, v)
            }, [
              h.$slots[v.key] ? N(h.$slots, v.key, {
                key: 0,
                value: u.value[v.key],
                item: u.value,
                column: v,
                i: a
              }) : (i(), k(Ne, {
                key: 1,
                column: v,
                columns: h.hiddenColumns,
                modelValue: u.value,
                "onUpdate:modelValue": y[0] || (y[0] = (r) => u.value = r),
                i: a
              }, null, 8, ["column", "columns", "modelValue", "i"]))
            ], 8, Qt))), 256))
          ], 8, Jt)
        ])
      ], 8, Gt)
    ], 512)), [
      [ae, h.hiddenIsVisible]
    ]);
  }
}), Fe = /* @__PURE__ */ Q({
  __name: "CreateButton",
  props: {
    disabled: { type: Boolean, default: !1 },
    text: { default: "" },
    icon: { default: "" },
    to: { default: "" }
  },
  emits: ["click"],
  setup(l, { emit: t }) {
    const s = t, n = l, u = f(() => R.createButtonSlot !== ""), o = f(() => R.createButtonSlot), h = f(() => n.text.startsWith("__:") ? J(n.text.substring(3)) : n.text);
    return (y, v) => {
      const a = L("lkt-button");
      return i(), k(a, {
        palette: "table-create",
        disabled: y.disabled,
        icon: u.value ? "" : y.icon,
        text: u.value ? "" : h.value,
        "on-click-to": y.to,
        onClick: v[0] || (v[0] = (r) => s("click"))
      }, {
        default: W(() => [
          u.value ? (i(), k(z(o.value), { key: 0 })) : b("", !0)
        ]),
        _: 1
      }, 8, ["disabled", "icon", "text", "on-click-to"]);
    };
  }
}), Yt = ["data-column", "data-sortable", "data-sort", "colspan", "title"], Zt = /* @__PURE__ */ Q({
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
    const s = t, n = l, u = f(() => Tt(n.column, n.amountOfColumns, n.items)), o = f(() => n.column.sortable === !0), h = f(() => o.value && n.sortBy === n.column.key ? n.sortDirection : ""), y = f(() => n.column.label.startsWith("__:") ? J(n.column.label.substring(3)) : n.column.label), v = () => {
      s("click", n.column);
    };
    return (a, r) => (i(), p("th", {
      "data-column": a.column.key,
      "data-sortable": o.value,
      "data-sort": h.value,
      colspan: u.value,
      title: y.value,
      onClick: v
    }, [
      T("div", null, G(y.value), 1)
    ], 8, Yt));
  }
}), _t = ["id"], xt = { key: 0 }, el = { class: "lkt-table-page-buttons" }, tl = { key: 1 }, ll = { class: "switch-edition-mode" }, ol = {
  key: 0,
  class: "lkt-table-page-buttons"
}, al = {
  key: 1,
  class: "lkt-table-page-filters"
}, nl = ["data-sortable"], ul = { key: 0 }, il = {
  key: 0,
  "data-role": "drag-indicator"
}, rl = { key: 1 }, sl = { key: 2 }, dl = {
  key: 3,
  class: "lkt-table-col-drop"
}, cl = {
  key: 4,
  class: "lkt-table-col-edit"
}, ml = ["id"], fl = { class: "lkt-table-item" }, pl = {
  key: 3,
  class: "lkt-table-empty"
}, vl = {
  key: 4,
  class: "lkt-table-page-buttons lkt-table-page-buttons-bottom"
}, hl = /* @__PURE__ */ Q({
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
    const n = s, u = ft(), o = l, h = {}, y = C(typeof o.sorter == "function" ? o.sorter : Ae), v = C(Lt(o.columns)), a = C("asc"), r = C(o.modelValue), j = C(h), P = C(null), O = C(o.columns), Y = C(o.page), d = C(!1), $ = C(!1), c = C(o.perms), E = C(null), te = C({}), Z = C(new yt({ items: r.value }, o.dataStateConfig)), w = C(o.editMode), le = C(0), We = (e) => {
      Array.isArray(e) && (r.value = e), d.value = !1, $.value = !0, Z.value.store({ items: r.value }).turnStoredIntoOriginal();
    }, He = (e) => {
      c.value = e;
    }, Pe = (e) => {
    }, Ke = (e) => {
      n("read-response", e);
    }, qe = () => ve(() => d.value = !0), je = () => {
      E.value.doRefresh();
    }, ue = ht(12), de = f(() => {
      if (!o.hideEmptyColumns) return [];
      let e = [];
      return O.value.forEach((m) => {
        let g = m.key, D = !1;
        r.value.forEach((I) => {
          if (typeof I.checkEmpty == "function")
            return I.checkEmpty(I);
          I[g] && (D = !0);
        }), D || e.push(g);
      }), e;
    }), ie = f(() => O.value.filter((e) => !e.hidden)), ce = f(() => O.value.filter((e) => e.hidden)), Ge = f(() => {
      let e = ie.value.length + 1;
      return o.sortable && ++e, e;
    }), ze = f(() => O.value.filter((e) => e.isForRowKey)), ke = f(() => ce.value.length > 0 && !o.sortable), Je = f(() => O.value.map((e) => e.key)), be = f(() => {
      let e = [];
      for (let m in u) Je.value.indexOf(m) !== -1 && e.push(m);
      return e;
    }), ge = f(() => o.hiddenSave || d.value || !o.saveResource ? !1 : w.value && Z.value.changed() ? !0 : w.value), Qe = f(() => re.value || o.switchEditionEnabled ? !0 : ge.value || w.value && o.canCreate), Xe = f(() => o.saveDisabled || typeof o.saveValidator == "function" && !o.saveValidator(r.value) ? !1 : Z.value.changed()), Ye = f(() => r.value.length), Ze = f(() => ({
      items: r.value,
      ...o.saveResourceData
    })), _e = f(() => o.titleTag === "" ? "h2" : o.titleTag), xe = f(() => o.wrapContentTag === "" ? "div" : o.wrapContentTag), me = f(() => o.title.startsWith("__:") ? J(o.title.substring(3)) : o.title), et = f(() => o.saveText.startsWith("__:") ? J(o.saveText.substring(3)) : o.saveText), tt = f(() => o.editModeText.startsWith("__:") ? J(o.editModeText.substring(3)) : o.editModeText), Ce = f(() => c.value.includes("create")), lt = f(() => c.value.includes("read")), fe = f(() => c.value.includes("update")), pe = f(() => c.value.includes("drop")), ot = (e) => {
      let m = e.target;
      if (typeof m.dataset.column > "u")
        do
          m = m.parentNode;
        while (typeof m.dataset.column > "u" && m.tagName !== "TABLE" && m.tagName !== "body");
      if (m.tagName === "TD" && (m = m.parentNode, m = m.dataset.i, typeof m < "u"))
        return r.value[m];
    }, Se = (e) => j.value["tr_" + e] === !0, Ve = (e) => {
      e && e.sortable && (r.value = r.value.sort((m, g) => y.value(m, g, e, a.value)), a.value = a.value === "asc" ? "desc" : "asc", v.value = e.key, n("sort", [v.value, a.value]));
    }, Ee = (e, m) => {
      n("click", e, m);
    }, Be = (e, m) => {
      let g = "tr_" + m.value.i;
      j.value[g] = typeof j.value[g] > "u" ? !0 : !j.value[g];
    }, De = () => {
      O.value.forEach((e) => {
        if (e.type === "select" && e.autoLoadSelectOptions) {
          let m = e.autoLoadSelectOptionsKey !== "" ? e.autoLoadSelectOptionsKey : e.key, g = [];
          r.value.forEach((I) => {
            Array.isArray(I[m]) && I[m].forEach((H) => g.push(H));
          });
          let D = {};
          g = g.filter(function(I) {
            return D[I.value] ? !1 : (D[I.value] = !0, !0);
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
        let D = g - e.length + 1;
        for (; D--; ) e.push(void 0);
      }
      return e.splice(g, 0, e.splice(m, 1)[0]), e;
    }, rt = (e) => {
      Ie(r.value, e, e - 1), le.value = se();
    }, st = (e) => {
      Ie(r.value, e, e + 1), le.value = se();
    }, Le = (e) => {
      r.value.splice(e, 1), le.value = se();
    }, dt = () => {
      let e = document.getElementById("lkt-table-body-" + ue);
      te.value = new kt(e, {
        direction: "vertical",
        handle: ".handle",
        animation: 150,
        onEnd: function(m) {
          let g = m.oldIndex, D = m.newIndex;
          r.value.splice(D, 0, r.value.splice(g, 1)[0]), le.value = se();
        },
        onMove: function(m, g) {
          return at(m);
        }
      });
    }, Me = (e, m, g = !1) => {
      let D = [le.value, ue, "row", m];
      return g && D.push("hidden"), ze.value.forEach((I) => {
        let H = String(e[I.key]).toLowerCase();
        H.length > 50 && (H = H.substring(0, 50)), H = Oe(H, " ", "-"), D.push(H);
      }), D.join("-");
    }, Re = f(() => typeof o.createEnabledValidator == "function" ? o.createEnabledValidator({ items: r.value }) : !0), re = f(() => Ce.value ? o.canCreateWithoutEdition || o.canCreate && w.value : !1);
    pt(() => {
      De(), o.initialSorting && Ve(Mt(o.columns, v.value)), Z.value.store({ items: r.value }).turnStoredIntoOriginal(), o.sortable && ve(() => {
        dt();
      });
    }), A(() => o.perms, (e) => c.value = e), A(c, (e) => n("update:perms", e)), A(() => o.editMode, (e) => w.value = e), A(() => o.columns, (e) => O.value = e), A(() => o.modelValue, (e) => r.value = e), A(r, (e) => {
      De(), Z.value.increment({ items: e }), n("update:modelValue", e);
    }, { deep: !0 }), t({
      getItemByEvent: ot,
      doRefresh: je
    });
    const ct = f(() => typeof R.defaultEmptySlot < "u"), mt = f(() => R.defaultEmptySlot);
    return (e, m) => {
      const g = L("lkt-button"), D = L("lkt-field-switch"), I = L("lkt-loader"), H = L("lkt-paginator");
      return i(), p("section", {
        class: "lkt-table-page",
        id: "lkt-table-page-" + V(ue)
      }, [
        me.value || V(u).title ? (i(), p("header", xt, [
          me.value ? (i(), k(z(_e.value), { key: 0 }, {
            default: W(() => [
              e.titleIcon ? (i(), p("i", {
                key: 0,
                class: ne(e.titleIcon)
              }, null, 2)) : b("", !0),
              ee(" " + G(me.value), 1)
            ]),
            _: 1
          })) : b("", !0),
          V(u).title ? N(e.$slots, "title", { key: 1 }) : b("", !0)
        ])) : b("", !0),
        (i(), k(z(xe.value), {
          class: ne(["lkt-table-page-content-wrapper", e.wrapContentClass])
        }, {
          default: W(() => [
            oe(T("div", el, [
              oe(_(g, {
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
                default: W(() => [
                  V(u)["button-save"] ? N(e.$slots, "button-save", {
                    key: 0,
                    items: r.value,
                    editMode: e.editMode,
                    canUpdate: !e.saveDisabled
                  }) : (i(), p("span", tl, G(et.value), 1))
                ]),
                _: 3
              }, 8, ["disabled", "confirm-modal", "confirm-data", "resource", "resource-data"]), [
                [ae, ge.value]
              ]),
              re.value && r.value.length >= e.requiredItemsForTopCreate ? (i(), k(Fe, {
                key: 0,
                disabled: !Re.value || e.createDisabled,
                text: e.createText,
                icon: e.createIcon,
                to: e.createRoute,
                onClick: we
              }, null, 8, ["disabled", "text", "icon", "to"])) : b("", !0),
              T("div", ll, [
                oe(_(D, {
                  modelValue: w.value,
                  "onUpdate:modelValue": m[0] || (m[0] = (S) => w.value = S),
                  label: tt.value
                }, null, 8, ["modelValue", "label"]), [
                  [ae, e.switchEditionEnabled]
                ])
              ])
            ], 512), [
              [ae, Qe.value]
            ]),
            V(u).buttons ? (i(), p("div", ol, [
              N(e.$slots, "buttons")
            ])) : b("", !0),
            $.value && V(u).filters ? (i(), p("div", al, [
              N(e.$slots, "filters", {
                items: r.value,
                isLoading: d.value
              })
            ])) : b("", !0),
            d.value ? (i(), k(I, { key: 2 })) : b("", !0),
            oe(T("div", {
              class: "lkt-table",
              "data-sortable": e.sortable
            }, [
              e.itemMode ? (i(), p("div", {
                key: 1,
                class: ne(["lkt-table-items-container", e.itemsContainerClass])
              }, [
                (i(!0), p(M, null, q(r.value, (S, B) => (i(), p("div", fl, [
                  N(e.$slots, "item", {
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
              ], 2)) : (i(), p("table", ul, [
                T("thead", null, [
                  T("tr", null, [
                    e.sortable && w.value ? (i(), p("th", il)) : b("", !0),
                    e.addNavigation && w.value ? (i(), p("th", rl)) : b("", !0),
                    ke.value ? (i(), p("th", sl)) : b("", !0),
                    (i(!0), p(M, null, q(ie.value, (S) => (i(), p(M, null, [
                      de.value.indexOf(S.key) === -1 ? (i(), k(Zt, {
                        key: 0,
                        column: S,
                        "sort-by": v.value,
                        "sort-direction": a.value,
                        "amount-of-columns": e.columns.length,
                        items: r.value,
                        onClick: (B) => Ve(S)
                      }, null, 8, ["column", "sort-by", "sort-direction", "amount-of-columns", "items", "onClick"])) : b("", !0)
                    ], 64))), 256)),
                    e.canDrop && pe.value && w.value ? (i(), p("th", dl)) : b("", !0),
                    e.canEditButton && fe.value && w.value ? (i(), p("th", cl)) : b("", !0)
                  ])
                ]),
                T("tbody", {
                  ref: (S) => P.value = S,
                  id: "lkt-table-body-" + V(ue)
                }, [
                  (i(!0), p(M, null, q(r.value, (S, B) => (i(), k(qt, {
                    modelValue: r.value[B],
                    "onUpdate:modelValue": (K) => r.value[B] = K,
                    key: Me(S, B),
                    i: B,
                    "display-hidden-columns-indicator": ke.value,
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
                    onClick: Ee,
                    onShow: Be,
                    onItemUp: rt,
                    onItemDown: st,
                    onItemDrop: Le
                  }, $e({ _: 2 }, [
                    q(be.value, (K) => ({
                      name: K,
                      fn: W((X) => [
                        N(e.$slots, K, {
                          item: X.item,
                          value: X.value,
                          column: X.column
                        })
                      ])
                    }))
                  ]), 1032, ["modelValue", "onUpdate:modelValue", "i", "display-hidden-columns-indicator", "is-draggable", "sortable", "visible-columns", "empty-columns", "add-navigation", "hidden-is-visible", "latest-row", "can-drop", "drop-confirm", "drop-resource", "drop-text", "drop-icon", "can-edit", "edit-text", "edit-icon", "edit-link", "edit-mode-enabled"]))), 128)),
                  ce.value.length > 0 ? (i(!0), p(M, { key: 0 }, q(r.value, (S, B) => (i(), k(Xt, {
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
                    onClick: Ee,
                    onShow: Be
                  }, $e({ _: 2 }, [
                    q(be.value, (K) => ({
                      name: K,
                      fn: W((X) => [
                        N(e.$slots, K, {
                          item: X.item,
                          value: X.value,
                          column: X.column
                        })
                      ])
                    }))
                  ]), 1032, ["modelValue", "onUpdate:modelValue", "i", "hidden-columns", "hidden-columns-col-span", "is-draggable", "sortable", "visible-columns", "empty-columns", "hidden-is-visible"]))), 128)) : b("", !0)
                ], 8, ml)
              ]))
            ], 8, nl), [
              [ae, !d.value && r.value.length > 0]
            ]),
            !d.value && r.value.length === 0 ? (i(), p("div", pl, [
              V(u).empty ? N(e.$slots, "empty", { key: 0 }) : ct.value ? (i(), k(z(mt.value), {
                key: 1,
                message: e.noResultsText
              }, null, 8, ["message"])) : e.noResultsText ? (i(), p(M, { key: 2 }, [
                ee(G(e.noResultsText), 1)
              ], 64)) : b("", !0)
            ])) : b("", !0),
            re.value || V(u).bottomButtons ? (i(), p("div", vl, [
              re.value && r.value.length >= e.requiredItemsForBottomCreate ? (i(), k(Fe, {
                key: 0,
                disabled: !Re.value || e.createDisabled,
                text: e.createText,
                icon: e.createIcon,
                to: e.createRoute,
                onClick: we
              }, null, 8, ["disabled", "text", "icon", "to"])) : b("", !0),
              N(e.$slots, "bottom-buttons")
            ])) : b("", !0),
            e.resource.length > 0 ? (i(), k(H, {
              key: 5,
              ref_key: "paginator",
              ref: E,
              modelValue: Y.value,
              "onUpdate:modelValue": m[1] || (m[1] = (S) => Y.value = S),
              resource: e.resource,
              filters: e.filters,
              onResults: We,
              onLoading: qe,
              onPerms: He,
              onCustom: Pe,
              onResponse: Ke
            }, null, 8, ["modelValue", "resource", "filters"])) : b("", !0)
          ]),
          _: 3
        }, 8, ["class"]))
      ], 8, _t);
    };
  }
}), zl = {
  install: (l) => {
    l.component("lkt-loader") === void 0 && l.use(bt), l.component("lkt-button") === void 0 && l.use(gt), l.component("lkt-paginator") === void 0 && l.use(Ct), l.component("lkt-field-text") === void 0 && l.use(St), l.component("lkt-field-textarea") === void 0 && l.use(Vt), l.component("lkt-field-select") === void 0 && l.use(Et), l.component("lkt-field-switch") === void 0 && l.use(Bt), l.component("lkt-field-file") === void 0 && l.use(Dt), l.component("lkt-table") === void 0 && l.component("lkt-table", hl);
  }
}, Jl = (l) => (R.navButtonSlot = l, !0), Ql = (l) => (R.dropButtonSlot = l, !0), Xl = (l) => (R.createButtonSlot = l, !0), Yl = (l) => {
  R.defaultEmptySlot = l;
};
export {
  U as LktTableColumn,
  Fl as createActionColumn,
  Pl as createCheckColumn,
  $l as createColumn,
  Wl as createEmailColumn,
  jl as createFileColumn,
  Nl as createFloatColumn,
  Gl as createHiddenColumn,
  Ol as createIntegerColumn,
  Al as createLinkColumn,
  ql as createSelectColumn,
  Kl as createSwitchColumn,
  Hl as createTelColumn,
  Ul as createTextColumn,
  zl as default,
  Xl as setTableCreateButtonSlot,
  Ql as setTableDropButtonSlot,
  Yl as setTableEmptySlot,
  Jl as setTableNavButtonSlot
};
