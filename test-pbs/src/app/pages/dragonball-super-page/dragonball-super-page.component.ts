import { Component, inject, signal } from '@angular/core';
import { CharacterListComponent } from "../../components/dragoball/character-list/character-list.component";
import { DragonballAddComponent } from "../../components/dragoball/dragonball-add/dragonball-add.component";
import { DragonaballService } from '../../services/dragonaball.service';


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

public dragonballService = inject(DragonaballService);

}
