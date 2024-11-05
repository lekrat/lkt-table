import { reactive as A, defineComponent as _, ref as h, watch as L, computed as c, resolveComponent as q, unref as C, openBlock as u, createBlock as w, withCtx as K, createTextVNode as re, toDisplayString as Y, createElementBlock as s, mergeProps as It, Fragment as V, withModifiers as Xe, resolveDynamicComponent as Z, createCommentVNode as v, normalizeClass as Q, createElementVNode as M, createVNode as ne, renderList as W, renderSlot as U, withDirectives as ae, vShow as oe, useSlots as Et, onMounted as Tt, nextTick as ze, createSlots as Ge, normalizeProps as ce } from "vue";
import { Field as Je } from "lkt-field";
import { __ as pe } from "lkt-i18n";
import { replaceAll as Ye, generateRandomString as $t } from "lkt-string-tools";
import { DataState as Rt } from "lkt-data-state";
import Lt from "sortablejs";
import { time as Ce } from "lkt-date-tools";
class F {
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
var $ = /* @__PURE__ */ ((t) => (t.Text = "text", t.Number = "number", t.Check = "check", t.Switch = "switch", t.Select = "select", t.Email = "email", t.Tel = "tel", t.File = "file", t.Link = "link", t.Action = "action", t.Integer = "int", t.Float = "float", t))($ || {});
const Tl = (t) => A(new F(t)), $l = (t, r, i, a = !0) => A(new F({ key: t, label: r, sortable: a, type: $.Link, link: i })), Rl = (t, r, i, a = !0) => A(new F({ key: t, label: r, sortable: a, type: $.Action, action: i })), Ll = (t, r, i = !0) => A(new F({ key: t, label: r, type: $.Text, sortable: i })), Ml = (t, r, i = !0) => A(new F({ key: t, label: r, type: $.Number, sortable: i })), Fl = (t, r, i = !0) => A(new F({ key: t, label: r, type: $.Number, sortable: i })), Nl = (t, r, i = !0) => A(new F({ key: t, label: r, type: $.Email, sortable: i })), Ul = (t, r, i = !0) => A(new F({ key: t, label: r, type: $.Tel, sortable: i })), Al = (t, r, i = !0) => A(new F({ key: t, label: r, type: $.Check, sortable: i })), Wl = (t, r, i = !0) => A(new F({ key: t, label: r, type: $.Switch, sortable: i })), Kl = (t, r, i, a = !0) => A(new F({ key: t, label: r, type: $.Select, sortable: a })), Hl = (t, r, i = !0) => A(new F({ key: t, label: r, type: $.File, sortable: i })), Pl = (t, r, i = !0) => A(new F({ key: t, label: r, sortable: i, hidden: !0 })), Oe = (t, r, i, a) => {
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
}, Mt = (t, r, i) => {
  if (!t.colspan) return -1;
  let a = r;
  return i.forEach((n) => {
    let l = Ve(t, n);
    l > 0 && l < a && (a = l);
  }), a;
}, Ve = (t, r) => t.colspan === !1 ? !1 : typeof t.colspan == "function" ? t.colspan(r) : t.colspan, Ft = (t, r) => typeof t.preferSlot > "u" ? !0 : t.preferSlot === !1 ? !1 : typeof t.preferSlot == "function" ? t.preferSlot(r) : !0, Nt = (t, r, i) => {
  if (typeof t != "object" || !t.key || r.indexOf(t.key) > -1) return !1;
  let a = Ve(t, i);
  return typeof t.colspan > "u" ? !0 : (typeof t.colspan < "u" && (typeof t.colspan == "function" ? a = parseInt(t.colspan(i)) : a = parseInt(t.colspan)), a > 0);
}, Ut = (t = []) => {
  if (t.length > 0) {
    for (let r = 0; r < t.length; ++r)
      if (t[r].sortable) return t[r].key;
  }
  return "";
}, At = (t, r) => {
  if (t.length > 0) {
    for (let i = 0; i < t.length; ++i)
      if (t[i].key === r) return t[i];
  }
  return null;
}, Ze = /* @__PURE__ */ _({
  __name: "LktTableCell",
  props: {
    modelValue: { default: () => ({}) },
    column: { default: () => new F() },
    columns: { default: () => [] },
    i: { default: 0 },
    editModeEnabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: r }) {
    const i = r, a = t, n = h(a.modelValue), l = h(n.value[a.column.key]), k = h(null);
    L(l, (m) => {
      const o = JSON.parse(JSON.stringify(n.value));
      o[a.column.key] = m, i("update:modelValue", o);
    }), L(() => a.modelValue, (m) => {
      n.value = m, l.value = n.value[a.column.key];
    });
    const E = c(() => ({ ...a.column.slotData, item: n.value })), g = c(() => {
      var m, o, p, b;
      if ((m = a.column.field) != null && m.modalData && typeof ((o = a.column.field) == null ? void 0 : o.modalData) == "object")
        for (let y in a.column.field.modalData)
          if (typeof ((p = a.column.field) == null ? void 0 : p.modalData[y]) == "string" && a.column.field.modalData[y].startsWith("prop:")) {
            let P = a.column.field.modalData[y].substring(5);
            n.value[P];
          } else
            a.column.field.modalData[y];
      return (b = a.column.field) == null ? void 0 : b.modalData;
    }), R = c(() => {
      var m, o, p;
      if ((m = a.column.field) != null && m.modalKey.startsWith("prop:")) {
        let b = (o = a.column.field) == null ? void 0 : o.modalKey.substring(5);
        return n.value[b];
      }
      return (p = a.column.field) == null ? void 0 : p.modalKey;
    }), d = c(() => {
      var m, o, p, b;
      if (typeof ((m = a.column.field) == null ? void 0 : m.icon) == "string" && ((o = a.column.field) != null && o.icon.startsWith("prop:"))) {
        let y = (p = a.column.field) == null ? void 0 : p.icon.substring(5);
        return n.value[y];
      }
      return (b = a.column.field) == null ? void 0 : b.icon;
    }), z = c(() => {
      var m, o, p, b;
      if (typeof ((m = a.column.field) == null ? void 0 : m.download) == "string" && ((o = a.column.field) != null && o.download.startsWith("prop:"))) {
        let y = (p = a.column.field) == null ? void 0 : p.download.substring(5);
        return n.value[y];
      }
      return (b = a.column.field) == null ? void 0 : b.download;
    }), ee = c(() => {
      var m, o, p;
      if (typeof ((m = a.column.field) == null ? void 0 : m.options) == "string" && ((o = a.column.field) != null && o.options.startsWith("prop:"))) {
        let b = (p = a.column.field) == null ? void 0 : p.options.substring(5);
        return n.value[b];
      }
      return a.column.field.options;
    }), H = c(() => [$.Integer, $.Float].includes(a.column.type) ? $.Number : a.column.type);
    return (m, o) => {
      const p = q("lkt-anchor"), b = q("lkt-field");
      return m.column.type === C($).Link ? (u(), w(p, {
        key: 0,
        to: m.column.getHref(n.value)
      }, {
        default: K(() => [
          re(Y(C(ue)(m.column, n.value, m.i)), 1)
        ]),
        _: 1
      }, 8, ["to"])) : m.column.type === C($).Action ? (u(), s("a", {
        key: 1,
        href: "#",
        onClick: o[0] || (o[0] = (y) => m.column.doAction(n.value))
      }, Y(C(ue)(m.column, n.value, m.i)), 1)) : m.column.type !== "" ? (u(), w(b, It({ key: 2 }, m.column.field, {
        icon: d.value,
        download: z.value,
        type: H.value,
        "read-mode": !m.column.editable || !m.editModeEnabled,
        ref: (y) => k.value = y,
        "slot-data": E.value,
        label: m.column.type === "switch" || m.column.type === "check" ? m.column.label : "",
        "modal-key": R.value,
        "modal-data": g.value,
        options: ee.value,
        modelValue: l.value,
        "onUpdate:modelValue": o[1] || (o[1] = (y) => l.value = y)
      }), null, 16, ["icon", "download", "type", "read-mode", "slot-data", "label", "modal-key", "modal-data", "options", "modelValue"])) : (u(), s(V, { key: 3 }, [
        re(Y(C(ue)(m.column, n.value, m.i, m.columns)), 1)
      ], 64));
    };
  }
}), X = class X {
};
X.navButtonSlot = "", X.dropButtonSlot = "", X.editButtonSlot = "", X.createButtonSlot = "", X.defaultEmptySlot = void 0, X.defaultSaveIcon = "";
let I = X;
const Wt = /* @__PURE__ */ _({
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
    const i = r, a = c(() => I.dropButtonSlot !== ""), n = c(() => I.dropButtonSlot);
    return (l, k) => {
      const E = q("lkt-button");
      return u(), w(E, {
        palette: "table-delete",
        icon: a.value ? "" : l.icon,
        text: a.value ? "" : l.text,
        resource: l.resource,
        "resource-data": l.resourceData,
        "confirm-modal": l.confirm,
        disabled: l.disabled,
        onClick: k[0] || (k[0] = Xe((g) => i("click"), ["prevent", "stop"]))
      }, {
        default: K(() => [
          a.value ? (u(), w(Z(n.value), { key: 0 })) : v("", !0)
        ]),
        _: 1
      }, 8, ["icon", "text", "resource", "resource-data", "confirm-modal", "disabled"]);
    };
  }
}), Kt = /* @__PURE__ */ _({
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
    const i = r, a = c(() => I.editButtonSlot !== ""), n = c(() => I.editButtonSlot);
    return (l, k) => {
      const E = q("lkt-button");
      return u(), w(E, {
        palette: "table-delete",
        icon: a.value ? "" : l.icon,
        text: a.value ? "" : l.text,
        "on-click-to": l.link,
        "is-anchor": l.link !== "",
        resource: l.resource,
        "resource-data": l.resourceData,
        "confirm-modal": l.confirm,
        disabled: l.disabled,
        onClick: k[0] || (k[0] = Xe((g) => i("click"), ["prevent", "stop"]))
      }, {
        default: K(() => [
          a.value ? (u(), w(Z(n.value), { key: 0 })) : v("", !0)
        ]),
        _: 1
      }, 8, ["icon", "text", "on-click-to", "is-anchor", "resource", "resource-data", "confirm-modal", "disabled"]);
    };
  }
}), Ht = ["data-i", "data-draggable"], Pt = {
  key: 1,
  "data-role": "invalid-drag-indicator"
}, qt = {
  key: 2,
  class: "lkt-table-nav-cell"
}, jt = { class: "lkt-table-nav-container" }, zt = ["data-column", "colspan", "title", "onClick"], Gt = {
  key: 4,
  class: "lkt-table-col-drop"
}, Jt = {
  key: 5,
  class: "lkt-table-col-edit"
}, Ot = /* @__PURE__ */ _({
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
  setup(t, { emit: r }) {
    const i = r, a = t, n = h(a.modelValue), l = h(a.editLink);
    for (let o in n.value) l.value = Ye(l.value, ":" + o, n.value[o]);
    const k = (o) => i("click", o), E = (o, p) => {
      i("show", o, p);
    }, g = c(() => {
      let o = [];
      return a.sortable && a.isDraggable && o.push("handle"), o.join(" ");
    }), R = c(() => I.navButtonSlot !== ""), d = c(() => I.navButtonSlot), z = () => {
      i("item-up", a.i);
    }, ee = () => {
      i("item-down", a.i);
    }, H = () => {
      i("item-drop", a.i);
    }, m = () => {
    };
    return L(() => a.modelValue, (o) => n.value = o), L(n, (o) => {
      i("update:modelValue", o, a.i);
    }, { deep: !0 }), (o, p) => {
      const b = q("lkt-button");
      return u(), s("tr", {
        "data-i": o.i,
        "data-draggable": o.isDraggable
      }, [
        o.sortable && o.isDraggable && o.editModeEnabled ? (u(), s("td", {
          key: 0,
          "data-role": "drag-indicator",
          class: Q(g.value)
        }, null, 2)) : o.sortable && o.editModeEnabled ? (u(), s("td", Pt)) : v("", !0),
        o.addNavigation && o.editModeEnabled ? (u(), s("td", qt, [
          M("div", jt, [
            ne(b, {
              palette: "table-nav",
              disabled: o.i === 0,
              onClick: z
            }, {
              default: K(() => [
                R.value ? (u(), w(Z(d.value), {
                  key: 0,
                  direction: "up"
                })) : (u(), s(V, { key: 1 }, [
                  p[2] || (p[2] = M("i", { class: "" }, null, -1)),
                  p[3] || (p[3] = re(" UP "))
                ], 64))
              ]),
              _: 1
            }, 8, ["disabled"]),
            ne(b, {
              palette: "table-nav",
              disabled: o.latestRow,
              onClick: ee
            }, {
              default: K(() => [
                R.value ? (u(), w(Z(d.value), {
                  key: 0,
                  direction: "down"
                })) : (u(), s(V, { key: 1 }, [
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
          onClick: p[0] || (p[0] = (y) => E(y, o.i)),
          "data-role": "show-more",
          class: Q(o.hiddenIsVisible ? "state-open" : "")
        }, null, 2)) : v("", !0),
        (u(!0), s(V, null, W(o.visibleColumns, (y) => (u(), s(V, null, [
          C(Nt)(y, o.emptyColumns, n.value) ? (u(), s("td", {
            key: "td" + o.i,
            "data-column": y.key,
            colspan: C(Ve)(y, n.value),
            title: C(ue)(y, n.value, o.i, o.visibleColumns),
            onClick: (P) => k(P, n.value)
          }, [
            o.$slots[y.key] && C(Ft)(y, n.value) ? U(o.$slots, y.key, {
              key: 0,
              value: n.value[y.key],
              item: n.value,
              column: y,
              i: o.i
            }) : n.value ? (u(), w(Ze, {
              key: 1,
              modelValue: n.value,
              "onUpdate:modelValue": p[1] || (p[1] = (P) => n.value = P),
              column: y,
              columns: o.visibleColumns,
              "edit-mode-enabled": o.editModeEnabled,
              i: o.i
            }, null, 8, ["modelValue", "column", "columns", "edit-mode-enabled", "i"])) : v("", !0)
          ], 8, zt)) : v("", !0)
        ], 64))), 256)),
        o.canDrop && o.editModeEnabled ? (u(), s("td", Gt, [
          ne(Wt, {
            resource: o.dropResource,
            "resource-data": n.value,
            confirm: o.dropConfirm,
            text: o.dropText,
            icon: o.dropIcon,
            onClick: H
          }, null, 8, ["resource", "resource-data", "confirm", "text", "icon"])
        ])) : v("", !0),
        o.canEdit && o.editModeEnabled ? (u(), s("td", Jt, [
          ne(Kt, {
            "resource-data": n.value,
            text: o.editText,
            icon: o.editIcon,
            link: l.value,
            onClick: m
          }, null, 8, ["resource-data", "text", "icon", "link"])
        ])) : v("", !0)
      ], 8, Ht);
    };
  }
}), Qt = { "data-role": "hidden-row" }, Xt = ["colspan"], Yt = ["data-column"], Zt = ["data-i"], _t = ["data-column", "title", "onClick"], xt = /* @__PURE__ */ _({
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
    const i = r, a = t, n = h(a.modelValue), l = (k) => i("click", k);
    return L(() => a.modelValue, (k) => n.value = k), L(n, () => i("update:modelValue", n.value)), (k, E) => ae((u(), s("tr", Qt, [
      M("td", { colspan: k.hiddenColumnsColSpan }, [
        M("table", null, [
          M("tr", null, [
            (u(!0), s(V, null, W(k.hiddenColumns, (g) => (u(), s("th", {
              "data-column": g.key
            }, [
              M("div", null, Y(g.label), 1)
            ], 8, Yt))), 256))
          ]),
          M("tr", { "data-i": k.i }, [
            (u(!0), s(V, null, W(k.hiddenColumns, (g, R) => (u(), s("td", {
              "data-column": g.key,
              title: C(ue)(g, n.value, R, k.hiddenColumns),
              onClick: (d) => l(d, n.value)
            }, [
              k.$slots[g.key] ? U(k.$slots, g.key, {
                key: 0,
                value: n.value[g.key],
                item: n.value,
                column: g,
                i: R
              }) : (u(), w(Ze, {
                key: 1,
                column: g,
                columns: k.hiddenColumns,
                modelValue: n.value,
                "onUpdate:modelValue": E[0] || (E[0] = (d) => n.value = d),
                i: R
              }, null, 8, ["column", "columns", "modelValue", "i"]))
            ], 8, _t))), 256))
          ], 8, Zt)
        ])
      ], 8, Xt)
    ], 512)), [
      [oe, k.hiddenIsVisible]
    ]);
  }
}), Qe = /* @__PURE__ */ _({
  __name: "CreateButton",
  props: {
    disabled: { type: Boolean, default: !1 },
    text: { default: "" },
    icon: { default: "" },
    to: { default: "" }
  },
  emits: ["click"],
  setup(t, { emit: r }) {
    const i = r, a = c(() => I.createButtonSlot !== ""), n = c(() => I.createButtonSlot);
    return (l, k) => {
      const E = q("lkt-button");
      return u(), w(E, {
        palette: "table-create",
        disabled: l.disabled,
        icon: a.value ? "" : l.icon,
        text: a.value ? "" : l.text,
        "on-click-to": l.to,
        onClick: k[0] || (k[0] = (g) => i("click"))
      }, {
        default: K(() => [
          a.value ? (u(), w(Z(n.value), { key: 0 })) : v("", !0)
        ]),
        _: 1
      }, 8, ["disabled", "icon", "text", "on-click-to"]);
    };
  }
}), el = ["data-column", "data-sortable", "data-sort", "colspan", "title"], tl = /* @__PURE__ */ _({
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
    const i = r, a = t, n = c(() => Mt(a.column, a.amountOfColumns, a.items)), l = c(() => a.column.sortable === !0), k = c(() => l.value && a.sortBy === a.column.key ? a.sortDirection : ""), E = c(() => a.column.label.startsWith("__:") ? pe(a.column.label.substring(3)) : a.column.label), g = () => i("click", a.column);
    return (R, d) => (u(), s("th", {
      "data-column": R.column.key,
      "data-sortable": l.value,
      "data-sort": k.value,
      colspan: n.value,
      title: E.value,
      onClick: g
    }, [
      M("div", null, Y(E.value), 1)
    ], 8, el));
  }
});
var O = /* @__PURE__ */ ((t) => (t.Table = "table", t.Item = "item", t.Ul = "ul", t.Ol = "ol", t))(O || {}), fe = /* @__PURE__ */ ((t) => (t.Create = "create", t.Update = "update", t.Edit = "edit", t.Drop = "drop", t.Sort = "sort", t))(fe || {}), me = /* @__PURE__ */ ((t) => (t.Asc = "asc", t.Desc = "desc", t))(me || {});
const ll = ["id"], al = { class: "lkt-table-page-buttons" }, ol = { key: 1 }, nl = { class: "switch-edition-mode" }, ul = {
  key: 0,
  class: "lkt-table-page-buttons"
}, rl = {
  key: 1,
  class: "lkt-table-page-filters"
}, il = ["data-sortable"], sl = { key: 0 }, dl = {
  key: 0,
  "data-role": "drag-indicator"
}, cl = { key: 1 }, fl = { key: 2 }, ml = {
  key: 3,
  class: "lkt-table-col-drop"
}, pl = {
  key: 4,
  class: "lkt-table-col-edit"
}, vl = ["id"], kl = {
  key: 0,
  class: "lkt-table-item"
}, yl = {
  key: 0,
  class: "lkt-table-item"
}, bl = {
  key: 0,
  class: "lkt-table-item"
}, hl = {
  key: 3,
  class: "lkt-table-empty"
}, gl = {
  key: 4,
  class: "lkt-table-page-buttons lkt-table-page-buttons-bottom"
}, Cl = /* @__PURE__ */ _({
  __name: "LktTable",
  props: {
    modelValue: { default: () => [] },
    type: { default: O.Table },
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
    const a = i, n = Et(), l = t, k = {}, E = h(typeof l.sorter == "function" ? l.sorter : Oe), g = h(Ut(l.columns)), R = h(me.Asc), d = h(l.modelValue), z = h(k), ee = h(null), H = h(l.columns), m = h(l.page), o = h(l.loading), p = h(!1), b = h(l.perms), y = h(null), P = h({}), te = h(new Rt({ items: d.value }, l.dataStateConfig)), T = h(l.editMode), ie = h(0);
    L(o, (e) => a("update:loading", e)), L(m, (e) => a("page", e));
    const ve = h(l.type);
    l.itemMode && ve.value === O.Table && (ve.value = O.Item);
    const _e = (e) => {
      Array.isArray(e) && (d.value = e), o.value = !1, p.value = !0, te.value.store({ items: d.value }).turnStoredIntoOriginal();
    }, xe = (e) => {
      b.value = e;
    }, et = (e) => {
    }, tt = (e) => {
      a("read-response", e);
    }, lt = () => ze(() => o.value = !0), at = () => {
      y.value.doRefresh();
    }, ke = $t(12), Se = c(() => {
      if (!l.hideEmptyColumns) return [];
      let e = [];
      return H.value.forEach((f) => {
        let D = f.key, N = !1;
        d.value.forEach((G) => {
          if (typeof G.checkEmpty == "function")
            return G.checkEmpty(G);
          G[D] && (N = !0);
        }), N || e.push(D);
      }), e;
    }), ye = c(() => H.value.filter((e) => !e.hidden)), Be = c(() => H.value.filter((e) => e.hidden)), ot = c(() => {
      let e = ye.value.length + 1;
      return l.sortable && ++e, e;
    }), nt = c(() => H.value.filter((e) => e.isForRowKey)), Ie = c(() => Be.value.length > 0 && !l.sortable), ut = c(() => H.value.map((e) => e.key)), Ee = c(() => {
      let e = [];
      for (let f in n) ut.value.indexOf(f) !== -1 && e.push(f);
      return e;
    }), Te = c(() => l.hiddenSave || o.value || !l.saveResource ? !1 : T.value && te.value.changed() ? !0 : T.value), rt = c(() => he.value && d.value.length >= l.requiredItemsForTopCreate || l.switchEditionEnabled ? !0 : Te.value || T.value && le.value), it = c(() => l.saveDisabled || typeof l.saveValidator == "function" && !l.saveValidator(d.value) ? !1 : te.value.changed()), st = c(() => d.value.length), dt = c(() => ({
      items: d.value,
      ...l.saveResourceData
    })), ct = c(() => l.titleTag === "" ? "h2" : l.titleTag), ft = c(() => l.wrapContentTag === "" ? "div" : l.wrapContentTag), we = c(() => l.title.startsWith("__:") ? pe(l.title.substring(3)) : l.title), mt = c(() => l.saveText.startsWith("__:") ? pe(l.saveText.substring(3)) : l.saveText), pt = c(() => l.editModeText.startsWith("__:") ? pe(l.editModeText.substring(3)) : l.editModeText), le = c(() => b.value.includes(fe.Create)), De = c(() => b.value.includes("read")), se = c(() => b.value.includes(fe.Update)), $e = c(() => b.value.includes(fe.Edit)), de = c(() => b.value.includes(fe.Drop));
    let Re;
    const Le = h(!1), Me = h([]), vt = (e) => {
      let f = e.target;
      if (typeof f.dataset.column > "u")
        do
          f = f.parentNode;
        while (typeof f.dataset.column > "u" && f.tagName !== "TABLE" && f.tagName !== "body");
      if (f.tagName === "TD" && (f = f.parentNode, f = f.dataset.i, typeof f < "u"))
        return d.value[f];
    }, kt = (e) => d.value[e], yt = (e) => {
      var f;
      return (f = ee.value) == null ? void 0 : f.querySelector(`tr[data-i="${e}"]`);
    }, Fe = (e) => z.value["tr_" + e] === !0, Ne = (e) => {
      e && e.sortable && (d.value = d.value.sort((f, D) => E.value(f, D, e, R.value)), R.value = R.value === me.Asc ? me.Desc : me.Asc, g.value = e.key, a("sort", [g.value, R.value]));
    }, Ue = (e) => {
      a("click", e);
    }, Ae = (e, f) => {
      let D = "tr_" + f;
      z.value[D] = typeof z.value[D] > "u" ? !0 : !z.value[D];
    }, bt = (e) => typeof l.checkValidDrag == "function" ? l.checkValidDrag(e) : !0, We = (e) => typeof l.draggableChecker == "function" ? l.draggableChecker(e) : !0, Ke = () => {
      if (l.canCreateWithoutEdition)
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
    }, ht = () => {
      o.value = !0;
    }, gt = () => {
      o.value = !1;
    }, Ct = (e, f) => {
      if (a("before-save"), l.saveResource && (o.value = !1, !f.success)) {
        a("error", f.httpStatus);
        return;
      }
      te.value.turnStoredIntoOriginal(), a("save", f);
    }, He = (e, f, D) => {
      if (D >= e.length) {
        let N = D - e.length + 1;
        for (; N--; ) e.push(void 0);
      }
      return e.splice(D, 0, e.splice(f, 1)[0]), e;
    }, St = (e) => {
      He(d.value, e, e - 1), ie.value = Ce();
    }, Bt = (e) => {
      He(d.value, e, e + 1), ie.value = Ce();
    }, be = (e) => {
      d.value.splice(e, 1), ie.value = Ce();
    }, wt = () => {
      P.value && (P.value.destroy(), P.value = {});
    }, Pe = () => {
      let e = document.getElementById("lkt-table-body-" + ke);
      P.value = new Lt(e, {
        direction: "vertical",
        handle: ".handle",
        animation: 150,
        onEnd: function(f) {
          clearTimeout(Re);
          let D = f.oldIndex, N = f.newIndex;
          d.value.splice(N, 0, d.value.splice(D, 1)[0]), ie.value = Ce(), Le.value = !0, Me.value = [D, N], Re = setTimeout(() => {
            Le.value = !1, Me.value = [];
          }, 5);
        },
        onMove: function(f, D) {
          return bt(f);
        }
      });
    }, qe = (e, f, D = !1) => {
      let N = [ie.value, ke, "row", f];
      return D && N.push("hidden"), nt.value.forEach((G) => {
        let J = String(e[G.key]).toLowerCase();
        J.length > 50 && (J = J.substring(0, 50)), J = Ye(J, " ", "-"), N.push(J);
      }), N.join("-");
    }, je = c(() => typeof l.createEnabledValidator == "function" ? l.createEnabledValidator({ items: d.value }) : !0), he = c(() => le.value ? l.canCreateWithoutEdition || le.value && T.value : !1), ge = (e, f) => typeof l.itemDisplayChecker == "function" ? l.itemDisplayChecker(e) : !0;
    Tt(() => {
      l.initialSorting && Ne(At(l.columns, g.value)), te.value.store({ items: d.value }).turnStoredIntoOriginal(), l.sortable && ze(() => {
        Pe();
      });
    }), L(() => l.sortable, (e) => {
      e ? Pe() : wt();
    }), L(() => l.perms, (e) => b.value = e), L(b, (e) => a("update:perms", e)), L(() => l.editMode, (e) => T.value = e), L(() => l.columns, (e) => H.value = e), L(() => l.modelValue, (e) => d.value = e), L(d, (e) => {
      te.value.increment({ items: e }), a("update:modelValue", e);
    }, { deep: !0 }), r({
      getItemByEvent: vt,
      getItemByIndex: kt,
      getRowByIndex: yt,
      doRefresh: at
    });
    const Dt = c(() => typeof I.defaultEmptySlot < "u"), Vt = c(() => I.defaultEmptySlot);
    return (e, f) => {
      const D = q("lkt-button"), N = q("lkt-field"), G = q("lkt-loader"), J = q("lkt-paginator");
      return u(), s("section", {
        class: "lkt-table-page",
        id: "lkt-table-page-" + C(ke)
      }, [
        we.value || C(n).title ? (u(), s("header", {
          key: 0,
          class: Q(e.headerClass)
        }, [
          we.value ? (u(), w(Z(ct.value), { key: 0 }, {
            default: K(() => [
              e.titleIcon ? (u(), s("i", {
                key: 0,
                class: Q(e.titleIcon)
              }, null, 2)) : v("", !0),
              re(" " + Y(we.value), 1)
            ]),
            _: 1
          })) : v("", !0),
          C(n).title ? U(e.$slots, "title", { key: 1 }) : v("", !0)
        ], 2)) : v("", !0),
        (u(), w(Z(ft.value), {
          class: Q(["lkt-table-page-content-wrapper", e.wrapContentClass])
        }, {
          default: K(() => [
            ae(M("div", al, [
              ae(ne(D, {
                class: "lkt-table--save-button",
                ref: "saveButton",
                icon: C(I).defaultSaveIcon,
                disabled: !it.value,
                "confirm-modal": e.saveConfirm,
                "confirm-data": e.confirmData,
                resource: e.saveResource,
                "resource-data": dt.value,
                onLoading: ht,
                onLoaded: gt,
                onClick: Ct
              }, {
                default: K(() => [
                  C(n)["button-save"] ? U(e.$slots, "button-save", {
                    key: 0,
                    items: d.value,
                    editMode: e.editMode,
                    canUpdate: !e.saveDisabled
                  }) : (u(), s("span", ol, Y(mt.value), 1))
                ]),
                _: 3
              }, 8, ["icon", "disabled", "confirm-modal", "confirm-data", "resource", "resource-data"]), [
                [oe, Te.value]
              ]),
              he.value && d.value.length >= e.requiredItemsForTopCreate ? (u(), w(Qe, {
                key: 0,
                disabled: !je.value || e.createDisabled,
                text: e.createText,
                icon: e.createIcon,
                to: e.createRoute,
                onClick: Ke
              }, null, 8, ["disabled", "text", "icon", "to"])) : v("", !0),
              M("div", nl, [
                ae(ne(N, {
                  type: "switch",
                  modelValue: T.value,
                  "onUpdate:modelValue": f[0] || (f[0] = (B) => T.value = B),
                  label: pt.value
                }, null, 8, ["modelValue", "label"]), [
                  [oe, e.switchEditionEnabled]
                ])
              ])
            ], 512), [
              [oe, rt.value]
            ]),
            C(n).buttons ? (u(), s("div", ul, [
              U(e.$slots, "buttons")
            ])) : v("", !0),
            p.value && C(n).filters ? (u(), s("div", rl, [
              U(e.$slots, "filters", {
                items: d.value,
                isLoading: o.value
              })
            ])) : v("", !0),
            o.value ? (u(), w(G, { key: 2 })) : v("", !0),
            ae(M("div", {
              class: "lkt-table",
              "data-sortable": e.sortable
            }, [
              ve.value === C(O).Table ? (u(), s("table", sl, [
                M("thead", null, [
                  M("tr", null, [
                    e.sortable && T.value ? (u(), s("th", dl)) : v("", !0),
                    e.addNavigation && T.value ? (u(), s("th", cl)) : v("", !0),
                    Ie.value ? (u(), s("th", fl)) : v("", !0),
                    (u(!0), s(V, null, W(ye.value, (B) => (u(), s(V, null, [
                      Se.value.indexOf(B.key) === -1 ? (u(), w(tl, {
                        key: 0,
                        column: B,
                        "sort-by": g.value,
                        "sort-direction": R.value,
                        "amount-of-columns": e.columns.length,
                        items: d.value,
                        onClick: (S) => Ne(B)
                      }, null, 8, ["column", "sort-by", "sort-direction", "amount-of-columns", "items", "onClick"])) : v("", !0)
                    ], 64))), 256)),
                    e.canDrop && de.value && T.value ? (u(), s("th", ml)) : v("", !0),
                    $e.value && se.value && T.value ? (u(), s("th", pl)) : v("", !0)
                  ])
                ]),
                M("tbody", {
                  ref_key: "tableBody",
                  ref: ee,
                  id: "lkt-table-body-" + C(ke)
                }, [
                  (u(!0), s(V, null, W(d.value, (B, S) => ae((u(), w(Ot, {
                    modelValue: d.value[S],
                    "onUpdate:modelValue": (j) => d.value[S] = j,
                    key: qe(B, S),
                    i: S,
                    "display-hidden-columns-indicator": Ie.value,
                    "is-draggable": We(B),
                    sortable: e.sortable,
                    "visible-columns": ye.value,
                    "empty-columns": Se.value,
                    "add-navigation": e.addNavigation,
                    "hidden-is-visible": Fe(S),
                    "latest-row": S + 1 === st.value,
                    "can-drop": e.canDrop && de.value && T.value,
                    "drop-confirm": e.dropConfirm,
                    "drop-resource": e.dropResource,
                    "drop-text": e.dropText,
                    "drop-icon": e.dropIcon,
                    "can-edit": $e.value && se.value && T.value,
                    "edit-text": e.editText,
                    "edit-icon": e.editIcon,
                    "edit-link": e.editLink,
                    "edit-mode-enabled": T.value,
                    onClick: Ue,
                    onShow: Ae,
                    onItemUp: St,
                    onItemDown: Bt,
                    onItemDrop: be
                  }, Ge({ _: 2 }, [
                    W(Ee.value, (j) => ({
                      name: j,
                      fn: K((x) => [
                        U(e.$slots, j, ce({
                          [e.slotItemVar || ""]: x.item,
                          value: x.value,
                          column: x.column
                        }))
                      ])
                    }))
                  ]), 1032, ["modelValue", "onUpdate:modelValue", "i", "display-hidden-columns-indicator", "is-draggable", "sortable", "visible-columns", "empty-columns", "add-navigation", "hidden-is-visible", "latest-row", "can-drop", "drop-confirm", "drop-resource", "drop-text", "drop-icon", "can-edit", "edit-text", "edit-icon", "edit-link", "edit-mode-enabled"])), [
                    [oe, ge(d.value[S])]
                  ])), 128)),
                  Be.value.length > 0 ? (u(!0), s(V, { key: 0 }, W(d.value, (B, S) => (u(), w(xt, {
                    modelValue: d.value[S],
                    "onUpdate:modelValue": (j) => d.value[S] = j,
                    key: qe(B, S, !0),
                    i: S,
                    "hidden-columns": Be.value,
                    "hidden-columns-col-span": ot.value,
                    "is-draggable": We(B),
                    sortable: e.sortable,
                    "visible-columns": ye.value,
                    "empty-columns": Se.value,
                    "hidden-is-visible": Fe(S),
                    onClick: Ue,
                    onShow: Ae
                  }, Ge({ _: 2 }, [
                    W(Ee.value, (j) => ({
                      name: j,
                      fn: K((x) => [
                        U(e.$slots, j, ce({
                          [e.slotItemVar || ""]: x.item,
                          value: x.value,
                          column: x.column
                        }))
                      ])
                    }))
                  ]), 1032, ["modelValue", "onUpdate:modelValue", "i", "hidden-columns", "hidden-columns-col-span", "is-draggable", "sortable", "visible-columns", "empty-columns", "hidden-is-visible"]))), 128)) : v("", !0)
                ], 8, vl)
              ])) : ve.value === C(O).Item ? (u(), s("div", {
                key: 1,
                class: Q(["lkt-table-items-container", e.itemsContainerClass])
              }, [
                (u(!0), s(V, null, W(d.value, (B, S) => (u(), s(V, null, [
                  ge(B) ? (u(), s("div", kl, [
                    U(e.$slots, "item", ce({
                      [e.slotItemVar || ""]: B,
                      index: S,
                      editing: T.value,
                      canCreate: le.value,
                      canRead: De.value,
                      canUpdate: se.value,
                      canDrop: de.value,
                      isLoading: o.value,
                      doDrop: () => be(S)
                    }))
                  ])) : v("", !0)
                ], 64))), 256))
              ], 2)) : C(O).Ul ? (u(), s("ul", {
                key: 2,
                class: Q(["lkt-table-items-container", e.itemsContainerClass])
              }, [
                (u(!0), s(V, null, W(d.value, (B, S) => (u(), s(V, null, [
                  ge(B) ? (u(), s("li", yl, [
                    U(e.$slots, "item", ce({
                      [e.slotItemVar || ""]: B,
                      index: S,
                      editing: T.value,
                      canCreate: le.value,
                      canRead: De.value,
                      canUpdate: se.value,
                      canDrop: de.value,
                      isLoading: o.value,
                      doDrop: () => be(S)
                    }))
                  ])) : v("", !0)
                ], 64))), 256))
              ], 2)) : C(O).Ul ? (u(), s("ol", {
                key: 3,
                class: Q(["lkt-table-items-container", e.itemsContainerClass])
              }, [
                (u(!0), s(V, null, W(d.value, (B, S) => (u(), s(V, null, [
                  ge(B) ? (u(), s("li", bl, [
                    U(e.$slots, "item", ce({
                      [e.slotItemVar || ""]: B,
                      index: S,
                      editing: T.value,
                      canCreate: le.value,
                      canRead: De.value,
                      canUpdate: se.value,
                      canDrop: de.value,
                      isLoading: o.value,
                      doDrop: () => be(S)
                    }))
                  ])) : v("", !0)
                ], 64))), 256))
              ], 2)) : v("", !0)
            ], 8, il), [
              [oe, !o.value && d.value.length > 0]
            ]),
            !o.value && d.value.length === 0 ? (u(), s("div", hl, [
              C(n).empty ? U(e.$slots, "empty", { key: 0 }) : Dt.value ? (u(), w(Z(Vt.value), {
                key: 1,
                message: e.noResultsText
              }, null, 8, ["message"])) : e.noResultsText ? (u(), s(V, { key: 2 }, [
                re(Y(e.noResultsText), 1)
              ], 64)) : v("", !0)
            ])) : v("", !0),
            he.value || C(n).bottomButtons ? (u(), s("div", gl, [
              he.value && d.value.length >= e.requiredItemsForBottomCreate ? (u(), w(Qe, {
                key: 0,
                disabled: !je.value || e.createDisabled,
                text: e.createText,
                icon: e.createIcon,
                to: e.createRoute,
                onClick: Ke
              }, null, 8, ["disabled", "text", "icon", "to"])) : v("", !0),
              U(e.$slots, "bottom-buttons")
            ])) : v("", !0),
            e.resource.length > 0 ? (u(), w(J, {
              key: 5,
              ref_key: "paginator",
              ref: y,
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
      ], 8, ll);
    };
  }
}), ql = {
  install: (t) => {
    t.component("lkt-table") === void 0 && t.component("lkt-table", Cl);
  }
}, jl = (t) => (I.navButtonSlot = t, !0), zl = (t) => (I.dropButtonSlot = t, !0), Gl = (t) => (I.createButtonSlot = t, !0), Jl = (t) => {
  I.defaultEmptySlot = t;
}, Ol = (t) => {
  I.defaultSaveIcon = t;
};
export {
  F as Column,
  Rl as createActionColumn,
  Al as createCheckColumn,
  Tl as createColumn,
  Nl as createEmailColumn,
  Hl as createFileColumn,
  Fl as createFloatColumn,
  Pl as createHiddenColumn,
  Ml as createIntegerColumn,
  $l as createLinkColumn,
  Kl as createSelectColumn,
  Wl as createSwitchColumn,
  Ul as createTelColumn,
  Ll as createTextColumn,
  ql as default,
  Gl as setTableCreateButtonSlot,
  zl as setTableDropButtonSlot,
  Jl as setTableEmptySlot,
  jl as setTableNavButtonSlot,
  Ol as setTableSaveIcon
};
