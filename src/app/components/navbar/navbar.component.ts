import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import { Observable} from 'rxjs';
import { State } from '../../store/reducers';
import { FetchVinoReq, MostPopular, SearchVino} from '../../store/actions/actions';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private store$: Store<State>) {}

  ngOnInit() {
    this.store$.dispatch(new FetchVinoReq());
  }

  // na klik filtrira sve ostale vino
  najpopularnije() {
    this.store$.dispatch(new MostPopular());
    console.log('Most popular ,action');
  }


  //ukoliko idemo prvo na najpopularnije, i vratimo se na sve vino, 
  //metoda svevino obezbedjuje da se sve vino prikazu
  svevino() {
    this.store$.dispatch(new FetchVinoReq());
  }


  searchImpl(event) {
    const value = event.target.value;
    this.store$.dispatch(new SearchVino(value));
   
  }

}
