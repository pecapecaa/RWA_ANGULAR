
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import {Vino} from '../../models/vino';
import {State } from '../../store';
import {Store} from '@ngrx/store';
import { SelectVino} from '../../store/actions';
import {getWine} from '../../service/vinarija';

@Component({
  selector: 'app-vinarija',
  templateUrl: './vinarija.component.html',
  styleUrls: ['./vinarija.component.css']
})
export class VinarijaComponent implements OnInit {

  //vinarija$: Observable<Vino[]>;
  public vina:Vino[];
  public selectedVino: Vino;  //////!!!!!!

  constructor(private store$: Store<State>) { }


  onSelected(vino: Vino) {
    this.store$.dispatch(new SelectVino(vino));
  }

  ngOnInit() {
    this.store$.select(State=>State.vino)
    .subscribe((vina)=>this.vina=vina);


    this.store$.select(State=>State.selectedVino)
    .subscribe((vina)=>this.selectedVino=vina);
 

    }


  }

  


