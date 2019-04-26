/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
        .reduce((previous, current) => (previous ? previous[current] : undefined), state);
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
    const keySplit = key.split('.');
    /** @type {?} */
    const newObject = {};
    /** @type {?} */
    let tempNewObject = newObject;
    for (let i = 0; i < keySplit.length; i++) {
        /** @type {?} */
        const currentKey = keySplit[i];
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
    if (keys && keys.length === 0) {
        return (/** @type {?} */ ({}));
    }
    /** @type {?} */
    let stateSlices = {};
    for (const currentKey of keys) {
        /** @type {?} */
        const stateValue = getStateSliceValue(currentKey, state);
        /** @type {?} */
        const shell = createShellObject(currentKey, stateValue);
        stateSlices = deepMerge(stateSlices, shell);
    }
    return (/** @type {?} */ (stateSlices));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LXN0YXRlLXNsaWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3N0YXRlL3V0aWxzL2dldC1zdGF0ZS1zbGljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLCtCQUErQixDQUFDOzs7Ozs7O0FBRTFELE1BQU0sVUFBVSxrQkFBa0IsQ0FBTyxJQUFZLEVBQUUsS0FBUTtJQUM3RCxPQUFPLElBQUk7U0FDUixLQUFLLENBQUMsR0FBRyxDQUFDO1NBQ1YsTUFBTSxDQUNMLENBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQ2pFLEtBQUssQ0FDTixDQUFDO0FBQ04sQ0FBQzs7Ozs7OztBQUVELE1BQU0sVUFBVSxpQkFBaUIsQ0FBTyxHQUFXLEVBQUUsS0FBUTtJQUMzRCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtRQUNyRCxPQUFPLG1CQUFBLEVBQUUsRUFBSyxDQUFDO0tBQ2hCOztVQUVLLFFBQVEsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQzs7VUFDekIsU0FBUyxHQUFHLEVBQUU7O1FBQ2hCLGFBQWEsR0FBRyxTQUFTO0lBRTdCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFOztjQUNsQyxVQUFVLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUM5QixpQkFBaUI7UUFDakIsSUFBSSxDQUFDLEtBQUssUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDN0IsYUFBYSxHQUFHLGFBQWEsQ0FBQyxVQUFVLENBQUMsR0FBRyxLQUFLLENBQUM7U0FDbkQ7YUFBTTtZQUNMLGFBQWEsR0FBRyxhQUFhLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDO1NBQ2hEO0tBQ0Y7SUFFRCxPQUFPLG1CQUFBLFNBQVMsRUFBSyxDQUFDO0FBQ3hCLENBQUM7Ozs7Ozs7QUFFRCxNQUFNLFVBQVUsYUFBYSxDQUFPLElBQWMsRUFBRSxLQUFRO0lBQzFELElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1FBQzdCLE9BQU8sbUJBQUEsRUFBRSxFQUFLLENBQUM7S0FDaEI7O1FBRUcsV0FBVyxHQUFHLEVBQUU7SUFDcEIsS0FBSyxNQUFNLFVBQVUsSUFBSSxJQUFJLEVBQUU7O2NBQ3ZCLFVBQVUsR0FBRyxrQkFBa0IsQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDOztjQUNsRCxLQUFLLEdBQUcsaUJBQWlCLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQztRQUN2RCxXQUFXLEdBQUcsU0FBUyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQztLQUM3QztJQUVELE9BQU8sbUJBQUEsV0FBVyxFQUFLLENBQUM7QUFDMUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRlZXBNZXJnZSB9IGZyb20gJy4uLy4uL2NvbmZpZy91dGlscy9kZWVwLW1lcmdlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0YXRlU2xpY2VWYWx1ZTxULCBFPihrZXlzOiBzdHJpbmcsIHN0YXRlOiBUKTogRSB7XG4gIHJldHVybiBrZXlzXG4gICAgLnNwbGl0KCcuJylcbiAgICAucmVkdWNlKFxuICAgICAgKHByZXZpb3VzLCBjdXJyZW50KSA9PiAocHJldmlvdXMgPyBwcmV2aW91c1tjdXJyZW50XSA6IHVuZGVmaW5lZCksXG4gICAgICBzdGF0ZVxuICAgICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTaGVsbE9iamVjdDxULCBFPihrZXk6IHN0cmluZywgdmFsdWU6IFQpOiBFIHtcbiAgaWYgKCFrZXkgfHwgIXZhbHVlIHx8IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4ge30gYXMgRTtcbiAgfVxuXG4gIGNvbnN0IGtleVNwbGl0ID0ga2V5LnNwbGl0KCcuJyk7XG4gIGNvbnN0IG5ld09iamVjdCA9IHt9O1xuICBsZXQgdGVtcE5ld09iamVjdCA9IG5ld09iamVjdDtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGtleVNwbGl0Lmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgY3VycmVudEtleSA9IGtleVNwbGl0W2ldO1xuICAgIC8vIGxhc3QgaXRlcmF0aW9uXG4gICAgaWYgKGkgPT09IGtleVNwbGl0Lmxlbmd0aCAtIDEpIHtcbiAgICAgIHRlbXBOZXdPYmplY3QgPSB0ZW1wTmV3T2JqZWN0W2N1cnJlbnRLZXldID0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRlbXBOZXdPYmplY3QgPSB0ZW1wTmV3T2JqZWN0W2N1cnJlbnRLZXldID0ge307XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5ld09iamVjdCBhcyBFO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RhdGVTbGljZTxULCBFPihrZXlzOiBzdHJpbmdbXSwgc3RhdGU6IFQpOiBFIHtcbiAgaWYgKGtleXMgJiYga2V5cy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4ge30gYXMgRTtcbiAgfVxuXG4gIGxldCBzdGF0ZVNsaWNlcyA9IHt9O1xuICBmb3IgKGNvbnN0IGN1cnJlbnRLZXkgb2Yga2V5cykge1xuICAgIGNvbnN0IHN0YXRlVmFsdWUgPSBnZXRTdGF0ZVNsaWNlVmFsdWUoY3VycmVudEtleSwgc3RhdGUpO1xuICAgIGNvbnN0IHNoZWxsID0gY3JlYXRlU2hlbGxPYmplY3QoY3VycmVudEtleSwgc3RhdGVWYWx1ZSk7XG4gICAgc3RhdGVTbGljZXMgPSBkZWVwTWVyZ2Uoc3RhdGVTbGljZXMsIHNoZWxsKTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZVNsaWNlcyBhcyBFO1xufVxuIl19