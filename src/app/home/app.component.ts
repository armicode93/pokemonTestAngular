 import { Component, OnInit } from '@angular/core';
import {POKEMONS} from "./mock-pokemon-list";
 import {Pokemon} from "./pokemon";


 //import element component from angular oore
@Component({
  selector: 'app-root',
  //selector vuol dire che sto creando uan balise personalizzata chiamata app-root
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// export che serve per renderlo disponibile nelle altre pagine
export class AppComponent implements OnInit{
  //title = 'qatar2022';
  equipeList: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon |undefined;  // correspond au pokemon selectioner

  ngOnInit() {
    console.table(this.equipeList);


  }
  selectEquipe(pokemonId: string)
  {
    const id = +pokemonId;
    const pokemon : Pokemon|undefined = this.equipeList.find(pokemon => pokemon.id == +pokemonId);
    if (pokemon)
    {
      console.log(`Vous avez clique sur l equipe ${pokemon.name}`);
      this.pokemonSelected= pokemon;
    }
    else
    {
      console.log("No pokemon no existant");
      this.pokemonSelected= pokemon;
    }

  }

  /*addMatch(){
    console.log('CLICK EVENT');
  }

   */
}
