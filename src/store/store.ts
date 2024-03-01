import { configureStore } from "@reduxjs/toolkit";

import userSlice from "./slices/userSlices";
import { chartApi } from "./API/chartsApi";
import { albumApi } from "./API/albumApi";
import { artistApi } from "./API/artistApi";
import { songApi } from "./API/songApi";
import { searchApi } from "./API/searchApi";
import { authApi } from "./API/authApi";

export const store = configureStore({
  reducer: {
    userSlice,
    [chartApi.reducerPath]: chartApi.reducer,
    [albumApi.reducerPath]: albumApi.reducer,
    [artistApi.reducerPath]: artistApi.reducer,
    [songApi.reducerPath]: songApi.reducer,
    [searchApi.reducerPath]: searchApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleWare) => 
    getDefaultMiddleWare().concat([
      chartApi.middleware,
      albumApi.middleware,
      artistApi.middleware,
      songApi.middleware,
      searchApi.middleware,
      authApi.middleware,
    ])
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;