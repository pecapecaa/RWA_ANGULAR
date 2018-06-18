import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { VinarijaComponent } from './components/vinarija/vinarija.component';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';


import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {rootReducer} from './store';

//components
import { HomeComponent } from './components/home/home.component';
import { AddvinoComponent } from './components/addvino/addvino.component';
import { VinoComponent } from './components/vino/vino.component';
import { VinodetaljiComponent } from './components/vinodetalji/vinodetalji.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dodajvino', component:AddvinoComponent},
  { path: 'vinarija', component: VinarijaComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    VinarijaComponent,
    HomeComponent,
    AddvinoComponent,
    VinoComponent,
    VinodetaljiComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatCheckboxModule,
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    ),
    StoreModule.forRoot(rootReducer),
    StoreDevtoolsModule.instrument({})
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
