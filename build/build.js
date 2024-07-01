import { reactive as H, defineComponent as G, ref as C, watch as U, nextTick as de, computed as f, resolveComponent as $, openBlock as s, createBlock as b, withCtx as F, createTextVNode as le, toDisplayString as j, unref as I, createElementBlock as m, Fragment as A, withModifiers as at, resolveDynamicComponent as Z, createCommentVNode as y, normalizeClass as te, createElementVNode as E, createVNode as X, renderList as P, renderSlot as N, withDirectives as x, vShow as ee, useSlots as nt, onMounted as st, createSlots as Be } from "vue";
import { httpCall as ut } from "lkt-http-client";
import { __ as q } from "lkt-i18n";
import { createLktEvent as ce } from "lkt-events";
import { generateRandomString as it, replaceAll as rt } from "lkt-string-tools";
import { DataState as dt } from "lkt-data-state";
import ct from "sortablejs";
import mt from "lkt-loader";
import ft from "lkt-button";
import pt from "lkt-paginator";
import vt from "lkt-field-text";
import ht from "lkt-field-textarea";
import yt from "lkt-field-select";
import kt from "lkt-field-switch";
import bt from "lkt-field-file";
class K {
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
      const t = await ut(this.resource, this.resourceData);
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
const Sl = (l, t, r = !0) => H(new K(l, t).setIsSortable(r)), Vl = (l, t, r, n = !0) => H(new K(l, t).setIsSortable(n).defineAsLink(r)), Dl = (l, t, r, n = !0) => H(new K(l, t).setIsSortable(n).defineAsAction(r)), wl = (l, t, r = !0) => H(new K(l, t).setIsSortable(r).defineAsText()), Tl = (l, t, r = !0) => H(new K(l, t).setIsSortable(r).defineAsEmail()), Bl = (l, t, r = !0) => H(new K(l, t).setIsSortable(r).defineAsTel()), El = (l, t, r = !0) => H(new K(l, t).setIsSortable(r).defineAsCheck()), Il = (l, t, r = !0) => H(new K(l, t).setIsSortable(r).defineAsSwitch()), Ll = (l, t, r, n = !0) => H(new K(l, t).setIsSortable(n).defineAsSelect(r)), Ml = (l, t, r = !0) => H(new K(l, t).setIsSortable(r).setIsHidden(!0)), Ee = (l, t, r, n) => {
  if (!r) return 0;
  let u = l[r.key], o = t[r.key];
  if (n === "asc") {
    if (u > o) return 1;
    if (o > u) return -1;
  } else {
    if (u > o) return -1;
    if (o > u) return 1;
  }
  return 0;
}, Y = (l, t, r, n = []) => {
  if (l.extractTitleFromColumn) {
    let u = n.find((o) => o.key === l.extractTitleFromColumn);
    if (u)
      return Y(u, t, r, n);
  }
  if (l.formatter && typeof l.formatter == "function") {
    let u = l.formatter(t[l.key], t, l, r);
    return u.startsWith("__:") ? q(u.substring(3)) : u;
  }
  return t[l.key];
}, gt = (l, t, r) => {
  if (!l.colspan) return -1;
  let n = t;
  return r.forEach((u) => {
    let o = me(l, u);
    o > 0 && o < n && (n = o);
  }), n;
}, me = (l, t) => l.colspan === !1 ? !1 : typeof l.colspan == "function" ? l.colspan(t) : l.colspan, Ct = (l, t, r) => {
  if (typeof l != "object" || !l.key || t.indexOf(l.key) > -1) return !1;
  let n = me(l, r);
  return typeof l.colspan > "u" ? !0 : (typeof l.colspan < "u" && (typeof l.colspan == "function" ? n = parseInt(l.colspan()) : n = parseInt(l.colspan)), n > 0);
}, St = (l = []) => {
  if (l.length > 0) {
    for (let t = 0; t < l.length; ++t)
      if (l[t].sortable) return l[t].key;
  }
  return "";
}, Vt = (l, t) => {
  if (l.length > 0) {
    for (let r = 0; r < l.length; ++r)
      if (l[r].key === t) return l[r];
  }
  return null;
}, Le = /* @__PURE__ */ G({
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
    const r = t, n = l, u = C(n.modelValue), o = C(u.value[n.column.key]), h = C(null), g = C(n.column.showLoading());
    U(o, (a) => {
      const i = JSON.parse(JSON.stringify(u.value));
      i[n.column.key] = a, r("update:modelValue", i);
    }), U(() => n.modelValue, (a) => {
      u.value = a, o.value = u.value[n.column.key];
    }), U(() => n.column, () => {
      n.column.resourceLoaded && de(() => g.value = !1);
    }, { deep: !0 }), n.column.hasToLoadResource() && n.column.loadResource();
    const v = f(() => ({ ...n.column.slotData, item: u.value }));
    return (a, i) => {
      const W = $("lkt-anchor"), J = $("lkt-field-text"), d = $("lkt-field-switch"), L = $("lkt-field-file"), S = $("lkt-loader"), V = $("lkt-field-select");
      return a.column.type === "link" ? (s(), b(W, {
        key: 0,
        to: a.column.getHref(u.value)
      }, {
        default: F(() => [
          le(j(I(Y)(a.column, u.value, a.i)), 1)
        ]),
        _: 1
      }, 8, ["to"])) : a.column.type === "action" ? (s(), m("a", {
        key: 1,
        href: "#",
        onClick: i[0] || (i[0] = (p) => a.column.doAction(u.value))
      }, j(I(Y)(a.column, u.value, a.i)), 1)) : a.column.type === "text" ? (s(), b(J, {
        key: 2,
        "read-mode": !a.column.editable || !a.editModeEnabled,
        ref: (p) => h.value = p,
        "edit-slot": a.column.editSlot,
        "value-slot": a.column.valueSlot,
        "slot-data": v.value,
        modelValue: o.value,
        "onUpdate:modelValue": i[1] || (i[1] = (p) => o.value = p)
      }, null, 8, ["read-mode", "edit-slot", "value-slot", "slot-data", "modelValue"])) : a.column.type === "email" ? (s(), b(J, {
        key: 3,
        "read-mode": !a.column.editable || !a.editModeEnabled,
        ref: (p) => h.value = p,
        "edit-slot": a.column.editSlot,
        "value-slot": a.column.valueSlot,
        "slot-data": v.value,
        "is-email": "",
        modelValue: o.value,
        "onUpdate:modelValue": i[2] || (i[2] = (p) => o.value = p)
      }, null, 8, ["read-mode", "edit-slot", "value-slot", "slot-data", "modelValue"])) : a.column.type === "tel" ? (s(), b(J, {
        key: 4,
        "read-mode": !a.column.editable || !a.editModeEnabled,
        ref: (p) => h.value = p,
        "edit-slot": a.column.editSlot,
        "value-slot": a.column.valueSlot,
        "slot-data": v.value,
        "is-tel": "",
        modelValue: o.value,
        "onUpdate:modelValue": i[3] || (i[3] = (p) => o.value = p)
      }, null, 8, ["read-mode", "edit-slot", "value-slot", "slot-data", "modelValue"])) : a.column.type === "check" ? (s(), b(d, {
        key: 5,
        "is-check": "",
        "read-mode": !a.column.editable || !a.editModeEnabled,
        ref: (p) => h.value = p,
        modelValue: o.value,
        "onUpdate:modelValue": i[4] || (i[4] = (p) => o.value = p)
      }, null, 8, ["read-mode", "modelValue"])) : a.column.type === "switch" ? (s(), b(d, {
        key: 6,
        "read-mode": !a.column.editable || !a.editModeEnabled,
        ref: (p) => h.value = p,
        modelValue: o.value,
        "onUpdate:modelValue": i[5] || (i[5] = (p) => o.value = p)
      }, null, 8, ["read-mode", "modelValue"])) : a.column.type === "file" ? (s(), b(L, {
        key: 7,
        "read-mode": !a.column.editable || !a.editModeEnabled,
        ref: (p) => h.value = p,
        modelValue: o.value,
        "onUpdate:modelValue": i[6] || (i[6] = (p) => o.value = p)
      }, null, 8, ["read-mode", "modelValue"])) : a.column.type === "select" ? (s(), m(A, { key: 8 }, [
        g.value ? (s(), b(S, { key: 0 })) : (s(), b(V, {
          key: 1,
          "read-mode": !a.column.editable || !a.editModeEnabled,
          ref: (p) => h.value = p,
          modelValue: o.value,
          "onUpdate:modelValue": i[7] || (i[7] = (p) => o.value = p),
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
      ], 64)) : (s(), m(A, { key: 9 }, [
        le(j(I(Y)(a.column, u.value, a.i, a.columns)), 1)
      ], 64));
    };
  }
}), R = {
  navButtonSlot: "",
  dropButtonSlot: "",
  createButtonSlot: ""
}, Dt = /* @__PURE__ */ G({
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
    const r = t, n = l, u = f(() => R.dropButtonSlot !== ""), o = f(() => R.dropButtonSlot), h = f(() => n.text.startsWith("__:") ? q(n.text.substring(3)) : n.text);
    return (g, v) => {
      const a = $("lkt-button");
      return s(), b(a, {
        palette: "table-delete",
        icon: u.value ? "" : g.icon,
        text: u.value ? "" : h.value,
        resource: g.resource,
        "resource-data": g.resourceData,
        "confirm-modal": g.confirm,
        disabled: g.disabled,
        onClick: v[0] || (v[0] = at((i) => r("click"), ["prevent", "stop"]))
      }, {
        default: F(() => [
          u.value ? (s(), b(Z(o.value), { key: 0 })) : y("", !0)
        ]),
        _: 1
      }, 8, ["icon", "text", "resource", "resource-data", "confirm-modal", "disabled"]);
    };
  }
}), wt = ["data-i", "data-draggable"], Tt = {
  key: 1,
  "data-role": "invalid-drag-indicator"
}, Bt = {
  key: 2,
  class: "lkt-table-nav-cell"
}, Et = { class: "lkt-table-nav-container" }, It = /* @__PURE__ */ E("i", { class: "" }, null, -1), Lt = /* @__PURE__ */ E("i", { class: "" }, null, -1), Mt = ["data-column", "colspan", "title", "onClick"], $t = {
  key: 4,
  class: "lkt-table-col-drop"
}, At = /* @__PURE__ */ G({
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
    dropIcon: { default: "" },
    dropResource: { default: "" }
  },
  emits: ["update:modelValue", "click", "show", "item-up", "item-down", "item-drop"],
  setup(l, { emit: t }) {
    const r = t, n = l, u = C(n.modelValue), o = (d, L, S) => {
      r("click", d, ce("", { item: L, column: S }));
    }, h = (d, L) => {
      r("show", d, ce("", { i: L }));
    }, g = f(() => {
      let d = [];
      return n.sortable && n.isDraggable && d.push("handle"), d.join(" ");
    }), v = f(() => R.navButtonSlot !== ""), a = f(() => R.navButtonSlot);
    f(() => R.dropButtonSlot !== ""), f(() => R.dropButtonSlot);
    const i = () => {
      r("item-up", n.i);
    }, W = () => {
      r("item-down", n.i);
    }, J = () => {
      r("item-drop", n.i);
    };
    return U(() => n.modelValue, (d) => u.value = d), U(u, (d) => {
      r("update:modelValue", d, n.i);
    }, { deep: !0 }), (d, L) => {
      const S = $("lkt-button");
      return s(), m("tr", {
        "data-i": d.i,
        "data-draggable": d.isDraggable
      }, [
        d.sortable && d.isDraggable && d.editModeEnabled ? (s(), m("td", {
          key: 0,
          "data-role": "drag-indicator",
          class: te(g.value)
        }, null, 2)) : d.sortable && d.editModeEnabled ? (s(), m("td", Tt)) : y("", !0),
        d.addNavigation && d.editModeEnabled ? (s(), m("td", Bt, [
          E("div", Et, [
            X(S, {
              palette: "table-nav",
              disabled: d.i === 0,
              onClick: i
            }, {
              default: F(() => [
                v.value ? (s(), b(Z(a.value), {
                  key: 0,
                  direction: "up"
                })) : (s(), m(A, { key: 1 }, [
                  It,
                  le(" UP ")
                ], 64))
              ]),
              _: 1
            }, 8, ["disabled"]),
            X(S, {
              palette: "table-nav",
              disabled: d.latestRow,
              onClick: W
            }, {
              default: F(() => [
                v.value ? (s(), b(Z(a.value), {
                  key: 0,
                  direction: "down"
                })) : (s(), m(A, { key: 1 }, [
                  Lt,
                  le(" DOWN ")
                ], 64))
              ]),
              _: 1
            }, 8, ["disabled"])
          ])
        ])) : y("", !0),
        d.displayHiddenColumnsIndicator ? (s(), m("td", {
          key: 3,
          onClick: L[0] || (L[0] = (V) => h(V, d.i)),
          "data-role": "show-more",
          class: te(d.hiddenIsVisible ? "state-open" : "")
        }, null, 2)) : y("", !0),
        (s(!0), m(A, null, P(d.visibleColumns, (V) => (s(), m(A, null, [
          I(Ct)(V, d.emptyColumns, u.value) ? (s(), m("td", {
            key: 0,
            "data-column": V.key,
            colspan: I(me)(V, u.value),
            title: I(Y)(V, u.value, d.i, d.visibleColumns),
            onClick: (p) => o(p, u.value, V)
          }, [
            d.$slots[V.key] ? N(d.$slots, V.key, {
              key: 0,
              value: u.value[V.key],
              item: u.value,
              column: V,
              i: d.i
            }) : u.value ? (s(), b(Le, {
              key: 1,
              modelValue: u.value,
              "onUpdate:modelValue": L[1] || (L[1] = (p) => u.value = p),
              column: V,
              columns: d.visibleColumns,
              "edit-mode-enabled": d.editModeEnabled,
              i: d.i
            }, null, 8, ["modelValue", "column", "columns", "edit-mode-enabled", "i"])) : y("", !0)
          ], 8, Mt)) : y("", !0)
        ], 64))), 256)),
        d.canDrop && d.editModeEnabled ? (s(), m("td", $t, [
          X(Dt, {
            resource: d.dropResource,
            "resource-data": u.value,
            confirm: d.dropConfirm,
            text: d.dropText,
            icon: d.dropIcon,
            onClick: J
          }, null, 8, ["resource", "resource-data", "confirm", "text", "icon"])
        ])) : y("", !0)
      ], 8, wt);
    };
  }
}), Rt = { "data-role": "hidden-row" }, Ot = ["colspan"], Nt = ["data-column"], Ft = ["data-i"], Ut = ["data-column", "title", "onClick"], Ht = /* @__PURE__ */ G({
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
    const r = t, n = l, u = C(n.modelValue), o = (h, g, v) => {
      r("click", h, ce("", { item: g, column: v }));
    };
    return U(() => n.modelValue, (h) => u.value = h), U(u, () => r("update:modelValue", u.value)), (h, g) => x((s(), m("tr", Rt, [
      E("td", { colspan: h.hiddenColumnsColSpan }, [
        E("table", null, [
          E("tr", null, [
            (s(!0), m(A, null, P(h.hiddenColumns, (v) => (s(), m("th", {
              "data-column": v.key
            }, [
              E("div", null, j(v.label), 1)
            ], 8, Nt))), 256))
          ]),
          E("tr", { "data-i": h.i }, [
            (s(!0), m(A, null, P(h.hiddenColumns, (v, a) => (s(), m("td", {
              "data-column": v.key,
              title: I(Y)(v, u.value, a, h.hiddenColumns),
              onClick: (i) => o(i, u.value, v)
            }, [
              h.$slots[v.key] ? N(h.$slots, v.key, {
                key: 0,
                value: u.value[v.key],
                item: u.value,
                column: v,
                i: a
              }) : (s(), b(Le, {
                key: 1,
                column: v,
                columns: h.hiddenColumns,
                modelValue: u.value,
                "onUpdate:modelValue": g[0] || (g[0] = (i) => u.value = i),
                i: a
              }, null, 8, ["column", "columns", "modelValue", "i"]))
            ], 8, Ut))), 256))
          ], 8, Ft)
        ])
      ], 8, Ot)
    ], 512)), [
      [ee, h.hiddenIsVisible]
    ]);
  }
}), Ie = /* @__PURE__ */ G({
  __name: "CreateButton",
  props: {
    disabled: { type: Boolean, default: !1 },
    text: { default: "" },
    icon: { default: "" }
  },
  emits: ["click"],
  setup(l, { emit: t }) {
    const r = t, n = l, u = f(() => R.createButtonSlot !== ""), o = f(() => R.createButtonSlot), h = f(() => n.text.startsWith("__:") ? q(n.text.substring(3)) : n.text);
    return (g, v) => {
      const a = $("lkt-button");
      return s(), b(a, {
        palette: "table-create",
        disabled: g.disabled,
        icon: u.value ? "" : g.icon,
        text: u.value ? "" : h.value,
        onClick: v[0] || (v[0] = (i) => r("click"))
      }, {
        default: F(() => [
          u.value ? (s(), b(Z(o.value), { key: 0 })) : y("", !0)
        ]),
        _: 1
      }, 8, ["disabled", "icon", "text"]);
    };
  }
}), Kt = ["data-column", "data-sortable", "data-sort", "colspan", "title"], _t = /* @__PURE__ */ G({
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
    const r = t, n = l, u = f(() => gt(n.column, n.amountOfColumns, n.items)), o = f(() => n.column.sortable === !0), h = f(() => o.value && n.sortBy === n.column.key ? n.sortDirection : ""), g = f(() => n.column.label.startsWith("__:") ? q(n.column.label.substring(3)) : n.column.label), v = () => {
      r("click", n.column);
    };
    return (a, i) => (s(), m("th", {
      "data-column": a.column.key,
      "data-sortable": o.value,
      "data-sort": h.value,
      colspan: u.value,
      title: g.value,
      onClick: v
    }, [
      E("div", null, j(g.value), 1)
    ], 8, Kt));
  }
}), Pt = ["id"], Wt = { key: 0 }, jt = { class: "lkt-table-page-buttons" }, Jt = { key: 1 }, zt = { class: "switch-edition-mode" }, qt = {
  key: 0,
  class: "lkt-table-page-buttons"
}, Gt = {
  key: 1,
  class: "lkt-table-page-filters"
}, Qt = ["data-sortable"], Xt = { key: 0 }, Yt = {
  key: 0,
  "data-role": "drag-indicator"
}, Zt = { key: 1 }, xt = { key: 2 }, el = {
  key: 3,
  class: "lkt-table-col-drop"
}, tl = ["id"], ll = { class: "lkt-table-item" }, ol = {
  key: 3,
  class: "lkt-empty-table"
}, al = {
  key: 4,
  class: "lkt-table-page-empty"
}, nl = {
  key: 5,
  class: "lkt-table-page-buttons lkt-table-page-buttons-bottom"
}, sl = /* @__PURE__ */ G({
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
    dropText: { default: "Delete" },
    dropIcon: { default: "" },
    editModeText: { default: "Edit mode" },
    switchEditionEnabled: { type: Boolean, default: !1 },
    canCreate: { type: Boolean, default: !1 },
    canDrop: { type: Boolean, default: !1 },
    dropConfirm: { default: "" },
    dropResource: { default: "" },
    addNavigation: { type: Boolean, default: !1 },
    itemMode: { type: Boolean, default: !1 },
    createEnabledValidator: { type: Function, default: void 0 }
  },
  emits: ["update:modelValue", "sort", "click", "save", "error", "before-save"],
  setup(l, { expose: t, emit: r }) {
    const n = r, u = nt(), o = l, h = {}, g = C(typeof o.sorter == "function" ? o.sorter : Ee), v = C(St(o.columns)), a = C("asc"), i = C(o.modelValue), W = C(h), J = C(null), d = C(o.columns), L = C(o.page), S = C(!1), V = C(!1), p = C(o.perms), fe = C(null), Me = C({}), Q = C(new dt({ items: i.value }, o.dataStateConfig)), M = C(o.editMode), $e = (e) => {
      Array.isArray(e) && (i.value = e), S.value = !1, V.value = !0, Q.value.store({ items: i.value }).turnStoredIntoOriginal();
    }, Ae = (e) => {
      p.value = e;
    }, Re = () => de(() => S.value = !0), Oe = () => {
      fe.value.doRefresh();
    }, oe = it(12), se = f(() => {
      if (!o.hideEmptyColumns) return [];
      let e = [];
      return d.value.forEach((c) => {
        let k = c.key, T = !1;
        i.value.forEach((D) => {
          if (typeof D.checkEmpty == "function")
            return D.checkEmpty(D);
          D[k] && (T = !0);
        }), T || e.push(k);
      }), e;
    }), ae = f(() => d.value.filter((e) => !e.hidden)), ue = f(() => d.value.filter((e) => e.hidden)), Ne = f(() => {
      let e = ae.value.length + 1;
      return o.sortable && ++e, e;
    }), Fe = f(() => d.value.filter((e) => e.isForRowKey)), pe = f(() => ue.value.length > 0 && !o.sortable), Ue = f(() => d.value.map((e) => e.key)), ve = f(() => {
      let e = [];
      for (let c in u) Ue.value.indexOf(c) !== -1 && e.push(c);
      return e;
    }), he = f(() => o.hiddenSave || S.value || !o.saveResource ? !1 : M.value && Q.value.changed() ? !0 : M.value), He = f(() => o.switchEditionEnabled ? !0 : he.value || M.value && o.canCreate), Ke = f(() => o.saveDisabled || typeof o.saveValidator == "function" && !o.saveValidator(i.value) ? !1 : Q.value.changed()), _e = f(() => i.value.length), Pe = f(() => ({
      items: i.value,
      ...o.saveResourceData
    })), We = f(() => o.titleTag === "" ? "h2" : o.titleTag), je = f(() => o.wrapContentTag === "" ? "div" : o.wrapContentTag), ie = f(() => o.title.startsWith("__:") ? q(o.title.substring(3)) : o.title), Je = f(() => o.saveText.startsWith("__:") ? q(o.saveText.substring(3)) : o.saveText), ze = f(() => o.editModeText.startsWith("__:") ? q(o.editModeText.substring(3)) : o.editModeText), ne = f(() => p.value.includes("create")), qe = f(() => p.value.includes("read")), Ge = f(() => p.value.includes("update")), re = f(() => p.value.includes("drop")), Qe = (e) => {
      let c = e.target;
      if (typeof c.dataset.column > "u")
        do
          c = c.parentNode;
        while (typeof c.dataset.column > "u" && c.tagName !== "TABLE" && c.tagName !== "body");
      if (c.tagName === "TD" && (c = c.parentNode, c = c.dataset.i, typeof c < "u"))
        return i.value[c];
    }, ye = (e) => W.value["tr_" + e] === !0, ke = (e) => {
      e && e.sortable && (i.value = i.value.sort((c, k) => g.value(c, k, e, a.value)), a.value = a.value === "asc" ? "desc" : "asc", v.value = e.key, n("sort", [v.value, a.value]));
    }, be = (e, c) => {
      n("click", e, c);
    }, ge = (e, c) => {
      let k = "tr_" + c.value.i;
      W.value[k] = typeof W.value[k] > "u" ? !0 : !W.value[k];
    }, Ce = () => {
      d.value.forEach((e) => {
        if (e.type === "select" && e.autoLoadSelectOptions) {
          let c = e.autoLoadSelectOptionsKey !== "" ? e.autoLoadSelectOptionsKey : e.key, k = [];
          i.value.forEach((D) => {
            Array.isArray(D[c]) && D[c].forEach((O) => k.push(O));
          });
          let T = {};
          k = k.filter(function(D) {
            return T[D.value] ? !1 : (T[D.value] = !0, !0);
          }), e.setOptions(k);
        }
      });
    }, Xe = (e) => typeof o.checkValidDrag == "function" ? o.checkValidDrag(e) : !0, Se = (e) => typeof o.draggableChecker == "function" ? o.draggableChecker(e) : !0, Ve = () => {
      i.value.push({});
    }, Ye = () => {
      S.value = !0;
    }, Ze = () => {
      S.value = !1;
    }, xe = (e, c) => {
      if (n("before-save"), o.saveResource && (S.value = !1, !c.success)) {
        n("error", c.httpStatus);
        return;
      }
      Q.value.turnStoredIntoOriginal(), n("save", c);
    }, De = (e, c, k) => {
      if (k >= e.length) {
        let T = k - e.length + 1;
        for (; T--; ) e.push(void 0);
      }
      return e.splice(k, 0, e.splice(c, 1)[0]), e;
    }, et = (e) => {
      De(i.value, e, e - 1);
    }, tt = (e) => {
      De(i.value, e, e + 1);
    }, lt = (e) => {
      i.value.splice(e, 1);
    }, ot = () => {
      let e = document.getElementById("lkt-table-body-" + oe);
      Me.value = new ct(e, {
        direction: "vertical",
        handle: ".handle",
        animation: 150,
        onEnd: function(c) {
          let k = c.oldIndex, T = c.newIndex, D = JSON.parse(JSON.stringify(i.value));
          i.value.splice(k, 1, D[T]), i.value.splice(T, 1, D[k]);
        },
        onMove: function(c, k) {
          return Xe(c);
        }
      });
    }, we = (e, c, k = !1) => {
      let T = [oe, "row", c];
      return k && T.push("hidden"), Fe.value.forEach((D) => {
        let O = String(e[D.key]).toLowerCase();
        O.length > 50 && (O = O.substring(0, 50)), O = rt(O, " ", "-"), T.push(O);
      }), T.join("-");
    }, Te = f(() => typeof o.createEnabledValidator == "function" ? o.createEnabledValidator({ items: i.value }) : !0);
    return st(() => {
      Ce(), ke(Vt(o.columns, v.value)), Q.value.store({ items: i.value }).turnStoredIntoOriginal(), o.sortable && de(() => {
        ot();
      });
    }), U(() => o.columns, (e) => d.value = e), U(() => o.modelValue, (e) => i.value = e), U(i, (e) => {
      Ce(), Q.value.increment({ items: e }), n("update:modelValue", e);
    }, { deep: !0 }), t({
      getItemByEvent: Qe,
      doRefresh: Oe
    }), (e, c) => {
      const k = $("lkt-button"), T = $("lkt-field-switch"), D = $("lkt-loader"), O = $("lkt-paginator");
      return s(), m("section", {
        class: "lkt-table-page",
        id: "lkt-table-page-" + I(oe)
      }, [
        ie.value || I(u).title ? (s(), m("header", Wt, [
          ie.value ? (s(), b(Z(We.value), { key: 0 }, {
            default: F(() => [
              e.titleIcon ? (s(), m("i", {
                key: 0,
                class: te(e.titleIcon)
              }, null, 2)) : y("", !0),
              le(" " + j(ie.value), 1)
            ]),
            _: 1
          })) : y("", !0),
          I(u).title ? N(e.$slots, "title", { key: 1 }) : y("", !0)
        ])) : y("", !0),
        (s(), b(Z(je.value), {
          class: te(["lkt-table-page-content-wrapper", e.wrapContentClass])
        }, {
          default: F(() => [
            x(E("div", jt, [
              x(X(k, {
                ref: "saveButton",
                palette: "success",
                disabled: !Ke.value,
                "confirm-modal": e.saveConfirm,
                "confirm-data": e.confirmData,
                resource: e.saveResource,
                "resource-data": Pe.value,
                onLoading: Ye,
                onLoaded: Ze,
                onClick: xe
              }, {
                default: F(() => [
                  I(u)["button-save"] ? N(e.$slots, "button-save", {
                    key: 0,
                    items: i.value,
                    editMode: e.editMode,
                    canUpdate: !e.saveDisabled
                  }) : (s(), m("span", Jt, j(Je.value), 1))
                ]),
                _: 3
              }, 8, ["disabled", "confirm-modal", "confirm-data", "resource", "resource-data"]), [
                [ee, he.value]
              ]),
              e.canCreate && ne.value && M.value ? (s(), b(Ie, {
                key: 0,
                disabled: !Te.value,
                text: e.createText,
                icon: e.createIcon,
                onClick: Ve
              }, null, 8, ["disabled", "text", "icon"])) : y("", !0),
              E("div", zt, [
                x(X(T, {
                  modelValue: M.value,
                  "onUpdate:modelValue": c[0] || (c[0] = (w) => M.value = w),
                  label: ze.value
                }, null, 8, ["modelValue", "label"]), [
                  [ee, e.switchEditionEnabled]
                ])
              ])
            ], 512), [
              [ee, He.value]
            ]),
            I(u).buttons ? (s(), m("div", qt, [
              N(e.$slots, "buttons")
            ])) : y("", !0),
            V.value && I(u).filters ? (s(), m("div", Gt, [
              N(e.$slots, "filters", {
                items: i.value,
                isLoading: S.value
              })
            ])) : y("", !0),
            S.value ? (s(), b(D, { key: 2 })) : y("", !0),
            x(E("div", {
              class: "lkt-table",
              "data-sortable": e.sortable
            }, [
              e.itemMode ? (s(), m("div", {
                key: 1,
                class: te(["lkt-table-items-container", e.itemsContainerClass])
              }, [
                (s(!0), m(A, null, P(i.value, (w, B) => (s(), m("div", ll, [
                  N(e.$slots, "item", {
                    item: w,
                    index: B,
                    canCreate: ne.value,
                    canRead: qe.value,
                    canUpdate: Ge.value,
                    canDrop: re.value,
                    isLoading: S.value
                  })
                ]))), 256))
              ], 2)) : (s(), m("table", Xt, [
                E("thead", null, [
                  E("tr", null, [
                    e.sortable && M.value ? (s(), m("th", Yt)) : y("", !0),
                    e.addNavigation && M.value ? (s(), m("th", Zt)) : y("", !0),
                    pe.value ? (s(), m("th", xt)) : y("", !0),
                    (s(!0), m(A, null, P(ae.value, (w) => (s(), m(A, null, [
                      se.value.indexOf(w.key) === -1 ? (s(), b(_t, {
                        key: 0,
                        column: w,
                        "sort-by": v.value,
                        "sort-direction": a.value,
                        "amount-of-columns": e.columns.length,
                        items: i.value,
                        onClick: (B) => ke(w)
                      }, null, 8, ["column", "sort-by", "sort-direction", "amount-of-columns", "items", "onClick"])) : y("", !0)
                    ], 64))), 256)),
                    e.canDrop && re.value && M.value ? (s(), m("th", el)) : y("", !0)
                  ])
                ]),
                E("tbody", {
                  ref: (w) => J.value = w,
                  id: "lkt-table-body-" + I(oe)
                }, [
                  (s(!0), m(A, null, P(i.value, (w, B) => (s(), b(At, {
                    modelValue: i.value[B],
                    "onUpdate:modelValue": (_) => i.value[B] = _,
                    key: we(w, B),
                    i: B,
                    "display-hidden-columns-indicator": pe.value,
                    "is-draggable": Se(w),
                    sortable: e.sortable,
                    "visible-columns": ae.value,
                    "empty-columns": se.value,
                    "add-navigation": e.addNavigation,
                    "hidden-is-visible": ye(B),
                    "latest-row": B + 1 === _e.value,
                    "can-drop": e.canDrop && re.value && M.value,
                    "drop-confirm": e.dropConfirm,
                    "drop-resource": e.dropResource,
                    "drop-text": e.dropText,
                    "drop-icon": e.dropIcon,
                    "edit-mode-enabled": M.value,
                    onClick: be,
                    onShow: ge,
                    onItemUp: et,
                    onItemDown: tt,
                    onItemDrop: lt
                  }, Be({ _: 2 }, [
                    P(ve.value, (_) => ({
                      name: _,
                      fn: F((z) => [
                        N(e.$slots, _, {
                          item: z.item,
                          value: z.value,
                          column: z.column
                        })
                      ])
                    }))
                  ]), 1032, ["modelValue", "onUpdate:modelValue", "i", "display-hidden-columns-indicator", "is-draggable", "sortable", "visible-columns", "empty-columns", "add-navigation", "hidden-is-visible", "latest-row", "can-drop", "drop-confirm", "drop-resource", "drop-text", "drop-icon", "edit-mode-enabled"]))), 128)),
                  ue.value.length > 0 ? (s(!0), m(A, { key: 0 }, P(i.value, (w, B) => (s(), b(Ht, {
                    modelValue: i.value[B],
                    "onUpdate:modelValue": (_) => i.value[B] = _,
                    key: we(w, B, !0),
                    i: B,
                    "hidden-columns": ue.value,
                    "hidden-columns-col-span": Ne.value,
                    "is-draggable": Se(w),
                    sortable: e.sortable,
                    "visible-columns": ae.value,
                    "empty-columns": se.value,
                    "hidden-is-visible": ye(B),
                    onClick: be,
                    onShow: ge
                  }, Be({ _: 2 }, [
                    P(ve.value, (_) => ({
                      name: _,
                      fn: F((z) => [
                        N(e.$slots, _, {
                          item: z.item,
                          value: z.value,
                          column: z.column
                        })
                      ])
                    }))
                  ]), 1032, ["modelValue", "onUpdate:modelValue", "i", "hidden-columns", "hidden-columns-col-span", "is-draggable", "sortable", "visible-columns", "empty-columns", "hidden-is-visible"]))), 128)) : y("", !0)
                ], 8, tl)
              ]))
            ], 8, Qt), [
              [ee, !S.value && i.value.length > 0]
            ]),
            e.$slots["no-items"] ? (s(), m("div", ol, [
              N(e.$slots, "no-items")
            ])) : y("", !0),
            !S.value && i.value.length === 0 ? (s(), m("div", al, j(e.noResultsText), 1)) : y("", !0),
            e.canCreate && ne.value && M.value ? (s(), m("div", nl, [
              e.canCreate && ne.value && M.value ? (s(), b(Ie, {
                key: 0,
                disabled: !Te.value,
                text: e.createText,
                icon: e.createIcon,
                onClick: Ve
              }, null, 8, ["disabled", "text", "icon"])) : y("", !0)
            ])) : y("", !0),
            X(O, {
              ref_key: "paginator",
              ref: fe,
              modelValue: L.value,
              "onUpdate:modelValue": c[1] || (c[1] = (w) => L.value = w),
              resource: e.resource,
              filters: e.filters,
              onResults: $e,
              onLoading: Re,
              onPerms: Ae
            }, null, 8, ["modelValue", "resource", "filters"])
          ]),
          _: 3
        }, 8, ["class"]))
      ], 8, Pt);
    };
  }
}), $l = {
  install: (l) => {
    l.component("lkt-loader") === void 0 && l.use(mt), l.component("lkt-button") === void 0 && l.use(ft), l.component("lkt-paginator") === void 0 && l.use(pt), l.component("lkt-field-text") === void 0 && l.use(vt), l.component("lkt-field-textarea") === void 0 && l.use(ht), l.component("lkt-field-select") === void 0 && l.use(yt), l.component("lkt-field-switch") === void 0 && l.use(kt), l.component("lkt-field-file") === void 0 && l.use(bt), l.component("lkt-table") === void 0 && l.component("lkt-table", sl);
  }
}, Al = (l) => (R.navButtonSlot = l, !0), Rl = (l) => (R.dropButtonSlot = l, !0), Ol = (l) => (R.createButtonSlot = l, !0);
export {
  K as LktTableColumn,
  Dl as createActionColumn,
  El as createCheckColumn,
  Sl as createColumn,
  Tl as createEmailColumn,
  Ml as createHiddenColumn,
  Vl as createLinkColumn,
  Ll as createSelectColumn,
  Il as createSwitchColumn,
  Bl as createTelColumn,
  wl as createTextColumn,
  $l as default,
  Ol as setTableCreateButtonSlot,
  Rl as setTableDropButtonSlot,
  Al as setTableNavButtonSlot
};
