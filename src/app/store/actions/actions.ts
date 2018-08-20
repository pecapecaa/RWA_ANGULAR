import { Action } from '@ngrx/store';
import { Vino} from '../../models/vino';
import * as types from './types';


export class FetchVinoReq implements Action {
    type = types.VINO_FETCH_REQUESTED;
}
export class MostPopular implements Action {
    type = types.MOST_POPULAR;
    
}

export class SearchVino implements Action {
    type = types.SEARCH_VINO;
    pattern: String;
    constructor(pattern: String) {
        this.pattern = pattern;
    }
}

export class FetchVinoSuccess implements Action {
    type = types.VINO_FETCH_DONE;
    listaVino: Vino[]; // listaVino mu dodje kao payload u React-u
    constructor(vina: Vino[] ) {
        console.log('fech vino succes',this.listaVino);
        this.listaVino = [...vina]; //koristimo [] da bi vratili niz
    }
}


export class DeleteVino implements Action {
    type = types.DELETE_VINO;
    vino: Vino;
    constructor(vino: Vino) {
        this.vino = vino;
    }
}

export class addVino implements Action {
    type = types.ADD_VINO;
    vino: Vino;
    constructor(vino: Vino) {
        this.vino = vino;
    }
}






