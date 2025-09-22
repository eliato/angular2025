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

  characters = signal<Character[]>([
    {
      name: 'Goku', power: 9001, id: 1,
    },
    {
      name: 'Vegeta', power: 8001, id: 2,
    },{
      name: 'Picoro', power: 5001, id: 3,
    },
]);


}
