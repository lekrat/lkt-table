# LKT Table
![ts](https://img.shields.io/badge/Typescript-3178c6?style=for-the-badge)
![js](https://img.shields.io/badge/Javascript-f68333?style=for-the-badge)
![vue](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2Flekrat%2Flkt-table%2Fmaster%2Fpackage.json&query=%24.dependencies.vue&style=for-the-badge&label=vue&color=42b883)
![node](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2Flekrat%2Flkt-table%2Fmaster%2Fpackage.json&query=%24.engines.node&style=for-the-badge&label=node&color=026e00)


Vue component (Vue.js 3.0) allowing a simple yet powerful table component.

## Features

* Custom slots per column
* Hide columns by config
* Automatically hide empty columns
* Full support of [Sortable.js](https://github.com/RubaXa/Sortable) features:
    * Supports touch devices
    * Supports drag handles and selectable text
    * Smart auto-scrolling
    * No jQuery dependency
* Keeps in sync HTML and view model list

## Installation

### With npm

```bash
npm i -S lkt-table
```

## Typical use:
In your main.js
```js
import LktTable from 'lkt-table';
  
app.use(LktTable);
```

In your component:

```html
<lkt-table v-model="myArray" v-bind:columns="columns"></lkt-table>
```
```js
import {createColumn} from 'lkt-table';

let isSortable = false;

export default {
    data() {
        return {
            columns: [
                createColumn('name', 'Name'),
                createColumn('surname', 'Surname', isSortable),
            ],
            items: [
                {name: 'a', surname: 'n'},
                {name: 'b', surname: 'n1'},
            ]
        }
    }
}
```


### With `custom column slots`:
```html
<lkt-table v-model:value="myArray" v-bind:columns="columns">
    <template v-slot:name="{item}">{{item.name}}</template
</lkt-table>
```

## Usage of `createColumn`:
```js
const column = createColumn(elementProperty, propertyTextInHeader)
    
    // Enables/disables column being sortable 
    // by clicking in header
    // Default: true
    .setIsSortable(status)
    
    // Make this column hidden, available by clicking a button
    // Default: false
    .setIsHidden(status)
    
    // Defines a text formatter for this column
    // Useful if you don't need and slot
    // Must be a function
    // Default: undefined
    .setFormatter(formatter)
    
    // Defines a check function to test if this column
    // is empty.
    // If all items has this column empty, this column
    // won't be rendered
    // Default: undefined
    .setEmptyChecker(checker)
    
    // Defines a function to check which colspan should take
    // this column
    // Default: undefined
    .setColSpan(checker)
```

## Props

### value
Type: `Array`<br>
Required: `true`<br>
Default: `[]`

Input data array to display.
```html
<lkt-table v-model:value="myArray"></lkt-table>
```

### columns
Type: `Array`<br>
Required: `true`<br>
Default: `[]`

Columns configuration (data to be shown, order, ...)
```html
<lkt-table v-bind:columns="columns"></lkt-table>
```

### sorter
Type: `Function`<br>
Required: `false`<br>
Default: `undefined`

Sorting function which will be triggered each time a th is clicked (if column is sortable)
```html
<lkt-table v-bind:sorter="sorter"></lkt-table>
```
```js
export default {
    methods: {
        sorter(datum1, datum2, column, sortDirection) {
            return 1;
        }
    },
    ...
}
```


### sortable
Type: `Boolean`<br>
Required: `false`<br>
Default: `false`

Enables drag and drop
```html
<lkt-table v-bind:sortable="true"></lkt-table>
```

### hideEmptyColumns
Type: `Boolean`<br>
Required: `false`<br>
Default: `false`

Enables automatic hide empty columns
```html
<lkt-table v-bind:hide-empty-columns="true"></lkt-table>
```

### draggableChecker
Type: `Function`<br>
Required: `false`<br>
Default: `(evt) => true`

A function to determine if an item can be dragged
```html
<lkt-table v-bind:draggable-checker="fn"></lkt-table>
```

### checkValidDrag
Type: `Function`<br>
Required: `false`<br>
Default: `(evt) => true`

A function to determine if an item can be dropped in a certain position
```html
<lkt-table v-bind:check-valid-drag="fn"></lkt-table>
```


### Events

* LktTable emits these events:

  - `update:modelValue` (for value v-model)
  - `sort` (same as input, but after sorting)

HTML:
```HTML
<lkt-table v-on:sort="doSomething"></lkt-table>
```

### Slots

#### custom column slot
LktTable generates one slot per column, so you can always control how a column will be shown.

The `custom column slot` will be named with the column key.

Slot props:
- `value` the element value for that column
- `item` the element itself
- `column` the column config
- `i` the row index

```html
<lkt-table v-model:value="myArray" v-bind:columns="columns">
    <template v-slot:name="{item, value}">
        <div>{{value}}, {{item.surname}}</div>
    </template
</lkt-table>
```