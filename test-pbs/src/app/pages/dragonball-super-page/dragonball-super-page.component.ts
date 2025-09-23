import { Component, signal } from '@angular/core';
import { CharacterListComponent } from "../../components/dragoball/character-list/character-list.component";
import { DragonballAddComponent } from "../../components/dragoball/dragonball-add/dragonball-add.component";


interface Character {
  id: number;
  name: string;
  power: number;

}

@Component({
  selector: 'app-dragonball-super-page',
  imports: [CharacterListComponent,DragonballAddComponent ],
  templateUrl: './dragonball-super-page.component.html',
  styleUrl: './dragonball-super-page.component.css'
})
export class DragonballSuperPageComponent {


  name = signal('');
  power = signal(0);

  characters = signal<Character[]>([
    {name: 'Goku', power: 9001, id: 1},
    {name: 'Vegeta', power: 8001, id: 2},
    /* {name: 'Picoro', power: 5001, id: 3},
    {name: 'Yamcha', power: 50, id: 4}, */
]);

addCharacter(character: Character) {
this.characters.update(characters => [...characters, character]);

 }





}
