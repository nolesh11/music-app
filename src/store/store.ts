import { configureStore } from "@reduxjs/toolkit";
import { chartApi } from "./API/chartsApi";
import { albumApi } from "./API/albumApi";

export const store = configureStore({
  reducer: {
    [chartApi.reducerPath]: chartApi.reducer,
    [albumApi.reducerPath]: albumApi.reducer,
  },
  middleware: (getDefaultMiddleWare) => 
    getDefaultMiddleWare().concat([
      chartApi.middleware,
      albumApi.middleware,
    ])
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;