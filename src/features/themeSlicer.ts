import { createSlice } from '@reduxjs/toolkit';

const getThemeFromLocal = () => {
    var theme = localStorage.getItem('theme');
    if (theme) {
        return theme === 'dark';
    }
    else {
        return true;
    }
}

type ThemeState = {
    isDarkMode: boolean;
}

const initialState: ThemeState = {
    isDarkMode: getThemeFromLocal(),
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.isDarkMode = !state.isDarkMode;
        }
    },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;