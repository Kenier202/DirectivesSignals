import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-counter-page',
  templateUrl: './counter-page.component.html',
  styleUrls: ['./counter-page.component.css']
})
export class CounterPageComponent {
  public counter = signal(10);
  public squaredCounter = computed(() => this.counter() * this.counter());

  increseBy(number: number) {
    this.counter.update(value => value + number);
  }
}
