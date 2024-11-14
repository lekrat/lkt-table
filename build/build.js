import { reactive as U, defineComponent as ee, ref as S, watch as L, computed as c, resolveComponent as K, unref as C, openBlock as u, createBlock as w, withCtx as H, createTextVNode as re, toDisplayString as _, createElementBlock as s, mergeProps as je, Fragment as E, withModifiers as Xe, resolveDynamicComponent as x, createCommentVNode as v, normalizeClass as Z, createElementVNode as M, createVNode as ne, renderList as W, renderSlot as F, withDirectives as ae, vShow as oe, useSlots as Tt, onMounted as $t, nextTick as ze, createSlots as Ge, normalizeProps as me } from "vue";
import { Field as Je } from "lkt-field";
import { __ as pe } from "lkt-i18n";
import { replaceAll as Ye, generateRandomString as Rt } from "lkt-string-tools";
import { DataState as Lt } from "lkt-data-state";
import Mt from "sortablejs";
import { time as Se } from "lkt-date-tools";
class N {
  constructor(r = {}) {
    this.key = "", this.label = "", this.sortable = !0, this.hidden = !1, this.editable = !1, this.formatter = void 0, this.checkEmpty = void 0, this.colspan = void 0, this.preferSlot = !0, this.type = "", this.link = "", this.action = void 0, this.isForRowKey = !1, this.extractTitleFromColumn = "", this.slotData = {}, this.field = new Je();
    for (let i in r)
      this[i] = r[i];
    this.field = new Je(this.field);
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
var R = /* @__PURE__ */ ((t) => (t.Text = "text", t.Number = "number", t.Check = "check", t.Switch = "switch", t.Select = "select", t.Email = "email", t.Tel = "tel", t.File = "file", t.Link = "link", t.Action = "action", t.Integer = "int", t.Float = "float", t))(R || {});
const Rl = (t) => U(new N(t)), Ll = (t, r, i, a = !0) => U(new N({ key: t, label: r, sortable: a, type: R.Link, link: i })), Ml = (t, r, i, a = !0) => U(new N({ key: t, label: r, sortable: a, type: R.Action, action: i })), Nl = (t, r, i = !0) => U(new N({ key: t, label: r, type: R.Text, sortable: i })), Fl = (t, r, i = !0) => U(new N({ key: t, label: r, type: R.Number, sortable: i })), Ul = (t, r, i = !0) => U(new N({ key: t, label: r, type: R.Number, sortable: i })), Al = (t, r, i = !0) => U(new N({ key: t, label: r, type: R.Email, sortable: i })), Pl = (t, r, i = !0) => U(new N({ key: t, label: r, type: R.Tel, sortable: i })), Wl = (t, r, i = !0) => U(new N({ key: t, label: r, type: R.Check, sortable: i })), Hl = (t, r, i = !0) => U(new N({ key: t, label: r, type: R.Switch, sortable: i })), Kl = (t, r, i, a = !0) => U(new N({ key: t, label: r, type: R.Select, sortable: a })), ql = (t, r, i = !0) => U(new N({ key: t, label: r, type: R.File, sortable: i })), jl = (t, r, i = !0) => U(new N({ key: t, label: r, sortable: i, hidden: !0 })), Oe = (t, r, i, a) => {
  if (!i) return 0;
  let n = t[i.key], l = r[i.key];
  if (a === "asc") {
    if (n > l) return 1;
    if (l > n) return -1;
  } else {
    if (n > l) return -1;
    if (l > n) return 1;
  }
  return 0;
}, ue = (t, r, i, a = []) => {
  if (t.extractTitleFromColumn) {
    let n = a.find((l) => l.key === t.extractTitleFromColumn);
    if (n)
      return ue(n, r, i, a);
  }
  if (t.formatter && typeof t.formatter == "function") {
    let n = t.formatter(r[t.key], r, t, i);
    return n.startsWith("__:") ? pe(n.substring(3)) : n;
  }
  return r[t.key];
}, Nt = (t, r, i) => {
  if (!t.colspan) return -1;
  let a = r;
  return i.forEach((n) => {
    let l = Ee(t, n);
    l > 0 && l < a && (a = l);
  }), a;
}, Ee = (t, r) => t.colspan === !1 ? !1 : typeof t.colspan == "function" ? t.colspan(r) : t.colspan, Ft = (t, r) => typeof t.preferSlot > "u" ? !0 : t.preferSlot === !1 ? !1 : typeof t.preferSlot == "function" ? t.preferSlot(r) : !0, Ut = (t, r, i) => {
  if (typeof t != "object" || !t.key || r.indexOf(t.key) > -1) return !1;
  let a = Ee(t, i);
  return typeof t.colspan > "u" ? !0 : (typeof t.colspan < "u" && (typeof t.colspan == "function" ? a = parseInt(t.colspan(i)) : a = parseInt(t.colspan)), a > 0);
}, At = (t = []) => {
  if (t.length > 0) {
    for (let r = 0; r < t.length; ++r)
      if (t[r].sortable) return t[r].key;
  }
  return "";
}, Pt = (t, r) => {
  if (t.length > 0) {
    for (let i = 0; i < t.length; ++i)
      if (t[i].key === r) return t[i];
  }
  return null;
}, Ze = /* @__PURE__ */ ee({
  __name: "LktTableCell",
  props: {
    modelValue: { default: () => ({}) },
    column: { default: () => new N() },
    columns: { default: () => [] },
    i: { default: 0 },
    editModeEnabled: { type: Boolean, default: !1 },
    hasInlineEditPerm: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: r }) {
    const i = r, a = t, n = S(a.modelValue), l = S(n.value[a.column.key]), y = S(null);
    L(l, (m) => {
      const o = JSON.parse(JSON.stringify(n.value));
      o[a.column.key] = m, i("update:modelValue", o);
    }), L(() => a.modelValue, (m) => {
      n.value = m, l.value = n.value[a.column.key];
    });
    const V = c(() => ({ ...a.column.slotData, item: n.value })), g = c(() => {
      var m, o, p, b;
      if ((m = a.column.field) != null && m.modalData && typeof ((o = a.column.field) == null ? void 0 : o.modalData) == "object")
        for (let k in a.column.field.modalData)
          if (typeof ((p = a.column.field) == null ? void 0 : p.modalData[k]) == "string" && a.column.field.modalData[k].startsWith("prop:")) {
            let J = a.column.field.modalData[k].substring(5);
            n.value[J];
          } else
            a.column.field.modalData[k];
      return (b = a.column.field) == null ? void 0 : b.modalData;
    }), T = c(() => {
      var m, o, p;
      if ((m = a.column.field) != null && m.modalKey.startsWith("prop:")) {
        let b = (o = a.column.field) == null ? void 0 : o.modalKey.substring(5);
        return n.value[b];
      }
      return (p = a.column.field) == null ? void 0 : p.modalKey;
    }), d = c(() => {
      var m, o, p, b;
      if (typeof ((m = a.column.field) == null ? void 0 : m.icon) == "string" && ((o = a.column.field) != null && o.icon.startsWith("prop:"))) {
        let k = (p = a.column.field) == null ? void 0 : p.icon.substring(5);
        return n.value[k];
      }
      return (b = a.column.field) == null ? void 0 : b.icon;
    }), q = c(() => {
      var m, o, p, b;
      if (typeof ((m = a.column.field) == null ? void 0 : m.download) == "string" && ((o = a.column.field) != null && o.download.startsWith("prop:"))) {
        let k = (p = a.column.field) == null ? void 0 : p.download.substring(5);
        return n.value[k];
      }
      return (b = a.column.field) == null ? void 0 : b.download;
    }), G = c(() => {
      var m, o, p;
      if (typeof ((m = a.column.field) == null ? void 0 : m.options) == "string" && ((o = a.column.field) != null && o.options.startsWith("prop:"))) {
        let b = (p = a.column.field) == null ? void 0 : p.options.substring(5);
        return n.value[b];
      }
      return a.column.field.options;
    }), P = c(() => [R.Integer, R.Float].includes(a.column.type) ? R.Number : a.column.type);
    return (m, o) => {
      const p = K("lkt-anchor"), b = K("lkt-field");
      return m.column.type === C(R).Link ? (u(), w(p, {
        key: 0,
        to: m.column.getHref(n.value)
      }, {
        default: H(() => [
          re(_(C(ue)(m.column, n.value, m.i)), 1)
        ]),
        _: 1
      }, 8, ["to"])) : m.column.type === C(R).Action ? (u(), s("a", {
        key: 1,
        href: "#",
        onClick: o[0] || (o[0] = (k) => m.column.doAction(n.value))
      }, _(C(ue)(m.column, n.value, m.i)), 1)) : m.column.type !== "" && m.hasInlineEditPerm ? (u(), w(b, je({ key: 2 }, m.column.field, {
        icon: d.value,
        download: q.value,
        type: P.value,
        "read-mode": !m.column.editable || !m.editModeEnabled,
        ref: (k) => y.value = k,
        "slot-data": V.value,
        label: m.column.type === "switch" || m.column.type === "check" ? m.column.label : "",
        "modal-key": T.value,
        "modal-data": g.value,
        options: G.value,
        data: n.value,
        modelValue: l.value,
        "onUpdate:modelValue": o[1] || (o[1] = (k) => l.value = k)
      }), null, 16, ["icon", "download", "type", "read-mode", "slot-data", "label", "modal-key", "modal-data", "options", "data", "modelValue"])) : m.column.type !== "" ? (u(), w(b, je({ key: 3 }, m.column.field, {
        icon: d.value,
        download: q.value,
        type: P.value,
        "read-mode": "",
        ref: (k) => y.value = k,
        "slot-data": V.value,
        label: m.column.type === "switch" || m.column.type === "check" ? m.column.label : "",
        "modal-key": T.value,
        "modal-data": g.value,
        options: G.value,
        data: n.value,
        "model-value": l.value
      }), null, 16, ["icon", "download", "type", "slot-data", "label", "modal-key", "modal-data", "options", "data", "model-value"])) : (u(), s(E, { key: 4 }, [
        re(_(C(ue)(m.column, n.value, m.i, m.columns)), 1)
      ], 64));
    };
  }
}), z = class z {
};
z.navButtonSlot = "", z.dropButtonSlot = "", z.editButtonSlot = "", z.createButtonSlot = "", z.defaultEmptySlot = void 0, z.defaultSaveIcon = "", z.defaultNoResultsMessage = "No results";
let D = z;
const Wt = /* @__PURE__ */ ee({
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
    const i = r, a = c(() => D.dropButtonSlot !== ""), n = c(() => D.dropButtonSlot);
    return (l, y) => {
      const V = K("lkt-button");
      return u(), w(V, {
        palette: "table-delete",
        icon: a.value ? "" : l.icon,
        text: a.value ? "" : l.text,
        resource: l.resource,
        "resource-data": l.resourceData,
        "confirm-modal": l.confirm,
        disabled: l.disabled,
        onClick: y[0] || (y[0] = Xe((g) => i("click"), ["prevent", "stop"]))
      }, {
        default: H(() => [
          a.value ? (u(), w(x(n.value), { key: 0 })) : v("", !0)
        ]),
        _: 1
      }, 8, ["icon", "text", "resource", "resource-data", "confirm-modal", "disabled"]);
    };
  }
}), Ht = /* @__PURE__ */ ee({
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
    const i = r, a = c(() => D.editButtonSlot !== ""), n = c(() => D.editButtonSlot);
    return (l, y) => {
      const V = K("lkt-button");
      return u(), w(V, {
        palette: "table-delete",
        icon: a.value ? "" : l.icon,
        text: a.value ? "" : l.text,
        "on-click-to": l.link,
        "is-anchor": l.link !== "",
        resource: l.resource,
        "resource-data": l.resourceData,
        "confirm-modal": l.confirm,
        disabled: l.disabled,
        onClick: y[0] || (y[0] = Xe((g) => i("click"), ["prevent", "stop"]))
      }, {
        default: H(() => [
          a.value ? (u(), w(x(n.value), { key: 0 })) : v("", !0)
        ]),
        _: 1
      }, 8, ["icon", "text", "on-click-to", "is-anchor", "resource", "resource-data", "confirm-modal", "disabled"]);
    };
  }
}), Kt = ["data-i", "data-draggable"], qt = {
  key: 1,
  "data-role": "invalid-drag-indicator"
}, jt = {
  key: 2,
  class: "lkt-table-nav-cell"
}, zt = { class: "lkt-table-nav-container" }, Gt = ["data-column", "colspan", "title", "onClick"], Jt = {
  key: 4,
  class: "lkt-table-col-drop"
}, Ot = {
  key: 5,
  class: "lkt-table-col-edit"
}, Qt = /* @__PURE__ */ ee({
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
    editLink: { default: "" }
  },
  emits: ["update:modelValue", "click", "show", "item-up", "item-down", "item-drop"],
  setup(t, { emit: r }) {
    const i = r, a = t, n = S(a.modelValue), l = S(a.editLink);
    for (let o in n.value) l.value = Ye(l.value, ":" + o, n.value[o]);
    const y = (o) => i("click", o), V = (o, p) => {
      i("show", o, p);
    }, g = c(() => {
      let o = [];
      return a.sortable && a.isDraggable && o.push("handle"), o.join(" ");
    }), T = c(() => D.navButtonSlot !== ""), d = c(() => D.navButtonSlot), q = () => {
      i("item-up", a.i);
    }, G = () => {
      i("item-down", a.i);
    }, P = () => {
      i("item-drop", a.i);
    }, m = () => {
    };
    return L(() => a.modelValue, (o) => n.value = o), L(n, (o) => {
      i("update:modelValue", o);
    }, { deep: !0 }), (o, p) => {
      const b = K("lkt-button");
      return u(), s("tr", {
        "data-i": o.i,
        "data-draggable": o.isDraggable
      }, [
        o.sortable && o.isDraggable && o.editModeEnabled ? (u(), s("td", {
          key: 0,
          "data-role": "drag-indicator",
          class: Z(g.value)
        }, null, 2)) : o.sortable && o.editModeEnabled ? (u(), s("td", qt)) : v("", !0),
        o.addNavigation && o.editModeEnabled ? (u(), s("td", jt, [
          M("div", zt, [
            ne(b, {
              palette: "table-nav",
              disabled: o.i === 0,
              onClick: q
            }, {
              default: H(() => [
                T.value ? (u(), w(x(d.value), {
                  key: 0,
                  direction: "up"
                })) : (u(), s(E, { key: 1 }, [
                  p[2] || (p[2] = M("i", { class: "" }, null, -1)),
                  p[3] || (p[3] = re(" UP "))
                ], 64))
              ]),
              _: 1
            }, 8, ["disabled"]),
            ne(b, {
              palette: "table-nav",
              disabled: o.latestRow,
              onClick: G
            }, {
              default: H(() => [
                T.value ? (u(), w(x(d.value), {
                  key: 0,
                  direction: "down"
                })) : (u(), s(E, { key: 1 }, [
                  p[4] || (p[4] = M("i", { class: "" }, null, -1)),
                  p[5] || (p[5] = re(" DOWN "))
                ], 64))
              ]),
              _: 1
            }, 8, ["disabled"])
          ])
        ])) : v("", !0),
        o.displayHiddenColumnsIndicator ? (u(), s("td", {
          key: 3,
          onClick: p[0] || (p[0] = (k) => V(k, o.i)),
          "data-role": "show-more",
          class: Z(o.hiddenIsVisible ? "state-open" : "")
        }, null, 2)) : v("", !0),
        (u(!0), s(E, null, W(o.visibleColumns, (k) => (u(), s(E, null, [
          C(Ut)(k, o.emptyColumns, n.value) ? (u(), s("td", {
            key: "td" + o.i,
            "data-column": k.key,
            colspan: C(Ee)(k, n.value),
            title: C(ue)(k, n.value, o.i, o.visibleColumns),
            onClick: (J) => y(J, n.value)
          }, [
            o.$slots[k.key] && C(Ft)(k, n.value) ? F(o.$slots, k.key, {
              key: 0,
              value: n.value[k.key],
              item: n.value,
              column: k,
              i: o.i
            }) : n.value ? (u(), w(Ze, {
              key: 1,
              modelValue: n.value,
              "onUpdate:modelValue": p[1] || (p[1] = (J) => n.value = J),
              column: k,
              columns: o.visibleColumns,
              "edit-mode-enabled": o.editModeEnabled,
              "has-inline-edit-perm": o.hasInlineEditPerm,
              i: o.i
            }, null, 8, ["modelValue", "column", "columns", "edit-mode-enabled", "has-inline-edit-perm", "i"])) : v("", !0)
          ], 8, Gt)) : v("", !0)
        ], 64))), 256)),
        o.canDrop && o.editModeEnabled ? (u(), s("td", Jt, [
          ne(Wt, {
            resource: o.dropResource,
            "resource-data": n.value,
            confirm: o.dropConfirm,
            text: o.dropText,
            icon: o.dropIcon,
            onClick: P
          }, null, 8, ["resource", "resource-data", "confirm", "text", "icon"])
        ])) : v("", !0),
        o.canEdit && o.editModeEnabled ? (u(), s("td", Ot, [
          ne(Ht, {
            "resource-data": n.value,
            text: o.editText,
            icon: o.editIcon,
            link: l.value,
            onClick: m
          }, null, 8, ["resource-data", "text", "icon", "link"])
        ])) : v("", !0)
      ], 8, Kt);
    };
  }
}), Xt = { "data-role": "hidden-row" }, Yt = ["colspan"], Zt = ["data-column"], _t = ["data-i"], xt = ["data-column", "title", "onClick"], el = /* @__PURE__ */ ee({
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
    const i = r, a = t, n = S(a.modelValue), l = (y) => i("click", y);
    return L(() => a.modelValue, (y) => n.value = y), L(n, () => i("update:modelValue", n.value)), (y, V) => ae((u(), s("tr", Xt, [
      M("td", { colspan: y.hiddenColumnsColSpan }, [
        M("table", null, [
          M("tr", null, [
            (u(!0), s(E, null, W(y.hiddenColumns, (g) => (u(), s("th", {
              "data-column": g.key
            }, [
              M("div", null, _(g.label), 1)
            ], 8, Zt))), 256))
          ]),
          M("tr", { "data-i": y.i }, [
            (u(!0), s(E, null, W(y.hiddenColumns, (g, T) => (u(), s("td", {
              "data-column": g.key,
              title: C(ue)(g, n.value, T, y.hiddenColumns),
              onClick: (d) => l(d, n.value)
            }, [
              y.$slots[g.key] ? F(y.$slots, g.key, {
                key: 0,
                value: n.value[g.key],
                item: n.value,
                column: g,
                i: T
              }) : (u(), w(Ze, {
                key: 1,
                column: g,
                columns: y.hiddenColumns,
                modelValue: n.value,
                "onUpdate:modelValue": V[0] || (V[0] = (d) => n.value = d),
                i: T
              }, null, 8, ["column", "columns", "modelValue", "i"]))
            ], 8, xt))), 256))
          ], 8, _t)
        ])
      ], 8, Yt)
    ], 512)), [
      [oe, y.hiddenIsVisible]
    ]);
  }
}), Qe = /* @__PURE__ */ ee({
  __name: "CreateButton",
  props: {
    disabled: { type: Boolean, default: !1 },
    text: { default: "" },
    icon: { default: "" },
    to: { default: "" }
  },
  emits: ["click"],
  setup(t, { emit: r }) {
    const i = r, a = c(() => D.createButtonSlot !== ""), n = c(() => D.createButtonSlot);
    return (l, y) => {
      const V = K("lkt-button");
      return u(), w(V, {
        palette: "table-create",
        disabled: l.disabled,
        icon: a.value ? "" : l.icon,
        text: a.value ? "" : l.text,
        "on-click-to": l.to,
        onClick: y[0] || (y[0] = (g) => i("click"))
      }, {
        default: H(() => [
          a.value ? (u(), w(x(n.value), { key: 0 })) : v("", !0)
        ]),
        _: 1
      }, 8, ["disabled", "icon", "text", "on-click-to"]);
    };
  }
}), tl = ["data-column", "data-sortable", "data-sort", "colspan", "title"], ll = /* @__PURE__ */ ee({
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
    const i = r, a = t, n = c(() => Nt(a.column, a.amountOfColumns, a.items)), l = c(() => a.column.sortable === !0), y = c(() => l.value && a.sortBy === a.column.key ? a.sortDirection : ""), V = c(() => a.column.label.startsWith("__:") ? pe(a.column.label.substring(3)) : a.column.label), g = () => i("click", a.column);
    return (T, d) => (u(), s("th", {
      "data-column": T.column.key,
      "data-sortable": l.value,
      "data-sort": y.value,
      colspan: n.value,
      title: V.value,
      onClick: g
    }, [
      M("div", null, _(V.value), 1)
    ], 8, tl));
  }
});
var X = /* @__PURE__ */ ((t) => (t.Table = "table", t.Item = "item", t.Ul = "ul", t.Ol = "ol", t))(X || {}), Y = /* @__PURE__ */ ((t) => (t.Create = "create", t.Update = "update", t.Edit = "edit", t.Drop = "drop", t.Sort = "sort", t.InlineEdit = "inline-edit", t.InlineCreate = "inline-create", t.InlineCreateEver = "inline-create-ever", t))(Y || {}), fe = /* @__PURE__ */ ((t) => (t.Asc = "asc", t.Desc = "desc", t))(fe || {});
const al = ["id"], ol = { class: "lkt-table-page-buttons" }, nl = { key: 1 }, ul = { class: "switch-edition-mode" }, rl = {
  key: 0,
  class: "lkt-table-page-buttons"
}, il = {
  key: 1,
  class: "lkt-table-page-filters"
}, dl = ["data-sortable"], sl = { key: 0 }, cl = {
  key: 0,
  "data-role": "drag-indicator"
}, ml = { key: 1 }, fl = { key: 2 }, pl = {
  key: 3,
  class: "lkt-table-col-drop"
}, vl = {
  key: 4,
  class: "lkt-table-col-edit"
}, yl = ["id"], kl = ["id"], bl = ["data-i"], hl = ["data-i"], gl = ["data-i"], Cl = {
  key: 3,
  class: "lkt-table-empty"
}, Sl = {
  key: 4,
  class: "lkt-table-page-buttons lkt-table-page-buttons-bottom"
}, Bl = /* @__PURE__ */ ee({
  __name: "LktTable",
  props: {
    modelValue: { default: () => [] },
    type: { default: X.Table },
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
    slotItemVar: { default: "item" }
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
    "page"
  ],
  setup(t, { expose: r, emit: i }) {
    const a = i, n = Tt(), l = t, y = {}, V = S(typeof l.sorter == "function" ? l.sorter : Oe), g = S(At(l.columns)), T = S(fe.Asc), d = S(l.modelValue), q = S(y), G = S(null), P = S(l.columns), m = S(l.page), o = S(l.loading), p = S(!1), b = S(l.perms), k = S(null), J = S(null), ve = S({}), le = S(new Lt({ items: d.value }, l.dataStateConfig)), $ = S(l.editMode), ie = S(0);
    L(o, (e) => a("update:loading", e)), L(m, (e) => a("page", e));
    const ye = S(l.type);
    l.itemMode && ye.value === X.Table && (ye.value = X.Item);
    const _e = (e) => {
      Array.isArray(e) && (d.value = e), o.value = !1, p.value = !0, le.value.store({ items: d.value }).turnStoredIntoOriginal();
    }, xe = (e) => {
      b.value = e;
    }, et = (e) => {
    }, tt = (e) => {
      a("read-response", e);
    }, lt = () => ze(() => o.value = !0), at = () => {
      k.value.doRefresh();
    }, de = Rt(12), Be = c(() => {
      if (!l.hideEmptyColumns) return [];
      let e = [];
      return P.value.forEach((f) => {
        let I = f.key, A = !1;
        d.value.forEach((O) => {
          if (typeof O.checkEmpty == "function")
            return O.checkEmpty(O);
          O[I] && (A = !0);
        }), A || e.push(I);
      }), e;
    }), ke = c(() => P.value.filter((e) => !e.hidden)), we = c(() => P.value.filter((e) => e.hidden)), ot = c(() => {
      let e = ke.value.length + 1;
      return l.sortable && ++e, e;
    }), nt = c(() => P.value.filter((e) => e.isForRowKey)), Te = c(() => we.value.length > 0 && !l.sortable), ut = c(() => P.value.map((e) => e.key)), $e = c(() => {
      let e = [];
      for (let f in n) ut.value.indexOf(f) !== -1 && e.push(f);
      return e;
    }), Re = c(() => l.hiddenSave || o.value || !l.saveResource ? !1 : $.value && le.value.changed() ? !0 : $.value), rt = c(() => ge.value && d.value.length >= l.requiredItemsForTopCreate || l.switchEditionEnabled ? !0 : Re.value || $.value && be.value), it = c(() => l.saveDisabled || typeof l.saveValidator == "function" && !l.saveValidator(d.value) ? !1 : le.value.changed()), dt = c(() => d.value.length), st = c(() => ({
      items: d.value,
      ...l.saveResourceData
    })), ct = c(() => l.titleTag === "" ? "h2" : l.titleTag), mt = c(() => l.wrapContentTag === "" ? "div" : l.wrapContentTag), Ie = c(() => l.title.startsWith("__:") ? pe(l.title.substring(3)) : l.title), ft = c(() => l.saveText.startsWith("__:") ? pe(l.saveText.substring(3)) : l.saveText), pt = c(() => l.editModeText.startsWith("__:") ? pe(l.editModeText.substring(3)) : l.editModeText), be = c(() => b.value.includes(Y.Create)), De = c(() => b.value.includes("read")), se = c(() => b.value.includes(Y.Update)), Le = c(() => b.value.includes(Y.Edit)), vt = c(() => b.value.includes(Y.InlineEdit)), yt = c(() => b.value.includes(Y.InlineCreate)), Me = c(() => b.value.includes(Y.InlineCreateEver)), ce = c(() => b.value.includes(Y.Drop)), kt = (e) => {
      let f = e.target;
      if (typeof f.dataset.column > "u")
        do
          f = f.parentNode;
        while (typeof f.dataset.column > "u" && f.tagName !== "TABLE" && f.tagName !== "body");
      if (f.tagName === "TD" && (f = f.parentNode, f = f.dataset.i, typeof f < "u"))
        return d.value[f];
    }, bt = (e) => d.value[e], ht = (e) => {
      var f;
      return (f = G.value) == null ? void 0 : f.querySelector(`[data-i="${e}"]`);
    }, Ne = (e) => q.value["tr_" + e] === !0, Fe = (e) => {
      e && e.sortable && (d.value = d.value.sort((f, I) => V.value(f, I, e, T.value)), T.value = T.value === fe.Asc ? fe.Desc : fe.Asc, g.value = e.key, a("sort", [g.value, T.value]));
    }, Ue = (e) => {
      a("click", e);
    }, Ae = (e, f) => {
      let I = "tr_" + f;
      q.value[I] = typeof q.value[I] > "u" ? !0 : !q.value[I];
    }, gt = (e) => typeof l.checkValidDrag == "function" ? l.checkValidDrag(e) : !0, Pe = (e) => typeof l.draggableChecker == "function" ? l.draggableChecker(e) : !0, We = () => {
      if (Me.value)
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
    }, Ct = () => {
      o.value = !0;
    }, St = () => {
      o.value = !1;
    }, Bt = (e, f) => {
      if (a("before-save"), l.saveResource && (o.value = !1, !f.success)) {
        a("error", f.httpStatus);
        return;
      }
      le.value.turnStoredIntoOriginal(), a("save", f);
    }, He = (e, f, I) => {
      if (I >= e.length) {
        let A = I - e.length + 1;
        for (; A--; ) e.push(void 0);
      }
      return e.splice(I, 0, e.splice(f, 1)[0]), e;
    }, wt = (e) => {
      He(d.value, e, e - 1), ie.value = Se();
    }, It = (e) => {
      He(d.value, e, e + 1), ie.value = Se();
    }, he = (e) => {
      d.value.splice(e, 1), ie.value = Se();
    }, Dt = () => {
      ve.value && (ve.value.destroy(), ve.value = {});
    }, Ke = () => {
      let e = document.getElementById("lkt-table-body-" + de);
      ve.value = new Mt(e, {
        direction: "vertical",
        handle: ".handle",
        animation: 150,
        onEnd: function(f) {
          let I = f.oldIndex, A = f.newIndex;
          d.value.splice(A, 0, d.value.splice(I, 1)[0]), ie.value = Se();
        },
        onMove: function(f, I) {
          return gt(f);
        }
      });
    }, Ve = (e, f, I = !1) => {
      let A = [ie.value, de, "row", f];
      return I && A.push("hidden"), nt.value.forEach((O) => {
        let Q = String(e[O.key]).toLowerCase();
        Q.length > 50 && (Q = Q.substring(0, 50)), Q = Ye(Q, " ", "-"), A.push(Q);
      }), A.join("-");
    }, qe = c(() => typeof l.createEnabledValidator == "function" ? l.createEnabledValidator({ items: d.value }) : !0), ge = c(() => Me.value || yt.value && $.value), Ce = (e, f) => typeof l.itemDisplayChecker == "function" ? l.itemDisplayChecker(e) : !0;
    $t(() => {
      l.initialSorting && Fe(Pt(l.columns, g.value)), le.value.store({ items: d.value }).turnStoredIntoOriginal(), l.sortable && ze(() => {
        Ke();
      });
    }), L(() => l.sortable, (e) => {
      e ? Ke() : Dt();
    }), L(() => l.perms, (e) => b.value = e), L(b, (e) => a("update:perms", e)), L(() => l.editMode, (e) => $.value = e), L(() => l.columns, (e) => P.value = e, { deep: !0 }), L(() => l.modelValue, (e) => d.value = e, { deep: !0 }), L(d, (e) => {
      le.value.increment({ items: e }), a("update:modelValue", e);
    }, { deep: !0 }), r({
      getItemByEvent: kt,
      getItemByIndex: bt,
      getRowByIndex: ht,
      doRefresh: at,
      getHtml: () => J.value
    });
    const Vt = c(() => typeof D.defaultEmptySlot < "u"), Et = c(() => D.defaultEmptySlot);
    return (e, f) => {
      const I = K("lkt-button"), A = K("lkt-field"), O = K("lkt-loader"), Q = K("lkt-paginator");
      return u(), s("section", {
        ref_key: "element",
        ref: J,
        class: "lkt-table-page",
        id: "lkt-table-page-" + C(de)
      }, [
        Ie.value || C(n).title ? (u(), s("header", {
          key: 0,
          class: Z(e.headerClass)
        }, [
          Ie.value ? (u(), w(x(ct.value), { key: 0 }, {
            default: H(() => [
              e.titleIcon ? (u(), s("i", {
                key: 0,
                class: Z(e.titleIcon)
              }, null, 2)) : v("", !0),
              re(" " + _(Ie.value), 1)
            ]),
            _: 1
          })) : v("", !0),
          C(n).title ? F(e.$slots, "title", { key: 1 }) : v("", !0)
        ], 2)) : v("", !0),
        (u(), w(x(mt.value), {
          class: Z(["lkt-table-page-content-wrapper", e.wrapContentClass])
        }, {
          default: H(() => [
            ae(M("div", ol, [
              ae(ne(I, {
                class: "lkt-table--save-button",
                ref: "saveButton",
                icon: C(D).defaultSaveIcon,
                disabled: !it.value,
                "confirm-modal": e.saveConfirm,
                "confirm-data": e.confirmData,
                resource: e.saveResource,
                "resource-data": st.value,
                onLoading: Ct,
                onLoaded: St,
                onClick: Bt
              }, {
                default: H(() => [
                  C(n)["button-save"] ? F(e.$slots, "button-save", {
                    key: 0,
                    items: d.value,
                    editMode: e.editMode,
                    canUpdate: !e.saveDisabled
                  }) : (u(), s("span", nl, _(ft.value), 1))
                ]),
                _: 3
              }, 8, ["icon", "disabled", "confirm-modal", "confirm-data", "resource", "resource-data"]), [
                [oe, Re.value]
              ]),
              ge.value && d.value.length >= e.requiredItemsForTopCreate ? (u(), w(Qe, {
                key: 0,
                disabled: !qe.value || e.createDisabled,
                text: e.createText,
                icon: e.createIcon,
                to: e.createRoute,
                onClick: We
              }, null, 8, ["disabled", "text", "icon", "to"])) : v("", !0),
              M("div", ul, [
                ae(ne(A, {
                  type: "switch",
                  modelValue: $.value,
                  "onUpdate:modelValue": f[0] || (f[0] = (B) => $.value = B),
                  label: pt.value
                }, null, 8, ["modelValue", "label"]), [
                  [oe, e.switchEditionEnabled]
                ])
              ])
            ], 512), [
              [oe, rt.value]
            ]),
            C(n).buttons ? (u(), s("div", rl, [
              F(e.$slots, "buttons")
            ])) : v("", !0),
            p.value && C(n).filters ? (u(), s("div", il, [
              F(e.$slots, "filters", {
                items: d.value,
                isLoading: o.value
              })
            ])) : v("", !0),
            o.value ? (u(), w(O, { key: 2 })) : v("", !0),
            ae(M("div", {
              class: "lkt-table",
              "data-sortable": e.sortable
            }, [
              ye.value === C(X).Table ? (u(), s("table", sl, [
                M("thead", null, [
                  M("tr", null, [
                    e.sortable && $.value ? (u(), s("th", cl)) : v("", !0),
                    e.addNavigation && $.value ? (u(), s("th", ml)) : v("", !0),
                    Te.value ? (u(), s("th", fl)) : v("", !0),
                    (u(!0), s(E, null, W(ke.value, (B) => (u(), s(E, null, [
                      Be.value.indexOf(B.key) === -1 ? (u(), w(ll, {
                        key: 0,
                        column: B,
                        "sort-by": g.value,
                        "sort-direction": T.value,
                        "amount-of-columns": e.columns.length,
                        items: d.value,
                        onClick: (h) => Fe(B)
                      }, null, 8, ["column", "sort-by", "sort-direction", "amount-of-columns", "items", "onClick"])) : v("", !0)
                    ], 64))), 256)),
                    ce.value && $.value ? (u(), s("th", pl)) : v("", !0),
                    Le.value && se.value && $.value ? (u(), s("th", vl)) : v("", !0)
                  ])
                ]),
                M("tbody", {
                  ref_key: "tableBody",
                  ref: G,
                  id: "lkt-table-body-" + C(de)
                }, [
                  (u(!0), s(E, null, W(d.value, (B, h) => ae((u(), w(Qt, {
                    modelValue: d.value[h],
                    "onUpdate:modelValue": (j) => d.value[h] = j,
                    key: Ve(B, h),
                    i: h,
                    "display-hidden-columns-indicator": Te.value,
                    "is-draggable": Pe(B),
                    sortable: e.sortable,
                    "visible-columns": ke.value,
                    "empty-columns": Be.value,
                    "add-navigation": e.addNavigation,
                    "hidden-is-visible": Ne(h),
                    "latest-row": h + 1 === dt.value,
                    "can-drop": ce.value && $.value,
                    "drop-confirm": e.dropConfirm,
                    "drop-resource": e.dropResource,
                    "drop-text": e.dropText,
                    "drop-icon": e.dropIcon,
                    "can-edit": Le.value && se.value && $.value,
                    "edit-text": e.editText,
                    "edit-icon": e.editIcon,
                    "edit-link": e.editLink,
                    "edit-mode-enabled": $.value,
                    "has-inline-edit-perm": vt.value,
                    onClick: Ue,
                    onShow: Ae,
                    onItemUp: wt,
                    onItemDown: It,
                    onItemDrop: he
                  }, Ge({ _: 2 }, [
                    W($e.value, (j) => ({
                      name: j,
                      fn: H((te) => [
                        F(e.$slots, j, me({
                          [e.slotItemVar || ""]: te.item,
                          value: te.value,
                          column: te.column
                        }))
                      ])
                    }))
                  ]), 1032, ["modelValue", "onUpdate:modelValue", "i", "display-hidden-columns-indicator", "is-draggable", "sortable", "visible-columns", "empty-columns", "add-navigation", "hidden-is-visible", "latest-row", "can-drop", "drop-confirm", "drop-resource", "drop-text", "drop-icon", "can-edit", "edit-text", "edit-icon", "edit-link", "edit-mode-enabled", "has-inline-edit-perm"])), [
                    [oe, Ce(d.value[h])]
                  ])), 128)),
                  we.value.length > 0 ? (u(!0), s(E, { key: 0 }, W(d.value, (B, h) => (u(), w(el, {
                    modelValue: d.value[h],
                    "onUpdate:modelValue": (j) => d.value[h] = j,
                    key: Ve(B, h, !0),
                    i: h,
                    "hidden-columns": we.value,
                    "hidden-columns-col-span": ot.value,
                    "is-draggable": Pe(B),
                    sortable: e.sortable,
                    "visible-columns": ke.value,
                    "empty-columns": Be.value,
                    "hidden-is-visible": Ne(h),
                    onClick: Ue,
                    onShow: Ae
                  }, Ge({ _: 2 }, [
                    W($e.value, (j) => ({
                      name: j,
                      fn: H((te) => [
                        F(e.$slots, j, me({
                          [e.slotItemVar || ""]: te.item,
                          value: te.value,
                          column: te.column
                        }))
                      ])
                    }))
                  ]), 1032, ["modelValue", "onUpdate:modelValue", "i", "hidden-columns", "hidden-columns-col-span", "is-draggable", "sortable", "visible-columns", "empty-columns", "hidden-is-visible"]))), 128)) : v("", !0)
                ], 8, yl)
              ])) : ye.value === C(X).Item ? (u(), s("div", {
                key: 1,
                ref_key: "tableBody",
                ref: G,
                id: "lkt-table-body-" + C(de),
                class: Z(["lkt-table-items-container", e.itemsContainerClass])
              }, [
                (u(!0), s(E, null, W(d.value, (B, h) => (u(), s(E, null, [
                  Ce(B) ? (u(), s("div", {
                    class: "lkt-table-item",
                    "data-i": h,
                    key: Ve(B, h)
                  }, [
                    F(e.$slots, "item", me({
                      [e.slotItemVar || ""]: B,
                      index: h,
                      editing: $.value,
                      canCreate: be.value,
                      canRead: De.value,
                      canUpdate: se.value,
                      canDrop: ce.value,
                      isLoading: o.value,
                      doDrop: () => he(h)
                    }))
                  ], 8, bl)) : v("", !0)
                ], 64))), 256))
              ], 10, kl)) : C(X).Ul ? (u(), s("ul", {
                key: 2,
                class: Z(["lkt-table-items-container", e.itemsContainerClass])
              }, [
                (u(!0), s(E, null, W(d.value, (B, h) => (u(), s(E, null, [
                  Ce(B) ? (u(), s("li", {
                    key: 0,
                    class: "lkt-table-item",
                    "data-i": h
                  }, [
                    F(e.$slots, "item", me({
                      [e.slotItemVar || ""]: B,
                      index: h,
                      editing: $.value,
                      canCreate: be.value,
                      canRead: De.value,
                      canUpdate: se.value,
                      canDrop: ce.value,
                      isLoading: o.value,
                      doDrop: () => he(h)
                    }))
                  ], 8, hl)) : v("", !0)
                ], 64))), 256))
              ], 2)) : C(X).Ul ? (u(), s("ol", {
                key: 3,
                class: Z(["lkt-table-items-container", e.itemsContainerClass])
              }, [
                (u(!0), s(E, null, W(d.value, (B, h) => (u(), s(E, null, [
                  Ce(B) ? (u(), s("li", {
                    key: 0,
                    class: "lkt-table-item",
                    "data-i": h
                  }, [
                    F(e.$slots, "item", me({
                      [e.slotItemVar || ""]: B,
                      index: h,
                      editing: $.value,
                      canCreate: be.value,
                      canRead: De.value,
                      canUpdate: se.value,
                      canDrop: ce.value,
                      isLoading: o.value,
                      doDrop: () => he(h)
                    }))
                  ], 8, gl)) : v("", !0)
                ], 64))), 256))
              ], 2)) : v("", !0)
            ], 8, dl), [
              [oe, !o.value && d.value.length > 0]
            ]),
            !o.value && d.value.length === 0 ? (u(), s("div", Cl, [
              C(n).empty ? F(e.$slots, "empty", { key: 0 }) : Vt.value ? (u(), w(x(Et.value), {
                key: 1,
                message: e.noResultsText
              }, null, 8, ["message"])) : e.noResultsText ? (u(), s(E, { key: 2 }, [
                re(_(e.noResultsText), 1)
              ], 64)) : v("", !0)
            ])) : v("", !0),
            ge.value || C(n).bottomButtons ? (u(), s("div", Sl, [
              ge.value && d.value.length >= e.requiredItemsForBottomCreate ? (u(), w(Qe, {
                key: 0,
                disabled: !qe.value || e.createDisabled,
                text: e.createText,
                icon: e.createIcon,
                to: e.createRoute,
                onClick: We
              }, null, 8, ["disabled", "text", "icon", "to"])) : v("", !0),
              F(e.$slots, "bottom-buttons")
            ])) : v("", !0),
            e.resource.length > 0 ? (u(), w(Q, {
              key: 5,
              ref_key: "paginator",
              ref: k,
              modelValue: m.value,
              "onUpdate:modelValue": f[1] || (f[1] = (B) => m.value = B),
              resource: e.resource,
              filters: e.filters,
              onResults: _e,
              onLoading: lt,
              onPerms: xe,
              onCustom: et,
              onResponse: tt
            }, null, 8, ["modelValue", "resource", "filters"])) : v("", !0)
          ]),
          _: 3
        }, 8, ["class"]))
      ], 8, al);
    };
  }
}), zl = {
  install: (t) => {
    t.component("lkt-table") === void 0 && t.component("lkt-table", Bl);
  }
}, Gl = (t) => (D.navButtonSlot = t, !0), Jl = (t) => (D.dropButtonSlot = t, !0), Ol = (t) => (D.createButtonSlot = t, !0), Ql = (t) => {
  D.defaultEmptySlot = t;
}, Xl = (t) => {
  D.defaultSaveIcon = t;
};
export {
  N as Column,
  Ml as createActionColumn,
  Wl as createCheckColumn,
  Rl as createColumn,
  Al as createEmailColumn,
  ql as createFileColumn,
  Ul as createFloatColumn,
  jl as createHiddenColumn,
  Fl as createIntegerColumn,
  Ll as createLinkColumn,
  Kl as createSelectColumn,
  Hl as createSwitchColumn,
  Pl as createTelColumn,
  Nl as createTextColumn,
  zl as default,
  Ol as setTableCreateButtonSlot,
  Jl as setTableDropButtonSlot,
  Ql as setTableEmptySlot,
  Gl as setTableNavButtonSlot,
  Xl as setTableSaveIcon
};
