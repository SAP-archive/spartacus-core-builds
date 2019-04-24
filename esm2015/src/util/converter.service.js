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
export class ConverterService {
    /**
     * @param {?} injector
     */
    constructor(injector) {
        this.injector = injector;
        this.converters = new Map();
    }
    /**
     * @private
     * @template S, T
     * @param {?} injectionToken
     * @return {?}
     */
    getConverters(injectionToken) {
        if (!this.converters.has(injectionToken)) {
            /** @type {?} */
            const converters = this.injector.get(injectionToken, []);
            if (!Array.isArray(converters)) {
                console.warn('Converter must be multi-provided, please use "multi: true" for', injectionToken.toString());
            }
            this.converters.set(injectionToken, converters);
        }
        return this.converters.get(injectionToken);
    }
    /**
     * Will return true if converters for specified token were provided
     * @template S, T
     * @param {?} injectionToken
     * @return {?}
     */
    hasConverters(injectionToken) {
        /** @type {?} */
        const converters = this.getConverters(injectionToken);
        return Array.isArray(converters) && converters.length > 0;
    }
    /**
     * Pipeable operator to apply converter logic in a observable stream
     * @template S, T
     * @param {?} injectionToken
     * @return {?}
     */
    pipeable(injectionToken) {
        if (this.hasConverters(injectionToken)) {
            return map((model) => this.convertSource(model, injectionToken));
        }
        else {
            return (observable) => (/** @type {?} */ (observable));
        }
    }
    /**
     * Pipeable operator to apply converter logic in a observable stream to collection of items
     * @template S, T
     * @param {?} injectionToken
     * @return {?}
     */
    pipeableMany(injectionToken) {
        if (this.hasConverters(injectionToken)) {
            return map((model) => this.convertMany(model, injectionToken));
        }
        else {
            return (observable) => (/** @type {?} */ (observable));
        }
    }
    /**
     * Apply converter logic specified by injection token to source data
     * @template S, T
     * @param {?} source
     * @param {?} injectionToken
     * @return {?}
     */
    convert(source, injectionToken) {
        if (this.hasConverters(injectionToken)) {
            return this.convertSource(source, injectionToken);
        }
        else {
            return (/** @type {?} */ (source));
        }
    }
    /**
     * Apply converter logic specified by injection token to a collection
     * @template S, T
     * @param {?} sources
     * @param {?} injectionToken
     * @return {?}
     */
    convertMany(sources, injectionToken) {
        if (this.hasConverters(injectionToken) && Array.isArray(sources)) {
            return sources.map(source => this.convertSource(source, injectionToken));
        }
        else {
            return (/** @type {?} */ (sources));
        }
    }
    /**
     * @private
     * @template S, T
     * @param {?} source
     * @param {?} injectionToken
     * @return {?}
     */
    convertSource(source, injectionToken) {
        return this.getConverters(injectionToken).reduce((target, converter) => {
            return converter.convert(source, target);
        }, (/** @type {?} */ (undefined)));
    }
}
ConverterService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
ConverterService.ctorParameters = () => [
    { type: Injector }
];
/** @nocollapse */ ConverterService.ngInjectableDef = i0.defineInjectable({ factory: function ConverterService_Factory() { return new ConverterService(i0.inject(i0.INJECTOR)); }, token: ConverterService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udmVydGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXRpbC9jb252ZXJ0ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBa0IsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXJFLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7Ozs7O0FBVXJDLCtCQVNDOzs7Ozs7Ozs7O0lBREMsNERBQWtDOztBQU1wQyxNQUFNLE9BQU8sZ0JBQWdCOzs7O0lBQzNCLFlBQW9CLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFFOUIsZUFBVSxHQUdkLElBQUksR0FBRyxFQUFFLENBQUM7SUFMMkIsQ0FBQzs7Ozs7OztJQU9sQyxhQUFhLENBQ25CLGNBQStDO1FBRS9DLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsRUFBRTs7a0JBQ2xDLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FDbEMsY0FBYyxFQUNkLEVBQUUsQ0FDSDtZQUNELElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFO2dCQUM5QixPQUFPLENBQUMsSUFBSSxDQUNWLGdFQUFnRSxFQUNoRSxjQUFjLENBQUMsUUFBUSxFQUFFLENBQzFCLENBQUM7YUFDSDtZQUNELElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxVQUFVLENBQUMsQ0FBQztTQUNqRDtRQUVELE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7Ozs7OztJQUtELGFBQWEsQ0FDWCxjQUErQzs7Y0FFekMsVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDO1FBQ3JELE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUM1RCxDQUFDOzs7Ozs7O0lBS0QsUUFBUSxDQUNOLGNBQStDO1FBRS9DLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsRUFBRTtZQUN0QyxPQUFPLEdBQUcsQ0FBQyxDQUFDLEtBQVEsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsY0FBYyxDQUFDLENBQUMsQ0FBQztTQUNyRTthQUFNO1lBQ0wsT0FBTyxDQUFDLFVBQTJCLEVBQUUsRUFBRSxDQUFDLG1CQUFBLFVBQVUsRUFBaUIsQ0FBQztTQUNyRTtJQUNILENBQUM7Ozs7Ozs7SUFLRCxZQUFZLENBQ1YsY0FBK0M7UUFFL0MsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxFQUFFO1lBQ3RDLE9BQU8sR0FBRyxDQUFDLENBQUMsS0FBVSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxjQUFjLENBQUMsQ0FBQyxDQUFDO1NBQ3JFO2FBQU07WUFDTCxPQUFPLENBQUMsVUFBNkIsRUFBRSxFQUFFLENBQUMsbUJBQUEsVUFBVSxFQUFtQixDQUFDO1NBQ3pFO0lBQ0gsQ0FBQzs7Ozs7Ozs7SUFLRCxPQUFPLENBQU8sTUFBUyxFQUFFLGNBQStDO1FBQ3RFLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsRUFBRTtZQUN0QyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLGNBQWMsQ0FBQyxDQUFDO1NBQ25EO2FBQU07WUFDTCxPQUFPLG1CQUFBLE1BQU0sRUFBTyxDQUFDO1NBQ3RCO0lBQ0gsQ0FBQzs7Ozs7Ozs7SUFLRCxXQUFXLENBQ1QsT0FBWSxFQUNaLGNBQStDO1FBRS9DLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ2hFLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLGNBQWMsQ0FBQyxDQUFDLENBQUM7U0FDMUU7YUFBTTtZQUNMLE9BQU8sbUJBQUEsT0FBTyxFQUFTLENBQUM7U0FDekI7SUFDSCxDQUFDOzs7Ozs7OztJQUVPLGFBQWEsQ0FDbkIsTUFBUyxFQUNULGNBQStDO1FBRS9DLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxNQUFNLENBQzlDLENBQUMsTUFBTSxFQUFFLFNBQVMsRUFBRSxFQUFFO1lBQ3BCLE9BQU8sU0FBUyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDM0MsQ0FBQyxFQUNELG1CQUFBLFNBQVMsRUFBSyxDQUNmLENBQUM7SUFDSixDQUFDOzs7WUF0R0YsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBekJvQyxRQUFROzs7Ozs7OztJQTZCM0Msc0NBR2M7Ozs7O0lBTEYsb0NBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0aW9uVG9rZW4sIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBPcGVyYXRvckZ1bmN0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbi8qKlxuICogQ29udmVydGVyIGlzIHVzZWQgdG8gY29udmVydCBzb3VyY2UgZGF0YSBtb2RlbCB0byB0YXJnZXQgZGF0YSBtb2RlbC5cbiAqIEJ5IGNvbnZlbnRpb24sIHdlIGRpc3Rpbmd1aXNoIHR3byBmbG93czpcbiAqICAgLSAqTm9ybWFsaXplKiBpcyB0aGUgY29udmVyc2lvbiBmcm9tIGJhY2tlbmQgbW9kZWxzIHRvIFVJIG1vZGVsc1xuICogICAtICpTZXJpYWxpemUqIGlzIHRoZSBjb252ZXJzaW9uIG9mIFVJIG1vZGVscyB0byBiYWNrZW5kIG1vZGVscyAoaW4gY2FzZSBvZiBzdWJtaXR0aW5nIGRhdGEgdG8gdGhlIGJhY2tlbmQpLlxuICpcbiAqIENvbnZlcnRlcnMgY2FuIGJlIHN0YWNrZWQgdG9nZXRoZXIgdG8gdG8gYXBwbHkgZGVjb3VwbGVkIGN1c3RvbWl6YXRpb25zXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ29udmVydGVyPFMsIFQ+IHtcbiAgLyoqXG4gICAqIENvbnZlcnQgY29udmVydHMgc291cmNlIG1vZGVsIHRvIHRhcmdldCBtb2RlbC4gQ2FuIHVzZSBvcHRpb25hbCB0YXJnZXQgcGFyYW1ldGVyLFxuICAgKiB1c2VkIGluIGNhc2Ugb2Ygc3RhY2tpbmcgbXVsdGlwbGUgY29udmVydGVycyAoZm9yIGV4YW1wbGUsIHRvIGltcGxlbWVudCBwb3B1bGF0b3IgcGF0dGVybikuXG4gICAqXG4gICAqIEBwYXJhbSBzb3VyY2UgU291cmNlIGRhdGEgbW9kZWxcbiAgICogQHBhcmFtIHRhcmdldCBPcHRpb25hbCwgcGFydGlhbGx5IGNvbnZlcnRlZCB0YXJnZXQgbW9kZWxcbiAgICovXG4gIGNvbnZlcnQoc291cmNlOiBTLCB0YXJnZXQ/OiBUKTogVDtcbn1cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENvbnZlcnRlclNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcikge31cblxuICBwcml2YXRlIGNvbnZlcnRlcnM6IE1hcDxcbiAgICBJbmplY3Rpb25Ub2tlbjxDb252ZXJ0ZXI8YW55LCBhbnk+PixcbiAgICBDb252ZXJ0ZXI8YW55LCBhbnk+W11cbiAgPiA9IG5ldyBNYXAoKTtcblxuICBwcml2YXRlIGdldENvbnZlcnRlcnM8UywgVD4oXG4gICAgaW5qZWN0aW9uVG9rZW46IEluamVjdGlvblRva2VuPENvbnZlcnRlcjxTLCBUPj5cbiAgKTogQ29udmVydGVyPFMsIFQ+W10ge1xuICAgIGlmICghdGhpcy5jb252ZXJ0ZXJzLmhhcyhpbmplY3Rpb25Ub2tlbikpIHtcbiAgICAgIGNvbnN0IGNvbnZlcnRlcnMgPSB0aGlzLmluamVjdG9yLmdldDxDb252ZXJ0ZXI8UywgVD5bXT4oXG4gICAgICAgIGluamVjdGlvblRva2VuLFxuICAgICAgICBbXVxuICAgICAgKTtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShjb252ZXJ0ZXJzKSkge1xuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgJ0NvbnZlcnRlciBtdXN0IGJlIG11bHRpLXByb3ZpZGVkLCBwbGVhc2UgdXNlIFwibXVsdGk6IHRydWVcIiBmb3InLFxuICAgICAgICAgIGluamVjdGlvblRva2VuLnRvU3RyaW5nKClcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuY29udmVydGVycy5zZXQoaW5qZWN0aW9uVG9rZW4sIGNvbnZlcnRlcnMpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmNvbnZlcnRlcnMuZ2V0KGluamVjdGlvblRva2VuKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaWxsIHJldHVybiB0cnVlIGlmIGNvbnZlcnRlcnMgZm9yIHNwZWNpZmllZCB0b2tlbiB3ZXJlIHByb3ZpZGVkXG4gICAqL1xuICBoYXNDb252ZXJ0ZXJzPFMsIFQ+KFxuICAgIGluamVjdGlvblRva2VuOiBJbmplY3Rpb25Ub2tlbjxDb252ZXJ0ZXI8UywgVD4+XG4gICk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGNvbnZlcnRlcnMgPSB0aGlzLmdldENvbnZlcnRlcnMoaW5qZWN0aW9uVG9rZW4pO1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KGNvbnZlcnRlcnMpICYmIGNvbnZlcnRlcnMubGVuZ3RoID4gMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBQaXBlYWJsZSBvcGVyYXRvciB0byBhcHBseSBjb252ZXJ0ZXIgbG9naWMgaW4gYSBvYnNlcnZhYmxlIHN0cmVhbVxuICAgKi9cbiAgcGlwZWFibGU8UywgVD4oXG4gICAgaW5qZWN0aW9uVG9rZW46IEluamVjdGlvblRva2VuPENvbnZlcnRlcjxTLCBUPj5cbiAgKTogT3BlcmF0b3JGdW5jdGlvbjxTLCBUPiB7XG4gICAgaWYgKHRoaXMuaGFzQ29udmVydGVycyhpbmplY3Rpb25Ub2tlbikpIHtcbiAgICAgIHJldHVybiBtYXAoKG1vZGVsOiBTKSA9PiB0aGlzLmNvbnZlcnRTb3VyY2UobW9kZWwsIGluamVjdGlvblRva2VuKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAob2JzZXJ2YWJsZTogT2JzZXJ2YWJsZTxhbnk+KSA9PiBvYnNlcnZhYmxlIGFzIE9ic2VydmFibGU8VD47XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFBpcGVhYmxlIG9wZXJhdG9yIHRvIGFwcGx5IGNvbnZlcnRlciBsb2dpYyBpbiBhIG9ic2VydmFibGUgc3RyZWFtIHRvIGNvbGxlY3Rpb24gb2YgaXRlbXNcbiAgICovXG4gIHBpcGVhYmxlTWFueTxTLCBUPihcbiAgICBpbmplY3Rpb25Ub2tlbjogSW5qZWN0aW9uVG9rZW48Q29udmVydGVyPFMsIFQ+PlxuICApOiBPcGVyYXRvckZ1bmN0aW9uPFNbXSwgVFtdPiB7XG4gICAgaWYgKHRoaXMuaGFzQ29udmVydGVycyhpbmplY3Rpb25Ub2tlbikpIHtcbiAgICAgIHJldHVybiBtYXAoKG1vZGVsOiBTW10pID0+IHRoaXMuY29udmVydE1hbnkobW9kZWwsIGluamVjdGlvblRva2VuKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAob2JzZXJ2YWJsZTogT2JzZXJ2YWJsZTxhbnlbXT4pID0+IG9ic2VydmFibGUgYXMgT2JzZXJ2YWJsZTxUW10+O1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBcHBseSBjb252ZXJ0ZXIgbG9naWMgc3BlY2lmaWVkIGJ5IGluamVjdGlvbiB0b2tlbiB0byBzb3VyY2UgZGF0YVxuICAgKi9cbiAgY29udmVydDxTLCBUPihzb3VyY2U6IFMsIGluamVjdGlvblRva2VuOiBJbmplY3Rpb25Ub2tlbjxDb252ZXJ0ZXI8UywgVD4+KTogVCB7XG4gICAgaWYgKHRoaXMuaGFzQ29udmVydGVycyhpbmplY3Rpb25Ub2tlbikpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbnZlcnRTb3VyY2Uoc291cmNlLCBpbmplY3Rpb25Ub2tlbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBzb3VyY2UgYXMgYW55O1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBcHBseSBjb252ZXJ0ZXIgbG9naWMgc3BlY2lmaWVkIGJ5IGluamVjdGlvbiB0b2tlbiB0byBhIGNvbGxlY3Rpb25cbiAgICovXG4gIGNvbnZlcnRNYW55PFMsIFQ+KFxuICAgIHNvdXJjZXM6IFNbXSxcbiAgICBpbmplY3Rpb25Ub2tlbjogSW5qZWN0aW9uVG9rZW48Q29udmVydGVyPFMsIFQ+PlxuICApOiBUW10ge1xuICAgIGlmICh0aGlzLmhhc0NvbnZlcnRlcnMoaW5qZWN0aW9uVG9rZW4pICYmIEFycmF5LmlzQXJyYXkoc291cmNlcykpIHtcbiAgICAgIHJldHVybiBzb3VyY2VzLm1hcChzb3VyY2UgPT4gdGhpcy5jb252ZXJ0U291cmNlKHNvdXJjZSwgaW5qZWN0aW9uVG9rZW4pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHNvdXJjZXMgYXMgYW55W107XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjb252ZXJ0U291cmNlPFMsIFQ+KFxuICAgIHNvdXJjZTogUyxcbiAgICBpbmplY3Rpb25Ub2tlbjogSW5qZWN0aW9uVG9rZW48Q29udmVydGVyPFMsIFQ+PlxuICApOiBUIHtcbiAgICByZXR1cm4gdGhpcy5nZXRDb252ZXJ0ZXJzKGluamVjdGlvblRva2VuKS5yZWR1Y2UoXG4gICAgICAodGFyZ2V0LCBjb252ZXJ0ZXIpID0+IHtcbiAgICAgICAgcmV0dXJuIGNvbnZlcnRlci5jb252ZXJ0KHNvdXJjZSwgdGFyZ2V0KTtcbiAgICAgIH0sXG4gICAgICB1bmRlZmluZWQgYXMgVFxuICAgICk7XG4gIH1cbn1cbiJdfQ==