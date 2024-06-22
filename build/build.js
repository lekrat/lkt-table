import { reactive as O, defineComponent as ee, ref as b, watch as F, nextTick as se, computed as g, resolveComponent as A, openBlock as n, createBlock as C, withCtx as q, createTextVNode as X, toDisplayString as z, unref as E, createElementBlock as f, Fragment as B, normalizeClass as Se, createCommentVNode as y, createElementVNode as S, createVNode as Y, resolveDynamicComponent as oe, renderList as P, renderSlot as K, withModifiers as qe, withDirectives as _, vShow as x, useSlots as We, onMounted as Ge, createSlots as Ve } from "vue";
import { httpCall as Qe } from "lkt-http-client";
import { createLktEvent as ie } from "lkt-events";
import { generateRandomString as Xe, replaceAll as Ye } from "lkt-string-tools";
import { DataState as Ze } from "lkt-data-state";
import _e from "sortablejs";
import xe from "lkt-loader";
import et from "lkt-button";
import tt from "lkt-paginator";
import lt from "lkt-field-text";
import ot from "lkt-field-textarea";
import at from "lkt-field-select";
import nt from "lkt-field-switch";
import st from "lkt-field-file";
class U {
  constructor(e = "", i = "") {
    this.key = e, this.label = i, this.sortable = !0, this.hidden = !1, this.formatter = void 0, this.checkEmpty = void 0, this.colspan = void 0, this.resource = "", this.resourceData = {}, this.isMultiple = !1, this.isLoading = !1, this.resourceLoaded = !1, this.valueSlot = "", this.editSlot = "", this.multipleDisplay = "", this.multipleDisplayEdition = "";
  }
  setIsSortable(e = !0) {
    return this.sortable = e, this;
  }
  setIsEditable(e = !0) {
    return this.editable = e, this;
  }
  setIsHidden(e = !0) {
    return this.hidden = e, this;
  }
  setIsLoading(e = !0) {
    return this.isLoading = e, this;
  }
  setFormatter(e = void 0) {
    return this.formatter = e, this;
  }
  setEmptyChecker(e = void 0) {
    return this.checkEmpty = e, this;
  }
  setColSpan(e = void 0) {
    return this.colspan = void 0, this;
  }
  getHref(e) {
    return typeof this.link == "function" ? this.link(e) : this.link;
  }
  doAction(e) {
    if (typeof this.action == "function")
      return this.action(e);
    console.warn("No action defined");
  }
  defineAsLink(e) {
    return this.type = "link", this.link = e, this;
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
  defineAsAction(e) {
    return this.type = "action", this.action = e, this;
  }
  defineAsSelect(e) {
    return this.type = "select", this.options = e, this;
  }
  showLoading() {
    return this.resource !== "" && !this.resourceLoaded;
  }
  hasToLoadResource() {
    return this.resource !== "" && !this.resourceLoaded && !this.isLoading;
  }
  setIsMultiple(e = !0) {
    return this.isMultiple = e, this;
  }
  setResource(e) {
    return this.resource = e, this;
  }
  setResourceSlot(e) {
    return this.resourceSlot = e, this;
  }
  setResourceData(e) {
    return this.resourceData = e, this;
  }
  async loadResource() {
    if (this.resourceLoaded) return this;
    if (!this.resource) return this;
    try {
      this.isLoading = !0;
      const e = await Qe(this.resource, this.resourceData);
      this.options = e.data, this.isLoading = !1, this.resourceLoaded = !0;
    } catch {
      this.isLoading = !1;
    }
    return this;
  }
  setEditSlot(e) {
    return this.editSlot = e, this;
  }
  setValueSlot(e) {
    return this.valueSlot = e, this;
  }
  setMultipleDisplay(e) {
    return this.setIsMultiple(!0), this.multipleDisplay = e, this;
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
  setMultipleDisplayEdition(e) {
    return this.setIsMultiple(!0), this.multipleDisplayEdition = e, this;
  }
  setMultipleDisplayEditionToList() {
    return this.setIsMultiple(!0), this.multipleDisplayEdition = "list", this;
  }
  setMultipleDisplayEditionToInline() {
    return this.setIsMultiple(!0), this.multipleDisplayEdition = "inline", this;
  }
  setSlotData(e) {
    return this.slotData = e, this;
  }
  setAutoLoadSelectOptions(e = !0, i = "") {
    return this.autoLoadSelectOptions = e, this.autoLoadSelectOptionsKey = i, this;
  }
  setTagMode(e = !0) {
    return this.tags = e, this;
  }
  setOptions(e = []) {
    return this.options = e, this;
  }
  setTitleSourceColumn(e) {
    return this.extractTitleFromColumn = e, this;
  }
  useForRowKey(e = !0) {
    return this.isForRowKey = e, this;
  }
}
const il = (l, e, i = !0) => O(new U(l, e).setIsSortable(i)), ul = (l, e, i, r = !0) => O(new U(l, e).setIsSortable(r).defineAsLink(i)), rl = (l, e, i, r = !0) => O(new U(l, e).setIsSortable(r).defineAsAction(i)), dl = (l, e, i = !0) => O(new U(l, e).setIsSortable(i).defineAsText()), ml = (l, e, i = !0) => O(new U(l, e).setIsSortable(i).defineAsEmail()), fl = (l, e, i = !0) => O(new U(l, e).setIsSortable(i).defineAsTel()), cl = (l, e, i = !0) => O(new U(l, e).setIsSortable(i).defineAsCheck()), pl = (l, e, i = !0) => O(new U(l, e).setIsSortable(i).defineAsSwitch()), vl = (l, e, i, r = !0) => O(new U(l, e).setIsSortable(r).defineAsSelect(i)), hl = (l, e, i = !0) => O(new U(l, e).setIsSortable(i).setIsHidden(!0)), De = (l, e, i, r) => {
  if (!i) return 0;
  let u = l[i.key], a = e[i.key];
  if (r === "asc") {
    if (u > a) return 1;
    if (a > u) return -1;
  } else {
    if (u > a) return -1;
    if (a > u) return 1;
  }
  return 0;
}, Z = (l, e, i, r = []) => {
  if (l.extractTitleFromColumn) {
    let u = r.find((a) => a.key === l.extractTitleFromColumn);
    if (u)
      return Z(u, e, i, r);
  }
  return l.formatter && typeof l.formatter == "function" ? l.formatter(e[l.key], e, l, i) : e[l.key];
}, it = (l, e, i) => {
  if (!l.colspan) return -1;
  let r = e;
  return i.forEach((u) => {
    let a = ue(l, u);
    a > 0 && a < r && (r = a);
  }), r;
}, ue = (l, e) => l.colspan === !1 ? !1 : typeof l.colspan == "function" ? l.colspan(e) : l.colspan, ut = (l, e, i) => {
  if (typeof l != "object" || !l.key || e.indexOf(l.key) > -1) return !1;
  let r = ue(l, i);
  return typeof l.colspan > "u" ? !0 : (typeof l.colspan < "u" && (typeof l.colspan == "function" ? r = parseInt(l.colspan()) : r = parseInt(l.colspan)), r > 0);
}, rt = (l = []) => {
  if (l.length > 0) {
    for (let e = 0; e < l.length; ++e)
      if (l[e].sortable) return l[e].key;
  }
  return "";
}, dt = (l, e) => {
  if (l.length > 0) {
    for (let i = 0; i < l.length; ++i)
      if (l[i].key === e) return l[i];
  }
  return null;
}, we = /* @__PURE__ */ ee({
  __name: "LktTableCell",
  props: {
    modelValue: { default: () => ({}) },
    column: { default: () => ({}) },
    columns: { default: () => [] },
    i: { default: 0 },
    editModeEnabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(l, { emit: e }) {
    const i = e, r = l, u = b(r.modelValue), a = b(u.value[r.column.key]), p = b(null), L = b(r.column.showLoading());
    F(a, (o) => {
      const s = JSON.parse(JSON.stringify(u.value));
      s[r.column.key] = o, i("update:modelValue", s);
    }), F(() => r.modelValue, (o) => {
      u.value = o, a.value = u.value[r.column.key];
    }), F(() => r.column, () => {
      r.column.resourceLoaded && se(() => L.value = !1);
    }, { deep: !0 }), r.column.hasToLoadResource() && r.column.loadResource();
    const v = g(() => ({ ...r.column.slotData, item: u.value }));
    return (o, s) => {
      const J = A("router-link"), W = A("lkt-field-text"), T = A("lkt-field-switch"), Q = A("lkt-field-file"), d = A("lkt-loader"), I = A("lkt-field-select");
      return o.column.type === "link" ? (n(), C(J, {
        key: 0,
        to: o.column.getHref(u.value)
      }, {
        default: q(() => [
          X(z(E(Z)(o.column, u.value, o.i)), 1)
        ]),
        _: 1
      }, 8, ["to"])) : o.column.type === "action" ? (n(), f("a", {
        key: 1,
        href: "#",
        onClick: s[0] || (s[0] = (c) => o.column.doAction(u.value))
      }, z(E(Z)(o.column, u.value, o.i)), 1)) : o.column.type === "text" ? (n(), C(W, {
        key: 2,
        "read-mode": !o.column.editable || !o.editModeEnabled,
        ref: (c) => p.value = c,
        "edit-slot": o.column.editSlot,
        "value-slot": o.column.valueSlot,
        "slot-data": v.value,
        modelValue: a.value,
        "onUpdate:modelValue": s[1] || (s[1] = (c) => a.value = c)
      }, null, 8, ["read-mode", "edit-slot", "value-slot", "slot-data", "modelValue"])) : o.column.type === "email" ? (n(), C(W, {
        key: 3,
        "read-mode": !o.column.editable || !o.editModeEnabled,
        ref: (c) => p.value = c,
        "edit-slot": o.column.editSlot,
        "value-slot": o.column.valueSlot,
        "slot-data": v.value,
        "is-email": "",
        modelValue: a.value,
        "onUpdate:modelValue": s[2] || (s[2] = (c) => a.value = c)
      }, null, 8, ["read-mode", "edit-slot", "value-slot", "slot-data", "modelValue"])) : o.column.type === "tel" ? (n(), C(W, {
        key: 4,
        "read-mode": !o.column.editable || !o.editModeEnabled,
        ref: (c) => p.value = c,
        "edit-slot": o.column.editSlot,
        "value-slot": o.column.valueSlot,
        "slot-data": v.value,
        "is-tel": "",
        modelValue: a.value,
        "onUpdate:modelValue": s[3] || (s[3] = (c) => a.value = c)
      }, null, 8, ["read-mode", "edit-slot", "value-slot", "slot-data", "modelValue"])) : o.column.type === "check" ? (n(), C(T, {
        key: 5,
        "is-check": "",
        "read-mode": !o.column.editable || !o.editModeEnabled,
        ref: (c) => p.value = c,
        modelValue: a.value,
        "onUpdate:modelValue": s[4] || (s[4] = (c) => a.value = c)
      }, null, 8, ["read-mode", "modelValue"])) : o.column.type === "switch" ? (n(), C(T, {
        key: 6,
        "read-mode": !o.column.editable || !o.editModeEnabled,
        ref: (c) => p.value = c,
        modelValue: a.value,
        "onUpdate:modelValue": s[5] || (s[5] = (c) => a.value = c)
      }, null, 8, ["read-mode", "modelValue"])) : o.column.type === "file" ? (n(), C(Q, {
        key: 7,
        "read-mode": !o.column.editable || !o.editModeEnabled,
        ref: (c) => p.value = c,
        modelValue: a.value,
        "onUpdate:modelValue": s[6] || (s[6] = (c) => a.value = c)
      }, null, 8, ["read-mode", "modelValue"])) : o.column.type === "select" ? (n(), f(B, { key: 8 }, [
        L.value ? (n(), C(d, { key: 0 })) : (n(), C(I, {
          key: 1,
          "read-mode": !o.column.editable || !o.editModeEnabled,
          ref: (c) => p.value = c,
          modelValue: a.value,
          "onUpdate:modelValue": s[7] || (s[7] = (c) => a.value = c),
          "slot-data": v.value,
          resource: o.column.resource,
          "use-resource-slot": o.column.resourceSlot ? o.column.resourceSlot : o.column.resource,
          "resource-data": o.column.resourceData,
          options: o.column.options,
          multiple: o.column.isMultiple,
          tags: o.column.tags,
          "multiple-display": o.column.multipleDisplay,
          "multiple-display-edition": o.column.multipleDisplayEdition
        }, null, 8, ["read-mode", "modelValue", "slot-data", "resource", "use-resource-slot", "resource-data", "options", "multiple", "tags", "multiple-display", "multiple-display-edition"]))
      ], 64)) : (n(), f(B, { key: 9 }, [
        X(z(E(Z)(o.column, u.value, o.i, o.columns)), 1)
      ], 64));
    };
  }
}), j = {
  navButtonSlot: "",
  dropButtonSlot: "",
  createButtonSlot: ""
}, mt = ["data-i", "data-draggable"], ft = {
  key: 1,
  "data-role": "invalid-drag-indicator"
}, ct = {
  key: 2,
  class: "lkt-table-nav-cell"
}, pt = { class: "lkt-table-nav-container" }, vt = /* @__PURE__ */ S("i", { class: "" }, null, -1), ht = /* @__PURE__ */ S("i", { class: "" }, null, -1), yt = ["data-column", "colspan", "title", "onClick"], kt = {
  key: 4,
  class: "lkt-table-delete-cell"
}, bt = /* @__PURE__ */ S("i", { class: "" }, null, -1), gt = /* @__PURE__ */ ee({
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
    dropConfirm: { default: "" }
  },
  emits: ["update:modelValue", "click", "show", "item-up", "item-down", "item-drop"],
  setup(l, { emit: e }) {
    const i = e, r = l, u = b(r.modelValue), a = (d, I, c) => {
      i("click", d, ie("", { item: I, column: c }));
    }, p = (d, I) => {
      i("show", d, ie("", { i: I }));
    }, L = g(() => {
      let d = [];
      return r.sortable && r.isDraggable && d.push("handle"), d.join(" ");
    }), v = g(() => j.navButtonSlot !== ""), o = g(() => j.navButtonSlot), s = g(() => j.dropButtonSlot !== ""), J = g(() => j.dropButtonSlot), W = () => {
      i("item-up", r.i);
    }, T = () => {
      i("item-down", r.i);
    }, Q = () => {
      i("item-drop", r.i);
    };
    return F(() => r.modelValue, (d) => u.value = d), F(u, (d) => {
      i("update:modelValue", d, r.i);
    }, { deep: !0 }), (d, I) => {
      const c = A("lkt-button");
      return n(), f("tr", {
        "data-i": d.i,
        "data-draggable": d.isDraggable
      }, [
        d.sortable && d.isDraggable && d.editModeEnabled ? (n(), f("td", {
          key: 0,
          "data-role": "drag-indicator",
          class: Se(L.value)
        }, null, 2)) : d.sortable && d.editModeEnabled ? (n(), f("td", ft)) : y("", !0),
        d.addNavigation && d.editModeEnabled ? (n(), f("td", ct, [
          S("div", pt, [
            Y(c, {
              palette: "table-nav",
              disabled: d.i === 0,
              onClick: W
            }, {
              default: q(() => [
                v.value ? (n(), C(oe(o.value), {
                  key: 0,
                  direction: "up"
                })) : (n(), f(B, { key: 1 }, [
                  vt,
                  X(" UP ")
                ], 64))
              ]),
              _: 1
            }, 8, ["disabled"]),
            Y(c, {
              palette: "table-nav",
              disabled: d.latestRow,
              onClick: T
            }, {
              default: q(() => [
                v.value ? (n(), C(oe(o.value), {
                  key: 0,
                  direction: "down"
                })) : (n(), f(B, { key: 1 }, [
                  ht,
                  X(" DOWN ")
                ], 64))
              ]),
              _: 1
            }, 8, ["disabled"])
          ])
        ])) : y("", !0),
        d.displayHiddenColumnsIndicator ? (n(), f("td", {
          key: 3,
          onClick: I[0] || (I[0] = (w) => p(w, d.i)),
          "data-role": "show-more",
          class: Se(d.hiddenIsVisible ? "state-open" : "")
        }, null, 2)) : y("", !0),
        (n(!0), f(B, null, P(d.visibleColumns, (w) => (n(), f(B, null, [
          E(ut)(w, d.emptyColumns, u.value) ? (n(), f("td", {
            key: 0,
            "data-column": w.key,
            colspan: E(ue)(w, u.value),
            title: E(Z)(w, u.value, d.i, d.visibleColumns),
            onClick: (R) => a(R, u.value, w)
          }, [
            d.$slots[w.key] ? K(d.$slots, w.key, {
              key: 0,
              value: u.value[w.key],
              item: u.value,
              column: w,
              i: d.i
            }) : u.value ? (n(), C(we, {
              key: 1,
              modelValue: u.value,
              "onUpdate:modelValue": I[1] || (I[1] = (R) => u.value = R),
              column: w,
              columns: d.visibleColumns,
              "edit-mode-enabled": d.editModeEnabled,
              i: d.i
            }, null, 8, ["modelValue", "column", "columns", "edit-mode-enabled", "i"])) : y("", !0)
          ], 8, yt)) : y("", !0)
        ], 64))), 256)),
        d.canDrop && d.editModeEnabled ? (n(), f("td", kt, [
          Y(c, {
            palette: "table-delete",
            "confirm-modal": d.dropConfirm,
            "confirm-data": { item: u.value },
            onClick: qe(Q, ["prevent", "stop"])
          }, {
            default: q(() => [
              s.value ? (n(), C(oe(J.value), { key: 0 })) : (n(), f(B, { key: 1 }, [
                bt,
                X(" Delete ")
              ], 64))
            ]),
            _: 1
          }, 8, ["confirm-modal", "confirm-data"])
        ])) : y("", !0)
      ], 8, mt);
    };
  }
}), Ct = { "data-role": "hidden-row" }, St = ["colspan"], Vt = ["data-column"], Dt = ["data-i"], Et = ["data-column", "title", "onClick"], wt = /* @__PURE__ */ ee({
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
  setup(l, { emit: e }) {
    const i = e, r = l, u = b(r.modelValue), a = (p, L, v) => {
      i("click", p, ie("", { item: L, column: v }));
    };
    return F(() => r.modelValue, (p) => u.value = p), F(u, () => i("update:modelValue", u.value)), (p, L) => _((n(), f("tr", Ct, [
      S("td", { colspan: p.hiddenColumnsColSpan }, [
        S("table", null, [
          S("tr", null, [
            (n(!0), f(B, null, P(p.hiddenColumns, (v) => (n(), f("th", {
              "data-column": v.key
            }, [
              S("div", null, z(v.label), 1)
            ], 8, Vt))), 256))
          ]),
          S("tr", { "data-i": p.i }, [
            (n(!0), f(B, null, P(p.hiddenColumns, (v, o) => (n(), f("td", {
              "data-column": v.key,
              title: E(Z)(v, u.value, o, p.hiddenColumns),
              onClick: (s) => a(s, u.value, v)
            }, [
              p.$slots[v.key] ? K(p.$slots, v.key, {
                key: 0,
                value: u.value[v.key],
                item: u.value,
                column: v,
                i: o
              }) : (n(), C(we, {
                key: 1,
                column: v,
                columns: p.hiddenColumns,
                modelValue: u.value,
                "onUpdate:modelValue": L[0] || (L[0] = (s) => u.value = s),
                i: o
              }, null, 8, ["column", "columns", "modelValue", "i"]))
            ], 8, Et))), 256))
          ], 8, Dt)
        ])
      ], 8, St)
    ], 512)), [
      [x, p.hiddenIsVisible]
    ]);
  }
}), Bt = /* @__PURE__ */ S("i", { class: "" }, null, -1), Ee = /* @__PURE__ */ ee({
  __name: "CreateButton",
  props: {
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(l, { emit: e }) {
    const i = e, r = g(() => j.createButtonSlot !== ""), u = g(() => j.createButtonSlot);
    return (a, p) => {
      const L = A("lkt-button");
      return n(), C(L, {
        palette: "table-create",
        disabled: a.disabled,
        onClick: p[0] || (p[0] = (v) => i("click"))
      }, {
        default: q(() => [
          r.value ? (n(), C(oe(u.value), { key: 0 })) : (n(), f(B, { key: 1 }, [
            Bt,
            X(" Add one ")
          ], 64))
        ]),
        _: 1
      }, 8, ["disabled"]);
    };
  }
}), Lt = ["id"], It = { key: 0 }, Mt = { key: 0 }, Tt = { class: "lkt-table-page-buttons" }, At = { key: 1 }, $t = { class: "switch-edition-mode" }, Rt = {
  key: 1,
  class: "lkt-table-page-buttons"
}, Nt = {
  key: 2,
  class: "lkt-table-page-filters"
}, Ft = ["data-sortable"], Ot = {
  key: 0,
  "data-role": "drag-indicator"
}, Ut = { key: 1 }, Ht = { key: 2 }, Kt = ["data-column", "data-sortable", "data-sort", "colspan", "title", "onClick"], jt = { key: 3 }, Jt = ["id"], Pt = {
  key: 4,
  class: "lkt-empty-table"
}, zt = {
  key: 5,
  class: "lkt-table-page-empty"
}, qt = { class: "lkt-table-page-buttons lkt-table-page-buttons-bottom" }, Wt = /* @__PURE__ */ ee({
  __name: "LktTable",
  props: {
    modelValue: { default: () => [] },
    columns: { default: () => [] },
    sorter: { type: Function, default: De },
    draggableChecker: { type: Function, default: (l) => !0 },
    checkValidDrag: { type: Function, default: void 0 },
    sortable: { type: Boolean, default: !1 },
    hideEmptyColumns: { type: Boolean, default: !1 },
    draggableItemKey: { default: "name" },
    page: { default: 1 },
    resource: { default: "" },
    noResultsText: { default: "No results" },
    title: { default: "" },
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
    editModeText: { default: "Edit mode" },
    switchEditionEnabled: { type: Boolean, default: !1 },
    canCreate: { type: Boolean, default: !1 },
    canDrop: { type: Boolean, default: !1 },
    dropConfirm: { default: "" },
    dropResource: { default: "" },
    addNavigation: { type: Boolean, default: !1 },
    createEnabledValidator: { type: Function, default: void 0 }
  },
  emits: ["update:modelValue", "sort", "click", "save", "error", "before-save"],
  setup(l, { expose: e, emit: i }) {
    const r = i, u = We(), a = l, p = {}, L = b(typeof a.sorter == "function" ? a.sorter : De), v = b(rt(a.columns)), o = b("asc"), s = b(a.modelValue), J = b(p);
    b(!1);
    const W = b(null), T = b(a.columns), Q = b(a.page), d = b(!0), I = b(!1), c = b(null), w = b({}), R = b(new Ze({ items: s.value }, a.dataStateConfig)), $ = b(a.editMode), Be = (t) => {
      Array.isArray(t) && (s.value = t), d.value = !1, I.value = !0, R.value.store({ items: s.value }).turnStoredIntoOriginal();
    }, Le = () => se(() => d.value = !0), Ie = () => {
      c.value.doRefresh();
    }, te = Xe(12), ae = g(() => {
      if (!a.hideEmptyColumns) return [];
      let t = [];
      return T.value.forEach((m) => {
        let h = m.key, D = !1;
        s.value.forEach((V) => {
          if (typeof V.checkEmpty == "function")
            return V.checkEmpty(V);
          V[h] && (D = !0);
        }), D || t.push(h);
      }), t;
    }), le = g(() => T.value.filter((t) => !t.hidden)), ne = g(() => T.value.filter((t) => t.hidden)), Me = g(() => {
      let t = le.value.length + 1;
      return a.sortable && ++t, t;
    }), Te = g(() => T.value.filter((t) => t.isForRowKey)), re = g(() => ne.value.length > 0 && !a.sortable), Ae = g(() => T.value.map((t) => t.key)), de = g(() => {
      let t = [];
      for (let m in u) Ae.value.indexOf(m) !== -1 && t.push(m);
      return t;
    }), me = g(() => a.hiddenSave || d.value || !a.saveResource ? !1 : $.value && R.value.changed() ? !0 : $.value), $e = g(() => a.switchEditionEnabled ? !0 : me.value || $.value && a.canCreate), Re = g(() => a.saveDisabled || typeof a.saveValidator == "function" && !a.saveValidator(s.value) ? !1 : R.value.changed()), Ne = g(() => s.value.length), Fe = (t) => {
      let m = t.target;
      if (typeof m.dataset.column > "u")
        do
          m = m.parentNode;
        while (typeof m.dataset.column > "u" && m.tagName !== "TABLE" && m.tagName !== "body");
      if (m.tagName === "TD" && (m = m.parentNode, m = m.dataset.i, typeof m < "u"))
        return s.value[m];
    }, fe = (t) => J.value["tr_" + t] === !0, ce = (t) => {
      t && t.sortable && (s.value = s.value.sort((m, h) => L.value(m, h, t, o.value)), o.value = o.value === "asc" ? "desc" : "asc", v.value = t.key, r("sort", [v.value, o.value]));
    }, pe = (t, m) => {
      r("click", t, m);
    }, ve = (t, m) => {
      let h = "tr_" + m.value.i;
      J.value[h] = typeof J.value[h] > "u" ? !0 : !J.value[h];
    }, he = () => {
      T.value.forEach((t) => {
        if (t.type === "select" && t.autoLoadSelectOptions) {
          let m = t.autoLoadSelectOptionsKey !== "" ? t.autoLoadSelectOptionsKey : t.key, h = [];
          s.value.forEach((V) => {
            Array.isArray(V[m]) && V[m].forEach((N) => h.push(N));
          });
          let D = {};
          h = h.filter(function(V) {
            return D[V.value] ? !1 : (D[V.value] = !0, !0);
          }), t.setOptions(h);
        }
      });
    }, Oe = (t) => typeof a.checkValidDrag == "function" ? a.checkValidDrag(t) : !0, ye = (t) => typeof a.draggableChecker == "function" ? a.draggableChecker(t) : !0, ke = () => {
      s.value.push({});
    }, Ue = () => {
      d.value = !0;
    }, He = () => {
      d.value = !1;
    }, Ke = (t, m) => {
      if (r("before-save"), a.saveResource && (d.value = !1, httpStatus.value = m.httpStatus, !m.success)) {
        r("error", m.httpStatus);
        return;
      }
      R.value.turnStoredIntoOriginal(), r("save", m);
    }, be = (t, m, h) => {
      if (h >= t.length)
        for (var D = h - t.length + 1; D--; )
          t.push(void 0);
      return t.splice(h, 0, t.splice(m, 1)[0]), t;
    }, je = (t) => {
      be(s.value, t, t - 1);
    }, Je = (t) => {
      be(s.value, t, t + 1);
    }, Pe = (t) => {
      s.value.splice(t, 1);
    }, ze = () => {
      let t = document.getElementById("lkt-table-body-" + te);
      w.value = new _e(t, {
        direction: "vertical",
        handle: ".handle",
        animation: 150,
        onEnd: function(m) {
          let h = m.oldIndex, D = m.newIndex, V = JSON.parse(JSON.stringify(s.value));
          s.value.splice(h, 1, V[D]), s.value.splice(D, 1, V[h]);
        },
        onMove: function(m, h) {
          return Oe(m);
        }
      });
    }, ge = (t, m, h = !1) => {
      let D = [te, "row", m];
      return h && D.push("hidden"), Te.value.forEach((V) => {
        let N = String(t[V.key]).toLowerCase();
        N.length > 50 && (N = N.substring(0, 50)), N = Ye(N, " ", "-"), D.push(N);
      }), D.join("-");
    }, Ce = g(() => typeof a.createEnabledValidator == "function" ? a.createEnabledValidator({ items: s.value }) : !0);
    return Ge(() => {
      he(), ce(dt(a.columns, v.value)), R.value.store({ items: s.value }).turnStoredIntoOriginal(), a.sortable && se(() => {
        ze();
      });
    }), F(() => a.columns, (t) => T.value = t), F(() => a.modelValue, (t) => s.value = t), F(s, (t) => {
      he(), R.value.increment({ items: t }), r("update:modelValue", t);
    }, { deep: !0 }), e({
      getItemByEvent: Fe,
      doRefresh: Ie
    }), (t, m) => {
      const h = A("lkt-button"), D = A("lkt-field-switch"), V = A("lkt-loader"), N = A("lkt-paginator");
      return n(), f("section", {
        class: "lkt-table-page",
        id: "lkt-table-page-" + E(te)
      }, [
        t.title || E(u).title ? (n(), f("header", It, [
          t.title ? (n(), f("h2", Mt, z(t.title), 1)) : y("", !0),
          E(u).title ? K(t.$slots, "title", { key: 1 }) : y("", !0)
        ])) : y("", !0),
        _(S("div", Tt, [
          _(Y(h, {
            ref: "saveButton",
            palette: "success",
            disabled: !Re.value,
            "confirm-modal": t.saveConfirm,
            "confirm-data": t.confirmData,
            resource: t.saveResource,
            "resource-data": t.saveResourceData,
            onLoading: Ue,
            onLoaded: He,
            onClick: Ke
          }, {
            default: q(() => [
              E(u)["button-save"] ? K(t.$slots, "button-save", {
                key: 0,
                items: s.value,
                editMode: t.editMode,
                canUpdate: !t.saveDisabled
              }) : (n(), f("span", At, z(t.saveText), 1))
            ]),
            _: 3
          }, 8, ["disabled", "confirm-modal", "confirm-data", "resource", "resource-data"]), [
            [x, me.value]
          ]),
          t.canCreate && $.value ? (n(), C(Ee, {
            key: 0,
            onClick: ke,
            disabled: !Ce.value
          }, null, 8, ["disabled"])) : y("", !0),
          S("div", $t, [
            _(Y(D, {
              modelValue: $.value,
              "onUpdate:modelValue": m[0] || (m[0] = (k) => $.value = k),
              label: t.editModeText
            }, null, 8, ["modelValue", "label"]), [
              [x, t.switchEditionEnabled]
            ])
          ])
        ], 512), [
          [x, $e.value]
        ]),
        E(u).buttons ? (n(), f("div", Rt, [
          K(t.$slots, "buttons")
        ])) : y("", !0),
        I.value && E(u).filters ? (n(), f("div", Nt, [
          K(t.$slots, "filters")
        ])) : y("", !0),
        d.value ? (n(), C(V, { key: 3 })) : y("", !0),
        _(S("div", {
          class: "lkt-table",
          "data-sortable": t.sortable
        }, [
          S("table", null, [
            S("thead", null, [
              S("tr", null, [
                t.sortable && $.value ? (n(), f("th", Ot)) : y("", !0),
                t.addNavigation && $.value ? (n(), f("th", Ut)) : y("", !0),
                re.value ? (n(), f("th", Ht)) : y("", !0),
                (n(!0), f(B, null, P(le.value, (k) => (n(), f(B, null, [
                  ae.value.indexOf(k.key) === -1 ? (n(), f("th", {
                    key: 0,
                    "data-column": k.key,
                    "data-sortable": k.sortable === !0,
                    "data-sort": k.sortable === !0 && v.value === k.key ? o.value : "",
                    colspan: E(it)(k, t.columns.length, s.value),
                    title: k.label,
                    onClick: (M) => ce(k)
                  }, [
                    S("div", null, z(k.label), 1)
                  ], 8, Kt)) : y("", !0)
                ], 64))), 256)),
                t.canDrop && $.value ? (n(), f("th", jt)) : y("", !0)
              ])
            ]),
            S("tbody", {
              ref: (k) => W.value = k,
              id: "lkt-table-body-" + E(te)
            }, [
              (n(!0), f(B, null, P(s.value, (k, M) => (n(), C(gt, {
                modelValue: s.value[M],
                "onUpdate:modelValue": (H) => s.value[M] = H,
                key: ge(k, M),
                i: M,
                "display-hidden-columns-indicator": re.value,
                "is-draggable": ye(k),
                sortable: t.sortable,
                "visible-columns": le.value,
                "empty-columns": ae.value,
                "add-navigation": t.addNavigation,
                "hidden-is-visible": fe(M),
                "latest-row": M + 1 === Ne.value,
                "can-drop": t.canDrop,
                "drop-confirm": t.dropConfirm,
                "edit-mode-enabled": $.value,
                onClick: pe,
                onShow: ve,
                onItemUp: je,
                onItemDown: Je,
                onItemDrop: Pe
              }, Ve({ _: 2 }, [
                P(de.value, (H) => ({
                  name: H,
                  fn: q((G) => [
                    K(t.$slots, H, {
                      item: G.item,
                      value: G.value,
                      column: G.column
                    })
                  ])
                }))
              ]), 1032, ["modelValue", "onUpdate:modelValue", "i", "display-hidden-columns-indicator", "is-draggable", "sortable", "visible-columns", "empty-columns", "add-navigation", "hidden-is-visible", "latest-row", "can-drop", "drop-confirm", "edit-mode-enabled"]))), 128)),
              ne.value.length > 0 ? (n(!0), f(B, { key: 0 }, P(s.value, (k, M) => (n(), C(wt, {
                modelValue: s.value[M],
                "onUpdate:modelValue": (H) => s.value[M] = H,
                key: ge(k, M, !0),
                i: M,
                "hidden-columns": ne.value,
                "hidden-columns-col-span": Me.value,
                "is-draggable": ye(k),
                sortable: t.sortable,
                "visible-columns": le.value,
                "empty-columns": ae.value,
                "hidden-is-visible": fe(M),
                onClick: pe,
                onShow: ve
              }, Ve({ _: 2 }, [
                P(de.value, (H) => ({
                  name: H,
                  fn: q((G) => [
                    K(t.$slots, H, {
                      item: G.item,
                      value: G.value,
                      column: G.column
                    })
                  ])
                }))
              ]), 1032, ["modelValue", "onUpdate:modelValue", "i", "hidden-columns", "hidden-columns-col-span", "is-draggable", "sortable", "visible-columns", "empty-columns", "hidden-is-visible"]))), 128)) : y("", !0)
            ], 8, Jt)
          ])
        ], 8, Ft), [
          [x, !d.value && s.value.length > 0]
        ]),
        t.$slots["no-items"] ? (n(), f("div", Pt, [
          K(t.$slots, "no-items")
        ])) : y("", !0),
        !d.value && s.value.length === 0 ? (n(), f("div", zt, z(t.noResultsText), 1)) : y("", !0),
        S("div", qt, [
          t.canCreate && $.value ? (n(), C(Ee, {
            key: 0,
            onClick: ke,
            disabled: !Ce.value
          }, null, 8, ["disabled"])) : y("", !0)
        ]),
        Y(N, {
          ref_key: "paginator",
          ref: c,
          modelValue: Q.value,
          "onUpdate:modelValue": m[1] || (m[1] = (k) => Q.value = k),
          resource: t.resource,
          filters: t.filters,
          onResults: Be,
          onLoading: Le
        }, null, 8, ["modelValue", "resource", "filters"])
      ], 8, Lt);
    };
  }
}), yl = {
  install: (l) => {
    l.component("lkt-loader") === void 0 && l.use(xe), l.component("lkt-button") === void 0 && l.use(et), l.component("lkt-paginator") === void 0 && l.use(tt), l.component("lkt-field-text") === void 0 && l.use(lt), l.component("lkt-field-textarea") === void 0 && l.use(ot), l.component("lkt-field-select") === void 0 && l.use(at), l.component("lkt-field-switch") === void 0 && l.use(nt), l.component("lkt-field-file") === void 0 && l.use(st), l.component("lkt-table") === void 0 && l.component("lkt-table", Wt);
  }
}, kl = (l) => (j.navButtonSlot = l, !0), bl = (l) => (j.dropButtonSlot = l, !0), gl = (l) => (j.createButtonSlot = l, !0);
export {
  U as LktTableColumn,
  rl as createActionColumn,
  cl as createCheckColumn,
  il as createColumn,
  ml as createEmailColumn,
  hl as createHiddenColumn,
  ul as createLinkColumn,
  vl as createSelectColumn,
  pl as createSwitchColumn,
  fl as createTelColumn,
  dl as createTextColumn,
  yl as default,
  gl as setTableCreateButtonSlot,
  bl as setTableDropButtonSlot,
  kl as setTableNavButtonSlot
};
