// src/services/api.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Produto } from '../types'

export type Restaurante = {
  id: number | string
  titulo: string
  tipo?: string
  destacado?: boolean
  avaliacao?: number
  descricao?: string
  capa?: string
  cardapio?: Produto[]
}

/** Corpo do POST /api/checkout */
export type CheckoutPayload = {
  products: Array<{
    id: number
    price: number
    quantity?: number
  }>
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: number
      complement?: string
    }
  }
  payment: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}

const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    // suas serverless functions estão sob /api
    baseUrl: '/api'
  }),
  endpoints: (builder) => ({
    // GET /api/restaurantes
    getRestaurants: builder.query<Restaurante[], void>({
      query: () => 'restaurantes'
    }),

    // GET /api/restaurantes/:id
    getRestaurantById: builder.query<Restaurante, string | number>({
      query: (id) => `restaurantes/${id}`
    }),

    // POST /api/checkout -> { orderId: string }
    finalizeOrder: builder.mutation<{ orderId: string }, CheckoutPayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
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
