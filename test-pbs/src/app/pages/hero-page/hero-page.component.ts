import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-hero-page',
  imports: [],
  templateUrl: './hero-page.component.html',
  styleUrl: './hero-page.component.css'
})
export class HeroPageComponent {

  name = signal('Ironman');
  age = signal(45);

  getHeroDescription(): string {
    return `${ this.name() } - ${ this.age() }`;
  }

  changeHero(): void {
    this.name.set('Spiderman');
    this.age.set(30);
  }

  resetForm(): void {
    this.name.set('Ironman');
    this.age.set(45);
  }


  changeAge(): void {
    this.age.update( current => current + 1);
  }


}
