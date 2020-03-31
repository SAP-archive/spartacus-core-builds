import { __values } from "tslib";
import { deepMerge } from '../../config/utils/deep-merge';
var OBJECT_SEPARATOR = '.';
export function getStateSliceValue(keys, state) {
    return keys
        .split(OBJECT_SEPARATOR)
        .reduce(function (previous, current) { return (previous ? previous[current] : undefined); }, state);
}
export function createShellObject(key, excludeKeys, value) {
    if (!key || !value || Object.keys(value).length === 0) {
        return {};
    }
    var shell = key.split(OBJECT_SEPARATOR).reduceRight(function (acc, previous) {
        var _a;
        return _a = {}, _a[previous] = acc, _a;
    }, value);
    return handleExclusions(key, excludeKeys, shell);
}
export function getStateSlice(keys, excludeKeys, state) {
    var e_1, _a;
    if (keys && keys.length === 0) {
        return {};
    }
    var stateSlices = {};
    try {
        for (var keys_1 = __values(keys), keys_1_1 = keys_1.next(); !keys_1_1.done; keys_1_1 = keys_1.next()) {
            var currentKey = keys_1_1.value;
            var stateValue = getStateSliceValue(currentKey, state);
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
export function handleExclusions(key, excludeKeys, value) {
    var e_2, _a;
    var exclusionKeys = getExclusionKeys(key, excludeKeys);
    if (exclusionKeys.length === 0) {
        return value;
    }
    var finalValue = deepMerge({}, value);
    try {
        for (var exclusionKeys_1 = __values(exclusionKeys), exclusionKeys_1_1 = exclusionKeys_1.next(); !exclusionKeys_1_1.done; exclusionKeys_1_1 = exclusionKeys_1.next()) {
            var currentExclusionKey = exclusionKeys_1_1.value;
            var exclusionChunksSplit = currentExclusionKey.split(OBJECT_SEPARATOR);
            var nestedTemp = finalValue;
            for (var i = 0; i < exclusionChunksSplit.length; i++) {
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
export function getExclusionKeys(key, excludeKeys) {
    var e_3, _a;
    if (!key || !excludeKeys) {
        return [];
    }
    var exclusionKeys = [];
    try {
        for (var excludeKeys_1 = __values(excludeKeys), excludeKeys_1_1 = excludeKeys_1.next(); !excludeKeys_1_1.done; excludeKeys_1_1 = excludeKeys_1.next()) {
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
export function filterKeysByType(keys, type) {
    if (!keys) {
        return [];
    }
    return Object.keys(keys).filter(function (key) { return keys[key] === type; });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LXN0YXRlLXNsaWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3N0YXRlL3V0aWxzL2dldC1zdGF0ZS1zbGljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRzFELElBQU0sZ0JBQWdCLEdBQUcsR0FBRyxDQUFDO0FBRTdCLE1BQU0sVUFBVSxrQkFBa0IsQ0FBTyxJQUFZLEVBQUUsS0FBUTtJQUM3RCxPQUFPLElBQUk7U0FDUixLQUFLLENBQUMsZ0JBQWdCLENBQUM7U0FDdkIsTUFBTSxDQUNMLFVBQUMsUUFBUSxFQUFFLE9BQU8sSUFBSyxPQUFBLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUExQyxDQUEwQyxFQUNqRSxLQUFLLENBQ04sQ0FBQztBQUNOLENBQUM7QUFFRCxNQUFNLFVBQVUsaUJBQWlCLENBQy9CLEdBQVcsRUFDWCxXQUFxQixFQUNyQixLQUFRO0lBRVIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDckQsT0FBTyxFQUFPLENBQUM7S0FDaEI7SUFFRCxJQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUMsV0FBVyxDQUFDLFVBQUMsR0FBRyxFQUFFLFFBQVE7O1FBQ2xFLE9BQVEsU0FBRSxHQUFDLFFBQVEsSUFBRyxHQUFHLElBQW1CLENBQUM7SUFDL0MsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ1YsT0FBTyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ25ELENBQUM7QUFFRCxNQUFNLFVBQVUsYUFB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LENBQWtCLENBQUMsQ0FBQztBQUMvRCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGVlcE1lcmdlIH0gZnJvbSAnLi4vLi4vY29uZmlnL3V0aWxzL2RlZXAtbWVyZ2UnO1xuaW1wb3J0IHsgU3RhdGVUcmFuc2ZlclR5cGUsIFN0b3JhZ2VTeW5jVHlwZSB9IGZyb20gJy4uL2NvbmZpZy9zdGF0ZS1jb25maWcnO1xuXG5jb25zdCBPQkpFQ1RfU0VQQVJBVE9SID0gJy4nO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RhdGVTbGljZVZhbHVlPFQsIEU+KGtleXM6IHN0cmluZywgc3RhdGU6IFQpOiBFIHtcbiAgcmV0dXJuIGtleXNcbiAgICAuc3BsaXQoT0JKRUNUX1NFUEFSQVRPUilcbiAgICAucmVkdWNlKFxuICAgICAgKHByZXZpb3VzLCBjdXJyZW50KSA9PiAocHJldmlvdXMgPyBwcmV2aW91c1tjdXJyZW50XSA6IHVuZGVmaW5lZCksXG4gICAgICBzdGF0ZVxuICAgICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTaGVsbE9iamVjdDxULCBFPihcbiAga2V5OiBzdHJpbmcsXG4gIGV4Y2x1ZGVLZXlzOiBzdHJpbmdbXSxcbiAgdmFsdWU6IFRcbik6IEUge1xuICBpZiAoIWtleSB8fCAhdmFsdWUgfHwgT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiB7fSBhcyBFO1xuICB9XG5cbiAgY29uc3Qgc2hlbGwgPSBrZXkuc3BsaXQoT0JKRUNUX1NFUEFSQVRPUikucmVkdWNlUmlnaHQoKGFjYywgcHJldmlvdXMpID0+IHtcbiAgICByZXR1cm4gKHsgW3ByZXZpb3VzXTogYWNjIH0gYXMgdW5rbm93bikgYXMgVDtcbiAgfSwgdmFsdWUpO1xuICByZXR1cm4gaGFuZGxlRXhjbHVzaW9ucyhrZXksIGV4Y2x1ZGVLZXlzLCBzaGVsbCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdGF0ZVNsaWNlPFQsIEU+KFxuICBrZXlzOiBzdHJpbmdbXSxcbiAgZXhjbHVkZUtleXM6IHN0cmluZ1tdLFxuICBzdGF0ZTogVFxuKTogRSB7XG4gIGlmIChrZXlzICYmIGtleXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIHt9IGFzIEU7XG4gIH1cblxuICBsZXQgc3RhdGVTbGljZXMgPSB7fTtcbiAgZm9yIChjb25zdCBjdXJyZW50S2V5IG9mIGtleXMpIHtcbiAgICBjb25zdCBzdGF0ZVZhbHVlID0gZ2V0U3RhdGVTbGljZVZhbHVlKGN1cnJlbnRLZXksIHN0YXRlKTtcbiAgICBjb25zdCBzaGVsbCA9IGNyZWF0ZVNoZWxsT2JqZWN0KGN1cnJlbnRLZXksIGV4Y2x1ZGVLZXlzLCBzdGF0ZVZhbHVlKTtcbiAgICBzdGF0ZVNsaWNlcyA9IGRlZXBNZXJnZShzdGF0ZVNsaWNlcywgc2hlbGwpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlU2xpY2VzIGFzIEU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVFeGNsdXNpb25zKFxuICBrZXk6IHN0cmluZyxcbiAgZXhjbHVkZUtleXM6IHN0cmluZ1tdLFxuICB2YWx1ZTogYW55XG4pOiBhbnkge1xuICBjb25zdCBleGNsdXNpb25LZXlzID0gZ2V0RXhjbHVzaW9uS2V5cyhrZXksIGV4Y2x1ZGVLZXlzKTtcbiAgaWYgKGV4Y2x1c2lvbktleXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgY29uc3QgZmluYWxWYWx1ZSA9IGRlZXBNZXJnZSh7fSwgdmFsdWUpO1xuICBmb3IgKGNvbnN0IGN1cnJlbnRFeGNsdXNpb25LZXkgb2YgZXhjbHVzaW9uS2V5cykge1xuICAgIGNvbnN0IGV4Y2x1c2lvbkNodW5rc1NwbGl0ID0gY3VycmVudEV4Y2x1c2lvbktleS5zcGxpdChPQkpFQ1RfU0VQQVJBVE9SKTtcblxuICAgIGxldCBuZXN0ZWRUZW1wID0gZmluYWxWYWx1ZTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGV4Y2x1c2lvbkNodW5rc1NwbGl0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBjdXJyZW50Q2h1bmsgPSBleGNsdXNpb25DaHVua3NTcGxpdFtpXTtcblxuICAgICAgLy8gbGFzdCBpdGVyYXRpb25cbiAgICAgIGlmIChpID09PSBleGNsdXNpb25DaHVua3NTcGxpdC5sZW5ndGggLSAxKSB7XG4gICAgICAgIGlmIChuZXN0ZWRUZW1wICYmIG5lc3RlZFRlbXBbY3VycmVudENodW5rXSkge1xuICAgICAgICAgIGRlbGV0ZSBuZXN0ZWRUZW1wW2N1cnJlbnRDaHVua107XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5lc3RlZFRlbXAgPSBuZXN0ZWRUZW1wW2N1cnJlbnRDaHVua107XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZpbmFsVmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRFeGNsdXNpb25LZXlzKGtleTogc3RyaW5nLCBleGNsdWRlS2V5czogc3RyaW5nW10pOiBzdHJpbmdbXSB7XG4gIGlmICgha2V5IHx8ICFleGNsdWRlS2V5cykge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIGNvbnN0IGV4Y2x1c2lvbktleXM6IHN0cmluZ1tdID0gW107XG4gIGZvciAoY29uc3QgZXhjbHVzaW9uS2V5IG9mIGV4Y2x1ZGVLZXlzKSB7XG4gICAgaWYgKGV4Y2x1c2lvbktleS5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICBleGNsdXNpb25LZXlzLnB1c2goZXhjbHVzaW9uS2V5KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXhjbHVzaW9uS2V5cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlcktleXNCeVR5cGUoXG4gIGtleXM6IHsgW2tleTogc3RyaW5nXTogU3RvcmFnZVN5bmNUeXBlIHwgU3RhdGVUcmFuc2ZlclR5cGUgfSxcbiAgdHlwZTogU3RvcmFnZVN5bmNUeXBlIHwgU3RhdGVUcmFuc2ZlclR5cGVcbik6IHN0cmluZ1tdIHtcbiAgaWYgKCFrZXlzKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIHJldHVybiBPYmplY3Qua2V5cyhrZXlzKS5maWx0ZXIoKGtleSkgPT4ga2V5c1trZXldID09PSB0eXBlKTtcbn1cbiJdfQ==