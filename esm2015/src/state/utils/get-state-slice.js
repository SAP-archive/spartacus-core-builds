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
    key => keys[key] === type));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LXN0YXRlLXNsaWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3N0YXRlL3V0aWxzL2dldC1zdGF0ZS1zbGljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLCtCQUErQixDQUFDOzs7Ozs7O0FBRzFELE1BQU0sVUFBVSxrQkFBa0IsQ0FBTyxJQUFZLEVBQUUsS0FBUTtJQUM3RCxPQUFPLElBQUk7U0FDUixLQUFLLENBQUMsR0FBRyxDQUFDO1NBQ1YsTUFBTTs7Ozs7SUFDTCxDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUNqRSxLQUFLLENBQ04sQ0FBQztBQUNOLENBQUM7Ozs7Ozs7QUFFRCxNQUFNLFVBQVUsaUJBQWlCLENBQU8sR0FBVyxFQUFFLEtBQVE7SUFDM0QsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDckQsT0FBTyxtQkFBQSxFQUFFLEVBQUssQ0FBQztLQUNoQjs7VUFFSyxRQUFRLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7O1VBQ3pCLFNBQVMsR0FBRyxFQUFFOztRQUNoQixhQUFhLEdBQUcsU0FBUztJQUU3QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTs7Y0FDbEMsVUFBVSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDOUIsaUJBQWlCO1FBQ2pCLElBQUksQ0FBQyxLQUFLLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQzdCLGFBQWEsR0FBRyxhQUFhLENBQUMsVUFBVSxDQUFDLEdBQUcsS0FBSyxDQUFDO1NBQ25EO2FBQU07WUFDTCxhQUFhLEdBQUcsYUFBYSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQztTQUNoRDtLQUNGO0lBRUQsT0FBTyxtQkFBQSxTQUFTLEVBQUssQ0FBQztBQUN4QixDQUFDOzs7Ozs7O0FBRUQsTUFBTSxVQUFVLGFBQWEsQ0FBTyxJQUFjLEVBQUUsS0FBUTtJQUMxRCxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtRQUM3QixPQUFPLG1CQUFBLEVBQUUsRUFBSyxDQUFDO0tBQ2hCOztRQUVHLFdBQVcsR0FBRyxFQUFFO0lBQ3BCLEtBQUssTUFBTSxVQUFVLElBQUksSUFBSSxFQUFFOztjQUN2QixVQUFVLEdBQUcsa0JBQWtCLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQzs7Y0FDbEQsS0FBSyxHQUFHLGlCQUFpQixDQUFDLFVBQVUsRUFBRSxVQUFVLENBQUM7UUFDdkQsV0FBVyxHQUFHLFNBQVMsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUM7S0FDN0M7SUFFRCxPQUFPLG1CQUFBLFdBQVcsRUFBSyxDQUFDO0FBQzFCLENBQUM7Ozs7OztBQUVELE1BQU0sVUFBVSxnQkFBZ0IsQ0FDOUIsSUFBNEQsRUFDNUQsSUFBeUM7SUFFekMsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU07Ozs7SUFBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxJQUFJLEVBQUMsQ0FBQztBQUM3RCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGVlcE1lcmdlIH0gZnJvbSAnLi4vLi4vY29uZmlnL3V0aWxzL2RlZXAtbWVyZ2UnO1xuaW1wb3J0IHsgU3RhdGVUcmFuc2ZlclR5cGUsIFN0b3JhZ2VTeW5jVHlwZSB9IGZyb20gJy4uL2NvbmZpZy9zdGF0ZS1jb25maWcnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RhdGVTbGljZVZhbHVlPFQsIEU+KGtleXM6IHN0cmluZywgc3RhdGU6IFQpOiBFIHtcbiAgcmV0dXJuIGtleXNcbiAgICAuc3BsaXQoJy4nKVxuICAgIC5yZWR1Y2UoXG4gICAgICAocHJldmlvdXMsIGN1cnJlbnQpID0+IChwcmV2aW91cyA/IHByZXZpb3VzW2N1cnJlbnRdIDogdW5kZWZpbmVkKSxcbiAgICAgIHN0YXRlXG4gICAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNoZWxsT2JqZWN0PFQsIEU+KGtleTogc3RyaW5nLCB2YWx1ZTogVCk6IEUge1xuICBpZiAoIWtleSB8fCAhdmFsdWUgfHwgT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiB7fSBhcyBFO1xuICB9XG5cbiAgY29uc3Qga2V5U3BsaXQgPSBrZXkuc3BsaXQoJy4nKTtcbiAgY29uc3QgbmV3T2JqZWN0ID0ge307XG4gIGxldCB0ZW1wTmV3T2JqZWN0ID0gbmV3T2JqZWN0O1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwga2V5U3BsaXQubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBjdXJyZW50S2V5ID0ga2V5U3BsaXRbaV07XG4gICAgLy8gbGFzdCBpdGVyYXRpb25cbiAgICBpZiAoaSA9PT0ga2V5U3BsaXQubGVuZ3RoIC0gMSkge1xuICAgICAgdGVtcE5ld09iamVjdCA9IHRlbXBOZXdPYmplY3RbY3VycmVudEtleV0gPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGVtcE5ld09iamVjdCA9IHRlbXBOZXdPYmplY3RbY3VycmVudEtleV0gPSB7fTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3T2JqZWN0IGFzIEU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdGF0ZVNsaWNlPFQsIEU+KGtleXM6IHN0cmluZ1tdLCBzdGF0ZTogVCk6IEUge1xuICBpZiAoa2V5cyAmJiBrZXlzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiB7fSBhcyBFO1xuICB9XG5cbiAgbGV0IHN0YXRlU2xpY2VzID0ge307XG4gIGZvciAoY29uc3QgY3VycmVudEtleSBvZiBrZXlzKSB7XG4gICAgY29uc3Qgc3RhdGVWYWx1ZSA9IGdldFN0YXRlU2xpY2VWYWx1ZShjdXJyZW50S2V5LCBzdGF0ZSk7XG4gICAgY29uc3Qgc2hlbGwgPSBjcmVhdGVTaGVsbE9iamVjdChjdXJyZW50S2V5LCBzdGF0ZVZhbHVlKTtcbiAgICBzdGF0ZVNsaWNlcyA9IGRlZXBNZXJnZShzdGF0ZVNsaWNlcywgc2hlbGwpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlU2xpY2VzIGFzIEU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJLZXlzQnlUeXBlKFxuICBrZXlzOiB7IFtrZXk6IHN0cmluZ106IFN0b3JhZ2VTeW5jVHlwZSB8IFN0YXRlVHJhbnNmZXJUeXBlIH0sXG4gIHR5cGU6IFN0b3JhZ2VTeW5jVHlwZSB8IFN0YXRlVHJhbnNmZXJUeXBlXG4pOiBzdHJpbmdbXSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhrZXlzKS5maWx0ZXIoa2V5ID0+IGtleXNba2V5XSA9PT0gdHlwZSk7XG59XG4iXX0=