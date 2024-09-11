import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit'

const formSlice = createSlice({
    name : 'sliceForm',
    initialState : {
        format: '',
        colors: []
    },
    reducer : {
        colectFormData(state, payload) {
            state.colors = payload.colors;
            state.format = payload.format;
        }
    }
});

const store = configureStore({
    reducer: {
        form: formSlice.reducer
    }
})

export const formActions = formSlice.actions;
export default store;