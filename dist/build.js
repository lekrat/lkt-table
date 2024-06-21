import { reactive as F, defineComponent as le, ref as b, watch as R, nextTick as fe, computed as S, resolveComponent as T, openBlock as o, createBlock as k, withCtx as O, createTextVNode as Y, toDisplayString as q, unref as D, createElementBlock as p, Fragment as w, normalizeClass as Be, createCommentVNode as y, createElementVNode as B, createVNode as Z, resolveDynamicComponent as oe, renderList as P, renderSlot as U, withModifiers as qe, withDirectives as ee, vShow as te, useSlots as We, onMounted as Ge, mergeProps as Qe, createSlots as pe } from "vue";
import Xe from "vuedraggable";
import { httpCall as Ye } from "lkt-http-client";
import { createLktEvent as ve } from "lkt-events";
import { generateRandomString as Ze } from "lkt-string-tools";
import { DataState as _e } from "lkt-data-state";
import xe from "sortablejs";
class H {
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
    if (this.resourceLoaded)
      return this;
    if (!this.resource)
      return this;
    try {
      this.isLoading = !0;
      const t = await Ye(this.resource, this.resourceData);
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
}
const Wt = (l, t, i = !0) => F(new H(l, t).setIsSortable(i)), Gt = (l, t, i, d = !0) => F(new H(l, t).setIsSortable(d).defineAsLink(i)), Qt = (l, t, i, d = !0) => F(new H(l, t).setIsSortable(d).defineAsAction(i)), Xt = (l, t, i = !0) => F(new H(l, t).setIsSortable(i).defineAsText()), Yt = (l, t, i = !0) => F(new H(l, t).setIsSortable(i).defineAsEmail()), Zt = (l, t, i = !0) => F(new H(l, t).setIsSortable(i).defineAsTel()), _t = (l, t, i = !0) => F(new H(l, t).setIsSortable(i).defineAsCheck()), xt = (l, t, i = !0) => F(new H(l, t).setIsSortable(i).defineAsSwitch()), el = (l, t, i, d = !0) => F(new H(l, t).setIsSortable(d).defineAsSelect(i)), tl = (l, t, i = !0) => F(new H(l, t).setIsSortable(i).setIsHidden(!0)), Ie = (l, t, i, d) => {
  if (!i)
    return 0;
  let u = l[i.key], s = t[i.key];
  if (d === "asc") {
    if (u > s)
      return 1;
    if (s > u)
      return -1;
  } else {
    if (u > s)
      return -1;
    if (s > u)
      return 1;
  }
  return 0;
}, _ = (l, t, i, d = []) => {
  if (l.extractTitleFromColumn) {
    let u = d.find((s) => s.key === l.extractTitleFromColumn);
    if (u)
      return _(u, t, i, d);
  }
  return l.formatter && typeof l.formatter == "function" ? l.formatter(t[l.key], t, l, i) : t[l.key];
}, et = (l, t, i) => {
  if (!l.colspan)
    return -1;
  let d = t;
  return i.forEach((u) => {
    let s = ce(l, u);
    s > 0 && s < d && (d = s);
  }), d;
}, ce = (l, t) => l.colspan === !1 ? !1 : typeof l.colspan == "function" ? l.colspan(t) : l.colspan, tt = (l, t, i) => {
  if (typeof l != "object" || !l.key || t.indexOf(l.key) > -1)
    return !1;
  let d = ce(l, i);
  return typeof l.colspan > "u" ? !0 : (typeof l.colspan < "u" && (typeof l.colspan == "function" ? d = parseInt(l.colspan()) : d = parseInt(l.colspan)), d > 0);
}, lt = (l = []) => {
  if (l.length > 0) {
    for (let t = 0; t < l.length; ++t)
      if (l[t].sortable)
        return l[t].key;
  }
  return "";
}, at = (l, t) => {
  if (l.length > 0) {
    for (let i = 0; i < l.length; ++i)
      if (l[i].key === t)
        return l[i];
  }
  return null;
}, Le = /* @__PURE__ */ le({
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
    const i = t, d = l, u = b(d.modelValue), s = b(u.value[d.column.key]), v = b(null), L = b(d.column.showLoading());
    R(s, (a) => {
      const n = JSON.parse(JSON.stringify(u.value));
      n[d.column.key] = a, i("update:modelValue", n);
    }), R(() => d.modelValue, (a) => {
      u.value = a, s.value = u.value[d.column.key];
    }), R(() => d.column, () => {
      d.column.resourceLoaded && fe(() => L.value = !1);
    }, { deep: !0 }), d.column.hasToLoadResource() && d.column.loadResource();
    const c = S(() => ({ ...d.column.slotData, item: u.value }));
    return (a, n) => {
      const z = T("router-link"), J = T("lkt-field-text"), W = T("lkt-field-switch"), N = T("lkt-field-file"), m = T("lkt-loader"), g = T("lkt-field-select");
      return a.column.type === "link" ? (o(), k(z, {
        key: 0,
        to: a.column.getHref(u.value)
      }, {
        default: O(() => [
          Y(q(D(_)(a.column, u.value, a.i)), 1)
        ]),
        _: 1
      }, 8, ["to"])) : a.column.type === "action" ? (o(), p("a", {
        key: 1,
        href: "#",
        onClick: n[0] || (n[0] = (f) => a.column.doAction(u.value))
      }, q(D(_)(a.column, u.value, a.i)), 1)) : a.column.type === "text" ? (o(), k(J, {
        key: 2,
        "read-mode": !a.column.editable || !a.editModeEnabled,
        ref: (f) => v.value = f,
        "edit-slot": a.column.editSlot,
        "value-slot": a.column.valueSlot,
        "slot-data": c.value,
        modelValue: s.value,
        "onUpdate:modelValue": n[1] || (n[1] = (f) => s.value = f)
      }, null, 8, ["read-mode", "edit-slot", "value-slot", "slot-data", "modelValue"])) : a.column.type === "email" ? (o(), k(J, {
        key: 3,
        "read-mode": !a.column.editable || !a.editModeEnabled,
        ref: (f) => v.value = f,
        "edit-slot": a.column.editSlot,
        "value-slot": a.column.valueSlot,
        "slot-data": c.value,
        "is-email": "",
        modelValue: s.value,
        "onUpdate:modelValue": n[2] || (n[2] = (f) => s.value = f)
      }, null, 8, ["read-mode", "edit-slot", "value-slot", "slot-data", "modelValue"])) : a.column.type === "tel" ? (o(), k(J, {
        key: 4,
        "read-mode": !a.column.editable || !a.editModeEnabled,
        ref: (f) => v.value = f,
        "edit-slot": a.column.editSlot,
        "value-slot": a.column.valueSlot,
        "slot-data": c.value,
        "is-tel": "",
        modelValue: s.value,
        "onUpdate:modelValue": n[3] || (n[3] = (f) => s.value = f)
      }, null, 8, ["read-mode", "edit-slot", "value-slot", "slot-data", "modelValue"])) : a.column.type === "check" ? (o(), k(W, {
        key: 5,
        "is-check": "",
        "read-mode": !a.column.editable || !a.editModeEnabled,
        ref: (f) => v.value = f,
        modelValue: s.value,
        "onUpdate:modelValue": n[4] || (n[4] = (f) => s.value = f)
      }, null, 8, ["read-mode", "modelValue"])) : a.column.type === "switch" ? (o(), k(W, {
        key: 6,
        "read-mode": !a.column.editable || !a.editModeEnabled,
        ref: (f) => v.value = f,
        modelValue: s.value,
        "onUpdate:modelValue": n[5] || (n[5] = (f) => s.value = f)
      }, null, 8, ["read-mode", "modelValue"])) : a.column.type === "file" ? (o(), k(N, {
        key: 7,
        "read-mode": !a.column.editable || !a.editModeEnabled,
        ref: (f) => v.value = f,
        modelValue: s.value,
        "onUpdate:modelValue": n[6] || (n[6] = (f) => s.value = f)
      }, null, 8, ["read-mode", "modelValue"])) : a.column.type === "select" ? (o(), p(w, { key: 8 }, [
        L.value ? (o(), k(m, { key: 0 })) : (o(), k(g, {
          key: 1,
          "read-mode": !a.column.editable || !a.editModeEnabled,
          ref: (f) => v.value = f,
          modelValue: s.value,
          "onUpdate:modelValue": n[7] || (n[7] = (f) => s.value = f),
          "slot-data": c.value,
          resource: a.column.resource,
          "use-resource-slot": a.column.resourceSlot ? a.column.resourceSlot : a.column.resource,
          "resource-data": a.column.resourceData,
          options: a.column.options,
          multiple: a.column.isMultiple,
          tags: a.column.tags,
          "multiple-display": a.column.multipleDisplay,
          "multiple-display-edition": a.column.multipleDisplayEdition
        }, null, 8, ["read-mode", "modelValue", "slot-data", "resource", "use-resource-slot", "resource-data", "options", "multiple", "tags", "multiple-display", "multiple-display-edition"]))
      ], 64)) : (o(), p(w, { key: 9 }, [
        Y(q(D(_)(a.column, u.value, a.i, a.columns)), 1)
      ], 64));
    };
  }
}), j = {
  navButtonSlot: "",
  dropButtonSlot: "",
  createButtonSlot: ""
}, ot = ["data-i", "data-draggable"], nt = {
  key: 1,
  "data-role": "invalid-drag-indicator"
}, st = {
  key: 2,
  class: "lkt-table-nav-cell"
}, it = { class: "lkt-table-nav-container" }, ut = /* @__PURE__ */ B("i", { class: "" }, null, -1), rt = /* @__PURE__ */ B("i", { class: "" }, null, -1), dt = ["data-column", "colspan", "title", "onClick"], mt = {
  key: 4,
  class: "lkt-table-delete-cell"
}, pt = /* @__PURE__ */ B("i", { class: "" }, null, -1), we = /* @__PURE__ */ le({
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
  setup(l, { emit: t }) {
    const i = t, d = l, u = b(d.modelValue), s = (m, g, f) => {
      i("click", m, ve("", { item: g, column: f }));
    }, v = (m, g) => {
      i("show", m, ve("", { i: g }));
    }, L = S(() => {
      let m = [];
      return d.sortable && d.isDraggable && m.push("handle"), m.join(" ");
    }), c = S(() => j.navButtonSlot !== ""), a = S(() => j.navButtonSlot), n = S(() => j.dropButtonSlot !== ""), z = S(() => j.dropButtonSlot), J = () => {
      i("item-up", d.i);
    }, W = () => {
      i("item-down", d.i);
    }, N = () => {
      i("item-drop", d.i);
    };
    return R(() => d.modelValue, (m) => u.value = m), R(u, (m) => {
      i("update:modelValue", m, d.i);
    }, { deep: !0 }), (m, g) => {
      const f = T("lkt-button");
      return o(), p("tr", {
        "data-i": m.i,
        "data-draggable": m.isDraggable
      }, [
        m.sortable && m.isDraggable ? (o(), p("td", {
          key: 0,
          "data-role": "drag-indicator",
          class: Be(L.value)
        }, null, 2)) : m.sortable ? (o(), p("td", nt)) : y("", !0),
        m.addNavigation && m.editModeEnabled ? (o(), p("td", st, [
          B("div", it, [
            Z(f, {
              palette: "table-nav",
              disabled: m.i === 0,
              onClick: J
            }, {
              default: O(() => [
                c.value ? (o(), k(oe(a.value), {
                  key: 0,
                  direction: "up"
                })) : (o(), p(w, { key: 1 }, [
                  ut,
                  Y(" UP ")
                ], 64))
              ]),
              _: 1
            }, 8, ["disabled"]),
            Z(f, {
              palette: "table-nav",
              disabled: m.latestRow,
              onClick: W
            }, {
              default: O(() => [
                c.value ? (o(), k(oe(a.value), {
                  key: 0,
                  direction: "down"
                })) : (o(), p(w, { key: 1 }, [
                  rt,
                  Y(" DOWN ")
                ], 64))
              ]),
              _: 1
            }, 8, ["disabled"])
          ])
        ])) : y("", !0),
        m.displayHiddenColumnsIndicator ? (o(), p("td", {
          key: 3,
          onClick: g[0] || (g[0] = (I) => v(I, m.i)),
          "data-role": "show-more",
          class: Be(m.hiddenIsVisible ? "state-open" : "")
        }, null, 2)) : y("", !0),
        (o(!0), p(w, null, P(m.visibleColumns, (I) => (o(), p(w, null, [
          D(tt)(I, m.emptyColumns, u.value) ? (o(), p("td", {
            key: 0,
            "data-column": I.key,
            colspan: D(ce)(I, u.value),
            title: D(_)(I, u.value, m.i, m.visibleColumns),
            onClick: (G) => s(G, u.value, I)
          }, [
            m.$slots[I.key] ? U(m.$slots, I.key, {
              key: 0,
              value: u.value[I.key],
              item: u.value,
              column: I,
              i: m.i
            }) : u.value ? (o(), k(Le, {
              key: 1,
              modelValue: u.value,
              "onUpdate:modelValue": g[1] || (g[1] = (G) => u.value = G),
              column: I,
              columns: m.visibleColumns,
              "edit-mode-enabled": m.editModeEnabled,
              i: m.i
            }, null, 8, ["modelValue", "column", "columns", "edit-mode-enabled", "i"])) : y("", !0)
          ], 8, dt)) : y("", !0)
        ], 64))), 256)),
        m.canDrop && m.editModeEnabled ? (o(), p("td", mt, [
          Z(f, {
            palette: "table-delete",
            "confirm-modal": m.dropConfirm,
            "confirm-data": { item: u.value },
            onClick: qe(N, ["prevent", "stop"])
          }, {
            default: O(() => [
              n.value ? (o(), k(oe(z.value), { key: 0 })) : (o(), p(w, { key: 1 }, [
                pt,
                Y(" Delete ")
              ], 64))
            ]),
            _: 1
          }, 8, ["confirm-modal", "confirm-data"])
        ])) : y("", !0)
      ], 8, ot);
    };
  }
}), ft = { "data-role": "hidden-row" }, vt = ["colspan"], ct = ["data-column"], ht = ["data-i"], yt = ["data-column", "title", "onClick"], kt = /* @__PURE__ */ le({
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
    const i = t, d = l, u = b(d.modelValue), s = (v, L, c) => {
      i("click", v, ve("", { item: L, column: c }));
    };
    return R(() => d.modelValue, (v) => u.value = v), R(u, () => i("update:modelValue", u.value)), (v, L) => ee((o(), p("tr", ft, [
      B("td", { colspan: v.hiddenColumnsColSpan }, [
        B("table", null, [
          B("tr", null, [
            (o(!0), p(w, null, P(v.hiddenColumns, (c) => (o(), p("th", {
              "data-column": c.key
            }, [
              B("div", null, q(c.label), 1)
            ], 8, ct))), 256))
          ]),
          B("tr", { "data-i": v.i }, [
            (o(!0), p(w, null, P(v.hiddenColumns, (c, a) => (o(), p("td", {
              "data-column": c.key,
              title: D(_)(c, u.value, a, v.hiddenColumns),
              onClick: (n) => s(n, u.value, c)
            }, [
              v.$slots[c.key] ? U(v.$slots, c.key, {
                key: 0,
                value: u.value[c.key],
                item: u.value,
                column: c,
                i: a
              }) : (o(), k(Le, {
                key: 1,
                column: c,
                columns: v.hiddenColumns,
                modelValue: u.value,
                "onUpdate:modelValue": L[0] || (L[0] = (n) => u.value = n),
                i: a
              }, null, 8, ["column", "columns", "modelValue", "i"]))
            ], 8, yt))), 256))
          ], 8, ht)
        ])
      ], 8, vt)
    ], 512)), [
      [te, v.hiddenIsVisible]
    ]);
  }
}), bt = /* @__PURE__ */ B("i", { class: "" }, null, -1), Ee = /* @__PURE__ */ le({
  __name: "CreateButton",
  emits: ["click"],
  setup(l, { emit: t }) {
    const i = t, d = S(() => j.createButtonSlot !== ""), u = S(() => j.createButtonSlot);
    return (s, v) => {
      const L = T("lkt-button");
      return o(), k(L, {
        palette: "table-create",
        onClick: v[0] || (v[0] = (c) => i("click"))
      }, {
        default: O(() => [
          d.value ? (o(), k(oe(u.value), { key: 0 })) : (o(), p(w, { key: 1 }, [
            bt,
            Y(" Add one ")
          ], 64))
        ]),
        _: 1
      });
    };
  }
}), gt = ["id"], Ct = { key: 0 }, St = { key: 0 }, Vt = { class: "lkt-table-page-buttons" }, Dt = { key: 1 }, Bt = { class: "switch-edition-mode" }, It = {
  key: 1,
  class: "lkt-table-page-buttons"
}, wt = {
  key: 2,
  class: "lkt-table-page-filters"
}, Et = ["data-sortable"], Lt = {
  key: 0,
  "data-role": "drag-indicator"
}, Mt = { key: 1 }, Tt = { key: 2 }, $t = ["data-column", "data-sortable", "data-sort", "colspan", "title", "onClick"], At = { key: 3 }, Rt = ["id"], Nt = {
  key: 4,
  class: "lkt-empty-table"
}, Ut = {
  key: 5,
  class: "lkt-table-page-empty"
}, Ot = { class: "lkt-table-page-buttons lkt-table-page-buttons-bottom" }, Ft = /* @__PURE__ */ le({
  __name: "LktTable",
  props: {
    modelValue: { default: () => [] },
    columns: { default: () => [] },
    sorter: { type: Function, default: Ie },
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
  setup(l, { expose: t, emit: i }) {
    const d = i, u = We(), s = l, v = {}, L = b(typeof s.sorter == "function" ? s.sorter : Ie), c = b(lt(s.columns)), a = b("asc"), n = b(s.modelValue), z = b(v), J = b(!1), W = b(null), N = b(s.columns), m = b(s.page), g = b(!0), f = b(!1), I = b(!1), G = b(null), Q = b(new _e({ items: n.value }, s.dataStateConfig)), $ = b(s.editMode), Me = (e) => {
      Array.isArray(e) && (n.value = e), g.value = !1, f.value = !0, Q.value.store({ items: n.value }).turnStoredIntoOriginal();
    }, Te = () => fe(() => g.value = !0), $e = () => {
      G.value.doRefresh();
    }, X = Ze(12), ae = S(() => {
      if (!s.hideEmptyColumns)
        return [];
      let e = [];
      return N.value.forEach((r) => {
        let V = r.key, K = !1;
        n.value.forEach((M) => {
          if (typeof M.checkEmpty == "function")
            return M.checkEmpty(M);
          M[V] && (K = !0);
        }), K || e.push(V);
      }), e;
    }), x = S(() => N.value.filter((e) => !e.hidden)), ne = S(() => N.value.filter((e) => e.hidden)), Ae = S(() => {
      let e = x.value.length + 1;
      return s.sortable && ++e, e;
    }), se = S(() => ne.value.length > 0 && !s.sortable), Re = S(() => N.value.map((e) => e.key)), ie = S(() => {
      let e = [];
      for (let r in u)
        Re.value.indexOf(r) !== -1 && e.push(r);
      return e;
    }), he = S(() => s.hiddenSave || g.value || !s.saveResource ? !1 : $.value && Q.value.changed() ? !0 : $.value), Ne = S(() => s.switchEditionEnabled ? !0 : he.value || $.value && s.canCreate), Ue = S(() => s.saveDisabled || typeof s.saveValidator == "function" && !s.saveValidator(n.value) ? !1 : Q.value.changed()), Oe = S(() => ({
      animation: 200,
      group: "description",
      disabled: !1,
      ghostClass: "ghost"
    })), ye = S(() => n.value.length), Fe = (e) => {
      let r = e.target;
      if (typeof r.dataset.column > "u")
        do
          r = r.parentNode;
        while (typeof r.dataset.column > "u" && r.tagName !== "TABLE" && r.tagName !== "body");
      if (r.tagName === "TD" && (r = r.parentNode, r = r.dataset.i, typeof r < "u"))
        return n.value[r];
    }, ue = (e) => z.value["tr_" + e] === !0, ke = (e) => {
      e && e.sortable && (n.value = n.value.sort((r, V) => L.value(r, V, e, a.value)), a.value = a.value === "asc" ? "desc" : "asc", c.value = e.key, d("sort", [c.value, a.value]));
    }, re = (e, r) => {
      d("click", e, r);
    }, de = (e, r) => {
      let V = "tr_" + r.value.i;
      z.value[V] = typeof z.value[V] > "u" ? !0 : !z.value[V];
    }, be = () => {
      N.value.forEach((e) => {
        if (e.type === "select" && e.autoLoadSelectOptions) {
          let r = e.autoLoadSelectOptionsKey !== "" ? e.autoLoadSelectOptionsKey : e.key, V = [];
          n.value.forEach((M) => {
            Array.isArray(M[r]) && M[r].forEach((me) => V.push(me));
          });
          let K = {};
          V = V.filter(function(M) {
            return K[M.value] ? !1 : (K[M.value] = !0, !0);
          }), e.setOptions(V);
        }
      });
    }, He = (e) => typeof s.checkValidDrag == "function" ? s.checkValidDrag(e) : !0, Ke = (e) => typeof s.draggableChecker == "function" ? s.draggableChecker(e) : !0, ge = () => {
      n.value.push({});
    }, Pe = () => {
      g.value = !0;
    }, je = () => {
      g.value = !1;
    }, ze = (e, r) => {
      if (d("before-save"), s.saveResource && (g.value = !1, httpStatus.value = r.httpStatus, !r.success)) {
        d("error", r.httpStatus);
        return;
      }
      Q.value.turnStoredIntoOriginal(), d("save", r);
    }, Ce = (e, r, V) => {
      if (V >= e.length)
        for (var K = V - e.length + 1; K--; )
          e.push(void 0);
      return e.splice(V, 0, e.splice(r, 1)[0]), e;
    }, Se = (e) => {
      Ce(n.value, e, e - 1);
    }, Ve = (e) => {
      Ce(n.value, e, e + 1);
    }, De = (e) => {
      n.value.splice(e, 1);
    }, Je = () => {
      let e = document.getElementById("lkt-table-body-" + X);
      new xe(e, {
        handle: ".handle",
        animation: 150,
        onEnd: function(r) {
          r.oldIndex, r.newIndex, [n.value[r.oldIndex], n.value[r.newIndex]] = [n.value[r.newIndex], n.value[r.oldIndex]], I.value = !0;
        }
      });
    };
    return Ge(() => {
      be(), ke(at(s.columns, c.value)), Q.value.store({ items: n.value }).turnStoredIntoOriginal();
    }), R(() => s.columns, (e) => N.value = e), R(() => s.modelValue, (e) => n.value = e), R(n, (e) => {
      console.log("watch Items", e), be(), Q.value.increment({ items: e }), d("update:modelValue", e);
    }, { deep: !0 }), R(I, (e) => {
      e && (I.value = !1, fe(() => {
        Je();
      }));
    }), t({
      getItemByEvent: Fe,
      doRefresh: $e
    }), (e, r) => {
      const V = T("lkt-button"), K = T("lkt-field-switch"), M = T("lkt-loader"), me = T("lkt-paginator");
      return o(), p("section", {
        class: "lkt-table-page",
        id: "lkt-table-page-" + D(X)
      }, [
        e.title || D(u).title ? (o(), p("header", Ct, [
          e.title ? (o(), p("h2", St, q(e.title), 1)) : y("", !0),
          D(u).title ? U(e.$slots, "title", { key: 1 }) : y("", !0)
        ])) : y("", !0),
        ee(B("div", Vt, [
          ee(Z(V, {
            ref: "saveButton",
            palette: "success",
            disabled: !Ue.value,
            "confirm-modal": e.saveConfirm,
            "confirm-data": e.confirmData,
            resource: e.saveResource,
            "resource-data": e.saveResourceData,
            onLoading: Pe,
            onLoaded: je,
            onClick: ze
          }, {
            default: O(() => [
              D(u)["button-save"] ? U(e.$slots, "button-save", {
                key: 0,
                items: n.value,
                editMode: e.editMode,
                canUpdate: !e.saveDisabled
              }) : (o(), p("span", Dt, q(e.saveText), 1))
            ]),
            _: 3
          }, 8, ["disabled", "confirm-modal", "confirm-data", "resource", "resource-data"]), [
            [te, he.value]
          ]),
          e.canCreate && $.value ? (o(), k(Ee, {
            key: 0,
            onClick: ge
          })) : y("", !0),
          B("div", Bt, [
            ee(Z(K, {
              modelValue: $.value,
              "onUpdate:modelValue": r[0] || (r[0] = (h) => $.value = h),
              label: e.editModeText
            }, null, 8, ["modelValue", "label"]), [
              [te, e.switchEditionEnabled]
            ])
          ])
        ], 512), [
          [te, Ne.value]
        ]),
        D(u).buttons ? (o(), p("div", It, [
          U(e.$slots, "buttons")
        ])) : y("", !0),
        f.value && D(u).filters ? (o(), p("div", wt, [
          U(e.$slots, "filters")
        ])) : y("", !0),
        g.value ? (o(), k(M, { key: 3 })) : y("", !0),
        ee(B("div", {
          class: "lkt-table",
          "data-sortable": e.sortable
        }, [
          B("table", null, [
            B("thead", null, [
              B("tr", null, [
                e.sortable ? (o(), p("th", Lt)) : y("", !0),
                e.addNavigation && $.value ? (o(), p("th", Mt)) : y("", !0),
                se.value ? (o(), p("th", Tt)) : y("", !0),
                (o(!0), p(w, null, P(x.value, (h) => (o(), p(w, null, [
                  ae.value.indexOf(h.key) === -1 ? (o(), p("th", {
                    key: 0,
                    "data-column": h.key,
                    "data-sortable": h.sortable === !0,
                    "data-sort": h.sortable === !0 && c.value === h.key ? a.value : "",
                    colspan: D(et)(h, e.columns.length, n.value),
                    title: h.label,
                    onClick: (C) => ke(h)
                  }, [
                    B("div", null, q(h.label), 1)
                  ], 8, $t)) : y("", !0)
                ], 64))), 256)),
                e.canDrop && $.value ? (o(), p("th", At)) : y("", !0)
              ])
            ]),
            e.sortable ? (o(), k(D(Xe), Qe({
              key: 0,
              modelValue: n.value,
              "onUpdate:modelValue": r[1] || (r[1] = (h) => n.value = h),
              move: He,
              itemKey: e.draggableItemKey,
              onStart: r[2] || (r[2] = (h) => J.value = !0),
              onEnd: r[3] || (r[3] = (h) => J.value = !1),
              tag: "tbody",
              class: "lkt-sortable-table",
              handle: ".handle"
            }, Oe.value, { "component-data": { type: "transition" } }), {
              item: O(({ element: h, index: C }) => [
                (o(), k(we, {
                  modelValue: n.value[C],
                  "onUpdate:modelValue": (E) => n.value[C] = E,
                  key: D(X) + "-" + C,
                  i: C,
                  "display-hidden-columns-indicator": se.value,
                  "is-draggable": Ke(h),
                  sortable: e.sortable,
                  "visible-columns": x.value,
                  "empty-columns": ae.value,
                  "add-navigation": e.addNavigation,
                  "hidden-is-visible": ue(C),
                  "latest-row": C + 1 === ye.value,
                  "can-drop": e.canDrop,
                  "drop-confirm": e.dropConfirm,
                  "edit-mode-enabled": $.value,
                  onClick: re,
                  onShow: de,
                  onItemUp: Se,
                  onItemDown: Ve,
                  onItemDrop: De
                }, pe({ _: 2 }, [
                  P(ie.value, (E) => ({
                    name: E,
                    fn: O((A) => [
                      U(e.$slots, E, {
                        item: A.item,
                        value: A.value,
                        column: A.column
                      })
                    ])
                  }))
                ]), 1032, ["modelValue", "onUpdate:modelValue", "i", "display-hidden-columns-indicator", "is-draggable", "sortable", "visible-columns", "empty-columns", "add-navigation", "hidden-is-visible", "latest-row", "can-drop", "drop-confirm", "edit-mode-enabled"]))
              ]),
              _: 3
            }, 16, ["modelValue", "itemKey"])) : (o(), p(w, { key: 1 }, [
              I.value ? y("", !0) : (o(), p("tbody", {
                key: 0,
                ref: (h) => W.value = h,
                id: "lkt-table-body-" + D(X)
              }, [
                (o(!0), p(w, null, P(n.value, (h, C) => (o(), k(we, {
                  modelValue: n.value[C],
                  "onUpdate:modelValue": (E) => n.value[C] = E,
                  key: D(X) + "-" + C,
                  i: C,
                  "display-hidden-columns-indicator": se.value,
                  "is-draggable": e.draggableChecker ? e.draggableChecker(h) : !0,
                  sortable: e.sortable,
                  "visible-columns": x.value,
                  "empty-columns": ae.value,
                  "add-navigation": e.addNavigation,
                  "hidden-is-visible": ue(C),
                  "latest-row": C + 1 === ye.value,
                  "can-drop": e.canDrop,
                  "drop-confirm": e.dropConfirm,
                  "edit-mode-enabled": $.value,
                  onClick: re,
                  onShow: de,
                  onItemUp: Se,
                  onItemDown: Ve,
                  onItemDrop: De
                }, pe({ _: 2 }, [
                  P(ie.value, (E) => ({
                    name: E,
                    fn: O((A) => [
                      U(e.$slots, E, {
                        item: A.item,
                        value: A.value,
                        column: A.column
                      })
                    ])
                  }))
                ]), 1032, ["modelValue", "onUpdate:modelValue", "i", "display-hidden-columns-indicator", "is-draggable", "sortable", "visible-columns", "empty-columns", "add-navigation", "hidden-is-visible", "latest-row", "can-drop", "drop-confirm", "edit-mode-enabled"]))), 128)),
                ne.value.length > 0 ? (o(!0), p(w, { key: 0 }, P(n.value, (h, C) => (o(), k(kt, {
                  modelValue: n.value[C],
                  "onUpdate:modelValue": (E) => n.value[C] = E,
                  key: D(X) + "-" + C,
                  i: C,
                  "hidden-columns": ne.value,
                  "hidden-columns-col-span": Ae.value,
                  "is-draggable": e.draggableChecker ? e.draggableChecker(h) : !0,
                  sortable: e.sortable,
                  "visible-columns": x.value,
                  "empty-columns": ae.value,
                  "hidden-is-visible": ue(C),
                  onClick: re,
                  onShow: de
                }, pe({ _: 2 }, [
                  P(ie.value, (E) => ({
                    name: E,
                    fn: O((A) => [
                      U(e.$slots, E, {
                        item: A.item,
                        value: A.value,
                        column: A.column
                      })
                    ])
                  }))
                ]), 1032, ["modelValue", "onUpdate:modelValue", "i", "hidden-columns", "hidden-columns-col-span", "is-draggable", "sortable", "visible-columns", "empty-columns", "hidden-is-visible"]))), 128)) : y("", !0)
              ], 8, Rt))
            ], 64))
          ])
        ], 8, Et), [
          [te, !g.value && n.value.length > 0]
        ]),
        e.$slots["no-items"] ? (o(), p("div", Nt, [
          U(e.$slots, "no-items")
        ])) : y("", !0),
        !g.value && n.value.length === 0 ? (o(), p("div", Ut, q(e.noResultsText), 1)) : y("", !0),
        B("div", Ot, [
          e.canCreate && $.value ? (o(), k(Ee, {
            key: 0,
            onClick: ge
          })) : y("", !0)
        ]),
        Z(me, {
          ref_key: "paginator",
          ref: G,
          modelValue: m.value,
          "onUpdate:modelValue": r[4] || (r[4] = (h) => m.value = h),
          resource: e.resource,
          filters: e.filters,
          onResults: Me,
          onLoading: Te
        }, null, 8, ["modelValue", "resource", "filters"])
      ], 8, gt);
    };
  }
}), ll = {
  install: (l) => {
    l.component("lkt-table") === void 0 && l.component("lkt-table", Ft);
  }
}, al = (l) => (j.navButtonSlot = l, !0), ol = (l) => (j.dropButtonSlot = l, !0), nl = (l) => (j.createButtonSlot = l, !0);
export {
  H as LktTableColumn,
  Qt as createActionColumn,
  _t as createCheckColumn,
  Wt as createColumn,
  Yt as createEmailColumn,
  tl as createHiddenColumn,
  Gt as createLinkColumn,
  el as createSelectColumn,
  xt as createSwitchColumn,
  Zt as createTelColumn,
  Xt as createTextColumn,
  ll as default,
  nl as setTableCreateButtonSlot,
  ol as setTableDropButtonSlot,
  al as setTableNavButtonSlot
};
