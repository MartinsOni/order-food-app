import { configureStore } from "@reduxjs/toolkit"
import orderReducer from "../features/orderSlice"
import foodReducer from "../features/foodSlice"

export const store = configureStore ({
    reducer: {
        orders: orderReducer,
        foods: foodReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch