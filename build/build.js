import { reactive as U, defineComponent as ee, ref as b, watch as O, nextTick as se, computed as C, resolveComponent as $, openBlock as a, createBlock as g, withCtx as q, createTextVNode as Q, toDisplayString as z, unref as w, createElementBlock as p, Fragment as E, normalizeClass as Ce, createCommentVNode as y, createElementVNode as S, createVNode as X, resolveDynamicComponent as oe, renderList as P, renderSlot as K, withModifiers as Pe, withDirectives as Z, vShow as x, useSlots as ze, onMounted as qe, createSlots as Se } from "vue";
import { httpCall as We } from "lkt-http-client";
import { createLktEvent as ie } from "lkt-events";
import { generateRandomString as _e, replaceAll as Ge } from "lkt-string-tools";
import { DataState as Qe } from "lkt-data-state";
import Xe from "sortablejs";
class F {
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
    if (this.resourceLoaded)
      return this;
    if (!this.resource)
      return this;
    try {
      this.isLoading = !0;
      const e = await We(this.resource, this.resourceData);
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
const Pt = (l, e, i = !0) => U(new F(l, e).setIsSortable(i)), zt = (l, e, i, r = !0) => U(new F(l, e).setIsSortable(r).defineAsLink(i)), qt = (l, e, i, r = !0) => U(new F(l, e).setIsSortable(r).defineAsAction(i)), Wt = (l, e, i = !0) => U(new F(l, e).setIsSortable(i).defineAsText()), _t = (l, e, i = !0) => U(new F(l, e).setIsSortable(i).defineAsEmail()), Gt = (l, e, i = !0) => U(new F(l, e).setIsSortable(i).defineAsTel()), Qt = (l, e, i = !0) => U(new F(l, e).setIsSortable(i).defineAsCheck()), Xt = (l, e, i = !0) => U(new F(l, e).setIsSortable(i).defineAsSwitch()), Yt = (l, e, i, r = !0) => U(new F(l, e).setIsSortable(r).defineAsSelect(i)), Zt = (l, e, i = !0) => U(new F(l, e).setIsSortable(i).setIsHidden(!0)), Ve = (l, e, i, r) => {
  if (!i)
    return 0;
  let u = l[i.key], n = e[i.key];
  if (r === "asc") {
    if (u > n)
      return 1;
    if (n > u)
      return -1;
  } else {
    if (u > n)
      return -1;
    if (n > u)
      return 1;
  }
  return 0;
}, Y = (l, e, i, r = []) => {
  if (l.extractTitleFromColumn) {
    let u = r.find((n) => n.key === l.extractTitleFromColumn);
    if (u)
      return Y(u, e, i, r);
  }
  return l.formatter && typeof l.formatter == "function" ? l.formatter(e[l.key], e, l, i) : e[l.key];
}, Ye = (l, e, i) => {
  if (!l.colspan)
    return -1;
  let r = e;
  return i.forEach((u) => {
    let n = ue(l, u);
    n > 0 && n < r && (r = n);
  }), r;
}, ue = (l, e) => l.colspan === !1 ? !1 : typeof l.colspan == "function" ? l.colspan(e) : l.colspan, Ze = (l, e, i) => {
  if (typeof l != "object" || !l.key || e.indexOf(l.key) > -1)
    return !1;
  let r = ue(l, i);
  return typeof l.colspan > "u" ? !0 : (typeof l.colspan < "u" && (typeof l.colspan == "function" ? r = parseInt(l.colspan()) : r = parseInt(l.colspan)), r > 0);
}, xe = (l = []) => {
  if (l.length > 0) {
    for (let e = 0; e < l.length; ++e)
      if (l[e].sortable)
        return l[e].key;
  }
  return "";
}, et = (l, e) => {
  if (l.length > 0) {
    for (let i = 0; i < l.length; ++i)
      if (l[i].key === e)
        return l[i];
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
    const i = e, r = l, u = b(r.modelValue), n = b(u.value[r.column.key]), c = b(null), I = b(r.column.showLoading());
    O(n, (o) => {
      const s = JSON.parse(JSON.stringify(u.value));
      s[r.column.key] = o, i("update:modelValue", s);
    }), O(() => r.modelValue, (o) => {
      u.value = o, n.value = u.value[r.column.key];
    }), O(() => r.column, () => {
      r.column.resourceLoaded && se(() => I.value = !1);
    }, { deep: !0 }), r.column.hasToLoadResource() && r.column.loadResource();
    const v = C(() => ({ ...r.column.slotData, item: u.value }));
    return (o, s) => {
      const J = $("router-link"), W = $("lkt-field-text"), T = $("lkt-field-switch"), G = $("lkt-field-file"), d = $("lkt-loader"), L = $("lkt-field-select");
      return o.column.type === "link" ? (a(), g(J, {
        key: 0,
        to: o.column.getHref(u.value)
      }, {
        default: q(() => [
          Q(z(w(Y)(o.column, u.value, o.i)), 1)
        ]),
        _: 1
      }, 8, ["to"])) : o.column.type === "action" ? (a(), p("a", {
        key: 1,
        href: "#",
        onClick: s[0] || (s[0] = (f) => o.column.doAction(u.value))
      }, z(w(Y)(o.column, u.value, o.i)), 1)) : o.column.type === "text" ? (a(), g(W, {
        key: 2,
        "read-mode": !o.column.editable || !o.editModeEnabled,
        ref: (f) => c.value = f,
        "edit-slot": o.column.editSlot,
        "value-slot": o.column.valueSlot,
        "slot-data": v.value,
        modelValue: n.value,
        "onUpdate:modelValue": s[1] || (s[1] = (f) => n.value = f)
      }, null, 8, ["read-mode", "edit-slot", "value-slot", "slot-data", "modelValue"])) : o.column.type === "email" ? (a(), g(W, {
        key: 3,
        "read-mode": !o.column.editable || !o.editModeEnabled,
        ref: (f) => c.value = f,
        "edit-slot": o.column.editSlot,
        "value-slot": o.column.valueSlot,
        "slot-data": v.value,
        "is-email": "",
        modelValue: n.value,
        "onUpdate:modelValue": s[2] || (s[2] = (f) => n.value = f)
      }, null, 8, ["read-mode", "edit-slot", "value-slot", "slot-data", "modelValue"])) : o.column.type === "tel" ? (a(), g(W, {
        key: 4,
        "read-mode": !o.column.editable || !o.editModeEnabled,
        ref: (f) => c.value = f,
        "edit-slot": o.column.editSlot,
        "value-slot": o.column.valueSlot,
        "slot-data": v.value,
        "is-tel": "",
        modelValue: n.value,
        "onUpdate:modelValue": s[3] || (s[3] = (f) => n.value = f)
      }, null, 8, ["read-mode", "edit-slot", "value-slot", "slot-data", "modelValue"])) : o.column.type === "check" ? (a(), g(T, {
        key: 5,
        "is-check": "",
        "read-mode": !o.column.editable || !o.editModeEnabled,
        ref: (f) => c.value = f,
        modelValue: n.value,
        "onUpdate:modelValue": s[4] || (s[4] = (f) => n.value = f)
      }, null, 8, ["read-mode", "modelValue"])) : o.column.type === "switch" ? (a(), g(T, {
        key: 6,
        "read-mode": !o.column.editable || !o.editModeEnabled,
        ref: (f) => c.value = f,
        modelValue: n.value,
        "onUpdate:modelValue": s[5] || (s[5] = (f) => n.value = f)
      }, null, 8, ["read-mode", "modelValue"])) : o.column.type === "file" ? (a(), g(G, {
        key: 7,
        "read-mode": !o.column.editable || !o.editModeEnabled,
        ref: (f) => c.value = f,
        modelValue: n.value,
        "onUpdate:modelValue": s[6] || (s[6] = (f) => n.value = f)
      }, null, 8, ["read-mode", "modelValue"])) : o.column.type === "select" ? (a(), p(E, { key: 8 }, [
        I.value ? (a(), g(d, { key: 0 })) : (a(), g(L, {
          key: 1,
          "read-mode": !o.column.editable || !o.editModeEnabled,
          ref: (f) => c.value = f,
          modelValue: n.value,
          "onUpdate:modelValue": s[7] || (s[7] = (f) => n.value = f),
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
      ], 64)) : (a(), p(E, { key: 9 }, [
        Q(z(w(Y)(o.column, u.value, o.i, o.columns)), 1)
      ], 64));
    };
  }
}), j = {
  navButtonSlot: "",
  dropButtonSlot: "",
  createButtonSlot: ""
}, tt = ["data-i", "data-draggable"], lt = {
  key: 1,
  "data-role": "invalid-drag-indicator"
}, ot = {
  key: 2,
  class: "lkt-table-nav-cell"
}, at = { class: "lkt-table-nav-container" }, nt = /* @__PURE__ */ S("i", { class: "" }, null, -1), st = /* @__PURE__ */ S("i", { class: "" }, null, -1), it = ["data-column", "colspan", "title", "onClick"], ut = {
  key: 4,
  class: "lkt-table-delete-cell"
}, rt = /* @__PURE__ */ S("i", { class: "" }, null, -1), dt = /* @__PURE__ */ ee({
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
    const i = e, r = l, u = b(r.modelValue), n = (d, L, f) => {
      i("click", d, ie("", { item: L, column: f }));
    }, c = (d, L) => {
      i("show", d, ie("", { i: L }));
    }, I = C(() => {
      let d = [];
      return r.sortable && r.isDraggable && d.push("handle"), d.join(" ");
    }), v = C(() => j.navButtonSlot !== ""), o = C(() => j.navButtonSlot), s = C(() => j.dropButtonSlot !== ""), J = C(() => j.dropButtonSlot), W = () => {
      i("item-up", r.i);
    }, T = () => {
      i("item-down", r.i);
    }, G = () => {
      i("item-drop", r.i);
    };
    return O(() => r.modelValue, (d) => u.value = d), O(u, (d) => {
      i("update:modelValue", d, r.i);
    }, { deep: !0 }), (d, L) => {
      const f = $("lkt-button");
      return a(), p("tr", {
        "data-i": d.i,
        "data-draggable": d.isDraggable
      }, [
        d.sortable && d.isDraggable && d.editModeEnabled ? (a(), p("td", {
          key: 0,
          "data-role": "drag-indicator",
          class: Ce(I.value)
        }, null, 2)) : d.sortable && d.editModeEnabled ? (a(), p("td", lt)) : y("", !0),
        d.addNavigation && d.editModeEnabled ? (a(), p("td", ot, [
          S("div", at, [
            X(f, {
              palette: "table-nav",
              disabled: d.i === 0,
              onClick: W
            }, {
              default: q(() => [
                v.value ? (a(), g(oe(o.value), {
                  key: 0,
                  direction: "up"
                })) : (a(), p(E, { key: 1 }, [
                  nt,
                  Q(" UP ")
                ], 64))
              ]),
              _: 1
            }, 8, ["disabled"]),
            X(f, {
              palette: "table-nav",
              disabled: d.latestRow,
              onClick: T
            }, {
              default: q(() => [
                v.value ? (a(), g(oe(o.value), {
                  key: 0,
                  direction: "down"
                })) : (a(), p(E, { key: 1 }, [
                  st,
                  Q(" DOWN ")
                ], 64))
              ]),
              _: 1
            }, 8, ["disabled"])
          ])
        ])) : y("", !0),
        d.displayHiddenColumnsIndicator ? (a(), p("td", {
          key: 3,
          onClick: L[0] || (L[0] = (B) => c(B, d.i)),
          "data-role": "show-more",
          class: Ce(d.hiddenIsVisible ? "state-open" : "")
        }, null, 2)) : y("", !0),
        (a(!0), p(E, null, P(d.visibleColumns, (B) => (a(), p(E, null, [
          w(Ze)(B, d.emptyColumns, u.value) ? (a(), p("td", {
            key: 0,
            "data-column": B.key,
            colspan: w(ue)(B, u.value),
            title: w(Y)(B, u.value, d.i, d.visibleColumns),
            onClick: (R) => n(R, u.value, B)
          }, [
            d.$slots[B.key] ? K(d.$slots, B.key, {
              key: 0,
              value: u.value[B.key],
              item: u.value,
              column: B,
              i: d.i
            }) : u.value ? (a(), g(we, {
              key: 1,
              modelValue: u.value,
              "onUpdate:modelValue": L[1] || (L[1] = (R) => u.value = R),
              column: B,
              columns: d.visibleColumns,
              "edit-mode-enabled": d.editModeEnabled,
              i: d.i
            }, null, 8, ["modelValue", "column", "columns", "edit-mode-enabled", "i"])) : y("", !0)
          ], 8, it)) : y("", !0)
        ], 64))), 256)),
        d.canDrop && d.editModeEnabled ? (a(), p("td", ut, [
          X(f, {
            palette: "table-delete",
            "confirm-modal": d.dropConfirm,
            "confirm-data": { item: u.value },
            onClick: Pe(G, ["prevent", "stop"])
          }, {
            default: q(() => [
              s.value ? (a(), g(oe(J.value), { key: 0 })) : (a(), p(E, { key: 1 }, [
                rt,
                Q(" Delete ")
              ], 64))
            ]),
            _: 1
          }, 8, ["confirm-modal", "confirm-data"])
        ])) : y("", !0)
      ], 8, tt);
    };
  }
}), mt = { "data-role": "hidden-row" }, pt = ["colspan"], ft = ["data-column"], ct = ["data-i"], vt = ["data-column", "title", "onClick"], ht = /* @__PURE__ */ ee({
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
    const i = e, r = l, u = b(r.modelValue), n = (c, I, v) => {
      i("click", c, ie("", { item: I, column: v }));
    };
    return O(() => r.modelValue, (c) => u.value = c), O(u, () => i("update:modelValue", u.value)), (c, I) => Z((a(), p("tr", mt, [
      S("td", { colspan: c.hiddenColumnsColSpan }, [
        S("table", null, [
          S("tr", null, [
            (a(!0), p(E, null, P(c.hiddenColumns, (v) => (a(), p("th", {
              "data-column": v.key
            }, [
              S("div", null, z(v.label), 1)
            ], 8, ft))), 256))
          ]),
          S("tr", { "data-i": c.i }, [
            (a(!0), p(E, null, P(c.hiddenColumns, (v, o) => (a(), p("td", {
              "data-column": v.key,
              title: w(Y)(v, u.value, o, c.hiddenColumns),
              onClick: (s) => n(s, u.value, v)
            }, [
              c.$slots[v.key] ? K(c.$slots, v.key, {
                key: 0,
                value: u.value[v.key],
                item: u.value,
                column: v,
                i: o
              }) : (a(), g(we, {
                key: 1,
                column: v,
                columns: c.hiddenColumns,
                modelValue: u.value,
                "onUpdate:modelValue": I[0] || (I[0] = (s) => u.value = s),
                i: o
              }, null, 8, ["column", "columns", "modelValue", "i"]))
            ], 8, vt))), 256))
          ], 8, ct)
        ])
      ], 8, pt)
    ], 512)), [
      [x, c.hiddenIsVisible]
    ]);
  }
}), yt = /* @__PURE__ */ S("i", { class: "" }, null, -1), De = /* @__PURE__ */ ee({
  __name: "CreateButton",
  emits: ["click"],
  setup(l, { emit: e }) {
    const i = e, r = C(() => j.createButtonSlot !== ""), u = C(() => j.createButtonSlot);
    return (n, c) => {
      const I = $("lkt-button");
      return a(), g(I, {
        palette: "table-create",
        onClick: c[0] || (c[0] = (v) => i("click"))
      }, {
        default: q(() => [
          r.value ? (a(), g(oe(u.value), { key: 0 })) : (a(), p(E, { key: 1 }, [
            yt,
            Q(" Add one ")
          ], 64))
        ]),
        _: 1
      });
    };
  }
}), kt = ["id"], bt = { key: 0 }, gt = { key: 0 }, Ct = { class: "lkt-table-page-buttons" }, St = { key: 1 }, Vt = { class: "switch-edition-mode" }, Dt = {
  key: 1,
  class: "lkt-table-page-buttons"
}, wt = {
  key: 2,
  class: "lkt-table-page-filters"
}, Bt = ["data-sortable"], Et = {
  key: 0,
  "data-role": "drag-indicator"
}, It = { key: 1 }, Lt = { key: 2 }, Mt = ["data-column", "data-sortable", "data-sort", "colspan", "title", "onClick"], Tt = { key: 3 }, $t = ["id"], At = {
  key: 4,
  class: "lkt-empty-table"
}, Rt = {
  key: 5,
  class: "lkt-table-page-empty"
}, Nt = { class: "lkt-table-page-buttons lkt-table-page-buttons-bottom" }, Ot = /* @__PURE__ */ ee({
  __name: "LktTable",
  props: {
    modelValue: { default: () => [] },
    columns: { default: () => [] },
    sorter: { type: Function, default: Ve },
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
    addNavigation: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "sort", "click", "save", "error", "before-save"],
  setup(l, { expose: e, emit: i }) {
    const r = i, u = ze(), n = l, c = {}, I = b(typeof n.sorter == "function" ? n.sorter : Ve), v = b(xe(n.columns)), o = b("asc"), s = b(n.modelValue), J = b(c);
    b(!1);
    const W = b(null), T = b(n.columns), G = b(n.page), d = b(!0), L = b(!1), f = b(null), B = b({}), R = b(new Qe({ items: s.value }, n.dataStateConfig)), A = b(n.editMode), Be = (t) => {
      Array.isArray(t) && (s.value = t), d.value = !1, L.value = !0, R.value.store({ items: s.value }).turnStoredIntoOriginal();
    }, Ee = () => se(() => d.value = !0), Ie = () => {
      f.value.doRefresh();
    }, te = _e(12), ae = C(() => {
      if (!n.hideEmptyColumns)
        return [];
      let t = [];
      return T.value.forEach((m) => {
        let h = m.key, D = !1;
        s.value.forEach((V) => {
          if (typeof V.checkEmpty == "function")
            return V.checkEmpty(V);
          V[h] && (D = !0);
        }), D || t.push(h);
      }), t;
    }), le = C(() => T.value.filter((t) => !t.hidden)), ne = C(() => T.value.filter((t) => t.hidden)), Le = C(() => {
      let t = le.value.length + 1;
      return n.sortable && ++t, t;
    }), Me = C(() => T.value.filter((t) => t.isForRowKey)), re = C(() => ne.value.length > 0 && !n.sortable), Te = C(() => T.value.map((t) => t.key)), de = C(() => {
      let t = [];
      for (let m in u)
        Te.value.indexOf(m) !== -1 && t.push(m);
      return t;
    }), me = C(() => n.hiddenSave || d.value || !n.saveResource ? !1 : A.value && R.value.changed() ? !0 : A.value), $e = C(() => n.switchEditionEnabled ? !0 : me.value || A.value && n.canCreate), Ae = C(() => n.saveDisabled || typeof n.saveValidator == "function" && !n.saveValidator(s.value) ? !1 : R.value.changed()), Re = C(() => s.value.length), Ne = (t) => {
      let m = t.target;
      if (typeof m.dataset.column > "u")
        do
          m = m.parentNode;
        while (typeof m.dataset.column > "u" && m.tagName !== "TABLE" && m.tagName !== "body");
      if (m.tagName === "TD" && (m = m.parentNode, m = m.dataset.i, typeof m < "u"))
        return s.value[m];
    }, pe = (t) => J.value["tr_" + t] === !0, fe = (t) => {
      t && t.sortable && (s.value = s.value.sort((m, h) => I.value(m, h, t, o.value)), o.value = o.value === "asc" ? "desc" : "asc", v.value = t.key, r("sort", [v.value, o.value]));
    }, ce = (t, m) => {
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
    }, ye = (t) => typeof n.draggableChecker == "function" ? n.draggableChecker(t) : !0, ke = () => {
      s.value.push({});
    }, Oe = () => {
      d.value = !0;
    }, Ue = () => {
      d.value = !1;
    }, Fe = (t, m) => {
      if (r("before-save"), n.saveResource && (d.value = !1, httpStatus.value = m.httpStatus, !m.success)) {
        r("error", m.httpStatus);
        return;
      }
      R.value.turnStoredIntoOriginal(), r("save", m);
    }, be = (t, m, h) => {
      if (h >= t.length)
        for (var D = h - t.length + 1; D--; )
          t.push(void 0);
      return t.splice(h, 0, t.splice(m, 1)[0]), t;
    }, He = (t) => {
      be(s.value, t, t - 1);
    }, Ke = (t) => {
      be(s.value, t, t + 1);
    }, je = (t) => {
      s.value.splice(t, 1);
    }, Je = () => {
      let t = document.getElementById("lkt-table-body-" + te);
      B.value = new Xe(t, {
        direction: "vertical",
        handle: ".handle",
        animation: 150,
        onEnd: function(m) {
          let h = m.oldIndex, D = m.newIndex, V = JSON.parse(JSON.stringify(s.value));
          s.value.splice(h, 1, V[D]), s.value.splice(D, 1, V[h]);
        }
      });
    }, ge = (t, m, h) => {
      let D = [te, "row", m];
      return h && D.push("hidden"), Me.value.forEach((V) => {
        let N = String(t[V.key]).toLowerCase();
        N.length > 50 && (N = N.substring(0, 50)), N = Ge(N, " ", "-"), D.push(N);
      }), D.join("-");
    };
    return qe(() => {
      he(), fe(et(n.columns, v.value)), R.value.store({ items: s.value }).turnStoredIntoOriginal(), n.sortable && se(() => {
        Je();
      });
    }), O(() => n.columns, (t) => T.value = t), O(() => n.modelValue, (t) => s.value = t), O(s, (t) => {
      he(), R.value.increment({ items: t }), r("update:modelValue", t);
    }, { deep: !0 }), e({
      getItemByEvent: Ne,
      doRefresh: Ie
    }), (t, m) => {
      const h = $("lkt-button"), D = $("lkt-field-switch"), V = $("lkt-loader"), N = $("lkt-paginator");
      return a(), p("section", {
        class: "lkt-table-page",
        id: "lkt-table-page-" + w(te)
      }, [
        t.title || w(u).title ? (a(), p("header", bt, [
          t.title ? (a(), p("h2", gt, z(t.title), 1)) : y("", !0),
          w(u).title ? K(t.$slots, "title", { key: 1 }) : y("", !0)
        ])) : y("", !0),
        Z(S("div", Ct, [
          Z(X(h, {
            ref: "saveButton",
            palette: "success",
            disabled: !Ae.value,
            "confirm-modal": t.saveConfirm,
            "confirm-data": t.confirmData,
            resource: t.saveResource,
            "resource-data": t.saveResourceData,
            onLoading: Oe,
            onLoaded: Ue,
            onClick: Fe
          }, {
            default: q(() => [
              w(u)["button-save"] ? K(t.$slots, "button-save", {
                key: 0,
                items: s.value,
                editMode: t.editMode,
                canUpdate: !t.saveDisabled
              }) : (a(), p("span", St, z(t.saveText), 1))
            ]),
            _: 3
          }, 8, ["disabled", "confirm-modal", "confirm-data", "resource", "resource-data"]), [
            [x, me.value]
          ]),
          t.canCreate && A.value ? (a(), g(De, {
            key: 0,
            onClick: ke
          })) : y("", !0),
          S("div", Vt, [
            Z(X(D, {
              modelValue: A.value,
              "onUpdate:modelValue": m[0] || (m[0] = (k) => A.value = k),
              label: t.editModeText
            }, null, 8, ["modelValue", "label"]), [
              [x, t.switchEditionEnabled]
            ])
          ])
        ], 512), [
          [x, $e.value]
        ]),
        w(u).buttons ? (a(), p("div", Dt, [
          K(t.$slots, "buttons")
        ])) : y("", !0),
        L.value && w(u).filters ? (a(), p("div", wt, [
          K(t.$slots, "filters")
        ])) : y("", !0),
        d.value ? (a(), g(V, { key: 3 })) : y("", !0),
        Z(S("div", {
          class: "lkt-table",
          "data-sortable": t.sortable
        }, [
          S("table", null, [
            S("thead", null, [
              S("tr", null, [
                t.sortable && A.value ? (a(), p("th", Et)) : y("", !0),
                t.addNavigation && A.value ? (a(), p("th", It)) : y("", !0),
                re.value ? (a(), p("th", Lt)) : y("", !0),
                (a(!0), p(E, null, P(le.value, (k) => (a(), p(E, null, [
                  ae.value.indexOf(k.key) === -1 ? (a(), p("th", {
                    key: 0,
                    "data-column": k.key,
                    "data-sortable": k.sortable === !0,
                    "data-sort": k.sortable === !0 && v.value === k.key ? o.value : "",
                    colspan: w(Ye)(k, t.columns.length, s.value),
                    title: k.label,
                    onClick: (M) => fe(k)
                  }, [
                    S("div", null, z(k.label), 1)
                  ], 8, Mt)) : y("", !0)
                ], 64))), 256)),
                t.canDrop && A.value ? (a(), p("th", Tt)) : y("", !0)
              ])
            ]),
            S("tbody", {
              ref: (k) => W.value = k,
              id: "lkt-table-body-" + w(te)
            }, [
              (a(!0), p(E, null, P(s.value, (k, M) => (a(), g(dt, {
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
                "hidden-is-visible": pe(M),
                "latest-row": M + 1 === Re.value,
                "can-drop": t.canDrop,
                "drop-confirm": t.dropConfirm,
                "edit-mode-enabled": A.value,
                onClick: ce,
                onShow: ve,
                onItemUp: He,
                onItemDown: Ke,
                onItemDrop: je
              }, Se({ _: 2 }, [
                P(de.value, (H) => ({
                  name: H,
                  fn: q((_) => [
                    K(t.$slots, H, {
                      item: _.item,
                      value: _.value,
                      column: _.column
                    })
                  ])
                }))
              ]), 1032, ["modelValue", "onUpdate:modelValue", "i", "display-hidden-columns-indicator", "is-draggable", "sortable", "visible-columns", "empty-columns", "add-navigation", "hidden-is-visible", "latest-row", "can-drop", "drop-confirm", "edit-mode-enabled"]))), 128)),
              ne.value.length > 0 ? (a(!0), p(E, { key: 0 }, P(s.value, (k, M) => (a(), g(ht, {
                modelValue: s.value[M],
                "onUpdate:modelValue": (H) => s.value[M] = H,
                key: ge(k, M, !0),
                i: M,
                "hidden-columns": ne.value,
                "hidden-columns-col-span": Le.value,
                "is-draggable": ye(k),
                sortable: t.sortable,
                "visible-columns": le.value,
                "empty-columns": ae.value,
                "hidden-is-visible": pe(M),
                onClick: ce,
                onShow: ve
              }, Se({ _: 2 }, [
                P(de.value, (H) => ({
                  name: H,
                  fn: q((_) => [
                    K(t.$slots, H, {
                      item: _.item,
                      value: _.value,
                      column: _.column
                    })
                  ])
                }))
              ]), 1032, ["modelValue", "onUpdate:modelValue", "i", "hidden-columns", "hidden-columns-col-span", "is-draggable", "sortable", "visible-columns", "empty-columns", "hidden-is-visible"]))), 128)) : y("", !0)
            ], 8, $t)
          ])
        ], 8, Bt), [
          [x, !d.value && s.value.length > 0]
        ]),
        t.$slots["no-items"] ? (a(), p("div", At, [
          K(t.$slots, "no-items")
        ])) : y("", !0),
        !d.value && s.value.length === 0 ? (a(), p("div", Rt, z(t.noResultsText), 1)) : y("", !0),
        S("div", Nt, [
          t.canCreate && A.value ? (a(), g(De, {
            key: 0,
            onClick: ke
          })) : y("", !0)
        ]),
        X(N, {
          ref_key: "paginator",
          ref: f,
          modelValue: G.value,
          "onUpdate:modelValue": m[1] || (m[1] = (k) => G.value = k),
          resource: t.resource,
          filters: t.filters,
          onResults: Be,
          onLoading: Ee
        }, null, 8, ["modelValue", "resource", "filters"])
      ], 8, kt);
    };
  }
}), xt = {
  install: (l) => {
    l.component("lkt-table") === void 0 && l.component("lkt-table", Ot);
  }
}, el = (l) => (j.navButtonSlot = l, !0), tl = (l) => (j.dropButtonSlot = l, !0), ll = (l) => (j.createButtonSlot = l, !0);
export {
  F as LktTableColumn,
  qt as createActionColumn,
  Qt as createCheckColumn,
  Pt as createColumn,
  _t as createEmailColumn,
  Zt as createHiddenColumn,
  zt as createLinkColumn,
  Yt as createSelectColumn,
  Xt as createSwitchColumn,
  Gt as createTelColumn,
  Wt as createTextColumn,
  xt as default,
  ll as setTableCreateButtonSlot,
  tl as setTableDropButtonSlot,
  el as setTableNavButtonSlot
};
