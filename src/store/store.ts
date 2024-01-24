import { configureStore } from "@reduxjs/toolkit";
import { chartApi } from "./API/chartsApi";

export const store = configureStore({
  reducer: {
    [chartApi.reducerPath]: chartApi.reducer,
  },
  middleware: (getDefaultMiddleWare) => 
    getDefaultMiddleWare().concat([
      chartApi.middleware,
    ])
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;