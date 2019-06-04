/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            return map((/**
             * @param {?} model
             * @return {?}
             */
            (model) => this.convertSource(model, injectionToken)));
        }
        else {
            return (/**
             * @param {?} observable
             * @return {?}
             */
            (observable) => (/** @type {?} */ (observable)));
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
            return map((/**
             * @param {?} model
             * @return {?}
             */
            (model) => this.convertMany(model, injectionToken)));
        }
        else {
            return (/**
             * @param {?} observable
             * @return {?}
             */
            (observable) => (/** @type {?} */ (observable)));
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
            return sources.map((/**
             * @param {?} source
             * @return {?}
             */
            source => this.convertSource(source, injectionToken)));
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
        return this.getConverters(injectionToken).reduce((/**
         * @param {?} target
         * @param {?} converter
         * @return {?}
         */
        (target, converter) => {
            return converter.convert(source, target);
        }), (/** @type {?} */ (undefined)));
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
/** @nocollapse */ ConverterService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ConverterService_Factory() { return new ConverterService(i0.ɵɵinject(i0.INJECTOR)); }, token: ConverterService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    ConverterService.prototype.converters;
    /**
     * @type {?}
     * @protected
     */
    ConverterService.prototype.injector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udmVydGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXRpbC9jb252ZXJ0ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBa0IsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXJFLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7Ozs7O0FBVXJDLCtCQVNDOzs7Ozs7Ozs7O0lBREMsNERBQWtDOztBQU1wQyxNQUFNLE9BQU8sZ0JBQWdCOzs7O0lBQzNCLFlBQXNCLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFFaEMsZUFBVSxHQUdkLElBQUksR0FBRyxFQUFFLENBQUM7SUFMNkIsQ0FBQzs7Ozs7OztJQU9wQyxhQUFhLENBQ25CLGNBQStDO1FBRS9DLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsRUFBRTs7a0JBQ2xDLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FDbEMsY0FBYyxFQUNkLEVBQUUsQ0FDSDtZQUNELElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFO2dCQUM5QixPQUFPLENBQUMsSUFBSSxDQUNWLGdFQUFnRSxFQUNoRSxjQUFjLENBQUMsUUFBUSxFQUFFLENBQzFCLENBQUM7YUFDSDtZQUNELElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxVQUFVLENBQUMsQ0FBQztTQUNqRDtRQUVELE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7Ozs7OztJQUtELGFBQWEsQ0FDWCxjQUErQzs7Y0FFekMsVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDO1FBQ3JELE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUM1RCxDQUFDOzs7Ozs7O0lBS0QsUUFBUSxDQUNOLGNBQStDO1FBRS9DLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsRUFBRTtZQUN0QyxPQUFPLEdBQUc7Ozs7WUFBQyxDQUFDLEtBQVEsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsY0FBYyxDQUFDLEVBQUMsQ0FBQztTQUNyRTthQUFNO1lBQ0w7Ozs7WUFBTyxDQUFDLFVBQTJCLEVBQUUsRUFBRSxDQUFDLG1CQUFBLFVBQVUsRUFBaUIsRUFBQztTQUNyRTtJQUNILENBQUM7Ozs7Ozs7SUFLRCxZQUFZLENBQ1YsY0FBK0M7UUFFL0MsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxFQUFFO1lBQ3RDLE9BQU8sR0FBRzs7OztZQUFDLENBQUMsS0FBVSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxjQUFjLENBQUMsRUFBQyxDQUFDO1NBQ3JFO2FBQU07WUFDTDs7OztZQUFPLENBQUMsVUFBNkIsRUFBRSxFQUFFLENBQUMsbUJBQUEsVUFBVSxFQUFtQixFQUFDO1NBQ3pFO0lBQ0gsQ0FBQzs7Ozs7Ozs7SUFLRCxPQUFPLENBQU8sTUFBUyxFQUFFLGNBQStDO1FBQ3RFLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsRUFBRTtZQUN0QyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLGNBQWMsQ0FBQyxDQUFDO1NBQ25EO2FBQU07WUFDTCxPQUFPLG1CQUFBLE1BQU0sRUFBTyxDQUFDO1NBQ3RCO0lBQ0gsQ0FBQzs7Ozs7Ozs7SUFLRCxXQUFXLENBQ1QsT0FBWSxFQUNaLGNBQStDO1FBRS9DLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ2hFLE9BQU8sT0FBTyxDQUFDLEdBQUc7Ozs7WUFBQyxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLGNBQWMsQ0FBQyxFQUFDLENBQUM7U0FDMUU7YUFBTTtZQUNMLE9BQU8sbUJBQUEsT0FBTyxFQUFTLENBQUM7U0FDekI7SUFDSCxDQUFDOzs7Ozs7OztJQUVPLGFBQWEsQ0FDbkIsTUFBUyxFQUNULGNBQStDO1FBRS9DLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxNQUFNOzs7OztRQUM5QyxDQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsRUFBRTtZQUNwQixPQUFPLFNBQVMsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzNDLENBQUMsR0FDRCxtQkFBQSxTQUFTLEVBQUssQ0FDZixDQUFDO0lBQ0osQ0FBQzs7O1lBdEdGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQXpCb0MsUUFBUTs7Ozs7Ozs7SUE2QjNDLHNDQUdjOzs7OztJQUxGLG9DQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdGlvblRva2VuLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgT3BlcmF0b3JGdW5jdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG4vKipcbiAqIENvbnZlcnRlciBpcyB1c2VkIHRvIGNvbnZlcnQgc291cmNlIGRhdGEgbW9kZWwgdG8gdGFyZ2V0IGRhdGEgbW9kZWwuXG4gKiBCeSBjb252ZW50aW9uLCB3ZSBkaXN0aW5ndWlzaCB0d28gZmxvd3M6XG4gKiAgIC0gKk5vcm1hbGl6ZSogaXMgdGhlIGNvbnZlcnNpb24gZnJvbSBiYWNrZW5kIG1vZGVscyB0byBVSSBtb2RlbHNcbiAqICAgLSAqU2VyaWFsaXplKiBpcyB0aGUgY29udmVyc2lvbiBvZiBVSSBtb2RlbHMgdG8gYmFja2VuZCBtb2RlbHMgKGluIGNhc2Ugb2Ygc3VibWl0dGluZyBkYXRhIHRvIHRoZSBiYWNrZW5kKS5cbiAqXG4gKiBDb252ZXJ0ZXJzIGNhbiBiZSBzdGFja2VkIHRvZ2V0aGVyIHRvIHRvIGFwcGx5IGRlY291cGxlZCBjdXN0b21pemF0aW9uc1xuICovXG5leHBvcnQgaW50ZXJmYWNlIENvbnZlcnRlcjxTLCBUPiB7XG4gIC8qKlxuICAgKiBDb252ZXJ0IGNvbnZlcnRzIHNvdXJjZSBtb2RlbCB0byB0YXJnZXQgbW9kZWwuIENhbiB1c2Ugb3B0aW9uYWwgdGFyZ2V0IHBhcmFtZXRlcixcbiAgICogdXNlZCBpbiBjYXNlIG9mIHN0YWNraW5nIG11bHRpcGxlIGNvbnZlcnRlcnMgKGZvciBleGFtcGxlLCB0byBpbXBsZW1lbnQgcG9wdWxhdG9yIHBhdHRlcm4pLlxuICAgKlxuICAgKiBAcGFyYW0gc291cmNlIFNvdXJjZSBkYXRhIG1vZGVsXG4gICAqIEBwYXJhbSB0YXJnZXQgT3B0aW9uYWwsIHBhcnRpYWxseSBjb252ZXJ0ZWQgdGFyZ2V0IG1vZGVsXG4gICAqL1xuICBjb252ZXJ0KHNvdXJjZTogUywgdGFyZ2V0PzogVCk6IFQ7XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDb252ZXJ0ZXJTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGluamVjdG9yOiBJbmplY3Rvcikge31cblxuICBwcml2YXRlIGNvbnZlcnRlcnM6IE1hcDxcbiAgICBJbmplY3Rpb25Ub2tlbjxDb252ZXJ0ZXI8YW55LCBhbnk+PixcbiAgICBDb252ZXJ0ZXI8YW55LCBhbnk+W11cbiAgPiA9IG5ldyBNYXAoKTtcblxuICBwcml2YXRlIGdldENvbnZlcnRlcnM8UywgVD4oXG4gICAgaW5qZWN0aW9uVG9rZW46IEluamVjdGlvblRva2VuPENvbnZlcnRlcjxTLCBUPj5cbiAgKTogQ29udmVydGVyPFMsIFQ+W10ge1xuICAgIGlmICghdGhpcy5jb252ZXJ0ZXJzLmhhcyhpbmplY3Rpb25Ub2tlbikpIHtcbiAgICAgIGNvbnN0IGNvbnZlcnRlcnMgPSB0aGlzLmluamVjdG9yLmdldDxDb252ZXJ0ZXI8UywgVD5bXT4oXG4gICAgICAgIGluamVjdGlvblRva2VuLFxuICAgICAgICBbXVxuICAgICAgKTtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShjb252ZXJ0ZXJzKSkge1xuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgJ0NvbnZlcnRlciBtdXN0IGJlIG11bHRpLXByb3ZpZGVkLCBwbGVhc2UgdXNlIFwibXVsdGk6IHRydWVcIiBmb3InLFxuICAgICAgICAgIGluamVjdGlvblRva2VuLnRvU3RyaW5nKClcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuY29udmVydGVycy5zZXQoaW5qZWN0aW9uVG9rZW4sIGNvbnZlcnRlcnMpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmNvbnZlcnRlcnMuZ2V0KGluamVjdGlvblRva2VuKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaWxsIHJldHVybiB0cnVlIGlmIGNvbnZlcnRlcnMgZm9yIHNwZWNpZmllZCB0b2tlbiB3ZXJlIHByb3ZpZGVkXG4gICAqL1xuICBoYXNDb252ZXJ0ZXJzPFMsIFQ+KFxuICAgIGluamVjdGlvblRva2VuOiBJbmplY3Rpb25Ub2tlbjxDb252ZXJ0ZXI8UywgVD4+XG4gICk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGNvbnZlcnRlcnMgPSB0aGlzLmdldENvbnZlcnRlcnMoaW5qZWN0aW9uVG9rZW4pO1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KGNvbnZlcnRlcnMpICYmIGNvbnZlcnRlcnMubGVuZ3RoID4gMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBQaXBlYWJsZSBvcGVyYXRvciB0byBhcHBseSBjb252ZXJ0ZXIgbG9naWMgaW4gYSBvYnNlcnZhYmxlIHN0cmVhbVxuICAgKi9cbiAgcGlwZWFibGU8UywgVD4oXG4gICAgaW5qZWN0aW9uVG9rZW46IEluamVjdGlvblRva2VuPENvbnZlcnRlcjxTLCBUPj5cbiAgKTogT3BlcmF0b3JGdW5jdGlvbjxTLCBUPiB7XG4gICAgaWYgKHRoaXMuaGFzQ29udmVydGVycyhpbmplY3Rpb25Ub2tlbikpIHtcbiAgICAgIHJldHVybiBtYXAoKG1vZGVsOiBTKSA9PiB0aGlzLmNvbnZlcnRTb3VyY2UobW9kZWwsIGluamVjdGlvblRva2VuKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAob2JzZXJ2YWJsZTogT2JzZXJ2YWJsZTxhbnk+KSA9PiBvYnNlcnZhYmxlIGFzIE9ic2VydmFibGU8VD47XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFBpcGVhYmxlIG9wZXJhdG9yIHRvIGFwcGx5IGNvbnZlcnRlciBsb2dpYyBpbiBhIG9ic2VydmFibGUgc3RyZWFtIHRvIGNvbGxlY3Rpb24gb2YgaXRlbXNcbiAgICovXG4gIHBpcGVhYmxlTWFueTxTLCBUPihcbiAgICBpbmplY3Rpb25Ub2tlbjogSW5qZWN0aW9uVG9rZW48Q29udmVydGVyPFMsIFQ+PlxuICApOiBPcGVyYXRvckZ1bmN0aW9uPFNbXSwgVFtdPiB7XG4gICAgaWYgKHRoaXMuaGFzQ29udmVydGVycyhpbmplY3Rpb25Ub2tlbikpIHtcbiAgICAgIHJldHVybiBtYXAoKG1vZGVsOiBTW10pID0+IHRoaXMuY29udmVydE1hbnkobW9kZWwsIGluamVjdGlvblRva2VuKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAob2JzZXJ2YWJsZTogT2JzZXJ2YWJsZTxhbnlbXT4pID0+IG9ic2VydmFibGUgYXMgT2JzZXJ2YWJsZTxUW10+O1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBcHBseSBjb252ZXJ0ZXIgbG9naWMgc3BlY2lmaWVkIGJ5IGluamVjdGlvbiB0b2tlbiB0byBzb3VyY2UgZGF0YVxuICAgKi9cbiAgY29udmVydDxTLCBUPihzb3VyY2U6IFMsIGluamVjdGlvblRva2VuOiBJbmplY3Rpb25Ub2tlbjxDb252ZXJ0ZXI8UywgVD4+KTogVCB7XG4gICAgaWYgKHRoaXMuaGFzQ29udmVydGVycyhpbmplY3Rpb25Ub2tlbikpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbnZlcnRTb3VyY2Uoc291cmNlLCBpbmplY3Rpb25Ub2tlbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBzb3VyY2UgYXMgYW55O1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBcHBseSBjb252ZXJ0ZXIgbG9naWMgc3BlY2lmaWVkIGJ5IGluamVjdGlvbiB0b2tlbiB0byBhIGNvbGxlY3Rpb25cbiAgICovXG4gIGNvbnZlcnRNYW55PFMsIFQ+KFxuICAgIHNvdXJjZXM6IFNbXSxcbiAgICBpbmplY3Rpb25Ub2tlbjogSW5qZWN0aW9uVG9rZW48Q29udmVydGVyPFMsIFQ+PlxuICApOiBUW10ge1xuICAgIGlmICh0aGlzLmhhc0NvbnZlcnRlcnMoaW5qZWN0aW9uVG9rZW4pICYmIEFycmF5LmlzQXJyYXkoc291cmNlcykpIHtcbiAgICAgIHJldHVybiBzb3VyY2VzLm1hcChzb3VyY2UgPT4gdGhpcy5jb252ZXJ0U291cmNlKHNvdXJjZSwgaW5qZWN0aW9uVG9rZW4pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHNvdXJjZXMgYXMgYW55W107XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjb252ZXJ0U291cmNlPFMsIFQ+KFxuICAgIHNvdXJjZTogUyxcbiAgICBpbmplY3Rpb25Ub2tlbjogSW5qZWN0aW9uVG9rZW48Q29udmVydGVyPFMsIFQ+PlxuICApOiBUIHtcbiAgICByZXR1cm4gdGhpcy5nZXRDb252ZXJ0ZXJzKGluamVjdGlvblRva2VuKS5yZWR1Y2UoXG4gICAgICAodGFyZ2V0LCBjb252ZXJ0ZXIpID0+IHtcbiAgICAgICAgcmV0dXJuIGNvbnZlcnRlci5jb252ZXJ0KHNvdXJjZSwgdGFyZ2V0KTtcbiAgICAgIH0sXG4gICAgICB1bmRlZmluZWQgYXMgVFxuICAgICk7XG4gIH1cbn1cbiJdfQ==