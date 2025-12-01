import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../feauter/counter/counterSlice'
import todoSlice from '../feauter/todoSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoSlice
  },
})