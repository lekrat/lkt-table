export class LktTableColumn {

    constructor(key = '', label = '') {
        this.key = key;
        this.label = label;
        this.sortable = true;
        this.hidden = false;
        this.formatter = undefined;
        this.checkEmpty = undefined;
    }

    setIsSortable(status = true) {
        this.sortable = status;
        return this;
    }

    setIsHidden(status = true) {
        this.hidden = status;
        return this;
    }

    setFormatter(formatter = undefined) {
        this.formatter = formatter;
        return this;
    }

    setEmptyChecker(checker = undefined) {
        this.checkEmpty = checker;
        return this;
    }
}