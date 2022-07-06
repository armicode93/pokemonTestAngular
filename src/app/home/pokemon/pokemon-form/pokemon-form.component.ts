import {Component, Input, OnInit} from '@angular/core';
import {PokemonService} from '../pokemon.service';
import {Pokemon} from "../pokemon";
import {Router} from "@angular/router";

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.css']
})
export class PokemonFormComponent implements OnInit {
  @Input() pokemon: Pokemon ; //qui dico che nel momento in cui voglio vedere un formulario, voglio che mi passate una proprieta pokemon
  types : string []; // immagazzinero tutti i tipi dei pokemon, ma dovro chiamare il pokemon service qua sotto

  constructor(private pokemonService: PokemonService,
  private router: Router) { }

  ngOnInit() { // recuperation List POKEMON
    //pokemonTypeList
    this.types = this.pokemonService.getPokemonTypeList();
    //initialisation avec tout le tipe de pokemon disponible dans le project
  }

  hasType(type : string): boolean{

    return this.pokemon.types.includes(type);
    // domando che se questo pokemon con cui sto lavorando ha i tipo che ho passato in parametro
    //che mi permette di checcare o no le caselle all inizio del formulario

  }

  selectType($event: Event, type: string)
  {
  const isChecked: boolean = ($event.target as HTMLInputElement).checked;

  if (isChecked) {
    this.pokemon.types.push(type);
    //mettre a jour pokemon
  }
  else {
    const index = this.pokemon.types.indexOf(type);

    this.pokemon.types.splice(index, 1);

  }
  }

  onSubmit()
  {
    console.log('Submit form !');
    this.router.navigate(['pokemon',this.pokemon.id]);
    //ridirection vers la page du pokemon qui vien etre modifier
  }

}
