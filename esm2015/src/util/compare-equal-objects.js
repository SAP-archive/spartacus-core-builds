/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} objA
 * @param {?} objB
 * @return {?}
 */
export function shallowEqualObjects(objA, objB) {
    if (objA === objB) {
        return true;
    }
    if (!objA || !objB) {
        return false;
    }
    /** @type {?} */
    const aKeys = Object.keys(objA);
    /** @type {?} */
    const bKeys = Object.keys(objB);
    /** @type {?} */
    const aKeysLen = aKeys.length;
    /** @type {?} */
    const bKeysLen = bKeys.length;
    if (aKeysLen !== bKeysLen) {
        return false;
    }
    for (let i = 0; i < aKeysLen; i++) {
        /** @type {?} */
        const key = aKeys[i];
        if (objA[key] !== objB[key]) {
            return false;
        }
    }
    return true;
}
/**
 * @param {?} objA
 * @param {?} objB
 * @return {?}
 */
export function deepEqualObjects(objA, objB) {
    if (objA === objB) {
        return true; // if both objA and objB are null or undefined and exactly the same
    }
    else if (!(objA instanceof Object) || !(objB instanceof Object)) {
        return false; // if they are not strictly equal, they both need to be Objects
    }
    else if (objA.constructor !== objB.constructor) {
        // they must have the exact same prototype chain, the closest we can do is
        // test their constructor.
        return false;
    }
    else {
        for (const key in objA) {
            if (!objA.hasOwnProperty(key)) {
                continue; // other properties were tested using objA.constructor === y.constructor
            }
            if (!objB.hasOwnProperty(key)) {
                return false; // allows to compare objA[ key ] and objB[ key ] when set to undefined
            }
            if (objA[key] === objB[key]) {
                continue; // if they have the same strict value or identity then they are equal
            }
            if (typeof objA[key] !== 'object') {
                return false; // Numbers, Strings, Functions, Booleans must be strictly equal
            }
            if (!deepEqualObjects(objA[key], objB[key])) {
                return false;
            }
        }
        for (const key in objB) {
            if (objB.hasOwnProperty(key) && !objA.hasOwnProperty(key)) {
                return false;
            }
        }
        return true;
    }
}
/**
 * @param {?} obj
 * @param {?} arr
 * @return {?}
 */
export function countOfDeepEqualObjects(obj, arr) {
    return arr.reduce((/**
     * @param {?} acc
     * @param {?} curr
     * @return {?}
     */
    (acc, curr) => {
        if (deepEqualObjects(obj, curr)) {
            acc++;
        }
        return acc;
    }), 0);
}
/**
 * @param {?} obj
 * @param {?} arr
 * @return {?}
 */
