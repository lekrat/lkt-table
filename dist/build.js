import { reactive as N, defineComponent as X, ref as b, watch as U, computed as c, resolveComponent as j, unref as g, openBlock as r, createBlock as y, withCtx as P, createTextVNode as le, toDisplayString as J, createElementBlock as d, mergeProps as yt, Fragment as $, withModifiers as Ke, resolveDynamicComponent as Q, createCommentVNode as p, normalizeClass as x, createElementVNode as R, createVNode as ee, renderList as z, renderSlot as A, withDirectives as ne, vShow as ue, useSlots as ht, onMounted as gt, nextTick as Ue, createSlots as Ae, normalizeProps as he } from "vue";
import Ct, { Field as Pe } from "lkt-field";
import { __ as re } from "lkt-i18n";
import { replaceAll as je, generateRandomString as St } from "lkt-string-tools";
import { DataState as Bt } from "lkt-data-state";
import Vt from "sortablejs";
import { time as fe } from "lkt-date-tools";
import wt from "lkt-loader";
import Et from "lkt-button";
import Dt from "lkt-paginator";
class M {
  constructor(o = "", i = "") {
    if (this.key = "", this.label = "", this.sortable = !0, this.hidden = !1, this.editable = !1, this.formatter = void 0, this.checkEmpty = void 0, this.colspan = void 0, this.preferSlot = !0, this.type = "", this.field = new Pe(), typeof o == "object")
      for (let a in o)
        this[a] = o[a];
    else
      this.key = o, this.label = i;
    this.field = new Pe(this.field);
  }
  getHref(o) {
    return typeof this.link == "function" ? this.link(o) : this.link;
  }
  doAction(o) {
    if (typeof this.action == "function")
      return this.action(o);
    console.warn("No action defined");
  }
}
var V = /* @__PURE__ */ ((t) => (t.Text = "text", t.Number = "number", t.Check = "check", t.Switch = "switch", t.Select = "select", t.Email = "email", t.Tel = "tel", t.File = "file", t.Link = "link", t.Action = "action", t.Integer = "int", t.Float = "float", t))(V || {});
const wl = (t, o, i = !0) => N(new M(t, o)), El = (t, o, i, a = !0) => N(new M({ key: t, label: o, sortable: a, type: V.Link, link: i })), Dl = (t, o, i, a = !0) => N(new M({ key: t, label: o, sortable: a, type: V.Action, action: i })), Tl = (t, o, i = !0) => N(new M({ key: t, label: o, type: V.Text, sortable: i })), Il = (t, o, i = !0) => N(new M({ key: t, label: o, type: V.Number, sortable: i })), $l = (t, o, i = !0) => N(new M({ key: t, label: o, type: V.Number, sortable: i })), Rl = (t, o, i = !0) => N(new M({ key: t, label: o, type: V.Email, sortable: i })), Ll = (t, o, i = !0) => N(new M({ key: t, label: o, type: V.Tel, sortable: i })), Ml = (t, o, i = !0) => N(new M({ key: t, label: o, type: V.Check, sortable: i })), Nl = (t, o, i = !0) => N(new M({ key: t, label: o, type: V.Switch, sortable: i })), Fl = (t, o, i, a = !0) => N(new M({ key: t, label: o, type: V.Select, sortable: a })), Ul = (t, o, i = !0) => N(new M({ key: t, label: o, type: V.File, sortable: i })), Al = (t, o, i = !0) => N(new M({ key: t, label: o, sortable: i, hidden: !0 })), We = (t, o, i, a) => {
  if (!i) return 0;
  let n = t[i.key], l = o[i.key];
  if (a === "asc") {
    if (n > l) return 1;
    if (l > n) return -1;
  } else {
    if (n > l) return -1;
    if (l > n) return 1;
  }
  return 0;
}, te = (t, o, i, a = []) => {
  if (t.extractTitleFromColumn) {
    let n = a.find((l) => l.key === t.extractTitleFromColumn);
    if (n)
      return te(n, o, i, a);
  }
  if (t.formatter && typeof t.formatter == "function") {
    let n = t.formatter(o[t.key], o, t, i);
    return n.startsWith("__:") ? re(n.substring(3)) : n;
  }
  return o[t.key];
}, Tt = (t, o, i) => {
  if (!t.colspan) return -1;
  let a = o;
  return i.forEach((n) => {
    let l = ge(t, n);
    l > 0 && l < a && (a = l);
  }), a;
}, ge = (t, o) => t.colspan === !1 ? !1 : typeof t.colspan == "function" ? t.colspan(o) : t.colspan, It = (t, o) => typeof t.preferSlot > "u" ? !0 : t.preferSlot === !1 ? !1 : typeof t.preferSlot == "function" ? t.preferSlot(o) : !0, $t = (t, o, i) => {
  if (typeof t != "object" || !t.key || o.indexOf(t.key) > -1) return !1;
  let a = ge(t, i);
  return typeof t.colspan > "u" ? !0 : (typeof t.colspan < "u" && (typeof t.colspan == "function" ? a = parseInt(t.colspan(i)) : a = parseInt(t.colspan)), a > 0);
}, Rt = (t = []) => {
  if (t.length > 0) {
    for (let o = 0; o < t.length; ++o)
      if (t[o].sortable) return t[o].key;
  }
  return "";
}, Lt = (t, o) => {
  if (t.length > 0) {
    for (let i = 0; i < t.length; ++i)
      if (t[i].key === o) return t[i];
  }
  return null;
}, qe = /* @__PURE__ */ X({
  __name: "LktTableCell",
  props: {
    modelValue: { default: () => ({}) },
    column: { default: () => new M() },
    columns: { default: () => [] },
    i: { default: 0 },
    editModeEnabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: o }) {
    const i = o, a = t, n = b(a.modelValue), l = b(n.value[a.column.key]), v = b(null);
    U(l, (m) => {
      const S = JSON.parse(JSON.stringify(n.value));
      S[a.column.key] = m, i("update:modelValue", S);
    }), U(() => a.modelValue, (m) => {
      n.value = m, l.value = n.value[a.column.key];
    });
    const C = c(() => ({ ...a.column.slotData, item: n.value })), k = c(() => {
      var m, S, E;
      if ((m = a.column.field) != null && m.modalKey.startsWith("prop:")) {
        let W = (S = a.column.field) == null ? void 0 : S.modalKey.substring(5);
        return n.value[W];
      }
      return (E = a.column.field) == null ? void 0 : E.modalKey;
    }), w = c(() => {
      var m, S, E;
      if (typeof ((m = a.column.field) == null ? void 0 : m.options) == "string" && ((S = a.column.field) != null && S.options.startsWith("prop:"))) {
        let W = (E = a.column.field) == null ? void 0 : E.options.substring(5);
        return n.value[W];
      }
      return a.column.field.options;
    }), s = c(() => [V.Integer, V.Float].includes(a.column.type) ? V.Number : a.column.type);
    return (m, S) => {
      const E = j("lkt-anchor"), W = j("lkt-field");
      return m.column.type === g(V).Link ? (r(), y(E, {
        key: 0,
        to: m.column.getHref(n.value)
      }, {
        default: P(() => [
          le(J(g(te)(m.column, n.value, m.i)), 1)
        ]),
        _: 1
      }, 8, ["to"])) : m.column.type === g(V).Action ? (r(), d("a", {
        key: 1,
        href: "#",
        onClick: S[0] || (S[0] = (u) => m.column.doAction(n.value))
      }, J(g(te)(m.column, n.value, m.i)), 1)) : m.column.type !== "" ? (r(), y(W, yt({ key: 2 }, m.column.field, {
        type: s.value,
        "read-mode": !m.column.editable || !m.editModeEnabled,
        ref: (u) => v.value = u,
        "slot-data": C.value,
        label: m.column.type === "switch" || m.column.type === "check" ? m.column.label : "",
        "modal-key": k.value,
        options: w.value,
        modelValue: l.value,
        "onUpdate:modelValue": S[1] || (S[1] = (u) => l.value = u)
      }), null, 16, ["type", "read-mode", "slot-data", "label", "modal-key", "options", "modelValue"])) : (r(), d($, { key: 3 }, [
        le(J(g(te)(m.column, n.value, m.i, m.columns)), 1)
      ], 64));
    };
  }
}), Z = class Z {
};
Z.navButtonSlot = "", Z.dropButtonSlot = "", Z.editButtonSlot = "", Z.createButtonSlot = "", Z.defaultEmptySlot = void 0;
let T = Z;
const Mt = /* @__PURE__ */ X({
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
  setup(t, { emit: o }) {
    const i = o, a = c(() => T.dropButtonSlot !== ""), n = c(() => T.dropButtonSlot);
    return (l, v) => {
      const C = j("lkt-button");
      return r(), y(C, {
        palette: "table-delete",
        icon: a.value ? "" : l.icon,
        text: a.value ? "" : l.text,
        resource: l.resource,
        "resource-data": l.resourceData,
        "confirm-modal": l.confirm,
        disabled: l.disabled,
        onClick: v[0] || (v[0] = Ke((k) => i("click"), ["prevent", "stop"]))
      }, {
        default: P(() => [
          a.value ? (r(), y(Q(n.value), { key: 0 })) : p("", !0)
        ]),
        _: 1
      }, 8, ["icon", "text", "resource", "resource-data", "confirm-modal", "disabled"]);
    };
  }
}), Nt = /* @__PURE__ */ X({
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
  setup(t, { emit: o }) {
    const i = o, a = c(() => T.editButtonSlot !== ""), n = c(() => T.editButtonSlot);
    return (l, v) => {
      const C = j("lkt-button");
      return r(), y(C, {
        palette: "table-delete",
        icon: a.value ? "" : l.icon,
        text: a.value ? "" : l.text,
        "on-click-to": l.link,
        "is-anchor": l.link !== "",
        resource: l.resource,
        "resource-data": l.resourceData,
        "confirm-modal": l.confirm,
        disabled: l.disabled,
        onClick: v[0] || (v[0] = Ke((k) => i("click"), ["prevent", "stop"]))
      }, {
        default: P(() => [
          a.value ? (r(), y(Q(n.value), { key: 0 })) : p("", !0)
        ]),
        _: 1
      }, 8, ["icon", "text", "on-click-to", "is-anchor", "resource", "resource-data", "confirm-modal", "disabled"]);
    };
  }
}), Ft = ["data-i", "data-draggable"], Ut = {
  key: 1,
  "data-role": "invalid-drag-indicator"
}, At = {
  key: 2,
  class: "lkt-table-nav-cell"
}, Pt = { class: "lkt-table-nav-container" }, Wt = ["data-column", "colspan", "title", "onClick"], Ht = {
  key: 4,
  class: "lkt-table-col-drop"
}, Kt = {
  key: 5,
  class: "lkt-table-col-edit"
}, jt = /* @__PURE__ */ X({
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
  setup(t, { emit: o }) {
    const i = o, a = t, n = b(a.modelValue), l = b(a.editLink);
    for (let u in n.value) l.value = je(l.value, ":" + u, n.value[u]);
    const v = (u) => i("click", u), C = (u, B) => {
      i("show", u, B);
    }, k = c(() => {
      let u = [];
      return a.sortable && a.isDraggable && u.push("handle"), u.join(" ");
    }), w = c(() => T.navButtonSlot !== ""), s = c(() => T.navButtonSlot), m = () => {
      i("item-up", a.i);
    }, S = () => {
      i("item-down", a.i);
    }, E = () => {
      i("item-drop", a.i);
    }, W = () => {
    };
    return U(() => a.modelValue, (u) => n.value = u), U(n, (u) => {
      i("update:modelValue", u, a.i);
    }, { deep: !0 }), (u, B) => {
      const H = j("lkt-button");
      return r(), d("tr", {
        "data-i": u.i,
        "data-draggable": u.isDraggable
      }, [
        u.sortable && u.isDraggable && u.editModeEnabled ? (r(), d("td", {
          key: 0,
          "data-role": "drag-indicator",
          class: x(k.value)
        }, null, 2)) : u.sortable && u.editModeEnabled ? (r(), d("td", Ut)) : p("", !0),
        u.addNavigation && u.editModeEnabled ? (r(), d("td", At, [
          R("div", Pt, [
            ee(H, {
              palette: "table-nav",
              disabled: u.i === 0,
              onClick: m
            }, {
              default: P(() => [
                w.value ? (r(), y(Q(s.value), {
                  key: 0,
                  direction: "up"
                })) : (r(), d($, { key: 1 }, [
                  B[2] || (B[2] = R("i", { class: "" }, null, -1)),
                  B[3] || (B[3] = le(" UP "))
                ], 64))
              ]),
              _: 1
            }, 8, ["disabled"]),
            ee(H, {
              palette: "table-nav",
              disabled: u.latestRow,
              onClick: S
            }, {
              default: P(() => [
                w.value ? (r(), y(Q(s.value), {
                  key: 0,
                  direction: "down"
                })) : (r(), d($, { key: 1 }, [
                  B[4] || (B[4] = R("i", { class: "" }, null, -1)),
                  B[5] || (B[5] = le(" DOWN "))
                ], 64))
              ]),
              _: 1
            }, 8, ["disabled"])
          ])
        ])) : p("", !0),
        u.displayHiddenColumnsIndicator ? (r(), d("td", {
          key: 3,
          onClick: B[0] || (B[0] = (I) => C(I, u.i)),
          "data-role": "show-more",
          class: x(u.hiddenIsVisible ? "state-open" : "")
        }, null, 2)) : p("", !0),
        (r(!0), d($, null, z(u.visibleColumns, (I) => (r(), d($, null, [
          g($t)(I, u.emptyColumns, n.value) ? (r(), d("td", {
            key: "td" + u.i,
            "data-column": I.key,
            colspan: g(ge)(I, n.value),
            title: g(te)(I, n.value, u.i, u.visibleColumns),
            onClick: (ae) => v(ae, n.value)
          }, [
            u.$slots[I.key] && g(It)(I, n.value) ? A(u.$slots, I.key, {
              key: 0,
              value: n.value[I.key],
              item: n.value,
              column: I,
              i: u.i
            }) : n.value ? (r(), y(qe, {
              key: 1,
              modelValue: n.value,
              "onUpdate:modelValue": B[1] || (B[1] = (ae) => n.value = ae),
              column: I,
              columns: u.visibleColumns,
              "edit-mode-enabled": u.editModeEnabled,
              i: u.i
            }, null, 8, ["modelValue", "column", "columns", "edit-mode-enabled", "i"])) : p("", !0)
          ], 8, Wt)) : p("", !0)
        ], 64))), 256)),
        u.canDrop && u.editModeEnabled ? (r(), d("td", Ht, [
          ee(Mt, {
            resource: u.dropResource,
            "resource-data": n.value,
            confirm: u.dropConfirm,
            text: u.dropText,
            icon: u.dropIcon,
            onClick: E
          }, null, 8, ["resource", "resource-data", "confirm", "text", "icon"])
        ])) : p("", !0),
        u.canEdit && u.editModeEnabled ? (r(), d("td", Kt, [
          ee(Nt, {
            "resource-data": n.value,
            text: u.editText,
            icon: u.editIcon,
            link: l.value,
            onClick: W
          }, null, 8, ["resource-data", "text", "icon", "link"])
        ])) : p("", !0)
      ], 8, Ft);
    };
  }
}), qt = { "data-role": "hidden-row" }, zt = ["colspan"], Gt = ["data-column"], Ot = ["data-i"], Jt = ["data-column", "title", "onClick"], Qt = /* @__PURE__ */ X({
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
  setup(t, { emit: o }) {
    const i = o, a = t, n = b(a.modelValue), l = (v) => i("click", v);
    return U(() => a.modelValue, (v) => n.value = v), U(n, () => i("update:modelValue", n.value)), (v, C) => ne((r(), d("tr", qt, [
      R("td", { colspan: v.hiddenColumnsColSpan }, [
        R("table", null, [
          R("tr", null, [
            (r(!0), d($, null, z(v.hiddenColumns, (k) => (r(), d("th", {
              "data-column": k.key
            }, [
              R("div", null, J(k.label), 1)
            ], 8, Gt))), 256))
          ]),
          R("tr", { "data-i": v.i }, [
            (r(!0), d($, null, z(v.hiddenColumns, (k, w) => (r(), d("td", {
              "data-column": k.key,
              title: g(te)(k, n.value, w, v.hiddenColumns),
              onClick: (s) => l(s, n.value)
            }, [
              v.$slots[k.key] ? A(v.$slots, k.key, {
                key: 0,
                value: n.value[k.key],
                item: n.value,
                column: k,
                i: w
              }) : (r(), y(qe, {
                key: 1,
                column: k,
                columns: v.hiddenColumns,
                modelValue: n.value,
                "onUpdate:modelValue": C[0] || (C[0] = (s) => n.value = s),
                i: w
              }, null, 8, ["column", "columns", "modelValue", "i"]))
            ], 8, Jt))), 256))
          ], 8, Ot)
        ])
      ], 8, zt)
    ], 512)), [
      [ue, v.hiddenIsVisible]
    ]);
  }
}), He = /* @__PURE__ */ X({
  __name: "CreateButton",
  props: {
    disabled: { type: Boolean, default: !1 },
    text: { default: "" },
    icon: { default: "" },
    to: { default: "" }
  },
  emits: ["click"],
  setup(t, { emit: o }) {
    const i = o, a = c(() => T.createButtonSlot !== ""), n = c(() => T.createButtonSlot);
    return (l, v) => {
      const C = j("lkt-button");
      return r(), y(C, {
        palette: "table-create",
        disabled: l.disabled,
        icon: a.value ? "" : l.icon,
        text: a.value ? "" : l.text,
        "on-click-to": l.to,
        onClick: v[0] || (v[0] = (k) => i("click"))
      }, {
        default: P(() => [
          a.value ? (r(), y(Q(n.value), { key: 0 })) : p("", !0)
        ]),
        _: 1
      }, 8, ["disabled", "icon", "text", "on-click-to"]);
    };
  }
}), Xt = ["data-column", "data-sortable", "data-sort", "colspan", "title"], Yt = /* @__PURE__ */ X({
  __name: "TableHeader",
  props: {
    column: { default: () => ({}) },
    sortBy: { default: "" },
    sortDirection: { default: "" },
    amountOfColumns: { default: 0 },
    items: { default: () => [] }
  },
  emits: ["click"],
  setup(t, { emit: o }) {
    const i = o, a = t, n = c(() => Tt(a.column, a.amountOfColumns, a.items)), l = c(() => a.column.sortable === !0), v = c(() => l.value && a.sortBy === a.column.key ? a.sortDirection : ""), C = c(() => a.column.label.startsWith("__:") ? re(a.column.label.substring(3)) : a.column.label), k = () => i("click", a.column);
    return (w, s) => (r(), d("th", {
      "data-column": w.column.key,
      "data-sortable": l.value,
      "data-sort": v.value,
      colspan: n.value,
      title: C.value,
      onClick: k
    }, [
      R("div", null, J(C.value), 1)
    ], 8, Xt));
  }
}), Zt = ["id"], _t = { class: "lkt-table-page-buttons" }, xt = { key: 1 }, el = { class: "switch-edition-mode" }, tl = {
  key: 0,
  class: "lkt-table-page-buttons"
}, ll = {
  key: 1,
  class: "lkt-table-page-filters"
}, al = ["data-sortable"], ol = { key: 0 }, nl = {
  key: 0,
  "data-role": "drag-indicator"
}, ul = { key: 1 }, rl = { key: 2 }, il = {
  key: 3,
  class: "lkt-table-col-drop"
}, sl = {
  key: 4,
  class: "lkt-table-col-edit"
}, dl = ["id"], cl = {
  key: 0,
  class: "lkt-table-item"
}, fl = {
  key: 3,
  class: "lkt-table-empty"
}, ml = {
  key: 4,
  class: "lkt-table-page-buttons lkt-table-page-buttons-bottom"
}, pl = /* @__PURE__ */ X({
  __name: "LktTable",
  props: {
    modelValue: { default: () => [] },
    columns: { default: () => [] },
    sorter: { type: Function, default: We },
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
  setup(t, { expose: o, emit: i }) {
    const a = i, n = ht(), l = t, v = {}, C = b(typeof l.sorter == "function" ? l.sorter : We), k = b(Rt(l.columns)), w = b("asc"), s = b(l.modelValue), m = b(v), S = b(null), E = b(l.columns), W = b(l.page), u = b(!1), B = b(!1), H = b(l.perms), I = b(null), ae = b({}), _ = b(new Bt({ items: s.value }, l.dataStateConfig)), L = b(l.editMode), oe = b(0), ze = (e) => {
      Array.isArray(e) && (s.value = e), u.value = !1, B.value = !0, _.value.store({ items: s.value }).turnStoredIntoOriginal();
    }, Ge = (e) => {
      H.value = e;
    }, Oe = (e) => {
    }, Je = (e) => {
      a("read-response", e);
    }, Qe = () => Ue(() => u.value = !0), Xe = () => {
      I.value.doRefresh();
    }, ie = St(12), me = c(() => {
      if (!l.hideEmptyColumns) return [];
      let e = [];
      return E.value.forEach((f) => {
        let h = f.key, F = !1;
        s.value.forEach((G) => {
          if (typeof G.checkEmpty == "function")
            return G.checkEmpty(G);
          G[h] && (F = !0);
        }), F || e.push(h);
      }), e;
    }), se = c(() => E.value.filter((e) => !e.hidden)), pe = c(() => E.value.filter((e) => e.hidden)), Ye = c(() => {
      let e = se.value.length + 1;
      return l.sortable && ++e, e;
    }), Ze = c(() => E.value.filter((e) => e.isForRowKey)), Ce = c(() => pe.value.length > 0 && !l.sortable), _e = c(() => E.value.map((e) => e.key)), Se = c(() => {
      let e = [];
      for (let f in n) _e.value.indexOf(f) !== -1 && e.push(f);
      return e;
    }), Be = c(() => l.hiddenSave || u.value || !l.saveResource ? !1 : L.value && _.value.changed() ? !0 : L.value), xe = c(() => de.value && s.value.length >= l.requiredItemsForTopCreate || l.switchEditionEnabled ? !0 : Be.value || L.value && l.canCreate), et = c(() => l.saveDisabled || typeof l.saveValidator == "function" && !l.saveValidator(s.value) ? !1 : _.value.changed()), tt = c(() => s.value.length), lt = c(() => ({
      items: s.value,
      ...l.saveResourceData
    })), at = c(() => l.titleTag === "" ? "h2" : l.titleTag), ot = c(() => l.wrapContentTag === "" ? "div" : l.wrapContentTag), ve = c(() => l.title.startsWith("__:") ? re(l.title.substring(3)) : l.title), nt = c(() => l.saveText.startsWith("__:") ? re(l.saveText.substring(3)) : l.saveText), ut = c(() => l.editModeText.startsWith("__:") ? re(l.editModeText.substring(3)) : l.editModeText), Ve = c(() => H.value.includes("create")), rt = c(() => H.value.includes("read")), ke = c(() => H.value.includes("update")), be = c(() => H.value.includes("drop")), it = (e) => {
      let f = e.target;
      if (typeof f.dataset.column > "u")
        do
          f = f.parentNode;
        while (typeof f.dataset.column > "u" && f.tagName !== "TABLE" && f.tagName !== "body");
      if (f.tagName === "TD" && (f = f.parentNode, f = f.dataset.i, typeof f < "u"))
        return s.value[f];
    }, we = (e) => m.value["tr_" + e] === !0, Ee = (e) => {
      e && e.sortable && (s.value = s.value.sort((f, h) => C.value(f, h, e, w.value)), w.value = w.value === "asc" ? "desc" : "asc", k.value = e.key, a("sort", [k.value, w.value]));
    }, De = (e) => {
      a("click", e);
    }, Te = (e, f) => {
      let h = "tr_" + f;
      m.value[h] = typeof m.value[h] > "u" ? !0 : !m.value[h];
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
      u.value = !0;
    }, ct = () => {
      u.value = !1;
    }, ft = (e, f) => {
      if (a("before-save"), l.saveResource && (u.value = !1, !f.success)) {
        a("error", f.httpStatus);
        return;
      }
      _.value.turnStoredIntoOriginal(), a("save", f);
    }, Re = (e, f, h) => {
      if (h >= e.length) {
        let F = h - e.length + 1;
        for (; F--; ) e.push(void 0);
      }
      return e.splice(h, 0, e.splice(f, 1)[0]), e;
    }, mt = (e) => {
      Re(s.value, e, e - 1), oe.value = fe();
    }, pt = (e) => {
      Re(s.value, e, e + 1), oe.value = fe();
    }, Le = (e) => {
      s.value.splice(e, 1), oe.value = fe();
    }, vt = () => {
      let e = document.getElementById("lkt-table-body-" + ie);
      ae.value = new Vt(e, {
        direction: "vertical",
        handle: ".handle",
        animation: 150,
        onEnd: function(f) {
          let h = f.oldIndex, F = f.newIndex;
          s.value.splice(F, 0, s.value.splice(h, 1)[0]), oe.value = fe();
        },
        onMove: function(f, h) {
          return st(f);
        }
      });
    }, Me = (e, f, h = !1) => {
      let F = [oe.value, ie, "row", f];
      return h && F.push("hidden"), Ze.value.forEach((G) => {
        let O = String(e[G.key]).toLowerCase();
        O.length > 50 && (O = O.substring(0, 50)), O = je(O, " ", "-"), F.push(O);
      }), F.join("-");
    }, Ne = c(() => typeof l.createEnabledValidator == "function" ? l.createEnabledValidator({ items: s.value }) : !0), de = c(() => Ve.value ? l.canCreateWithoutEdition || l.canCreate && L.value : !1), Fe = (e) => typeof l.itemDisplayChecker == "function" ? l.itemDisplayChecker(e) : !0;
    gt(() => {
      l.initialSorting && Ee(Lt(l.columns, k.value)), _.value.store({ items: s.value }).turnStoredIntoOriginal(), l.sortable && Ue(() => {
        vt();
      });
    }), U(() => l.perms, (e) => H.value = e), U(H, (e) => a("update:perms", e)), U(() => l.editMode, (e) => L.value = e), U(() => l.columns, (e) => E.value = e), U(() => l.modelValue, (e) => s.value = e), U(s, (e) => {
      _.value.increment({ items: e }), a("update:modelValue", e);
    }, { deep: !0 }), o({
      getItemByEvent: it,
      doRefresh: Xe
    });
    const kt = c(() => typeof T.defaultEmptySlot < "u"), bt = c(() => T.defaultEmptySlot);
    return (e, f) => {
      const h = j("lkt-button"), F = j("lkt-field-switch"), G = j("lkt-loader"), O = j("lkt-paginator");
      return r(), d("section", {
        class: "lkt-table-page",
        id: "lkt-table-page-" + g(ie)
      }, [
        ve.value || g(n).title ? (r(), d("header", {
          key: 0,
          class: x(e.headerClass)
        }, [
          ve.value ? (r(), y(Q(at.value), { key: 0 }, {
            default: P(() => [
              e.titleIcon ? (r(), d("i", {
                key: 0,
                class: x(e.titleIcon)
              }, null, 2)) : p("", !0),
              le(" " + J(ve.value), 1)
            ]),
            _: 1
          })) : p("", !0),
          g(n).title ? A(e.$slots, "title", { key: 1 }) : p("", !0)
        ], 2)) : p("", !0),
        (r(), y(Q(ot.value), {
          class: x(["lkt-table-page-content-wrapper", e.wrapContentClass])
        }, {
          default: P(() => [
            ne(R("div", _t, [
              ne(ee(h, {
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
                default: P(() => [
                  g(n)["button-save"] ? A(e.$slots, "button-save", {
                    key: 0,
                    items: s.value,
                    editMode: e.editMode,
                    canUpdate: !e.saveDisabled
                  }) : (r(), d("span", xt, J(nt.value), 1))
                ]),
                _: 3
              }, 8, ["disabled", "confirm-modal", "confirm-data", "resource", "resource-data"]), [
                [ue, Be.value]
              ]),
              de.value && s.value.length >= e.requiredItemsForTopCreate ? (r(), y(He, {
                key: 0,
                disabled: !Ne.value || e.createDisabled,
                text: e.createText,
                icon: e.createIcon,
                to: e.createRoute,
                onClick: $e
              }, null, 8, ["disabled", "text", "icon", "to"])) : p("", !0),
              R("div", el, [
                ne(ee(F, {
                  modelValue: L.value,
                  "onUpdate:modelValue": f[0] || (f[0] = (D) => L.value = D),
                  label: ut.value
                }, null, 8, ["modelValue", "label"]), [
                  [ue, e.switchEditionEnabled]
                ])
              ])
            ], 512), [
              [ue, xe.value]
            ]),
            g(n).buttons ? (r(), d("div", tl, [
              A(e.$slots, "buttons")
            ])) : p("", !0),
            B.value && g(n).filters ? (r(), d("div", ll, [
              A(e.$slots, "filters", {
                items: s.value,
                isLoading: u.value
              })
            ])) : p("", !0),
            u.value ? (r(), y(G, { key: 2 })) : p("", !0),
            ne(R("div", {
              class: "lkt-table",
              "data-sortable": e.sortable
            }, [
              e.itemMode ? (r(), d("div", {
                key: 1,
                class: x(["lkt-table-items-container", e.itemsContainerClass])
              }, [
                (r(!0), d($, null, z(s.value, (D, K) => (r(), d($, null, [
                  Fe(D) ? (r(), d("div", cl, [
                    A(e.$slots, "item", he({
                      [e.slotItemVar || ""]: D,
                      index: K,
                      canCreate: Ve.value,
                      canRead: rt.value,
                      canUpdate: ke.value,
                      canDrop: be.value,
                      isLoading: u.value,
                      doDrop: () => Le(K)
                    }))
                  ])) : p("", !0)
                ], 64))), 256))
              ], 2)) : (r(), d("table", ol, [
                R("thead", null, [
                  R("tr", null, [
                    e.sortable && L.value ? (r(), d("th", nl)) : p("", !0),
                    e.addNavigation && L.value ? (r(), d("th", ul)) : p("", !0),
                    Ce.value ? (r(), d("th", rl)) : p("", !0),
                    (r(!0), d($, null, z(se.value, (D) => (r(), d($, null, [
                      me.value.indexOf(D.key) === -1 ? (r(), y(Yt, {
                        key: 0,
                        column: D,
                        "sort-by": k.value,
                        "sort-direction": w.value,
                        "amount-of-columns": e.columns.length,
                        items: s.value,
                        onClick: (K) => Ee(D)
                      }, null, 8, ["column", "sort-by", "sort-direction", "amount-of-columns", "items", "onClick"])) : p("", !0)
                    ], 64))), 256)),
                    e.canDrop && be.value && L.value ? (r(), d("th", il)) : p("", !0),
                    e.canEditButton && ke.value && L.value ? (r(), d("th", sl)) : p("", !0)
                  ])
                ]),
                R("tbody", {
                  ref: (D) => S.value = D,
                  id: "lkt-table-body-" + g(ie)
                }, [
                  (r(!0), d($, null, z(s.value, (D, K) => (r(), d($, null, [
                    Fe(D) ? (r(), y(jt, {
                      modelValue: s.value[K],
                      "onUpdate:modelValue": (Y) => s.value[K] = Y,
                      key: Me(D, K),
                      i: K,
                      "display-hidden-columns-indicator": Ce.value,
                      "is-draggable": Ie(D),
                      sortable: e.sortable,
                      "visible-columns": se.value,
                      "empty-columns": me.value,
                      "add-navigation": e.addNavigation,
                      "hidden-is-visible": we(K),
                      "latest-row": K + 1 === tt.value,
                      "can-drop": e.canDrop && be.value && L.value,
                      "drop-confirm": e.dropConfirm,
                      "drop-resource": e.dropResource,
                      "drop-text": e.dropText,
                      "drop-icon": e.dropIcon,
                      "can-edit": e.canEditButton && ke.value && L.value,
                      "edit-text": e.editText,
                      "edit-icon": e.editIcon,
                      "edit-link": e.editLink,
                      "edit-mode-enabled": L.value,
                      onClick: De,
                      onShow: Te,
                      onItemUp: mt,
                      onItemDown: pt,
                      onItemDrop: Le
                    }, Ae({ _: 2 }, [
                      z(Se.value, (Y) => ({
                        name: Y,
                        fn: P((q) => [
                          A(e.$slots, Y, he({
                            [e.slotItemVar || ""]: q.item,
                            value: q.value,
                            column: q.column
                          }))
                        ])
                      }))
                    ]), 1032, ["modelValue", "onUpdate:modelValue", "i", "display-hidden-columns-indicator", "is-draggable", "sortable", "visible-columns", "empty-columns", "add-navigation", "hidden-is-visible", "latest-row", "can-drop", "drop-confirm", "drop-resource", "drop-text", "drop-icon", "can-edit", "edit-text", "edit-icon", "edit-link", "edit-mode-enabled"])) : p("", !0),
                    pe.value.length > 0 ? (r(!0), d($, { key: 1 }, z(s.value, (Y, q) => (r(), y(Qt, {
                      modelValue: s.value[q],
                      "onUpdate:modelValue": (ce) => s.value[q] = ce,
                      key: Me(Y, q, !0),
                      i: q,
                      "hidden-columns": pe.value,
                      "hidden-columns-col-span": Ye.value,
                      "is-draggable": Ie(Y),
                      sortable: e.sortable,
                      "visible-columns": se.value,
                      "empty-columns": me.value,
                      "hidden-is-visible": we(q),
                      onClick: De,
                      onShow: Te
                    }, Ae({ _: 2 }, [
                      z(Se.value, (ce) => ({
                        name: ce,
                        fn: P((ye) => [
                          A(e.$slots, ce, he({
                            [e.slotItemVar || ""]: ye.item,
                            value: ye.value,
                            column: ye.column
                          }))
                        ])
                      }))
                    ]), 1032, ["modelValue", "onUpdate:modelValue", "i", "hidden-columns", "hidden-columns-col-span", "is-draggable", "sortable", "visible-columns", "empty-columns", "hidden-is-visible"]))), 128)) : p("", !0)
                  ], 64))), 256))
                ], 8, dl)
              ]))
            ], 8, al), [
              [ue, !u.value && s.value.length > 0]
            ]),
            !u.value && s.value.length === 0 ? (r(), d("div", fl, [
              g(n).empty ? A(e.$slots, "empty", { key: 0 }) : kt.value ? (r(), y(Q(bt.value), {
                key: 1,
                message: e.noResultsText
              }, null, 8, ["message"])) : e.noResultsText ? (r(), d($, { key: 2 }, [
                le(J(e.noResultsText), 1)
              ], 64)) : p("", !0)
            ])) : p("", !0),
            de.value || g(n).bottomButtons ? (r(), d("div", ml, [
              de.value && s.value.length >= e.requiredItemsForBottomCreate ? (r(), y(He, {
                key: 0,
                disabled: !Ne.value || e.createDisabled,
                text: e.createText,
                icon: e.createIcon,
                to: e.createRoute,
                onClick: $e
              }, null, 8, ["disabled", "text", "icon", "to"])) : p("", !0),
              A(e.$slots, "bottom-buttons")
            ])) : p("", !0),
            e.resource.length > 0 ? (r(), y(O, {
              key: 5,
              ref_key: "paginator",
              ref: I,
              modelValue: W.value,
              "onUpdate:modelValue": f[1] || (f[1] = (D) => W.value = D),
              resource: e.resource,
              filters: e.filters,
              onResults: ze,
              onLoading: Qe,
              onPerms: Ge,
              onCustom: Oe,
              onResponse: Je
            }, null, 8, ["modelValue", "resource", "filters"])) : p("", !0)
          ]),
          _: 3
        }, 8, ["class"]))
      ], 8, Zt);
    };
  }
}), Pl = {
  install: (t) => {
    t.component("lkt-loader") === void 0 && t.use(wt), t.component("lkt-button") === void 0 && t.use(Et), t.component("lkt-paginator") === void 0 && t.use(Dt), t.component("lkt-field") === void 0 && t.use(Ct), t.component("lkt-table") === void 0 && t.component("lkt-table", pl);
  }
}, Wl = (t) => (T.navButtonSlot = t, !0), Hl = (t) => (T.dropButtonSlot = t, !0), Kl = (t) => (T.createButtonSlot = t, !0), jl = (t) => {
  T.defaultEmptySlot = t;
};
export {
  M as LktTableColumn,
  Dl as createActionColumn,
  Ml as createCheckColumn,
  wl as createColumn,
  Rl as createEmailColumn,
  Ul as createFileColumn,
  $l as createFloatColumn,
  Al as createHiddenColumn,
  Il as createIntegerColumn,
  El as createLinkColumn,
  Fl as createSelectColumn,
  Nl as createSwitchColumn,
  Ll as createTelColumn,
  Tl as createTextColumn,
  Pl as default,
  Kl as setTableCreateButtonSlot,
  Hl as setTableDropButtonSlot,
  jl as setTableEmptySlot,
  Wl as setTableNavButtonSlot
};
