import { reactive as A, defineComponent as Q, ref as C, watch as $, nextTick as ke, computed as p, resolveComponent as M, openBlock as u, createBlock as b, withCtx as N, createTextVNode as te, toDisplayString as z, unref as V, createElementBlock as c, Fragment as B, withModifiers as We, resolveDynamicComponent as G, createCommentVNode as k, normalizeClass as _, createElementVNode as T, createVNode as x, renderList as q, renderSlot as O, withDirectives as ae, vShow as ne, useSlots as yt, onMounted as kt, createSlots as Oe, normalizeProps as ye } from "vue";
import { httpCall as bt } from "lkt-http-client";
import { __ as J } from "lkt-i18n";
import { createLktEvent as be } from "lkt-events";
import { replaceAll as He, generateRandomString as gt } from "lkt-string-tools";
import { DataState as Ct } from "lkt-data-state";
import St from "sortablejs";
import { time as de } from "lkt-date-tools";
import Vt from "lkt-loader";
import Et from "lkt-button";
import Dt from "lkt-paginator";
import Bt from "lkt-field-text";
import It from "lkt-field-textarea";
import Tt from "lkt-field-select";
import wt from "lkt-field-switch";
import Lt from "lkt-field-file";
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
const Al = (l, t, s = !0) => A(new F(l, t).setIsSortable(s)), Fl = (l, t, s, n = !0) => A(new F(l, t).setIsSortable(n).defineAsLink(s)), Ul = (l, t, s, n = !0) => A(new F(l, t).setIsSortable(n).defineAsAction(s)), Ol = (l, t, s = !0) => A(new F(l, t).setIsSortable(s).defineAsText()), Nl = (l, t, s = !0) => A(new F(l, t).setIsSortable(s).defineAsInteger()), Pl = (l, t, s = !0) => A(new F(l, t).setIsSortable(s).defineAsFloat()), Wl = (l, t, s = !0) => A(new F(l, t).setIsSortable(s).defineAsEmail()), Hl = (l, t, s = !0) => A(new F(l, t).setIsSortable(s).defineAsTel()), Kl = (l, t, s = !0) => A(new F(l, t).setIsSortable(s).defineAsCheck()), ql = (l, t, s = !0) => A(new F(l, t).setIsSortable(s).defineAsSwitch()), jl = (l, t, s, n = !0) => A(new F(l, t).setIsSortable(n).defineAsSelect(s)), zl = (l, t, s = !0) => A(new F(l, t).setIsSortable(s).defineAsFile()), Gl = (l, t, s = !0) => A(new F(l, t).setIsSortable(s).setIsHidden(!0)), Ne = (l, t, s, n) => {
  if (!s) return 0;
  let r = l[s.key], o = t[s.key];
  if (n === "asc") {
    if (r > o) return 1;
    if (o > r) return -1;
  } else {
    if (r > o) return -1;
    if (o > r) return 1;
  }
  return 0;
}, ee = (l, t, s, n = []) => {
  if (l.extractTitleFromColumn) {
    let r = n.find((o) => o.key === l.extractTitleFromColumn);
    if (r)
      return ee(r, t, s, n);
  }
  if (l.formatter && typeof l.formatter == "function") {
    let r = l.formatter(t[l.key], t, l, s);
    return r.startsWith("__:") ? J(r.substring(3)) : r;
  }
  return t[l.key];
}, Mt = (l, t, s) => {
  if (!l.colspan) return -1;
  let n = t;
  return s.forEach((r) => {
    let o = ge(l, r);
    o > 0 && o < n && (n = o);
  }), n;
}, ge = (l, t) => l.colspan === !1 ? !1 : typeof l.colspan == "function" ? l.colspan(t) : l.colspan, Rt = (l, t) => typeof l.preferSlot > "u" ? !0 : l.preferSlot === !1 ? !1 : typeof l.preferSlot == "function" ? l.preferSlot(t) : !0, $t = (l, t, s) => {
  if (typeof l != "object" || !l.key || t.indexOf(l.key) > -1) return !1;
  let n = ge(l, s);
  return typeof l.colspan > "u" ? !0 : (typeof l.colspan < "u" && (typeof l.colspan == "function" ? n = parseInt(l.colspan(s)) : n = parseInt(l.colspan)), n > 0);
}, At = (l = []) => {
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
}, Ke = /* @__PURE__ */ Q({
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
    const s = t, n = l, r = C(n.modelValue), o = C(r.value[n.column.key]), h = C(null), y = C(n.column.showLoading());
    $(o, (a) => {
      const i = JSON.parse(JSON.stringify(r.value));
      i[n.column.key] = a, s("update:modelValue", i);
    }), $(() => n.modelValue, (a) => {
      r.value = a, o.value = r.value[n.column.key];
    }), $(() => n.column, () => {
      n.column.resourceLoaded && ke(() => y.value = !1);
    }, { deep: !0 }), n.column.hasToLoadResource() && n.column.loadResource();
    const v = p(() => ({ ...n.column.slotData, item: r.value }));
    return (a, i) => {
      const j = M("lkt-anchor"), H = M("lkt-field-text"), U = M("lkt-field-switch"), Y = M("lkt-field-file"), d = M("lkt-loader"), S = M("lkt-field-select");
      return a.column.type === "link" ? (u(), b(j, {
        key: 0,
        to: a.column.getHref(r.value)
      }, {
        default: N(() => [
          te(z(V(ee)(a.column, r.value, a.i)), 1)
        ]),
        _: 1
      }, 8, ["to"])) : a.column.type === "action" ? (u(), c("a", {
        key: 1,
        href: "#",
        onClick: i[0] || (i[0] = (m) => a.column.doAction(r.value))
      }, z(V(ee)(a.column, r.value, a.i)), 1)) : a.column.type === "text" ? (u(), b(H, {
        key: 2,
        "read-mode": !a.column.editable || !a.editModeEnabled,
        ref: (m) => h.value = m,
        "edit-slot": a.column.editSlot,
        "value-slot": a.column.valueSlot,
        "slot-data": v.value,
        modelValue: o.value,
        "onUpdate:modelValue": i[1] || (i[1] = (m) => o.value = m)
      }, null, 8, ["read-mode", "edit-slot", "value-slot", "slot-data", "modelValue"])) : a.column.type === "email" ? (u(), b(H, {
        key: 3,
        "read-mode": !a.column.editable || !a.editModeEnabled,
        ref: (m) => h.value = m,
        "edit-slot": a.column.editSlot,
        "value-slot": a.column.valueSlot,
        "slot-data": v.value,
        "is-email": "",
        modelValue: o.value,
        "onUpdate:modelValue": i[2] || (i[2] = (m) => o.value = m)
      }, null, 8, ["read-mode", "edit-slot", "value-slot", "slot-data", "modelValue"])) : a.column.type === "tel" ? (u(), b(H, {
        key: 4,
        "read-mode": !a.column.editable || !a.editModeEnabled,
        ref: (m) => h.value = m,
        "edit-slot": a.column.editSlot,
        "value-slot": a.column.valueSlot,
        "slot-data": v.value,
        "is-tel": "",
        modelValue: o.value,
        "onUpdate:modelValue": i[3] || (i[3] = (m) => o.value = m)
      }, null, 8, ["read-mode", "edit-slot", "value-slot", "slot-data", "modelValue"])) : a.column.type === "int" ? (u(), b(H, {
        key: 5,
        "read-mode": !a.column.editable || !a.editModeEnabled,
        ref: (m) => h.value = m,
        "edit-slot": a.column.editSlot,
        "value-slot": a.column.valueSlot,
        "slot-data": v.value,
        "is-number": "",
        modelValue: o.value,
        "onUpdate:modelValue": i[4] || (i[4] = (m) => o.value = m)
      }, null, 8, ["read-mode", "edit-slot", "value-slot", "slot-data", "modelValue"])) : a.column.type === "float" ? (u(), b(H, {
        key: 6,
        "read-mode": !a.column.editable || !a.editModeEnabled,
        ref: (m) => h.value = m,
        "edit-slot": a.column.editSlot,
        "value-slot": a.column.valueSlot,
        "slot-data": v.value,
        "is-number": "",
        modelValue: o.value,
        "onUpdate:modelValue": i[5] || (i[5] = (m) => o.value = m)
      }, null, 8, ["read-mode", "edit-slot", "value-slot", "slot-data", "modelValue"])) : a.column.type === "check" ? (u(), b(U, {
        key: 7,
        "is-check": "",
        "read-mode": !a.column.editable || !a.editModeEnabled,
        ref: (m) => h.value = m,
        modelValue: o.value,
        "onUpdate:modelValue": i[6] || (i[6] = (m) => o.value = m)
      }, null, 8, ["read-mode", "modelValue"])) : a.column.type === "switch" ? (u(), b(U, {
        key: 8,
        "read-mode": !a.column.editable || !a.editModeEnabled,
        ref: (m) => h.value = m,
        modelValue: o.value,
        "onUpdate:modelValue": i[7] || (i[7] = (m) => o.value = m)
      }, null, 8, ["read-mode", "modelValue"])) : a.column.type === "file" ? (u(), b(Y, {
        key: 9,
        "read-mode": !a.column.editable || !a.editModeEnabled,
        ref: (m) => h.value = m,
        modelValue: o.value,
        "onUpdate:modelValue": i[8] || (i[8] = (m) => o.value = m)
      }, null, 8, ["read-mode", "modelValue"])) : a.column.type === "select" ? (u(), c(B, { key: 10 }, [
        y.value ? (u(), b(d, { key: 0 })) : (u(), b(S, {
          key: 1,
          "read-mode": !a.column.editable || !a.editModeEnabled,
          ref: (m) => h.value = m,
          modelValue: o.value,
          "onUpdate:modelValue": i[9] || (i[9] = (m) => o.value = m),
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
      ], 64)) : (u(), c(B, { key: 11 }, [
        te(z(V(ee)(a.column, r.value, a.i, a.columns)), 1)
      ], 64));
    };
  }
}), R = {
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
    const s = t, n = l, r = p(() => R.dropButtonSlot !== ""), o = p(() => R.dropButtonSlot), h = p(() => n.text.startsWith("__:") ? J(n.text.substring(3)) : n.text);
    return (y, v) => {
      const a = M("lkt-button");
      return u(), b(a, {
        palette: "table-delete",
        icon: r.value ? "" : y.icon,
        text: r.value ? "" : h.value,
        resource: y.resource,
        "resource-data": y.resourceData,
        "confirm-modal": y.confirm,
        disabled: y.disabled,
        onClick: v[0] || (v[0] = We((i) => s("click"), ["prevent", "stop"]))
      }, {
        default: N(() => [
          r.value ? (u(), b(G(o.value), { key: 0 })) : k("", !0)
        ]),
        _: 1
      }, 8, ["icon", "text", "resource", "resource-data", "confirm-modal", "disabled"]);
    };
  }
}), Ot = /* @__PURE__ */ Q({
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
    const s = t, n = l, r = p(() => R.editButtonSlot !== ""), o = p(() => R.editButtonSlot), h = p(() => n.text.startsWith("__:") ? J(n.text.substring(3)) : n.text);
    return (y, v) => {
      const a = M("lkt-button");
      return u(), b(a, {
        palette: "table-delete",
        icon: r.value ? "" : y.icon,
        text: r.value ? "" : h.value,
        "on-click-to": y.link,
        "is-anchor": y.link !== "",
        resource: y.resource,
        "resource-data": y.resourceData,
        "confirm-modal": y.confirm,
        disabled: y.disabled,
        onClick: v[0] || (v[0] = We((i) => s("click"), ["prevent", "stop"]))
      }, {
        default: N(() => [
          r.value ? (u(), b(G(o.value), { key: 0 })) : k("", !0)
        ]),
        _: 1
      }, 8, ["icon", "text", "on-click-to", "is-anchor", "resource", "resource-data", "confirm-modal", "disabled"]);
    };
  }
}), Nt = ["data-i", "data-draggable"], Pt = {
  key: 1,
  "data-role": "invalid-drag-indicator"
}, Wt = {
  key: 2,
  class: "lkt-table-nav-cell"
}, Ht = { class: "lkt-table-nav-container" }, Kt = ["data-column", "colspan", "title", "onClick"], qt = {
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
    const s = t, n = l, r = C(n.modelValue), o = C(n.editLink);
    for (let d in r.value) o.value = He(o.value, ":" + d, r.value[d]);
    const h = (d, S, m) => {
      s("click", d, be("", { item: S, column: m }));
    }, y = (d, S) => {
      s("show", d, be("", { i: S }));
    }, v = p(() => {
      let d = [];
      return n.sortable && n.isDraggable && d.push("handle"), d.join(" ");
    }), a = p(() => R.navButtonSlot !== ""), i = p(() => R.navButtonSlot), j = () => {
      s("item-up", n.i);
    }, H = () => {
      s("item-down", n.i);
    }, U = () => {
      s("item-drop", n.i);
    }, Y = () => {
    };
    return $(() => n.modelValue, (d) => r.value = d), $(r, (d) => {
      s("update:modelValue", d, n.i);
    }, { deep: !0 }), (d, S) => {
      const m = M("lkt-button");
      return u(), c("tr", {
        "data-i": d.i,
        "data-draggable": d.isDraggable
      }, [
        d.sortable && d.isDraggable && d.editModeEnabled ? (u(), c("td", {
          key: 0,
          "data-role": "drag-indicator",
          class: _(v.value)
        }, null, 2)) : d.sortable && d.editModeEnabled ? (u(), c("td", Pt)) : k("", !0),
        d.addNavigation && d.editModeEnabled ? (u(), c("td", Wt, [
          T("div", Ht, [
            x(m, {
              palette: "table-nav",
              disabled: d.i === 0,
              onClick: j
            }, {
              default: N(() => [
                a.value ? (u(), b(G(i.value), {
                  key: 0,
                  direction: "up"
                })) : (u(), c(B, { key: 1 }, [
                  S[2] || (S[2] = T("i", { class: "" }, null, -1)),
                  S[3] || (S[3] = te(" UP "))
                ], 64))
              ]),
              _: 1
            }, 8, ["disabled"]),
            x(m, {
              palette: "table-nav",
              disabled: d.latestRow,
              onClick: H
            }, {
              default: N(() => [
                a.value ? (u(), b(G(i.value), {
                  key: 0,
                  direction: "down"
                })) : (u(), c(B, { key: 1 }, [
                  S[4] || (S[4] = T("i", { class: "" }, null, -1)),
                  S[5] || (S[5] = te(" DOWN "))
                ], 64))
              ]),
              _: 1
            }, 8, ["disabled"])
          ])
        ])) : k("", !0),
        d.displayHiddenColumnsIndicator ? (u(), c("td", {
          key: 3,
          onClick: S[0] || (S[0] = (E) => y(E, d.i)),
          "data-role": "show-more",
          class: _(d.hiddenIsVisible ? "state-open" : "")
        }, null, 2)) : k("", !0),
        (u(!0), c(B, null, q(d.visibleColumns, (E) => (u(), c(B, null, [
          V($t)(E, d.emptyColumns, r.value) ? (u(), c("td", {
            key: "td" + d.i,
            "data-column": E.key,
            colspan: V(ge)(E, r.value),
            title: V(ee)(E, r.value, d.i, d.visibleColumns),
            onClick: (le) => h(le, r.value, E)
          }, [
            d.$slots[E.key] && V(Rt)(E, r.value) ? O(d.$slots, E.key, {
              key: 0,
              value: r.value[E.key],
              item: r.value,
              column: E,
              i: d.i
            }) : r.value ? (u(), b(Ke, {
              key: 1,
              modelValue: r.value,
              "onUpdate:modelValue": S[1] || (S[1] = (le) => r.value = le),
              column: E,
              columns: d.visibleColumns,
              "edit-mode-enabled": d.editModeEnabled,
              i: d.i
            }, null, 8, ["modelValue", "column", "columns", "edit-mode-enabled", "i"])) : k("", !0)
          ], 8, Kt)) : k("", !0)
        ], 64))), 256)),
        d.canDrop && d.editModeEnabled ? (u(), c("td", qt, [
          x(Ut, {
            resource: d.dropResource,
            "resource-data": r.value,
            confirm: d.dropConfirm,
            text: d.dropText,
            icon: d.dropIcon,
            onClick: U
          }, null, 8, ["resource", "resource-data", "confirm", "text", "icon"])
        ])) : k("", !0),
        d.canEdit && d.editModeEnabled ? (u(), c("td", jt, [
          x(Ot, {
            "resource-data": r.value,
            text: d.editText,
            icon: d.editIcon,
            link: o.value,
            onClick: Y
          }, null, 8, ["resource-data", "text", "icon", "link"])
        ])) : k("", !0)
      ], 8, Nt);
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
    const s = t, n = l, r = C(n.modelValue), o = (h, y, v) => {
      s("click", h, be("", { item: y, column: v }));
    };
    return $(() => n.modelValue, (h) => r.value = h), $(r, () => s("update:modelValue", r.value)), (h, y) => ae((u(), c("tr", Gt, [
      T("td", { colspan: h.hiddenColumnsColSpan }, [
        T("table", null, [
          T("tr", null, [
            (u(!0), c(B, null, q(h.hiddenColumns, (v) => (u(), c("th", {
              "data-column": v.key
            }, [
              T("div", null, z(v.label), 1)
            ], 8, Qt))), 256))
          ]),
          T("tr", { "data-i": h.i }, [
            (u(!0), c(B, null, q(h.hiddenColumns, (v, a) => (u(), c("td", {
              "data-column": v.key,
              title: V(ee)(v, r.value, a, h.hiddenColumns),
              onClick: (i) => o(i, r.value, v)
            }, [
              h.$slots[v.key] ? O(h.$slots, v.key, {
                key: 0,
                value: r.value[v.key],
                item: r.value,
                column: v,
                i: a
              }) : (u(), b(Ke, {
                key: 1,
                column: v,
                columns: h.hiddenColumns,
                modelValue: r.value,
                "onUpdate:modelValue": y[0] || (y[0] = (i) => r.value = i),
                i: a
              }, null, 8, ["column", "columns", "modelValue", "i"]))
            ], 8, Yt))), 256))
          ], 8, Xt)
        ])
      ], 8, Jt)
    ], 512)), [
      [ne, h.hiddenIsVisible]
    ]);
  }
}), Pe = /* @__PURE__ */ Q({
  __name: "CreateButton",
  props: {
    disabled: { type: Boolean, default: !1 },
    text: { default: "" },
    icon: { default: "" },
    to: { default: "" }
  },
  emits: ["click"],
  setup(l, { emit: t }) {
    const s = t, n = l, r = p(() => R.createButtonSlot !== ""), o = p(() => R.createButtonSlot), h = p(() => n.text.startsWith("__:") ? J(n.text.substring(3)) : n.text);
    return (y, v) => {
      const a = M("lkt-button");
      return u(), b(a, {
        palette: "table-create",
        disabled: y.disabled,
        icon: r.value ? "" : y.icon,
        text: r.value ? "" : h.value,
        "on-click-to": y.to,
        onClick: v[0] || (v[0] = (i) => s("click"))
      }, {
        default: N(() => [
          r.value ? (u(), b(G(o.value), { key: 0 })) : k("", !0)
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
    const s = t, n = l, r = p(() => Mt(n.column, n.amountOfColumns, n.items)), o = p(() => n.column.sortable === !0), h = p(() => o.value && n.sortBy === n.column.key ? n.sortDirection : ""), y = p(() => n.column.label.startsWith("__:") ? J(n.column.label.substring(3)) : n.column.label), v = () => {
      s("click", n.column);
    };
    return (a, i) => (u(), c("th", {
      "data-column": a.column.key,
      "data-sortable": o.value,
      "data-sort": h.value,
      colspan: r.value,
      title: y.value,
      onClick: v
    }, [
      T("div", null, z(y.value), 1)
    ], 8, _t));
  }
}), el = ["id"], tl = { class: "lkt-table-page-buttons" }, ll = { key: 1 }, ol = { class: "switch-edition-mode" }, al = {
  key: 0,
  class: "lkt-table-page-buttons"
}, nl = {
  key: 1,
  class: "lkt-table-page-filters"
}, ul = ["data-sortable"], rl = { key: 0 }, il = {
  key: 0,
  "data-role": "drag-indicator"
}, sl = { key: 1 }, dl = { key: 2 }, ml = {
  key: 3,
  class: "lkt-table-col-drop"
}, fl = {
  key: 4,
  class: "lkt-table-col-edit"
}, cl = ["id"], pl = {
  key: 0,
  class: "lkt-table-item"
}, vl = {
  key: 3,
  class: "lkt-table-empty"
}, hl = {
  key: 4,
  class: "lkt-table-page-buttons lkt-table-page-buttons-bottom"
}, yl = /* @__PURE__ */ Q({
  __name: "LktTable",
  props: {
    modelValue: { default: () => [] },
    columns: { default: () => [] },
    sorter: { type: Function, default: Ne },
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
    const n = s, r = yt(), o = l, h = {}, y = C(typeof o.sorter == "function" ? o.sorter : Ne), v = C(At(o.columns)), a = C("asc"), i = C(o.modelValue), j = C(h), H = C(null), U = C(o.columns), Y = C(o.page), d = C(!1), S = C(!1), m = C(o.perms), E = C(null), le = C({}), Z = C(new Ct({ items: i.value }, o.dataStateConfig)), w = C(o.editMode), oe = C(0), qe = (e) => {
      Array.isArray(e) && (i.value = e), d.value = !1, S.value = !0, Z.value.store({ items: i.value }).turnStoredIntoOriginal();
    }, je = (e) => {
      m.value = e;
    }, ze = (e) => {
    }, Ge = (e) => {
      n("read-response", e);
    }, Je = () => ke(() => d.value = !0), Qe = () => {
      E.value.doRefresh();
    }, ue = gt(12), me = p(() => {
      if (!o.hideEmptyColumns) return [];
      let e = [];
      return U.value.forEach((f) => {
        let g = f.key, I = !1;
        i.value.forEach((L) => {
          if (typeof L.checkEmpty == "function")
            return L.checkEmpty(L);
          L[g] && (I = !0);
        }), I || e.push(g);
      }), e;
    }), re = p(() => U.value.filter((e) => !e.hidden)), fe = p(() => U.value.filter((e) => e.hidden)), Xe = p(() => {
      let e = re.value.length + 1;
      return o.sortable && ++e, e;
    }), Ye = p(() => U.value.filter((e) => e.isForRowKey)), Ce = p(() => fe.value.length > 0 && !o.sortable), Ze = p(() => U.value.map((e) => e.key)), Se = p(() => {
      let e = [];
      for (let f in r) Ze.value.indexOf(f) !== -1 && e.push(f);
      return e;
    }), Ve = p(() => o.hiddenSave || d.value || !o.saveResource ? !1 : w.value && Z.value.changed() ? !0 : w.value), _e = p(() => ie.value && i.value.length >= o.requiredItemsForTopCreate || o.switchEditionEnabled ? !0 : Ve.value || w.value && o.canCreate), xe = p(() => o.saveDisabled || typeof o.saveValidator == "function" && !o.saveValidator(i.value) ? !1 : Z.value.changed()), et = p(() => i.value.length), tt = p(() => ({
      items: i.value,
      ...o.saveResourceData
    })), lt = p(() => o.titleTag === "" ? "h2" : o.titleTag), ot = p(() => o.wrapContentTag === "" ? "div" : o.wrapContentTag), ce = p(() => o.title.startsWith("__:") ? J(o.title.substring(3)) : o.title), at = p(() => o.saveText.startsWith("__:") ? J(o.saveText.substring(3)) : o.saveText), nt = p(() => o.editModeText.startsWith("__:") ? J(o.editModeText.substring(3)) : o.editModeText), Ee = p(() => m.value.includes("create")), ut = p(() => m.value.includes("read")), pe = p(() => m.value.includes("update")), ve = p(() => m.value.includes("drop")), rt = (e) => {
      let f = e.target;
      if (typeof f.dataset.column > "u")
        do
          f = f.parentNode;
        while (typeof f.dataset.column > "u" && f.tagName !== "TABLE" && f.tagName !== "body");
      if (f.tagName === "TD" && (f = f.parentNode, f = f.dataset.i, typeof f < "u"))
        return i.value[f];
    }, De = (e) => j.value["tr_" + e] === !0, Be = (e) => {
      e && e.sortable && (i.value = i.value.sort((f, g) => y.value(f, g, e, a.value)), a.value = a.value === "asc" ? "desc" : "asc", v.value = e.key, n("sort", [v.value, a.value]));
    }, Ie = (e, f) => {
      n("click", e, f);
    }, Te = (e, f) => {
      let g = "tr_" + f.value.i;
      j.value[g] = typeof j.value[g] > "u" ? !0 : !j.value[g];
    }, we = () => {
      U.value.forEach((e) => {
        if (e.type === "select" && e.autoLoadSelectOptions) {
          let f = e.autoLoadSelectOptionsKey !== "" ? e.autoLoadSelectOptionsKey : e.key, g = [];
          i.value.forEach((L) => {
            Array.isArray(L[f]) && L[f].forEach((P) => g.push(P));
          });
          let I = {};
          g = g.filter(function(L) {
            return I[L.value] ? !1 : (I[L.value] = !0, !0);
          }), e.setOptions(g);
        }
      });
    }, it = (e) => typeof o.checkValidDrag == "function" ? o.checkValidDrag(e) : !0, Le = (e) => typeof o.draggableChecker == "function" ? o.draggableChecker(e) : !0, Me = () => {
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
    }, st = () => {
      d.value = !0;
    }, dt = () => {
      d.value = !1;
    }, mt = (e, f) => {
      if (n("before-save"), o.saveResource && (d.value = !1, !f.success)) {
        n("error", f.httpStatus);
        return;
      }
      Z.value.turnStoredIntoOriginal(), n("save", f);
    }, Re = (e, f, g) => {
      if (g >= e.length) {
        let I = g - e.length + 1;
        for (; I--; ) e.push(void 0);
      }
      return e.splice(g, 0, e.splice(f, 1)[0]), e;
    }, ft = (e) => {
      Re(i.value, e, e - 1), oe.value = de();
    }, ct = (e) => {
      Re(i.value, e, e + 1), oe.value = de();
    }, $e = (e) => {
      i.value.splice(e, 1), oe.value = de();
    }, pt = () => {
      let e = document.getElementById("lkt-table-body-" + ue);
      le.value = new St(e, {
        direction: "vertical",
        handle: ".handle",
        animation: 150,
        onEnd: function(f) {
          let g = f.oldIndex, I = f.newIndex;
          i.value.splice(I, 0, i.value.splice(g, 1)[0]), oe.value = de();
        },
        onMove: function(f, g) {
          return it(f);
        }
      });
    }, Ae = (e, f, g = !1) => {
      let I = [oe.value, ue, "row", f];
      return g && I.push("hidden"), Ye.value.forEach((L) => {
        let P = String(e[L.key]).toLowerCase();
        P.length > 50 && (P = P.substring(0, 50)), P = He(P, " ", "-"), I.push(P);
      }), I.join("-");
    }, Fe = p(() => typeof o.createEnabledValidator == "function" ? o.createEnabledValidator({ items: i.value }) : !0), ie = p(() => Ee.value ? o.canCreateWithoutEdition || o.canCreate && w.value : !1), Ue = (e) => typeof o.itemDisplayChecker == "function" ? o.itemDisplayChecker(e) : !0;
    kt(() => {
      we(), o.initialSorting && Be(Ft(o.columns, v.value)), Z.value.store({ items: i.value }).turnStoredIntoOriginal(), o.sortable && ke(() => {
        pt();
      });
    }), $(() => o.perms, (e) => m.value = e), $(m, (e) => n("update:perms", e)), $(() => o.editMode, (e) => w.value = e), $(() => o.columns, (e) => U.value = e), $(() => o.modelValue, (e) => i.value = e), $(i, (e) => {
      we(), Z.value.increment({ items: e }), n("update:modelValue", e);
    }, { deep: !0 }), t({
      getItemByEvent: rt,
      doRefresh: Qe
    });
    const vt = p(() => typeof R.defaultEmptySlot < "u"), ht = p(() => R.defaultEmptySlot);
    return (e, f) => {
      const g = M("lkt-button"), I = M("lkt-field-switch"), L = M("lkt-loader"), P = M("lkt-paginator");
      return u(), c("section", {
        class: "lkt-table-page",
        id: "lkt-table-page-" + V(ue)
      }, [
        ce.value || V(r).title ? (u(), c("header", {
          key: 0,
          class: _(e.headerClass)
        }, [
          ce.value ? (u(), b(G(lt.value), { key: 0 }, {
            default: N(() => [
              e.titleIcon ? (u(), c("i", {
                key: 0,
                class: _(e.titleIcon)
              }, null, 2)) : k("", !0),
              te(" " + z(ce.value), 1)
            ]),
            _: 1
          })) : k("", !0),
          V(r).title ? O(e.$slots, "title", { key: 1 }) : k("", !0)
        ], 2)) : k("", !0),
        (u(), b(G(ot.value), {
          class: _(["lkt-table-page-content-wrapper", e.wrapContentClass])
        }, {
          default: N(() => [
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
                default: N(() => [
                  V(r)["button-save"] ? O(e.$slots, "button-save", {
                    key: 0,
                    items: i.value,
                    editMode: e.editMode,
                    canUpdate: !e.saveDisabled
                  }) : (u(), c("span", ll, z(at.value), 1))
                ]),
                _: 3
              }, 8, ["disabled", "confirm-modal", "confirm-data", "resource", "resource-data"]), [
                [ne, Ve.value]
              ]),
              ie.value && i.value.length >= e.requiredItemsForTopCreate ? (u(), b(Pe, {
                key: 0,
                disabled: !Fe.value || e.createDisabled,
                text: e.createText,
                icon: e.createIcon,
                to: e.createRoute,
                onClick: Me
              }, null, 8, ["disabled", "text", "icon", "to"])) : k("", !0),
              T("div", ol, [
                ae(x(I, {
                  modelValue: w.value,
                  "onUpdate:modelValue": f[0] || (f[0] = (D) => w.value = D),
                  label: nt.value
                }, null, 8, ["modelValue", "label"]), [
                  [ne, e.switchEditionEnabled]
                ])
              ])
            ], 512), [
              [ne, _e.value]
            ]),
            V(r).buttons ? (u(), c("div", al, [
              O(e.$slots, "buttons")
            ])) : k("", !0),
            S.value && V(r).filters ? (u(), c("div", nl, [
              O(e.$slots, "filters", {
                items: i.value,
                isLoading: d.value
              })
            ])) : k("", !0),
            d.value ? (u(), b(L, { key: 2 })) : k("", !0),
            ae(T("div", {
              class: "lkt-table",
              "data-sortable": e.sortable
            }, [
              e.itemMode ? (u(), c("div", {
                key: 1,
                class: _(["lkt-table-items-container", e.itemsContainerClass])
              }, [
                (u(!0), c(B, null, q(i.value, (D, W) => (u(), c(B, null, [
                  Ue(D) ? (u(), c("div", pl, [
                    O(e.$slots, "item", ye({
                      [e.slotItemVar || ""]: D,
                      index: W,
                      canCreate: Ee.value,
                      canRead: ut.value,
                      canUpdate: pe.value,
                      canDrop: ve.value,
                      isLoading: d.value,
                      doDrop: () => $e(W)
                    }))
                  ])) : k("", !0)
                ], 64))), 256))
              ], 2)) : (u(), c("table", rl, [
                T("thead", null, [
                  T("tr", null, [
                    e.sortable && w.value ? (u(), c("th", il)) : k("", !0),
                    e.addNavigation && w.value ? (u(), c("th", sl)) : k("", !0),
                    Ce.value ? (u(), c("th", dl)) : k("", !0),
                    (u(!0), c(B, null, q(re.value, (D) => (u(), c(B, null, [
                      me.value.indexOf(D.key) === -1 ? (u(), b(xt, {
                        key: 0,
                        column: D,
                        "sort-by": v.value,
                        "sort-direction": a.value,
                        "amount-of-columns": e.columns.length,
                        items: i.value,
                        onClick: (W) => Be(D)
                      }, null, 8, ["column", "sort-by", "sort-direction", "amount-of-columns", "items", "onClick"])) : k("", !0)
                    ], 64))), 256)),
                    e.canDrop && ve.value && w.value ? (u(), c("th", ml)) : k("", !0),
                    e.canEditButton && pe.value && w.value ? (u(), c("th", fl)) : k("", !0)
                  ])
                ]),
                T("tbody", {
                  ref: (D) => H.value = D,
                  id: "lkt-table-body-" + V(ue)
                }, [
                  (u(!0), c(B, null, q(i.value, (D, W) => (u(), c(B, null, [
                    Ue(D) ? (u(), b(zt, {
                      modelValue: i.value[W],
                      "onUpdate:modelValue": (X) => i.value[W] = X,
                      key: Ae(D, W),
                      i: W,
                      "display-hidden-columns-indicator": Ce.value,
                      "is-draggable": Le(D),
                      sortable: e.sortable,
                      "visible-columns": re.value,
                      "empty-columns": me.value,
                      "add-navigation": e.addNavigation,
                      "hidden-is-visible": De(W),
                      "latest-row": W + 1 === et.value,
                      "can-drop": e.canDrop && ve.value && w.value,
                      "drop-confirm": e.dropConfirm,
                      "drop-resource": e.dropResource,
                      "drop-text": e.dropText,
                      "drop-icon": e.dropIcon,
                      "can-edit": e.canEditButton && pe.value && w.value,
                      "edit-text": e.editText,
                      "edit-icon": e.editIcon,
                      "edit-link": e.editLink,
                      "edit-mode-enabled": w.value,
                      onClick: Ie,
                      onShow: Te,
                      onItemUp: ft,
                      onItemDown: ct,
                      onItemDrop: $e
                    }, Oe({ _: 2 }, [
                      q(Se.value, (X) => ({
                        name: X,
                        fn: N((K) => [
                          O(e.$slots, X, ye({
                            [e.slotItemVar || ""]: K.item,
                            value: K.value,
                            column: K.column
                          }))
                        ])
                      }))
                    ]), 1032, ["modelValue", "onUpdate:modelValue", "i", "display-hidden-columns-indicator", "is-draggable", "sortable", "visible-columns", "empty-columns", "add-navigation", "hidden-is-visible", "latest-row", "can-drop", "drop-confirm", "drop-resource", "drop-text", "drop-icon", "can-edit", "edit-text", "edit-icon", "edit-link", "edit-mode-enabled"])) : k("", !0),
                    fe.value.length > 0 ? (u(!0), c(B, { key: 1 }, q(i.value, (X, K) => (u(), b(Zt, {
                      modelValue: i.value[K],
                      "onUpdate:modelValue": (se) => i.value[K] = se,
                      key: Ae(X, K, !0),
                      i: K,
                      "hidden-columns": fe.value,
                      "hidden-columns-col-span": Xe.value,
                      "is-draggable": Le(X),
                      sortable: e.sortable,
                      "visible-columns": re.value,
                      "empty-columns": me.value,
                      "hidden-is-visible": De(K),
                      onClick: Ie,
                      onShow: Te
                    }, Oe({ _: 2 }, [
                      q(Se.value, (se) => ({
                        name: se,
                        fn: N((he) => [
                          O(e.$slots, se, ye({
                            [e.slotItemVar || ""]: he.item,
                            value: he.value,
                            column: he.column
                          }))
                        ])
                      }))
                    ]), 1032, ["modelValue", "onUpdate:modelValue", "i", "hidden-columns", "hidden-columns-col-span", "is-draggable", "sortable", "visible-columns", "empty-columns", "hidden-is-visible"]))), 128)) : k("", !0)
                  ], 64))), 256))
                ], 8, cl)
              ]))
            ], 8, ul), [
              [ne, !d.value && i.value.length > 0]
            ]),
            !d.value && i.value.length === 0 ? (u(), c("div", vl, [
              V(r).empty ? O(e.$slots, "empty", { key: 0 }) : vt.value ? (u(), b(G(ht.value), {
                key: 1,
                message: e.noResultsText
              }, null, 8, ["message"])) : e.noResultsText ? (u(), c(B, { key: 2 }, [
                te(z(e.noResultsText), 1)
              ], 64)) : k("", !0)
            ])) : k("", !0),
            ie.value || V(r).bottomButtons ? (u(), c("div", hl, [
              ie.value && i.value.length >= e.requiredItemsForBottomCreate ? (u(), b(Pe, {
                key: 0,
                disabled: !Fe.value || e.createDisabled,
                text: e.createText,
                icon: e.createIcon,
                to: e.createRoute,
                onClick: Me
              }, null, 8, ["disabled", "text", "icon", "to"])) : k("", !0),
              O(e.$slots, "bottom-buttons")
            ])) : k("", !0),
            e.resource.length > 0 ? (u(), b(P, {
              key: 5,
              ref_key: "paginator",
              ref: E,
              modelValue: Y.value,
              "onUpdate:modelValue": f[1] || (f[1] = (D) => Y.value = D),
              resource: e.resource,
              filters: e.filters,
              onResults: qe,
              onLoading: Je,
              onPerms: je,
              onCustom: ze,
              onResponse: Ge
            }, null, 8, ["modelValue", "resource", "filters"])) : k("", !0)
          ]),
          _: 3
        }, 8, ["class"]))
      ], 8, el);
    };
  }
}), Jl = {
  install: (l) => {
    l.component("lkt-loader") === void 0 && l.use(Vt), l.component("lkt-button") === void 0 && l.use(Et), l.component("lkt-paginator") === void 0 && l.use(Dt), l.component("lkt-field-text") === void 0 && l.use(Bt), l.component("lkt-field-textarea") === void 0 && l.use(It), l.component("lkt-field-select") === void 0 && l.use(Tt), l.component("lkt-field-switch") === void 0 && l.use(wt), l.component("lkt-field-file") === void 0 && l.use(Lt), l.component("lkt-table") === void 0 && l.component("lkt-table", yl);
  }
}, Ql = (l) => (R.navButtonSlot = l, !0), Xl = (l) => (R.dropButtonSlot = l, !0), Yl = (l) => (R.createButtonSlot = l, !0), Zl = (l) => {
  R.defaultEmptySlot = l;
};
export {
  F as LktTableColumn,
  Ul as createActionColumn,
  Kl as createCheckColumn,
  Al as createColumn,
  Wl as createEmailColumn,
  zl as createFileColumn,
  Pl as createFloatColumn,
  Gl as createHiddenColumn,
  Nl as createIntegerColumn,
  Fl as createLinkColumn,
  jl as createSelectColumn,
  ql as createSwitchColumn,
  Hl as createTelColumn,
  Ol as createTextColumn,
  Jl as default,
  Yl as setTableCreateButtonSlot,
  Xl as setTableDropButtonSlot,
  Zl as setTableEmptySlot,
  Ql as setTableNavButtonSlot
};
