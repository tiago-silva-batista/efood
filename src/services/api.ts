import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Produto } from '../types'

export type Restaurante = {
  id: number
  titulo: string
  tipo?: string
  destacado?: boolean
  avaliacao?: number
  descricao?: string
  capa?: string
}

export type RestauranteDetalhes = Restaurante & {
  cardapio: Produto[]
}

// Em dev usamos json-server (porta 4000); em prod usamos /api (Vercel/function)
const API_BASE =
  process.env.NODE_ENV === 'development' ? 'http://localhost:4000' : '/api'

const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl:
      process.env.NODE_ENV === 'development' ? 'http://localhost:4000' : '/api'
  }),
  endpoints: (builder) => ({
    // GET /restaurantes
    getRestaurants: builder.query<Restaurante[], void>({
      query: () => 'restaurantes'
    }),

    // GET /restaurantes/:id
    getRestaurantById: builder.query<RestauranteDetalhes, string | number>({
      query: (id) => `restaurantes/${id}`
    }),

    // POST /pedidos  -> finaliza o pedido
    finalizeOrder: builder.mutation<
      { id: number } & Record<string, unknown>,
      any
    >({
      query: (payload) => ({
        url: 'pedidos',
        method: 'POST',
        body: {
          ...payload,
          createdAt: new Date().toISOString()
        }
      })
    })
  })
})

export const {
  useGetRestaurantsQuery,
  useGetRestaurantByIdQuery,
  useFinalizeOrderMutation
} = api

export default api
