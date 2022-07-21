import draggable from "vuedraggable";
import { isFunction, isObject, isUndefined, generateRandomString } from "lkt-tools";
import { openBlock, createElementBlock, Fragment, createElementVNode, normalizeClass, createCommentVNode, renderList, renderSlot, createTextVNode, toDisplayString, withDirectives, vShow, defineComponent, resolveComponent, createBlock, withCtx, createSlots } from "vue";
class LktTableColumn {
  constructor(key = "", label = "") {
    this.key = key;
    this.label = label;
    this.sortable = true;
    this.hidden = false;
    this.formatter = void 0;
    this.checkEmpty = void 0;
    this.colspan = void 0;
  }
  setIsSortable(status = true) {
    this.sortable = status;
    return this;
  }
  setIsHidden(status = true) {
    this.hidden = status;
    return this;
  }
  setFormatter(formatter = void 0) {
    this.formatter = formatter;
    return this;
  }
  setEmptyChecker(checker = void 0) {
    this.checkEmpty = checker;
    return this;
  }
  setColSpan(checker = void 0) {
    this.colspan = void 0;
    return this;
  }
}
const createColumn = (key, label, sortable = true) => {
  return new LktTableColumn(key, label).setIsSortable(sortable);
};
const defaultTableSorter = (a, b, c, sortDirection) => {
  if (!c) {
    return 0;
  }
  let A = a[c.key], B = b[c.key];
  if (sortDirection === "asc") {
    if (A > B) {
      return 1;
    }
    if (B > A) {
      return -1;
    }
  } else {
    if (A > B) {
      return -1;
    }
    if (B > A) {
      return 1;
    }
  }
  return 0;
};
const getColumnDisplayContent = (column, item, i) => {
  if (isFunction(column.formatter)) {
    return column.formatter(item[column.key], item, column, i);
  }
  return item[column.key];
};
const getVerticalColSpan = (column, amountOfColumns) => {
  if (!column.colspan) {
    return false;
  }
  let max = amountOfColumns;
  globalThis.Items.forEach((item) => {
    let i = getHorizontalColSpan(column, item);
    if (i > 0 && i < max) {
      max = i;
    }
  });
  return max;
};
const getHorizontalColSpan = (column, item) => {
  if (column.colspan === false) {
    return false;
  }
  if (isFunction(column.colspan)) {
    return column.colspan(item);
  }
  return column.colspan;
};
const canRenderColumn = (column, emptyColumns, item) => {
  if (!isObject(column) || !column.key) {
    return false;
  }
  if (emptyColumns.indexOf(column.key) > -1) {
    return false;
  }
  let colspan = getHorizontalColSpan(column, item);
  if (isUndefined(column.colspan)) {
    return true;
  }
  if (!isUndefined(column.colspan)) {
    if (isFunction(column.colspan)) {
      colspan = parseInt(column.colspan());
    } else {
      colspan = parseInt(column.colspan);
    }
  }
  if (colspan > 0) {
    return true;
  }
  return false;
};
const getDefaultSortColumn = (columns = []) => {
  if (columns.length > 0) {
    for (let i = 0; i < columns.length; ++i) {
      if (columns[i].sortable === true) {
        return columns[i].key;
      }
    }
  }
  return "";
};
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$1 = {
  name: "LktTableRow",
  emits: ["click", "show"],
  props: {
    isDraggable: { type: Boolean, default: true },
    i: { type: [Number, Boolean], default: 0 },
    hiddenColumnsColSpan: { type: Number, default: 0 },
    visibleColumns: { type: Array, default: () => [] },
    hiddenColumns: { type: Array, default: () => [] },
    emptyColumns: { type: Array, default: () => [] },
    hiddenIsVisible: { type: Boolean, default: false },
    item: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  methods: {
    canRenderColumn,
    getColumnDisplayContent,
    getVerticalColSpan,
    getHorizontalColSpan
  }
};
const _hoisted_1$1 = ["data-i", "data-handle-drag"];
const _hoisted_2$1 = {
  key: 0,
  "data-role": "drag-indicator"
};
const _hoisted_3$1 = {
  key: 1,
  "data-role": "invalid-drag-indicator"
};
const _hoisted_4$1 = ["data-column", "colspan", "title", "onClick"];
const _hoisted_5$1 = {
  key: 0,
  "data-role": "hidden-row"
};
const _hoisted_6$1 = ["colspan"];
const _hoisted_7 = ["data-column"];
const _hoisted_8 = ["data-i"];
const _hoisted_9 = ["data-column", "title", "onClick"];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [
    createElementVNode("tr", {
      "data-i": $props.i,
      "data-handle-drag": $props.isDraggable
    }, [
      $props.isDraggable ? (openBlock(), createElementBlock("td", _hoisted_2$1)) : (openBlock(), createElementBlock("td", _hoisted_3$1)),
      $props.hiddenColumns.length > 0 ? (openBlock(), createElementBlock("td", {
        key: 2,
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("show", { $event, i: $props.i })),
        "data-role": "show-more",
        class: normalizeClass($props.hiddenIsVisible ? "state-open" : "")
      }, null, 2)) : createCommentVNode("", true),
      (openBlock(true), createElementBlock(Fragment, null, renderList($props.visibleColumns, (column) => {
        return openBlock(), createElementBlock(Fragment, null, [
          $options.canRenderColumn(column, $props.emptyColumns, $props.item) ? (openBlock(), createElementBlock("td", {
            key: 0,
            "data-column": column.key,
            colspan: $options.getHorizontalColSpan(column, $props.item),
            title: $options.getColumnDisplayContent(column, $props.item, $props.i),
            onClick: ($event) => _ctx.$emit("click", { $event, item: $props.item, column })
          }, [
            !!_ctx.$slots[column.key] ? renderSlot(_ctx.$slots, column.key, {
              key: 0,
              value: $props.item[column.key],
              item: $props.item,
              column,
              i: $props.i
            }) : $props.item ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
              createTextVNode(toDisplayString($options.getColumnDisplayContent(column, $props.item, $props.i)), 1)
            ], 64)) : createCommentVNode("", true)
          ], 8, _hoisted_4$1)) : createCommentVNode("", true)
        ], 64);
      }), 256))
    ], 8, _hoisted_1$1),
    $props.hiddenColumns.length > 0 ? withDirectives((openBlock(), createElementBlock("tr", _hoisted_5$1, [
      createElementVNode("td", { colspan: $props.hiddenColumnsColSpan }, [
        createElementVNode("table", null, [
          createElementVNode("tr", null, [
            (openBlock(true), createElementBlock(Fragment, null, renderList($props.hiddenColumns, (column) => {
              return openBlock(), createElementBlock("th", {
                "data-column": column.key
              }, [
                createElementVNode("div", null, toDisplayString(column.label), 1)
              ], 8, _hoisted_7);
            }), 256))
          ]),
          createElementVNode("tr", { "data-i": $props.i }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList($props.hiddenColumns, (column, i) => {
              return openBlock(), createElementBlock("td", {
                "data-column": column.key,
                title: $options.getColumnDisplayContent(column, $props.item, i),
                onClick: ($event) => _ctx.$emit("click", { $event, item: $props.item, column })
              }, [
                !!_ctx.$slots[column.key] ? renderSlot(_ctx.$slots, column.key, {
                  key: 0,
                  value: $props.item[column.key],
                  item: $props.item,
                  column,
                  i
                }) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                  createTextVNode(toDisplayString($options.getColumnDisplayContent(column, $props.item, i)), 1)
                ], 64))
              ], 8, _hoisted_9);
            }), 256))
          ], 8, _hoisted_8)
        ])
      ], 8, _hoisted_6$1)
    ], 512)), [
      [vShow, $props.hiddenIsVisible]
    ]) : createCommentVNode("", true)
  ], 64);
}
const LktTableRow = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
const _sfc_main = defineComponent({
  name: "LktTable",
  components: { LktTableRow, draggable },
  props: {
    value: { type: Array, default: () => [] },
    columns: { type: Array, default: () => [] },
    sorter: { type: Function },
    sortable: { type: Boolean, default: false },
    hideEmptyColumns: { type: Boolean, default: false },
    draggableChecker: { type: Function, default: (item) => true },
    checkValidDrag: { type: Function, default: (evt) => true }
  },
  emits: ["input", "sort"],
  data() {
    let Sorter = isFunction(this.sorter) ? this.sorter : defaultTableSorter;
    return {
      Sorter,
      SortBy: getDefaultSortColumn(this.columns),
      SortDirection: "asc",
      Items: this.value,
      Hidden: {},
      drag: false,
      dragGroup: generateRandomString(16),
      input: "",
      uniqueId: generateRandomString(12)
    };
  },
  computed: {
    slots() {
      let r = {};
      let haystack = {};
      if (this.$slots) {
        haystack = Object.assign(haystack, this.$slots);
      }
      for (let k in haystack) {
        r[k] = haystack[k];
      }
      return r;
    },
    hasData() {
      return this.Items.length > 0;
    },
    emptyColumns() {
      if (!this.hideEmptyColumns) {
        return [];
      }
      let r = [];
      this.columns.forEach((column) => {
        let key = column.key;
        let ok = false;
        this.Items.forEach((item) => {
          if (isFunction(item.checkEmpty)) {
            return item.checkEmpty(item);
          }
          if (item[key]) {
            ok = true;
          }
        });
        if (!ok) {
          r.push(key);
        }
      });
      return r;
    },
    visibleColumns() {
      return this.columns.filter((c) => c.hidden !== true);
    },
    hiddenColumns() {
      return this.columns.filter((c) => c.hidden === true);
    },
    hiddenColumnsColSpan() {
      let r = this.visibleColumns.length + 1;
      if (this.sortable) {
        ++r;
      }
      return r;
    }
  },
  watch: {
    value: {
      handler(v) {
        this.Items = v;
      },
      deep: true
    },
    Items: {
      handler(v) {
        this.$emit("input", v);
      },
      deep: true
    }
  },
  methods: {
    getItemByEvent(e) {
      let t = e.target;
      if (isUndefined(t.dataset.column)) {
        do {
          t = t.parentNode;
        } while (isUndefined(t.dataset.column) && t.tagName !== "TABLE" && t.tagName !== "body");
      }
      if (t.tagName === "TD") {
        t = t.parentNode;
        t = t.dataset.i;
        if (!isUndefined(t)) {
          return this.Items[t];
        }
      }
      return void 0;
    },
    getVerticalColSpan,
    getHorizontalColSpan,
    sort(column) {
      if (column.sortable === true) {
        this.Items = this.Items.sort((a, b) => {
          return this.Sorter(a, b, column, this.SortDirection);
        });
        this.SortDirection = this.SortDirection === "asc" ? "desc" : "asc";
        this.SortBy = column.key;
        this.$emit("sort", [this.SortBy, this.SortDirection]);
      }
    },
    click($event) {
      this.$emit("click", $event);
    },
    show($event) {
      let k = "tr_" + $event.i;
      this.Hidden[k] = isUndefined(this.Hidden[k]) ? true : !this.Hidden[k];
    }
  }
});
const _hoisted_1 = ["data-sortable"];
const _hoisted_2 = {
  key: 0,
  "data-role": "drag-indicator"
};
const _hoisted_3 = { key: 1 };
const _hoisted_4 = ["data-column", "data-sortable", "data-sort", "colspan", "title", "onClick"];
const _hoisted_5 = { key: 1 };
const _hoisted_6 = {
  key: 1,
  "data-lkt": "empty-table"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_LktTableRow = resolveComponent("LktTableRow");
  const _component_draggable = resolveComponent("draggable");
  return openBlock(), createElementBlock("div", null, [
    _ctx.hasData ? (openBlock(), createElementBlock("div", {
      key: 0,
      "data-lkt": "table",
      "data-sortable": _ctx.sortable
    }, [
      createElementVNode("table", null, [
        createElementVNode("thead", null, [
          createElementVNode("tr", null, [
            _ctx.sortable ? (openBlock(), createElementBlock("th", _hoisted_2)) : createCommentVNode("", true),
            _ctx.hiddenColumns.length > 0 ? (openBlock(), createElementBlock("th", _hoisted_3)) : createCommentVNode("", true),
            (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.visibleColumns, (column) => {
              return openBlock(), createElementBlock(Fragment, null, [
                _ctx.emptyColumns.indexOf(column.key) === -1 ? (openBlock(), createElementBlock("th", {
                  key: 0,
                  "data-column": column.key,
                  "data-sortable": column.sortable === true,
                  "data-sort": column.sortable === true && _ctx.SortBy === column.key ? _ctx.SortDirection : "",
                  colspan: _ctx.getVerticalColSpan(column, this.columns.length),
                  title: column.label,
                  onClick: ($event) => _ctx.sort(column)
                }, [
                  createElementVNode("div", null, toDisplayString(column.label), 1)
                ], 8, _hoisted_4)) : createCommentVNode("", true)
              ], 64);
            }), 256))
          ])
        ]),
        _ctx.sortable ? (openBlock(), createBlock(_component_draggable, {
          key: 0,
          modelValue: _ctx.Items,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.Items = $event),
          group: _ctx.dragGroup,
          move: _ctx.checkValidDrag,
          onStart: _cache[1] || (_cache[1] = ($event) => _ctx.drag = true),
          onEnd: _cache[2] || (_cache[2] = ($event) => _ctx.drag = false),
          tag: "tbody",
          "data-lkt": "sortable-table",
          handle: "[data-handle-drag]"
        }, {
          item: withCtx(({ element, index }) => [
            (openBlock(), createBlock(_component_LktTableRow, {
              key: _ctx.uniqueId + "-" + index,
              i: index,
              item: element,
              "hidden-columns": _ctx.hiddenColumns,
              "hidden-columns-col-span": _ctx.hiddenColumnsColSpan,
              "is-draggable": _ctx.draggableChecker ? _ctx.draggableChecker(element) : true,
              "visible-columns": _ctx.visibleColumns,
              "empty-columns": _ctx.emptyColumns,
              "hidden-is-visible": _ctx.Hidden["tr_" + index] === true,
              onClick: _ctx.click,
              onShow: _ctx.show
            }, createSlots({ _: 2 }, [
              renderList(_ctx.slots, (slot, column) => {
                return {
                  name: column,
                  fn: withCtx((row) => [
                    renderSlot(_ctx.$slots, column, {
                      item: row.item,
                      value: row.value,
                      column: row.column
                    })
                  ])
                };
              })
            ]), 1032, ["i", "item", "hidden-columns", "hidden-columns-col-span", "is-draggable", "visible-columns", "empty-columns", "hidden-is-visible", "onClick", "onShow"]))
          ]),
          _: 3
        }, 8, ["modelValue", "group", "move"])) : (openBlock(), createElementBlock("tbody", _hoisted_5, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.Items, (item, i) => {
            return openBlock(), createBlock(_component_LktTableRow, {
              key: _ctx.uniqueId + "-" + i,
              i,
              item,
              "hidden-columns": _ctx.hiddenColumns,
              "hidden-columns-col-span": _ctx.hiddenColumnsColSpan,
              "is-draggable": _ctx.draggableChecker ? _ctx.draggableChecker(item) : true,
              "visible-columns": _ctx.visibleColumns,
              "empty-columns": _ctx.emptyColumns,
              "hidden-is-visible": _ctx.Hidden["tr_" + i] === true,
              onClick: _ctx.click,
              onShow: _ctx.show
            }, createSlots({ _: 2 }, [
              renderList(_ctx.slots, (slot, column) => {
                return {
                  name: column,
                  fn: withCtx((row) => [
                    renderSlot(_ctx.$slots, column, {
                      item: row.item,
                      value: row.value,
                      column: row.column
                    })
                  ])
                };
              })
            ]), 1032, ["i", "item", "hidden-columns", "hidden-columns-col-span", "is-draggable", "visible-columns", "empty-columns", "hidden-is-visible", "onClick", "onShow"]);
          }), 128))
        ]))
      ])
    ], 8, _hoisted_1)) : !!_ctx.$slots["no-items"] ? (openBlock(), createElementBlock("div", _hoisted_6, [
      renderSlot(_ctx.$slots, "no-items")
    ])) : createCommentVNode("", true)
  ]);
}
const table = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const LktTable = {
  install: (app, options) => {
    app.component("LktTable", table);
  }
};
export {
  createColumn,
  LktTable as default
};
