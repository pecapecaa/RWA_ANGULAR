import { Component, OnInit,Input } from '@angular/core';
import { Vino } from '../../models/vino';
import { UpdateVino } from '../../store/actions';
import {State } from '../../store';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-vinodetalji',
  templateUrl: './vinodetalji.component.html',
  styleUrls: ['./vinodetalji.component.css']
})
export class VinodetaljiComponent implements OnInit {

  @Input() public detalji:Vino;


  constructor(private store$: Store<State>) { }

  ngOnInit() {
  }
  Lajk(){
    this.detalji.lajk++;
    this.store$.dispatch(new UpdateVino(this.detalji))
  }
  Dislajk(){
    this.detalji.dislajk++;
    this.store$.dispatch(new UpdateVino(this.detalji))
  }
}
