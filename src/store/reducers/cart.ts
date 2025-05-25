import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Produto = {
  id: string
  titulo: string
  preco: number
}

const initialState: Produto[] = []

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    adicionarProduto: (state, action: PayloadAction<Produto>) => {
      state.push(action.payload)
    }
  }
})

export const { adicionarProduto } = cartSlice.actions
export default cartSlice.reducer
