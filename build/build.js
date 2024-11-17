import { reactive as W, defineComponent as le, ref as h, watch as M, computed as c, resolveComponent as z, unref as p, openBlock as n, createBlock as C, withCtx as H, createTextVNode as ie, toDisplayString as ee, createElementBlock as d, mergeProps as Je, Fragment as $, withModifiers as _e, resolveDynamicComponent as te, createCommentVNode as f, useSlots as xe, normalizeClass as Q, createElementVNode as F, createVNode as ue, renderSlot as N, renderList as q, withDirectives as me, vShow as fe, onMounted as Lt, nextTick as Qe, createSlots as Xe, normalizeProps as oe } from "vue";
import { Field as Ye } from "lkt-field";
import { __ as ve } from "lkt-i18n";
import { replaceAll as et, generateRandomString as Mt } from "lkt-string-tools";
import { DataState as Ft } from "lkt-data-state";
import At from "sortablejs";
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
const Al = (t) => W(new A(t)), Ul = (t, r, s, a = !0) => W(new A({ key: t, label: r, sortable: a, type: T.Link, link: s })), Pl = (t, r, s, a = !0) => W(new A({ key: t, label: r, sortable: a, type: T.Action, action: s })), Hl = (t, r, s = !0) => W(new A({ key: t, label: r, type: T.Text, sortable: s })), Wl = (t, r, s = !0) => W(new A({ key: t, label: r, type: T.Number, sortable: s })), ql = (t, r, s = !0) => W(new A({ key: t, label: r, type: T.Number, sortable: s })), Kl = (t, r, s = !0) => W(new A({ key: t, label: r, type: T.Email, sortable: s })), jl = (t, r, s = !0) => W(new A({ key: t, label: r, type: T.Tel, sortable: s })), zl = (t, r, s = !0) => W(new A({ key: t, label: r, type: T.Check, sortable: s })), Gl = (t, r, s = !0) => W(new A({ key: t, label: r, type: T.Switch, sortable: s })), Jl = (t, r, s, a = !0) => W(new A({ key: t, label: r, type: T.Select, sortable: a })), Ql = (t, r, s = !0) => W(new A({ key: t, label: r, type: T.File, sortable: s })), Xl = (t, r, s = !0) => W(new A({ key: t, label: r, sortable: s, hidden: !0 })), Ze = (t, r, s, a) => {
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
    return u.startsWith("__:") ? ve(u.substring(3)) : u;
  }
  return r[t.key];
}, Ut = (t, r, s) => {
  if (!t.colspan) return -1;
  let a = r;
  return s.forEach((u) => {
    let l = Re(t, u);
    l > 0 && l < a && (a = l);
  }), a;
}, Re = (t, r) => t.colspan === !1 ? !1 : typeof t.colspan == "function" ? t.colspan(r) : t.colspan, Pt = (t, r) => typeof t.preferSlot > "u" ? !0 : t.preferSlot === !1 ? !1 : typeof t.preferSlot == "function" ? t.preferSlot(r) : !0, Ht = (t, r, s) => {
  if (typeof t != "object" || !t.key || r.indexOf(t.key) > -1) return !1;
  let a = Re(t, s);
  return typeof t.colspan > "u" ? !0 : (typeof t.colspan < "u" && (typeof t.colspan == "function" ? a = parseInt(t.colspan(s)) : a = parseInt(t.colspan)), a > 0);
}, Wt = (t = []) => {
  if (t.length > 0) {
    for (let r = 0; r < t.length; ++r)
      if (t[r].sortable) return t[r].key;
  }
  return "";
}, qt = (t, r) => {
  if (t.length > 0) {
    for (let s = 0; s < t.length; ++s)
      if (t[s].key === r) return t[s];
  }
  return null;
}, tt = /* @__PURE__ */ le({
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
    const b = c(() => ({ ...a.column.slotData, item: u.value })), V = c(() => {
      var o, R, K, L;
      if ((o = a.column.field) != null && o.modalData && typeof ((R = a.column.field) == null ? void 0 : R.modalData) == "object")
        for (let w in a.column.field.modalData)
          if (typeof ((K = a.column.field) == null ? void 0 : K.modalData[w]) == "string" && a.column.field.modalData[w].startsWith("prop:")) {
            let D = a.column.field.modalData[w].substring(5);
            u.value[D];
          } else
            a.column.field.modalData[w];
      return (L = a.column.field) == null ? void 0 : L.modalData;
    });
    return (o, R) => {
      const K = z("lkt-anchor"), L = z("lkt-field");
      return o.column.type === p(T).Link ? (n(), C(K, {
        key: 0,
        to: o.column.getHref(u.value)
      }, {
        default: H(() => [
          ie(ee(p(re)(o.column, u.value, o.i)), 1)
        ]),
        _: 1
      }, 8, ["to"])) : o.column.type === p(T).Action ? (n(), d("a", {
        key: 1,
        href: "#",
        onClick: R[0] || (R[0] = (w) => o.column.doAction(u.value))
      }, ee(p(re)(o.column, u.value, o.i)), 1)) : o.column.type !== "" && o.hasInlineEditPerm ? (n(), C(L, Je({ key: 2 }, o.column.field, {
        type: p(S),
        "read-mode": !o.column.editable || !o.editModeEnabled,
        ref: (w) => v.value = w,
        "slot-data": b.value,
        label: o.column.type === "switch" || o.column.type === "check" ? o.column.label : "",
        "modal-data": V.value,
        prop: u.value,
        modelValue: l.value,
        "onUpdate:modelValue": R[1] || (R[1] = (w) => l.value = w)
      }), null, 16, ["type", "read-mode", "slot-data", "label", "modal-data", "prop", "modelValue"])) : o.column.type !== "" ? (n(), C(L, Je({ key: 3 }, o.column.field, {
        type: p(S),
        "read-mode": "",
        ref: (w) => v.value = w,
        "slot-data": b.value,
        label: o.column.type === "switch" || o.column.type === "check" ? o.column.label : "",
        "modal-data": V.value,
        prop: u.value,
        "model-value": l.value
      }), null, 16, ["type", "slot-data", "label", "modal-data", "prop", "model-value"])) : (n(), d($, { key: 4 }, [
        ie(ee(p(re)(o.column, u.value, o.i, o.columns)), 1)
      ], 64));
    };
  }
}), J = class J {
};
J.navButtonSlot = "", J.dropButtonSlot = "", J.editButtonSlot = "", J.createButtonSlot = "", J.defaultEmptySlot = void 0, J.defaultSaveIcon = "", J.defaultNoResultsMessage = "No results";
let B = J;
const Kt = /* @__PURE__ */ le({
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
    const s = r, a = c(() => B.dropButtonSlot !== ""), u = c(() => B.dropButtonSlot);
    return (l, v) => {
      const S = z("lkt-button");
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
          a.value ? (n(), C(te(u.value), { key: 0 })) : f("", !0)
        ]),
        _: 1
      }, 8, ["icon", "text", "resource", "resource-data", "confirm-modal", "disabled"]);
    };
  }
}), jt = /* @__PURE__ */ le({
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
    const s = r, a = c(() => B.editButtonSlot !== ""), u = c(() => B.editButtonSlot);
    return (l, v) => {
      const S = z("lkt-button");
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
          a.value ? (n(), C(te(u.value), { key: 0 })) : f("", !0)
        ]),
        _: 1
      }, 8, ["icon", "text", "on-click-to", "is-anchor", "resource", "resource-data", "confirm-modal", "disabled"]);
    };
  }
});
var x = /* @__PURE__ */ ((t) => (t[t.Auto = 0] = "Auto", t[t.PreferItem = 1] = "PreferItem", t[t.PreferCustomItem = 2] = "PreferCustomItem", t[t.PreferColumns = 3] = "PreferColumns", t))(x || {});
const zt = ["data-i", "data-draggable"], Gt = {
  key: 1,
  "data-role": "invalid-drag-indicator"
}, Jt = {
  key: 2,
  class: "lkt-table-nav-cell"
}, Qt = { class: "lkt-table-nav-container" }, Xt = ["colspan"], Yt = ["colspan"], Zt = ["data-column", "colspan", "title"], Ot = {
  key: 7,
  class: "lkt-table-col-drop"
}, _t = {
  key: 8,
  class: "lkt-table-col-edit"
}, xt = /* @__PURE__ */ le({
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
    const S = [x.Auto, x.PreferCustomItem].includes(v), b = [x.Auto, x.PreferItem].includes(v), V = h(u.editLink);
    for (let i in l.value) V.value = et(V.value, ":" + i, l.value[i]);
    const o = (i) => a("click", i), R = (i, I) => {
      a("show", i, I);
    }, K = c(() => {
      let i = [];
      return u.sortable && u.isDraggable && i.push("handle"), i.join(" ");
    }), L = c(() => B.navButtonSlot !== ""), w = c(() => B.navButtonSlot), D = () => {
      a("item-up", u.i);
    }, ye = () => {
      a("item-down", u.i);
    }, U = () => {
      a("item-drop", u.i);
    }, ke = () => {
    };
    return M(() => u.modelValue, (i) => l.value = i), M(l, (i) => {
      a("update:modelValue", i);
    }, { deep: !0 }), (i, I) => {
      const X = z("lkt-button");
      return n(), d("tr", {
        "data-i": i.i,
        "data-draggable": i.isDraggable,
        class: Q({ "type-custom-item": p(S), "type-item": p(b) })
      }, [
        i.sortable && i.isDraggable && i.editModeEnabled ? (n(), d("td", {
          key: 0,
          "data-role": "drag-indicator",
          class: Q(K.value)
        }, null, 2)) : i.sortable && i.editModeEnabled ? (n(), d("td", Gt)) : f("", !0),
        i.addNavigation && i.editModeEnabled ? (n(), d("td", Jt, [
          F("div", Qt, [
            ue(X, {
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
            ue(X, {
              palette: "table-nav",
              disabled: i.latestRow,
              onClick: ye
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
        ])) : f("", !0),
        i.displayHiddenColumnsIndicator ? (n(), d("td", {
          key: 3,
          onClick: I[0] || (I[0] = (k) => R(k, i.i)),
          "data-role": "show-more",
          class: Q(i.hiddenIsVisible ? "state-open" : "")
        }, null, 2)) : f("", !0),
        p(S) && p(s)[`item-${i.i}`] ? (n(), d("td", {
          key: "td" + i.i,
          colspan: i.visibleColumns.length
        }, [
          N(i.$slots, `item-${i.i}`, {
            item: l.value,
            index: i.i
          })
        ], 8, Xt)) : p(b) && p(s).item ? (n(), d("td", {
          key: "td" + i.i,
          colspan: i.visibleColumns.length
        }, [
          N(i.$slots, "item", {
            item: l.value,
            index: i.i
          })
        ], 8, Yt)) : (n(!0), d($, { key: 6 }, q(i.visibleColumns, (k) => (n(), d($, null, [
          p(Ht)(k, i.emptyColumns, l.value) ? (n(), d("td", {
            key: "td" + i.i,
            "data-column": k.key,
            colspan: p(Re)(k, l.value),
            title: p(re)(k, l.value, i.i, i.visibleColumns),
            onClick: I[2] || (I[2] = (G) => o(G))
          }, [
            i.$slots[k.key] && p(Pt)(k, l.value) ? N(i.$slots, k.key, {
              key: 0,
              value: l.value[k.key],
              item: l.value,
              column: k,
              i: i.i
            }) : l.value ? (n(), C(tt, {
              key: 1,
              modelValue: l.value,
              "onUpdate:modelValue": I[1] || (I[1] = (G) => l.value = G),
              column: k,
              columns: i.visibleColumns,
              "edit-mode-enabled": i.editModeEnabled,
              "has-inline-edit-perm": i.hasInlineEditPerm,
              i: i.i
            }, null, 8, ["modelValue", "column", "columns", "edit-mode-enabled", "has-inline-edit-perm", "i"])) : f("", !0)
          ], 8, Zt)) : f("", !0)
        ], 64))), 256)),
        i.canDrop && i.editModeEnabled ? (n(), d("td", Ot, [
          ue(Kt, {
            resource: i.dropResource,
            "resource-data": l.value,
            confirm: i.dropConfirm,
            text: i.dropText,
            icon: i.dropIcon,
            onClick: U
          }, null, 8, ["resource", "resource-data", "confirm", "text", "icon"])
        ])) : f("", !0),
        i.canEdit && i.editModeEnabled ? (n(), d("td", _t, [
          ue(jt, {
            "resource-data": l.value,
            text: i.editText,
            icon: i.editIcon,
            link: V.value,
            onClick: ke
          }, null, 8, ["resource-data", "text", "icon", "link"])
        ])) : f("", !0)
      ], 10, zt);
    };
  }
}), el = { "data-role": "hidden-row" }, tl = ["colspan"], ll = ["data-column"], al = ["data-i"], ol = ["data-column", "title", "onClick"], nl = /* @__PURE__ */ le({
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
    return M(() => a.modelValue, (v) => u.value = v), M(u, () => s("update:modelValue", u.value)), (v, S) => me((n(), d("tr", el, [
      F("td", { colspan: v.hiddenColumnsColSpan }, [
        F("table", null, [
          F("tr", null, [
            (n(!0), d($, null, q(v.hiddenColumns, (b) => (n(), d("th", {
              "data-column": b.key
            }, [
              F("div", null, ee(b.label), 1)
            ], 8, ll))), 256))
          ]),
          F("tr", { "data-i": v.i }, [
            (n(!0), d($, null, q(v.hiddenColumns, (b, V) => (n(), d("td", {
              "data-column": b.key,
              title: p(re)(b, u.value, V, v.hiddenColumns),
              onClick: (o) => l(o, u.value)
            }, [
              v.$slots[b.key] ? N(v.$slots, b.key, {
                key: 0,
                value: u.value[b.key],
                item: u.value,
                column: b,
                i: V
              }) : (n(), C(tt, {
                key: 1,
                column: b,
                columns: v.hiddenColumns,
                modelValue: u.value,
                "onUpdate:modelValue": S[0] || (S[0] = (o) => u.value = o),
                i: V
              }, null, 8, ["column", "columns", "modelValue", "i"]))
            ], 8, ol))), 256))
          ], 8, al)
        ])
      ], 8, tl)
    ], 512)), [
      [fe, v.hiddenIsVisible]
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
    const s = r, a = c(() => B.createButtonSlot !== ""), u = c(() => B.createButtonSlot);
    return (l, v) => {
      const S = z("lkt-button");
      return n(), C(S, {
        palette: "table-create",
        disabled: l.disabled,
        icon: a.value ? "" : l.icon,
        text: a.value ? "" : l.text,
        "on-click-to": l.to,
        onClick: v[0] || (v[0] = (b) => s("click"))
      }, {
        default: H(() => [
          a.value ? (n(), C(te(u.value), { key: 0 })) : f("", !0)
        ]),
        _: 1
      }, 8, ["disabled", "icon", "text", "on-click-to"]);
    };
  }
}), ul = ["data-column", "data-sortable", "data-sort", "colspan", "title"], rl = /* @__PURE__ */ le({
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
    const s = r, a = t, u = c(() => Ut(a.column, a.amountOfColumns, a.items)), l = c(() => a.column.sortable === !0), v = c(() => l.value && a.sortBy === a.column.key ? a.sortDirection : ""), S = c(() => a.column.label.startsWith("__:") ? ve(a.column.label.substring(3)) : a.column.label), b = () => s("click", a.column);
    return (V, o) => (n(), d("th", {
      "data-column": V.column.key,
      "data-sortable": l.value,
      "data-sort": v.value,
      colspan: u.value,
      title: S.value,
      onClick: b
    }, [
      F("div", null, ee(S.value), 1)
    ], 8, ul));
  }
});
var O = /* @__PURE__ */ ((t) => (t.Table = "table", t.Item = "item", t.Ul = "ul", t.Ol = "ol", t))(O || {}), _ = /* @__PURE__ */ ((t) => (t.Create = "create", t.Update = "update", t.Edit = "edit", t.Drop = "drop", t.Sort = "sort", t.InlineEdit = "inline-edit", t.InlineCreate = "inline-create", t.InlineCreateEver = "inline-create-ever", t))(_ || {}), pe = /* @__PURE__ */ ((t) => (t.Asc = "asc", t.Desc = "desc", t))(pe || {});
const il = ["id"], sl = {
  key: 0,
  class: "lkt-table-page-buttons"
}, dl = { key: 1 }, cl = { class: "switch-edition-mode" }, ml = {
  key: 1,
  class: "lkt-table-page-buttons"
}, fl = {
  key: 2,
  class: "lkt-table-page-filters"
}, pl = ["data-sortable"], vl = { key: 0 }, yl = {
  key: 0,
  "data-role": "drag-indicator"
}, kl = { key: 1 }, bl = { key: 2 }, hl = {
  key: 3,
  class: "lkt-table-col-drop"
}, gl = {
  key: 4,
  class: "lkt-table-col-edit"
}, Cl = ["id"], Sl = ["id"], Il = ["data-i"], Bl = ["data-i"], Vl = ["data-i"], wl = {
  key: 4,
  class: "lkt-table-empty"
}, Dl = {
  key: 5,
  class: "lkt-table-page-buttons lkt-table-page-buttons-bottom"
}, El = /* @__PURE__ */ le({
  __name: "LktTable",
  props: {
    modelValue: { default: () => [] },
    type: { default: O.Table },
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
    noResultsText: { default: B.defaultNoResultsMessage },
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
    const a = s, u = xe(), l = t, v = {}, S = h(typeof l.sorter == "function" ? l.sorter : Ze), b = h(Wt(l.columns)), V = h(pe.Asc), o = h(l.modelValue), R = h(v), K = h(null), L = h(l.columns), w = h(l.page), D = h(l.loading), ye = h(!1), U = h(l.perms), ke = h(null), i = h(null), I = h({}), X = h(new Ft({ items: o.value }, l.dataStateConfig)), k = h(l.editMode), G = h(0), Ve = h(null), ne = h(!1);
    M(D, (e) => a("update:loading", e)), M(w, (e) => a("page", e));
    const be = h(l.type);
    l.itemMode && be.value === O.Table && (be.value = O.Item);
    const lt = (e) => {
      Array.isArray(e) && (o.value = e), D.value = !1, ye.value = !0, X.value.store({ items: o.value }).turnStoredIntoOriginal(), ne.value = !1;
    }, at = (e) => {
      U.value = e;
    }, ot = (e) => {
    }, nt = (e) => {
      a("read-response", e);
    }, ut = () => Qe(() => D.value = !0), rt = () => {
      ke.value.doRefresh();
    }, se = Mt(12), we = c(() => {
      if (!l.hideEmptyColumns) return [];
      let e = [];
      return L.value.forEach((m) => {
        let E = m.key, j = !1;
        o.value.forEach((Y) => {
          if (typeof Y.checkEmpty == "function")
            return Y.checkEmpty(Y);
          Y[E] && (j = !0);
        }), j || e.push(E);
      }), e;
    }), he = c(() => L.value.filter((e) => !e.hidden)), De = c(() => L.value.filter((e) => e.hidden)), it = c(() => {
      let e = he.value.length + 1;
      return l.sortable && ++e, e;
    }), st = c(() => L.value.filter((e) => e.isForRowKey)), Ne = c(() => De.value.length > 0 && !l.sortable), dt = c(() => L.value.map((e) => e.key)), Le = c(() => {
      let e = [];
      for (let m in u) dt.value.indexOf(m) !== -1 && e.push(m);
      return e;
    }), Me = c(() => l.hiddenSave || D.value || !l.saveResource ? !1 : k.value && ne.value ? !0 : k.value), ct = c(() => Se.value && o.value.length >= l.requiredItemsForTopCreate || l.switchEditionEnabled ? !0 : Me.value || k.value && ge.value), mt = c(() => l.saveDisabled || typeof l.saveValidator == "function" && !l.saveValidator(o.value) ? !1 : ne.value), ft = c(() => o.value.length), pt = c(() => ({
      items: o.value,
      ...l.saveResourceData
    })), vt = c(() => l.titleTag === "" ? "h2" : l.titleTag), yt = c(() => l.wrapContentTag === "" ? "div" : l.wrapContentTag), Ee = c(() => l.title.startsWith("__:") ? ve(l.title.substring(3)) : l.title), kt = c(() => l.saveText.startsWith("__:") ? ve(l.saveText.substring(3)) : l.saveText), bt = c(() => l.editModeText.startsWith("__:") ? ve(l.editModeText.substring(3)) : l.editModeText), ge = c(() => U.value.includes(_.Create)), $e = c(() => U.value.includes("read")), de = c(() => U.value.includes(_.Update)), Fe = c(() => U.value.includes(_.Edit)), ht = c(() => U.value.includes(_.InlineEdit)), gt = c(() => U.value.includes(_.InlineCreate)), Ae = c(() => U.value.includes(_.InlineCreateEver)), ce = c(() => U.value.includes(_.Drop)), Ct = (e) => {
      let m = e.target;
      if (typeof m.dataset.column > "u")
        do
          m = m.parentNode;
        while (typeof m.dataset.column > "u" && m.tagName !== "TABLE" && m.tagName !== "body");
      if (m.tagName === "TD" && (m = m.parentNode, m = m.dataset.i, typeof m < "u"))
        return o.value[m];
    }, St = (e) => o.value[e], It = (e) => {
      var m;
      return (m = K.value) == null ? void 0 : m.querySelector(`[data-i="${e}"]`);
    }, Ue = (e) => R.value["tr_" + e] === !0, Pe = (e) => {
      e && e.sortable && (o.value = o.value.sort((m, E) => S.value(m, E, e, V.value)), V.value = V.value === pe.Asc ? pe.Desc : pe.Asc, b.value = e.key, a("sort", [b.value, V.value]));
    }, He = (e) => {
      a("click", e);
    }, We = (e, m) => {
      let E = "tr_" + m;
      R.value[E] = typeof R.value[E] > "u" ? !0 : !R.value[E];
    }, Bt = (e) => typeof l.checkValidDrag == "function" ? l.checkValidDrag(e) : !0, qe = (e) => typeof l.draggableChecker == "function" ? l.draggableChecker(e) : !0, Ke = () => {
      if (Ae.value)
        a("click-create");
      else {
        if (typeof l.newValueGenerator == "function") {
          let e = l.newValueGenerator();
          if (typeof e == "object") {
            o.value.push(e);
            return;
          }
        }
        o.value.push({});
      }
    }, Vt = () => {
      D.value = !0;
    }, wt = () => {
      D.value = !1;
    }, Dt = (e, m) => {
      if (a("before-save"), l.saveResource && (D.value = !1, !m.success)) {
        a("error", m.httpStatus);
        return;
      }
      X.value.turnStoredIntoOriginal(), ne.value = !1, a("save", m);
    }, je = (e, m, E) => {
      if (E >= e.length) {
        let j = E - e.length + 1;
        for (; j--; ) e.push(void 0);
      }
      return e.splice(E, 0, e.splice(m, 1)[0]), e;
    }, Et = (e) => {
      je(o.value, e, e - 1), G.value = Be();
    }, $t = (e) => {
      je(o.value, e, e + 1), G.value = Be();
    }, Ce = (e) => {
      o.value.splice(e, 1), G.value = Be();
    }, Tt = () => {
      I.value && (I.value.destroy(), I.value = {});
    }, ze = () => {
      Ve.value || (Ve.value = document.getElementById("lkt-table-body-" + se)), I.value = new At(Ve.value, {
        direction: "vertical",
        handle: ".handle",
        animation: 150,
        onEnd: function(e) {
          let m = e.oldIndex, E = e.newIndex;
          o.value.splice(E, 0, o.value.splice(m, 1)[0]), G.value = Be(), a("drag-end");
        },
        onMove: function(e, m) {
          return Bt(e);
        }
      });
    }, Te = (e, m, E = !1) => {
      let j = [G.value, se, "row", m];
      return E && j.push("hidden"), st.value.forEach((Y) => {
        let Z = String(e[Y.key]).toLowerCase();
        Z.length > 50 && (Z = Z.substring(0, 50)), Z = et(Z, " ", "-"), j.push(Z);
      }), j.join("-");
    }, Ge = c(() => typeof l.createEnabledValidator == "function" ? l.createEnabledValidator({ items: o.value }) : !0), Se = c(() => Ae.value || gt.value && k.value), Ie = (e, m) => typeof l.itemDisplayChecker == "function" ? l.itemDisplayChecker(e) : !0;
    Lt(() => {
      l.initialSorting && Pe(qt(l.columns, b.value)), X.value.store({ items: o.value }).turnStoredIntoOriginal(), ne.value = !1, l.sortable && Qe(() => {
        ze();
      });
    }), M(() => l.sortable, (e) => {
      e ? ze() : Tt();
    }), M(() => l.perms, (e) => U.value = e), M(U, (e) => a("update:perms", e)), M(() => l.editMode, (e) => k.value = e), M(() => l.columns, (e) => L.value = e, { deep: !0 }), M(() => l.modelValue, (e) => o.value = e, { deep: !0 }), M(o, (e) => {
      X.value.increment({ items: e }), ne.value = X.value.changed(), a("update:modelValue", e);
    }, { deep: !0 }), r({
      getItemByEvent: Ct,
      getItemByIndex: St,
      getRowByIndex: It,
      doRefresh: rt,
      getHtml: () => i.value
    });
    const Rt = c(() => typeof B.defaultEmptySlot < "u"), Nt = c(() => B.defaultEmptySlot);
    return (e, m) => {
      const E = z("lkt-button"), j = z("lkt-field"), Y = z("lkt-loader"), Z = z("lkt-paginator");
      return n(), d("section", {
        ref_key: "element",
        ref: i,
        class: "lkt-table-page",
        id: "lkt-table-page-" + p(se)
      }, [
        Ee.value || p(u).title ? (n(), d("header", {
          key: 0,
          class: Q(e.headerClass)
        }, [
          Ee.value ? (n(), C(te(vt.value), { key: 0 }, {
            default: H(() => [
              e.titleIcon ? (n(), d("i", {
                key: 0,
                class: Q(e.titleIcon)
              }, null, 2)) : f("", !0),
              ie(" " + ee(Ee.value), 1)
            ]),
            _: 1
          })) : f("", !0),
          p(u).title ? N(e.$slots, "title", { key: 1 }) : f("", !0)
        ], 2)) : f("", !0),
        (n(), C(te(yt.value), {
          class: Q(["lkt-table-page-content-wrapper", e.wrapContentClass])
        }, {
          default: H(() => [
            ct.value ? (n(), d("div", sl, [
              me(ue(E, {
                class: "lkt-table--save-button",
                ref: "saveButton",
                icon: p(B).defaultSaveIcon,
                disabled: !mt.value,
                "confirm-modal": e.saveConfirm,
                "confirm-data": e.confirmData,
                resource: e.saveResource,
                "resource-data": pt.value,
                onLoading: Vt,
                onLoaded: wt,
                onClick: Dt
              }, {
                default: H(() => [
                  p(u)["button-save"] ? N(e.$slots, "button-save", {
                    key: 0,
                    items: o.value,
                    editMode: e.editMode,
                    canUpdate: !e.saveDisabled
                  }) : (n(), d("span", dl, ee(kt.value), 1))
                ]),
                _: 3
              }, 8, ["icon", "disabled", "confirm-modal", "confirm-data", "resource", "resource-data"]), [
                [fe, Me.value]
              ]),
              Se.value && o.value.length >= e.requiredItemsForTopCreate ? (n(), C(Oe, {
                key: 0,
                disabled: !Ge.value || e.createDisabled,
                text: e.createText,
                icon: e.createIcon,
                to: e.createRoute,
                onClick: Ke
              }, null, 8, ["disabled", "text", "icon", "to"])) : f("", !0),
              F("div", cl, [
                me(ue(j, {
                  type: "switch",
                  modelValue: k.value,
                  "onUpdate:modelValue": m[0] || (m[0] = (g) => k.value = g),
                  label: bt.value
                }, null, 8, ["modelValue", "label"]), [
                  [fe, e.switchEditionEnabled]
                ])
              ])
            ])) : f("", !0),
            p(u).buttons ? (n(), d("div", ml, [
              N(e.$slots, "buttons")
            ])) : f("", !0),
            ye.value && p(u).filters ? (n(), d("div", fl, [
              N(e.$slots, "filters", {
                items: o.value,
                isLoading: D.value
              })
            ])) : f("", !0),
            D.value ? (n(), C(Y, { key: 3 })) : f("", !0),
            me(F("div", {
              class: "lkt-table",
              "data-sortable": e.sortable
            }, [
              be.value === p(O).Table ? (n(), d("table", vl, [
                F("thead", null, [
                  F("tr", null, [
                    e.sortable && k.value ? (n(), d("th", yl)) : f("", !0),
                    e.addNavigation && k.value ? (n(), d("th", kl)) : f("", !0),
                    Ne.value ? (n(), d("th", bl)) : f("", !0),
                    (n(!0), d($, null, q(he.value, (g) => (n(), d($, null, [
                      we.value.indexOf(g.key) === -1 ? (n(), C(rl, {
                        key: 0,
                        column: g,
                        "sort-by": b.value,
                        "sort-direction": V.value,
                        "amount-of-columns": e.columns.length,
                        items: o.value,
                        onClick: (y) => Pe(g)
                      }, null, 8, ["column", "sort-by", "sort-direction", "amount-of-columns", "items", "onClick"])) : f("", !0)
                    ], 64))), 256)),
                    ce.value && k.value ? (n(), d("th", hl)) : f("", !0),
                    Fe.value && de.value && k.value ? (n(), d("th", gl)) : f("", !0)
                  ])
                ]),
                F("tbody", {
                  ref_key: "tableBody",
                  ref: K,
                  id: "lkt-table-body-" + p(se)
                }, [
                  (n(!0), d($, null, q(o.value, (g, y) => me((n(), C(xt, {
                    modelValue: o.value[y],
                    "onUpdate:modelValue": (P) => o.value[y] = P,
                    key: Te(g, y),
                    i: y,
                    "display-hidden-columns-indicator": Ne.value,
                    "is-draggable": qe(g),
                    sortable: e.sortable,
                    "visible-columns": he.value,
                    "empty-columns": we.value,
                    "add-navigation": e.addNavigation,
                    "hidden-is-visible": Ue(y),
                    "latest-row": y + 1 === ft.value,
                    "can-drop": ce.value && k.value,
                    "drop-confirm": e.dropConfirm,
                    "drop-resource": e.dropResource,
                    "drop-text": e.dropText,
                    "drop-icon": e.dropIcon,
                    "can-edit": Fe.value && de.value && k.value,
                    "edit-text": e.editText,
                    "edit-icon": e.editIcon,
                    "edit-link": e.editLink,
                    "edit-mode-enabled": k.value,
                    "has-inline-edit-perm": ht.value,
                    "row-display-type": e.rowDisplayType,
                    onClick: He,
                    onShow: We,
                    onItemUp: Et,
                    onItemDown: $t,
                    onItemDrop: Ce
                  }, Xe({ _: 2 }, [
                    p(u)[`item-${y}`] ? {
                      name: `item-${y}`,
                      fn: H((P) => [
                        N(e.$slots, `item-${y}`, oe({
                          [e.slotItemVar || ""]: P.item,
                          index: y
                        }))
                      ]),
                      key: "0"
                    } : p(u).item ? {
                      name: "item",
                      fn: H((P) => [
                        N(e.$slots, "item", oe({
                          [e.slotItemVar || ""]: P.item,
                          index: y
                        }))
                      ]),
                      key: "1"
                    } : void 0,
                    q(Le.value, (P) => ({
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
                    [fe, Ie(o.value[y])]
                  ])), 128)),
                  De.value.length > 0 ? (n(!0), d($, { key: 0 }, q(o.value, (g, y) => (n(), C(nl, {
                    modelValue: o.value[y],
                    "onUpdate:modelValue": (P) => o.value[y] = P,
                    key: Te(g, y, !0),
                    i: y,
                    "hidden-columns": De.value,
                    "hidden-columns-col-span": it.value,
                    "is-draggable": qe(g),
                    sortable: e.sortable,
                    "visible-columns": he.value,
                    "empty-columns": we.value,
                    "hidden-is-visible": Ue(y),
                    onClick: He,
                    onShow: We
                  }, Xe({ _: 2 }, [
                    q(Le.value, (P) => ({
                      name: P,
                      fn: H((ae) => [
                        N(e.$slots, P, oe({
                          [e.slotItemVar || ""]: ae.item,
                          value: ae.value,
                          column: ae.column
                        }))
                      ])
                    }))
                  ]), 1032, ["modelValue", "onUpdate:modelValue", "i", "hidden-columns", "hidden-columns-col-span", "is-draggable", "sortable", "visible-columns", "empty-columns", "hidden-is-visible"]))), 128)) : f("", !0)
                ], 8, Cl)
              ])) : be.value === p(O).Item ? (n(), d("div", {
                key: 1,
                ref_key: "tableBody",
                ref: K,
                id: "lkt-table-body-" + p(se),
                class: Q(["lkt-table-items-container", e.itemsContainerClass])
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
                      canUpdate: de.value,
                      canDrop: ce.value,
                      isLoading: D.value,
                      doDrop: () => Ce(y)
                    }))
                  ], 8, Il)) : f("", !0)
                ], 64))), 256))
              ], 10, Sl)) : p(O).Ul ? (n(), d("ul", {
                key: 2,
                class: Q(["lkt-table-items-container", e.itemsContainerClass])
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
                      canUpdate: de.value,
                      canDrop: ce.value,
                      isLoading: D.value,
                      doDrop: () => Ce(y)
                    }))
                  ], 8, Bl)) : f("", !0)
                ], 64))), 256))
              ], 2)) : p(O).Ul ? (n(), d("ol", {
                key: 3,
                class: Q(["lkt-table-items-container", e.itemsContainerClass])
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
                      canUpdate: de.value,
                      canDrop: ce.value,
                      isLoading: D.value,
                      doDrop: () => Ce(y)
                    }))
                  ], 8, Vl)) : f("", !0)
                ], 64))), 256))
              ], 2)) : f("", !0)
            ], 8, pl), [
              [fe, !D.value && o.value.length > 0]
            ]),
            !D.value && o.value.length === 0 ? (n(), d("div", wl, [
              p(u).empty ? N(e.$slots, "empty", { key: 0 }) : Rt.value ? (n(), C(te(Nt.value), {
                key: 1,
                message: e.noResultsText
              }, null, 8, ["message"])) : e.noResultsText ? (n(), d($, { key: 2 }, [
                ie(ee(e.noResultsText), 1)
              ], 64)) : f("", !0)
            ])) : f("", !0),
            Se.value || p(u).bottomButtons ? (n(), d("div", Dl, [
              Se.value && o.value.length >= e.requiredItemsForBottomCreate ? (n(), C(Oe, {
                key: 0,
                disabled: !Ge.value || e.createDisabled,
                text: e.createText,
                icon: e.createIcon,
                to: e.createRoute,
                onClick: Ke
              }, null, 8, ["disabled", "text", "icon", "to"])) : f("", !0),
              N(e.$slots, "bottom-buttons")
            ])) : f("", !0),
            e.resource.length > 0 ? (n(), C(Z, {
              key: 6,
              ref_key: "paginator",
              ref: ke,
              modelValue: w.value,
              "onUpdate:modelValue": m[1] || (m[1] = (g) => w.value = g),
              resource: e.resource,
              filters: e.filters,
              onResults: lt,
              onLoading: ut,
              onPerms: at,
              onCustom: ot,
              onResponse: nt
            }, null, 8, ["modelValue", "resource", "filters"])) : f("", !0)
          ]),
          _: 3
        }, 8, ["class"]))
      ], 8, il);
    };
  }
}), Yl = {
  install: (t) => {
    t.component("lkt-table") === void 0 && t.component("lkt-table", El);
  }
}, Zl = (t) => (B.navButtonSlot = t, !0), Ol = (t) => (B.dropButtonSlot = t, !0), _l = (t) => (B.createButtonSlot = t, !0), xl = (t) => {
  B.defaultEmptySlot = t;
}, ea = (t) => {
  B.defaultSaveIcon = t;
};
export {
  A as Column,
  Pl as createActionColumn,
  zl as createCheckColumn,
  Al as createColumn,
  Kl as createEmailColumn,
  Ql as createFileColumn,
  ql as createFloatColumn,
  Xl as createHiddenColumn,
  Wl as createIntegerColumn,
  Ul as createLinkColumn,
  Jl as createSelectColumn,
  Gl as createSwitchColumn,
  jl as createTelColumn,
  Hl as createTextColumn,
  Yl as default,
  _l as setTableCreateButtonSlot,
  Ol as setTableDropButtonSlot,
  xl as setTableEmptySlot,
  Zl as setTableNavButtonSlot,
  ea as setTableSaveIcon
};
