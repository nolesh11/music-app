import { configureStore } from "@reduxjs/toolkit";
import { chartApi } from "./API/chartsApi";
import { albumApi } from "./API/albumApi";
import { artistApi } from "./API/artistApi";

export const store = configureStore({
  reducer: {
    [chartApi.reducerPath]: chartApi.reducer,
    [albumApi.reducerPath]: albumApi.reducer,
    [artistApi.reducerPath]: artistApi.reducer,
  },
  middleware: (getDefaultMiddleWare) => 
    getDefaultMiddleWare().concat([
      chartApi.middleware,
      albumApi.middleware,
      artistApi.middleware,
    ])
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;