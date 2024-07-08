import { reactive as H, defineComponent as J, ref as C, watch as F, nextTick as fe, computed as f, resolveComponent as L, openBlock as i, createBlock as b, withCtx as A, createTextVNode as ae, toDisplayString as j, unref as I, createElementBlock as m, Fragment as R, withModifiers as $e, resolveDynamicComponent as X, createCommentVNode as y, normalizeClass as oe, createElementVNode as E, createVNode as Q, renderList as W, renderSlot as U, withDirectives as te, vShow as le, useSlots as st, onMounted as rt, createSlots as Le } from "vue";
import { httpCall as dt } from "lkt-http-client";
import { __ as q } from "lkt-i18n";
import { createLktEvent as pe } from "lkt-events";
import { replaceAll as Ae, generateRandomString as ct } from "lkt-string-tools";
import { DataState as mt } from "lkt-data-state";
import ft from "sortablejs";
import pt from "lkt-loader";
import vt from "lkt-button";
import ht from "lkt-paginator";
import kt from "lkt-field-text";
import yt from "lkt-field-textarea";
import bt from "lkt-field-select";
import gt from "lkt-field-switch";
import Ct from "lkt-field-file";
class K {
  constructor(t = "", d = "") {
    this.key = t, this.label = d, this.sortable = !0, this.hidden = !1, this.formatter = void 0, this.checkEmpty = void 0, this.colspan = void 0, this.resource = "", this.resourceData = {}, this.isMultiple = !1, this.isLoading = !1, this.resourceLoaded = !1, this.valueSlot = "", this.editSlot = "", this.multipleDisplay = "", this.multipleDisplayEdition = "";
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
      const t = await dt(this.resource, this.resourceData);
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
  setAutoLoadSelectOptions(t = !0, d = "") {
    return this.autoLoadSelectOptions = t, this.autoLoadSelectOptionsKey = d, this;
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
const wl = (l, t, d = !0) => H(new K(l, t).setIsSortable(d)), El = (l, t, d, a = !0) => H(new K(l, t).setIsSortable(a).defineAsLink(d)), Il = (l, t, d, a = !0) => H(new K(l, t).setIsSortable(a).defineAsAction(d)), Ll = (l, t, d = !0) => H(new K(l, t).setIsSortable(d).defineAsText()), Ml = (l, t, d = !0) => H(new K(l, t).setIsSortable(d).defineAsEmail()), Rl = (l, t, d = !0) => H(new K(l, t).setIsSortable(d).defineAsTel()), $l = (l, t, d = !0) => H(new K(l, t).setIsSortable(d).defineAsCheck()), Al = (l, t, d = !0) => H(new K(l, t).setIsSortable(d).defineAsSwitch()), Fl = (l, t, d, a = !0) => H(new K(l, t).setIsSortable(a).defineAsSelect(d)), Ol = (l, t, d = !0) => H(new K(l, t).setIsSortable(d).setIsHidden(!0)), Me = (l, t, d, a) => {
  if (!d) return 0;
  let u = l[d.key], o = t[d.key];
  if (a === "asc") {
    if (u > o) return 1;
    if (o > u) return -1;
  } else {
    if (u > o) return -1;
    if (o > u) return 1;
  }
  return 0;
}, x = (l, t, d, a = []) => {
  if (l.extractTitleFromColumn) {
    let u = a.find((o) => o.key === l.extractTitleFromColumn);
    if (u)
      return x(u, t, d, a);
  }
  if (l.formatter && typeof l.formatter == "function") {
    let u = l.formatter(t[l.key], t, l, d);
    return u.startsWith("__:") ? q(u.substring(3)) : u;
  }
  return t[l.key];
}, St = (l, t, d) => {
  if (!l.colspan) return -1;
  let a = t;
  return d.forEach((u) => {
    let o = ve(l, u);
    o > 0 && o < a && (a = o);
  }), a;
}, ve = (l, t) => l.colspan === !1 ? !1 : typeof l.colspan == "function" ? l.colspan(t) : l.colspan, Vt = (l, t, d) => {
  if (typeof l != "object" || !l.key || t.indexOf(l.key) > -1) return !1;
  let a = ve(l, d);
  return typeof l.colspan > "u" ? !0 : (typeof l.colspan < "u" && (typeof l.colspan == "function" ? a = parseInt(l.colspan()) : a = parseInt(l.colspan)), a > 0);
}, Dt = (l = []) => {
  if (l.length > 0) {
    for (let t = 0; t < l.length; ++t)
      if (l[t].sortable) return l[t].key;
  }
  return "";
}, Tt = (l, t) => {
  if (l.length > 0) {
    for (let d = 0; d < l.length; ++d)
      if (l[d].key === t) return l[d];
  }
  return null;
}, Fe = /* @__PURE__ */ J({
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
    const d = t, a = l, u = C(a.modelValue), o = C(u.value[a.column.key]), h = C(null), k = C(a.column.showLoading());
    F(o, (n) => {
      const s = JSON.parse(JSON.stringify(u.value));
      s[a.column.key] = n, d("update:modelValue", s);
    }), F(() => a.modelValue, (n) => {
      u.value = n, o.value = u.value[a.column.key];
    }), F(() => a.column, () => {
      a.column.resourceLoaded && fe(() => k.value = !1);
    }, { deep: !0 }), a.column.hasToLoadResource() && a.column.loadResource();
    const v = f(() => ({ ...a.column.slotData, item: u.value }));
    return (n, s) => {
      const _ = L("lkt-anchor"), G = L("lkt-field-text"), $ = L("lkt-field-switch"), Y = L("lkt-field-file"), r = L("lkt-loader"), M = L("lkt-field-select");
      return n.column.type === "link" ? (i(), b(_, {
        key: 0,
        to: n.column.getHref(u.value)
      }, {
        default: A(() => [
          ae(j(I(x)(n.column, u.value, n.i)), 1)
        ]),
        _: 1
      }, 8, ["to"])) : n.column.type === "action" ? (i(), m("a", {
        key: 1,
        href: "#",
        onClick: s[0] || (s[0] = (p) => n.column.doAction(u.value))
      }, j(I(x)(n.column, u.value, n.i)), 1)) : n.column.type === "text" ? (i(), b(G, {
        key: 2,
        "read-mode": !n.column.editable || !n.editModeEnabled,
        ref: (p) => h.value = p,
        "edit-slot": n.column.editSlot,
        "value-slot": n.column.valueSlot,
        "slot-data": v.value,
        modelValue: o.value,
        "onUpdate:modelValue": s[1] || (s[1] = (p) => o.value = p)
      }, null, 8, ["read-mode", "edit-slot", "value-slot", "slot-data", "modelValue"])) : n.column.type === "email" ? (i(), b(G, {
        key: 3,
        "read-mode": !n.column.editable || !n.editModeEnabled,
        ref: (p) => h.value = p,
        "edit-slot": n.column.editSlot,
        "value-slot": n.column.valueSlot,
        "slot-data": v.value,
        "is-email": "",
        modelValue: o.value,
        "onUpdate:modelValue": s[2] || (s[2] = (p) => o.value = p)
      }, null, 8, ["read-mode", "edit-slot", "value-slot", "slot-data", "modelValue"])) : n.column.type === "tel" ? (i(), b(G, {
        key: 4,
        "read-mode": !n.column.editable || !n.editModeEnabled,
        ref: (p) => h.value = p,
        "edit-slot": n.column.editSlot,
        "value-slot": n.column.valueSlot,
        "slot-data": v.value,
        "is-tel": "",
        modelValue: o.value,
        "onUpdate:modelValue": s[3] || (s[3] = (p) => o.value = p)
      }, null, 8, ["read-mode", "edit-slot", "value-slot", "slot-data", "modelValue"])) : n.column.type === "check" ? (i(), b($, {
        key: 5,
        "is-check": "",
        "read-mode": !n.column.editable || !n.editModeEnabled,
        ref: (p) => h.value = p,
        modelValue: o.value,
        "onUpdate:modelValue": s[4] || (s[4] = (p) => o.value = p)
      }, null, 8, ["read-mode", "modelValue"])) : n.column.type === "switch" ? (i(), b($, {
        key: 6,
        "read-mode": !n.column.editable || !n.editModeEnabled,
        ref: (p) => h.value = p,
        modelValue: o.value,
        "onUpdate:modelValue": s[5] || (s[5] = (p) => o.value = p)
      }, null, 8, ["read-mode", "modelValue"])) : n.column.type === "file" ? (i(), b(Y, {
        key: 7,
        "read-mode": !n.column.editable || !n.editModeEnabled,
        ref: (p) => h.value = p,
        modelValue: o.value,
        "onUpdate:modelValue": s[6] || (s[6] = (p) => o.value = p)
      }, null, 8, ["read-mode", "modelValue"])) : n.column.type === "select" ? (i(), m(R, { key: 8 }, [
        k.value ? (i(), b(r, { key: 0 })) : (i(), b(M, {
          key: 1,
          "read-mode": !n.column.editable || !n.editModeEnabled,
          ref: (p) => h.value = p,
          modelValue: o.value,
          "onUpdate:modelValue": s[7] || (s[7] = (p) => o.value = p),
          "slot-data": v.value,
          resource: n.column.resource,
          "use-resource-slot": n.column.resourceSlot ? n.column.resourceSlot : n.column.resource,
          "resource-data": n.column.resourceData,
          options: n.column.options,
          multiple: n.column.isMultiple,
          tags: n.column.tags,
          "multiple-display": n.column.multipleDisplay,
          "multiple-display-edition": n.column.multipleDisplayEdition
        }, null, 8, ["read-mode", "modelValue", "slot-data", "resource", "use-resource-slot", "resource-data", "options", "multiple", "tags", "multiple-display", "multiple-display-edition"]))
      ], 64)) : (i(), m(R, { key: 9 }, [
        ae(j(I(x)(n.column, u.value, n.i, n.columns)), 1)
      ], 64));
    };
  }
}), O = {
  navButtonSlot: "",
  dropButtonSlot: "",
  editButtonSlot: "",
  createButtonSlot: ""
}, Bt = /* @__PURE__ */ J({
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
    const d = t, a = l, u = f(() => O.dropButtonSlot !== ""), o = f(() => O.dropButtonSlot), h = f(() => a.text.startsWith("__:") ? q(a.text.substring(3)) : a.text);
    return (k, v) => {
      const n = L("lkt-button");
      return i(), b(n, {
        palette: "table-delete",
        icon: u.value ? "" : k.icon,
        text: u.value ? "" : h.value,
        resource: k.resource,
        "resource-data": k.resourceData,
        "confirm-modal": k.confirm,
        disabled: k.disabled,
        onClick: v[0] || (v[0] = $e((s) => d("click"), ["prevent", "stop"]))
      }, {
        default: A(() => [
          u.value ? (i(), b(X(o.value), { key: 0 })) : y("", !0)
        ]),
        _: 1
      }, 8, ["icon", "text", "resource", "resource-data", "confirm-modal", "disabled"]);
    };
  }
}), wt = /* @__PURE__ */ J({
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
    const d = t, a = l, u = f(() => O.editButtonSlot !== ""), o = f(() => O.editButtonSlot), h = f(() => a.text.startsWith("__:") ? q(a.text.substring(3)) : a.text);
    return (k, v) => {
      const n = L("lkt-button");
      return i(), b(n, {
        palette: "table-delete",
        icon: u.value ? "" : k.icon,
        text: u.value ? "" : h.value,
        "on-click-to": k.link,
        resource: k.resource,
        "resource-data": k.resourceData,
        "confirm-modal": k.confirm,
        disabled: k.disabled,
        onClick: v[0] || (v[0] = $e((s) => d("click"), ["prevent", "stop"]))
      }, {
        default: A(() => [
          u.value ? (i(), b(X(o.value), { key: 0 })) : y("", !0)
        ]),
        _: 1
      }, 8, ["icon", "text", "on-click-to", "resource", "resource-data", "confirm-modal", "disabled"]);
    };
  }
}), Et = ["data-i", "data-draggable"], It = {
  key: 1,
  "data-role": "invalid-drag-indicator"
}, Lt = {
  key: 2,
  class: "lkt-table-nav-cell"
}, Mt = { class: "lkt-table-nav-container" }, Rt = /* @__PURE__ */ E("i", { class: "" }, null, -1), $t = /* @__PURE__ */ E("i", { class: "" }, null, -1), At = ["data-column", "colspan", "title", "onClick"], Ft = {
  key: 4,
  class: "lkt-table-col-drop"
}, Ot = {
  key: 5,
  class: "lkt-table-col-edit"
}, Nt = /* @__PURE__ */ J({
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
    const d = t, a = l, u = C(a.modelValue), o = C(a.editLink);
    for (let r in u.value) o.value = Ae(o.value, ":" + r, u.value[r]);
    const h = (r, M, p) => {
      d("click", r, pe("", { item: M, column: p }));
    }, k = (r, M) => {
      d("show", r, pe("", { i: M }));
    }, v = f(() => {
      let r = [];
      return a.sortable && a.isDraggable && r.push("handle"), r.join(" ");
    }), n = f(() => O.navButtonSlot !== ""), s = f(() => O.navButtonSlot), _ = () => {
      d("item-up", a.i);
    }, G = () => {
      d("item-down", a.i);
    }, $ = () => {
      d("item-drop", a.i);
    }, Y = () => {
    };
    return F(() => a.modelValue, (r) => u.value = r), F(u, (r) => {
      d("update:modelValue", r, a.i);
    }, { deep: !0 }), (r, M) => {
      const p = L("lkt-button");
      return i(), m("tr", {
        "data-i": r.i,
        "data-draggable": r.isDraggable
      }, [
        r.sortable && r.isDraggable && r.editModeEnabled ? (i(), m("td", {
          key: 0,
          "data-role": "drag-indicator",
          class: oe(v.value)
        }, null, 2)) : r.sortable && r.editModeEnabled ? (i(), m("td", It)) : y("", !0),
        r.addNavigation && r.editModeEnabled ? (i(), m("td", Lt, [
          E("div", Mt, [
            Q(p, {
              palette: "table-nav",
              disabled: r.i === 0,
              onClick: _
            }, {
              default: A(() => [
                n.value ? (i(), b(X(s.value), {
                  key: 0,
                  direction: "up"
                })) : (i(), m(R, { key: 1 }, [
                  Rt,
                  ae(" UP ")
                ], 64))
              ]),
              _: 1
            }, 8, ["disabled"]),
            Q(p, {
              palette: "table-nav",
              disabled: r.latestRow,
              onClick: G
            }, {
              default: A(() => [
                n.value ? (i(), b(X(s.value), {
                  key: 0,
                  direction: "down"
                })) : (i(), m(R, { key: 1 }, [
                  $t,
                  ae(" DOWN ")
                ], 64))
              ]),
              _: 1
            }, 8, ["disabled"])
          ])
        ])) : y("", !0),
        r.displayHiddenColumnsIndicator ? (i(), m("td", {
          key: 3,
          onClick: M[0] || (M[0] = (w) => k(w, r.i)),
          "data-role": "show-more",
          class: oe(r.hiddenIsVisible ? "state-open" : "")
        }, null, 2)) : y("", !0),
        (i(!0), m(R, null, W(r.visibleColumns, (w) => (i(), m(R, null, [
          I(Vt)(w, r.emptyColumns, u.value) ? (i(), m("td", {
            key: 0,
            "data-column": w.key,
            colspan: I(ve)(w, u.value),
            title: I(x)(w, u.value, r.i, r.visibleColumns),
            onClick: (ee) => h(ee, u.value, w)
          }, [
            r.$slots[w.key] ? U(r.$slots, w.key, {
              key: 0,
              value: u.value[w.key],
              item: u.value,
              column: w,
              i: r.i
            }) : u.value ? (i(), b(Fe, {
              key: 1,
              modelValue: u.value,
              "onUpdate:modelValue": M[1] || (M[1] = (ee) => u.value = ee),
              column: w,
              columns: r.visibleColumns,
              "edit-mode-enabled": r.editModeEnabled,
              i: r.i
            }, null, 8, ["modelValue", "column", "columns", "edit-mode-enabled", "i"])) : y("", !0)
          ], 8, At)) : y("", !0)
        ], 64))), 256)),
        r.canDrop && r.editModeEnabled ? (i(), m("td", Ft, [
          Q(Bt, {
            resource: r.dropResource,
            "resource-data": u.value,
            confirm: r.dropConfirm,
            text: r.dropText,
            icon: r.dropIcon,
            onClick: $
          }, null, 8, ["resource", "resource-data", "confirm", "text", "icon"])
        ])) : y("", !0),
        r.canEdit && r.editModeEnabled ? (i(), m("td", Ot, [
          Q(wt, {
            "resource-data": u.value,
            text: r.editText,
            icon: r.editIcon,
            link: o.value,
            onClick: Y
          }, null, 8, ["resource-data", "text", "icon", "link"])
        ])) : y("", !0)
      ], 8, Et);
    };
  }
}), Ut = { "data-role": "hidden-row" }, Ht = ["colspan"], Kt = ["data-column"], Pt = ["data-i"], Wt = ["data-column", "title", "onClick"], _t = /* @__PURE__ */ J({
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
    const d = t, a = l, u = C(a.modelValue), o = (h, k, v) => {
      d("click", h, pe("", { item: k, column: v }));
    };
    return F(() => a.modelValue, (h) => u.value = h), F(u, () => d("update:modelValue", u.value)), (h, k) => te((i(), m("tr", Ut, [
      E("td", { colspan: h.hiddenColumnsColSpan }, [
        E("table", null, [
          E("tr", null, [
            (i(!0), m(R, null, W(h.hiddenColumns, (v) => (i(), m("th", {
              "data-column": v.key
            }, [
              E("div", null, j(v.label), 1)
            ], 8, Kt))), 256))
          ]),
          E("tr", { "data-i": h.i }, [
            (i(!0), m(R, null, W(h.hiddenColumns, (v, n) => (i(), m("td", {
              "data-column": v.key,
              title: I(x)(v, u.value, n, h.hiddenColumns),
              onClick: (s) => o(s, u.value, v)
            }, [
              h.$slots[v.key] ? U(h.$slots, v.key, {
                key: 0,
                value: u.value[v.key],
                item: u.value,
                column: v,
                i: n
              }) : (i(), b(Fe, {
                key: 1,
                column: v,
                columns: h.hiddenColumns,
                modelValue: u.value,
                "onUpdate:modelValue": k[0] || (k[0] = (s) => u.value = s),
                i: n
              }, null, 8, ["column", "columns", "modelValue", "i"]))
            ], 8, Wt))), 256))
          ], 8, Pt)
        ])
      ], 8, Ht)
    ], 512)), [
      [le, h.hiddenIsVisible]
    ]);
  }
}), Re = /* @__PURE__ */ J({
  __name: "CreateButton",
  props: {
    disabled: { type: Boolean, default: !1 },
    text: { default: "" },
    icon: { default: "" },
    to: { default: "" }
  },
  emits: ["click"],
  setup(l, { emit: t }) {
    const d = t, a = l, u = f(() => O.createButtonSlot !== ""), o = f(() => O.createButtonSlot), h = f(() => a.text.startsWith("__:") ? q(a.text.substring(3)) : a.text);
    return (k, v) => {
      const n = L("lkt-button");
      return i(), b(n, {
        palette: "table-create",
        disabled: k.disabled,
        icon: u.value ? "" : k.icon,
        text: u.value ? "" : h.value,
        "on-click-to": k.to,
        onClick: v[0] || (v[0] = (s) => d("click"))
      }, {
        default: A(() => [
          u.value ? (i(), b(X(o.value), { key: 0 })) : y("", !0)
        ]),
        _: 1
      }, 8, ["disabled", "icon", "text", "on-click-to"]);
    };
  }
}), jt = ["data-column", "data-sortable", "data-sort", "colspan", "title"], qt = /* @__PURE__ */ J({
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
    const d = t, a = l, u = f(() => St(a.column, a.amountOfColumns, a.items)), o = f(() => a.column.sortable === !0), h = f(() => o.value && a.sortBy === a.column.key ? a.sortDirection : ""), k = f(() => a.column.label.startsWith("__:") ? q(a.column.label.substring(3)) : a.column.label), v = () => {
      d("click", a.column);
    };
    return (n, s) => (i(), m("th", {
      "data-column": n.column.key,
      "data-sortable": o.value,
      "data-sort": h.value,
      colspan: u.value,
      title: k.value,
      onClick: v
    }, [
      E("div", null, j(k.value), 1)
    ], 8, jt));
  }
}), Jt = ["id"], Gt = { key: 0 }, zt = { class: "lkt-table-page-buttons" }, Qt = { key: 1 }, Xt = { class: "switch-edition-mode" }, Yt = {
  key: 0,
  class: "lkt-table-page-buttons"
}, Zt = {
  key: 1,
  class: "lkt-table-page-filters"
}, xt = ["data-sortable"], el = { key: 0 }, tl = {
  key: 0,
  "data-role": "drag-indicator"
}, ll = { key: 1 }, ol = { key: 2 }, al = {
  key: 3,
  class: "lkt-table-col-drop"
}, nl = {
  key: 4,
  class: "lkt-table-col-edit"
}, ul = ["id"], il = { class: "lkt-table-item" }, sl = {
  key: 3,
  class: "lkt-empty-table"
}, rl = {
  key: 4,
  class: "lkt-table-page-empty"
}, dl = {
  key: 5,
  class: "lkt-table-page-buttons lkt-table-page-buttons-bottom"
}, cl = /* @__PURE__ */ J({
  __name: "LktTable",
  props: {
    modelValue: { default: () => [] },
    columns: { default: () => [] },
    sorter: { type: Function, default: Me },
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
    titleIcon: { default: "h2" },
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
  emits: ["update:modelValue", "sort", "click", "save", "error", "before-save", "read-response"],
  setup(l, { expose: t, emit: d }) {
    const a = d, u = st(), o = l, h = {}, k = C(typeof o.sorter == "function" ? o.sorter : Me), v = C(Dt(o.columns)), n = C("asc"), s = C(o.modelValue), _ = C(h), G = C(null), $ = C(o.columns), Y = C(o.page), r = C(!1), M = C(!1), p = C(o.perms), w = C(null), ee = C({}), Z = C(new mt({ items: s.value }, o.dataStateConfig)), D = C(o.editMode), Oe = (e) => {
      Array.isArray(e) && (s.value = e), r.value = !1, M.value = !0, Z.value.store({ items: s.value }).turnStoredIntoOriginal();
    }, Ne = (e) => {
      p.value = e;
    }, Ue = (e) => {
    }, He = (e) => {
      a("read-response", e);
    }, Ke = () => fe(() => r.value = !0), Pe = () => {
      w.value.doRefresh();
    }, ne = ct(12), se = f(() => {
      if (!o.hideEmptyColumns) return [];
      let e = [];
      return $.value.forEach((c) => {
        let g = c.key, T = !1;
        s.value.forEach((S) => {
          if (typeof S.checkEmpty == "function")
            return S.checkEmpty(S);
          S[g] && (T = !0);
        }), T || e.push(g);
      }), e;
    }), ue = f(() => $.value.filter((e) => !e.hidden)), re = f(() => $.value.filter((e) => e.hidden)), We = f(() => {
      let e = ue.value.length + 1;
      return o.sortable && ++e, e;
    }), _e = f(() => $.value.filter((e) => e.isForRowKey)), he = f(() => re.value.length > 0 && !o.sortable), je = f(() => $.value.map((e) => e.key)), ke = f(() => {
      let e = [];
      for (let c in u) je.value.indexOf(c) !== -1 && e.push(c);
      return e;
    }), ye = f(() => o.hiddenSave || r.value || !o.saveResource ? !1 : D.value && Z.value.changed() ? !0 : D.value), qe = f(() => o.switchEditionEnabled ? !0 : ye.value || D.value && o.canCreate), Je = f(() => o.saveDisabled || typeof o.saveValidator == "function" && !o.saveValidator(s.value) ? !1 : Z.value.changed()), Ge = f(() => s.value.length), ze = f(() => ({
      items: s.value,
      ...o.saveResourceData
    })), Qe = f(() => o.titleTag === "" ? "h2" : o.titleTag), Xe = f(() => o.wrapContentTag === "" ? "div" : o.wrapContentTag), de = f(() => o.title.startsWith("__:") ? q(o.title.substring(3)) : o.title), Ye = f(() => o.saveText.startsWith("__:") ? q(o.saveText.substring(3)) : o.saveText), Ze = f(() => o.editModeText.startsWith("__:") ? q(o.editModeText.substring(3)) : o.editModeText), ie = f(() => p.value.includes("create")), xe = f(() => p.value.includes("read")), ce = f(() => p.value.includes("update")), me = f(() => p.value.includes("drop")), et = (e) => {
      let c = e.target;
      if (typeof c.dataset.column > "u")
        do
          c = c.parentNode;
        while (typeof c.dataset.column > "u" && c.tagName !== "TABLE" && c.tagName !== "body");
      if (c.tagName === "TD" && (c = c.parentNode, c = c.dataset.i, typeof c < "u"))
        return s.value[c];
    }, be = (e) => _.value["tr_" + e] === !0, ge = (e) => {
      e && e.sortable && (s.value = s.value.sort((c, g) => k.value(c, g, e, n.value)), n.value = n.value === "asc" ? "desc" : "asc", v.value = e.key, a("sort", [v.value, n.value]));
    }, Ce = (e, c) => {
      a("click", e, c);
    }, Se = (e, c) => {
      let g = "tr_" + c.value.i;
      _.value[g] = typeof _.value[g] > "u" ? !0 : !_.value[g];
    }, Ve = () => {
      $.value.forEach((e) => {
        if (e.type === "select" && e.autoLoadSelectOptions) {
          let c = e.autoLoadSelectOptionsKey !== "" ? e.autoLoadSelectOptionsKey : e.key, g = [];
          s.value.forEach((S) => {
            Array.isArray(S[c]) && S[c].forEach((N) => g.push(N));
          });
          let T = {};
          g = g.filter(function(S) {
            return T[S.value] ? !1 : (T[S.value] = !0, !0);
          }), e.setOptions(g);
        }
      });
    }, tt = (e) => typeof o.checkValidDrag == "function" ? o.checkValidDrag(e) : !0, De = (e) => typeof o.draggableChecker == "function" ? o.draggableChecker(e) : !0, Te = () => {
      if (typeof o.newValueGenerator == "function") {
        let e = o.newValueGenerator();
        if (typeof e == "object") {
          s.value.push(e);
          return;
        }
      }
      s.value.push({});
    }, lt = () => {
      r.value = !0;
    }, ot = () => {
      r.value = !1;
    }, at = (e, c) => {
      if (a("before-save"), o.saveResource && (r.value = !1, !c.success)) {
        a("error", c.httpStatus);
        return;
      }
      Z.value.turnStoredIntoOriginal(), a("save", c);
    }, Be = (e, c, g) => {
      if (g >= e.length) {
        let T = g - e.length + 1;
        for (; T--; ) e.push(void 0);
      }
      return e.splice(g, 0, e.splice(c, 1)[0]), e;
    }, nt = (e) => {
      Be(s.value, e, e - 1);
    }, ut = (e) => {
      Be(s.value, e, e + 1);
    }, we = (e) => {
      s.value.splice(e, 1);
    }, it = () => {
      let e = document.getElementById("lkt-table-body-" + ne);
      ee.value = new ft(e, {
        direction: "vertical",
        handle: ".handle",
        animation: 150,
        onEnd: function(c) {
          let g = c.oldIndex, T = c.newIndex, S = JSON.parse(JSON.stringify(s.value));
          s.value.splice(g, 1, S[T]), s.value.splice(T, 1, S[g]);
        },
        onMove: function(c, g) {
          return tt(c);
        }
      });
    }, Ee = (e, c, g = !1) => {
      let T = [ne, "row", c];
      return g && T.push("hidden"), _e.value.forEach((S) => {
        let N = String(e[S.key]).toLowerCase();
        N.length > 50 && (N = N.substring(0, 50)), N = Ae(N, " ", "-"), T.push(N);
      }), T.join("-");
    }, Ie = f(() => typeof o.createEnabledValidator == "function" ? o.createEnabledValidator({ items: s.value }) : !0);
    return rt(() => {
      Ve(), ge(Tt(o.columns, v.value)), Z.value.store({ items: s.value }).turnStoredIntoOriginal(), o.sortable && fe(() => {
        it();
      });
    }), F(() => o.editMode, (e) => D.value = e), F(() => o.columns, (e) => $.value = e), F(() => o.modelValue, (e) => s.value = e), F(s, (e) => {
      Ve(), Z.value.increment({ items: e }), a("update:modelValue", e);
    }, { deep: !0 }), t({
      getItemByEvent: et,
      doRefresh: Pe
    }), (e, c) => {
      const g = L("lkt-button"), T = L("lkt-field-switch"), S = L("lkt-loader"), N = L("lkt-paginator");
      return i(), m("section", {
        class: "lkt-table-page",
        id: "lkt-table-page-" + I(ne)
      }, [
        de.value || I(u).title ? (i(), m("header", Gt, [
          de.value ? (i(), b(X(Qe.value), { key: 0 }, {
            default: A(() => [
              e.titleIcon ? (i(), m("i", {
                key: 0,
                class: oe(e.titleIcon)
              }, null, 2)) : y("", !0),
              ae(" " + j(de.value), 1)
            ]),
            _: 1
          })) : y("", !0),
          I(u).title ? U(e.$slots, "title", { key: 1 }) : y("", !0)
        ])) : y("", !0),
        (i(), b(X(Xe.value), {
          class: oe(["lkt-table-page-content-wrapper", e.wrapContentClass])
        }, {
          default: A(() => [
            te(E("div", zt, [
              te(Q(g, {
                ref: "saveButton",
                palette: "success",
                disabled: !Je.value,
                "confirm-modal": e.saveConfirm,
                "confirm-data": e.confirmData,
                resource: e.saveResource,
                "resource-data": ze.value,
                onLoading: lt,
                onLoaded: ot,
                onClick: at
              }, {
                default: A(() => [
                  I(u)["button-save"] ? U(e.$slots, "button-save", {
                    key: 0,
                    items: s.value,
                    editMode: e.editMode,
                    canUpdate: !e.saveDisabled
                  }) : (i(), m("span", Qt, j(Ye.value), 1))
                ]),
                _: 3
              }, 8, ["disabled", "confirm-modal", "confirm-data", "resource", "resource-data"]), [
                [le, ye.value]
              ]),
              e.canCreate && ie.value && D.value && s.value.length >= e.requiredItemsForTopCreate ? (i(), b(Re, {
                key: 0,
                disabled: !Ie.value,
                text: e.createText,
                icon: e.createIcon,
                to: e.createRoute,
                onClick: Te
              }, null, 8, ["disabled", "text", "icon", "to"])) : y("", !0),
              E("div", Xt, [
                te(Q(T, {
                  modelValue: D.value,
                  "onUpdate:modelValue": c[0] || (c[0] = (V) => D.value = V),
                  label: Ze.value
                }, null, 8, ["modelValue", "label"]), [
                  [le, e.switchEditionEnabled]
                ])
              ])
            ], 512), [
              [le, qe.value]
            ]),
            I(u).buttons ? (i(), m("div", Yt, [
              U(e.$slots, "buttons")
            ])) : y("", !0),
            M.value && I(u).filters ? (i(), m("div", Zt, [
              U(e.$slots, "filters", {
                items: s.value,
                isLoading: r.value
              })
            ])) : y("", !0),
            r.value ? (i(), b(S, { key: 2 })) : y("", !0),
            te(E("div", {
              class: "lkt-table",
              "data-sortable": e.sortable
            }, [
              e.itemMode ? (i(), m("div", {
                key: 1,
                class: oe(["lkt-table-items-container", e.itemsContainerClass])
              }, [
                (i(!0), m(R, null, W(s.value, (V, B) => (i(), m("div", il, [
                  U(e.$slots, "item", {
                    item: V,
                    index: B,
                    canCreate: ie.value,
                    canRead: xe.value,
                    canUpdate: ce.value,
                    canDrop: me.value,
                    isLoading: r.value,
                    doDrop: () => we(B)
                  })
                ]))), 256))
              ], 2)) : (i(), m("table", el, [
                E("thead", null, [
                  E("tr", null, [
                    e.sortable && D.value ? (i(), m("th", tl)) : y("", !0),
                    e.addNavigation && D.value ? (i(), m("th", ll)) : y("", !0),
                    he.value ? (i(), m("th", ol)) : y("", !0),
                    (i(!0), m(R, null, W(ue.value, (V) => (i(), m(R, null, [
                      se.value.indexOf(V.key) === -1 ? (i(), b(qt, {
                        key: 0,
                        column: V,
                        "sort-by": v.value,
                        "sort-direction": n.value,
                        "amount-of-columns": e.columns.length,
                        items: s.value,
                        onClick: (B) => ge(V)
                      }, null, 8, ["column", "sort-by", "sort-direction", "amount-of-columns", "items", "onClick"])) : y("", !0)
                    ], 64))), 256)),
                    e.canDrop && me.value && D.value ? (i(), m("th", al)) : y("", !0),
                    ce.value && D.value ? (i(), m("th", nl)) : y("", !0)
                  ])
                ]),
                E("tbody", {
                  ref: (V) => G.value = V,
                  id: "lkt-table-body-" + I(ne)
                }, [
                  (i(!0), m(R, null, W(s.value, (V, B) => (i(), b(Nt, {
                    modelValue: s.value[B],
                    "onUpdate:modelValue": (P) => s.value[B] = P,
                    key: Ee(V, B),
                    i: B,
                    "display-hidden-columns-indicator": he.value,
                    "is-draggable": De(V),
                    sortable: e.sortable,
                    "visible-columns": ue.value,
                    "empty-columns": se.value,
                    "add-navigation": e.addNavigation,
                    "hidden-is-visible": be(B),
                    "latest-row": B + 1 === Ge.value,
                    "can-drop": e.canDrop && me.value && D.value,
                    "drop-confirm": e.dropConfirm,
                    "drop-resource": e.dropResource,
                    "drop-text": e.dropText,
                    "drop-icon": e.dropIcon,
                    "can-edit": ce.value && D.value,
                    "edit-text": e.editText,
                    "edit-icon": e.editIcon,
                    "edit-link": e.editLink,
                    "edit-mode-enabled": D.value,
                    onClick: Ce,
                    onShow: Se,
                    onItemUp: nt,
                    onItemDown: ut,
                    onItemDrop: we
                  }, Le({ _: 2 }, [
                    W(ke.value, (P) => ({
                      name: P,
                      fn: A((z) => [
                        U(e.$slots, P, {
                          item: z.item,
                          value: z.value,
                          column: z.column
                        })
                      ])
                    }))
                  ]), 1032, ["modelValue", "onUpdate:modelValue", "i", "display-hidden-columns-indicator", "is-draggable", "sortable", "visible-columns", "empty-columns", "add-navigation", "hidden-is-visible", "latest-row", "can-drop", "drop-confirm", "drop-resource", "drop-text", "drop-icon", "can-edit", "edit-text", "edit-icon", "edit-link", "edit-mode-enabled"]))), 128)),
                  re.value.length > 0 ? (i(!0), m(R, { key: 0 }, W(s.value, (V, B) => (i(), b(_t, {
                    modelValue: s.value[B],
                    "onUpdate:modelValue": (P) => s.value[B] = P,
                    key: Ee(V, B, !0),
                    i: B,
                    "hidden-columns": re.value,
                    "hidden-columns-col-span": We.value,
                    "is-draggable": De(V),
                    sortable: e.sortable,
                    "visible-columns": ue.value,
                    "empty-columns": se.value,
                    "hidden-is-visible": be(B),
                    onClick: Ce,
                    onShow: Se
                  }, Le({ _: 2 }, [
                    W(ke.value, (P) => ({
                      name: P,
                      fn: A((z) => [
                        U(e.$slots, P, {
                          item: z.item,
                          value: z.value,
                          column: z.column
                        })
                      ])
                    }))
                  ]), 1032, ["modelValue", "onUpdate:modelValue", "i", "hidden-columns", "hidden-columns-col-span", "is-draggable", "sortable", "visible-columns", "empty-columns", "hidden-is-visible"]))), 128)) : y("", !0)
                ], 8, ul)
              ]))
            ], 8, xt), [
              [le, !r.value && s.value.length > 0]
            ]),
            e.$slots["no-items"] ? (i(), m("div", sl, [
              U(e.$slots, "no-items")
            ])) : y("", !0),
            !r.value && s.value.length === 0 ? (i(), m("div", rl, j(e.noResultsText), 1)) : y("", !0),
            e.canCreate && ie.value && D.value ? (i(), m("div", dl, [
              e.canCreate && ie.value && D.value && s.value.length >= e.requiredItemsForBottomCreate ? (i(), b(Re, {
                key: 0,
                disabled: !Ie.value,
                text: e.createText,
                icon: e.createIcon,
                to: e.createRoute,
                onClick: Te
              }, null, 8, ["disabled", "text", "icon", "to"])) : y("", !0)
            ])) : y("", !0),
            Q(N, {
              ref_key: "paginator",
              ref: w,
              modelValue: Y.value,
              "onUpdate:modelValue": c[1] || (c[1] = (V) => Y.value = V),
              resource: e.resource,
              filters: e.filters,
              onResults: Oe,
              onLoading: Ke,
              onPerms: Ne,
              onCustom: Ue,
              onResponse: He
            }, null, 8, ["modelValue", "resource", "filters"])
          ]),
          _: 3
        }, 8, ["class"]))
      ], 8, Jt);
    };
  }
}), Nl = {
  install: (l) => {
    l.component("lkt-loader") === void 0 && l.use(pt), l.component("lkt-button") === void 0 && l.use(vt), l.component("lkt-paginator") === void 0 && l.use(ht), l.component("lkt-field-text") === void 0 && l.use(kt), l.component("lkt-field-textarea") === void 0 && l.use(yt), l.component("lkt-field-select") === void 0 && l.use(bt), l.component("lkt-field-switch") === void 0 && l.use(gt), l.component("lkt-field-file") === void 0 && l.use(Ct), l.component("lkt-table") === void 0 && l.component("lkt-table", cl);
  }
}, Ul = (l) => (O.navButtonSlot = l, !0), Hl = (l) => (O.dropButtonSlot = l, !0), Kl = (l) => (O.createButtonSlot = l, !0);
export {
  K as LktTableColumn,
  Il as createActionColumn,
  $l as createCheckColumn,
  wl as createColumn,
  Ml as createEmailColumn,
  Ol as createHiddenColumn,
  El as createLinkColumn,
  Fl as createSelectColumn,
  Al as createSwitchColumn,
  Rl as createTelColumn,
  Ll as createTextColumn,
  Nl as default,
  Kl as setTableCreateButtonSlot,
  Hl as setTableDropButtonSlot,
  Ul as setTableNavButtonSlot
};
