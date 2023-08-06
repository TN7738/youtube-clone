import { configureStore } from '@reduxjs/toolkit'
import appSlice from './appSlice'
import searchSlice from './searchSlice';
import showSuggestionSlice from './showSuggestionSlice';

const store = configureStore({
    reducer: {
        app: appSlice,
        search: searchSlice,
        showSuggestion: showSuggestionSlice
    } 
});

export default store;