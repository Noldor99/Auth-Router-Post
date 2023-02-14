import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { IAlbums, IPosts, ITodos, IUsers } from '../../models/models'
 

export const placeholderApi = createApi({
  reducerPath: 'placeholder/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/'
  }),
  refetchOnFocus: false,
  endpoints: build => ({
    getPosts:build.query<IPosts[] | any, void>({
      query: () => ({
        url: `/posts?_limit=10`,
        method: 'GET'
      })
    }),
    getOneUsers:build.query<IUsers | any , string | undefined  >({
      query: (id) => ({
        url: `users/${id}`,
        method: 'GET'
      })
    }),
    getAlbumsUsers:build.query<IAlbums[] , string | undefined  >({
      query: (id) => ({
        url: `users/${id}/albums`,
        method: 'GET'
      })
    }),
    getTodosUsers:build.query<ITodos[], string | undefined  >({
      query: (id) => ({
        url: `users/${id}/todos`,
        method: 'GET'
      })
    }),
    getPostsUsers:build.query<IPosts[], string | undefined  >({
      query: (id) => ({
        url: `users/${id}/posts`,
        method: 'GET'
      })
    }),
    postPosts:build.mutation<IPosts, IPosts>({
      query: (body) => ({
        url: `/posts`,
        method: 'POST',
        body: body
      })
    }),
    getTodos:build.query<ITodos[] | any, void>({
      query: () => ({
        url: `/todos?_limit=10`,
        method: 'GET'
      })
    }),
    getUsers :build.query<IUsers[] | any, void>({
      query: () => ({
        url: `/users?_limit=10`,
        method: 'GET'
      })
    }),
    
  })
})

export const {useGetPostsQuery, 
              useGetUsersQuery, 
              useGetTodosQuery, 
              usePostPostsMutation,
              useGetOneUsersQuery,
              useGetAlbumsUsersQuery,
              useGetPostsUsersQuery,
              useGetTodosUsersQuery
            } = placeholderApi

