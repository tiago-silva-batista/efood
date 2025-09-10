import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Produto } from '../types'

export type Restaurante = {
  id: number | string
  titulo: string
  tipo?: string
  destacado?: boolean
  capa?: string
}

const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<Restaurante[], void>({
      query: () => 'restaurantes'
    }),

    getRestaurantById: builder.query<any, string | number>({
      query: (id) => `restaurantes/${id}`
    }),

    // endpoint de checkout/finalização do pedido
    finalizeOrder: builder.mutation<{ orderId: string }, any>({
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
