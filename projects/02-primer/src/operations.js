export const multiply = (values) => {
    return values.reduce((total, val) => total * val, 1);
};
export const subtract = (amount, values) => {
    return values.reduce((total, val) => total - val, amount);
};
export const divide = (first, second) => {
    return first / second;
};