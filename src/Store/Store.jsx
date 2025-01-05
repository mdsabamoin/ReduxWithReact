import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "../Feature/Counter/CounterSlice"
import {authReducer} from "../Slices/AuthSlice"
export const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth:authReducer
        
      },
})

