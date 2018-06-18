import { Component, OnInit } from '@angular/core';
import {Vino} from '../../models/vino';
import {State } from '../../store';
import {Store} from '@ngrx/store';
import {AddVino} from '../../store/actions';
@Component({
  selector: 'app-addvino',
  templateUrl: './addvino.component.html',
  styleUrls: ['./addvino.component.css']
})
export class AddvinoComponent implements OnInit {

  constructor(private store$: Store<State>) { }
  
  naziv: string;
  vrsta: string;
  procenat: number;
  berba:number;
  cena:number;
  lajk:number;
  dislajk:number;
  detalji:string;

  
  ngOnInit() {
  }
  addVino(){
    let v=new Vino(null,this.naziv,this.vrsta,this.procenat,this.berba,this.cena,0,0,this.detalji);
    this.store$.dispatch(new AddVino(v))

  }
  onUpdateNaziv(event:any){
    this.naziv=event.target.value;
  }
  onUpdateVrsta(event:any){
    this.vrsta=event.target.value;
  }
  onUpdateProcenat(event:any){
    this.procenat=event.target.value;
  }
  onUpdateBerba(event:any){
    this.berba=event.target.value;
  }
  onUpdateCena(event:any){
    this.cena=event.target.value;
  }
  onUpdateDetalji(event:any){
    this.detalji=event.target.value;
  }
}
