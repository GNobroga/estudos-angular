import { Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Home',
    // Se exportar o component com export default o then não será necessário.
    loadComponent: () => import('./pages/home/home.component'), // Lazy loading de component
    children: [ // Rotas filhas
      {
        title: 'Home - Contact',
        path: 'contact',
        component: ContactComponent
      }
    ]
  },
  {
    path: 'account/:id', // Paramêtros dinâmicos
    component: LoginComponent,
  },
  {
    path: 'courses',
    // loadChildren permite carregar um arquivo de rotas que vai servir como children dessa rota
    loadChildren: () => import('./course.routes'),
  },
  {
    path: '**',
    redirectTo: ''
  }
];
