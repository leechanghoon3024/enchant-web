export const FixedNumber = (n: number) => {
    const num = Number(n);
    if (isNaN(num)) {
        return '0';
    }
    return num.toFixed(2);
};
