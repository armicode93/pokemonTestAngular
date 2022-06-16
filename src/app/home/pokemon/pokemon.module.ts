import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DetailPokemonComponent} from "./detail-pokemon/detail-pokemon.component";
import {BorderCardDirective} from "./border-card.directive";
import {PokemonTypeColorPipe} from "./pokemon-type-color.pipe";
import {ListPokemonComponent} from "./list-pokemon/list-pokemon.component";
import {RouterModule, Routes} from "@angular/router";


const pokemonRoutes: Routes = [ // en angular le route sont sous forme de object
  {path: 'pokemons', component: ListPokemonComponent }, // url qui faut appele et cette url va matche avec un composant
  {path: 'pokemons/:id', component: DetailPokemonComponent},
];

@NgModule({
  declarations: [ //ici on va declarer notre directive et notre pipe pour pouvoir le utiliser dans le pokemon module et c'est pour ca que je le declare ici
    ListPokemonComponent,
    DetailPokemonComponent,
    BorderCardDirective,
    PokemonTypeColorPipe

  ],
  imports: [ // je vais utilise le routerModule de angular et je vais le ajoute le route avec forChild

    CommonModule,
    RouterModule.forChild(pokemonRoutes),
  ]
})
export class PokemonModule { }
