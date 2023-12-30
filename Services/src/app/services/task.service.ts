import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Task } from '../models/task';
import { shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  #httpClient = inject(HttpClient);
  #url = signal(environment.apiUrl);

  public get tasks$() {
    return this.#httpClient.get<Task[]>(this.#url()).pipe(shareReplay());
  }
}
