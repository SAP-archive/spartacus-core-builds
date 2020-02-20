import { __decorate } from "tslib";
import { Injectable, InjectionToken, Injector } from '@angular/core';
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
let ConverterService = class ConverterService {
    constructor(injector) {
        this.injector = injector;
        this.converters = new Map();
    }
    getConverters(injectionToken) {
        if (!this.converters.has(injectionToken)) {
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
     */
    hasConverters(injectionToken) {
        const converters = this.getConverters(injectionToken);
        return Array.isArray(converters) && converters.length > 0;
    }
    /**
     * Pipeable operator to apply converter logic in a observable stream
     */
    pipeable(injectionToken) {
        if (this.hasConverters(injectionToken)) {
            return map((model) => this.convertSource(model, injectionToken));
        }
        else {
            return (observable) => observable;
        }
    }
    /**
     * Pipeable operator to apply converter logic in a observable stream to collection of items
     */
    pipeableMany(injectionToken) {
        if (this.hasConverters(injectionToken)) {
            return map((model) => this.convertMany(model, injectionToken));
        }
        else {
            return (observable) => observable;
        }
    }
    /**
     * Apply converter logic specified by injection token to source data
     */
    convert(source, injectionToken) {
        if (this.hasConverters(injectionToken)) {
            return this.convertSource(source, injectionToken);
        }
        else {
            return source;
        }
    }
    /**
     * Apply converter logic specified by injection token to a collection
     */
    convertMany(sources, injectionToken) {
        if (this.hasConverters(injectionToken) && Array.isArray(sources)) {
            return sources.map(source => this.convertSource(source, injectionToken));
        }
        else {
            return sources;
        }
    }
    convertSource(source, injectionToken) {
        return this.getConverters(injectionToken).reduce((target, converter) => {
            return converter.convert(source, target);
        }, undefined);
    }
};
ConverterService.ctorParameters = () => [
    { type: Injector }
];
ConverterService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ConverterService_Factory() { return new ConverterService(i0.ɵɵinject(i0.INJECTOR)); }, token: ConverterService, providedIn: "root" });
ConverterService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], ConverterService);
export { ConverterService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udmVydGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXRpbC9jb252ZXJ0ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXJFLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUF3QnJDLElBQWEsZ0JBQWdCLEdBQTdCLE1BQWEsZ0JBQWdCO0lBQzNCLFlBQXNCLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFFaEMsZUFBVSxHQUdkLElBQUksR0FBRyxFQUFFLENBQUM7SUFMNkIsQ0FBQztJQU9wQyxhQUFhLENBQ25CLGNBQStDO1FBRS9DLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsRUFBRTtZQUN4QyxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FDbEMsY0FBYyxFQUNkLEVBQUUsQ0FDSCxDQUFDO1lBQ0YsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEVBQUU7Z0JBQzlCLE9BQU8sQ0FBQyxJQUFJLENBQ1YsZ0VBQWdFLEVBQ2hFLGNBQWMsQ0FBQyxRQUFRLEVBQUUsQ0FDMUIsQ0FBQzthQUNIO1lBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1NBQ2pEO1FBRUQsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxhQUFhLENBQ1gsY0FBK0M7UUFFL0MsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUN0RCxPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVEOztPQUVHO0lBQ0gsUUFBUSxDQUNOLGNBQStDO1FBRS9DLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsRUFBRTtZQUN0QyxPQUFPLEdBQUcsQ0FBQyxDQUFDLEtBQVEsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsY0FBYyxDQUFDLENBQUMsQ0FBQztTQUNyRTthQUFNO1lBQ0wsT0FBTyxDQUFDLFVBQTJCLEVBQUUsRUFBRSxDQUFDLFVBQTJCLENBQUM7U0FDckU7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxZQUFZLENBQ1YsY0FBK0M7UUFFL0MsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxFQUFFO1lBQ3RDLE9BQU8sR0FBRyxDQUFDLENBQUMsS0FBVSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxjQUFjLENBQUMsQ0FBQyxDQUFDO1NBQ3JFO2FBQU07WUFDTCxPQUFPLENBQUMsVUFBNkIsRUFBRSxFQUFFLENBQUMsVUFBNkIsQ0FBQztTQUN6RTtJQUNILENBQUM7SUFFRDs7T0FFRztJQUNILE9BQU8sQ0FBTyxNQUFTLEVBQUUsY0FBK0M7UUFDdEUsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxFQUFFO1lBQ3RDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsY0FBYyxDQUFDLENBQUM7U0FDbkQ7YUFBTTtZQUNMLE9BQU8sTUFBYSxDQUFDO1NBQ3RCO0lBQ0gsQ0FBQztJQUVEOztPQUVHO0lBQ0gsV0FBVyxDQUNULE9BQVksRUFDWixjQUErQztRQUUvQyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUNoRSxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxjQUFjLENBQUMsQ0FBQyxDQUFDO1NBQzFFO2FBQU07WUFDTCxPQUFPLE9BQWdCLENBQUM7U0FDekI7SUFDSCxDQUFDO0lBRU8sYUFBYSxDQUNuQixNQUFTLEVBQ1QsY0FBK0M7UUFFL0MsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDLE1BQU0sQ0FDOUMsQ0FBQyxNQUFNLEVBQUUsU0FBUyxFQUFFLEVBQUU7WUFDcEIsT0FBTyxTQUFTLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUMzQyxDQUFDLEVBQ0QsU0FBYyxDQUNmLENBQUM7SUFDSixDQUFDO0NBQ0YsQ0FBQTs7WUFuR2lDLFFBQVE7OztBQUQ3QixnQkFBZ0I7SUFINUIsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztHQUNXLGdCQUFnQixDQW9HNUI7U0FwR1ksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0aW9uVG9rZW4sIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBPcGVyYXRvckZ1bmN0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbi8qKlxuICogQ29udmVydGVyIGlzIHVzZWQgdG8gY29udmVydCBzb3VyY2UgZGF0YSBtb2RlbCB0byB0YXJnZXQgZGF0YSBtb2RlbC5cbiAqIEJ5IGNvbnZlbnRpb24sIHdlIGRpc3Rpbmd1aXNoIHR3byBmbG93czpcbiAqICAgLSAqTm9ybWFsaXplKiBpcyB0aGUgY29udmVyc2lvbiBmcm9tIGJhY2tlbmQgbW9kZWxzIHRvIFVJIG1vZGVsc1xuICogICAtICpTZXJpYWxpemUqIGlzIHRoZSBjb252ZXJzaW9uIG9mIFVJIG1vZGVscyB0byBiYWNrZW5kIG1vZGVscyAoaW4gY2FzZSBvZiBzdWJtaXR0aW5nIGRhdGEgdG8gdGhlIGJhY2tlbmQpLlxuICpcbiAqIENvbnZlcnRlcnMgY2FuIGJlIHN0YWNrZWQgdG9nZXRoZXIgdG8gdG8gYXBwbHkgZGVjb3VwbGVkIGN1c3RvbWl6YXRpb25zXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ29udmVydGVyPFMsIFQ+IHtcbiAgLyoqXG4gICAqIENvbnZlcnQgY29udmVydHMgc291cmNlIG1vZGVsIHRvIHRhcmdldCBtb2RlbC4gQ2FuIHVzZSBvcHRpb25hbCB0YXJnZXQgcGFyYW1ldGVyLFxuICAgKiB1c2VkIGluIGNhc2Ugb2Ygc3RhY2tpbmcgbXVsdGlwbGUgY29udmVydGVycyAoZm9yIGV4YW1wbGUsIHRvIGltcGxlbWVudCBwb3B1bGF0b3IgcGF0dGVybikuXG4gICAqXG4gICAqIEBwYXJhbSBzb3VyY2UgU291cmNlIGRhdGEgbW9kZWxcbiAgICogQHBhcmFtIHRhcmdldCBPcHRpb25hbCwgcGFydGlhbGx5IGNvbnZlcnRlZCB0YXJnZXQgbW9kZWxcbiAgICovXG4gIGNvbnZlcnQoc291cmNlOiBTLCB0YXJnZXQ/OiBUKTogVDtcbn1cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENvbnZlcnRlclNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgaW5qZWN0b3I6IEluamVjdG9yKSB7fVxuXG4gIHByaXZhdGUgY29udmVydGVyczogTWFwPFxuICAgIEluamVjdGlvblRva2VuPENvbnZlcnRlcjxhbnksIGFueT4+LFxuICAgIENvbnZlcnRlcjxhbnksIGFueT5bXVxuICA+ID0gbmV3IE1hcCgpO1xuXG4gIHByaXZhdGUgZ2V0Q29udmVydGVyczxTLCBUPihcbiAgICBpbmplY3Rpb25Ub2tlbjogSW5qZWN0aW9uVG9rZW48Q29udmVydGVyPFMsIFQ+PlxuICApOiBDb252ZXJ0ZXI8UywgVD5bXSB7XG4gICAgaWYgKCF0aGlzLmNvbnZlcnRlcnMuaGFzKGluamVjdGlvblRva2VuKSkge1xuICAgICAgY29uc3QgY29udmVydGVycyA9IHRoaXMuaW5qZWN0b3IuZ2V0PENvbnZlcnRlcjxTLCBUPltdPihcbiAgICAgICAgaW5qZWN0aW9uVG9rZW4sXG4gICAgICAgIFtdXG4gICAgICApO1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGNvbnZlcnRlcnMpKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAnQ29udmVydGVyIG11c3QgYmUgbXVsdGktcHJvdmlkZWQsIHBsZWFzZSB1c2UgXCJtdWx0aTogdHJ1ZVwiIGZvcicsXG4gICAgICAgICAgaW5qZWN0aW9uVG9rZW4udG9TdHJpbmcoKVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgdGhpcy5jb252ZXJ0ZXJzLnNldChpbmplY3Rpb25Ub2tlbiwgY29udmVydGVycyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuY29udmVydGVycy5nZXQoaW5qZWN0aW9uVG9rZW4pO1xuICB9XG5cbiAgLyoqXG4gICAqIFdpbGwgcmV0dXJuIHRydWUgaWYgY29udmVydGVycyBmb3Igc3BlY2lmaWVkIHRva2VuIHdlcmUgcHJvdmlkZWRcbiAgICovXG4gIGhhc0NvbnZlcnRlcnM8UywgVD4oXG4gICAgaW5qZWN0aW9uVG9rZW46IEluamVjdGlvblRva2VuPENvbnZlcnRlcjxTLCBUPj5cbiAgKTogYm9vbGVhbiB7XG4gICAgY29uc3QgY29udmVydGVycyA9IHRoaXMuZ2V0Q29udmVydGVycyhpbmplY3Rpb25Ub2tlbik7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoY29udmVydGVycykgJiYgY29udmVydGVycy5sZW5ndGggPiAwO1xuICB9XG5cbiAgLyoqXG4gICAqIFBpcGVhYmxlIG9wZXJhdG9yIHRvIGFwcGx5IGNvbnZlcnRlciBsb2dpYyBpbiBhIG9ic2VydmFibGUgc3RyZWFtXG4gICAqL1xuICBwaXBlYWJsZTxTLCBUPihcbiAgICBpbmplY3Rpb25Ub2tlbjogSW5qZWN0aW9uVG9rZW48Q29udmVydGVyPFMsIFQ+PlxuICApOiBPcGVyYXRvckZ1bmN0aW9uPFMsIFQ+IHtcbiAgICBpZiAodGhpcy5oYXNDb252ZXJ0ZXJzKGluamVjdGlvblRva2VuKSkge1xuICAgICAgcmV0dXJuIG1hcCgobW9kZWw6IFMpID0+IHRoaXMuY29udmVydFNvdXJjZShtb2RlbCwgaW5qZWN0aW9uVG9rZW4pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChvYnNlcnZhYmxlOiBPYnNlcnZhYmxlPGFueT4pID0+IG9ic2VydmFibGUgYXMgT2JzZXJ2YWJsZTxUPjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUGlwZWFibGUgb3BlcmF0b3IgdG8gYXBwbHkgY29udmVydGVyIGxvZ2ljIGluIGEgb2JzZXJ2YWJsZSBzdHJlYW0gdG8gY29sbGVjdGlvbiBvZiBpdGVtc1xuICAgKi9cbiAgcGlwZWFibGVNYW55PFMsIFQ+KFxuICAgIGluamVjdGlvblRva2VuOiBJbmplY3Rpb25Ub2tlbjxDb252ZXJ0ZXI8UywgVD4+XG4gICk6IE9wZXJhdG9yRnVuY3Rpb248U1tdLCBUW10+IHtcbiAgICBpZiAodGhpcy5oYXNDb252ZXJ0ZXJzKGluamVjdGlvblRva2VuKSkge1xuICAgICAgcmV0dXJuIG1hcCgobW9kZWw6IFNbXSkgPT4gdGhpcy5jb252ZXJ0TWFueShtb2RlbCwgaW5qZWN0aW9uVG9rZW4pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChvYnNlcnZhYmxlOiBPYnNlcnZhYmxlPGFueVtdPikgPT4gb2JzZXJ2YWJsZSBhcyBPYnNlcnZhYmxlPFRbXT47XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFwcGx5IGNvbnZlcnRlciBsb2dpYyBzcGVjaWZpZWQgYnkgaW5qZWN0aW9uIHRva2VuIHRvIHNvdXJjZSBkYXRhXG4gICAqL1xuICBjb252ZXJ0PFMsIFQ+KHNvdXJjZTogUywgaW5qZWN0aW9uVG9rZW46IEluamVjdGlvblRva2VuPENvbnZlcnRlcjxTLCBUPj4pOiBUIHtcbiAgICBpZiAodGhpcy5oYXNDb252ZXJ0ZXJzKGluamVjdGlvblRva2VuKSkge1xuICAgICAgcmV0dXJuIHRoaXMuY29udmVydFNvdXJjZShzb3VyY2UsIGluamVjdGlvblRva2VuKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHNvdXJjZSBhcyBhbnk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFwcGx5IGNvbnZlcnRlciBsb2dpYyBzcGVjaWZpZWQgYnkgaW5qZWN0aW9uIHRva2VuIHRvIGEgY29sbGVjdGlvblxuICAgKi9cbiAgY29udmVydE1hbnk8UywgVD4oXG4gICAgc291cmNlczogU1tdLFxuICAgIGluamVjdGlvblRva2VuOiBJbmplY3Rpb25Ub2tlbjxDb252ZXJ0ZXI8UywgVD4+XG4gICk6IFRbXSB7XG4gICAgaWYgKHRoaXMuaGFzQ29udmVydGVycyhpbmplY3Rpb25Ub2tlbikgJiYgQXJyYXkuaXNBcnJheShzb3VyY2VzKSkge1xuICAgICAgcmV0dXJuIHNvdXJjZXMubWFwKHNvdXJjZSA9PiB0aGlzLmNvbnZlcnRTb3VyY2Uoc291cmNlLCBpbmplY3Rpb25Ub2tlbikpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gc291cmNlcyBhcyBhbnlbXTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNvbnZlcnRTb3VyY2U8UywgVD4oXG4gICAgc291cmNlOiBTLFxuICAgIGluamVjdGlvblRva2VuOiBJbmplY3Rpb25Ub2tlbjxDb252ZXJ0ZXI8UywgVD4+XG4gICk6IFQge1xuICAgIHJldHVybiB0aGlzLmdldENvbnZlcnRlcnMoaW5qZWN0aW9uVG9rZW4pLnJlZHVjZShcbiAgICAgICh0YXJnZXQsIGNvbnZlcnRlcikgPT4ge1xuICAgICAgICByZXR1cm4gY29udmVydGVyLmNvbnZlcnQoc291cmNlLCB0YXJnZXQpO1xuICAgICAgfSxcbiAgICAgIHVuZGVmaW5lZCBhcyBUXG4gICAgKTtcbiAgfVxufVxuIl19