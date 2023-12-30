import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TaskService } from './services/task.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { Task } from './models/task';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {

  #service = inject(TaskService);

  // Converte observable para signal
  public tasks = toSignal(this.#service.tasks$);

  public name = signal('Gabriel');

  // Signal readonly, sem set ou get
  public readonlyName = this.name.asReadonly();

  public ngOnInit(): void {

  }

}
