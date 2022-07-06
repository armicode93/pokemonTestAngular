import { Component, OnInit } from '@angular/core';
import {Pokemon} from "../pokemon";

import {ActivatedRoute, Router} from "@angular/router";
import {PokemonService} from "../pokemon.service";

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',

})
export class DetailPokemonComponent implements OnInit{

  pokemonList: Pokemon [];
  pokemon : Pokemon | undefined; // pokemon courrant che corrisponde al pokemon selezionato, domandato dallo user via lo id



  constructor(private route : ActivatedRoute,
              private router: Router,
              private pokemonService: PokemonService
  ) { }


  ngOnInit()
  {

    const pokemonId: string|null = this.route.snapshot.paramMap.get('id'); // snapshot permet de recuperer la valeur allistante
                                                            // des parametre sous forme de paramMap
                                                           //GET, je vais chercher l'identifiant qui s' appelle id
    if(pokemonId)
    {
      this.pokemon  = this.pokemonService.getPokemonById(+pokemonId);
    }

  // il else possiamo toglierlo perche pokemon, lo abbiamo definito qui sopra (constructor) come pokemon o undefined.
  }

goToPokemonList()
{
  this.router.navigate(['/pokemons']);
}

}
