import { createAction, createFeature, createReducer, on } from "@ngrx/store";

export interface Eletronic {
  name: string;
  brand: string;
}

const initialState: { eletronics: Array<Eletronic>, loading: boolean } = {
  eletronics: [
    {
      name: 'Galaxy S20',
      brand: 'Samsung'
    }
  ],
  loading: false,
}


export const getAllEletronics = createAction('[Eletronics] Find All');

export const eletronicFeature = createFeature({
  name: 'Eletronic',
  reducer: createReducer(initialState)
})

export const { selectEletronics, reducer: eletronicReducer } = eletronicFeature; // O feature cria selects
