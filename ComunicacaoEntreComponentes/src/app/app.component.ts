import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FirstComponenteComponent } from './first-componente/first-componente.component';
import { SecondComponenteComponent } from './second-componente/second-componente.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FirstComponenteComponent, SecondComponenteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  public backgroundColor = '';

  public onChangeColor(value: string): void {
    this.backgroundColor = value;
  }

}
