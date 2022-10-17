export const UpperFirstString = (s: string) => {
    if (!s) {
        return '';
    }
    return s.replace(/\b[a-z]/, (letter) => letter.toUpperCase());
};
