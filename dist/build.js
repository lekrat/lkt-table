import { reactive as W, defineComponent as le, ref as h, watch as L, computed as c, resolveComponent as G, unref as f, openBlock as n, createBlock as g, withCtx as H, createTextVNode as ie, toDisplayString as ee, createElementBlock as d, mergeProps as Xe, Fragment as T, withModifiers as xe, resolveDynamicComponent as te, createCommentVNode as v, useSlots as et, normalizeClass as K, createElementVNode as A, createVNode as ue, renderSlot as M, renderList as q, withDirectives as fe, vShow as pe, onMounted as Lt, nextTick as Re, createSlots as Ye, normalizeProps as oe } from "vue";
import { Field as Ze } from "lkt-field";
import { __ as ye } from "lkt-i18n";
import { replaceAll as tt, generateRandomString as Ft } from "lkt-string-tools";
import { DataState as At } from "lkt-data-state";
import Ut from "sortablejs";
import { time as Be } from "lkt-date-tools";
var $ = /* @__PURE__ */ ((t) => (t.Text = "text", t.Number = "number", t.Check = "check", t.Switch = "switch", t.Select = "select", t.Email = "email", t.Tel = "tel", t.File = "file", t.Link = "link", t.Action = "action", t.Integer = "int", t.Float = "float", t.None = "", t))($ || {});
class U {
  constructor(r = {}) {
    this.key = "", this.label = "", this.sortable = !0, this.hidden = !1, this.editable = !1, this.formatter = void 0, this.checkEmpty = void 0, this.colspan = void 0, this.preferSlot = !0, this.type = $.None, this.link = "", this.action = void 0, this.isForRowKey = !1, this.extractTitleFromColumn = "", this.slotData = {}, this.field = new Ze();
    for (let s in r)
      this[s] = r[s];
    this.field = new Ze(this.field);
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
const Ul = (t) => W(new U(t)), Pl = (t, r, s, o = !0) => W(new U({ key: t, label: r, sortable: o, type: $.Link, link: s })), Hl = (t, r, s, o = !0) => W(new U({ key: t, label: r, sortable: o, type: $.Action, action: s })), Wl = (t, r, s = !0) => W(new U({ key: t, label: r, type: $.Text, sortable: s })), ql = (t, r, s = !0) => W(new U({ key: t, label: r, type: $.Number, sortable: s })), Kl = (t, r, s = !0) => W(new U({ key: t, label: r, type: $.Number, sortable: s })), jl = (t, r, s = !0) => W(new U({ key: t, label: r, type: $.Email, sortable: s })), zl = (t, r, s = !0) => W(new U({ key: t, label: r, type: $.Tel, sortable: s })), Gl = (t, r, s = !0) => W(new U({ key: t, label: r, type: $.Check, sortable: s })), Jl = (t, r, s = !0) => W(new U({ key: t, label: r, type: $.Switch, sortable: s })), Ql = (t, r, s, o = !0) => W(new U({ key: t, label: r, type: $.Select, sortable: o })), Xl = (t, r, s = !0) => W(new U({ key: t, label: r, type: $.File, sortable: s })), Yl = (t, r, s = !0) => W(new U({ key: t, label: r, sortable: s, hidden: !0 })), Oe = (t, r, s, o) => {
  if (!s) return 0;
  let u = t[s.key], l = r[s.key];
  if (o === "asc") {
    if (u > l) return 1;
    if (l > u) return -1;
  } else {
    if (u > l) return -1;
    if (l > u) return 1;
  }
  return 0;
}, re = (t, r, s, o = []) => {
  if (t.extractTitleFromColumn) {
    let u = o.find((l) => l.key === t.extractTitleFromColumn);
    if (u)
      return re(u, r, s, o);
  }
  if (t.formatter && typeof t.formatter == "function") {
    let u = t.formatter(r[t.key], r, t, s);
    return u.startsWith("__:") ? ye(u.substring(3)) : u;
  }
  return r[t.key];
}, Pt = (t, r, s) => {
  if (!t.colspan) return -1;
  let o = r;
  return s.forEach((u) => {
    let l = Me(t, u);
    l > 0 && l < o && (o = l);
  }), o;
}, Me = (t, r) => t.colspan === !1 ? !1 : typeof t.colspan == "function" ? t.colspan(r) : t.colspan, Ht = (t, r) => typeof t.preferSlot > "u" ? !0 : t.preferSlot === !1 ? !1 : typeof t.preferSlot == "function" ? t.preferSlot(r) : !0, Wt = (t, r, s) => {
  if (typeof t != "object" || !t.key || r.indexOf(t.key) > -1) return !1;
  let o = Me(t, s);
  return typeof t.colspan > "u" ? !0 : (typeof t.colspan < "u" && (typeof t.colspan == "function" ? o = parseInt(t.colspan(s)) : o = parseInt(t.colspan)), o > 0);
}, qt = (t = []) => {
  if (t.length > 0) {
    for (let r = 0; r < t.length; ++r)
      if (t[r].sortable) return t[r].key;
  }
  return "";
}, Kt = (t, r) => {
  if (t.length > 0) {
    for (let s = 0; s < t.length; ++s)
      if (t[s].key === r) return t[s];
  }
  return null;
}, lt = (t) => t.type ? `is-${t.type}` : "", at = /* @__PURE__ */ le({
  __name: "LktTableCell",
  props: {
    modelValue: { default: () => ({}) },
    column: { default: () => new U() },
    columns: { default: () => [] },
    i: { default: 0 },
    editModeEnabled: { type: Boolean, default: !1 },
    hasInlineEditPerm: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: r }) {
    const s = r, o = t, u = h(o.modelValue), l = h(u.value[o.column.key]), y = h(null);
    let S = o.column.type;
    [$.Integer, $.Float].includes(S) && (S = $.Number), L(l, (a) => {
      const R = JSON.parse(JSON.stringify(u.value));
      R[o.column.key] = a, s("update:modelValue", R);
    }), L(() => o.modelValue, (a) => {
      u.value = a, l.value = u.value[o.column.key];
    });
    const p = c(() => ({ ...o.column.slotData, item: u.value })), B = c(() => {
      var a, R, j, N;
      if ((a = o.column.field) != null && a.modalData && typeof ((R = o.column.field) == null ? void 0 : R.modalData) == "object")
        for (let V in o.column.field.modalData)
          if (typeof ((j = o.column.field) == null ? void 0 : j.modalData[V]) == "string" && o.column.field.modalData[V].startsWith("prop:")) {
            let w = o.column.field.modalData[V].substring(5);
            u.value[w];
          } else
            o.column.field.modalData[V];
      return (N = o.column.field) == null ? void 0 : N.modalData;
    });
    return (a, R) => {
      const j = G("lkt-anchor"), N = G("lkt-field");
      return a.column.type === f($).Link ? (n(), g(j, {
        key: 0,
        to: a.column.getHref(u.value)
      }, {
        default: H(() => [
          ie(ee(f(re)(a.column, u.value, a.i)), 1)
        ]),
        _: 1
      }, 8, ["to"])) : a.column.type === f($).Action ? (n(), d("a", {
        key: 1,
        href: "#",
        onClick: R[0] || (R[0] = (V) => a.column.doAction(u.value))
      }, ee(f(re)(a.column, u.value, a.i)), 1)) : a.column.type !== "" && a.hasInlineEditPerm ? (n(), g(N, Xe({ key: 2 }, a.column.field, {
        type: f(S),
        "read-mode": !a.column.editable || !a.editModeEnabled,
        ref: (V) => y.value = V,
        "slot-data": p.value,
        label: a.column.type === "switch" || a.column.type === "check" ? a.column.label : "",
        "modal-data": B.value,
        prop: u.value,
        modelValue: l.value,
        "onUpdate:modelValue": R[1] || (R[1] = (V) => l.value = V)
      }), null, 16, ["type", "read-mode", "slot-data", "label", "modal-data", "prop", "modelValue"])) : a.column.type !== "" ? (n(), g(N, Xe({ key: 3 }, a.column.field, {
        type: f(S),
        "read-mode": "",
        ref: (V) => y.value = V,
        "slot-data": p.value,
        label: a.column.type === "switch" || a.column.type === "check" ? a.column.label : "",
        "modal-data": B.value,
        prop: u.value,
        "model-value": l.value
      }), null, 16, ["type", "slot-data", "label", "modal-data", "prop", "model-value"])) : (n(), d(T, { key: 4 }, [
        ie(ee(f(re)(a.column, u.value, a.i, a.columns)), 1)
      ], 64));
    };
  }
}), Y = class Y {
};
Y.navButtonSlot = "", Y.dropButtonSlot = "", Y.editButtonSlot = "", Y.createButtonSlot = "", Y.defaultEmptySlot = void 0, Y.defaultSaveIcon = "", Y.defaultNoResultsMessage = "No results";
let D = Y;
const jt = /* @__PURE__ */ le({
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
    const s = r, o = c(() => D.dropButtonSlot !== ""), u = c(() => D.dropButtonSlot);
    return (l, y) => {
      const S = G("lkt-button");
      return n(), g(S, {
        palette: "table-delete",
        icon: o.value ? "" : l.icon,
        text: o.value ? "" : l.text,
        resource: l.resource,
        "resource-data": l.resourceData,
        "confirm-modal": l.confirm,
        disabled: l.disabled,
        onClick: y[0] || (y[0] = xe((p) => s("click"), ["prevent", "stop"]))
      }, {
        default: H(() => [
          o.value ? (n(), g(te(u.value), { key: 0 })) : v("", !0)
        ]),
        _: 1
      }, 8, ["icon", "text", "resource", "resource-data", "confirm-modal", "disabled"]);
    };
  }
}), zt = /* @__PURE__ */ le({
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
    const s = r, o = c(() => D.editButtonSlot !== ""), u = c(() => D.editButtonSlot);
    return (l, y) => {
      const S = G("lkt-button");
      return n(), g(S, {
        palette: "table-delete",
        icon: o.value ? "" : l.icon,
        text: o.value ? "" : l.text,
        "on-click-to": l.link,
        "is-anchor": l.link !== "",
        resource: l.resource,
        "resource-data": l.resourceData,
        "confirm-modal": l.confirm,
        disabled: l.disabled,
        onClick: y[0] || (y[0] = xe((p) => s("click"), ["prevent", "stop"]))
      }, {
        default: H(() => [
          o.value ? (n(), g(te(u.value), { key: 0 })) : v("", !0)
        ]),
        _: 1
      }, 8, ["icon", "text", "on-click-to", "is-anchor", "resource", "resource-data", "confirm-modal", "disabled"]);
    };
  }
});
var x = /* @__PURE__ */ ((t) => (t[t.Auto = 0] = "Auto", t[t.PreferItem = 1] = "PreferItem", t[t.PreferCustomItem = 2] = "PreferCustomItem", t[t.PreferColumns = 3] = "PreferColumns", t))(x || {});
const Gt = ["data-i", "data-draggable"], Jt = {
  key: 1,
  "data-role": "invalid-drag-indicator"
}, Qt = {
  key: 2,
  class: "lkt-table-nav-cell"
}, Xt = { class: "lkt-table-nav-container" }, Yt = ["colspan"], Zt = ["colspan"], Ot = ["data-column", "colspan", "title"], _t = {
  key: 7,
  class: "lkt-table-col-drop"
}, xt = {
  key: 8,
  class: "lkt-table-col-edit"
}, el = /* @__PURE__ */ le({
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
    const s = et(), o = r, u = t, l = h(u.modelValue);
    let y = typeof u.rowDisplayType == "function" ? u.rowDisplayType(l.value, u.i) : u.rowDisplayType;
    y || (y = x.Auto);
    const S = [x.Auto, x.PreferCustomItem].includes(y), p = [x.Auto, x.PreferItem].includes(y), B = h(u.editLink);
    for (let i in l.value) B.value = tt(B.value, ":" + i, l.value[i]);
    const a = (i) => o("click", i), R = (i, I) => {
      o("show", i, I);
    }, j = c(() => {
      let i = [];
      return u.sortable && u.isDraggable && i.push("handle"), i.join(" ");
    }), N = c(() => D.navButtonSlot !== ""), V = c(() => D.navButtonSlot), w = () => {
      o("item-up", u.i);
    }, ke = () => {
      o("item-down", u.i);
    }, F = () => {
      o("item-drop", u.i);
    }, be = () => {
    };
    return L(() => u.modelValue, (i) => l.value = i), L(l, (i) => {
      o("update:modelValue", i);
    }, { deep: !0 }), (i, I) => {
      const Z = G("lkt-button");
      return n(), d("tr", {
        "data-i": i.i,
        "data-draggable": i.isDraggable,
        class: K({ "type-custom-item": f(S), "type-item": f(p) })
      }, [
        i.sortable && i.isDraggable && i.editModeEnabled ? (n(), d("td", {
          key: 0,
          "data-role": "drag-indicator",
          class: K(j.value)
        }, null, 2)) : i.sortable && i.editModeEnabled ? (n(), d("td", Jt)) : v("", !0),
        i.addNavigation && i.editModeEnabled ? (n(), d("td", Qt, [
          A("div", Xt, [
            ue(Z, {
              palette: "table-nav",
              disabled: i.i === 0,
              onClick: w
            }, {
              default: H(() => [
                N.value ? (n(), g(te(V.value), {
                  key: 0,
                  direction: "up"
                })) : (n(), d(T, { key: 1 }, [
                  I[3] || (I[3] = A("i", { class: "" }, null, -1)),
                  I[4] || (I[4] = ie(" UP "))
                ], 64))
              ]),
              _: 1
            }, 8, ["disabled"]),
            ue(Z, {
              palette: "table-nav",
              disabled: i.latestRow,
              onClick: ke
            }, {
              default: H(() => [
                N.value ? (n(), g(te(V.value), {
                  key: 0,
                  direction: "down"
                })) : (n(), d(T, { key: 1 }, [
                  I[5] || (I[5] = A("i", { class: "" }, null, -1)),
                  I[6] || (I[6] = ie(" DOWN "))
                ], 64))
              ]),
              _: 1
            }, 8, ["disabled"])
          ])
        ])) : v("", !0),
        i.displayHiddenColumnsIndicator ? (n(), d("td", {
          key: 3,
          onClick: I[0] || (I[0] = (k) => R(k, i.i)),
          "data-role": "show-more",
          class: K(i.hiddenIsVisible ? "state-open" : "")
        }, null, 2)) : v("", !0),
        f(S) && f(s)[`item-${i.i}`] ? (n(), d("td", {
          key: "td" + i.i,
          colspan: i.visibleColumns.length
        }, [
          M(i.$slots, `item-${i.i}`, {
            item: l.value,
            index: i.i
          })
        ], 8, Yt)) : f(p) && f(s).item ? (n(), d("td", {
          key: "td" + i.i,
          colspan: i.visibleColumns.length
        }, [
          M(i.$slots, "item", {
            item: l.value,
            index: i.i
          })
        ], 8, Zt)) : (n(!0), d(T, { key: 6 }, q(i.visibleColumns, (k) => (n(), d(T, null, [
          f(Wt)(k, i.emptyColumns, l.value) ? (n(), d("td", {
            key: "td" + i.i,
            "data-column": k.key,
            colspan: f(Me)(k, l.value),
            title: f(re)(k, l.value, i.i, i.visibleColumns),
            class: K(f(lt)(k)),
            onClick: I[2] || (I[2] = (J) => a(J))
          }, [
            i.$slots[k.key] && f(Ht)(k, l.value) ? M(i.$slots, k.key, {
              key: 0,
              value: l.value[k.key],
              item: l.value,
              column: k,
              i: i.i
            }) : l.value ? (n(), g(at, {
              key: 1,
              modelValue: l.value,
              "onUpdate:modelValue": I[1] || (I[1] = (J) => l.value = J),
              column: k,
              columns: i.visibleColumns,
              "edit-mode-enabled": i.editModeEnabled,
              "has-inline-edit-perm": i.hasInlineEditPerm,
              i: i.i
            }, null, 8, ["modelValue", "column", "columns", "edit-mode-enabled", "has-inline-edit-perm", "i"])) : v("", !0)
          ], 10, Ot)) : v("", !0)
        ], 64))), 256)),
        i.canDrop && i.editModeEnabled ? (n(), d("td", _t, [
          ue(jt, {
            resource: i.dropResource,
            "resource-data": l.value,
            confirm: i.dropConfirm,
            text: i.dropText,
            icon: i.dropIcon,
            onClick: F
          }, null, 8, ["resource", "resource-data", "confirm", "text", "icon"])
        ])) : v("", !0),
        i.canEdit && i.editModeEnabled ? (n(), d("td", xt, [
          ue(zt, {
            "resource-data": l.value,
            text: i.editText,
            icon: i.editIcon,
            link: B.value,
            onClick: be
          }, null, 8, ["resource-data", "text", "icon", "link"])
        ])) : v("", !0)
      ], 10, Gt);
    };
  }
}), tl = { "data-role": "hidden-row" }, ll = ["colspan"], al = ["data-column"], ol = ["data-i"], nl = ["data-column", "title", "onClick"], ul = /* @__PURE__ */ le({
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
    const s = r, o = t, u = h(o.modelValue), l = (y) => s("click", y);
    return L(() => o.modelValue, (y) => u.value = y), L(u, () => s("update:modelValue", u.value)), (y, S) => fe((n(), d("tr", tl, [
      A("td", { colspan: y.hiddenColumnsColSpan }, [
        A("table", null, [
          A("tr", null, [
            (n(!0), d(T, null, q(y.hiddenColumns, (p) => (n(), d("th", {
              "data-column": p.key
            }, [
              A("div", null, ee(p.label), 1)
            ], 8, al))), 256))
          ]),
          A("tr", { "data-i": y.i }, [
            (n(!0), d(T, null, q(y.hiddenColumns, (p, B) => (n(), d("td", {
              "data-column": p.key,
              title: f(re)(p, u.value, B, y.hiddenColumns),
              onClick: (a) => l(a, u.value)
            }, [
              y.$slots[p.key] ? M(y.$slots, p.key, {
                key: 0,
                value: u.value[p.key],
                item: u.value,
                column: p,
                i: B
              }) : (n(), g(at, {
                key: 1,
                column: p,
                columns: y.hiddenColumns,
                modelValue: u.value,
                "onUpdate:modelValue": S[0] || (S[0] = (a) => u.value = a),
                i: B
              }, null, 8, ["column", "columns", "modelValue", "i"]))
            ], 8, nl))), 256))
          ], 8, ol)
        ])
      ], 8, ll)
    ], 512)), [
      [pe, y.hiddenIsVisible]
    ]);
  }
}), _e = /* @__PURE__ */ le({
  __name: "CreateButton",
  props: {
    disabled: { type: Boolean, default: !1 },
    text: { default: "" },
    icon: { default: "" },
    to: { default: "" },
    modal: { default: "" }
  },
  emits: ["click", "append"],
  setup(t, { emit: r }) {
    const s = r, o = t, u = c(() => D.createButtonSlot !== ""), l = c(() => D.createButtonSlot), y = {
      beforeClose: (p) => {
        "itemCreated" in p && p.itemCreated === !0 && s("append", p.item);
      }
    }, S = () => {
      if (!o.modal) {
        s("click");
        return;
      }
    };
    return (p, B) => {
      const a = G("lkt-button");
      return n(), g(a, {
        palette: "table-create",
        disabled: p.disabled,
        icon: u.value ? "" : p.icon,
        text: u.value ? "" : p.text,
        modal: p.modal,
        "modal-data": y,
        "on-click-to": p.to,
        onClick: S
      }, {
        default: H(() => [
          u.value ? (n(), g(te(l.value), { key: 0 })) : v("", !0)
        ]),
        _: 1
      }, 8, ["disabled", "icon", "text", "modal", "on-click-to"]);
    };
  }
}), rl = ["data-column", "data-sortable", "data-sort", "colspan", "title"], il = /* @__PURE__ */ le({
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
    const s = r, o = t, u = c(() => Pt(o.column, o.amountOfColumns, o.items)), l = c(() => o.column.sortable === !0), y = c(() => l.value && o.sortBy === o.column.key ? o.sortDirection : ""), S = c(() => o.column.label.startsWith("__:") ? ye(o.column.label.substring(3)) : o.column.label), p = () => s("click", o.column);
    return (B, a) => (n(), d("th", {
      "data-column": B.column.key,
      "data-sortable": l.value,
      "data-sort": y.value,
      colspan: u.value,
      title: S.value,
      class: K(f(lt)(B.column)),
      onClick: p
    }, [
      A("div", null, ee(S.value), 1)
    ], 10, rl));
  }
});
var Q = /* @__PURE__ */ ((t) => (t.Table = "table", t.Item = "item", t.Ul = "ul", t.Ol = "ol", t))(Q || {}), X = /* @__PURE__ */ ((t) => (t.Create = "create", t.Update = "update", t.Edit = "edit", t.Drop = "drop", t.Sort = "sort", t.InlineEdit = "inline-edit", t.InlineCreate = "inline-create", t.ModalCreate = "modal-create", t.InlineCreateEver = "inline-create-ever", t))(X || {}), ve = /* @__PURE__ */ ((t) => (t.Asc = "asc", t.Desc = "desc", t))(ve || {});
const sl = ["id"], dl = {
  key: 0,
  class: "lkt-table-page-buttons"
}, cl = { key: 1 }, ml = { class: "switch-edition-mode" }, fl = {
  key: 1,
  class: "lkt-table-page-buttons"
}, pl = {
  key: 2,
  class: "lkt-table-page-filters"
}, vl = ["data-sortable"], yl = { key: 0 }, kl = {
  key: 0,
  "data-role": "drag-indicator"
}, bl = { key: 1 }, hl = { key: 2 }, Cl = {
  key: 3,
  class: "lkt-table-col-drop"
}, gl = {
  key: 4,
  class: "lkt-table-col-edit"
}, Sl = ["id"], Il = ["id"], Bl = ["data-i"], Dl = ["data-i"], Vl = ["data-i"], wl = {
  key: 4,
  class: "lkt-table-empty"
}, El = {
  key: 5,
  class: "lkt-table-page-buttons lkt-table-page-buttons-bottom"
}, Tl = /* @__PURE__ */ le({
  __name: "LktTable",
  props: {
    modelValue: { default: () => [] },
    type: { default: Q.Table },
    columns: { default: () => [] },
    sorter: { type: Function, default: Oe },
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
    noResultsText: { default: D.defaultNoResultsMessage },
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
    rowDisplayType: { type: [Number, Function], default: x.Auto },
    modal: { default: "" }
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
    const o = s, u = et(), l = t, y = {}, S = h(typeof l.sorter == "function" ? l.sorter : Oe), p = h(qt(l.columns)), B = h(ve.Asc), a = h(l.modelValue), R = h(y), j = h(null), N = h(l.columns), V = h(l.page), w = h(l.loading), ke = h(!1), F = h(l.perms), be = h(null), i = h(null), I = h({}), Z = h(new At({ items: a.value }, l.dataStateConfig)), k = h(l.editMode), J = h(0), De = h(null), ne = h(!1);
    L(w, (e) => o("update:loading", e)), L(V, (e) => o("page", e));
    const se = h(l.type);
    l.itemMode && se.value === Q.Table && (se.value = Q.Item);
    const ot = (e) => {
      F.value = e;
    }, nt = (e) => {
      Array.isArray(e.data) && (a.value = e.data), w.value = !1, ke.value = !0, Z.value.store({ items: a.value }).turnStoredIntoOriginal(), ne.value = !1, Re(() => {
        o("read-response", e);
      });
    }, ut = () => Re(() => w.value = !0), rt = () => {
      be.value.doRefresh();
    }, de = Ft(12), Ve = c(() => {
      if (!l.hideEmptyColumns) return [];
      let e = [];
      return N.value.forEach((m) => {
        let E = m.key, z = !1;
        a.value.forEach((O) => {
          if (typeof O.checkEmpty == "function")
            return O.checkEmpty(O);
          O[E] && (z = !0);
        }), z || e.push(E);
      }), e;
    }), he = c(() => N.value.filter((e) => !e.hidden)), we = c(() => N.value.filter((e) => e.hidden)), it = c(() => {
      let e = he.value.length + 1;
      return l.sortable && ++e, e;
    }), st = c(() => N.value.filter((e) => e.isForRowKey)), Ne = c(() => we.value.length > 0 && !l.sortable), dt = c(() => N.value.map((e) => e.key)), Le = c(() => {
      let e = [];
      for (let m in u) dt.value.indexOf(m) !== -1 && e.push(m);
      return e;
    }), Fe = c(() => l.hiddenSave || w.value || !l.saveResource ? !1 : k.value && ne.value ? !0 : k.value), ct = c(() => Se.value && a.value.length >= l.requiredItemsForTopCreate || l.switchEditionEnabled ? !0 : Fe.value || k.value && Ce.value), mt = c(() => l.saveDisabled || typeof l.saveValidator == "function" && !l.saveValidator(a.value) ? !1 : ne.value), ft = c(() => a.value.length), pt = c(() => ({
      items: a.value,
      ...l.saveResourceData
    })), vt = c(() => l.titleTag === "" ? "h2" : l.titleTag), yt = c(() => l.wrapContentTag === "" ? "div" : l.wrapContentTag), Ee = c(() => l.title.startsWith("__:") ? ye(l.title.substring(3)) : l.title), kt = c(() => l.saveText.startsWith("__:") ? ye(l.saveText.substring(3)) : l.saveText), bt = c(() => l.editModeText.startsWith("__:") ? ye(l.editModeText.substring(3)) : l.editModeText), Ce = c(() => F.value.includes(X.Create)), Te = c(() => F.value.includes("read")), ce = c(() => F.value.includes(X.Update)), Ae = c(() => F.value.includes(X.Edit)), ht = c(() => F.value.includes(X.InlineEdit)), Ct = c(() => F.value.includes(X.ModalCreate)), gt = c(() => F.value.includes(X.InlineCreate)), Ue = c(() => F.value.includes(X.InlineCreateEver)), me = c(() => F.value.includes(X.Drop)), St = (e) => {
      let m = e.target;
      if (typeof m.dataset.column > "u")
        do
          m = m.parentNode;
        while (typeof m.dataset.column > "u" && m.tagName !== "TABLE" && m.tagName !== "body");
      if (m.tagName === "TD" && (m = m.parentNode, m = m.dataset.i, typeof m < "u"))
        return a.value[m];
    }, It = (e) => a.value[e], Bt = (e) => {
      var m;
      return (m = j.value) == null ? void 0 : m.querySelector(`[data-i="${e}"]`);
    }, Pe = (e) => R.value["tr_" + e] === !0, He = (e) => {
      e && e.sortable && (a.value = a.value.sort((m, E) => S.value(m, E, e, B.value)), B.value = B.value === ve.Asc ? ve.Desc : ve.Asc, p.value = e.key, o("sort", [p.value, B.value]));
    }, We = (e) => {
      o("click", e);
    }, qe = (e, m) => {
      let E = "tr_" + m;
      R.value[E] = typeof R.value[E] > "u" ? !0 : !R.value[E];
    }, Dt = (e) => typeof l.checkValidDrag == "function" ? l.checkValidDrag(e) : !0, Ke = (e) => typeof l.draggableChecker == "function" ? l.draggableChecker(e) : !0, je = () => {
      if (Ue.value)
        o("click-create");
      else {
        if (typeof l.newValueGenerator == "function") {
          let e = l.newValueGenerator();
          if (typeof e == "object" || se.value !== Q.Table) {
            a.value.push(e);
            return;
          }
        }
        a.value.push({});
      }
    }, ze = (e) => {
      a.value.push(e);
    }, Vt = () => {
      w.value = !0;
    }, wt = () => {
      w.value = !1;
    }, Et = (e, m) => {
      if (o("before-save"), l.saveResource && (w.value = !1, !m.success)) {
        o("error", m.httpStatus);
        return;
      }
      Z.value.turnStoredIntoOriginal(), ne.value = !1, o("save", m);
    }, Ge = (e, m, E) => {
      if (E >= e.length) {
        let z = E - e.length + 1;
        for (; z--; ) e.push(void 0);
      }
      return e.splice(E, 0, e.splice(m, 1)[0]), e;
    }, Tt = (e) => {
      Ge(a.value, e, e - 1), J.value = Be();
    }, $t = (e) => {
      Ge(a.value, e, e + 1), J.value = Be();
    }, ge = (e) => {
      a.value.splice(e, 1), J.value = Be();
    }, Rt = () => {
      I.value && (I.value.destroy(), I.value = {});
    }, Je = () => {
      De.value || (De.value = document.getElementById("lkt-table-body-" + de)), I.value = new Ut(De.value, {
        direction: "vertical",
        handle: ".handle",
        animation: 150,
        onEnd: function(e) {
          let m = e.oldIndex, E = e.newIndex;
          a.value.splice(E, 0, a.value.splice(m, 1)[0]), J.value = Be(), o("drag-end");
        },
        onMove: function(e, m) {
          return Dt(e);
        }
      });
    }, $e = (e, m, E = !1) => {
      let z = [J.value, de, "row", m];
      return E && z.push("hidden"), st.value.forEach((O) => {
        let _ = String(e[O.key]).toLowerCase();
        _.length > 50 && (_ = _.substring(0, 50)), _ = tt(_, " ", "-"), z.push(_);
      }), z.join("-");
    }, Qe = c(() => typeof l.createEnabledValidator == "function" ? l.createEnabledValidator({ items: a.value }) : !0), Se = c(() => Ue.value || gt.value && k.value || Ct.value && k.value), Ie = (e, m) => typeof l.itemDisplayChecker == "function" ? l.itemDisplayChecker(e) : !0;
    Lt(() => {
      l.initialSorting && He(Kt(l.columns, p.value)), Z.value.store({ items: a.value }).turnStoredIntoOriginal(), ne.value = !1, l.sortable && Re(() => {
        Je();
      });
    }), L(() => l.sortable, (e) => {
      e ? Je() : Rt();
    }), L(() => l.perms, (e) => F.value = e), L(F, (e) => o("update:perms", e)), L(() => l.editMode, (e) => k.value = e), L(() => l.columns, (e) => N.value = e, { deep: !0 }), L(() => l.modelValue, (e) => a.value = e, { deep: !0 }), L(a, (e) => {
      Z.value.increment({ items: e }), ne.value = Z.value.changed(), o("update:modelValue", e);
    }, { deep: !0 }), r({
      getItemByEvent: St,
      getItemByIndex: It,
      getRowByIndex: Bt,
      doRefresh: rt,
      getHtml: () => i.value
    });
    const Mt = c(() => typeof D.defaultEmptySlot < "u"), Nt = c(() => D.defaultEmptySlot);
    return (e, m) => {
      const E = G("lkt-button"), z = G("lkt-field"), O = G("lkt-loader"), _ = G("lkt-paginator");
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
          Ee.value ? (n(), g(te(vt.value), { key: 0 }, {
            default: H(() => [
              e.titleIcon ? (n(), d("i", {
                key: 0,
                class: K(e.titleIcon)
              }, null, 2)) : v("", !0),
              ie(" " + ee(Ee.value), 1)
            ]),
            _: 1
          })) : v("", !0),
          f(u).title ? M(e.$slots, "title", { key: 1 }) : v("", !0)
        ], 2)) : v("", !0),
        (n(), g(te(yt.value), {
          class: K(["lkt-table-page-content-wrapper", e.wrapContentClass])
        }, {
          default: H(() => [
            ct.value ? (n(), d("div", dl, [
              fe(ue(E, {
                class: "lkt-table--save-button",
                ref: "saveButton",
                icon: f(D).defaultSaveIcon,
                disabled: !mt.value,
                "confirm-modal": e.saveConfirm,
                "confirm-data": e.confirmData,
                resource: e.saveResource,
                "resource-data": pt.value,
                onLoading: Vt,
                onLoaded: wt,
                onClick: Et
              }, {
                default: H(() => [
                  f(u)["button-save"] ? M(e.$slots, "button-save", {
                    key: 0,
                    items: a.value,
                    editMode: e.editMode,
                    canUpdate: !e.saveDisabled
                  }) : (n(), d("span", cl, ee(kt.value), 1))
                ]),
                _: 3
              }, 8, ["icon", "disabled", "confirm-modal", "confirm-data", "resource", "resource-data"]), [
                [pe, Fe.value]
              ]),
              Se.value && a.value.length >= e.requiredItemsForTopCreate ? (n(), g(_e, {
                key: 0,
                disabled: !Qe.value || e.createDisabled,
                text: e.createText,
                icon: e.createIcon,
                to: e.createRoute,
                modal: e.modal,
                onClick: je,
                onAppend: ze
              }, null, 8, ["disabled", "text", "icon", "to", "modal"])) : v("", !0),
              A("div", ml, [
                fe(ue(z, {
                  type: "switch",
                  modelValue: k.value,
                  "onUpdate:modelValue": m[0] || (m[0] = (C) => k.value = C),
                  label: bt.value
                }, null, 8, ["modelValue", "label"]), [
                  [pe, e.switchEditionEnabled]
                ])
              ])
            ])) : v("", !0),
            f(u).buttons ? (n(), d("div", fl, [
              M(e.$slots, "buttons")
            ])) : v("", !0),
            ke.value && f(u).filters ? (n(), d("div", pl, [
              M(e.$slots, "filters", {
                items: a.value,
                isLoading: w.value
              })
            ])) : v("", !0),
            w.value ? (n(), g(O, { key: 3 })) : v("", !0),
            fe(A("div", {
              class: "lkt-table",
              "data-sortable": e.sortable
            }, [
              se.value === f(Q).Table ? (n(), d("table", yl, [
                A("thead", null, [
                  A("tr", null, [
                    e.sortable && k.value ? (n(), d("th", kl)) : v("", !0),
                    e.addNavigation && k.value ? (n(), d("th", bl)) : v("", !0),
                    Ne.value ? (n(), d("th", hl)) : v("", !0),
                    (n(!0), d(T, null, q(he.value, (C) => (n(), d(T, null, [
                      Ve.value.indexOf(C.key) === -1 ? (n(), g(il, {
                        key: 0,
                        column: C,
                        "sort-by": p.value,
                        "sort-direction": B.value,
                        "amount-of-columns": e.columns.length,
                        items: a.value,
                        onClick: (b) => He(C)
                      }, null, 8, ["column", "sort-by", "sort-direction", "amount-of-columns", "items", "onClick"])) : v("", !0)
                    ], 64))), 256)),
                    me.value && k.value ? (n(), d("th", Cl)) : v("", !0),
                    Ae.value && ce.value && k.value ? (n(), d("th", gl)) : v("", !0)
                  ])
                ]),
                A("tbody", {
                  ref_key: "tableBody",
                  ref: j,
                  id: "lkt-table-body-" + f(de)
                }, [
                  (n(!0), d(T, null, q(a.value, (C, b) => fe((n(), g(el, {
                    modelValue: a.value[b],
                    "onUpdate:modelValue": (P) => a.value[b] = P,
                    key: $e(C, b),
                    i: b,
                    "display-hidden-columns-indicator": Ne.value,
                    "is-draggable": Ke(C),
                    sortable: e.sortable,
                    "visible-columns": he.value,
                    "empty-columns": Ve.value,
                    "add-navigation": e.addNavigation,
                    "hidden-is-visible": Pe(b),
                    "latest-row": b + 1 === ft.value,
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
                    "has-inline-edit-perm": ht.value,
                    "row-display-type": e.rowDisplayType,
                    onClick: We,
                    onShow: qe,
                    onItemUp: Tt,
                    onItemDown: $t,
                    onItemDrop: ge
                  }, Ye({ _: 2 }, [
                    f(u)[`item-${b}`] ? {
                      name: `item-${b}`,
                      fn: H((P) => [
                        M(e.$slots, `item-${b}`, oe({
                          [e.slotItemVar || ""]: P.item,
                          index: b
                        }))
                      ]),
                      key: "0"
                    } : f(u).item ? {
                      name: "item",
                      fn: H((P) => [
                        M(e.$slots, "item", oe({
                          [e.slotItemVar || ""]: P.item,
                          index: b
                        }))
                      ]),
                      key: "1"
                    } : void 0,
                    q(Le.value, (P) => ({
                      name: P,
                      fn: H((ae) => [
                        M(e.$slots, P, oe({
                          [e.slotItemVar || ""]: ae.item,
                          value: ae.value,
                          column: ae.column
                        }))
                      ])
                    }))
                  ]), 1032, ["modelValue", "onUpdate:modelValue", "i", "display-hidden-columns-indicator", "is-draggable", "sortable", "visible-columns", "empty-columns", "add-navigation", "hidden-is-visible", "latest-row", "can-drop", "drop-confirm", "drop-resource", "drop-text", "drop-icon", "can-edit", "edit-text", "edit-icon", "edit-link", "edit-mode-enabled", "has-inline-edit-perm", "row-display-type"])), [
                    [pe, Ie(a.value[b])]
                  ])), 128)),
                  we.value.length > 0 ? (n(!0), d(T, { key: 0 }, q(a.value, (C, b) => (n(), g(ul, {
                    modelValue: a.value[b],
                    "onUpdate:modelValue": (P) => a.value[b] = P,
                    key: $e(C, b, !0),
                    i: b,
                    "hidden-columns": we.value,
                    "hidden-columns-col-span": it.value,
                    "is-draggable": Ke(C),
                    sortable: e.sortable,
                    "visible-columns": he.value,
                    "empty-columns": Ve.value,
                    "hidden-is-visible": Pe(b),
                    onClick: We,
                    onShow: qe
                  }, Ye({ _: 2 }, [
                    q(Le.value, (P) => ({
                      name: P,
                      fn: H((ae) => [
                        M(e.$slots, P, oe({
                          [e.slotItemVar || ""]: ae.item,
                          value: ae.value,
                          column: ae.column
                        }))
                      ])
                    }))
                  ]), 1032, ["modelValue", "onUpdate:modelValue", "i", "hidden-columns", "hidden-columns-col-span", "is-draggable", "sortable", "visible-columns", "empty-columns", "hidden-is-visible"]))), 128)) : v("", !0)
                ], 8, Sl)
              ])) : se.value === f(Q).Item ? (n(), d("div", {
                key: 1,
                ref_key: "tableBody",
                ref: j,
                id: "lkt-table-body-" + f(de),
                class: K(["lkt-table-items-container", e.itemsContainerClass])
              }, [
                (n(!0), d(T, null, q(a.value, (C, b) => (n(), d(T, null, [
                  Ie(C) ? (n(), d("div", {
                    class: "lkt-table-item",
                    "data-i": b,
                    key: $e(C, b)
                  }, [
                    M(e.$slots, "item", oe({
                      [e.slotItemVar || ""]: C,
                      index: b,
                      editing: k.value,
                      canCreate: Ce.value,
                      canRead: Te.value,
                      canUpdate: ce.value,
                      canDrop: me.value,
                      isLoading: w.value,
                      doDrop: () => ge(b)
                    }))
                  ], 8, Bl)) : v("", !0)
                ], 64))), 256))
              ], 10, Il)) : f(Q).Ul ? (n(), d("ul", {
                key: 2,
                class: K(["lkt-table-items-container", e.itemsContainerClass])
              }, [
                (n(!0), d(T, null, q(a.value, (C, b) => (n(), d(T, null, [
                  Ie(C) ? (n(), d("li", {
                    key: 0,
                    class: "lkt-table-item",
                    "data-i": b
                  }, [
                    M(e.$slots, "item", oe({
                      [e.slotItemVar || ""]: C,
                      index: b,
                      editing: k.value,
                      canCreate: Ce.value,
                      canRead: Te.value,
                      canUpdate: ce.value,
                      canDrop: me.value,
                      isLoading: w.value,
                      doDrop: () => ge(b)
                    }))
                  ], 8, Dl)) : v("", !0)
                ], 64))), 256))
              ], 2)) : f(Q).Ul ? (n(), d("ol", {
                key: 3,
                class: K(["lkt-table-items-container", e.itemsContainerClass])
              }, [
                (n(!0), d(T, null, q(a.value, (C, b) => (n(), d(T, null, [
                  Ie(C) ? (n(), d("li", {
                    key: 0,
                    class: "lkt-table-item",
                    "data-i": b
                  }, [
                    M(e.$slots, "item", oe({
                      [e.slotItemVar || ""]: C,
                      index: b,
                      editing: k.value,
                      canCreate: Ce.value,
                      canRead: Te.value,
                      canUpdate: ce.value,
                      canDrop: me.value,
                      isLoading: w.value,
                      doDrop: () => ge(b)
                    }))
                  ], 8, Vl)) : v("", !0)
                ], 64))), 256))
              ], 2)) : v("", !0)
            ], 8, vl), [
              [pe, !w.value && a.value.length > 0]
            ]),
            !w.value && a.value.length === 0 ? (n(), d("div", wl, [
              f(u).empty ? M(e.$slots, "empty", { key: 0 }) : Mt.value ? (n(), g(te(Nt.value), {
                key: 1,
                message: e.noResultsText
              }, null, 8, ["message"])) : e.noResultsText ? (n(), d(T, { key: 2 }, [
                ie(ee(e.noResultsText), 1)
              ], 64)) : v("", !0)
            ])) : v("", !0),
            Se.value || f(u).bottomButtons ? (n(), d("div", El, [
              Se.value && a.value.length >= e.requiredItemsForBottomCreate ? (n(), g(_e, {
                key: 0,
                disabled: !Qe.value || e.createDisabled,
                text: e.createText,
                icon: e.createIcon,
                to: e.createRoute,
                modal: e.modal,
                onClick: je,
                onAppend: ze
              }, null, 8, ["disabled", "text", "icon", "to", "modal"])) : v("", !0),
              M(e.$slots, "bottom-buttons")
            ])) : v("", !0),
            e.resource.length > 0 ? (n(), g(_, {
              key: 6,
              ref_key: "paginator",
              ref: be,
              modelValue: V.value,
              "onUpdate:modelValue": m[1] || (m[1] = (C) => V.value = C),
              resource: e.resource,
              filters: e.filters,
              onLoading: ut,
              onPerms: ot,
              onResponse: nt
            }, null, 8, ["modelValue", "resource", "filters"])) : v("", !0)
          ]),
          _: 3
        }, 8, ["class"]))
      ], 8, sl);
    };
  }
}), Zl = {
  install: (t) => {
    t.component("lkt-table") === void 0 && t.component("lkt-table", Tl);
  }
}, Ol = (t) => (D.navButtonSlot = t, !0), _l = (t) => (D.dropButtonSlot = t, !0), xl = (t) => (D.createButtonSlot = t, !0), ea = (t) => {
  D.defaultEmptySlot = t;
}, ta = (t) => {
  D.defaultSaveIcon = t;
};
export {
  U as Column,
  Hl as createActionColumn,
  Gl as createCheckColumn,
  Ul as createColumn,
  jl as createEmailColumn,
  Xl as createFileColumn,
  Kl as createFloatColumn,
  Yl as createHiddenColumn,
  ql as createIntegerColumn,
  Pl as createLinkColumn,
  Ql as createSelectColumn,
  Jl as createSwitchColumn,
  zl as createTelColumn,
  Wl as createTextColumn,
  Zl as default,
  xl as setTableCreateButtonSlot,
  _l as setTableDropButtonSlot,
  ea as setTableEmptySlot,
  Ol as setTableNavButtonSlot,
  ta as setTableSaveIcon
};
