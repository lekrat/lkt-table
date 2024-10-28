import { reactive as L, defineComponent as Q, ref as g, watch as N, computed as d, resolveComponent as K, unref as B, openBlock as r, createBlock as C, withCtx as W, createTextVNode as le, toDisplayString as O, createElementBlock as c, mergeProps as bt, Fragment as I, withModifiers as He, resolveDynamicComponent as J, createCommentVNode as v, normalizeClass as x, createElementVNode as $, createVNode as ee, renderList as j, renderSlot as U, withDirectives as ne, vShow as ue, useSlots as ht, onMounted as gt, nextTick as Ue, createSlots as We, normalizeProps as he } from "vue";
import { Field as Ae } from "lkt-field";
import { __ as re } from "lkt-i18n";
import { replaceAll as je, generateRandomString as Ct } from "lkt-string-tools";
import { DataState as St } from "lkt-data-state";
import Bt from "sortablejs";
import { time as fe } from "lkt-date-tools";
class M {
  constructor(u = {}) {
    this.key = "", this.label = "", this.sortable = !0, this.hidden = !1, this.editable = !1, this.formatter = void 0, this.checkEmpty = void 0, this.colspan = void 0, this.preferSlot = !0, this.type = "", this.link = "", this.action = void 0, this.isForRowKey = !1, this.extractTitleFromColumn = "", this.slotData = {}, this.field = new Ae();
    for (let i in u)
      this[i] = u[i];
    this.field = new Ae(this.field);
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
var D = /* @__PURE__ */ ((t) => (t.Text = "text", t.Number = "number", t.Check = "check", t.Switch = "switch", t.Select = "select", t.Email = "email", t.Tel = "tel", t.File = "file", t.Link = "link", t.Action = "action", t.Integer = "int", t.Float = "float", t))(D || {});
const bl = (t) => L(new M(t)), hl = (t, u, i, a = !0) => L(new M({ key: t, label: u, sortable: a, type: D.Link, link: i })), gl = (t, u, i, a = !0) => L(new M({ key: t, label: u, sortable: a, type: D.Action, action: i })), Cl = (t, u, i = !0) => L(new M({ key: t, label: u, type: D.Text, sortable: i })), Sl = (t, u, i = !0) => L(new M({ key: t, label: u, type: D.Number, sortable: i })), Bl = (t, u, i = !0) => L(new M({ key: t, label: u, type: D.Number, sortable: i })), wl = (t, u, i = !0) => L(new M({ key: t, label: u, type: D.Email, sortable: i })), Dl = (t, u, i = !0) => L(new M({ key: t, label: u, type: D.Tel, sortable: i })), Vl = (t, u, i = !0) => L(new M({ key: t, label: u, type: D.Check, sortable: i })), El = (t, u, i = !0) => L(new M({ key: t, label: u, type: D.Switch, sortable: i })), Tl = (t, u, i, a = !0) => L(new M({ key: t, label: u, type: D.Select, sortable: a })), Il = (t, u, i = !0) => L(new M({ key: t, label: u, type: D.File, sortable: i })), $l = (t, u, i = !0) => L(new M({ key: t, label: u, sortable: i, hidden: !0 })), Pe = (t, u, i, a) => {
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
}, te = (t, u, i, a = []) => {
  if (t.extractTitleFromColumn) {
    let n = a.find((l) => l.key === t.extractTitleFromColumn);
    if (n)
      return te(n, u, i, a);
  }
  if (t.formatter && typeof t.formatter == "function") {
    let n = t.formatter(u[t.key], u, t, i);
    return n.startsWith("__:") ? re(n.substring(3)) : n;
  }
  return u[t.key];
}, wt = (t, u, i) => {
  if (!t.colspan) return -1;
  let a = u;
  return i.forEach((n) => {
    let l = ge(t, n);
    l > 0 && l < a && (a = l);
  }), a;
}, ge = (t, u) => t.colspan === !1 ? !1 : typeof t.colspan == "function" ? t.colspan(u) : t.colspan, Dt = (t, u) => typeof t.preferSlot > "u" ? !0 : t.preferSlot === !1 ? !1 : typeof t.preferSlot == "function" ? t.preferSlot(u) : !0, Vt = (t, u, i) => {
  if (typeof t != "object" || !t.key || u.indexOf(t.key) > -1) return !1;
  let a = ge(t, i);
  return typeof t.colspan > "u" ? !0 : (typeof t.colspan < "u" && (typeof t.colspan == "function" ? a = parseInt(t.colspan(i)) : a = parseInt(t.colspan)), a > 0);
}, Et = (t = []) => {
  if (t.length > 0) {
    for (let u = 0; u < t.length; ++u)
      if (t[u].sortable) return t[u].key;
  }
  return "";
}, Tt = (t, u) => {
  if (t.length > 0) {
    for (let i = 0; i < t.length; ++i)
      if (t[i].key === u) return t[i];
  }
  return null;
}, qe = /* @__PURE__ */ Q({
  __name: "LktTableCell",
  props: {
    modelValue: { default: () => ({}) },
    column: { default: () => new M() },
    columns: { default: () => [] },
    i: { default: 0 },
    editModeEnabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: u }) {
    const i = u, a = t, n = g(a.modelValue), l = g(n.value[a.column.key]), k = g(null);
    N(l, (f) => {
      const o = JSON.parse(JSON.stringify(n.value));
      o[a.column.key] = f, i("update:modelValue", o);
    }), N(() => a.modelValue, (f) => {
      n.value = f, l.value = n.value[a.column.key];
    });
    const w = d(() => ({ ...a.column.slotData, item: n.value })), h = d(() => {
      var f, o, p, b;
      if ((f = a.column.field) != null && f.modalData && typeof ((o = a.column.field) == null ? void 0 : o.modalData) == "object")
        for (let y in a.column.field.modalData)
          if (typeof ((p = a.column.field) == null ? void 0 : p.modalData[y]) == "string" && a.column.field.modalData[y].startsWith("prop:")) {
            let X = a.column.field.modalData[y].substring(5);
            n.value[X];
          } else
            a.column.field.modalData[y];
      return (b = a.column.field) == null ? void 0 : b.modalData;
    }), V = d(() => {
      var f, o, p;
      if ((f = a.column.field) != null && f.modalKey.startsWith("prop:")) {
        let b = (o = a.column.field) == null ? void 0 : o.modalKey.substring(5);
        return n.value[b];
      }
      return (p = a.column.field) == null ? void 0 : p.modalKey;
    }), s = d(() => {
      var f, o, p, b;
      if (typeof ((f = a.column.field) == null ? void 0 : f.icon) == "string" && ((o = a.column.field) != null && o.icon.startsWith("prop:"))) {
        let y = (p = a.column.field) == null ? void 0 : p.icon.substring(5);
        return n.value[y];
      }
      return (b = a.column.field) == null ? void 0 : b.icon;
    }), q = d(() => {
      var f, o, p, b;
      if (typeof ((f = a.column.field) == null ? void 0 : f.download) == "string" && ((o = a.column.field) != null && o.download.startsWith("prop:"))) {
        let y = (p = a.column.field) == null ? void 0 : p.download.substring(5);
        return n.value[y];
      }
      return (b = a.column.field) == null ? void 0 : b.download;
    }), ae = d(() => {
      var f, o, p;
      if (typeof ((f = a.column.field) == null ? void 0 : f.options) == "string" && ((o = a.column.field) != null && o.options.startsWith("prop:"))) {
        let b = (p = a.column.field) == null ? void 0 : p.options.substring(5);
        return n.value[b];
      }
      return a.column.field.options;
    }), A = d(() => [D.Integer, D.Float].includes(a.column.type) ? D.Number : a.column.type);
    return (f, o) => {
      const p = K("lkt-anchor"), b = K("lkt-field");
      return f.column.type === B(D).Link ? (r(), C(p, {
        key: 0,
        to: f.column.getHref(n.value)
      }, {
        default: W(() => [
          le(O(B(te)(f.column, n.value, f.i)), 1)
        ]),
        _: 1
      }, 8, ["to"])) : f.column.type === B(D).Action ? (r(), c("a", {
        key: 1,
        href: "#",
        onClick: o[0] || (o[0] = (y) => f.column.doAction(n.value))
      }, O(B(te)(f.column, n.value, f.i)), 1)) : f.column.type !== "" ? (r(), C(b, bt({ key: 2 }, f.column.field, {
        icon: s.value,
        download: q.value,
        type: A.value,
        "read-mode": !f.column.editable || !f.editModeEnabled,
        ref: (y) => k.value = y,
        "slot-data": w.value,
        label: f.column.type === "switch" || f.column.type === "check" ? f.column.label : "",
        "modal-key": V.value,
        "modal-data": h.value,
        options: ae.value,
        modelValue: l.value,
        "onUpdate:modelValue": o[1] || (o[1] = (y) => l.value = y)
      }), null, 16, ["icon", "download", "type", "read-mode", "slot-data", "label", "modal-key", "modal-data", "options", "modelValue"])) : (r(), c(I, { key: 3 }, [
        le(O(B(te)(f.column, n.value, f.i, f.columns)), 1)
      ], 64));
    };
  }
}), Z = class Z {
};
Z.navButtonSlot = "", Z.dropButtonSlot = "", Z.editButtonSlot = "", Z.createButtonSlot = "", Z.defaultEmptySlot = void 0;
let T = Z;
const It = /* @__PURE__ */ Q({
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
    const i = u, a = d(() => T.dropButtonSlot !== ""), n = d(() => T.dropButtonSlot);
    return (l, k) => {
      const w = K("lkt-button");
      return r(), C(w, {
        palette: "table-delete",
        icon: a.value ? "" : l.icon,
        text: a.value ? "" : l.text,
        resource: l.resource,
        "resource-data": l.resourceData,
        "confirm-modal": l.confirm,
        disabled: l.disabled,
        onClick: k[0] || (k[0] = He((h) => i("click"), ["prevent", "stop"]))
      }, {
        default: W(() => [
          a.value ? (r(), C(J(n.value), { key: 0 })) : v("", !0)
        ]),
        _: 1
      }, 8, ["icon", "text", "resource", "resource-data", "confirm-modal", "disabled"]);
    };
  }
}), $t = /* @__PURE__ */ Q({
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
    const i = u, a = d(() => T.editButtonSlot !== ""), n = d(() => T.editButtonSlot);
    return (l, k) => {
      const w = K("lkt-button");
      return r(), C(w, {
        palette: "table-delete",
        icon: a.value ? "" : l.icon,
        text: a.value ? "" : l.text,
        "on-click-to": l.link,
        "is-anchor": l.link !== "",
        resource: l.resource,
        "resource-data": l.resourceData,
        "confirm-modal": l.confirm,
        disabled: l.disabled,
        onClick: k[0] || (k[0] = He((h) => i("click"), ["prevent", "stop"]))
      }, {
        default: W(() => [
          a.value ? (r(), C(J(n.value), { key: 0 })) : v("", !0)
        ]),
        _: 1
      }, 8, ["icon", "text", "on-click-to", "is-anchor", "resource", "resource-data", "confirm-modal", "disabled"]);
    };
  }
}), Rt = ["data-i", "data-draggable"], Mt = {
  key: 1,
  "data-role": "invalid-drag-indicator"
}, Lt = {
  key: 2,
  class: "lkt-table-nav-cell"
}, Ft = { class: "lkt-table-nav-container" }, Nt = ["data-column", "colspan", "title", "onClick"], Ut = {
  key: 4,
  class: "lkt-table-col-drop"
}, Wt = {
  key: 5,
  class: "lkt-table-col-edit"
}, At = /* @__PURE__ */ Q({
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
  setup(t, { emit: u }) {
    const i = u, a = t, n = g(a.modelValue), l = g(a.editLink);
    for (let o in n.value) l.value = je(l.value, ":" + o, n.value[o]);
    const k = (o) => i("click", o), w = (o, p) => {
      i("show", o, p);
    }, h = d(() => {
      let o = [];
      return a.sortable && a.isDraggable && o.push("handle"), o.join(" ");
    }), V = d(() => T.navButtonSlot !== ""), s = d(() => T.navButtonSlot), q = () => {
      i("item-up", a.i);
    }, ae = () => {
      i("item-down", a.i);
    }, A = () => {
      i("item-drop", a.i);
    }, f = () => {
    };
    return N(() => a.modelValue, (o) => n.value = o), N(n, (o) => {
      i("update:modelValue", o, a.i);
    }, { deep: !0 }), (o, p) => {
      const b = K("lkt-button");
      return r(), c("tr", {
        "data-i": o.i,
        "data-draggable": o.isDraggable
      }, [
        o.sortable && o.isDraggable && o.editModeEnabled ? (r(), c("td", {
          key: 0,
          "data-role": "drag-indicator",
          class: x(h.value)
        }, null, 2)) : o.sortable && o.editModeEnabled ? (r(), c("td", Mt)) : v("", !0),
        o.addNavigation && o.editModeEnabled ? (r(), c("td", Lt, [
          $("div", Ft, [
            ee(b, {
              palette: "table-nav",
              disabled: o.i === 0,
              onClick: q
            }, {
              default: W(() => [
                V.value ? (r(), C(J(s.value), {
                  key: 0,
                  direction: "up"
                })) : (r(), c(I, { key: 1 }, [
                  p[2] || (p[2] = $("i", { class: "" }, null, -1)),
                  p[3] || (p[3] = le(" UP "))
                ], 64))
              ]),
              _: 1
            }, 8, ["disabled"]),
            ee(b, {
              palette: "table-nav",
              disabled: o.latestRow,
              onClick: ae
            }, {
              default: W(() => [
                V.value ? (r(), C(J(s.value), {
                  key: 0,
                  direction: "down"
                })) : (r(), c(I, { key: 1 }, [
                  p[4] || (p[4] = $("i", { class: "" }, null, -1)),
                  p[5] || (p[5] = le(" DOWN "))
                ], 64))
              ]),
              _: 1
            }, 8, ["disabled"])
          ])
        ])) : v("", !0),
        o.displayHiddenColumnsIndicator ? (r(), c("td", {
          key: 3,
          onClick: p[0] || (p[0] = (y) => w(y, o.i)),
          "data-role": "show-more",
          class: x(o.hiddenIsVisible ? "state-open" : "")
        }, null, 2)) : v("", !0),
        (r(!0), c(I, null, j(o.visibleColumns, (y) => (r(), c(I, null, [
          B(Vt)(y, o.emptyColumns, n.value) ? (r(), c("td", {
            key: "td" + o.i,
            "data-column": y.key,
            colspan: B(ge)(y, n.value),
            title: B(te)(y, n.value, o.i, o.visibleColumns),
            onClick: (X) => k(X, n.value)
          }, [
            o.$slots[y.key] && B(Dt)(y, n.value) ? U(o.$slots, y.key, {
              key: 0,
              value: n.value[y.key],
              item: n.value,
              column: y,
              i: o.i
            }) : n.value ? (r(), C(qe, {
              key: 1,
              modelValue: n.value,
              "onUpdate:modelValue": p[1] || (p[1] = (X) => n.value = X),
              column: y,
              columns: o.visibleColumns,
              "edit-mode-enabled": o.editModeEnabled,
              i: o.i
            }, null, 8, ["modelValue", "column", "columns", "edit-mode-enabled", "i"])) : v("", !0)
          ], 8, Nt)) : v("", !0)
        ], 64))), 256)),
        o.canDrop && o.editModeEnabled ? (r(), c("td", Ut, [
          ee(It, {
            resource: o.dropResource,
            "resource-data": n.value,
            confirm: o.dropConfirm,
            text: o.dropText,
            icon: o.dropIcon,
            onClick: A
          }, null, 8, ["resource", "resource-data", "confirm", "text", "icon"])
        ])) : v("", !0),
        o.canEdit && o.editModeEnabled ? (r(), c("td", Wt, [
          ee($t, {
            "resource-data": n.value,
            text: o.editText,
            icon: o.editIcon,
            link: l.value,
            onClick: f
          }, null, 8, ["resource-data", "text", "icon", "link"])
        ])) : v("", !0)
      ], 8, Rt);
    };
  }
}), Pt = { "data-role": "hidden-row" }, Kt = ["colspan"], Ht = ["data-column"], jt = ["data-i"], qt = ["data-column", "title", "onClick"], zt = /* @__PURE__ */ Q({
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
    const i = u, a = t, n = g(a.modelValue), l = (k) => i("click", k);
    return N(() => a.modelValue, (k) => n.value = k), N(n, () => i("update:modelValue", n.value)), (k, w) => ne((r(), c("tr", Pt, [
      $("td", { colspan: k.hiddenColumnsColSpan }, [
        $("table", null, [
          $("tr", null, [
            (r(!0), c(I, null, j(k.hiddenColumns, (h) => (r(), c("th", {
              "data-column": h.key
            }, [
              $("div", null, O(h.label), 1)
            ], 8, Ht))), 256))
          ]),
          $("tr", { "data-i": k.i }, [
            (r(!0), c(I, null, j(k.hiddenColumns, (h, V) => (r(), c("td", {
              "data-column": h.key,
              title: B(te)(h, n.value, V, k.hiddenColumns),
              onClick: (s) => l(s, n.value)
            }, [
              k.$slots[h.key] ? U(k.$slots, h.key, {
                key: 0,
                value: n.value[h.key],
                item: n.value,
                column: h,
                i: V
              }) : (r(), C(qe, {
                key: 1,
                column: h,
                columns: k.hiddenColumns,
                modelValue: n.value,
                "onUpdate:modelValue": w[0] || (w[0] = (s) => n.value = s),
                i: V
              }, null, 8, ["column", "columns", "modelValue", "i"]))
            ], 8, qt))), 256))
          ], 8, jt)
        ])
      ], 8, Kt)
    ], 512)), [
      [ue, k.hiddenIsVisible]
    ]);
  }
}), Ke = /* @__PURE__ */ Q({
  __name: "CreateButton",
  props: {
    disabled: { type: Boolean, default: !1 },
    text: { default: "" },
    icon: { default: "" },
    to: { default: "" }
  },
  emits: ["click"],
  setup(t, { emit: u }) {
    const i = u, a = d(() => T.createButtonSlot !== ""), n = d(() => T.createButtonSlot);
    return (l, k) => {
      const w = K("lkt-button");
      return r(), C(w, {
        palette: "table-create",
        disabled: l.disabled,
        icon: a.value ? "" : l.icon,
        text: a.value ? "" : l.text,
        "on-click-to": l.to,
        onClick: k[0] || (k[0] = (h) => i("click"))
      }, {
        default: W(() => [
          a.value ? (r(), C(J(n.value), { key: 0 })) : v("", !0)
        ]),
        _: 1
      }, 8, ["disabled", "icon", "text", "on-click-to"]);
    };
  }
}), Gt = ["data-column", "data-sortable", "data-sort", "colspan", "title"], Ot = /* @__PURE__ */ Q({
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
    const i = u, a = t, n = d(() => wt(a.column, a.amountOfColumns, a.items)), l = d(() => a.column.sortable === !0), k = d(() => l.value && a.sortBy === a.column.key ? a.sortDirection : ""), w = d(() => a.column.label.startsWith("__:") ? re(a.column.label.substring(3)) : a.column.label), h = () => i("click", a.column);
    return (V, s) => (r(), c("th", {
      "data-column": V.column.key,
      "data-sortable": l.value,
      "data-sort": k.value,
      colspan: n.value,
      title: w.value,
      onClick: h
    }, [
      $("div", null, O(w.value), 1)
    ], 8, Gt));
  }
}), Jt = ["id"], Qt = { class: "lkt-table-page-buttons" }, Xt = { key: 1 }, Yt = { class: "switch-edition-mode" }, Zt = {
  key: 0,
  class: "lkt-table-page-buttons"
}, _t = {
  key: 1,
  class: "lkt-table-page-filters"
}, xt = ["data-sortable"], el = { key: 0 }, tl = {
  key: 0,
  "data-role": "drag-indicator"
}, ll = { key: 1 }, al = { key: 2 }, ol = {
  key: 3,
  class: "lkt-table-col-drop"
}, nl = {
  key: 4,
  class: "lkt-table-col-edit"
}, ul = ["id"], rl = {
  key: 0,
  class: "lkt-table-item"
}, il = {
  key: 3,
  class: "lkt-table-empty"
}, sl = {
  key: 4,
  class: "lkt-table-page-buttons lkt-table-page-buttons-bottom"
}, dl = /* @__PURE__ */ Q({
  __name: "LktTable",
  props: {
    modelValue: { default: () => [] },
    columns: { default: () => [] },
    sorter: { type: Function, default: Pe },
    draggableChecker: { type: Function, default: (t) => !0 },
    checkValidDrag: { type: Function, default: void 0 },
    sortable: { type: Boolean, default: !1 },
    hideEmptyColumns: { type: Boolean, default: !1 },
    initialSorting: { type: Boolean, default: !1 },
    draggableItemKey: { default: "name" },
    itemDisplayChecker: {},
    page: { default: 1 },
    perms: { default: [] },
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
  emits: ["update:modelValue", "update:perms", "sort", "click", "save", "error", "before-save", "read-response", "click-create"],
  setup(t, { expose: u, emit: i }) {
    const a = i, n = ht(), l = t, k = {}, w = g(typeof l.sorter == "function" ? l.sorter : Pe), h = g(Et(l.columns)), V = g("asc"), s = g(l.modelValue), q = g(k), ae = g(null), A = g(l.columns), f = g(l.page), o = g(!1), p = g(!1), b = g(l.perms), y = g(null), X = g({}), _ = g(new St({ items: s.value }, l.dataStateConfig)), R = g(l.editMode), oe = g(0), ze = (e) => {
      Array.isArray(e) && (s.value = e), o.value = !1, p.value = !0, _.value.store({ items: s.value }).turnStoredIntoOriginal();
    }, Ge = (e) => {
      b.value = e;
    }, Oe = (e) => {
    }, Je = (e) => {
      a("read-response", e);
    }, Qe = () => Ue(() => o.value = !0), Xe = () => {
      y.value.doRefresh();
    }, ie = Ct(12), me = d(() => {
      if (!l.hideEmptyColumns) return [];
      let e = [];
      return A.value.forEach((m) => {
        let S = m.key, F = !1;
        s.value.forEach((z) => {
          if (typeof z.checkEmpty == "function")
            return z.checkEmpty(z);
          z[S] && (F = !0);
        }), F || e.push(S);
      }), e;
    }), se = d(() => A.value.filter((e) => !e.hidden)), pe = d(() => A.value.filter((e) => e.hidden)), Ye = d(() => {
      let e = se.value.length + 1;
      return l.sortable && ++e, e;
    }), Ze = d(() => A.value.filter((e) => e.isForRowKey)), Ce = d(() => pe.value.length > 0 && !l.sortable), _e = d(() => A.value.map((e) => e.key)), Se = d(() => {
      let e = [];
      for (let m in n) _e.value.indexOf(m) !== -1 && e.push(m);
      return e;
    }), Be = d(() => l.hiddenSave || o.value || !l.saveResource ? !1 : R.value && _.value.changed() ? !0 : R.value), xe = d(() => de.value && s.value.length >= l.requiredItemsForTopCreate || l.switchEditionEnabled ? !0 : Be.value || R.value && l.canCreate), et = d(() => l.saveDisabled || typeof l.saveValidator == "function" && !l.saveValidator(s.value) ? !1 : _.value.changed()), tt = d(() => s.value.length), lt = d(() => ({
      items: s.value,
      ...l.saveResourceData
    })), at = d(() => l.titleTag === "" ? "h2" : l.titleTag), ot = d(() => l.wrapContentTag === "" ? "div" : l.wrapContentTag), ve = d(() => l.title.startsWith("__:") ? re(l.title.substring(3)) : l.title), nt = d(() => l.saveText.startsWith("__:") ? re(l.saveText.substring(3)) : l.saveText), ut = d(() => l.editModeText.startsWith("__:") ? re(l.editModeText.substring(3)) : l.editModeText), we = d(() => b.value.includes("create")), rt = d(() => b.value.includes("read")), ke = d(() => b.value.includes("update")), ye = d(() => b.value.includes("drop")), it = (e) => {
      let m = e.target;
      if (typeof m.dataset.column > "u")
        do
          m = m.parentNode;
        while (typeof m.dataset.column > "u" && m.tagName !== "TABLE" && m.tagName !== "body");
      if (m.tagName === "TD" && (m = m.parentNode, m = m.dataset.i, typeof m < "u"))
        return s.value[m];
    }, De = (e) => q.value["tr_" + e] === !0, Ve = (e) => {
      e && e.sortable && (s.value = s.value.sort((m, S) => w.value(m, S, e, V.value)), V.value = V.value === "asc" ? "desc" : "asc", h.value = e.key, a("sort", [h.value, V.value]));
    }, Ee = (e) => {
      a("click", e);
    }, Te = (e, m) => {
      let S = "tr_" + m;
      q.value[S] = typeof q.value[S] > "u" ? !0 : !q.value[S];
    }, st = (e) => typeof l.checkValidDrag == "function" ? l.checkValidDrag(e) : !0, Ie = (e) => typeof l.draggableChecker == "function" ? l.draggableChecker(e) : !0, $e = () => {
      if (l.canCreateWithoutEdition)
        a("click-create");
      else {
        if (typeof l.newValueGenerator == "function") {
          let e = l.newValueGenerator();
          if (typeof e == "object") {
            s.value.push(e);
            return;
          }
        }
        s.value.push({});
      }
    }, dt = () => {
      o.value = !0;
    }, ct = () => {
      o.value = !1;
    }, ft = (e, m) => {
      if (a("before-save"), l.saveResource && (o.value = !1, !m.success)) {
        a("error", m.httpStatus);
        return;
      }
      _.value.turnStoredIntoOriginal(), a("save", m);
    }, Re = (e, m, S) => {
      if (S >= e.length) {
        let F = S - e.length + 1;
        for (; F--; ) e.push(void 0);
      }
      return e.splice(S, 0, e.splice(m, 1)[0]), e;
    }, mt = (e) => {
      Re(s.value, e, e - 1), oe.value = fe();
    }, pt = (e) => {
      Re(s.value, e, e + 1), oe.value = fe();
    }, Me = (e) => {
      s.value.splice(e, 1), oe.value = fe();
    }, vt = () => {
      let e = document.getElementById("lkt-table-body-" + ie);
      X.value = new Bt(e, {
        direction: "vertical",
        handle: ".handle",
        animation: 150,
        onEnd: function(m) {
          let S = m.oldIndex, F = m.newIndex;
          s.value.splice(F, 0, s.value.splice(S, 1)[0]), oe.value = fe();
        },
        onMove: function(m, S) {
          return st(m);
        }
      });
    }, Le = (e, m, S = !1) => {
      let F = [oe.value, ie, "row", m];
      return S && F.push("hidden"), Ze.value.forEach((z) => {
        let G = String(e[z.key]).toLowerCase();
        G.length > 50 && (G = G.substring(0, 50)), G = je(G, " ", "-"), F.push(G);
      }), F.join("-");
    }, Fe = d(() => typeof l.createEnabledValidator == "function" ? l.createEnabledValidator({ items: s.value }) : !0), de = d(() => we.value ? l.canCreateWithoutEdition || l.canCreate && R.value : !1), Ne = (e) => typeof l.itemDisplayChecker == "function" ? l.itemDisplayChecker(e) : !0;
    gt(() => {
      l.initialSorting && Ve(Tt(l.columns, h.value)), _.value.store({ items: s.value }).turnStoredIntoOriginal(), l.sortable && Ue(() => {
        vt();
      });
    }), N(() => l.perms, (e) => b.value = e), N(b, (e) => a("update:perms", e)), N(() => l.editMode, (e) => R.value = e), N(() => l.columns, (e) => A.value = e), N(() => l.modelValue, (e) => s.value = e), N(s, (e) => {
      _.value.increment({ items: e }), a("update:modelValue", e);
    }, { deep: !0 }), u({
      getItemByEvent: it,
      doRefresh: Xe
    });
    const kt = d(() => typeof T.defaultEmptySlot < "u"), yt = d(() => T.defaultEmptySlot);
    return (e, m) => {
      const S = K("lkt-button"), F = K("lkt-field"), z = K("lkt-loader"), G = K("lkt-paginator");
      return r(), c("section", {
        class: "lkt-table-page",
        id: "lkt-table-page-" + B(ie)
      }, [
        ve.value || B(n).title ? (r(), c("header", {
          key: 0,
          class: x(e.headerClass)
        }, [
          ve.value ? (r(), C(J(at.value), { key: 0 }, {
            default: W(() => [
              e.titleIcon ? (r(), c("i", {
                key: 0,
                class: x(e.titleIcon)
              }, null, 2)) : v("", !0),
              le(" " + O(ve.value), 1)
            ]),
            _: 1
          })) : v("", !0),
          B(n).title ? U(e.$slots, "title", { key: 1 }) : v("", !0)
        ], 2)) : v("", !0),
        (r(), C(J(ot.value), {
          class: x(["lkt-table-page-content-wrapper", e.wrapContentClass])
        }, {
          default: W(() => [
            ne($("div", Qt, [
              ne(ee(S, {
                ref: "saveButton",
                palette: "success",
                disabled: !et.value,
                "confirm-modal": e.saveConfirm,
                "confirm-data": e.confirmData,
                resource: e.saveResource,
                "resource-data": lt.value,
                onLoading: dt,
                onLoaded: ct,
                onClick: ft
              }, {
                default: W(() => [
                  B(n)["button-save"] ? U(e.$slots, "button-save", {
                    key: 0,
                    items: s.value,
                    editMode: e.editMode,
                    canUpdate: !e.saveDisabled
                  }) : (r(), c("span", Xt, O(nt.value), 1))
                ]),
                _: 3
              }, 8, ["disabled", "confirm-modal", "confirm-data", "resource", "resource-data"]), [
                [ue, Be.value]
              ]),
              de.value && s.value.length >= e.requiredItemsForTopCreate ? (r(), C(Ke, {
                key: 0,
                disabled: !Fe.value || e.createDisabled,
                text: e.createText,
                icon: e.createIcon,
                to: e.createRoute,
                onClick: $e
              }, null, 8, ["disabled", "text", "icon", "to"])) : v("", !0),
              $("div", Yt, [
                ne(ee(F, {
                  type: "switch",
                  modelValue: R.value,
                  "onUpdate:modelValue": m[0] || (m[0] = (E) => R.value = E),
                  label: ut.value
                }, null, 8, ["modelValue", "label"]), [
                  [ue, e.switchEditionEnabled]
                ])
              ])
            ], 512), [
              [ue, xe.value]
            ]),
            B(n).buttons ? (r(), c("div", Zt, [
              U(e.$slots, "buttons")
            ])) : v("", !0),
            p.value && B(n).filters ? (r(), c("div", _t, [
              U(e.$slots, "filters", {
                items: s.value,
                isLoading: o.value
              })
            ])) : v("", !0),
            o.value ? (r(), C(z, { key: 2 })) : v("", !0),
            ne($("div", {
              class: "lkt-table",
              "data-sortable": e.sortable
            }, [
              e.itemMode ? (r(), c("div", {
                key: 1,
                class: x(["lkt-table-items-container", e.itemsContainerClass])
              }, [
                (r(!0), c(I, null, j(s.value, (E, P) => (r(), c(I, null, [
                  Ne(E) ? (r(), c("div", rl, [
                    U(e.$slots, "item", he({
                      [e.slotItemVar || ""]: E,
                      index: P,
                      canCreate: we.value,
                      canRead: rt.value,
                      canUpdate: ke.value,
                      canDrop: ye.value,
                      isLoading: o.value,
                      doDrop: () => Me(P)
                    }))
                  ])) : v("", !0)
                ], 64))), 256))
              ], 2)) : (r(), c("table", el, [
                $("thead", null, [
                  $("tr", null, [
                    e.sortable && R.value ? (r(), c("th", tl)) : v("", !0),
                    e.addNavigation && R.value ? (r(), c("th", ll)) : v("", !0),
                    Ce.value ? (r(), c("th", al)) : v("", !0),
                    (r(!0), c(I, null, j(se.value, (E) => (r(), c(I, null, [
                      me.value.indexOf(E.key) === -1 ? (r(), C(Ot, {
                        key: 0,
                        column: E,
                        "sort-by": h.value,
                        "sort-direction": V.value,
                        "amount-of-columns": e.columns.length,
                        items: s.value,
                        onClick: (P) => Ve(E)
                      }, null, 8, ["column", "sort-by", "sort-direction", "amount-of-columns", "items", "onClick"])) : v("", !0)
                    ], 64))), 256)),
                    e.canDrop && ye.value && R.value ? (r(), c("th", ol)) : v("", !0),
                    e.canEditButton && ke.value && R.value ? (r(), c("th", nl)) : v("", !0)
                  ])
                ]),
                $("tbody", {
                  ref: (E) => ae.value = E,
                  id: "lkt-table-body-" + B(ie)
                }, [
                  (r(!0), c(I, null, j(s.value, (E, P) => (r(), c(I, null, [
                    Ne(E) ? (r(), C(At, {
                      modelValue: s.value[P],
                      "onUpdate:modelValue": (Y) => s.value[P] = Y,
                      key: Le(E, P),
                      i: P,
                      "display-hidden-columns-indicator": Ce.value,
                      "is-draggable": Ie(E),
                      sortable: e.sortable,
                      "visible-columns": se.value,
                      "empty-columns": me.value,
                      "add-navigation": e.addNavigation,
                      "hidden-is-visible": De(P),
                      "latest-row": P + 1 === tt.value,
                      "can-drop": e.canDrop && ye.value && R.value,
                      "drop-confirm": e.dropConfirm,
                      "drop-resource": e.dropResource,
                      "drop-text": e.dropText,
                      "drop-icon": e.dropIcon,
                      "can-edit": e.canEditButton && ke.value && R.value,
                      "edit-text": e.editText,
                      "edit-icon": e.editIcon,
                      "edit-link": e.editLink,
                      "edit-mode-enabled": R.value,
                      onClick: Ee,
                      onShow: Te,
                      onItemUp: mt,
                      onItemDown: pt,
                      onItemDrop: Me
                    }, We({ _: 2 }, [
                      j(Se.value, (Y) => ({
                        name: Y,
                        fn: W((H) => [
                          U(e.$slots, Y, he({
                            [e.slotItemVar || ""]: H.item,
                            value: H.value,
                            column: H.column
                          }))
                        ])
                      }))
                    ]), 1032, ["modelValue", "onUpdate:modelValue", "i", "display-hidden-columns-indicator", "is-draggable", "sortable", "visible-columns", "empty-columns", "add-navigation", "hidden-is-visible", "latest-row", "can-drop", "drop-confirm", "drop-resource", "drop-text", "drop-icon", "can-edit", "edit-text", "edit-icon", "edit-link", "edit-mode-enabled"])) : v("", !0),
                    pe.value.length > 0 ? (r(!0), c(I, { key: 1 }, j(s.value, (Y, H) => (r(), C(zt, {
                      modelValue: s.value[H],
                      "onUpdate:modelValue": (ce) => s.value[H] = ce,
                      key: Le(Y, H, !0),
                      i: H,
                      "hidden-columns": pe.value,
                      "hidden-columns-col-span": Ye.value,
                      "is-draggable": Ie(Y),
                      sortable: e.sortable,
                      "visible-columns": se.value,
                      "empty-columns": me.value,
                      "hidden-is-visible": De(H),
                      onClick: Ee,
                      onShow: Te
                    }, We({ _: 2 }, [
                      j(Se.value, (ce) => ({
                        name: ce,
                        fn: W((be) => [
                          U(e.$slots, ce, he({
                            [e.slotItemVar || ""]: be.item,
                            value: be.value,
                            column: be.column
                          }))
                        ])
                      }))
                    ]), 1032, ["modelValue", "onUpdate:modelValue", "i", "hidden-columns", "hidden-columns-col-span", "is-draggable", "sortable", "visible-columns", "empty-columns", "hidden-is-visible"]))), 128)) : v("", !0)
                  ], 64))), 256))
                ], 8, ul)
              ]))
            ], 8, xt), [
              [ue, !o.value && s.value.length > 0]
            ]),
            !o.value && s.value.length === 0 ? (r(), c("div", il, [
              B(n).empty ? U(e.$slots, "empty", { key: 0 }) : kt.value ? (r(), C(J(yt.value), {
                key: 1,
                message: e.noResultsText
              }, null, 8, ["message"])) : e.noResultsText ? (r(), c(I, { key: 2 }, [
                le(O(e.noResultsText), 1)
              ], 64)) : v("", !0)
            ])) : v("", !0),
            de.value || B(n).bottomButtons ? (r(), c("div", sl, [
              de.value && s.value.length >= e.requiredItemsForBottomCreate ? (r(), C(Ke, {
                key: 0,
                disabled: !Fe.value || e.createDisabled,
                text: e.createText,
                icon: e.createIcon,
                to: e.createRoute,
                onClick: $e
              }, null, 8, ["disabled", "text", "icon", "to"])) : v("", !0),
              U(e.$slots, "bottom-buttons")
            ])) : v("", !0),
            e.resource.length > 0 ? (r(), C(G, {
              key: 5,
              ref_key: "paginator",
              ref: y,
              modelValue: f.value,
              "onUpdate:modelValue": m[1] || (m[1] = (E) => f.value = E),
              resource: e.resource,
              filters: e.filters,
              onResults: ze,
              onLoading: Qe,
              onPerms: Ge,
              onCustom: Oe,
              onResponse: Je
            }, null, 8, ["modelValue", "resource", "filters"])) : v("", !0)
          ]),
          _: 3
        }, 8, ["class"]))
      ], 8, Jt);
    };
  }
}), Rl = {
  install: (t) => {
    t.component("lkt-table") === void 0 && t.component("lkt-table", dl);
  }
}, Ml = (t) => (T.navButtonSlot = t, !0), Ll = (t) => (T.dropButtonSlot = t, !0), Fl = (t) => (T.createButtonSlot = t, !0), Nl = (t) => {
  T.defaultEmptySlot = t;
};
export {
  M as Column,
  gl as createActionColumn,
  Vl as createCheckColumn,
  bl as createColumn,
  wl as createEmailColumn,
  Il as createFileColumn,
  Bl as createFloatColumn,
  $l as createHiddenColumn,
  Sl as createIntegerColumn,
  hl as createLinkColumn,
  Tl as createSelectColumn,
  El as createSwitchColumn,
  Dl as createTelColumn,
  Cl as createTextColumn,
  Rl as default,
  Fl as setTableCreateButtonSlot,
  Ll as setTableDropButtonSlot,
  Nl as setTableEmptySlot,
  Ml as setTableNavButtonSlot
};
