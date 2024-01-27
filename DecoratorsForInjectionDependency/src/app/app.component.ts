import { Component, Host } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import ToysService from './services/toys-service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, Component1Component, Component2Component],
  viewProviders: [ToysService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  name = 'Gabriel Cardoso';
  
  constructor() {}
}
