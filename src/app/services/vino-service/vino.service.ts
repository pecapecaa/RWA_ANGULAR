import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Vino } from '../../models/vino';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VinoService {

  constructor(private http: HttpClient ) {
  
  }

  public getBooks(): Observable<Vino[]> {
    
    return this.http.get<Vino[]>('http://localhost:3005/vinarija');
  }
  
  public addVino(vino: Vino) {

    this.http.post('http://localhost:3005/vinarija', vino)
              .subscribe(response => console.log(response)); // bez subscribe ne radi
          
  }

  public updateVino(vino: Vino) {
    this.http.put(`http://localhost:3005/vinarija/${vino.id}`, vino)
            .subscribe(response => console.log(response)); // bez subscribe ne radi
  }

  public DeleteVino(vino: Vino) {
    this.http.delete(`http://localhost:3005/vinarija/${vino.id}`) 
              .subscribe(response => console.log(response));
  }

}
