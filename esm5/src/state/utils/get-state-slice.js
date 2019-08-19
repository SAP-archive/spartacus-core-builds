/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { deepMerge } from '../../config/utils/deep-merge';
/**
 * @template T, E
 * @param {?} keys
 * @param {?} state
 * @return {?}
 */
export function getStateSliceValue(keys, state) {
    return keys
        .split('.')
        .reduce((/**
     * @param {?} previous
     * @param {?} current
     * @return {?}
     */
    function (previous, current) { return (previous ? previous[current] : undefined); }), state);
}
/**
 * @template T, E
 * @param {?} key
 * @param {?} value
 * @return {?}
 */
export function createShellObject(key, value) {
    if (!key || !value || Object.keys(value).length === 0) {
        return (/** @type {?} */ ({}));
    }
    /** @type {?} */
    var keySplit = key.split('.');
    /** @type {?} */
    var newObject = {};
    /** @type {?} */
    var tempNewObject = newObject;
    for (var i = 0; i < keySplit.length; i++) {
        /** @type {?} */
        var currentKey = keySplit[i];
        // last iteration
        if (i === keySplit.length - 1) {
            tempNewObject = tempNewObject[currentKey] = value;
        }
        else {
            tempNewObject = tempNewObject[currentKey] = {};
        }
    }
    return (/** @type {?} */ (newObject));
}
/**
 * @template T, E
 * @param {?} keys
 * @param {?} state
 * @return {?}
 */
