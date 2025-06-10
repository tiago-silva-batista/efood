import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProdutoNoCarrinho } from '../../types'

export type Etapa = 'cart' | 'delivery' | 'payment' | 'confirmation'

type CartState = {
  items: ProdutoNoCarrinho[]
  isOpen: boolean
  step: Etapa
}

const initialState: CartState = {
  items: [],
  isOpen: false,
  step: 'cart' // nova propriedade
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
      state.step = 'cart'
    },
    remove: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    mudarEtapa: (state, action: PayloadAction<Etapa>) => {
      state.step = action.payload
    }
  }
})

export const {
  adicionarAoCarrinho,
  abrirCarrinho,
  fecharCarrinho,
  remove,
  mudarEtapa
} = cartSlice.actions

export default cartSlice.reducer
