import { reactive as q, defineComponent as te, ref as b, watch as F, computed as c, resolveComponent as J, unref as f, openBlock as n, createBlock as g, withCtx as W, createTextVNode as ie, toDisplayString as x, createElementBlock as s, mergeProps as Xe, Fragment as $, withModifiers as xe, resolveDynamicComponent as ee, createCommentVNode as v, useSlots as et, normalizeClass as j, createElementVNode as U, createVNode as ue, renderSlot as N, renderList as K, withDirectives as pe, vShow as ve, onMounted as Lt, nextTick as Re, createSlots as Ye, normalizeProps as oe } from "vue";
import { Field as Ze } from "lkt-field";
import { __ as ke } from "lkt-i18n";
import { replaceAll as tt, generateRandomString as Ft } from "lkt-string-tools";
import { DataState as At } from "lkt-data-state";
import Ut from "sortablejs";
import { time as Be } from "lkt-date-tools";
var R = /* @__PURE__ */ ((t) => (t.Text = "text", t.Number = "number", t.Check = "check", t.Switch = "switch", t.Select = "select", t.Email = "email", t.Tel = "tel", t.File = "file", t.Link = "link", t.Action = "action", t.Integer = "int", t.Float = "float", t.None = "", t))(R || {});
class P {
  constructor(r = {}) {
    this.key = "", this.label = "", this.sortable = !0, this.hidden = !1, this.editable = !1, this.formatter = void 0, this.checkEmpty = void 0, this.colspan = void 0, this.preferSlot = !0, this.type = R.None, this.link = "", this.action = void 0, this.isForRowKey = !1, this.extractTitleFromColumn = "", this.slotData = {}, this.field = new Ze();
    for (let d in r)
      this[d] = r[d];
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
const Ul = (t) => q(new P(t)), Pl = (t, r, d, o = !0) => q(new P({ key: t, label: r, sortable: o, type: R.Link, link: d })), Hl = (t, r, d, o = !0) => q(new P({ key: t, label: r, sortable: o, type: R.Action, action: d })), Wl = (t, r, d = !0) => q(new P({ key: t, label: r, type: R.Text, sortable: d })), ql = (t, r, d = !0) => q(new P({ key: t, label: r, type: R.Number, sortable: d })), Kl = (t, r, d = !0) => q(new P({ key: t, label: r, type: R.Number, sortable: d })), jl = (t, r, d = !0) => q(new P({ key: t, label: r, type: R.Email, sortable: d })), zl = (t, r, d = !0) => q(new P({ key: t, label: r, type: R.Tel, sortable: d })), Gl = (t, r, d = !0) => q(new P({ key: t, label: r, type: R.Check, sortable: d })), Jl = (t, r, d = !0) => q(new P({ key: t, label: r, type: R.Switch, sortable: d })), Ql = (t, r, d, o = !0) => q(new P({ key: t, label: r, type: R.Select, sortable: o })), Xl = (t, r, d = !0) => q(new P({ key: t, label: r, type: R.File, sortable: d })), Yl = (t, r, d = !0) => q(new P({ key: t, label: r, sortable: d, hidden: !0 })), Oe = (t, r, d, o) => {
  if (!d) return 0;
  let u = t[d.key], l = r[d.key];
  if (o === "asc") {
    if (u > l) return 1;
    if (l > u) return -1;
  } else {
    if (u > l) return -1;
    if (l > u) return 1;
  }
  return 0;
}, re = (t, r, d, o = []) => {
  if (t.extractTitleFromColumn) {
    let u = o.find((l) => l.key === t.extractTitleFromColumn);
    if (u)
      return re(u, r, d, o);
  }
  if (t.formatter && typeof t.formatter == "function") {
    let u = t.formatter(r[t.key], r, t, d);
    return u.startsWith("__:") ? ke(u.substring(3)) : u;
  }
  return r[t.key];
}, Pt = (t, r, d) => {
  if (!t.colspan) return -1;
  let o = r;
  return d.forEach((u) => {
    let l = Me(t, u);
    l > 0 && l < o && (o = l);
  }), o;
}, Me = (t, r) => t.colspan === !1 ? !1 : typeof t.colspan == "function" ? t.colspan(r) : t.colspan, Ht = (t, r) => typeof t.preferSlot > "u" ? !0 : t.preferSlot === !1 ? !1 : typeof t.preferSlot == "function" ? t.preferSlot(r) : !0, Wt = (t, r, d) => {
  if (typeof t != "object" || !t.key || r.indexOf(t.key) > -1) return !1;
  let o = Me(t, d);
  return typeof t.colspan > "u" ? !0 : (typeof t.colspan < "u" && (typeof t.colspan == "function" ? o = parseInt(t.colspan(d)) : o = parseInt(t.colspan)), o > 0);
}, qt = (t = []) => {
  if (t.length > 0) {
    for (let r = 0; r < t.length; ++r)
      if (t[r].sortable) return t[r].key;
  }
  return "";
}, Kt = (t, r) => {
  if (t.length > 0) {
    for (let d = 0; d < t.length; ++d)
      if (t[d].key === r) return t[d];
  }
  return null;
}, lt = (t) => t.type ? `is-${t.type}` : "", at = /* @__PURE__ */ te({
  __name: "LktTableCell",
  props: {
    modelValue: { default: () => ({}) },
    column: { default: () => new P() },
    columns: { default: () => [] },
    i: { default: 0 },
    editModeEnabled: { type: Boolean, default: !1 },
    hasInlineEditPerm: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: r }) {
    const d = r, o = t, u = b(o.modelValue), l = b(u.value[o.column.key]), y = b(null);
    let S = o.column.type;
    [R.Integer, R.Float].includes(S) && (S = R.Number), F(l, (a) => {
      const M = JSON.parse(JSON.stringify(u.value));
      M[o.column.key] = a, d("update:modelValue", M);
    }), F(() => o.modelValue, (a) => {
      u.value = a, l.value = u.value[o.column.key];
    });
    const p = c(() => ({ ...o.column.slotData, item: u.value })), D = c(() => {
      var a, M, z, L;
      if ((a = o.column.field) != null && a.modalData && typeof ((M = o.column.field) == null ? void 0 : M.modalData) == "object")
        for (let w in o.column.field.modalData)
          if (typeof ((z = o.column.field) == null ? void 0 : z.modalData[w]) == "string" && o.column.field.modalData[w].startsWith("prop:")) {
            let E = o.column.field.modalData[w].substring(5);
            u.value[E];
          } else
            o.column.field.modalData[w];
      return (L = o.column.field) == null ? void 0 : L.modalData;
    });
    return (a, M) => {
      const z = J("lkt-anchor"), L = J("lkt-field");
      return a.column.type === f(R).Link ? (n(), g(z, {
        key: 0,
        to: a.column.getHref(u.value)
      }, {
        default: W(() => [
          ie(x(f(re)(a.column, u.value, a.i)), 1)
        ]),
        _: 1
      }, 8, ["to"])) : a.column.type === f(R).Action ? (n(), s("a", {
        key: 1,
        href: "#",
        onClick: M[0] || (M[0] = (w) => a.column.doAction(u.value))
      }, x(f(re)(a.column, u.value, a.i)), 1)) : a.column.type !== "" && a.hasInlineEditPerm ? (n(), g(L, Xe({ key: 2 }, a.column.field, {
        type: f(S),
        "read-mode": !a.column.editable || !a.editModeEnabled,
        ref: (w) => y.value = w,
        "slot-data": p.value,
        label: a.column.type === "switch" || a.column.type === "check" ? a.column.label : "",
        "modal-data": D.value,
        prop: u.value,
        modelValue: l.value,
        "onUpdate:modelValue": M[1] || (M[1] = (w) => l.value = w)
      }), null, 16, ["type", "read-mode", "slot-data", "label", "modal-data", "prop", "modelValue"])) : a.column.type !== "" ? (n(), g(L, Xe({ key: 3 }, a.column.field, {
        type: f(S),
        "read-mode": "",
        ref: (w) => y.value = w,
        "slot-data": p.value,
        label: a.column.type === "switch" || a.column.type === "check" ? a.column.label : "",
        "modal-data": D.value,
        prop: u.value,
        "model-value": l.value
      }), null, 16, ["type", "slot-data", "label", "modal-data", "prop", "model-value"])) : (n(), s($, { key: 4 }, [
        ie(x(f(re)(a.column, u.value, a.i, a.columns)), 1)
      ], 64));
    };
  }
}), Y = class Y {
};
Y.navButtonSlot = "", Y.dropButtonSlot = "", Y.editButtonSlot = "", Y.createButtonSlot = "", Y.defaultEmptySlot = void 0, Y.defaultSaveIcon = "", Y.defaultNoResultsMessage = "No results";
let V = Y;
const jt = /* @__PURE__ */ te({
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
    const d = r, o = c(() => V.dropButtonSlot !== ""), u = c(() => V.dropButtonSlot);
    return (l, y) => {
      const S = J("lkt-button");
      return n(), g(S, {
        palette: "table-delete",
        icon: o.value ? "" : l.icon,
        text: o.value ? "" : l.text,
        resource: l.resource,
        "resource-data": l.resourceData,
        "confirm-modal": l.confirm,
        disabled: l.disabled,
        onClick: y[0] || (y[0] = xe((p) => d("click"), ["prevent", "stop"]))
      }, {
        default: W(() => [
          o.value ? (n(), g(ee(u.value), { key: 0 })) : v("", !0)
        ]),
        _: 1
      }, 8, ["icon", "text", "resource", "resource-data", "confirm-modal", "disabled"]);
    };
  }
}), zt = /* @__PURE__ */ te({
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
    const d = r, o = c(() => V.editButtonSlot !== ""), u = c(() => V.editButtonSlot);
    return (l, y) => {
      const S = J("lkt-button");
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
        onClick: y[0] || (y[0] = xe((p) => d("click"), ["prevent", "stop"]))
      }, {
        default: W(() => [
          o.value ? (n(), g(ee(u.value), { key: 0 })) : v("", !0)
        ]),
        _: 1
      }, 8, ["icon", "text", "on-click-to", "is-anchor", "resource", "resource-data", "confirm-modal", "disabled"]);
    };
  }
});
var _ = /* @__PURE__ */ ((t) => (t[t.Auto = 0] = "Auto", t[t.PreferItem = 1] = "PreferItem", t[t.PreferCustomItem = 2] = "PreferCustomItem", t[t.PreferColumns = 3] = "PreferColumns", t))(_ || {});
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
}, el = /* @__PURE__ */ te({
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
    rowDisplayType: { type: [Number, Function], default: _.Auto },
    renderDrag: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "click", "show", "item-up", "item-down", "item-drop"],
  setup(t, { emit: r }) {
    const d = et(), o = r, u = t, l = b(u.modelValue);
    let y = typeof u.rowDisplayType == "function" ? u.rowDisplayType(l.value, u.i) : u.rowDisplayType;
    y || (y = _.Auto);
    const S = [_.Auto, _.PreferCustomItem].includes(y), p = [_.Auto, _.PreferItem].includes(y), D = b(u.editLink);
    for (let i in l.value) D.value = tt(D.value, ":" + i, l.value[i]);
    const a = (i) => o("click", i), M = (i, C) => {
      o("show", i, C);
    }, z = c(() => {
      let i = [];
      return u.sortable && u.isDraggable && i.push("handle"), i.join(" ");
    }), L = c(() => V.navButtonSlot !== ""), w = c(() => V.navButtonSlot), E = () => {
      o("item-up", u.i);
    }, be = () => {
      o("item-down", u.i);
    }, A = () => {
      o("item-drop", u.i);
    }, he = () => {
    };
    F(() => u.modelValue, (i) => l.value = i), F(l, (i) => {
      o("update:modelValue", i);
    }, { deep: !0 });
    const de = c(() => typeof u.renderDrag == "function" ? u.renderDrag(l.value) : u.renderDrag === !0);
    return (i, C) => {
      const I = J("lkt-button");
      return n(), s("tr", {
        "data-i": i.i,
        "data-draggable": i.isDraggable,
        class: j({ "type-custom-item": f(S), "type-item": f(p) })
      }, [
        i.sortable && i.isDraggable && i.editModeEnabled && de.value ? (n(), s("td", {
          key: 0,
          "data-role": "drag-indicator",
          class: j(z.value)
        }, null, 2)) : i.sortable && i.editModeEnabled && de.value ? (n(), s("td", Jt)) : v("", !0),
        i.addNavigation && i.editModeEnabled ? (n(), s("td", Qt, [
          U("div", Xt, [
            ue(I, {
              palette: "table-nav",
              disabled: i.i === 0,
              onClick: E
            }, {
              default: W(() => [
                L.value ? (n(), g(ee(w.value), {
                  key: 0,
                  direction: "up"
                })) : (n(), s($, { key: 1 }, [
                  C[3] || (C[3] = U("i", { class: "" }, null, -1)),
                  C[4] || (C[4] = ie(" UP "))
                ], 64))
              ]),
              _: 1
            }, 8, ["disabled"]),
            ue(I, {
              palette: "table-nav",
              disabled: i.latestRow,
              onClick: be
            }, {
              default: W(() => [
                L.value ? (n(), g(ee(w.value), {
                  key: 0,
                  direction: "down"
                })) : (n(), s($, { key: 1 }, [
                  C[5] || (C[5] = U("i", { class: "" }, null, -1)),
                  C[6] || (C[6] = ie(" DOWN "))
                ], 64))
              ]),
              _: 1
            }, 8, ["disabled"])
          ])
        ])) : v("", !0),
        i.displayHiddenColumnsIndicator ? (n(), s("td", {
          key: 3,
          onClick: C[0] || (C[0] = (B) => M(B, i.i)),
          "data-role": "show-more",
          class: j(i.hiddenIsVisible ? "state-open" : "")
        }, null, 2)) : v("", !0),
        f(S) && f(d)[`item-${i.i}`] ? (n(), s("td", {
          key: "td" + i.i,
          colspan: i.visibleColumns.length
        }, [
          N(i.$slots, `item-${i.i}`, {
            item: l.value,
            index: i.i
          })
        ], 8, Yt)) : f(p) && f(d).item ? (n(), s("td", {
          key: "td" + i.i,
          colspan: i.visibleColumns.length
        }, [
          N(i.$slots, "item", {
            item: l.value,
            index: i.i
          })
        ], 8, Zt)) : (n(!0), s($, { key: 6 }, K(i.visibleColumns, (B) => (n(), s($, null, [
          f(Wt)(B, i.emptyColumns, l.value) ? (n(), s("td", {
            key: "td" + i.i,
            "data-column": B.key,
            colspan: f(Me)(B, l.value),
            title: f(re)(B, l.value, i.i, i.visibleColumns),
            class: j(f(lt)(B)),
            onClick: C[2] || (C[2] = (le) => a(le))
          }, [
            i.$slots[B.key] && f(Ht)(B, l.value) ? N(i.$slots, B.key, {
              key: 0,
              value: l.value[B.key],
              item: l.value,
              column: B,
              i: i.i
            }) : l.value ? (n(), g(at, {
              key: 1,
              modelValue: l.value,
              "onUpdate:modelValue": C[1] || (C[1] = (le) => l.value = le),
              column: B,
              columns: i.visibleColumns,
              "edit-mode-enabled": i.editModeEnabled,
              "has-inline-edit-perm": i.hasInlineEditPerm,
              i: i.i
            }, null, 8, ["modelValue", "column", "columns", "edit-mode-enabled", "has-inline-edit-perm", "i"])) : v("", !0)
          ], 10, Ot)) : v("", !0)
        ], 64))), 256)),
        i.canDrop && i.editModeEnabled ? (n(), s("td", _t, [
          ue(jt, {
            resource: i.dropResource,
            "resource-data": l.value,
            confirm: i.dropConfirm,
            text: i.dropText,
            icon: i.dropIcon,
            onClick: A
          }, null, 8, ["resource", "resource-data", "confirm", "text", "icon"])
        ])) : v("", !0),
        i.canEdit && i.editModeEnabled ? (n(), s("td", xt, [
          ue(zt, {
            "resource-data": l.value,
            text: i.editText,
            icon: i.editIcon,
            link: D.value,
            onClick: he
          }, null, 8, ["resource-data", "text", "icon", "link"])
        ])) : v("", !0)
      ], 10, Gt);
    };
  }
}), tl = { "data-role": "hidden-row" }, ll = ["colspan"], al = ["data-column"], ol = ["data-i"], nl = ["data-column", "title", "onClick"], ul = /* @__PURE__ */ te({
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
    const d = r, o = t, u = b(o.modelValue), l = (y) => d("click", y);
    return F(() => o.modelValue, (y) => u.value = y), F(u, () => d("update:modelValue", u.value)), (y, S) => pe((n(), s("tr", tl, [
      U("td", { colspan: y.hiddenColumnsColSpan }, [
        U("table", null, [
          U("tr", null, [
            (n(!0), s($, null, K(y.hiddenColumns, (p) => (n(), s("th", {
              "data-column": p.key
            }, [
              U("div", null, x(p.label), 1)
            ], 8, al))), 256))
          ]),
          U("tr", { "data-i": y.i }, [
            (n(!0), s($, null, K(y.hiddenColumns, (p, D) => (n(), s("td", {
              "data-column": p.key,
              title: f(re)(p, u.value, D, y.hiddenColumns),
              onClick: (a) => l(a, u.value)
            }, [
              y.$slots[p.key] ? N(y.$slots, p.key, {
                key: 0,
                value: u.value[p.key],
                item: u.value,
                column: p,
                i: D
              }) : (n(), g(at, {
                key: 1,
                column: p,
                columns: y.hiddenColumns,
                modelValue: u.value,
                "onUpdate:modelValue": S[0] || (S[0] = (a) => u.value = a),
                i: D
              }, null, 8, ["column", "columns", "modelValue", "i"]))
            ], 8, nl))), 256))
          ], 8, ol)
        ])
      ], 8, ll)
    ], 512)), [
      [ve, y.hiddenIsVisible]
    ]);
  }
}), _e = /* @__PURE__ */ te({
  __name: "CreateButton",
  props: {
    disabled: { type: Boolean, default: !1 },
    text: { default: "" },
    icon: { default: "" },
    to: { default: "" },
    modal: { default: "" },
    modalData: {}
  },
  emits: ["click", "append"],
  setup(t, { emit: r }) {
    const d = r, o = t, u = c(() => V.createButtonSlot !== ""), l = c(() => V.createButtonSlot), y = {
      ...o.modalData,
      beforeClose: (p) => {
        "itemCreated" in p && p.itemCreated === !0 && d("append", p.item);
      }
    }, S = () => {
      if (!o.modal) {
        d("click");
        return;
      }
    };
    return (p, D) => {
      const a = J("lkt-button");
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
        default: W(() => [
          u.value ? (n(), g(ee(l.value), { key: 0 })) : v("", !0)
        ]),
        _: 1
      }, 8, ["disabled", "icon", "text", "modal", "on-click-to"]);
    };
  }
}), rl = ["data-column", "data-sortable", "data-sort", "colspan", "title"], il = /* @__PURE__ */ te({
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
    const d = r, o = t, u = c(() => Pt(o.column, o.amountOfColumns, o.items)), l = c(() => o.column.sortable === !0), y = c(() => l.value && o.sortBy === o.column.key ? o.sortDirection : ""), S = c(() => o.column.label.startsWith("__:") ? ke(o.column.label.substring(3)) : o.column.label), p = () => d("click", o.column);
    return (D, a) => (n(), s("th", {
      "data-column": D.column.key,
      "data-sortable": l.value,
      "data-sort": y.value,
      colspan: u.value,
      title: S.value,
      class: j(f(lt)(D.column)),
      onClick: p
    }, [
      U("div", null, x(S.value), 1)
    ], 10, rl));
  }
});
var Q = /* @__PURE__ */ ((t) => (t.Table = "table", t.Item = "item", t.Ul = "ul", t.Ol = "ol", t))(Q || {}), X = /* @__PURE__ */ ((t) => (t.Create = "create", t.Update = "update", t.Edit = "edit", t.Drop = "drop", t.Sort = "sort", t.InlineEdit = "inline-edit", t.InlineCreate = "inline-create", t.ModalCreate = "modal-create", t.InlineCreateEver = "inline-create-ever", t))(X || {}), ye = /* @__PURE__ */ ((t) => (t.Asc = "asc", t.Desc = "desc", t))(ye || {});
const dl = ["id"], sl = {
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
}, bl = { key: 1 }, hl = { key: 2 }, gl = {
  key: 3,
  class: "lkt-table-col-drop"
}, Cl = {
  key: 4,
  class: "lkt-table-col-edit"
}, Sl = ["id"], Il = ["id"], Dl = ["data-i"], Bl = ["data-i"], Vl = ["data-i"], wl = {
  key: 4,
  class: "lkt-table-empty"
}, El = {
  key: 5,
  class: "lkt-table-page-buttons lkt-table-page-buttons-bottom"
}, Tl = /* @__PURE__ */ te({
  __name: "LktTable",
  props: {
    modelValue: { default: () => [] },
    type: { default: Q.Table },
    columns: { default: () => [] },
    sorter: { type: Function, default: Oe },
    draggableChecker: { type: Function, default: (t) => !0 },
    checkValidDrag: { type: Function, default: void 0 },
    renderDrag: { type: [Boolean, Function], default: !0 },
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
    rowDisplayType: { type: [Number, Function], default: _.Auto },
    modal: { default: "" },
    modalData: {}
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
  setup(t, { expose: r, emit: d }) {
    const o = d, u = et(), l = t, y = {}, S = b(typeof l.sorter == "function" ? l.sorter : Oe), p = b(qt(l.columns)), D = b(ye.Asc), a = b(l.modelValue), M = b(y), z = b(null), L = b(l.columns), w = b(l.page), E = b(l.loading), be = b(!1), A = b(l.perms), he = b(null), de = b(null), i = b({}), C = b(new At({ items: a.value }, l.dataStateConfig)), I = b(l.editMode), B = b(0), le = b(null), ne = b(!1);
    F(E, (e) => o("update:loading", e)), F(w, (e) => o("page", e));
    const se = b(l.type);
    l.itemMode && se.value === Q.Table && (se.value = Q.Item);
    const ot = (e) => {
      A.value = e;
    }, nt = (e) => {
      Array.isArray(e.data) && (a.value = e.data), E.value = !1, be.value = !0, C.value.store({ items: a.value }).turnStoredIntoOriginal(), ne.value = !1, Re(() => {
        o("read-response", e);
      });
    }, ut = () => Re(() => E.value = !0), rt = () => {
      he.value.doRefresh();
    }, ce = Ft(12), Ve = c(() => {
      if (!l.hideEmptyColumns) return [];
      let e = [];
      return L.value.forEach((m) => {
        let T = m.key, G = !1;
        a.value.forEach((Z) => {
          if (typeof Z.checkEmpty == "function")
            return Z.checkEmpty(Z);
          Z[T] && (G = !0);
        }), G || e.push(T);
      }), e;
    }), ge = c(() => L.value.filter((e) => !e.hidden)), we = c(() => L.value.filter((e) => e.hidden)), it = c(() => {
      let e = ge.value.length + 1;
      return l.sortable && ++e, e;
    }), dt = c(() => L.value.filter((e) => e.isForRowKey)), Ne = c(() => we.value.length > 0 && !l.sortable), st = c(() => L.value.map((e) => e.key)), Le = c(() => {
      let e = [];
      for (let m in u) st.value.indexOf(m) !== -1 && e.push(m);
      return e;
    }), Fe = c(() => l.hiddenSave || E.value || !l.saveResource ? !1 : I.value && ne.value ? !0 : I.value), ct = c(() => Ie.value && a.value.length >= l.requiredItemsForTopCreate || l.switchEditionEnabled ? !0 : Fe.value || I.value && Ce.value), mt = c(() => l.saveDisabled || typeof l.saveValidator == "function" && !l.saveValidator(a.value) ? !1 : ne.value), ft = c(() => a.value.length), pt = c(() => ({
      items: a.value,
      ...l.saveResourceData
    })), vt = c(() => l.titleTag === "" ? "h2" : l.titleTag), yt = c(() => l.wrapContentTag === "" ? "div" : l.wrapContentTag), Ee = c(() => l.title.startsWith("__:") ? ke(l.title.substring(3)) : l.title), kt = c(() => l.saveText.startsWith("__:") ? ke(l.saveText.substring(3)) : l.saveText), bt = c(() => l.editModeText.startsWith("__:") ? ke(l.editModeText.substring(3)) : l.editModeText), Ce = c(() => A.value.includes(X.Create)), Te = c(() => A.value.includes("read")), me = c(() => A.value.includes(X.Update)), Ae = c(() => A.value.includes(X.Edit)), ht = c(() => A.value.includes(X.InlineEdit)), gt = c(() => A.value.includes(X.ModalCreate)), Ct = c(() => A.value.includes(X.InlineCreate)), Ue = c(() => A.value.includes(X.InlineCreateEver)), fe = c(() => A.value.includes(X.Drop)), St = (e) => {
      let m = e.target;
      if (typeof m.dataset.column > "u")
        do
          m = m.parentNode;
        while (typeof m.dataset.column > "u" && m.tagName !== "TABLE" && m.tagName !== "body");
      if (m.tagName === "TD" && (m = m.parentNode, m = m.dataset.i, typeof m < "u"))
        return a.value[m];
    }, It = (e) => a.value[e], Dt = (e) => {
      var m;
      return (m = z.value) == null ? void 0 : m.querySelector(`[data-i="${e}"]`);
    }, Pe = (e) => M.value["tr_" + e] === !0, He = (e) => {
      e && e.sortable && (a.value = a.value.sort((m, T) => S.value(m, T, e, D.value)), D.value = D.value === ye.Asc ? ye.Desc : ye.Asc, p.value = e.key, o("sort", [p.value, D.value]));
    }, We = (e) => {
      o("click", e);
    }, qe = (e, m) => {
      let T = "tr_" + m;
      M.value[T] = typeof M.value[T] > "u" ? !0 : !M.value[T];
    }, Bt = (e) => typeof l.checkValidDrag == "function" ? l.checkValidDrag(e) : !0, Ke = (e) => typeof l.draggableChecker == "function" ? l.draggableChecker(e) : !0, je = () => {
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
      E.value = !0;
    }, wt = () => {
      E.value = !1;
    }, Et = (e, m) => {
      if (o("before-save"), l.saveResource && (E.value = !1, !m.success)) {
        o("error", m.httpStatus);
        return;
      }
      C.value.turnStoredIntoOriginal(), ne.value = !1, o("save", m);
    }, Ge = (e, m, T) => {
      if (T >= e.length) {
        let G = T - e.length + 1;
        for (; G--; ) e.push(void 0);
      }
      return e.splice(T, 0, e.splice(m, 1)[0]), e;
    }, Tt = (e) => {
      Ge(a.value, e, e - 1), B.value = Be();
    }, $t = (e) => {
      Ge(a.value, e, e + 1), B.value = Be();
    }, Se = (e) => {
      a.value.splice(e, 1), B.value = Be();
    }, Rt = () => {
      i.value && (i.value.destroy(), i.value = {});
    }, Je = () => {
      le.value || (le.value = document.getElementById("lkt-table-body-" + ce)), i.value = new Ut(le.value, {
        direction: "vertical",
        handle: ".handle",
        animation: 150,
        onEnd: function(e) {
          let m = e.oldIndex, T = e.newIndex;
          a.value.splice(T, 0, a.value.splice(m, 1)[0]), B.value = Be(), o("drag-end");
        },
        onMove: function(e, m) {
          return Bt(e);
        }
      });
    }, $e = (e, m, T = !1) => {
      let G = [B.value, ce, "row", m];
      return T && G.push("hidden"), dt.value.forEach((Z) => {
        let O = String(e[Z.key]).toLowerCase();
        O.length > 50 && (O = O.substring(0, 50)), O = tt(O, " ", "-"), G.push(O);
      }), G.join("-");
    }, Qe = c(() => typeof l.createEnabledValidator == "function" ? l.createEnabledValidator({ items: a.value }) : !0), Ie = c(() => Ue.value || Ct.value && I.value || gt.value && I.value), De = (e, m) => typeof l.itemDisplayChecker == "function" ? l.itemDisplayChecker(e) : !0;
    Lt(() => {
      l.initialSorting && He(Kt(l.columns, p.value)), C.value.store({ items: a.value }).turnStoredIntoOriginal(), ne.value = !1, l.sortable && Re(() => {
        Je();
      });
    }), F(() => l.sortable, (e) => {
      e ? Je() : Rt();
    }), F(() => l.perms, (e) => A.value = e), F(A, (e) => o("update:perms", e)), F(() => l.editMode, (e) => I.value = e), F(() => l.columns, (e) => L.value = e, { deep: !0 }), F(() => l.modelValue, (e) => a.value = e, { deep: !0 }), F(a, (e) => {
      C.value.increment({ items: e }), ne.value = C.value.changed(), o("update:modelValue", e);
    }, { deep: !0 }), r({
      getItemByEvent: St,
      getItemByIndex: It,
      getRowByIndex: Dt,
      doRefresh: rt,
      getHtml: () => de.value
    });
    const Mt = c(() => typeof V.defaultEmptySlot < "u"), Nt = c(() => V.defaultEmptySlot);
    return (e, m) => {
      const T = J("lkt-button"), G = J("lkt-field"), Z = J("lkt-loader"), O = J("lkt-paginator");
      return n(), s("section", {
        ref_key: "element",
        ref: de,
        class: "lkt-table-page",
        id: "lkt-table-page-" + f(ce)
      }, [
        Ee.value || f(u).title ? (n(), s("header", {
          key: 0,
          class: j(e.headerClass)
        }, [
          Ee.value ? (n(), g(ee(vt.value), { key: 0 }, {
            default: W(() => [
              e.titleIcon ? (n(), s("i", {
                key: 0,
                class: j(e.titleIcon)
              }, null, 2)) : v("", !0),
              ie(" " + x(Ee.value), 1)
            ]),
            _: 1
          })) : v("", !0),
          f(u).title ? N(e.$slots, "title", { key: 1 }) : v("", !0)
        ], 2)) : v("", !0),
        (n(), g(ee(yt.value), {
          class: j(["lkt-table-page-content-wrapper", e.wrapContentClass])
        }, {
          default: W(() => [
            ct.value ? (n(), s("div", sl, [
              pe(ue(T, {
                class: "lkt-table--save-button",
                ref: "saveButton",
                icon: f(V).defaultSaveIcon,
                disabled: !mt.value,
                "confirm-modal": e.saveConfirm,
                "confirm-data": e.confirmData,
                resource: e.saveResource,
                "resource-data": pt.value,
                onLoading: Vt,
                onLoaded: wt,
                onClick: Et
              }, {
                default: W(() => [
                  f(u)["button-save"] ? N(e.$slots, "button-save", {
                    key: 0,
                    items: a.value,
                    editMode: e.editMode,
                    canUpdate: !e.saveDisabled
                  }) : (n(), s("span", cl, x(kt.value), 1))
                ]),
                _: 3
              }, 8, ["icon", "disabled", "confirm-modal", "confirm-data", "resource", "resource-data"]), [
                [ve, Fe.value]
              ]),
              Ie.value && a.value.length >= e.requiredItemsForTopCreate ? (n(), g(_e, {
                key: 0,
                disabled: !Qe.value || e.createDisabled,
                text: e.createText,
                icon: e.createIcon,
                to: e.createRoute,
                modal: e.modal,
                "modal-data": e.modalData,
                onClick: je,
                onAppend: ze
              }, null, 8, ["disabled", "text", "icon", "to", "modal", "modal-data"])) : v("", !0),
              U("div", ml, [
                pe(ue(G, {
                  type: "switch",
                  modelValue: I.value,
                  "onUpdate:modelValue": m[0] || (m[0] = (h) => I.value = h),
                  label: bt.value
                }, null, 8, ["modelValue", "label"]), [
                  [ve, e.switchEditionEnabled]
                ])
              ])
            ])) : v("", !0),
            f(u).buttons ? (n(), s("div", fl, [
              N(e.$slots, "buttons")
            ])) : v("", !0),
            be.value && f(u).filters ? (n(), s("div", pl, [
              N(e.$slots, "filters", {
                items: a.value,
                isLoading: E.value
              })
            ])) : v("", !0),
            E.value ? (n(), g(Z, { key: 3 })) : v("", !0),
            pe(U("div", {
              class: "lkt-table",
              "data-sortable": e.sortable
            }, [
              se.value === f(Q).Table ? (n(), s("table", yl, [
                U("thead", null, [
                  U("tr", null, [
                    e.sortable && I.value ? (n(), s("th", kl)) : v("", !0),
                    e.addNavigation && I.value ? (n(), s("th", bl)) : v("", !0),
                    Ne.value ? (n(), s("th", hl)) : v("", !0),
                    (n(!0), s($, null, K(ge.value, (h) => (n(), s($, null, [
                      Ve.value.indexOf(h.key) === -1 ? (n(), g(il, {
                        key: 0,
                        column: h,
                        "sort-by": p.value,
                        "sort-direction": D.value,
                        "amount-of-columns": e.columns.length,
                        items: a.value,
                        onClick: (k) => He(h)
                      }, null, 8, ["column", "sort-by", "sort-direction", "amount-of-columns", "items", "onClick"])) : v("", !0)
                    ], 64))), 256)),
                    fe.value && I.value ? (n(), s("th", gl)) : v("", !0),
                    Ae.value && me.value && I.value ? (n(), s("th", Cl)) : v("", !0)
                  ])
                ]),
                U("tbody", {
                  ref_key: "tableBody",
                  ref: z,
                  id: "lkt-table-body-" + f(ce)
                }, [
                  (n(!0), s($, null, K(a.value, (h, k) => pe((n(), g(el, {
                    modelValue: a.value[k],
                    "onUpdate:modelValue": (H) => a.value[k] = H,
                    key: $e(h, k),
                    i: k,
                    "display-hidden-columns-indicator": Ne.value,
                    "is-draggable": Ke(h),
                    sortable: e.sortable,
                    "visible-columns": ge.value,
                    "empty-columns": Ve.value,
                    "add-navigation": e.addNavigation,
                    "hidden-is-visible": Pe(k),
                    "latest-row": k + 1 === ft.value,
                    "can-drop": fe.value && I.value,
                    "drop-confirm": e.dropConfirm,
                    "drop-resource": e.dropResource,
                    "drop-text": e.dropText,
                    "drop-icon": e.dropIcon,
                    "can-edit": Ae.value && me.value && I.value,
                    "edit-text": e.editText,
                    "edit-icon": e.editIcon,
                    "edit-link": e.editLink,
                    "edit-mode-enabled": I.value,
                    "has-inline-edit-perm": ht.value,
                    "row-display-type": e.rowDisplayType,
                    "render-drag": e.renderDrag,
                    onClick: We,
                    onShow: qe,
                    onItemUp: Tt,
                    onItemDown: $t,
                    onItemDrop: Se
                  }, Ye({ _: 2 }, [
                    f(u)[`item-${k}`] ? {
                      name: `item-${k}`,
                      fn: W((H) => [
                        N(e.$slots, `item-${k}`, oe({
                          [e.slotItemVar || ""]: H.item,
                          index: k
                        }))
                      ]),
                      key: "0"
                    } : f(u).item ? {
                      name: "item",
                      fn: W((H) => [
                        N(e.$slots, "item", oe({
                          [e.slotItemVar || ""]: H.item,
                          index: k
                        }))
                      ]),
                      key: "1"
                    } : void 0,
                    K(Le.value, (H) => ({
                      name: H,
                      fn: W((ae) => [
                        N(e.$slots, H, oe({
                          [e.slotItemVar || ""]: ae.item,
                          value: ae.value,
                          column: ae.column
                        }))
                      ])
                    }))
                  ]), 1032, ["modelValue", "onUpdate:modelValue", "i", "display-hidden-columns-indicator", "is-draggable", "sortable", "visible-columns", "empty-columns", "add-navigation", "hidden-is-visible", "latest-row", "can-drop", "drop-confirm", "drop-resource", "drop-text", "drop-icon", "can-edit", "edit-text", "edit-icon", "edit-link", "edit-mode-enabled", "has-inline-edit-perm", "row-display-type", "render-drag"])), [
                    [ve, De(a.value[k])]
                  ])), 128)),
                  we.value.length > 0 ? (n(!0), s($, { key: 0 }, K(a.value, (h, k) => (n(), g(ul, {
                    modelValue: a.value[k],
                    "onUpdate:modelValue": (H) => a.value[k] = H,
                    key: $e(h, k, !0),
                    i: k,
                    "hidden-columns": we.value,
                    "hidden-columns-col-span": it.value,
                    "is-draggable": Ke(h),
                    sortable: e.sortable,
                    "visible-columns": ge.value,
                    "empty-columns": Ve.value,
                    "hidden-is-visible": Pe(k),
                    onClick: We,
                    onShow: qe
                  }, Ye({ _: 2 }, [
                    K(Le.value, (H) => ({
                      name: H,
                      fn: W((ae) => [
                        N(e.$slots, H, oe({
                          [e.slotItemVar || ""]: ae.item,
                          value: ae.value,
                          column: ae.column
                        }))
                      ])
                    }))
                  ]), 1032, ["modelValue", "onUpdate:modelValue", "i", "hidden-columns", "hidden-columns-col-span", "is-draggable", "sortable", "visible-columns", "empty-columns", "hidden-is-visible"]))), 128)) : v("", !0)
                ], 8, Sl)
              ])) : se.value === f(Q).Item ? (n(), s("div", {
                key: 1,
                ref_key: "tableBody",
                ref: z,
                id: "lkt-table-body-" + f(ce),
                class: j(["lkt-table-items-container", e.itemsContainerClass])
              }, [
                (n(!0), s($, null, K(a.value, (h, k) => (n(), s($, null, [
                  De(h) ? (n(), s("div", {
                    class: "lkt-table-item",
                    "data-i": k,
                    key: $e(h, k)
                  }, [
                    N(e.$slots, "item", oe({
                      [e.slotItemVar || ""]: h,
                      index: k,
                      editing: I.value,
                      canCreate: Ce.value,
                      canRead: Te.value,
                      canUpdate: me.value,
                      canDrop: fe.value,
                      isLoading: E.value,
                      doDrop: () => Se(k)
                    }))
                  ], 8, Dl)) : v("", !0)
                ], 64))), 256))
              ], 10, Il)) : f(Q).Ul ? (n(), s("ul", {
                key: 2,
                class: j(["lkt-table-items-container", e.itemsContainerClass])
              }, [
                (n(!0), s($, null, K(a.value, (h, k) => (n(), s($, null, [
                  De(h) ? (n(), s("li", {
                    key: 0,
                    class: "lkt-table-item",
                    "data-i": k
                  }, [
                    N(e.$slots, "item", oe({
                      [e.slotItemVar || ""]: h,
                      index: k,
                      editing: I.value,
                      canCreate: Ce.value,
                      canRead: Te.value,
                      canUpdate: me.value,
                      canDrop: fe.value,
                      isLoading: E.value,
                      doDrop: () => Se(k)
                    }))
                  ], 8, Bl)) : v("", !0)
                ], 64))), 256))
              ], 2)) : f(Q).Ul ? (n(), s("ol", {
                key: 3,
                class: j(["lkt-table-items-container", e.itemsContainerClass])
              }, [
                (n(!0), s($, null, K(a.value, (h, k) => (n(), s($, null, [
                  De(h) ? (n(), s("li", {
                    key: 0,
                    class: "lkt-table-item",
                    "data-i": k
                  }, [
                    N(e.$slots, "item", oe({
                      [e.slotItemVar || ""]: h,
                      index: k,
                      editing: I.value,
                      canCreate: Ce.value,
                      canRead: Te.value,
                      canUpdate: me.value,
                      canDrop: fe.value,
                      isLoading: E.value,
                      doDrop: () => Se(k)
                    }))
                  ], 8, Vl)) : v("", !0)
                ], 64))), 256))
              ], 2)) : v("", !0)
            ], 8, vl), [
              [ve, !E.value && a.value.length > 0]
            ]),
            !E.value && a.value.length === 0 ? (n(), s("div", wl, [
              f(u).empty ? N(e.$slots, "empty", { key: 0 }) : Mt.value ? (n(), g(ee(Nt.value), {
                key: 1,
                message: e.noResultsText
              }, null, 8, ["message"])) : e.noResultsText ? (n(), s($, { key: 2 }, [
                ie(x(e.noResultsText), 1)
              ], 64)) : v("", !0)
            ])) : v("", !0),
            Ie.value || f(u).bottomButtons ? (n(), s("div", El, [
              Ie.value && a.value.length >= e.requiredItemsForBottomCreate ? (n(), g(_e, {
                key: 0,
                disabled: !Qe.value || e.createDisabled,
                text: e.createText,
                icon: e.createIcon,
                to: e.createRoute,
                modal: e.modal,
                "modal-data": e.modalData,
                onClick: je,
                onAppend: ze
              }, null, 8, ["disabled", "text", "icon", "to", "modal", "modal-data"])) : v("", !0),
              N(e.$slots, "bottom-buttons")
            ])) : v("", !0),
            e.resource.length > 0 ? (n(), g(O, {
              key: 6,
              ref_key: "paginator",
              ref: he,
              modelValue: w.value,
              "onUpdate:modelValue": m[1] || (m[1] = (h) => w.value = h),
              resource: e.resource,
              filters: e.filters,
              onLoading: ut,
              onPerms: ot,
              onResponse: nt
            }, null, 8, ["modelValue", "resource", "filters"])) : v("", !0)
          ]),
          _: 3
        }, 8, ["class"]))
      ], 8, dl);
    };
  }
}), Zl = {
  install: (t) => {
    t.component("lkt-table") === void 0 && t.component("lkt-table", Tl);
  }
}, Ol = (t) => (V.navButtonSlot = t, !0), _l = (t) => (V.dropButtonSlot = t, !0), xl = (t) => (V.createButtonSlot = t, !0), ea = (t) => {
  V.defaultEmptySlot = t;
}, ta = (t) => {
  V.defaultSaveIcon = t;
};
export {
  P as Column,
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
