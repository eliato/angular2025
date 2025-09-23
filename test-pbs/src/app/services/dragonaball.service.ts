import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';

const loadFromLocalStorage = (): Character[] => {
  const data = localStorage.getItem('characters');
  return data ? JSON.parse(data) : [];
}

@Injectable({
  providedIn: 'root'
})
export class DragonaballService {

  characters = signal<Character[]>([
    {name: 'Goku', power: 9001, id: 1},
    {name: 'Vegeta', power: 8001, id: 2},
    /* {name: 'Picoro', power: 5001, id: 3},
    {name: 'Yamcha', power: 50, id: 4}, */
]);

saveToLocalStorage = effect(() => {
  localStorage.setItem('characters', JSON.stringify(this.characters()));
});

addCharacter(character: Character) {
this.characters.update(characters => [...characters, character]);

 }


}