export function getStateSlice(keys, state) {
    var e_1, _a;
    if (keys && keys.length === 0) {
        return (/** @type {?} */ ({}));
    }
    /** @type {?} */
    var stateSlices = {};
    try {
        for (var keys_1 = tslib_1.__values(keys), keys_1_1 = keys_1.next(); !keys_1_1.done; keys_1_1 = keys_1.next()) {
            var currentKey = keys_1_1.value;
            /** @type {?} */
            var stateValue = getStateSliceValue(currentKey, state);
            /** @type {?} */
            var shell = createShellObject(currentKey, stateValue);
            stateSlices = deepMerge(stateSlices, shell);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (keys_1_1 && !keys_1_1.done && (_a = keys_1.return)) _a.call(keys_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return (/** @type {?} */ (stateSlices));
}
/**
 * @param {?} keys
 * @param {?} type
 * @return {?}
 */
export function filterKeysByType(keys, type) {
    return Object.keys(keys).filter((/**
     * @param {?} key
     * @return {?}
     */
    function (key) { return keys[key] === type; }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LXN0YXRlLXNsaWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3N0YXRlL3V0aWxzL2dldC1zdGF0ZS1zbGljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7Ozs7OztBQUcxRCxNQUFNLFVBQVUsa0JBQWtCLENBQU8sSUFBWSxFQUFFLEtBQVE7SUFDN0QsT0FBTyxJQUFJO1NBQ1IsS0FBSyxDQUFDLEdBQUcsQ0FBQztTQUNWLE1BQU07Ozs7O0lBQ0wsVUFBQyxRQUFRLEVBQUUsT0FBTyxJQUFLLE9BQUEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQTFDLENBQTBDLEdBQ2pFLEtBQUssQ0FDTixDQUFDO0FBQ04sQ0FBQzs7Ozs7OztBQUVELE1BQU0sVUFBVSxpQkFBaUIsQ0FBTyxHQUFXLEVBQUUsS0FBUTtJQUMzRCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtRQUNyRCxPQUFPLG1CQUFBLEVBQUUsRUFBSyxDQUFDO0tBQ2hCOztRQUVLLFFBQVEsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQzs7UUFDekIsU0FBUyxHQUFHLEVBQUU7O1FBQ2hCLGFBQWEsR0FBRyxTQUFTO0lBRTdCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFOztZQUNsQyxVQUFVLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUM5QixpQkFBaUI7UUFDakIsSUFBSSxDQUFDLEtBQUssUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDN0IsYUFBYSxHQUFHLGFBQWEsQ0FBQyxVQUFVLENBQUMsR0FBRyxLQUFLLENBQUM7U0FDbkQ7YUFBTTtZQUNMLGFBQWEsR0FBRyxhQUFhLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDO1NBQ2hEO0tBQ0Y7SUFFRCxPQUFPLG1CQUFBLFNBQVMsRUFBSyxDQUFDO0FBQ3hCLENBQUM7Ozs7Ozs7QUFFRCxNQUFNLFVBQVUsYUFBYSxDQUFPLElBQWMsRUFBRSxLQUFROztJQUMxRCxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtRQUM3QixPQUFPLG1CQUFBLEVBQUUsRUFBSyxDQUFDO0tBQ2hCOztRQUVHLFdBQVcsR0FBRyxFQUFFOztRQUNwQixLQUF5QixJQUFBLFNBQUEsaUJBQUEsSUFBSSxDQUFBLDBCQUFBLDRDQUFFO1lBQTFCLElBQU0sVUFBVSxpQkFBQTs7Z0JBQ2IsVUFBVSxHQUFHLGtCQUFrQixDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUM7O2dCQUNsRCxLQUFLLEdBQUcsaUJBQWlCLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQztZQUN2RCxXQUFXLEdBQUcsU0FBUyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUM3Qzs7Ozs7Ozs7O0lBRUQsT0FBTyxtQkFBQSxXQUFXLEVBQUssQ0FBQztBQUMxQixDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUsZ0JBQWdCLENBQzlCLElBQTRELEVBQzVELElBQXlDO0lBRXpDLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNOzs7O0lBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssSUFBSSxFQUFsQixDQUFrQixFQUFDLENBQUM7QUFDN0QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRlZXBNZXJnZSB9IGZyb20gJy4uLy4uL2NvbmZpZy91dGlscy9kZWVwLW1lcmdlJztcbmltcG9ydCB7IFN0YXRlVHJhbnNmZXJUeXBlLCBTdG9yYWdlU3luY1R5cGUgfSBmcm9tICcuLi9jb25maWcvc3RhdGUtY29uZmlnJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0YXRlU2xpY2VWYWx1ZTxULCBFPihrZXlzOiBzdHJpbmcsIHN0YXRlOiBUKTogRSB7XG4gIHJldHVybiBrZXlzXG4gICAgLnNwbGl0KCcuJylcbiAgICAucmVkdWNlKFxuICAgICAgKHByZXZpb3VzLCBjdXJyZW50KSA9PiAocHJldmlvdXMgPyBwcmV2aW91c1tjdXJyZW50XSA6IHVuZGVmaW5lZCksXG4gICAgICBzdGF0ZVxuICAgICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTaGVsbE9iamVjdDxULCBFPihrZXk6IHN0cmluZywgdmFsdWU6IFQpOiBFIHtcbiAgaWYgKCFrZXkgfHwgIXZhbHVlIHx8IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4ge30gYXMgRTtcbiAgfVxuXG4gIGNvbnN0IGtleVNwbGl0ID0ga2V5LnNwbGl0KCcuJyk7XG4gIGNvbnN0IG5ld09iamVjdCA9IHt9O1xuICBsZXQgdGVtcE5ld09iamVjdCA9IG5ld09iamVjdDtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGtleVNwbGl0Lmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgY3VycmVudEtleSA9IGtleVNwbGl0W2ldO1xuICAgIC8vIGxhc3QgaXRlcmF0aW9uXG4gICAgaWYgKGkgPT09IGtleVNwbGl0Lmxlbmd0aCAtIDEpIHtcbiAgICAgIHRlbXBOZXdPYmplY3QgPSB0ZW1wTmV3T2JqZWN0W2N1cnJlbnRLZXldID0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRlbXBOZXdPYmplY3QgPSB0ZW1wTmV3T2JqZWN0W2N1cnJlbnRLZXldID0ge307XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5ld09iamVjdCBhcyBFO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RhdGVTbGljZTxULCBFPihrZXlzOiBzdHJpbmdbXSwgc3RhdGU6IFQpOiBFIHtcbiAgaWYgKGtleXMgJiYga2V5cy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4ge30gYXMgRTtcbiAgfVxuXG4gIGxldCBzdGF0ZVNsaWNlcyA9IHt9O1xuICBmb3IgKGNvbnN0IGN1cnJlbnRLZXkgb2Yga2V5cykge1xuICAgIGNvbnN0IHN0YXRlVmFsdWUgPSBnZXRTdGF0ZVNsaWNlVmFsdWUoY3VycmVudEtleSwgc3RhdGUpO1xuICAgIGNvbnN0IHNoZWxsID0gY3JlYXRlU2hlbGxPYmplY3QoY3VycmVudEtleSwgc3RhdGVWYWx1ZSk7XG4gICAgc3RhdGVTbGljZXMgPSBkZWVwTWVyZ2Uoc3RhdGVTbGljZXMsIHNoZWxsKTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZVNsaWNlcyBhcyBFO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyS2V5c0J5VHlwZShcbiAga2V5czogeyBba2V5OiBzdHJpbmddOiBTdG9yYWdlU3luY1R5cGUgfCBTdGF0ZVRyYW5zZmVyVHlwZSB9LFxuICB0eXBlOiBTdG9yYWdlU3luY1R5cGUgfCBTdGF0ZVRyYW5zZmVyVHlwZVxuKTogc3RyaW5nW10ge1xuICByZXR1cm4gT2JqZWN0LmtleXMoa2V5cykuZmlsdGVyKGtleSA9PiBrZXlzW2tleV0gPT09IHR5cGUpO1xufVxuIl19