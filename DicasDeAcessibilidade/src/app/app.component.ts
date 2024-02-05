import { Component, OnInit } from '@angular/core';
import ContainerComponent from './container/container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
