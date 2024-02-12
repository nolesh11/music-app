import { configureStore } from "@reduxjs/toolkit";

import userSlices from "./slices/userSlices";
import { chartApi } from "./API/chartsApi";
import { albumApi } from "./API/albumApi";
import { artistApi } from "./API/artistApi";
import { songApi } from "./API/songApi";
import { searchApi } from "./API/searchApi";

export const store = configureStore({
  reducer: {
    userSlices,
    [chartApi.reducerPath]: chartApi.reducer,
    [albumApi.reducerPath]: albumApi.reducer,
    [artistApi.reducerPath]: artistApi.reducer,
    [songApi.reducerPath]: songApi.reducer,
    [searchApi.reducerPath]: searchApi.reducer,
  },
  middleware: (getDefaultMiddleWare) => 
    getDefaultMiddleWare().concat([
      chartApi.middleware,
      albumApi.middleware,
      artistApi.middleware,
      songApi.middleware,
      searchApi.middleware,
    ])
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;