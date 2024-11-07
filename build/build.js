import { reactive as A, defineComponent as _, ref as g, watch as L, computed as c, resolveComponent as P, unref as S, openBlock as u, createBlock as w, withCtx as H, createTextVNode as re, toDisplayString as Y, createElementBlock as s, mergeProps as Et, Fragment as V, withModifiers as Ye, resolveDynamicComponent as Z, createCommentVNode as v, normalizeClass as Q, createElementVNode as M, createVNode as ne, renderList as W, renderSlot as U, withDirectives as ae, vShow as oe, useSlots as Tt, onMounted as $t, nextTick as Ge, createSlots as Je, normalizeProps as ce } from "vue";
import { Field as Oe } from "lkt-field";
import { __ as pe } from "lkt-i18n";
import { replaceAll as Ze, generateRandomString as Rt } from "lkt-string-tools";
import { DataState as Lt } from "lkt-data-state";
import Mt from "sortablejs";
import { time as Se } from "lkt-date-tools";
class F {
  constructor(r = {}) {
    this.key = "", this.label = "", this.sortable = !0, this.hidden = !1, this.editable = !1, this.formatter = void 0, this.checkEmpty = void 0, this.colspan = void 0, this.preferSlot = !0, this.type = "", this.link = "", this.action = void 0, this.isForRowKey = !1, this.extractTitleFromColumn = "", this.slotData = {}, this.field = new Oe();
    for (let i in r)
      this[i] = r[i];
    this.field = new Oe(this.field);
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
const $l = (t) => A(new F(t)), Rl = (t, r, i, a = !0) => A(new F({ key: t, label: r, sortable: a, type: $.Link, link: i })), Ll = (t, r, i, a = !0) => A(new F({ key: t, label: r, sortable: a, type: $.Action, action: i })), Ml = (t, r, i = !0) => A(new F({ key: t, label: r, type: $.Text, sortable: i })), Fl = (t, r, i = !0) => A(new F({ key: t, label: r, type: $.Number, sortable: i })), Nl = (t, r, i = !0) => A(new F({ key: t, label: r, type: $.Number, sortable: i })), Ul = (t, r, i = !0) => A(new F({ key: t, label: r, type: $.Email, sortable: i })), Al = (t, r, i = !0) => A(new F({ key: t, label: r, type: $.Tel, sortable: i })), Wl = (t, r, i = !0) => A(new F({ key: t, label: r, type: $.Check, sortable: i })), Hl = (t, r, i = !0) => A(new F({ key: t, label: r, type: $.Switch, sortable: i })), Kl = (t, r, i, a = !0) => A(new F({ key: t, label: r, type: $.Select, sortable: a })), Pl = (t, r, i = !0) => A(new F({ key: t, label: r, type: $.File, sortable: i })), ql = (t, r, i = !0) => A(new F({ key: t, label: r, sortable: i, hidden: !0 })), Qe = (t, r, i, a) => {
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
}, Ft = (t, r, i) => {
  if (!t.colspan) return -1;
  let a = r;
  return i.forEach((n) => {
    let l = Ie(t, n);
    l > 0 && l < a && (a = l);
  }), a;
}, Ie = (t, r) => t.colspan === !1 ? !1 : typeof t.colspan == "function" ? t.colspan(r) : t.colspan, Nt = (t, r) => typeof t.preferSlot > "u" ? !0 : t.preferSlot === !1 ? !1 : typeof t.preferSlot == "function" ? t.preferSlot(r) : !0, Ut = (t, r, i) => {
  if (typeof t != "object" || !t.key || r.indexOf(t.key) > -1) return !1;
  let a = Ie(t, i);
  return typeof t.colspan > "u" ? !0 : (typeof t.colspan < "u" && (typeof t.colspan == "function" ? a = parseInt(t.colspan(i)) : a = parseInt(t.colspan)), a > 0);
}, At = (t = []) => {
  if (t.length > 0) {
    for (let r = 0; r < t.length; ++r)
      if (t[r].sortable) return t[r].key;
  }
  return "";
}, Wt = (t, r) => {
  if (t.length > 0) {
    for (let i = 0; i < t.length; ++i)
      if (t[i].key === r) return t[i];
  }
  return null;
}, _e = /* @__PURE__ */ _({
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
    const i = r, a = t, n = g(a.modelValue), l = g(n.value[a.column.key]), k = g(null);
    L(l, (m) => {
      const o = JSON.parse(JSON.stringify(n.value));
      o[a.column.key] = m, i("update:modelValue", o);
    }), L(() => a.modelValue, (m) => {
      n.value = m, l.value = n.value[a.column.key];
    });
    const E = c(() => ({ ...a.column.slotData, item: n.value })), C = c(() => {
      var m, o, p, b;
      if ((m = a.column.field) != null && m.modalData && typeof ((o = a.column.field) == null ? void 0 : o.modalData) == "object")
        for (let y in a.column.field.modalData)
          if (typeof ((p = a.column.field) == null ? void 0 : p.modalData[y]) == "string" && a.column.field.modalData[y].startsWith("prop:")) {
            let z = a.column.field.modalData[y].substring(5);
            n.value[z];
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
    }), j = c(() => {
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
    }), K = c(() => [$.Integer, $.Float].includes(a.column.type) ? $.Number : a.column.type);
    return (m, o) => {
      const p = P("lkt-anchor"), b = P("lkt-field");
      return m.column.type === S($).Link ? (u(), w(p, {
        key: 0,
        to: m.column.getHref(n.value)
      }, {
        default: H(() => [
          re(Y(S(ue)(m.column, n.value, m.i)), 1)
        ]),
        _: 1
      }, 8, ["to"])) : m.column.type === S($).Action ? (u(), s("a", {
        key: 1,
        href: "#",
        onClick: o[0] || (o[0] = (y) => m.column.doAction(n.value))
      }, Y(S(ue)(m.column, n.value, m.i)), 1)) : m.column.type !== "" ? (u(), w(b, Et({ key: 2 }, m.column.field, {
        icon: d.value,
        download: j.value,
        type: K.value,
        "read-mode": !m.column.editable || !m.editModeEnabled,
        ref: (y) => k.value = y,
        "slot-data": E.value,
        label: m.column.type === "switch" || m.column.type === "check" ? m.column.label : "",
        "modal-key": R.value,
        "modal-data": C.value,
        options: ee.value,
        modelValue: l.value,
        "onUpdate:modelValue": o[1] || (o[1] = (y) => l.value = y)
      }), null, 16, ["icon", "download", "type", "read-mode", "slot-data", "label", "modal-key", "modal-data", "options", "modelValue"])) : (u(), s(V, { key: 3 }, [
        re(Y(S(ue)(m.column, n.value, m.i, m.columns)), 1)
      ], 64));
    };
  }
}), X = class X {
};
X.navButtonSlot = "", X.dropButtonSlot = "", X.editButtonSlot = "", X.createButtonSlot = "", X.defaultEmptySlot = void 0, X.defaultSaveIcon = "";
let I = X;
const Ht = /* @__PURE__ */ _({
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
      const E = P("lkt-button");
      return u(), w(E, {
        palette: "table-delete",
        icon: a.value ? "" : l.icon,
        text: a.value ? "" : l.text,
        resource: l.resource,
        "resource-data": l.resourceData,
        "confirm-modal": l.confirm,
        disabled: l.disabled,
        onClick: k[0] || (k[0] = Ye((C) => i("click"), ["prevent", "stop"]))
      }, {
        default: H(() => [
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
      const E = P("lkt-button");
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
        onClick: k[0] || (k[0] = Ye((C) => i("click"), ["prevent", "stop"]))
      }, {
        default: H(() => [
          a.value ? (u(), w(Z(n.value), { key: 0 })) : v("", !0)
        ]),
        _: 1
      }, 8, ["icon", "text", "on-click-to", "is-anchor", "resource", "resource-data", "confirm-modal", "disabled"]);
    };
  }
}), Pt = ["data-i", "data-draggable"], qt = {
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
}, Qt = /* @__PURE__ */ _({
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
    const i = r, a = t, n = g(a.modelValue), l = g(a.editLink);
    for (let o in n.value) l.value = Ze(l.value, ":" + o, n.value[o]);
    const k = (o) => i("click", o), E = (o, p) => {
      i("show", o, p);
    }, C = c(() => {
      let o = [];
      return a.sortable && a.isDraggable && o.push("handle"), o.join(" ");
    }), R = c(() => I.navButtonSlot !== ""), d = c(() => I.navButtonSlot), j = () => {
      i("item-up", a.i);
    }, ee = () => {
      i("item-down", a.i);
    }, K = () => {
      i("item-drop", a.i);
    }, m = () => {
    };
    return L(() => a.modelValue, (o) => n.value = o), L(n, (o) => {
      i("update:modelValue", o, a.i);
    }, { deep: !0 }), (o, p) => {
      const b = P("lkt-button");
      return u(), s("tr", {
        "data-i": o.i,
        "data-draggable": o.isDraggable
      }, [
        o.sortable && o.isDraggable && o.editModeEnabled ? (u(), s("td", {
          key: 0,
          "data-role": "drag-indicator",
          class: Q(C.value)
        }, null, 2)) : o.sortable && o.editModeEnabled ? (u(), s("td", qt)) : v("", !0),
        o.addNavigation && o.editModeEnabled ? (u(), s("td", jt, [
          M("div", zt, [
            ne(b, {
              palette: "table-nav",
              disabled: o.i === 0,
              onClick: j
            }, {
              default: H(() => [
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
              default: H(() => [
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
          S(Ut)(y, o.emptyColumns, n.value) ? (u(), s("td", {
            key: "td" + o.i,
            "data-column": y.key,
            colspan: S(Ie)(y, n.value),
            title: S(ue)(y, n.value, o.i, o.visibleColumns),
            onClick: (z) => k(z, n.value)
          }, [
            o.$slots[y.key] && S(Nt)(y, n.value) ? U(o.$slots, y.key, {
              key: 0,
              value: n.value[y.key],
              item: n.value,
              column: y,
              i: o.i
            }) : n.value ? (u(), w(_e, {
              key: 1,
              modelValue: n.value,
              "onUpdate:modelValue": p[1] || (p[1] = (z) => n.value = z),
              column: y,
              columns: o.visibleColumns,
              "edit-mode-enabled": o.editModeEnabled,
              i: o.i
            }, null, 8, ["modelValue", "column", "columns", "edit-mode-enabled", "i"])) : v("", !0)
          ], 8, Gt)) : v("", !0)
        ], 64))), 256)),
        o.canDrop && o.editModeEnabled ? (u(), s("td", Jt, [
          ne(Ht, {
            resource: o.dropResource,
            "resource-data": n.value,
            confirm: o.dropConfirm,
            text: o.dropText,
            icon: o.dropIcon,
            onClick: K
          }, null, 8, ["resource", "resource-data", "confirm", "text", "icon"])
        ])) : v("", !0),
        o.canEdit && o.editModeEnabled ? (u(), s("td", Ot, [
          ne(Kt, {
            "resource-data": n.value,
            text: o.editText,
            icon: o.editIcon,
            link: l.value,
            onClick: m
          }, null, 8, ["resource-data", "text", "icon", "link"])
        ])) : v("", !0)
      ], 8, Pt);
    };
  }
}), Xt = { "data-role": "hidden-row" }, Yt = ["colspan"], Zt = ["data-column"], _t = ["data-i"], xt = ["data-column", "title", "onClick"], el = /* @__PURE__ */ _({
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
    const i = r, a = t, n = g(a.modelValue), l = (k) => i("click", k);
    return L(() => a.modelValue, (k) => n.value = k), L(n, () => i("update:modelValue", n.value)), (k, E) => ae((u(), s("tr", Xt, [
      M("td", { colspan: k.hiddenColumnsColSpan }, [
        M("table", null, [
          M("tr", null, [
            (u(!0), s(V, null, W(k.hiddenColumns, (C) => (u(), s("th", {
              "data-column": C.key
            }, [
              M("div", null, Y(C.label), 1)
            ], 8, Zt))), 256))
          ]),
          M("tr", { "data-i": k.i }, [
            (u(!0), s(V, null, W(k.hiddenColumns, (C, R) => (u(), s("td", {
              "data-column": C.key,
              title: S(ue)(C, n.value, R, k.hiddenColumns),
              onClick: (d) => l(d, n.value)
            }, [
              k.$slots[C.key] ? U(k.$slots, C.key, {
                key: 0,
                value: n.value[C.key],
                item: n.value,
                column: C,
                i: R
              }) : (u(), w(_e, {
                key: 1,
                column: C,
                columns: k.hiddenColumns,
                modelValue: n.value,
                "onUpdate:modelValue": E[0] || (E[0] = (d) => n.value = d),
                i: R
              }, null, 8, ["column", "columns", "modelValue", "i"]))
            ], 8, xt))), 256))
          ], 8, _t)
        ])
      ], 8, Yt)
    ], 512)), [
      [oe, k.hiddenIsVisible]
    ]);
  }
}), Xe = /* @__PURE__ */ _({
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
      const E = P("lkt-button");
      return u(), w(E, {
        palette: "table-create",
        disabled: l.disabled,
        icon: a.value ? "" : l.icon,
        text: a.value ? "" : l.text,
        "on-click-to": l.to,
        onClick: k[0] || (k[0] = (C) => i("click"))
      }, {
        default: H(() => [
          a.value ? (u(), w(Z(n.value), { key: 0 })) : v("", !0)
        ]),
        _: 1
      }, 8, ["disabled", "icon", "text", "on-click-to"]);
    };
  }
}), tl = ["data-column", "data-sortable", "data-sort", "colspan", "title"], ll = /* @__PURE__ */ _({
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
    const i = r, a = t, n = c(() => Ft(a.column, a.amountOfColumns, a.items)), l = c(() => a.column.sortable === !0), k = c(() => l.value && a.sortBy === a.column.key ? a.sortDirection : ""), E = c(() => a.column.label.startsWith("__:") ? pe(a.column.label.substring(3)) : a.column.label), C = () => i("click", a.column);
    return (R, d) => (u(), s("th", {
      "data-column": R.column.key,
      "data-sortable": l.value,
      "data-sort": k.value,
      colspan: n.value,
      title: E.value,
      onClick: C
    }, [
      M("div", null, Y(E.value), 1)
    ], 8, tl));
  }
});
var O = /* @__PURE__ */ ((t) => (t.Table = "table", t.Item = "item", t.Ul = "ul", t.Ol = "ol", t))(O || {}), fe = /* @__PURE__ */ ((t) => (t.Create = "create", t.Update = "update", t.Edit = "edit", t.Drop = "drop", t.Sort = "sort", t))(fe || {}), me = /* @__PURE__ */ ((t) => (t.Asc = "asc", t.Desc = "desc", t))(me || {});
const al = ["id"], ol = { class: "lkt-table-page-buttons" }, nl = { key: 1 }, ul = { class: "switch-edition-mode" }, rl = {
  key: 0,
  class: "lkt-table-page-buttons"
}, il = {
  key: 1,
  class: "lkt-table-page-filters"
}, sl = ["data-sortable"], dl = { key: 0 }, cl = {
  key: 0,
  "data-role": "drag-indicator"
}, fl = { key: 1 }, ml = { key: 2 }, pl = {
  key: 3,
  class: "lkt-table-col-drop"
}, vl = {
  key: 4,
  class: "lkt-table-col-edit"
}, kl = ["id"], yl = ["data-i"], bl = ["data-i"], hl = ["data-i"], gl = {
  key: 3,
  class: "lkt-table-empty"
}, Cl = {
  key: 4,
  class: "lkt-table-page-buttons lkt-table-page-buttons-bottom"
}, Sl = /* @__PURE__ */ _({
  __name: "LktTable",
  props: {
    modelValue: { default: () => [] },
    type: { default: O.Table },
    columns: { default: () => [] },
    sorter: { type: Function, default: Qe },
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
    const a = i, n = Tt(), l = t, k = {}, E = g(typeof l.sorter == "function" ? l.sorter : Qe), C = g(At(l.columns)), R = g(me.Asc), d = g(l.modelValue), j = g(k), ee = g(null), K = g(l.columns), m = g(l.page), o = g(l.loading), p = g(!1), b = g(l.perms), y = g(null), z = g(null), ve = g({}), te = g(new Lt({ items: d.value }, l.dataStateConfig)), T = g(l.editMode), ie = g(0);
    L(o, (e) => a("update:loading", e)), L(m, (e) => a("page", e));
    const ke = g(l.type);
    l.itemMode && ke.value === O.Table && (ke.value = O.Item);
    const xe = (e) => {
      Array.isArray(e) && (d.value = e), o.value = !1, p.value = !0, te.value.store({ items: d.value }).turnStoredIntoOriginal();
    }, et = (e) => {
      b.value = e;
    }, tt = (e) => {
    }, lt = (e) => {
      a("read-response", e);
    }, at = () => Ge(() => o.value = !0), ot = () => {
      y.value.doRefresh();
    }, ye = Rt(12), Be = c(() => {
      if (!l.hideEmptyColumns) return [];
      let e = [];
      return K.value.forEach((f) => {
        let D = f.key, N = !1;
        d.value.forEach((G) => {
          if (typeof G.checkEmpty == "function")
            return G.checkEmpty(G);
          G[D] && (N = !0);
        }), N || e.push(D);
      }), e;
    }), be = c(() => K.value.filter((e) => !e.hidden)), we = c(() => K.value.filter((e) => e.hidden)), nt = c(() => {
      let e = be.value.length + 1;
      return l.sortable && ++e, e;
    }), ut = c(() => K.value.filter((e) => e.isForRowKey)), Ee = c(() => we.value.length > 0 && !l.sortable), rt = c(() => K.value.map((e) => e.key)), Te = c(() => {
      let e = [];
      for (let f in n) rt.value.indexOf(f) !== -1 && e.push(f);
      return e;
    }), $e = c(() => l.hiddenSave || o.value || !l.saveResource ? !1 : T.value && te.value.changed() ? !0 : T.value), it = c(() => ge.value && d.value.length >= l.requiredItemsForTopCreate || l.switchEditionEnabled ? !0 : $e.value || T.value && le.value), st = c(() => l.saveDisabled || typeof l.saveValidator == "function" && !l.saveValidator(d.value) ? !1 : te.value.changed()), dt = c(() => d.value.length), ct = c(() => ({
      items: d.value,
      ...l.saveResourceData
    })), ft = c(() => l.titleTag === "" ? "h2" : l.titleTag), mt = c(() => l.wrapContentTag === "" ? "div" : l.wrapContentTag), De = c(() => l.title.startsWith("__:") ? pe(l.title.substring(3)) : l.title), pt = c(() => l.saveText.startsWith("__:") ? pe(l.saveText.substring(3)) : l.saveText), vt = c(() => l.editModeText.startsWith("__:") ? pe(l.editModeText.substring(3)) : l.editModeText), le = c(() => b.value.includes(fe.Create)), Ve = c(() => b.value.includes("read")), se = c(() => b.value.includes(fe.Update)), Re = c(() => b.value.includes(fe.Edit)), de = c(() => b.value.includes(fe.Drop));
    let Le;
    const Me = g(!1), Fe = g([]), kt = (e) => {
      let f = e.target;
      if (typeof f.dataset.column > "u")
        do
          f = f.parentNode;
        while (typeof f.dataset.column > "u" && f.tagName !== "TABLE" && f.tagName !== "body");
      if (f.tagName === "TD" && (f = f.parentNode, f = f.dataset.i, typeof f < "u"))
        return d.value[f];
    }, yt = (e) => d.value[e], bt = (e) => {
      var f;
      return (f = ee.value) == null ? void 0 : f.querySelector(`tr[data-i="${e}"]`);
    }, Ne = (e) => j.value["tr_" + e] === !0, Ue = (e) => {
      e && e.sortable && (d.value = d.value.sort((f, D) => E.value(f, D, e, R.value)), R.value = R.value === me.Asc ? me.Desc : me.Asc, C.value = e.key, a("sort", [C.value, R.value]));
    }, Ae = (e) => {
      a("click", e);
    }, We = (e, f) => {
      let D = "tr_" + f;
      j.value[D] = typeof j.value[D] > "u" ? !0 : !j.value[D];
    }, ht = (e) => typeof l.checkValidDrag == "function" ? l.checkValidDrag(e) : !0, He = (e) => typeof l.draggableChecker == "function" ? l.draggableChecker(e) : !0, Ke = () => {
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
    }, gt = () => {
      o.value = !0;
    }, Ct = () => {
      o.value = !1;
    }, St = (e, f) => {
      if (a("before-save"), l.saveResource && (o.value = !1, !f.success)) {
        a("error", f.httpStatus);
        return;
      }
      te.value.turnStoredIntoOriginal(), a("save", f);
    }, Pe = (e, f, D) => {
      if (D >= e.length) {
        let N = D - e.length + 1;
        for (; N--; ) e.push(void 0);
      }
      return e.splice(D, 0, e.splice(f, 1)[0]), e;
    }, Bt = (e) => {
      Pe(d.value, e, e - 1), ie.value = Se();
    }, wt = (e) => {
      Pe(d.value, e, e + 1), ie.value = Se();
    }, he = (e) => {
      d.value.splice(e, 1), ie.value = Se();
    }, Dt = () => {
      ve.value && (ve.value.destroy(), ve.value = {});
    }, qe = () => {
      let e = document.getElementById("lkt-table-body-" + ye);
      ve.value = new Mt(e, {
        direction: "vertical",
        handle: ".handle",
        animation: 150,
        onEnd: function(f) {
          clearTimeout(Le);
          let D = f.oldIndex, N = f.newIndex;
          d.value.splice(N, 0, d.value.splice(D, 1)[0]), ie.value = Se(), Me.value = !0, Fe.value = [D, N], Le = setTimeout(() => {
            Me.value = !1, Fe.value = [];
          }, 5);
        },
        onMove: function(f, D) {
          return ht(f);
        }
      });
    }, je = (e, f, D = !1) => {
      let N = [ie.value, ye, "row", f];
      return D && N.push("hidden"), ut.value.forEach((G) => {
        let J = String(e[G.key]).toLowerCase();
        J.length > 50 && (J = J.substring(0, 50)), J = Ze(J, " ", "-"), N.push(J);
      }), N.join("-");
    }, ze = c(() => typeof l.createEnabledValidator == "function" ? l.createEnabledValidator({ items: d.value }) : !0), ge = c(() => le.value ? l.canCreateWithoutEdition || le.value && T.value : !1), Ce = (e, f) => typeof l.itemDisplayChecker == "function" ? l.itemDisplayChecker(e) : !0;
    $t(() => {
      l.initialSorting && Ue(Wt(l.columns, C.value)), te.value.store({ items: d.value }).turnStoredIntoOriginal(), l.sortable && Ge(() => {
        qe();
      });
    }), L(() => l.sortable, (e) => {
      e ? qe() : Dt();
    }), L(() => l.perms, (e) => b.value = e), L(b, (e) => a("update:perms", e)), L(() => l.editMode, (e) => T.value = e), L(() => l.columns, (e) => K.value = e), L(() => l.modelValue, (e) => d.value = e), L(d, (e) => {
      te.value.increment({ items: e }), a("update:modelValue", e);
    }, { deep: !0 }), r({
      getItemByEvent: kt,
      getItemByIndex: yt,
      getRowByIndex: bt,
      doRefresh: ot,
      getHtml: () => z.value
    });
    const Vt = c(() => typeof I.defaultEmptySlot < "u"), It = c(() => I.defaultEmptySlot);
    return (e, f) => {
      const D = P("lkt-button"), N = P("lkt-field"), G = P("lkt-loader"), J = P("lkt-paginator");
      return u(), s("section", {
        ref_key: "element",
        ref: z,
        class: "lkt-table-page",
        id: "lkt-table-page-" + S(ye)
      }, [
        De.value || S(n).title ? (u(), s("header", {
          key: 0,
          class: Q(e.headerClass)
        }, [
          De.value ? (u(), w(Z(ft.value), { key: 0 }, {
            default: H(() => [
              e.titleIcon ? (u(), s("i", {
                key: 0,
                class: Q(e.titleIcon)
              }, null, 2)) : v("", !0),
              re(" " + Y(De.value), 1)
            ]),
            _: 1
          })) : v("", !0),
          S(n).title ? U(e.$slots, "title", { key: 1 }) : v("", !0)
        ], 2)) : v("", !0),
        (u(), w(Z(mt.value), {
          class: Q(["lkt-table-page-content-wrapper", e.wrapContentClass])
        }, {
          default: H(() => [
            ae(M("div", ol, [
              ae(ne(D, {
                class: "lkt-table--save-button",
                ref: "saveButton",
                icon: S(I).defaultSaveIcon,
                disabled: !st.value,
                "confirm-modal": e.saveConfirm,
                "confirm-data": e.confirmData,
                resource: e.saveResource,
                "resource-data": ct.value,
                onLoading: gt,
                onLoaded: Ct,
                onClick: St
              }, {
                default: H(() => [
                  S(n)["button-save"] ? U(e.$slots, "button-save", {
                    key: 0,
                    items: d.value,
                    editMode: e.editMode,
                    canUpdate: !e.saveDisabled
                  }) : (u(), s("span", nl, Y(pt.value), 1))
                ]),
                _: 3
              }, 8, ["icon", "disabled", "confirm-modal", "confirm-data", "resource", "resource-data"]), [
                [oe, $e.value]
              ]),
              ge.value && d.value.length >= e.requiredItemsForTopCreate ? (u(), w(Xe, {
                key: 0,
                disabled: !ze.value || e.createDisabled,
                text: e.createText,
                icon: e.createIcon,
                to: e.createRoute,
                onClick: Ke
              }, null, 8, ["disabled", "text", "icon", "to"])) : v("", !0),
              M("div", ul, [
                ae(ne(N, {
                  type: "switch",
                  modelValue: T.value,
                  "onUpdate:modelValue": f[0] || (f[0] = (B) => T.value = B),
                  label: vt.value
                }, null, 8, ["modelValue", "label"]), [
                  [oe, e.switchEditionEnabled]
                ])
              ])
            ], 512), [
              [oe, it.value]
            ]),
            S(n).buttons ? (u(), s("div", rl, [
              U(e.$slots, "buttons")
            ])) : v("", !0),
            p.value && S(n).filters ? (u(), s("div", il, [
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
              ke.value === S(O).Table ? (u(), s("table", dl, [
                M("thead", null, [
                  M("tr", null, [
                    e.sortable && T.value ? (u(), s("th", cl)) : v("", !0),
                    e.addNavigation && T.value ? (u(), s("th", fl)) : v("", !0),
                    Ee.value ? (u(), s("th", ml)) : v("", !0),
                    (u(!0), s(V, null, W(be.value, (B) => (u(), s(V, null, [
                      Be.value.indexOf(B.key) === -1 ? (u(), w(ll, {
                        key: 0,
                        column: B,
                        "sort-by": C.value,
                        "sort-direction": R.value,
                        "amount-of-columns": e.columns.length,
                        items: d.value,
                        onClick: (h) => Ue(B)
                      }, null, 8, ["column", "sort-by", "sort-direction", "amount-of-columns", "items", "onClick"])) : v("", !0)
                    ], 64))), 256)),
                    e.canDrop && de.value && T.value ? (u(), s("th", pl)) : v("", !0),
                    Re.value && se.value && T.value ? (u(), s("th", vl)) : v("", !0)
                  ])
                ]),
                M("tbody", {
                  ref_key: "tableBody",
                  ref: ee,
                  id: "lkt-table-body-" + S(ye)
                }, [
                  (u(!0), s(V, null, W(d.value, (B, h) => ae((u(), w(Qt, {
                    modelValue: d.value[h],
                    "onUpdate:modelValue": (q) => d.value[h] = q,
                    key: je(B, h),
                    i: h,
                    "display-hidden-columns-indicator": Ee.value,
                    "is-draggable": He(B),
                    sortable: e.sortable,
                    "visible-columns": be.value,
                    "empty-columns": Be.value,
                    "add-navigation": e.addNavigation,
                    "hidden-is-visible": Ne(h),
                    "latest-row": h + 1 === dt.value,
                    "can-drop": e.canDrop && de.value && T.value,
                    "drop-confirm": e.dropConfirm,
                    "drop-resource": e.dropResource,
                    "drop-text": e.dropText,
                    "drop-icon": e.dropIcon,
                    "can-edit": Re.value && se.value && T.value,
                    "edit-text": e.editText,
                    "edit-icon": e.editIcon,
                    "edit-link": e.editLink,
                    "edit-mode-enabled": T.value,
                    onClick: Ae,
                    onShow: We,
                    onItemUp: Bt,
                    onItemDown: wt,
                    onItemDrop: he
                  }, Je({ _: 2 }, [
                    W(Te.value, (q) => ({
                      name: q,
                      fn: H((x) => [
                        U(e.$slots, q, ce({
                          [e.slotItemVar || ""]: x.item,
                          value: x.value,
                          column: x.column
                        }))
                      ])
                    }))
                  ]), 1032, ["modelValue", "onUpdate:modelValue", "i", "display-hidden-columns-indicator", "is-draggable", "sortable", "visible-columns", "empty-columns", "add-navigation", "hidden-is-visible", "latest-row", "can-drop", "drop-confirm", "drop-resource", "drop-text", "drop-icon", "can-edit", "edit-text", "edit-icon", "edit-link", "edit-mode-enabled"])), [
                    [oe, Ce(d.value[h])]
                  ])), 128)),
                  we.value.length > 0 ? (u(!0), s(V, { key: 0 }, W(d.value, (B, h) => (u(), w(el, {
                    modelValue: d.value[h],
                    "onUpdate:modelValue": (q) => d.value[h] = q,
                    key: je(B, h, !0),
                    i: h,
                    "hidden-columns": we.value,
                    "hidden-columns-col-span": nt.value,
                    "is-draggable": He(B),
                    sortable: e.sortable,
                    "visible-columns": be.value,
                    "empty-columns": Be.value,
                    "hidden-is-visible": Ne(h),
                    onClick: Ae,
                    onShow: We
                  }, Je({ _: 2 }, [
                    W(Te.value, (q) => ({
                      name: q,
                      fn: H((x) => [
                        U(e.$slots, q, ce({
                          [e.slotItemVar || ""]: x.item,
                          value: x.value,
                          column: x.column
                        }))
                      ])
                    }))
                  ]), 1032, ["modelValue", "onUpdate:modelValue", "i", "hidden-columns", "hidden-columns-col-span", "is-draggable", "sortable", "visible-columns", "empty-columns", "hidden-is-visible"]))), 128)) : v("", !0)
                ], 8, kl)
              ])) : ke.value === S(O).Item ? (u(), s("div", {
                key: 1,
                class: Q(["lkt-table-items-container", e.itemsContainerClass])
              }, [
                (u(!0), s(V, null, W(d.value, (B, h) => (u(), s(V, null, [
                  Ce(B) ? (u(), s("div", {
                    key: 0,
                    class: "lkt-table-item",
                    "data-i": h
                  }, [
                    U(e.$slots, "item", ce({
                      [e.slotItemVar || ""]: B,
                      index: h,
                      editing: T.value,
                      canCreate: le.value,
                      canRead: Ve.value,
                      canUpdate: se.value,
                      canDrop: de.value,
                      isLoading: o.value,
                      doDrop: () => he(h)
                    }))
                  ], 8, yl)) : v("", !0)
                ], 64))), 256))
              ], 2)) : S(O).Ul ? (u(), s("ul", {
                key: 2,
                class: Q(["lkt-table-items-container", e.itemsContainerClass])
              }, [
                (u(!0), s(V, null, W(d.value, (B, h) => (u(), s(V, null, [
                  Ce(B) ? (u(), s("li", {
                    key: 0,
                    class: "lkt-table-item",
                    "data-i": h
                  }, [
                    U(e.$slots, "item", ce({
                      [e.slotItemVar || ""]: B,
                      index: h,
                      editing: T.value,
                      canCreate: le.value,
                      canRead: Ve.value,
                      canUpdate: se.value,
                      canDrop: de.value,
                      isLoading: o.value,
                      doDrop: () => he(h)
                    }))
                  ], 8, bl)) : v("", !0)
                ], 64))), 256))
              ], 2)) : S(O).Ul ? (u(), s("ol", {
                key: 3,
                class: Q(["lkt-table-items-container", e.itemsContainerClass])
              }, [
                (u(!0), s(V, null, W(d.value, (B, h) => (u(), s(V, null, [
                  Ce(B) ? (u(), s("li", {
                    key: 0,
                    class: "lkt-table-item",
                    "data-i": h
                  }, [
                    U(e.$slots, "item", ce({
                      [e.slotItemVar || ""]: B,
                      index: h,
                      editing: T.value,
                      canCreate: le.value,
                      canRead: Ve.value,
                      canUpdate: se.value,
                      canDrop: de.value,
                      isLoading: o.value,
                      doDrop: () => he(h)
                    }))
                  ], 8, hl)) : v("", !0)
                ], 64))), 256))
              ], 2)) : v("", !0)
            ], 8, sl), [
              [oe, !o.value && d.value.length > 0]
            ]),
            !o.value && d.value.length === 0 ? (u(), s("div", gl, [
              S(n).empty ? U(e.$slots, "empty", { key: 0 }) : Vt.value ? (u(), w(Z(It.value), {
                key: 1,
                message: e.noResultsText
              }, null, 8, ["message"])) : e.noResultsText ? (u(), s(V, { key: 2 }, [
                re(Y(e.noResultsText), 1)
              ], 64)) : v("", !0)
            ])) : v("", !0),
            ge.value || S(n).bottomButtons ? (u(), s("div", Cl, [
              ge.value && d.value.length >= e.requiredItemsForBottomCreate ? (u(), w(Xe, {
                key: 0,
                disabled: !ze.value || e.createDisabled,
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
              onResults: xe,
              onLoading: at,
              onPerms: et,
              onCustom: tt,
              onResponse: lt
            }, null, 8, ["modelValue", "resource", "filters"])) : v("", !0)
          ]),
          _: 3
        }, 8, ["class"]))
      ], 8, al);
    };
  }
}), jl = {
  install: (t) => {
    t.component("lkt-table") === void 0 && t.component("lkt-table", Sl);
  }
}, zl = (t) => (I.navButtonSlot = t, !0), Gl = (t) => (I.dropButtonSlot = t, !0), Jl = (t) => (I.createButtonSlot = t, !0), Ol = (t) => {
  I.defaultEmptySlot = t;
}, Ql = (t) => {
  I.defaultSaveIcon = t;
};
export {
  F as Column,
  Ll as createActionColumn,
  Wl as createCheckColumn,
  $l as createColumn,
  Ul as createEmailColumn,
  Pl as createFileColumn,
  Nl as createFloatColumn,
  ql as createHiddenColumn,
  Fl as createIntegerColumn,
  Rl as createLinkColumn,
  Kl as createSelectColumn,
  Hl as createSwitchColumn,
  Al as createTelColumn,
  Ml as createTextColumn,
  jl as default,
  Jl as setTableCreateButtonSlot,
  Gl as setTableDropButtonSlot,
  Ol as setTableEmptySlot,
  zl as setTableNavButtonSlot,
  Ql as setTableSaveIcon
};
