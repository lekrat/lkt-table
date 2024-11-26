import { reactive as W, defineComponent as le, ref as h, watch as M, computed as c, resolveComponent as G, unref as f, openBlock as n, createBlock as C, withCtx as H, createTextVNode as ie, toDisplayString as ee, createElementBlock as d, mergeProps as Qe, Fragment as $, withModifiers as _e, resolveDynamicComponent as te, createCommentVNode as p, useSlots as xe, normalizeClass as K, createElementVNode as F, createVNode as ue, renderSlot as N, renderList as q, withDirectives as fe, vShow as pe, onMounted as Nt, nextTick as Re, createSlots as Xe, normalizeProps as oe } from "vue";
import { Field as Ye } from "lkt-field";
import { __ as ye } from "lkt-i18n";
import { replaceAll as et, generateRandomString as Lt } from "lkt-string-tools";
import { DataState as Mt } from "lkt-data-state";
import Ft from "sortablejs";
import { time as Be } from "lkt-date-tools";
var T = /* @__PURE__ */ ((t) => (t.Text = "text", t.Number = "number", t.Check = "check", t.Switch = "switch", t.Select = "select", t.Email = "email", t.Tel = "tel", t.File = "file", t.Link = "link", t.Action = "action", t.Integer = "int", t.Float = "float", t.None = "", t))(T || {});
class A {
  constructor(r = {}) {
    this.key = "", this.label = "", this.sortable = !0, this.hidden = !1, this.editable = !1, this.formatter = void 0, this.checkEmpty = void 0, this.colspan = void 0, this.preferSlot = !0, this.type = T.None, this.link = "", this.action = void 0, this.isForRowKey = !1, this.extractTitleFromColumn = "", this.slotData = {}, this.field = new Ye();
    for (let s in r)
      this[s] = r[s];
    this.field = new Ye(this.field);
  }
  getHref(r) {
    return typeof this.link == "function" ? this.link(r) : this.link;
  }
  doAction(r) {
    if (typeof this.action == "function")
      return this.action(r);
    console.warn("No action defined");
  }
}
const Fl = (t) => W(new A(t)), Al = (t, r, s, a = !0) => W(new A({ key: t, label: r, sortable: a, type: T.Link, link: s })), Ul = (t, r, s, a = !0) => W(new A({ key: t, label: r, sortable: a, type: T.Action, action: s })), Pl = (t, r, s = !0) => W(new A({ key: t, label: r, type: T.Text, sortable: s })), Hl = (t, r, s = !0) => W(new A({ key: t, label: r, type: T.Number, sortable: s })), Wl = (t, r, s = !0) => W(new A({ key: t, label: r, type: T.Number, sortable: s })), ql = (t, r, s = !0) => W(new A({ key: t, label: r, type: T.Email, sortable: s })), Kl = (t, r, s = !0) => W(new A({ key: t, label: r, type: T.Tel, sortable: s })), jl = (t, r, s = !0) => W(new A({ key: t, label: r, type: T.Check, sortable: s })), zl = (t, r, s = !0) => W(new A({ key: t, label: r, type: T.Switch, sortable: s })), Gl = (t, r, s, a = !0) => W(new A({ key: t, label: r, type: T.Select, sortable: a })), Jl = (t, r, s = !0) => W(new A({ key: t, label: r, type: T.File, sortable: s })), Ql = (t, r, s = !0) => W(new A({ key: t, label: r, sortable: s, hidden: !0 })), Ze = (t, r, s, a) => {
  if (!s) return 0;
  let u = t[s.key], l = r[s.key];
  if (a === "asc") {
    if (u > l) return 1;
    if (l > u) return -1;
  } else {
    if (u > l) return -1;
    if (l > u) return 1;
  }
  return 0;
}, re = (t, r, s, a = []) => {
  if (t.extractTitleFromColumn) {
    let u = a.find((l) => l.key === t.extractTitleFromColumn);
    if (u)
      return re(u, r, s, a);
  }
  if (t.formatter && typeof t.formatter == "function") {
    let u = t.formatter(r[t.key], r, t, s);
    return u.startsWith("__:") ? ye(u.substring(3)) : u;
  }
  return r[t.key];
}, At = (t, r, s) => {
  if (!t.colspan) return -1;
  let a = r;
  return s.forEach((u) => {
    let l = Ne(t, u);
    l > 0 && l < a && (a = l);
  }), a;
}, Ne = (t, r) => t.colspan === !1 ? !1 : typeof t.colspan == "function" ? t.colspan(r) : t.colspan, Ut = (t, r) => typeof t.preferSlot > "u" ? !0 : t.preferSlot === !1 ? !1 : typeof t.preferSlot == "function" ? t.preferSlot(r) : !0, Pt = (t, r, s) => {
  if (typeof t != "object" || !t.key || r.indexOf(t.key) > -1) return !1;
  let a = Ne(t, s);
  return typeof t.colspan > "u" ? !0 : (typeof t.colspan < "u" && (typeof t.colspan == "function" ? a = parseInt(t.colspan(s)) : a = parseInt(t.colspan)), a > 0);
}, Ht = (t = []) => {
  if (t.length > 0) {
    for (let r = 0; r < t.length; ++r)
      if (t[r].sortable) return t[r].key;
  }
  return "";
}, Wt = (t, r) => {
  if (t.length > 0) {
    for (let s = 0; s < t.length; ++s)
      if (t[s].key === r) return t[s];
  }
  return null;
}, tt = (t) => t.type ? `is-${t.type}` : "", lt = /* @__PURE__ */ le({
  __name: "LktTableCell",
  props: {
    modelValue: { default: () => ({}) },
    column: { default: () => new A() },
    columns: { default: () => [] },
    i: { default: 0 },
    editModeEnabled: { type: Boolean, default: !1 },
    hasInlineEditPerm: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: r }) {
    const s = r, a = t, u = h(a.modelValue), l = h(u.value[a.column.key]), v = h(null);
    let S = a.column.type;
    [T.Integer, T.Float].includes(S) && (S = T.Number), M(l, (o) => {
      const R = JSON.parse(JSON.stringify(u.value));
      R[a.column.key] = o, s("update:modelValue", R);
    }), M(() => a.modelValue, (o) => {
      u.value = o, l.value = u.value[a.column.key];
    });
    const b = c(() => ({ ...a.column.slotData, item: u.value })), B = c(() => {
      var o, R, j, L;
      if ((o = a.column.field) != null && o.modalData && typeof ((R = a.column.field) == null ? void 0 : R.modalData) == "object")
        for (let w in a.column.field.modalData)
          if (typeof ((j = a.column.field) == null ? void 0 : j.modalData[w]) == "string" && a.column.field.modalData[w].startsWith("prop:")) {
            let D = a.column.field.modalData[w].substring(5);
            u.value[D];
          } else
            a.column.field.modalData[w];
      return (L = a.column.field) == null ? void 0 : L.modalData;
    });
    return (o, R) => {
      const j = G("lkt-anchor"), L = G("lkt-field");
      return o.column.type === f(T).Link ? (n(), C(j, {
        key: 0,
        to: o.column.getHref(u.value)
      }, {
        default: H(() => [
          ie(ee(f(re)(o.column, u.value, o.i)), 1)
        ]),
        _: 1
      }, 8, ["to"])) : o.column.type === f(T).Action ? (n(), d("a", {
        key: 1,
        href: "#",
        onClick: R[0] || (R[0] = (w) => o.column.doAction(u.value))
      }, ee(f(re)(o.column, u.value, o.i)), 1)) : o.column.type !== "" && o.hasInlineEditPerm ? (n(), C(L, Qe({ key: 2 }, o.column.field, {
        type: f(S),
        "read-mode": !o.column.editable || !o.editModeEnabled,
        ref: (w) => v.value = w,
        "slot-data": b.value,
        label: o.column.type === "switch" || o.column.type === "check" ? o.column.label : "",
        "modal-data": B.value,
        prop: u.value,
        modelValue: l.value,
        "onUpdate:modelValue": R[1] || (R[1] = (w) => l.value = w)
      }), null, 16, ["type", "read-mode", "slot-data", "label", "modal-data", "prop", "modelValue"])) : o.column.type !== "" ? (n(), C(L, Qe({ key: 3 }, o.column.field, {
        type: f(S),
        "read-mode": "",
        ref: (w) => v.value = w,
        "slot-data": b.value,
        label: o.column.type === "switch" || o.column.type === "check" ? o.column.label : "",
        "modal-data": B.value,
        prop: u.value,
        "model-value": l.value
      }), null, 16, ["type", "slot-data", "label", "modal-data", "prop", "model-value"])) : (n(), d($, { key: 4 }, [
        ie(ee(f(re)(o.column, u.value, o.i, o.columns)), 1)
      ], 64));
    };
  }
}), X = class X {
};
X.navButtonSlot = "", X.dropButtonSlot = "", X.editButtonSlot = "", X.createButtonSlot = "", X.defaultEmptySlot = void 0, X.defaultSaveIcon = "", X.defaultNoResultsMessage = "No results";
let V = X;
const qt = /* @__PURE__ */ le({
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
  setup(t, { emit: r }) {
    const s = r, a = c(() => V.dropButtonSlot !== ""), u = c(() => V.dropButtonSlot);
    return (l, v) => {
      const S = G("lkt-button");
      return n(), C(S, {
        palette: "table-delete",
        icon: a.value ? "" : l.icon,
        text: a.value ? "" : l.text,
        resource: l.resource,
        "resource-data": l.resourceData,
        "confirm-modal": l.confirm,
        disabled: l.disabled,
        onClick: v[0] || (v[0] = _e((b) => s("click"), ["prevent", "stop"]))
      }, {
        default: H(() => [
          a.value ? (n(), C(te(u.value), { key: 0 })) : p("", !0)
        ]),
        _: 1
      }, 8, ["icon", "text", "resource", "resource-data", "confirm-modal", "disabled"]);
    };
  }
}), Kt = /* @__PURE__ */ le({
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
  setup(t, { emit: r }) {
    const s = r, a = c(() => V.editButtonSlot !== ""), u = c(() => V.editButtonSlot);
    return (l, v) => {
      const S = G("lkt-button");
      return n(), C(S, {
        palette: "table-delete",
        icon: a.value ? "" : l.icon,
        text: a.value ? "" : l.text,
        "on-click-to": l.link,
        "is-anchor": l.link !== "",
        resource: l.resource,
        "resource-data": l.resourceData,
        "confirm-modal": l.confirm,
        disabled: l.disabled,
        onClick: v[0] || (v[0] = _e((b) => s("click"), ["prevent", "stop"]))
      }, {
        default: H(() => [
          a.value ? (n(), C(te(u.value), { key: 0 })) : p("", !0)
        ]),
        _: 1
      }, 8, ["icon", "text", "on-click-to", "is-anchor", "resource", "resource-data", "confirm-modal", "disabled"]);
    };
  }
});
var x = /* @__PURE__ */ ((t) => (t[t.Auto = 0] = "Auto", t[t.PreferItem = 1] = "PreferItem", t[t.PreferCustomItem = 2] = "PreferCustomItem", t[t.PreferColumns = 3] = "PreferColumns", t))(x || {});
const jt = ["data-i", "data-draggable"], zt = {
  key: 1,
  "data-role": "invalid-drag-indicator"
}, Gt = {
  key: 2,
  class: "lkt-table-nav-cell"
}, Jt = { class: "lkt-table-nav-container" }, Qt = ["colspan"], Xt = ["colspan"], Yt = ["data-column", "colspan", "title"], Zt = {
  key: 7,
  class: "lkt-table-col-drop"
}, Ot = {
  key: 8,
  class: "lkt-table-col-edit"
}, _t = /* @__PURE__ */ le({
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
    hasInlineEditPerm: { type: Boolean },
    i: { default: 0 },
    visibleColumns: { default: () => [] },
    emptyColumns: { default: () => [] },
    dropConfirm: { default: "" },
    dropText: { default: "" },
    dropIcon: { default: "" },
    dropResource: { default: "" },
    editText: { default: "" },
    editIcon: { default: "" },
    editLink: { default: "" },
    rowDisplayType: { type: [Number, Function], default: x.Auto }
  },
  emits: ["update:modelValue", "click", "show", "item-up", "item-down", "item-drop"],
  setup(t, { emit: r }) {
    const s = xe(), a = r, u = t, l = h(u.modelValue);
    let v = typeof u.rowDisplayType == "function" ? u.rowDisplayType(l.value, u.i) : u.rowDisplayType;
    v || (v = x.Auto);
    const S = [x.Auto, x.PreferCustomItem].includes(v), b = [x.Auto, x.PreferItem].includes(v), B = h(u.editLink);
    for (let i in l.value) B.value = et(B.value, ":" + i, l.value[i]);
    const o = (i) => a("click", i), R = (i, I) => {
      a("show", i, I);
    }, j = c(() => {
      let i = [];
      return u.sortable && u.isDraggable && i.push("handle"), i.join(" ");
    }), L = c(() => V.navButtonSlot !== ""), w = c(() => V.navButtonSlot), D = () => {
      a("item-up", u.i);
    }, ke = () => {
      a("item-down", u.i);
    }, U = () => {
      a("item-drop", u.i);
    }, be = () => {
    };
    return M(() => u.modelValue, (i) => l.value = i), M(l, (i) => {
      a("update:modelValue", i);
    }, { deep: !0 }), (i, I) => {
      const Y = G("lkt-button");
      return n(), d("tr", {
        "data-i": i.i,
        "data-draggable": i.isDraggable,
        class: K({ "type-custom-item": f(S), "type-item": f(b) })
      }, [
        i.sortable && i.isDraggable && i.editModeEnabled ? (n(), d("td", {
          key: 0,
          "data-role": "drag-indicator",
          class: K(j.value)
        }, null, 2)) : i.sortable && i.editModeEnabled ? (n(), d("td", zt)) : p("", !0),
        i.addNavigation && i.editModeEnabled ? (n(), d("td", Gt, [
          F("div", Jt, [
            ue(Y, {
              palette: "table-nav",
              disabled: i.i === 0,
              onClick: D
            }, {
              default: H(() => [
                L.value ? (n(), C(te(w.value), {
                  key: 0,
                  direction: "up"
                })) : (n(), d($, { key: 1 }, [
                  I[3] || (I[3] = F("i", { class: "" }, null, -1)),
                  I[4] || (I[4] = ie(" UP "))
                ], 64))
              ]),
              _: 1
            }, 8, ["disabled"]),
            ue(Y, {
              palette: "table-nav",
              disabled: i.latestRow,
              onClick: ke
            }, {
              default: H(() => [
                L.value ? (n(), C(te(w.value), {
                  key: 0,
                  direction: "down"
                })) : (n(), d($, { key: 1 }, [
                  I[5] || (I[5] = F("i", { class: "" }, null, -1)),
                  I[6] || (I[6] = ie(" DOWN "))
                ], 64))
              ]),
              _: 1
            }, 8, ["disabled"])
          ])
        ])) : p("", !0),
        i.displayHiddenColumnsIndicator ? (n(), d("td", {
          key: 3,
          onClick: I[0] || (I[0] = (k) => R(k, i.i)),
          "data-role": "show-more",
          class: K(i.hiddenIsVisible ? "state-open" : "")
        }, null, 2)) : p("", !0),
        f(S) && f(s)[`item-${i.i}`] ? (n(), d("td", {
          key: "td" + i.i,
          colspan: i.visibleColumns.length
        }, [
          N(i.$slots, `item-${i.i}`, {
            item: l.value,
            index: i.i
          })
        ], 8, Qt)) : f(b) && f(s).item ? (n(), d("td", {
          key: "td" + i.i,
          colspan: i.visibleColumns.length
        }, [
          N(i.$slots, "item", {
            item: l.value,
            index: i.i
          })
        ], 8, Xt)) : (n(!0), d($, { key: 6 }, q(i.visibleColumns, (k) => (n(), d($, null, [
          f(Pt)(k, i.emptyColumns, l.value) ? (n(), d("td", {
            key: "td" + i.i,
            "data-column": k.key,
            colspan: f(Ne)(k, l.value),
            title: f(re)(k, l.value, i.i, i.visibleColumns),
            class: K(f(tt)(k)),
            onClick: I[2] || (I[2] = (J) => o(J))
          }, [
            i.$slots[k.key] && f(Ut)(k, l.value) ? N(i.$slots, k.key, {
              key: 0,
              value: l.value[k.key],
              item: l.value,
              column: k,
              i: i.i
            }) : l.value ? (n(), C(lt, {
              key: 1,
              modelValue: l.value,
              "onUpdate:modelValue": I[1] || (I[1] = (J) => l.value = J),
              column: k,
              columns: i.visibleColumns,
              "edit-mode-enabled": i.editModeEnabled,
              "has-inline-edit-perm": i.hasInlineEditPerm,
              i: i.i
            }, null, 8, ["modelValue", "column", "columns", "edit-mode-enabled", "has-inline-edit-perm", "i"])) : p("", !0)
          ], 10, Yt)) : p("", !0)
        ], 64))), 256)),
        i.canDrop && i.editModeEnabled ? (n(), d("td", Zt, [
          ue(qt, {
            resource: i.dropResource,
            "resource-data": l.value,
            confirm: i.dropConfirm,
            text: i.dropText,
            icon: i.dropIcon,
            onClick: U
          }, null, 8, ["resource", "resource-data", "confirm", "text", "icon"])
        ])) : p("", !0),
        i.canEdit && i.editModeEnabled ? (n(), d("td", Ot, [
          ue(Kt, {
            "resource-data": l.value,
            text: i.editText,
            icon: i.editIcon,
            link: B.value,
            onClick: be
          }, null, 8, ["resource-data", "text", "icon", "link"])
        ])) : p("", !0)
      ], 10, jt);
    };
  }
}), xt = { "data-role": "hidden-row" }, el = ["colspan"], tl = ["data-column"], ll = ["data-i"], al = ["data-column", "title", "onClick"], ol = /* @__PURE__ */ le({
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
  setup(t, { emit: r }) {
    const s = r, a = t, u = h(a.modelValue), l = (v) => s("click", v);
    return M(() => a.modelValue, (v) => u.value = v), M(u, () => s("update:modelValue", u.value)), (v, S) => fe((n(), d("tr", xt, [
      F("td", { colspan: v.hiddenColumnsColSpan }, [
        F("table", null, [
          F("tr", null, [
            (n(!0), d($, null, q(v.hiddenColumns, (b) => (n(), d("th", {
              "data-column": b.key
            }, [
              F("div", null, ee(b.label), 1)
            ], 8, tl))), 256))
          ]),
          F("tr", { "data-i": v.i }, [
            (n(!0), d($, null, q(v.hiddenColumns, (b, B) => (n(), d("td", {
              "data-column": b.key,
              title: f(re)(b, u.value, B, v.hiddenColumns),
              onClick: (o) => l(o, u.value)
            }, [
              v.$slots[b.key] ? N(v.$slots, b.key, {
                key: 0,
                value: u.value[b.key],
                item: u.value,
                column: b,
                i: B
              }) : (n(), C(lt, {
                key: 1,
                column: b,
                columns: v.hiddenColumns,
                modelValue: u.value,
                "onUpdate:modelValue": S[0] || (S[0] = (o) => u.value = o),
                i: B
              }, null, 8, ["column", "columns", "modelValue", "i"]))
            ], 8, al))), 256))
          ], 8, ll)
        ])
      ], 8, el)
    ], 512)), [
      [pe, v.hiddenIsVisible]
    ]);
  }
}), Oe = /* @__PURE__ */ le({
  __name: "CreateButton",
  props: {
    disabled: { type: Boolean, default: !1 },
    text: { default: "" },
    icon: { default: "" },
    to: { default: "" }
  },
  emits: ["click"],
  setup(t, { emit: r }) {
    const s = r, a = c(() => V.createButtonSlot !== ""), u = c(() => V.createButtonSlot);
    return (l, v) => {
      const S = G("lkt-button");
      return n(), C(S, {
        palette: "table-create",
        disabled: l.disabled,
        icon: a.value ? "" : l.icon,
        text: a.value ? "" : l.text,
        "on-click-to": l.to,
        onClick: v[0] || (v[0] = (b) => s("click"))
      }, {
        default: H(() => [
          a.value ? (n(), C(te(u.value), { key: 0 })) : p("", !0)
        ]),
        _: 1
      }, 8, ["disabled", "icon", "text", "on-click-to"]);
    };
  }
}), nl = ["data-column", "data-sortable", "data-sort", "colspan", "title"], ul = /* @__PURE__ */ le({
  __name: "TableHeader",
  props: {
    column: { default: () => ({}) },
    sortBy: { default: "" },
    sortDirection: { default: "" },
    amountOfColumns: { default: 0 },
    items: { default: () => [] }
  },
  emits: ["click"],
  setup(t, { emit: r }) {
    const s = r, a = t, u = c(() => At(a.column, a.amountOfColumns, a.items)), l = c(() => a.column.sortable === !0), v = c(() => l.value && a.sortBy === a.column.key ? a.sortDirection : ""), S = c(() => a.column.label.startsWith("__:") ? ye(a.column.label.substring(3)) : a.column.label), b = () => s("click", a.column);
    return (B, o) => (n(), d("th", {
      "data-column": B.column.key,
      "data-sortable": l.value,
      "data-sort": v.value,
      colspan: u.value,
      title: S.value,
      class: K(f(tt)(B.column)),
      onClick: b
    }, [
      F("div", null, ee(S.value), 1)
    ], 10, nl));
  }
});
var Q = /* @__PURE__ */ ((t) => (t.Table = "table", t.Item = "item", t.Ul = "ul", t.Ol = "ol", t))(Q || {}), _ = /* @__PURE__ */ ((t) => (t.Create = "create", t.Update = "update", t.Edit = "edit", t.Drop = "drop", t.Sort = "sort", t.InlineEdit = "inline-edit", t.InlineCreate = "inline-create", t.InlineCreateEver = "inline-create-ever", t))(_ || {}), ve = /* @__PURE__ */ ((t) => (t.Asc = "asc", t.Desc = "desc", t))(ve || {});
const rl = ["id"], il = {
  key: 0,
  class: "lkt-table-page-buttons"
}, sl = { key: 1 }, dl = { class: "switch-edition-mode" }, cl = {
  key: 1,
  class: "lkt-table-page-buttons"
}, ml = {
  key: 2,
  class: "lkt-table-page-filters"
}, fl = ["data-sortable"], pl = { key: 0 }, vl = {
  key: 0,
  "data-role": "drag-indicator"
}, yl = { key: 1 }, kl = { key: 2 }, bl = {
  key: 3,
  class: "lkt-table-col-drop"
}, hl = {
  key: 4,
  class: "lkt-table-col-edit"
}, gl = ["id"], Cl = ["id"], Sl = ["data-i"], Il = ["data-i"], Bl = ["data-i"], Vl = {
  key: 4,
  class: "lkt-table-empty"
}, wl = {
  key: 5,
  class: "lkt-table-page-buttons lkt-table-page-buttons-bottom"
}, Dl = /* @__PURE__ */ le({
  __name: "LktTable",
  props: {
    modelValue: { default: () => [] },
    type: { default: Q.Table },
    columns: { default: () => [] },
    sorter: { type: Function, default: Ze },
    draggableChecker: { type: Function, default: (t) => !0 },
    checkValidDrag: { type: Function, default: void 0 },
    sortable: { type: Boolean, default: !1 },
    hideEmptyColumns: { type: Boolean, default: !1 },
    initialSorting: { type: Boolean, default: !1 },
    draggableItemKey: { default: "name" },
    itemDisplayChecker: {},
    loading: { type: Boolean, default: !1 },
    page: { default: 1 },
    perms: { default: () => [] },
    resource: { default: "" },
    noResultsText: { default: V.defaultNoResultsMessage },
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
    dropConfirm: { default: "" },
    dropResource: { default: "" },
    addNavigation: { type: Boolean, default: !1 },
    itemMode: { type: Boolean, default: !1 },
    createEnabledValidator: { type: Function, default: void 0 },
    newValueGenerator: { type: Function, default: void 0 },
    requiredItemsForTopCreate: { default: 0 },
    requiredItemsForBottomCreate: { default: 0 },
    slotItemVar: { default: "item" },
    rowDisplayType: { type: [Number, Function], default: x.Auto }
  },
  emits: [
    "update:modelValue",
    "update:perms",
    "update:loading",
    "sort",
    "click",
    "save",
    "error",
    "before-save",
    "read-response",
    "click-create",
    "page",
    "drag-end"
  ],
  setup(t, { expose: r, emit: s }) {
    const a = s, u = xe(), l = t, v = {}, S = h(typeof l.sorter == "function" ? l.sorter : Ze), b = h(Ht(l.columns)), B = h(ve.Asc), o = h(l.modelValue), R = h(v), j = h(null), L = h(l.columns), w = h(l.page), D = h(l.loading), ke = h(!1), U = h(l.perms), be = h(null), i = h(null), I = h({}), Y = h(new Mt({ items: o.value }, l.dataStateConfig)), k = h(l.editMode), J = h(0), Ve = h(null), ne = h(!1);
    M(D, (e) => a("update:loading", e)), M(w, (e) => a("page", e));
    const se = h(l.type);
    l.itemMode && se.value === Q.Table && (se.value = Q.Item);
    const at = (e) => {
      U.value = e;
    }, ot = (e) => {
      Array.isArray(e.data) && (o.value = e.data), D.value = !1, ke.value = !0, Y.value.store({ items: o.value }).turnStoredIntoOriginal(), ne.value = !1, Re(() => {
        a("read-response", e);
      });
    }, nt = () => Re(() => D.value = !0), ut = () => {
      be.value.doRefresh();
    }, de = Lt(12), we = c(() => {
      if (!l.hideEmptyColumns) return [];
      let e = [];
      return L.value.forEach((m) => {
        let E = m.key, z = !1;
        o.value.forEach((Z) => {
          if (typeof Z.checkEmpty == "function")
            return Z.checkEmpty(Z);
          Z[E] && (z = !0);
        }), z || e.push(E);
      }), e;
    }), he = c(() => L.value.filter((e) => !e.hidden)), De = c(() => L.value.filter((e) => e.hidden)), rt = c(() => {
      let e = he.value.length + 1;
      return l.sortable && ++e, e;
    }), it = c(() => L.value.filter((e) => e.isForRowKey)), Le = c(() => De.value.length > 0 && !l.sortable), st = c(() => L.value.map((e) => e.key)), Me = c(() => {
      let e = [];
      for (let m in u) st.value.indexOf(m) !== -1 && e.push(m);
      return e;
    }), Fe = c(() => l.hiddenSave || D.value || !l.saveResource ? !1 : k.value && ne.value ? !0 : k.value), dt = c(() => Se.value && o.value.length >= l.requiredItemsForTopCreate || l.switchEditionEnabled ? !0 : Fe.value || k.value && ge.value), ct = c(() => l.saveDisabled || typeof l.saveValidator == "function" && !l.saveValidator(o.value) ? !1 : ne.value), mt = c(() => o.value.length), ft = c(() => ({
      items: o.value,
      ...l.saveResourceData
    })), pt = c(() => l.titleTag === "" ? "h2" : l.titleTag), vt = c(() => l.wrapContentTag === "" ? "div" : l.wrapContentTag), Ee = c(() => l.title.startsWith("__:") ? ye(l.title.substring(3)) : l.title), yt = c(() => l.saveText.startsWith("__:") ? ye(l.saveText.substring(3)) : l.saveText), kt = c(() => l.editModeText.startsWith("__:") ? ye(l.editModeText.substring(3)) : l.editModeText), ge = c(() => U.value.includes(_.Create)), $e = c(() => U.value.includes("read")), ce = c(() => U.value.includes(_.Update)), Ae = c(() => U.value.includes(_.Edit)), bt = c(() => U.value.includes(_.InlineEdit)), ht = c(() => U.value.includes(_.InlineCreate)), Ue = c(() => U.value.includes(_.InlineCreateEver)), me = c(() => U.value.includes(_.Drop)), gt = (e) => {
      let m = e.target;
      if (typeof m.dataset.column > "u")
        do
          m = m.parentNode;
        while (typeof m.dataset.column > "u" && m.tagName !== "TABLE" && m.tagName !== "body");
      if (m.tagName === "TD" && (m = m.parentNode, m = m.dataset.i, typeof m < "u"))
        return o.value[m];
    }, Ct = (e) => o.value[e], St = (e) => {
      var m;
      return (m = j.value) == null ? void 0 : m.querySelector(`[data-i="${e}"]`);
    }, Pe = (e) => R.value["tr_" + e] === !0, He = (e) => {
      e && e.sortable && (o.value = o.value.sort((m, E) => S.value(m, E, e, B.value)), B.value = B.value === ve.Asc ? ve.Desc : ve.Asc, b.value = e.key, a("sort", [b.value, B.value]));
    }, We = (e) => {
      a("click", e);
    }, qe = (e, m) => {
      let E = "tr_" + m;
      R.value[E] = typeof R.value[E] > "u" ? !0 : !R.value[E];
    }, It = (e) => typeof l.checkValidDrag == "function" ? l.checkValidDrag(e) : !0, Ke = (e) => typeof l.draggableChecker == "function" ? l.draggableChecker(e) : !0, je = () => {
      if (Ue.value)
        a("click-create");
      else {
        if (typeof l.newValueGenerator == "function") {
          let e = l.newValueGenerator();
          if (typeof e == "object" || se.value !== Q.Table) {
            o.value.push(e);
            return;
          }
        }
        o.value.push({});
      }
    }, Bt = () => {
      D.value = !0;
    }, Vt = () => {
      D.value = !1;
    }, wt = (e, m) => {
      if (a("before-save"), l.saveResource && (D.value = !1, !m.success)) {
        a("error", m.httpStatus);
        return;
      }
      Y.value.turnStoredIntoOriginal(), ne.value = !1, a("save", m);
    }, ze = (e, m, E) => {
      if (E >= e.length) {
        let z = E - e.length + 1;
        for (; z--; ) e.push(void 0);
      }
      return e.splice(E, 0, e.splice(m, 1)[0]), e;
    }, Dt = (e) => {
      ze(o.value, e, e - 1), J.value = Be();
    }, Et = (e) => {
      ze(o.value, e, e + 1), J.value = Be();
    }, Ce = (e) => {
      o.value.splice(e, 1), J.value = Be();
    }, $t = () => {
      I.value && (I.value.destroy(), I.value = {});
    }, Ge = () => {
      Ve.value || (Ve.value = document.getElementById("lkt-table-body-" + de)), I.value = new Ft(Ve.value, {
        direction: "vertical",
        handle: ".handle",
        animation: 150,
        onEnd: function(e) {
          let m = e.oldIndex, E = e.newIndex;
          o.value.splice(E, 0, o.value.splice(m, 1)[0]), J.value = Be(), a("drag-end");
        },
        onMove: function(e, m) {
          return It(e);
        }
      });
    }, Te = (e, m, E = !1) => {
      let z = [J.value, de, "row", m];
      return E && z.push("hidden"), it.value.forEach((Z) => {
        let O = String(e[Z.key]).toLowerCase();
        O.length > 50 && (O = O.substring(0, 50)), O = et(O, " ", "-"), z.push(O);
      }), z.join("-");
    }, Je = c(() => typeof l.createEnabledValidator == "function" ? l.createEnabledValidator({ items: o.value }) : !0), Se = c(() => Ue.value || ht.value && k.value), Ie = (e, m) => typeof l.itemDisplayChecker == "function" ? l.itemDisplayChecker(e) : !0;
    Nt(() => {
      l.initialSorting && He(Wt(l.columns, b.value)), Y.value.store({ items: o.value }).turnStoredIntoOriginal(), ne.value = !1, l.sortable && Re(() => {
        Ge();
      });
    }), M(() => l.sortable, (e) => {
      e ? Ge() : $t();
    }), M(() => l.perms, (e) => U.value = e), M(U, (e) => a("update:perms", e)), M(() => l.editMode, (e) => k.value = e), M(() => l.columns, (e) => L.value = e, { deep: !0 }), M(() => l.modelValue, (e) => o.value = e, { deep: !0 }), M(o, (e) => {
      Y.value.increment({ items: e }), ne.value = Y.value.changed(), a("update:modelValue", e);
    }, { deep: !0 }), r({
      getItemByEvent: gt,
      getItemByIndex: Ct,
      getRowByIndex: St,
      doRefresh: ut,
      getHtml: () => i.value
    });
    const Tt = c(() => typeof V.defaultEmptySlot < "u"), Rt = c(() => V.defaultEmptySlot);
    return (e, m) => {
      const E = G("lkt-button"), z = G("lkt-field"), Z = G("lkt-loader"), O = G("lkt-paginator");
      return n(), d("section", {
        ref_key: "element",
        ref: i,
        class: "lkt-table-page",
        id: "lkt-table-page-" + f(de)
      }, [
        Ee.value || f(u).title ? (n(), d("header", {
          key: 0,
          class: K(e.headerClass)
        }, [
          Ee.value ? (n(), C(te(pt.value), { key: 0 }, {
            default: H(() => [
              e.titleIcon ? (n(), d("i", {
                key: 0,
                class: K(e.titleIcon)
              }, null, 2)) : p("", !0),
              ie(" " + ee(Ee.value), 1)
            ]),
            _: 1
          })) : p("", !0),
          f(u).title ? N(e.$slots, "title", { key: 1 }) : p("", !0)
        ], 2)) : p("", !0),
        (n(), C(te(vt.value), {
          class: K(["lkt-table-page-content-wrapper", e.wrapContentClass])
        }, {
          default: H(() => [
            dt.value ? (n(), d("div", il, [
              fe(ue(E, {
                class: "lkt-table--save-button",
                ref: "saveButton",
                icon: f(V).defaultSaveIcon,
                disabled: !ct.value,
                "confirm-modal": e.saveConfirm,
                "confirm-data": e.confirmData,
                resource: e.saveResource,
                "resource-data": ft.value,
                onLoading: Bt,
                onLoaded: Vt,
                onClick: wt
              }, {
                default: H(() => [
                  f(u)["button-save"] ? N(e.$slots, "button-save", {
                    key: 0,
                    items: o.value,
                    editMode: e.editMode,
                    canUpdate: !e.saveDisabled
                  }) : (n(), d("span", sl, ee(yt.value), 1))
                ]),
                _: 3
              }, 8, ["icon", "disabled", "confirm-modal", "confirm-data", "resource", "resource-data"]), [
                [pe, Fe.value]
              ]),
              Se.value && o.value.length >= e.requiredItemsForTopCreate ? (n(), C(Oe, {
                key: 0,
                disabled: !Je.value || e.createDisabled,
                text: e.createText,
                icon: e.createIcon,
                to: e.createRoute,
                onClick: je
              }, null, 8, ["disabled", "text", "icon", "to"])) : p("", !0),
              F("div", dl, [
                fe(ue(z, {
                  type: "switch",
                  modelValue: k.value,
                  "onUpdate:modelValue": m[0] || (m[0] = (g) => k.value = g),
                  label: kt.value
                }, null, 8, ["modelValue", "label"]), [
                  [pe, e.switchEditionEnabled]
                ])
              ])
            ])) : p("", !0),
            f(u).buttons ? (n(), d("div", cl, [
              N(e.$slots, "buttons")
            ])) : p("", !0),
            ke.value && f(u).filters ? (n(), d("div", ml, [
              N(e.$slots, "filters", {
                items: o.value,
                isLoading: D.value
              })
            ])) : p("", !0),
            D.value ? (n(), C(Z, { key: 3 })) : p("", !0),
            fe(F("div", {
              class: "lkt-table",
              "data-sortable": e.sortable
            }, [
              se.value === f(Q).Table ? (n(), d("table", pl, [
                F("thead", null, [
                  F("tr", null, [
                    e.sortable && k.value ? (n(), d("th", vl)) : p("", !0),
                    e.addNavigation && k.value ? (n(), d("th", yl)) : p("", !0),
                    Le.value ? (n(), d("th", kl)) : p("", !0),
                    (n(!0), d($, null, q(he.value, (g) => (n(), d($, null, [
                      we.value.indexOf(g.key) === -1 ? (n(), C(ul, {
                        key: 0,
                        column: g,
                        "sort-by": b.value,
                        "sort-direction": B.value,
                        "amount-of-columns": e.columns.length,
                        items: o.value,
                        onClick: (y) => He(g)
                      }, null, 8, ["column", "sort-by", "sort-direction", "amount-of-columns", "items", "onClick"])) : p("", !0)
                    ], 64))), 256)),
                    me.value && k.value ? (n(), d("th", bl)) : p("", !0),
                    Ae.value && ce.value && k.value ? (n(), d("th", hl)) : p("", !0)
                  ])
                ]),
                F("tbody", {
                  ref_key: "tableBody",
                  ref: j,
                  id: "lkt-table-body-" + f(de)
                }, [
                  (n(!0), d($, null, q(o.value, (g, y) => fe((n(), C(_t, {
                    modelValue: o.value[y],
                    "onUpdate:modelValue": (P) => o.value[y] = P,
                    key: Te(g, y),
                    i: y,
                    "display-hidden-columns-indicator": Le.value,
                    "is-draggable": Ke(g),
                    sortable: e.sortable,
                    "visible-columns": he.value,
                    "empty-columns": we.value,
                    "add-navigation": e.addNavigation,
                    "hidden-is-visible": Pe(y),
                    "latest-row": y + 1 === mt.value,
                    "can-drop": me.value && k.value,
                    "drop-confirm": e.dropConfirm,
                    "drop-resource": e.dropResource,
                    "drop-text": e.dropText,
                    "drop-icon": e.dropIcon,
                    "can-edit": Ae.value && ce.value && k.value,
                    "edit-text": e.editText,
                    "edit-icon": e.editIcon,
                    "edit-link": e.editLink,
                    "edit-mode-enabled": k.value,
                    "has-inline-edit-perm": bt.value,
                    "row-display-type": e.rowDisplayType,
                    onClick: We,
                    onShow: qe,
                    onItemUp: Dt,
                    onItemDown: Et,
                    onItemDrop: Ce
                  }, Xe({ _: 2 }, [
                    f(u)[`item-${y}`] ? {
                      name: `item-${y}`,
                      fn: H((P) => [
                        N(e.$slots, `item-${y}`, oe({
                          [e.slotItemVar || ""]: P.item,
                          index: y
                        }))
                      ]),
                      key: "0"
                    } : f(u).item ? {
                      name: "item",
                      fn: H((P) => [
                        N(e.$slots, "item", oe({
                          [e.slotItemVar || ""]: P.item,
                          index: y
                        }))
                      ]),
                      key: "1"
                    } : void 0,
                    q(Me.value, (P) => ({
                      name: P,
                      fn: H((ae) => [
                        N(e.$slots, P, oe({
                          [e.slotItemVar || ""]: ae.item,
                          value: ae.value,
                          column: ae.column
                        }))
                      ])
                    }))
                  ]), 1032, ["modelValue", "onUpdate:modelValue", "i", "display-hidden-columns-indicator", "is-draggable", "sortable", "visible-columns", "empty-columns", "add-navigation", "hidden-is-visible", "latest-row", "can-drop", "drop-confirm", "drop-resource", "drop-text", "drop-icon", "can-edit", "edit-text", "edit-icon", "edit-link", "edit-mode-enabled", "has-inline-edit-perm", "row-display-type"])), [
                    [pe, Ie(o.value[y])]
                  ])), 128)),
                  De.value.length > 0 ? (n(!0), d($, { key: 0 }, q(o.value, (g, y) => (n(), C(ol, {
                    modelValue: o.value[y],
                    "onUpdate:modelValue": (P) => o.value[y] = P,
                    key: Te(g, y, !0),
                    i: y,
                    "hidden-columns": De.value,
                    "hidden-columns-col-span": rt.value,
                    "is-draggable": Ke(g),
                    sortable: e.sortable,
                    "visible-columns": he.value,
                    "empty-columns": we.value,
                    "hidden-is-visible": Pe(y),
                    onClick: We,
                    onShow: qe
                  }, Xe({ _: 2 }, [
                    q(Me.value, (P) => ({
                      name: P,
                      fn: H((ae) => [
                        N(e.$slots, P, oe({
                          [e.slotItemVar || ""]: ae.item,
                          value: ae.value,
                          column: ae.column
                        }))
                      ])
                    }))
                  ]), 1032, ["modelValue", "onUpdate:modelValue", "i", "hidden-columns", "hidden-columns-col-span", "is-draggable", "sortable", "visible-columns", "empty-columns", "hidden-is-visible"]))), 128)) : p("", !0)
                ], 8, gl)
              ])) : se.value === f(Q).Item ? (n(), d("div", {
                key: 1,
                ref_key: "tableBody",
                ref: j,
                id: "lkt-table-body-" + f(de),
                class: K(["lkt-table-items-container", e.itemsContainerClass])
              }, [
                (n(!0), d($, null, q(o.value, (g, y) => (n(), d($, null, [
                  Ie(g) ? (n(), d("div", {
                    class: "lkt-table-item",
                    "data-i": y,
                    key: Te(g, y)
                  }, [
                    N(e.$slots, "item", oe({
                      [e.slotItemVar || ""]: g,
                      index: y,
                      editing: k.value,
                      canCreate: ge.value,
                      canRead: $e.value,
                      canUpdate: ce.value,
                      canDrop: me.value,
                      isLoading: D.value,
                      doDrop: () => Ce(y)
                    }))
                  ], 8, Sl)) : p("", !0)
                ], 64))), 256))
              ], 10, Cl)) : f(Q).Ul ? (n(), d("ul", {
                key: 2,
                class: K(["lkt-table-items-container", e.itemsContainerClass])
              }, [
                (n(!0), d($, null, q(o.value, (g, y) => (n(), d($, null, [
                  Ie(g) ? (n(), d("li", {
                    key: 0,
                    class: "lkt-table-item",
                    "data-i": y
                  }, [
                    N(e.$slots, "item", oe({
                      [e.slotItemVar || ""]: g,
                      index: y,
                      editing: k.value,
                      canCreate: ge.value,
                      canRead: $e.value,
                      canUpdate: ce.value,
                      canDrop: me.value,
                      isLoading: D.value,
                      doDrop: () => Ce(y)
                    }))
                  ], 8, Il)) : p("", !0)
                ], 64))), 256))
              ], 2)) : f(Q).Ul ? (n(), d("ol", {
                key: 3,
                class: K(["lkt-table-items-container", e.itemsContainerClass])
              }, [
                (n(!0), d($, null, q(o.value, (g, y) => (n(), d($, null, [
                  Ie(g) ? (n(), d("li", {
                    key: 0,
                    class: "lkt-table-item",
                    "data-i": y
                  }, [
                    N(e.$slots, "item", oe({
                      [e.slotItemVar || ""]: g,
                      index: y,
                      editing: k.value,
                      canCreate: ge.value,
                      canRead: $e.value,
                      canUpdate: ce.value,
                      canDrop: me.value,
                      isLoading: D.value,
                      doDrop: () => Ce(y)
                    }))
                  ], 8, Bl)) : p("", !0)
                ], 64))), 256))
              ], 2)) : p("", !0)
            ], 8, fl), [
              [pe, !D.value && o.value.length > 0]
            ]),
            !D.value && o.value.length === 0 ? (n(), d("div", Vl, [
              f(u).empty ? N(e.$slots, "empty", { key: 0 }) : Tt.value ? (n(), C(te(Rt.value), {
                key: 1,
                message: e.noResultsText
              }, null, 8, ["message"])) : e.noResultsText ? (n(), d($, { key: 2 }, [
                ie(ee(e.noResultsText), 1)
              ], 64)) : p("", !0)
            ])) : p("", !0),
            Se.value || f(u).bottomButtons ? (n(), d("div", wl, [
              Se.value && o.value.length >= e.requiredItemsForBottomCreate ? (n(), C(Oe, {
                key: 0,
                disabled: !Je.value || e.createDisabled,
                text: e.createText,
                icon: e.createIcon,
                to: e.createRoute,
                onClick: je
              }, null, 8, ["disabled", "text", "icon", "to"])) : p("", !0),
              N(e.$slots, "bottom-buttons")
            ])) : p("", !0),
            e.resource.length > 0 ? (n(), C(O, {
              key: 6,
              ref_key: "paginator",
              ref: be,
              modelValue: w.value,
              "onUpdate:modelValue": m[1] || (m[1] = (g) => w.value = g),
              resource: e.resource,
              filters: e.filters,
              onLoading: nt,
              onPerms: at,
              onResponse: ot
            }, null, 8, ["modelValue", "resource", "filters"])) : p("", !0)
          ]),
          _: 3
        }, 8, ["class"]))
      ], 8, rl);
    };
  }
}), Xl = {
  install: (t) => {
    t.component("lkt-table") === void 0 && t.component("lkt-table", Dl);
  }
}, Yl = (t) => (V.navButtonSlot = t, !0), Zl = (t) => (V.dropButtonSlot = t, !0), Ol = (t) => (V.createButtonSlot = t, !0), _l = (t) => {
  V.defaultEmptySlot = t;
}, xl = (t) => {
  V.defaultSaveIcon = t;
};
export {
  A as Column,
  Ul as createActionColumn,
  jl as createCheckColumn,
  Fl as createColumn,
  ql as createEmailColumn,
  Jl as createFileColumn,
  Wl as createFloatColumn,
  Ql as createHiddenColumn,
  Hl as createIntegerColumn,
  Al as createLinkColumn,
  Gl as createSelectColumn,
  zl as createSwitchColumn,
  Kl as createTelColumn,
  Pl as createTextColumn,
  Xl as default,
  Ol as setTableCreateButtonSlot,
  Zl as setTableDropButtonSlot,
  _l as setTableEmptySlot,
  Yl as setTableNavButtonSlot,
  xl as setTableSaveIcon
};
