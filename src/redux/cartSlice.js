// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.items = state.items.filter((item) => item.id !== itemId);
    },
    incrementQuantity: (state, action) => {
      const itemId = action.payload;
      const item = state.items.find((i) => i.id === itemId);
      if (item) item.quantity += 1;
    },
    decrementQuantity: (state, action) => {
      const itemId = action.payload;
      const item = state.items.find((i) => i.id === itemId);
      if (item && item.quantity > 1) item.quantity -= 1;
    },
  },
});

export const { addItem, removeItem, incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;
