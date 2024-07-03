import { reactive as H, defineComponent as z, ref as C, watch as A, nextTick as de, computed as f, resolveComponent as R, openBlock as s, createBlock as b, withCtx as U, createTextVNode as le, toDisplayString as j, unref as L, createElementBlock as m, Fragment as $, withModifiers as ut, resolveDynamicComponent as Z, createCommentVNode as y, normalizeClass as te, createElementVNode as I, createVNode as X, renderList as W, renderSlot as N, withDirectives as x, vShow as ee, useSlots as st, onMounted as rt, createSlots as Ie } from "vue";
import { httpCall as it } from "lkt-http-client";
import { __ as G } from "lkt-i18n";
import { createLktEvent as ce } from "lkt-events";
import { generateRandomString as dt, replaceAll as ct } from "lkt-string-tools";
import { DataState as mt } from "lkt-data-state";
import ft from "sortablejs";
import pt from "lkt-loader";
import vt from "lkt-button";
import ht from "lkt-paginator";
import yt from "lkt-field-text";
import kt from "lkt-field-textarea";
import bt from "lkt-field-select";
import gt from "lkt-field-switch";
import Ct from "lkt-field-file";
class K {
  constructor(t = "", i = "") {
    this.key = t, this.label = i, this.sortable = !0, this.hidden = !1, this.formatter = void 0, this.checkEmpty = void 0, this.colspan = void 0, this.resource = "", this.resourceData = {}, this.isMultiple = !1, this.isLoading = !1, this.resourceLoaded = !1, this.valueSlot = "", this.editSlot = "", this.multipleDisplay = "", this.multipleDisplayEdition = "";
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
      const t = await it(this.resource, this.resourceData);
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
  setAutoLoadSelectOptions(t = !0, i = "") {
    return this.autoLoadSelectOptions = t, this.autoLoadSelectOptionsKey = i, this;
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
const Dl = (l, t, i = !0) => H(new K(l, t).setIsSortable(i)), wl = (l, t, i, n = !0) => H(new K(l, t).setIsSortable(n).defineAsLink(i)), Tl = (l, t, i, n = !0) => H(new K(l, t).setIsSortable(n).defineAsAction(i)), Bl = (l, t, i = !0) => H(new K(l, t).setIsSortable(i).defineAsText()), Il = (l, t, i = !0) => H(new K(l, t).setIsSortable(i).defineAsEmail()), El = (l, t, i = !0) => H(new K(l, t).setIsSortable(i).defineAsTel()), Ll = (l, t, i = !0) => H(new K(l, t).setIsSortable(i).defineAsCheck()), Ml = (l, t, i = !0) => H(new K(l, t).setIsSortable(i).defineAsSwitch()), Rl = (l, t, i, n = !0) => H(new K(l, t).setIsSortable(n).defineAsSelect(i)), $l = (l, t, i = !0) => H(new K(l, t).setIsSortable(i).setIsHidden(!0)), Ee = (l, t, i, n) => {
  if (!i) return 0;
  let r = l[i.key], o = t[i.key];
  if (n === "asc") {
    if (r > o) return 1;
    if (o > r) return -1;
  } else {
    if (r > o) return -1;
    if (o > r) return 1;
  }
  return 0;
}, Y = (l, t, i, n = []) => {
  if (l.extractTitleFromColumn) {
    let r = n.find((o) => o.key === l.extractTitleFromColumn);
    if (r)
      return Y(r, t, i, n);
  }
  if (l.formatter && typeof l.formatter == "function") {
    let r = l.formatter(t[l.key], t, l, i);
    return r.startsWith("__:") ? G(r.substring(3)) : r;
  }
  return t[l.key];
}, St = (l, t, i) => {
  if (!l.colspan) return -1;
  let n = t;
  return i.forEach((r) => {
    let o = me(l, r);
    o > 0 && o < n && (n = o);
  }), n;
}, me = (l, t) => l.colspan === !1 ? !1 : typeof l.colspan == "function" ? l.colspan(t) : l.colspan, Vt = (l, t, i) => {
  if (typeof l != "object" || !l.key || t.indexOf(l.key) > -1) return !1;
  let n = me(l, i);
  return typeof l.colspan > "u" ? !0 : (typeof l.colspan < "u" && (typeof l.colspan == "function" ? n = parseInt(l.colspan()) : n = parseInt(l.colspan)), n > 0);
}, Dt = (l = []) => {
  if (l.length > 0) {
    for (let t = 0; t < l.length; ++t)
      if (l[t].sortable) return l[t].key;
  }
  return "";
}, wt = (l, t) => {
  if (l.length > 0) {
    for (let i = 0; i < l.length; ++i)
      if (l[i].key === t) return l[i];
  }
  return null;
}, Me = /* @__PURE__ */ z({
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
    const i = t, n = l, r = C(n.modelValue), o = C(r.value[n.column.key]), h = C(null), g = C(n.column.showLoading());
    A(o, (a) => {
      const u = JSON.parse(JSON.stringify(r.value));
      u[n.column.key] = a, i("update:modelValue", u);
    }), A(() => n.modelValue, (a) => {
      r.value = a, o.value = r.value[n.column.key];
    }), A(() => n.column, () => {
      n.column.resourceLoaded && de(() => g.value = !1);
    }, { deep: !0 }), n.column.hasToLoadResource() && n.column.loadResource();
    const v = f(() => ({ ...n.column.slotData, item: r.value }));
    return (a, u) => {
      const _ = R("lkt-anchor"), q = R("lkt-field-text"), d = R("lkt-field-switch"), M = R("lkt-field-file"), S = R("lkt-loader"), V = R("lkt-field-select");
      return a.column.type === "link" ? (s(), b(_, {
        key: 0,
        to: a.column.getHref(r.value)
      }, {
        default: U(() => [
          le(j(L(Y)(a.column, r.value, a.i)), 1)
        ]),
        _: 1
      }, 8, ["to"])) : a.column.type === "action" ? (s(), m("a", {
        key: 1,
        href: "#",
        onClick: u[0] || (u[0] = (p) => a.column.doAction(r.value))
      }, j(L(Y)(a.column, r.value, a.i)), 1)) : a.column.type === "text" ? (s(), b(q, {
        key: 2,
        "read-mode": !a.column.editable || !a.editModeEnabled,
        ref: (p) => h.value = p,
        "edit-slot": a.column.editSlot,
        "value-slot": a.column.valueSlot,
        "slot-data": v.value,
        modelValue: o.value,
        "onUpdate:modelValue": u[1] || (u[1] = (p) => o.value = p)
      }, null, 8, ["read-mode", "edit-slot", "value-slot", "slot-data", "modelValue"])) : a.column.type === "email" ? (s(), b(q, {
        key: 3,
        "read-mode": !a.column.editable || !a.editModeEnabled,
        ref: (p) => h.value = p,
        "edit-slot": a.column.editSlot,
        "value-slot": a.column.valueSlot,
        "slot-data": v.value,
        "is-email": "",
        modelValue: o.value,
        "onUpdate:modelValue": u[2] || (u[2] = (p) => o.value = p)
      }, null, 8, ["read-mode", "edit-slot", "value-slot", "slot-data", "modelValue"])) : a.column.type === "tel" ? (s(), b(q, {
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
      }, null, 8, ["read-mode", "modelValue"])) : a.column.type === "file" ? (s(), b(M, {
        key: 7,
        "read-mode": !a.column.editable || !a.editModeEnabled,
        ref: (p) => h.value = p,
        modelValue: o.value,
        "onUpdate:modelValue": u[6] || (u[6] = (p) => o.value = p)
      }, null, 8, ["read-mode", "modelValue"])) : a.column.type === "select" ? (s(), m($, { key: 8 }, [
        g.value ? (s(), b(S, { key: 0 })) : (s(), b(V, {
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
      ], 64)) : (s(), m($, { key: 9 }, [
        le(j(L(Y)(a.column, r.value, a.i, a.columns)), 1)
      ], 64));
    };
  }
}), F = {
  navButtonSlot: "",
  dropButtonSlot: "",
  createButtonSlot: ""
}, Tt = /* @__PURE__ */ z({
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
    const i = t, n = l, r = f(() => F.dropButtonSlot !== ""), o = f(() => F.dropButtonSlot), h = f(() => n.text.startsWith("__:") ? G(n.text.substring(3)) : n.text);
    return (g, v) => {
      const a = R("lkt-button");
      return s(), b(a, {
        palette: "table-delete",
        icon: r.value ? "" : g.icon,
        text: r.value ? "" : h.value,
        resource: g.resource,
        "resource-data": g.resourceData,
        "confirm-modal": g.confirm,
        disabled: g.disabled,
        onClick: v[0] || (v[0] = ut((u) => i("click"), ["prevent", "stop"]))
      }, {
        default: U(() => [
          r.value ? (s(), b(Z(o.value), { key: 0 })) : y("", !0)
        ]),
        _: 1
      }, 8, ["icon", "text", "resource", "resource-data", "confirm-modal", "disabled"]);
    };
  }
}), Bt = ["data-i", "data-draggable"], It = {
  key: 1,
  "data-role": "invalid-drag-indicator"
}, Et = {
  key: 2,
  class: "lkt-table-nav-cell"
}, Lt = { class: "lkt-table-nav-container" }, Mt = /* @__PURE__ */ I("i", { class: "" }, null, -1), Rt = /* @__PURE__ */ I("i", { class: "" }, null, -1), $t = ["data-column", "colspan", "title", "onClick"], At = {
  key: 4,
  class: "lkt-table-col-drop"
}, Ft = /* @__PURE__ */ z({
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
    const i = t, n = l, r = C(n.modelValue), o = (d, M, S) => {
      i("click", d, ce("", { item: M, column: S }));
    }, h = (d, M) => {
      i("show", d, ce("", { i: M }));
    }, g = f(() => {
      let d = [];
      return n.sortable && n.isDraggable && d.push("handle"), d.join(" ");
    }), v = f(() => F.navButtonSlot !== ""), a = f(() => F.navButtonSlot);
    f(() => F.dropButtonSlot !== ""), f(() => F.dropButtonSlot);
    const u = () => {
      i("item-up", n.i);
    }, _ = () => {
      i("item-down", n.i);
    }, q = () => {
      i("item-drop", n.i);
    };
    return A(() => n.modelValue, (d) => r.value = d), A(r, (d) => {
      i("update:modelValue", d, n.i);
    }, { deep: !0 }), (d, M) => {
      const S = R("lkt-button");
      return s(), m("tr", {
        "data-i": d.i,
        "data-draggable": d.isDraggable
      }, [
        d.sortable && d.isDraggable && d.editModeEnabled ? (s(), m("td", {
          key: 0,
          "data-role": "drag-indicator",
          class: te(g.value)
        }, null, 2)) : d.sortable && d.editModeEnabled ? (s(), m("td", It)) : y("", !0),
        d.addNavigation && d.editModeEnabled ? (s(), m("td", Et, [
          I("div", Lt, [
            X(S, {
              palette: "table-nav",
              disabled: d.i === 0,
              onClick: u
            }, {
              default: U(() => [
                v.value ? (s(), b(Z(a.value), {
                  key: 0,
                  direction: "up"
                })) : (s(), m($, { key: 1 }, [
                  Mt,
                  le(" UP ")
                ], 64))
              ]),
              _: 1
            }, 8, ["disabled"]),
            X(S, {
              palette: "table-nav",
              disabled: d.latestRow,
              onClick: _
            }, {
              default: U(() => [
                v.value ? (s(), b(Z(a.value), {
                  key: 0,
                  direction: "down"
                })) : (s(), m($, { key: 1 }, [
                  Rt,
                  le(" DOWN ")
                ], 64))
              ]),
              _: 1
            }, 8, ["disabled"])
          ])
        ])) : y("", !0),
        d.displayHiddenColumnsIndicator ? (s(), m("td", {
          key: 3,
          onClick: M[0] || (M[0] = (V) => h(V, d.i)),
          "data-role": "show-more",
          class: te(d.hiddenIsVisible ? "state-open" : "")
        }, null, 2)) : y("", !0),
        (s(!0), m($, null, W(d.visibleColumns, (V) => (s(), m($, null, [
          L(Vt)(V, d.emptyColumns, r.value) ? (s(), m("td", {
            key: 0,
            "data-column": V.key,
            colspan: L(me)(V, r.value),
            title: L(Y)(V, r.value, d.i, d.visibleColumns),
            onClick: (p) => o(p, r.value, V)
          }, [
            d.$slots[V.key] ? N(d.$slots, V.key, {
              key: 0,
              value: r.value[V.key],
              item: r.value,
              column: V,
              i: d.i
            }) : r.value ? (s(), b(Me, {
              key: 1,
              modelValue: r.value,
              "onUpdate:modelValue": M[1] || (M[1] = (p) => r.value = p),
              column: V,
              columns: d.visibleColumns,
              "edit-mode-enabled": d.editModeEnabled,
              i: d.i
            }, null, 8, ["modelValue", "column", "columns", "edit-mode-enabled", "i"])) : y("", !0)
          ], 8, $t)) : y("", !0)
        ], 64))), 256)),
        d.canDrop && d.editModeEnabled ? (s(), m("td", At, [
          X(Tt, {
            resource: d.dropResource,
            "resource-data": r.value,
            confirm: d.dropConfirm,
            text: d.dropText,
            icon: d.dropIcon,
            onClick: q
          }, null, 8, ["resource", "resource-data", "confirm", "text", "icon"])
        ])) : y("", !0)
      ], 8, Bt);
    };
  }
}), Ot = { "data-role": "hidden-row" }, Nt = ["colspan"], Ut = ["data-column"], Ht = ["data-i"], Kt = ["data-column", "title", "onClick"], Pt = /* @__PURE__ */ z({
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
    const i = t, n = l, r = C(n.modelValue), o = (h, g, v) => {
      i("click", h, ce("", { item: g, column: v }));
    };
    return A(() => n.modelValue, (h) => r.value = h), A(r, () => i("update:modelValue", r.value)), (h, g) => x((s(), m("tr", Ot, [
      I("td", { colspan: h.hiddenColumnsColSpan }, [
        I("table", null, [
          I("tr", null, [
            (s(!0), m($, null, W(h.hiddenColumns, (v) => (s(), m("th", {
              "data-column": v.key
            }, [
              I("div", null, j(v.label), 1)
            ], 8, Ut))), 256))
          ]),
          I("tr", { "data-i": h.i }, [
            (s(!0), m($, null, W(h.hiddenColumns, (v, a) => (s(), m("td", {
              "data-column": v.key,
              title: L(Y)(v, r.value, a, h.hiddenColumns),
              onClick: (u) => o(u, r.value, v)
            }, [
              h.$slots[v.key] ? N(h.$slots, v.key, {
                key: 0,
                value: r.value[v.key],
                item: r.value,
                column: v,
                i: a
              }) : (s(), b(Me, {
                key: 1,
                column: v,
                columns: h.hiddenColumns,
                modelValue: r.value,
                "onUpdate:modelValue": g[0] || (g[0] = (u) => r.value = u),
                i: a
              }, null, 8, ["column", "columns", "modelValue", "i"]))
            ], 8, Kt))), 256))
          ], 8, Ht)
        ])
      ], 8, Nt)
    ], 512)), [
      [ee, h.hiddenIsVisible]
    ]);
  }
}), Le = /* @__PURE__ */ z({
  __name: "CreateButton",
  props: {
    disabled: { type: Boolean, default: !1 },
    text: { default: "" },
    icon: { default: "" },
    to: { default: "" }
  },
  emits: ["click"],
  setup(l, { emit: t }) {
    const i = t, n = l, r = f(() => F.createButtonSlot !== ""), o = f(() => F.createButtonSlot), h = f(() => n.text.startsWith("__:") ? G(n.text.substring(3)) : n.text);
    return (g, v) => {
      const a = R("lkt-button");
      return s(), b(a, {
        palette: "table-create",
        disabled: g.disabled,
        icon: r.value ? "" : g.icon,
        text: r.value ? "" : h.value,
        "on-click-to": g.to,
        onClick: v[0] || (v[0] = (u) => i("click"))
      }, {
        default: U(() => [
          r.value ? (s(), b(Z(o.value), { key: 0 })) : y("", !0)
        ]),
        _: 1
      }, 8, ["disabled", "icon", "text", "on-click-to"]);
    };
  }
}), Wt = ["data-column", "data-sortable", "data-sort", "colspan", "title"], _t = /* @__PURE__ */ z({
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
    const i = t, n = l, r = f(() => St(n.column, n.amountOfColumns, n.items)), o = f(() => n.column.sortable === !0), h = f(() => o.value && n.sortBy === n.column.key ? n.sortDirection : ""), g = f(() => n.column.label.startsWith("__:") ? G(n.column.label.substring(3)) : n.column.label), v = () => {
      i("click", n.column);
    };
    return (a, u) => (s(), m("th", {
      "data-column": a.column.key,
      "data-sortable": o.value,
      "data-sort": h.value,
      colspan: r.value,
      title: g.value,
      onClick: v
    }, [
      I("div", null, j(g.value), 1)
    ], 8, Wt));
  }
}), jt = ["id"], qt = { key: 0 }, Jt = { class: "lkt-table-page-buttons" }, Gt = { key: 1 }, zt = { class: "switch-edition-mode" }, Qt = {
  key: 0,
  class: "lkt-table-page-buttons"
}, Xt = {
  key: 1,
  class: "lkt-table-page-filters"
}, Yt = ["data-sortable"], Zt = { key: 0 }, xt = {
  key: 0,
  "data-role": "drag-indicator"
}, el = { key: 1 }, tl = { key: 2 }, ll = {
  key: 3,
  class: "lkt-table-col-drop"
}, ol = ["id"], al = { class: "lkt-table-item" }, nl = {
  key: 3,
  class: "lkt-empty-table"
}, ul = {
  key: 4,
  class: "lkt-table-page-empty"
}, sl = {
  key: 5,
  class: "lkt-table-page-buttons lkt-table-page-buttons-bottom"
}, rl = /* @__PURE__ */ z({
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
    createRoute: { default: "" },
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
    createEnabledValidator: { type: Function, default: void 0 },
    newValueGenerator: { type: Function, default: void 0 },
    requiredItemsForTopCreate: { default: 0 },
    requiredItemsForBottomCreate: { default: 0 }
  },
  emits: ["update:modelValue", "sort", "click", "save", "error", "before-save", "read-response"],
  setup(l, { expose: t, emit: i }) {
    const n = i, r = st(), o = l, h = {}, g = C(typeof o.sorter == "function" ? o.sorter : Ee), v = C(Dt(o.columns)), a = C("asc"), u = C(o.modelValue), _ = C(h), q = C(null), d = C(o.columns), M = C(o.page), S = C(!1), V = C(!1), p = C(o.perms), fe = C(null), Re = C({}), Q = C(new mt({ items: u.value }, o.dataStateConfig)), E = C(o.editMode), $e = (e) => {
      Array.isArray(e) && (u.value = e), S.value = !1, V.value = !0, Q.value.store({ items: u.value }).turnStoredIntoOriginal();
    }, Ae = (e) => {
      p.value = e;
    }, Fe = (e) => {
    }, Oe = (e) => {
      n("read-response", e);
    }, Ne = () => de(() => S.value = !0), Ue = () => {
      fe.value.doRefresh();
    }, oe = dt(12), ue = f(() => {
      if (!o.hideEmptyColumns) return [];
      let e = [];
      return d.value.forEach((c) => {
        let k = c.key, T = !1;
        u.value.forEach((D) => {
          if (typeof D.checkEmpty == "function")
            return D.checkEmpty(D);
          D[k] && (T = !0);
        }), T || e.push(k);
      }), e;
    }), ae = f(() => d.value.filter((e) => !e.hidden)), se = f(() => d.value.filter((e) => e.hidden)), He = f(() => {
      let e = ae.value.length + 1;
      return o.sortable && ++e, e;
    }), Ke = f(() => d.value.filter((e) => e.isForRowKey)), pe = f(() => se.value.length > 0 && !o.sortable), Pe = f(() => d.value.map((e) => e.key)), ve = f(() => {
      let e = [];
      for (let c in r) Pe.value.indexOf(c) !== -1 && e.push(c);
      return e;
    }), he = f(() => o.hiddenSave || S.value || !o.saveResource ? !1 : E.value && Q.value.changed() ? !0 : E.value), We = f(() => o.switchEditionEnabled ? !0 : he.value || E.value && o.canCreate), _e = f(() => o.saveDisabled || typeof o.saveValidator == "function" && !o.saveValidator(u.value) ? !1 : Q.value.changed()), je = f(() => u.value.length), qe = f(() => ({
      items: u.value,
      ...o.saveResourceData
    })), Je = f(() => o.titleTag === "" ? "h2" : o.titleTag), Ge = f(() => o.wrapContentTag === "" ? "div" : o.wrapContentTag), re = f(() => o.title.startsWith("__:") ? G(o.title.substring(3)) : o.title), ze = f(() => o.saveText.startsWith("__:") ? G(o.saveText.substring(3)) : o.saveText), Qe = f(() => o.editModeText.startsWith("__:") ? G(o.editModeText.substring(3)) : o.editModeText), ne = f(() => p.value.includes("create")), Xe = f(() => p.value.includes("read")), Ye = f(() => p.value.includes("update")), ie = f(() => p.value.includes("drop")), Ze = (e) => {
      let c = e.target;
      if (typeof c.dataset.column > "u")
        do
          c = c.parentNode;
        while (typeof c.dataset.column > "u" && c.tagName !== "TABLE" && c.tagName !== "body");
      if (c.tagName === "TD" && (c = c.parentNode, c = c.dataset.i, typeof c < "u"))
        return u.value[c];
    }, ye = (e) => _.value["tr_" + e] === !0, ke = (e) => {
      e && e.sortable && (u.value = u.value.sort((c, k) => g.value(c, k, e, a.value)), a.value = a.value === "asc" ? "desc" : "asc", v.value = e.key, n("sort", [v.value, a.value]));
    }, be = (e, c) => {
      n("click", e, c);
    }, ge = (e, c) => {
      let k = "tr_" + c.value.i;
      _.value[k] = typeof _.value[k] > "u" ? !0 : !_.value[k];
    }, Ce = () => {
      d.value.forEach((e) => {
        if (e.type === "select" && e.autoLoadSelectOptions) {
          let c = e.autoLoadSelectOptionsKey !== "" ? e.autoLoadSelectOptionsKey : e.key, k = [];
          u.value.forEach((D) => {
            Array.isArray(D[c]) && D[c].forEach((O) => k.push(O));
          });
          let T = {};
          k = k.filter(function(D) {
            return T[D.value] ? !1 : (T[D.value] = !0, !0);
          }), e.setOptions(k);
        }
      });
    }, xe = (e) => typeof o.checkValidDrag == "function" ? o.checkValidDrag(e) : !0, Se = (e) => typeof o.draggableChecker == "function" ? o.draggableChecker(e) : !0, Ve = () => {
      if (typeof o.newValueGenerator == "function") {
        let e = o.newValueGenerator();
        if (typeof e == "object") {
          u.value.push(e);
          return;
        }
      }
      u.value.push({});
    }, et = () => {
      S.value = !0;
    }, tt = () => {
      S.value = !1;
    }, lt = (e, c) => {
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
    }, ot = (e) => {
      De(u.value, e, e - 1);
    }, at = (e) => {
      De(u.value, e, e + 1);
    }, we = (e) => {
      u.value.splice(e, 1);
    }, nt = () => {
      let e = document.getElementById("lkt-table-body-" + oe);
      Re.value = new ft(e, {
        direction: "vertical",
        handle: ".handle",
        animation: 150,
        onEnd: function(c) {
          let k = c.oldIndex, T = c.newIndex, D = JSON.parse(JSON.stringify(u.value));
          u.value.splice(k, 1, D[T]), u.value.splice(T, 1, D[k]);
        },
        onMove: function(c, k) {
          return xe(c);
        }
      });
    }, Te = (e, c, k = !1) => {
      let T = [oe, "row", c];
      return k && T.push("hidden"), Ke.value.forEach((D) => {
        let O = String(e[D.key]).toLowerCase();
        O.length > 50 && (O = O.substring(0, 50)), O = ct(O, " ", "-"), T.push(O);
      }), T.join("-");
    }, Be = f(() => typeof o.createEnabledValidator == "function" ? o.createEnabledValidator({ items: u.value }) : !0);
    return rt(() => {
      Ce(), ke(wt(o.columns, v.value)), Q.value.store({ items: u.value }).turnStoredIntoOriginal(), o.sortable && de(() => {
        nt();
      });
    }), A(() => o.editMode, (e) => E.value = e), A(() => o.columns, (e) => d.value = e), A(() => o.modelValue, (e) => u.value = e), A(u, (e) => {
      Ce(), Q.value.increment({ items: e }), n("update:modelValue", e);
    }, { deep: !0 }), t({
      getItemByEvent: Ze,
      doRefresh: Ue
    }), (e, c) => {
      const k = R("lkt-button"), T = R("lkt-field-switch"), D = R("lkt-loader"), O = R("lkt-paginator");
      return s(), m("section", {
        class: "lkt-table-page",
        id: "lkt-table-page-" + L(oe)
      }, [
        re.value || L(r).title ? (s(), m("header", qt, [
          re.value ? (s(), b(Z(Je.value), { key: 0 }, {
            default: U(() => [
              e.titleIcon ? (s(), m("i", {
                key: 0,
                class: te(e.titleIcon)
              }, null, 2)) : y("", !0),
              le(" " + j(re.value), 1)
            ]),
            _: 1
          })) : y("", !0),
          L(r).title ? N(e.$slots, "title", { key: 1 }) : y("", !0)
        ])) : y("", !0),
        (s(), b(Z(Ge.value), {
          class: te(["lkt-table-page-content-wrapper", e.wrapContentClass])
        }, {
          default: U(() => [
            x(I("div", Jt, [
              x(X(k, {
                ref: "saveButton",
                palette: "success",
                disabled: !_e.value,
                "confirm-modal": e.saveConfirm,
                "confirm-data": e.confirmData,
                resource: e.saveResource,
                "resource-data": qe.value,
                onLoading: et,
                onLoaded: tt,
                onClick: lt
              }, {
                default: U(() => [
                  L(r)["button-save"] ? N(e.$slots, "button-save", {
                    key: 0,
                    items: u.value,
                    editMode: e.editMode,
                    canUpdate: !e.saveDisabled
                  }) : (s(), m("span", Gt, j(ze.value), 1))
                ]),
                _: 3
              }, 8, ["disabled", "confirm-modal", "confirm-data", "resource", "resource-data"]), [
                [ee, he.value]
              ]),
              e.canCreate && ne.value && E.value && u.value.length >= e.requiredItemsForTopCreate ? (s(), b(Le, {
                key: 0,
                disabled: !Be.value,
                text: e.createText,
                icon: e.createIcon,
                to: e.createRoute,
                onClick: Ve
              }, null, 8, ["disabled", "text", "icon", "to"])) : y("", !0),
              I("div", zt, [
                x(X(T, {
                  modelValue: E.value,
                  "onUpdate:modelValue": c[0] || (c[0] = (w) => E.value = w),
                  label: Qe.value
                }, null, 8, ["modelValue", "label"]), [
                  [ee, e.switchEditionEnabled]
                ])
              ])
            ], 512), [
              [ee, We.value]
            ]),
            L(r).buttons ? (s(), m("div", Qt, [
              N(e.$slots, "buttons")
            ])) : y("", !0),
            V.value && L(r).filters ? (s(), m("div", Xt, [
              N(e.$slots, "filters", {
                items: u.value,
                isLoading: S.value
              })
            ])) : y("", !0),
            S.value ? (s(), b(D, { key: 2 })) : y("", !0),
            x(I("div", {
              class: "lkt-table",
              "data-sortable": e.sortable
            }, [
              e.itemMode ? (s(), m("div", {
                key: 1,
                class: te(["lkt-table-items-container", e.itemsContainerClass])
              }, [
                (s(!0), m($, null, W(u.value, (w, B) => (s(), m("div", al, [
                  N(e.$slots, "item", {
                    item: w,
                    index: B,
                    canCreate: ne.value,
                    canRead: Xe.value,
                    canUpdate: Ye.value,
                    canDrop: ie.value,
                    isLoading: S.value,
                    doDrop: () => we(B)
                  })
                ]))), 256))
              ], 2)) : (s(), m("table", Zt, [
                I("thead", null, [
                  I("tr", null, [
                    e.sortable && E.value ? (s(), m("th", xt)) : y("", !0),
                    e.addNavigation && E.value ? (s(), m("th", el)) : y("", !0),
                    pe.value ? (s(), m("th", tl)) : y("", !0),
                    (s(!0), m($, null, W(ae.value, (w) => (s(), m($, null, [
                      ue.value.indexOf(w.key) === -1 ? (s(), b(_t, {
                        key: 0,
                        column: w,
                        "sort-by": v.value,
                        "sort-direction": a.value,
                        "amount-of-columns": e.columns.length,
                        items: u.value,
                        onClick: (B) => ke(w)
                      }, null, 8, ["column", "sort-by", "sort-direction", "amount-of-columns", "items", "onClick"])) : y("", !0)
                    ], 64))), 256)),
                    e.canDrop && ie.value && E.value ? (s(), m("th", ll)) : y("", !0)
                  ])
                ]),
                I("tbody", {
                  ref: (w) => q.value = w,
                  id: "lkt-table-body-" + L(oe)
                }, [
                  (s(!0), m($, null, W(u.value, (w, B) => (s(), b(Ft, {
                    modelValue: u.value[B],
                    "onUpdate:modelValue": (P) => u.value[B] = P,
                    key: Te(w, B),
                    i: B,
                    "display-hidden-columns-indicator": pe.value,
                    "is-draggable": Se(w),
                    sortable: e.sortable,
                    "visible-columns": ae.value,
                    "empty-columns": ue.value,
                    "add-navigation": e.addNavigation,
                    "hidden-is-visible": ye(B),
                    "latest-row": B + 1 === je.value,
                    "can-drop": e.canDrop && ie.value && E.value,
                    "drop-confirm": e.dropConfirm,
                    "drop-resource": e.dropResource,
                    "drop-text": e.dropText,
                    "drop-icon": e.dropIcon,
                    "edit-mode-enabled": E.value,
                    onClick: be,
                    onShow: ge,
                    onItemUp: ot,
                    onItemDown: at,
                    onItemDrop: we
                  }, Ie({ _: 2 }, [
                    W(ve.value, (P) => ({
                      name: P,
                      fn: U((J) => [
                        N(e.$slots, P, {
                          item: J.item,
                          value: J.value,
                          column: J.column
                        })
                      ])
                    }))
                  ]), 1032, ["modelValue", "onUpdate:modelValue", "i", "display-hidden-columns-indicator", "is-draggable", "sortable", "visible-columns", "empty-columns", "add-navigation", "hidden-is-visible", "latest-row", "can-drop", "drop-confirm", "drop-resource", "drop-text", "drop-icon", "edit-mode-enabled"]))), 128)),
                  se.value.length > 0 ? (s(!0), m($, { key: 0 }, W(u.value, (w, B) => (s(), b(Pt, {
                    modelValue: u.value[B],
                    "onUpdate:modelValue": (P) => u.value[B] = P,
                    key: Te(w, B, !0),
                    i: B,
                    "hidden-columns": se.value,
                    "hidden-columns-col-span": He.value,
                    "is-draggable": Se(w),
                    sortable: e.sortable,
                    "visible-columns": ae.value,
                    "empty-columns": ue.value,
                    "hidden-is-visible": ye(B),
                    onClick: be,
                    onShow: ge
                  }, Ie({ _: 2 }, [
                    W(ve.value, (P) => ({
                      name: P,
                      fn: U((J) => [
                        N(e.$slots, P, {
                          item: J.item,
                          value: J.value,
                          column: J.column
                        })
                      ])
                    }))
                  ]), 1032, ["modelValue", "onUpdate:modelValue", "i", "hidden-columns", "hidden-columns-col-span", "is-draggable", "sortable", "visible-columns", "empty-columns", "hidden-is-visible"]))), 128)) : y("", !0)
                ], 8, ol)
              ]))
            ], 8, Yt), [
              [ee, !S.value && u.value.length > 0]
            ]),
            e.$slots["no-items"] ? (s(), m("div", nl, [
              N(e.$slots, "no-items")
            ])) : y("", !0),
            !S.value && u.value.length === 0 ? (s(), m("div", ul, j(e.noResultsText), 1)) : y("", !0),
            e.canCreate && ne.value && E.value ? (s(), m("div", sl, [
              e.canCreate && ne.value && E.value && u.value.length >= e.requiredItemsForBottomCreate ? (s(), b(Le, {
                key: 0,
                disabled: !Be.value,
                text: e.createText,
                icon: e.createIcon,
                to: e.createRoute,
                onClick: Ve
              }, null, 8, ["disabled", "text", "icon", "to"])) : y("", !0)
            ])) : y("", !0),
            X(O, {
              ref_key: "paginator",
              ref: fe,
              modelValue: M.value,
              "onUpdate:modelValue": c[1] || (c[1] = (w) => M.value = w),
              resource: e.resource,
              filters: e.filters,
              onResults: $e,
              onLoading: Ne,
              onPerms: Ae,
              onCustom: Fe,
              onResponse: Oe
            }, null, 8, ["modelValue", "resource", "filters"])
          ]),
          _: 3
        }, 8, ["class"]))
      ], 8, jt);
    };
  }
}), Al = {
  install: (l) => {
    l.component("lkt-loader") === void 0 && l.use(pt), l.component("lkt-button") === void 0 && l.use(vt), l.component("lkt-paginator") === void 0 && l.use(ht), l.component("lkt-field-text") === void 0 && l.use(yt), l.component("lkt-field-textarea") === void 0 && l.use(kt), l.component("lkt-field-select") === void 0 && l.use(bt), l.component("lkt-field-switch") === void 0 && l.use(gt), l.component("lkt-field-file") === void 0 && l.use(Ct), l.component("lkt-table") === void 0 && l.component("lkt-table", rl);
  }
}, Fl = (l) => (F.navButtonSlot = l, !0), Ol = (l) => (F.dropButtonSlot = l, !0), Nl = (l) => (F.createButtonSlot = l, !0);
export {
  K as LktTableColumn,
  Tl as createActionColumn,
  Ll as createCheckColumn,
  Dl as createColumn,
  Il as createEmailColumn,
  $l as createHiddenColumn,
  wl as createLinkColumn,
  Rl as createSelectColumn,
  Ml as createSwitchColumn,
  El as createTelColumn,
  Bl as createTextColumn,
  Al as default,
  Nl as setTableCreateButtonSlot,
  Ol as setTableDropButtonSlot,
  Fl as setTableNavButtonSlot
};
