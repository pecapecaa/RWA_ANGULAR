import { Component, OnInit } from '@angular/core';
import { Vino } from '../../models/vino';
import { Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import { State } from '../../store/reducers';
import { VinoService } from '../../services/vino-service/vino.service';
import { addVino} from '../../store/actions/actions';


@Component({
  selector: 'app-dodaj-vino-form',
  templateUrl: './dodaj-vino-form.component.html',
  styleUrls: ['./dodaj-vino-form.component.css']
})
export class DodajVinoFormComponent implements OnInit {

  vino: Vino = new Vino(null,"", "", "","",0,0,0);

  constructor(
          private store$: Store<State>,
          private vinoService: VinoService
        ) { }

  ngOnInit() {
  }

  addVino() {
  
    this.vinoService.addVino(this.vino);
    this.store$.dispatch(new addVino(this.vino));
    this.vino.naziv = "";
    this.vino.naziv = "";
    this.vino.vrsta = "";
    this.vino.procenat = "";
    this.vino.berba = "";
    this.vino.cena = 0;
  }

}
