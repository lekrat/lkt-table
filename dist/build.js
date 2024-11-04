import { reactive as W, defineComponent as _, ref as g, watch as L, computed as c, resolveComponent as P, unref as S, openBlock as u, createBlock as w, withCtx as K, createTextVNode as oe, toDisplayString as Y, createElementBlock as s, mergeProps as wt, Fragment as V, withModifiers as Qe, resolveDynamicComponent as Z, createCommentVNode as p, normalizeClass as Q, createElementVNode as M, createVNode as le, renderList as A, renderSlot as U, withDirectives as de, vShow as ce, useSlots as Dt, onMounted as Vt, nextTick as qe, createSlots as ze, normalizeProps as se } from "vue";
import { Field as Ge } from "lkt-field";
import { __ as me } from "lkt-i18n";
import { replaceAll as Xe, generateRandomString as It } from "lkt-string-tools";
import { DataState as Et } from "lkt-data-state";
import Tt from "sortablejs";
import { time as ge } from "lkt-date-tools";
class F {
  constructor(r = {}) {
    this.key = "", this.label = "", this.sortable = !0, this.hidden = !1, this.editable = !1, this.formatter = void 0, this.checkEmpty = void 0, this.colspan = void 0, this.preferSlot = !0, this.type = "", this.link = "", this.action = void 0, this.isForRowKey = !1, this.extractTitleFromColumn = "", this.slotData = {}, this.field = new Ge();
    for (let i in r)
      this[i] = r[i];
    this.field = new Ge(this.field);
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
const Vl = (t) => W(new F(t)), Il = (t, r, i, a = !0) => W(new F({ key: t, label: r, sortable: a, type: $.Link, link: i })), El = (t, r, i, a = !0) => W(new F({ key: t, label: r, sortable: a, type: $.Action, action: i })), Tl = (t, r, i = !0) => W(new F({ key: t, label: r, type: $.Text, sortable: i })), $l = (t, r, i = !0) => W(new F({ key: t, label: r, type: $.Number, sortable: i })), Rl = (t, r, i = !0) => W(new F({ key: t, label: r, type: $.Number, sortable: i })), Ll = (t, r, i = !0) => W(new F({ key: t, label: r, type: $.Email, sortable: i })), Ml = (t, r, i = !0) => W(new F({ key: t, label: r, type: $.Tel, sortable: i })), Fl = (t, r, i = !0) => W(new F({ key: t, label: r, type: $.Check, sortable: i })), Nl = (t, r, i = !0) => W(new F({ key: t, label: r, type: $.Switch, sortable: i })), Ul = (t, r, i, a = !0) => W(new F({ key: t, label: r, type: $.Select, sortable: a })), Wl = (t, r, i = !0) => W(new F({ key: t, label: r, type: $.File, sortable: i })), Al = (t, r, i = !0) => W(new F({ key: t, label: r, sortable: i, hidden: !0 })), Je = (t, r, i, a) => {
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
}, ae = (t, r, i, a = []) => {
  if (t.extractTitleFromColumn) {
    let n = a.find((l) => l.key === t.extractTitleFromColumn);
    if (n)
      return ae(n, r, i, a);
  }
  if (t.formatter && typeof t.formatter == "function") {
    let n = t.formatter(r[t.key], r, t, i);
    return n.startsWith("__:") ? me(n.substring(3)) : n;
  }
  return r[t.key];
}, $t = (t, r, i) => {
  if (!t.colspan) return -1;
  let a = r;
  return i.forEach((n) => {
    let l = Ie(t, n);
    l > 0 && l < a && (a = l);
  }), a;
}, Ie = (t, r) => t.colspan === !1 ? !1 : typeof t.colspan == "function" ? t.colspan(r) : t.colspan, Rt = (t, r) => typeof t.preferSlot > "u" ? !0 : t.preferSlot === !1 ? !1 : typeof t.preferSlot == "function" ? t.preferSlot(r) : !0, Lt = (t, r, i) => {
  if (typeof t != "object" || !t.key || r.indexOf(t.key) > -1) return !1;
  let a = Ie(t, i);
  return typeof t.colspan > "u" ? !0 : (typeof t.colspan < "u" && (typeof t.colspan == "function" ? a = parseInt(t.colspan(i)) : a = parseInt(t.colspan)), a > 0);
}, Mt = (t = []) => {
  if (t.length > 0) {
    for (let r = 0; r < t.length; ++r)
      if (t[r].sortable) return t[r].key;
  }
  return "";
}, Ft = (t, r) => {
  if (t.length > 0) {
    for (let i = 0; i < t.length; ++i)
      if (t[i].key === r) return t[i];
  }
  return null;
}, Ye = /* @__PURE__ */ _({
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
    L(l, (f) => {
      const o = JSON.parse(JSON.stringify(n.value));
      o[a.column.key] = f, i("update:modelValue", o);
    }), L(() => a.modelValue, (f) => {
      n.value = f, l.value = n.value[a.column.key];
    });
    const E = c(() => ({ ...a.column.slotData, item: n.value })), C = c(() => {
      var f, o, v, b;
      if ((f = a.column.field) != null && f.modalData && typeof ((o = a.column.field) == null ? void 0 : o.modalData) == "object")
        for (let y in a.column.field.modalData)
          if (typeof ((v = a.column.field) == null ? void 0 : v.modalData[y]) == "string" && a.column.field.modalData[y].startsWith("prop:")) {
            let j = a.column.field.modalData[y].substring(5);
            n.value[j];
          } else
            a.column.field.modalData[y];
      return (b = a.column.field) == null ? void 0 : b.modalData;
    }), R = c(() => {
      var f, o, v;
      if ((f = a.column.field) != null && f.modalKey.startsWith("prop:")) {
        let b = (o = a.column.field) == null ? void 0 : o.modalKey.substring(5);
        return n.value[b];
      }
      return (v = a.column.field) == null ? void 0 : v.modalKey;
    }), d = c(() => {
      var f, o, v, b;
      if (typeof ((f = a.column.field) == null ? void 0 : f.icon) == "string" && ((o = a.column.field) != null && o.icon.startsWith("prop:"))) {
        let y = (v = a.column.field) == null ? void 0 : v.icon.substring(5);
        return n.value[y];
      }
      return (b = a.column.field) == null ? void 0 : b.icon;
    }), z = c(() => {
      var f, o, v, b;
      if (typeof ((f = a.column.field) == null ? void 0 : f.download) == "string" && ((o = a.column.field) != null && o.download.startsWith("prop:"))) {
        let y = (v = a.column.field) == null ? void 0 : v.download.substring(5);
        return n.value[y];
      }
      return (b = a.column.field) == null ? void 0 : b.download;
    }), ne = c(() => {
      var f, o, v;
      if (typeof ((f = a.column.field) == null ? void 0 : f.options) == "string" && ((o = a.column.field) != null && o.options.startsWith("prop:"))) {
        let b = (v = a.column.field) == null ? void 0 : v.options.substring(5);
        return n.value[b];
      }
      return a.column.field.options;
    }), H = c(() => [$.Integer, $.Float].includes(a.column.type) ? $.Number : a.column.type);
    return (f, o) => {
      const v = P("lkt-anchor"), b = P("lkt-field");
      return f.column.type === S($).Link ? (u(), w(v, {
        key: 0,
        to: f.column.getHref(n.value)
      }, {
        default: K(() => [
          oe(Y(S(ae)(f.column, n.value, f.i)), 1)
        ]),
        _: 1
      }, 8, ["to"])) : f.column.type === S($).Action ? (u(), s("a", {
        key: 1,
        href: "#",
        onClick: o[0] || (o[0] = (y) => f.column.doAction(n.value))
      }, Y(S(ae)(f.column, n.value, f.i)), 1)) : f.column.type !== "" ? (u(), w(b, wt({ key: 2 }, f.column.field, {
        icon: d.value,
        download: z.value,
        type: H.value,
        "read-mode": !f.column.editable || !f.editModeEnabled,
        ref: (y) => k.value = y,
        "slot-data": E.value,
        label: f.column.type === "switch" || f.column.type === "check" ? f.column.label : "",
        "modal-key": R.value,
        "modal-data": C.value,
        options: ne.value,
        modelValue: l.value,
        "onUpdate:modelValue": o[1] || (o[1] = (y) => l.value = y)
      }), null, 16, ["icon", "download", "type", "read-mode", "slot-data", "label", "modal-key", "modal-data", "options", "modelValue"])) : (u(), s(V, { key: 3 }, [
        oe(Y(S(ae)(f.column, n.value, f.i, f.columns)), 1)
      ], 64));
    };
  }
}), X = class X {
};
X.navButtonSlot = "", X.dropButtonSlot = "", X.editButtonSlot = "", X.createButtonSlot = "", X.defaultEmptySlot = void 0, X.defaultSaveIcon = "";
let I = X;
const Nt = /* @__PURE__ */ _({
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
        onClick: k[0] || (k[0] = Qe((C) => i("click"), ["prevent", "stop"]))
      }, {
        default: K(() => [
          a.value ? (u(), w(Z(n.value), { key: 0 })) : p("", !0)
        ]),
        _: 1
      }, 8, ["icon", "text", "resource", "resource-data", "confirm-modal", "disabled"]);
    };
  }
}), Ut = /* @__PURE__ */ _({
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
        onClick: k[0] || (k[0] = Qe((C) => i("click"), ["prevent", "stop"]))
      }, {
        default: K(() => [
          a.value ? (u(), w(Z(n.value), { key: 0 })) : p("", !0)
        ]),
        _: 1
      }, 8, ["icon", "text", "on-click-to", "is-anchor", "resource", "resource-data", "confirm-modal", "disabled"]);
    };
  }
}), Wt = ["data-i", "data-draggable"], At = {
  key: 1,
  "data-role": "invalid-drag-indicator"
}, Kt = {
  key: 2,
  class: "lkt-table-nav-cell"
}, Ht = { class: "lkt-table-nav-container" }, Pt = ["data-column", "colspan", "title", "onClick"], jt = {
  key: 4,
  class: "lkt-table-col-drop"
}, qt = {
  key: 5,
  class: "lkt-table-col-edit"
}, zt = /* @__PURE__ */ _({
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
    for (let o in n.value) l.value = Xe(l.value, ":" + o, n.value[o]);
    const k = (o) => i("click", o), E = (o, v) => {
      i("show", o, v);
    }, C = c(() => {
      let o = [];
      return a.sortable && a.isDraggable && o.push("handle"), o.join(" ");
    }), R = c(() => I.navButtonSlot !== ""), d = c(() => I.navButtonSlot), z = () => {
      i("item-up", a.i);
    }, ne = () => {
      i("item-down", a.i);
    }, H = () => {
      i("item-drop", a.i);
    }, f = () => {
    };
    return L(() => a.modelValue, (o) => n.value = o), L(n, (o) => {
      i("update:modelValue", o, a.i);
    }, { deep: !0 }), (o, v) => {
      const b = P("lkt-button");
      return u(), s("tr", {
        "data-i": o.i,
        "data-draggable": o.isDraggable
      }, [
        o.sortable && o.isDraggable && o.editModeEnabled ? (u(), s("td", {
          key: 0,
          "data-role": "drag-indicator",
          class: Q(C.value)
        }, null, 2)) : o.sortable && o.editModeEnabled ? (u(), s("td", At)) : p("", !0),
        o.addNavigation && o.editModeEnabled ? (u(), s("td", Kt, [
          M("div", Ht, [
            le(b, {
              palette: "table-nav",
              disabled: o.i === 0,
              onClick: z
            }, {
              default: K(() => [
                R.value ? (u(), w(Z(d.value), {
                  key: 0,
                  direction: "up"
                })) : (u(), s(V, { key: 1 }, [
                  v[2] || (v[2] = M("i", { class: "" }, null, -1)),
                  v[3] || (v[3] = oe(" UP "))
                ], 64))
              ]),
              _: 1
            }, 8, ["disabled"]),
            le(b, {
              palette: "table-nav",
              disabled: o.latestRow,
              onClick: ne
            }, {
              default: K(() => [
                R.value ? (u(), w(Z(d.value), {
                  key: 0,
                  direction: "down"
                })) : (u(), s(V, { key: 1 }, [
                  v[4] || (v[4] = M("i", { class: "" }, null, -1)),
                  v[5] || (v[5] = oe(" DOWN "))
                ], 64))
              ]),
              _: 1
            }, 8, ["disabled"])
          ])
        ])) : p("", !0),
        o.displayHiddenColumnsIndicator ? (u(), s("td", {
          key: 3,
          onClick: v[0] || (v[0] = (y) => E(y, o.i)),
          "data-role": "show-more",
          class: Q(o.hiddenIsVisible ? "state-open" : "")
        }, null, 2)) : p("", !0),
        (u(!0), s(V, null, A(o.visibleColumns, (y) => (u(), s(V, null, [
          S(Lt)(y, o.emptyColumns, n.value) ? (u(), s("td", {
            key: "td" + o.i,
            "data-column": y.key,
            colspan: S(Ie)(y, n.value),
            title: S(ae)(y, n.value, o.i, o.visibleColumns),
            onClick: (j) => k(j, n.value)
          }, [
            o.$slots[y.key] && S(Rt)(y, n.value) ? U(o.$slots, y.key, {
              key: 0,
              value: n.value[y.key],
              item: n.value,
              column: y,
              i: o.i
            }) : n.value ? (u(), w(Ye, {
              key: 1,
              modelValue: n.value,
              "onUpdate:modelValue": v[1] || (v[1] = (j) => n.value = j),
              column: y,
              columns: o.visibleColumns,
              "edit-mode-enabled": o.editModeEnabled,
              i: o.i
            }, null, 8, ["modelValue", "column", "columns", "edit-mode-enabled", "i"])) : p("", !0)
          ], 8, Pt)) : p("", !0)
        ], 64))), 256)),
        o.canDrop && o.editModeEnabled ? (u(), s("td", jt, [
          le(Nt, {
            resource: o.dropResource,
            "resource-data": n.value,
            confirm: o.dropConfirm,
            text: o.dropText,
            icon: o.dropIcon,
            onClick: H
          }, null, 8, ["resource", "resource-data", "confirm", "text", "icon"])
        ])) : p("", !0),
        o.canEdit && o.editModeEnabled ? (u(), s("td", qt, [
          le(Ut, {
            "resource-data": n.value,
            text: o.editText,
            icon: o.editIcon,
            link: l.value,
            onClick: f
          }, null, 8, ["resource-data", "text", "icon", "link"])
        ])) : p("", !0)
      ], 8, Wt);
    };
  }
}), Gt = { "data-role": "hidden-row" }, Jt = ["colspan"], Ot = ["data-column"], Qt = ["data-i"], Xt = ["data-column", "title", "onClick"], Yt = /* @__PURE__ */ _({
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
    return L(() => a.modelValue, (k) => n.value = k), L(n, () => i("update:modelValue", n.value)), (k, E) => de((u(), s("tr", Gt, [
      M("td", { colspan: k.hiddenColumnsColSpan }, [
        M("table", null, [
          M("tr", null, [
            (u(!0), s(V, null, A(k.hiddenColumns, (C) => (u(), s("th", {
              "data-column": C.key
            }, [
              M("div", null, Y(C.label), 1)
            ], 8, Ot))), 256))
          ]),
          M("tr", { "data-i": k.i }, [
            (u(!0), s(V, null, A(k.hiddenColumns, (C, R) => (u(), s("td", {
              "data-column": C.key,
              title: S(ae)(C, n.value, R, k.hiddenColumns),
              onClick: (d) => l(d, n.value)
            }, [
              k.$slots[C.key] ? U(k.$slots, C.key, {
                key: 0,
                value: n.value[C.key],
                item: n.value,
                column: C,
                i: R
              }) : (u(), w(Ye, {
                key: 1,
                column: C,
                columns: k.hiddenColumns,
                modelValue: n.value,
                "onUpdate:modelValue": E[0] || (E[0] = (d) => n.value = d),
                i: R
              }, null, 8, ["column", "columns", "modelValue", "i"]))
            ], 8, Xt))), 256))
          ], 8, Qt)
        ])
      ], 8, Jt)
    ], 512)), [
      [ce, k.hiddenIsVisible]
    ]);
  }
}), Oe = /* @__PURE__ */ _({
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
        default: K(() => [
          a.value ? (u(), w(Z(n.value), { key: 0 })) : p("", !0)
        ]),
        _: 1
      }, 8, ["disabled", "icon", "text", "on-click-to"]);
    };
  }
}), Zt = ["data-column", "data-sortable", "data-sort", "colspan", "title"], _t = /* @__PURE__ */ _({
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
    const i = r, a = t, n = c(() => $t(a.column, a.amountOfColumns, a.items)), l = c(() => a.column.sortable === !0), k = c(() => l.value && a.sortBy === a.column.key ? a.sortDirection : ""), E = c(() => a.column.label.startsWith("__:") ? me(a.column.label.substring(3)) : a.column.label), C = () => i("click", a.column);
    return (R, d) => (u(), s("th", {
      "data-column": R.column.key,
      "data-sortable": l.value,
      "data-sort": k.value,
      colspan: n.value,
      title: E.value,
      onClick: C
    }, [
      M("div", null, Y(E.value), 1)
    ], 8, Zt));
  }
});
var O = /* @__PURE__ */ ((t) => (t.Table = "table", t.Item = "item", t.Ul = "ul", t.Ol = "ol", t))(O || {}), fe = /* @__PURE__ */ ((t) => (t.Create = "create", t.Update = "update", t.Edit = "edit", t.Drop = "drop", t.Sort = "sort", t))(fe || {});
const xt = ["id"], el = { class: "lkt-table-page-buttons" }, tl = { key: 1 }, ll = { class: "switch-edition-mode" }, al = {
  key: 0,
  class: "lkt-table-page-buttons"
}, ol = {
  key: 1,
  class: "lkt-table-page-filters"
}, nl = ["data-sortable"], ul = { key: 0 }, rl = {
  key: 0,
  "data-role": "drag-indicator"
}, il = { key: 1 }, sl = { key: 2 }, dl = {
  key: 3,
  class: "lkt-table-col-drop"
}, cl = {
  key: 4,
  class: "lkt-table-col-edit"
}, fl = ["id"], ml = {
  key: 0,
  class: "lkt-table-item"
}, pl = {
  key: 0,
  class: "lkt-table-item"
}, vl = {
  key: 0,
  class: "lkt-table-item"
}, kl = {
  key: 3,
  class: "lkt-table-empty"
}, yl = {
  key: 4,
  class: "lkt-table-page-buttons lkt-table-page-buttons-bottom"
}, bl = /* @__PURE__ */ _({
  __name: "LktTable",
  props: {
    modelValue: { default: () => [] },
    type: { default: O.Table },
    columns: { default: () => [] },
    sorter: { type: Function, default: Je },
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
    const a = i, n = Dt(), l = t, k = {}, E = g(typeof l.sorter == "function" ? l.sorter : Je), C = g(Mt(l.columns)), R = g("asc"), d = g(l.modelValue), z = g(k), ne = g(null), H = g(l.columns), f = g(l.page), o = g(l.loading), v = g(!1), b = g(l.perms), y = g(null), j = g({}), ee = g(new Et({ items: d.value }, l.dataStateConfig)), T = g(l.editMode), ue = g(0);
    L(o, (e) => a("update:loading", e)), L(f, (e) => a("page", e));
    const pe = g(l.type);
    l.itemMode && pe.value === O.Table && (pe.value = O.Item);
    const Ze = (e) => {
      Array.isArray(e) && (d.value = e), o.value = !1, v.value = !0, ee.value.store({ items: d.value }).turnStoredIntoOriginal();
    }, _e = (e) => {
      b.value = e;
    }, xe = (e) => {
    }, et = (e) => {
      a("read-response", e);
    }, tt = () => qe(() => o.value = !0), lt = () => {
      y.value.doRefresh();
    }, ve = It(12), Ce = c(() => {
      if (!l.hideEmptyColumns) return [];
      let e = [];
      return H.value.forEach((m) => {
        let D = m.key, N = !1;
        d.value.forEach((G) => {
          if (typeof G.checkEmpty == "function")
            return G.checkEmpty(G);
          G[D] && (N = !0);
        }), N || e.push(D);
      }), e;
    }), ke = c(() => H.value.filter((e) => !e.hidden)), Se = c(() => H.value.filter((e) => e.hidden)), at = c(() => {
      let e = ke.value.length + 1;
      return l.sortable && ++e, e;
    }), ot = c(() => H.value.filter((e) => e.isForRowKey)), Ee = c(() => Se.value.length > 0 && !l.sortable), nt = c(() => H.value.map((e) => e.key)), Te = c(() => {
      let e = [];
      for (let m in n) nt.value.indexOf(m) !== -1 && e.push(m);
      return e;
    }), $e = c(() => l.hiddenSave || o.value || !l.saveResource ? !1 : T.value && ee.value.changed() ? !0 : T.value), ut = c(() => be.value && d.value.length >= l.requiredItemsForTopCreate || l.switchEditionEnabled ? !0 : $e.value || T.value && te.value), rt = c(() => l.saveDisabled || typeof l.saveValidator == "function" && !l.saveValidator(d.value) ? !1 : ee.value.changed()), it = c(() => d.value.length), st = c(() => ({
      items: d.value,
      ...l.saveResourceData
    })), dt = c(() => l.titleTag === "" ? "h2" : l.titleTag), ct = c(() => l.wrapContentTag === "" ? "div" : l.wrapContentTag), Be = c(() => l.title.startsWith("__:") ? me(l.title.substring(3)) : l.title), ft = c(() => l.saveText.startsWith("__:") ? me(l.saveText.substring(3)) : l.saveText), mt = c(() => l.editModeText.startsWith("__:") ? me(l.editModeText.substring(3)) : l.editModeText), te = c(() => b.value.includes(fe.Create)), we = c(() => b.value.includes("read")), re = c(() => b.value.includes(fe.Update)), Re = c(() => b.value.includes(fe.Edit)), ie = c(() => b.value.includes(fe.Drop));
    let Le;
    const De = g(!1), Ve = g([]), pt = (e) => {
      let m = e.target;
      if (typeof m.dataset.column > "u")
        do
          m = m.parentNode;
        while (typeof m.dataset.column > "u" && m.tagName !== "TABLE" && m.tagName !== "body");
      if (m.tagName === "TD" && (m = m.parentNode, m = m.dataset.i, typeof m < "u"))
        return d.value[m];
    }, Me = (e) => z.value["tr_" + e] === !0, Fe = (e) => {
      e && e.sortable && (d.value = d.value.sort((m, D) => E.value(m, D, e, R.value)), R.value = R.value === "asc" ? "desc" : "asc", C.value = e.key, a("sort", [C.value, R.value]));
    }, Ne = (e) => {
      a("click", e);
    }, Ue = (e, m) => {
      let D = "tr_" + m;
      z.value[D] = typeof z.value[D] > "u" ? !0 : !z.value[D];
    }, vt = (e) => typeof l.checkValidDrag == "function" ? l.checkValidDrag(e) : !0, We = (e) => typeof l.draggableChecker == "function" ? l.draggableChecker(e) : !0, Ae = () => {
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
    }, kt = () => {
      o.value = !0;
    }, yt = () => {
      o.value = !1;
    }, bt = (e, m) => {
      if (a("before-save"), l.saveResource && (o.value = !1, !m.success)) {
        a("error", m.httpStatus);
        return;
      }
      ee.value.turnStoredIntoOriginal(), a("save", m);
    }, Ke = (e, m, D) => {
      if (D >= e.length) {
        let N = D - e.length + 1;
        for (; N--; ) e.push(void 0);
      }
      return e.splice(D, 0, e.splice(m, 1)[0]), e;
    }, ht = (e) => {
      Ke(d.value, e, e - 1), ue.value = ge();
    }, gt = (e) => {
      Ke(d.value, e, e + 1), ue.value = ge();
    }, ye = (e) => {
      d.value.splice(e, 1), ue.value = ge();
    }, Ct = () => {
      j.value && j.value.destroy();
    }, He = () => {
      let e = document.getElementById("lkt-table-body-" + ve);
      j.value = new Tt(e, {
        direction: "vertical",
        handle: ".handle",
        animation: 150,
        onEnd: function(m) {
          clearTimeout(Le);
          let D = m.oldIndex, N = m.newIndex;
          d.value.splice(N, 0, d.value.splice(D, 1)[0]), ue.value = ge(), De.value = !0, Ve.value = [D, N], Le = setTimeout(() => {
            De.value = !1, Ve.value = [];
          }, 5);
        },
        onMove: function(m, D) {
          return vt(m);
        }
      });
    }, Pe = (e, m, D = !1) => {
      let N = [ue.value, ve, "row", m];
      return D && N.push("hidden"), ot.value.forEach((G) => {
        let J = String(e[G.key]).toLowerCase();
        J.length > 50 && (J = J.substring(0, 50)), J = Xe(J, " ", "-"), N.push(J);
      }), N.join("-");
    }, je = c(() => typeof l.createEnabledValidator == "function" ? l.createEnabledValidator({ items: d.value }) : !0), be = c(() => te.value ? l.canCreateWithoutEdition || te.value && T.value : !1), he = (e, m) => De.value && Ve.value.includes(m) ? !1 : typeof l.itemDisplayChecker == "function" ? l.itemDisplayChecker(e) : !0;
    Vt(() => {
      l.initialSorting && Fe(Ft(l.columns, C.value)), ee.value.store({ items: d.value }).turnStoredIntoOriginal(), l.sortable && qe(() => {
        He();
      });
    }), L(() => l.sortable, (e) => {
      e ? He() : Ct();
    }), L(() => l.perms, (e) => b.value = e), L(b, (e) => a("update:perms", e)), L(() => l.editMode, (e) => T.value = e), L(() => l.columns, (e) => H.value = e), L(() => l.modelValue, (e) => d.value = e), L(d, (e) => {
      ee.value.increment({ items: e }), a("update:modelValue", e);
    }, { deep: !0 }), r({
      getItemByEvent: pt,
      doRefresh: lt
    });
    const St = c(() => typeof I.defaultEmptySlot < "u"), Bt = c(() => I.defaultEmptySlot);
    return (e, m) => {
      const D = P("lkt-button"), N = P("lkt-field"), G = P("lkt-loader"), J = P("lkt-paginator");
      return u(), s("section", {
        class: "lkt-table-page",
        id: "lkt-table-page-" + S(ve)
      }, [
        Be.value || S(n).title ? (u(), s("header", {
          key: 0,
          class: Q(e.headerClass)
        }, [
          Be.value ? (u(), w(Z(dt.value), { key: 0 }, {
            default: K(() => [
              e.titleIcon ? (u(), s("i", {
                key: 0,
                class: Q(e.titleIcon)
              }, null, 2)) : p("", !0),
              oe(" " + Y(Be.value), 1)
            ]),
            _: 1
          })) : p("", !0),
          S(n).title ? U(e.$slots, "title", { key: 1 }) : p("", !0)
        ], 2)) : p("", !0),
        (u(), w(Z(ct.value), {
          class: Q(["lkt-table-page-content-wrapper", e.wrapContentClass])
        }, {
          default: K(() => [
            de(M("div", el, [
              de(le(D, {
                class: "lkt-table--save-button",
                ref: "saveButton",
                icon: S(I).defaultSaveIcon,
                disabled: !rt.value,
                "confirm-modal": e.saveConfirm,
                "confirm-data": e.confirmData,
                resource: e.saveResource,
                "resource-data": st.value,
                onLoading: kt,
                onLoaded: yt,
                onClick: bt
              }, {
                default: K(() => [
                  S(n)["button-save"] ? U(e.$slots, "button-save", {
                    key: 0,
                    items: d.value,
                    editMode: e.editMode,
                    canUpdate: !e.saveDisabled
                  }) : (u(), s("span", tl, Y(ft.value), 1))
                ]),
                _: 3
              }, 8, ["icon", "disabled", "confirm-modal", "confirm-data", "resource", "resource-data"]), [
                [ce, $e.value]
              ]),
              be.value && d.value.length >= e.requiredItemsForTopCreate ? (u(), w(Oe, {
                key: 0,
                disabled: !je.value || e.createDisabled,
                text: e.createText,
                icon: e.createIcon,
                to: e.createRoute,
                onClick: Ae
              }, null, 8, ["disabled", "text", "icon", "to"])) : p("", !0),
              M("div", ll, [
                de(le(N, {
                  type: "switch",
                  modelValue: T.value,
                  "onUpdate:modelValue": m[0] || (m[0] = (B) => T.value = B),
                  label: mt.value
                }, null, 8, ["modelValue", "label"]), [
                  [ce, e.switchEditionEnabled]
                ])
              ])
            ], 512), [
              [ce, ut.value]
            ]),
            S(n).buttons ? (u(), s("div", al, [
              U(e.$slots, "buttons")
            ])) : p("", !0),
            v.value && S(n).filters ? (u(), s("div", ol, [
              U(e.$slots, "filters", {
                items: d.value,
                isLoading: o.value
              })
            ])) : p("", !0),
            o.value ? (u(), w(G, { key: 2 })) : p("", !0),
            de(M("div", {
              class: "lkt-table",
              "data-sortable": e.sortable
            }, [
              pe.value === S(O).Table ? (u(), s("table", ul, [
                M("thead", null, [
                  M("tr", null, [
                    e.sortable && T.value ? (u(), s("th", rl)) : p("", !0),
                    e.addNavigation && T.value ? (u(), s("th", il)) : p("", !0),
                    Ee.value ? (u(), s("th", sl)) : p("", !0),
                    (u(!0), s(V, null, A(ke.value, (B) => (u(), s(V, null, [
                      Ce.value.indexOf(B.key) === -1 ? (u(), w(_t, {
                        key: 0,
                        column: B,
                        "sort-by": C.value,
                        "sort-direction": R.value,
                        "amount-of-columns": e.columns.length,
                        items: d.value,
                        onClick: (h) => Fe(B)
                      }, null, 8, ["column", "sort-by", "sort-direction", "amount-of-columns", "items", "onClick"])) : p("", !0)
                    ], 64))), 256)),
                    e.canDrop && ie.value && T.value ? (u(), s("th", dl)) : p("", !0),
                    Re.value && re.value && T.value ? (u(), s("th", cl)) : p("", !0)
                  ])
                ]),
                M("tbody", {
                  ref_key: "tableBody",
                  ref: ne,
                  id: "lkt-table-body-" + S(ve)
                }, [
                  he(d.value[e.i], e.i) ? (u(!0), s(V, { key: 0 }, A(d.value, (B, h) => (u(), w(zt, {
                    modelValue: d.value[h],
                    "onUpdate:modelValue": (q) => d.value[h] = q,
                    key: Pe(B, h),
                    i: h,
                    "display-hidden-columns-indicator": Ee.value,
                    "is-draggable": We(B),
                    sortable: e.sortable,
                    "visible-columns": ke.value,
                    "empty-columns": Ce.value,
                    "add-navigation": e.addNavigation,
                    "hidden-is-visible": Me(h),
                    "latest-row": h + 1 === it.value,
                    "can-drop": e.canDrop && ie.value && T.value,
                    "drop-confirm": e.dropConfirm,
                    "drop-resource": e.dropResource,
                    "drop-text": e.dropText,
                    "drop-icon": e.dropIcon,
                    "can-edit": Re.value && re.value && T.value,
                    "edit-text": e.editText,
                    "edit-icon": e.editIcon,
                    "edit-link": e.editLink,
                    "edit-mode-enabled": T.value,
                    onClick: Ne,
                    onShow: Ue,
                    onItemUp: ht,
                    onItemDown: gt,
                    onItemDrop: ye
                  }, ze({ _: 2 }, [
                    A(Te.value, (q) => ({
                      name: q,
                      fn: K((x) => [
                        U(e.$slots, q, se({
                          [e.slotItemVar || ""]: x.item,
                          value: x.value,
                          column: x.column
                        }))
                      ])
                    }))
                  ]), 1032, ["modelValue", "onUpdate:modelValue", "i", "display-hidden-columns-indicator", "is-draggable", "sortable", "visible-columns", "empty-columns", "add-navigation", "hidden-is-visible", "latest-row", "can-drop", "drop-confirm", "drop-resource", "drop-text", "drop-icon", "can-edit", "edit-text", "edit-icon", "edit-link", "edit-mode-enabled"]))), 128)) : p("", !0),
                  Se.value.length > 0 ? (u(!0), s(V, { key: 1 }, A(d.value, (B, h) => (u(), w(Yt, {
                    modelValue: d.value[h],
                    "onUpdate:modelValue": (q) => d.value[h] = q,
                    key: Pe(B, h, !0),
                    i: h,
                    "hidden-columns": Se.value,
                    "hidden-columns-col-span": at.value,
                    "is-draggable": We(B),
                    sortable: e.sortable,
                    "visible-columns": ke.value,
                    "empty-columns": Ce.value,
                    "hidden-is-visible": Me(h),
                    onClick: Ne,
                    onShow: Ue
                  }, ze({ _: 2 }, [
                    A(Te.value, (q) => ({
                      name: q,
                      fn: K((x) => [
                        U(e.$slots, q, se({
                          [e.slotItemVar || ""]: x.item,
                          value: x.value,
                          column: x.column
                        }))
                      ])
                    }))
                  ]), 1032, ["modelValue", "onUpdate:modelValue", "i", "hidden-columns", "hidden-columns-col-span", "is-draggable", "sortable", "visible-columns", "empty-columns", "hidden-is-visible"]))), 128)) : p("", !0)
                ], 8, fl)
              ])) : pe.value === S(O).Item ? (u(), s("div", {
                key: 1,
                class: Q(["lkt-table-items-container", e.itemsContainerClass])
              }, [
                (u(!0), s(V, null, A(d.value, (B, h) => (u(), s(V, null, [
                  he(B, h) ? (u(), s("div", ml, [
                    U(e.$slots, "item", se({
                      [e.slotItemVar || ""]: B,
                      index: h,
                      editing: T.value,
                      canCreate: te.value,
                      canRead: we.value,
                      canUpdate: re.value,
                      canDrop: ie.value,
                      isLoading: o.value,
                      doDrop: () => ye(h)
                    }))
                  ])) : p("", !0)
                ], 64))), 256))
              ], 2)) : S(O).Ul ? (u(), s("ul", {
                key: 2,
                class: Q(["lkt-table-items-container", e.itemsContainerClass])
              }, [
                (u(!0), s(V, null, A(d.value, (B, h) => (u(), s(V, null, [
                  he(B, h) ? (u(), s("li", pl, [
                    U(e.$slots, "item", se({
                      [e.slotItemVar || ""]: B,
                      index: h,
                      editing: T.value,
                      canCreate: te.value,
                      canRead: we.value,
                      canUpdate: re.value,
                      canDrop: ie.value,
                      isLoading: o.value,
                      doDrop: () => ye(h)
                    }))
                  ])) : p("", !0)
                ], 64))), 256))
              ], 2)) : S(O).Ul ? (u(), s("ol", {
                key: 3,
                class: Q(["lkt-table-items-container", e.itemsContainerClass])
              }, [
                (u(!0), s(V, null, A(d.value, (B, h) => (u(), s(V, null, [
                  he(B, h) ? (u(), s("li", vl, [
                    U(e.$slots, "item", se({
                      [e.slotItemVar || ""]: B,
                      index: h,
                      editing: T.value,
                      canCreate: te.value,
                      canRead: we.value,
                      canUpdate: re.value,
                      canDrop: ie.value,
                      isLoading: o.value,
                      doDrop: () => ye(h)
                    }))
                  ])) : p("", !0)
                ], 64))), 256))
              ], 2)) : p("", !0)
            ], 8, nl), [
              [ce, !o.value && d.value.length > 0]
            ]),
            !o.value && d.value.length === 0 ? (u(), s("div", kl, [
              S(n).empty ? U(e.$slots, "empty", { key: 0 }) : St.value ? (u(), w(Z(Bt.value), {
                key: 1,
                message: e.noResultsText
              }, null, 8, ["message"])) : e.noResultsText ? (u(), s(V, { key: 2 }, [
                oe(Y(e.noResultsText), 1)
              ], 64)) : p("", !0)
            ])) : p("", !0),
            be.value || S(n).bottomButtons ? (u(), s("div", yl, [
              be.value && d.value.length >= e.requiredItemsForBottomCreate ? (u(), w(Oe, {
                key: 0,
                disabled: !je.value || e.createDisabled,
                text: e.createText,
                icon: e.createIcon,
                to: e.createRoute,
                onClick: Ae
              }, null, 8, ["disabled", "text", "icon", "to"])) : p("", !0),
              U(e.$slots, "bottom-buttons")
            ])) : p("", !0),
            e.resource.length > 0 ? (u(), w(J, {
              key: 5,
              ref_key: "paginator",
              ref: y,
              modelValue: f.value,
              "onUpdate:modelValue": m[1] || (m[1] = (B) => f.value = B),
              resource: e.resource,
              filters: e.filters,
              onResults: Ze,
              onLoading: tt,
              onPerms: _e,
              onCustom: xe,
              onResponse: et
            }, null, 8, ["modelValue", "resource", "filters"])) : p("", !0)
          ]),
          _: 3
        }, 8, ["class"]))
      ], 8, xt);
    };
  }
}), Kl = {
  install: (t) => {
    t.component("lkt-table") === void 0 && t.component("lkt-table", bl);
  }
}, Hl = (t) => (I.navButtonSlot = t, !0), Pl = (t) => (I.dropButtonSlot = t, !0), jl = (t) => (I.createButtonSlot = t, !0), ql = (t) => {
  I.defaultEmptySlot = t;
}, zl = (t) => {
  I.defaultSaveIcon = t;
};
export {
  F as Column,
  El as createActionColumn,
  Fl as createCheckColumn,
  Vl as createColumn,
  Ll as createEmailColumn,
  Wl as createFileColumn,
  Rl as createFloatColumn,
  Al as createHiddenColumn,
  $l as createIntegerColumn,
  Il as createLinkColumn,
  Ul as createSelectColumn,
  Nl as createSwitchColumn,
  Ml as createTelColumn,
  Tl as createTextColumn,
  Kl as default,
  jl as setTableCreateButtonSlot,
  Pl as setTableDropButtonSlot,
  ql as setTableEmptySlot,
  Hl as setTableNavButtonSlot,
  zl as setTableSaveIcon
};
