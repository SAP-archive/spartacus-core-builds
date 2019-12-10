/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} config
 * @return {?}
 */
function isFeatureConfig(config) {
    return typeof config === 'object' && config.features;
}
/**
 * @param {?} level
 * @param {?} version
 * @return {?}
 */
function isInLevel(level, version) {
    if (level === '*') {
        return true;
    }
    /** @type {?} */
    const levelParts = level.split('.');
    /** @type {?} */
    const versionParts = version.split('.');
    for (let i = 0; i < versionParts.length; i++) {
        /** @type {?} */
        const versionNumberPart = Number(versionParts[i]);
        /** @type {?} */
        const levelNumberPart = Number(levelParts[i]) || 0;
        if (versionNumberPart !== levelNumberPart) {
            return levelNumberPart > versionNumberPart;
        }
    }
    return true;
}
/**
 * @param {?} config
 * @param {?} level
 * @return {?}
 */
export function isFeatureLevel(config, level) {
    if (isFeatureConfig(config)) {
        return level[0] === '!'
            ? !isInLevel(config.features.level, level.substr(1, level.length))
            : isInLevel(config.features.level, level);
    }
}
/**
 * @param {?} config
 * @param {?} feature
 * @return {?}
 */
export function isFeatureEnabled(config, feature) {
    if (isFeatureConfig(config)) {
        /** @type {?} */
        const featureConfig = feature[0] === '!'
            ? config.features[feature.substr(1, feature.length)]
            : config.features[feature];
        /** @type {?} */
        const result = typeof featureConfig === 'string'
            ? isFeatureLevel(config, featureConfig)
            : featureConfig;
        return feature[0] === '!' ? !result : result;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS1jb25maWctdXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvZmVhdHVyZXMtY29uZmlnL3V0aWxzL2ZlYXR1cmUtY29uZmlnLXV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRUEsU0FBUyxlQUFlLENBQUMsTUFBVztJQUNsQyxPQUFPLE9BQU8sTUFBTSxLQUFLLFFBQVEsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDO0FBQ3ZELENBQUM7Ozs7OztBQUVELFNBQVMsU0FBUyxDQUFDLEtBQUssRUFBRSxPQUFPO0lBQy9CLElBQUksS0FBSyxLQUFLLEdBQUcsRUFBRTtRQUNqQixPQUFPLElBQUksQ0FBQztLQUNiOztVQUNLLFVBQVUsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQzs7VUFDN0IsWUFBWSxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBRXZDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFOztjQUN0QyxpQkFBaUIsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDOztjQUMzQyxlQUFlLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFFbEQsSUFBSSxpQkFBaUIsS0FBSyxlQUFlLEVBQUU7WUFDekMsT0FBTyxlQUFlLEdBQUcsaUJBQWlCLENBQUM7U0FDNUM7S0FDRjtJQUNELE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQzs7Ozs7O0FBRUQsTUFBTSxVQUFVLGNBQWMsQ0FBQyxNQUFlLEVBQUUsS0FBYTtJQUMzRCxJQUFJLGVBQWUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUMzQixPQUFPLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHO1lBQ3JCLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbEUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztLQUM3QztBQUNILENBQUM7Ozs7OztBQUVELE1BQU0sVUFBVSxnQkFBZ0IsQ0FBQyxNQUFlLEVBQUUsT0FBZTtJQUMvRCxJQUFJLGVBQWUsQ0FBQyxNQUFNLENBQUMsRUFBRTs7Y0FDckIsYUFBYSxHQUNqQixPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRztZQUNoQixDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEQsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDOztjQUV4QixNQUFNLEdBQ1YsT0FBTyxhQUFhLEtBQUssUUFBUTtZQUMvQixDQUFDLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxhQUFhLENBQUM7WUFDdkMsQ0FBQyxDQUFDLGFBQWE7UUFFbkIsT0FBTyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO0tBQzlDO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZlYXR1cmVzQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL2ZlYXR1cmVzLWNvbmZpZyc7XG5cbmZ1bmN0aW9uIGlzRmVhdHVyZUNvbmZpZyhjb25maWc6IGFueSk6IGNvbmZpZyBpcyBGZWF0dXJlc0NvbmZpZyB7XG4gIHJldHVybiB0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyAmJiBjb25maWcuZmVhdHVyZXM7XG59XG5cbmZ1bmN0aW9uIGlzSW5MZXZlbChsZXZlbCwgdmVyc2lvbikge1xuICBpZiAobGV2ZWwgPT09ICcqJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGNvbnN0IGxldmVsUGFydHMgPSBsZXZlbC5zcGxpdCgnLicpO1xuICBjb25zdCB2ZXJzaW9uUGFydHMgPSB2ZXJzaW9uLnNwbGl0KCcuJyk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB2ZXJzaW9uUGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCB2ZXJzaW9uTnVtYmVyUGFydCA9IE51bWJlcih2ZXJzaW9uUGFydHNbaV0pO1xuICAgIGNvbnN0IGxldmVsTnVtYmVyUGFydCA9IE51bWJlcihsZXZlbFBhcnRzW2ldKSB8fCAwO1xuXG4gICAgaWYgKHZlcnNpb25OdW1iZXJQYXJ0ICE9PSBsZXZlbE51bWJlclBhcnQpIHtcbiAgICAgIHJldHVybiBsZXZlbE51bWJlclBhcnQgPiB2ZXJzaW9uTnVtYmVyUGFydDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0ZlYXR1cmVMZXZlbChjb25maWc6IHVua25vd24sIGxldmVsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgaWYgKGlzRmVhdHVyZUNvbmZpZyhjb25maWcpKSB7XG4gICAgcmV0dXJuIGxldmVsWzBdID09PSAnISdcbiAgICAgID8gIWlzSW5MZXZlbChjb25maWcuZmVhdHVyZXMubGV2ZWwsIGxldmVsLnN1YnN0cigxLCBsZXZlbC5sZW5ndGgpKVxuICAgICAgOiBpc0luTGV2ZWwoY29uZmlnLmZlYXR1cmVzLmxldmVsLCBsZXZlbCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRmVhdHVyZUVuYWJsZWQoY29uZmlnOiB1bmtub3duLCBmZWF0dXJlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgaWYgKGlzRmVhdHVyZUNvbmZpZyhjb25maWcpKSB7XG4gICAgY29uc3QgZmVhdHVyZUNvbmZpZyA9XG4gICAgICBmZWF0dXJlWzBdID09PSAnISdcbiAgICAgICAgPyBjb25maWcuZmVhdHVyZXNbZmVhdHVyZS5zdWJzdHIoMSwgZmVhdHVyZS5sZW5ndGgpXVxuICAgICAgICA6IGNvbmZpZy5mZWF0dXJlc1tmZWF0dXJlXTtcblxuICAgIGNvbnN0IHJlc3VsdCA9XG4gICAgICB0eXBlb2YgZmVhdHVyZUNvbmZpZyA9PT0gJ3N0cmluZydcbiAgICAgICAgPyBpc0ZlYXR1cmVMZXZlbChjb25maWcsIGZlYXR1cmVDb25maWcpXG4gICAgICAgIDogZmVhdHVyZUNvbmZpZztcblxuICAgIHJldHVybiBmZWF0dXJlWzBdID09PSAnIScgPyAhcmVzdWx0IDogcmVzdWx0O1xuICB9XG59XG4iXX0=