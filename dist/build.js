import { reactive as L, defineComponent as X, ref as y, watch as N, computed as c, resolveComponent as q, unref as g, openBlock as u, createBlock as k, withCtx as K, createTextVNode as le, toDisplayString as J, createElementBlock as d, mergeProps as kt, Fragment as M, withModifiers as We, resolveDynamicComponent as Q, createCommentVNode as m, normalizeClass as x, createElementVNode as R, createVNode as ee, renderList as j, renderSlot as U, withDirectives as ne, vShow as ie, useSlots as bt, onMounted as gt, nextTick as Ne, createSlots as Ue, normalizeProps as be } from "vue";
import Ct, { Field as Ke } from "lkt-field";
import { __ as re } from "lkt-i18n";
import { replaceAll as qe, generateRandomString as St } from "lkt-string-tools";
import { DataState as It } from "lkt-data-state";
import Bt from "sortablejs";
import { time as fe } from "lkt-date-tools";
import Dt from "lkt-loader";
import Et from "lkt-button";
import wt from "lkt-paginator";
var B = /* @__PURE__ */ ((t) => (t.Text = "text", t.Number = "number", t.Check = "check", t.Switch = "switch", t.Select = "select", t.Email = "email", t.Tel = "tel", t.File = "file", t.Link = "link", t.Action = "action", t.Integer = "int", t.Float = "float", t))(B || {});
class A {
  constructor(l = "", i = "") {
    if (this.sortable = !0, this.hidden = !1, this.formatter = void 0, this.checkEmpty = void 0, this.colspan = void 0, this.preferSlot = !0, this.type = "", this.field = new Ke(), this.resource = "", this.resourceData = {}, this.isMultiple = !1, this.multipleDisplay = "inline", this.multipleDisplayEdition = "", typeof l == "object")
      for (let o in l)
        this[o] = l[o];
    else
      this.key = l, this.label = i;
    this.field = new Ke(this.field);
  }
  setIsSortable(l = !0) {
    return this.sortable = l, this;
  }
  setIsEditable(l = !0) {
    return this.editable = l, this;
  }
  setIsHidden(l = !0) {
    return this.hidden = l, this;
  }
  setFormatter(l = void 0) {
    return this.formatter = l, this;
  }
  setEmptyChecker(l = void 0) {
    return this.checkEmpty = l, this;
  }
  setColSpan(l = void 0) {
    return this.colspan = l, this;
  }
  getHref(l) {
    return typeof this.link == "function" ? this.link(l) : this.link;
  }
  doAction(l) {
    if (typeof this.action == "function")
      return this.action(l);
    console.warn("No action defined");
  }
  defineAsLink(l) {
    return this.type = B.Link, this.link = l, this;
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
  defineAsAction(l) {
    return this.type = B.Action, this.action = l, this;
  }
  defineAsSelect(l) {
    return this.type = B.Select, this.options = l, this;
  }
  setIsMultiple(l = !0) {
    return this.isMultiple = l, this;
  }
  setResource(l) {
    return this.resource = l, this;
  }
  setResourceSlot(l) {
    return this.resourceSlot = l, this;
  }
  setResourceData(l) {
    return this.resourceData = l, this;
  }
  setMultipleDisplay(l) {
    return this.setIsMultiple(!0), this.multipleDisplay = l, this;
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
  setMultipleDisplayEdition(l) {
    return this.setIsMultiple(!0), this.multipleDisplayEdition = l, this;
  }
  setMultipleDisplayEditionToList() {
    return this.setIsMultiple(!0), this.multipleDisplayEdition = "list", this;
  }
  setMultipleDisplayEditionToInline() {
    return this.setIsMultiple(!0), this.multipleDisplayEdition = "inline", this;
  }
  setSlotData(l) {
    return this.slotData = l, this;
  }
  setAutoLoadSelectOptions(l = !0, i = "") {
    return this.autoLoadSelectOptions = l, this.autoLoadSelectOptionsKey = i, this;
  }
  setTagMode(l = !0) {
    return this.tags = l, this;
  }
  setOptions(l = []) {
    return this.options = l, this;
  }
  setTitleSourceColumn(l) {
    return this.extractTitleFromColumn = l, this;
  }
  useForRowKey(l = !0) {
    return this.isForRowKey = l, this;
  }
  setIsEquivalentToSelectValue(l = !0) {
    return this.equivalentToSelectValue = l, this;
  }
}
const Dl = (t, l, i = !0) => L(new A(t, l).setIsSortable(i)), El = (t, l, i, o = !0) => L(new A(t, l).setIsSortable(o).defineAsLink(i)), wl = (t, l, i, o = !0) => L(new A(t, l).setIsSortable(o).defineAsAction(i)), Vl = (t, l, i = !0) => L(new A(t, l).setIsSortable(i).defineAsText()), Tl = (t, l, i = !0) => L(new A(t, l).setIsSortable(i).defineAsInteger()), Ml = (t, l, i = !0) => L(new A(t, l).setIsSortable(i).defineAsFloat()), Rl = (t, l, i = !0) => L(new A(t, l).setIsSortable(i).defineAsEmail()), $l = (t, l, i = !0) => L(new A(t, l).setIsSortable(i).defineAsTel()), Al = (t, l, i = !0) => L(new A(t, l).setIsSortable(i).defineAsCheck()), Ll = (t, l, i = !0) => L(new A(t, l).setIsSortable(i).defineAsSwitch()), Fl = (t, l, i, o = !0) => L(new A(t, l).setIsSortable(o).defineAsSelect(i)), Nl = (t, l, i = !0) => L(new A(t, l).setIsSortable(i).defineAsFile()), Ul = (t, l, i = !0) => L(new A(t, l).setIsSortable(i).setIsHidden(!0)), Pe = (t, l, i, o) => {
  if (!i) return 0;
  let n = t[i.key], a = l[i.key];
  if (o === "asc") {
    if (n > a) return 1;
    if (a > n) return -1;
  } else {
    if (n > a) return -1;
    if (a > n) return 1;
  }
  return 0;
}, te = (t, l, i, o = []) => {
  if (t.extractTitleFromColumn) {
    let n = o.find((a) => a.key === t.extractTitleFromColumn);
    if (n)
      return te(n, l, i, o);
  }
  if (t.formatter && typeof t.formatter == "function") {
    let n = t.formatter(l[t.key], l, t, i);
    return n.startsWith("__:") ? re(n.substring(3)) : n;
  }
  return l[t.key];
}, Vt = (t, l, i) => {
  if (!t.colspan) return -1;
  let o = l;
  return i.forEach((n) => {
    let a = ge(t, n);
    a > 0 && a < o && (o = a);
  }), o;
}, ge = (t, l) => t.colspan === !1 ? !1 : typeof t.colspan == "function" ? t.colspan(l) : t.colspan, Tt = (t, l) => typeof t.preferSlot > "u" ? !0 : t.preferSlot === !1 ? !1 : typeof t.preferSlot == "function" ? t.preferSlot(l) : !0, Mt = (t, l, i) => {
  if (typeof t != "object" || !t.key || l.indexOf(t.key) > -1) return !1;
  let o = ge(t, i);
  return typeof t.colspan > "u" ? !0 : (typeof t.colspan < "u" && (typeof t.colspan == "function" ? o = parseInt(t.colspan(i)) : o = parseInt(t.colspan)), o > 0);
}, Rt = (t = []) => {
  if (t.length > 0) {
    for (let l = 0; l < t.length; ++l)
      if (t[l].sortable) return t[l].key;
  }
  return "";
}, $t = (t, l) => {
  if (t.length > 0) {
    for (let i = 0; i < t.length; ++i)
      if (t[i].key === l) return t[i];
  }
  return null;
}, Oe = /* @__PURE__ */ X({
  __name: "LktTableCell",
  props: {
    modelValue: { default: () => ({}) },
    column: { default: () => new A() },
    columns: { default: () => [] },
    i: { default: 0 },
    editModeEnabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: l }) {
    const i = l, o = t, n = y(o.modelValue), a = y(n.value[o.column.key]), v = y(null);
    N(a, (p) => {
      const S = JSON.parse(JSON.stringify(n.value));
      S[o.column.key] = p, i("update:modelValue", S);
    }), N(() => o.modelValue, (p) => {
      n.value = p, a.value = n.value[o.column.key];
    });
    const C = c(() => ({ ...o.column.slotData, item: n.value })), h = c(() => {
      var p, S, E;
      if ((p = o.column.field) != null && p.modalKey.startsWith("prop:")) {
        let P = (S = o.column.field) == null ? void 0 : S.modalKey.substring(5);
        return n.value[P];
      }
      return (E = o.column.field) == null ? void 0 : E.modalKey;
    }), D = c(() => {
      var p, S, E;
      if (typeof ((p = o.column.field) == null ? void 0 : p.options) == "string" && ((S = o.column.field) != null && S.options.startsWith("prop:"))) {
        let P = (E = o.column.field) == null ? void 0 : E.options.substring(5);
        return n.value[P];
      }
      return o.column.field.options;
    }), s = c(() => [B.Integer, B.Float].includes(o.column.type) ? B.Number : o.column.type);
    return (p, S) => {
      const E = q("lkt-anchor"), P = q("lkt-field");
      return p.column.type === g(B).Link ? (u(), k(E, {
        key: 0,
        to: p.column.getHref(n.value)
      }, {
        default: K(() => [
          le(J(g(te)(p.column, n.value, p.i)), 1)
        ]),
        _: 1
      }, 8, ["to"])) : p.column.type === g(B).Action ? (u(), d("a", {
        key: 1,
        href: "#",
        onClick: S[0] || (S[0] = (r) => p.column.doAction(n.value))
      }, J(g(te)(p.column, n.value, p.i)), 1)) : p.column.type !== "" ? (u(), k(P, kt({ key: 2 }, p.column.field, {
        type: s.value,
        "read-mode": !p.column.editable || !p.editModeEnabled,
        ref: (r) => v.value = r,
        "slot-data": C.value,
        label: p.column.type === "switch" || p.column.type === "check" ? p.column.label : "",
        "modal-key": h.value,
        options: D.value,
        modelValue: a.value,
        "onUpdate:modelValue": S[1] || (S[1] = (r) => a.value = r)
      }), null, 16, ["type", "read-mode", "slot-data", "label", "modal-key", "options", "modelValue"])) : (u(), d(M, { key: 3 }, [
        le(J(g(te)(p.column, n.value, p.i, p.columns)), 1)
      ], 64));
    };
  }
}), Z = class Z {
};
Z.navButtonSlot = "", Z.dropButtonSlot = "", Z.editButtonSlot = "", Z.createButtonSlot = "", Z.defaultEmptySlot = void 0;
let V = Z;
const At = /* @__PURE__ */ X({
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
  setup(t, { emit: l }) {
    const i = l, o = c(() => V.dropButtonSlot !== ""), n = c(() => V.dropButtonSlot);
    return (a, v) => {
      const C = q("lkt-button");
      return u(), k(C, {
        palette: "table-delete",
        icon: o.value ? "" : a.icon,
        text: o.value ? "" : a.text,
        resource: a.resource,
        "resource-data": a.resourceData,
        "confirm-modal": a.confirm,
        disabled: a.disabled,
        onClick: v[0] || (v[0] = We((h) => i("click"), ["prevent", "stop"]))
      }, {
        default: K(() => [
          o.value ? (u(), k(Q(n.value), { key: 0 })) : m("", !0)
        ]),
        _: 1
      }, 8, ["icon", "text", "resource", "resource-data", "confirm-modal", "disabled"]);
    };
  }
}), Lt = /* @__PURE__ */ X({
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
  setup(t, { emit: l }) {
    const i = l, o = c(() => V.editButtonSlot !== ""), n = c(() => V.editButtonSlot);
    return (a, v) => {
      const C = q("lkt-button");
      return u(), k(C, {
        palette: "table-delete",
        icon: o.value ? "" : a.icon,
        text: o.value ? "" : a.text,
        "on-click-to": a.link,
        "is-anchor": a.link !== "",
        resource: a.resource,
        "resource-data": a.resourceData,
        "confirm-modal": a.confirm,
        disabled: a.disabled,
        onClick: v[0] || (v[0] = We((h) => i("click"), ["prevent", "stop"]))
      }, {
        default: K(() => [
          o.value ? (u(), k(Q(n.value), { key: 0 })) : m("", !0)
        ]),
        _: 1
      }, 8, ["icon", "text", "on-click-to", "is-anchor", "resource", "resource-data", "confirm-modal", "disabled"]);
    };
  }
}), Ft = ["data-i", "data-draggable"], Nt = {
  key: 1,
  "data-role": "invalid-drag-indicator"
}, Ut = {
  key: 2,
  class: "lkt-table-nav-cell"
}, Kt = { class: "lkt-table-nav-container" }, Pt = ["data-column", "colspan", "title", "onClick"], Ht = {
  key: 4,
  class: "lkt-table-col-drop"
}, Wt = {
  key: 5,
  class: "lkt-table-col-edit"
}, qt = /* @__PURE__ */ X({
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
  setup(t, { emit: l }) {
    const i = l, o = t, n = y(o.modelValue), a = y(o.editLink);
    for (let r in n.value) a.value = qe(a.value, ":" + r, n.value[r]);
    const v = (r) => i("click", r), C = (r, I) => {
      i("show", r, I);
    }, h = c(() => {
      let r = [];
      return o.sortable && o.isDraggable && r.push("handle"), r.join(" ");
    }), D = c(() => V.navButtonSlot !== ""), s = c(() => V.navButtonSlot), p = () => {
      i("item-up", o.i);
    }, S = () => {
      i("item-down", o.i);
    }, E = () => {
      i("item-drop", o.i);
    }, P = () => {
    };
    return N(() => o.modelValue, (r) => n.value = r), N(n, (r) => {
      i("update:modelValue", r, o.i);
    }, { deep: !0 }), (r, I) => {
      const H = q("lkt-button");
      return u(), d("tr", {
        "data-i": r.i,
        "data-draggable": r.isDraggable
      }, [
        r.sortable && r.isDraggable && r.editModeEnabled ? (u(), d("td", {
          key: 0,
          "data-role": "drag-indicator",
          class: x(h.value)
        }, null, 2)) : r.sortable && r.editModeEnabled ? (u(), d("td", Nt)) : m("", !0),
        r.addNavigation && r.editModeEnabled ? (u(), d("td", Ut, [
          R("div", Kt, [
            ee(H, {
              palette: "table-nav",
              disabled: r.i === 0,
              onClick: p
            }, {
              default: K(() => [
                D.value ? (u(), k(Q(s.value), {
                  key: 0,
                  direction: "up"
                })) : (u(), d(M, { key: 1 }, [
                  I[2] || (I[2] = R("i", { class: "" }, null, -1)),
                  I[3] || (I[3] = le(" UP "))
                ], 64))
              ]),
              _: 1
            }, 8, ["disabled"]),
            ee(H, {
              palette: "table-nav",
              disabled: r.latestRow,
              onClick: S
            }, {
              default: K(() => [
                D.value ? (u(), k(Q(s.value), {
                  key: 0,
                  direction: "down"
                })) : (u(), d(M, { key: 1 }, [
                  I[4] || (I[4] = R("i", { class: "" }, null, -1)),
                  I[5] || (I[5] = le(" DOWN "))
                ], 64))
              ]),
              _: 1
            }, 8, ["disabled"])
          ])
        ])) : m("", !0),
        r.displayHiddenColumnsIndicator ? (u(), d("td", {
          key: 3,
          onClick: I[0] || (I[0] = (T) => C(T, r.i)),
          "data-role": "show-more",
          class: x(r.hiddenIsVisible ? "state-open" : "")
        }, null, 2)) : m("", !0),
        (u(!0), d(M, null, j(r.visibleColumns, (T) => (u(), d(M, null, [
          g(Mt)(T, r.emptyColumns, n.value) ? (u(), d("td", {
            key: "td" + r.i,
            "data-column": T.key,
            colspan: g(ge)(T, n.value),
            title: g(te)(T, n.value, r.i, r.visibleColumns),
            onClick: (ae) => v(ae, n.value)
          }, [
            r.$slots[T.key] && g(Tt)(T, n.value) ? U(r.$slots, T.key, {
              key: 0,
              value: n.value[T.key],
              item: n.value,
              column: T,
              i: r.i
            }) : n.value ? (u(), k(Oe, {
              key: 1,
              modelValue: n.value,
              "onUpdate:modelValue": I[1] || (I[1] = (ae) => n.value = ae),
              column: T,
              columns: r.visibleColumns,
              "edit-mode-enabled": r.editModeEnabled,
              i: r.i
            }, null, 8, ["modelValue", "column", "columns", "edit-mode-enabled", "i"])) : m("", !0)
          ], 8, Pt)) : m("", !0)
        ], 64))), 256)),
        r.canDrop && r.editModeEnabled ? (u(), d("td", Ht, [
          ee(At, {
            resource: r.dropResource,
            "resource-data": n.value,
            confirm: r.dropConfirm,
            text: r.dropText,
            icon: r.dropIcon,
            onClick: E
          }, null, 8, ["resource", "resource-data", "confirm", "text", "icon"])
        ])) : m("", !0),
        r.canEdit && r.editModeEnabled ? (u(), d("td", Wt, [
          ee(Lt, {
            "resource-data": n.value,
            text: r.editText,
            icon: r.editIcon,
            link: a.value,
            onClick: P
          }, null, 8, ["resource-data", "text", "icon", "link"])
        ])) : m("", !0)
      ], 8, Ft);
    };
  }
}), Ot = { "data-role": "hidden-row" }, jt = ["colspan"], zt = ["data-column"], Gt = ["data-i"], Jt = ["data-column", "title", "onClick"], Qt = /* @__PURE__ */ X({
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
  setup(t, { emit: l }) {
    const i = l, o = t, n = y(o.modelValue), a = (v) => i("click", v);
    return N(() => o.modelValue, (v) => n.value = v), N(n, () => i("update:modelValue", n.value)), (v, C) => ne((u(), d("tr", Ot, [
      R("td", { colspan: v.hiddenColumnsColSpan }, [
        R("table", null, [
          R("tr", null, [
            (u(!0), d(M, null, j(v.hiddenColumns, (h) => (u(), d("th", {
              "data-column": h.key
            }, [
              R("div", null, J(h.label), 1)
            ], 8, zt))), 256))
          ]),
          R("tr", { "data-i": v.i }, [
            (u(!0), d(M, null, j(v.hiddenColumns, (h, D) => (u(), d("td", {
              "data-column": h.key,
              title: g(te)(h, n.value, D, v.hiddenColumns),
              onClick: (s) => a(s, n.value)
            }, [
              v.$slots[h.key] ? U(v.$slots, h.key, {
                key: 0,
                value: n.value[h.key],
                item: n.value,
                column: h,
                i: D
              }) : (u(), k(Oe, {
                key: 1,
                column: h,
                columns: v.hiddenColumns,
                modelValue: n.value,
                "onUpdate:modelValue": C[0] || (C[0] = (s) => n.value = s),
                i: D
              }, null, 8, ["column", "columns", "modelValue", "i"]))
            ], 8, Jt))), 256))
          ], 8, Gt)
        ])
      ], 8, jt)
    ], 512)), [
      [ie, v.hiddenIsVisible]
    ]);
  }
}), He = /* @__PURE__ */ X({
  __name: "CreateButton",
  props: {
    disabled: { type: Boolean, default: !1 },
    text: { default: "" },
    icon: { default: "" },
    to: { default: "" }
  },
  emits: ["click"],
  setup(t, { emit: l }) {
    const i = l, o = c(() => V.createButtonSlot !== ""), n = c(() => V.createButtonSlot);
    return (a, v) => {
      const C = q("lkt-button");
      return u(), k(C, {
        palette: "table-create",
        disabled: a.disabled,
        icon: o.value ? "" : a.icon,
        text: o.value ? "" : a.text,
        "on-click-to": a.to,
        onClick: v[0] || (v[0] = (h) => i("click"))
      }, {
        default: K(() => [
          o.value ? (u(), k(Q(n.value), { key: 0 })) : m("", !0)
        ]),
        _: 1
      }, 8, ["disabled", "icon", "text", "on-click-to"]);
    };
  }
}), Xt = ["data-column", "data-sortable", "data-sort", "colspan", "title"], Yt = /* @__PURE__ */ X({
  __name: "TableHeader",
  props: {
    column: { default: () => ({}) },
    sortBy: { default: "" },
    sortDirection: { default: "" },
    amountOfColumns: { default: 0 },
    items: { default: () => [] }
  },
  emits: ["click"],
  setup(t, { emit: l }) {
    const i = l, o = t, n = c(() => Vt(o.column, o.amountOfColumns, o.items)), a = c(() => o.column.sortable === !0), v = c(() => a.value && o.sortBy === o.column.key ? o.sortDirection : ""), C = c(() => o.column.label.startsWith("__:") ? re(o.column.label.substring(3)) : o.column.label), h = () => i("click", o.column);
    return (D, s) => (u(), d("th", {
      "data-column": D.column.key,
      "data-sortable": a.value,
      "data-sort": v.value,
      colspan: n.value,
      title: C.value,
      onClick: h
    }, [
      R("div", null, J(C.value), 1)
    ], 8, Xt));
  }
}), Zt = ["id"], _t = { class: "lkt-table-page-buttons" }, xt = { key: 1 }, el = { class: "switch-edition-mode" }, tl = {
  key: 0,
  class: "lkt-table-page-buttons"
}, ll = {
  key: 1,
  class: "lkt-table-page-filters"
}, al = ["data-sortable"], ol = { key: 0 }, nl = {
  key: 0,
  "data-role": "drag-indicator"
}, il = { key: 1 }, rl = { key: 2 }, ul = {
  key: 3,
  class: "lkt-table-col-drop"
}, sl = {
  key: 4,
  class: "lkt-table-col-edit"
}, dl = ["id"], cl = {
  key: 0,
  class: "lkt-table-item"
}, fl = {
  key: 3,
  class: "lkt-table-empty"
}, pl = {
  key: 4,
  class: "lkt-table-page-buttons lkt-table-page-buttons-bottom"
}, ml = /* @__PURE__ */ X({
  __name: "LktTable",
  props: {
    modelValue: { default: () => [] },
    columns: { default: () => [] },
    sorter: { type: Function, default: Pe },
    draggableChecker: { type: Function, default: (t) => !0 },
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
  setup(t, { expose: l, emit: i }) {
    const o = i, n = bt(), a = t, v = {}, C = y(typeof a.sorter == "function" ? a.sorter : Pe), h = y(Rt(a.columns)), D = y("asc"), s = y(a.modelValue), p = y(v), S = y(null), E = y(a.columns), P = y(a.page), r = y(!1), I = y(!1), H = y(a.perms), T = y(null), ae = y({}), _ = y(new It({ items: s.value }, a.dataStateConfig)), $ = y(a.editMode), oe = y(0), je = (e) => {
      Array.isArray(e) && (s.value = e), r.value = !1, I.value = !0, _.value.store({ items: s.value }).turnStoredIntoOriginal();
    }, ze = (e) => {
      H.value = e;
    }, Ge = (e) => {
    }, Je = (e) => {
      o("read-response", e);
    }, Qe = () => Ne(() => r.value = !0), Xe = () => {
      T.value.doRefresh();
    }, ue = St(12), pe = c(() => {
      if (!a.hideEmptyColumns) return [];
      let e = [];
      return E.value.forEach((f) => {
        let b = f.key, F = !1;
        s.value.forEach((z) => {
          if (typeof z.checkEmpty == "function")
            return z.checkEmpty(z);
          z[b] && (F = !0);
        }), F || e.push(b);
      }), e;
    }), se = c(() => E.value.filter((e) => !e.hidden)), me = c(() => E.value.filter((e) => e.hidden)), Ye = c(() => {
      let e = se.value.length + 1;
      return a.sortable && ++e, e;
    }), Ze = c(() => E.value.filter((e) => e.isForRowKey)), Ce = c(() => me.value.length > 0 && !a.sortable), _e = c(() => E.value.map((e) => e.key)), Se = c(() => {
      let e = [];
      for (let f in n) _e.value.indexOf(f) !== -1 && e.push(f);
      return e;
    }), Ie = c(() => a.hiddenSave || r.value || !a.saveResource ? !1 : $.value && _.value.changed() ? !0 : $.value), xe = c(() => de.value && s.value.length >= a.requiredItemsForTopCreate || a.switchEditionEnabled ? !0 : Ie.value || $.value && a.canCreate), et = c(() => a.saveDisabled || typeof a.saveValidator == "function" && !a.saveValidator(s.value) ? !1 : _.value.changed()), tt = c(() => s.value.length), lt = c(() => ({
      items: s.value,
      ...a.saveResourceData
    })), at = c(() => a.titleTag === "" ? "h2" : a.titleTag), ot = c(() => a.wrapContentTag === "" ? "div" : a.wrapContentTag), ve = c(() => a.title.startsWith("__:") ? re(a.title.substring(3)) : a.title), nt = c(() => a.saveText.startsWith("__:") ? re(a.saveText.substring(3)) : a.saveText), it = c(() => a.editModeText.startsWith("__:") ? re(a.editModeText.substring(3)) : a.editModeText), Be = c(() => H.value.includes("create")), rt = c(() => H.value.includes("read")), he = c(() => H.value.includes("update")), ye = c(() => H.value.includes("drop")), ut = (e) => {
      let f = e.target;
      if (typeof f.dataset.column > "u")
        do
          f = f.parentNode;
        while (typeof f.dataset.column > "u" && f.tagName !== "TABLE" && f.tagName !== "body");
      if (f.tagName === "TD" && (f = f.parentNode, f = f.dataset.i, typeof f < "u"))
        return s.value[f];
    }, De = (e) => p.value["tr_" + e] === !0, Ee = (e) => {
      e && e.sortable && (s.value = s.value.sort((f, b) => C.value(f, b, e, D.value)), D.value = D.value === "asc" ? "desc" : "asc", h.value = e.key, o("sort", [h.value, D.value]));
    }, we = (e) => {
      o("click", e);
    }, Ve = (e, f) => {
      let b = "tr_" + f;
      p.value[b] = typeof p.value[b] > "u" ? !0 : !p.value[b];
    }, st = (e) => typeof a.checkValidDrag == "function" ? a.checkValidDrag(e) : !0, Te = (e) => typeof a.draggableChecker == "function" ? a.draggableChecker(e) : !0, Me = () => {
      if (a.canCreateWithoutEdition)
        o("click-create");
      else {
        if (typeof a.newValueGenerator == "function") {
          let e = a.newValueGenerator();
          if (typeof e == "object") {
            s.value.push(e);
            return;
          }
        }
        s.value.push({});
      }
    }, dt = () => {
      r.value = !0;
    }, ct = () => {
      r.value = !1;
    }, ft = (e, f) => {
      if (o("before-save"), a.saveResource && (r.value = !1, !f.success)) {
        o("error", f.httpStatus);
        return;
      }
      _.value.turnStoredIntoOriginal(), o("save", f);
    }, Re = (e, f, b) => {
      if (b >= e.length) {
        let F = b - e.length + 1;
        for (; F--; ) e.push(void 0);
      }
      return e.splice(b, 0, e.splice(f, 1)[0]), e;
    }, pt = (e) => {
      Re(s.value, e, e - 1), oe.value = fe();
    }, mt = (e) => {
      Re(s.value, e, e + 1), oe.value = fe();
    }, $e = (e) => {
      s.value.splice(e, 1), oe.value = fe();
    }, vt = () => {
      let e = document.getElementById("lkt-table-body-" + ue);
      ae.value = new Bt(e, {
        direction: "vertical",
        handle: ".handle",
        animation: 150,
        onEnd: function(f) {
          let b = f.oldIndex, F = f.newIndex;
          s.value.splice(F, 0, s.value.splice(b, 1)[0]), oe.value = fe();
        },
        onMove: function(f, b) {
          return st(f);
        }
      });
    }, Ae = (e, f, b = !1) => {
      let F = [oe.value, ue, "row", f];
      return b && F.push("hidden"), Ze.value.forEach((z) => {
        let G = String(e[z.key]).toLowerCase();
        G.length > 50 && (G = G.substring(0, 50)), G = qe(G, " ", "-"), F.push(G);
      }), F.join("-");
    }, Le = c(() => typeof a.createEnabledValidator == "function" ? a.createEnabledValidator({ items: s.value }) : !0), de = c(() => Be.value ? a.canCreateWithoutEdition || a.canCreate && $.value : !1), Fe = (e) => typeof a.itemDisplayChecker == "function" ? a.itemDisplayChecker(e) : !0;
    gt(() => {
      a.initialSorting && Ee($t(a.columns, h.value)), _.value.store({ items: s.value }).turnStoredIntoOriginal(), a.sortable && Ne(() => {
        vt();
      });
    }), N(() => a.perms, (e) => H.value = e), N(H, (e) => o("update:perms", e)), N(() => a.editMode, (e) => $.value = e), N(() => a.columns, (e) => E.value = e), N(() => a.modelValue, (e) => s.value = e), N(s, (e) => {
      _.value.increment({ items: e }), o("update:modelValue", e);
    }, { deep: !0 }), l({
      getItemByEvent: ut,
      doRefresh: Xe
    });
    const ht = c(() => typeof V.defaultEmptySlot < "u"), yt = c(() => V.defaultEmptySlot);
    return (e, f) => {
      const b = q("lkt-button"), F = q("lkt-field-switch"), z = q("lkt-loader"), G = q("lkt-paginator");
      return u(), d("section", {
        class: "lkt-table-page",
        id: "lkt-table-page-" + g(ue)
      }, [
        ve.value || g(n).title ? (u(), d("header", {
          key: 0,
          class: x(e.headerClass)
        }, [
          ve.value ? (u(), k(Q(at.value), { key: 0 }, {
            default: K(() => [
              e.titleIcon ? (u(), d("i", {
                key: 0,
                class: x(e.titleIcon)
              }, null, 2)) : m("", !0),
              le(" " + J(ve.value), 1)
            ]),
            _: 1
          })) : m("", !0),
          g(n).title ? U(e.$slots, "title", { key: 1 }) : m("", !0)
        ], 2)) : m("", !0),
        (u(), k(Q(ot.value), {
          class: x(["lkt-table-page-content-wrapper", e.wrapContentClass])
        }, {
          default: K(() => [
            ne(R("div", _t, [
              ne(ee(b, {
                ref: "saveButton",
                palette: "success",
                disabled: !et.value,
                "confirm-modal": e.saveConfirm,
                "confirm-data": e.confirmData,
                resource: e.saveResource,
                "resource-data": lt.value,
                onLoading: dt,
                onLoaded: ct,
                onClick: ft
              }, {
                default: K(() => [
                  g(n)["button-save"] ? U(e.$slots, "button-save", {
                    key: 0,
                    items: s.value,
                    editMode: e.editMode,
                    canUpdate: !e.saveDisabled
                  }) : (u(), d("span", xt, J(nt.value), 1))
                ]),
                _: 3
              }, 8, ["disabled", "confirm-modal", "confirm-data", "resource", "resource-data"]), [
                [ie, Ie.value]
              ]),
              de.value && s.value.length >= e.requiredItemsForTopCreate ? (u(), k(He, {
                key: 0,
                disabled: !Le.value || e.createDisabled,
                text: e.createText,
                icon: e.createIcon,
                to: e.createRoute,
                onClick: Me
              }, null, 8, ["disabled", "text", "icon", "to"])) : m("", !0),
              R("div", el, [
                ne(ee(F, {
                  modelValue: $.value,
                  "onUpdate:modelValue": f[0] || (f[0] = (w) => $.value = w),
                  label: it.value
                }, null, 8, ["modelValue", "label"]), [
                  [ie, e.switchEditionEnabled]
                ])
              ])
            ], 512), [
              [ie, xe.value]
            ]),
            g(n).buttons ? (u(), d("div", tl, [
              U(e.$slots, "buttons")
            ])) : m("", !0),
            I.value && g(n).filters ? (u(), d("div", ll, [
              U(e.$slots, "filters", {
                items: s.value,
                isLoading: r.value
              })
            ])) : m("", !0),
            r.value ? (u(), k(z, { key: 2 })) : m("", !0),
            ne(R("div", {
              class: "lkt-table",
              "data-sortable": e.sortable
            }, [
              e.itemMode ? (u(), d("div", {
                key: 1,
                class: x(["lkt-table-items-container", e.itemsContainerClass])
              }, [
                (u(!0), d(M, null, j(s.value, (w, W) => (u(), d(M, null, [
                  Fe(w) ? (u(), d("div", cl, [
                    U(e.$slots, "item", be({
                      [e.slotItemVar || ""]: w,
                      index: W,
                      canCreate: Be.value,
                      canRead: rt.value,
                      canUpdate: he.value,
                      canDrop: ye.value,
                      isLoading: r.value,
                      doDrop: () => $e(W)
                    }))
                  ])) : m("", !0)
                ], 64))), 256))
              ], 2)) : (u(), d("table", ol, [
                R("thead", null, [
                  R("tr", null, [
                    e.sortable && $.value ? (u(), d("th", nl)) : m("", !0),
                    e.addNavigation && $.value ? (u(), d("th", il)) : m("", !0),
                    Ce.value ? (u(), d("th", rl)) : m("", !0),
                    (u(!0), d(M, null, j(se.value, (w) => (u(), d(M, null, [
                      pe.value.indexOf(w.key) === -1 ? (u(), k(Yt, {
                        key: 0,
                        column: w,
                        "sort-by": h.value,
                        "sort-direction": D.value,
                        "amount-of-columns": e.columns.length,
                        items: s.value,
                        onClick: (W) => Ee(w)
                      }, null, 8, ["column", "sort-by", "sort-direction", "amount-of-columns", "items", "onClick"])) : m("", !0)
                    ], 64))), 256)),
                    e.canDrop && ye.value && $.value ? (u(), d("th", ul)) : m("", !0),
                    e.canEditButton && he.value && $.value ? (u(), d("th", sl)) : m("", !0)
                  ])
                ]),
                R("tbody", {
                  ref: (w) => S.value = w,
                  id: "lkt-table-body-" + g(ue)
                }, [
                  (u(!0), d(M, null, j(s.value, (w, W) => (u(), d(M, null, [
                    Fe(w) ? (u(), k(qt, {
                      modelValue: s.value[W],
                      "onUpdate:modelValue": (Y) => s.value[W] = Y,
                      key: Ae(w, W),
                      i: W,
                      "display-hidden-columns-indicator": Ce.value,
                      "is-draggable": Te(w),
                      sortable: e.sortable,
                      "visible-columns": se.value,
                      "empty-columns": pe.value,
                      "add-navigation": e.addNavigation,
                      "hidden-is-visible": De(W),
                      "latest-row": W + 1 === tt.value,
                      "can-drop": e.canDrop && ye.value && $.value,
                      "drop-confirm": e.dropConfirm,
                      "drop-resource": e.dropResource,
                      "drop-text": e.dropText,
                      "drop-icon": e.dropIcon,
                      "can-edit": e.canEditButton && he.value && $.value,
                      "edit-text": e.editText,
                      "edit-icon": e.editIcon,
                      "edit-link": e.editLink,
                      "edit-mode-enabled": $.value,
                      onClick: we,
                      onShow: Ve,
                      onItemUp: pt,
                      onItemDown: mt,
                      onItemDrop: $e
                    }, Ue({ _: 2 }, [
                      j(Se.value, (Y) => ({
                        name: Y,
                        fn: K((O) => [
                          U(e.$slots, Y, be({
                            [e.slotItemVar || ""]: O.item,
                            value: O.value,
                            column: O.column
                          }))
                        ])
                      }))
                    ]), 1032, ["modelValue", "onUpdate:modelValue", "i", "display-hidden-columns-indicator", "is-draggable", "sortable", "visible-columns", "empty-columns", "add-navigation", "hidden-is-visible", "latest-row", "can-drop", "drop-confirm", "drop-resource", "drop-text", "drop-icon", "can-edit", "edit-text", "edit-icon", "edit-link", "edit-mode-enabled"])) : m("", !0),
                    me.value.length > 0 ? (u(!0), d(M, { key: 1 }, j(s.value, (Y, O) => (u(), k(Qt, {
                      modelValue: s.value[O],
                      "onUpdate:modelValue": (ce) => s.value[O] = ce,
                      key: Ae(Y, O, !0),
                      i: O,
                      "hidden-columns": me.value,
                      "hidden-columns-col-span": Ye.value,
                      "is-draggable": Te(Y),
                      sortable: e.sortable,
                      "visible-columns": se.value,
                      "empty-columns": pe.value,
                      "hidden-is-visible": De(O),
                      onClick: we,
                      onShow: Ve
                    }, Ue({ _: 2 }, [
                      j(Se.value, (ce) => ({
                        name: ce,
                        fn: K((ke) => [
                          U(e.$slots, ce, be({
                            [e.slotItemVar || ""]: ke.item,
                            value: ke.value,
                            column: ke.column
                          }))
                        ])
                      }))
                    ]), 1032, ["modelValue", "onUpdate:modelValue", "i", "hidden-columns", "hidden-columns-col-span", "is-draggable", "sortable", "visible-columns", "empty-columns", "hidden-is-visible"]))), 128)) : m("", !0)
                  ], 64))), 256))
                ], 8, dl)
              ]))
            ], 8, al), [
              [ie, !r.value && s.value.length > 0]
            ]),
            !r.value && s.value.length === 0 ? (u(), d("div", fl, [
              g(n).empty ? U(e.$slots, "empty", { key: 0 }) : ht.value ? (u(), k(Q(yt.value), {
                key: 1,
                message: e.noResultsText
              }, null, 8, ["message"])) : e.noResultsText ? (u(), d(M, { key: 2 }, [
                le(J(e.noResultsText), 1)
              ], 64)) : m("", !0)
            ])) : m("", !0),
            de.value || g(n).bottomButtons ? (u(), d("div", pl, [
              de.value && s.value.length >= e.requiredItemsForBottomCreate ? (u(), k(He, {
                key: 0,
                disabled: !Le.value || e.createDisabled,
                text: e.createText,
                icon: e.createIcon,
                to: e.createRoute,
                onClick: Me
              }, null, 8, ["disabled", "text", "icon", "to"])) : m("", !0),
              U(e.$slots, "bottom-buttons")
            ])) : m("", !0),
            e.resource.length > 0 ? (u(), k(G, {
              key: 5,
              ref_key: "paginator",
              ref: T,
              modelValue: P.value,
              "onUpdate:modelValue": f[1] || (f[1] = (w) => P.value = w),
              resource: e.resource,
              filters: e.filters,
              onResults: je,
              onLoading: Qe,
              onPerms: ze,
              onCustom: Ge,
              onResponse: Je
            }, null, 8, ["modelValue", "resource", "filters"])) : m("", !0)
          ]),
          _: 3
        }, 8, ["class"]))
      ], 8, Zt);
    };
  }
}), Kl = {
  install: (t) => {
    t.component("lkt-loader") === void 0 && t.use(Dt), t.component("lkt-button") === void 0 && t.use(Et), t.component("lkt-paginator") === void 0 && t.use(wt), t.component("lkt-field") === void 0 && t.use(Ct), t.component("lkt-table") === void 0 && t.component("lkt-table", ml);
  }
}, Pl = (t) => (V.navButtonSlot = t, !0), Hl = (t) => (V.dropButtonSlot = t, !0), Wl = (t) => (V.createButtonSlot = t, !0), ql = (t) => {
  V.defaultEmptySlot = t;
};
export {
  A as LktTableColumn,
  wl as createActionColumn,
  Al as createCheckColumn,
  Dl as createColumn,
  Rl as createEmailColumn,
  Nl as createFileColumn,
  Ml as createFloatColumn,
  Ul as createHiddenColumn,
  Tl as createIntegerColumn,
  El as createLinkColumn,
  Fl as createSelectColumn,
  Ll as createSwitchColumn,
  $l as createTelColumn,
  Vl as createTextColumn,
  Kl as default,
  Wl as setTableCreateButtonSlot,
  Hl as setTableDropButtonSlot,
  ql as setTableEmptySlot,
  Pl as setTableNavButtonSlot
};
