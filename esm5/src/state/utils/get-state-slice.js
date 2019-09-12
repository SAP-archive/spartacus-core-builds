/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { deepMerge } from '../../config/utils/deep-merge';
/** @type {?} */
var OBJECT_SEPARATOR = '.';
/**
 * @template T, E
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
 * @template T, E
 * @param {?} key
 * @param {?} excludeKeys
 * @param {?} value
 * @return {?}
 */
export function createShellObject(key, excludeKeys, value) {
    if (!key || !value || Object.keys(value).length === 0) {
        return (/** @type {?} */ ({}));
    }
    /** @type {?} */
    var shell = key.split(OBJECT_SEPARATOR).reduceRight((/**
     * @param {?} acc
     * @param {?} previous
     * @return {?}
     */
    function (acc, previous) {
        var _a;
        return (/** @type {?} */ (((/** @type {?} */ (_a = {}, _a[previous] = acc, _a)))));
    }), value);
    return handleExclusions(key, excludeKeys, shell);
}
/**
 * @template T, E
 * @param {?} keys
 * @param {?} excludeKeys
 * @param {?} state
 * @return {?}
 */
export function getStateSlice(keys, excludeKeys, state) {
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
    return (/** @type {?} */ (stateSlices));
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
/**
 * @param {?} keys
 * @param {?} type
 * @return {?}
 */
export function filterKeysByType(keys, type) {
    if (!keys) {
        return [];
    }
    return Object.keys(keys).filter((/**
     * @param {?} key
     * @return {?}
     */
    function (key) { return keys[key] === type; }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LXN0YXRlLXNsaWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3N0YXRlL3V0aWxzL2dldC1zdGF0ZS1zbGljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7SUFHcEQsZ0JBQWdCLEdBQUcsR0FBRzs7Ozs7OztBQUU1QixNQUFNLFVBQVUsa0JBQWtCLENBQU8sSUFBWSxFQUFFLEtBQVE7SUFDN0QsT0FBTyxJQUFJO1NBQ1IsS0FBSyxDQUFDLGdCQUFnQixDQUFDO1NBQ3ZCLE1BQU07Ozs7O0lBQ0wsVUFBQyxRQUFRLEVBQUUsT0FBTyxJQUFLLE9BQUEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQTFDLENBQTBDLEdBQ2pFLEtBQUssQ0FDTixDQUFDO0FBQ04sQ0FBQzs7Ozs7Ozs7QUFFRCxNQUFNLFVBQVUsaUJBQWlCLENBQy9CLEdBQVcsRUFDWCxXQUFxQixFQUNyQixLQUFRO0lBRVIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDckQsT0FBTyxtQkFBQSxFQUFFLEVBQUssQ0FBQztLQUNoQjs7UUFFSyxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLFdBQVc7Ozs7O0lBQUMsVUFBQyxHQUFHLEVBQUUsUUFBUTs7UUFDbEUsT0FBTyxtQkFBQSxDQUFDLDRCQUFFLEdBQUMsUUFBUSxJQUFHLEdBQUcsTUFBYSxDQUFDLEVBQUssQ0FBQztJQUMvQyxDQUFDLEdBQUUsS0FBSyxDQUFDO0lBQ1QsT0FBTyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsV0FBVyxFQUFFLEtBQUss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LElBQUksRUFBbEIsQ0FBa0IsRUFBQyxDQUFDO0FBQzdELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkZWVwTWVyZ2UgfSBmcm9tICcuLi8uLi9jb25maWcvdXRpbHMvZGVlcC1tZXJnZSc7XG5pbXBvcnQgeyBTdGF0ZVRyYW5zZmVyVHlwZSwgU3RvcmFnZVN5bmNUeXBlIH0gZnJvbSAnLi4vY29uZmlnL3N0YXRlLWNvbmZpZyc7XG5cbmNvbnN0IE9CSkVDVF9TRVBBUkFUT1IgPSAnLic7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdGF0ZVNsaWNlVmFsdWU8VCwgRT4oa2V5czogc3RyaW5nLCBzdGF0ZTogVCk6IEUge1xuICByZXR1cm4ga2V5c1xuICAgIC5zcGxpdChPQkpFQ1RfU0VQQVJBVE9SKVxuICAgIC5yZWR1Y2UoXG4gICAgICAocHJldmlvdXMsIGN1cnJlbnQpID0+IChwcmV2aW91cyA/IHByZXZpb3VzW2N1cnJlbnRdIDogdW5kZWZpbmVkKSxcbiAgICAgIHN0YXRlXG4gICAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNoZWxsT2JqZWN0PFQsIEU+KFxuICBrZXk6IHN0cmluZyxcbiAgZXhjbHVkZUtleXM6IHN0cmluZ1tdLFxuICB2YWx1ZTogVFxuKTogRSB7XG4gIGlmICgha2V5IHx8ICF2YWx1ZSB8fCBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIHt9IGFzIEU7XG4gIH1cblxuICBjb25zdCBzaGVsbCA9IGtleS5zcGxpdChPQkpFQ1RfU0VQQVJBVE9SKS5yZWR1Y2VSaWdodCgoYWNjLCBwcmV2aW91cykgPT4ge1xuICAgIHJldHVybiAoeyBbcHJldmlvdXNdOiBhY2MgfSBhcyB1bmtub3duKSBhcyBUO1xuICB9LCB2YWx1ZSk7XG4gIHJldHVybiBoYW5kbGVFeGNsdXNpb25zKGtleSwgZXhjbHVkZUtleXMsIHNoZWxsKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0YXRlU2xpY2U8VCwgRT4oXG4gIGtleXM6IHN0cmluZ1tdLFxuICBleGNsdWRlS2V5czogc3RyaW5nW10sXG4gIHN0YXRlOiBUXG4pOiBFIHtcbiAgaWYgKGtleXMgJiYga2V5cy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4ge30gYXMgRTtcbiAgfVxuXG4gIGxldCBzdGF0ZVNsaWNlcyA9IHt9O1xuICBmb3IgKGNvbnN0IGN1cnJlbnRLZXkgb2Yga2V5cykge1xuICAgIGNvbnN0IHN0YXRlVmFsdWUgPSBnZXRTdGF0ZVNsaWNlVmFsdWUoY3VycmVudEtleSwgc3RhdGUpO1xuICAgIGNvbnN0IHNoZWxsID0gY3JlYXRlU2hlbGxPYmplY3QoY3VycmVudEtleSwgZXhjbHVkZUtleXMsIHN0YXRlVmFsdWUpO1xuICAgIHN0YXRlU2xpY2VzID0gZGVlcE1lcmdlKHN0YXRlU2xpY2VzLCBzaGVsbCk7XG4gIH1cblxuICByZXR1cm4gc3RhdGVTbGljZXMgYXMgRTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUV4Y2x1c2lvbnMoXG4gIGtleTogc3RyaW5nLFxuICBleGNsdWRlS2V5czogc3RyaW5nW10sXG4gIHZhbHVlOiBhbnlcbik6IGFueSB7XG4gIGNvbnN0IGV4Y2x1c2lvbktleXMgPSBnZXRFeGNsdXNpb25LZXlzKGtleSwgZXhjbHVkZUtleXMpO1xuICBpZiAoZXhjbHVzaW9uS2V5cy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBjb25zdCBmaW5hbFZhbHVlID0gZGVlcE1lcmdlKHt9LCB2YWx1ZSk7XG4gIGZvciAoY29uc3QgY3VycmVudEV4Y2x1c2lvbktleSBvZiBleGNsdXNpb25LZXlzKSB7XG4gICAgY29uc3QgZXhjbHVzaW9uQ2h1bmtzU3BsaXQgPSBjdXJyZW50RXhjbHVzaW9uS2V5LnNwbGl0KE9CSkVDVF9TRVBBUkFUT1IpO1xuXG4gICAgbGV0IG5lc3RlZFRlbXAgPSBmaW5hbFZhbHVlO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXhjbHVzaW9uQ2h1bmtzU3BsaXQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRDaHVuayA9IGV4Y2x1c2lvbkNodW5rc1NwbGl0W2ldO1xuXG4gICAgICAvLyBsYXN0IGl0ZXJhdGlvblxuICAgICAgaWYgKGkgPT09IGV4Y2x1c2lvbkNodW5rc1NwbGl0Lmxlbmd0aCAtIDEpIHtcbiAgICAgICAgaWYgKG5lc3RlZFRlbXAgJiYgbmVzdGVkVGVtcFtjdXJyZW50Q2h1bmtdKSB7XG4gICAgICAgICAgZGVsZXRlIG5lc3RlZFRlbXBbY3VycmVudENodW5rXTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmVzdGVkVGVtcCA9IG5lc3RlZFRlbXBbY3VycmVudENodW5rXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmluYWxWYWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEV4Y2x1c2lvbktleXMoa2V5OiBzdHJpbmcsIGV4Y2x1ZGVLZXlzOiBzdHJpbmdbXSk6IHN0cmluZ1tdIHtcbiAgaWYgKCFrZXkgfHwgIWV4Y2x1ZGVLZXlzKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgY29uc3QgZXhjbHVzaW9uS2V5czogc3RyaW5nW10gPSBbXTtcbiAgZm9yIChjb25zdCBleGNsdXNpb25LZXkgb2YgZXhjbHVkZUtleXMpIHtcbiAgICBpZiAoZXhjbHVzaW9uS2V5LmluY2x1ZGVzKGtleSkpIHtcbiAgICAgIGV4Y2x1c2lvbktleXMucHVzaChleGNsdXNpb25LZXkpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBleGNsdXNpb25LZXlzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyS2V5c0J5VHlwZShcbiAga2V5czogeyBba2V5OiBzdHJpbmddOiBTdG9yYWdlU3luY1R5cGUgfCBTdGF0ZVRyYW5zZmVyVHlwZSB9LFxuICB0eXBlOiBTdG9yYWdlU3luY1R5cGUgfCBTdGF0ZVRyYW5zZmVyVHlwZVxuKTogc3RyaW5nW10ge1xuICBpZiAoIWtleXMpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgcmV0dXJuIE9iamVjdC5rZXlzKGtleXMpLmZpbHRlcihrZXkgPT4ga2V5c1trZXldID09PSB0eXBlKTtcbn1cbiJdfQ==