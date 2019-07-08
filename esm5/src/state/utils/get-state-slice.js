/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { deepMerge } from '../../config/utils/deep-merge';
/** @type {?} */
var OBJECT_SEPARATOR = '.';
/**
 * @param {?} keys
 * @param {?} state
 * @return {?}
 */
export function getStateSliceValue(keys, state) {
    return keys
        .split(OBJECT_SEPARATOR)
        .reduce((/**
     * @param {?} previous
     * @param {?} current
     * @return {?}
     */
    function (previous, current) { return (previous ? previous[current] : undefined); }), state);
}
/**
 * @param {?} key
 * @param {?} excludeKeys
 * @param {?} value
 * @return {?}
 */
export function createShellObject(key, excludeKeys, value) {
    if (!key || !value || Object.keys(value).length === 0) {
        return {};
    }
    /** @type {?} */
    var shell = key.split(OBJECT_SEPARATOR).reduceRight((/**
     * @param {?} acc
     * @param {?} previous
     * @return {?}
     */
    function (acc, previous) {
        var _a;
        return _a = {}, _a[previous] = acc, _a;
    }), value);
    return handleExclusions(key, excludeKeys, shell);
}
/**
 * @param {?} keys
 * @param {?} excludeKeys
 * @param {?} state
 * @return {?}
 */
export function getStateSlice(keys, excludeKeys, state) {
    var e_1, _a;
    if (keys && keys.length === 0) {
        return {};
    }
    /** @type {?} */
    var stateSlices = {};
    try {
        for (var keys_1 = tslib_1.__values(keys), keys_1_1 = keys_1.next(); !keys_1_1.done; keys_1_1 = keys_1.next()) {
            var currentKey = keys_1_1.value;
            /** @type {?} */
            var stateValue = getStateSliceValue(currentKey, state);
            /** @type {?} */
            var shell = createShellObject(currentKey, excludeKeys, stateValue);
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
    return stateSlices;
}
/**
 * @param {?} key
 * @param {?} excludeKeys
 * @param {?} value
 * @return {?}
 */
export function handleExclusions(key, excludeKeys, value) {
    var e_2, _a;
    /** @type {?} */
    var exclusionKeys = getExclusionKeys(key, excludeKeys);
    if (exclusionKeys.length === 0) {
        return value;
    }
    /** @type {?} */
    var finalValue = deepMerge({}, value);
    try {
        for (var exclusionKeys_1 = tslib_1.__values(exclusionKeys), exclusionKeys_1_1 = exclusionKeys_1.next(); !exclusionKeys_1_1.done; exclusionKeys_1_1 = exclusionKeys_1.next()) {
            var currentExclusionKey = exclusionKeys_1_1.value;
            /** @type {?} */
            var exclusionChunksSplit = currentExclusionKey.split(OBJECT_SEPARATOR);
            /** @type {?} */
            var nestedTemp = finalValue;
            for (var i = 0; i < exclusionChunksSplit.length; i++) {
                /** @type {?} */
                var currentChunk = exclusionChunksSplit[i];
                // last iteration
                if (i === exclusionChunksSplit.length - 1) {
                    if (nestedTemp && nestedTemp[currentChunk]) {
                        delete nestedTemp[currentChunk];
                    }
                }
                else {
                    nestedTemp = nestedTemp[currentChunk];
                }
            }
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (exclusionKeys_1_1 && !exclusionKeys_1_1.done && (_a = exclusionKeys_1.return)) _a.call(exclusionKeys_1);
        }
        finally { if (e_2) throw e_2.error; }
    }
    return finalValue;
}
/**
 * @param {?} key
 * @param {?} excludeKeys
 * @return {?}
 */
export function getExclusionKeys(key, excludeKeys) {
    var e_3, _a;
    if (!key || !excludeKeys) {
        return [];
    }
    /** @type {?} */
    var exclusionKeys = [];
    try {
        for (var excludeKeys_1 = tslib_1.__values(excludeKeys), excludeKeys_1_1 = excludeKeys_1.next(); !excludeKeys_1_1.done; excludeKeys_1_1 = excludeKeys_1.next()) {
            var exclusionKey = excludeKeys_1_1.value;
            if (exclusionKey.includes(key)) {
                exclusionKeys.push(exclusionKey);
            }
        }
    }
    catch (e_3_1) { e_3 = { error: e_3_1 }; }
    finally {
        try {
            if (excludeKeys_1_1 && !excludeKeys_1_1.done && (_a = excludeKeys_1.return)) _a.call(excludeKeys_1);
        }
        finally { if (e_3) throw e_3.error; }
    }
    return exclusionKeys;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LXN0YXRlLXNsaWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3N0YXRlL3V0aWxzL2dldC1zdGF0ZS1zbGljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7SUFFcEQsZ0JBQWdCLEdBQUcsR0FBRzs7Ozs7O0FBRTVCLE1BQU0sVUFBVSxrQkFBa0IsQ0FBQyxJQUFZLEVBQUUsS0FBVTtJQUN6RCxPQUFPLElBQUk7U0FDUixLQUFLLENBQUMsZ0JBQWdCLENBQUM7U0FDdkIsTUFBTTs7Ozs7SUFDTCxVQUFDLFFBQVEsRUFBRSxPQUFPLElBQUssT0FBQSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBMUMsQ0FBMEMsR0FDakUsS0FBSyxDQUNOLENBQUM7QUFDTixDQUFDOzs7Ozs7O0FBRUQsTUFBTSxVQUFVLGlCQUFpQixDQUMvQixHQUFXLEVBQ1gsV0FBcUIsRUFDckIsS0FBVTtJQUVWLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1FBQ3JELE9BQU8sRUFBRSxDQUFDO0tBQ1g7O1FBRUssS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxXQUFXOzs7OztJQUFDLFVBQUMsR0FBRyxFQUFFLFFBQVE7O1FBQ2xFLGdCQUFTLEdBQUMsUUFBUSxJQUFHLEdBQUcsS0FBRztJQUM3QixDQUFDLEdBQUUsS0FBSyxDQUFDO0lBQ1QsT0FBTyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ25ELENBQUM7Ozs7Ozs7QUFFRCxNQUFNLFVBQVUsYUFBYSxDQUMzQixJQUFjLEVBQ2QsV0FBcUIsRUFDckIsS0FBVTs7SUFFVixJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtRQUM3QixPQUFPLEVBQUUsQ0FBQztLQUNYOztRQUVHLFdBQVcsR0FBRyxFQUFFOztRQUNwQixLQUF5QixJQUFBLFNBQUEsaUJBQUEsSUFBSSxDQUFBLDBCQUFBLDRDQUFFO1lBQTFCLElBQU0sVUFBVSxpQkFBQTs7Z0JBQ2IsVUFBVSxHQUFHLGtCQUFrQixDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUM7O2dCQUNsRCxLQUFLLEdBQUcsaUJBQWlCLENBQUMsVUFBVSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUM7WUFDcEUsV0FBVyxHQUFHLFNBQVMsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDN0M7Ozs7Ozs7OztJQUVELE9BQU8sV0FBVyxDQUFDO0FBQ3JCLENBQUM7Ozs7Ozs7QUFFRCxNQUFNLFVBQVUsZ0JBQWdCLENBQzlCLEdBQVcsRUFDWCxXQUFxQixFQUNyQixLQUFVOzs7UUFFSixhQUFhLEdBQUcsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLFdBQVcsQ0FBQztJQUN4RCxJQUFJLGFBQWEsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1FBQzlCLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7O1FBRUssVUFBVSxHQUFHLFNBQVMsQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDOztRQUN2QyxLQUFrQyxJQUFBLGtCQUFBLGlCQUFBLGFBQWEsQ0FBQSw0Q0FBQSx1RUFBRTtZQUE1QyxJQUFNLG1CQUFtQiwwQkFBQTs7Z0JBQ3RCLG9CQUFvQixHQUFHLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQzs7Z0JBRXBFLFVBQVUsR0FBRyxVQUFVO1lBQzNCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxvQkFBb0IsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7O29CQUM5QyxZQUFZLEdBQUcsb0JBQW9CLENBQUMsQ0FBQyxDQUFDO2dCQUU1QyxpQkFBaUI7Z0JBQ2pCLElBQUksQ0FBQyxLQUFLLG9CQUFvQixDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7b0JBQ3pDLElBQUksVUFBVSxJQUFJLFVBQVUsQ0FBQyxZQUFZLENBQUMsRUFBRTt3QkFDMUMsT0FBTyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUM7cUJBQ2pDO2lCQUNGO3FCQUFNO29CQUNMLFVBQVUsR0FBRyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUM7aUJBQ3ZDO2FBQ0Y7U0FDRjs7Ozs7Ozs7O0lBRUQsT0FBTyxVQUFVLENBQUM7QUFDcEIsQ0FBQzs7Ozs7O0FBRUQsTUFBTSxVQUFVLGdCQUFnQixDQUFDLEdBQVcsRUFBRSxXQUFxQjs7SUFDakUsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRTtRQUN4QixPQUFPLEVBQUUsQ0FBQztLQUNYOztRQUVLLGFBQWEsR0FBYSxFQUFFOztRQUNsQyxLQUEyQixJQUFBLGdCQUFBLGlCQUFBLFdBQVcsQ0FBQSx3Q0FBQSxpRUFBRTtZQUFuQyxJQUFNLFlBQVksd0JBQUE7WUFDckIsSUFBSSxZQUFZLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUM5QixhQUFhLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2FBQ2xDO1NBQ0Y7Ozs7Ozs7OztJQUVELE9BQU8sYUFBYSxDQUFDO0FBQ3ZCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkZWVwTWVyZ2UgfSBmcm9tICcuLi8uLi9jb25maWcvdXRpbHMvZGVlcC1tZXJnZSc7XG5cbmNvbnN0IE9CSkVDVF9TRVBBUkFUT1IgPSAnLic7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdGF0ZVNsaWNlVmFsdWUoa2V5czogc3RyaW5nLCBzdGF0ZTogYW55KTogYW55IHtcbiAgcmV0dXJuIGtleXNcbiAgICAuc3BsaXQoT0JKRUNUX1NFUEFSQVRPUilcbiAgICAucmVkdWNlKFxuICAgICAgKHByZXZpb3VzLCBjdXJyZW50KSA9PiAocHJldmlvdXMgPyBwcmV2aW91c1tjdXJyZW50XSA6IHVuZGVmaW5lZCksXG4gICAgICBzdGF0ZVxuICAgICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTaGVsbE9iamVjdChcbiAga2V5OiBzdHJpbmcsXG4gIGV4Y2x1ZGVLZXlzOiBzdHJpbmdbXSxcbiAgdmFsdWU6IGFueVxuKTogYW55IHtcbiAgaWYgKCFrZXkgfHwgIXZhbHVlIHx8IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4ge307XG4gIH1cblxuICBjb25zdCBzaGVsbCA9IGtleS5zcGxpdChPQkpFQ1RfU0VQQVJBVE9SKS5yZWR1Y2VSaWdodCgoYWNjLCBwcmV2aW91cykgPT4ge1xuICAgIHJldHVybiB7IFtwcmV2aW91c106IGFjYyB9O1xuICB9LCB2YWx1ZSk7XG4gIHJldHVybiBoYW5kbGVFeGNsdXNpb25zKGtleSwgZXhjbHVkZUtleXMsIHNoZWxsKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0YXRlU2xpY2UoXG4gIGtleXM6IHN0cmluZ1tdLFxuICBleGNsdWRlS2V5czogc3RyaW5nW10sXG4gIHN0YXRlOiBhbnlcbik6IGFueSB7XG4gIGlmIChrZXlzICYmIGtleXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgbGV0IHN0YXRlU2xpY2VzID0ge307XG4gIGZvciAoY29uc3QgY3VycmVudEtleSBvZiBrZXlzKSB7XG4gICAgY29uc3Qgc3RhdGVWYWx1ZSA9IGdldFN0YXRlU2xpY2VWYWx1ZShjdXJyZW50S2V5LCBzdGF0ZSk7XG4gICAgY29uc3Qgc2hlbGwgPSBjcmVhdGVTaGVsbE9iamVjdChjdXJyZW50S2V5LCBleGNsdWRlS2V5cywgc3RhdGVWYWx1ZSk7XG4gICAgc3RhdGVTbGljZXMgPSBkZWVwTWVyZ2Uoc3RhdGVTbGljZXMsIHNoZWxsKTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZVNsaWNlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUV4Y2x1c2lvbnMoXG4gIGtleTogc3RyaW5nLFxuICBleGNsdWRlS2V5czogc3RyaW5nW10sXG4gIHZhbHVlOiBhbnlcbik6IGFueSB7XG4gIGNvbnN0IGV4Y2x1c2lvbktleXMgPSBnZXRFeGNsdXNpb25LZXlzKGtleSwgZXhjbHVkZUtleXMpO1xuICBpZiAoZXhjbHVzaW9uS2V5cy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBjb25zdCBmaW5hbFZhbHVlID0gZGVlcE1lcmdlKHt9LCB2YWx1ZSk7XG4gIGZvciAoY29uc3QgY3VycmVudEV4Y2x1c2lvbktleSBvZiBleGNsdXNpb25LZXlzKSB7XG4gICAgY29uc3QgZXhjbHVzaW9uQ2h1bmtzU3BsaXQgPSBjdXJyZW50RXhjbHVzaW9uS2V5LnNwbGl0KE9CSkVDVF9TRVBBUkFUT1IpO1xuXG4gICAgbGV0IG5lc3RlZFRlbXAgPSBmaW5hbFZhbHVlO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXhjbHVzaW9uQ2h1bmtzU3BsaXQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRDaHVuayA9IGV4Y2x1c2lvbkNodW5rc1NwbGl0W2ldO1xuXG4gICAgICAvLyBsYXN0IGl0ZXJhdGlvblxuICAgICAgaWYgKGkgPT09IGV4Y2x1c2lvbkNodW5rc1NwbGl0Lmxlbmd0aCAtIDEpIHtcbiAgICAgICAgaWYgKG5lc3RlZFRlbXAgJiYgbmVzdGVkVGVtcFtjdXJyZW50Q2h1bmtdKSB7XG4gICAgICAgICAgZGVsZXRlIG5lc3RlZFRlbXBbY3VycmVudENodW5rXTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmVzdGVkVGVtcCA9IG5lc3RlZFRlbXBbY3VycmVudENodW5rXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmluYWxWYWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEV4Y2x1c2lvbktleXMoa2V5OiBzdHJpbmcsIGV4Y2x1ZGVLZXlzOiBzdHJpbmdbXSk6IHN0cmluZ1tdIHtcbiAgaWYgKCFrZXkgfHwgIWV4Y2x1ZGVLZXlzKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgY29uc3QgZXhjbHVzaW9uS2V5czogc3RyaW5nW10gPSBbXTtcbiAgZm9yIChjb25zdCBleGNsdXNpb25LZXkgb2YgZXhjbHVkZUtleXMpIHtcbiAgICBpZiAoZXhjbHVzaW9uS2V5LmluY2x1ZGVzKGtleSkpIHtcbiAgICAgIGV4Y2x1c2lvbktleXMucHVzaChleGNsdXNpb25LZXkpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBleGNsdXNpb25LZXlzO1xufVxuIl19