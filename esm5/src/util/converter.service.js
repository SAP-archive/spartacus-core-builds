/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Injector } from '@angular/core';
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
/**
 * Converter is used to convert source data model to target data model.
 * By convention, we distinguish two flows:
 *   - *Normalize* is the conversion from backend models to UI models
 *   - *Serialize* is the conversion of UI models to backend models (in case of submitting data to the backend).
 *
 * Converters can be stacked together to to apply decoupled customizations
 * @record
 * @template S, T
 */
export function Converter() { }
if (false) {
    /**
     * Convert converts source model to target model. Can use optional target parameter,
     * used in case of stacking multiple converters (for example, to implement populator pattern).
     *
     * @param {?} source Source data model
     * @param {?=} target Optional, partially converted target model
     * @return {?}
     */
    Converter.prototype.convert = function (source, target) { };
}
var ConverterService = /** @class */ (function () {
    function ConverterService(injector) {
        this.injector = injector;
        this.converters = new Map();
    }
    /**
     * @private
     * @template S, T
     * @param {?} injectionToken
     * @return {?}
     */
    ConverterService.prototype.getConverters = /**
     * @private
     * @template S, T
     * @param {?} injectionToken
     * @return {?}
     */
    function (injectionToken) {
        if (!this.converters.has(injectionToken)) {
            /** @type {?} */
            var converters = this.injector.get(injectionToken, []);
            if (!Array.isArray(converters)) {
                console.warn('Converter must be multi-provided, please use "multi: true" for', injectionToken.toString());
            }
            this.converters.set(injectionToken, converters);
        }
        return this.converters.get(injectionToken);
    };
    /**
     * Will return true if converters for specified token were provided
     */
    /**
     * Will return true if converters for specified token were provided
     * @template S, T
     * @param {?} injectionToken
     * @return {?}
     */
    ConverterService.prototype.hasConverters = /**
     * Will return true if converters for specified token were provided
     * @template S, T
     * @param {?} injectionToken
     * @return {?}
     */
    function (injectionToken) {
        /** @type {?} */
        var converters = this.getConverters(injectionToken);
        return Array.isArray(converters) && converters.length > 0;
    };
    /**
     * Pipeable operator to apply converter logic in a observable stream
     */
    /**
     * Pipeable operator to apply converter logic in a observable stream
     * @template S, T
     * @param {?} injectionToken
     * @return {?}
     */
    ConverterService.prototype.pipeable = /**
     * Pipeable operator to apply converter logic in a observable stream
     * @template S, T
     * @param {?} injectionToken
     * @return {?}
     */
    function (injectionToken) {
        var _this = this;
        if (this.hasConverters(injectionToken)) {
            return map(function (model) { return _this.convertSource(model, injectionToken); });
        }
        else {
            return function (observable) { return (/** @type {?} */ (observable)); };
        }
    };
    /**
     * Apply converter logic specified by injection token to source data
     */
    /**
     * Apply converter logic specified by injection token to source data
     * @template S, T
     * @param {?} source
     * @param {?} injectionToken
     * @return {?}
     */
    ConverterService.prototype.convert = /**
     * Apply converter logic specified by injection token to source data
     * @template S, T
     * @param {?} source
     * @param {?} injectionToken
     * @return {?}
     */
    function (source, injectionToken) {
        if (this.hasConverters(injectionToken)) {
            return this.convertSource(source, injectionToken);
        }
        else {
            return (/** @type {?} */ (source));
        }
    };
    /**
     * @private
     * @template S, T
     * @param {?} source
     * @param {?} injectionToken
     * @return {?}
     */
    ConverterService.prototype.convertSource = /**
     * @private
     * @template S, T
     * @param {?} source
     * @param {?} injectionToken
     * @return {?}
     */
    function (source, injectionToken) {
        return this.getConverters(injectionToken).reduce(function (target, converter) {
            return converter.convert(source, target);
        }, (/** @type {?} */ (undefined)));
    };
    ConverterService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    ConverterService.ctorParameters = function () { return [
        { type: Injector }
    ]; };
    /** @nocollapse */ ConverterService.ngInjectableDef = i0.defineInjectable({ factory: function ConverterService_Factory() { return new ConverterService(i0.inject(i0.INJECTOR)); }, token: ConverterService, providedIn: "root" });
    return ConverterService;
}());
export { ConverterService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ConverterService.prototype.converters;
    /**
     * @type {?}
     * @private
     */
    ConverterService.prototype.injector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udmVydGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXRpbC9jb252ZXJ0ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBa0IsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXJFLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7Ozs7O0FBVXJDLCtCQVNDOzs7Ozs7Ozs7O0lBREMsNERBQWtDOztBQUdwQztJQUlFLDBCQUFvQixRQUFrQjtRQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBRTlCLGVBQVUsR0FHZCxJQUFJLEdBQUcsRUFBRSxDQUFDO0lBTDJCLENBQUM7Ozs7Ozs7SUFPbEMsd0NBQWE7Ozs7OztJQUFyQixVQUNFLGNBQStDO1FBRS9DLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsRUFBRTs7Z0JBQ2xDLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FDbEMsY0FBYyxFQUNkLEVBQUUsQ0FDSDtZQUNELElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFO2dCQUM5QixPQUFPLENBQUMsSUFBSSxDQUNWLGdFQUFnRSxFQUNoRSxjQUFjLENBQUMsUUFBUSxFQUFFLENBQzFCLENBQUM7YUFDSDtZQUNELElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxVQUFVLENBQUMsQ0FBQztTQUNqRDtRQUVELE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVEOztPQUVHOzs7Ozs7O0lBQ0gsd0NBQWE7Ozs7OztJQUFiLFVBQ0UsY0FBK0M7O1lBRXpDLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQztRQUNyRCxPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVEOztPQUVHOzs7Ozs7O0lBQ0gsbUNBQVE7Ozs7OztJQUFSLFVBQ0UsY0FBK0M7UUFEakQsaUJBUUM7UUFMQyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLEVBQUU7WUFDdEMsT0FBTyxHQUFHLENBQUMsVUFBQyxLQUFVLElBQUssT0FBQSxLQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxjQUFjLENBQUMsRUFBekMsQ0FBeUMsQ0FBQyxDQUFDO1NBQ3ZFO2FBQU07WUFDTCxPQUFPLFVBQUMsVUFBMkIsV0FBSyxtQkFBQSxVQUFVLEVBQWlCLEdBQUEsQ0FBQztTQUNyRTtJQUNILENBQUM7SUFFRDs7T0FFRzs7Ozs7Ozs7SUFDSCxrQ0FBTzs7Ozs7OztJQUFQLFVBQWMsTUFBUyxFQUFFLGNBQStDO1FBQ3RFLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsRUFBRTtZQUN0QyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLGNBQWMsQ0FBQyxDQUFDO1NBQ25EO2FBQU07WUFDTCxPQUFPLG1CQUFBLE1BQU0sRUFBTyxDQUFDO1NBQ3RCO0lBQ0gsQ0FBQzs7Ozs7Ozs7SUFFTyx3Q0FBYTs7Ozs7OztJQUFyQixVQUNFLE1BQVMsRUFDVCxjQUErQztRQUUvQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUMsTUFBTSxDQUM5QyxVQUFDLE1BQU0sRUFBRSxTQUFTO1lBQ2hCLE9BQU8sU0FBUyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDM0MsQ0FBQyxFQUNELG1CQUFBLFNBQVMsRUFBSyxDQUNmLENBQUM7SUFDSixDQUFDOztnQkEzRUYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkF6Qm9DLFFBQVE7OzsyQkFBN0M7Q0FtR0MsQUE1RUQsSUE0RUM7U0F6RVksZ0JBQWdCOzs7Ozs7SUFHM0Isc0NBR2M7Ozs7O0lBTEYsb0NBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0aW9uVG9rZW4sIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBPcGVyYXRvckZ1bmN0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbi8qKlxuICogQ29udmVydGVyIGlzIHVzZWQgdG8gY29udmVydCBzb3VyY2UgZGF0YSBtb2RlbCB0byB0YXJnZXQgZGF0YSBtb2RlbC5cbiAqIEJ5IGNvbnZlbnRpb24sIHdlIGRpc3Rpbmd1aXNoIHR3byBmbG93czpcbiAqICAgLSAqTm9ybWFsaXplKiBpcyB0aGUgY29udmVyc2lvbiBmcm9tIGJhY2tlbmQgbW9kZWxzIHRvIFVJIG1vZGVsc1xuICogICAtICpTZXJpYWxpemUqIGlzIHRoZSBjb252ZXJzaW9uIG9mIFVJIG1vZGVscyB0byBiYWNrZW5kIG1vZGVscyAoaW4gY2FzZSBvZiBzdWJtaXR0aW5nIGRhdGEgdG8gdGhlIGJhY2tlbmQpLlxuICpcbiAqIENvbnZlcnRlcnMgY2FuIGJlIHN0YWNrZWQgdG9nZXRoZXIgdG8gdG8gYXBwbHkgZGVjb3VwbGVkIGN1c3RvbWl6YXRpb25zXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ29udmVydGVyPFMsIFQ+IHtcbiAgLyoqXG4gICAqIENvbnZlcnQgY29udmVydHMgc291cmNlIG1vZGVsIHRvIHRhcmdldCBtb2RlbC4gQ2FuIHVzZSBvcHRpb25hbCB0YXJnZXQgcGFyYW1ldGVyLFxuICAgKiB1c2VkIGluIGNhc2Ugb2Ygc3RhY2tpbmcgbXVsdGlwbGUgY29udmVydGVycyAoZm9yIGV4YW1wbGUsIHRvIGltcGxlbWVudCBwb3B1bGF0b3IgcGF0dGVybikuXG4gICAqXG4gICAqIEBwYXJhbSBzb3VyY2UgU291cmNlIGRhdGEgbW9kZWxcbiAgICogQHBhcmFtIHRhcmdldCBPcHRpb25hbCwgcGFydGlhbGx5IGNvbnZlcnRlZCB0YXJnZXQgbW9kZWxcbiAgICovXG4gIGNvbnZlcnQoc291cmNlOiBTLCB0YXJnZXQ/OiBUKTogVDtcbn1cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENvbnZlcnRlclNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcikge31cblxuICBwcml2YXRlIGNvbnZlcnRlcnM6IE1hcDxcbiAgICBJbmplY3Rpb25Ub2tlbjxDb252ZXJ0ZXI8YW55LCBhbnk+PixcbiAgICBDb252ZXJ0ZXI8YW55LCBhbnk+W11cbiAgPiA9IG5ldyBNYXAoKTtcblxuICBwcml2YXRlIGdldENvbnZlcnRlcnM8UywgVD4oXG4gICAgaW5qZWN0aW9uVG9rZW46IEluamVjdGlvblRva2VuPENvbnZlcnRlcjxTLCBUPj5cbiAgKTogQ29udmVydGVyPFMsIFQ+W10ge1xuICAgIGlmICghdGhpcy5jb252ZXJ0ZXJzLmhhcyhpbmplY3Rpb25Ub2tlbikpIHtcbiAgICAgIGNvbnN0IGNvbnZlcnRlcnMgPSB0aGlzLmluamVjdG9yLmdldDxDb252ZXJ0ZXI8UywgVD5bXT4oXG4gICAgICAgIGluamVjdGlvblRva2VuLFxuICAgICAgICBbXVxuICAgICAgKTtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShjb252ZXJ0ZXJzKSkge1xuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgJ0NvbnZlcnRlciBtdXN0IGJlIG11bHRpLXByb3ZpZGVkLCBwbGVhc2UgdXNlIFwibXVsdGk6IHRydWVcIiBmb3InLFxuICAgICAgICAgIGluamVjdGlvblRva2VuLnRvU3RyaW5nKClcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuY29udmVydGVycy5zZXQoaW5qZWN0aW9uVG9rZW4sIGNvbnZlcnRlcnMpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmNvbnZlcnRlcnMuZ2V0KGluamVjdGlvblRva2VuKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaWxsIHJldHVybiB0cnVlIGlmIGNvbnZlcnRlcnMgZm9yIHNwZWNpZmllZCB0b2tlbiB3ZXJlIHByb3ZpZGVkXG4gICAqL1xuICBoYXNDb252ZXJ0ZXJzPFMsIFQ+KFxuICAgIGluamVjdGlvblRva2VuOiBJbmplY3Rpb25Ub2tlbjxDb252ZXJ0ZXI8UywgVD4+XG4gICk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGNvbnZlcnRlcnMgPSB0aGlzLmdldENvbnZlcnRlcnMoaW5qZWN0aW9uVG9rZW4pO1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KGNvbnZlcnRlcnMpICYmIGNvbnZlcnRlcnMubGVuZ3RoID4gMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBQaXBlYWJsZSBvcGVyYXRvciB0byBhcHBseSBjb252ZXJ0ZXIgbG9naWMgaW4gYSBvYnNlcnZhYmxlIHN0cmVhbVxuICAgKi9cbiAgcGlwZWFibGU8UywgVD4oXG4gICAgaW5qZWN0aW9uVG9rZW46IEluamVjdGlvblRva2VuPENvbnZlcnRlcjxTLCBUPj5cbiAgKTogT3BlcmF0b3JGdW5jdGlvbjxTLCBUPiB7XG4gICAgaWYgKHRoaXMuaGFzQ29udmVydGVycyhpbmplY3Rpb25Ub2tlbikpIHtcbiAgICAgIHJldHVybiBtYXAoKG1vZGVsOiBhbnkpID0+IHRoaXMuY29udmVydFNvdXJjZShtb2RlbCwgaW5qZWN0aW9uVG9rZW4pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChvYnNlcnZhYmxlOiBPYnNlcnZhYmxlPGFueT4pID0+IG9ic2VydmFibGUgYXMgT2JzZXJ2YWJsZTxUPjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQXBwbHkgY29udmVydGVyIGxvZ2ljIHNwZWNpZmllZCBieSBpbmplY3Rpb24gdG9rZW4gdG8gc291cmNlIGRhdGFcbiAgICovXG4gIGNvbnZlcnQ8UywgVD4oc291cmNlOiBTLCBpbmplY3Rpb25Ub2tlbjogSW5qZWN0aW9uVG9rZW48Q29udmVydGVyPFMsIFQ+Pik6IFQge1xuICAgIGlmICh0aGlzLmhhc0NvbnZlcnRlcnMoaW5qZWN0aW9uVG9rZW4pKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb252ZXJ0U291cmNlKHNvdXJjZSwgaW5qZWN0aW9uVG9rZW4pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gc291cmNlIGFzIGFueTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNvbnZlcnRTb3VyY2U8UywgVD4oXG4gICAgc291cmNlOiBTLFxuICAgIGluamVjdGlvblRva2VuOiBJbmplY3Rpb25Ub2tlbjxDb252ZXJ0ZXI8UywgVD4+XG4gICk6IFQge1xuICAgIHJldHVybiB0aGlzLmdldENvbnZlcnRlcnMoaW5qZWN0aW9uVG9rZW4pLnJlZHVjZShcbiAgICAgICh0YXJnZXQsIGNvbnZlcnRlcikgPT4ge1xuICAgICAgICByZXR1cm4gY29udmVydGVyLmNvbnZlcnQoc291cmNlLCB0YXJnZXQpO1xuICAgICAgfSxcbiAgICAgIHVuZGVmaW5lZCBhcyBUXG4gICAgKTtcbiAgfVxufVxuIl19