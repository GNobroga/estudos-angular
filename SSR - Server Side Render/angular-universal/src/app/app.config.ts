import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withHttpTransferCacheOptions } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(
      withHttpTransferCacheOptions({
        includePostRequests: true,
      }),
    )
  ]
};

/**
 *  - provideClientHydration()
 *
 * - O que é Hydration
  * A hidratação é o processo que restaura o aplicativo renderizado do lado do servidor no cliente. Isso inclui coisas como
  * reutilizar as estruturtas DOM renderizadas pelo servidor, persisitr o estado do aplicativo, transferir dados do aplicativo que já foram
  * recuperados pelo servidor e outros processos.
  *
 * - Por que a Hydration é importante?
 *
  * A hidratação melhora o desempenho do aplicativo, evitando trabalho extra para recriar nós DOM. Em vez disso, o Angular tenta combinar
  * os elementos DOM existentes com a estrutura do aplicativo em tempo de execução e reutiliza os nós DOM quando possível.
 */
