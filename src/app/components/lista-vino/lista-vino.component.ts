import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import { Vino } from '../../models/vino';
import { Observable} from 'rxjs';
import { State } from '../../store/reducers';
import { selectors} from '../../store/reducers/lista-vino.reducer';

@Component({
  selector: 'app-lista-vino',
  templateUrl: './lista-vino.component.html',
  styleUrls: ['./lista-vino.component.css']
})
export class ListaVinoComponent implements OnInit {

  vino$: Observable<Vino[]>;
  imaVino: boolean;

  constructor(private store$: Store<State>) { }

  ngOnInit() {
    this.vino$ = this.store$.select(state => selectors.selectAll(state.listaVino)); // pomocu ovog vracamo stanje iz store-a
  }

}
