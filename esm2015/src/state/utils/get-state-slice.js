/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        .reduce((/**
     * @param {?} previous
     * @param {?} current
     * @return {?}
     */
    (previous, current) => (previous ? previous[current] : undefined)), state);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LXN0YXRlLXNsaWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3N0YXRlL3V0aWxzL2dldC1zdGF0ZS1zbGljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLCtCQUErQixDQUFDOzs7Ozs7O0FBRTFELE1BQU0sVUFBVSxrQkFBa0IsQ0FBTyxJQUFZLEVBQUUsS0FBUTtJQUM3RCxPQUFPLElBQUk7U0FDUixLQUFLLENBQUMsR0FBRyxDQUFDO1NBQ1YsTUFBTTs7Ozs7SUFDTCxDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUNqRSxLQUFLLENBQ04sQ0FBQztBQUNOLENBQUM7Ozs7Ozs7QUFFRCxNQUFNLFVBQVUsaUJBQWlCLENBQU8sR0FBVyxFQUFFLEtBQVE7SUFDM0QsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDckQsT0FBTyxtQkFBQSxFQUFFLEVBQUssQ0FBQztLQUNoQjs7VUFFSyxRQUFRLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7O1VBQ3pCLFNBQVMsR0FBRyxFQUFFOztRQUNoQixhQUFhLEdBQUcsU0FBUztJQUU3QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTs7Y0FDbEMsVUFBVSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDOUIsaUJBQWlCO1FBQ2pCLElBQUksQ0FBQyxLQUFLLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQzdCLGFBQWEsR0FBRyxhQUFhLENBQUMsVUFBVSxDQUFDLEdBQUcsS0FBSyxDQUFDO1NBQ25EO2FBQU07WUFDTCxhQUFhLEdBQUcsYUFBYSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQztTQUNoRDtLQUNGO0lBRUQsT0FBTyxtQkFBQSxTQUFTLEVBQUssQ0FBQztBQUN4QixDQUFDOzs7Ozs7O0FBRUQsTUFBTSxVQUFVLGFBQWEsQ0FBTyxJQUFjLEVBQUUsS0FBUTtJQUMxRCxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtRQUM3QixPQUFPLG1CQUFBLEVBQUUsRUFBSyxDQUFDO0tBQ2hCOztRQUVHLFdBQVcsR0FBRyxFQUFFO0lBQ3BCLEtBQUssTUFBTSxVQUFVLElBQUksSUFBSSxFQUFFOztjQUN2QixVQUFVLEdBQUcsa0JBQWtCLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQzs7Y0FDbEQsS0FBSyxHQUFHLGlCQUFpQixDQUFDLFVBQVUsRUFBRSxVQUFVLENBQUM7UUFDdkQsV0FBVyxHQUFHLFNBQVMsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUM7S0FDN0M7SUFFRCxPQUFPLG1CQUFBLFdBQVcsRUFBSyxDQUFDO0FBQzFCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkZWVwTWVyZ2UgfSBmcm9tICcuLi8uLi9jb25maWcvdXRpbHMvZGVlcC1tZXJnZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdGF0ZVNsaWNlVmFsdWU8VCwgRT4oa2V5czogc3RyaW5nLCBzdGF0ZTogVCk6IEUge1xuICByZXR1cm4ga2V5c1xuICAgIC5zcGxpdCgnLicpXG4gICAgLnJlZHVjZShcbiAgICAgIChwcmV2aW91cywgY3VycmVudCkgPT4gKHByZXZpb3VzID8gcHJldmlvdXNbY3VycmVudF0gOiB1bmRlZmluZWQpLFxuICAgICAgc3RhdGVcbiAgICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU2hlbGxPYmplY3Q8VCwgRT4oa2V5OiBzdHJpbmcsIHZhbHVlOiBUKTogRSB7XG4gIGlmICgha2V5IHx8ICF2YWx1ZSB8fCBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIHt9IGFzIEU7XG4gIH1cblxuICBjb25zdCBrZXlTcGxpdCA9IGtleS5zcGxpdCgnLicpO1xuICBjb25zdCBuZXdPYmplY3QgPSB7fTtcbiAgbGV0IHRlbXBOZXdPYmplY3QgPSBuZXdPYmplY3Q7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlTcGxpdC5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGN1cnJlbnRLZXkgPSBrZXlTcGxpdFtpXTtcbiAgICAvLyBsYXN0IGl0ZXJhdGlvblxuICAgIGlmIChpID09PSBrZXlTcGxpdC5sZW5ndGggLSAxKSB7XG4gICAgICB0ZW1wTmV3T2JqZWN0ID0gdGVtcE5ld09iamVjdFtjdXJyZW50S2V5XSA9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0ZW1wTmV3T2JqZWN0ID0gdGVtcE5ld09iamVjdFtjdXJyZW50S2V5XSA9IHt9O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXdPYmplY3QgYXMgRTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0YXRlU2xpY2U8VCwgRT4oa2V5czogc3RyaW5nW10sIHN0YXRlOiBUKTogRSB7XG4gIGlmIChrZXlzICYmIGtleXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIHt9IGFzIEU7XG4gIH1cblxuICBsZXQgc3RhdGVTbGljZXMgPSB7fTtcbiAgZm9yIChjb25zdCBjdXJyZW50S2V5IG9mIGtleXMpIHtcbiAgICBjb25zdCBzdGF0ZVZhbHVlID0gZ2V0U3RhdGVTbGljZVZhbHVlKGN1cnJlbnRLZXksIHN0YXRlKTtcbiAgICBjb25zdCBzaGVsbCA9IGNyZWF0ZVNoZWxsT2JqZWN0KGN1cnJlbnRLZXksIHN0YXRlVmFsdWUpO1xuICAgIHN0YXRlU2xpY2VzID0gZGVlcE1lcmdlKHN0YXRlU2xpY2VzLCBzaGVsbCk7XG4gIH1cblxuICByZXR1cm4gc3RhdGVTbGljZXMgYXMgRTtcbn1cbiJdfQ==