import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { JurossimplesComponent } from './jurossimples/jurossimples.component';
import { JuroscompostosComponent } from './juroscompostos/juroscompostos.component';
import { RouterModule } from '@angular/router';
import { IdenComponent } from './iden/iden.component';

@NgModule({
  imports:      
  [ BrowserModule, 
    FormsModule,
    RouterModule.forRoot([
      {path: "", component: HomeComponent},
      {path: "jurossimples", component: JurossimplesComponent},
      {path: "juroscompostos", component: JuroscompostosComponent},
      {path: "iden", component: IdenComponent}
    ]) 
  ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, NavbarComponent, JurossimplesComponent, JuroscompostosComponent, IdenComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
