import { Component, Inject, PLATFORM_ID, afterNextRender, afterRender } from '@angular/core';
import { CommonModule, isPlatformBrowser, isPlatformServer } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor(@Inject(PLATFORM_ID) private _platformId: any) {
    // Caso não seja feito essa verificação ele renderiza dos dois lados
    if (isPlatformBrowser(_platformId)) {
      console.log(localStorage.setItem('platform', 'browser'));
      console.log('Rondando no Browser');
    }

    if (isPlatformServer(_platformId)) {
      console.log('Rodando no Server');
    }

    /*
      afterNextRender -> Executa uma vez, semelhante ao AfterViewInit (Não executa na renderização do (SSR))
    */
    afterNextRender(() => {});

    /*
      afterRender -> Executa após cada detecção de alteração (SSR e Browser)
    */
    afterRender(() => {});
  }
}
