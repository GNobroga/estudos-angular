import { Injectable, signal } from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export default class ToysService {

  totalClients = signal(0);

  increaseClients() {
    this.totalClients.update(old => old + 1);
  }
}
