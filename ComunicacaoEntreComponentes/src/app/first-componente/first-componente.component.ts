import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-first-componente',
  standalone: true,
  imports: [],
  templateUrl: './first-componente.component.html',
  styleUrl: './first-componente.component.scss',
  inputs: ['title', 'description', 'backgroundColor'],
  outputs: ['changeColor']
})
export class FirstComponenteComponent {

  public title = '';
  public description = '';
  public backgroundColor = '';

  public changeColor = new EventEmitter();

  public changeColorAction() {
    this.changeColor.emit();
  }
}
