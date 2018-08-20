import { Component, OnInit, Input } from '@angular/core';
import { Vino } from '../../models/vino';
import { VinoService} from '../../services/vino-service/vino.service';
import { State } from '../../store/reducers';
import { DeleteVino} from '../../store/actions/actions';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-vino',
  templateUrl: './vino.component.html',
  styleUrls: ['./vino.component.css']
})
export class VinoComponent implements OnInit {

@Input()  vino: Vino; 

  constructor(
    private vinoService: VinoService,
    private store$: Store<State>
  ) { }

  ngOnInit() {
    
  }

  public like() {
    this.vino.lajk += 1;
    this.vinoService.updateVino(this.vino);
  }

  public dislike()  {
    this.vino.dislajk += 1;
    this.vinoService.updateVino(this.vino);
  }

  public obrisiVino() {
    this.vinoService.DeleteVino(this.vino);
    this.store$.dispatch(new DeleteVino(this.vino));
  }

}
