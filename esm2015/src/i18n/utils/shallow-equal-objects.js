/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhbGxvdy1lcXVhbC1vYmplY3RzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2kxOG4vdXRpbHMvc2hhbGxvdy1lcXVhbC1vYmplY3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE1BQU0sVUFBVSxtQkFBbUIsQ0FBQyxJQUFZLEVBQUUsSUFBWTtJQUM1RCxJQUFJLElBQUksS0FBSyxJQUFJLEVBQUU7UUFDakIsT0FBTyxJQUFJLENBQUM7S0FDYjtJQUNELElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7UUFDbEIsT0FBTyxLQUFLLENBQUM7S0FDZDs7VUFDSyxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7O1VBQ3pCLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzs7VUFDekIsUUFBUSxHQUFHLEtBQUssQ0FBQyxNQUFNOztVQUN2QixRQUFRLEdBQUcsS0FBSyxDQUFDLE1BQU07SUFFN0IsSUFBSSxRQUFRLEtBQUssUUFBUSxFQUFFO1FBQ3pCLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7SUFDRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFOztjQUMzQixHQUFHLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNwQixJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDM0IsT0FBTyxLQUFLLENBQUM7U0FDZDtLQUNGO0lBQ0QsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIHNoYWxsb3dFcXVhbE9iamVjdHMob2JqQTogb2JqZWN0LCBvYmpCOiBvYmplY3QpOiBib29sZWFuIHtcbiAgaWYgKG9iakEgPT09IG9iakIpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZiAoIW9iakEgfHwgIW9iakIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3QgYUtleXMgPSBPYmplY3Qua2V5cyhvYmpBKTtcbiAgY29uc3QgYktleXMgPSBPYmplY3Qua2V5cyhvYmpCKTtcbiAgY29uc3QgYUtleXNMZW4gPSBhS2V5cy5sZW5ndGg7XG4gIGNvbnN0IGJLZXlzTGVuID0gYktleXMubGVuZ3RoO1xuXG4gIGlmIChhS2V5c0xlbiAhPT0gYktleXNMZW4pIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhS2V5c0xlbjsgaSsrKSB7XG4gICAgY29uc3Qga2V5ID0gYUtleXNbaV07XG4gICAgaWYgKG9iakFba2V5XSAhPT0gb2JqQltrZXldKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufVxuIl19