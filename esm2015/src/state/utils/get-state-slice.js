/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { deepMerge } from '../../config/utils/deep-merge';
/** @type {?} */
const OBJECT_SEPARATOR = '.';
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
    (previous, current) => (previous ? previous[current] : undefined)), state);
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
    const shell = key.split(OBJECT_SEPARATOR).reduceRight((/**
     * @param {?} acc
     * @param {?} previous
     * @return {?}
     */
    (acc, previous) => {
        return (/** @type {?} */ (((/** @type {?} */ ({ [previous]: acc })))));
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
    if (keys && keys.length === 0) {
        return (/** @type {?} */ ({}));
    }
    /** @type {?} */
    let stateSlices = {};
    for (const currentKey of keys) {
        /** @type {?} */
        const stateValue = getStateSliceValue(currentKey, state);
        /** @type {?} */
        const shell = createShellObject(currentKey, excludeKeys, stateValue);
        stateSlices = deepMerge(stateSlices, shell);
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
    /** @type {?} */
    const exclusionKeys = getExclusionKeys(key, excludeKeys);
    if (exclusionKeys.length === 0) {
        return value;
    }
    /** @type {?} */
    const finalValue = deepMerge({}, value);
    for (const currentExclusionKey of exclusionKeys) {
        /** @type {?} */
        const exclusionChunksSplit = currentExclusionKey.split(OBJECT_SEPARATOR);
        /** @type {?} */
        let nestedTemp = finalValue;
        for (let i = 0; i < exclusionChunksSplit.length; i++) {
            /** @type {?} */
            const currentChunk = exclusionChunksSplit[i];
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
    return finalValue;
}
/**
 * @param {?} key
 * @param {?} excludeKeys
 * @return {?}
 */
export function getExclusionKeys(key, excludeKeys) {
    if (!key || !excludeKeys) {
        return [];
    }
    /** @type {?} */
    const exclusionKeys = [];
    for (const exclusionKey of excludeKeys) {
        if (exclusionKey.includes(key)) {
            exclusionKeys.push(exclusionKey);
        }
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
    key => keys[key] === type));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LXN0YXRlLXNsaWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3N0YXRlL3V0aWxzL2dldC1zdGF0ZS1zbGljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLCtCQUErQixDQUFDOztNQUdwRCxnQkFBZ0IsR0FBRyxHQUFHOzs7Ozs7O0FBRTVCLE1BQU0sVUFBVSxrQkFBa0IsQ0FBTyxJQUFZLEVBQUUsS0FBUTtJQUM3RCxPQUFPLElBQUk7U0FDUixLQUFLLENBQUMsZ0JBQWdCLENBQUM7U0FDdkIsTUFBTTs7Ozs7SUFDTCxDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUNqRSxLQUFLLENBQ04sQ0FBQztBQUNOLENBQUM7Ozs7Ozs7O0FBRUQsTUFBTSxVQUFVLGlCQUFpQixDQUMvQixHQUFXLEVBQ1gsV0FBcUIsRUFDckIsS0FBUTtJQUVSLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1FBQ3JELE9BQU8sbUJBQUEsRUFBRSxFQUFLLENBQUM7S0FDaEI7O1VBRUssS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxXQUFXOzs7OztJQUFDLENBQUMsR0FBRyxFQUFFLFFBQVEsRUFBRSxFQUFFO1FBQ3RFLE9BQU8sbUJBQUEsQ0FBQyxtQkFBQSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQVcsQ0FBQyxFQUFLLENBQUM7SUFDL0MsQ0FBQyxHQUFFLEtBQUssQ0FBQztJQUNULE9BQU8sZ0JBQWdCLENBQUMsR0FBRyxFQUFFLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUNuRCxDQUFDOzs7Ozs7OztBQUVELE1BQU0sVUFBVSxhQUFhLENBQzNCLElBQWMsRUFDZCxXQUFxQixFQUNyQixLQUFRO0lBRVIsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDN0IsT0FBTyxtQkFBQSxFQUFFLEVBQUssQ0FBQztLQUNoQjs7UUFFRyxXQUFXLEdBQUcsRUFBRTtJQUNwQixLQUFLLE1BQU0sVUFBVSxJQUFJLElBQUksRUFBRTs7Y0FDdkIsVUFBVSxHQUFHLGtCQUFrQixDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUM7O2NBQ2xELEtBQUssR0FBRyxpQkFBaUIsQ0FBQyxVQUFVLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQztRQUNwRSxXQUFXLEdBQUcsU0FBUyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQztLQUM3QztJQUVELE9BQU8sbUJBQUEsV0FBVyxFQUFLLENBQUM7QUFDMUIsQ0FBQzs7Ozs7OztBQUVELE1BQU0sVUFBVSxnQkFBZ0IsQ0FDOUIsR0FBVyxFQUNYLFdBQXFCLEVBQ3JCLEtBQVU7O1VBRUosYUFBYSxHQUFHLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxXQUFXLENBQUM7SUFDeEQsSUFBSSxhQUFhLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtRQUM5QixPQUFPLEtBQUssQ0FBQztLQUNkOztVQUVLLFVBQVUsR0FBRyxTQUFTLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQztJQUN2QyxLQUFLLE1BQU0sbUJBQW1CLElBQUksYUFBYSxFQUFFOztjQUN6QyxvQkFBb0IsR0FBRyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUM7O1lBRXBFLFVBQVUsR0FBRyxVQUFVO1FBQzNCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxvQkFBb0IsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7O2tCQUM5QyxZQUFZLEdBQUcsb0JBQW9CLENBQUMsQ0FBQyxDQUFDO1lBRTVDLGlCQUFpQjtZQUNqQixJQUFJLENBQUMsS0FBSyxvQkFBb0IsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUN6QyxJQUFJLFVBQVUsSUFBSSxVQUFVLENBQUMsWUFBWSxDQUFDLEVBQUU7b0JBQzFDLE9BQU8sVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDO2lCQUNqQzthQUNGO2lCQUFNO2dCQUNMLFVBQVUsR0FBRyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUM7YUFDdkM7U0FDRjtLQUNGO0lBRUQsT0FBTyxVQUFVLENBQUM7QUFDcEIsQ0FBQzs7Ozs7O0FBRUQsTUFBTSxVQUFVLGdCQUFnQixDQUFDLEdBQVcsRUFBRSxXQUFxQjtJQUNqRSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFO1FBQ3hCLE9BQU8sRUFBRSxDQUFDO0tBQ1g7O1VBRUssYUFBYSxHQUFhLEVBQUU7SUFDbEMsS0FBSyxNQUFNLFlBQVksSUFBSSxXQUFXLEVBQUU7UUFDdEMsSUFBSSxZQUFZLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQzlCLGFBQWEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDbEM7S0FDRjtJQUVELE9BQU8sYUFBYSxDQUFDO0FBQ3ZCLENBQUM7Ozs7OztBQUVELE1BQU0sVUFBVSxnQkFBZ0IsQ0FDOUIsSUFBNEQsRUFDNUQsSUFBeUM7SUFFekMsSUFBSSxDQUFDLElBQUksRUFBRTtRQUNULE9BQU8sRUFBRSxDQUFDO0tBQ1g7SUFDRCxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTTs7OztJQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLElBQUksRUFBQyxDQUFDO0FBQzdELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkZWVwTWVyZ2UgfSBmcm9tICcuLi8uLi9jb25maWcvdXRpbHMvZGVlcC1tZXJnZSc7XG5pbXBvcnQgeyBTdGF0ZVRyYW5zZmVyVHlwZSwgU3RvcmFnZVN5bmNUeXBlIH0gZnJvbSAnLi4vY29uZmlnL3N0YXRlLWNvbmZpZyc7XG5cbmNvbnN0IE9CSkVDVF9TRVBBUkFUT1IgPSAnLic7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdGF0ZVNsaWNlVmFsdWU8VCwgRT4oa2V5czogc3RyaW5nLCBzdGF0ZTogVCk6IEUge1xuICByZXR1cm4ga2V5c1xuICAgIC5zcGxpdChPQkpFQ1RfU0VQQVJBVE9SKVxuICAgIC5yZWR1Y2UoXG4gICAgICAocHJldmlvdXMsIGN1cnJlbnQpID0+IChwcmV2aW91cyA/IHByZXZpb3VzW2N1cnJlbnRdIDogdW5kZWZpbmVkKSxcbiAgICAgIHN0YXRlXG4gICAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNoZWxsT2JqZWN0PFQsIEU+KFxuICBrZXk6IHN0cmluZyxcbiAgZXhjbHVkZUtleXM6IHN0cmluZ1tdLFxuICB2YWx1ZTogVFxuKTogRSB7XG4gIGlmICgha2V5IHx8ICF2YWx1ZSB8fCBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIHt9IGFzIEU7XG4gIH1cblxuICBjb25zdCBzaGVsbCA9IGtleS5zcGxpdChPQkpFQ1RfU0VQQVJBVE9SKS5yZWR1Y2VSaWdodCgoYWNjLCBwcmV2aW91cykgPT4ge1xuICAgIHJldHVybiAoeyBbcHJldmlvdXNdOiBhY2MgfSBhcyB1bmtub3duKSBhcyBUO1xuICB9LCB2YWx1ZSk7XG4gIHJldHVybiBoYW5kbGVFeGNsdXNpb25zKGtleSwgZXhjbHVkZUtleXMsIHNoZWxsKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0YXRlU2xpY2U8VCwgRT4oXG4gIGtleXM6IHN0cmluZ1tdLFxuICBleGNsdWRlS2V5czogc3RyaW5nW10sXG4gIHN0YXRlOiBUXG4pOiBFIHtcbiAgaWYgKGtleXMgJiYga2V5cy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4ge30gYXMgRTtcbiAgfVxuXG4gIGxldCBzdGF0ZVNsaWNlcyA9IHt9O1xuICBmb3IgKGNvbnN0IGN1cnJlbnRLZXkgb2Yga2V5cykge1xuICAgIGNvbnN0IHN0YXRlVmFsdWUgPSBnZXRTdGF0ZVNsaWNlVmFsdWUoY3VycmVudEtleSwgc3RhdGUpO1xuICAgIGNvbnN0IHNoZWxsID0gY3JlYXRlU2hlbGxPYmplY3QoY3VycmVudEtleSwgZXhjbHVkZUtleXMsIHN0YXRlVmFsdWUpO1xuICAgIHN0YXRlU2xpY2VzID0gZGVlcE1lcmdlKHN0YXRlU2xpY2VzLCBzaGVsbCk7XG4gIH1cblxuICByZXR1cm4gc3RhdGVTbGljZXMgYXMgRTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUV4Y2x1c2lvbnMoXG4gIGtleTogc3RyaW5nLFxuICBleGNsdWRlS2V5czogc3RyaW5nW10sXG4gIHZhbHVlOiBhbnlcbik6IGFueSB7XG4gIGNvbnN0IGV4Y2x1c2lvbktleXMgPSBnZXRFeGNsdXNpb25LZXlzKGtleSwgZXhjbHVkZUtleXMpO1xuICBpZiAoZXhjbHVzaW9uS2V5cy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBjb25zdCBmaW5hbFZhbHVlID0gZGVlcE1lcmdlKHt9LCB2YWx1ZSk7XG4gIGZvciAoY29uc3QgY3VycmVudEV4Y2x1c2lvbktleSBvZiBleGNsdXNpb25LZXlzKSB7XG4gICAgY29uc3QgZXhjbHVzaW9uQ2h1bmtzU3BsaXQgPSBjdXJyZW50RXhjbHVzaW9uS2V5LnNwbGl0KE9CSkVDVF9TRVBBUkFUT1IpO1xuXG4gICAgbGV0IG5lc3RlZFRlbXAgPSBmaW5hbFZhbHVlO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXhjbHVzaW9uQ2h1bmtzU3BsaXQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRDaHVuayA9IGV4Y2x1c2lvbkNodW5rc1NwbGl0W2ldO1xuXG4gICAgICAvLyBsYXN0IGl0ZXJhdGlvblxuICAgICAgaWYgKGkgPT09IGV4Y2x1c2lvbkNodW5rc1NwbGl0Lmxlbmd0aCAtIDEpIHtcbiAgICAgICAgaWYgKG5lc3RlZFRlbXAgJiYgbmVzdGVkVGVtcFtjdXJyZW50Q2h1bmtdKSB7XG4gICAgICAgICAgZGVsZXRlIG5lc3RlZFRlbXBbY3VycmVudENodW5rXTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmVzdGVkVGVtcCA9IG5lc3RlZFRlbXBbY3VycmVudENodW5rXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmluYWxWYWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEV4Y2x1c2lvbktleXMoa2V5OiBzdHJpbmcsIGV4Y2x1ZGVLZXlzOiBzdHJpbmdbXSk6IHN0cmluZ1tdIHtcbiAgaWYgKCFrZXkgfHwgIWV4Y2x1ZGVLZXlzKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgY29uc3QgZXhjbHVzaW9uS2V5czogc3RyaW5nW10gPSBbXTtcbiAgZm9yIChjb25zdCBleGNsdXNpb25LZXkgb2YgZXhjbHVkZUtleXMpIHtcbiAgICBpZiAoZXhjbHVzaW9uS2V5LmluY2x1ZGVzKGtleSkpIHtcbiAgICAgIGV4Y2x1c2lvbktleXMucHVzaChleGNsdXNpb25LZXkpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBleGNsdXNpb25LZXlzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyS2V5c0J5VHlwZShcbiAga2V5czogeyBba2V5OiBzdHJpbmddOiBTdG9yYWdlU3luY1R5cGUgfCBTdGF0ZVRyYW5zZmVyVHlwZSB9LFxuICB0eXBlOiBTdG9yYWdlU3luY1R5cGUgfCBTdGF0ZVRyYW5zZmVyVHlwZVxuKTogc3RyaW5nW10ge1xuICBpZiAoIWtleXMpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgcmV0dXJuIE9iamVjdC5rZXlzKGtleXMpLmZpbHRlcihrZXkgPT4ga2V5c1trZXldID09PSB0eXBlKTtcbn1cbiJdfQ==