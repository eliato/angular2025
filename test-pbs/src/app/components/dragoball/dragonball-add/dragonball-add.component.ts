import { ChangeDetectionStrategy, Component, output, signal } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'app-dragonball-add',
  imports: [],
  templateUrl: './dragonball-add.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DragonballAddComponent {

name = signal('');
power = signal(0);
newCharacter = output<Character>();


addCharacter() {

  if(!this.name() || !this.power() ||this.power() <= 0) return;

  const newCharacter: Character = {
    name: this.name(),
    power: this.power(),
    id: Math.floor(Math.random() * 10000),
    //id: this.characters().length + 1
  }
  this.newCharacter.emit(newCharacter);
//  this.characters.update(characters => [...characters, newCharacter]);
  this.resetFields();
 }

 resetFields() {
  this.name.set('');
  this.power.set(0);
 }


}
