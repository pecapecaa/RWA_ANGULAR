import { Action } from "@ngrx/store";
import { Vino } from '../../models/vino';
import * as types from '../actions/types';
import { FetchVinoSuccess, DeleteVino,addVino} from "../actions/actions";
import { createEntityAdapter, EntityState, EntityAdapter } from '@ngrx/entity';
      
export interface vinoState extends EntityState<Vino>{
    ids: number[],
    entities: { [id: number] : Vino}
}
const adapter: EntityAdapter<Vino> = createEntityAdapter<Vino>();

const initalState: vinoState = {
    ids: [],
    entities: { }
}


export default function ( state: vinoState = initalState, action: Action) { 
    switch(action.type) {
        case types.VINO_FETCH_DONE: {
            
            const { listaVino } = action as FetchVinoSuccess;
            const ids = [];
            
            listaVino.forEach((vino,index) => {
                ids.push(index);
            })
            
            console.log('enti',{
                ids,
                entities: {...listaVino}
            })   
            return {
                ids,
                entities: {...listaVino}
            }
        }
        case types.DELETE_VINO: {
            const { vino } = action as DeleteVino;
            console.log("brisem " + vino.id,state);            
            return adapter.removeOne(vino.id, state);
        }
        case types.ADD_VINO: {
            const { vino } = action as addVino;
            console.log("dodajem " + vino.id,state);            
            return adapter.addOne(vino, state);
        }
        default: {
            return state;
        }
    }

}

export const selectors = adapter.getSelectors();

