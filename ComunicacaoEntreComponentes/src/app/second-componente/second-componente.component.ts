import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-second-componente',
  standalone: true,
  imports: [],
  templateUrl: './second-componente.component.html',
  styleUrl: './second-componente.component.scss'
})
export class SecondComponenteComponent {

  public description = signal('');

  @Input({
    required: true, // Torna o input obrigatório
    transform: (value: string) => value.toUpperCase(), // Função pra transformar o valor de entrada,
    alias: 'description' // Dando um alias para o input
  })
  set setDescription(value: string) {
    this.description.set(value);
  }
}
