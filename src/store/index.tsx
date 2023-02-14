import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import mockTodoReduser from './redusers/mockTodo.slice'
import { placeholderApi } from './redusers/placeholderApi'
import thunkMiddleware from 'redux-thunk';

export const store = configureStore({
  reducer: {
    [placeholderApi.reducerPath]: placeholderApi.reducer,
    todo: mockTodoReduser,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(placeholderApi.middleware, thunkMiddleware),

})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;