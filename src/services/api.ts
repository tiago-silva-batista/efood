import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Produto } from '../types'

export type Restaurante = {
  id: number | string
  titulo: string
  destacado?: boolean
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
    checkout: builder.mutation<{ orderId: string }, any>({
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
  useCheckoutMutation
} = api

export default api
