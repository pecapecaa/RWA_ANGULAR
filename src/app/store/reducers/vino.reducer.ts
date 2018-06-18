import {Vino} from '../../models/vino';
import {Action} from '@ngrx/store';
import { ADD_VINO, AddVino} from "../actions";
import {getWine} from '../../service/vinarija';
import {postData} from '../../service/vinarija';


    export default function (state: Vino[] = [], action: Action) {
        switch(action.type) {
            case ADD_VINO: {
                const {vino} = action as AddVino;
                postData(vino);
                return [...state,vino];
            }
            default:
            let vin=[];
            let niz=getWine().then(vina => vina.forEach(element => {
              vin.push(new Vino(element.id,element.naziv,element.vrsta,element.procenat,element.berba,element.cena,element.lajk,element.dislajk,element.detalji))
            }))

                state=vin;
        
                return state;
        }
    }