export function indexOfFirstOccurrence(obj, arr) {
    for (let index = 0; index < arr.length; index++) {
        if (deepEqualObjects(arr[index], obj)) {
            return index;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGFyZS1lcXVhbC1vYmplY3RzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3V0aWwvY29tcGFyZS1lcXVhbC1vYmplY3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE1BQU0sVUFBVSxtQkFBbUIsQ0FBQyxJQUFZLEVBQUUsSUFBWTtJQUM1RCxJQUFJLElBQUksS0FBSyxJQUFJLEVBQUU7UUFDakIsT0FBTyxJQUFJLENBQUM7S0FDYjtJQUNELElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7UUFDbEIsT0FBTyxLQUFLLENBQUM7S0FDZDs7VUFDSyxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7O1VBQ3pCLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzs7VUFDekIsUUFBUSxHQUFHLEtBQUssQ0FBQyxNQUFNOztVQUN2QixRQUFRLEdBQUcsS0FBSyxDQUFDLE1BQU07SUFFN0IsSUFBSSxRQUFRLEtBQUssUUFBUSxFQUFFO1FBQ3pCLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7SUFDRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFOztjQUMzQixHQUFHLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNwQixJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDM0IsT0FBTyxLQUFLLENBQUM7U0FDZDtLQUNGO0lBQ0QsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUsZ0JBQWdCLENBQUMsSUFBWSxFQUFFLElBQVk7SUFDekQsSUFBSSxJQUFJLEtBQUssSUFBSSxFQUFFO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLENBQUMsbUVBQW1FO0tBQ2pGO1NBQU0sSUFBSSxDQUFDLENBQUMsSUFBSSxZQUFZLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLFlBQVksTUFBTSxDQUFDLEVBQUU7UUFDakUsT0FBTyxLQUFLLENBQUMsQ0FBQywrREFBK0Q7S0FDOUU7U0FBTSxJQUFJLElBQUksQ0FBQyxXQUFXLEtBQUssSUFBSSxDQUFDLFdBQVcsRUFBRTtRQUNoRCwwRUFBMEU7UUFDMUUsMEJBQTBCO1FBQzFCLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7U0FBTTtRQUNMLEtBQUssTUFBTSxHQUFHLElBQUksSUFBSSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUM3QixTQUFTLENBQUMsd0VBQXdFO2FBQ25GO1lBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQzdCLE9BQU8sS0FBSyxDQUFDLENBQUMsc0VBQXNFO2FBQ3JGO1lBQ0QsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUMzQixTQUFTLENBQUMscUVBQXFFO2FBQ2hGO1lBQ0QsSUFBSSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxRQUFRLEVBQUU7Z0JBQ2pDLE9BQU8sS0FBSyxDQUFDLENBQUMsK0RBQStEO2FBQzlFO1lBQ0QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtnQkFDM0MsT0FBTyxLQUFLLENBQUM7YUFDZDtTQUNGO1FBQ0QsS0FBSyxNQUFNLEdBQUcsSUFBSSxJQUFJLEVBQUU7WUFDdEIsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDekQsT0FBTyxLQUFLLENBQUM7YUFDZDtTQUNGO1FBQ0QsT0FBTyxJQUFJLENBQUM7S0FDYjtBQUNILENBQUM7Ozs7OztBQUVELE1BQU0sVUFBVSx1QkFBdUIsQ0FBQyxHQUFRLEVBQUUsR0FBZTtJQUMvRCxPQUFPLEdBQUcsQ0FBQyxNQUFNOzs7OztJQUFDLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFO1FBQzlCLElBQUksZ0JBQWdCLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxFQUFFO1lBQy9CLEdBQUcsRUFBRSxDQUFDO1NBQ1A7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUMsR0FBRSxDQUFDLENBQUMsQ0FBQztBQUNSLENBQUM7Ozs7OztBQUVELE1BQU0sVUFBVSxzQkFBc0IsQ0FDcEMsR0FBUSxFQUNSLEdBQWU7SUFFZixLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRTtRQUMvQyxJQUFJLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRTtZQUNyQyxPQUFPLEtBQUssQ0FBQztTQUNkO0tBQ0Y7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIHNoYWxsb3dFcXVhbE9iamVjdHMob2JqQTogb2JqZWN0LCBvYmpCOiBvYmplY3QpOiBib29sZWFuIHtcbiAgaWYgKG9iakEgPT09IG9iakIpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZiAoIW9iakEgfHwgIW9iakIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3QgYUtleXMgPSBPYmplY3Qua2V5cyhvYmpBKTtcbiAgY29uc3QgYktleXMgPSBPYmplY3Qua2V5cyhvYmpCKTtcbiAgY29uc3QgYUtleXNMZW4gPSBhS2V5cy5sZW5ndGg7XG4gIGNvbnN0IGJLZXlzTGVuID0gYktleXMubGVuZ3RoO1xuXG4gIGlmIChhS2V5c0xlbiAhPT0gYktleXNMZW4pIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhS2V5c0xlbjsgaSsrKSB7XG4gICAgY29uc3Qga2V5ID0gYUtleXNbaV07XG4gICAgaWYgKG9iakFba2V5XSAhPT0gb2JqQltrZXldKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVlcEVxdWFsT2JqZWN0cyhvYmpBOiBvYmplY3QsIG9iakI6IG9iamVjdCk6IGJvb2xlYW4ge1xuICBpZiAob2JqQSA9PT0gb2JqQikge1xuICAgIHJldHVybiB0cnVlOyAvLyBpZiBib3RoIG9iakEgYW5kIG9iakIgYXJlIG51bGwgb3IgdW5kZWZpbmVkIGFuZCBleGFjdGx5IHRoZSBzYW1lXG4gIH0gZWxzZSBpZiAoIShvYmpBIGluc3RhbmNlb2YgT2JqZWN0KSB8fCAhKG9iakIgaW5zdGFuY2VvZiBPYmplY3QpKSB7XG4gICAgcmV0dXJuIGZhbHNlOyAvLyBpZiB0aGV5IGFyZSBub3Qgc3RyaWN0bHkgZXF1YWwsIHRoZXkgYm90aCBuZWVkIHRvIGJlIE9iamVjdHNcbiAgfSBlbHNlIGlmIChvYmpBLmNvbnN0cnVjdG9yICE9PSBvYmpCLmNvbnN0cnVjdG9yKSB7XG4gICAgLy8gdGhleSBtdXN0IGhhdmUgdGhlIGV4YWN0IHNhbWUgcHJvdG90eXBlIGNoYWluLCB0aGUgY2xvc2VzdCB3ZSBjYW4gZG8gaXNcbiAgICAvLyB0ZXN0IHRoZWlyIGNvbnN0cnVjdG9yLlxuICAgIHJldHVybiBmYWxzZTtcbiAgfSBlbHNlIHtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBvYmpBKSB7XG4gICAgICBpZiAoIW9iakEuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBjb250aW51ZTsgLy8gb3RoZXIgcHJvcGVydGllcyB3ZXJlIHRlc3RlZCB1c2luZyBvYmpBLmNvbnN0cnVjdG9yID09PSB5LmNvbnN0cnVjdG9yXG4gICAgICB9XG4gICAgICBpZiAoIW9iakIuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7IC8vIGFsbG93cyB0byBjb21wYXJlIG9iakFbIGtleSBdIGFuZCBvYmpCWyBrZXkgXSB3aGVuIHNldCB0byB1bmRlZmluZWRcbiAgICAgIH1cbiAgICAgIGlmIChvYmpBW2tleV0gPT09IG9iakJba2V5XSkge1xuICAgICAgICBjb250aW51ZTsgLy8gaWYgdGhleSBoYXZlIHRoZSBzYW1lIHN0cmljdCB2YWx1ZSBvciBpZGVudGl0eSB0aGVuIHRoZXkgYXJlIGVxdWFsXG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIG9iakFba2V5XSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyBOdW1iZXJzLCBTdHJpbmdzLCBGdW5jdGlvbnMsIEJvb2xlYW5zIG11c3QgYmUgc3RyaWN0bHkgZXF1YWxcbiAgICAgIH1cbiAgICAgIGlmICghZGVlcEVxdWFsT2JqZWN0cyhvYmpBW2tleV0sIG9iakJba2V5XSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGNvbnN0IGtleSBpbiBvYmpCKSB7XG4gICAgICBpZiAob2JqQi5oYXNPd25Qcm9wZXJ0eShrZXkpICYmICFvYmpBLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY291bnRPZkRlZXBFcXVhbE9iamVjdHMob2JqOiBhbnksIGFycjogQXJyYXk8YW55Pik6IG51bWJlciB7XG4gIHJldHVybiBhcnIucmVkdWNlKChhY2MsIGN1cnIpID0+IHtcbiAgICBpZiAoZGVlcEVxdWFsT2JqZWN0cyhvYmosIGN1cnIpKSB7XG4gICAgICBhY2MrKztcbiAgICB9XG4gICAgcmV0dXJuIGFjYztcbiAgfSwgMCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbmRleE9mRmlyc3RPY2N1cnJlbmNlKFxuICBvYmo6IGFueSxcbiAgYXJyOiBBcnJheTxhbnk+XG4pOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyLmxlbmd0aDsgaW5kZXgrKykge1xuICAgIGlmIChkZWVwRXF1YWxPYmplY3RzKGFycltpbmRleF0sIG9iaikpIHtcbiAgICAgIHJldHVybiBpbmRleDtcbiAgICB9XG4gIH1cbn1cbiJdfQ==