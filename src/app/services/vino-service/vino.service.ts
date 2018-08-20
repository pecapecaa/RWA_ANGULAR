import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Vino } from '../../models/vino';
import { Observable} from 'rxjs';

const URL_ROOT = 'http://localhost:3005/vinarija'

@Injectable({
  providedIn: 'root'
})
export class VinoService {

  constructor(private http: HttpClient ) {
  
  }

  public getBooks(): Observable<Vino[]> {
    
    return this.http.get<Vino[]>(URL_ROOT);
  }
  
  public addVino(vino: Vino) {

    this.http.post(URL_ROOT, vino)
              .subscribe(response => console.log(response)); 
          
  }

  public updateVino(vino: Vino) {
    this.http.put(`${URL_ROOT}${vino.id}`, vino)
            .subscribe(response => console.log(response)); 
  }

  public DeleteVino(vino: Vino) {
    this.http.delete(`${URL_ROOT}${vino.id}`) 
              .subscribe(response => console.log(response));
  }

}
