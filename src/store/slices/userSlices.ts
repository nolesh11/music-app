import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

interface ILoginPageForm {
  email: string;
  password: string;
}

export const fetchUserData = createAsyncThunk(
  "fetchUserData",
  async (params: ILoginPageForm) => {
    const { data } = await axios.post("/login", params);
    return data;
  }
);

export const fetchUserDataMe = createAsyncThunk("fetchUserDataMe", async () => {
  const { data } = await axios.get("/getme");
  return data;
});

const initialState = {
  data: null,
  status: "loading",
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    logout: (state) => {
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchUserData.pending, (state) => {
      state.status = "loading";
      state.data = null;
    })
    .addCase(fetchUserData.fulfilled, (state, action) => {
      state.status = "loaded";
      state.data = action.payload;
    })
    .addCase(fetchUserData.rejected, (state) => {
      state.status = "loaded";
      state.data = null;
    })
    .addCase(fetchUserDataMe.pending, (state) => {
      state.status = "loading";
      state.data = null;
    })
    .addCase(fetchUserDataMe.fulfilled, (state, action) => {
      state.status = "loaded";
      state.data = action.payload;
    })
    .addCase(fetchUserDataMe.rejected, (state) => {
      state.status = "loaded";
      state.data = null;
    });
  },
});

export default userSlice.reducer;
export const selectIsAuth = (state: any) => Boolean(state.userSlice.data); // eslint-disable-line
export const { logout } = userSlice.actions;
