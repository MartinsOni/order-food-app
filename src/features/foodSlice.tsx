import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Food {
    id: string;
    name: string;
    foods: string[]
}

interface AddFoodPayload {
    id: string;
    foods: string
}

interface FoodState {
    value: Food []
}

const initialState: FoodState = {
    value: []
}

export const foodSlice = createSlice ({
    name:"foods",
    initialState,
    reducers: {
        addCustomer: (state, action: PayloadAction<Food>) => {
            state.value.push(action.payload)
        },

        addFood: (state, action: PayloadAction<AddFoodPayload>) => {
            state.value.forEach((customer => {
                if (customer.id === action.payload.id) {
                    customer.foods.push(action.payload.foods)
                }
            }))
        },

    }
})

export const {addCustomer, addFood} = foodSlice.actions

export default foodSlice.reducer