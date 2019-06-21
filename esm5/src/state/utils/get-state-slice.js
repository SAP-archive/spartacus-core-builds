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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LXN0YXRlLXNsaWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3N0YXRlL3V0aWxzL2dldC1zdGF0ZS1zbGljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7Ozs7OztBQUUxRCxNQUFNLFVBQVUsa0JBQWtCLENBQU8sSUFBWSxFQUFFLEtBQVE7SUFDN0QsT0FBTyxJQUFJO1NBQ1IsS0FBSyxDQUFDLEdBQUcsQ0FBQztTQUNWLE1BQU07Ozs7O0lBQ0wsVUFBQyxRQUFRLEVBQUUsT0FBTyxJQUFLLE9BQUEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQTFDLENBQTBDLEdBQ2pFLEtBQUssQ0FDTixDQUFDO0FBQ04sQ0FBQzs7Ozs7OztBQUVELE1BQU0sVUFBVSxpQkFBaUIsQ0FBTyxHQUFXLEVBQUUsS0FBUTtJQUMzRCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtRQUNyRCxPQUFPLG1CQUFBLEVBQUUsRUFBSyxDQUFDO0tBQ2hCOztRQUVLLFFBQVEsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQzs7UUFDekIsU0FBUyxHQUFHLEVBQUU7O1FBQ2hCLGFBQWEsR0FBRyxTQUFTO0lBRTdCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFOztZQUNsQyxVQUFVLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUM5QixpQkFBaUI7UUFDakIsSUFBSSxDQUFDLEtBQUssUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDN0IsYUFBYSxHQUFHLGFBQWEsQ0FBQyxVQUFVLENBQUMsR0FBRyxLQUFLLENBQUM7U0FDbkQ7YUFBTTtZQUNMLGFBQWEsR0FBRyxhQUFhLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDO1NBQ2hEO0tBQ0Y7SUFFRCxPQUFPLG1CQUFBLFNBQVMsRUFBSyxDQUFDO0FBQ3hCLENBQUM7Ozs7Ozs7QUFFRCxNQUFNLFVBQVUsYUFBYSxDQUFPLElBQWMsRUFBRSxLQUFROztJQUMxRCxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtRQUM3QixPQUFPLG1CQUFBLEVBQUUsRUFBSyxDQUFDO0tBQ2hCOztRQUVHLFdBQVcsR0FBRyxFQUFFOztRQUNwQixLQUF5QixJQUFBLFNBQUEsaUJBQUEsSUFBSSxDQUFBLDBCQUFBLDRDQUFFO1lBQTFCLElBQU0sVUFBVSxpQkFBQTs7Z0JBQ2IsVUFBVSxHQUFHLGtCQUFrQixDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUM7O2dCQUNsRCxLQUFLLEdBQUcsaUJBQWlCLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQztZQUN2RCxXQUFXLEdBQUcsU0FBUyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUM3Qzs7Ozs7Ozs7O0lBRUQsT0FBTyxtQkFBQSxXQUFXLEVBQUssQ0FBQztBQUMxQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGVlcE1lcmdlIH0gZnJvbSAnLi4vLi4vY29uZmlnL3V0aWxzL2RlZXAtbWVyZ2UnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RhdGVTbGljZVZhbHVlPFQsIEU+KGtleXM6IHN0cmluZywgc3RhdGU6IFQpOiBFIHtcbiAgcmV0dXJuIGtleXNcbiAgICAuc3BsaXQoJy4nKVxuICAgIC5yZWR1Y2UoXG4gICAgICAocHJldmlvdXMsIGN1cnJlbnQpID0+IChwcmV2aW91cyA/IHByZXZpb3VzW2N1cnJlbnRdIDogdW5kZWZpbmVkKSxcbiAgICAgIHN0YXRlXG4gICAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNoZWxsT2JqZWN0PFQsIEU+KGtleTogc3RyaW5nLCB2YWx1ZTogVCk6IEUge1xuICBpZiAoIWtleSB8fCAhdmFsdWUgfHwgT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiB7fSBhcyBFO1xuICB9XG5cbiAgY29uc3Qga2V5U3BsaXQgPSBrZXkuc3BsaXQoJy4nKTtcbiAgY29uc3QgbmV3T2JqZWN0ID0ge307XG4gIGxldCB0ZW1wTmV3T2JqZWN0ID0gbmV3T2JqZWN0O1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwga2V5U3BsaXQubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBjdXJyZW50S2V5ID0ga2V5U3BsaXRbaV07XG4gICAgLy8gbGFzdCBpdGVyYXRpb25cbiAgICBpZiAoaSA9PT0ga2V5U3BsaXQubGVuZ3RoIC0gMSkge1xuICAgICAgdGVtcE5ld09iamVjdCA9IHRlbXBOZXdPYmplY3RbY3VycmVudEtleV0gPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGVtcE5ld09iamVjdCA9IHRlbXBOZXdPYmplY3RbY3VycmVudEtleV0gPSB7fTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3T2JqZWN0IGFzIEU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdGF0ZVNsaWNlPFQsIEU+KGtleXM6IHN0cmluZ1tdLCBzdGF0ZTogVCk6IEUge1xuICBpZiAoa2V5cyAmJiBrZXlzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiB7fSBhcyBFO1xuICB9XG5cbiAgbGV0IHN0YXRlU2xpY2VzID0ge307XG4gIGZvciAoY29uc3QgY3VycmVudEtleSBvZiBrZXlzKSB7XG4gICAgY29uc3Qgc3RhdGVWYWx1ZSA9IGdldFN0YXRlU2xpY2VWYWx1ZShjdXJyZW50S2V5LCBzdGF0ZSk7XG4gICAgY29uc3Qgc2hlbGwgPSBjcmVhdGVTaGVsbE9iamVjdChjdXJyZW50S2V5LCBzdGF0ZVZhbHVlKTtcbiAgICBzdGF0ZVNsaWNlcyA9IGRlZXBNZXJnZShzdGF0ZVNsaWNlcywgc2hlbGwpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlU2xpY2VzIGFzIEU7XG59XG4iXX0=