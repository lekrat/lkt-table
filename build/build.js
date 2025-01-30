import { reactive as q, defineComponent as te, ref as b, watch as F, computed as c, resolveComponent as J, unref as f, openBlock as n, createBlock as g, withCtx as U, createTextVNode as de, toDisplayString as x, createElementBlock as s, mergeProps as Ze, Fragment as R, withModifiers as tt, resolveDynamicComponent as ee, createCommentVNode as v, useSlots as lt, normalizeClass as j, createElementVNode as P, createVNode as re, renderSlot as $, renderList as K, withDirectives as ve, vShow as ye, onMounted as Lt, nextTick as Re, createSlots as Oe, normalizeProps as oe } from "vue";
import { Field as _e } from "lkt-field";
import { __ as be } from "lkt-i18n";
import { replaceAll as at, generateRandomString as Ft } from "lkt-string-tools";
import { DataState as At } from "lkt-data-state";
import Ut from "sortablejs";
import { time as Be } from "lkt-date-tools";
var M = /* @__PURE__ */ ((t) => (t.Text = "text", t.Number = "number", t.Check = "check", t.Switch = "switch", t.Select = "select", t.Email = "email", t.Tel = "tel", t.File = "file", t.Link = "link", t.Action = "action", t.Integer = "int", t.Float = "float", t.None = "", t))(M || {});
class H {
  constructor(r = {}) {
    this.key = "", this.label = "", this.sortable = !0, this.hidden = !1, this.editable = !1, this.formatter = void 0, this.checkEmpty = void 0, this.colspan = void 0, this.preferSlot = !0, this.type = M.None, this.link = "", this.action = void 0, this.isForRowKey = !1, this.extractTitleFromColumn = "", this.slotData = {}, this.field = new _e();
    for (let d in r)
      this[d] = r[d];
    this.field = new _e(this.field);
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
const Ul = (t) => q(new H(t)), Pl = (t, r, d, o = !0) => q(new H({ key: t, label: r, sortable: o, type: M.Link, link: d })), Hl = (t, r, d, o = !0) => q(new H({ key: t, label: r, sortable: o, type: M.Action, action: d })), Wl = (t, r, d = !0) => q(new H({ key: t, label: r, type: M.Text, sortable: d })), ql = (t, r, d = !0) => q(new H({ key: t, label: r, type: M.Number, sortable: d })), Kl = (t, r, d = !0) => q(new H({ key: t, label: r, type: M.Number, sortable: d })), jl = (t, r, d = !0) => q(new H({ key: t, label: r, type: M.Email, sortable: d })), zl = (t, r, d = !0) => q(new H({ key: t, label: r, type: M.Tel, sortable: d })), Gl = (t, r, d = !0) => q(new H({ key: t, label: r, type: M.Check, sortable: d })), Jl = (t, r, d = !0) => q(new H({ key: t, label: r, type: M.Switch, sortable: d })), Ql = (t, r, d, o = !0) => q(new H({ key: t, label: r, type: M.Select, sortable: o })), Xl = (t, r, d = !0) => q(new H({ key: t, label: r, type: M.File, sortable: d })), Yl = (t, r, d = !0) => q(new H({ key: t, label: r, sortable: d, hidden: !0 })), xe = (t, r, d, o) => {
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
}, ie = (t, r, d, o = []) => {
  if (t.extractTitleFromColumn) {
    let u = o.find((l) => l.key === t.extractTitleFromColumn);
    if (u)
      return ie(u, r, d, o);
  }
  if (t.formatter && typeof t.formatter == "function") {
    let u = t.formatter(r[t.key], r, t, d);
    return u.startsWith("__:") ? be(u.substring(3)) : u;
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
}, ot = (t) => t.type ? `is-${t.type}` : "", nt = /* @__PURE__ */ te({
  __name: "LktTableCell",
  props: {
    modelValue: { default: () => ({}) },
    column: { default: () => new H() },
    columns: { default: () => [] },
    i: { default: 0 },
    editModeEnabled: { type: Boolean, default: !1 },
    hasInlineEditPerm: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: r }) {
    const d = r, o = t, u = b(o.modelValue), l = b(u.value[o.column.key]), k = b(null);
    let I = o.column.type;
    [M.Integer, M.Float].includes(I) && (I = M.Number), F(l, (a) => {
      const N = JSON.parse(JSON.stringify(u.value));
      N[o.column.key] = a, d("update:modelValue", N);
    }), F(() => o.modelValue, (a) => {
      u.value = a, l.value = u.value[o.column.key];
    });
    const p = c(() => ({ ...o.column.slotData, item: u.value })), D = c(() => {
      var a, N, z, L;
      if ((a = o.column.field) != null && a.modalData && typeof ((N = o.column.field) == null ? void 0 : N.modalData) == "object")
        for (let w in o.column.field.modalData)
          if (typeof ((z = o.column.field) == null ? void 0 : z.modalData[w]) == "string" && o.column.field.modalData[w].startsWith("prop:")) {
            let E = o.column.field.modalData[w].substring(5);
            u.value[E];
          } else
            o.column.field.modalData[w];
      return (L = o.column.field) == null ? void 0 : L.modalData;
    });
    return (a, N) => {
      const z = J("lkt-anchor"), L = J("lkt-field");
      return a.column.type === f(M).Link ? (n(), g(z, {
        key: 0,
        to: a.column.getHref(u.value)
      }, {
        default: U(() => [
          de(x(f(ie)(a.column, u.value, a.i)), 1)
        ]),
        _: 1
      }, 8, ["to"])) : a.column.type === f(M).Action ? (n(), s("a", {
        key: 1,
        href: "#",
        onClick: N[0] || (N[0] = (w) => a.column.doAction(u.value))
      }, x(f(ie)(a.column, u.value, a.i)), 1)) : a.column.type !== "" && a.hasInlineEditPerm ? (n(), g(L, Ze({ key: 2 }, a.column.field, {
        type: f(I),
        "read-mode": !a.column.editable || !a.editModeEnabled,
        ref: (w) => k.value = w,
        "slot-data": p.value,
        label: a.column.type === "switch" || a.column.type === "check" ? a.column.label : "",
        "modal-data": D.value,
        prop: u.value,
        modelValue: l.value,
        "onUpdate:modelValue": N[1] || (N[1] = (w) => l.value = w)
      }), null, 16, ["type", "read-mode", "slot-data", "label", "modal-data", "prop", "modelValue"])) : a.column.type !== "" ? (n(), g(L, Ze({ key: 3 }, a.column.field, {
        type: f(I),
        "read-mode": "",
        ref: (w) => k.value = w,
        "slot-data": p.value,
        label: a.column.type === "switch" || a.column.type === "check" ? a.column.label : "",
        "modal-data": D.value,
        prop: u.value,
        "model-value": l.value
      }), null, 16, ["type", "slot-data", "label", "modal-data", "prop", "model-value"])) : (n(), s(R, { key: 4 }, [
        de(x(f(ie)(a.column, u.value, a.i, a.columns)), 1)
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
    return (l, k) => {
      const I = J("lkt-button");
      return n(), g(I, {
        palette: "table-delete",
        icon: o.value ? "" : l.icon,
        text: o.value ? "" : l.text,
        resource: l.resource,
        "resource-data": l.resourceData,
        "confirm-modal": l.confirm,
        disabled: l.disabled,
        onClick: k[0] || (k[0] = tt((p) => d("click"), ["prevent", "stop"]))
      }, {
        default: U(() => [
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
    return (l, k) => {
      const I = J("lkt-button");
      return n(), g(I, {
        palette: "table-delete",
        icon: o.value ? "" : l.icon,
        text: o.value ? "" : l.text,
        "on-click-to": l.link,
        "is-anchor": l.link !== "",
        resource: l.resource,
        "resource-data": l.resourceData,
        "confirm-modal": l.confirm,
        disabled: l.disabled,
        onClick: k[0] || (k[0] = tt((p) => d("click"), ["prevent", "stop"]))
      }, {
        default: U(() => [
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
    const d = lt(), o = r, u = t, l = b(u.modelValue);
    let k = typeof u.rowDisplayType == "function" ? u.rowDisplayType(l.value, u.i) : u.rowDisplayType;
    k || (k = _.Auto);
    const I = [_.Auto, _.PreferCustomItem].includes(k), p = [_.Auto, _.PreferItem].includes(k), D = b(u.editLink);
    for (let i in l.value) D.value = at(D.value, ":" + i, l.value[i]);
    const a = (i) => o("click", i), N = (i, C) => {
      o("show", i, C);
    }, z = c(() => {
      let i = [];
      return u.sortable && u.isDraggable && i.push("handle"), i.join(" ");
    }), L = c(() => V.navButtonSlot !== ""), w = c(() => V.navButtonSlot), E = () => {
      o("item-up", u.i);
    }, he = () => {
      o("item-down", u.i);
    }, A = () => {
      o("item-drop", u.i);
    }, ge = () => {
    };
    F(() => u.modelValue, (i) => l.value = i), F(l, (i) => {
      o("update:modelValue", i);
    }, { deep: !0 });
    const se = c(() => typeof u.renderDrag == "function" ? u.renderDrag(l.value) : u.renderDrag === !0);
    return (i, C) => {
      const S = J("lkt-button");
      return n(), s("tr", {
        "data-i": i.i,
        "data-draggable": i.isDraggable,
        class: j({ "type-custom-item": f(I), "type-item": f(p) })
      }, [
        i.sortable && i.isDraggable && i.editModeEnabled && se.value ? (n(), s("td", {
          key: 0,
          "data-role": "drag-indicator",
          class: j(z.value)
        }, null, 2)) : i.sortable && i.editModeEnabled && se.value ? (n(), s("td", Jt)) : v("", !0),
        i.addNavigation && i.editModeEnabled ? (n(), s("td", Qt, [
          P("div", Xt, [
            re(S, {
              palette: "table-nav",
              disabled: i.i === 0,
              onClick: E
            }, {
              default: U(() => [
                L.value ? (n(), g(ee(w.value), {
                  key: 0,
                  direction: "up"
                })) : (n(), s(R, { key: 1 }, [
                  C[3] || (C[3] = P("i", { class: "" }, null, -1)),
                  C[4] || (C[4] = de(" UP "))
                ], 64))
              ]),
              _: 1
            }, 8, ["disabled"]),
            re(S, {
              palette: "table-nav",
              disabled: i.latestRow,
              onClick: he
            }, {
              default: U(() => [
                L.value ? (n(), g(ee(w.value), {
                  key: 0,
                  direction: "down"
                })) : (n(), s(R, { key: 1 }, [
                  C[5] || (C[5] = P("i", { class: "" }, null, -1)),
                  C[6] || (C[6] = de(" DOWN "))
                ], 64))
              ]),
              _: 1
            }, 8, ["disabled"])
          ])
        ])) : v("", !0),
        i.displayHiddenColumnsIndicator ? (n(), s("td", {
          key: 3,
          onClick: C[0] || (C[0] = (B) => N(B, i.i)),
          "data-role": "show-more",
          class: j(i.hiddenIsVisible ? "state-open" : "")
        }, null, 2)) : v("", !0),
        f(I) && f(d)[`item-${i.i}`] ? (n(), s("td", {
          key: "td" + i.i,
          colspan: i.visibleColumns.length
        }, [
          $(i.$slots, `item-${i.i}`, {
            item: l.value,
            index: i.i
          })
        ], 8, Yt)) : f(p) && f(d).item ? (n(), s("td", {
          key: "td" + i.i,
          colspan: i.visibleColumns.length
        }, [
          $(i.$slots, "item", {
            item: l.value,
            index: i.i
          })
        ], 8, Zt)) : (n(!0), s(R, { key: 6 }, K(i.visibleColumns, (B) => (n(), s(R, null, [
          f(Wt)(B, i.emptyColumns, l.value) ? (n(), s("td", {
            key: "td" + i.i,
            "data-column": B.key,
            colspan: f(Me)(B, l.value),
            title: f(ie)(B, l.value, i.i, i.visibleColumns),
            class: j(f(ot)(B)),
            onClick: C[2] || (C[2] = (le) => a(le))
          }, [
            i.$slots[B.key] && f(Ht)(B, l.value) ? $(i.$slots, B.key, {
              key: 0,
              value: l.value[B.key],
              item: l.value,
              column: B,
              i: i.i
            }) : l.value ? (n(), g(nt, {
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
          re(jt, {
            resource: i.dropResource,
            "resource-data": l.value,
            confirm: i.dropConfirm,
            text: i.dropText,
            icon: i.dropIcon,
            onClick: A
          }, null, 8, ["resource", "resource-data", "confirm", "text", "icon"])
        ])) : v("", !0),
        i.canEdit && i.editModeEnabled ? (n(), s("td", xt, [
          re(zt, {
            "resource-data": l.value,
            text: i.editText,
            icon: i.editIcon,
            link: D.value,
            onClick: ge
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
    const d = r, o = t, u = b(o.modelValue), l = (k) => d("click", k);
    return F(() => o.modelValue, (k) => u.value = k), F(u, () => d("update:modelValue", u.value)), (k, I) => ve((n(), s("tr", tl, [
      P("td", { colspan: k.hiddenColumnsColSpan }, [
        P("table", null, [
          P("tr", null, [
            (n(!0), s(R, null, K(k.hiddenColumns, (p) => (n(), s("th", {
              "data-column": p.key
            }, [
              P("div", null, x(p.label), 1)
            ], 8, al))), 256))
          ]),
          P("tr", { "data-i": k.i }, [
            (n(!0), s(R, null, K(k.hiddenColumns, (p, D) => (n(), s("td", {
              "data-column": p.key,
              title: f(ie)(p, u.value, D, k.hiddenColumns),
              onClick: (a) => l(a, u.value)
            }, [
              k.$slots[p.key] ? $(k.$slots, p.key, {
                key: 0,
                value: u.value[p.key],
                item: u.value,
                column: p,
                i: D
              }) : (n(), g(nt, {
                key: 1,
                column: p,
                columns: k.hiddenColumns,
                modelValue: u.value,
                "onUpdate:modelValue": I[0] || (I[0] = (a) => u.value = a),
                i: D
              }, null, 8, ["column", "columns", "modelValue", "i"]))
            ], 8, nl))), 256))
          ], 8, ol)
        ])
      ], 8, ll)
    ], 512)), [
      [ye, k.hiddenIsVisible]
    ]);
  }
}), et = /* @__PURE__ */ te({
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
    const d = r, o = t, u = c(() => V.createButtonSlot !== ""), l = c(() => V.createButtonSlot), k = {
      ...o.modalData,
      beforeClose: (p) => {
        "itemCreated" in p && p.itemCreated === !0 && d("append", p.item);
      }
    }, I = () => {
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
        "modal-data": k,
        "on-click-to": p.to,
        onClick: I
      }, {
        default: U(() => [
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
    const d = r, o = t, u = c(() => Pt(o.column, o.amountOfColumns, o.items)), l = c(() => o.column.sortable === !0), k = c(() => l.value && o.sortBy === o.column.key ? o.sortDirection : ""), I = c(() => o.column.label.startsWith("__:") ? be(o.column.label.substring(3)) : o.column.label), p = () => d("click", o.column);
    return (D, a) => (n(), s("th", {
      "data-column": D.column.key,
      "data-sortable": l.value,
      "data-sort": k.value,
      colspan: u.value,
      title: I.value,
      class: j(f(ot)(D.column)),
      onClick: p
    }, [
      P("div", null, x(I.value), 1)
    ], 10, rl));
  }
});
var Q = /* @__PURE__ */ ((t) => (t.Table = "table", t.Item = "item", t.Ul = "ul", t.Ol = "ol", t))(Q || {}), X = /* @__PURE__ */ ((t) => (t.Create = "create", t.Update = "update", t.Edit = "edit", t.Drop = "drop", t.Sort = "sort", t.InlineEdit = "inline-edit", t.InlineCreate = "inline-create", t.ModalCreate = "modal-create", t.InlineCreateEver = "inline-create-ever", t))(X || {}), ke = /* @__PURE__ */ ((t) => (t.Asc = "asc", t.Desc = "desc", t))(ke || {});
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
    sorter: { type: Function, default: xe },
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
    saveTooltipEngine: { default: "absolute" },
    splitSave: { type: Boolean, default: !1 },
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
    const o = d, u = lt(), l = t, k = {}, I = b(typeof l.sorter == "function" ? l.sorter : xe), p = b(qt(l.columns)), D = b(ke.Asc), a = b(l.modelValue), N = b(k), z = b(null), L = b(l.columns), w = b(l.page), E = b(l.loading), he = b(!1), A = b(l.perms), ge = b(null), se = b(null), i = b({}), C = b(new At({ items: a.value }, l.dataStateConfig)), S = b(l.editMode), B = b(0), le = b(null), ne = b(!1);
    F(E, (e) => o("update:loading", e)), F(w, (e) => o("page", e));
    const ce = b(l.type);
    l.itemMode && ce.value === Q.Table && (ce.value = Q.Item);
    const ut = (e) => {
      A.value = e;
    }, rt = (e) => {
      Array.isArray(e.data) && (a.value = e.data), E.value = !1, he.value = !0, C.value.store({ items: a.value }).turnStoredIntoOriginal(), ne.value = !1, Re(() => {
        o("read-response", e);
      });
    }, it = () => Re(() => E.value = !0), dt = () => {
      ge.value.doRefresh();
    }, me = Ft(12), Ve = c(() => {
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
    }), Ce = c(() => L.value.filter((e) => !e.hidden)), we = c(() => L.value.filter((e) => e.hidden)), st = c(() => {
      let e = Ce.value.length + 1;
      return l.sortable && ++e, e;
    }), ct = c(() => L.value.filter((e) => e.isForRowKey)), Ne = c(() => we.value.length > 0 && !l.sortable), mt = c(() => L.value.map((e) => e.key)), Le = c(() => {
      let e = [];
      for (let m in u) mt.value.indexOf(m) !== -1 && e.push(m);
      return e;
    }), Fe = c(() => l.hiddenSave || E.value || !l.saveResource ? !1 : S.value && ne.value ? !0 : S.value), ft = c(() => Ie.value && a.value.length >= l.requiredItemsForTopCreate || l.switchEditionEnabled ? !0 : Fe.value || S.value && ue.value), pt = c(() => l.saveDisabled || typeof l.saveValidator == "function" && !l.saveValidator(a.value) ? !1 : ne.value), vt = c(() => a.value.length), yt = c(() => ({
      items: a.value,
      ...l.saveResourceData
    })), kt = c(() => l.titleTag === "" ? "h2" : l.titleTag), bt = c(() => l.wrapContentTag === "" ? "div" : l.wrapContentTag), Ee = c(() => l.title.startsWith("__:") ? be(l.title.substring(3)) : l.title), ht = c(() => l.saveText.startsWith("__:") ? be(l.saveText.substring(3)) : l.saveText), gt = c(() => l.editModeText.startsWith("__:") ? be(l.editModeText.substring(3)) : l.editModeText), ue = c(() => A.value.includes(X.Create)), Te = c(() => A.value.includes("read")), fe = c(() => A.value.includes(X.Update)), Ae = c(() => A.value.includes(X.Edit)), Ct = c(() => A.value.includes(X.InlineEdit)), St = c(() => A.value.includes(X.ModalCreate)), It = c(() => A.value.includes(X.InlineCreate)), Ue = c(() => A.value.includes(X.InlineCreateEver)), pe = c(() => A.value.includes(X.Drop)), Dt = (e) => {
      let m = e.target;
      if (typeof m.dataset.column > "u")
        do
          m = m.parentNode;
        while (typeof m.dataset.column > "u" && m.tagName !== "TABLE" && m.tagName !== "body");
      if (m.tagName === "TD" && (m = m.parentNode, m = m.dataset.i, typeof m < "u"))
        return a.value[m];
    }, Bt = (e) => a.value[e], Vt = (e) => {
      var m;
      return (m = z.value) == null ? void 0 : m.querySelector(`[data-i="${e}"]`);
    }, Pe = (e) => N.value["tr_" + e] === !0, He = (e) => {
      e && e.sortable && (a.value = a.value.sort((m, T) => I.value(m, T, e, D.value)), D.value = D.value === ke.Asc ? ke.Desc : ke.Asc, p.value = e.key, o("sort", [p.value, D.value]));
    }, We = (e) => {
      o("click", e);
    }, qe = (e, m) => {
      let T = "tr_" + m;
      N.value[T] = typeof N.value[T] > "u" ? !0 : !N.value[T];
    }, wt = (e) => typeof l.checkValidDrag == "function" ? l.checkValidDrag(e) : !0, Ke = (e) => typeof l.draggableChecker == "function" ? l.draggableChecker(e) : !0, je = () => {
      if (ue.value) {
        o("click-create");
        return;
      }
      if (Ue.value)
        o("click-create");
      else {
        if (typeof l.newValueGenerator == "function") {
          let e = l.newValueGenerator();
          if (typeof e == "object" || ce.value !== Q.Table) {
            a.value.push(e);
            return;
          }
        }
        a.value.push({});
      }
    }, ze = (e) => {
      a.value.push(e);
    }, Ge = () => {
      E.value = !0;
    }, Je = () => {
      E.value = !1;
    }, Et = (e, m) => {
      if (o("before-save"), l.saveResource && (E.value = !1, !m.success)) {
        o("error", m.httpStatus);
        return;
      }
      C.value.turnStoredIntoOriginal(), ne.value = !1, o("save", m);
    }, Qe = (e, m, T) => {
      if (T >= e.length) {
        let G = T - e.length + 1;
        for (; G--; ) e.push(void 0);
      }
      return e.splice(T, 0, e.splice(m, 1)[0]), e;
    }, Tt = (e) => {
      Qe(a.value, e, e - 1), B.value = Be();
    }, $t = (e) => {
      Qe(a.value, e, e + 1), B.value = Be();
    }, Se = (e) => {
      a.value.splice(e, 1), B.value = Be();
    }, Rt = () => {
      i.value && (i.value.destroy(), i.value = {});
    }, Xe = () => {
      le.value || (le.value = document.getElementById("lkt-table-body-" + me)), i.value = new Ut(le.value, {
        direction: "vertical",
        handle: ".handle",
        animation: 150,
        onEnd: function(e) {
          let m = e.oldIndex, T = e.newIndex;
          a.value.splice(T, 0, a.value.splice(m, 1)[0]), B.value = Be(), o("drag-end");
        },
        onMove: function(e, m) {
          return wt(e);
        }
      });
    }, $e = (e, m, T = !1) => {
      let G = [B.value, me, "row", m];
      return T && G.push("hidden"), ct.value.forEach((Z) => {
        let O = String(e[Z.key]).toLowerCase();
        O.length > 50 && (O = O.substring(0, 50)), O = at(O, " ", "-"), G.push(O);
      }), G.join("-");
    }, Ye = c(() => typeof l.createEnabledValidator == "function" ? l.createEnabledValidator({ items: a.value }) : !0), Ie = c(() => Ue.value || ue.value && S.value || It.value && S.value || St.value && S.value), De = (e, m) => typeof l.itemDisplayChecker == "function" ? l.itemDisplayChecker(e) : !0;
    Lt(() => {
      l.initialSorting && He(Kt(l.columns, p.value)), C.value.store({ items: a.value }).turnStoredIntoOriginal(), ne.value = !1, l.sortable && Re(() => {
        Xe();
      });
    }), F(() => l.sortable, (e) => {
      e ? Xe() : Rt();
    }), F(() => l.perms, (e) => A.value = e), F(A, (e) => o("update:perms", e)), F(() => l.editMode, (e) => S.value = e), F(() => l.columns, (e) => L.value = e, { deep: !0 }), F(() => l.modelValue, (e) => a.value = e, { deep: !0 }), F(a, (e) => {
      C.value.increment({ items: e }), ne.value = C.value.changed(), o("update:modelValue", e);
    }, { deep: !0 }), r({
      getItemByEvent: Dt,
      getItemByIndex: Bt,
      getRowByIndex: Vt,
      doRefresh: dt,
      getHtml: () => se.value
    });
    const Mt = c(() => typeof V.defaultEmptySlot < "u"), Nt = c(() => V.defaultEmptySlot);
    return (e, m) => {
      const T = J("lkt-button"), G = J("lkt-field"), Z = J("lkt-loader"), O = J("lkt-paginator");
      return n(), s("section", {
        ref_key: "element",
        ref: se,
        class: "lkt-table-page",
        id: "lkt-table-page-" + f(me)
      }, [
        Ee.value || f(u).title ? (n(), s("header", {
          key: 0,
          class: j(e.headerClass)
        }, [
          Ee.value ? (n(), g(ee(kt.value), { key: 0 }, {
            default: U(() => [
              e.titleIcon ? (n(), s("i", {
                key: 0,
                class: j(e.titleIcon)
              }, null, 2)) : v("", !0),
              de(" " + x(Ee.value), 1)
            ]),
            _: 1
          })) : v("", !0),
          f(u).title ? $(e.$slots, "title", { key: 1 }) : v("", !0)
        ], 2)) : v("", !0),
        (n(), g(ee(bt.value), {
          class: j(["lkt-table-page-content-wrapper", e.wrapContentClass])
        }, {
          default: U(() => [
            ft.value ? (n(), s("div", sl, [
              ve(re(T, {
                class: "lkt-table--save-button",
                ref: "saveButton",
                icon: f(V).defaultSaveIcon,
                disabled: !pt.value,
                "confirm-modal": e.saveConfirm,
                "confirm-data": e.confirmData,
                resource: e.saveResource,
                "resource-data": yt.value,
                split: e.splitSave,
                "tooltip-engine": e.saveTooltipEngine,
                onLoading: Ge,
                onLoaded: Je,
                onClick: Et
              }, {
                split: U(({ doClose: h, doRootClick: y }) => [
                  $(e.$slots, "button-save-split", {
                    doClose: h,
                    doRootClick: y,
                    onButtonLoading: Ge,
                    onButtonLoaded: Je
                  })
                ]),
                default: U(() => [
                  f(u)["button-save"] ? $(e.$slots, "button-save", {
                    key: 0,
                    items: a.value,
                    editMode: e.editMode,
                    canUpdate: !e.saveDisabled
                  }) : (n(), s("span", cl, x(ht.value), 1))
                ]),
                _: 3
              }, 8, ["icon", "disabled", "confirm-modal", "confirm-data", "resource", "resource-data", "split", "tooltip-engine"]), [
                [ye, Fe.value]
              ]),
              Ie.value && a.value.length >= e.requiredItemsForTopCreate ? (n(), g(et, {
                key: 0,
                disabled: !Ye.value || e.createDisabled,
                text: e.createText,
                icon: e.createIcon,
                to: e.createRoute,
                modal: e.modal,
                "modal-data": e.modalData,
                onClick: je,
                onAppend: ze
              }, null, 8, ["disabled", "text", "icon", "to", "modal", "modal-data"])) : v("", !0),
              P("div", ml, [
                ve(re(G, {
                  type: "switch",
                  modelValue: S.value,
                  "onUpdate:modelValue": m[0] || (m[0] = (h) => S.value = h),
                  label: gt.value
                }, null, 8, ["modelValue", "label"]), [
                  [ye, e.switchEditionEnabled]
                ])
              ])
            ])) : v("", !0),
            f(u).buttons ? (n(), s("div", fl, [
              $(e.$slots, "buttons")
            ])) : v("", !0),
            he.value && f(u).filters ? (n(), s("div", pl, [
              $(e.$slots, "filters", {
                items: a.value,
                isLoading: E.value
              })
            ])) : v("", !0),
            E.value ? (n(), g(Z, { key: 3 })) : v("", !0),
            ve(P("div", {
              class: "lkt-table",
              "data-sortable": e.sortable
            }, [
              ce.value === f(Q).Table ? (n(), s("table", yl, [
                P("thead", null, [
                  P("tr", null, [
                    e.sortable && S.value ? (n(), s("th", kl)) : v("", !0),
                    e.addNavigation && S.value ? (n(), s("th", bl)) : v("", !0),
                    Ne.value ? (n(), s("th", hl)) : v("", !0),
                    (n(!0), s(R, null, K(Ce.value, (h) => (n(), s(R, null, [
                      Ve.value.indexOf(h.key) === -1 ? (n(), g(il, {
                        key: 0,
                        column: h,
                        "sort-by": p.value,
                        "sort-direction": D.value,
                        "amount-of-columns": e.columns.length,
                        items: a.value,
                        onClick: (y) => He(h)
                      }, null, 8, ["column", "sort-by", "sort-direction", "amount-of-columns", "items", "onClick"])) : v("", !0)
                    ], 64))), 256)),
                    pe.value && S.value ? (n(), s("th", gl)) : v("", !0),
                    Ae.value && fe.value && S.value ? (n(), s("th", Cl)) : v("", !0)
                  ])
                ]),
                P("tbody", {
                  ref_key: "tableBody",
                  ref: z,
                  id: "lkt-table-body-" + f(me)
                }, [
                  (n(!0), s(R, null, K(a.value, (h, y) => ve((n(), g(el, {
                    modelValue: a.value[y],
                    "onUpdate:modelValue": (W) => a.value[y] = W,
                    key: $e(h, y),
                    i: y,
                    "display-hidden-columns-indicator": Ne.value,
                    "is-draggable": Ke(h),
                    sortable: e.sortable,
                    "visible-columns": Ce.value,
                    "empty-columns": Ve.value,
                    "add-navigation": e.addNavigation,
                    "hidden-is-visible": Pe(y),
                    "latest-row": y + 1 === vt.value,
                    "can-drop": pe.value && S.value,
                    "drop-confirm": e.dropConfirm,
                    "drop-resource": e.dropResource,
                    "drop-text": e.dropText,
                    "drop-icon": e.dropIcon,
                    "can-edit": Ae.value && fe.value && S.value,
                    "edit-text": e.editText,
                    "edit-icon": e.editIcon,
                    "edit-link": e.editLink,
                    "edit-mode-enabled": S.value,
                    "has-inline-edit-perm": Ct.value,
                    "row-display-type": e.rowDisplayType,
                    "render-drag": e.renderDrag,
                    onClick: We,
                    onShow: qe,
                    onItemUp: Tt,
                    onItemDown: $t,
                    onItemDrop: Se
                  }, Oe({ _: 2 }, [
                    f(u)[`item-${y}`] ? {
                      name: `item-${y}`,
                      fn: U((W) => [
                        $(e.$slots, `item-${y}`, oe({
                          [e.slotItemVar || ""]: W.item,
                          index: y
                        }))
                      ]),
                      key: "0"
                    } : f(u).item ? {
                      name: "item",
                      fn: U((W) => [
                        $(e.$slots, "item", oe({
                          [e.slotItemVar || ""]: W.item,
                          index: y
                        }))
                      ]),
                      key: "1"
                    } : void 0,
                    K(Le.value, (W) => ({
                      name: W,
                      fn: U((ae) => [
                        $(e.$slots, W, oe({
                          [e.slotItemVar || ""]: ae.item,
                          value: ae.value,
                          column: ae.column
                        }))
                      ])
                    }))
                  ]), 1032, ["modelValue", "onUpdate:modelValue", "i", "display-hidden-columns-indicator", "is-draggable", "sortable", "visible-columns", "empty-columns", "add-navigation", "hidden-is-visible", "latest-row", "can-drop", "drop-confirm", "drop-resource", "drop-text", "drop-icon", "can-edit", "edit-text", "edit-icon", "edit-link", "edit-mode-enabled", "has-inline-edit-perm", "row-display-type", "render-drag"])), [
                    [ye, De(a.value[y])]
                  ])), 128)),
                  we.value.length > 0 ? (n(!0), s(R, { key: 0 }, K(a.value, (h, y) => (n(), g(ul, {
                    modelValue: a.value[y],
                    "onUpdate:modelValue": (W) => a.value[y] = W,
                    key: $e(h, y, !0),
                    i: y,
                    "hidden-columns": we.value,
                    "hidden-columns-col-span": st.value,
                    "is-draggable": Ke(h),
                    sortable: e.sortable,
                    "visible-columns": Ce.value,
                    "empty-columns": Ve.value,
                    "hidden-is-visible": Pe(y),
                    onClick: We,
                    onShow: qe
                  }, Oe({ _: 2 }, [
                    K(Le.value, (W) => ({
                      name: W,
                      fn: U((ae) => [
                        $(e.$slots, W, oe({
                          [e.slotItemVar || ""]: ae.item,
                          value: ae.value,
                          column: ae.column
                        }))
                      ])
                    }))
                  ]), 1032, ["modelValue", "onUpdate:modelValue", "i", "hidden-columns", "hidden-columns-col-span", "is-draggable", "sortable", "visible-columns", "empty-columns", "hidden-is-visible"]))), 128)) : v("", !0)
                ], 8, Sl)
              ])) : ce.value === f(Q).Item ? (n(), s("div", {
                key: 1,
                ref_key: "tableBody",
                ref: z,
                id: "lkt-table-body-" + f(me),
                class: j(["lkt-table-items-container", e.itemsContainerClass])
              }, [
                (n(!0), s(R, null, K(a.value, (h, y) => (n(), s(R, null, [
                  De(h) ? (n(), s("div", {
                    class: "lkt-table-item",
                    "data-i": y,
                    key: $e(h, y)
                  }, [
                    $(e.$slots, "item", oe({
                      [e.slotItemVar || ""]: h,
                      index: y,
                      editing: S.value,
                      canCreate: ue.value,
                      canRead: Te.value,
                      canUpdate: fe.value,
                      canDrop: pe.value,
                      isLoading: E.value,
                      doDrop: () => Se(y)
                    }))
                  ], 8, Dl)) : v("", !0)
                ], 64))), 256))
              ], 10, Il)) : f(Q).Ul ? (n(), s("ul", {
                key: 2,
                class: j(["lkt-table-items-container", e.itemsContainerClass])
              }, [
                (n(!0), s(R, null, K(a.value, (h, y) => (n(), s(R, null, [
                  De(h) ? (n(), s("li", {
                    key: 0,
                    class: "lkt-table-item",
                    "data-i": y
                  }, [
                    $(e.$slots, "item", oe({
                      [e.slotItemVar || ""]: h,
                      index: y,
                      editing: S.value,
                      canCreate: ue.value,
                      canRead: Te.value,
                      canUpdate: fe.value,
                      canDrop: pe.value,
                      isLoading: E.value,
                      doDrop: () => Se(y)
                    }))
                  ], 8, Bl)) : v("", !0)
                ], 64))), 256))
              ], 2)) : f(Q).Ul ? (n(), s("ol", {
                key: 3,
                class: j(["lkt-table-items-container", e.itemsContainerClass])
              }, [
                (n(!0), s(R, null, K(a.value, (h, y) => (n(), s(R, null, [
                  De(h) ? (n(), s("li", {
                    key: 0,
                    class: "lkt-table-item",
                    "data-i": y
                  }, [
                    $(e.$slots, "item", oe({
                      [e.slotItemVar || ""]: h,
                      index: y,
                      editing: S.value,
                      canCreate: ue.value,
                      canRead: Te.value,
                      canUpdate: fe.value,
                      canDrop: pe.value,
                      isLoading: E.value,
                      doDrop: () => Se(y)
                    }))
                  ], 8, Vl)) : v("", !0)
                ], 64))), 256))
              ], 2)) : v("", !0)
            ], 8, vl), [
              [ye, !E.value && a.value.length > 0]
            ]),
            !E.value && a.value.length === 0 ? (n(), s("div", wl, [
              f(u).empty ? $(e.$slots, "empty", { key: 0 }) : Mt.value ? (n(), g(ee(Nt.value), {
                key: 1,
                message: e.noResultsText
              }, null, 8, ["message"])) : e.noResultsText ? (n(), s(R, { key: 2 }, [
                de(x(e.noResultsText), 1)
              ], 64)) : v("", !0)
            ])) : v("", !0),
            Ie.value || f(u).bottomButtons ? (n(), s("div", El, [
              Ie.value && a.value.length >= e.requiredItemsForBottomCreate ? (n(), g(et, {
                key: 0,
                disabled: !Ye.value || e.createDisabled,
                text: e.createText,
                icon: e.createIcon,
                to: e.createRoute,
                modal: e.modal,
                "modal-data": e.modalData,
                onClick: je,
                onAppend: ze
              }, null, 8, ["disabled", "text", "icon", "to", "modal", "modal-data"])) : v("", !0),
              $(e.$slots, "bottom-buttons")
            ])) : v("", !0),
            e.resource.length > 0 ? (n(), g(O, {
              key: 6,
              ref_key: "paginator",
              ref: ge,
              modelValue: w.value,
              "onUpdate:modelValue": m[1] || (m[1] = (h) => w.value = h),
              resource: e.resource,
              filters: e.filters,
              onLoading: it,
              onPerms: ut,
              onResponse: rt
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
  H as Column,
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
