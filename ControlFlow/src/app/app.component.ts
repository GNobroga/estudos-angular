import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ForComponent } from './for/for.component';
import { IfComponent } from './if/if.component';
import { SwitchCaseComponent } from './switch-case/switch-case.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ForComponent, IfComponent, SwitchCaseComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ControlFlow';
}
