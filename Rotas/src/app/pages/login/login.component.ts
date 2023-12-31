import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  // Graças ao withComponentInputBinding ele faz o binding pra automaticamente
  @Input() set id(id: number) {
    console.log('Aqui', id);
  }
}
