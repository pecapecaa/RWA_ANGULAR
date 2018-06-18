import {Vino} from '../models/vino';
import {ActionReducerMap} from '@ngrx/store';
import vinoReducer from './reducers/vino.reducer';
import selectedReducer from '../store/reducers/selected-vino.reducers';

export interface State{
    vino:Vino[],
    selectedVino:Vino
}

export const rootReducer:ActionReducerMap<State>={
    vino:vinoReducer,
    selectedVino:selectedReducer
}
