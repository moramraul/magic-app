
import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "sliceForm",
  initialState: {
    requestData: {
      format: "",
      colors: [],
    },
  },
  reducers: {
    colectFormData(state, action) {
      console.log(action);
      state.requestData.colors = action.payload.colors;
      state.requestData.format = action.payload.format;
    },
  },
});

const store = configureStore({
  reducer: {
    form: formSlice.reducer,
  },
});

export const { colectFormData } = formSlice.actions;
export default store;
