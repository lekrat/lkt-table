import { reactive as U, defineComponent as Q, ref as g, watch as N, nextTick as ue, computed as p, resolveComponent as $, openBlock as s, createBlock as k, withCtx as O, createTextVNode as G, toDisplayString as F, unref as E, createElementBlock as c, Fragment as L, withModifiers as Ze, resolveDynamicComponent as x, createElementVNode as S, normalizeClass as ae, createCommentVNode as b, createVNode as Y, renderList as J, renderSlot as W, withDirectives as ee, vShow as te, useSlots as xe, onMounted as et, createSlots as De } from "vue";
import { httpCall as tt } from "lkt-http-client";
import { __ as q } from "lkt-i18n";
import { createLktEvent as re } from "lkt-events";
import { generateRandomString as lt, replaceAll as ot } from "lkt-string-tools";
import { DataState as at } from "lkt-data-state";
import nt from "sortablejs";
import st from "lkt-loader";
import it from "lkt-button";
import ut from "lkt-paginator";
import rt from "lkt-field-text";
import dt from "lkt-field-textarea";
import mt from "lkt-field-select";
import ct from "lkt-field-switch";
import ft from "lkt-field-file";
class H {
  constructor(e = "", u = "") {
    this.key = e, this.label = u, this.sortable = !0, this.hidden = !1, this.formatter = void 0, this.checkEmpty = void 0, this.colspan = void 0, this.resource = "", this.resourceData = {}, this.isMultiple = !1, this.isLoading = !1, this.resourceLoaded = !1, this.valueSlot = "", this.editSlot = "", this.multipleDisplay = "", this.multipleDisplayEdition = "";
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
      const e = await tt(this.resource, this.resourceData);
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
  setAutoLoadSelectOptions(e = !0, u = "") {
    return this.autoLoadSelectOptions = e, this.autoLoadSelectOptionsKey = u, this;
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
const hl = (l, e, u = !0) => U(new H(l, e).setIsSortable(u)), yl = (l, e, u, n = !0) => U(new H(l, e).setIsSortable(n).defineAsLink(u)), kl = (l, e, u, n = !0) => U(new H(l, e).setIsSortable(n).defineAsAction(u)), bl = (l, e, u = !0) => U(new H(l, e).setIsSortable(u).defineAsText()), gl = (l, e, u = !0) => U(new H(l, e).setIsSortable(u).defineAsEmail()), Cl = (l, e, u = !0) => U(new H(l, e).setIsSortable(u).defineAsTel()), Sl = (l, e, u = !0) => U(new H(l, e).setIsSortable(u).defineAsCheck()), Vl = (l, e, u = !0) => U(new H(l, e).setIsSortable(u).defineAsSwitch()), Dl = (l, e, u, n = !0) => U(new H(l, e).setIsSortable(n).defineAsSelect(u)), wl = (l, e, u = !0) => U(new H(l, e).setIsSortable(u).setIsHidden(!0)), we = (l, e, u, n) => {
  if (!u) return 0;
  let r = l[u.key], o = e[u.key];
  if (n === "asc") {
    if (r > o) return 1;
    if (o > r) return -1;
  } else {
    if (r > o) return -1;
    if (o > r) return 1;
  }
  return 0;
}, Z = (l, e, u, n = []) => {
  if (l.extractTitleFromColumn) {
    let r = n.find((o) => o.key === l.extractTitleFromColumn);
    if (r)
      return Z(r, e, u, n);
  }
  if (l.formatter && typeof l.formatter == "function") {
    let r = l.formatter(e[l.key], e, l, u);
    return r.startsWith("__:") ? q(r.substring(3)) : r;
  }
  return e[l.key];
}, pt = (l, e, u) => {
  if (!l.colspan) return -1;
  let n = e;
  return u.forEach((r) => {
    let o = de(l, r);
    o > 0 && o < n && (n = o);
  }), n;
}, de = (l, e) => l.colspan === !1 ? !1 : typeof l.colspan == "function" ? l.colspan(e) : l.colspan, vt = (l, e, u) => {
  if (typeof l != "object" || !l.key || e.indexOf(l.key) > -1) return !1;
  let n = de(l, u);
  return typeof l.colspan > "u" ? !0 : (typeof l.colspan < "u" && (typeof l.colspan == "function" ? n = parseInt(l.colspan()) : n = parseInt(l.colspan)), n > 0);
}, ht = (l = []) => {
  if (l.length > 0) {
    for (let e = 0; e < l.length; ++e)
      if (l[e].sortable) return l[e].key;
  }
  return "";
}, yt = (l, e) => {
  if (l.length > 0) {
    for (let u = 0; u < l.length; ++u)
      if (l[u].key === e) return l[u];
  }
  return null;
}, Te = /* @__PURE__ */ Q({
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
    const u = e, n = l, r = g(n.modelValue), o = g(r.value[n.column.key]), h = g(null), C = g(n.column.showLoading());
    N(o, (a) => {
      const i = JSON.parse(JSON.stringify(r.value));
      i[n.column.key] = a, u("update:modelValue", i);
    }), N(() => n.modelValue, (a) => {
      r.value = a, o.value = r.value[n.column.key];
    }), N(() => n.column, () => {
      n.column.resourceLoaded && ue(() => C.value = !1);
    }, { deep: !0 }), n.column.hasToLoadResource() && n.column.loadResource();
    const v = p(() => ({ ...n.column.slotData, item: r.value }));
    return (a, i) => {
      const j = $("router-link"), P = $("lkt-field-text"), d = $("lkt-field-switch"), I = $("lkt-field-file"), V = $("lkt-loader"), D = $("lkt-field-select");
      return a.column.type === "link" ? (s(), k(j, {
        key: 0,
        to: a.column.getHref(r.value)
      }, {
        default: O(() => [
          G(F(E(Z)(a.column, r.value, a.i)), 1)
        ]),
        _: 1
      }, 8, ["to"])) : a.column.type === "action" ? (s(), c("a", {
        key: 1,
        href: "#",
        onClick: i[0] || (i[0] = (f) => a.column.doAction(r.value))
      }, F(E(Z)(a.column, r.value, a.i)), 1)) : a.column.type === "text" ? (s(), k(P, {
        key: 2,
        "read-mode": !a.column.editable || !a.editModeEnabled,
        ref: (f) => h.value = f,
        "edit-slot": a.column.editSlot,
        "value-slot": a.column.valueSlot,
        "slot-data": v.value,
        modelValue: o.value,
        "onUpdate:modelValue": i[1] || (i[1] = (f) => o.value = f)
      }, null, 8, ["read-mode", "edit-slot", "value-slot", "slot-data", "modelValue"])) : a.column.type === "email" ? (s(), k(P, {
        key: 3,
        "read-mode": !a.column.editable || !a.editModeEnabled,
        ref: (f) => h.value = f,
        "edit-slot": a.column.editSlot,
        "value-slot": a.column.valueSlot,
        "slot-data": v.value,
        "is-email": "",
        modelValue: o.value,
        "onUpdate:modelValue": i[2] || (i[2] = (f) => o.value = f)
      }, null, 8, ["read-mode", "edit-slot", "value-slot", "slot-data", "modelValue"])) : a.column.type === "tel" ? (s(), k(P, {
        key: 4,
        "read-mode": !a.column.editable || !a.editModeEnabled,
        ref: (f) => h.value = f,
        "edit-slot": a.column.editSlot,
        "value-slot": a.column.valueSlot,
        "slot-data": v.value,
        "is-tel": "",
        modelValue: o.value,
        "onUpdate:modelValue": i[3] || (i[3] = (f) => o.value = f)
      }, null, 8, ["read-mode", "edit-slot", "value-slot", "slot-data", "modelValue"])) : a.column.type === "check" ? (s(), k(d, {
        key: 5,
        "is-check": "",
        "read-mode": !a.column.editable || !a.editModeEnabled,
        ref: (f) => h.value = f,
        modelValue: o.value,
        "onUpdate:modelValue": i[4] || (i[4] = (f) => o.value = f)
      }, null, 8, ["read-mode", "modelValue"])) : a.column.type === "switch" ? (s(), k(d, {
        key: 6,
        "read-mode": !a.column.editable || !a.editModeEnabled,
        ref: (f) => h.value = f,
        modelValue: o.value,
        "onUpdate:modelValue": i[5] || (i[5] = (f) => o.value = f)
      }, null, 8, ["read-mode", "modelValue"])) : a.column.type === "file" ? (s(), k(I, {
        key: 7,
        "read-mode": !a.column.editable || !a.editModeEnabled,
        ref: (f) => h.value = f,
        modelValue: o.value,
        "onUpdate:modelValue": i[6] || (i[6] = (f) => o.value = f)
      }, null, 8, ["read-mode", "modelValue"])) : a.column.type === "select" ? (s(), c(L, { key: 8 }, [
        C.value ? (s(), k(V, { key: 0 })) : (s(), k(D, {
          key: 1,
          "read-mode": !a.column.editable || !a.editModeEnabled,
          ref: (f) => h.value = f,
          modelValue: o.value,
          "onUpdate:modelValue": i[7] || (i[7] = (f) => o.value = f),
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
      ], 64)) : (s(), c(L, { key: 9 }, [
        G(F(E(Z)(a.column, r.value, a.i, a.columns)), 1)
      ], 64));
    };
  }
}), R = {
  navButtonSlot: "",
  dropButtonSlot: "",
  createButtonSlot: ""
}, kt = /* @__PURE__ */ S("i", { class: "" }, null, -1), bt = /* @__PURE__ */ Q({
  __name: "DropButton",
  props: {
    disabled: { type: Boolean, default: !1 },
    text: { type: Boolean, default: "" }
  },
  emits: ["click"],
  setup(l, { emit: e }) {
    const u = e, n = l, r = p(() => R.dropButtonSlot !== ""), o = p(() => R.dropButtonSlot), h = p(() => n.text.startsWith("__:") ? q(n.text.substring(3)) : n.text);
    return (C, v) => {
      const a = $("lkt-button");
      return s(), k(a, {
        palette: "table-delete",
        disabled: C.disabled,
        onClick: v[0] || (v[0] = Ze((i) => u("click"), ["prevent", "stop"]))
      }, {
        default: O(() => [
          r.value ? (s(), k(x(o.value), { key: 0 })) : (s(), c(L, { key: 1 }, [
            kt,
            G(" " + F(h.value), 1)
          ], 64))
        ]),
        _: 1
      }, 8, ["disabled"]);
    };
  }
}), gt = ["data-i", "data-draggable"], Ct = {
  key: 1,
  "data-role": "invalid-drag-indicator"
}, St = {
  key: 2,
  class: "lkt-table-nav-cell"
}, Vt = { class: "lkt-table-nav-container" }, Dt = /* @__PURE__ */ S("i", { class: "" }, null, -1), wt = /* @__PURE__ */ S("i", { class: "" }, null, -1), Bt = ["data-column", "colspan", "title", "onClick"], Tt = {
  key: 4,
  class: "lkt-table-delete-cell"
}, Et = /* @__PURE__ */ Q({
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
    dropText: { default: "" }
  },
  emits: ["update:modelValue", "click", "show", "item-up", "item-down", "item-drop"],
  setup(l, { emit: e }) {
    const u = e, n = l, r = g(n.modelValue), o = (d, I, V) => {
      u("click", d, re("", { item: I, column: V }));
    }, h = (d, I) => {
      u("show", d, re("", { i: I }));
    }, C = p(() => {
      let d = [];
      return n.sortable && n.isDraggable && d.push("handle"), d.join(" ");
    }), v = p(() => R.navButtonSlot !== ""), a = p(() => R.navButtonSlot);
    p(() => R.dropButtonSlot !== ""), p(() => R.dropButtonSlot);
    const i = () => {
      u("item-up", n.i);
    }, j = () => {
      u("item-down", n.i);
    }, P = () => {
      u("item-drop", n.i);
    };
    return N(() => n.modelValue, (d) => r.value = d), N(r, (d) => {
      u("update:modelValue", d, n.i);
    }, { deep: !0 }), (d, I) => {
      const V = $("lkt-button");
      return s(), c("tr", {
        "data-i": d.i,
        "data-draggable": d.isDraggable
      }, [
        d.sortable && d.isDraggable && d.editModeEnabled ? (s(), c("td", {
          key: 0,
          "data-role": "drag-indicator",
          class: ae(C.value)
        }, null, 2)) : d.sortable && d.editModeEnabled ? (s(), c("td", Ct)) : b("", !0),
        d.addNavigation && d.editModeEnabled ? (s(), c("td", St, [
          S("div", Vt, [
            Y(V, {
              palette: "table-nav",
              disabled: d.i === 0,
              onClick: i
            }, {
              default: O(() => [
                v.value ? (s(), k(x(a.value), {
                  key: 0,
                  direction: "up"
                })) : (s(), c(L, { key: 1 }, [
                  Dt,
                  G(" UP ")
                ], 64))
              ]),
              _: 1
            }, 8, ["disabled"]),
            Y(V, {
              palette: "table-nav",
              disabled: d.latestRow,
              onClick: j
            }, {
              default: O(() => [
                v.value ? (s(), k(x(a.value), {
                  key: 0,
                  direction: "down"
                })) : (s(), c(L, { key: 1 }, [
                  wt,
                  G(" DOWN ")
                ], 64))
              ]),
              _: 1
            }, 8, ["disabled"])
          ])
        ])) : b("", !0),
        d.displayHiddenColumnsIndicator ? (s(), c("td", {
          key: 3,
          onClick: I[0] || (I[0] = (D) => h(D, d.i)),
          "data-role": "show-more",
          class: ae(d.hiddenIsVisible ? "state-open" : "")
        }, null, 2)) : b("", !0),
        (s(!0), c(L, null, J(d.visibleColumns, (D) => (s(), c(L, null, [
          E(vt)(D, d.emptyColumns, r.value) ? (s(), c("td", {
            key: 0,
            "data-column": D.key,
            colspan: E(de)(D, r.value),
            title: E(Z)(D, r.value, d.i, d.visibleColumns),
            onClick: (f) => o(f, r.value, D)
          }, [
            d.$slots[D.key] ? W(d.$slots, D.key, {
              key: 0,
              value: r.value[D.key],
              item: r.value,
              column: D,
              i: d.i
            }) : r.value ? (s(), k(Te, {
              key: 1,
              modelValue: r.value,
              "onUpdate:modelValue": I[1] || (I[1] = (f) => r.value = f),
              column: D,
              columns: d.visibleColumns,
              "edit-mode-enabled": d.editModeEnabled,
              i: d.i
            }, null, 8, ["modelValue", "column", "columns", "edit-mode-enabled", "i"])) : b("", !0)
          ], 8, Bt)) : b("", !0)
        ], 64))), 256)),
        d.canDrop && d.editModeEnabled ? (s(), c("td", Tt, [
          Y(bt, {
            text: d.dropText,
            onClick: P
          }, null, 8, ["text"])
        ])) : b("", !0)
      ], 8, gt);
    };
  }
}), Lt = { "data-role": "hidden-row" }, It = ["colspan"], Mt = ["data-column"], $t = ["data-i"], At = ["data-column", "title", "onClick"], Rt = /* @__PURE__ */ Q({
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
    const u = e, n = l, r = g(n.modelValue), o = (h, C, v) => {
      u("click", h, re("", { item: C, column: v }));
    };
    return N(() => n.modelValue, (h) => r.value = h), N(r, () => u("update:modelValue", r.value)), (h, C) => ee((s(), c("tr", Lt, [
      S("td", { colspan: h.hiddenColumnsColSpan }, [
        S("table", null, [
          S("tr", null, [
            (s(!0), c(L, null, J(h.hiddenColumns, (v) => (s(), c("th", {
              "data-column": v.key
            }, [
              S("div", null, F(v.label), 1)
            ], 8, Mt))), 256))
          ]),
          S("tr", { "data-i": h.i }, [
            (s(!0), c(L, null, J(h.hiddenColumns, (v, a) => (s(), c("td", {
              "data-column": v.key,
              title: E(Z)(v, r.value, a, h.hiddenColumns),
              onClick: (i) => o(i, r.value, v)
            }, [
              h.$slots[v.key] ? W(h.$slots, v.key, {
                key: 0,
                value: r.value[v.key],
                item: r.value,
                column: v,
                i: a
              }) : (s(), k(Te, {
                key: 1,
                column: v,
                columns: h.hiddenColumns,
                modelValue: r.value,
                "onUpdate:modelValue": C[0] || (C[0] = (i) => r.value = i),
                i: a
              }, null, 8, ["column", "columns", "modelValue", "i"]))
            ], 8, At))), 256))
          ], 8, $t)
        ])
      ], 8, It)
    ], 512)), [
      [te, h.hiddenIsVisible]
    ]);
  }
}), _t = /* @__PURE__ */ S("i", { class: "" }, null, -1), Be = /* @__PURE__ */ Q({
  __name: "CreateButton",
  props: {
    disabled: { type: Boolean, default: !1 },
    text: { type: Boolean, default: "" }
  },
  emits: ["click"],
  setup(l, { emit: e }) {
    const u = e, n = l, r = p(() => R.createButtonSlot !== ""), o = p(() => R.createButtonSlot), h = p(() => n.text.startsWith("__:") ? q(n.text.substring(3)) : n.text);
    return (C, v) => {
      const a = $("lkt-button");
      return s(), k(a, {
        palette: "table-create",
        disabled: C.disabled,
        onClick: v[0] || (v[0] = (i) => u("click"))
      }, {
        default: O(() => [
          r.value ? (s(), k(x(o.value), { key: 0 })) : (s(), c(L, { key: 1 }, [
            _t,
            G(" " + F(h.value), 1)
          ], 64))
        ]),
        _: 1
      }, 8, ["disabled"]);
    };
  }
}), Ot = ["data-column", "data-sortable", "data-sort", "colspan", "title"], Nt = /* @__PURE__ */ Q({
  __name: "TableHeader",
  props: {
    column: { default: () => ({}) },
    sortBy: { default: "" },
    sortDirection: { default: "" },
    amountOfColumns: { default: 0 },
    items: { default: () => [] }
  },
  emits: ["click"],
  setup(l, { emit: e }) {
    const u = e, n = l, r = p(() => pt(n.column, n.amountOfColumns, n.items)), o = p(() => n.column.sortable === !0), h = p(() => o.value && n.sortBy === n.column.key ? n.sortDirection : ""), C = p(() => n.column.label.startsWith("__:") ? q(n.column.label.substring(3)) : n.column.label), v = () => {
      u("click", n.column);
    };
    return (a, i) => (s(), c("th", {
      "data-column": a.column.key,
      "data-sortable": o.value,
      "data-sort": h.value,
      colspan: r.value,
      title: C.value,
      onClick: v
    }, [
      S("div", null, F(C.value), 1)
    ], 8, Ot));
  }
}), Ft = ["id"], Ut = { key: 0 }, Ht = { class: "lkt-table-page-buttons" }, Kt = { key: 1 }, Wt = { class: "switch-edition-mode" }, jt = {
  key: 0,
  class: "lkt-table-page-buttons"
}, Jt = {
  key: 1,
  class: "lkt-table-page-filters"
}, Pt = ["data-sortable"], zt = {
  key: 0,
  "data-role": "drag-indicator"
}, qt = { key: 1 }, Gt = { key: 2 }, Qt = { key: 3 }, Xt = ["id"], Yt = {
  key: 3,
  class: "lkt-empty-table"
}, Zt = {
  key: 4,
  class: "lkt-table-page-empty"
}, xt = {
  key: 5,
  class: "lkt-table-page-buttons lkt-table-page-buttons-bottom"
}, el = /* @__PURE__ */ Q({
  __name: "LktTable",
  props: {
    modelValue: { default: () => [] },
    columns: { default: () => [] },
    sorter: { type: Function, default: we },
    draggableChecker: { type: Function, default: (l) => !0 },
    checkValidDrag: { type: Function, default: void 0 },
    sortable: { type: Boolean, default: !1 },
    hideEmptyColumns: { type: Boolean, default: !1 },
    draggableItemKey: { default: "name" },
    page: { default: 1 },
    resource: { default: "" },
    noResultsText: { default: "No results" },
    title: { default: "" },
    titleTag: { default: "h2" },
    titleIcon: { default: "h2" },
    wrapContentTag: { default: "div" },
    wrapContentClass: { default: "" },
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
    dropText: { default: "Delete" },
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
  setup(l, { expose: e, emit: u }) {
    const n = u, r = xe(), o = l, h = {}, C = g(typeof o.sorter == "function" ? o.sorter : we), v = g(ht(o.columns)), a = g("asc"), i = g(o.modelValue), j = g(h), P = g(null), d = g(o.columns), I = g(o.page), V = g(!0), D = g(!1), f = g(null), Ee = g({}), X = g(new at({ items: i.value }, o.dataStateConfig)), A = g(o.editMode), Le = (t) => {
      Array.isArray(t) && (i.value = t), V.value = !1, D.value = !0, X.value.store({ items: i.value }).turnStoredIntoOriginal();
    }, Ie = () => ue(() => V.value = !0), Me = () => {
      f.value.doRefresh();
    }, le = lt(12), ne = p(() => {
      if (!o.hideEmptyColumns) return [];
      let t = [];
      return d.value.forEach((m) => {
        let y = m.key, B = !1;
        i.value.forEach((w) => {
          if (typeof w.checkEmpty == "function")
            return w.checkEmpty(w);
          w[y] && (B = !0);
        }), B || t.push(y);
      }), t;
    }), oe = p(() => d.value.filter((t) => !t.hidden)), se = p(() => d.value.filter((t) => t.hidden)), $e = p(() => {
      let t = oe.value.length + 1;
      return o.sortable && ++t, t;
    }), Ae = p(() => d.value.filter((t) => t.isForRowKey)), me = p(() => se.value.length > 0 && !o.sortable), Re = p(() => d.value.map((t) => t.key)), ce = p(() => {
      let t = [];
      for (let m in r) Re.value.indexOf(m) !== -1 && t.push(m);
      return t;
    }), fe = p(() => o.hiddenSave || V.value || !o.saveResource ? !1 : A.value && X.value.changed() ? !0 : A.value), _e = p(() => o.switchEditionEnabled ? !0 : fe.value || A.value && o.canCreate), Oe = p(() => o.saveDisabled || typeof o.saveValidator == "function" && !o.saveValidator(i.value) ? !1 : X.value.changed()), Ne = p(() => i.value.length), Fe = p(() => ({
      items: i.value,
      ...o.saveResourceData
    })), Ue = p(() => o.titleTag === "" ? "h2" : o.titleTag), He = p(() => o.wrapContentTag === "" ? "div" : o.wrapContentTag), ie = p(() => o.title.startsWith("__:") ? q(o.title.substring(3)) : o.title), Ke = p(() => o.saveText.startsWith("__:") ? q(o.saveText.substring(3)) : o.saveText), We = p(() => o.editModeText.startsWith("__:") ? q(o.editModeText.substring(3)) : o.editModeText), je = (t) => {
      let m = t.target;
      if (typeof m.dataset.column > "u")
        do
          m = m.parentNode;
        while (typeof m.dataset.column > "u" && m.tagName !== "TABLE" && m.tagName !== "body");
      if (m.tagName === "TD" && (m = m.parentNode, m = m.dataset.i, typeof m < "u"))
        return i.value[m];
    }, pe = (t) => j.value["tr_" + t] === !0, ve = (t) => {
      t && t.sortable && (i.value = i.value.sort((m, y) => C.value(m, y, t, a.value)), a.value = a.value === "asc" ? "desc" : "asc", v.value = t.key, n("sort", [v.value, a.value]));
    }, he = (t, m) => {
      n("click", t, m);
    }, ye = (t, m) => {
      let y = "tr_" + m.value.i;
      j.value[y] = typeof j.value[y] > "u" ? !0 : !j.value[y];
    }, ke = () => {
      d.value.forEach((t) => {
        if (t.type === "select" && t.autoLoadSelectOptions) {
          let m = t.autoLoadSelectOptionsKey !== "" ? t.autoLoadSelectOptionsKey : t.key, y = [];
          i.value.forEach((w) => {
            Array.isArray(w[m]) && w[m].forEach((_) => y.push(_));
          });
          let B = {};
          y = y.filter(function(w) {
            return B[w.value] ? !1 : (B[w.value] = !0, !0);
          }), t.setOptions(y);
        }
      });
    }, Je = (t) => typeof o.checkValidDrag == "function" ? o.checkValidDrag(t) : !0, be = (t) => typeof o.draggableChecker == "function" ? o.draggableChecker(t) : !0, ge = () => {
      i.value.push({});
    }, Pe = () => {
      V.value = !0;
    }, ze = () => {
      V.value = !1;
    }, qe = (t, m) => {
      if (n("before-save"), o.saveResource && (V.value = !1, !m.success)) {
        n("error", m.httpStatus);
        return;
      }
      X.value.turnStoredIntoOriginal(), n("save", m);
    }, Ce = (t, m, y) => {
      if (y >= t.length) {
        let B = y - t.length + 1;
        for (; B--; ) t.push(void 0);
      }
      return t.splice(y, 0, t.splice(m, 1)[0]), t;
    }, Ge = (t) => {
      Ce(i.value, t, t - 1);
    }, Qe = (t) => {
      Ce(i.value, t, t + 1);
    }, Xe = (t) => {
      i.value.splice(t, 1);
    }, Ye = () => {
      let t = document.getElementById("lkt-table-body-" + le);
      Ee.value = new nt(t, {
        direction: "vertical",
        handle: ".handle",
        animation: 150,
        onEnd: function(m) {
          let y = m.oldIndex, B = m.newIndex, w = JSON.parse(JSON.stringify(i.value));
          i.value.splice(y, 1, w[B]), i.value.splice(B, 1, w[y]);
        },
        onMove: function(m, y) {
          return Je(m);
        }
      });
    }, Se = (t, m, y = !1) => {
      let B = [le, "row", m];
      return y && B.push("hidden"), Ae.value.forEach((w) => {
        let _ = String(t[w.key]).toLowerCase();
        _.length > 50 && (_ = _.substring(0, 50)), _ = ot(_, " ", "-"), B.push(_);
      }), B.join("-");
    }, Ve = p(() => typeof o.createEnabledValidator == "function" ? o.createEnabledValidator({ items: i.value }) : !0);
    return et(() => {
      ke(), ve(yt(o.columns, v.value)), X.value.store({ items: i.value }).turnStoredIntoOriginal(), o.sortable && ue(() => {
        Ye();
      });
    }), N(() => o.columns, (t) => d.value = t), N(() => o.modelValue, (t) => i.value = t), N(i, (t) => {
      ke(), X.value.increment({ items: t }), n("update:modelValue", t);
    }, { deep: !0 }), e({
      getItemByEvent: je,
      doRefresh: Me
    }), (t, m) => {
      const y = $("lkt-button"), B = $("lkt-field-switch"), w = $("lkt-loader"), _ = $("lkt-paginator");
      return s(), c("section", {
        class: "lkt-table-page",
        id: "lkt-table-page-" + E(le)
      }, [
        ie.value || E(r).title ? (s(), c("header", Ut, [
          ie.value ? (s(), k(x(Ue.value), { key: 0 }, {
            default: O(() => [
              t.titleIcon ? (s(), c("i", {
                key: 0,
                class: ae(t.titleIcon)
              }, null, 2)) : b("", !0),
              G(" " + F(ie.value), 1)
            ]),
            _: 1
          })) : b("", !0),
          E(r).title ? W(t.$slots, "title", { key: 1 }) : b("", !0)
        ])) : b("", !0),
        (s(), k(x(He.value), {
          class: ae(["lkt-table-page-content-wrapper", t.wrapContentClass])
        }, {
          default: O(() => [
            ee(S("div", Ht, [
              ee(Y(y, {
                ref: "saveButton",
                palette: "success",
                disabled: !Oe.value,
                "confirm-modal": t.saveConfirm,
                "confirm-data": t.confirmData,
                resource: t.saveResource,
                "resource-data": Fe.value,
                onLoading: Pe,
                onLoaded: ze,
                onClick: qe
              }, {
                default: O(() => [
                  E(r)["button-save"] ? W(t.$slots, "button-save", {
                    key: 0,
                    items: i.value,
                    editMode: t.editMode,
                    canUpdate: !t.saveDisabled
                  }) : (s(), c("span", Kt, F(Ke.value), 1))
                ]),
                _: 3
              }, 8, ["disabled", "confirm-modal", "confirm-data", "resource", "resource-data"]), [
                [te, fe.value]
              ]),
              t.canCreate && A.value ? (s(), k(Be, {
                key: 0,
                disabled: !Ve.value,
                text: t.createText,
                onClick: ge
              }, null, 8, ["disabled", "text"])) : b("", !0),
              S("div", Wt, [
                ee(Y(B, {
                  modelValue: A.value,
                  "onUpdate:modelValue": m[0] || (m[0] = (T) => A.value = T),
                  label: We.value
                }, null, 8, ["modelValue", "label"]), [
                  [te, t.switchEditionEnabled]
                ])
              ])
            ], 512), [
              [te, _e.value]
            ]),
            E(r).buttons ? (s(), c("div", jt, [
              W(t.$slots, "buttons")
            ])) : b("", !0),
            D.value && E(r).filters ? (s(), c("div", Jt, [
              W(t.$slots, "filters", {
                items: i.value,
                isLoading: V.value
              })
            ])) : b("", !0),
            V.value ? (s(), k(w, { key: 2 })) : b("", !0),
            ee(S("div", {
              class: "lkt-table",
              "data-sortable": t.sortable
            }, [
              S("table", null, [
                S("thead", null, [
                  S("tr", null, [
                    t.sortable && A.value ? (s(), c("th", zt)) : b("", !0),
                    t.addNavigation && A.value ? (s(), c("th", qt)) : b("", !0),
                    me.value ? (s(), c("th", Gt)) : b("", !0),
                    (s(!0), c(L, null, J(oe.value, (T) => (s(), c(L, null, [
                      ne.value.indexOf(T.key) === -1 ? (s(), k(Nt, {
                        key: 0,
                        column: T,
                        "sort-by": v.value,
                        "sort-direction": a.value,
                        "amount-of-columns": t.columns.length,
                        items: i.value,
                        onClick: (M) => ve(T)
                      }, null, 8, ["column", "sort-by", "sort-direction", "amount-of-columns", "items", "onClick"])) : b("", !0)
                    ], 64))), 256)),
                    t.canDrop && A.value ? (s(), c("th", Qt)) : b("", !0)
                  ])
                ]),
                S("tbody", {
                  ref: (T) => P.value = T,
                  id: "lkt-table-body-" + E(le)
                }, [
                  (s(!0), c(L, null, J(i.value, (T, M) => (s(), k(Et, {
                    modelValue: i.value[M],
                    "onUpdate:modelValue": (K) => i.value[M] = K,
                    key: Se(T, M),
                    i: M,
                    "display-hidden-columns-indicator": me.value,
                    "is-draggable": be(T),
                    sortable: t.sortable,
                    "visible-columns": oe.value,
                    "empty-columns": ne.value,
                    "add-navigation": t.addNavigation,
                    "hidden-is-visible": pe(M),
                    "latest-row": M + 1 === Ne.value,
                    "can-drop": t.canDrop,
                    "drop-confirm": t.dropConfirm,
                    "drop-text": t.dropText,
                    "edit-mode-enabled": A.value,
                    onClick: he,
                    onShow: ye,
                    onItemUp: Ge,
                    onItemDown: Qe,
                    onItemDrop: Xe
                  }, De({ _: 2 }, [
                    J(ce.value, (K) => ({
                      name: K,
                      fn: O((z) => [
                        W(t.$slots, K, {
                          item: z.item,
                          value: z.value,
                          column: z.column
                        })
                      ])
                    }))
                  ]), 1032, ["modelValue", "onUpdate:modelValue", "i", "display-hidden-columns-indicator", "is-draggable", "sortable", "visible-columns", "empty-columns", "add-navigation", "hidden-is-visible", "latest-row", "can-drop", "drop-confirm", "drop-text", "edit-mode-enabled"]))), 128)),
                  se.value.length > 0 ? (s(!0), c(L, { key: 0 }, J(i.value, (T, M) => (s(), k(Rt, {
                    modelValue: i.value[M],
                    "onUpdate:modelValue": (K) => i.value[M] = K,
                    key: Se(T, M, !0),
                    i: M,
                    "hidden-columns": se.value,
                    "hidden-columns-col-span": $e.value,
                    "is-draggable": be(T),
                    sortable: t.sortable,
                    "visible-columns": oe.value,
                    "empty-columns": ne.value,
                    "hidden-is-visible": pe(M),
                    onClick: he,
                    onShow: ye
                  }, De({ _: 2 }, [
                    J(ce.value, (K) => ({
                      name: K,
                      fn: O((z) => [
                        W(t.$slots, K, {
                          item: z.item,
                          value: z.value,
                          column: z.column
                        })
                      ])
                    }))
                  ]), 1032, ["modelValue", "onUpdate:modelValue", "i", "hidden-columns", "hidden-columns-col-span", "is-draggable", "sortable", "visible-columns", "empty-columns", "hidden-is-visible"]))), 128)) : b("", !0)
                ], 8, Xt)
              ])
            ], 8, Pt), [
              [te, !V.value && i.value.length > 0]
            ]),
            t.$slots["no-items"] ? (s(), c("div", Yt, [
              W(t.$slots, "no-items")
            ])) : b("", !0),
            !V.value && i.value.length === 0 ? (s(), c("div", Zt, F(t.noResultsText), 1)) : b("", !0),
            t.canCreate && A.value ? (s(), c("div", xt, [
              t.canCreate && A.value ? (s(), k(Be, {
                key: 0,
                disabled: !Ve.value,
                text: t.createText,
                onClick: ge
              }, null, 8, ["disabled", "text"])) : b("", !0)
            ])) : b("", !0),
            Y(_, {
              ref_key: "paginator",
              ref: f,
              modelValue: I.value,
              "onUpdate:modelValue": m[1] || (m[1] = (T) => I.value = T),
              resource: t.resource,
              filters: t.filters,
              onResults: Le,
              onLoading: Ie
            }, null, 8, ["modelValue", "resource", "filters"])
          ]),
          _: 3
        }, 8, ["class"]))
      ], 8, Ft);
    };
  }
}), Bl = {
  install: (l) => {
    l.component("lkt-loader") === void 0 && l.use(st), l.component("lkt-button") === void 0 && l.use(it), l.component("lkt-paginator") === void 0 && l.use(ut), l.component("lkt-field-text") === void 0 && l.use(rt), l.component("lkt-field-textarea") === void 0 && l.use(dt), l.component("lkt-field-select") === void 0 && l.use(mt), l.component("lkt-field-switch") === void 0 && l.use(ct), l.component("lkt-field-file") === void 0 && l.use(ft), l.component("lkt-table") === void 0 && l.component("lkt-table", el);
  }
}, Tl = (l) => (R.navButtonSlot = l, !0), El = (l) => (R.dropButtonSlot = l, !0), Ll = (l) => (R.createButtonSlot = l, !0);
export {
  H as LktTableColumn,
  kl as createActionColumn,
  Sl as createCheckColumn,
  hl as createColumn,
  gl as createEmailColumn,
  wl as createHiddenColumn,
  yl as createLinkColumn,
  Dl as createSelectColumn,
  Vl as createSwitchColumn,
  Cl as createTelColumn,
  bl as createTextColumn,
  Bl as default,
  Ll as setTableCreateButtonSlot,
  El as setTableDropButtonSlot,
  Tl as setTableNavButtonSlot
};
