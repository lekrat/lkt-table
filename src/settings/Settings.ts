import {Component} from "vue";

export class Settings {
    static navButtonSlot: string|Component = '';
    static dropButtonSlot: string|Component = '';
    static editButtonSlot: string|Component = '';
    static createButtonSlot: string|Component = '';
    static defaultEmptySlot: string|Component|undefined = undefined;

    static defaultSaveIcon: string = '';
}