import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from "@angular/router";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {PokemonModule} from "./pokemon/pokemon.module";

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    PokemonModule,
    AppRoutingModule,



  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],

  providers: [],

  bootstrap: [AppComponent]
  // con questo dico ad angular quale e il primo component che deve caricare quando carico l app
})
export class AppModule { }
