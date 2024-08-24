import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Rest } from '../pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurant: builder.query<Rest, void>({
      query: () => 'restaurantes'
    }),
    getCardapio: builder.query<Rest, string>({
      query: (id) => `restaurantes/${id}`
    })
  })
})

export const { useGetRestaurantQuery, useGetCardapioQuery } = api

export default api
