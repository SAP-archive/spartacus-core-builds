/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { deepMerge } from '../../config/utils/deep-merge';
/** @type {?} */
const OBJECT_SEPARATOR = '.';
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
    (previous, current) => (previous ? previous[current] : undefined)), state);
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
    const shell = key.split(OBJECT_SEPARATOR).reduceRight((/**
     * @param {?} acc
     * @param {?} previous
     * @return {?}
     */
    (acc, previous) => {
        return { [previous]: acc };
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
    if (keys && keys.length === 0) {
        return {};
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
    return stateSlices;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LXN0YXRlLXNsaWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3N0YXRlL3V0aWxzL2dldC1zdGF0ZS1zbGljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLCtCQUErQixDQUFDOztNQUVwRCxnQkFBZ0IsR0FBRyxHQUFHOzs7Ozs7QUFFNUIsTUFBTSxVQUFVLGtCQUFrQixDQUFDLElBQVksRUFBRSxLQUFVO0lBQ3pELE9BQU8sSUFBSTtTQUNSLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQztTQUN2QixNQUFNOzs7OztJQUNMLENBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQ2pFLEtBQUssQ0FDTixDQUFDO0FBQ04sQ0FBQzs7Ozs7OztBQUVELE1BQU0sVUFBVSxpQkFBaUIsQ0FDL0IsR0FBVyxFQUNYLFdBQXFCLEVBQ3JCLEtBQVU7SUFFVixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtRQUNyRCxPQUFPLEVBQUUsQ0FBQztLQUNYOztVQUVLLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUMsV0FBVzs7Ozs7SUFBQyxDQUFDLEdBQUcsRUFBRSxRQUFRLEVBQUUsRUFBRTtRQUN0RSxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztJQUM3QixDQUFDLEdBQUUsS0FBSyxDQUFDO0lBQ1QsT0FBTyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ25ELENBQUM7Ozs7Ozs7QUFFRCxNQUFNLFVBQVUsYUFBYSxDQUMzQixJQUFjLEVBQ2QsV0FBcUIsRUFDckIsS0FBVTtJQUVWLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1FBQzdCLE9BQU8sRUFBRSxDQUFDO0tBQ1g7O1FBRUcsV0FBVyxHQUFHLEVBQUU7SUFDcEIsS0FBSyxNQUFNLFVBQVUsSUFBSSxJQUFJLEVBQUU7O2NBQ3ZCLFVBQVUsR0FBRyxrQkFBa0IsQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDOztjQUNsRCxLQUFLLEdBQUcsaUJBQWlCLENBQUMsVUFBVSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUM7UUFDcEUsV0FBVyxHQUFHLFNBQVMsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUM7S0FDN0M7SUFFRCxPQUFPLFdBQVcsQ0FBQztBQUNyQixDQUFDOzs7Ozs7O0FBRUQsTUFBTSxVQUFVLGdCQUFnQixDQUM5QixHQUFXLEVBQ1gsV0FBcUIsRUFDckIsS0FBVTs7VUFFSixhQUFhLEdBQUcsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLFdBQVcsQ0FBQztJQUN4RCxJQUFJLGFBQWEsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1FBQzlCLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7O1VBRUssVUFBVSxHQUFHLFNBQVMsQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDO0lBQ3ZDLEtBQUssTUFBTSxtQkFBbUIsSUFBSSxhQUFhLEVBQUU7O2NBQ3pDLG9CQUFvQixHQUFHLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQzs7WUFFcEUsVUFBVSxHQUFHLFVBQVU7UUFDM0IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLG9CQUFvQixDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTs7a0JBQzlDLFlBQVksR0FBRyxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7WUFFNUMsaUJBQWlCO1lBQ2pCLElBQUksQ0FBQyxLQUFLLG9CQUFvQixDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQ3pDLElBQUksVUFBVSxJQUFJLFVBQVUsQ0FBQyxZQUFZLENBQUMsRUFBRTtvQkFDMUMsT0FBTyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUM7aUJBQ2pDO2FBQ0Y7aUJBQU07Z0JBQ0wsVUFBVSxHQUFHLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUN2QztTQUNGO0tBQ0Y7SUFFRCxPQUFPLFVBQVUsQ0FBQztBQUNwQixDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUsZ0JBQWdCLENBQUMsR0FBVyxFQUFFLFdBQXFCO0lBQ2pFLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUU7UUFDeEIsT0FBTyxFQUFFLENBQUM7S0FDWDs7VUFFSyxhQUFhLEdBQWEsRUFBRTtJQUNsQyxLQUFLLE1BQU0sWUFBWSxJQUFJLFdBQVcsRUFBRTtRQUN0QyxJQUFJLFlBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDOUIsYUFBYSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNsQztLQUNGO0lBRUQsT0FBTyxhQUFhLENBQUM7QUFDdkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRlZXBNZXJnZSB9IGZyb20gJy4uLy4uL2NvbmZpZy91dGlscy9kZWVwLW1lcmdlJztcblxuY29uc3QgT0JKRUNUX1NFUEFSQVRPUiA9ICcuJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0YXRlU2xpY2VWYWx1ZShrZXlzOiBzdHJpbmcsIHN0YXRlOiBhbnkpOiBhbnkge1xuICByZXR1cm4ga2V5c1xuICAgIC5zcGxpdChPQkpFQ1RfU0VQQVJBVE9SKVxuICAgIC5yZWR1Y2UoXG4gICAgICAocHJldmlvdXMsIGN1cnJlbnQpID0+IChwcmV2aW91cyA/IHByZXZpb3VzW2N1cnJlbnRdIDogdW5kZWZpbmVkKSxcbiAgICAgIHN0YXRlXG4gICAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNoZWxsT2JqZWN0KFxuICBrZXk6IHN0cmluZyxcbiAgZXhjbHVkZUtleXM6IHN0cmluZ1tdLFxuICB2YWx1ZTogYW55XG4pOiBhbnkge1xuICBpZiAoIWtleSB8fCAhdmFsdWUgfHwgT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIGNvbnN0IHNoZWxsID0ga2V5LnNwbGl0KE9CSkVDVF9TRVBBUkFUT1IpLnJlZHVjZVJpZ2h0KChhY2MsIHByZXZpb3VzKSA9PiB7XG4gICAgcmV0dXJuIHsgW3ByZXZpb3VzXTogYWNjIH07XG4gIH0sIHZhbHVlKTtcbiAgcmV0dXJuIGhhbmRsZUV4Y2x1c2lvbnMoa2V5LCBleGNsdWRlS2V5cywgc2hlbGwpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RhdGVTbGljZShcbiAga2V5czogc3RyaW5nW10sXG4gIGV4Y2x1ZGVLZXlzOiBzdHJpbmdbXSxcbiAgc3RhdGU6IGFueVxuKTogYW55IHtcbiAgaWYgKGtleXMgJiYga2V5cy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4ge307XG4gIH1cblxuICBsZXQgc3RhdGVTbGljZXMgPSB7fTtcbiAgZm9yIChjb25zdCBjdXJyZW50S2V5IG9mIGtleXMpIHtcbiAgICBjb25zdCBzdGF0ZVZhbHVlID0gZ2V0U3RhdGVTbGljZVZhbHVlKGN1cnJlbnRLZXksIHN0YXRlKTtcbiAgICBjb25zdCBzaGVsbCA9IGNyZWF0ZVNoZWxsT2JqZWN0KGN1cnJlbnRLZXksIGV4Y2x1ZGVLZXlzLCBzdGF0ZVZhbHVlKTtcbiAgICBzdGF0ZVNsaWNlcyA9IGRlZXBNZXJnZShzdGF0ZVNsaWNlcywgc2hlbGwpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlU2xpY2VzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlRXhjbHVzaW9ucyhcbiAga2V5OiBzdHJpbmcsXG4gIGV4Y2x1ZGVLZXlzOiBzdHJpbmdbXSxcbiAgdmFsdWU6IGFueVxuKTogYW55IHtcbiAgY29uc3QgZXhjbHVzaW9uS2V5cyA9IGdldEV4Y2x1c2lvbktleXMoa2V5LCBleGNsdWRlS2V5cyk7XG4gIGlmIChleGNsdXNpb25LZXlzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIGNvbnN0IGZpbmFsVmFsdWUgPSBkZWVwTWVyZ2Uoe30sIHZhbHVlKTtcbiAgZm9yIChjb25zdCBjdXJyZW50RXhjbHVzaW9uS2V5IG9mIGV4Y2x1c2lvbktleXMpIHtcbiAgICBjb25zdCBleGNsdXNpb25DaHVua3NTcGxpdCA9IGN1cnJlbnRFeGNsdXNpb25LZXkuc3BsaXQoT0JKRUNUX1NFUEFSQVRPUik7XG5cbiAgICBsZXQgbmVzdGVkVGVtcCA9IGZpbmFsVmFsdWU7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBleGNsdXNpb25DaHVua3NTcGxpdC5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgY3VycmVudENodW5rID0gZXhjbHVzaW9uQ2h1bmtzU3BsaXRbaV07XG5cbiAgICAgIC8vIGxhc3QgaXRlcmF0aW9uXG4gICAgICBpZiAoaSA9PT0gZXhjbHVzaW9uQ2h1bmtzU3BsaXQubGVuZ3RoIC0gMSkge1xuICAgICAgICBpZiAobmVzdGVkVGVtcCAmJiBuZXN0ZWRUZW1wW2N1cnJlbnRDaHVua10pIHtcbiAgICAgICAgICBkZWxldGUgbmVzdGVkVGVtcFtjdXJyZW50Q2h1bmtdO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXN0ZWRUZW1wID0gbmVzdGVkVGVtcFtjdXJyZW50Q2h1bmtdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmaW5hbFZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RXhjbHVzaW9uS2V5cyhrZXk6IHN0cmluZywgZXhjbHVkZUtleXM6IHN0cmluZ1tdKTogc3RyaW5nW10ge1xuICBpZiAoIWtleSB8fCAhZXhjbHVkZUtleXMpIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICBjb25zdCBleGNsdXNpb25LZXlzOiBzdHJpbmdbXSA9IFtdO1xuICBmb3IgKGNvbnN0IGV4Y2x1c2lvbktleSBvZiBleGNsdWRlS2V5cykge1xuICAgIGlmIChleGNsdXNpb25LZXkuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgZXhjbHVzaW9uS2V5cy5wdXNoKGV4Y2x1c2lvbktleSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGV4Y2x1c2lvbktleXM7XG59XG4iXX0=