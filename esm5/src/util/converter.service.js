import { __decorate } from "tslib";
import { Injectable, InjectionToken, Injector } from '@angular/core';
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
var ConverterService = /** @class */ (function () {
    function ConverterService(injector) {
        this.injector = injector;
        this.converters = new Map();
    }
    ConverterService.prototype.getConverters = function (injectionToken) {
        if (!this.converters.has(injectionToken)) {
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
    ConverterService.prototype.hasConverters = function (injectionToken) {
        var converters = this.getConverters(injectionToken);
        return Array.isArray(converters) && converters.length > 0;
    };
    /**
     * Pipeable operator to apply converter logic in a observable stream
     */
    ConverterService.prototype.pipeable = function (injectionToken) {
        var _this = this;
        if (this.hasConverters(injectionToken)) {
            return map(function (model) { return _this.convertSource(model, injectionToken); });
        }
        else {
            return function (observable) { return observable; };
        }
    };
    /**
     * Pipeable operator to apply converter logic in a observable stream to collection of items
     */
    ConverterService.prototype.pipeableMany = function (injectionToken) {
        var _this = this;
        if (this.hasConverters(injectionToken)) {
            return map(function (model) { return _this.convertMany(model, injectionToken); });
        }
        else {
            return function (observable) { return observable; };
        }
    };
    /**
     * Apply converter logic specified by injection token to source data
     */
    ConverterService.prototype.convert = function (source, injectionToken) {
        if (this.hasConverters(injectionToken)) {
            return this.convertSource(source, injectionToken);
        }
        else {
            return source;
        }
    };
    /**
     * Apply converter logic specified by injection token to a collection
     */
    ConverterService.prototype.convertMany = function (sources, injectionToken) {
        var _this = this;
        if (this.hasConverters(injectionToken) && Array.isArray(sources)) {
            return sources.map(function (source) { return _this.convertSource(source, injectionToken); });
        }
        else {
            return sources;
        }
    };
    ConverterService.prototype.convertSource = function (source, injectionToken) {
        return this.getConverters(injectionToken).reduce(function (target, converter) {
            return converter.convert(source, target);
        }, undefined);
    };
    ConverterService.ctorParameters = function () { return [
        { type: Injector }
    ]; };
    ConverterService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ConverterService_Factory() { return new ConverterService(i0.ɵɵinject(i0.INJECTOR)); }, token: ConverterService, providedIn: "root" });
    ConverterService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], ConverterService);
    return ConverterService;
}());
export { ConverterService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udmVydGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXRpbC9jb252ZXJ0ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXJFLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUF3QnJDO0lBQ0UsMEJBQXNCLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFFaEMsZUFBVSxHQUdkLElBQUksR0FBRyxFQUFFLENBQUM7SUFMNkIsQ0FBQztJQU9wQyx3Q0FBYSxHQUFyQixVQUNFLGNBQStDO1FBRS9DLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsRUFBRTtZQUN4QyxJQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FDbEMsY0FBYyxFQUNkLEVBQUUsQ0FDSCxDQUFDO1lBQ0YsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEVBQUU7Z0JBQzlCLE9BQU8sQ0FBQyxJQUFJLENBQ1YsZ0VBQWdFLEVBQ2hFLGNBQWMsQ0FBQyxRQUFRLEVBQUUsQ0FDMUIsQ0FBQzthQUNIO1lBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1NBQ2pEO1FBRUQsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQ7O09BRUc7SUFDSCx3Q0FBYSxHQUFiLFVBQ0UsY0FBK0M7UUFFL0MsSUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUN0RCxPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVEOztPQUVHO0lBQ0gsbUNBQVEsR0FBUixVQUNFLGNBQStDO1FBRGpELGlCQVFDO1FBTEMsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxFQUFFO1lBQ3RDLE9BQU8sR0FBRyxDQUFDLFVBQUMsS0FBUSxJQUFLLE9BQUEsS0FBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsY0FBYyxDQUFDLEVBQXpDLENBQXlDLENBQUMsQ0FBQztTQUNyRTthQUFNO1lBQ0wsT0FBTyxVQUFDLFVBQTJCLElBQUssT0FBQSxVQUEyQixFQUEzQixDQUEyQixDQUFDO1NBQ3JFO0lBQ0gsQ0FBQztJQUVEOztPQUVHO0lBQ0gsdUNBQVksR0FBWixVQUNFLGNBQStDO1FBRGpELGlCQVFDO1FBTEMsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxFQUFFO1lBQ3RDLE9BQU8sR0FBRyxDQUFDLFVBQUMsS0FBVSxJQUFLLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsY0FBYyxDQUFDLEVBQXZDLENBQXVDLENBQUMsQ0FBQztTQUNyRTthQUFNO1lBQ0wsT0FBTyxVQUFDLFVBQTZCLElBQUssT0FBQSxVQUE2QixFQUE3QixDQUE2QixDQUFDO1NBQ3pFO0lBQ0gsQ0FBQztJQUVEOztPQUVHO0lBQ0gsa0NBQU8sR0FBUCxVQUFjLE1BQVMsRUFBRSxjQUErQztRQUN0RSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLEVBQUU7WUFDdEMsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxjQUFjLENBQUMsQ0FBQztTQUNuRDthQUFNO1lBQ0wsT0FBTyxNQUFhLENBQUM7U0FDdEI7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxzQ0FBVyxHQUFYLFVBQ0UsT0FBWSxFQUNaLGNBQStDO1FBRmpELGlCQVNDO1FBTEMsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDaEUsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsS0FBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsY0FBYyxDQUFDLEVBQTFDLENBQTBDLENBQUMsQ0FBQztTQUMxRTthQUFNO1lBQ0wsT0FBTyxPQUFnQixDQUFDO1NBQ3pCO0lBQ0gsQ0FBQztJQUVPLHdDQUFhLEdBQXJCLFVBQ0UsTUFBUyxFQUNULGNBQStDO1FBRS9DLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxNQUFNLENBQzlDLFVBQUMsTUFBTSxFQUFFLFNBQVM7WUFDaEIsT0FBTyxTQUFTLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUMzQyxDQUFDLEVBQ0QsU0FBYyxDQUNmLENBQUM7SUFDSixDQUFDOztnQkFsRytCLFFBQVE7OztJQUQ3QixnQkFBZ0I7UUFINUIsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztPQUNXLGdCQUFnQixDQW9HNUI7MkJBOUhEO0NBOEhDLEFBcEdELElBb0dDO1NBcEdZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdGlvblRva2VuLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgT3BlcmF0b3JGdW5jdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG4vKipcbiAqIENvbnZlcnRlciBpcyB1c2VkIHRvIGNvbnZlcnQgc291cmNlIGRhdGEgbW9kZWwgdG8gdGFyZ2V0IGRhdGEgbW9kZWwuXG4gKiBCeSBjb252ZW50aW9uLCB3ZSBkaXN0aW5ndWlzaCB0d28gZmxvd3M6XG4gKiAgIC0gKk5vcm1hbGl6ZSogaXMgdGhlIGNvbnZlcnNpb24gZnJvbSBiYWNrZW5kIG1vZGVscyB0byBVSSBtb2RlbHNcbiAqICAgLSAqU2VyaWFsaXplKiBpcyB0aGUgY29udmVyc2lvbiBvZiBVSSBtb2RlbHMgdG8gYmFja2VuZCBtb2RlbHMgKGluIGNhc2Ugb2Ygc3VibWl0dGluZyBkYXRhIHRvIHRoZSBiYWNrZW5kKS5cbiAqXG4gKiBDb252ZXJ0ZXJzIGNhbiBiZSBzdGFja2VkIHRvZ2V0aGVyIHRvIHRvIGFwcGx5IGRlY291cGxlZCBjdXN0b21pemF0aW9uc1xuICovXG5leHBvcnQgaW50ZXJmYWNlIENvbnZlcnRlcjxTLCBUPiB7XG4gIC8qKlxuICAgKiBDb252ZXJ0IGNvbnZlcnRzIHNvdXJjZSBtb2RlbCB0byB0YXJnZXQgbW9kZWwuIENhbiB1c2Ugb3B0aW9uYWwgdGFyZ2V0IHBhcmFtZXRlcixcbiAgICogdXNlZCBpbiBjYXNlIG9mIHN0YWNraW5nIG11bHRpcGxlIGNvbnZlcnRlcnMgKGZvciBleGFtcGxlLCB0byBpbXBsZW1lbnQgcG9wdWxhdG9yIHBhdHRlcm4pLlxuICAgKlxuICAgKiBAcGFyYW0gc291cmNlIFNvdXJjZSBkYXRhIG1vZGVsXG4gICAqIEBwYXJhbSB0YXJnZXQgT3B0aW9uYWwsIHBhcnRpYWxseSBjb252ZXJ0ZWQgdGFyZ2V0IG1vZGVsXG4gICAqL1xuICBjb252ZXJ0KHNvdXJjZTogUywgdGFyZ2V0PzogVCk6IFQ7XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDb252ZXJ0ZXJTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGluamVjdG9yOiBJbmplY3Rvcikge31cblxuICBwcml2YXRlIGNvbnZlcnRlcnM6IE1hcDxcbiAgICBJbmplY3Rpb25Ub2tlbjxDb252ZXJ0ZXI8YW55LCBhbnk+PixcbiAgICBDb252ZXJ0ZXI8YW55LCBhbnk+W11cbiAgPiA9IG5ldyBNYXAoKTtcblxuICBwcml2YXRlIGdldENvbnZlcnRlcnM8UywgVD4oXG4gICAgaW5qZWN0aW9uVG9rZW46IEluamVjdGlvblRva2VuPENvbnZlcnRlcjxTLCBUPj5cbiAgKTogQ29udmVydGVyPFMsIFQ+W10ge1xuICAgIGlmICghdGhpcy5jb252ZXJ0ZXJzLmhhcyhpbmplY3Rpb25Ub2tlbikpIHtcbiAgICAgIGNvbnN0IGNvbnZlcnRlcnMgPSB0aGlzLmluamVjdG9yLmdldDxDb252ZXJ0ZXI8UywgVD5bXT4oXG4gICAgICAgIGluamVjdGlvblRva2VuLFxuICAgICAgICBbXVxuICAgICAgKTtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShjb252ZXJ0ZXJzKSkge1xuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgJ0NvbnZlcnRlciBtdXN0IGJlIG11bHRpLXByb3ZpZGVkLCBwbGVhc2UgdXNlIFwibXVsdGk6IHRydWVcIiBmb3InLFxuICAgICAgICAgIGluamVjdGlvblRva2VuLnRvU3RyaW5nKClcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuY29udmVydGVycy5zZXQoaW5qZWN0aW9uVG9rZW4sIGNvbnZlcnRlcnMpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmNvbnZlcnRlcnMuZ2V0KGluamVjdGlvblRva2VuKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaWxsIHJldHVybiB0cnVlIGlmIGNvbnZlcnRlcnMgZm9yIHNwZWNpZmllZCB0b2tlbiB3ZXJlIHByb3ZpZGVkXG4gICAqL1xuICBoYXNDb252ZXJ0ZXJzPFMsIFQ+KFxuICAgIGluamVjdGlvblRva2VuOiBJbmplY3Rpb25Ub2tlbjxDb252ZXJ0ZXI8UywgVD4+XG4gICk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGNvbnZlcnRlcnMgPSB0aGlzLmdldENvbnZlcnRlcnMoaW5qZWN0aW9uVG9rZW4pO1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KGNvbnZlcnRlcnMpICYmIGNvbnZlcnRlcnMubGVuZ3RoID4gMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBQaXBlYWJsZSBvcGVyYXRvciB0byBhcHBseSBjb252ZXJ0ZXIgbG9naWMgaW4gYSBvYnNlcnZhYmxlIHN0cmVhbVxuICAgKi9cbiAgcGlwZWFibGU8UywgVD4oXG4gICAgaW5qZWN0aW9uVG9rZW46IEluamVjdGlvblRva2VuPENvbnZlcnRlcjxTLCBUPj5cbiAgKTogT3BlcmF0b3JGdW5jdGlvbjxTLCBUPiB7XG4gICAgaWYgKHRoaXMuaGFzQ29udmVydGVycyhpbmplY3Rpb25Ub2tlbikpIHtcbiAgICAgIHJldHVybiBtYXAoKG1vZGVsOiBTKSA9PiB0aGlzLmNvbnZlcnRTb3VyY2UobW9kZWwsIGluamVjdGlvblRva2VuKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAob2JzZXJ2YWJsZTogT2JzZXJ2YWJsZTxhbnk+KSA9PiBvYnNlcnZhYmxlIGFzIE9ic2VydmFibGU8VD47XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFBpcGVhYmxlIG9wZXJhdG9yIHRvIGFwcGx5IGNvbnZlcnRlciBsb2dpYyBpbiBhIG9ic2VydmFibGUgc3RyZWFtIHRvIGNvbGxlY3Rpb24gb2YgaXRlbXNcbiAgICovXG4gIHBpcGVhYmxlTWFueTxTLCBUPihcbiAgICBpbmplY3Rpb25Ub2tlbjogSW5qZWN0aW9uVG9rZW48Q29udmVydGVyPFMsIFQ+PlxuICApOiBPcGVyYXRvckZ1bmN0aW9uPFNbXSwgVFtdPiB7XG4gICAgaWYgKHRoaXMuaGFzQ29udmVydGVycyhpbmplY3Rpb25Ub2tlbikpIHtcbiAgICAgIHJldHVybiBtYXAoKG1vZGVsOiBTW10pID0+IHRoaXMuY29udmVydE1hbnkobW9kZWwsIGluamVjdGlvblRva2VuKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAob2JzZXJ2YWJsZTogT2JzZXJ2YWJsZTxhbnlbXT4pID0+IG9ic2VydmFibGUgYXMgT2JzZXJ2YWJsZTxUW10+O1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBcHBseSBjb252ZXJ0ZXIgbG9naWMgc3BlY2lmaWVkIGJ5IGluamVjdGlvbiB0b2tlbiB0byBzb3VyY2UgZGF0YVxuICAgKi9cbiAgY29udmVydDxTLCBUPihzb3VyY2U6IFMsIGluamVjdGlvblRva2VuOiBJbmplY3Rpb25Ub2tlbjxDb252ZXJ0ZXI8UywgVD4+KTogVCB7XG4gICAgaWYgKHRoaXMuaGFzQ29udmVydGVycyhpbmplY3Rpb25Ub2tlbikpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbnZlcnRTb3VyY2Uoc291cmNlLCBpbmplY3Rpb25Ub2tlbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBzb3VyY2UgYXMgYW55O1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBcHBseSBjb252ZXJ0ZXIgbG9naWMgc3BlY2lmaWVkIGJ5IGluamVjdGlvbiB0b2tlbiB0byBhIGNvbGxlY3Rpb25cbiAgICovXG4gIGNvbnZlcnRNYW55PFMsIFQ+KFxuICAgIHNvdXJjZXM6IFNbXSxcbiAgICBpbmplY3Rpb25Ub2tlbjogSW5qZWN0aW9uVG9rZW48Q29udmVydGVyPFMsIFQ+PlxuICApOiBUW10ge1xuICAgIGlmICh0aGlzLmhhc0NvbnZlcnRlcnMoaW5qZWN0aW9uVG9rZW4pICYmIEFycmF5LmlzQXJyYXkoc291cmNlcykpIHtcbiAgICAgIHJldHVybiBzb3VyY2VzLm1hcChzb3VyY2UgPT4gdGhpcy5jb252ZXJ0U291cmNlKHNvdXJjZSwgaW5qZWN0aW9uVG9rZW4pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHNvdXJjZXMgYXMgYW55W107XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjb252ZXJ0U291cmNlPFMsIFQ+KFxuICAgIHNvdXJjZTogUyxcbiAgICBpbmplY3Rpb25Ub2tlbjogSW5qZWN0aW9uVG9rZW48Q29udmVydGVyPFMsIFQ+PlxuICApOiBUIHtcbiAgICByZXR1cm4gdGhpcy5nZXRDb252ZXJ0ZXJzKGluamVjdGlvblRva2VuKS5yZWR1Y2UoXG4gICAgICAodGFyZ2V0LCBjb252ZXJ0ZXIpID0+IHtcbiAgICAgICAgcmV0dXJuIGNvbnZlcnRlci5jb252ZXJ0KHNvdXJjZSwgdGFyZ2V0KTtcbiAgICAgIH0sXG4gICAgICB1bmRlZmluZWQgYXMgVFxuICAgICk7XG4gIH1cbn1cbiJdfQ==