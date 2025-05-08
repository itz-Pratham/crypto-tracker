import { configureStore } from '@reduxjs/toolkit';
import cryptoReducer from './cryptoSlice';
import { websocketMiddleware } from './middleware';

const store = configureStore({
  reducer: {
    crypto: cryptoReducer
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(websocketMiddleware)
});

export default store;