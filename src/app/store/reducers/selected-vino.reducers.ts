import { Action } from "@ngrx/store";
import { Vino } from "../../models/vino";
import { SELECT_VINO, SelectVino, UPDATE_VINO, UpdateVino} from "../actions";
import {updateData} from '../../service/vinarija';

export default function (state: Vino = null, action: Action) {
    switch(action.type) {
        case SELECT_VINO: {
            return (action as SelectVino).vino;
        }
        case UPDATE_VINO: {
            updateData((action as UpdateVino).vino);
            return (action as UpdateVino).vino;
        }
        
        default:
            return state;
    }
}