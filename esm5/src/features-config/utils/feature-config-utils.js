/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    /** @type {?} */
    var levelParts = level.split('.');
    /** @type {?} */
    var versionParts = version.split('.');
    for (var i = 0; i < versionParts.length; i++) {
        /** @type {?} */
        var versionNumberPart = Number(versionParts[i]);
        /** @type {?} */
        var levelNumberPart = Number(levelParts[i]) || 0;
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
        return isInLevel(config.features.level, level);
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
        var featureConfig = config.features[feature];
        return typeof featureConfig === 'string'
            ? isFeatureLevel(config, featureConfig)
            : featureConfig;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS1jb25maWctdXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvZmVhdHVyZXMtY29uZmlnL3V0aWxzL2ZlYXR1cmUtY29uZmlnLXV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRUEsU0FBUyxlQUFlLENBQUMsTUFBVztJQUNsQyxPQUFPLE9BQU8sTUFBTSxLQUFLLFFBQVEsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDO0FBQ3ZELENBQUM7Ozs7OztBQUVELFNBQVMsU0FBUyxDQUFDLEtBQUssRUFBRSxPQUFPOztRQUN6QixVQUFVLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7O1FBQzdCLFlBQVksR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUV2QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTs7WUFDdEMsaUJBQWlCLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQzs7WUFDM0MsZUFBZSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBRWxELElBQUksaUJBQWlCLEtBQUssZUFBZSxFQUFFO1lBQ3pDLE9BQU8sZUFBZSxHQUFHLGlCQUFpQixDQUFDO1NBQzVDO0tBQ0Y7SUFDRCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUM7Ozs7OztBQUVELE1BQU0sVUFBVSxjQUFjLENBQUMsTUFBZSxFQUFFLEtBQWE7SUFDM0QsSUFBSSxlQUFlLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDM0IsT0FBTyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7S0FDaEQ7QUFDSCxDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUsZ0JBQWdCLENBQUMsTUFBZSxFQUFFLE9BQWU7SUFDL0QsSUFBSSxlQUFlLENBQUMsTUFBTSxDQUFDLEVBQUU7O1lBQ3JCLGFBQWEsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztRQUM5QyxPQUFPLE9BQU8sYUFBYSxLQUFLLFFBQVE7WUFDdEMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsYUFBYSxDQUFDO1lBQ3ZDLENBQUMsQ0FBQyxhQUFhLENBQUM7S0FDbkI7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmVhdHVyZXNDb25maWcgfSBmcm9tICcuLi9jb25maWcvZmVhdHVyZXMtY29uZmlnJztcblxuZnVuY3Rpb24gaXNGZWF0dXJlQ29uZmlnKGNvbmZpZzogYW55KTogY29uZmlnIGlzIEZlYXR1cmVzQ29uZmlnIHtcbiAgcmV0dXJuIHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnICYmIGNvbmZpZy5mZWF0dXJlcztcbn1cblxuZnVuY3Rpb24gaXNJbkxldmVsKGxldmVsLCB2ZXJzaW9uKSB7XG4gIGNvbnN0IGxldmVsUGFydHMgPSBsZXZlbC5zcGxpdCgnLicpO1xuICBjb25zdCB2ZXJzaW9uUGFydHMgPSB2ZXJzaW9uLnNwbGl0KCcuJyk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB2ZXJzaW9uUGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCB2ZXJzaW9uTnVtYmVyUGFydCA9IE51bWJlcih2ZXJzaW9uUGFydHNbaV0pO1xuICAgIGNvbnN0IGxldmVsTnVtYmVyUGFydCA9IE51bWJlcihsZXZlbFBhcnRzW2ldKSB8fCAwO1xuXG4gICAgaWYgKHZlcnNpb25OdW1iZXJQYXJ0ICE9PSBsZXZlbE51bWJlclBhcnQpIHtcbiAgICAgIHJldHVybiBsZXZlbE51bWJlclBhcnQgPiB2ZXJzaW9uTnVtYmVyUGFydDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0ZlYXR1cmVMZXZlbChjb25maWc6IHVua25vd24sIGxldmVsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgaWYgKGlzRmVhdHVyZUNvbmZpZyhjb25maWcpKSB7XG4gICAgcmV0dXJuIGlzSW5MZXZlbChjb25maWcuZmVhdHVyZXMubGV2ZWwsIGxldmVsKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNGZWF0dXJlRW5hYmxlZChjb25maWc6IHVua25vd24sIGZlYXR1cmU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBpZiAoaXNGZWF0dXJlQ29uZmlnKGNvbmZpZykpIHtcbiAgICBjb25zdCBmZWF0dXJlQ29uZmlnID0gY29uZmlnLmZlYXR1cmVzW2ZlYXR1cmVdO1xuICAgIHJldHVybiB0eXBlb2YgZmVhdHVyZUNvbmZpZyA9PT0gJ3N0cmluZydcbiAgICAgID8gaXNGZWF0dXJlTGV2ZWwoY29uZmlnLCBmZWF0dXJlQ29uZmlnKVxuICAgICAgOiBmZWF0dXJlQ29uZmlnO1xuICB9XG59XG4iXX0=