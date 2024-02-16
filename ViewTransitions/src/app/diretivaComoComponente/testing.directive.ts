import { Directive } from '@angular/core';

@Directive({
  selector: 'appTesting', // Usando diretiva como componente
  standalone: true
})
export class TestingDirective {

  constructor() { }

}
