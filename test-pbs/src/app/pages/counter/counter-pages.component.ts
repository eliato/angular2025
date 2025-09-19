import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter-pages',
  imports: [],
  templateUrl:'./counter-pages.component.html',
  styleUrl: './counter-pages.component.css'
})
export class CounterPagesComponent {

  counter = 10;
  counterSignal = signal(10);


  increaseBy(value: number): void {
    this.counter += value;
    this.counterSignal.update( current => current + value);
  }

  reset(): void {
    this.counter = 10;
    this.counterSignal.set(10);
  }
}
