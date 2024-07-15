import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './features/counter/counterSlice';
import { api } from './api';
import wishlistSlice from './features/wishlist/wishlistSlice';
import cartSlice from './features/cart/cartSlice'; // Import the cart slice

export const makeStore = () => {
  return configureStore({
    reducer: {
      counter: counterSlice,
      wishlist: wishlistSlice,
      cart: cartSlice, // Add the cart slice to the store
      [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
  });
};
