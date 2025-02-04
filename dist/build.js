import { reactive as K, defineComponent as te, ref as h, watch as L, computed as c, resolveComponent as X, unref as f, openBlock as r, createBlock as C, withCtx as U, createTextVNode as de, toDisplayString as x, createElementBlock as s, mergeProps as Ze, Fragment as R, withModifiers as tt, resolveDynamicComponent as ee, createCommentVNode as v, useSlots as at, normalizeClass as J, createElementVNode as P, createVNode as ue, renderSlot as $, renderList as G, withDirectives as ve, vShow as ye, onMounted as Nt, nextTick as Re, createSlots as Oe, normalizeProps as oe } from "vue";
import { Field as _e } from "lkt-field";
import { __ as ke } from "lkt-i18n";
import { replaceAll as lt, generateRandomString as Lt } from "lkt-string-tools";
import { DataState as At } from "lkt-data-state";
import Ut from "sortablejs";
import { time as Be } from "lkt-date-tools";
var M = /* @__PURE__ */ ((t) => (t.Text = "text", t.Number = "number", t.Check = "check", t.Switch = "switch", t.Select = "select", t.Email = "email", t.Tel = "tel", t.File = "file", t.Link = "link", t.Action = "action", t.Integer = "int", t.Float = "float", t.None = "", t))(M || {});
class H {
  constructor(u = {}) {
    this.key = "", this.label = "", this.sortable = !0, this.hidden = !1, this.editable = !1, this.formatter = void 0, this.checkEmpty = void 0, this.colspan = void 0, this.preferSlot = !0, this.type = M.None, this.link = "", this.action = void 0, this.isForRowKey = !1, this.extractTitleFromColumn = "", this.slotData = {}, this.field = new _e();
    for (let d in u)
      this[d] = u[d];
    this.field = new _e(this.field);
  }
  getHref(u) {
    return typeof this.link == "function" ? this.link(u) : this.link;
  }
  doAction(u) {
    if (typeof this.action == "function")
      return this.action(u);
    console.warn("No action defined");
  }
}
const Pa = (t) => K(new H(t)), Ha = (t, u, d, o = !0) => K(new H({ key: t, label: u, sortable: o, type: M.Link, link: d })), Wa = (t, u, d, o = !0) => K(new H({ key: t, label: u, sortable: o, type: M.Action, action: d })), qa = (t, u, d = !0) => K(new H({ key: t, label: u, type: M.Text, sortable: d })), Ka = (t, u, d = !0) => K(new H({ key: t, label: u, type: M.Number, sortable: d })), ja = (t, u, d = !0) => K(new H({ key: t, label: u, type: M.Number, sortable: d })), za = (t, u, d = !0) => K(new H({ key: t, label: u, type: M.Email, sortable: d })), Ga = (t, u, d = !0) => K(new H({ key: t, label: u, type: M.Tel, sortable: d })), Ja = (t, u, d = !0) => K(new H({ key: t, label: u, type: M.Check, sortable: d })), Qa = (t, u, d = !0) => K(new H({ key: t, label: u, type: M.Switch, sortable: d })), Xa = (t, u, d, o = !0) => K(new H({ key: t, label: u, type: M.Select, sortable: o })), Ya = (t, u, d = !0) => K(new H({ key: t, label: u, type: M.File, sortable: d })), Za = (t, u, d = !0) => K(new H({ key: t, label: u, sortable: d, hidden: !0 })), xe = (t, u, d, o) => {
  if (!d) return 0;
  let n = t[d.key], a = u[d.key];
  if (o === "asc") {
    if (n > a) return 1;
    if (a > n) return -1;
  } else {
    if (n > a) return -1;
    if (a > n) return 1;
  }
  return 0;
}, ie = (t, u, d, o = []) => {
  if (t.extractTitleFromColumn) {
    let n = o.find((a) => a.key === t.extractTitleFromColumn);
    if (n)
      return ie(n, u, d, o);
  }
  if (t.formatter && typeof t.formatter == "function") {
    let n = t.formatter(u[t.key], u, t, d);
    return n.startsWith("__:") ? ke(n.substring(3)) : n;
  }
  return u[t.key];
}, Pt = (t, u, d) => {
  if (!t.colspan) return -1;
  let o = u;
  return d.forEach((n) => {
    let a = Me(t, n);
    a > 0 && a < o && (o = a);
  }), o;
}, Me = (t, u) => t.colspan === !1 ? !1 : typeof t.colspan == "function" ? t.colspan(u) : t.colspan, Ht = (t, u) => typeof t.preferSlot > "u" ? !0 : t.preferSlot === !1 ? !1 : typeof t.preferSlot == "function" ? t.preferSlot(u) : !0, Wt = (t, u, d) => {
  if (typeof t != "object" || !t.key || u.indexOf(t.key) > -1) return !1;
  let o = Me(t, d);
  return typeof t.colspan > "u" ? !0 : (typeof t.colspan < "u" && (typeof t.colspan == "function" ? o = parseInt(t.colspan(d)) : o = parseInt(t.colspan)), o > 0);
}, qt = (t = []) => {
  if (t.length > 0) {
    for (let u = 0; u < t.length; ++u)
      if (t[u].sortable) return t[u].key;
  }
  return "";
}, Kt = (t, u) => {
  if (t.length > 0) {
    for (let d = 0; d < t.length; ++d)
      if (t[d].key === u) return t[d];
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
  setup(t, { emit: u }) {
    const d = u, o = t, n = h(o.modelValue), a = h(n.value[o.column.key]), b = h(null);
    let I = o.column.type;
    [M.Integer, M.Float].includes(I) && (I = M.Number), L(a, (l) => {
      const F = JSON.parse(JSON.stringify(n.value));
      F[o.column.key] = l, d("update:modelValue", F);
    }), L(() => o.modelValue, (l) => {
      n.value = l, a.value = n.value[o.column.key];
    });
    const p = c(() => ({ ...o.column.slotData, item: n.value })), B = c(() => {
      var l, F, Q, N;
      if ((l = o.column.field) != null && l.modalData && typeof ((F = o.column.field) == null ? void 0 : F.modalData) == "object")
        for (let E in o.column.field.modalData)
          if (typeof ((Q = o.column.field) == null ? void 0 : Q.modalData[E]) == "string" && o.column.field.modalData[E].startsWith("prop:")) {
            let T = o.column.field.modalData[E].substring(5);
            n.value[T];
          } else
            o.column.field.modalData[E];
      return (N = o.column.field) == null ? void 0 : N.modalData;
    });
    return (l, F) => {
      const Q = X("lkt-anchor"), N = X("lkt-field");
      return l.column.type === f(M).Link ? (r(), C(Q, {
        key: 0,
        to: l.column.getHref(n.value)
      }, {
        default: U(() => [
          de(x(f(ie)(l.column, n.value, l.i)), 1)
        ]),
        _: 1
      }, 8, ["to"])) : l.column.type === f(M).Action ? (r(), s("a", {
        key: 1,
        href: "#",
        onClick: F[0] || (F[0] = (E) => l.column.doAction(n.value))
      }, x(f(ie)(l.column, n.value, l.i)), 1)) : l.column.type !== "" && l.hasInlineEditPerm ? (r(), C(N, Ze({ key: 2 }, l.column.field, {
        type: f(I),
        "read-mode": !l.column.editable || !l.editModeEnabled,
        ref: (E) => b.value = E,
        "slot-data": p.value,
        label: l.column.type === "switch" || l.column.type === "check" ? l.column.label : "",
        "modal-data": B.value,
        prop: n.value,
        modelValue: a.value,
        "onUpdate:modelValue": F[1] || (F[1] = (E) => a.value = E)
      }), null, 16, ["type", "read-mode", "slot-data", "label", "modal-data", "prop", "modelValue"])) : l.column.type !== "" ? (r(), C(N, Ze({ key: 3 }, l.column.field, {
        type: f(I),
        "read-mode": "",
        ref: (E) => b.value = E,
        "slot-data": p.value,
        label: l.column.type === "switch" || l.column.type === "check" ? l.column.label : "",
        "modal-data": B.value,
        prop: n.value,
        "model-value": a.value
      }), null, 16, ["type", "slot-data", "label", "modal-data", "prop", "model-value"])) : (r(), s(R, { key: 4 }, [
        de(x(f(ie)(l.column, n.value, l.i, l.columns)), 1)
      ], 64));
    };
  }
}), O = class O {
};
O.navButtonSlot = "", O.dropButtonSlot = "", O.editButtonSlot = "", O.createButtonSlot = "", O.defaultEmptySlot = void 0, O.defaultSaveIcon = "", O.defaultNoResultsMessage = "No results";
let w = O;
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
  setup(t, { emit: u }) {
    const d = u, o = c(() => w.dropButtonSlot !== ""), n = c(() => w.dropButtonSlot);
    return (a, b) => {
      const I = X("lkt-button");
      return r(), C(I, {
        palette: "table-delete",
        icon: o.value ? "" : a.icon,
        text: o.value ? "" : a.text,
        resource: a.resource,
        "resource-data": a.resourceData,
        "confirm-modal": a.confirm,
        disabled: a.disabled,
        onClick: b[0] || (b[0] = tt((p) => d("click"), ["prevent", "stop"]))
      }, {
        default: U(() => [
          o.value ? (r(), C(ee(n.value), { key: 0 })) : v("", !0)
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
  setup(t, { emit: u }) {
    const d = u, o = c(() => w.editButtonSlot !== ""), n = c(() => w.editButtonSlot);
    return (a, b) => {
      const I = X("lkt-button");
      return r(), C(I, {
        palette: "table-delete",
        icon: o.value ? "" : a.icon,
        text: o.value ? "" : a.text,
        "on-click-to": a.link,
        "is-anchor": a.link !== "",
        resource: a.resource,
        "resource-data": a.resourceData,
        "confirm-modal": a.confirm,
        disabled: a.disabled,
        onClick: b[0] || (b[0] = tt((p) => d("click"), ["prevent", "stop"]))
      }, {
        default: U(() => [
          o.value ? (r(), C(ee(n.value), { key: 0 })) : v("", !0)
        ]),
        _: 1
      }, 8, ["icon", "text", "on-click-to", "is-anchor", "resource", "resource-data", "confirm-modal", "disabled"]);
    };
  }
});
var _ = /* @__PURE__ */ ((t) => (t[t.Auto = 0] = "Auto", t[t.PreferItem = 1] = "PreferItem", t[t.PreferCustomItem = 2] = "PreferCustomItem", t[t.PreferColumns = 3] = "PreferColumns", t))(_ || {});
const Gt = ["data-i", "data-draggable"], Jt = ["data-i"], Qt = {
  key: 1,
  "data-role": "invalid-drag-indicator"
}, Xt = {
  key: 2,
  class: "lkt-table-nav-cell"
}, Yt = { class: "lkt-table-nav-container" }, Zt = ["colspan"], Ot = ["colspan"], _t = ["data-column", "colspan", "title"], xt = {
  key: 7,
  class: "lkt-table-col-drop"
}, ea = {
  key: 8,
  class: "lkt-table-col-edit"
}, ta = /* @__PURE__ */ te({
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
    renderDrag: { type: [Boolean, Function], default: !0 },
    disabledDrag: { type: [Boolean, Function], default: !0 }
  },
  emits: ["update:modelValue", "click", "show", "item-up", "item-down", "item-drop"],
  setup(t, { emit: u }) {
    const d = at(), o = u, n = t, a = h(n.modelValue);
    let b = typeof n.rowDisplayType == "function" ? n.rowDisplayType(a.value, n.i) : n.rowDisplayType;
    b || (b = _.Auto);
    const I = [_.Auto, _.PreferCustomItem].includes(b), p = [_.Auto, _.PreferItem].includes(b), B = h(n.editLink);
    for (let i in a.value) B.value = lt(B.value, ":" + i, a.value[i]);
    const l = (i) => o("click", i), F = (i, k) => {
      o("show", i, k);
    }, Q = c(() => {
      let i = [], k = !1;
      return typeof n.disabledDrag == "function" ? k = n.disabledDrag(a.value) : k = n.disabledDrag === !0, !k && n.sortable && n.isDraggable ? i.push("handle") : k && i.push("disabled"), i.join(" ");
    }), N = c(() => w.navButtonSlot !== ""), E = c(() => w.navButtonSlot), T = () => {
      o("item-up", n.i);
    }, he = () => {
      o("item-down", n.i);
    }, A = () => {
      o("item-drop", n.i);
    }, ge = () => {
    };
    L(() => n.modelValue, (i) => a.value = i), L(a, (i) => {
      o("update:modelValue", i);
    }, { deep: !0 });
    const se = c(() => typeof n.renderDrag == "function" ? n.renderDrag(a.value) : n.renderDrag === !0);
    return c(() => typeof n.disabledDrag == "function" ? n.disabledDrag(a.value) : n.disabledDrag === !0), (i, k) => {
      const D = X("lkt-button");
      return r(), s("tr", {
        "data-i": i.i,
        "data-draggable": i.isDraggable,
        class: J({ "type-custom-item": f(I), "type-item": f(p) })
      }, [
        i.sortable && i.isDraggable && i.editModeEnabled && se.value ? (r(), s("td", {
          key: 0,
          "data-role": "drag-indicator",
          class: J(Q.value),
          "data-i": i.i
        }, null, 10, Jt)) : i.sortable && i.editModeEnabled && se.value ? (r(), s("td", Qt)) : v("", !0),
        i.addNavigation && i.editModeEnabled ? (r(), s("td", Xt, [
          P("div", Yt, [
            ue(D, {
              palette: "table-nav",
              disabled: i.i === 0,
              onClick: T
            }, {
              default: U(() => [
                N.value ? (r(), C(ee(E.value), {
                  key: 0,
                  direction: "up"
                })) : (r(), s(R, { key: 1 }, [
                  k[3] || (k[3] = P("i", { class: "" }, null, -1)),
                  k[4] || (k[4] = de(" UP "))
                ], 64))
              ]),
              _: 1
            }, 8, ["disabled"]),
            ue(D, {
              palette: "table-nav",
              disabled: i.latestRow,
              onClick: he
            }, {
              default: U(() => [
                N.value ? (r(), C(ee(E.value), {
                  key: 0,
                  direction: "down"
                })) : (r(), s(R, { key: 1 }, [
                  k[5] || (k[5] = P("i", { class: "" }, null, -1)),
                  k[6] || (k[6] = de(" DOWN "))
                ], 64))
              ]),
              _: 1
            }, 8, ["disabled"])
          ])
        ])) : v("", !0),
        i.displayHiddenColumnsIndicator ? (r(), s("td", {
          key: 3,
          onClick: k[0] || (k[0] = (V) => F(V, i.i)),
          "data-role": "show-more",
          class: J(i.hiddenIsVisible ? "state-open" : "")
        }, null, 2)) : v("", !0),
        f(I) && f(d)[`item-${i.i}`] ? (r(), s("td", {
          key: "td" + i.i,
          colspan: i.visibleColumns.length
        }, [
          $(i.$slots, `item-${i.i}`, {
            item: a.value,
            index: i.i
          })
        ], 8, Zt)) : f(p) && f(d).item ? (r(), s("td", {
          key: "td" + i.i,
          colspan: i.visibleColumns.length
        }, [
          $(i.$slots, "item", {
            item: a.value,
            index: i.i
          })
        ], 8, Ot)) : (r(!0), s(R, { key: 6 }, G(i.visibleColumns, (V) => (r(), s(R, null, [
          f(Wt)(V, i.emptyColumns, a.value) ? (r(), s("td", {
            key: "td" + i.i,
            "data-column": V.key,
            colspan: f(Me)(V, a.value),
            title: f(ie)(V, a.value, i.i, i.visibleColumns),
            class: J(f(ot)(V)),
            onClick: k[2] || (k[2] = (ae) => l(ae))
          }, [
            i.$slots[V.key] && f(Ht)(V, a.value) ? $(i.$slots, V.key, {
              key: 0,
              value: a.value[V.key],
              item: a.value,
              column: V,
              i: i.i
            }) : a.value ? (r(), C(nt, {
              key: 1,
              modelValue: a.value,
              "onUpdate:modelValue": k[1] || (k[1] = (ae) => a.value = ae),
              column: V,
              columns: i.visibleColumns,
              "edit-mode-enabled": i.editModeEnabled,
              "has-inline-edit-perm": i.hasInlineEditPerm,
              i: i.i
            }, null, 8, ["modelValue", "column", "columns", "edit-mode-enabled", "has-inline-edit-perm", "i"])) : v("", !0)
          ], 10, _t)) : v("", !0)
        ], 64))), 256)),
        i.canDrop && i.editModeEnabled ? (r(), s("td", xt, [
          ue(jt, {
            resource: i.dropResource,
            "resource-data": a.value,
            confirm: i.dropConfirm,
            text: i.dropText,
            icon: i.dropIcon,
            onClick: A
          }, null, 8, ["resource", "resource-data", "confirm", "text", "icon"])
        ])) : v("", !0),
        i.canEdit && i.editModeEnabled ? (r(), s("td", ea, [
          ue(zt, {
            "resource-data": a.value,
            text: i.editText,
            icon: i.editIcon,
            link: B.value,
            onClick: ge
          }, null, 8, ["resource-data", "text", "icon", "link"])
        ])) : v("", !0)
      ], 10, Gt);
    };
  }
}), aa = { "data-role": "hidden-row" }, la = ["colspan"], oa = ["data-column"], na = ["data-i"], ra = ["data-column", "title", "onClick"], ua = /* @__PURE__ */ te({
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
  setup(t, { emit: u }) {
    const d = u, o = t, n = h(o.modelValue), a = (b) => d("click", b);
    return L(() => o.modelValue, (b) => n.value = b), L(n, () => d("update:modelValue", n.value)), (b, I) => ve((r(), s("tr", aa, [
      P("td", { colspan: b.hiddenColumnsColSpan }, [
        P("table", null, [
          P("tr", null, [
            (r(!0), s(R, null, G(b.hiddenColumns, (p) => (r(), s("th", {
              "data-column": p.key
            }, [
              P("div", null, x(p.label), 1)
            ], 8, oa))), 256))
          ]),
          P("tr", { "data-i": b.i }, [
            (r(!0), s(R, null, G(b.hiddenColumns, (p, B) => (r(), s("td", {
              "data-column": p.key,
              title: f(ie)(p, n.value, B, b.hiddenColumns),
              onClick: (l) => a(l, n.value)
            }, [
              b.$slots[p.key] ? $(b.$slots, p.key, {
                key: 0,
                value: n.value[p.key],
                item: n.value,
                column: p,
                i: B
              }) : (r(), C(nt, {
                key: 1,
                column: p,
                columns: b.hiddenColumns,
                modelValue: n.value,
                "onUpdate:modelValue": I[0] || (I[0] = (l) => n.value = l),
                i: B
              }, null, 8, ["column", "columns", "modelValue", "i"]))
            ], 8, ra))), 256))
          ], 8, na)
        ])
      ], 8, la)
    ], 512)), [
      [ye, b.hiddenIsVisible]
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
  setup(t, { emit: u }) {
    const d = u, o = t, n = c(() => w.createButtonSlot !== ""), a = c(() => w.createButtonSlot), b = {
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
    return (p, B) => {
      const l = X("lkt-button");
      return r(), C(l, {
        palette: "table-create",
        disabled: p.disabled,
        icon: n.value ? "" : p.icon,
        text: n.value ? "" : p.text,
        modal: p.modal,
        "modal-data": b,
        "on-click-to": p.to,
        onClick: I
      }, {
        default: U(() => [
          n.value ? (r(), C(ee(a.value), { key: 0 })) : v("", !0)
        ]),
        _: 1
      }, 8, ["disabled", "icon", "text", "modal", "on-click-to"]);
    };
  }
}), ia = ["data-column", "data-sortable", "data-sort", "colspan", "title"], da = /* @__PURE__ */ te({
  __name: "TableHeader",
  props: {
    column: { default: () => ({}) },
    sortBy: { default: "" },
    sortDirection: { default: "" },
    amountOfColumns: { default: 0 },
    items: { default: () => [] }
  },
  emits: ["click"],
  setup(t, { emit: u }) {
    const d = u, o = t, n = c(() => Pt(o.column, o.amountOfColumns, o.items)), a = c(() => o.column.sortable === !0), b = c(() => a.value && o.sortBy === o.column.key ? o.sortDirection : ""), I = c(() => o.column.label.startsWith("__:") ? ke(o.column.label.substring(3)) : o.column.label), p = () => d("click", o.column);
    return (B, l) => (r(), s("th", {
      "data-column": B.column.key,
      "data-sortable": a.value,
      "data-sort": b.value,
      colspan: n.value,
      title: I.value,
      class: J(f(ot)(B.column)),
      onClick: p
    }, [
      P("div", null, x(I.value), 1)
    ], 10, ia));
  }
});
var Y = /* @__PURE__ */ ((t) => (t.Table = "table", t.Item = "item", t.Ul = "ul", t.Ol = "ol", t))(Y || {}), Z = /* @__PURE__ */ ((t) => (t.Create = "create", t.Update = "update", t.Edit = "edit", t.Drop = "drop", t.Sort = "sort", t.InlineEdit = "inline-edit", t.InlineCreate = "inline-create", t.ModalCreate = "modal-create", t.InlineCreateEver = "inline-create-ever", t))(Z || {}), be = /* @__PURE__ */ ((t) => (t.Asc = "asc", t.Desc = "desc", t))(be || {});
const sa = ["id"], ca = {
  key: 0,
  class: "lkt-table-page-buttons"
}, ma = { key: 1 }, fa = { class: "switch-edition-mode" }, pa = {
  key: 1,
  class: "lkt-table-page-buttons"
}, va = {
  key: 2,
  class: "lkt-table-page-filters"
}, ya = ["data-sortable"], ba = { key: 0 }, ka = {
  key: 0,
  "data-role": "drag-indicator"
}, ha = { key: 1 }, ga = { key: 2 }, Ca = {
  key: 3,
  class: "lkt-table-col-drop"
}, Da = {
  key: 4,
  class: "lkt-table-col-edit"
}, Sa = ["id"], Ia = ["id"], Ba = ["data-i"], Va = ["data-i"], wa = ["data-i"], Ea = {
  key: 4,
  class: "lkt-table-empty"
}, Ta = {
  key: 5,
  class: "lkt-table-page-buttons lkt-table-page-buttons-bottom"
}, $a = /* @__PURE__ */ te({
  __name: "LktTable",
  props: {
    modelValue: { default: () => [] },
    type: { default: Y.Table },
    columns: { default: () => [] },
    sorter: { type: Function, default: xe },
    draggableChecker: { type: Function, default: (t) => !0 },
    checkValidDrag: { type: Function, default: void 0 },
    renderDrag: { type: [Boolean, Function], default: !0 },
    disabledDrag: { type: [Boolean, Function] },
    sortable: { type: Boolean, default: !1 },
    hideEmptyColumns: { type: Boolean, default: !1 },
    initialSorting: { type: Boolean, default: !1 },
    draggableItemKey: { default: "name" },
    itemDisplayChecker: {},
    loading: { type: Boolean, default: !1 },
    page: { default: 1 },
    perms: { default: () => [] },
    resource: { default: "" },
    noResultsText: { default: w.defaultNoResultsMessage },
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
  setup(t, { expose: u, emit: d }) {
    const o = d, n = at(), a = t, b = {}, I = h(typeof a.sorter == "function" ? a.sorter : xe), p = h(qt(a.columns)), B = h(be.Asc), l = h(a.modelValue), F = h(b), Q = h(null), N = h(a.columns), E = h(a.page), T = h(a.loading), he = h(!1), A = h(a.perms), ge = h(null), se = h(null), i = h({}), k = h(new At({ items: l.value }, a.dataStateConfig)), D = h(a.editMode), V = h(0), ae = h(null), ne = h(!1);
    L(T, (e) => o("update:loading", e)), L(E, (e) => o("page", e));
    const ce = h(a.type);
    a.itemMode && ce.value === Y.Table && (ce.value = Y.Item);
    const rt = (e) => {
      A.value = e;
    }, ut = (e) => {
      Array.isArray(e.data) && (l.value = e.data), T.value = !1, he.value = !0, k.value.store({ items: l.value }).turnStoredIntoOriginal(), ne.value = !1, Re(() => {
        o("read-response", e);
      });
    }, it = () => Re(() => T.value = !0), dt = () => {
      ge.value.doRefresh();
    }, me = Lt(12), Ve = c(() => {
      if (!a.hideEmptyColumns) return [];
      let e = [];
      return N.value.forEach((m) => {
        let S = m.key, W = !1;
        l.value.forEach((j) => {
          if (typeof j.checkEmpty == "function")
            return j.checkEmpty(j);
          j[S] && (W = !0);
        }), W || e.push(S);
      }), e;
    }), Ce = c(() => N.value.filter((e) => !e.hidden)), we = c(() => N.value.filter((e) => e.hidden)), st = c(() => {
      let e = Ce.value.length + 1;
      return a.sortable && ++e, e;
    }), ct = c(() => N.value.filter((e) => e.isForRowKey)), Fe = c(() => we.value.length > 0 && !a.sortable), mt = c(() => N.value.map((e) => e.key)), Ne = c(() => {
      let e = [];
      for (let m in n) mt.value.indexOf(m) !== -1 && e.push(m);
      return e;
    }), Le = c(() => a.hiddenSave || T.value || !a.saveResource ? !1 : D.value && ne.value ? !0 : D.value), ft = c(() => Se.value && l.value.length >= a.requiredItemsForTopCreate || a.switchEditionEnabled ? !0 : Le.value || D.value && re.value), pt = c(() => a.saveDisabled || typeof a.saveValidator == "function" && !a.saveValidator(l.value) ? !1 : ne.value), vt = c(() => l.value.length), yt = c(() => ({
      items: l.value,
      ...a.saveResourceData
    })), bt = c(() => a.titleTag === "" ? "h2" : a.titleTag), kt = c(() => a.wrapContentTag === "" ? "div" : a.wrapContentTag), Ee = c(() => a.title.startsWith("__:") ? ke(a.title.substring(3)) : a.title), ht = c(() => a.saveText.startsWith("__:") ? ke(a.saveText.substring(3)) : a.saveText), gt = c(() => a.editModeText.startsWith("__:") ? ke(a.editModeText.substring(3)) : a.editModeText), re = c(() => A.value.includes(Z.Create)), Te = c(() => A.value.includes("read")), fe = c(() => A.value.includes(Z.Update)), Ae = c(() => A.value.includes(Z.Edit)), Ct = c(() => A.value.includes(Z.InlineEdit)), Dt = c(() => A.value.includes(Z.ModalCreate)), St = c(() => A.value.includes(Z.InlineCreate)), Ue = c(() => A.value.includes(Z.InlineCreateEver)), pe = c(() => A.value.includes(Z.Drop)), It = (e) => {
      let m = e.target;
      if (typeof m.dataset.column > "u")
        do
          m = m.parentNode;
        while (typeof m.dataset.column > "u" && m.tagName !== "TABLE" && m.tagName !== "body");
      if (m.tagName === "TD" && (m = m.parentNode, m = m.dataset.i, typeof m < "u"))
        return l.value[m];
    }, Bt = (e) => l.value[e], Vt = (e) => {
      var m;
      return (m = Q.value) == null ? void 0 : m.querySelector(`[data-i="${e}"]`);
    }, Pe = (e) => F.value["tr_" + e] === !0, He = (e) => {
      e && e.sortable && (l.value = l.value.sort((m, S) => I.value(m, S, e, B.value)), B.value = B.value === be.Asc ? be.Desc : be.Asc, p.value = e.key, o("sort", [p.value, B.value]));
    }, We = (e) => {
      o("click", e);
    }, qe = (e, m) => {
      let S = "tr_" + m;
      F.value[S] = typeof F.value[S] > "u" ? !0 : !F.value[S];
    }, wt = (e) => {
      var S, W, j, z;
      let m = parseInt((z = (j = (W = (S = e == null ? void 0 : e.originalEvent) == null ? void 0 : S.toElement) == null ? void 0 : W.closest("tr")) == null ? void 0 : j.dataset) == null ? void 0 : z.i);
      return typeof a.disabledDrag == "function" && a.disabledDrag(l.value[m]) || typeof a.disabledDrag == "boolean" && a.disabledDrag ? !1 : typeof a.checkValidDrag == "function" ? a.checkValidDrag(e) : !0;
    }, Ke = (e) => typeof a.draggableChecker == "function" ? a.draggableChecker(e) : !0, je = () => {
      if (re.value) {
        o("click-create");
        return;
      }
      if (Ue.value)
        o("click-create");
      else {
        if (typeof a.newValueGenerator == "function") {
          let e = a.newValueGenerator();
          if (typeof e == "object" || ce.value !== Y.Table) {
            l.value.push(e);
            return;
          }
        }
        l.value.push({});
      }
    }, ze = (e) => {
      l.value.push(e);
    }, Ge = () => {
      T.value = !0;
    }, Je = () => {
      T.value = !1;
    }, Et = (e, m) => {
      if (o("before-save"), a.saveResource && (T.value = !1, !m.success)) {
        o("error", m.httpStatus);
        return;
      }
      k.value.turnStoredIntoOriginal(), ne.value = !1, o("save", m);
    }, Qe = (e, m, S) => {
      if (S >= e.length) {
        let W = S - e.length + 1;
        for (; W--; ) e.push(void 0);
      }
      return e.splice(S, 0, e.splice(m, 1)[0]), e;
    }, Tt = (e) => {
      Qe(l.value, e, e - 1), V.value = Be();
    }, $t = (e) => {
      Qe(l.value, e, e + 1), V.value = Be();
    }, De = (e) => {
      l.value.splice(e, 1), V.value = Be();
    }, Rt = () => {
      i.value && (i.value.destroy(), i.value = {});
    }, Xe = () => {
      ae.value || (ae.value = document.getElementById("lkt-table-body-" + me)), i.value = new Ut(ae.value, {
        direction: "vertical",
        handle: ".handle",
        animation: 150,
        onEnd: function(e) {
          let m = e.oldIndex, S = e.newIndex;
          l.value.splice(S, 0, l.value.splice(m, 1)[0]), V.value = Be(), o("drag-end", l.value[S]);
        },
        onMove: function(e, m) {
          return wt(e);
        }
      });
    }, $e = (e, m, S = !1) => {
      let W = [V.value, me, "row", m];
      return S && W.push("hidden"), ct.value.forEach((j) => {
        let z = String(e[j.key]).toLowerCase();
        z.length > 50 && (z = z.substring(0, 50)), z = lt(z, " ", "-"), W.push(z);
      }), W.join("-");
    }, Ye = c(() => typeof a.createEnabledValidator == "function" ? a.createEnabledValidator({ items: l.value }) : !0), Se = c(() => Ue.value || re.value && D.value || St.value && D.value || Dt.value && D.value), Ie = (e, m) => typeof a.itemDisplayChecker == "function" ? a.itemDisplayChecker(e) : !0;
    Nt(() => {
      a.initialSorting && He(Kt(a.columns, p.value)), k.value.store({ items: l.value }).turnStoredIntoOriginal(), ne.value = !1, a.sortable && Re(() => {
        Xe();
      });
    }), L(() => a.sortable, (e) => {
      e ? Xe() : Rt();
    }), L(() => a.perms, (e) => A.value = e), L(A, (e) => o("update:perms", e)), L(() => a.editMode, (e) => D.value = e), L(() => a.columns, (e) => N.value = e, { deep: !0 }), L(() => a.modelValue, (e) => l.value = e, { deep: !0 }), L(l, (e) => {
      k.value.increment({ items: e }), ne.value = k.value.changed(), o("update:modelValue", e);
    }, { deep: !0 }), u({
      getItemByEvent: It,
      getItemByIndex: Bt,
      getRowByIndex: Vt,
      doRefresh: dt,
      getHtml: () => se.value
    });
    const Mt = c(() => typeof w.defaultEmptySlot < "u"), Ft = c(() => w.defaultEmptySlot);
    return (e, m) => {
      const S = X("lkt-button"), W = X("lkt-field"), j = X("lkt-loader"), z = X("lkt-paginator");
      return r(), s("section", {
        ref_key: "element",
        ref: se,
        class: "lkt-table-page",
        id: "lkt-table-page-" + f(me)
      }, [
        Ee.value || f(n).title ? (r(), s("header", {
          key: 0,
          class: J(e.headerClass)
        }, [
          Ee.value ? (r(), C(ee(bt.value), { key: 0 }, {
            default: U(() => [
              e.titleIcon ? (r(), s("i", {
                key: 0,
                class: J(e.titleIcon)
              }, null, 2)) : v("", !0),
              de(" " + x(Ee.value), 1)
            ]),
            _: 1
          })) : v("", !0),
          f(n).title ? $(e.$slots, "title", { key: 1 }) : v("", !0)
        ], 2)) : v("", !0),
        (r(), C(ee(kt.value), {
          class: J(["lkt-table-page-content-wrapper", e.wrapContentClass])
        }, {
          default: U(() => [
            ft.value ? (r(), s("div", ca, [
              ve(ue(S, {
                class: "lkt-table--save-button",
                ref: "saveButton",
                icon: f(w).defaultSaveIcon,
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
                split: U(({ doClose: g, doRootClick: y }) => [
                  $(e.$slots, "button-save-split", {
                    doClose: g,
                    doRootClick: y,
                    dataState: k.value,
                    onButtonLoading: Ge,
                    onButtonLoaded: Je
                  })
                ]),
                default: U(() => [
                  f(n)["button-save"] ? $(e.$slots, "button-save", {
                    key: 0,
                    items: l.value,
                    editMode: e.editMode,
                    canUpdate: !e.saveDisabled
                  }) : (r(), s("span", ma, x(ht.value), 1))
                ]),
                _: 3
              }, 8, ["icon", "disabled", "confirm-modal", "confirm-data", "resource", "resource-data", "split", "tooltip-engine"]), [
                [ye, Le.value]
              ]),
              Se.value && l.value.length >= e.requiredItemsForTopCreate ? (r(), C(et, {
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
              P("div", fa, [
                ve(ue(W, {
                  type: "switch",
                  modelValue: D.value,
                  "onUpdate:modelValue": m[0] || (m[0] = (g) => D.value = g),
                  label: gt.value
                }, null, 8, ["modelValue", "label"]), [
                  [ye, e.switchEditionEnabled]
                ])
              ])
            ])) : v("", !0),
            f(n).buttons ? (r(), s("div", pa, [
              $(e.$slots, "buttons")
            ])) : v("", !0),
            he.value && f(n).filters ? (r(), s("div", va, [
              $(e.$slots, "filters", {
                items: l.value,
                isLoading: T.value
              })
            ])) : v("", !0),
            T.value ? (r(), C(j, { key: 3 })) : v("", !0),
            ve(P("div", {
              class: "lkt-table",
              "data-sortable": e.sortable
            }, [
              ce.value === f(Y).Table ? (r(), s("table", ba, [
                P("thead", null, [
                  P("tr", null, [
                    e.sortable && D.value ? (r(), s("th", ka)) : v("", !0),
                    e.addNavigation && D.value ? (r(), s("th", ha)) : v("", !0),
                    Fe.value ? (r(), s("th", ga)) : v("", !0),
                    (r(!0), s(R, null, G(Ce.value, (g) => (r(), s(R, null, [
                      Ve.value.indexOf(g.key) === -1 ? (r(), C(da, {
                        key: 0,
                        column: g,
                        "sort-by": p.value,
                        "sort-direction": B.value,
                        "amount-of-columns": e.columns.length,
                        items: l.value,
                        onClick: (y) => He(g)
                      }, null, 8, ["column", "sort-by", "sort-direction", "amount-of-columns", "items", "onClick"])) : v("", !0)
                    ], 64))), 256)),
                    pe.value && D.value ? (r(), s("th", Ca)) : v("", !0),
                    Ae.value && fe.value && D.value ? (r(), s("th", Da)) : v("", !0)
                  ])
                ]),
                P("tbody", {
                  ref_key: "tableBody",
                  ref: Q,
                  id: "lkt-table-body-" + f(me)
                }, [
                  (r(!0), s(R, null, G(l.value, (g, y) => ve((r(), C(ta, {
                    modelValue: l.value[y],
                    "onUpdate:modelValue": (q) => l.value[y] = q,
                    key: $e(g, y),
                    i: y,
                    "display-hidden-columns-indicator": Fe.value,
                    "is-draggable": Ke(g),
                    sortable: e.sortable,
                    "visible-columns": Ce.value,
                    "empty-columns": Ve.value,
                    "add-navigation": e.addNavigation,
                    "hidden-is-visible": Pe(y),
                    "latest-row": y + 1 === vt.value,
                    "can-drop": pe.value && D.value,
                    "drop-confirm": e.dropConfirm,
                    "drop-resource": e.dropResource,
                    "drop-text": e.dropText,
                    "drop-icon": e.dropIcon,
                    "can-edit": Ae.value && fe.value && D.value,
                    "edit-text": e.editText,
                    "edit-icon": e.editIcon,
                    "edit-link": e.editLink,
                    "edit-mode-enabled": D.value,
                    "has-inline-edit-perm": Ct.value,
                    "row-display-type": e.rowDisplayType,
                    "render-drag": e.renderDrag,
                    "disabled-drag": e.disabledDrag,
                    onClick: We,
                    onShow: qe,
                    onItemUp: Tt,
                    onItemDown: $t,
                    onItemDrop: De
                  }, Oe({ _: 2 }, [
                    f(n)[`item-${y}`] ? {
                      name: `item-${y}`,
                      fn: U((q) => [
                        $(e.$slots, `item-${y}`, oe({
                          [e.slotItemVar || ""]: q.item,
                          index: y
                        }))
                      ]),
                      key: "0"
                    } : f(n).item ? {
                      name: "item",
                      fn: U((q) => [
                        $(e.$slots, "item", oe({
                          [e.slotItemVar || ""]: q.item,
                          index: y
                        }))
                      ]),
                      key: "1"
                    } : void 0,
                    G(Ne.value, (q) => ({
                      name: q,
                      fn: U((le) => [
                        $(e.$slots, q, oe({
                          [e.slotItemVar || ""]: le.item,
                          value: le.value,
                          column: le.column
                        }))
                      ])
                    }))
                  ]), 1032, ["modelValue", "onUpdate:modelValue", "i", "display-hidden-columns-indicator", "is-draggable", "sortable", "visible-columns", "empty-columns", "add-navigation", "hidden-is-visible", "latest-row", "can-drop", "drop-confirm", "drop-resource", "drop-text", "drop-icon", "can-edit", "edit-text", "edit-icon", "edit-link", "edit-mode-enabled", "has-inline-edit-perm", "row-display-type", "render-drag", "disabled-drag"])), [
                    [ye, Ie(l.value[y])]
                  ])), 128)),
                  we.value.length > 0 ? (r(!0), s(R, { key: 0 }, G(l.value, (g, y) => (r(), C(ua, {
                    modelValue: l.value[y],
                    "onUpdate:modelValue": (q) => l.value[y] = q,
                    key: $e(g, y, !0),
                    i: y,
                    "hidden-columns": we.value,
                    "hidden-columns-col-span": st.value,
                    "is-draggable": Ke(g),
                    sortable: e.sortable,
                    "visible-columns": Ce.value,
                    "empty-columns": Ve.value,
                    "hidden-is-visible": Pe(y),
                    onClick: We,
                    onShow: qe
                  }, Oe({ _: 2 }, [
                    G(Ne.value, (q) => ({
                      name: q,
                      fn: U((le) => [
                        $(e.$slots, q, oe({
                          [e.slotItemVar || ""]: le.item,
                          value: le.value,
                          column: le.column
                        }))
                      ])
                    }))
                  ]), 1032, ["modelValue", "onUpdate:modelValue", "i", "hidden-columns", "hidden-columns-col-span", "is-draggable", "sortable", "visible-columns", "empty-columns", "hidden-is-visible"]))), 128)) : v("", !0)
                ], 8, Sa)
              ])) : ce.value === f(Y).Item ? (r(), s("div", {
                key: 1,
                ref_key: "tableBody",
                ref: Q,
                id: "lkt-table-body-" + f(me),
                class: J(["lkt-table-items-container", e.itemsContainerClass])
              }, [
                (r(!0), s(R, null, G(l.value, (g, y) => (r(), s(R, null, [
                  Ie(g) ? (r(), s("div", {
                    class: "lkt-table-item",
                    "data-i": y,
                    key: $e(g, y)
                  }, [
                    $(e.$slots, "item", oe({
                      [e.slotItemVar || ""]: g,
                      index: y,
                      editing: D.value,
                      canCreate: re.value,
                      canRead: Te.value,
                      canUpdate: fe.value,
                      canDrop: pe.value,
                      isLoading: T.value,
                      doDrop: () => De(y)
                    }))
                  ], 8, Ba)) : v("", !0)
                ], 64))), 256))
              ], 10, Ia)) : f(Y).Ul ? (r(), s("ul", {
                key: 2,
                class: J(["lkt-table-items-container", e.itemsContainerClass])
              }, [
                (r(!0), s(R, null, G(l.value, (g, y) => (r(), s(R, null, [
                  Ie(g) ? (r(), s("li", {
                    key: 0,
                    class: "lkt-table-item",
                    "data-i": y
                  }, [
                    $(e.$slots, "item", oe({
                      [e.slotItemVar || ""]: g,
                      index: y,
                      editing: D.value,
                      canCreate: re.value,
                      canRead: Te.value,
                      canUpdate: fe.value,
                      canDrop: pe.value,
                      isLoading: T.value,
                      doDrop: () => De(y)
                    }))
                  ], 8, Va)) : v("", !0)
                ], 64))), 256))
              ], 2)) : f(Y).Ul ? (r(), s("ol", {
                key: 3,
                class: J(["lkt-table-items-container", e.itemsContainerClass])
              }, [
                (r(!0), s(R, null, G(l.value, (g, y) => (r(), s(R, null, [
                  Ie(g) ? (r(), s("li", {
                    key: 0,
                    class: "lkt-table-item",
                    "data-i": y
                  }, [
                    $(e.$slots, "item", oe({
                      [e.slotItemVar || ""]: g,
                      index: y,
                      editing: D.value,
                      canCreate: re.value,
                      canRead: Te.value,
                      canUpdate: fe.value,
                      canDrop: pe.value,
                      isLoading: T.value,
                      doDrop: () => De(y)
                    }))
                  ], 8, wa)) : v("", !0)
                ], 64))), 256))
              ], 2)) : v("", !0)
            ], 8, ya), [
              [ye, !T.value && l.value.length > 0]
            ]),
            !T.value && l.value.length === 0 ? (r(), s("div", Ea, [
              f(n).empty ? $(e.$slots, "empty", { key: 0 }) : Mt.value ? (r(), C(ee(Ft.value), {
                key: 1,
                message: e.noResultsText
              }, null, 8, ["message"])) : e.noResultsText ? (r(), s(R, { key: 2 }, [
                de(x(e.noResultsText), 1)
              ], 64)) : v("", !0)
            ])) : v("", !0),
            Se.value || f(n).bottomButtons ? (r(), s("div", Ta, [
              Se.value && l.value.length >= e.requiredItemsForBottomCreate ? (r(), C(et, {
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
            e.resource.length > 0 ? (r(), C(z, {
              key: 6,
              ref_key: "paginator",
              ref: ge,
              modelValue: E.value,
              "onUpdate:modelValue": m[1] || (m[1] = (g) => E.value = g),
              resource: e.resource,
              filters: e.filters,
              onLoading: it,
              onPerms: rt,
              onResponse: ut
            }, null, 8, ["modelValue", "resource", "filters"])) : v("", !0)
          ]),
          _: 3
        }, 8, ["class"]))
      ], 8, sa);
    };
  }
}), Oa = {
  install: (t) => {
    t.component("lkt-table") === void 0 && t.component("lkt-table", $a);
  }
}, _a = (t) => (w.navButtonSlot = t, !0), xa = (t) => (w.dropButtonSlot = t, !0), el = (t) => (w.createButtonSlot = t, !0), tl = (t) => {
  w.defaultEmptySlot = t;
}, al = (t) => {
  w.defaultSaveIcon = t;
};
export {
  H as Column,
  Wa as createActionColumn,
  Ja as createCheckColumn,
  Pa as createColumn,
  za as createEmailColumn,
  Ya as createFileColumn,
  ja as createFloatColumn,
  Za as createHiddenColumn,
  Ka as createIntegerColumn,
  Ha as createLinkColumn,
  Xa as createSelectColumn,
  Qa as createSwitchColumn,
  Ga as createTelColumn,
  qa as createTextColumn,
  Oa as default,
  el as setTableCreateButtonSlot,
  xa as setTableDropButtonSlot,
  tl as setTableEmptySlot,
  _a as setTableNavButtonSlot,
  al as setTableSaveIcon
};
