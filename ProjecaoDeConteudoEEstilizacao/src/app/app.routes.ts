import { Routes } from '@angular/router';
import { Rota1Component } from './rota1/rota1.component';
import { pushDataResolver } from './resolvers/push-data.resolver';

export const routes: Routes = [
  {
    path: 'rota1',
    component: Rota1Component,
    resolve: {
      product: pushDataResolver,
    }
  }
];
