export const SET_COUNT = "@SET_COUNT";

export const setCount = (cuenta: number) => {
    return {
        type: SET_COUNT,
        value: cuenta,
    };
};
