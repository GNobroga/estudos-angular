import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { of } from 'rxjs';
import { CustomPipePipe } from './pipes/custom-pipe.pipe';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, CustomPipePipe],
  providers: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  public date = signal(new Date());

  public observable$ = of([1, 2, 3, 4, 5]);
}
