import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Produto } from '../types'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getFeaturedProduct: builder.query<Produto, string>({
      query: (id) => `restaurantes/${id}`
    })
  })
})

export const { useGetFeaturedProductQuery } = api

export default api
