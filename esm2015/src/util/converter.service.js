import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { UnifiedInjector } from '../lazy-loading/unified-injector';
import { getLastValueSync } from './rxjs/get-last-value-sync';
import * as i0 from "@angular/core";
import * as i1 from "../lazy-loading/unified-injector";
export class ConverterService {
    constructor(unifiedInjector) {
        this.unifiedInjector = unifiedInjector;
        this.subscriptions = new Subscription();
        this.converters = new Map();
        // Clear cached converters when new injectors appear
        const cacheResetLogic = this.unifiedInjector.injectors$.pipe(tap(() => this.converters.clear()));
        this.subscriptions.add(cacheResetLogic.subscribe());
    }
    getConverters(injectionToken) {
        if (!this.converters.has(injectionToken)) {
            const converters = getLastValueSync(this.unifiedInjector.getMulti(injectionToken));
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
            return sources.map((source) => this.convertSource(source, injectionToken));
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
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
}
ConverterService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ConverterService_Factory() { return new ConverterService(i0.ɵɵinject(i1.UnifiedInjector)); }, token: ConverterService, providedIn: "root" });
ConverterService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
ConverterService.ctorParameters = () => [
    { type: UnifiedInjector }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udmVydGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL3NyYy91dGlsL2NvbnZlcnRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQTZCLE1BQU0sZUFBZSxDQUFDO0FBQ3RFLE9BQU8sRUFBZ0MsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDMUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDOzs7QUF3QjlELE1BQU0sT0FBTyxnQkFBZ0I7SUFHM0IsWUFBc0IsZUFBZ0M7UUFBaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBRjVDLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQVdyQyxlQUFVLEdBR2QsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQVhaLG9EQUFvRDtRQUNwRCxNQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQzFELEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQ25DLENBQUM7UUFFRixJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBT08sYUFBYSxDQUNuQixjQUErQztRQUUvQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLEVBQUU7WUFDeEMsTUFBTSxVQUFVLEdBQUcsZ0JBQWdCLENBQ2pDLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUM5QyxDQUFDO1lBQ0YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1NBQ2pEO1FBRUQsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxhQUFhLENBQ1gsY0FBK0M7UUFFL0MsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUN0RCxPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVEOztPQUVHO0lBQ0gsUUFBUSxDQUNOLGNBQStDO1FBRS9DLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsRUFBRTtZQUN0QyxPQUFPLEdBQUcsQ0FBQyxDQUFDLEtBQVEsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsY0FBYyxDQUFDLENBQUMsQ0FBQztTQUNyRTthQUFNO1lBQ0wsT0FBTyxDQUFDLFVBQTJCLEVBQUUsRUFBRSxDQUFDLFVBQTJCLENBQUM7U0FDckU7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxZQUFZLENBQ1YsY0FBK0M7UUFFL0MsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxFQUFFO1lBQ3RDLE9BQU8sR0FBRyxDQUFDLENBQUMsS0FBVSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxjQUFjLENBQUMsQ0FBQyxDQUFDO1NBQ3JFO2FBQU07WUFDTCxPQUFPLENBQUMsVUFBNkIsRUFBRSxFQUFFLENBQUMsVUFBNkIsQ0FBQztTQUN6RTtJQUNILENBQUM7SUFFRDs7T0FFRztJQUNILE9BQU8sQ0FBTyxNQUFTLEVBQUUsY0FBK0M7UUFDdEUsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxFQUFFO1lBQ3RDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsY0FBYyxDQUFDLENBQUM7U0FDbkQ7YUFBTTtZQUNMLE9BQU8sTUFBYSxDQUFDO1NBQ3RCO0lBQ0gsQ0FBQztJQUVEOztPQUVHO0lBQ0gsV0FBVyxDQUNULE9BQVksRUFDWixjQUErQztRQUUvQyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUNoRSxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUM1QixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxjQUFjLENBQUMsQ0FDM0MsQ0FBQztTQUNIO2FBQU07WUFDTCxPQUFPLE9BQWdCLENBQUM7U0FDekI7SUFDSCxDQUFDO0lBRU8sYUFBYSxDQUNuQixNQUFTLEVBQ1QsY0FBK0M7UUFFL0MsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsRUFBRTtZQUNyRSxPQUFPLFNBQVMsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzNDLENBQUMsRUFBRSxTQUFjLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbkMsQ0FBQzs7OztZQTNHRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7OztZQXhCUSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0aW9uVG9rZW4sIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgT3BlcmF0b3JGdW5jdGlvbiwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFVuaWZpZWRJbmplY3RvciB9IGZyb20gJy4uL2xhenktbG9hZGluZy91bmlmaWVkLWluamVjdG9yJztcbmltcG9ydCB7IGdldExhc3RWYWx1ZVN5bmMgfSBmcm9tICcuL3J4anMvZ2V0LWxhc3QtdmFsdWUtc3luYyc7XG5cbi8qKlxuICogQ29udmVydGVyIGlzIHVzZWQgdG8gY29udmVydCBzb3VyY2UgZGF0YSBtb2RlbCB0byB0YXJnZXQgZGF0YSBtb2RlbC5cbiAqIEJ5IGNvbnZlbnRpb24sIHdlIGRpc3Rpbmd1aXNoIHR3byBmbG93czpcbiAqICAgLSAqTm9ybWFsaXplKiBpcyB0aGUgY29udmVyc2lvbiBmcm9tIGJhY2tlbmQgbW9kZWxzIHRvIFVJIG1vZGVsc1xuICogICAtICpTZXJpYWxpemUqIGlzIHRoZSBjb252ZXJzaW9uIG9mIFVJIG1vZGVscyB0byBiYWNrZW5kIG1vZGVscyAoaW4gY2FzZSBvZiBzdWJtaXR0aW5nIGRhdGEgdG8gdGhlIGJhY2tlbmQpLlxuICpcbiAqIENvbnZlcnRlcnMgY2FuIGJlIHN0YWNrZWQgdG9nZXRoZXIgdG8gdG8gYXBwbHkgZGVjb3VwbGVkIGN1c3RvbWl6YXRpb25zXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ29udmVydGVyPFMsIFQ+IHtcbiAgLyoqXG4gICAqIENvbnZlcnQgY29udmVydHMgc291cmNlIG1vZGVsIHRvIHRhcmdldCBtb2RlbC4gQ2FuIHVzZSBvcHRpb25hbCB0YXJnZXQgcGFyYW1ldGVyLFxuICAgKiB1c2VkIGluIGNhc2Ugb2Ygc3RhY2tpbmcgbXVsdGlwbGUgY29udmVydGVycyAoZm9yIGV4YW1wbGUsIHRvIGltcGxlbWVudCBwb3B1bGF0b3IgcGF0dGVybikuXG4gICAqXG4gICAqIEBwYXJhbSBzb3VyY2UgU291cmNlIGRhdGEgbW9kZWxcbiAgICogQHBhcmFtIHRhcmdldCBPcHRpb25hbCwgcGFydGlhbGx5IGNvbnZlcnRlZCB0YXJnZXQgbW9kZWxcbiAgICovXG4gIGNvbnZlcnQoc291cmNlOiBTLCB0YXJnZXQ/OiBUKTogVDtcbn1cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENvbnZlcnRlclNlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwcm90ZWN0ZWQgc3Vic2NyaXB0aW9ucyA9IG5ldyBTdWJzY3JpcHRpb24oKTtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgdW5pZmllZEluamVjdG9yOiBVbmlmaWVkSW5qZWN0b3IpIHtcbiAgICAvLyBDbGVhciBjYWNoZWQgY29udmVydGVycyB3aGVuIG5ldyBpbmplY3RvcnMgYXBwZWFyXG4gICAgY29uc3QgY2FjaGVSZXNldExvZ2ljID0gdGhpcy51bmlmaWVkSW5qZWN0b3IuaW5qZWN0b3JzJC5waXBlKFxuICAgICAgdGFwKCgpID0+IHRoaXMuY29udmVydGVycy5jbGVhcigpKVxuICAgICk7XG5cbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMuYWRkKGNhY2hlUmVzZXRMb2dpYy5zdWJzY3JpYmUoKSk7XG4gIH1cblxuICBwcml2YXRlIGNvbnZlcnRlcnM6IE1hcDxcbiAgICBJbmplY3Rpb25Ub2tlbjxDb252ZXJ0ZXI8YW55LCBhbnk+PixcbiAgICBDb252ZXJ0ZXI8YW55LCBhbnk+W11cbiAgPiA9IG5ldyBNYXAoKTtcblxuICBwcml2YXRlIGdldENvbnZlcnRlcnM8UywgVD4oXG4gICAgaW5qZWN0aW9uVG9rZW46IEluamVjdGlvblRva2VuPENvbnZlcnRlcjxTLCBUPj5cbiAgKTogQ29udmVydGVyPFMsIFQ+W10ge1xuICAgIGlmICghdGhpcy5jb252ZXJ0ZXJzLmhhcyhpbmplY3Rpb25Ub2tlbikpIHtcbiAgICAgIGNvbnN0IGNvbnZlcnRlcnMgPSBnZXRMYXN0VmFsdWVTeW5jKFxuICAgICAgICB0aGlzLnVuaWZpZWRJbmplY3Rvci5nZXRNdWx0aShpbmplY3Rpb25Ub2tlbilcbiAgICAgICk7XG4gICAgICB0aGlzLmNvbnZlcnRlcnMuc2V0KGluamVjdGlvblRva2VuLCBjb252ZXJ0ZXJzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5jb252ZXJ0ZXJzLmdldChpbmplY3Rpb25Ub2tlbik7XG4gIH1cblxuICAvKipcbiAgICogV2lsbCByZXR1cm4gdHJ1ZSBpZiBjb252ZXJ0ZXJzIGZvciBzcGVjaWZpZWQgdG9rZW4gd2VyZSBwcm92aWRlZFxuICAgKi9cbiAgaGFzQ29udmVydGVyczxTLCBUPihcbiAgICBpbmplY3Rpb25Ub2tlbjogSW5qZWN0aW9uVG9rZW48Q29udmVydGVyPFMsIFQ+PlxuICApOiBib29sZWFuIHtcbiAgICBjb25zdCBjb252ZXJ0ZXJzID0gdGhpcy5nZXRDb252ZXJ0ZXJzKGluamVjdGlvblRva2VuKTtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheShjb252ZXJ0ZXJzKSAmJiBjb252ZXJ0ZXJzLmxlbmd0aCA+IDA7XG4gIH1cblxuICAvKipcbiAgICogUGlwZWFibGUgb3BlcmF0b3IgdG8gYXBwbHkgY29udmVydGVyIGxvZ2ljIGluIGEgb2JzZXJ2YWJsZSBzdHJlYW1cbiAgICovXG4gIHBpcGVhYmxlPFMsIFQ+KFxuICAgIGluamVjdGlvblRva2VuOiBJbmplY3Rpb25Ub2tlbjxDb252ZXJ0ZXI8UywgVD4+XG4gICk6IE9wZXJhdG9yRnVuY3Rpb248UywgVD4ge1xuICAgIGlmICh0aGlzLmhhc0NvbnZlcnRlcnMoaW5qZWN0aW9uVG9rZW4pKSB7XG4gICAgICByZXR1cm4gbWFwKChtb2RlbDogUykgPT4gdGhpcy5jb252ZXJ0U291cmNlKG1vZGVsLCBpbmplY3Rpb25Ub2tlbikpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKG9ic2VydmFibGU6IE9ic2VydmFibGU8YW55PikgPT4gb2JzZXJ2YWJsZSBhcyBPYnNlcnZhYmxlPFQ+O1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBQaXBlYWJsZSBvcGVyYXRvciB0byBhcHBseSBjb252ZXJ0ZXIgbG9naWMgaW4gYSBvYnNlcnZhYmxlIHN0cmVhbSB0byBjb2xsZWN0aW9uIG9mIGl0ZW1zXG4gICAqL1xuICBwaXBlYWJsZU1hbnk8UywgVD4oXG4gICAgaW5qZWN0aW9uVG9rZW46IEluamVjdGlvblRva2VuPENvbnZlcnRlcjxTLCBUPj5cbiAgKTogT3BlcmF0b3JGdW5jdGlvbjxTW10sIFRbXT4ge1xuICAgIGlmICh0aGlzLmhhc0NvbnZlcnRlcnMoaW5qZWN0aW9uVG9rZW4pKSB7XG4gICAgICByZXR1cm4gbWFwKChtb2RlbDogU1tdKSA9PiB0aGlzLmNvbnZlcnRNYW55KG1vZGVsLCBpbmplY3Rpb25Ub2tlbikpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKG9ic2VydmFibGU6IE9ic2VydmFibGU8YW55W10+KSA9PiBvYnNlcnZhYmxlIGFzIE9ic2VydmFibGU8VFtdPjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQXBwbHkgY29udmVydGVyIGxvZ2ljIHNwZWNpZmllZCBieSBpbmplY3Rpb24gdG9rZW4gdG8gc291cmNlIGRhdGFcbiAgICovXG4gIGNvbnZlcnQ8UywgVD4oc291cmNlOiBTLCBpbmplY3Rpb25Ub2tlbjogSW5qZWN0aW9uVG9rZW48Q29udmVydGVyPFMsIFQ+Pik6IFQge1xuICAgIGlmICh0aGlzLmhhc0NvbnZlcnRlcnMoaW5qZWN0aW9uVG9rZW4pKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb252ZXJ0U291cmNlKHNvdXJjZSwgaW5qZWN0aW9uVG9rZW4pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gc291cmNlIGFzIGFueTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQXBwbHkgY29udmVydGVyIGxvZ2ljIHNwZWNpZmllZCBieSBpbmplY3Rpb24gdG9rZW4gdG8gYSBjb2xsZWN0aW9uXG4gICAqL1xuICBjb252ZXJ0TWFueTxTLCBUPihcbiAgICBzb3VyY2VzOiBTW10sXG4gICAgaW5qZWN0aW9uVG9rZW46IEluamVjdGlvblRva2VuPENvbnZlcnRlcjxTLCBUPj5cbiAgKTogVFtdIHtcbiAgICBpZiAodGhpcy5oYXNDb252ZXJ0ZXJzKGluamVjdGlvblRva2VuKSAmJiBBcnJheS5pc0FycmF5KHNvdXJjZXMpKSB7XG4gICAgICByZXR1cm4gc291cmNlcy5tYXAoKHNvdXJjZSkgPT5cbiAgICAgICAgdGhpcy5jb252ZXJ0U291cmNlKHNvdXJjZSwgaW5qZWN0aW9uVG9rZW4pXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gc291cmNlcyBhcyBhbnlbXTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNvbnZlcnRTb3VyY2U8UywgVD4oXG4gICAgc291cmNlOiBTLFxuICAgIGluamVjdGlvblRva2VuOiBJbmplY3Rpb25Ub2tlbjxDb252ZXJ0ZXI8UywgVD4+XG4gICk6IFQge1xuICAgIHJldHVybiB0aGlzLmdldENvbnZlcnRlcnMoaW5qZWN0aW9uVG9rZW4pLnJlZHVjZSgodGFyZ2V0LCBjb252ZXJ0ZXIpID0+IHtcbiAgICAgIHJldHVybiBjb252ZXJ0ZXIuY29udmVydChzb3VyY2UsIHRhcmdldCk7XG4gICAgfSwgdW5kZWZpbmVkIGFzIFQpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==