import {configureStore} from '@reduxjs/toolkit'
import reducer from  '../features/Todo/SliceTodo'
 

export const store = configureStore({
    reducer: reducer
})