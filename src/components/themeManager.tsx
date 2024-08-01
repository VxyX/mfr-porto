// --theme-dark: #0b031b;
// --theme-white: #dbdbdb;
// --theme-pink: #d448f7;
// --theme-purple: #9027f1;

const colorVar = [
    { name: "theme-dark", dark: "#0b031b", light: "#b6aec0a4" },
    { name: "theme-light", dark: "#b6aec0a4", light: "#0b031b" },
    { name: "theme-black", dark: "#291e3b", light: "#dbdbdb" },
    { name: "theme-white", dark: "#dbdbdb", light: "#291e3b" },
    { name: "theme-pink", dark: "#d448f7", light: "#d448f7" },
    { name: "theme-purple", dark: "#9027f1", light: "#9027f1" },
    { name: "theme-card", dark: "#8736a7", light: "#d9d0e7" },
    { name: "theme-card-shadow", dark: "#372350cc", light: "#dbc7eeab" },
]



const setDarkMode = (dark: boolean) => {
    if (dark) {
        colorVar.forEach(col => {
            document.documentElement.style.setProperty(`--${col.name}`, col.dark);
        })
    }
    else {
        colorVar.forEach(col => {
            document.documentElement.style.setProperty(`--${col.name}`, col.light);
        })
    }
}

export default setDarkMode;