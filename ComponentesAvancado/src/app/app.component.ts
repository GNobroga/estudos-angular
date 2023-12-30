import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FirstContentComponent } from './first-content/first-content.component';
import { SecondContentComponent } from './second-content/second-content.component';
import { ThirdContentComponent } from './third-content/third-content.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    FirstContentComponent,
    SecondContentComponent,
    ThirdContentComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ComponentesAvancado';
}
