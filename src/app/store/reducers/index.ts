import { ActionReducerMap } from '@ngrx/store';
import listaVinoReducer, {vinoState}  from './lista-Vino.reducer';
import { Vino } from '../../models/Vino';


export interface State {
    listaVino: vinoState;
}

//ovo su entities
export interface vinoState {
    ids: number[];
    entities: { [id: number]: Vino};
}

export const rootReducer: ActionReducerMap<State> = {
    listaVino: listaVinoReducer
}

