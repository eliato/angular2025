import { Component, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;

}

@Component({
  selector: 'app-dragonball-page',
  imports: [],
  templateUrl: './dragonball-page.component.html',
  styleUrl: './dragonball-page.component.css'
})
export class DragonballPageComponent {

  name = signal('Goku');
  power = signal(15000);

  characters = signal<Character[]>([
    {name: 'Goku', power: 9001, id: 1},
    {name: 'Vegeta', power: 8001, id: 2},
    {name: 'Picoro', power: 5001, id: 3},
    {name: 'Yamcha', power: 50, id: 4},
]);

addCharacter() {

  if(!this.name() || !this.power() ||this.power() <= 0) return;

  const newCharacter: Character = {
    name: this.name(),
    power: this.power(),
    id: this.characters().length + 1
  }
  this.characters.update(characters => [...characters, newCharacter]);
  this.resetFields();
 }

 resetFields() {
  this.name.set('');
  this.power.set(0);
 }

}
