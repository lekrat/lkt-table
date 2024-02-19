import { reactive as L, defineComponent as M, ref as C, watch as D, nextTick as oe, resolveComponent as N, openBlock as a, createBlock as k, withCtx as F, createTextVNode as Z, toDisplayString as R, unref as S, createElementBlock as h, Fragment as A, createCommentVNode as $, normalizeClass as ue, renderList as I, renderSlot as x, withDirectives as se, createElementVNode as E, vShow as re, useSlots as de, computed as T, onMounted as ce, createSlots as Q } from "vue";
import me from "vuedraggable";
import { httpCall as fe } from "lkt-http-client";
import { createLktEvent as W } from "lkt-events";
import { generateRandomString as he } from "lkt-string-tools";
import ye from "lkt-field-check";
import ve from "lkt-field-text";
import ke from "lkt-field-switch";
import be from "lkt-field-select";
import ge from "lkt-loader";
class w {
    constructor(t = "", l = "") {
        this.key = t, this.label = l, this.sortable = !0, this.hidden = !1, this.formatter = void 0, this.checkEmpty = void 0, this.colspan = void 0, this.resource = "", this.resourceData = {}, this.isMultiple = !1, this.isLoading = !1, this.resourceLoaded = !1, this.valueSlot = "", this.editSlot = "", this.multipleDisplay = "", this.multipleDisplayEdition = "";
    }
    setIsSortable(t = !0) {
        return this.sortable = t, this;
    }
    setIsEditable(t = !0) {
        return this.editable = t, this;
    }
    setIsHidden(t = !0) {
        return this.hidden = t, this;
    }
    setIsLoading(t = !0) {
        return this.isLoading = t, this;
    }
    setFormatter(t = void 0) {
        return this.formatter = t, this;
    }
    setEmptyChecker(t = void 0) {
        return this.checkEmpty = t, this;
    }
    setColSpan(t = void 0) {
        return this.colspan = void 0, this;
    }
    getHref(t) {
        return typeof this.link == "function" ? this.link(t) : this.link;
    }
    doAction(t) {
        if (typeof this.action == "function")
            return this.action(t);
        console.warn("No action defined");
    }
    defineAsLink(t) {
        return this.type = "link", this.link = t, this;
    }
    defineAsText() {
        return this.type = "text", this;
    }
    defineAsEmail() {
        return this.type = "email", this;
    }
    defineAsTel() {
        return this.type = "tel", this;
    }
    defineAsInt() {
        return this.type = "int", this;
    }
    defineAsFloat() {
        return this.type = "float", this;
    }
    defineAsCheck() {
        return this.type = "check", this;
    }
    defineAsSwitch() {
        return this.type = "switch", this;
    }
    defineAsAction(t) {
        return this.type = "action", this.action = t, this;
    }
    defineAsSelect(t) {
        return this.type = "select", this.options = t, this;
    }
    showLoading() {
        return this.resource !== "" && !this.resourceLoaded;
    }
    hasToLoadResource() {
        return this.resource !== "" && !this.resourceLoaded && !this.isLoading;
    }
    setIsMultiple(t = !0) {
        return this.isMultiple = t, this;
    }
    setResource(t) {
        return this.resource = t, this;
    }
    setResourceData(t) {
        return this.resourceData = t, this;
    }
    async loadResource() {
        if (this.resourceLoaded)
            return this;
        if (!this.resource)
            return this;
        try {
            this.isLoading = !0;
            const t = await fe(this.resource, this.resourceData);
            this.options = t.data, this.isLoading = !1, this.resourceLoaded = !0;
        }
        catch {
            this.isLoading = !1;
        }
        return this;
    }
    setEditSlot(t) {
        return this.editSlot = t, this;
    }
    setValueSlot(t) {
        return this.valueSlot = t, this;
    }
    setMultipleDisplay(t) {
        return this.multipleDisplay = t, this;
    }
    setMultipleDisplayEdition(t) {
        return this.multipleDisplayEdition = t, this;
    }
}
const tt = (e, t, l = !0) => L(new w(e, t).setIsSortable(l)), lt = (e, t, l, n = !0) => L(new w(e, t).setIsSortable(n).defineAsLink(l)), it = (e, t, l, n = !0) => L(new w(e, t).setIsSortable(n).defineAsAction(l)), at = (e, t, l = !0) => L(new w(e, t).setIsSortable(l).defineAsText()), nt = (e, t, l = !0) => L(new w(e, t).setIsSortable(l).defineAsEmail()), ot = (e, t, l = !0) => L(new w(e, t).setIsSortable(l).defineAsTel()), ut = (e, t, l = !0) => L(new w(e, t).setIsSortable(l).defineAsCheck()), st = (e, t, l = !0) => L(new w(e, t).setIsSortable(l).defineAsSwitch()), rt = (e, t, l, n = !0) => L(new w(e, t).setIsSortable(n).defineAsSelect(l)), dt = (e, t, l = !0) => L(new w(e, t).setIsSortable(l).setIsHidden(!0)), _ = (e, t, l, n) => {
    if (!l)
        return 0;
    let u = e[l.key], i = t[l.key];
    if (n === "asc") {
        if (u > i)
            return 1;
        if (i > u)
            return -1;
    }
    else {
        if (u > i)
            return -1;
        if (i > u)
            return 1;
    }
    return 0;
}, O = (e, t, l) => e.formatter && typeof e.formatter == "function" ? e.formatter(t[e.key], t, e, l) : t[e.key], Ce = (e, t, l) => {
    if (!e.colspan)
        return -1;
    let n = t;
    return l.forEach((u) => {
        let i = X(e, u);
        i > 0 && i < n && (n = i);
    }), n;
}, X = (e, t) => e.colspan === !1 ? !1 : typeof e.colspan == "function" ? e.colspan(t) : e.colspan, Se = (e, t, l) => {
    if (typeof e != "object" || !e.key || t.indexOf(e.key) > -1)
        return !1;
    let n = X(e, l);
    return typeof e.colspan > "u" ? !0 : (typeof e.colspan < "u" && (typeof e.colspan == "function" ? n = parseInt(e.colspan()) : n = parseInt(e.colspan)), n > 0);
}, pe = (e = []) => {
    if (e.length > 0) {
        for (let t = 0; t < e.length; ++t)
            if (e[t].sortable)
                return e[t].key;
    }
    return "";
}, Ve = (e, t) => {
    if (e.length > 0) {
        for (let l = 0; l < e.length; ++l)
            if (e[l].key === t)
                return e[l];
    }
    return null;
}, Ae = { name: "LktTableCell", inheritAttrs: !1 }, te = /* @__PURE__ */ M({
    ...Ae,
    props: {
        modelValue: { type: Object, default: () => ({}) },
        column: { type: Object, default: () => ({}) },
        i: { type: [Number], default: 0 }
    },
    emits: ["edited"],
    setup(e, { emit: t }) {
        const l = t, n = e, u = C(n.modelValue), i = C(u.value[n.column.key]), y = C(null), p = C(n.column.showLoading());
        return D(i, () => {
            const s = JSON.parse(JSON.stringify(u.value));
            s[n.column.key] = i.value, l("edited", s, n.i);
        }), D(() => n.modelValue, (s) => {
            u.value = s, i.value = u.value[n.column.key];
        }), D(() => n.column, () => {
            n.column.resourceLoaded && oe(() => p.value = !1);
        }, { deep: !0 }), n.column.hasToLoadResource() && n.column.loadResource(), (s, r) => {
            const d = N("router-link"), g = N("lkt-field-text"), U = N("lkt-field-check"), H = N("lkt-field-switch"), K = N("lkt-loader"), B = N("lkt-field-select");
            return e.column.type === "link" ? (a(), k(d, {
                key: 0,
                to: e.column.getHref(u.value)
            }, {
                default: F(() => [
                    Z(R(S(O)(e.column, u.value, e.i)), 1)
                ]),
                _: 1
            }, 8, ["to"])) : e.column.type === "action" ? (a(), h("a", {
                key: 1,
                href: "#",
                onClick: r[0] || (r[0] = (f) => e.column.doAction(u.value))
            }, R(S(O)(e.column, u.value, e.i)), 1)) : e.column.type === "text" ? (a(), k(g, {
                key: 2,
                "read-mode": !e.column.editable,
                ref: (f) => y.value = f,
                "edit-slot": e.column.editSlot,
                "value-slot": e.column.valueSlot,
                modelValue: i.value,
                "onUpdate:modelValue": r[1] || (r[1] = (f) => i.value = f)
            }, null, 8, ["read-mode", "edit-slot", "value-slot", "modelValue"])) : e.column.type === "email" ? (a(), k(g, {
                key: 3,
                "read-mode": !e.column.editable,
                ref: (f) => y.value = f,
                "edit-slot": e.column.editSlot,
                "value-slot": e.column.valueSlot,
                "is-email": "",
                modelValue: i.value,
                "onUpdate:modelValue": r[2] || (r[2] = (f) => i.value = f)
            }, null, 8, ["read-mode", "edit-slot", "value-slot", "modelValue"])) : e.column.type === "tel" ? (a(), k(g, {
                key: 4,
                "read-mode": !e.column.editable,
                ref: (f) => y.value = f,
                "edit-slot": e.column.editSlot,
                "value-slot": e.column.valueSlot,
                "is-tel": "",
                modelValue: i.value,
                "onUpdate:modelValue": r[3] || (r[3] = (f) => i.value = f)
            }, null, 8, ["read-mode", "edit-slot", "value-slot", "modelValue"])) : e.column.type === "check" ? (a(), k(U, {
                key: 5,
                "read-mode": !e.column.editable,
                ref: (f) => y.value = f,
                modelValue: i.value,
                "onUpdate:modelValue": r[4] || (r[4] = (f) => i.value = f)
            }, null, 8, ["read-mode", "modelValue"])) : e.column.type === "switch" ? (a(), k(H, {
                key: 6,
                "read-mode": !e.column.editable,
                ref: (f) => y.value = f,
                modelValue: i.value,
                "onUpdate:modelValue": r[5] || (r[5] = (f) => i.value = f)
            }, null, 8, ["read-mode", "modelValue"])) : e.column.type === "select" ? (a(), h(A, { key: 7 }, [
                p.value ? (a(), k(K, { key: 0 })) : (a(), k(B, {
                    key: 1,
                    "read-mode": !e.column.editable,
                    ref: (f) => y.value = f,
                    modelValue: i.value,
                    "onUpdate:modelValue": r[6] || (r[6] = (f) => i.value = f),
                    resource: e.column.resource,
                    "resource-data": e.column.resourceData,
                    options: e.column.options,
                    multiple: e.column.isMultiple,
                    "multiple-display": e.column.multipleDisplay,
                    "multiple-display-edition": e.column.multipleDisplayEdition
                }, null, 8, ["read-mode", "modelValue", "resource", "resource-data", "options", "multiple", "multiple-display", "multiple-display-edition"]))
            ], 64)) : (a(), h(A, { key: 8 }, [
                Z(R(S(O)(e.column, u.value, e.i)), 1)
            ], 64));
        };
    }
}), Le = ["data-i", "data-handle-drag"], we = {
    key: 0,
    "data-role": "drag-indicator"
}, Ie = {
    key: 1,
    "data-role": "invalid-drag-indicator"
}, $e = ["data-column", "colspan", "title", "onClick"], Ee = { name: "LktTableRow", inheritAttrs: !1 }, ee = /* @__PURE__ */ M({
    ...Ee,
    props: {
        isDraggable: { type: Boolean, default: !0 },
        sortable: { type: Boolean, default: !0 },
        i: { type: [Number], default: 0 },
        displayHiddenColumnsIndicator: { type: Boolean, default: !1 },
        visibleColumns: { type: Array, default: () => [] },
        emptyColumns: { type: Array, default: () => [] },
        hiddenIsVisible: { type: Boolean, default: !1 },
        item: { type: Object, default: () => ({}) }
    },
    emits: ["edited", "click", "show"],
    setup(e, { emit: t }) {
        const l = t, n = e, u = C(n.item), i = (s, r, d) => {
            l("click", s, W("", { item: r, column: d }));
        }, y = (s, r) => {
            l("show", s, W("", { i: r }));
        }, p = (s, r) => {
            u.value = s;
        };
        return D(() => n.item, (s) => u.value = s), D(u, () => l("edited", u.value, n.i)), (s, r) => (a(), h("tr", {
            "data-i": e.i,
            "data-handle-drag": e.isDraggable
        }, [
            e.sortable && e.isDraggable ? (a(), h("td", we)) : e.sortable ? (a(), h("td", Ie)) : $("", !0),
            e.displayHiddenColumnsIndicator ? (a(), h("td", {
                key: 2,
                onClick: r[0] || (r[0] = (d) => y(d, e.i)),
                "data-role": "show-more",
                class: ue(e.hiddenIsVisible ? "state-open" : "")
            }, null, 2)) : $("", !0),
            (a(!0), h(A, null, I(e.visibleColumns, (d) => (a(), h(A, null, [
                S(Se)(d, e.emptyColumns, e.item) ? (a(), h("td", {
                    key: 0,
                    "data-column": d.key,
                    colspan: S(X)(d, e.item),
                    title: S(O)(d, e.item, e.i),
                    onClick: (g) => i(g, e.item, d)
                }, [
                    s.$slots[d.key] ? x(s.$slots, d.key, {
                        key: 0,
                        value: e.item[d.key],
                        item: e.item,
                        column: d,
                        i: e.i
                    }) : e.item ? (a(), k(te, {
                        key: 1,
                        column: d,
                        modelValue: u.value,
                        "onUpdate:modelValue": r[1] || (r[1] = (g) => u.value = g),
                        i: e.i,
                        onEdited: p
                    }, null, 8, ["column", "modelValue", "i"])) : $("", !0)
                ], 8, $e)) : $("", !0)
            ], 64))), 256))
        ], 8, Le));
    }
}), De = { "data-role": "hidden-row" }, Te = ["colspan"], Be = ["data-column"], Ne = ["data-i"], xe = ["data-column", "title", "onClick"], He = { name: "LktHiddenRow", inheritAttrs: !1 }, Fe = /* @__PURE__ */ M({
    ...He,
    props: {
        isDraggable: { type: Boolean, default: !0 },
        sortable: { type: Boolean, default: !0 },
        i: { type: [Number], default: 0 },
        hiddenColumnsColSpan: { type: Number, default: 0 },
        visibleColumns: { type: Array, default: () => [] },
        hiddenColumns: { type: Array, default: () => [] },
        emptyColumns: { type: Array, default: () => [] },
        hiddenIsVisible: { type: Boolean, default: !1 },
        modelValue: { type: Object, default: () => ({}) }
    },
    emits: ["update:modelValue", "click"],
    setup(e, { emit: t }) {
        const l = t, n = e, u = C(n.modelValue), i = (y, p, s) => {
            l("click", y, W("", { item: p, column: s }));
        };
        return D(() => n.modelValue, (y) => u.value = y), D(u, () => l("update:modelValue", u.value)), (y, p) => se((a(), h("tr", De, [
            E("td", { colspan: e.hiddenColumnsColSpan }, [
                E("table", null, [
                    E("tr", null, [
                        (a(!0), h(A, null, I(e.hiddenColumns, (s) => (a(), h("th", {
                            "data-column": s.key
                        }, [
                            E("div", null, R(s.label), 1)
                        ], 8, Be))), 256))
                    ]),
                    E("tr", { "data-i": e.i }, [
                        (a(!0), h(A, null, I(e.hiddenColumns, (s, r) => (a(), h("td", {
                            "data-column": s.key,
                            title: S(O)(s, u.value, r),
                            onClick: (d) => i(d, u.value, s)
                        }, [
                            y.$slots[s.key] ? x(y.$slots, s.key, {
                                key: 0,
                                value: u.value[s.key],
                                item: u.value,
                                column: s,
                                i: r
                            }) : (a(), k(te, {
                                key: 1,
                                column: s,
                                modelValue: u.value,
                                "onUpdate:modelValue": p[0] || (p[0] = (d) => u.value = d),
                                i: r
                            }, null, 8, ["column", "modelValue", "i"]))
                        ], 8, xe))), 256))
                    ], 8, Ne)
                ])
            ], 8, Te)
        ], 512)), [
            [re, e.hiddenIsVisible]
        ]);
    }
}), Re = ["data-sortable"], Oe = {
    key: 0,
    "data-role": "drag-indicator"
}, Ue = { key: 1 }, Me = ["data-column", "data-sortable", "data-sort", "colspan", "title", "onClick"], Ke = { key: 1 }, je = {
    key: 1,
    class: "lkt-empty-table"
}, ze = { name: "LktTable", inheritAttrs: !1 }, Je = /* @__PURE__ */ M({
    ...ze,
    props: {
        modelValue: { type: Array, default: () => [] },
        columns: { type: Array, default: () => [] },
        sorter: { type: Function, default: _ },
        sortable: { type: Boolean, default: !1 },
        hideEmptyColumns: { type: Boolean, default: !1 },
        draggableChecker: { type: Function, default: (e) => !0 },
        checkValidDrag: { type: Function, default: (e) => !0 },
        draggableItemKey: { type: String, default: "name" }
    },
    emits: ["update:modelValue", "sort", "click"],
    setup(e, { expose: t, emit: l }) {
        const n = l, u = de(), i = e, y = {}, p = C(typeof i.sorter == "function" ? i.sorter : _), s = C(pe(i.columns)), r = C("asc"), d = C(i.modelValue), g = C(y), U = C(!1), H = he(12), K = T(() => d.value.length > 0), B = T(() => {
            if (!i.hideEmptyColumns)
                return [];
            let o = [];
            return i.columns.forEach((c) => {
                let m = c.key, v = !1;
                d.value.forEach((b) => {
                    if (typeof b.checkEmpty == "function")
                        return b.checkEmpty(b);
                    b[m] && (v = !0);
                }), v || o.push(m);
            }), o;
        }), f = T(() => i.columns.filter((o) => !o.hidden)), j = T(() => i.columns.filter((o) => o.hidden)), le = T(() => {
            let o = f.value.length + 1;
            return i.sortable && ++o, o;
        }), z = T(() => j.value.length > 0 && !i.sortable), ie = T(() => i.columns.map((o) => o.key)), J = T(() => {
            let o = [];
            for (let c in u)
                ie.value.indexOf(c) !== -1 && o.push(c);
            return o;
        }), ae = (o) => {
            let c = o.target;
            if (typeof c.dataset.column > "u")
                do
                    c = c.parentNode;
                while (typeof c.dataset.column > "u" && c.tagName !== "TABLE" && c.tagName !== "body");
            if (c.tagName === "TD" && (c = c.parentNode, c = c.dataset.i, typeof c < "u"))
                return d.value[c];
        }, q = (o) => g.value["tr_" + o] === !0, Y = (o) => {
            o && o.sortable && (d.value = d.value.sort((c, m) => p.value(c, m, o, r.value)), r.value = r.value === "asc" ? "desc" : "asc", s.value = o.key, n("sort", [s.value, r.value]));
        }, G = (o, c) => {
            n("click", o, c);
        }, P = (o, c) => {
            let m = "tr_" + c.value.i;
            g.value[m] = typeof g.value[m] > "u" ? !0 : !g.value[m];
        }, ne = (o, c) => {
            d.value[c] = o;
        };
        return ce(() => {
            Y(Ve(i.columns, s.value));
        }), D(() => i.modelValue, (o) => d.value = o), D(d, (o) => {
            n("update:modelValue", o);
        }), t({ getItemByEvent: ae }), (o, c) => K.value ? (a(), h("div", {
            key: 0,
            class: "lkt-table",
            "data-sortable": e.sortable
        }, [
            E("table", null, [
                E("thead", null, [
                    E("tr", null, [
                        e.sortable ? (a(), h("th", Oe)) : $("", !0),
                        z.value ? (a(), h("th", Ue)) : $("", !0),
                        (a(!0), h(A, null, I(f.value, (m) => (a(), h(A, null, [
                            B.value.indexOf(m.key) === -1 ? (a(), h("th", {
                                key: 0,
                                "data-column": m.key,
                                "data-sortable": m.sortable === !0,
                                "data-sort": m.sortable === !0 && s.value === m.key ? r.value : "",
                                colspan: S(Ce)(m, e.columns.length, d.value),
                                title: m.label,
                                onClick: (v) => Y(m)
                            }, [
                                E("div", null, R(m.label), 1)
                            ], 8, Me)) : $("", !0)
                        ], 64))), 256))
                    ])
                ]),
                e.sortable ? (a(), k(S(me), {
                    key: 0,
                    modelValue: d.value,
                    "onUpdate:modelValue": c[0] || (c[0] = (m) => d.value = m),
                    move: e.checkValidDrag,
                    itemKey: e.draggableItemKey,
                    onStart: c[1] || (c[1] = (m) => U.value = !0),
                    onEnd: c[2] || (c[2] = (m) => U.value = !1),
                    tag: "tbody",
                    class: "lkt-sortable-table",
                    handle: "[data-handle-drag]"
                }, {
                    item: F(({ element: m, index: v }) => [
                        (a(), k(ee, {
                            key: S(H) + "-" + v,
                            i: v,
                            item: m,
                            "display-hidden-columns-indicator": z.value,
                            "is-draggable": e.draggableChecker ? e.draggableChecker(m) : !0,
                            sortable: e.sortable,
                            "visible-columns": f.value,
                            "empty-columns": B.value,
                            "hidden-is-visible": q(v),
                            onClick: G,
                            onShow: P
                        }, Q({ _: 2 }, [
                            I(J.value, (b) => ({
                                name: b,
                                fn: F((V) => [
                                    x(o.$slots, b, {
                                        item: V.item,
                                        value: V.value,
                                        column: V.column
                                    })
                                ])
                            }))
                        ]), 1032, ["i", "item", "display-hidden-columns-indicator", "is-draggable", "sortable", "visible-columns", "empty-columns", "hidden-is-visible"]))
                    ]),
                    _: 3
                }, 8, ["modelValue", "move", "itemKey"])) : (a(), h("tbody", Ke, [
                    (a(!0), h(A, null, I(d.value, (m, v) => (a(), k(ee, {
                        key: S(H) + "-" + v,
                        i: v,
                        item: m,
                        "display-hidden-columns-indicator": z.value,
                        "is-draggable": e.draggableChecker ? e.draggableChecker(m) : !0,
                        sortable: e.sortable,
                        "visible-columns": f.value,
                        "empty-columns": B.value,
                        "hidden-is-visible": q(v),
                        onClick: G,
                        onShow: P,
                        onEdited: ne
                    }, Q({ _: 2 }, [
                        I(J.value, (b) => ({
                            name: b,
                            fn: F((V) => [
                                x(o.$slots, b, {
                                    item: V.item,
                                    value: V.value,
                                    column: V.column
                                })
                            ])
                        }))
                    ]), 1032, ["i", "item", "display-hidden-columns-indicator", "is-draggable", "sortable", "visible-columns", "empty-columns", "hidden-is-visible"]))), 128)),
                    j.value.length > 0 ? (a(!0), h(A, { key: 0 }, I(d.value, (m, v) => (a(), k(Fe, {
                        key: S(H) + "-" + v,
                        i: v,
                        item: m,
                        "hidden-columns": j.value,
                        "hidden-columns-col-span": le.value,
                        "is-draggable": e.draggableChecker ? e.draggableChecker(m) : !0,
                        sortable: e.sortable,
                        "visible-columns": f.value,
                        "empty-columns": B.value,
                        "hidden-is-visible": q(v),
                        onClick: G,
                        onShow: P
                    }, Q({ _: 2 }, [
                        I(J.value, (b) => ({
                            name: b,
                            fn: F((V) => [
                                x(o.$slots, b, {
                                    item: V.item,
                                    value: V.value,
                                    column: V.column
                                })
                            ])
                        }))
                    ]), 1032, ["i", "item", "hidden-columns", "hidden-columns-col-span", "is-draggable", "sortable", "visible-columns", "empty-columns", "hidden-is-visible"]))), 128)) : $("", !0)
                ]))
            ])
        ], 8, Re)) : o.$slots["no-items"] ? (a(), h("div", je, [
            x(o.$slots, "no-items")
        ])) : $("", !0);
    }
}), ct = {
    install: (e) => {
        e.component("lkt-table") === void 0 && e.component("lkt-table", Je), e.component("lkt-loader") === void 0 && e.use(ge), e.component("lkt-field-select") === void 0 && e.use(be), e.component("lkt-field-text") === void 0 && e.use(ve), e.component("lkt-field-check") === void 0 && e.use(ye), e.component("lkt-field-switch") === void 0 && e.use(ke);
    }
};
export { it as createActionColumn, ut as createCheckColumn, tt as createColumn, nt as createEmailColumn, dt as createHiddenColumn, lt as createLinkColumn, rt as createSelectColumn, st as createSwitchColumn, ot as createTelColumn, at as createTextColumn, ct as default };
