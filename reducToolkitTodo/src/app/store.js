import {configureStore} from '@reduxjs/toolkit'
import todoReducer from  '../features/Todo/SliceTodo'
 

export const store = configureStore({
    reducer: todoReducer
})