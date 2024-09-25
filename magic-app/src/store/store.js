
import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "sliceForm",
  initialState: {
    requestData: {
      format: "",
      colors: [],
      typeDeck:""
    },
  },
  reducers: {
    colectFormData(state, action) {
      console.log(action);
      state.requestData.colors = action.payload.colors;
      state.requestData.format = action.payload.format;
      state.requestData.typeDeck = action.payload.typeDeck
    },
  },
});

const deckSlice = createSlice({
  name: "sliceDeck",
  initialState: {
    rawDeck: [],
    formatedDeck: []
  },
  reducers: {
    setRawDeck(state, action) {
      state.rawDeck = action.payload;
      console.log(state.rawDeck)
    }
  }
})

const store = configureStore({
  reducer: {
    form: formSlice.reducer,
    deck: deckSlice.reducer
  },
});

export const { colectFormData } = formSlice.actions;
export const {setRawDeck} = deckSlice.actions;
export default store;
