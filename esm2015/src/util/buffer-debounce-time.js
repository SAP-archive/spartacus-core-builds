/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { debounceTime, map, tap } from 'rxjs/operators';
/**
 * @template T
 * @param {?=} time
 * @param {?=} scheduler
 * @return {?}
 */
export function bufferDebounceTime(time = 0, scheduler) {
    return (/**
     * @param {?} source
     * @return {?}
     */
    (source) => {
        /** @type {?} */
        let bufferedValues = [];
        return source.pipe(tap((/**
         * @param {?} value
         * @return {?}
         */
        value => bufferedValues.push(value))), debounceTime(time, scheduler), map((/**
         * @return {?}
         */
        () => bufferedValues)), tap((/**
         * @return {?}
         */
        () => (bufferedValues = []))));
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVmZmVyLWRlYm91bmNlLXRpbWUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXRpbC9idWZmZXItZGVib3VuY2UtdGltZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFlBQVksRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7QUFFeEQsTUFBTSxVQUFVLGtCQUFrQixDQUNoQyxPQUFlLENBQUMsRUFDaEIsU0FBeUI7SUFFekI7Ozs7SUFBTyxDQUFDLE1BQXFCLEVBQUUsRUFBRTs7WUFDM0IsY0FBYyxHQUFRLEVBQUU7UUFFNUIsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUNoQixHQUFHOzs7O1FBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFDLEVBQ3hDLFlBQVksQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLEVBQzdCLEdBQUc7OztRQUFDLEdBQUcsRUFBRSxDQUFDLGNBQWMsRUFBQyxFQUN6QixHQUFHOzs7UUFBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUMsRUFBQyxDQUNqQyxDQUFDO0lBQ0osQ0FBQyxFQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUsIE9wZXJhdG9yRnVuY3Rpb24sIFNjaGVkdWxlckxpa2UgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgbWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBidWZmZXJEZWJvdW5jZVRpbWU8VD4oXG4gIHRpbWU6IG51bWJlciA9IDAsXG4gIHNjaGVkdWxlcj86IFNjaGVkdWxlckxpa2Vcbik6IE9wZXJhdG9yRnVuY3Rpb248VCwgVFtdPiB7XG4gIHJldHVybiAoc291cmNlOiBPYnNlcnZhYmxlPFQ+KSA9PiB7XG4gICAgbGV0IGJ1ZmZlcmVkVmFsdWVzOiBUW10gPSBbXTtcblxuICAgIHJldHVybiBzb3VyY2UucGlwZShcbiAgICAgIHRhcCh2YWx1ZSA9PiBidWZmZXJlZFZhbHVlcy5wdXNoKHZhbHVlKSksXG4gICAgICBkZWJvdW5jZVRpbWUodGltZSwgc2NoZWR1bGVyKSxcbiAgICAgIG1hcCgoKSA9PiBidWZmZXJlZFZhbHVlcyksXG4gICAgICB0YXAoKCkgPT4gKGJ1ZmZlcmVkVmFsdWVzID0gW10pKVxuICAgICk7XG4gIH07XG59XG4iXX0=