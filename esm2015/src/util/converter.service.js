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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udmVydGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXRpbC9jb252ZXJ0ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBa0IsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXJFLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7Ozs7O0FBVXJDLCtCQVNDOzs7Ozs7Ozs7O0lBREMsNERBQWtDOztBQU1wQyxNQUFNLE9BQU8sZ0JBQWdCOzs7O0lBQzNCLFlBQW9CLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFFOUIsZUFBVSxHQUdkLElBQUksR0FBRyxFQUFFLENBQUM7SUFMMkIsQ0FBQzs7Ozs7OztJQU9sQyxhQUFhLENBQ25CLGNBQStDO1FBRS9DLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsRUFBRTs7a0JBQ2xDLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FDbEMsY0FBYyxFQUNkLEVBQUUsQ0FDSDtZQUNELElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFO2dCQUM5QixPQUFPLENBQUMsSUFBSSxDQUNWLGdFQUFnRSxFQUNoRSxjQUFjLENBQUMsUUFBUSxFQUFFLENBQzFCLENBQUM7YUFDSDtZQUNELElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxVQUFVLENBQUMsQ0FBQztTQUNqRDtRQUVELE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7Ozs7OztJQUtELGFBQWEsQ0FDWCxjQUErQzs7Y0FFekMsVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDO1FBQ3JELE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUM1RCxDQUFDOzs7Ozs7O0lBS0QsUUFBUSxDQUNOLGNBQStDO1FBRS9DLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsRUFBRTtZQUN0QyxPQUFPLEdBQUcsQ0FBQyxDQUFDLEtBQVUsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsY0FBYyxDQUFDLENBQUMsQ0FBQztTQUN2RTthQUFNO1lBQ0wsT0FBTyxDQUFDLFVBQTJCLEVBQUUsRUFBRSxDQUFDLG1CQUFBLFVBQVUsRUFBaUIsQ0FBQztTQUNyRTtJQUNILENBQUM7Ozs7Ozs7O0lBS0QsT0FBTyxDQUFPLE1BQVMsRUFBRSxjQUErQztRQUN0RSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLEVBQUU7WUFDdEMsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxjQUFjLENBQUMsQ0FBQztTQUNuRDthQUFNO1lBQ0wsT0FBTyxtQkFBQSxNQUFNLEVBQU8sQ0FBQztTQUN0QjtJQUNILENBQUM7Ozs7Ozs7O0lBRU8sYUFBYSxDQUNuQixNQUFTLEVBQ1QsY0FBK0M7UUFFL0MsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDLE1BQU0sQ0FDOUMsQ0FBQyxNQUFNLEVBQUUsU0FBUyxFQUFFLEVBQUU7WUFDcEIsT0FBTyxTQUFTLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUMzQyxDQUFDLEVBQ0QsbUJBQUEsU0FBUyxFQUFLLENBQ2YsQ0FBQztJQUNKLENBQUM7OztZQTNFRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUF6Qm9DLFFBQVE7Ozs7Ozs7O0lBNkIzQyxzQ0FHYzs7Ozs7SUFMRixvQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3Rpb25Ub2tlbiwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIE9wZXJhdG9yRnVuY3Rpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuLyoqXG4gKiBDb252ZXJ0ZXIgaXMgdXNlZCB0byBjb252ZXJ0IHNvdXJjZSBkYXRhIG1vZGVsIHRvIHRhcmdldCBkYXRhIG1vZGVsLlxuICogQnkgY29udmVudGlvbiwgd2UgZGlzdGluZ3Vpc2ggdHdvIGZsb3dzOlxuICogICAtICpOb3JtYWxpemUqIGlzIHRoZSBjb252ZXJzaW9uIGZyb20gYmFja2VuZCBtb2RlbHMgdG8gVUkgbW9kZWxzXG4gKiAgIC0gKlNlcmlhbGl6ZSogaXMgdGhlIGNvbnZlcnNpb24gb2YgVUkgbW9kZWxzIHRvIGJhY2tlbmQgbW9kZWxzIChpbiBjYXNlIG9mIHN1Ym1pdHRpbmcgZGF0YSB0byB0aGUgYmFja2VuZCkuXG4gKlxuICogQ29udmVydGVycyBjYW4gYmUgc3RhY2tlZCB0b2dldGhlciB0byB0byBhcHBseSBkZWNvdXBsZWQgY3VzdG9taXphdGlvbnNcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBDb252ZXJ0ZXI8UywgVD4ge1xuICAvKipcbiAgICogQ29udmVydCBjb252ZXJ0cyBzb3VyY2UgbW9kZWwgdG8gdGFyZ2V0IG1vZGVsLiBDYW4gdXNlIG9wdGlvbmFsIHRhcmdldCBwYXJhbWV0ZXIsXG4gICAqIHVzZWQgaW4gY2FzZSBvZiBzdGFja2luZyBtdWx0aXBsZSBjb252ZXJ0ZXJzIChmb3IgZXhhbXBsZSwgdG8gaW1wbGVtZW50IHBvcHVsYXRvciBwYXR0ZXJuKS5cbiAgICpcbiAgICogQHBhcmFtIHNvdXJjZSBTb3VyY2UgZGF0YSBtb2RlbFxuICAgKiBAcGFyYW0gdGFyZ2V0IE9wdGlvbmFsLCBwYXJ0aWFsbHkgY29udmVydGVkIHRhcmdldCBtb2RlbFxuICAgKi9cbiAgY29udmVydChzb3VyY2U6IFMsIHRhcmdldD86IFQpOiBUO1xufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ29udmVydGVyU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yKSB7fVxuXG4gIHByaXZhdGUgY29udmVydGVyczogTWFwPFxuICAgIEluamVjdGlvblRva2VuPENvbnZlcnRlcjxhbnksIGFueT4+LFxuICAgIENvbnZlcnRlcjxhbnksIGFueT5bXVxuICA+ID0gbmV3IE1hcCgpO1xuXG4gIHByaXZhdGUgZ2V0Q29udmVydGVyczxTLCBUPihcbiAgICBpbmplY3Rpb25Ub2tlbjogSW5qZWN0aW9uVG9rZW48Q29udmVydGVyPFMsIFQ+PlxuICApOiBDb252ZXJ0ZXI8UywgVD5bXSB7XG4gICAgaWYgKCF0aGlzLmNvbnZlcnRlcnMuaGFzKGluamVjdGlvblRva2VuKSkge1xuICAgICAgY29uc3QgY29udmVydGVycyA9IHRoaXMuaW5qZWN0b3IuZ2V0PENvbnZlcnRlcjxTLCBUPltdPihcbiAgICAgICAgaW5qZWN0aW9uVG9rZW4sXG4gICAgICAgIFtdXG4gICAgICApO1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGNvbnZlcnRlcnMpKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAnQ29udmVydGVyIG11c3QgYmUgbXVsdGktcHJvdmlkZWQsIHBsZWFzZSB1c2UgXCJtdWx0aTogdHJ1ZVwiIGZvcicsXG4gICAgICAgICAgaW5qZWN0aW9uVG9rZW4udG9TdHJpbmcoKVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgdGhpcy5jb252ZXJ0ZXJzLnNldChpbmplY3Rpb25Ub2tlbiwgY29udmVydGVycyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuY29udmVydGVycy5nZXQoaW5qZWN0aW9uVG9rZW4pO1xuICB9XG5cbiAgLyoqXG4gICAqIFdpbGwgcmV0dXJuIHRydWUgaWYgY29udmVydGVycyBmb3Igc3BlY2lmaWVkIHRva2VuIHdlcmUgcHJvdmlkZWRcbiAgICovXG4gIGhhc0NvbnZlcnRlcnM8UywgVD4oXG4gICAgaW5qZWN0aW9uVG9rZW46IEluamVjdGlvblRva2VuPENvbnZlcnRlcjxTLCBUPj5cbiAgKTogYm9vbGVhbiB7XG4gICAgY29uc3QgY29udmVydGVycyA9IHRoaXMuZ2V0Q29udmVydGVycyhpbmplY3Rpb25Ub2tlbik7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoY29udmVydGVycykgJiYgY29udmVydGVycy5sZW5ndGggPiAwO1xuICB9XG5cbiAgLyoqXG4gICAqIFBpcGVhYmxlIG9wZXJhdG9yIHRvIGFwcGx5IGNvbnZlcnRlciBsb2dpYyBpbiBhIG9ic2VydmFibGUgc3RyZWFtXG4gICAqL1xuICBwaXBlYWJsZTxTLCBUPihcbiAgICBpbmplY3Rpb25Ub2tlbjogSW5qZWN0aW9uVG9rZW48Q29udmVydGVyPFMsIFQ+PlxuICApOiBPcGVyYXRvckZ1bmN0aW9uPFMsIFQ+IHtcbiAgICBpZiAodGhpcy5oYXNDb252ZXJ0ZXJzKGluamVjdGlvblRva2VuKSkge1xuICAgICAgcmV0dXJuIG1hcCgobW9kZWw6IGFueSkgPT4gdGhpcy5jb252ZXJ0U291cmNlKG1vZGVsLCBpbmplY3Rpb25Ub2tlbikpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKG9ic2VydmFibGU6IE9ic2VydmFibGU8YW55PikgPT4gb2JzZXJ2YWJsZSBhcyBPYnNlcnZhYmxlPFQ+O1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBcHBseSBjb252ZXJ0ZXIgbG9naWMgc3BlY2lmaWVkIGJ5IGluamVjdGlvbiB0b2tlbiB0byBzb3VyY2UgZGF0YVxuICAgKi9cbiAgY29udmVydDxTLCBUPihzb3VyY2U6IFMsIGluamVjdGlvblRva2VuOiBJbmplY3Rpb25Ub2tlbjxDb252ZXJ0ZXI8UywgVD4+KTogVCB7XG4gICAgaWYgKHRoaXMuaGFzQ29udmVydGVycyhpbmplY3Rpb25Ub2tlbikpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbnZlcnRTb3VyY2Uoc291cmNlLCBpbmplY3Rpb25Ub2tlbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBzb3VyY2UgYXMgYW55O1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY29udmVydFNvdXJjZTxTLCBUPihcbiAgICBzb3VyY2U6IFMsXG4gICAgaW5qZWN0aW9uVG9rZW46IEluamVjdGlvblRva2VuPENvbnZlcnRlcjxTLCBUPj5cbiAgKTogVCB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q29udmVydGVycyhpbmplY3Rpb25Ub2tlbikucmVkdWNlKFxuICAgICAgKHRhcmdldCwgY29udmVydGVyKSA9PiB7XG4gICAgICAgIHJldHVybiBjb252ZXJ0ZXIuY29udmVydChzb3VyY2UsIHRhcmdldCk7XG4gICAgICB9LFxuICAgICAgdW5kZWZpbmVkIGFzIFRcbiAgICApO1xuICB9XG59XG4iXX0=