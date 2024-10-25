import { reactive as N, defineComponent as X, ref as E, watch as U, nextTick as be, computed as f, resolveComponent as M, unref as g, openBlock as u, createBlock as k, withCtx as H, createTextVNode as le, toDisplayString as J, createElementBlock as c, Fragment as T, withModifiers as He, resolveDynamicComponent as Q, createCommentVNode as y, normalizeClass as x, createElementVNode as R, createVNode as ee, renderList as j, renderSlot as P, withDirectives as ae, vShow as ne, useSlots as yt, onMounted as kt, createSlots as Ne, normalizeProps as ke } from "vue";
import { httpCall as bt } from "lkt-http-client";
import { __ as ue } from "lkt-i18n";
import { replaceAll as Oe, generateRandomString as gt } from "lkt-string-tools";
import { DataState as St } from "lkt-data-state";
import Ct from "sortablejs";
import { time as me } from "lkt-date-tools";
import Vt from "lkt-loader";
import Et from "lkt-button";
import Dt from "lkt-paginator";
import It from "lkt-field-text";
import Bt from "lkt-field-textarea";
import wt from "lkt-field-select";
import Tt from "lkt-field-switch";
import Lt from "lkt-field-file";
var S = /* @__PURE__ */ ((l) => (l.Text = "text", l.Number = "number", l.Check = "check", l.Switch = "switch", l.Select = "select", l.Email = "email", l.Tel = "tel", l.File = "file", l.Link = "link", l.Action = "action", l.Integer = "int", l.Float = "float", l))(S || {});
class K {
  constructor(t = "", s = "") {
    if (this.sortable = !0, this.hidden = !1, this.formatter = void 0, this.checkEmpty = void 0, this.colspan = void 0, this.preferSlot = !0, this.resource = "", this.resourceData = {}, this.isMultiple = !1, this.multiple = !1, this.isLoading = !1, this.resourceLoaded = !1, this.valueSlot = "", this.editSlot = "", this.multipleDisplay = "inline", this.multipleDisplayEdition = "", this.icon = "", this.optionsIcon = "", this.optionsModal = "", this.modal = "", this.modalKey = "", this.modalData = {}, typeof t == "object")
      for (let a in t)
        this[a] = t[a];
    else
      this.key = t, this.label = s;
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
    return this.type = S.Link, this.link = t, this;
  }
  defineAsText() {
    return this.type = S.Text, this;
  }
  defineAsEmail() {
    return this.type = S.Email, this;
  }
  defineAsTel() {
    return this.type = S.Tel, this;
  }
  defineAsInteger() {
    return this.type = S.Integer, this;
  }
  defineAsFloat() {
    return this.type = S.Float, this;
  }
  defineAsCheck() {
    return this.type = S.Check, this;
  }
  defineAsSwitch() {
    return this.type = S.Switch, this;
  }
  defineAsFile() {
    return this.type = S.File, this;
  }
  defineAsAction(t) {
    return this.type = S.Action, this.action = t, this;
  }
  defineAsSelect(t) {
    return this.type = S.Select, this.options = t, this;
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
      const t = await bt(this.resource, this.resourceData);
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
const Al = (l, t, s = !0) => N(new K(l, t).setIsSortable(s)), $l = (l, t, s, a = !0) => N(new K(l, t).setIsSortable(a).defineAsLink(s)), Fl = (l, t, s, a = !0) => N(new K(l, t).setIsSortable(a).defineAsAction(s)), Ul = (l, t, s = !0) => N(new K(l, t).setIsSortable(s).defineAsText()), Nl = (l, t, s = !0) => N(new K(l, t).setIsSortable(s).defineAsInteger()), Kl = (l, t, s = !0) => N(new K(l, t).setIsSortable(s).defineAsFloat()), Pl = (l, t, s = !0) => N(new K(l, t).setIsSortable(s).defineAsEmail()), Hl = (l, t, s = !0) => N(new K(l, t).setIsSortable(s).defineAsTel()), Ol = (l, t, s = !0) => N(new K(l, t).setIsSortable(s).defineAsCheck()), Wl = (l, t, s = !0) => N(new K(l, t).setIsSortable(s).defineAsSwitch()), ql = (l, t, s, a = !0) => N(new K(l, t).setIsSortable(a).defineAsSelect(s)), jl = (l, t, s = !0) => N(new K(l, t).setIsSortable(s).defineAsFile()), zl = (l, t, s = !0) => N(new K(l, t).setIsSortable(s).setIsHidden(!0)), Ke = (l, t, s, a) => {
  if (!s) return 0;
  let i = l[s.key], o = t[s.key];
  if (a === "asc") {
    if (i > o) return 1;
    if (o > i) return -1;
  } else {
    if (i > o) return -1;
    if (o > i) return 1;
  }
  return 0;
}, te = (l, t, s, a = []) => {
  if (l.extractTitleFromColumn) {
    let i = a.find((o) => o.key === l.extractTitleFromColumn);
    if (i)
      return te(i, t, s, a);
  }
  if (l.formatter && typeof l.formatter == "function") {
    let i = l.formatter(t[l.key], t, l, s);
    return i.startsWith("__:") ? ue(i.substring(3)) : i;
  }
  return t[l.key];
}, Mt = (l, t, s) => {
  if (!l.colspan) return -1;
  let a = t;
  return s.forEach((i) => {
    let o = ge(l, i);
    o > 0 && o < a && (a = o);
  }), a;
}, ge = (l, t) => l.colspan === !1 ? !1 : typeof l.colspan == "function" ? l.colspan(t) : l.colspan, Rt = (l, t) => typeof l.preferSlot > "u" ? !0 : l.preferSlot === !1 ? !1 : typeof l.preferSlot == "function" ? l.preferSlot(t) : !0, At = (l, t, s) => {
  if (typeof l != "object" || !l.key || t.indexOf(l.key) > -1) return !1;
  let a = ge(l, s);
  return typeof l.colspan > "u" ? !0 : (typeof l.colspan < "u" && (typeof l.colspan == "function" ? a = parseInt(l.colspan(s)) : a = parseInt(l.colspan)), a > 0);
}, $t = (l = []) => {
  if (l.length > 0) {
    for (let t = 0; t < l.length; ++t)
      if (l[t].sortable) return l[t].key;
  }
  return "";
}, Ft = (l, t) => {
  if (l.length > 0) {
    for (let s = 0; s < l.length; ++s)
      if (l[s].key === t) return l[s];
  }
  return null;
}, We = /* @__PURE__ */ X({
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
    const s = t, a = l, i = E(a.modelValue), o = E(i.value[a.column.key]), v = E(null), D = E(a.column.showLoading());
    U(o, (n) => {
      const h = JSON.parse(JSON.stringify(i.value));
      h[a.column.key] = n, s("update:modelValue", h);
    }), U(() => a.modelValue, (n) => {
      i.value = n, o.value = i.value[a.column.key];
    }), U(() => a.column, () => {
      a.column.resourceLoaded && be(() => D.value = !1);
    }, { deep: !0 }), a.column.hasToLoadResource() && a.column.loadResource();
    const b = f(() => ({ ...a.column.slotData, item: i.value })), B = [
      S.Text,
      S.Select,
      "date",
      "switch"
    ], m = f(() => {
      if (a.column.modalKey.startsWith("prop:")) {
        let n = a.column.modalKey.substring(5);
        return i.value[n];
      }
      return a.column.modalKey;
    }), z = f(() => {
      if (typeof a.column.options == "string" && a.column.options.startsWith("prop:")) {
        let n = a.column.options.substring(5);
        return i.value[n];
      }
      return a.column.options;
    });
    return (n, h) => {
      const _ = M("lkt-anchor"), r = M("lkt-field"), V = M("lkt-field-text"), F = M("lkt-field-switch"), I = M("lkt-field-file"), Y = M("lkt-loader"), G = M("lkt-field-select");
      return n.column.type === g(S).Link ? (u(), k(_, {
        key: 0,
        to: n.column.getHref(i.value)
      }, {
        default: H(() => [
          le(J(g(te)(n.column, i.value, n.i)), 1)
        ]),
        _: 1
      }, 8, ["to"])) : n.column.type === g(S).Action ? (u(), c("a", {
        key: 1,
        href: "#",
        onClick: h[0] || (h[0] = (d) => n.column.doAction(i.value))
      }, J(g(te)(n.column, i.value, n.i)), 1)) : B.includes(n.column.type) ? (u(), k(r, {
        key: 2,
        type: n.column.type,
        "read-mode": !n.column.editable || !n.editModeEnabled,
        ref: (d) => v.value = d,
        "edit-slot": n.column.editSlot,
        "value-slot": n.column.valueSlot,
        "slot-data": b.value,
        label: n.column.type === "switch" ? n.column.label : "",
        icon: n.column.icon,
        modal: n.column.modal,
        "modal-key": m.value,
        "modal-data": n.column.modalData,
        options: z.value,
        "options-icon": n.column.optionsIcon,
        "options-modal": n.column.optionsModal,
        multiple: n.column.multiple,
        "multiple-display": n.column.multipleDisplay,
        "multiple-display-edition": n.column.multipleDisplayEdition,
        modelValue: o.value,
        "onUpdate:modelValue": h[1] || (h[1] = (d) => o.value = d)
      }, null, 8, ["type", "read-mode", "edit-slot", "value-slot", "slot-data", "label", "icon", "modal", "modal-key", "modal-data", "options", "options-icon", "options-modal", "multiple", "multiple-display", "multiple-display-edition", "modelValue"])) : n.column.type === g(S).Text ? (u(), k(V, {
        key: 3,
        "read-mode": !n.column.editable || !n.editModeEnabled,
        ref: (d) => v.value = d,
        "edit-slot": n.column.editSlot,
        "value-slot": n.column.valueSlot,
        "slot-data": b.value,
        modelValue: o.value,
        "onUpdate:modelValue": h[2] || (h[2] = (d) => o.value = d)
      }, null, 8, ["read-mode", "edit-slot", "value-slot", "slot-data", "modelValue"])) : n.column.type === g(S).Email ? (u(), k(V, {
        key: 4,
        "read-mode": !n.column.editable || !n.editModeEnabled,
        ref: (d) => v.value = d,
        "edit-slot": n.column.editSlot,
        "value-slot": n.column.valueSlot,
        "slot-data": b.value,
        "is-email": "",
        modelValue: o.value,
        "onUpdate:modelValue": h[3] || (h[3] = (d) => o.value = d)
      }, null, 8, ["read-mode", "edit-slot", "value-slot", "slot-data", "modelValue"])) : n.column.type === g(S).Tel ? (u(), k(V, {
        key: 5,
        "read-mode": !n.column.editable || !n.editModeEnabled,
        ref: (d) => v.value = d,
        "edit-slot": n.column.editSlot,
        "value-slot": n.column.valueSlot,
        "slot-data": b.value,
        "is-tel": "",
        modelValue: o.value,
        "onUpdate:modelValue": h[4] || (h[4] = (d) => o.value = d)
      }, null, 8, ["read-mode", "edit-slot", "value-slot", "slot-data", "modelValue"])) : n.column.type === g(S).Integer ? (u(), k(V, {
        key: 6,
        "read-mode": !n.column.editable || !n.editModeEnabled,
        ref: (d) => v.value = d,
        "edit-slot": n.column.editSlot,
        "value-slot": n.column.valueSlot,
        "slot-data": b.value,
        "is-number": "",
        modelValue: o.value,
        "onUpdate:modelValue": h[5] || (h[5] = (d) => o.value = d)
      }, null, 8, ["read-mode", "edit-slot", "value-slot", "slot-data", "modelValue"])) : n.column.type === g(S).Float ? (u(), k(V, {
        key: 7,
        "read-mode": !n.column.editable || !n.editModeEnabled,
        ref: (d) => v.value = d,
        "edit-slot": n.column.editSlot,
        "value-slot": n.column.valueSlot,
        "slot-data": b.value,
        "is-number": "",
        modelValue: o.value,
        "onUpdate:modelValue": h[6] || (h[6] = (d) => o.value = d)
      }, null, 8, ["read-mode", "edit-slot", "value-slot", "slot-data", "modelValue"])) : n.column.type === g(S).Check ? (u(), k(F, {
        key: 8,
        "is-check": "",
        "read-mode": !n.column.editable || !n.editModeEnabled,
        ref: (d) => v.value = d,
        modelValue: o.value,
        "onUpdate:modelValue": h[7] || (h[7] = (d) => o.value = d)
      }, null, 8, ["read-mode", "modelValue"])) : n.column.type === g(S).Switch ? (u(), k(F, {
        key: 9,
        "read-mode": !n.column.editable || !n.editModeEnabled,
        ref: (d) => v.value = d,
        modelValue: o.value,
        "onUpdate:modelValue": h[8] || (h[8] = (d) => o.value = d)
      }, null, 8, ["read-mode", "modelValue"])) : n.column.type === g(S).File ? (u(), k(I, {
        key: 10,
        "read-mode": !n.column.editable || !n.editModeEnabled,
        ref: (d) => v.value = d,
        modelValue: o.value,
        "onUpdate:modelValue": h[9] || (h[9] = (d) => o.value = d)
      }, null, 8, ["read-mode", "modelValue"])) : n.column.type === g(S).Select ? (u(), c(T, { key: 11 }, [
        D.value ? (u(), k(Y, { key: 0 })) : (u(), k(G, {
          key: 1,
          "read-mode": !n.column.editable || !n.editModeEnabled,
          ref: (d) => v.value = d,
          modelValue: o.value,
          "onUpdate:modelValue": h[10] || (h[10] = (d) => o.value = d),
          "slot-data": b.value,
          resource: n.column.resource,
          "use-resource-slot": n.column.resourceSlot ? n.column.resourceSlot : n.column.resource,
          "resource-data": n.column.resourceData,
          options: n.column.options,
          multiple: n.column.isMultiple,
          tags: n.column.tags,
          "multiple-display": n.column.multipleDisplay,
          "multiple-display-edition": n.column.multipleDisplayEdition
        }, null, 8, ["read-mode", "modelValue", "slot-data", "resource", "use-resource-slot", "resource-data", "options", "multiple", "tags", "multiple-display", "multiple-display-edition"]))
      ], 64)) : (u(), c(T, { key: 12 }, [
        le(J(g(te)(n.column, i.value, n.i, n.columns)), 1)
      ], 64));
    };
  }
}), $ = {
  navButtonSlot: "",
  dropButtonSlot: "",
  editButtonSlot: "",
  createButtonSlot: "",
  defaultEmptySlot: void 0
}, Ut = /* @__PURE__ */ X({
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
    const s = t, a = f(() => $.dropButtonSlot !== ""), i = f(() => $.dropButtonSlot);
    return (o, v) => {
      const D = M("lkt-button");
      return u(), k(D, {
        palette: "table-delete",
        icon: a.value ? "" : o.icon,
        text: a.value ? "" : o.text,
        resource: o.resource,
        "resource-data": o.resourceData,
        "confirm-modal": o.confirm,
        disabled: o.disabled,
        onClick: v[0] || (v[0] = He((b) => s("click"), ["prevent", "stop"]))
      }, {
        default: H(() => [
          a.value ? (u(), k(Q(i.value), { key: 0 })) : y("", !0)
        ]),
        _: 1
      }, 8, ["icon", "text", "resource", "resource-data", "confirm-modal", "disabled"]);
    };
  }
}), Nt = /* @__PURE__ */ X({
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
    const s = t, a = f(() => $.editButtonSlot !== ""), i = f(() => $.editButtonSlot);
    return (o, v) => {
      const D = M("lkt-button");
      return u(), k(D, {
        palette: "table-delete",
        icon: a.value ? "" : o.icon,
        text: a.value ? "" : o.text,
        "on-click-to": o.link,
        "is-anchor": o.link !== "",
        resource: o.resource,
        "resource-data": o.resourceData,
        "confirm-modal": o.confirm,
        disabled: o.disabled,
        onClick: v[0] || (v[0] = He((b) => s("click"), ["prevent", "stop"]))
      }, {
        default: H(() => [
          a.value ? (u(), k(Q(i.value), { key: 0 })) : y("", !0)
        ]),
        _: 1
      }, 8, ["icon", "text", "on-click-to", "is-anchor", "resource", "resource-data", "confirm-modal", "disabled"]);
    };
  }
}), Kt = ["data-i", "data-draggable"], Pt = {
  key: 1,
  "data-role": "invalid-drag-indicator"
}, Ht = {
  key: 2,
  class: "lkt-table-nav-cell"
}, Ot = { class: "lkt-table-nav-container" }, Wt = ["data-column", "colspan", "title", "onClick"], qt = {
  key: 4,
  class: "lkt-table-col-drop"
}, jt = {
  key: 5,
  class: "lkt-table-col-edit"
}, zt = /* @__PURE__ */ X({
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
    const s = t, a = l, i = E(a.modelValue), o = E(a.editLink);
    for (let r in i.value) o.value = Oe(o.value, ":" + r, i.value[r]);
    const v = (r) => s("click", r), D = (r, V) => {
      s("show", r, V);
    }, b = f(() => {
      let r = [];
      return a.sortable && a.isDraggable && r.push("handle"), r.join(" ");
    }), B = f(() => $.navButtonSlot !== ""), m = f(() => $.navButtonSlot), z = () => {
      s("item-up", a.i);
    }, n = () => {
      s("item-down", a.i);
    }, h = () => {
      s("item-drop", a.i);
    }, _ = () => {
    };
    return U(() => a.modelValue, (r) => i.value = r), U(i, (r) => {
      s("update:modelValue", r, a.i);
    }, { deep: !0 }), (r, V) => {
      const F = M("lkt-button");
      return u(), c("tr", {
        "data-i": r.i,
        "data-draggable": r.isDraggable
      }, [
        r.sortable && r.isDraggable && r.editModeEnabled ? (u(), c("td", {
          key: 0,
          "data-role": "drag-indicator",
          class: x(b.value)
        }, null, 2)) : r.sortable && r.editModeEnabled ? (u(), c("td", Pt)) : y("", !0),
        r.addNavigation && r.editModeEnabled ? (u(), c("td", Ht, [
          R("div", Ot, [
            ee(F, {
              palette: "table-nav",
              disabled: r.i === 0,
              onClick: z
            }, {
              default: H(() => [
                B.value ? (u(), k(Q(m.value), {
                  key: 0,
                  direction: "up"
                })) : (u(), c(T, { key: 1 }, [
                  V[2] || (V[2] = R("i", { class: "" }, null, -1)),
                  V[3] || (V[3] = le(" UP "))
                ], 64))
              ]),
              _: 1
            }, 8, ["disabled"]),
            ee(F, {
              palette: "table-nav",
              disabled: r.latestRow,
              onClick: n
            }, {
              default: H(() => [
                B.value ? (u(), k(Q(m.value), {
                  key: 0,
                  direction: "down"
                })) : (u(), c(T, { key: 1 }, [
                  V[4] || (V[4] = R("i", { class: "" }, null, -1)),
                  V[5] || (V[5] = le(" DOWN "))
                ], 64))
              ]),
              _: 1
            }, 8, ["disabled"])
          ])
        ])) : y("", !0),
        r.displayHiddenColumnsIndicator ? (u(), c("td", {
          key: 3,
          onClick: V[0] || (V[0] = (I) => D(I, r.i)),
          "data-role": "show-more",
          class: x(r.hiddenIsVisible ? "state-open" : "")
        }, null, 2)) : y("", !0),
        (u(!0), c(T, null, j(r.visibleColumns, (I) => (u(), c(T, null, [
          g(At)(I, r.emptyColumns, i.value) ? (u(), c("td", {
            key: "td" + r.i,
            "data-column": I.key,
            colspan: g(ge)(I, i.value),
            title: g(te)(I, i.value, r.i, r.visibleColumns),
            onClick: (Y) => v(Y, i.value)
          }, [
            r.$slots[I.key] && g(Rt)(I, i.value) ? P(r.$slots, I.key, {
              key: 0,
              value: i.value[I.key],
              item: i.value,
              column: I,
              i: r.i
            }) : i.value ? (u(), k(We, {
              key: 1,
              modelValue: i.value,
              "onUpdate:modelValue": V[1] || (V[1] = (Y) => i.value = Y),
              column: I,
              columns: r.visibleColumns,
              "edit-mode-enabled": r.editModeEnabled,
              i: r.i
            }, null, 8, ["modelValue", "column", "columns", "edit-mode-enabled", "i"])) : y("", !0)
          ], 8, Wt)) : y("", !0)
        ], 64))), 256)),
        r.canDrop && r.editModeEnabled ? (u(), c("td", qt, [
          ee(Ut, {
            resource: r.dropResource,
            "resource-data": i.value,
            confirm: r.dropConfirm,
            text: r.dropText,
            icon: r.dropIcon,
            onClick: h
          }, null, 8, ["resource", "resource-data", "confirm", "text", "icon"])
        ])) : y("", !0),
        r.canEdit && r.editModeEnabled ? (u(), c("td", jt, [
          ee(Nt, {
            "resource-data": i.value,
            text: r.editText,
            icon: r.editIcon,
            link: o.value,
            onClick: _
          }, null, 8, ["resource-data", "text", "icon", "link"])
        ])) : y("", !0)
      ], 8, Kt);
    };
  }
}), Gt = { "data-role": "hidden-row" }, Jt = ["colspan"], Qt = ["data-column"], Xt = ["data-i"], Yt = ["data-column", "title", "onClick"], Zt = /* @__PURE__ */ X({
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
    const s = t, a = l, i = E(a.modelValue), o = (v) => s("click", v);
    return U(() => a.modelValue, (v) => i.value = v), U(i, () => s("update:modelValue", i.value)), (v, D) => ae((u(), c("tr", Gt, [
      R("td", { colspan: v.hiddenColumnsColSpan }, [
        R("table", null, [
          R("tr", null, [
            (u(!0), c(T, null, j(v.hiddenColumns, (b) => (u(), c("th", {
              "data-column": b.key
            }, [
              R("div", null, J(b.label), 1)
            ], 8, Qt))), 256))
          ]),
          R("tr", { "data-i": v.i }, [
            (u(!0), c(T, null, j(v.hiddenColumns, (b, B) => (u(), c("td", {
              "data-column": b.key,
              title: g(te)(b, i.value, B, v.hiddenColumns),
              onClick: (m) => o(m, i.value)
            }, [
              v.$slots[b.key] ? P(v.$slots, b.key, {
                key: 0,
                value: i.value[b.key],
                item: i.value,
                column: b,
                i: B
              }) : (u(), k(We, {
                key: 1,
                column: b,
                columns: v.hiddenColumns,
                modelValue: i.value,
                "onUpdate:modelValue": D[0] || (D[0] = (m) => i.value = m),
                i: B
              }, null, 8, ["column", "columns", "modelValue", "i"]))
            ], 8, Yt))), 256))
          ], 8, Xt)
        ])
      ], 8, Jt)
    ], 512)), [
      [ne, v.hiddenIsVisible]
    ]);
  }
}), Pe = /* @__PURE__ */ X({
  __name: "CreateButton",
  props: {
    disabled: { type: Boolean, default: !1 },
    text: { default: "" },
    icon: { default: "" },
    to: { default: "" }
  },
  emits: ["click"],
  setup(l, { emit: t }) {
    const s = t, a = f(() => $.createButtonSlot !== ""), i = f(() => $.createButtonSlot);
    return (o, v) => {
      const D = M("lkt-button");
      return u(), k(D, {
        palette: "table-create",
        disabled: o.disabled,
        icon: a.value ? "" : o.icon,
        text: a.value ? "" : o.text,
        "on-click-to": o.to,
        onClick: v[0] || (v[0] = (b) => s("click"))
      }, {
        default: H(() => [
          a.value ? (u(), k(Q(i.value), { key: 0 })) : y("", !0)
        ]),
        _: 1
      }, 8, ["disabled", "icon", "text", "on-click-to"]);
    };
  }
}), _t = ["data-column", "data-sortable", "data-sort", "colspan", "title"], xt = /* @__PURE__ */ X({
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
    const s = t, a = l, i = f(() => Mt(a.column, a.amountOfColumns, a.items)), o = f(() => a.column.sortable === !0), v = f(() => o.value && a.sortBy === a.column.key ? a.sortDirection : ""), D = f(() => a.column.label.startsWith("__:") ? ue(a.column.label.substring(3)) : a.column.label), b = () => s("click", a.column);
    return (B, m) => (u(), c("th", {
      "data-column": B.column.key,
      "data-sortable": o.value,
      "data-sort": v.value,
      colspan: i.value,
      title: D.value,
      onClick: b
    }, [
      R("div", null, J(D.value), 1)
    ], 8, _t));
  }
}), el = ["id"], tl = { class: "lkt-table-page-buttons" }, ll = { key: 1 }, ol = { class: "switch-edition-mode" }, al = {
  key: 0,
  class: "lkt-table-page-buttons"
}, nl = {
  key: 1,
  class: "lkt-table-page-filters"
}, ul = ["data-sortable"], il = { key: 0 }, sl = {
  key: 0,
  "data-role": "drag-indicator"
}, rl = { key: 1 }, dl = { key: 2 }, ml = {
  key: 3,
  class: "lkt-table-col-drop"
}, cl = {
  key: 4,
  class: "lkt-table-col-edit"
}, pl = ["id"], fl = {
  key: 0,
  class: "lkt-table-item"
}, vl = {
  key: 3,
  class: "lkt-table-empty"
}, hl = {
  key: 4,
  class: "lkt-table-page-buttons lkt-table-page-buttons-bottom"
}, yl = /* @__PURE__ */ X({
  __name: "LktTable",
  props: {
    modelValue: { default: () => [] },
    columns: { default: () => [] },
    sorter: { type: Function, default: Ke },
    draggableChecker: { type: Function, default: (l) => !0 },
    checkValidDrag: { type: Function, default: void 0 },
    sortable: { type: Boolean, default: !1 },
    hideEmptyColumns: { type: Boolean, default: !1 },
    initialSorting: { type: Boolean, default: !1 },
    draggableItemKey: { default: "name" },
    itemDisplayChecker: {},
    page: { default: 1 },
    perms: { default: [] },
    resource: { default: "" },
    noResultsText: { default: "No results" },
    title: { default: "" },
    titleTag: { default: "h2" },
    titleIcon: { default: "" },
    headerClass: { default: "" },
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
    requiredItemsForBottomCreate: { default: 0 },
    slotItemVar: { default: "item" }
  },
  emits: ["update:modelValue", "update:perms", "sort", "click", "save", "error", "before-save", "read-response", "click-create"],
  setup(l, { expose: t, emit: s }) {
    const a = s, i = yt(), o = l, v = {}, D = E(typeof o.sorter == "function" ? o.sorter : Ke), b = E($t(o.columns)), B = E("asc"), m = E(o.modelValue), z = E(v), n = E(null), h = E(o.columns), _ = E(o.page), r = E(!1), V = E(!1), F = E(o.perms), I = E(null), Y = E({}), G = E(new St({ items: m.value }, o.dataStateConfig)), d = E(o.editMode), oe = E(0), qe = (e) => {
      Array.isArray(e) && (m.value = e), r.value = !1, V.value = !0, G.value.store({ items: m.value }).turnStoredIntoOriginal();
    }, je = (e) => {
      F.value = e;
    }, ze = (e) => {
    }, Ge = (e) => {
      a("read-response", e);
    }, Je = () => be(() => r.value = !0), Qe = () => {
      I.value.doRefresh();
    }, ie = gt(12), ce = f(() => {
      if (!o.hideEmptyColumns) return [];
      let e = [];
      return h.value.forEach((p) => {
        let C = p.key, L = !1;
        m.value.forEach((A) => {
          if (typeof A.checkEmpty == "function")
            return A.checkEmpty(A);
          A[C] && (L = !0);
        }), L || e.push(C);
      }), e;
    }), se = f(() => h.value.filter((e) => !e.hidden)), pe = f(() => h.value.filter((e) => e.hidden)), Xe = f(() => {
      let e = se.value.length + 1;
      return o.sortable && ++e, e;
    }), Ye = f(() => h.value.filter((e) => e.isForRowKey)), Se = f(() => pe.value.length > 0 && !o.sortable), Ze = f(() => h.value.map((e) => e.key)), Ce = f(() => {
      let e = [];
      for (let p in i) Ze.value.indexOf(p) !== -1 && e.push(p);
      return e;
    }), Ve = f(() => o.hiddenSave || r.value || !o.saveResource ? !1 : d.value && G.value.changed() ? !0 : d.value), _e = f(() => re.value && m.value.length >= o.requiredItemsForTopCreate || o.switchEditionEnabled ? !0 : Ve.value || d.value && o.canCreate), xe = f(() => o.saveDisabled || typeof o.saveValidator == "function" && !o.saveValidator(m.value) ? !1 : G.value.changed()), et = f(() => m.value.length), tt = f(() => ({
      items: m.value,
      ...o.saveResourceData
    })), lt = f(() => o.titleTag === "" ? "h2" : o.titleTag), ot = f(() => o.wrapContentTag === "" ? "div" : o.wrapContentTag), fe = f(() => o.title.startsWith("__:") ? ue(o.title.substring(3)) : o.title), at = f(() => o.saveText.startsWith("__:") ? ue(o.saveText.substring(3)) : o.saveText), nt = f(() => o.editModeText.startsWith("__:") ? ue(o.editModeText.substring(3)) : o.editModeText), Ee = f(() => F.value.includes("create")), ut = f(() => F.value.includes("read")), ve = f(() => F.value.includes("update")), he = f(() => F.value.includes("drop")), it = (e) => {
      let p = e.target;
      if (typeof p.dataset.column > "u")
        do
          p = p.parentNode;
        while (typeof p.dataset.column > "u" && p.tagName !== "TABLE" && p.tagName !== "body");
      if (p.tagName === "TD" && (p = p.parentNode, p = p.dataset.i, typeof p < "u"))
        return m.value[p];
    }, De = (e) => z.value["tr_" + e] === !0, Ie = (e) => {
      e && e.sortable && (m.value = m.value.sort((p, C) => D.value(p, C, e, B.value)), B.value = B.value === "asc" ? "desc" : "asc", b.value = e.key, a("sort", [b.value, B.value]));
    }, Be = (e) => {
      a("click", e);
    }, we = (e, p) => {
      let C = "tr_" + p;
      z.value[C] = typeof z.value[C] > "u" ? !0 : !z.value[C];
    }, Te = () => {
      h.value.forEach((e) => {
        if (e.type === "select" && e.autoLoadSelectOptions) {
          let p = e.autoLoadSelectOptionsKey !== "" ? e.autoLoadSelectOptionsKey : e.key, C = [];
          m.value.forEach((A) => {
            Array.isArray(A[p]) && A[p].forEach((O) => C.push(O));
          });
          let L = {};
          C = C.filter(function(A) {
            return L[A.value] ? !1 : (L[A.value] = !0, !0);
          }), e.setOptions(C);
        }
      });
    }, st = (e) => typeof o.checkValidDrag == "function" ? o.checkValidDrag(e) : !0, Le = (e) => typeof o.draggableChecker == "function" ? o.draggableChecker(e) : !0, Me = () => {
      if (o.canCreateWithoutEdition)
        a("click-create");
      else {
        if (typeof o.newValueGenerator == "function") {
          let e = o.newValueGenerator();
          if (typeof e == "object") {
            m.value.push(e);
            return;
          }
        }
        m.value.push({});
      }
    }, rt = () => {
      r.value = !0;
    }, dt = () => {
      r.value = !1;
    }, mt = (e, p) => {
      if (a("before-save"), o.saveResource && (r.value = !1, !p.success)) {
        a("error", p.httpStatus);
        return;
      }
      G.value.turnStoredIntoOriginal(), a("save", p);
    }, Re = (e, p, C) => {
      if (C >= e.length) {
        let L = C - e.length + 1;
        for (; L--; ) e.push(void 0);
      }
      return e.splice(C, 0, e.splice(p, 1)[0]), e;
    }, ct = (e) => {
      Re(m.value, e, e - 1), oe.value = me();
    }, pt = (e) => {
      Re(m.value, e, e + 1), oe.value = me();
    }, Ae = (e) => {
      m.value.splice(e, 1), oe.value = me();
    }, ft = () => {
      let e = document.getElementById("lkt-table-body-" + ie);
      Y.value = new Ct(e, {
        direction: "vertical",
        handle: ".handle",
        animation: 150,
        onEnd: function(p) {
          let C = p.oldIndex, L = p.newIndex;
          m.value.splice(L, 0, m.value.splice(C, 1)[0]), oe.value = me();
        },
        onMove: function(p, C) {
          return st(p);
        }
      });
    }, $e = (e, p, C = !1) => {
      let L = [oe.value, ie, "row", p];
      return C && L.push("hidden"), Ye.value.forEach((A) => {
        let O = String(e[A.key]).toLowerCase();
        O.length > 50 && (O = O.substring(0, 50)), O = Oe(O, " ", "-"), L.push(O);
      }), L.join("-");
    }, Fe = f(() => typeof o.createEnabledValidator == "function" ? o.createEnabledValidator({ items: m.value }) : !0), re = f(() => Ee.value ? o.canCreateWithoutEdition || o.canCreate && d.value : !1), Ue = (e) => typeof o.itemDisplayChecker == "function" ? o.itemDisplayChecker(e) : !0;
    kt(() => {
      Te(), o.initialSorting && Ie(Ft(o.columns, b.value)), G.value.store({ items: m.value }).turnStoredIntoOriginal(), o.sortable && be(() => {
        ft();
      });
    }), U(() => o.perms, (e) => F.value = e), U(F, (e) => a("update:perms", e)), U(() => o.editMode, (e) => d.value = e), U(() => o.columns, (e) => h.value = e), U(() => o.modelValue, (e) => m.value = e), U(m, (e) => {
      Te(), G.value.increment({ items: e }), a("update:modelValue", e);
    }, { deep: !0 }), t({
      getItemByEvent: it,
      doRefresh: Qe
    });
    const vt = f(() => typeof $.defaultEmptySlot < "u"), ht = f(() => $.defaultEmptySlot);
    return (e, p) => {
      const C = M("lkt-button"), L = M("lkt-field-switch"), A = M("lkt-loader"), O = M("lkt-paginator");
      return u(), c("section", {
        class: "lkt-table-page",
        id: "lkt-table-page-" + g(ie)
      }, [
        fe.value || g(i).title ? (u(), c("header", {
          key: 0,
          class: x(e.headerClass)
        }, [
          fe.value ? (u(), k(Q(lt.value), { key: 0 }, {
            default: H(() => [
              e.titleIcon ? (u(), c("i", {
                key: 0,
                class: x(e.titleIcon)
              }, null, 2)) : y("", !0),
              le(" " + J(fe.value), 1)
            ]),
            _: 1
          })) : y("", !0),
          g(i).title ? P(e.$slots, "title", { key: 1 }) : y("", !0)
        ], 2)) : y("", !0),
        (u(), k(Q(ot.value), {
          class: x(["lkt-table-page-content-wrapper", e.wrapContentClass])
        }, {
          default: H(() => [
            ae(R("div", tl, [
              ae(ee(C, {
                ref: "saveButton",
                palette: "success",
                disabled: !xe.value,
                "confirm-modal": e.saveConfirm,
                "confirm-data": e.confirmData,
                resource: e.saveResource,
                "resource-data": tt.value,
                onLoading: rt,
                onLoaded: dt,
                onClick: mt
              }, {
                default: H(() => [
                  g(i)["button-save"] ? P(e.$slots, "button-save", {
                    key: 0,
                    items: m.value,
                    editMode: e.editMode,
                    canUpdate: !e.saveDisabled
                  }) : (u(), c("span", ll, J(at.value), 1))
                ]),
                _: 3
              }, 8, ["disabled", "confirm-modal", "confirm-data", "resource", "resource-data"]), [
                [ne, Ve.value]
              ]),
              re.value && m.value.length >= e.requiredItemsForTopCreate ? (u(), k(Pe, {
                key: 0,
                disabled: !Fe.value || e.createDisabled,
                text: e.createText,
                icon: e.createIcon,
                to: e.createRoute,
                onClick: Me
              }, null, 8, ["disabled", "text", "icon", "to"])) : y("", !0),
              R("div", ol, [
                ae(ee(L, {
                  modelValue: d.value,
                  "onUpdate:modelValue": p[0] || (p[0] = (w) => d.value = w),
                  label: nt.value
                }, null, 8, ["modelValue", "label"]), [
                  [ne, e.switchEditionEnabled]
                ])
              ])
            ], 512), [
              [ne, _e.value]
            ]),
            g(i).buttons ? (u(), c("div", al, [
              P(e.$slots, "buttons")
            ])) : y("", !0),
            V.value && g(i).filters ? (u(), c("div", nl, [
              P(e.$slots, "filters", {
                items: m.value,
                isLoading: r.value
              })
            ])) : y("", !0),
            r.value ? (u(), k(A, { key: 2 })) : y("", !0),
            ae(R("div", {
              class: "lkt-table",
              "data-sortable": e.sortable
            }, [
              e.itemMode ? (u(), c("div", {
                key: 1,
                class: x(["lkt-table-items-container", e.itemsContainerClass])
              }, [
                (u(!0), c(T, null, j(m.value, (w, W) => (u(), c(T, null, [
                  Ue(w) ? (u(), c("div", fl, [
                    P(e.$slots, "item", ke({
                      [e.slotItemVar || ""]: w,
                      index: W,
                      canCreate: Ee.value,
                      canRead: ut.value,
                      canUpdate: ve.value,
                      canDrop: he.value,
                      isLoading: r.value,
                      doDrop: () => Ae(W)
                    }))
                  ])) : y("", !0)
                ], 64))), 256))
              ], 2)) : (u(), c("table", il, [
                R("thead", null, [
                  R("tr", null, [
                    e.sortable && d.value ? (u(), c("th", sl)) : y("", !0),
                    e.addNavigation && d.value ? (u(), c("th", rl)) : y("", !0),
                    Se.value ? (u(), c("th", dl)) : y("", !0),
                    (u(!0), c(T, null, j(se.value, (w) => (u(), c(T, null, [
                      ce.value.indexOf(w.key) === -1 ? (u(), k(xt, {
                        key: 0,
                        column: w,
                        "sort-by": b.value,
                        "sort-direction": B.value,
                        "amount-of-columns": e.columns.length,
                        items: m.value,
                        onClick: (W) => Ie(w)
                      }, null, 8, ["column", "sort-by", "sort-direction", "amount-of-columns", "items", "onClick"])) : y("", !0)
                    ], 64))), 256)),
                    e.canDrop && he.value && d.value ? (u(), c("th", ml)) : y("", !0),
                    e.canEditButton && ve.value && d.value ? (u(), c("th", cl)) : y("", !0)
                  ])
                ]),
                R("tbody", {
                  ref: (w) => n.value = w,
                  id: "lkt-table-body-" + g(ie)
                }, [
                  (u(!0), c(T, null, j(m.value, (w, W) => (u(), c(T, null, [
                    Ue(w) ? (u(), k(zt, {
                      modelValue: m.value[W],
                      "onUpdate:modelValue": (Z) => m.value[W] = Z,
                      key: $e(w, W),
                      i: W,
                      "display-hidden-columns-indicator": Se.value,
                      "is-draggable": Le(w),
                      sortable: e.sortable,
                      "visible-columns": se.value,
                      "empty-columns": ce.value,
                      "add-navigation": e.addNavigation,
                      "hidden-is-visible": De(W),
                      "latest-row": W + 1 === et.value,
                      "can-drop": e.canDrop && he.value && d.value,
                      "drop-confirm": e.dropConfirm,
                      "drop-resource": e.dropResource,
                      "drop-text": e.dropText,
                      "drop-icon": e.dropIcon,
                      "can-edit": e.canEditButton && ve.value && d.value,
                      "edit-text": e.editText,
                      "edit-icon": e.editIcon,
                      "edit-link": e.editLink,
                      "edit-mode-enabled": d.value,
                      onClick: Be,
                      onShow: we,
                      onItemUp: ct,
                      onItemDown: pt,
                      onItemDrop: Ae
                    }, Ne({ _: 2 }, [
                      j(Ce.value, (Z) => ({
                        name: Z,
                        fn: H((q) => [
                          P(e.$slots, Z, ke({
                            [e.slotItemVar || ""]: q.item,
                            value: q.value,
                            column: q.column
                          }))
                        ])
                      }))
                    ]), 1032, ["modelValue", "onUpdate:modelValue", "i", "display-hidden-columns-indicator", "is-draggable", "sortable", "visible-columns", "empty-columns", "add-navigation", "hidden-is-visible", "latest-row", "can-drop", "drop-confirm", "drop-resource", "drop-text", "drop-icon", "can-edit", "edit-text", "edit-icon", "edit-link", "edit-mode-enabled"])) : y("", !0),
                    pe.value.length > 0 ? (u(!0), c(T, { key: 1 }, j(m.value, (Z, q) => (u(), k(Zt, {
                      modelValue: m.value[q],
                      "onUpdate:modelValue": (de) => m.value[q] = de,
                      key: $e(Z, q, !0),
                      i: q,
                      "hidden-columns": pe.value,
                      "hidden-columns-col-span": Xe.value,
                      "is-draggable": Le(Z),
                      sortable: e.sortable,
                      "visible-columns": se.value,
                      "empty-columns": ce.value,
                      "hidden-is-visible": De(q),
                      onClick: Be,
                      onShow: we
                    }, Ne({ _: 2 }, [
                      j(Ce.value, (de) => ({
                        name: de,
                        fn: H((ye) => [
                          P(e.$slots, de, ke({
                            [e.slotItemVar || ""]: ye.item,
                            value: ye.value,
                            column: ye.column
                          }))
                        ])
                      }))
                    ]), 1032, ["modelValue", "onUpdate:modelValue", "i", "hidden-columns", "hidden-columns-col-span", "is-draggable", "sortable", "visible-columns", "empty-columns", "hidden-is-visible"]))), 128)) : y("", !0)
                  ], 64))), 256))
                ], 8, pl)
              ]))
            ], 8, ul), [
              [ne, !r.value && m.value.length > 0]
            ]),
            !r.value && m.value.length === 0 ? (u(), c("div", vl, [
              g(i).empty ? P(e.$slots, "empty", { key: 0 }) : vt.value ? (u(), k(Q(ht.value), {
                key: 1,
                message: e.noResultsText
              }, null, 8, ["message"])) : e.noResultsText ? (u(), c(T, { key: 2 }, [
                le(J(e.noResultsText), 1)
              ], 64)) : y("", !0)
            ])) : y("", !0),
            re.value || g(i).bottomButtons ? (u(), c("div", hl, [
              re.value && m.value.length >= e.requiredItemsForBottomCreate ? (u(), k(Pe, {
                key: 0,
                disabled: !Fe.value || e.createDisabled,
                text: e.createText,
                icon: e.createIcon,
                to: e.createRoute,
                onClick: Me
              }, null, 8, ["disabled", "text", "icon", "to"])) : y("", !0),
              P(e.$slots, "bottom-buttons")
            ])) : y("", !0),
            e.resource.length > 0 ? (u(), k(O, {
              key: 5,
              ref_key: "paginator",
              ref: I,
              modelValue: _.value,
              "onUpdate:modelValue": p[1] || (p[1] = (w) => _.value = w),
              resource: e.resource,
              filters: e.filters,
              onResults: qe,
              onLoading: Je,
              onPerms: je,
              onCustom: ze,
              onResponse: Ge
            }, null, 8, ["modelValue", "resource", "filters"])) : y("", !0)
          ]),
          _: 3
        }, 8, ["class"]))
      ], 8, el);
    };
  }
}), Gl = {
  install: (l) => {
    l.component("lkt-loader") === void 0 && l.use(Vt), l.component("lkt-button") === void 0 && l.use(Et), l.component("lkt-paginator") === void 0 && l.use(Dt), l.component("lkt-field-text") === void 0 && l.use(It), l.component("lkt-field-textarea") === void 0 && l.use(Bt), l.component("lkt-field-select") === void 0 && l.use(wt), l.component("lkt-field-switch") === void 0 && l.use(Tt), l.component("lkt-field-file") === void 0 && l.use(Lt), l.component("lkt-table") === void 0 && l.component("lkt-table", yl);
  }
}, Jl = (l) => ($.navButtonSlot = l, !0), Ql = (l) => ($.dropButtonSlot = l, !0), Xl = (l) => ($.createButtonSlot = l, !0), Yl = (l) => {
  $.defaultEmptySlot = l;
};
export {
  K as LktTableColumn,
  Fl as createActionColumn,
  Ol as createCheckColumn,
  Al as createColumn,
  Pl as createEmailColumn,
  jl as createFileColumn,
  Kl as createFloatColumn,
  zl as createHiddenColumn,
  Nl as createIntegerColumn,
  $l as createLinkColumn,
  ql as createSelectColumn,
  Wl as createSwitchColumn,
  Hl as createTelColumn,
  Ul as createTextColumn,
  Gl as default,
  Xl as setTableCreateButtonSlot,
  Ql as setTableDropButtonSlot,
  Yl as setTableEmptySlot,
  Jl as setTableNavButtonSlot
};
