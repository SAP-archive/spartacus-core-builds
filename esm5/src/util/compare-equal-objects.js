/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    var aKeys = Object.keys(objA);
    /** @type {?} */
    var bKeys = Object.keys(objB);
    /** @type {?} */
    var aKeysLen = aKeys.length;
    /** @type {?} */
    var bKeysLen = bKeys.length;
    if (aKeysLen !== bKeysLen) {
        return false;
    }
    for (var i = 0; i < aKeysLen; i++) {
        /** @type {?} */
        var key = aKeys[i];
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
        for (var key in objA) {
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
        for (var key in objB) {
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
    function (acc, curr) {
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
    for (var index = 0; index < arr.length; index++) {
        if (deepEqualObjects(arr[index], obj)) {
            return index;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGFyZS1lcXVhbC1vYmplY3RzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3V0aWwvY29tcGFyZS1lcXVhbC1vYmplY3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE1BQU0sVUFBVSxtQkFBbUIsQ0FBQyxJQUFZLEVBQUUsSUFBWTtJQUM1RCxJQUFJLElBQUksS0FBSyxJQUFJLEVBQUU7UUFDakIsT0FBTyxJQUFJLENBQUM7S0FDYjtJQUNELElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7UUFDbEIsT0FBTyxLQUFLLENBQUM7S0FDZDs7UUFDSyxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7O1FBQ3pCLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzs7UUFDekIsUUFBUSxHQUFHLEtBQUssQ0FBQyxNQUFNOztRQUN2QixRQUFRLEdBQUcsS0FBSyxDQUFDLE1BQU07SUFFN0IsSUFBSSxRQUFRLEtBQUssUUFBUSxFQUFFO1FBQ3pCLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7SUFDRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFOztZQUMzQixHQUFHLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNwQixJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDM0IsT0FBTyxLQUFLLENBQUM7U0FDZDtLQUNGO0lBQ0QsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUsZ0JBQWdCLENBQUMsSUFBWSxFQUFFLElBQVk7SUFDekQsSUFBSSxJQUFJLEtBQUssSUFBSSxFQUFFO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLENBQUMsbUVBQW1FO0tBQ2pGO1NBQU0sSUFBSSxDQUFDLENBQUMsSUFBSSxZQUFZLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLFlBQVksTUFBTSxDQUFDLEVBQUU7UUFDakUsT0FBTyxLQUFLLENBQUMsQ0FBQywrREFBK0Q7S0FDOUU7U0FBTSxJQUFJLElBQUksQ0FBQyxXQUFXLEtBQUssSUFBSSxDQUFDLFdBQVcsRUFBRTtRQUNoRCwwRUFBMEU7UUFDMUUsMEJBQTBCO1FBQzFCLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7U0FBTTtRQUNMLEtBQUssSUFBTSxHQUFHLElBQUksSUFBSSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUM3QixTQUFTLENBQUMsd0VBQXdFO2FBQ25GO1lBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQzdCLE9BQU8sS0FBSyxDQUFDLENBQUMsc0VBQXNFO2FBQ3JGO1lBQ0QsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUMzQixTQUFTLENBQUMscUVBQXFFO2FBQ2hGO1lBQ0QsSUFBSSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxRQUFRLEVBQUU7Z0JBQ2pDLE9BQU8sS0FBSyxDQUFDLENBQUMsK0RBQStEO2FBQzlFO1lBQ0QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtnQkFDM0MsT0FBTyxLQUFLLENBQUM7YUFDZDtTQUNGO1FBQ0QsS0FBSyxJQUFNLEdBQUcsSUFBSSxJQUFJLEVBQUU7WUFDdEIsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDekQsT0FBTyxLQUFLLENBQUM7YUFDZDtTQUNGO1FBQ0QsT0FBTyxJQUFJLENBQUM7S0FDYjtBQUNILENBQUM7Ozs7OztBQUVELE1BQU0sVUFBVSx1QkFBdUIsQ0FBQyxHQUFRLEVBQUUsR0FBZTtJQUMvRCxPQUFPLEdBQUcsQ0FBQyxNQUFNOzs7OztJQUFDLFVBQUMsR0FBRyxFQUFFLElBQUk7UUFDMUIsSUFBSSxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEVBQUU7WUFDL0IsR0FBRyxFQUFFLENBQUM7U0FDUDtRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQyxHQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ1IsQ0FBQzs7Ozs7O0FBRUQsTUFBTSxVQUFVLHNCQUFzQixDQUFDLEdBQVEsRUFBRSxHQUFlO0lBQzlELEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFO1FBQy9DLElBQUksZ0JBQWdCLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFO1lBQ3JDLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7S0FDRjtBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gc2hhbGxvd0VxdWFsT2JqZWN0cyhvYmpBOiBvYmplY3QsIG9iakI6IG9iamVjdCk6IGJvb2xlYW4ge1xuICBpZiAob2JqQSA9PT0gb2JqQikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmICghb2JqQSB8fCAhb2JqQikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBhS2V5cyA9IE9iamVjdC5rZXlzKG9iakEpO1xuICBjb25zdCBiS2V5cyA9IE9iamVjdC5rZXlzKG9iakIpO1xuICBjb25zdCBhS2V5c0xlbiA9IGFLZXlzLmxlbmd0aDtcbiAgY29uc3QgYktleXNMZW4gPSBiS2V5cy5sZW5ndGg7XG5cbiAgaWYgKGFLZXlzTGVuICE9PSBiS2V5c0xlbikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IGFLZXlzTGVuOyBpKyspIHtcbiAgICBjb25zdCBrZXkgPSBhS2V5c1tpXTtcbiAgICBpZiAob2JqQVtrZXldICE9PSBvYmpCW2tleV0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWVwRXF1YWxPYmplY3RzKG9iakE6IG9iamVjdCwgb2JqQjogb2JqZWN0KTogYm9vbGVhbiB7XG4gIGlmIChvYmpBID09PSBvYmpCKSB7XG4gICAgcmV0dXJuIHRydWU7IC8vIGlmIGJvdGggb2JqQSBhbmQgb2JqQiBhcmUgbnVsbCBvciB1bmRlZmluZWQgYW5kIGV4YWN0bHkgdGhlIHNhbWVcbiAgfSBlbHNlIGlmICghKG9iakEgaW5zdGFuY2VvZiBPYmplY3QpIHx8ICEob2JqQiBpbnN0YW5jZW9mIE9iamVjdCkpIHtcbiAgICByZXR1cm4gZmFsc2U7IC8vIGlmIHRoZXkgYXJlIG5vdCBzdHJpY3RseSBlcXVhbCwgdGhleSBib3RoIG5lZWQgdG8gYmUgT2JqZWN0c1xuICB9IGVsc2UgaWYgKG9iakEuY29uc3RydWN0b3IgIT09IG9iakIuY29uc3RydWN0b3IpIHtcbiAgICAvLyB0aGV5IG11c3QgaGF2ZSB0aGUgZXhhY3Qgc2FtZSBwcm90b3R5cGUgY2hhaW4sIHRoZSBjbG9zZXN0IHdlIGNhbiBkbyBpc1xuICAgIC8vIHRlc3QgdGhlaXIgY29uc3RydWN0b3IuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIGZvciAoY29uc3Qga2V5IGluIG9iakEpIHtcbiAgICAgIGlmICghb2JqQS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIGNvbnRpbnVlOyAvLyBvdGhlciBwcm9wZXJ0aWVzIHdlcmUgdGVzdGVkIHVzaW5nIG9iakEuY29uc3RydWN0b3IgPT09IHkuY29uc3RydWN0b3JcbiAgICAgIH1cbiAgICAgIGlmICghb2JqQi5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTsgLy8gYWxsb3dzIHRvIGNvbXBhcmUgb2JqQVsga2V5IF0gYW5kIG9iakJbIGtleSBdIHdoZW4gc2V0IHRvIHVuZGVmaW5lZFxuICAgICAgfVxuICAgICAgaWYgKG9iakFba2V5XSA9PT0gb2JqQltrZXldKSB7XG4gICAgICAgIGNvbnRpbnVlOyAvLyBpZiB0aGV5IGhhdmUgdGhlIHNhbWUgc3RyaWN0IHZhbHVlIG9yIGlkZW50aXR5IHRoZW4gdGhleSBhcmUgZXF1YWxcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2Ygb2JqQVtrZXldICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gZmFsc2U7IC8vIE51bWJlcnMsIFN0cmluZ3MsIEZ1bmN0aW9ucywgQm9vbGVhbnMgbXVzdCBiZSBzdHJpY3RseSBlcXVhbFxuICAgICAgfVxuICAgICAgaWYgKCFkZWVwRXF1YWxPYmplY3RzKG9iakFba2V5XSwgb2JqQltrZXldKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAoY29uc3Qga2V5IGluIG9iakIpIHtcbiAgICAgIGlmIChvYmpCLmhhc093blByb3BlcnR5KGtleSkgJiYgIW9iakEuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb3VudE9mRGVlcEVxdWFsT2JqZWN0cyhvYmo6IGFueSwgYXJyOiBBcnJheTxhbnk+KSB7XG4gIHJldHVybiBhcnIucmVkdWNlKChhY2MsIGN1cnIpID0+IHtcbiAgICBpZiAoZGVlcEVxdWFsT2JqZWN0cyhvYmosIGN1cnIpKSB7XG4gICAgICBhY2MrKztcbiAgICB9XG4gICAgcmV0dXJuIGFjYztcbiAgfSwgMCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbmRleE9mRmlyc3RPY2N1cnJlbmNlKG9iajogYW55LCBhcnI6IEFycmF5PGFueT4pIHtcbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFyci5sZW5ndGg7IGluZGV4KyspIHtcbiAgICBpZiAoZGVlcEVxdWFsT2JqZWN0cyhhcnJbaW5kZXhdLCBvYmopKSB7XG4gICAgICByZXR1cm4gaW5kZXg7XG4gICAgfVxuICB9XG59XG4iXX0=