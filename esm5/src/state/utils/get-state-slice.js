/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        .reduce(function (previous, current) { return (previous ? previous[current] : undefined); }, state);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LXN0YXRlLXNsaWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3N0YXRlL3V0aWxzL2dldC1zdGF0ZS1zbGljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7Ozs7OztBQUUxRCxNQUFNLFVBQVUsa0JBQWtCLENBQU8sSUFBWSxFQUFFLEtBQVE7SUFDN0QsT0FBTyxJQUFJO1NBQ1IsS0FBSyxDQUFDLEdBQUcsQ0FBQztTQUNWLE1BQU0sQ0FDTCxVQUFDLFFBQVEsRUFBRSxPQUFPLElBQUssT0FBQSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBMUMsQ0FBMEMsRUFDakUsS0FBSyxDQUNOLENBQUM7QUFDTixDQUFDOzs7Ozs7O0FBRUQsTUFBTSxVQUFVLGlCQUFpQixDQUFPLEdBQVcsRUFBRSxLQUFRO0lBQzNELElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1FBQ3JELE9BQU8sbUJBQUEsRUFBRSxFQUFLLENBQUM7S0FDaEI7O1FBRUssUUFBUSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDOztRQUN6QixTQUFTLEdBQUcsRUFBRTs7UUFDaEIsYUFBYSxHQUFHLFNBQVM7SUFFN0IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7O1lBQ2xDLFVBQVUsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQzlCLGlCQUFpQjtRQUNqQixJQUFJLENBQUMsS0FBSyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUM3QixhQUFhLEdBQUcsYUFBYSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEtBQUssQ0FBQztTQUNuRDthQUFNO1lBQ0wsYUFBYSxHQUFHLGFBQWEsQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUM7U0FDaEQ7S0FDRjtJQUVELE9BQU8sbUJBQUEsU0FBUyxFQUFLLENBQUM7QUFDeEIsQ0FBQzs7Ozs7OztBQUVELE1BQU0sVUFBVSxhQUFhLENBQU8sSUFBYyxFQUFFLEtBQVE7O0lBQzFELElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1FBQzdCLE9BQU8sbUJBQUEsRUFBRSxFQUFLLENBQUM7S0FDaEI7O1FBRUcsV0FBVyxHQUFHLEVBQUU7O1FBQ3BCLEtBQXlCLElBQUEsU0FBQSxpQkFBQSxJQUFJLENBQUEsMEJBQUEsNENBQUU7WUFBMUIsSUFBTSxVQUFVLGlCQUFBOztnQkFDYixVQUFVLEdBQUcsa0JBQWtCLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQzs7Z0JBQ2xELEtBQUssR0FBRyxpQkFBaUIsQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDO1lBQ3ZELFdBQVcsR0FBRyxTQUFTLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQzdDOzs7Ozs7Ozs7SUFFRCxPQUFPLG1CQUFBLFdBQVcsRUFBSyxDQUFDO0FBQzFCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkZWVwTWVyZ2UgfSBmcm9tICcuLi8uLi9jb25maWcvdXRpbHMvZGVlcC1tZXJnZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdGF0ZVNsaWNlVmFsdWU8VCwgRT4oa2V5czogc3RyaW5nLCBzdGF0ZTogVCk6IEUge1xuICByZXR1cm4ga2V5c1xuICAgIC5zcGxpdCgnLicpXG4gICAgLnJlZHVjZShcbiAgICAgIChwcmV2aW91cywgY3VycmVudCkgPT4gKHByZXZpb3VzID8gcHJldmlvdXNbY3VycmVudF0gOiB1bmRlZmluZWQpLFxuICAgICAgc3RhdGVcbiAgICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU2hlbGxPYmplY3Q8VCwgRT4oa2V5OiBzdHJpbmcsIHZhbHVlOiBUKTogRSB7XG4gIGlmICgha2V5IHx8ICF2YWx1ZSB8fCBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIHt9IGFzIEU7XG4gIH1cblxuICBjb25zdCBrZXlTcGxpdCA9IGtleS5zcGxpdCgnLicpO1xuICBjb25zdCBuZXdPYmplY3QgPSB7fTtcbiAgbGV0IHRlbXBOZXdPYmplY3QgPSBuZXdPYmplY3Q7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlTcGxpdC5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGN1cnJlbnRLZXkgPSBrZXlTcGxpdFtpXTtcbiAgICAvLyBsYXN0IGl0ZXJhdGlvblxuICAgIGlmIChpID09PSBrZXlTcGxpdC5sZW5ndGggLSAxKSB7XG4gICAgICB0ZW1wTmV3T2JqZWN0ID0gdGVtcE5ld09iamVjdFtjdXJyZW50S2V5XSA9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0ZW1wTmV3T2JqZWN0ID0gdGVtcE5ld09iamVjdFtjdXJyZW50S2V5XSA9IHt9O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXdPYmplY3QgYXMgRTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0YXRlU2xpY2U8VCwgRT4oa2V5czogc3RyaW5nW10sIHN0YXRlOiBUKTogRSB7XG4gIGlmIChrZXlzICYmIGtleXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIHt9IGFzIEU7XG4gIH1cblxuICBsZXQgc3RhdGVTbGljZXMgPSB7fTtcbiAgZm9yIChjb25zdCBjdXJyZW50S2V5IG9mIGtleXMpIHtcbiAgICBjb25zdCBzdGF0ZVZhbHVlID0gZ2V0U3RhdGVTbGljZVZhbHVlKGN1cnJlbnRLZXksIHN0YXRlKTtcbiAgICBjb25zdCBzaGVsbCA9IGNyZWF0ZVNoZWxsT2JqZWN0KGN1cnJlbnRLZXksIHN0YXRlVmFsdWUpO1xuICAgIHN0YXRlU2xpY2VzID0gZGVlcE1lcmdlKHN0YXRlU2xpY2VzLCBzaGVsbCk7XG4gIH1cblxuICByZXR1cm4gc3RhdGVTbGljZXMgYXMgRTtcbn1cbiJdfQ==