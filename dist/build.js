import { reactive as N, defineComponent as X, ref as b, watch as F, nextTick as ge, computed as f, resolveComponent as q, unref as S, openBlock as s, createBlock as C, withCtx as P, createTextVNode as le, toDisplayString as J, createElementBlock as d, mergeProps as bt, Fragment as L, withModifiers as We, resolveDynamicComponent as Q, createCommentVNode as m, normalizeClass as x, createElementVNode as M, createVNode as ee, renderList as z, renderSlot as U, withDirectives as ne, vShow as re, useSlots as gt, onMounted as Ct, createSlots as Ue, normalizeProps as be } from "vue";
import { httpCall as St } from "lkt-http-client";
import It, { Field as Pe } from "lkt-field";
import { __ as ie } from "lkt-i18n";
import { replaceAll as qe, generateRandomString as Bt } from "lkt-string-tools";
import { DataState as Dt } from "lkt-data-state";
import Et from "sortablejs";
import { time as fe } from "lkt-date-tools";
import wt from "lkt-loader";
import Vt from "lkt-button";
import Tt from "lkt-paginator";
var B = /* @__PURE__ */ ((l) => (l.Text = "text", l.Number = "number", l.Check = "check", l.Switch = "switch", l.Select = "select", l.Email = "email", l.Tel = "tel", l.File = "file", l.Link = "link", l.Action = "action", l.Integer = "int", l.Float = "float", l))(B || {});
class $ {
  constructor(t = "", r = "") {
    if (this.sortable = !0, this.hidden = !1, this.formatter = void 0, this.checkEmpty = void 0, this.colspan = void 0, this.preferSlot = !0, this.type = "", this.resource = "", this.resourceData = {}, this.isMultiple = !1, this.isLoading = !1, this.resourceLoaded = !1, this.valueSlot = "", this.editSlot = "", this.multipleDisplay = "inline", this.multipleDisplayEdition = "", this.field = new Pe(), typeof t == "object")
      for (let a in t)
        this[a] = t[a];
    else
      this.key = t, this.label = r;
    this.field = new Pe(this.field);
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
    return this.type = B.Link, this.link = t, this;
  }
  defineAsText() {
    return this.type = B.Text, this;
  }
  defineAsEmail() {
    return this.type = B.Email, this;
  }
  defineAsTel() {
    return this.type = B.Tel, this;
  }
  defineAsInteger() {
    return this.type = B.Integer, this;
  }
  defineAsFloat() {
    return this.type = B.Float, this;
  }
  defineAsCheck() {
    return this.type = B.Check, this;
  }
  defineAsSwitch() {
    return this.type = B.Switch, this;
  }
  defineAsFile() {
    return this.type = B.File, this;
  }
  defineAsAction(t) {
    return this.type = B.Action, this.action = t, this;
  }
  defineAsSelect(t) {
    return this.type = B.Select, this.options = t, this;
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
      const t = await St(this.resource, this.resourceData);
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
const Vl = (l, t, r = !0) => N(new $(l, t).setIsSortable(r)), Tl = (l, t, r, a = !0) => N(new $(l, t).setIsSortable(a).defineAsLink(r)), Ll = (l, t, r, a = !0) => N(new $(l, t).setIsSortable(a).defineAsAction(r)), Ml = (l, t, r = !0) => N(new $(l, t).setIsSortable(r).defineAsText()), Rl = (l, t, r = !0) => N(new $(l, t).setIsSortable(r).defineAsInteger()), Al = (l, t, r = !0) => N(new $(l, t).setIsSortable(r).defineAsFloat()), $l = (l, t, r = !0) => N(new $(l, t).setIsSortable(r).defineAsEmail()), Fl = (l, t, r = !0) => N(new $(l, t).setIsSortable(r).defineAsTel()), Nl = (l, t, r = !0) => N(new $(l, t).setIsSortable(r).defineAsCheck()), Kl = (l, t, r = !0) => N(new $(l, t).setIsSortable(r).defineAsSwitch()), Ul = (l, t, r, a = !0) => N(new $(l, t).setIsSortable(a).defineAsSelect(r)), Pl = (l, t, r = !0) => N(new $(l, t).setIsSortable(r).defineAsFile()), Hl = (l, t, r = !0) => N(new $(l, t).setIsSortable(r).setIsHidden(!0)), He = (l, t, r, a) => {
  if (!r) return 0;
  let n = l[r.key], o = t[r.key];
  if (a === "asc") {
    if (n > o) return 1;
    if (o > n) return -1;
  } else {
    if (n > o) return -1;
    if (o > n) return 1;
  }
  return 0;
}, te = (l, t, r, a = []) => {
  if (l.extractTitleFromColumn) {
    let n = a.find((o) => o.key === l.extractTitleFromColumn);
    if (n)
      return te(n, t, r, a);
  }
  if (l.formatter && typeof l.formatter == "function") {
    let n = l.formatter(t[l.key], t, l, r);
    return n.startsWith("__:") ? ie(n.substring(3)) : n;
  }
  return t[l.key];
}, Lt = (l, t, r) => {
  if (!l.colspan) return -1;
  let a = t;
  return r.forEach((n) => {
    let o = Ce(l, n);
    o > 0 && o < a && (a = o);
  }), a;
}, Ce = (l, t) => l.colspan === !1 ? !1 : typeof l.colspan == "function" ? l.colspan(t) : l.colspan, Mt = (l, t) => typeof l.preferSlot > "u" ? !0 : l.preferSlot === !1 ? !1 : typeof l.preferSlot == "function" ? l.preferSlot(t) : !0, Rt = (l, t, r) => {
  if (typeof l != "object" || !l.key || t.indexOf(l.key) > -1) return !1;
  let a = Ce(l, r);
  return typeof l.colspan > "u" ? !0 : (typeof l.colspan < "u" && (typeof l.colspan == "function" ? a = parseInt(l.colspan(r)) : a = parseInt(l.colspan)), a > 0);
}, At = (l = []) => {
  if (l.length > 0) {
    for (let t = 0; t < l.length; ++t)
      if (l[t].sortable) return l[t].key;
  }
  return "";
}, $t = (l, t) => {
  if (l.length > 0) {
    for (let r = 0; r < l.length; ++r)
      if (l[r].key === t) return l[r];
  }
  return null;
}, je = /* @__PURE__ */ X({
  __name: "LktTableCell",
  props: {
    modelValue: { default: () => ({}) },
    column: { default: () => new $() },
    columns: { default: () => [] },
    i: { default: 0 },
    editModeEnabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(l, { emit: t }) {
    const r = t, a = l, n = b(a.modelValue), o = b(n.value[a.column.key]), v = b(null), I = b(a.column.showLoading());
    F(o, (p) => {
      const k = JSON.parse(JSON.stringify(n.value));
      k[a.column.key] = p, r("update:modelValue", k);
    }), F(() => a.modelValue, (p) => {
      n.value = p, o.value = n.value[a.column.key];
    }), F(() => a.column, () => {
      a.column.resourceLoaded && ge(() => I.value = !1);
    }, { deep: !0 }), a.column.hasToLoadResource() && a.column.loadResource();
    const h = f(() => ({ ...a.column.slotData, item: n.value })), D = f(() => {
      var p, k, K;
      if ((p = a.column.field) != null && p.modalKey.startsWith("prop:")) {
        let i = (k = a.column.field) == null ? void 0 : k.modalKey.substring(5);
        return n.value[i];
      }
      return (K = a.column.field) == null ? void 0 : K.modalKey;
    }), u = f(() => {
      var p, k, K;
      if (typeof ((p = a.column.field) == null ? void 0 : p.options) == "string" && ((k = a.column.field) != null && k.options.startsWith("prop:"))) {
        let i = (K = a.column.field) == null ? void 0 : K.options.substring(5);
        return n.value[i];
      }
      return a.column.field.options;
    }), G = f(() => [B.Integer, B.Float].includes(a.column.type) ? B.Number : a.column.type);
    return (p, k) => {
      const K = q("lkt-anchor"), i = q("lkt-field");
      return p.column.type === S(B).Link ? (s(), C(K, {
        key: 0,
        to: p.column.getHref(n.value)
      }, {
        default: P(() => [
          le(J(S(te)(p.column, n.value, p.i)), 1)
        ]),
        _: 1
      }, 8, ["to"])) : p.column.type === S(B).Action ? (s(), d("a", {
        key: 1,
        href: "#",
        onClick: k[0] || (k[0] = (g) => p.column.doAction(n.value))
      }, J(S(te)(p.column, n.value, p.i)), 1)) : p.column.type !== "" ? (s(), C(i, bt({ key: 2 }, p.column.field, {
        type: G.value,
        "read-mode": !p.column.editable || !p.editModeEnabled,
        ref: (g) => v.value = g,
        "slot-data": h.value,
        label: p.column.type === "switch" || p.column.type === "check" ? p.column.label : "",
        "modal-key": D.value,
        options: u.value,
        modelValue: o.value,
        "onUpdate:modelValue": k[1] || (k[1] = (g) => o.value = g)
      }), null, 16, ["type", "read-mode", "slot-data", "label", "modal-key", "options", "modelValue"])) : (s(), d(L, { key: 3 }, [
        le(J(S(te)(p.column, n.value, p.i, p.columns)), 1)
      ], 64));
    };
  }
}), Z = class Z {
};
Z.navButtonSlot = "", Z.dropButtonSlot = "", Z.editButtonSlot = "", Z.createButtonSlot = "", Z.defaultEmptySlot = void 0;
let w = Z;
const Ft = /* @__PURE__ */ X({
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
    const r = t, a = f(() => w.dropButtonSlot !== ""), n = f(() => w.dropButtonSlot);
    return (o, v) => {
      const I = q("lkt-button");
      return s(), C(I, {
        palette: "table-delete",
        icon: a.value ? "" : o.icon,
        text: a.value ? "" : o.text,
        resource: o.resource,
        "resource-data": o.resourceData,
        "confirm-modal": o.confirm,
        disabled: o.disabled,
        onClick: v[0] || (v[0] = We((h) => r("click"), ["prevent", "stop"]))
      }, {
        default: P(() => [
          a.value ? (s(), C(Q(n.value), { key: 0 })) : m("", !0)
        ]),
        _: 1
      }, 8, ["icon", "text", "resource", "resource-data", "confirm-modal", "disabled"]);
    };
  }
}), Nt = /* @__PURE__ */ X({
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
    const r = t, a = f(() => w.editButtonSlot !== ""), n = f(() => w.editButtonSlot);
    return (o, v) => {
      const I = q("lkt-button");
      return s(), C(I, {
        palette: "table-delete",
        icon: a.value ? "" : o.icon,
        text: a.value ? "" : o.text,
        "on-click-to": o.link,
        "is-anchor": o.link !== "",
        resource: o.resource,
        "resource-data": o.resourceData,
        "confirm-modal": o.confirm,
        disabled: o.disabled,
        onClick: v[0] || (v[0] = We((h) => r("click"), ["prevent", "stop"]))
      }, {
        default: P(() => [
          a.value ? (s(), C(Q(n.value), { key: 0 })) : m("", !0)
        ]),
        _: 1
      }, 8, ["icon", "text", "on-click-to", "is-anchor", "resource", "resource-data", "confirm-modal", "disabled"]);
    };
  }
}), Kt = ["data-i", "data-draggable"], Ut = {
  key: 1,
  "data-role": "invalid-drag-indicator"
}, Pt = {
  key: 2,
  class: "lkt-table-nav-cell"
}, Ht = { class: "lkt-table-nav-container" }, Ot = ["data-column", "colspan", "title", "onClick"], Wt = {
  key: 4,
  class: "lkt-table-col-drop"
}, qt = {
  key: 5,
  class: "lkt-table-col-edit"
}, jt = /* @__PURE__ */ X({
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
    const r = t, a = l, n = b(a.modelValue), o = b(a.editLink);
    for (let i in n.value) o.value = qe(o.value, ":" + i, n.value[i]);
    const v = (i) => r("click", i), I = (i, g) => {
      r("show", i, g);
    }, h = f(() => {
      let i = [];
      return a.sortable && a.isDraggable && i.push("handle"), i.join(" ");
    }), D = f(() => w.navButtonSlot !== ""), u = f(() => w.navButtonSlot), G = () => {
      r("item-up", a.i);
    }, p = () => {
      r("item-down", a.i);
    }, k = () => {
      r("item-drop", a.i);
    }, K = () => {
    };
    return F(() => a.modelValue, (i) => n.value = i), F(n, (i) => {
      r("update:modelValue", i, a.i);
    }, { deep: !0 }), (i, g) => {
      const H = q("lkt-button");
      return s(), d("tr", {
        "data-i": i.i,
        "data-draggable": i.isDraggable
      }, [
        i.sortable && i.isDraggable && i.editModeEnabled ? (s(), d("td", {
          key: 0,
          "data-role": "drag-indicator",
          class: x(h.value)
        }, null, 2)) : i.sortable && i.editModeEnabled ? (s(), d("td", Ut)) : m("", !0),
        i.addNavigation && i.editModeEnabled ? (s(), d("td", Pt, [
          M("div", Ht, [
            ee(H, {
              palette: "table-nav",
              disabled: i.i === 0,
              onClick: G
            }, {
              default: P(() => [
                D.value ? (s(), C(Q(u.value), {
                  key: 0,
                  direction: "up"
                })) : (s(), d(L, { key: 1 }, [
                  g[2] || (g[2] = M("i", { class: "" }, null, -1)),
                  g[3] || (g[3] = le(" UP "))
                ], 64))
              ]),
              _: 1
            }, 8, ["disabled"]),
            ee(H, {
              palette: "table-nav",
              disabled: i.latestRow,
              onClick: p
            }, {
              default: P(() => [
                D.value ? (s(), C(Q(u.value), {
                  key: 0,
                  direction: "down"
                })) : (s(), d(L, { key: 1 }, [
                  g[4] || (g[4] = M("i", { class: "" }, null, -1)),
                  g[5] || (g[5] = le(" DOWN "))
                ], 64))
              ]),
              _: 1
            }, 8, ["disabled"])
          ])
        ])) : m("", !0),
        i.displayHiddenColumnsIndicator ? (s(), d("td", {
          key: 3,
          onClick: g[0] || (g[0] = (V) => I(V, i.i)),
          "data-role": "show-more",
          class: x(i.hiddenIsVisible ? "state-open" : "")
        }, null, 2)) : m("", !0),
        (s(!0), d(L, null, z(i.visibleColumns, (V) => (s(), d(L, null, [
          S(Rt)(V, i.emptyColumns, n.value) ? (s(), d("td", {
            key: "td" + i.i,
            "data-column": V.key,
            colspan: S(Ce)(V, n.value),
            title: S(te)(V, n.value, i.i, i.visibleColumns),
            onClick: (oe) => v(oe, n.value)
          }, [
            i.$slots[V.key] && S(Mt)(V, n.value) ? U(i.$slots, V.key, {
              key: 0,
              value: n.value[V.key],
              item: n.value,
              column: V,
              i: i.i
            }) : n.value ? (s(), C(je, {
              key: 1,
              modelValue: n.value,
              "onUpdate:modelValue": g[1] || (g[1] = (oe) => n.value = oe),
              column: V,
              columns: i.visibleColumns,
              "edit-mode-enabled": i.editModeEnabled,
              i: i.i
            }, null, 8, ["modelValue", "column", "columns", "edit-mode-enabled", "i"])) : m("", !0)
          ], 8, Ot)) : m("", !0)
        ], 64))), 256)),
        i.canDrop && i.editModeEnabled ? (s(), d("td", Wt, [
          ee(Ft, {
            resource: i.dropResource,
            "resource-data": n.value,
            confirm: i.dropConfirm,
            text: i.dropText,
            icon: i.dropIcon,
            onClick: k
          }, null, 8, ["resource", "resource-data", "confirm", "text", "icon"])
        ])) : m("", !0),
        i.canEdit && i.editModeEnabled ? (s(), d("td", qt, [
          ee(Nt, {
            "resource-data": n.value,
            text: i.editText,
            icon: i.editIcon,
            link: o.value,
            onClick: K
          }, null, 8, ["resource-data", "text", "icon", "link"])
        ])) : m("", !0)
      ], 8, Kt);
    };
  }
}), zt = { "data-role": "hidden-row" }, Gt = ["colspan"], Jt = ["data-column"], Qt = ["data-i"], Xt = ["data-column", "title", "onClick"], Yt = /* @__PURE__ */ X({
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
    const r = t, a = l, n = b(a.modelValue), o = (v) => r("click", v);
    return F(() => a.modelValue, (v) => n.value = v), F(n, () => r("update:modelValue", n.value)), (v, I) => ne((s(), d("tr", zt, [
      M("td", { colspan: v.hiddenColumnsColSpan }, [
        M("table", null, [
          M("tr", null, [
            (s(!0), d(L, null, z(v.hiddenColumns, (h) => (s(), d("th", {
              "data-column": h.key
            }, [
              M("div", null, J(h.label), 1)
            ], 8, Jt))), 256))
          ]),
          M("tr", { "data-i": v.i }, [
            (s(!0), d(L, null, z(v.hiddenColumns, (h, D) => (s(), d("td", {
              "data-column": h.key,
              title: S(te)(h, n.value, D, v.hiddenColumns),
              onClick: (u) => o(u, n.value)
            }, [
              v.$slots[h.key] ? U(v.$slots, h.key, {
                key: 0,
                value: n.value[h.key],
                item: n.value,
                column: h,
                i: D
              }) : (s(), C(je, {
                key: 1,
                column: h,
                columns: v.hiddenColumns,
                modelValue: n.value,
                "onUpdate:modelValue": I[0] || (I[0] = (u) => n.value = u),
                i: D
              }, null, 8, ["column", "columns", "modelValue", "i"]))
            ], 8, Xt))), 256))
          ], 8, Qt)
        ])
      ], 8, Gt)
    ], 512)), [
      [re, v.hiddenIsVisible]
    ]);
  }
}), Oe = /* @__PURE__ */ X({
  __name: "CreateButton",
  props: {
    disabled: { type: Boolean, default: !1 },
    text: { default: "" },
    icon: { default: "" },
    to: { default: "" }
  },
  emits: ["click"],
  setup(l, { emit: t }) {
    const r = t, a = f(() => w.createButtonSlot !== ""), n = f(() => w.createButtonSlot);
    return (o, v) => {
      const I = q("lkt-button");
      return s(), C(I, {
        palette: "table-create",
        disabled: o.disabled,
        icon: a.value ? "" : o.icon,
        text: a.value ? "" : o.text,
        "on-click-to": o.to,
        onClick: v[0] || (v[0] = (h) => r("click"))
      }, {
        default: P(() => [
          a.value ? (s(), C(Q(n.value), { key: 0 })) : m("", !0)
        ]),
        _: 1
      }, 8, ["disabled", "icon", "text", "on-click-to"]);
    };
  }
}), Zt = ["data-column", "data-sortable", "data-sort", "colspan", "title"], _t = /* @__PURE__ */ X({
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
    const r = t, a = l, n = f(() => Lt(a.column, a.amountOfColumns, a.items)), o = f(() => a.column.sortable === !0), v = f(() => o.value && a.sortBy === a.column.key ? a.sortDirection : ""), I = f(() => a.column.label.startsWith("__:") ? ie(a.column.label.substring(3)) : a.column.label), h = () => r("click", a.column);
    return (D, u) => (s(), d("th", {
      "data-column": D.column.key,
      "data-sortable": o.value,
      "data-sort": v.value,
      colspan: n.value,
      title: I.value,
      onClick: h
    }, [
      M("div", null, J(I.value), 1)
    ], 8, Zt));
  }
}), xt = ["id"], el = { class: "lkt-table-page-buttons" }, tl = { key: 1 }, ll = { class: "switch-edition-mode" }, ol = {
  key: 0,
  class: "lkt-table-page-buttons"
}, al = {
  key: 1,
  class: "lkt-table-page-filters"
}, nl = ["data-sortable"], rl = { key: 0 }, il = {
  key: 0,
  "data-role": "drag-indicator"
}, sl = { key: 1 }, ul = { key: 2 }, dl = {
  key: 3,
  class: "lkt-table-col-drop"
}, cl = {
  key: 4,
  class: "lkt-table-col-edit"
}, fl = ["id"], pl = {
  key: 0,
  class: "lkt-table-item"
}, ml = {
  key: 3,
  class: "lkt-table-empty"
}, vl = {
  key: 4,
  class: "lkt-table-page-buttons lkt-table-page-buttons-bottom"
}, hl = /* @__PURE__ */ X({
  __name: "LktTable",
  props: {
    modelValue: { default: () => [] },
    columns: { default: () => [] },
    sorter: { type: Function, default: He },
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
    const a = r, n = gt(), o = l, v = {}, I = b(typeof o.sorter == "function" ? o.sorter : He), h = b(At(o.columns)), D = b("asc"), u = b(o.modelValue), G = b(v), p = b(null), k = b(o.columns), K = b(o.page), i = b(!1), g = b(!1), H = b(o.perms), V = b(null), oe = b({}), _ = b(new Dt({ items: u.value }, o.dataStateConfig)), R = b(o.editMode), ae = b(0), ze = (e) => {
      Array.isArray(e) && (u.value = e), i.value = !1, g.value = !0, _.value.store({ items: u.value }).turnStoredIntoOriginal();
    }, Ge = (e) => {
      H.value = e;
    }, Je = (e) => {
    }, Qe = (e) => {
      a("read-response", e);
    }, Xe = () => ge(() => i.value = !0), Ye = () => {
      V.value.doRefresh();
    }, se = Bt(12), pe = f(() => {
      if (!o.hideEmptyColumns) return [];
      let e = [];
      return k.value.forEach((c) => {
        let y = c.key, T = !1;
        u.value.forEach((A) => {
          if (typeof A.checkEmpty == "function")
            return A.checkEmpty(A);
          A[y] && (T = !0);
        }), T || e.push(y);
      }), e;
    }), ue = f(() => k.value.filter((e) => !e.hidden)), me = f(() => k.value.filter((e) => e.hidden)), Ze = f(() => {
      let e = ue.value.length + 1;
      return o.sortable && ++e, e;
    }), _e = f(() => k.value.filter((e) => e.isForRowKey)), Se = f(() => me.value.length > 0 && !o.sortable), xe = f(() => k.value.map((e) => e.key)), Ie = f(() => {
      let e = [];
      for (let c in n) xe.value.indexOf(c) !== -1 && e.push(c);
      return e;
    }), Be = f(() => o.hiddenSave || i.value || !o.saveResource ? !1 : R.value && _.value.changed() ? !0 : R.value), et = f(() => de.value && u.value.length >= o.requiredItemsForTopCreate || o.switchEditionEnabled ? !0 : Be.value || R.value && o.canCreate), tt = f(() => o.saveDisabled || typeof o.saveValidator == "function" && !o.saveValidator(u.value) ? !1 : _.value.changed()), lt = f(() => u.value.length), ot = f(() => ({
      items: u.value,
      ...o.saveResourceData
    })), at = f(() => o.titleTag === "" ? "h2" : o.titleTag), nt = f(() => o.wrapContentTag === "" ? "div" : o.wrapContentTag), ve = f(() => o.title.startsWith("__:") ? ie(o.title.substring(3)) : o.title), rt = f(() => o.saveText.startsWith("__:") ? ie(o.saveText.substring(3)) : o.saveText), it = f(() => o.editModeText.startsWith("__:") ? ie(o.editModeText.substring(3)) : o.editModeText), De = f(() => H.value.includes("create")), st = f(() => H.value.includes("read")), he = f(() => H.value.includes("update")), ye = f(() => H.value.includes("drop")), ut = (e) => {
      let c = e.target;
      if (typeof c.dataset.column > "u")
        do
          c = c.parentNode;
        while (typeof c.dataset.column > "u" && c.tagName !== "TABLE" && c.tagName !== "body");
      if (c.tagName === "TD" && (c = c.parentNode, c = c.dataset.i, typeof c < "u"))
        return u.value[c];
    }, Ee = (e) => G.value["tr_" + e] === !0, we = (e) => {
      e && e.sortable && (u.value = u.value.sort((c, y) => I.value(c, y, e, D.value)), D.value = D.value === "asc" ? "desc" : "asc", h.value = e.key, a("sort", [h.value, D.value]));
    }, Ve = (e) => {
      a("click", e);
    }, Te = (e, c) => {
      let y = "tr_" + c;
      G.value[y] = typeof G.value[y] > "u" ? !0 : !G.value[y];
    }, Le = () => {
      k.value.forEach((e) => {
        if (e.type === "select" && e.autoLoadSelectOptions) {
          let c = e.autoLoadSelectOptionsKey !== "" ? e.autoLoadSelectOptionsKey : e.key, y = [];
          u.value.forEach((A) => {
            Array.isArray(A[c]) && A[c].forEach((O) => y.push(O));
          });
          let T = {};
          y = y.filter(function(A) {
            return T[A.value] ? !1 : (T[A.value] = !0, !0);
          }), e.setOptions(y);
        }
      });
    }, dt = (e) => typeof o.checkValidDrag == "function" ? o.checkValidDrag(e) : !0, Me = (e) => typeof o.draggableChecker == "function" ? o.draggableChecker(e) : !0, Re = () => {
      if (o.canCreateWithoutEdition)
        a("click-create");
      else {
        if (typeof o.newValueGenerator == "function") {
          let e = o.newValueGenerator();
          if (typeof e == "object") {
            u.value.push(e);
            return;
          }
        }
        u.value.push({});
      }
    }, ct = () => {
      i.value = !0;
    }, ft = () => {
      i.value = !1;
    }, pt = (e, c) => {
      if (a("before-save"), o.saveResource && (i.value = !1, !c.success)) {
        a("error", c.httpStatus);
        return;
      }
      _.value.turnStoredIntoOriginal(), a("save", c);
    }, Ae = (e, c, y) => {
      if (y >= e.length) {
        let T = y - e.length + 1;
        for (; T--; ) e.push(void 0);
      }
      return e.splice(y, 0, e.splice(c, 1)[0]), e;
    }, mt = (e) => {
      Ae(u.value, e, e - 1), ae.value = fe();
    }, vt = (e) => {
      Ae(u.value, e, e + 1), ae.value = fe();
    }, $e = (e) => {
      u.value.splice(e, 1), ae.value = fe();
    }, ht = () => {
      let e = document.getElementById("lkt-table-body-" + se);
      oe.value = new Et(e, {
        direction: "vertical",
        handle: ".handle",
        animation: 150,
        onEnd: function(c) {
          let y = c.oldIndex, T = c.newIndex;
          u.value.splice(T, 0, u.value.splice(y, 1)[0]), ae.value = fe();
        },
        onMove: function(c, y) {
          return dt(c);
        }
      });
    }, Fe = (e, c, y = !1) => {
      let T = [ae.value, se, "row", c];
      return y && T.push("hidden"), _e.value.forEach((A) => {
        let O = String(e[A.key]).toLowerCase();
        O.length > 50 && (O = O.substring(0, 50)), O = qe(O, " ", "-"), T.push(O);
      }), T.join("-");
    }, Ne = f(() => typeof o.createEnabledValidator == "function" ? o.createEnabledValidator({ items: u.value }) : !0), de = f(() => De.value ? o.canCreateWithoutEdition || o.canCreate && R.value : !1), Ke = (e) => typeof o.itemDisplayChecker == "function" ? o.itemDisplayChecker(e) : !0;
    Ct(() => {
      Le(), o.initialSorting && we($t(o.columns, h.value)), _.value.store({ items: u.value }).turnStoredIntoOriginal(), o.sortable && ge(() => {
        ht();
      });
    }), F(() => o.perms, (e) => H.value = e), F(H, (e) => a("update:perms", e)), F(() => o.editMode, (e) => R.value = e), F(() => o.columns, (e) => k.value = e), F(() => o.modelValue, (e) => u.value = e), F(u, (e) => {
      Le(), _.value.increment({ items: e }), a("update:modelValue", e);
    }, { deep: !0 }), t({
      getItemByEvent: ut,
      doRefresh: Ye
    });
    const yt = f(() => typeof w.defaultEmptySlot < "u"), kt = f(() => w.defaultEmptySlot);
    return (e, c) => {
      const y = q("lkt-button"), T = q("lkt-field-switch"), A = q("lkt-loader"), O = q("lkt-paginator");
      return s(), d("section", {
        class: "lkt-table-page",
        id: "lkt-table-page-" + S(se)
      }, [
        ve.value || S(n).title ? (s(), d("header", {
          key: 0,
          class: x(e.headerClass)
        }, [
          ve.value ? (s(), C(Q(at.value), { key: 0 }, {
            default: P(() => [
              e.titleIcon ? (s(), d("i", {
                key: 0,
                class: x(e.titleIcon)
              }, null, 2)) : m("", !0),
              le(" " + J(ve.value), 1)
            ]),
            _: 1
          })) : m("", !0),
          S(n).title ? U(e.$slots, "title", { key: 1 }) : m("", !0)
        ], 2)) : m("", !0),
        (s(), C(Q(nt.value), {
          class: x(["lkt-table-page-content-wrapper", e.wrapContentClass])
        }, {
          default: P(() => [
            ne(M("div", el, [
              ne(ee(y, {
                ref: "saveButton",
                palette: "success",
                disabled: !tt.value,
                "confirm-modal": e.saveConfirm,
                "confirm-data": e.confirmData,
                resource: e.saveResource,
                "resource-data": ot.value,
                onLoading: ct,
                onLoaded: ft,
                onClick: pt
              }, {
                default: P(() => [
                  S(n)["button-save"] ? U(e.$slots, "button-save", {
                    key: 0,
                    items: u.value,
                    editMode: e.editMode,
                    canUpdate: !e.saveDisabled
                  }) : (s(), d("span", tl, J(rt.value), 1))
                ]),
                _: 3
              }, 8, ["disabled", "confirm-modal", "confirm-data", "resource", "resource-data"]), [
                [re, Be.value]
              ]),
              de.value && u.value.length >= e.requiredItemsForTopCreate ? (s(), C(Oe, {
                key: 0,
                disabled: !Ne.value || e.createDisabled,
                text: e.createText,
                icon: e.createIcon,
                to: e.createRoute,
                onClick: Re
              }, null, 8, ["disabled", "text", "icon", "to"])) : m("", !0),
              M("div", ll, [
                ne(ee(T, {
                  modelValue: R.value,
                  "onUpdate:modelValue": c[0] || (c[0] = (E) => R.value = E),
                  label: it.value
                }, null, 8, ["modelValue", "label"]), [
                  [re, e.switchEditionEnabled]
                ])
              ])
            ], 512), [
              [re, et.value]
            ]),
            S(n).buttons ? (s(), d("div", ol, [
              U(e.$slots, "buttons")
            ])) : m("", !0),
            g.value && S(n).filters ? (s(), d("div", al, [
              U(e.$slots, "filters", {
                items: u.value,
                isLoading: i.value
              })
            ])) : m("", !0),
            i.value ? (s(), C(A, { key: 2 })) : m("", !0),
            ne(M("div", {
              class: "lkt-table",
              "data-sortable": e.sortable
            }, [
              e.itemMode ? (s(), d("div", {
                key: 1,
                class: x(["lkt-table-items-container", e.itemsContainerClass])
              }, [
                (s(!0), d(L, null, z(u.value, (E, W) => (s(), d(L, null, [
                  Ke(E) ? (s(), d("div", pl, [
                    U(e.$slots, "item", be({
                      [e.slotItemVar || ""]: E,
                      index: W,
                      canCreate: De.value,
                      canRead: st.value,
                      canUpdate: he.value,
                      canDrop: ye.value,
                      isLoading: i.value,
                      doDrop: () => $e(W)
                    }))
                  ])) : m("", !0)
                ], 64))), 256))
              ], 2)) : (s(), d("table", rl, [
                M("thead", null, [
                  M("tr", null, [
                    e.sortable && R.value ? (s(), d("th", il)) : m("", !0),
                    e.addNavigation && R.value ? (s(), d("th", sl)) : m("", !0),
                    Se.value ? (s(), d("th", ul)) : m("", !0),
                    (s(!0), d(L, null, z(ue.value, (E) => (s(), d(L, null, [
                      pe.value.indexOf(E.key) === -1 ? (s(), C(_t, {
                        key: 0,
                        column: E,
                        "sort-by": h.value,
                        "sort-direction": D.value,
                        "amount-of-columns": e.columns.length,
                        items: u.value,
                        onClick: (W) => we(E)
                      }, null, 8, ["column", "sort-by", "sort-direction", "amount-of-columns", "items", "onClick"])) : m("", !0)
                    ], 64))), 256)),
                    e.canDrop && ye.value && R.value ? (s(), d("th", dl)) : m("", !0),
                    e.canEditButton && he.value && R.value ? (s(), d("th", cl)) : m("", !0)
                  ])
                ]),
                M("tbody", {
                  ref: (E) => p.value = E,
                  id: "lkt-table-body-" + S(se)
                }, [
                  (s(!0), d(L, null, z(u.value, (E, W) => (s(), d(L, null, [
                    Ke(E) ? (s(), C(jt, {
                      modelValue: u.value[W],
                      "onUpdate:modelValue": (Y) => u.value[W] = Y,
                      key: Fe(E, W),
                      i: W,
                      "display-hidden-columns-indicator": Se.value,
                      "is-draggable": Me(E),
                      sortable: e.sortable,
                      "visible-columns": ue.value,
                      "empty-columns": pe.value,
                      "add-navigation": e.addNavigation,
                      "hidden-is-visible": Ee(W),
                      "latest-row": W + 1 === lt.value,
                      "can-drop": e.canDrop && ye.value && R.value,
                      "drop-confirm": e.dropConfirm,
                      "drop-resource": e.dropResource,
                      "drop-text": e.dropText,
                      "drop-icon": e.dropIcon,
                      "can-edit": e.canEditButton && he.value && R.value,
                      "edit-text": e.editText,
                      "edit-icon": e.editIcon,
                      "edit-link": e.editLink,
                      "edit-mode-enabled": R.value,
                      onClick: Ve,
                      onShow: Te,
                      onItemUp: mt,
                      onItemDown: vt,
                      onItemDrop: $e
                    }, Ue({ _: 2 }, [
                      z(Ie.value, (Y) => ({
                        name: Y,
                        fn: P((j) => [
                          U(e.$slots, Y, be({
                            [e.slotItemVar || ""]: j.item,
                            value: j.value,
                            column: j.column
                          }))
                        ])
                      }))
                    ]), 1032, ["modelValue", "onUpdate:modelValue", "i", "display-hidden-columns-indicator", "is-draggable", "sortable", "visible-columns", "empty-columns", "add-navigation", "hidden-is-visible", "latest-row", "can-drop", "drop-confirm", "drop-resource", "drop-text", "drop-icon", "can-edit", "edit-text", "edit-icon", "edit-link", "edit-mode-enabled"])) : m("", !0),
                    me.value.length > 0 ? (s(!0), d(L, { key: 1 }, z(u.value, (Y, j) => (s(), C(Yt, {
                      modelValue: u.value[j],
                      "onUpdate:modelValue": (ce) => u.value[j] = ce,
                      key: Fe(Y, j, !0),
                      i: j,
                      "hidden-columns": me.value,
                      "hidden-columns-col-span": Ze.value,
                      "is-draggable": Me(Y),
                      sortable: e.sortable,
                      "visible-columns": ue.value,
                      "empty-columns": pe.value,
                      "hidden-is-visible": Ee(j),
                      onClick: Ve,
                      onShow: Te
                    }, Ue({ _: 2 }, [
                      z(Ie.value, (ce) => ({
                        name: ce,
                        fn: P((ke) => [
                          U(e.$slots, ce, be({
                            [e.slotItemVar || ""]: ke.item,
                            value: ke.value,
                            column: ke.column
                          }))
                        ])
                      }))
                    ]), 1032, ["modelValue", "onUpdate:modelValue", "i", "hidden-columns", "hidden-columns-col-span", "is-draggable", "sortable", "visible-columns", "empty-columns", "hidden-is-visible"]))), 128)) : m("", !0)
                  ], 64))), 256))
                ], 8, fl)
              ]))
            ], 8, nl), [
              [re, !i.value && u.value.length > 0]
            ]),
            !i.value && u.value.length === 0 ? (s(), d("div", ml, [
              S(n).empty ? U(e.$slots, "empty", { key: 0 }) : yt.value ? (s(), C(Q(kt.value), {
                key: 1,
                message: e.noResultsText
              }, null, 8, ["message"])) : e.noResultsText ? (s(), d(L, { key: 2 }, [
                le(J(e.noResultsText), 1)
              ], 64)) : m("", !0)
            ])) : m("", !0),
            de.value || S(n).bottomButtons ? (s(), d("div", vl, [
              de.value && u.value.length >= e.requiredItemsForBottomCreate ? (s(), C(Oe, {
                key: 0,
                disabled: !Ne.value || e.createDisabled,
                text: e.createText,
                icon: e.createIcon,
                to: e.createRoute,
                onClick: Re
              }, null, 8, ["disabled", "text", "icon", "to"])) : m("", !0),
              U(e.$slots, "bottom-buttons")
            ])) : m("", !0),
            e.resource.length > 0 ? (s(), C(O, {
              key: 5,
              ref_key: "paginator",
              ref: V,
              modelValue: K.value,
              "onUpdate:modelValue": c[1] || (c[1] = (E) => K.value = E),
              resource: e.resource,
              filters: e.filters,
              onResults: ze,
              onLoading: Xe,
              onPerms: Ge,
              onCustom: Je,
              onResponse: Qe
            }, null, 8, ["modelValue", "resource", "filters"])) : m("", !0)
          ]),
          _: 3
        }, 8, ["class"]))
      ], 8, xt);
    };
  }
}), Ol = {
  install: (l) => {
    l.component("lkt-loader") === void 0 && l.use(wt), l.component("lkt-button") === void 0 && l.use(Vt), l.component("lkt-paginator") === void 0 && l.use(Tt), l.component("lkt-field") === void 0 && l.use(It), l.component("lkt-table") === void 0 && l.component("lkt-table", hl);
  }
}, Wl = (l) => (w.navButtonSlot = l, !0), ql = (l) => (w.dropButtonSlot = l, !0), jl = (l) => (w.createButtonSlot = l, !0), zl = (l) => {
  w.defaultEmptySlot = l;
};
export {
  $ as LktTableColumn,
  Ll as createActionColumn,
  Nl as createCheckColumn,
  Vl as createColumn,
  $l as createEmailColumn,
  Pl as createFileColumn,
  Al as createFloatColumn,
  Hl as createHiddenColumn,
  Rl as createIntegerColumn,
  Tl as createLinkColumn,
  Ul as createSelectColumn,
  Kl as createSwitchColumn,
  Fl as createTelColumn,
  Ml as createTextColumn,
  Ol as default,
  jl as setTableCreateButtonSlot,
  ql as setTableDropButtonSlot,
  zl as setTableEmptySlot,
  Wl as setTableNavButtonSlot
};
