export const SET_THEME = "@SET_THEME";

export const setTheme = (color: string) => {
    return {
        type: SET_THEME,
        value: color,
    };
};
