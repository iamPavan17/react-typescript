import { configureStore } from "@reduxjs/toolkit";

import { cartSlice } from "./cart-slice.ts";

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    // ... other reducers
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
