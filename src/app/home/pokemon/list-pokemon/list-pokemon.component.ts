import { Component, OnInit } from '@angular/core';
import {Pokemon} from "../pokemon";
import {POKEMONS} from "../mock-pokemon-list";
import {Router} from '@angular/router';
import {PokemonService} from "../pokemon.service";

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.css']
})
export class ListPokemonComponent implements OnInit {

  equipeList: Pokemon[] = POKEMONS;

  constructor(
    private  router: Router,
    private pokemonService: PokemonService) { }

  ngOnInit() {
    this.equipeList = this.pokemonService.getPokemonList();

  }

  goToPokemon(pokemon: Pokemon)
  {
    this.router.navigate(['pokemons', pokemon.id])
  }




}
