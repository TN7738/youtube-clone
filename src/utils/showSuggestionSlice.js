import { createSlice } from "@reduxjs/toolkit";

const showSuggestionSlice = createSlice({
    name: 'showSuggestion',
    initialState: {
        showSuggestion: false
    },
    reducers: {
        showSuggestion: (state) => {
            state.showSuggestion = true;
        },
        hideSuggestion: (state) => {
            state.showSuggestion = false;
        }
    }
});

export const { showSuggestion, hideSuggestion } = showSuggestionSlice.actions;
export default showSuggestionSlice.reducer;