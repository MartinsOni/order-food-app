import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface OrderState {
    value: string []
}

const initialState: OrderState = {
    value: []
}

export const orderSlice = createSlice ({
    name:"orders",
    initialState,
    reducers: {
        addOrder: (state, action: PayloadAction<string>) => {
            state.value.push(action.payload)
        },

        removeOrder: (state, action: PayloadAction<number>) => {
            state.value.splice(action.payload, 1)
        },

    }
})

export const {addOrder, removeOrder} = orderSlice.actions

export default orderSlice.reducer