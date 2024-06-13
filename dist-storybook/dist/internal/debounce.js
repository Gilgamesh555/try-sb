// @debounce decorator
//
// Delays the execution until the provided delay in milliseconds has
// passed since the last time the function has been called.
//
//
// Usage:
//
//  @debounce(1000)
//  handleInput() {
//    ...
//  }
//
// Each class instance will need to store its timer id, so this unique symbol will be used as property key.
const TIMER_ID_KEY = Symbol();
export const debounce = (delay) => {
    return (_target, _propertyKey, descriptor) => {
        const fn = descriptor.value;
        descriptor.value = function (...args) {
            clearTimeout(this[TIMER_ID_KEY]);
            this[TIMER_ID_KEY] = window.setTimeout(() => {
                fn.apply(this, args);
            }, delay);
        };
    };
};
