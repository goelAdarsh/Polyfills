Array.prototype.myEvery = function (callbackFn, thisArg) {
    if (this === null || this === undefined) {
        throw new TypeError(
            'Array.prototype.myEvery called on null or undefined'
        );
    }
    if (typeof callbackFn !== 'function') {
        throw new TypeError('callbackFn is not a function');
    }
    for (let i = 0; i < this.length; i++) {
        if (!callbackFn.call(thisArg, this[i], i, this)) {
            return false;
        }
        return true;
    }
};
