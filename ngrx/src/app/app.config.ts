import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { StoreFeatureModule, StoreModule, provideState, provideStore } from '@ngrx/store';
import { productReducer } from './store/count';
import { eletronicFeature, eletronicReducer } from './store/feature';


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideStore({ productReducer: productReducer }), provideState(eletronicFeature)]
};
