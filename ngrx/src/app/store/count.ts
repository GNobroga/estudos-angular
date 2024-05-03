import { createAction, createActionGroup, createReducer, createSelector, on, props } from "@ngrx/store";

export interface AppState {
  productReducer: {
    products: Product[];
  };
}
export interface Product {
  id: number;
  name: string;
  price: number;
}



const initialState: { products: Product[] } = {
  products: [],
};

export const deleteProduct = createAction('[ProductAction] Delete Product', props<{ id: number }>());

// Permite agrupar actions, deixando o código mais organizado
export const ProductActions = createActionGroup({
  source: 'ProductActions',
  events: {
    'Create Product': props<Omit<Product, 'id'>>(),
    'Find By Name': props<String>(),
  },
})

let id = 0;
const incrementId = () => ++id;

export const productReducer = createReducer(
  initialState,
  on(ProductActions.createProduct, (state, product) => ({ products: [...state.products, { ...product, id: incrementId() }]})),
  on(deleteProduct, (state, props) => ({ products: state.products.filter(product => product.id !== props.id)})),
);


const selectProduct = (state: AppState) => state.productReducer.products;

export const selectProductById = createSelector(
  selectProduct,
  (products: Product[], props: any) => {
    return products?.filter(product => product.name.includes(props.search));
  }
)
