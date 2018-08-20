import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { switchMap, map } from 'rxjs/operators';
import { VINO_FETCH_REQUESTED, MOST_POPULAR, SEARCH_VINO} from '../actions/types';
import { VinoService } from '../../services/vino-service/vino.service';
import { FetchVinoSuccess, SearchVino } from '../actions/actions';

@Injectable() 
export class vinoEffects {

    constructor(
        private actions$: Actions,
        private vinoService: VinoService    
    ) {}
    

    @Effect()
    loadBooks$ = this.actions$.ofType(VINO_FETCH_REQUESTED).pipe(
            switchMap(() => {  
                return this.vinoService.getBooks().pipe(  
                    map(vino => new FetchVinoSuccess(vino))
                )}
            )
    );  
                        
  
    @Effect()
    loadMostPopular$ = this.actions$.ofType(MOST_POPULAR).pipe(
            switchMap((action) => {
                return this.vinoService.getBooks().pipe(
                    map(vino => {
                        let najpopularnijevino = vino.filter(vina => vina.lajk > 20);
                        return new FetchVinoSuccess(najpopularnijevino)
                    })
                )
            })
    )  
    
    @Effect()
    searchedBooks$ = this.actions$.ofType(SEARCH_VINO).pipe(
        switchMap((action) => {
            const { pattern } = action as SearchVino;
            return this.vinoService.getBooks().pipe(
                map(vino => {
                    let searchResult = vino.filter( (Vino) => {
                        if(RegExp(pattern.toLowerCase()).test(Vino.naziv.toLowerCase()))
                        {
                            return Vino;
                        }
                    });
                    if(pattern.length == 0) {
                        return new FetchVinoSuccess(vino);
                    } else {
                        return new FetchVinoSuccess(searchResult);
                    }
                })
            )
        })
    )


                        
}                                                             