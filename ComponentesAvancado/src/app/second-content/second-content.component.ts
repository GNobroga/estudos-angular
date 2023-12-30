import { Component, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'app-second-content',
  standalone: true,
  imports: [],
  templateUrl: './second-content.component.html',
  styleUrl: './second-content.component.scss',
  /*
    A propriedade host refere-se ao próprio componente e serve pra aplicar atributos para ele, seja atributos
    de acessibilidade ou até mesmo eventos.
  */
  host: {
    role: 'button',
    '[attr.style]': 'name', // Atribuindo uma propriedade no style
    '(click)': 'clickHere($event)' // Atribuindo um evento ao componente
  }
})
export class SecondContentComponent {

  public name = 'background-color: red; ';

  public clickHere(event: any) {
    window.alert('Host elements');
  }

  @HostBinding('style') // Associa o atributo style no componente e essa propriedade
  public style = 'background-color: yellow';

  @HostListener('click') // Associa o  evento de click no componente
  public changeBackground() {
    this.style = 'background-color: silver';
  }
}
