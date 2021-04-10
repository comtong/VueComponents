import Vue, {PluginObject} from "vue"
import { CUIComponent } from "./component"

import {TButton} from "./TButton"

export const version:string

export function install (vue: typeof Vue): void

export type Component = CUIComponent

export class Button extends TButton {}