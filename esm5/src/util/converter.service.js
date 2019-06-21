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
            return map((/**
             * @param {?} model
             * @return {?}
             */
            function (model) { return _this.convertSource(model, injectionToken); }));
        }
        else {
            return (/**
             * @param {?} observable
             * @return {?}
             */
            function (observable) { return (/** @type {?} */ (observable)); });
        }
    };
    /**
     * Pipeable operator to apply converter logic in a observable stream to collection of items
     */
    /**
     * Pipeable operator to apply converter logic in a observable stream to collection of items
     * @template S, T
     * @param {?} injectionToken
     * @return {?}
     */
    ConverterService.prototype.pipeableMany = /**
     * Pipeable operator to apply converter logic in a observable stream to collection of items
     * @template S, T
     * @param {?} injectionToken
     * @return {?}
     */
    function (injectionToken) {
        var _this = this;
        if (this.hasConverters(injectionToken)) {
            return map((/**
             * @param {?} model
             * @return {?}
             */
            function (model) { return _this.convertMany(model, injectionToken); }));
        }
        else {
            return (/**
             * @param {?} observable
             * @return {?}
             */
            function (observable) { return (/** @type {?} */ (observable)); });
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
     * Apply converter logic specified by injection token to a collection
     */
    /**
     * Apply converter logic specified by injection token to a collection
     * @template S, T
     * @param {?} sources
     * @param {?} injectionToken
     * @return {?}
     */
    ConverterService.prototype.convertMany = /**
     * Apply converter logic specified by injection token to a collection
     * @template S, T
     * @param {?} sources
     * @param {?} injectionToken
     * @return {?}
     */
    function (sources, injectionToken) {
        var _this = this;
        if (this.hasConverters(injectionToken) && Array.isArray(sources)) {
            return sources.map((/**
             * @param {?} source
             * @return {?}
             */
            function (source) { return _this.convertSource(source, injectionToken); }));
        }
        else {
            return (/** @type {?} */ (sources));
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
        return this.getConverters(injectionToken).reduce((/**
         * @param {?} target
         * @param {?} converter
         * @return {?}
         */
        function (target, converter) {
            return converter.convert(source, target);
        }), (/** @type {?} */ (undefined)));
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
    /** @nocollapse */ ConverterService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ConverterService_Factory() { return new ConverterService(i0.ɵɵinject(i0.INJECTOR)); }, token: ConverterService, providedIn: "root" });
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
     * @protected
     */
    ConverterService.prototype.injector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udmVydGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXRpbC9jb252ZXJ0ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBa0IsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXJFLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7Ozs7O0FBVXJDLCtCQVNDOzs7Ozs7Ozs7O0lBREMsNERBQWtDOztBQUdwQztJQUlFLDBCQUFzQixRQUFrQjtRQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBRWhDLGVBQVUsR0FHZCxJQUFJLEdBQUcsRUFBRSxDQUFDO0lBTDZCLENBQUM7Ozs7Ozs7SUFPcEMsd0NBQWE7Ozs7OztJQUFyQixVQUNFLGNBQStDO1FBRS9DLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsRUFBRTs7Z0JBQ2xDLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FDbEMsY0FBYyxFQUNkLEVBQUUsQ0FDSDtZQUNELElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFO2dCQUM5QixPQUFPLENBQUMsSUFBSSxDQUNWLGdFQUFnRSxFQUNoRSxjQUFjLENBQUMsUUFBUSxFQUFFLENBQzFCLENBQUM7YUFDSDtZQUNELElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxVQUFVLENBQUMsQ0FBQztTQUNqRDtRQUVELE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVEOztPQUVHOzs7Ozs7O0lBQ0gsd0NBQWE7Ozs7OztJQUFiLFVBQ0UsY0FBK0M7O1lBRXpDLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQztRQUNyRCxPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVEOztPQUVHOzs7Ozs7O0lBQ0gsbUNBQVE7Ozs7OztJQUFSLFVBQ0UsY0FBK0M7UUFEakQsaUJBUUM7UUFMQyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLEVBQUU7WUFDdEMsT0FBTyxHQUFHOzs7O1lBQUMsVUFBQyxLQUFRLElBQUssT0FBQSxLQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxjQUFjLENBQUMsRUFBekMsQ0FBeUMsRUFBQyxDQUFDO1NBQ3JFO2FBQU07WUFDTDs7OztZQUFPLFVBQUMsVUFBMkIsV0FBSyxtQkFBQSxVQUFVLEVBQWlCLEdBQUEsRUFBQztTQUNyRTtJQUNILENBQUM7SUFFRDs7T0FFRzs7Ozs7OztJQUNILHVDQUFZOzs7Ozs7SUFBWixVQUNFLGNBQStDO1FBRGpELGlCQVFDO1FBTEMsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxFQUFFO1lBQ3RDLE9BQU8sR0FBRzs7OztZQUFDLFVBQUMsS0FBVSxJQUFLLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsY0FBYyxDQUFDLEVBQXZDLENBQXVDLEVBQUMsQ0FBQztTQUNyRTthQUFNO1lBQ0w7Ozs7WUFBTyxVQUFDLFVBQTZCLFdBQUssbUJBQUEsVUFBVSxFQUFtQixHQUFBLEVBQUM7U0FDekU7SUFDSCxDQUFDO0lBRUQ7O09BRUc7Ozs7Ozs7O0lBQ0gsa0NBQU87Ozs7Ozs7SUFBUCxVQUFjLE1BQVMsRUFBRSxjQUErQztRQUN0RSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLEVBQUU7WUFDdEMsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxjQUFjLENBQUMsQ0FBQztTQUNuRDthQUFNO1lBQ0wsT0FBTyxtQkFBQSxNQUFNLEVBQU8sQ0FBQztTQUN0QjtJQUNILENBQUM7SUFFRDs7T0FFRzs7Ozs7Ozs7SUFDSCxzQ0FBVzs7Ozs7OztJQUFYLFVBQ0UsT0FBWSxFQUNaLGNBQStDO1FBRmpELGlCQVNDO1FBTEMsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDaEUsT0FBTyxPQUFPLENBQUMsR0FBRzs7OztZQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsS0FBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsY0FBYyxDQUFDLEVBQTFDLENBQTBDLEVBQUMsQ0FBQztTQUMxRTthQUFNO1lBQ0wsT0FBTyxtQkFBQSxPQUFPLEVBQVMsQ0FBQztTQUN6QjtJQUNILENBQUM7Ozs7Ozs7O0lBRU8sd0NBQWE7Ozs7Ozs7SUFBckIsVUFDRSxNQUFTLEVBQ1QsY0FBK0M7UUFFL0MsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDLE1BQU07Ozs7O1FBQzlDLFVBQUMsTUFBTSxFQUFFLFNBQVM7WUFDaEIsT0FBTyxTQUFTLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUMzQyxDQUFDLEdBQ0QsbUJBQUEsU0FBUyxFQUFLLENBQ2YsQ0FBQztJQUNKLENBQUM7O2dCQXRHRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQXpCb0MsUUFBUTs7OzJCQUE3QztDQThIQyxBQXZHRCxJQXVHQztTQXBHWSxnQkFBZ0I7Ozs7OztJQUczQixzQ0FHYzs7Ozs7SUFMRixvQ0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3Rpb25Ub2tlbiwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIE9wZXJhdG9yRnVuY3Rpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuLyoqXG4gKiBDb252ZXJ0ZXIgaXMgdXNlZCB0byBjb252ZXJ0IHNvdXJjZSBkYXRhIG1vZGVsIHRvIHRhcmdldCBkYXRhIG1vZGVsLlxuICogQnkgY29udmVudGlvbiwgd2UgZGlzdGluZ3Vpc2ggdHdvIGZsb3dzOlxuICogICAtICpOb3JtYWxpemUqIGlzIHRoZSBjb252ZXJzaW9uIGZyb20gYmFja2VuZCBtb2RlbHMgdG8gVUkgbW9kZWxzXG4gKiAgIC0gKlNlcmlhbGl6ZSogaXMgdGhlIGNvbnZlcnNpb24gb2YgVUkgbW9kZWxzIHRvIGJhY2tlbmQgbW9kZWxzIChpbiBjYXNlIG9mIHN1Ym1pdHRpbmcgZGF0YSB0byB0aGUgYmFja2VuZCkuXG4gKlxuICogQ29udmVydGVycyBjYW4gYmUgc3RhY2tlZCB0b2dldGhlciB0byB0byBhcHBseSBkZWNvdXBsZWQgY3VzdG9taXphdGlvbnNcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBDb252ZXJ0ZXI8UywgVD4ge1xuICAvKipcbiAgICogQ29udmVydCBjb252ZXJ0cyBzb3VyY2UgbW9kZWwgdG8gdGFyZ2V0IG1vZGVsLiBDYW4gdXNlIG9wdGlvbmFsIHRhcmdldCBwYXJhbWV0ZXIsXG4gICAqIHVzZWQgaW4gY2FzZSBvZiBzdGFja2luZyBtdWx0aXBsZSBjb252ZXJ0ZXJzIChmb3IgZXhhbXBsZSwgdG8gaW1wbGVtZW50IHBvcHVsYXRvciBwYXR0ZXJuKS5cbiAgICpcbiAgICogQHBhcmFtIHNvdXJjZSBTb3VyY2UgZGF0YSBtb2RlbFxuICAgKiBAcGFyYW0gdGFyZ2V0IE9wdGlvbmFsLCBwYXJ0aWFsbHkgY29udmVydGVkIHRhcmdldCBtb2RlbFxuICAgKi9cbiAgY29udmVydChzb3VyY2U6IFMsIHRhcmdldD86IFQpOiBUO1xufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ29udmVydGVyU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBpbmplY3RvcjogSW5qZWN0b3IpIHt9XG5cbiAgcHJpdmF0ZSBjb252ZXJ0ZXJzOiBNYXA8XG4gICAgSW5qZWN0aW9uVG9rZW48Q29udmVydGVyPGFueSwgYW55Pj4sXG4gICAgQ29udmVydGVyPGFueSwgYW55PltdXG4gID4gPSBuZXcgTWFwKCk7XG5cbiAgcHJpdmF0ZSBnZXRDb252ZXJ0ZXJzPFMsIFQ+KFxuICAgIGluamVjdGlvblRva2VuOiBJbmplY3Rpb25Ub2tlbjxDb252ZXJ0ZXI8UywgVD4+XG4gICk6IENvbnZlcnRlcjxTLCBUPltdIHtcbiAgICBpZiAoIXRoaXMuY29udmVydGVycy5oYXMoaW5qZWN0aW9uVG9rZW4pKSB7XG4gICAgICBjb25zdCBjb252ZXJ0ZXJzID0gdGhpcy5pbmplY3Rvci5nZXQ8Q29udmVydGVyPFMsIFQ+W10+KFxuICAgICAgICBpbmplY3Rpb25Ub2tlbixcbiAgICAgICAgW11cbiAgICAgICk7XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkoY29udmVydGVycykpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICdDb252ZXJ0ZXIgbXVzdCBiZSBtdWx0aS1wcm92aWRlZCwgcGxlYXNlIHVzZSBcIm11bHRpOiB0cnVlXCIgZm9yJyxcbiAgICAgICAgICBpbmplY3Rpb25Ub2tlbi50b1N0cmluZygpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICB0aGlzLmNvbnZlcnRlcnMuc2V0KGluamVjdGlvblRva2VuLCBjb252ZXJ0ZXJzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5jb252ZXJ0ZXJzLmdldChpbmplY3Rpb25Ub2tlbik7XG4gIH1cblxuICAvKipcbiAgICogV2lsbCByZXR1cm4gdHJ1ZSBpZiBjb252ZXJ0ZXJzIGZvciBzcGVjaWZpZWQgdG9rZW4gd2VyZSBwcm92aWRlZFxuICAgKi9cbiAgaGFzQ29udmVydGVyczxTLCBUPihcbiAgICBpbmplY3Rpb25Ub2tlbjogSW5qZWN0aW9uVG9rZW48Q29udmVydGVyPFMsIFQ+PlxuICApOiBib29sZWFuIHtcbiAgICBjb25zdCBjb252ZXJ0ZXJzID0gdGhpcy5nZXRDb252ZXJ0ZXJzKGluamVjdGlvblRva2VuKTtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheShjb252ZXJ0ZXJzKSAmJiBjb252ZXJ0ZXJzLmxlbmd0aCA+IDA7XG4gIH1cblxuICAvKipcbiAgICogUGlwZWFibGUgb3BlcmF0b3IgdG8gYXBwbHkgY29udmVydGVyIGxvZ2ljIGluIGEgb2JzZXJ2YWJsZSBzdHJlYW1cbiAgICovXG4gIHBpcGVhYmxlPFMsIFQ+KFxuICAgIGluamVjdGlvblRva2VuOiBJbmplY3Rpb25Ub2tlbjxDb252ZXJ0ZXI8UywgVD4+XG4gICk6IE9wZXJhdG9yRnVuY3Rpb248UywgVD4ge1xuICAgIGlmICh0aGlzLmhhc0NvbnZlcnRlcnMoaW5qZWN0aW9uVG9rZW4pKSB7XG4gICAgICByZXR1cm4gbWFwKChtb2RlbDogUykgPT4gdGhpcy5jb252ZXJ0U291cmNlKG1vZGVsLCBpbmplY3Rpb25Ub2tlbikpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKG9ic2VydmFibGU6IE9ic2VydmFibGU8YW55PikgPT4gb2JzZXJ2YWJsZSBhcyBPYnNlcnZhYmxlPFQ+O1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBQaXBlYWJsZSBvcGVyYXRvciB0byBhcHBseSBjb252ZXJ0ZXIgbG9naWMgaW4gYSBvYnNlcnZhYmxlIHN0cmVhbSB0byBjb2xsZWN0aW9uIG9mIGl0ZW1zXG4gICAqL1xuICBwaXBlYWJsZU1hbnk8UywgVD4oXG4gICAgaW5qZWN0aW9uVG9rZW46IEluamVjdGlvblRva2VuPENvbnZlcnRlcjxTLCBUPj5cbiAgKTogT3BlcmF0b3JGdW5jdGlvbjxTW10sIFRbXT4ge1xuICAgIGlmICh0aGlzLmhhc0NvbnZlcnRlcnMoaW5qZWN0aW9uVG9rZW4pKSB7XG4gICAgICByZXR1cm4gbWFwKChtb2RlbDogU1tdKSA9PiB0aGlzLmNvbnZlcnRNYW55KG1vZGVsLCBpbmplY3Rpb25Ub2tlbikpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKG9ic2VydmFibGU6IE9ic2VydmFibGU8YW55W10+KSA9PiBvYnNlcnZhYmxlIGFzIE9ic2VydmFibGU8VFtdPjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQXBwbHkgY29udmVydGVyIGxvZ2ljIHNwZWNpZmllZCBieSBpbmplY3Rpb24gdG9rZW4gdG8gc291cmNlIGRhdGFcbiAgICovXG4gIGNvbnZlcnQ8UywgVD4oc291cmNlOiBTLCBpbmplY3Rpb25Ub2tlbjogSW5qZWN0aW9uVG9rZW48Q29udmVydGVyPFMsIFQ+Pik6IFQge1xuICAgIGlmICh0aGlzLmhhc0NvbnZlcnRlcnMoaW5qZWN0aW9uVG9rZW4pKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb252ZXJ0U291cmNlKHNvdXJjZSwgaW5qZWN0aW9uVG9rZW4pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gc291cmNlIGFzIGFueTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQXBwbHkgY29udmVydGVyIGxvZ2ljIHNwZWNpZmllZCBieSBpbmplY3Rpb24gdG9rZW4gdG8gYSBjb2xsZWN0aW9uXG4gICAqL1xuICBjb252ZXJ0TWFueTxTLCBUPihcbiAgICBzb3VyY2VzOiBTW10sXG4gICAgaW5qZWN0aW9uVG9rZW46IEluamVjdGlvblRva2VuPENvbnZlcnRlcjxTLCBUPj5cbiAgKTogVFtdIHtcbiAgICBpZiAodGhpcy5oYXNDb252ZXJ0ZXJzKGluamVjdGlvblRva2VuKSAmJiBBcnJheS5pc0FycmF5KHNvdXJjZXMpKSB7XG4gICAgICByZXR1cm4gc291cmNlcy5tYXAoc291cmNlID0+IHRoaXMuY29udmVydFNvdXJjZShzb3VyY2UsIGluamVjdGlvblRva2VuKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBzb3VyY2VzIGFzIGFueVtdO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY29udmVydFNvdXJjZTxTLCBUPihcbiAgICBzb3VyY2U6IFMsXG4gICAgaW5qZWN0aW9uVG9rZW46IEluamVjdGlvblRva2VuPENvbnZlcnRlcjxTLCBUPj5cbiAgKTogVCB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q29udmVydGVycyhpbmplY3Rpb25Ub2tlbikucmVkdWNlKFxuICAgICAgKHRhcmdldCwgY29udmVydGVyKSA9PiB7XG4gICAgICAgIHJldHVybiBjb252ZXJ0ZXIuY29udmVydChzb3VyY2UsIHRhcmdldCk7XG4gICAgICB9LFxuICAgICAgdW5kZWZpbmVkIGFzIFRcbiAgICApO1xuICB9XG59XG4iXX0=