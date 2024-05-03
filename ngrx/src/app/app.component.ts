import { ChangeDetectionStrategy, Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { AppState, Product, ProductActions, deleteProduct, selectProductById } from './store/count';
import { Eletronic, selectEletronics } from './store/feature';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {

  #store = inject(Store<AppState>);

  products = [] as Product[];

  eletronics = [] as Eletronic[];

  ngOnInit(): void {
      this.#store.select(state => state.productReducer.products).subscribe(products => this.products = products);
      this.#store.select(selectEletronics).subscribe(eletronics => this.eletronics = eletronics);
  }

  addProduct(product: Product) {
    this.#store.dispatch(ProductActions.createProduct(product));
  }

  searchProduct(value: string) {
    this.#store.select(selectProductById, { search: value }).subscribe(products => this.products = products)
  }

  deleteProduct(id: number) {
    this.#store.dispatch(deleteProduct({ id }));
  }

}
