import { reactive as U, defineComponent as Y, ref as g, watch as M, computed as c, resolveComponent as H, unref as C, openBlock as n, createBlock as S, withCtx as P, createTextVNode as ae, toDisplayString as Q, createElementBlock as s, mergeProps as gt, Fragment as D, withModifiers as ze, resolveDynamicComponent as X, createCommentVNode as p, normalizeClass as O, createElementVNode as R, createVNode as te, renderList as A, renderSlot as N, withDirectives as se, vShow as de, useSlots as Ct, onMounted as St, nextTick as Pe, createSlots as Ke, normalizeProps as ie } from "vue";
import { Field as He } from "lkt-field";
import { __ as ce } from "lkt-i18n";
import { replaceAll as Ge, generateRandomString as Bt } from "lkt-string-tools";
import { DataState as wt } from "lkt-data-state";
import Dt from "sortablejs";
import { time as ge } from "lkt-date-tools";
class F {
  constructor(r = {}) {
    this.key = "", this.label = "", this.sortable = !0, this.hidden = !1, this.editable = !1, this.formatter = void 0, this.checkEmpty = void 0, this.colspan = void 0, this.preferSlot = !0, this.type = "", this.link = "", this.action = void 0, this.isForRowKey = !1, this.extractTitleFromColumn = "", this.slotData = {}, this.field = new He();
    for (let i in r)
      this[i] = r[i];
    this.field = new He(this.field);
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
var E = /* @__PURE__ */ ((t) => (t.Text = "text", t.Number = "number", t.Check = "check", t.Switch = "switch", t.Select = "select", t.Email = "email", t.Tel = "tel", t.File = "file", t.Link = "link", t.Action = "action", t.Integer = "int", t.Float = "float", t))(E || {});
const Sl = (t) => U(new F(t)), Bl = (t, r, i, a = !0) => U(new F({ key: t, label: r, sortable: a, type: E.Link, link: i })), wl = (t, r, i, a = !0) => U(new F({ key: t, label: r, sortable: a, type: E.Action, action: i })), Dl = (t, r, i = !0) => U(new F({ key: t, label: r, type: E.Text, sortable: i })), Vl = (t, r, i = !0) => U(new F({ key: t, label: r, type: E.Number, sortable: i })), El = (t, r, i = !0) => U(new F({ key: t, label: r, type: E.Number, sortable: i })), Il = (t, r, i = !0) => U(new F({ key: t, label: r, type: E.Email, sortable: i })), Tl = (t, r, i = !0) => U(new F({ key: t, label: r, type: E.Tel, sortable: i })), $l = (t, r, i = !0) => U(new F({ key: t, label: r, type: E.Check, sortable: i })), Rl = (t, r, i = !0) => U(new F({ key: t, label: r, type: E.Switch, sortable: i })), Ll = (t, r, i, a = !0) => U(new F({ key: t, label: r, type: E.Select, sortable: a })), Ml = (t, r, i = !0) => U(new F({ key: t, label: r, type: E.File, sortable: i })), Fl = (t, r, i = !0) => U(new F({ key: t, label: r, sortable: i, hidden: !0 })), je = (t, r, i, a) => {
  if (!i) return 0;
  let u = t[i.key], l = r[i.key];
  if (a === "asc") {
    if (u > l) return 1;
    if (l > u) return -1;
  } else {
    if (u > l) return -1;
    if (l > u) return 1;
  }
  return 0;
}, le = (t, r, i, a = []) => {
  if (t.extractTitleFromColumn) {
    let u = a.find((l) => l.key === t.extractTitleFromColumn);
    if (u)
      return le(u, r, i, a);
  }
  if (t.formatter && typeof t.formatter == "function") {
    let u = t.formatter(r[t.key], r, t, i);
    return u.startsWith("__:") ? ce(u.substring(3)) : u;
  }
  return r[t.key];
}, Vt = (t, r, i) => {
  if (!t.colspan) return -1;
  let a = r;
  return i.forEach((u) => {
    let l = Ve(t, u);
    l > 0 && l < a && (a = l);
  }), a;
}, Ve = (t, r) => t.colspan === !1 ? !1 : typeof t.colspan == "function" ? t.colspan(r) : t.colspan, Et = (t, r) => typeof t.preferSlot > "u" ? !0 : t.preferSlot === !1 ? !1 : typeof t.preferSlot == "function" ? t.preferSlot(r) : !0, It = (t, r, i) => {
  if (typeof t != "object" || !t.key || r.indexOf(t.key) > -1) return !1;
  let a = Ve(t, i);
  return typeof t.colspan > "u" ? !0 : (typeof t.colspan < "u" && (typeof t.colspan == "function" ? a = parseInt(t.colspan(i)) : a = parseInt(t.colspan)), a > 0);
}, Tt = (t = []) => {
  if (t.length > 0) {
    for (let r = 0; r < t.length; ++r)
      if (t[r].sortable) return t[r].key;
  }
  return "";
}, $t = (t, r) => {
  if (t.length > 0) {
    for (let i = 0; i < t.length; ++i)
      if (t[i].key === r) return t[i];
  }
  return null;
}, Je = /* @__PURE__ */ Y({
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
    const i = r, a = t, u = g(a.modelValue), l = g(u.value[a.column.key]), k = g(null);
    M(l, (f) => {
      const o = JSON.parse(JSON.stringify(u.value));
      o[a.column.key] = f, i("update:modelValue", o);
    }), M(() => a.modelValue, (f) => {
      u.value = f, l.value = u.value[a.column.key];
    });
    const V = c(() => ({ ...a.column.slotData, item: u.value })), h = c(() => {
      var f, o, v, b;
      if ((f = a.column.field) != null && f.modalData && typeof ((o = a.column.field) == null ? void 0 : o.modalData) == "object")
        for (let y in a.column.field.modalData)
          if (typeof ((v = a.column.field) == null ? void 0 : v.modalData[y]) == "string" && a.column.field.modalData[y].startsWith("prop:")) {
            let Z = a.column.field.modalData[y].substring(5);
            u.value[Z];
          } else
            a.column.field.modalData[y];
      return (b = a.column.field) == null ? void 0 : b.modalData;
    }), I = c(() => {
      var f, o, v;
      if ((f = a.column.field) != null && f.modalKey.startsWith("prop:")) {
        let b = (o = a.column.field) == null ? void 0 : o.modalKey.substring(5);
        return u.value[b];
      }
      return (v = a.column.field) == null ? void 0 : v.modalKey;
    }), d = c(() => {
      var f, o, v, b;
      if (typeof ((f = a.column.field) == null ? void 0 : f.icon) == "string" && ((o = a.column.field) != null && o.icon.startsWith("prop:"))) {
        let y = (v = a.column.field) == null ? void 0 : v.icon.substring(5);
        return u.value[y];
      }
      return (b = a.column.field) == null ? void 0 : b.icon;
    }), q = c(() => {
      var f, o, v, b;
      if (typeof ((f = a.column.field) == null ? void 0 : f.download) == "string" && ((o = a.column.field) != null && o.download.startsWith("prop:"))) {
        let y = (v = a.column.field) == null ? void 0 : v.download.substring(5);
        return u.value[y];
      }
      return (b = a.column.field) == null ? void 0 : b.download;
    }), oe = c(() => {
      var f, o, v;
      if (typeof ((f = a.column.field) == null ? void 0 : f.options) == "string" && ((o = a.column.field) != null && o.options.startsWith("prop:"))) {
        let b = (v = a.column.field) == null ? void 0 : v.options.substring(5);
        return u.value[b];
      }
      return a.column.field.options;
    }), K = c(() => [E.Integer, E.Float].includes(a.column.type) ? E.Number : a.column.type);
    return (f, o) => {
      const v = H("lkt-anchor"), b = H("lkt-field");
      return f.column.type === C(E).Link ? (n(), S(v, {
        key: 0,
        to: f.column.getHref(u.value)
      }, {
        default: P(() => [
          ae(Q(C(le)(f.column, u.value, f.i)), 1)
        ]),
        _: 1
      }, 8, ["to"])) : f.column.type === C(E).Action ? (n(), s("a", {
        key: 1,
        href: "#",
        onClick: o[0] || (o[0] = (y) => f.column.doAction(u.value))
      }, Q(C(le)(f.column, u.value, f.i)), 1)) : f.column.type !== "" ? (n(), S(b, gt({ key: 2 }, f.column.field, {
        icon: d.value,
        download: q.value,
        type: K.value,
        "read-mode": !f.column.editable || !f.editModeEnabled,
        ref: (y) => k.value = y,
        "slot-data": V.value,
        label: f.column.type === "switch" || f.column.type === "check" ? f.column.label : "",
        "modal-key": I.value,
        "modal-data": h.value,
        options: oe.value,
        modelValue: l.value,
        "onUpdate:modelValue": o[1] || (o[1] = (y) => l.value = y)
      }), null, 16, ["icon", "download", "type", "read-mode", "slot-data", "label", "modal-key", "modal-data", "options", "modelValue"])) : (n(), s(D, { key: 3 }, [
        ae(Q(C(le)(f.column, u.value, f.i, f.columns)), 1)
      ], 64));
    };
  }
}), x = class x {
};
x.navButtonSlot = "", x.dropButtonSlot = "", x.editButtonSlot = "", x.createButtonSlot = "", x.defaultEmptySlot = void 0;
let $ = x;
const Rt = /* @__PURE__ */ Y({
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
    const i = r, a = c(() => $.dropButtonSlot !== ""), u = c(() => $.dropButtonSlot);
    return (l, k) => {
      const V = H("lkt-button");
      return n(), S(V, {
        palette: "table-delete",
        icon: a.value ? "" : l.icon,
        text: a.value ? "" : l.text,
        resource: l.resource,
        "resource-data": l.resourceData,
        "confirm-modal": l.confirm,
        disabled: l.disabled,
        onClick: k[0] || (k[0] = ze((h) => i("click"), ["prevent", "stop"]))
      }, {
        default: P(() => [
          a.value ? (n(), S(X(u.value), { key: 0 })) : p("", !0)
        ]),
        _: 1
      }, 8, ["icon", "text", "resource", "resource-data", "confirm-modal", "disabled"]);
    };
  }
}), Lt = /* @__PURE__ */ Y({
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
    const i = r, a = c(() => $.editButtonSlot !== ""), u = c(() => $.editButtonSlot);
    return (l, k) => {
      const V = H("lkt-button");
      return n(), S(V, {
        palette: "table-delete",
        icon: a.value ? "" : l.icon,
        text: a.value ? "" : l.text,
        "on-click-to": l.link,
        "is-anchor": l.link !== "",
        resource: l.resource,
        "resource-data": l.resourceData,
        "confirm-modal": l.confirm,
        disabled: l.disabled,
        onClick: k[0] || (k[0] = ze((h) => i("click"), ["prevent", "stop"]))
      }, {
        default: P(() => [
          a.value ? (n(), S(X(u.value), { key: 0 })) : p("", !0)
        ]),
        _: 1
      }, 8, ["icon", "text", "on-click-to", "is-anchor", "resource", "resource-data", "confirm-modal", "disabled"]);
    };
  }
}), Mt = ["data-i", "data-draggable"], Ft = {
  key: 1,
  "data-role": "invalid-drag-indicator"
}, Nt = {
  key: 2,
  class: "lkt-table-nav-cell"
}, Ut = { class: "lkt-table-nav-container" }, Wt = ["data-column", "colspan", "title", "onClick"], At = {
  key: 4,
  class: "lkt-table-col-drop"
}, Pt = {
  key: 5,
  class: "lkt-table-col-edit"
}, Kt = /* @__PURE__ */ Y({
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
    const i = r, a = t, u = g(a.modelValue), l = g(a.editLink);
    for (let o in u.value) l.value = Ge(l.value, ":" + o, u.value[o]);
    const k = (o) => i("click", o), V = (o, v) => {
      i("show", o, v);
    }, h = c(() => {
      let o = [];
      return a.sortable && a.isDraggable && o.push("handle"), o.join(" ");
    }), I = c(() => $.navButtonSlot !== ""), d = c(() => $.navButtonSlot), q = () => {
      i("item-up", a.i);
    }, oe = () => {
      i("item-down", a.i);
    }, K = () => {
      i("item-drop", a.i);
    }, f = () => {
    };
    return M(() => a.modelValue, (o) => u.value = o), M(u, (o) => {
      i("update:modelValue", o, a.i);
    }, { deep: !0 }), (o, v) => {
      const b = H("lkt-button");
      return n(), s("tr", {
        "data-i": o.i,
        "data-draggable": o.isDraggable
      }, [
        o.sortable && o.isDraggable && o.editModeEnabled ? (n(), s("td", {
          key: 0,
          "data-role": "drag-indicator",
          class: O(h.value)
        }, null, 2)) : o.sortable && o.editModeEnabled ? (n(), s("td", Ft)) : p("", !0),
        o.addNavigation && o.editModeEnabled ? (n(), s("td", Nt, [
          R("div", Ut, [
            te(b, {
              palette: "table-nav",
              disabled: o.i === 0,
              onClick: q
            }, {
              default: P(() => [
                I.value ? (n(), S(X(d.value), {
                  key: 0,
                  direction: "up"
                })) : (n(), s(D, { key: 1 }, [
                  v[2] || (v[2] = R("i", { class: "" }, null, -1)),
                  v[3] || (v[3] = ae(" UP "))
                ], 64))
              ]),
              _: 1
            }, 8, ["disabled"]),
            te(b, {
              palette: "table-nav",
              disabled: o.latestRow,
              onClick: oe
            }, {
              default: P(() => [
                I.value ? (n(), S(X(d.value), {
                  key: 0,
                  direction: "down"
                })) : (n(), s(D, { key: 1 }, [
                  v[4] || (v[4] = R("i", { class: "" }, null, -1)),
                  v[5] || (v[5] = ae(" DOWN "))
                ], 64))
              ]),
              _: 1
            }, 8, ["disabled"])
          ])
        ])) : p("", !0),
        o.displayHiddenColumnsIndicator ? (n(), s("td", {
          key: 3,
          onClick: v[0] || (v[0] = (y) => V(y, o.i)),
          "data-role": "show-more",
          class: O(o.hiddenIsVisible ? "state-open" : "")
        }, null, 2)) : p("", !0),
        (n(!0), s(D, null, A(o.visibleColumns, (y) => (n(), s(D, null, [
          C(It)(y, o.emptyColumns, u.value) ? (n(), s("td", {
            key: "td" + o.i,
            "data-column": y.key,
            colspan: C(Ve)(y, u.value),
            title: C(le)(y, u.value, o.i, o.visibleColumns),
            onClick: (Z) => k(Z, u.value)
          }, [
            o.$slots[y.key] && C(Et)(y, u.value) ? N(o.$slots, y.key, {
              key: 0,
              value: u.value[y.key],
              item: u.value,
              column: y,
              i: o.i
            }) : u.value ? (n(), S(Je, {
              key: 1,
              modelValue: u.value,
              "onUpdate:modelValue": v[1] || (v[1] = (Z) => u.value = Z),
              column: y,
              columns: o.visibleColumns,
              "edit-mode-enabled": o.editModeEnabled,
              i: o.i
            }, null, 8, ["modelValue", "column", "columns", "edit-mode-enabled", "i"])) : p("", !0)
          ], 8, Wt)) : p("", !0)
        ], 64))), 256)),
        o.canDrop && o.editModeEnabled ? (n(), s("td", At, [
          te(Rt, {
            resource: o.dropResource,
            "resource-data": u.value,
            confirm: o.dropConfirm,
            text: o.dropText,
            icon: o.dropIcon,
            onClick: K
          }, null, 8, ["resource", "resource-data", "confirm", "text", "icon"])
        ])) : p("", !0),
        o.canEdit && o.editModeEnabled ? (n(), s("td", Pt, [
          te(Lt, {
            "resource-data": u.value,
            text: o.editText,
            icon: o.editIcon,
            link: l.value,
            onClick: f
          }, null, 8, ["resource-data", "text", "icon", "link"])
        ])) : p("", !0)
      ], 8, Mt);
    };
  }
}), Ht = { "data-role": "hidden-row" }, jt = ["colspan"], qt = ["data-column"], zt = ["data-i"], Gt = ["data-column", "title", "onClick"], Jt = /* @__PURE__ */ Y({
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
    const i = r, a = t, u = g(a.modelValue), l = (k) => i("click", k);
    return M(() => a.modelValue, (k) => u.value = k), M(u, () => i("update:modelValue", u.value)), (k, V) => se((n(), s("tr", Ht, [
      R("td", { colspan: k.hiddenColumnsColSpan }, [
        R("table", null, [
          R("tr", null, [
            (n(!0), s(D, null, A(k.hiddenColumns, (h) => (n(), s("th", {
              "data-column": h.key
            }, [
              R("div", null, Q(h.label), 1)
            ], 8, qt))), 256))
          ]),
          R("tr", { "data-i": k.i }, [
            (n(!0), s(D, null, A(k.hiddenColumns, (h, I) => (n(), s("td", {
              "data-column": h.key,
              title: C(le)(h, u.value, I, k.hiddenColumns),
              onClick: (d) => l(d, u.value)
            }, [
              k.$slots[h.key] ? N(k.$slots, h.key, {
                key: 0,
                value: u.value[h.key],
                item: u.value,
                column: h,
                i: I
              }) : (n(), S(Je, {
                key: 1,
                column: h,
                columns: k.hiddenColumns,
                modelValue: u.value,
                "onUpdate:modelValue": V[0] || (V[0] = (d) => u.value = d),
                i: I
              }, null, 8, ["column", "columns", "modelValue", "i"]))
            ], 8, Gt))), 256))
          ], 8, zt)
        ])
      ], 8, jt)
    ], 512)), [
      [de, k.hiddenIsVisible]
    ]);
  }
}), qe = /* @__PURE__ */ Y({
  __name: "CreateButton",
  props: {
    disabled: { type: Boolean, default: !1 },
    text: { default: "" },
    icon: { default: "" },
    to: { default: "" }
  },
  emits: ["click"],
  setup(t, { emit: r }) {
    const i = r, a = c(() => $.createButtonSlot !== ""), u = c(() => $.createButtonSlot);
    return (l, k) => {
      const V = H("lkt-button");
      return n(), S(V, {
        palette: "table-create",
        disabled: l.disabled,
        icon: a.value ? "" : l.icon,
        text: a.value ? "" : l.text,
        "on-click-to": l.to,
        onClick: k[0] || (k[0] = (h) => i("click"))
      }, {
        default: P(() => [
          a.value ? (n(), S(X(u.value), { key: 0 })) : p("", !0)
        ]),
        _: 1
      }, 8, ["disabled", "icon", "text", "on-click-to"]);
    };
  }
}), Ot = ["data-column", "data-sortable", "data-sort", "colspan", "title"], Qt = /* @__PURE__ */ Y({
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
    const i = r, a = t, u = c(() => Vt(a.column, a.amountOfColumns, a.items)), l = c(() => a.column.sortable === !0), k = c(() => l.value && a.sortBy === a.column.key ? a.sortDirection : ""), V = c(() => a.column.label.startsWith("__:") ? ce(a.column.label.substring(3)) : a.column.label), h = () => i("click", a.column);
    return (I, d) => (n(), s("th", {
      "data-column": I.column.key,
      "data-sortable": l.value,
      "data-sort": k.value,
      colspan: u.value,
      title: V.value,
      onClick: h
    }, [
      R("div", null, Q(V.value), 1)
    ], 8, Ot));
  }
});
var J = /* @__PURE__ */ ((t) => (t.Table = "table", t.Item = "item", t.Ul = "ul", t.Ol = "ol", t))(J || {});
const Xt = ["id"], Yt = { class: "lkt-table-page-buttons" }, Zt = { key: 1 }, _t = { class: "switch-edition-mode" }, xt = {
  key: 0,
  class: "lkt-table-page-buttons"
}, el = {
  key: 1,
  class: "lkt-table-page-filters"
}, tl = ["data-sortable"], ll = { key: 0 }, al = {
  key: 0,
  "data-role": "drag-indicator"
}, ol = { key: 1 }, nl = { key: 2 }, ul = {
  key: 3,
  class: "lkt-table-col-drop"
}, rl = {
  key: 4,
  class: "lkt-table-col-edit"
}, il = ["id"], sl = {
  key: 0,
  class: "lkt-table-item"
}, dl = {
  key: 0,
  class: "lkt-table-item"
}, cl = {
  key: 0,
  class: "lkt-table-item"
}, fl = {
  key: 3,
  class: "lkt-table-empty"
}, ml = {
  key: 4,
  class: "lkt-table-page-buttons lkt-table-page-buttons-bottom"
}, pl = /* @__PURE__ */ Y({
  __name: "LktTable",
  props: {
    modelValue: { default: () => [] },
    type: { default: J.Table },
    columns: { default: () => [] },
    sorter: { type: Function, default: je },
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
    canEditButton: { type: Boolean, default: !1 },
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
    const a = i, u = Ct(), l = t, k = {}, V = g(typeof l.sorter == "function" ? l.sorter : je), h = g(Tt(l.columns)), I = g("asc"), d = g(l.modelValue), q = g(k), oe = g(null), K = g(l.columns), f = g(l.page), o = g(l.loading), v = g(!1), b = g(l.perms), y = g(null), Z = g({}), ee = g(new wt({ items: d.value }, l.dataStateConfig)), L = g(l.editMode), ne = g(0);
    M(o, (e) => a("update:loading", e)), M(f, (e) => a("page", e));
    const fe = g(l.type);
    l.itemMode && fe.value === J.Table && (fe.value = J.Item);
    const Oe = (e) => {
      Array.isArray(e) && (d.value = e), o.value = !1, v.value = !0, ee.value.store({ items: d.value }).turnStoredIntoOriginal();
    }, Qe = (e) => {
      b.value = e;
    }, Xe = (e) => {
    }, Ye = (e) => {
      a("read-response", e);
    }, Ze = () => Pe(() => o.value = !0), _e = () => {
      y.value.doRefresh();
    }, me = Bt(12), Ce = c(() => {
      if (!l.hideEmptyColumns) return [];
      let e = [];
      return K.value.forEach((m) => {
        let w = m.key, W = !1;
        d.value.forEach((z) => {
          if (typeof z.checkEmpty == "function")
            return z.checkEmpty(z);
          z[w] && (W = !0);
        }), W || e.push(w);
      }), e;
    }), pe = c(() => K.value.filter((e) => !e.hidden)), Se = c(() => K.value.filter((e) => e.hidden)), xe = c(() => {
      let e = pe.value.length + 1;
      return l.sortable && ++e, e;
    }), et = c(() => K.value.filter((e) => e.isForRowKey)), Ee = c(() => Se.value.length > 0 && !l.sortable), tt = c(() => K.value.map((e) => e.key)), Ie = c(() => {
      let e = [];
      for (let m in u) tt.value.indexOf(m) !== -1 && e.push(m);
      return e;
    }), Te = c(() => l.hiddenSave || o.value || !l.saveResource ? !1 : L.value && ee.value.changed() ? !0 : L.value), lt = c(() => ye.value && d.value.length >= l.requiredItemsForTopCreate || l.switchEditionEnabled ? !0 : Te.value || L.value && l.canCreate), at = c(() => l.saveDisabled || typeof l.saveValidator == "function" && !l.saveValidator(d.value) ? !1 : ee.value.changed()), ot = c(() => d.value.length), nt = c(() => ({
      items: d.value,
      ...l.saveResourceData
    })), ut = c(() => l.titleTag === "" ? "h2" : l.titleTag), rt = c(() => l.wrapContentTag === "" ? "div" : l.wrapContentTag), Be = c(() => l.title.startsWith("__:") ? ce(l.title.substring(3)) : l.title), it = c(() => l.saveText.startsWith("__:") ? ce(l.saveText.substring(3)) : l.saveText), st = c(() => l.editModeText.startsWith("__:") ? ce(l.editModeText.substring(3)) : l.editModeText), ve = c(() => b.value.includes("create")), we = c(() => b.value.includes("read")), ue = c(() => b.value.includes("update")), re = c(() => b.value.includes("drop")), dt = (e) => {
      let m = e.target;
      if (typeof m.dataset.column > "u")
        do
          m = m.parentNode;
        while (typeof m.dataset.column > "u" && m.tagName !== "TABLE" && m.tagName !== "body");
      if (m.tagName === "TD" && (m = m.parentNode, m = m.dataset.i, typeof m < "u"))
        return d.value[m];
    }, $e = (e) => q.value["tr_" + e] === !0, Re = (e) => {
      e && e.sortable && (d.value = d.value.sort((m, w) => V.value(m, w, e, I.value)), I.value = I.value === "asc" ? "desc" : "asc", h.value = e.key, a("sort", [h.value, I.value]));
    }, Le = (e) => {
      a("click", e);
    }, Me = (e, m) => {
      let w = "tr_" + m;
      q.value[w] = typeof q.value[w] > "u" ? !0 : !q.value[w];
    }, ct = (e) => typeof l.checkValidDrag == "function" ? l.checkValidDrag(e) : !0, Fe = (e) => typeof l.draggableChecker == "function" ? l.draggableChecker(e) : !0, Ne = () => {
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
    }, ft = () => {
      o.value = !0;
    }, mt = () => {
      o.value = !1;
    }, pt = (e, m) => {
      if (a("before-save"), l.saveResource && (o.value = !1, !m.success)) {
        a("error", m.httpStatus);
        return;
      }
      ee.value.turnStoredIntoOriginal(), a("save", m);
    }, Ue = (e, m, w) => {
      if (w >= e.length) {
        let W = w - e.length + 1;
        for (; W--; ) e.push(void 0);
      }
      return e.splice(w, 0, e.splice(m, 1)[0]), e;
    }, vt = (e) => {
      Ue(d.value, e, e - 1), ne.value = ge();
    }, kt = (e) => {
      Ue(d.value, e, e + 1), ne.value = ge();
    }, ke = (e) => {
      d.value.splice(e, 1), ne.value = ge();
    }, yt = () => {
      let e = document.getElementById("lkt-table-body-" + me);
      Z.value = new Dt(e, {
        direction: "vertical",
        handle: ".handle",
        animation: 150,
        onEnd: function(m) {
          let w = m.oldIndex, W = m.newIndex;
          d.value.splice(W, 0, d.value.splice(w, 1)[0]), ne.value = ge();
        },
        onMove: function(m, w) {
          return ct(m);
        }
      });
    }, We = (e, m, w = !1) => {
      let W = [ne.value, me, "row", m];
      return w && W.push("hidden"), et.value.forEach((z) => {
        let G = String(e[z.key]).toLowerCase();
        G.length > 50 && (G = G.substring(0, 50)), G = Ge(G, " ", "-"), W.push(G);
      }), W.join("-");
    }, Ae = c(() => typeof l.createEnabledValidator == "function" ? l.createEnabledValidator({ items: d.value }) : !0), ye = c(() => ve.value ? l.canCreateWithoutEdition || l.canCreate && L.value : !1), be = (e) => typeof l.itemDisplayChecker == "function" ? l.itemDisplayChecker(e) : !0;
    St(() => {
      l.initialSorting && Re($t(l.columns, h.value)), ee.value.store({ items: d.value }).turnStoredIntoOriginal(), l.sortable && Pe(() => {
        yt();
      });
    }), M(() => l.perms, (e) => b.value = e), M(b, (e) => a("update:perms", e)), M(() => l.editMode, (e) => L.value = e), M(() => l.columns, (e) => K.value = e), M(() => l.modelValue, (e) => d.value = e), M(d, (e) => {
      ee.value.increment({ items: e }), a("update:modelValue", e);
    }, { deep: !0 }), r({
      getItemByEvent: dt,
      doRefresh: _e
    });
    const bt = c(() => typeof $.defaultEmptySlot < "u"), ht = c(() => $.defaultEmptySlot);
    return (e, m) => {
      const w = H("lkt-button"), W = H("lkt-field"), z = H("lkt-loader"), G = H("lkt-paginator");
      return n(), s("section", {
        class: "lkt-table-page",
        id: "lkt-table-page-" + C(me)
      }, [
        Be.value || C(u).title ? (n(), s("header", {
          key: 0,
          class: O(e.headerClass)
        }, [
          Be.value ? (n(), S(X(ut.value), { key: 0 }, {
            default: P(() => [
              e.titleIcon ? (n(), s("i", {
                key: 0,
                class: O(e.titleIcon)
              }, null, 2)) : p("", !0),
              ae(" " + Q(Be.value), 1)
            ]),
            _: 1
          })) : p("", !0),
          C(u).title ? N(e.$slots, "title", { key: 1 }) : p("", !0)
        ], 2)) : p("", !0),
        (n(), S(X(rt.value), {
          class: O(["lkt-table-page-content-wrapper", e.wrapContentClass])
        }, {
          default: P(() => [
            se(R("div", Yt, [
              se(te(w, {
                ref: "saveButton",
                palette: "success",
                disabled: !at.value,
                "confirm-modal": e.saveConfirm,
                "confirm-data": e.confirmData,
                resource: e.saveResource,
                "resource-data": nt.value,
                onLoading: ft,
                onLoaded: mt,
                onClick: pt
              }, {
                default: P(() => [
                  C(u)["button-save"] ? N(e.$slots, "button-save", {
                    key: 0,
                    items: d.value,
                    editMode: e.editMode,
                    canUpdate: !e.saveDisabled
                  }) : (n(), s("span", Zt, Q(it.value), 1))
                ]),
                _: 3
              }, 8, ["disabled", "confirm-modal", "confirm-data", "resource", "resource-data"]), [
                [de, Te.value]
              ]),
              ye.value && d.value.length >= e.requiredItemsForTopCreate ? (n(), S(qe, {
                key: 0,
                disabled: !Ae.value || e.createDisabled,
                text: e.createText,
                icon: e.createIcon,
                to: e.createRoute,
                onClick: Ne
              }, null, 8, ["disabled", "text", "icon", "to"])) : p("", !0),
              R("div", _t, [
                se(te(W, {
                  type: "switch",
                  modelValue: L.value,
                  "onUpdate:modelValue": m[0] || (m[0] = (B) => L.value = B),
                  label: st.value
                }, null, 8, ["modelValue", "label"]), [
                  [de, e.switchEditionEnabled]
                ])
              ])
            ], 512), [
              [de, lt.value]
            ]),
            C(u).buttons ? (n(), s("div", xt, [
              N(e.$slots, "buttons")
            ])) : p("", !0),
            v.value && C(u).filters ? (n(), s("div", el, [
              N(e.$slots, "filters", {
                items: d.value,
                isLoading: o.value
              })
            ])) : p("", !0),
            o.value ? (n(), S(z, { key: 2 })) : p("", !0),
            se(R("div", {
              class: "lkt-table",
              "data-sortable": e.sortable
            }, [
              fe.value === C(J).Table ? (n(), s("table", ll, [
                R("thead", null, [
                  R("tr", null, [
                    e.sortable && L.value ? (n(), s("th", al)) : p("", !0),
                    e.addNavigation && L.value ? (n(), s("th", ol)) : p("", !0),
                    Ee.value ? (n(), s("th", nl)) : p("", !0),
                    (n(!0), s(D, null, A(pe.value, (B) => (n(), s(D, null, [
                      Ce.value.indexOf(B.key) === -1 ? (n(), S(Qt, {
                        key: 0,
                        column: B,
                        "sort-by": h.value,
                        "sort-direction": I.value,
                        "amount-of-columns": e.columns.length,
                        items: d.value,
                        onClick: (T) => Re(B)
                      }, null, 8, ["column", "sort-by", "sort-direction", "amount-of-columns", "items", "onClick"])) : p("", !0)
                    ], 64))), 256)),
                    e.canDrop && re.value && L.value ? (n(), s("th", ul)) : p("", !0),
                    e.canEditButton && ue.value && L.value ? (n(), s("th", rl)) : p("", !0)
                  ])
                ]),
                R("tbody", {
                  ref_key: "tableBody",
                  ref: oe,
                  id: "lkt-table-body-" + C(me)
                }, [
                  (n(!0), s(D, null, A(d.value, (B, T) => (n(), s(D, null, [
                    be(B) ? (n(), S(Kt, {
                      modelValue: d.value[T],
                      "onUpdate:modelValue": (_) => d.value[T] = _,
                      key: We(B, T),
                      i: T,
                      "display-hidden-columns-indicator": Ee.value,
                      "is-draggable": Fe(B),
                      sortable: e.sortable,
                      "visible-columns": pe.value,
                      "empty-columns": Ce.value,
                      "add-navigation": e.addNavigation,
                      "hidden-is-visible": $e(T),
                      "latest-row": T + 1 === ot.value,
                      "can-drop": e.canDrop && re.value && L.value,
                      "drop-confirm": e.dropConfirm,
                      "drop-resource": e.dropResource,
                      "drop-text": e.dropText,
                      "drop-icon": e.dropIcon,
                      "can-edit": e.canEditButton && ue.value && L.value,
                      "edit-text": e.editText,
                      "edit-icon": e.editIcon,
                      "edit-link": e.editLink,
                      "edit-mode-enabled": L.value,
                      onClick: Le,
                      onShow: Me,
                      onItemUp: vt,
                      onItemDown: kt,
                      onItemDrop: ke
                    }, Ke({ _: 2 }, [
                      A(Ie.value, (_) => ({
                        name: _,
                        fn: P((j) => [
                          N(e.$slots, _, ie({
                            [e.slotItemVar || ""]: j.item,
                            value: j.value,
                            column: j.column
                          }))
                        ])
                      }))
                    ]), 1032, ["modelValue", "onUpdate:modelValue", "i", "display-hidden-columns-indicator", "is-draggable", "sortable", "visible-columns", "empty-columns", "add-navigation", "hidden-is-visible", "latest-row", "can-drop", "drop-confirm", "drop-resource", "drop-text", "drop-icon", "can-edit", "edit-text", "edit-icon", "edit-link", "edit-mode-enabled"])) : p("", !0),
                    Se.value.length > 0 ? (n(!0), s(D, { key: 1 }, A(d.value, (_, j) => (n(), S(Jt, {
                      modelValue: d.value[j],
                      "onUpdate:modelValue": (he) => d.value[j] = he,
                      key: We(_, j, !0),
                      i: j,
                      "hidden-columns": Se.value,
                      "hidden-columns-col-span": xe.value,
                      "is-draggable": Fe(_),
                      sortable: e.sortable,
                      "visible-columns": pe.value,
                      "empty-columns": Ce.value,
                      "hidden-is-visible": $e(j),
                      onClick: Le,
                      onShow: Me
                    }, Ke({ _: 2 }, [
                      A(Ie.value, (he) => ({
                        name: he,
                        fn: P((De) => [
                          N(e.$slots, he, ie({
                            [e.slotItemVar || ""]: De.item,
                            value: De.value,
                            column: De.column
                          }))
                        ])
                      }))
                    ]), 1032, ["modelValue", "onUpdate:modelValue", "i", "hidden-columns", "hidden-columns-col-span", "is-draggable", "sortable", "visible-columns", "empty-columns", "hidden-is-visible"]))), 128)) : p("", !0)
                  ], 64))), 256))
                ], 8, il)
              ])) : fe.value === C(J).Item ? (n(), s("div", {
                key: 1,
                class: O(["lkt-table-items-container", e.itemsContainerClass])
              }, [
                (n(!0), s(D, null, A(d.value, (B, T) => (n(), s(D, null, [
                  be(B) ? (n(), s("div", sl, [
                    N(e.$slots, "item", ie({
                      [e.slotItemVar || ""]: B,
                      index: T,
                      canCreate: ve.value,
                      canRead: we.value,
                      canUpdate: ue.value,
                      canDrop: re.value,
                      isLoading: o.value,
                      doDrop: () => ke(T)
                    }))
                  ])) : p("", !0)
                ], 64))), 256))
              ], 2)) : C(J).Ul ? (n(), s("ul", {
                key: 2,
                class: O(["lkt-table-items-container", e.itemsContainerClass])
              }, [
                (n(!0), s(D, null, A(d.value, (B, T) => (n(), s(D, null, [
                  be(B) ? (n(), s("li", dl, [
                    N(e.$slots, "item", ie({
                      [e.slotItemVar || ""]: B,
                      index: T,
                      canCreate: ve.value,
                      canRead: we.value,
                      canUpdate: ue.value,
                      canDrop: re.value,
                      isLoading: o.value,
                      doDrop: () => ke(T)
                    }))
                  ])) : p("", !0)
                ], 64))), 256))
              ], 2)) : C(J).Ul ? (n(), s("ol", {
                key: 3,
                class: O(["lkt-table-items-container", e.itemsContainerClass])
              }, [
                (n(!0), s(D, null, A(d.value, (B, T) => (n(), s(D, null, [
                  be(B) ? (n(), s("li", cl, [
                    N(e.$slots, "item", ie({
                      [e.slotItemVar || ""]: B,
                      index: T,
                      canCreate: ve.value,
                      canRead: we.value,
                      canUpdate: ue.value,
                      canDrop: re.value,
                      isLoading: o.value,
                      doDrop: () => ke(T)
                    }))
                  ])) : p("", !0)
                ], 64))), 256))
              ], 2)) : p("", !0)
            ], 8, tl), [
              [de, !o.value && d.value.length > 0]
            ]),
            !o.value && d.value.length === 0 ? (n(), s("div", fl, [
              C(u).empty ? N(e.$slots, "empty", { key: 0 }) : bt.value ? (n(), S(X(ht.value), {
                key: 1,
                message: e.noResultsText
              }, null, 8, ["message"])) : e.noResultsText ? (n(), s(D, { key: 2 }, [
                ae(Q(e.noResultsText), 1)
              ], 64)) : p("", !0)
            ])) : p("", !0),
            ye.value || C(u).bottomButtons ? (n(), s("div", ml, [
              ye.value && d.value.length >= e.requiredItemsForBottomCreate ? (n(), S(qe, {
                key: 0,
                disabled: !Ae.value || e.createDisabled,
                text: e.createText,
                icon: e.createIcon,
                to: e.createRoute,
                onClick: Ne
              }, null, 8, ["disabled", "text", "icon", "to"])) : p("", !0),
              N(e.$slots, "bottom-buttons")
            ])) : p("", !0),
            e.resource.length > 0 ? (n(), S(G, {
              key: 5,
              ref_key: "paginator",
              ref: y,
              modelValue: f.value,
              "onUpdate:modelValue": m[1] || (m[1] = (B) => f.value = B),
              resource: e.resource,
              filters: e.filters,
              onResults: Oe,
              onLoading: Ze,
              onPerms: Qe,
              onCustom: Xe,
              onResponse: Ye
            }, null, 8, ["modelValue", "resource", "filters"])) : p("", !0)
          ]),
          _: 3
        }, 8, ["class"]))
      ], 8, Xt);
    };
  }
}), Nl = {
  install: (t) => {
    t.component("lkt-table") === void 0 && t.component("lkt-table", pl);
  }
}, Ul = (t) => ($.navButtonSlot = t, !0), Wl = (t) => ($.dropButtonSlot = t, !0), Al = (t) => ($.createButtonSlot = t, !0), Pl = (t) => {
  $.defaultEmptySlot = t;
};
export {
  F as Column,
  wl as createActionColumn,
  $l as createCheckColumn,
  Sl as createColumn,
  Il as createEmailColumn,
  Ml as createFileColumn,
  El as createFloatColumn,
  Fl as createHiddenColumn,
  Vl as createIntegerColumn,
  Bl as createLinkColumn,
  Ll as createSelectColumn,
  Rl as createSwitchColumn,
  Tl as createTelColumn,
  Dl as createTextColumn,
  Nl as default,
  Al as setTableCreateButtonSlot,
  Wl as setTableDropButtonSlot,
  Pl as setTableEmptySlot,
  Ul as setTableNavButtonSlot
};
