import {Action} from '@ngrx/store';
import { Vino } from '../models/vino';

export const SELECT_VINO = "Select vino";
export const UPDATE_VINO = "Update vino";
export const ADD_VINO = "Add vino";

export class UpdateVino implements Action {
    type = UPDATE_VINO;

    constructor(public vino: Vino) {
        
    }
}

export class AddVino implements Action {
    type = ADD_VINO;
    // vino: Vino;
    constructor(public vino: Vino) {
        
    }
}

export class SelectVino implements Action {
    type = SELECT_VINO;
    constructor(public vino: Vino) {}
}