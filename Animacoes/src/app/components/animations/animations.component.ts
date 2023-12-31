import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, DoCheck, OnInit, effect, signal } from '@angular/core';

@Component({
  selector: 'app-animations',
  standalone: true,
  imports: [],
  templateUrl: './animations.component.html',
  styleUrl: './animations.component.scss',
  // Criando animations
  animations: [
    // Triggers são o pilar das animations no Angular
    trigger('move-ball', [
      state('left', style({
          transform: 'scale(1.0) translate(0) rotate(0deg)',
          backgroundColor: 'red'
       })),
       state('right', style({
        transform: 'scale(1.2) translate(60vw) rotate(360deg)'
       })),
       transition('left <=> right', animate('1s'))
    ]) // É um disparador de animação <tag [@move-ball]></tag>
  ]
})
export class AnimationsComponent implements DoCheck {

  public moveIn = signal<'left' | 'right'>('left');

  public keyValue = { [this.moveIn()]: 100};

  constructor() {
    effect(() => {
      this.keyValue = { [this.moveIn()]: 100};
    });
  }

  public ngDoCheck(): void {
      console.log(this.keyValue);
  }

}

