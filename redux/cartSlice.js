import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { products: [], total: 0, quentity: 0 },
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
      state.quentity += 1;
      state.total += action.payload.price * action.payload.quentity;
    },
    reset: (state) => {
      state = initialState;
    },
  },
});

export const { addProduct, reset } = cartSlice.actions;
export default cartSlice.reducer;
