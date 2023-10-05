import { Component} from '@angular/core';
import { Pokemon } from 'src/modules/pokemon';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'Pokedex';
  logo = "../assets/logo.png";
  imgProfile: string = "../assets/photoPerfil.webp";
  links: string[] = ['Home', 'Pokedex', 'Video Game', 'Card Games', 'Eventos'];
  pokemons: Pokemon[] = [
    new Pokemon(1,'Bulbasaur', ['Grama'], 'There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.', '0.7m','6.9kg ','Seed','Overgrow','https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png'),
    new Pokemon(2, 'Ivysaur', ['Grama'], 'When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.', '1.0m','13.0kg','Seed','Overgrow', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png'),
    new Pokemon(3,'Venusaur', ['Grama'], 'Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.', '2.0m', '100.0kg','Seed','Overgrow', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png'),
    new Pokemon(4,'Charmander',['Fogo'], 'It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.', '0.6m','8.5kg','Lizard','Blaze', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png'),
    new Pokemon(5,'Charmeleon',['Fogo'], 'It has a barbaric nature. In battle, it whips its fiery tail around and slashes away with sharp claws.', '1.1m','19.0kg','Flame','Blaze','https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png'),
    new Pokemon(6,'Charizard', ['Fogo'], 'It is said that Charizard’s fire burns hotter if it has experienced harsh battles.', '1.7m','90.5kg','Flame','Blaze', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png'),
    new Pokemon(7, 'Squirtle', ['Agua'], 'When it retracts its long neck into its shell, it squirts out water with vigorous force.', '0.5m','9.0kg','Tiny Turtle','Torrent', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png'),
    new Pokemon(8, 'Wartortle', ['Agua'], 'It is recognized as a symbol of longevity. If its shell has algae on it, that Wartortle is very old.', '1.0m','22.5kg','Turtle','Torrent', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png'),
    new Pokemon(9, 'Blastoise', ['Agua'], 'It crushes its foe under its heavy body to cause fainting. In a pinch, it will withdraw inside its shell.', '1.6m','85.5kg','Shellfish','Torrent', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png'),
    new Pokemon(25, 'Pikachu', ['Elétrico'], 'When it is angered, it immediately discharges the energy stored in the pouches in its cheeks.', '0.4m','6.0kg','Mouse','Static', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png'),
    new Pokemon(26, 'Raichu ', ['Elétrico'], 'Its tail discharges electricity into the ground, protecting it from getting shocked.', '0.8m','30.0kg','Mouse','Static', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/026.png'),
    new Pokemon(74, 'Geodude', ['Pedra'], 'Commonly found near mountain trails and the like. If you step on one by accident, it gets angry.', '0.4m','20.0kg','Rock','Rock Head / Sturdy', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/074.png'),
    new Pokemon(75, 'Graveler', ['Pedra'], 'Often seen rolling down mountain trails. Obstacles are just things to roll straight over, not avoid.', '1.0m','105.0kg','Rock','Rock Head / Sturdy', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/075.png'),
    new Pokemon(76, 'Golem', ['Pedra'], 'Once it sheds its skin, its body turns tender and whitish. Its hide hardens when it’s exposed to air.', '1.4m','300.0kg','Megaton','Rock Head / Sturdy', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/076.png'),
    new Pokemon(81, 'Magnemite', ['Elétrico'], 'The electromagnetic waves emitted by the units at the sides of its head expel antigravity, which allows it to float.', '0.3m','6.0kg','Magnet','Sturdy / Magnet Pull', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/081.png'),
    new Pokemon(82, 'Magneton', ['Elétrico'], 'Three Magnemite are linked by a strong magnetic force. Earaches will occur if you get too close.' , '1.0m','60.0kg','Magnet','Sturdy / Magnet Pull' , 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/082.png')
  ];
  selectedPokemon?: Pokemon;
  showDetails(pokemon: Pokemon){
    this.selectedPokemon = pokemon;
  }
  closeModal(){
    this.selectedPokemon = undefined;
  }
  filterValue: string = '';
  filteredPokemons(): Pokemon[]{
    if(!this.filterValue){
      return this.pokemons;
    }
    return this.pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(this.filterValue.toLowerCase()));
  }
}
