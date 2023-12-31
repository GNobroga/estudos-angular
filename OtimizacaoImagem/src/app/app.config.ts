import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideImgixLoader } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    // Permite especificar para o Angular onde pegar as imagens
    // Assim quando eu colocar image.png o Angular vai buscar nesse servidor estático.
    //provideImgixLoader('http://localhost:58488/assets/'),
  ]
};

