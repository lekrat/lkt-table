import { reactive as q, defineComponent as le, ref as C, watch as M, computed as c, resolveComponent as z, unref as y, openBlock as o, createBlock as I, withCtx as W, createTextVNode as ce, toDisplayString as ee, createElementBlock as s, mergeProps as Je, Fragment as $, withModifiers as _e, resolveDynamicComponent as te, createCommentVNode as v, useSlots as xe, normalizeClass as O, createElementVNode as F, createVNode as se, renderSlot as L, renderList as K, withDirectives as re, vShow as ie, onMounted as Nt, nextTick as Oe, createSlots as Qe, normalizeProps as oe } from "vue";
import { Field as Xe } from "lkt-field";
import { __ as ye } from "lkt-i18n";
import { replaceAll as et, generateRandomString as Mt } from "lkt-string-tools";
import { DataState as Ft } from "lkt-data-state";
import At from "sortablejs";
import { time as Be } from "lkt-date-tools";
class U {
  constructor(u = {}) {
    this.key = "", this.label = "", this.sortable = !0, this.hidden = !1, this.editable = !1, this.formatter = void 0, this.checkEmpty = void 0, this.colspan = void 0, this.preferSlot = !0, this.type = "", this.link = "", this.action = void 0, this.isForRowKey = !1, this.extractTitleFromColumn = "", this.slotData = {}, this.field = new Xe();
    for (let i in u)
      this[i] = u[i];
    this.field = new Xe(this.field);
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
var N = /* @__PURE__ */ ((t) => (t.Text = "text", t.Number = "number", t.Check = "check", t.Switch = "switch", t.Select = "select", t.Email = "email", t.Tel = "tel", t.File = "file", t.Link = "link", t.Action = "action", t.Integer = "int", t.Float = "float", t))(N || {});
const Al = (t) => q(new U(t)), Ul = (t, u, i, a = !0) => q(new U({ key: t, label: u, sortable: a, type: N.Link, link: i })), Pl = (t, u, i, a = !0) => q(new U({ key: t, label: u, sortable: a, type: N.Action, action: i })), Hl = (t, u, i = !0) => q(new U({ key: t, label: u, type: N.Text, sortable: i })), Wl = (t, u, i = !0) => q(new U({ key: t, label: u, type: N.Number, sortable: i })), ql = (t, u, i = !0) => q(new U({ key: t, label: u, type: N.Number, sortable: i })), Kl = (t, u, i = !0) => q(new U({ key: t, label: u, type: N.Email, sortable: i })), jl = (t, u, i = !0) => q(new U({ key: t, label: u, type: N.Tel, sortable: i })), zl = (t, u, i = !0) => q(new U({ key: t, label: u, type: N.Check, sortable: i })), Gl = (t, u, i = !0) => q(new U({ key: t, label: u, type: N.Switch, sortable: i })), Jl = (t, u, i, a = !0) => q(new U({ key: t, label: u, type: N.Select, sortable: a })), Ol = (t, u, i = !0) => q(new U({ key: t, label: u, type: N.File, sortable: i })), Ql = (t, u, i = !0) => q(new U({ key: t, label: u, sortable: i, hidden: !0 })), Ye = (t, u, i, a) => {
  if (!i) return 0;
  let n = t[i.key], l = u[i.key];
  if (a === "asc") {
    if (n > l) return 1;
    if (l > n) return -1;
  } else {
    if (n > l) return -1;
    if (l > n) return 1;
  }
  return 0;
}, de = (t, u, i, a = []) => {
  if (t.extractTitleFromColumn) {
    let n = a.find((l) => l.key === t.extractTitleFromColumn);
    if (n)
      return de(n, u, i, a);
  }
  if (t.formatter && typeof t.formatter == "function") {
    let n = t.formatter(u[t.key], u, t, i);
    return n.startsWith("__:") ? ye(n.substring(3)) : n;
  }
  return u[t.key];
}, Ut = (t, u, i) => {
  if (!t.colspan) return -1;
  let a = u;
  return i.forEach((n) => {
    let l = Re(t, n);
    l > 0 && l < a && (a = l);
  }), a;
}, Re = (t, u) => t.colspan === !1 ? !1 : typeof t.colspan == "function" ? t.colspan(u) : t.colspan, Pt = (t, u) => typeof t.preferSlot > "u" ? !0 : t.preferSlot === !1 ? !1 : typeof t.preferSlot == "function" ? t.preferSlot(u) : !0, Ht = (t, u, i) => {
  if (typeof t != "object" || !t.key || u.indexOf(t.key) > -1) return !1;
  let a = Re(t, i);
  return typeof t.colspan > "u" ? !0 : (typeof t.colspan < "u" && (typeof t.colspan == "function" ? a = parseInt(t.colspan(i)) : a = parseInt(t.colspan)), a > 0);
}, Wt = (t = []) => {
  if (t.length > 0) {
    for (let u = 0; u < t.length; ++u)
      if (t[u].sortable) return t[u].key;
  }
  return "";
}, qt = (t, u) => {
  if (t.length > 0) {
    for (let i = 0; i < t.length; ++i)
      if (t[i].key === u) return t[i];
  }
  return null;
}, tt = /* @__PURE__ */ le({
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
  setup(t, { emit: u }) {
    const i = u, a = t, n = C(a.modelValue), l = C(n.value[a.column.key]), p = C(null);
    M(l, (f) => {
      const w = JSON.parse(JSON.stringify(n.value));
      w[a.column.key] = f, i("update:modelValue", w);
    }), M(() => a.modelValue, (f) => {
      n.value = f, l.value = n.value[a.column.key];
    });
    const V = c(() => ({ ...a.column.slotData, item: n.value })), g = c(() => {
      var f, w, R, A;
      if ((f = a.column.field) != null && f.modalData && typeof ((w = a.column.field) == null ? void 0 : w.modalData) == "object")
        for (let h in a.column.field.modalData)
          if (typeof ((R = a.column.field) == null ? void 0 : R.modalData[h]) == "string" && a.column.field.modalData[h].startsWith("prop:")) {
            let ne = a.column.field.modalData[h].substring(5);
            n.value[ne];
          } else
            a.column.field.modalData[h];
      return (A = a.column.field) == null ? void 0 : A.modalData;
    }), E = c(() => {
      var f, w, R;
      if (typeof ((f = a.column.field) == null ? void 0 : f.options) == "string" && ((w = a.column.field) != null && w.options.startsWith("prop:"))) {
        let A = (R = a.column.field) == null ? void 0 : R.options.substring(5);
        return n.value[A];
      }
      return a.column.field.options;
    }), d = c(() => [N.Integer, N.Float].includes(a.column.type) ? N.Number : a.column.type);
    return (f, w) => {
      const R = z("lkt-anchor"), A = z("lkt-field");
      return f.column.type === y(N).Link ? (o(), I(R, {
        key: 0,
        to: f.column.getHref(n.value)
      }, {
        default: W(() => [
          ce(ee(y(de)(f.column, n.value, f.i)), 1)
        ]),
        _: 1
      }, 8, ["to"])) : f.column.type === y(N).Action ? (o(), s("a", {
        key: 1,
        href: "#",
        onClick: w[0] || (w[0] = (h) => f.column.doAction(n.value))
      }, ee(y(de)(f.column, n.value, f.i)), 1)) : f.column.type !== "" && f.hasInlineEditPerm ? (o(), I(A, Je({ key: 2 }, f.column.field, {
        type: d.value,
        "read-mode": !f.column.editable || !f.editModeEnabled,
        ref: (h) => p.value = h,
        "slot-data": V.value,
        label: f.column.type === "switch" || f.column.type === "check" ? f.column.label : "",
        "modal-data": g.value,
        options: E.value,
        prop: n.value,
        modelValue: l.value,
        "onUpdate:modelValue": w[1] || (w[1] = (h) => l.value = h)
      }), null, 16, ["type", "read-mode", "slot-data", "label", "modal-data", "options", "prop", "modelValue"])) : f.column.type !== "" ? (o(), I(A, Je({ key: 3 }, f.column.field, {
        type: d.value,
        "read-mode": "",
        ref: (h) => p.value = h,
        "slot-data": V.value,
        label: f.column.type === "switch" || f.column.type === "check" ? f.column.label : "",
        "modal-data": g.value,
        options: E.value,
        prop: n.value,
        "model-value": l.value
      }), null, 16, ["type", "slot-data", "label", "modal-data", "options", "prop", "model-value"])) : (o(), s($, { key: 4 }, [
        ce(ee(y(de)(f.column, n.value, f.i, f.columns)), 1)
      ], 64));
    };
  }
}), J = class J {
};
J.navButtonSlot = "", J.dropButtonSlot = "", J.editButtonSlot = "", J.createButtonSlot = "", J.defaultEmptySlot = void 0, J.defaultSaveIcon = "", J.defaultNoResultsMessage = "No results";
let D = J;
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
  setup(t, { emit: u }) {
    const i = u, a = c(() => D.dropButtonSlot !== ""), n = c(() => D.dropButtonSlot);
    return (l, p) => {
      const V = z("lkt-button");
      return o(), I(V, {
        palette: "table-delete",
        icon: a.value ? "" : l.icon,
        text: a.value ? "" : l.text,
        resource: l.resource,
        "resource-data": l.resourceData,
        "confirm-modal": l.confirm,
        disabled: l.disabled,
        onClick: p[0] || (p[0] = _e((g) => i("click"), ["prevent", "stop"]))
      }, {
        default: W(() => [
          a.value ? (o(), I(te(n.value), { key: 0 })) : v("", !0)
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
  setup(t, { emit: u }) {
    const i = u, a = c(() => D.editButtonSlot !== ""), n = c(() => D.editButtonSlot);
    return (l, p) => {
      const V = z("lkt-button");
      return o(), I(V, {
        palette: "table-delete",
        icon: a.value ? "" : l.icon,
        text: a.value ? "" : l.text,
        "on-click-to": l.link,
        "is-anchor": l.link !== "",
        resource: l.resource,
        "resource-data": l.resourceData,
        "confirm-modal": l.confirm,
        disabled: l.disabled,
        onClick: p[0] || (p[0] = _e((g) => i("click"), ["prevent", "stop"]))
      }, {
        default: W(() => [
          a.value ? (o(), I(te(n.value), { key: 0 })) : v("", !0)
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
}, Ot = { class: "lkt-table-nav-container" }, Qt = ["colspan"], Xt = ["colspan"], Yt = ["data-column", "colspan", "title"], Zt = {
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
  setup(t, { emit: u }) {
    const i = xe(), a = u, n = t, l = C(n.modelValue);
    let p = typeof n.rowDisplayType == "function" ? n.rowDisplayType(l.value, n.i) : n.rowDisplayType;
    p || (p = x.Auto);
    const V = [x.Auto, x.PreferCustomItem].includes(p), g = [x.Auto, x.PreferItem].includes(p), E = C(n.editLink);
    for (let r in l.value) E.value = et(E.value, ":" + r, l.value[r]);
    const d = (r) => a("click", r), f = (r, B) => {
      a("show", r, B);
    }, w = c(() => {
      let r = [];
      return n.sortable && n.isDraggable && r.push("handle"), r.join(" ");
    }), R = c(() => D.navButtonSlot !== ""), A = c(() => D.navButtonSlot), h = () => {
      a("item-up", n.i);
    }, ne = () => {
      a("item-down", n.i);
    }, P = () => {
      a("item-drop", n.i);
    }, ke = () => {
    };
    return M(() => n.modelValue, (r) => l.value = r), M(l, (r) => {
      a("update:modelValue", r);
    }, { deep: !0 }), (r, B) => {
      const Q = z("lkt-button");
      return o(), s("tr", {
        "data-i": r.i,
        "data-draggable": r.isDraggable,
        class: O({ "type-custom-item": y(V), "type-item": y(g) })
      }, [
        r.sortable && r.isDraggable && r.editModeEnabled ? (o(), s("td", {
          key: 0,
          "data-role": "drag-indicator",
          class: O(w.value)
        }, null, 2)) : r.sortable && r.editModeEnabled ? (o(), s("td", Gt)) : v("", !0),
        r.addNavigation && r.editModeEnabled ? (o(), s("td", Jt, [
          F("div", Ot, [
            se(Q, {
              palette: "table-nav",
              disabled: r.i === 0,
              onClick: h
            }, {
              default: W(() => [
                R.value ? (o(), I(te(A.value), {
                  key: 0,
                  direction: "up"
                })) : (o(), s($, { key: 1 }, [
                  B[3] || (B[3] = F("i", { class: "" }, null, -1)),
                  B[4] || (B[4] = ce(" UP "))
                ], 64))
              ]),
              _: 1
            }, 8, ["disabled"]),
            se(Q, {
              palette: "table-nav",
              disabled: r.latestRow,
              onClick: ne
            }, {
              default: W(() => [
                R.value ? (o(), I(te(A.value), {
                  key: 0,
                  direction: "down"
                })) : (o(), s($, { key: 1 }, [
                  B[5] || (B[5] = F("i", { class: "" }, null, -1)),
                  B[6] || (B[6] = ce(" DOWN "))
                ], 64))
              ]),
              _: 1
            }, 8, ["disabled"])
          ])
        ])) : v("", !0),
        r.displayHiddenColumnsIndicator ? (o(), s("td", {
          key: 3,
          onClick: B[0] || (B[0] = (b) => f(b, r.i)),
          "data-role": "show-more",
          class: O(r.hiddenIsVisible ? "state-open" : "")
        }, null, 2)) : v("", !0),
        y(V) && y(i)[`item-${r.i}`] ? (o(), s("td", {
          key: "td" + r.i,
          colspan: r.visibleColumns.length
        }, [
          L(r.$slots, `item-${r.i}`, {
            item: l.value,
            index: r.i
          })
        ], 8, Qt)) : y(g) && y(i).item ? (o(), s("td", {
          key: "td" + r.i,
          colspan: r.visibleColumns.length
        }, [
          L(r.$slots, "item", {
            item: l.value,
            index: r.i
          })
        ], 8, Xt)) : (o(!0), s($, { key: 6 }, K(r.visibleColumns, (b) => (o(), s($, null, [
          y(Ht)(b, r.emptyColumns, l.value) ? (o(), s("td", {
            key: "td" + r.i,
            "data-column": b.key,
            colspan: y(Re)(b, l.value),
            title: y(de)(b, l.value, r.i, r.visibleColumns),
            onClick: B[2] || (B[2] = (G) => d(G))
          }, [
            r.$slots[b.key] && y(Pt)(b, l.value) ? L(r.$slots, b.key, {
              key: 0,
              value: l.value[b.key],
              item: l.value,
              column: b,
              i: r.i
            }) : l.value ? (o(), I(tt, {
              key: 1,
              modelValue: l.value,
              "onUpdate:modelValue": B[1] || (B[1] = (G) => l.value = G),
              column: b,
              columns: r.visibleColumns,
              "edit-mode-enabled": r.editModeEnabled,
              "has-inline-edit-perm": r.hasInlineEditPerm,
              i: r.i
            }, null, 8, ["modelValue", "column", "columns", "edit-mode-enabled", "has-inline-edit-perm", "i"])) : v("", !0)
          ], 8, Yt)) : v("", !0)
        ], 64))), 256)),
        r.canDrop && r.editModeEnabled ? (o(), s("td", Zt, [
          se(Kt, {
            resource: r.dropResource,
            "resource-data": l.value,
            confirm: r.dropConfirm,
            text: r.dropText,
            icon: r.dropIcon,
            onClick: P
          }, null, 8, ["resource", "resource-data", "confirm", "text", "icon"])
        ])) : v("", !0),
        r.canEdit && r.editModeEnabled ? (o(), s("td", _t, [
          se(jt, {
            "resource-data": l.value,
            text: r.editText,
            icon: r.editIcon,
            link: E.value,
            onClick: ke
          }, null, 8, ["resource-data", "text", "icon", "link"])
        ])) : v("", !0)
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
  setup(t, { emit: u }) {
    const i = u, a = t, n = C(a.modelValue), l = (p) => i("click", p);
    return M(() => a.modelValue, (p) => n.value = p), M(n, () => i("update:modelValue", n.value)), (p, V) => re((o(), s("tr", el, [
      F("td", { colspan: p.hiddenColumnsColSpan }, [
        F("table", null, [
          F("tr", null, [
            (o(!0), s($, null, K(p.hiddenColumns, (g) => (o(), s("th", {
              "data-column": g.key
            }, [
              F("div", null, ee(g.label), 1)
            ], 8, ll))), 256))
          ]),
          F("tr", { "data-i": p.i }, [
            (o(!0), s($, null, K(p.hiddenColumns, (g, E) => (o(), s("td", {
              "data-column": g.key,
              title: y(de)(g, n.value, E, p.hiddenColumns),
              onClick: (d) => l(d, n.value)
            }, [
              p.$slots[g.key] ? L(p.$slots, g.key, {
                key: 0,
                value: n.value[g.key],
                item: n.value,
                column: g,
                i: E
              }) : (o(), I(tt, {
                key: 1,
                column: g,
                columns: p.hiddenColumns,
                modelValue: n.value,
                "onUpdate:modelValue": V[0] || (V[0] = (d) => n.value = d),
                i: E
              }, null, 8, ["column", "columns", "modelValue", "i"]))
            ], 8, ol))), 256))
          ], 8, al)
        ])
      ], 8, tl)
    ], 512)), [
      [ie, p.hiddenIsVisible]
    ]);
  }
}), Ze = /* @__PURE__ */ le({
  __name: "CreateButton",
  props: {
    disabled: { type: Boolean, default: !1 },
    text: { default: "" },
    icon: { default: "" },
    to: { default: "" }
  },
  emits: ["click"],
  setup(t, { emit: u }) {
    const i = u, a = c(() => D.createButtonSlot !== ""), n = c(() => D.createButtonSlot);
    return (l, p) => {
      const V = z("lkt-button");
      return o(), I(V, {
        palette: "table-create",
        disabled: l.disabled,
        icon: a.value ? "" : l.icon,
        text: a.value ? "" : l.text,
        "on-click-to": l.to,
        onClick: p[0] || (p[0] = (g) => i("click"))
      }, {
        default: W(() => [
          a.value ? (o(), I(te(n.value), { key: 0 })) : v("", !0)
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
  setup(t, { emit: u }) {
    const i = u, a = t, n = c(() => Ut(a.column, a.amountOfColumns, a.items)), l = c(() => a.column.sortable === !0), p = c(() => l.value && a.sortBy === a.column.key ? a.sortDirection : ""), V = c(() => a.column.label.startsWith("__:") ? ye(a.column.label.substring(3)) : a.column.label), g = () => i("click", a.column);
    return (E, d) => (o(), s("th", {
      "data-column": E.column.key,
      "data-sortable": l.value,
      "data-sort": p.value,
      colspan: n.value,
      title: V.value,
      onClick: g
    }, [
      F("div", null, ee(V.value), 1)
    ], 8, ul));
  }
});
var Z = /* @__PURE__ */ ((t) => (t.Table = "table", t.Item = "item", t.Ul = "ul", t.Ol = "ol", t))(Z || {}), _ = /* @__PURE__ */ ((t) => (t.Create = "create", t.Update = "update", t.Edit = "edit", t.Drop = "drop", t.Sort = "sort", t.InlineEdit = "inline-edit", t.InlineCreate = "inline-create", t.InlineCreateEver = "inline-create-ever", t))(_ || {}), ve = /* @__PURE__ */ ((t) => (t.Asc = "asc", t.Desc = "desc", t))(ve || {});
const il = ["id"], sl = { class: "lkt-table-page-buttons" }, dl = { key: 1 }, cl = { class: "switch-edition-mode" }, ml = {
  key: 0,
  class: "lkt-table-page-buttons"
}, fl = {
  key: 1,
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
  key: 3,
  class: "lkt-table-empty"
}, Dl = {
  key: 4,
  class: "lkt-table-page-buttons lkt-table-page-buttons-bottom"
}, El = /* @__PURE__ */ le({
  __name: "LktTable",
  props: {
    modelValue: { default: () => [] },
    type: { default: Z.Table },
    columns: { default: () => [] },
    sorter: { type: Function, default: Ye },
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
  setup(t, { expose: u, emit: i }) {
    const a = i, n = xe(), l = t, p = {}, V = C(typeof l.sorter == "function" ? l.sorter : Ye), g = C(Wt(l.columns)), E = C(ve.Asc), d = C(l.modelValue), f = C(p), w = C(null), R = C(l.columns), A = C(l.page), h = C(l.loading), ne = C(!1), P = C(l.perms), ke = C(null), r = C(null), B = C({}), Q = C(new Ft({ items: d.value }, l.dataStateConfig)), b = C(l.editMode), G = C(0), Ve = C(null), ue = C(!1);
    M(h, (e) => a("update:loading", e)), M(A, (e) => a("page", e));
    const be = C(l.type);
    l.itemMode && be.value === Z.Table && (be.value = Z.Item);
    const lt = (e) => {
      Array.isArray(e) && (d.value = e), h.value = !1, ne.value = !0, Q.value.store({ items: d.value }).turnStoredIntoOriginal(), ue.value = !1;
    }, at = (e) => {
      P.value = e;
    }, ot = (e) => {
    }, nt = (e) => {
      a("read-response", e);
    }, ut = () => Oe(() => h.value = !0), rt = () => {
      ke.value.doRefresh();
    }, me = Mt(12), we = c(() => {
      if (!l.hideEmptyColumns) return [];
      let e = [];
      return R.value.forEach((m) => {
        let T = m.key, j = !1;
        d.value.forEach((X) => {
          if (typeof X.checkEmpty == "function")
            return X.checkEmpty(X);
          X[T] && (j = !0);
        }), j || e.push(T);
      }), e;
    }), he = c(() => R.value.filter((e) => !e.hidden)), De = c(() => R.value.filter((e) => e.hidden)), it = c(() => {
      let e = he.value.length + 1;
      return l.sortable && ++e, e;
    }), st = c(() => R.value.filter((e) => e.isForRowKey)), Le = c(() => De.value.length > 0 && !l.sortable), dt = c(() => R.value.map((e) => e.key)), Ne = c(() => {
      let e = [];
      for (let m in n) dt.value.indexOf(m) !== -1 && e.push(m);
      return e;
    }), Me = c(() => l.hiddenSave || h.value || !l.saveResource ? !1 : b.value && ue.value ? !0 : b.value), ct = c(() => Se.value && d.value.length >= l.requiredItemsForTopCreate || l.switchEditionEnabled ? !0 : Me.value || b.value && ge.value), mt = c(() => l.saveDisabled || typeof l.saveValidator == "function" && !l.saveValidator(d.value) ? !1 : ue.value), ft = c(() => d.value.length), pt = c(() => ({
      items: d.value,
      ...l.saveResourceData
    })), vt = c(() => l.titleTag === "" ? "h2" : l.titleTag), yt = c(() => l.wrapContentTag === "" ? "div" : l.wrapContentTag), Ee = c(() => l.title.startsWith("__:") ? ye(l.title.substring(3)) : l.title), kt = c(() => l.saveText.startsWith("__:") ? ye(l.saveText.substring(3)) : l.saveText), bt = c(() => l.editModeText.startsWith("__:") ? ye(l.editModeText.substring(3)) : l.editModeText), ge = c(() => P.value.includes(_.Create)), Te = c(() => P.value.includes("read")), fe = c(() => P.value.includes(_.Update)), Fe = c(() => P.value.includes(_.Edit)), ht = c(() => P.value.includes(_.InlineEdit)), gt = c(() => P.value.includes(_.InlineCreate)), Ae = c(() => P.value.includes(_.InlineCreateEver)), pe = c(() => P.value.includes(_.Drop)), Ct = (e) => {
      let m = e.target;
      if (typeof m.dataset.column > "u")
        do
          m = m.parentNode;
        while (typeof m.dataset.column > "u" && m.tagName !== "TABLE" && m.tagName !== "body");
      if (m.tagName === "TD" && (m = m.parentNode, m = m.dataset.i, typeof m < "u"))
        return d.value[m];
    }, St = (e) => d.value[e], It = (e) => {
      var m;
      return (m = w.value) == null ? void 0 : m.querySelector(`[data-i="${e}"]`);
    }, Ue = (e) => f.value["tr_" + e] === !0, Pe = (e) => {
      e && e.sortable && (d.value = d.value.sort((m, T) => V.value(m, T, e, E.value)), E.value = E.value === ve.Asc ? ve.Desc : ve.Asc, g.value = e.key, a("sort", [g.value, E.value]));
    }, He = (e) => {
      a("click", e);
    }, We = (e, m) => {
      let T = "tr_" + m;
      f.value[T] = typeof f.value[T] > "u" ? !0 : !f.value[T];
    }, Bt = (e) => typeof l.checkValidDrag == "function" ? l.checkValidDrag(e) : !0, qe = (e) => typeof l.draggableChecker == "function" ? l.draggableChecker(e) : !0, Ke = () => {
      if (Ae.value)
        a("click-create");
      else {
        if (typeof l.newValueGenerator == "function") {
          let e = l.newValueGenerator();
          if (typeof e == "object") {
            d.value.push(e);
            return;
          }
        }
        d.value.push({});
      }
    }, Vt = () => {
      h.value = !0;
    }, wt = () => {
      h.value = !1;
    }, Dt = (e, m) => {
      if (a("before-save"), l.saveResource && (h.value = !1, !m.success)) {
        a("error", m.httpStatus);
        return;
      }
      Q.value.turnStoredIntoOriginal(), ue.value = !1, a("save", m);
    }, je = (e, m, T) => {
      if (T >= e.length) {
        let j = T - e.length + 1;
        for (; j--; ) e.push(void 0);
      }
      return e.splice(T, 0, e.splice(m, 1)[0]), e;
    }, Et = (e) => {
      je(d.value, e, e - 1), G.value = Be();
    }, Tt = (e) => {
      je(d.value, e, e + 1), G.value = Be();
    }, Ce = (e) => {
      d.value.splice(e, 1), G.value = Be();
    }, $t = () => {
      B.value && (B.value.destroy(), B.value = {});
    }, ze = () => {
      Ve.value || (Ve.value = document.getElementById("lkt-table-body-" + me)), B.value = new At(Ve.value, {
        direction: "vertical",
        handle: ".handle",
        animation: 150,
        onEnd: function(e) {
          let m = e.oldIndex, T = e.newIndex;
          d.value.splice(T, 0, d.value.splice(m, 1)[0]), G.value = Be(), a("drag-end");
        },
        onMove: function(e, m) {
          return Bt(e);
        }
      });
    }, $e = (e, m, T = !1) => {
      let j = [G.value, me, "row", m];
      return T && j.push("hidden"), st.value.forEach((X) => {
        let Y = String(e[X.key]).toLowerCase();
        Y.length > 50 && (Y = Y.substring(0, 50)), Y = et(Y, " ", "-"), j.push(Y);
      }), j.join("-");
    }, Ge = c(() => typeof l.createEnabledValidator == "function" ? l.createEnabledValidator({ items: d.value }) : !0), Se = c(() => Ae.value || gt.value && b.value), Ie = (e, m) => typeof l.itemDisplayChecker == "function" ? l.itemDisplayChecker(e) : !0;
    Nt(() => {
      l.initialSorting && Pe(qt(l.columns, g.value)), Q.value.store({ items: d.value }).turnStoredIntoOriginal(), ue.value = !1, l.sortable && Oe(() => {
        ze();
      });
    }), M(() => l.sortable, (e) => {
      e ? ze() : $t();
    }), M(() => l.perms, (e) => P.value = e), M(P, (e) => a("update:perms", e)), M(() => l.editMode, (e) => b.value = e), M(() => l.columns, (e) => R.value = e, { deep: !0 }), M(() => l.modelValue, (e) => d.value = e, { deep: !0 }), M(d, (e) => {
      Q.value.increment({ items: e }), ue.value = Q.value.changed(), a("update:modelValue", e);
    }, { deep: !0 }), u({
      getItemByEvent: Ct,
      getItemByIndex: St,
      getRowByIndex: It,
      doRefresh: rt,
      getHtml: () => r.value
    });
    const Rt = c(() => typeof D.defaultEmptySlot < "u"), Lt = c(() => D.defaultEmptySlot);
    return (e, m) => {
      const T = z("lkt-button"), j = z("lkt-field"), X = z("lkt-loader"), Y = z("lkt-paginator");
      return o(), s("section", {
        ref_key: "element",
        ref: r,
        class: "lkt-table-page",
        id: "lkt-table-page-" + y(me)
      }, [
        Ee.value || y(n).title ? (o(), s("header", {
          key: 0,
          class: O(e.headerClass)
        }, [
          Ee.value ? (o(), I(te(vt.value), { key: 0 }, {
            default: W(() => [
              e.titleIcon ? (o(), s("i", {
                key: 0,
                class: O(e.titleIcon)
              }, null, 2)) : v("", !0),
              ce(" " + ee(Ee.value), 1)
            ]),
            _: 1
          })) : v("", !0),
          y(n).title ? L(e.$slots, "title", { key: 1 }) : v("", !0)
        ], 2)) : v("", !0),
        (o(), I(te(yt.value), {
          class: O(["lkt-table-page-content-wrapper", e.wrapContentClass])
        }, {
          default: W(() => [
            re(F("div", sl, [
              re(se(T, {
                class: "lkt-table--save-button",
                ref: "saveButton",
                icon: y(D).defaultSaveIcon,
                disabled: !mt.value,
                "confirm-modal": e.saveConfirm,
                "confirm-data": e.confirmData,
                resource: e.saveResource,
                "resource-data": pt.value,
                onLoading: Vt,
                onLoaded: wt,
                onClick: Dt
              }, {
                default: W(() => [
                  y(n)["button-save"] ? L(e.$slots, "button-save", {
                    key: 0,
                    items: d.value,
                    editMode: e.editMode,
                    canUpdate: !e.saveDisabled
                  }) : (o(), s("span", dl, ee(kt.value), 1))
                ]),
                _: 3
              }, 8, ["icon", "disabled", "confirm-modal", "confirm-data", "resource", "resource-data"]), [
                [ie, Me.value]
              ]),
              Se.value && d.value.length >= e.requiredItemsForTopCreate ? (o(), I(Ze, {
                key: 0,
                disabled: !Ge.value || e.createDisabled,
                text: e.createText,
                icon: e.createIcon,
                to: e.createRoute,
                onClick: Ke
              }, null, 8, ["disabled", "text", "icon", "to"])) : v("", !0),
              F("div", cl, [
                re(se(j, {
                  type: "switch",
                  modelValue: b.value,
                  "onUpdate:modelValue": m[0] || (m[0] = (S) => b.value = S),
                  label: bt.value
                }, null, 8, ["modelValue", "label"]), [
                  [ie, e.switchEditionEnabled]
                ])
              ])
            ], 512), [
              [ie, ct.value]
            ]),
            y(n).buttons ? (o(), s("div", ml, [
              L(e.$slots, "buttons")
            ])) : v("", !0),
            ne.value && y(n).filters ? (o(), s("div", fl, [
              L(e.$slots, "filters", {
                items: d.value,
                isLoading: h.value
              })
            ])) : v("", !0),
            h.value ? (o(), I(X, { key: 2 })) : v("", !0),
            re(F("div", {
              class: "lkt-table",
              "data-sortable": e.sortable
            }, [
              be.value === y(Z).Table ? (o(), s("table", vl, [
                F("thead", null, [
                  F("tr", null, [
                    e.sortable && b.value ? (o(), s("th", yl)) : v("", !0),
                    e.addNavigation && b.value ? (o(), s("th", kl)) : v("", !0),
                    Le.value ? (o(), s("th", bl)) : v("", !0),
                    (o(!0), s($, null, K(he.value, (S) => (o(), s($, null, [
                      we.value.indexOf(S.key) === -1 ? (o(), I(rl, {
                        key: 0,
                        column: S,
                        "sort-by": g.value,
                        "sort-direction": E.value,
                        "amount-of-columns": e.columns.length,
                        items: d.value,
                        onClick: (k) => Pe(S)
                      }, null, 8, ["column", "sort-by", "sort-direction", "amount-of-columns", "items", "onClick"])) : v("", !0)
                    ], 64))), 256)),
                    pe.value && b.value ? (o(), s("th", hl)) : v("", !0),
                    Fe.value && fe.value && b.value ? (o(), s("th", gl)) : v("", !0)
                  ])
                ]),
                F("tbody", {
                  ref_key: "tableBody",
                  ref: w,
                  id: "lkt-table-body-" + y(me)
                }, [
                  (o(!0), s($, null, K(d.value, (S, k) => re((o(), I(xt, {
                    modelValue: d.value[k],
                    "onUpdate:modelValue": (H) => d.value[k] = H,
                    key: $e(S, k),
                    i: k,
                    "display-hidden-columns-indicator": Le.value,
                    "is-draggable": qe(S),
                    sortable: e.sortable,
                    "visible-columns": he.value,
                    "empty-columns": we.value,
                    "add-navigation": e.addNavigation,
                    "hidden-is-visible": Ue(k),
                    "latest-row": k + 1 === ft.value,
                    "can-drop": pe.value && b.value,
                    "drop-confirm": e.dropConfirm,
                    "drop-resource": e.dropResource,
                    "drop-text": e.dropText,
                    "drop-icon": e.dropIcon,
                    "can-edit": Fe.value && fe.value && b.value,
                    "edit-text": e.editText,
                    "edit-icon": e.editIcon,
                    "edit-link": e.editLink,
                    "edit-mode-enabled": b.value,
                    "has-inline-edit-perm": ht.value,
                    "row-display-type": e.rowDisplayType,
                    onClick: He,
                    onShow: We,
                    onItemUp: Et,
                    onItemDown: Tt,
                    onItemDrop: Ce
                  }, Qe({ _: 2 }, [
                    y(n)[`item-${k}`] ? {
                      name: `item-${k}`,
                      fn: W((H) => [
                        L(e.$slots, `item-${k}`, oe({
                          [e.slotItemVar || ""]: H.item,
                          index: k
                        }))
                      ]),
                      key: "0"
                    } : y(n).item ? {
                      name: "item",
                      fn: W((H) => [
                        L(e.$slots, "item", oe({
                          [e.slotItemVar || ""]: H.item,
                          index: k
                        }))
                      ]),
                      key: "1"
                    } : void 0,
                    K(Ne.value, (H) => ({
                      name: H,
                      fn: W((ae) => [
                        L(e.$slots, H, oe({
                          [e.slotItemVar || ""]: ae.item,
                          value: ae.value,
                          column: ae.column
                        }))
                      ])
                    }))
                  ]), 1032, ["modelValue", "onUpdate:modelValue", "i", "display-hidden-columns-indicator", "is-draggable", "sortable", "visible-columns", "empty-columns", "add-navigation", "hidden-is-visible", "latest-row", "can-drop", "drop-confirm", "drop-resource", "drop-text", "drop-icon", "can-edit", "edit-text", "edit-icon", "edit-link", "edit-mode-enabled", "has-inline-edit-perm", "row-display-type"])), [
                    [ie, Ie(d.value[k])]
                  ])), 128)),
                  De.value.length > 0 ? (o(!0), s($, { key: 0 }, K(d.value, (S, k) => (o(), I(nl, {
                    modelValue: d.value[k],
                    "onUpdate:modelValue": (H) => d.value[k] = H,
                    key: $e(S, k, !0),
                    i: k,
                    "hidden-columns": De.value,
                    "hidden-columns-col-span": it.value,
                    "is-draggable": qe(S),
                    sortable: e.sortable,
                    "visible-columns": he.value,
                    "empty-columns": we.value,
                    "hidden-is-visible": Ue(k),
                    onClick: He,
                    onShow: We
                  }, Qe({ _: 2 }, [
                    K(Ne.value, (H) => ({
                      name: H,
                      fn: W((ae) => [
                        L(e.$slots, H, oe({
                          [e.slotItemVar || ""]: ae.item,
                          value: ae.value,
                          column: ae.column
                        }))
                      ])
                    }))
                  ]), 1032, ["modelValue", "onUpdate:modelValue", "i", "hidden-columns", "hidden-columns-col-span", "is-draggable", "sortable", "visible-columns", "empty-columns", "hidden-is-visible"]))), 128)) : v("", !0)
                ], 8, Cl)
              ])) : be.value === y(Z).Item ? (o(), s("div", {
                key: 1,
                ref_key: "tableBody",
                ref: w,
                id: "lkt-table-body-" + y(me),
                class: O(["lkt-table-items-container", e.itemsContainerClass])
              }, [
                (o(!0), s($, null, K(d.value, (S, k) => (o(), s($, null, [
                  Ie(S) ? (o(), s("div", {
                    class: "lkt-table-item",
                    "data-i": k,
                    key: $e(S, k)
                  }, [
                    L(e.$slots, "item", oe({
                      [e.slotItemVar || ""]: S,
                      index: k,
                      editing: b.value,
                      canCreate: ge.value,
                      canRead: Te.value,
                      canUpdate: fe.value,
                      canDrop: pe.value,
                      isLoading: h.value,
                      doDrop: () => Ce(k)
                    }))
                  ], 8, Il)) : v("", !0)
                ], 64))), 256))
              ], 10, Sl)) : y(Z).Ul ? (o(), s("ul", {
                key: 2,
                class: O(["lkt-table-items-container", e.itemsContainerClass])
              }, [
                (o(!0), s($, null, K(d.value, (S, k) => (o(), s($, null, [
                  Ie(S) ? (o(), s("li", {
                    key: 0,
                    class: "lkt-table-item",
                    "data-i": k
                  }, [
                    L(e.$slots, "item", oe({
                      [e.slotItemVar || ""]: S,
                      index: k,
                      editing: b.value,
                      canCreate: ge.value,
                      canRead: Te.value,
                      canUpdate: fe.value,
                      canDrop: pe.value,
                      isLoading: h.value,
                      doDrop: () => Ce(k)
                    }))
                  ], 8, Bl)) : v("", !0)
                ], 64))), 256))
              ], 2)) : y(Z).Ul ? (o(), s("ol", {
                key: 3,
                class: O(["lkt-table-items-container", e.itemsContainerClass])
              }, [
                (o(!0), s($, null, K(d.value, (S, k) => (o(), s($, null, [
                  Ie(S) ? (o(), s("li", {
                    key: 0,
                    class: "lkt-table-item",
                    "data-i": k
                  }, [
                    L(e.$slots, "item", oe({
                      [e.slotItemVar || ""]: S,
                      index: k,
                      editing: b.value,
                      canCreate: ge.value,
                      canRead: Te.value,
                      canUpdate: fe.value,
                      canDrop: pe.value,
                      isLoading: h.value,
                      doDrop: () => Ce(k)
                    }))
                  ], 8, Vl)) : v("", !0)
                ], 64))), 256))
              ], 2)) : v("", !0)
            ], 8, pl), [
              [ie, !h.value && d.value.length > 0]
            ]),
            !h.value && d.value.length === 0 ? (o(), s("div", wl, [
              y(n).empty ? L(e.$slots, "empty", { key: 0 }) : Rt.value ? (o(), I(te(Lt.value), {
                key: 1,
                message: e.noResultsText
              }, null, 8, ["message"])) : e.noResultsText ? (o(), s($, { key: 2 }, [
                ce(ee(e.noResultsText), 1)
              ], 64)) : v("", !0)
            ])) : v("", !0),
            Se.value || y(n).bottomButtons ? (o(), s("div", Dl, [
              Se.value && d.value.length >= e.requiredItemsForBottomCreate ? (o(), I(Ze, {
                key: 0,
                disabled: !Ge.value || e.createDisabled,
                text: e.createText,
                icon: e.createIcon,
                to: e.createRoute,
                onClick: Ke
              }, null, 8, ["disabled", "text", "icon", "to"])) : v("", !0),
              L(e.$slots, "bottom-buttons")
            ])) : v("", !0),
            e.resource.length > 0 ? (o(), I(Y, {
              key: 5,
              ref_key: "paginator",
              ref: ke,
              modelValue: A.value,
              "onUpdate:modelValue": m[1] || (m[1] = (S) => A.value = S),
              resource: e.resource,
              filters: e.filters,
              onResults: lt,
              onLoading: ut,
              onPerms: at,
              onCustom: ot,
              onResponse: nt
            }, null, 8, ["modelValue", "resource", "filters"])) : v("", !0)
          ]),
          _: 3
        }, 8, ["class"]))
      ], 8, il);
    };
  }
}), Xl = {
  install: (t) => {
    t.component("lkt-table") === void 0 && t.component("lkt-table", El);
  }
}, Yl = (t) => (D.navButtonSlot = t, !0), Zl = (t) => (D.dropButtonSlot = t, !0), _l = (t) => (D.createButtonSlot = t, !0), xl = (t) => {
  D.defaultEmptySlot = t;
}, ea = (t) => {
  D.defaultSaveIcon = t;
};
export {
  U as Column,
  Pl as createActionColumn,
  zl as createCheckColumn,
  Al as createColumn,
  Kl as createEmailColumn,
  Ol as createFileColumn,
  ql as createFloatColumn,
  Ql as createHiddenColumn,
  Wl as createIntegerColumn,
  Ul as createLinkColumn,
  Jl as createSelectColumn,
  Gl as createSwitchColumn,
  jl as createTelColumn,
  Hl as createTextColumn,
  Xl as default,
  _l as setTableCreateButtonSlot,
  Zl as setTableDropButtonSlot,
  xl as setTableEmptySlot,
  Yl as setTableNavButtonSlot,
  ea as setTableSaveIcon
};
