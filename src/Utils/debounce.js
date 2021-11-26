export const debounceHook = (dispatch,fn, delay) => {
    let timer;
    return function () {
        const self = this;
        const args= arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            dispatch(fn.apply(self, args));
        }, delay);
    };
};
