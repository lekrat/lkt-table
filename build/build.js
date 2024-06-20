import { reactive as B, defineComponent as Z, ref as k, watch as M, nextTick as ue, computed as D, resolveComponent as A, openBlock as n, createBlock as C, withCtx as z, createTextVNode as re, toDisplayString as H, unref as g, createElementBlock as m, Fragment as $, normalizeClass as ce, createCommentVNode as b, renderList as U, renderSlot as T, withDirectives as X, createElementVNode as w, vShow as Y, useSlots as Re, onMounted as Oe, createVNode as ie, createSlots as ne } from "vue";
import Ne from "vuedraggable";
import { httpCall as Ue } from "lkt-http-client";
import { createLktEvent as de } from "lkt-events";
import { generateRandomString as Fe } from "lkt-string-tools";
import { DataState as He } from "lkt-data-state";
class R {
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
      const e = await Ue(this.resource, this.resourceData);
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
}
const St = (a, e, i = !0) => B(new R(a, e).setIsSortable(i)), Vt = (a, e, i, u = !0) => B(new R(a, e).setIsSortable(u).defineAsLink(i)), Dt = (a, e, i, u = !0) => B(new R(a, e).setIsSortable(u).defineAsAction(i)), Lt = (a, e, i = !0) => B(new R(a, e).setIsSortable(i).defineAsText()), It = (a, e, i = !0) => B(new R(a, e).setIsSortable(i).defineAsEmail()), wt = (a, e, i = !0) => B(new R(a, e).setIsSortable(i).defineAsTel()), Et = (a, e, i = !0) => B(new R(a, e).setIsSortable(i).defineAsCheck()), Tt = (a, e, i = !0) => B(new R(a, e).setIsSortable(i).defineAsSwitch()), At = (a, e, i, u = !0) => B(new R(a, e).setIsSortable(u).defineAsSelect(i)), $t = (a, e, i = !0) => B(new R(a, e).setIsSortable(i).setIsHidden(!0)), ye = (a, e, i, u) => {
  if (!i)
    return 0;
  let d = a[i.key], s = e[i.key];
  if (u === "asc") {
    if (d > s)
      return 1;
    if (s > d)
      return -1;
  } else {
    if (d > s)
      return -1;
    if (s > d)
      return 1;
  }
  return 0;
}, J = (a, e, i, u = []) => {
  if (a.extractTitleFromColumn) {
    let d = u.find((s) => s.key === a.extractTitleFromColumn);
    if (d)
      return J(d, e, i, u);
  }
  return a.formatter && typeof a.formatter == "function" ? a.formatter(e[a.key], e, a, i) : e[a.key];
}, Ke = (a, e, i) => {
  if (!a.colspan)
    return -1;
  let u = e;
  return i.forEach((d) => {
    let s = me(a, d);
    s > 0 && s < u && (u = s);
  }), u;
}, me = (a, e) => a.colspan === !1 ? !1 : typeof a.colspan == "function" ? a.colspan(e) : a.colspan, je = (a, e, i) => {
  if (typeof a != "object" || !a.key || e.indexOf(a.key) > -1)
    return !1;
  let u = me(a, i);
  return typeof a.colspan > "u" ? !0 : (typeof a.colspan < "u" && (typeof a.colspan == "function" ? u = parseInt(a.colspan()) : u = parseInt(a.colspan)), u > 0);
}, ze = (a = []) => {
  if (a.length > 0) {
    for (let e = 0; e < a.length; ++e)
      if (a[e].sortable)
        return a[e].key;
  }
  return "";
}, Je = (a, e) => {
  if (a.length > 0) {
    for (let i = 0; i < a.length; ++i)
      if (a[i].key === e)
        return a[i];
  }
  return null;
}, be = /* @__PURE__ */ Z({
  __name: "LktTableCell",
  props: {
    modelValue: { default: () => ({}) },
    column: { default: () => ({}) },
    columns: { default: () => [] },
    i: { default: 0 }
  },
  emits: ["edited"],
  setup(a, { emit: e }) {
    const i = e, u = a, d = k(u.modelValue), s = k(d.value[u.column.key]), v = k(null), L = k(u.column.showLoading());
    M(s, () => {
      const t = JSON.parse(JSON.stringify(d.value));
      t[u.column.key] = s.value, i("edited", t, u.i);
    }), M(() => u.modelValue, (t) => {
      d.value = t, s.value = d.value[u.column.key];
    }), M(() => u.column, () => {
      u.column.resourceLoaded && ue(() => L.value = !1);
    }, { deep: !0 }), u.column.hasToLoadResource() && u.column.loadResource();
    const h = D(() => ({ ...u.column.slotData, item: d.value }));
    return (t, o) => {
      const c = A("router-link"), E = A("lkt-field-text"), O = A("lkt-field-switch"), q = A("lkt-field-file"), N = A("lkt-loader"), G = A("lkt-field-select");
      return t.column.type === "link" ? (n(), C(c, {
        key: 0,
        to: t.column.getHref(d.value)
      }, {
        default: z(() => [
          re(H(g(J)(t.column, d.value, t.i)), 1)
        ]),
        _: 1
      }, 8, ["to"])) : t.column.type === "action" ? (n(), m("a", {
        key: 1,
        href: "#",
        onClick: o[0] || (o[0] = (f) => t.column.doAction(d.value))
      }, H(g(J)(t.column, d.value, t.i)), 1)) : t.column.type === "text" ? (n(), C(E, {
        key: 2,
        "read-mode": !t.column.editable,
        ref: (f) => v.value = f,
        "edit-slot": t.column.editSlot,
        "value-slot": t.column.valueSlot,
        "slot-data": h.value,
        modelValue: s.value,
        "onUpdate:modelValue": o[1] || (o[1] = (f) => s.value = f)
      }, null, 8, ["read-mode", "edit-slot", "value-slot", "slot-data", "modelValue"])) : t.column.type === "email" ? (n(), C(E, {
        key: 3,
        "read-mode": !t.column.editable,
        ref: (f) => v.value = f,
        "edit-slot": t.column.editSlot,
        "value-slot": t.column.valueSlot,
        "slot-data": h.value,
        "is-email": "",
        modelValue: s.value,
        "onUpdate:modelValue": o[2] || (o[2] = (f) => s.value = f)
      }, null, 8, ["read-mode", "edit-slot", "value-slot", "slot-data", "modelValue"])) : t.column.type === "tel" ? (n(), C(E, {
        key: 4,
        "read-mode": !t.column.editable,
        ref: (f) => v.value = f,
        "edit-slot": t.column.editSlot,
        "value-slot": t.column.valueSlot,
        "slot-data": h.value,
        "is-tel": "",
        modelValue: s.value,
        "onUpdate:modelValue": o[3] || (o[3] = (f) => s.value = f)
      }, null, 8, ["read-mode", "edit-slot", "value-slot", "slot-data", "modelValue"])) : t.column.type === "check" ? (n(), C(O, {
        key: 5,
        "is-check": "",
        "read-mode": !t.column.editable,
        ref: (f) => v.value = f,
        modelValue: s.value,
        "onUpdate:modelValue": o[4] || (o[4] = (f) => s.value = f)
      }, null, 8, ["read-mode", "modelValue"])) : t.column.type === "switch" ? (n(), C(O, {
        key: 6,
        "read-mode": !t.column.editable,
        ref: (f) => v.value = f,
        modelValue: s.value,
        "onUpdate:modelValue": o[5] || (o[5] = (f) => s.value = f)
      }, null, 8, ["read-mode", "modelValue"])) : t.column.type === "file" ? (n(), C(q, {
        key: 7,
        "read-mode": !t.column.editable,
        ref: (f) => v.value = f,
        modelValue: s.value,
        "onUpdate:modelValue": o[6] || (o[6] = (f) => s.value = f)
      }, null, 8, ["read-mode", "modelValue"])) : t.column.type === "select" ? (n(), m($, { key: 8 }, [
        L.value ? (n(), C(N, { key: 0 })) : (n(), C(G, {
          key: 1,
          "read-mode": !t.column.editable,
          ref: (f) => v.value = f,
          modelValue: s.value,
          "onUpdate:modelValue": o[7] || (o[7] = (f) => s.value = f),
          "slot-data": h.value,
          resource: t.column.resource,
          "use-resource-slot": t.column.resourceSlot ? t.column.resourceSlot : t.column.resource,
          "resource-data": t.column.resourceData,
          options: t.column.options,
          multiple: t.column.isMultiple,
          tags: t.column.tags,
          "multiple-display": t.column.multipleDisplay,
          "multiple-display-edition": t.column.multipleDisplayEdition
        }, null, 8, ["read-mode", "modelValue", "slot-data", "resource", "use-resource-slot", "resource-data", "options", "multiple", "tags", "multiple-display", "multiple-display-edition"]))
      ], 64)) : (n(), m($, { key: 9 }, [
        re(H(g(J)(t.column, d.value, t.i, t.columns)), 1)
      ], 64));
    };
  }
}), Pe = ["data-i", "data-draggable"], qe = {
  key: 0,
  "data-role": "drag-indicator"
}, Ge = {
  key: 1,
  "data-role": "invalid-drag-indicator"
}, Qe = ["data-column", "colspan", "title", "onClick"], ke = /* @__PURE__ */ Z({
  __name: "LktTableRow",
  props: {
    item: { default: () => ({}) },
    isDraggable: { type: Boolean, default: !0 },
    sortable: { type: Boolean, default: !0 },
    displayHiddenColumnsIndicator: { type: Boolean, default: !1 },
    hiddenIsVisible: { type: Boolean, default: !1 },
    i: { default: 0 },
    visibleColumns: { default: () => [] },
    emptyColumns: { default: () => [] }
  },
  emits: ["edited", "click", "show"],
  setup(a, { emit: e }) {
    const i = e, u = a, d = k(u.item), s = (t, o, c) => {
      i("click", t, de("", { item: o, column: c }));
    }, v = (t, o) => {
      i("show", t, de("", { i: o }));
    }, L = (t, o) => {
      d.value = t;
    }, h = D(() => {
      let t = [];
      return u.sortable && u.isDraggable && t.push("handle"), t.join(" ");
    });
    return M(() => u.item, (t) => d.value = t), M(d, () => i("edited", d.value, u.i)), (t, o) => (n(), m("tr", {
      "data-i": t.i,
      class: ce(h.value),
      "data-draggable": t.isDraggable
    }, [
      t.sortable && t.isDraggable ? (n(), m("td", qe)) : t.sortable ? (n(), m("td", Ge)) : b("", !0),
      t.displayHiddenColumnsIndicator ? (n(), m("td", {
        key: 2,
        onClick: o[0] || (o[0] = (c) => v(c, t.i)),
        "data-role": "show-more",
        class: ce(t.hiddenIsVisible ? "state-open" : "")
      }, null, 2)) : b("", !0),
      (n(!0), m($, null, U(t.visibleColumns, (c) => (n(), m($, null, [
        g(je)(c, t.emptyColumns, t.item) ? (n(), m("td", {
          key: 0,
          "data-column": c.key,
          colspan: g(me)(c, t.item),
          title: g(J)(c, t.item, t.i, t.visibleColumns),
          onClick: (E) => s(E, t.item, c)
        }, [
          t.$slots[c.key] ? T(t.$slots, c.key, {
            key: 0,
            value: t.item[c.key],
            item: t.item,
            column: c,
            i: t.i
          }) : t.item ? (n(), C(be, {
            key: 1,
            column: c,
            columns: t.visibleColumns,
            modelValue: d.value,
            "onUpdate:modelValue": o[1] || (o[1] = (E) => d.value = E),
            i: t.i,
            onEdited: L
          }, null, 8, ["column", "columns", "modelValue", "i"])) : b("", !0)
        ], 8, Qe)) : b("", !0)
      ], 64))), 256))
    ], 10, Pe));
  }
}), We = { "data-role": "hidden-row" }, Xe = ["colspan"], Ye = ["data-column"], Ze = ["data-i"], _e = ["data-column", "title", "onClick"], xe = /* @__PURE__ */ Z({
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
  setup(a, { emit: e }) {
    const i = e, u = a, d = k(u.modelValue), s = (v, L, h) => {
      i("click", v, de("", { item: L, column: h }));
    };
    return M(() => u.modelValue, (v) => d.value = v), M(d, () => i("update:modelValue", d.value)), (v, L) => X((n(), m("tr", We, [
      w("td", { colspan: v.hiddenColumnsColSpan }, [
        w("table", null, [
          w("tr", null, [
            (n(!0), m($, null, U(v.hiddenColumns, (h) => (n(), m("th", {
              "data-column": h.key
            }, [
              w("div", null, H(h.label), 1)
            ], 8, Ye))), 256))
          ]),
          w("tr", { "data-i": v.i }, [
            (n(!0), m($, null, U(v.hiddenColumns, (h, t) => (n(), m("td", {
              "data-column": h.key,
              title: g(J)(h, d.value, t, v.hiddenColumns),
              onClick: (o) => s(o, d.value, h)
            }, [
              v.$slots[h.key] ? T(v.$slots, h.key, {
                key: 0,
                value: d.value[h.key],
                item: d.value,
                column: h,
                i: t
              }) : (n(), C(be, {
                key: 1,
                column: h,
                columns: v.hiddenColumns,
                modelValue: d.value,
                "onUpdate:modelValue": L[0] || (L[0] = (o) => d.value = o),
                i: t
              }, null, 8, ["column", "columns", "modelValue", "i"]))
            ], 8, _e))), 256))
          ], 8, Ze)
        ])
      ], 8, Xe)
    ], 512)), [
      [Y, v.hiddenIsVisible]
    ]);
  }
}), et = { class: "lkt-table-page" }, tt = { key: 0 }, lt = { key: 0 }, at = { class: "lkt-table-page-buttons" }, st = { key: 1 }, ot = {
  key: 1,
  class: "lkt-table-page-buttons"
}, it = {
  key: 2,
  class: "lkt-table-page-filters"
}, nt = ["data-sortable"], ut = {
  key: 0,
  "data-role": "drag-indicator"
}, rt = { key: 1 }, dt = ["data-column", "data-sortable", "data-sort", "colspan", "title", "onClick"], mt = { key: 1 }, ft = {
  key: 5,
  class: "lkt-empty-table"
}, pt = {
  key: 6,
  class: "lkt-table-page-empty"
}, vt = { class: "lkt-table-page-buttons" }, ht = /* @__PURE__ */ Z({
  __name: "LktTable",
  props: {
    modelValue: { default: () => [] },
    columns: { default: () => [] },
    sorter: { type: Function, default: ye },
    draggableChecker: { type: Function, default: (a) => !0 },
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
    editModeText: { default: "Save" },
    switchEditionEnabled: { type: Boolean, default: !1 },
    canCreate: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "sort", "click", "save"],
  setup(a, { expose: e, emit: i }) {
    const u = i, d = Re(), s = a, v = {}, L = k(typeof s.sorter == "function" ? s.sorter : ye), h = k(ze(s.columns)), t = k("asc"), o = k(s.modelValue), c = k(v), E = k(!1), O = k(s.columns), q = k(s.page), N = k(!0), G = k(!1), f = k(null), K = k(new He({ items: o.value }, s.dataStateConfig)), Q = k(s.editMode), ge = (l) => {
      Array.isArray(l) && (o.value = l), N.value = !1, G.value = !0, K.value.store({ items: o.value }).turnStoredIntoOriginal();
    }, Ce = () => ue(() => N.value = !0), Se = () => {
      f.value.doRefresh();
    }, _ = Fe(12), W = D(() => {
      if (!s.hideEmptyColumns)
        return [];
      let l = [];
      return O.value.forEach((r) => {
        let y = r.key, j = !1;
        o.value.forEach((S) => {
          if (typeof S.checkEmpty == "function")
            return S.checkEmpty(S);
          S[y] && (j = !0);
        }), j || l.push(y);
      }), l;
    }), P = D(() => O.value.filter((l) => !l.hidden)), x = D(() => O.value.filter((l) => l.hidden)), Ve = D(() => {
      let l = P.value.length + 1;
      return s.sortable && ++l, l;
    }), ee = D(() => x.value.length > 0 && !s.sortable), De = D(() => O.value.map((l) => l.key)), te = D(() => {
      let l = [];
      for (let r in d)
        De.value.indexOf(r) !== -1 && l.push(r);
      return l;
    }), fe = D(() => s.hiddenSave || N.value || !s.saveResource ? !1 : Q.value && K.value.changed() ? !0 : Q.value), Le = D(() => fe.value), Ie = D(() => s.saveDisabled || typeof s.saveValidator == "function" && !s.saveValidator(o.value) ? !1 : K.value.changed()), we = (l) => {
      let r = l.target;
      if (typeof r.dataset.column > "u")
        do
          r = r.parentNode;
        while (typeof r.dataset.column > "u" && r.tagName !== "TABLE" && r.tagName !== "body");
      if (r.tagName === "TD" && (r = r.parentNode, r = r.dataset.i, typeof r < "u"))
        return o.value[r];
    }, le = (l) => c.value["tr_" + l] === !0, pe = (l) => {
      l && l.sortable && (o.value = o.value.sort((r, y) => L.value(r, y, l, t.value)), t.value = t.value === "asc" ? "desc" : "asc", h.value = l.key, u("sort", [h.value, t.value]));
    }, ae = (l, r) => {
      u("click", l, r);
    }, se = (l, r) => {
      let y = "tr_" + r.value.i;
      c.value[y] = typeof c.value[y] > "u" ? !0 : !c.value[y];
    }, ve = () => {
      O.value.forEach((l) => {
        if (l.type === "select" && l.autoLoadSelectOptions) {
          let r = l.autoLoadSelectOptionsKey !== "" ? l.autoLoadSelectOptionsKey : l.key, y = [];
          o.value.forEach((S) => {
            Array.isArray(S[r]) && S[r].forEach((oe) => y.push(oe));
          });
          let j = {};
          y = y.filter(function(S) {
            return j[S.value] ? !1 : (j[S.value] = !0, !0);
          }), l.setOptions(y);
        }
      });
    }, Ee = (l) => typeof s.checkValidDrag == "function" ? s.checkValidDrag(l) : !0, Te = (l) => typeof s.draggableChecker == "function" ? s.draggableChecker(l) : !0, he = (l, r) => {
      for (let y in l)
        o.value[r].hasOwnProperty(y) && (o.value[r][y] = l[y]);
      ue(() => {
        K.value.increment({ items: o.value });
      });
    }, Ae = () => {
      o.value.push({});
    }, $e = () => {
      N.value = !0;
    }, Me = () => {
      isLoading.value = !1;
    }, Be = (l, r) => {
      if (u("before-save"), saveResource.value) {
        if (isLoading.value = !1, httpStatus.value = r.httpStatus, !r.success) {
          showStoreMessage.value = !0, u("error", r.httpStatus);
          return;
        }
        showStoreMessage.value = !0;
      }
      K.value.turnStoredIntoOriginal(), u("save", r);
    };
    return Oe(() => {
      ve(), pe(Je(s.columns, h.value)), K.value.store({ items: o.value }).turnStoredIntoOriginal();
    }), M(() => s.columns, (l) => O.value = l), M(() => s.modelValue, (l) => o.value = l), M(o, (l) => {
      ve(), K.value.increment({ items: l }), u("update:modelValue", l);
    }), e({
      getItemByEvent: we,
      doRefresh: Se
    }), (l, r) => {
      const y = A("lkt-button"), j = A("lkt-field-switch"), S = A("lkt-loader"), oe = A("lkt-paginator");
      return n(), m("section", et, [
        l.title || g(d).title ? (n(), m("header", tt, [
          l.title ? (n(), m("h2", lt, H(l.title), 1)) : b("", !0),
          g(d).title ? T(l.$slots, "title", { key: 1 }) : b("", !0)
        ])) : b("", !0),
        X(w("div", at, [
          X(ie(y, {
            ref: "saveButton",
            palette: "success",
            disabled: !Ie.value,
            "confirm-modal": l.saveConfirm,
            "confirm-data": l.confirmData,
            resource: l.saveResource,
            "resource-data": l.saveResourceData,
            onLoading: $e,
            onLoaded: Me,
            onClick: Be
          }, {
            default: z(() => [
              g(d)["button-save"] ? T(l.$slots, "button-save", {
                key: 0,
                items: o.value,
                editMode: l.editMode,
                canUpdate: !l.saveDisabled
              }) : (n(), m("span", st, H(l.saveText), 1))
            ]),
            _: 3
          }, 8, ["disabled", "confirm-modal", "confirm-data", "resource", "resource-data"]), [
            [Y, fe.value]
          ]),
          X(ie(j, {
            modelValue: Q.value,
            "onUpdate:modelValue": r[0] || (r[0] = (p) => Q.value = p),
            label: l.editModeText
          }, null, 8, ["modelValue", "label"]), [
            [Y, l.switchEditionEnabled]
          ])
        ], 512), [
          [Y, Le.value]
        ]),
        g(d).buttons ? (n(), m("div", ot, [
          T(l.$slots, "buttons")
        ])) : b("", !0),
        G.value && g(d).filters ? (n(), m("div", it, [
          T(l.$slots, "filters")
        ])) : b("", !0),
        N.value ? (n(), C(S, { key: 3 })) : b("", !0),
        !N.value && o.value.length > 0 ? (n(), m("div", {
          key: 4,
          class: "lkt-table",
          "data-sortable": l.sortable
        }, [
          w("table", null, [
            w("thead", null, [
              w("tr", null, [
                l.sortable ? (n(), m("th", ut)) : b("", !0),
                ee.value ? (n(), m("th", rt)) : b("", !0),
                (n(!0), m($, null, U(P.value, (p) => (n(), m($, null, [
                  W.value.indexOf(p.key) === -1 ? (n(), m("th", {
                    key: 0,
                    "data-column": p.key,
                    "data-sortable": p.sortable === !0,
                    "data-sort": p.sortable === !0 && h.value === p.key ? t.value : "",
                    colspan: g(Ke)(p, l.columns.length, o.value),
                    title: p.label,
                    onClick: (V) => pe(p)
                  }, [
                    w("div", null, H(p.label), 1)
                  ], 8, dt)) : b("", !0)
                ], 64))), 256))
              ])
            ]),
            l.sortable ? (n(), C(g(Ne), {
              key: 0,
              modelValue: o.value,
              "onUpdate:modelValue": r[1] || (r[1] = (p) => o.value = p),
              move: Ee,
              itemKey: l.draggableItemKey,
              onStart: r[2] || (r[2] = (p) => E.value = !0),
              onEnd: r[3] || (r[3] = (p) => E.value = !1),
              tag: "tbody",
              class: "lkt-sortable-table",
              handle: ".handle"
            }, {
              item: z(({ element: p, index: V }) => [
                (n(), C(ke, {
                  key: g(_) + "-" + V,
                  i: V,
                  item: p,
                  "display-hidden-columns-indicator": ee.value,
                  "is-draggable": Te(p),
                  sortable: l.sortable,
                  "visible-columns": P.value,
                  "empty-columns": W.value,
                  "hidden-is-visible": le(V),
                  onClick: ae,
                  onShow: se,
                  onEdited: he
                }, ne({ _: 2 }, [
                  U(te.value, (F) => ({
                    name: F,
                    fn: z((I) => [
                      T(l.$slots, F, {
                        item: I.item,
                        value: I.value,
                        column: I.column
                      })
                    ])
                  }))
                ]), 1032, ["i", "item", "display-hidden-columns-indicator", "is-draggable", "sortable", "visible-columns", "empty-columns", "hidden-is-visible"]))
              ]),
              _: 3
            }, 8, ["modelValue", "itemKey"])) : (n(), m("tbody", mt, [
              (n(!0), m($, null, U(o.value, (p, V) => (n(), C(ke, {
                key: g(_) + "-" + V,
                i: V,
                item: p,
                "display-hidden-columns-indicator": ee.value,
                "is-draggable": l.draggableChecker ? l.draggableChecker(p) : !0,
                sortable: l.sortable,
                "visible-columns": P.value,
                "empty-columns": W.value,
                "hidden-is-visible": le(V),
                onClick: ae,
                onShow: se,
                onEdited: he
              }, ne({ _: 2 }, [
                U(te.value, (F) => ({
                  name: F,
                  fn: z((I) => [
                    T(l.$slots, F, {
                      item: I.item,
                      value: I.value,
                      column: I.column
                    })
                  ])
                }))
              ]), 1032, ["i", "item", "display-hidden-columns-indicator", "is-draggable", "sortable", "visible-columns", "empty-columns", "hidden-is-visible"]))), 128)),
              x.value.length > 0 ? (n(!0), m($, { key: 0 }, U(o.value, (p, V) => (n(), C(xe, {
                key: g(_) + "-" + V,
                i: V,
                item: p,
                "hidden-columns": x.value,
                "hidden-columns-col-span": Ve.value,
                "is-draggable": l.draggableChecker ? l.draggableChecker(p) : !0,
                sortable: l.sortable,
                "visible-columns": P.value,
                "empty-columns": W.value,
                "hidden-is-visible": le(V),
                onClick: ae,
                onShow: se
              }, ne({ _: 2 }, [
                U(te.value, (F) => ({
                  name: F,
                  fn: z((I) => [
                    T(l.$slots, F, {
                      item: I.item,
                      value: I.value,
                      column: I.column
                    })
                  ])
                }))
              ]), 1032, ["i", "item", "hidden-columns", "hidden-columns-col-span", "is-draggable", "sortable", "visible-columns", "empty-columns", "hidden-is-visible"]))), 128)) : b("", !0)
            ]))
          ])
        ], 8, nt)) : l.$slots["no-items"] ? (n(), m("div", ft, [
          T(l.$slots, "no-items")
        ])) : b("", !0),
        !N.value && o.value.length === 0 ? (n(), m("div", pt, H(l.noResultsText), 1)) : b("", !0),
        w("div", vt, [
          l.canCreate ? (n(), C(y, {
            key: 0,
            onClick: Ae
          }, {
            default: z(() => [
              re(" Add one ")
            ]),
            _: 1
          })) : b("", !0)
        ]),
        ie(oe, {
          ref_key: "paginator",
          ref: f,
          modelValue: q.value,
          "onUpdate:modelValue": r[4] || (r[4] = (p) => q.value = p),
          resource: l.resource,
          filters: l.filters,
          onResults: ge,
          onLoading: Ce
        }, null, 8, ["modelValue", "resource", "filters"])
      ]);
    };
  }
}), Mt = {
  install: (a) => {
    a.component("lkt-table") === void 0 && a.component("lkt-table", ht);
  }
};
export {
  R as LktTableColumn,
  Dt as createActionColumn,
  Et as createCheckColumn,
  St as createColumn,
  It as createEmailColumn,
  $t as createHiddenColumn,
  Vt as createLinkColumn,
  At as createSelectColumn,
  Tt as createSwitchColumn,
  wt as createTelColumn,
  Lt as createTextColumn,
  Mt as default
};
