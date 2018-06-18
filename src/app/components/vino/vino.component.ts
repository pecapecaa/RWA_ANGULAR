import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Vino} from '../../models/vino';
import {State } from '../../store';
import {Store} from '@ngrx/store';


@Component({
  selector: 'app-vino',
  templateUrl: './vino.component.html',
  styleUrls: ['./vino.component.css']
})
export class VinoComponent implements OnInit {

  @Input() public vino:Vino;    //input uzimanje podataka iz vinarije
  @Input() public selected: boolean;
  @Output() public selectedEvent: EventEmitter<Vino> = new EventEmitter();
  
  constructor(private store$: Store<State>) {
    this.selected = false;
   }

  ngOnInit() {
  }
  public selectVino() {
    this.selectedEvent.emit(this.vino);
  }
 
}
