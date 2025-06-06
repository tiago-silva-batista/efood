import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProdutoNoCarrinho } from '../../types'

type CartState = {
  items: ProdutoNoCarrinho[]
}

const initialState = {
  items: [] as ProdutoNoCarrinho[],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    adicionarAoCarrinho: (state, action: PayloadAction<ProdutoNoCarrinho>) => {
      state.items.push(action.payload)
    },
    abrirCarrinho: (state) => {
      state.isOpen = true
    },
    fecharCarrinho: (state) => {
      state.isOpen = false
    },
    remove: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    }
  }
})

export const { adicionarAoCarrinho, abrirCarrinho, fecharCarrinho, remove } =
  cartSlice.actions

export default cartSlice.reducer
