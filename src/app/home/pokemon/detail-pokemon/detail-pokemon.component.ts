import { Component, OnInit } from '@angular/core';
import {Pokemon} from "../pokemon";
import {POKEMONS} from "../mock-pokemon-list";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',

})
export class DetailPokemonComponent implements OnInit{

  pokemonList: Pokemon [];
  pokemon : Pokemon | undefined; // pokemon courrant che corrisponde al pokemon selezionato, domandato dallo user via lo id



  constructor(private route : ActivatedRoute, private router: Router) { } //tutto cio mi permettera di accedere al id presente nel url,
                                                    // piu precisamente accedere alla route courant, importation router


  ngOnInit()
  {
    this.pokemonList = POKEMONS; // initialisation pokeon list avra come valore POKEMONS
    const pokemonId: string|null = this.route.snapshot.paramMap.get('id'); // snapshot permet de recuperer la valeur allistante
                                                            // des parametre sous forme de paramMap
                                                           //GET, je vais chercher l'identifiant qui s' appelle id
    if(pokemonId)
    {
      this.pokemon  = this.pokemonList.find(pokemon => pokemon.id == +pokemonId)
    }

  // il else possiamo toglierlo perche pokemon, lo abbiamo definito qui sopra (constructor) come pokemon o undefined.
  }

goToPokemonList()
{
  this.router.navigate(['/pokemons']);
}

}
