import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestingDirective } from './diretivaComoComponente/testing.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TestingDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {


}
