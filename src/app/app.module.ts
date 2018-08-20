import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule, forwardRef } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {StoreModule} from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import {rootReducer } from './store/reducers'
import {effects} from './store/effects';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListaVinoComponent } from './components/lista-vino/lista-vino.component';
import { HomeComponent } from './components/home/home.component';
import { VinoComponent } from './components/vino/vino.component';
import { DodajVinoFormComponent } from './components/dodaj-vino-form/dodaj-vino-form.component';
import { VinoService} from './services/vino-service/vino.service';
//import { ZanroviService } from './services/zanrovi-service/zanrovi.service';
import { HttpClientModule} from '@angular/common/http';


// ovde podesavamo ruting
const appRoutes: Routes = [
  { 
    path: 'booklist', 
    component: ListaVinoComponent 
  },
  {
    path: 'dodajvino',
    component: DodajVinoFormComponent
  },
  {
    path: "",
    component: HomeComponent
   
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListaVinoComponent,
    HomeComponent,
    VinoComponent,
    DodajVinoFormComponent,
  ],
  imports: [
    StoreModule.forRoot(rootReducer),
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    EffectsModule.forRoot(effects)
  ],
  providers: [
    VinoService,
    //ZanroviService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
