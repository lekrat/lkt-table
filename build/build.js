import { reactive as F, defineComponent as Q, ref as S, watch as $, nextTick as be, computed as p, resolveComponent as R, unref as b, openBlock as u, createBlock as k, withCtx as H, createTextVNode as te, toDisplayString as G, createElementBlock as c, Fragment as I, withModifiers as Ke, resolveDynamicComponent as J, createCommentVNode as h, normalizeClass as _, createElementVNode as T, createVNode as x, renderList as j, renderSlot as P, withDirectives as ae, vShow as ne, useSlots as kt, onMounted as yt, createSlots as Ne, normalizeProps as ye } from "vue";
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
var C = /* @__PURE__ */ ((l) => (l.Text = "text", l.Number = "number", l.Check = "check", l.Switch = "switch", l.Select = "select", l.Email = "email", l.Tel = "tel", l.File = "file", l.Link = "link", l.Action = "action", l.Integer = "int", l.Float = "float", l))(C || {});
class U {
  constructor(t = "", r = "") {
    if (this.sortable = !0, this.hidden = !1, this.formatter = void 0, this.checkEmpty = void 0, this.colspan = void 0, this.preferSlot = !0, this.resource = "", this.resourceData = {}, this.isMultiple = !1, this.isLoading = !1, this.resourceLoaded = !1, this.valueSlot = "", this.editSlot = "", this.multipleDisplay = "", this.multipleDisplayEdition = "", typeof t == "object")
      for (let a in t)
        this[a] = t[a];
    else
      this.key = t, this.label = r;
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
    return this.type = C.Link, this.link = t, this;
  }
  defineAsText() {
    return this.type = C.Text, this;
  }
  defineAsEmail() {
    return this.type = C.Email, this;
  }
  defineAsTel() {
    return this.type = C.Tel, this;
  }
  defineAsInteger() {
    return this.type = C.Integer, this;
  }
  defineAsFloat() {
    return this.type = C.Float, this;
  }
  defineAsCheck() {
    return this.type = C.Check, this;
  }
  defineAsSwitch() {
    return this.type = C.Switch, this;
  }
  defineAsFile() {
    return this.type = C.File, this;
  }
  defineAsAction(t) {
    return this.type = C.Action, this.action = t, this;
  }
  defineAsSelect(t) {
    return this.type = C.Select, this.options = t, this;
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
const Al = (l, t, r = !0) => F(new U(l, t).setIsSortable(r)), $l = (l, t, r, a = !0) => F(new U(l, t).setIsSortable(a).defineAsLink(r)), Fl = (l, t, r, a = !0) => F(new U(l, t).setIsSortable(a).defineAsAction(r)), Ul = (l, t, r = !0) => F(new U(l, t).setIsSortable(r).defineAsText()), Nl = (l, t, r = !0) => F(new U(l, t).setIsSortable(r).defineAsInteger()), Pl = (l, t, r = !0) => F(new U(l, t).setIsSortable(r).defineAsFloat()), Hl = (l, t, r = !0) => F(new U(l, t).setIsSortable(r).defineAsEmail()), Kl = (l, t, r = !0) => F(new U(l, t).setIsSortable(r).defineAsTel()), Ol = (l, t, r = !0) => F(new U(l, t).setIsSortable(r).defineAsCheck()), Wl = (l, t, r = !0) => F(new U(l, t).setIsSortable(r).defineAsSwitch()), ql = (l, t, r, a = !0) => F(new U(l, t).setIsSortable(a).defineAsSelect(r)), jl = (l, t, r = !0) => F(new U(l, t).setIsSortable(r).defineAsFile()), zl = (l, t, r = !0) => F(new U(l, t).setIsSortable(r).setIsHidden(!0)), Pe = (l, t, r, a) => {
  if (!r) return 0;
  let s = l[r.key], o = t[r.key];
  if (a === "asc") {
    if (s > o) return 1;
    if (o > s) return -1;
  } else {
    if (s > o) return -1;
    if (o > s) return 1;
  }
  return 0;
}, ee = (l, t, r, a = []) => {
  if (l.extractTitleFromColumn) {
    let s = a.find((o) => o.key === l.extractTitleFromColumn);
    if (s)
      return ee(s, t, r, a);
  }
  if (l.formatter && typeof l.formatter == "function") {
    let s = l.formatter(t[l.key], t, l, r);
    return s.startsWith("__:") ? ue(s.substring(3)) : s;
  }
  return t[l.key];
}, Mt = (l, t, r) => {
  if (!l.colspan) return -1;
  let a = t;
  return r.forEach((s) => {
    let o = ge(l, s);
    o > 0 && o < a && (a = o);
  }), a;
}, ge = (l, t) => l.colspan === !1 ? !1 : typeof l.colspan == "function" ? l.colspan(t) : l.colspan, Rt = (l, t) => typeof l.preferSlot > "u" ? !0 : l.preferSlot === !1 ? !1 : typeof l.preferSlot == "function" ? l.preferSlot(t) : !0, At = (l, t, r) => {
  if (typeof l != "object" || !l.key || t.indexOf(l.key) > -1) return !1;
  let a = ge(l, r);
  return typeof l.colspan > "u" ? !0 : (typeof l.colspan < "u" && (typeof l.colspan == "function" ? a = parseInt(l.colspan(r)) : a = parseInt(l.colspan)), a > 0);
}, $t = (l = []) => {
  if (l.length > 0) {
    for (let t = 0; t < l.length; ++t)
      if (l[t].sortable) return l[t].key;
  }
  return "";
}, Ft = (l, t) => {
  if (l.length > 0) {
    for (let r = 0; r < l.length; ++r)
      if (l[r].key === t) return l[r];
  }
  return null;
}, We = /* @__PURE__ */ Q({
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
    const r = t, a = l, s = S(a.modelValue), o = S(s.value[a.column.key]), v = S(null), E = S(a.column.showLoading());
    $(o, (n) => {
      const i = JSON.parse(JSON.stringify(s.value));
      i[a.column.key] = n, r("update:modelValue", i);
    }), $(() => a.modelValue, (n) => {
      s.value = n, o.value = s.value[a.column.key];
    }), $(() => a.column, () => {
      a.column.resourceLoaded && be(() => E.value = !1);
    }, { deep: !0 }), a.column.hasToLoadResource() && a.column.loadResource();
    const y = p(() => ({ ...a.column.slotData, item: s.value }));
    return (n, i) => {
      const z = R("lkt-anchor"), W = R("lkt-field-text"), N = R("lkt-field-switch"), Y = R("lkt-field-file"), d = R("lkt-loader"), V = R("lkt-field-select");
      return n.column.type === b(C).Link ? (u(), k(z, {
        key: 0,
        to: n.column.getHref(s.value)
      }, {
        default: H(() => [
          te(G(b(ee)(n.column, s.value, n.i)), 1)
        ]),
        _: 1
      }, 8, ["to"])) : n.column.type === b(C).Action ? (u(), c("a", {
        key: 1,
        href: "#",
        onClick: i[0] || (i[0] = (m) => n.column.doAction(s.value))
      }, G(b(ee)(n.column, s.value, n.i)), 1)) : n.column.type === b(C).Text ? (u(), k(W, {
        key: 2,
        "read-mode": !n.column.editable || !n.editModeEnabled,
        ref: (m) => v.value = m,
        "edit-slot": n.column.editSlot,
        "value-slot": n.column.valueSlot,
        "slot-data": y.value,
        modelValue: o.value,
        "onUpdate:modelValue": i[1] || (i[1] = (m) => o.value = m)
      }, null, 8, ["read-mode", "edit-slot", "value-slot", "slot-data", "modelValue"])) : n.column.type === b(C).Email ? (u(), k(W, {
        key: 3,
        "read-mode": !n.column.editable || !n.editModeEnabled,
        ref: (m) => v.value = m,
        "edit-slot": n.column.editSlot,
        "value-slot": n.column.valueSlot,
        "slot-data": y.value,
        "is-email": "",
        modelValue: o.value,
        "onUpdate:modelValue": i[2] || (i[2] = (m) => o.value = m)
      }, null, 8, ["read-mode", "edit-slot", "value-slot", "slot-data", "modelValue"])) : n.column.type === b(C).Tel ? (u(), k(W, {
        key: 4,
        "read-mode": !n.column.editable || !n.editModeEnabled,
        ref: (m) => v.value = m,
        "edit-slot": n.column.editSlot,
        "value-slot": n.column.valueSlot,
        "slot-data": y.value,
        "is-tel": "",
        modelValue: o.value,
        "onUpdate:modelValue": i[3] || (i[3] = (m) => o.value = m)
      }, null, 8, ["read-mode", "edit-slot", "value-slot", "slot-data", "modelValue"])) : n.column.type === b(C).Integer ? (u(), k(W, {
        key: 5,
        "read-mode": !n.column.editable || !n.editModeEnabled,
        ref: (m) => v.value = m,
        "edit-slot": n.column.editSlot,
        "value-slot": n.column.valueSlot,
        "slot-data": y.value,
        "is-number": "",
        modelValue: o.value,
        "onUpdate:modelValue": i[4] || (i[4] = (m) => o.value = m)
      }, null, 8, ["read-mode", "edit-slot", "value-slot", "slot-data", "modelValue"])) : n.column.type === b(C).Float ? (u(), k(W, {
        key: 6,
        "read-mode": !n.column.editable || !n.editModeEnabled,
        ref: (m) => v.value = m,
        "edit-slot": n.column.editSlot,
        "value-slot": n.column.valueSlot,
        "slot-data": y.value,
        "is-number": "",
        modelValue: o.value,
        "onUpdate:modelValue": i[5] || (i[5] = (m) => o.value = m)
      }, null, 8, ["read-mode", "edit-slot", "value-slot", "slot-data", "modelValue"])) : n.column.type === b(C).Check ? (u(), k(N, {
        key: 7,
        "is-check": "",
        "read-mode": !n.column.editable || !n.editModeEnabled,
        ref: (m) => v.value = m,
        modelValue: o.value,
        "onUpdate:modelValue": i[6] || (i[6] = (m) => o.value = m)
      }, null, 8, ["read-mode", "modelValue"])) : n.column.type === b(C).Switch ? (u(), k(N, {
        key: 8,
        "read-mode": !n.column.editable || !n.editModeEnabled,
        ref: (m) => v.value = m,
        modelValue: o.value,
        "onUpdate:modelValue": i[7] || (i[7] = (m) => o.value = m)
      }, null, 8, ["read-mode", "modelValue"])) : n.column.type === b(C).File ? (u(), k(Y, {
        key: 9,
        "read-mode": !n.column.editable || !n.editModeEnabled,
        ref: (m) => v.value = m,
        modelValue: o.value,
        "onUpdate:modelValue": i[8] || (i[8] = (m) => o.value = m)
      }, null, 8, ["read-mode", "modelValue"])) : n.column.type === b(C).Select ? (u(), c(I, { key: 10 }, [
        E.value ? (u(), k(d, { key: 0 })) : (u(), k(V, {
          key: 1,
          "read-mode": !n.column.editable || !n.editModeEnabled,
          ref: (m) => v.value = m,
          modelValue: o.value,
          "onUpdate:modelValue": i[9] || (i[9] = (m) => o.value = m),
          "slot-data": y.value,
          resource: n.column.resource,
          "use-resource-slot": n.column.resourceSlot ? n.column.resourceSlot : n.column.resource,
          "resource-data": n.column.resourceData,
          options: n.column.options,
          multiple: n.column.isMultiple,
          tags: n.column.tags,
          "multiple-display": n.column.multipleDisplay,
          "multiple-display-edition": n.column.multipleDisplayEdition
        }, null, 8, ["read-mode", "modelValue", "slot-data", "resource", "use-resource-slot", "resource-data", "options", "multiple", "tags", "multiple-display", "multiple-display-edition"]))
      ], 64)) : (u(), c(I, { key: 11 }, [
        te(G(b(ee)(n.column, s.value, n.i, n.columns)), 1)
      ], 64));
    };
  }
}), A = {
  navButtonSlot: "",
  dropButtonSlot: "",
  editButtonSlot: "",
  createButtonSlot: "",
  defaultEmptySlot: void 0
}, Ut = /* @__PURE__ */ Q({
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
    const r = t, a = p(() => A.dropButtonSlot !== ""), s = p(() => A.dropButtonSlot);
    return (o, v) => {
      const E = R("lkt-button");
      return u(), k(E, {
        palette: "table-delete",
        icon: a.value ? "" : o.icon,
        text: a.value ? "" : o.text,
        resource: o.resource,
        "resource-data": o.resourceData,
        "confirm-modal": o.confirm,
        disabled: o.disabled,
        onClick: v[0] || (v[0] = Ke((y) => r("click"), ["prevent", "stop"]))
      }, {
        default: H(() => [
          a.value ? (u(), k(J(s.value), { key: 0 })) : h("", !0)
        ]),
        _: 1
      }, 8, ["icon", "text", "resource", "resource-data", "confirm-modal", "disabled"]);
    };
  }
}), Nt = /* @__PURE__ */ Q({
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
    const r = t, a = p(() => A.editButtonSlot !== ""), s = p(() => A.editButtonSlot);
    return (o, v) => {
      const E = R("lkt-button");
      return u(), k(E, {
        palette: "table-delete",
        icon: a.value ? "" : o.icon,
        text: a.value ? "" : o.text,
        "on-click-to": o.link,
        "is-anchor": o.link !== "",
        resource: o.resource,
        "resource-data": o.resourceData,
        "confirm-modal": o.confirm,
        disabled: o.disabled,
        onClick: v[0] || (v[0] = Ke((y) => r("click"), ["prevent", "stop"]))
      }, {
        default: H(() => [
          a.value ? (u(), k(J(s.value), { key: 0 })) : h("", !0)
        ]),
        _: 1
      }, 8, ["icon", "text", "on-click-to", "is-anchor", "resource", "resource-data", "confirm-modal", "disabled"]);
    };
  }
}), Pt = ["data-i", "data-draggable"], Ht = {
  key: 1,
  "data-role": "invalid-drag-indicator"
}, Kt = {
  key: 2,
  class: "lkt-table-nav-cell"
}, Ot = { class: "lkt-table-nav-container" }, Wt = ["data-column", "colspan", "title", "onClick"], qt = {
  key: 4,
  class: "lkt-table-col-drop"
}, jt = {
  key: 5,
  class: "lkt-table-col-edit"
}, zt = /* @__PURE__ */ Q({
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
    const r = t, a = l, s = S(a.modelValue), o = S(a.editLink);
    for (let d in s.value) o.value = Oe(o.value, ":" + d, s.value[d]);
    const v = (d) => r("click", d), E = (d, V) => {
      r("show", d, V);
    }, y = p(() => {
      let d = [];
      return a.sortable && a.isDraggable && d.push("handle"), d.join(" ");
    }), n = p(() => A.navButtonSlot !== ""), i = p(() => A.navButtonSlot), z = () => {
      r("item-up", a.i);
    }, W = () => {
      r("item-down", a.i);
    }, N = () => {
      r("item-drop", a.i);
    }, Y = () => {
    };
    return $(() => a.modelValue, (d) => s.value = d), $(s, (d) => {
      r("update:modelValue", d, a.i);
    }, { deep: !0 }), (d, V) => {
      const m = R("lkt-button");
      return u(), c("tr", {
        "data-i": d.i,
        "data-draggable": d.isDraggable
      }, [
        d.sortable && d.isDraggable && d.editModeEnabled ? (u(), c("td", {
          key: 0,
          "data-role": "drag-indicator",
          class: _(y.value)
        }, null, 2)) : d.sortable && d.editModeEnabled ? (u(), c("td", Ht)) : h("", !0),
        d.addNavigation && d.editModeEnabled ? (u(), c("td", Kt, [
          T("div", Ot, [
            x(m, {
              palette: "table-nav",
              disabled: d.i === 0,
              onClick: z
            }, {
              default: H(() => [
                n.value ? (u(), k(J(i.value), {
                  key: 0,
                  direction: "up"
                })) : (u(), c(I, { key: 1 }, [
                  V[2] || (V[2] = T("i", { class: "" }, null, -1)),
                  V[3] || (V[3] = te(" UP "))
                ], 64))
              ]),
              _: 1
            }, 8, ["disabled"]),
            x(m, {
              palette: "table-nav",
              disabled: d.latestRow,
              onClick: W
            }, {
              default: H(() => [
                n.value ? (u(), k(J(i.value), {
                  key: 0,
                  direction: "down"
                })) : (u(), c(I, { key: 1 }, [
                  V[4] || (V[4] = T("i", { class: "" }, null, -1)),
                  V[5] || (V[5] = te(" DOWN "))
                ], 64))
              ]),
              _: 1
            }, 8, ["disabled"])
          ])
        ])) : h("", !0),
        d.displayHiddenColumnsIndicator ? (u(), c("td", {
          key: 3,
          onClick: V[0] || (V[0] = (B) => E(B, d.i)),
          "data-role": "show-more",
          class: _(d.hiddenIsVisible ? "state-open" : "")
        }, null, 2)) : h("", !0),
        (u(!0), c(I, null, j(d.visibleColumns, (B) => (u(), c(I, null, [
          b(At)(B, d.emptyColumns, s.value) ? (u(), c("td", {
            key: "td" + d.i,
            "data-column": B.key,
            colspan: b(ge)(B, s.value),
            title: b(ee)(B, s.value, d.i, d.visibleColumns),
            onClick: (le) => v(le, s.value)
          }, [
            d.$slots[B.key] && b(Rt)(B, s.value) ? P(d.$slots, B.key, {
              key: 0,
              value: s.value[B.key],
              item: s.value,
              column: B,
              i: d.i
            }) : s.value ? (u(), k(We, {
              key: 1,
              modelValue: s.value,
              "onUpdate:modelValue": V[1] || (V[1] = (le) => s.value = le),
              column: B,
              columns: d.visibleColumns,
              "edit-mode-enabled": d.editModeEnabled,
              i: d.i
            }, null, 8, ["modelValue", "column", "columns", "edit-mode-enabled", "i"])) : h("", !0)
          ], 8, Wt)) : h("", !0)
        ], 64))), 256)),
        d.canDrop && d.editModeEnabled ? (u(), c("td", qt, [
          x(Ut, {
            resource: d.dropResource,
            "resource-data": s.value,
            confirm: d.dropConfirm,
            text: d.dropText,
            icon: d.dropIcon,
            onClick: N
          }, null, 8, ["resource", "resource-data", "confirm", "text", "icon"])
        ])) : h("", !0),
        d.canEdit && d.editModeEnabled ? (u(), c("td", jt, [
          x(Nt, {
            "resource-data": s.value,
            text: d.editText,
            icon: d.editIcon,
            link: o.value,
            onClick: Y
          }, null, 8, ["resource-data", "text", "icon", "link"])
        ])) : h("", !0)
      ], 8, Pt);
    };
  }
}), Gt = { "data-role": "hidden-row" }, Jt = ["colspan"], Qt = ["data-column"], Xt = ["data-i"], Yt = ["data-column", "title", "onClick"], Zt = /* @__PURE__ */ Q({
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
    const r = t, a = l, s = S(a.modelValue), o = (v) => r("click", v);
    return $(() => a.modelValue, (v) => s.value = v), $(s, () => r("update:modelValue", s.value)), (v, E) => ae((u(), c("tr", Gt, [
      T("td", { colspan: v.hiddenColumnsColSpan }, [
        T("table", null, [
          T("tr", null, [
            (u(!0), c(I, null, j(v.hiddenColumns, (y) => (u(), c("th", {
              "data-column": y.key
            }, [
              T("div", null, G(y.label), 1)
            ], 8, Qt))), 256))
          ]),
          T("tr", { "data-i": v.i }, [
            (u(!0), c(I, null, j(v.hiddenColumns, (y, n) => (u(), c("td", {
              "data-column": y.key,
              title: b(ee)(y, s.value, n, v.hiddenColumns),
              onClick: (i) => o(i, s.value)
            }, [
              v.$slots[y.key] ? P(v.$slots, y.key, {
                key: 0,
                value: s.value[y.key],
                item: s.value,
                column: y,
                i: n
              }) : (u(), k(We, {
                key: 1,
                column: y,
                columns: v.hiddenColumns,
                modelValue: s.value,
                "onUpdate:modelValue": E[0] || (E[0] = (i) => s.value = i),
                i: n
              }, null, 8, ["column", "columns", "modelValue", "i"]))
            ], 8, Yt))), 256))
          ], 8, Xt)
        ])
      ], 8, Jt)
    ], 512)), [
      [ne, v.hiddenIsVisible]
    ]);
  }
}), He = /* @__PURE__ */ Q({
  __name: "CreateButton",
  props: {
    disabled: { type: Boolean, default: !1 },
    text: { default: "" },
    icon: { default: "" },
    to: { default: "" }
  },
  emits: ["click"],
  setup(l, { emit: t }) {
    const r = t, a = p(() => A.createButtonSlot !== ""), s = p(() => A.createButtonSlot);
    return (o, v) => {
      const E = R("lkt-button");
      return u(), k(E, {
        palette: "table-create",
        disabled: o.disabled,
        icon: a.value ? "" : o.icon,
        text: a.value ? "" : o.text,
        "on-click-to": o.to,
        onClick: v[0] || (v[0] = (y) => r("click"))
      }, {
        default: H(() => [
          a.value ? (u(), k(J(s.value), { key: 0 })) : h("", !0)
        ]),
        _: 1
      }, 8, ["disabled", "icon", "text", "on-click-to"]);
    };
  }
}), _t = ["data-column", "data-sortable", "data-sort", "colspan", "title"], xt = /* @__PURE__ */ Q({
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
    const r = t, a = l, s = p(() => Mt(a.column, a.amountOfColumns, a.items)), o = p(() => a.column.sortable === !0), v = p(() => o.value && a.sortBy === a.column.key ? a.sortDirection : ""), E = p(() => a.column.label.startsWith("__:") ? ue(a.column.label.substring(3)) : a.column.label), y = () => r("click", a.column);
    return (n, i) => (u(), c("th", {
      "data-column": n.column.key,
      "data-sortable": o.value,
      "data-sort": v.value,
      colspan: s.value,
      title: E.value,
      onClick: y
    }, [
      T("div", null, G(E.value), 1)
    ], 8, _t));
  }
}), el = ["id"], tl = { class: "lkt-table-page-buttons" }, ll = { key: 1 }, ol = { class: "switch-edition-mode" }, al = {
  key: 0,
  class: "lkt-table-page-buttons"
}, nl = {
  key: 1,
  class: "lkt-table-page-filters"
}, ul = ["data-sortable"], il = { key: 0 }, rl = {
  key: 0,
  "data-role": "drag-indicator"
}, sl = { key: 1 }, dl = { key: 2 }, ml = {
  key: 3,
  class: "lkt-table-col-drop"
}, cl = {
  key: 4,
  class: "lkt-table-col-edit"
}, fl = ["id"], pl = {
  key: 0,
  class: "lkt-table-item"
}, vl = {
  key: 3,
  class: "lkt-table-empty"
}, hl = {
  key: 4,
  class: "lkt-table-page-buttons lkt-table-page-buttons-bottom"
}, kl = /* @__PURE__ */ Q({
  __name: "LktTable",
  props: {
    modelValue: { default: () => [] },
    columns: { default: () => [] },
    sorter: { type: Function, default: Pe },
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
  setup(l, { expose: t, emit: r }) {
    const a = r, s = kt(), o = l, v = {}, E = S(typeof o.sorter == "function" ? o.sorter : Pe), y = S($t(o.columns)), n = S("asc"), i = S(o.modelValue), z = S(v), W = S(null), N = S(o.columns), Y = S(o.page), d = S(!1), V = S(!1), m = S(o.perms), B = S(null), le = S({}), Z = S(new St({ items: i.value }, o.dataStateConfig)), L = S(o.editMode), oe = S(0), qe = (e) => {
      Array.isArray(e) && (i.value = e), d.value = !1, V.value = !0, Z.value.store({ items: i.value }).turnStoredIntoOriginal();
    }, je = (e) => {
      m.value = e;
    }, ze = (e) => {
    }, Ge = (e) => {
      a("read-response", e);
    }, Je = () => be(() => d.value = !0), Qe = () => {
      B.value.doRefresh();
    }, ie = gt(12), ce = p(() => {
      if (!o.hideEmptyColumns) return [];
      let e = [];
      return N.value.forEach((f) => {
        let g = f.key, w = !1;
        i.value.forEach((M) => {
          if (typeof M.checkEmpty == "function")
            return M.checkEmpty(M);
          M[g] && (w = !0);
        }), w || e.push(g);
      }), e;
    }), re = p(() => N.value.filter((e) => !e.hidden)), fe = p(() => N.value.filter((e) => e.hidden)), Xe = p(() => {
      let e = re.value.length + 1;
      return o.sortable && ++e, e;
    }), Ye = p(() => N.value.filter((e) => e.isForRowKey)), Se = p(() => fe.value.length > 0 && !o.sortable), Ze = p(() => N.value.map((e) => e.key)), Ce = p(() => {
      let e = [];
      for (let f in s) Ze.value.indexOf(f) !== -1 && e.push(f);
      return e;
    }), Ve = p(() => o.hiddenSave || d.value || !o.saveResource ? !1 : L.value && Z.value.changed() ? !0 : L.value), _e = p(() => se.value && i.value.length >= o.requiredItemsForTopCreate || o.switchEditionEnabled ? !0 : Ve.value || L.value && o.canCreate), xe = p(() => o.saveDisabled || typeof o.saveValidator == "function" && !o.saveValidator(i.value) ? !1 : Z.value.changed()), et = p(() => i.value.length), tt = p(() => ({
      items: i.value,
      ...o.saveResourceData
    })), lt = p(() => o.titleTag === "" ? "h2" : o.titleTag), ot = p(() => o.wrapContentTag === "" ? "div" : o.wrapContentTag), pe = p(() => o.title.startsWith("__:") ? ue(o.title.substring(3)) : o.title), at = p(() => o.saveText.startsWith("__:") ? ue(o.saveText.substring(3)) : o.saveText), nt = p(() => o.editModeText.startsWith("__:") ? ue(o.editModeText.substring(3)) : o.editModeText), Ee = p(() => m.value.includes("create")), ut = p(() => m.value.includes("read")), ve = p(() => m.value.includes("update")), he = p(() => m.value.includes("drop")), it = (e) => {
      let f = e.target;
      if (typeof f.dataset.column > "u")
        do
          f = f.parentNode;
        while (typeof f.dataset.column > "u" && f.tagName !== "TABLE" && f.tagName !== "body");
      if (f.tagName === "TD" && (f = f.parentNode, f = f.dataset.i, typeof f < "u"))
        return i.value[f];
    }, De = (e) => z.value["tr_" + e] === !0, Ie = (e) => {
      e && e.sortable && (i.value = i.value.sort((f, g) => E.value(f, g, e, n.value)), n.value = n.value === "asc" ? "desc" : "asc", y.value = e.key, a("sort", [y.value, n.value]));
    }, Be = (e) => {
      a("click", e);
    }, we = (e, f) => {
      let g = "tr_" + f;
      z.value[g] = typeof z.value[g] > "u" ? !0 : !z.value[g];
    }, Te = () => {
      N.value.forEach((e) => {
        if (e.type === "select" && e.autoLoadSelectOptions) {
          let f = e.autoLoadSelectOptionsKey !== "" ? e.autoLoadSelectOptionsKey : e.key, g = [];
          i.value.forEach((M) => {
            Array.isArray(M[f]) && M[f].forEach((K) => g.push(K));
          });
          let w = {};
          g = g.filter(function(M) {
            return w[M.value] ? !1 : (w[M.value] = !0, !0);
          }), e.setOptions(g);
        }
      });
    }, rt = (e) => typeof o.checkValidDrag == "function" ? o.checkValidDrag(e) : !0, Le = (e) => typeof o.draggableChecker == "function" ? o.draggableChecker(e) : !0, Me = () => {
      if (o.canCreateWithoutEdition)
        a("click-create");
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
    }, st = () => {
      d.value = !0;
    }, dt = () => {
      d.value = !1;
    }, mt = (e, f) => {
      if (a("before-save"), o.saveResource && (d.value = !1, !f.success)) {
        a("error", f.httpStatus);
        return;
      }
      Z.value.turnStoredIntoOriginal(), a("save", f);
    }, Re = (e, f, g) => {
      if (g >= e.length) {
        let w = g - e.length + 1;
        for (; w--; ) e.push(void 0);
      }
      return e.splice(g, 0, e.splice(f, 1)[0]), e;
    }, ct = (e) => {
      Re(i.value, e, e - 1), oe.value = me();
    }, ft = (e) => {
      Re(i.value, e, e + 1), oe.value = me();
    }, Ae = (e) => {
      i.value.splice(e, 1), oe.value = me();
    }, pt = () => {
      let e = document.getElementById("lkt-table-body-" + ie);
      le.value = new Ct(e, {
        direction: "vertical",
        handle: ".handle",
        animation: 150,
        onEnd: function(f) {
          let g = f.oldIndex, w = f.newIndex;
          i.value.splice(w, 0, i.value.splice(g, 1)[0]), oe.value = me();
        },
        onMove: function(f, g) {
          return rt(f);
        }
      });
    }, $e = (e, f, g = !1) => {
      let w = [oe.value, ie, "row", f];
      return g && w.push("hidden"), Ye.value.forEach((M) => {
        let K = String(e[M.key]).toLowerCase();
        K.length > 50 && (K = K.substring(0, 50)), K = Oe(K, " ", "-"), w.push(K);
      }), w.join("-");
    }, Fe = p(() => typeof o.createEnabledValidator == "function" ? o.createEnabledValidator({ items: i.value }) : !0), se = p(() => Ee.value ? o.canCreateWithoutEdition || o.canCreate && L.value : !1), Ue = (e) => typeof o.itemDisplayChecker == "function" ? o.itemDisplayChecker(e) : !0;
    yt(() => {
      Te(), o.initialSorting && Ie(Ft(o.columns, y.value)), Z.value.store({ items: i.value }).turnStoredIntoOriginal(), o.sortable && be(() => {
        pt();
      });
    }), $(() => o.perms, (e) => m.value = e), $(m, (e) => a("update:perms", e)), $(() => o.editMode, (e) => L.value = e), $(() => o.columns, (e) => N.value = e), $(() => o.modelValue, (e) => i.value = e), $(i, (e) => {
      Te(), Z.value.increment({ items: e }), a("update:modelValue", e);
    }, { deep: !0 }), t({
      getItemByEvent: it,
      doRefresh: Qe
    });
    const vt = p(() => typeof A.defaultEmptySlot < "u"), ht = p(() => A.defaultEmptySlot);
    return (e, f) => {
      const g = R("lkt-button"), w = R("lkt-field-switch"), M = R("lkt-loader"), K = R("lkt-paginator");
      return u(), c("section", {
        class: "lkt-table-page",
        id: "lkt-table-page-" + b(ie)
      }, [
        pe.value || b(s).title ? (u(), c("header", {
          key: 0,
          class: _(e.headerClass)
        }, [
          pe.value ? (u(), k(J(lt.value), { key: 0 }, {
            default: H(() => [
              e.titleIcon ? (u(), c("i", {
                key: 0,
                class: _(e.titleIcon)
              }, null, 2)) : h("", !0),
              te(" " + G(pe.value), 1)
            ]),
            _: 1
          })) : h("", !0),
          b(s).title ? P(e.$slots, "title", { key: 1 }) : h("", !0)
        ], 2)) : h("", !0),
        (u(), k(J(ot.value), {
          class: _(["lkt-table-page-content-wrapper", e.wrapContentClass])
        }, {
          default: H(() => [
            ae(T("div", tl, [
              ae(x(g, {
                ref: "saveButton",
                palette: "success",
                disabled: !xe.value,
                "confirm-modal": e.saveConfirm,
                "confirm-data": e.confirmData,
                resource: e.saveResource,
                "resource-data": tt.value,
                onLoading: st,
                onLoaded: dt,
                onClick: mt
              }, {
                default: H(() => [
                  b(s)["button-save"] ? P(e.$slots, "button-save", {
                    key: 0,
                    items: i.value,
                    editMode: e.editMode,
                    canUpdate: !e.saveDisabled
                  }) : (u(), c("span", ll, G(at.value), 1))
                ]),
                _: 3
              }, 8, ["disabled", "confirm-modal", "confirm-data", "resource", "resource-data"]), [
                [ne, Ve.value]
              ]),
              se.value && i.value.length >= e.requiredItemsForTopCreate ? (u(), k(He, {
                key: 0,
                disabled: !Fe.value || e.createDisabled,
                text: e.createText,
                icon: e.createIcon,
                to: e.createRoute,
                onClick: Me
              }, null, 8, ["disabled", "text", "icon", "to"])) : h("", !0),
              T("div", ol, [
                ae(x(w, {
                  modelValue: L.value,
                  "onUpdate:modelValue": f[0] || (f[0] = (D) => L.value = D),
                  label: nt.value
                }, null, 8, ["modelValue", "label"]), [
                  [ne, e.switchEditionEnabled]
                ])
              ])
            ], 512), [
              [ne, _e.value]
            ]),
            b(s).buttons ? (u(), c("div", al, [
              P(e.$slots, "buttons")
            ])) : h("", !0),
            V.value && b(s).filters ? (u(), c("div", nl, [
              P(e.$slots, "filters", {
                items: i.value,
                isLoading: d.value
              })
            ])) : h("", !0),
            d.value ? (u(), k(M, { key: 2 })) : h("", !0),
            ae(T("div", {
              class: "lkt-table",
              "data-sortable": e.sortable
            }, [
              e.itemMode ? (u(), c("div", {
                key: 1,
                class: _(["lkt-table-items-container", e.itemsContainerClass])
              }, [
                (u(!0), c(I, null, j(i.value, (D, O) => (u(), c(I, null, [
                  Ue(D) ? (u(), c("div", pl, [
                    P(e.$slots, "item", ye({
                      [e.slotItemVar || ""]: D,
                      index: O,
                      canCreate: Ee.value,
                      canRead: ut.value,
                      canUpdate: ve.value,
                      canDrop: he.value,
                      isLoading: d.value,
                      doDrop: () => Ae(O)
                    }))
                  ])) : h("", !0)
                ], 64))), 256))
              ], 2)) : (u(), c("table", il, [
                T("thead", null, [
                  T("tr", null, [
                    e.sortable && L.value ? (u(), c("th", rl)) : h("", !0),
                    e.addNavigation && L.value ? (u(), c("th", sl)) : h("", !0),
                    Se.value ? (u(), c("th", dl)) : h("", !0),
                    (u(!0), c(I, null, j(re.value, (D) => (u(), c(I, null, [
                      ce.value.indexOf(D.key) === -1 ? (u(), k(xt, {
                        key: 0,
                        column: D,
                        "sort-by": y.value,
                        "sort-direction": n.value,
                        "amount-of-columns": e.columns.length,
                        items: i.value,
                        onClick: (O) => Ie(D)
                      }, null, 8, ["column", "sort-by", "sort-direction", "amount-of-columns", "items", "onClick"])) : h("", !0)
                    ], 64))), 256)),
                    e.canDrop && he.value && L.value ? (u(), c("th", ml)) : h("", !0),
                    e.canEditButton && ve.value && L.value ? (u(), c("th", cl)) : h("", !0)
                  ])
                ]),
                T("tbody", {
                  ref: (D) => W.value = D,
                  id: "lkt-table-body-" + b(ie)
                }, [
                  (u(!0), c(I, null, j(i.value, (D, O) => (u(), c(I, null, [
                    Ue(D) ? (u(), k(zt, {
                      modelValue: i.value[O],
                      "onUpdate:modelValue": (X) => i.value[O] = X,
                      key: $e(D, O),
                      i: O,
                      "display-hidden-columns-indicator": Se.value,
                      "is-draggable": Le(D),
                      sortable: e.sortable,
                      "visible-columns": re.value,
                      "empty-columns": ce.value,
                      "add-navigation": e.addNavigation,
                      "hidden-is-visible": De(O),
                      "latest-row": O + 1 === et.value,
                      "can-drop": e.canDrop && he.value && L.value,
                      "drop-confirm": e.dropConfirm,
                      "drop-resource": e.dropResource,
                      "drop-text": e.dropText,
                      "drop-icon": e.dropIcon,
                      "can-edit": e.canEditButton && ve.value && L.value,
                      "edit-text": e.editText,
                      "edit-icon": e.editIcon,
                      "edit-link": e.editLink,
                      "edit-mode-enabled": L.value,
                      onClick: Be,
                      onShow: we,
                      onItemUp: ct,
                      onItemDown: ft,
                      onItemDrop: Ae
                    }, Ne({ _: 2 }, [
                      j(Ce.value, (X) => ({
                        name: X,
                        fn: H((q) => [
                          P(e.$slots, X, ye({
                            [e.slotItemVar || ""]: q.item,
                            value: q.value,
                            column: q.column
                          }))
                        ])
                      }))
                    ]), 1032, ["modelValue", "onUpdate:modelValue", "i", "display-hidden-columns-indicator", "is-draggable", "sortable", "visible-columns", "empty-columns", "add-navigation", "hidden-is-visible", "latest-row", "can-drop", "drop-confirm", "drop-resource", "drop-text", "drop-icon", "can-edit", "edit-text", "edit-icon", "edit-link", "edit-mode-enabled"])) : h("", !0),
                    fe.value.length > 0 ? (u(!0), c(I, { key: 1 }, j(i.value, (X, q) => (u(), k(Zt, {
                      modelValue: i.value[q],
                      "onUpdate:modelValue": (de) => i.value[q] = de,
                      key: $e(X, q, !0),
                      i: q,
                      "hidden-columns": fe.value,
                      "hidden-columns-col-span": Xe.value,
                      "is-draggable": Le(X),
                      sortable: e.sortable,
                      "visible-columns": re.value,
                      "empty-columns": ce.value,
                      "hidden-is-visible": De(q),
                      onClick: Be,
                      onShow: we
                    }, Ne({ _: 2 }, [
                      j(Ce.value, (de) => ({
                        name: de,
                        fn: H((ke) => [
                          P(e.$slots, de, ye({
                            [e.slotItemVar || ""]: ke.item,
                            value: ke.value,
                            column: ke.column
                          }))
                        ])
                      }))
                    ]), 1032, ["modelValue", "onUpdate:modelValue", "i", "hidden-columns", "hidden-columns-col-span", "is-draggable", "sortable", "visible-columns", "empty-columns", "hidden-is-visible"]))), 128)) : h("", !0)
                  ], 64))), 256))
                ], 8, fl)
              ]))
            ], 8, ul), [
              [ne, !d.value && i.value.length > 0]
            ]),
            !d.value && i.value.length === 0 ? (u(), c("div", vl, [
              b(s).empty ? P(e.$slots, "empty", { key: 0 }) : vt.value ? (u(), k(J(ht.value), {
                key: 1,
                message: e.noResultsText
              }, null, 8, ["message"])) : e.noResultsText ? (u(), c(I, { key: 2 }, [
                te(G(e.noResultsText), 1)
              ], 64)) : h("", !0)
            ])) : h("", !0),
            se.value || b(s).bottomButtons ? (u(), c("div", hl, [
              se.value && i.value.length >= e.requiredItemsForBottomCreate ? (u(), k(He, {
                key: 0,
                disabled: !Fe.value || e.createDisabled,
                text: e.createText,
                icon: e.createIcon,
                to: e.createRoute,
                onClick: Me
              }, null, 8, ["disabled", "text", "icon", "to"])) : h("", !0),
              P(e.$slots, "bottom-buttons")
            ])) : h("", !0),
            e.resource.length > 0 ? (u(), k(K, {
              key: 5,
              ref_key: "paginator",
              ref: B,
              modelValue: Y.value,
              "onUpdate:modelValue": f[1] || (f[1] = (D) => Y.value = D),
              resource: e.resource,
              filters: e.filters,
              onResults: qe,
              onLoading: Je,
              onPerms: je,
              onCustom: ze,
              onResponse: Ge
            }, null, 8, ["modelValue", "resource", "filters"])) : h("", !0)
          ]),
          _: 3
        }, 8, ["class"]))
      ], 8, el);
    };
  }
}), Gl = {
  install: (l) => {
    l.component("lkt-loader") === void 0 && l.use(Vt), l.component("lkt-button") === void 0 && l.use(Et), l.component("lkt-paginator") === void 0 && l.use(Dt), l.component("lkt-field-text") === void 0 && l.use(It), l.component("lkt-field-textarea") === void 0 && l.use(Bt), l.component("lkt-field-select") === void 0 && l.use(wt), l.component("lkt-field-switch") === void 0 && l.use(Tt), l.component("lkt-field-file") === void 0 && l.use(Lt), l.component("lkt-table") === void 0 && l.component("lkt-table", kl);
  }
}, Jl = (l) => (A.navButtonSlot = l, !0), Ql = (l) => (A.dropButtonSlot = l, !0), Xl = (l) => (A.createButtonSlot = l, !0), Yl = (l) => {
  A.defaultEmptySlot = l;
};
export {
  U as LktTableColumn,
  Fl as createActionColumn,
  Ol as createCheckColumn,
  Al as createColumn,
  Hl as createEmailColumn,
  jl as createFileColumn,
  Pl as createFloatColumn,
  zl as createHiddenColumn,
  Nl as createIntegerColumn,
  $l as createLinkColumn,
  ql as createSelectColumn,
  Wl as createSwitchColumn,
  Kl as createTelColumn,
  Ul as createTextColumn,
  Gl as default,
  Xl as setTableCreateButtonSlot,
  Ql as setTableDropButtonSlot,
  Yl as setTableEmptySlot,
  Jl as setTableNavButtonSlot
};
