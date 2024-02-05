import { ResolveFn } from '@angular/router';

type Product = {
  id: number;
  name: string;
};

export const pushDataResolver: ResolveFn<Product> = (route, state) => {

  return  {
    id: 1,
    name: 'Celular'
  };;
};
