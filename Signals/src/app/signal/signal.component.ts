import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.scss'
})
export class SignalComponent {

  public firstName = signal('Gabriel');
  public lastName = signal('Cardoso');
  public fullName = computed(() => {
    return this.firstName() + " " + this.lastName();
  });

  constructor() {
    effect(() => {
      console.log('The signal suffered some modification');
      console.log(this.firstName());
    });
  }

  public changeName(newName: string): void {
    this.firstName.update((oldName) => {
      console.log(oldName);
      return newName;
    });
  }
}
