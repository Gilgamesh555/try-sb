/** Ensures a number stays within a minimum and maximum value */
export function clamp(value, min, max) {
    const noNegativeZero = (n) => (Object.is(n, -0) ? 0 : n);
    if (value < min) {
        return noNegativeZero(min);
    }
    if (value > max) {
        return noNegativeZero(max);
    }
    return noNegativeZero(value);
}
