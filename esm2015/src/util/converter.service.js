import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { UnifiedInjector } from '../lazy-loading/unified-injector';
import { getLastValueSync } from './get-last-value-sync';
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
            const converters = getLastValueSync(this.unifiedInjector.get(injectionToken, []));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udmVydGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL3NyYy91dGlsL2NvbnZlcnRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQTZCLE1BQU0sZUFBZSxDQUFDO0FBQ3RFLE9BQU8sRUFBZ0MsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDMUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7QUF3QnpELE1BQU0sT0FBTyxnQkFBZ0I7SUFHM0IsWUFBc0IsZUFBZ0M7UUFBaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBRjVDLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQVdyQyxlQUFVLEdBR2QsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQVhaLG9EQUFvRDtRQUNwRCxNQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQzFELEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQ25DLENBQUM7UUFFRixJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBT08sYUFBYSxDQUNuQixjQUErQztRQUUvQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLEVBQUU7WUFDeEMsTUFBTSxVQUFVLEdBQUcsZ0JBQWdCLENBQ2pDLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFvQixjQUFjLEVBQUUsRUFBRSxDQUFDLENBQ2hFLENBQUM7WUFDRixJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsVUFBVSxDQUFDLENBQUM7U0FDakQ7UUFFRCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRDs7T0FFRztJQUNILGFBQWEsQ0FDWCxjQUErQztRQUUvQyxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3RELE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxRQUFRLENBQ04sY0FBK0M7UUFFL0MsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxFQUFFO1lBQ3RDLE9BQU8sR0FBRyxDQUFDLENBQUMsS0FBUSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxjQUFjLENBQUMsQ0FBQyxDQUFDO1NBQ3JFO2FBQU07WUFDTCxPQUFPLENBQUMsVUFBMkIsRUFBRSxFQUFFLENBQUMsVUFBMkIsQ0FBQztTQUNyRTtJQUNILENBQUM7SUFFRDs7T0FFRztJQUNILFlBQVksQ0FDVixjQUErQztRQUUvQyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLEVBQUU7WUFDdEMsT0FBTyxHQUFHLENBQUMsQ0FBQyxLQUFVLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLGNBQWMsQ0FBQyxDQUFDLENBQUM7U0FDckU7YUFBTTtZQUNMLE9BQU8sQ0FBQyxVQUE2QixFQUFFLEVBQUUsQ0FBQyxVQUE2QixDQUFDO1NBQ3pFO0lBQ0gsQ0FBQztJQUVEOztPQUVHO0lBQ0gsT0FBTyxDQUFPLE1BQVMsRUFBRSxjQUErQztRQUN0RSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLEVBQUU7WUFDdEMsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxjQUFjLENBQUMsQ0FBQztTQUNuRDthQUFNO1lBQ0wsT0FBTyxNQUFhLENBQUM7U0FDdEI7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxXQUFXLENBQ1QsT0FBWSxFQUNaLGNBQStDO1FBRS9DLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ2hFLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQzVCLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLGNBQWMsQ0FBQyxDQUMzQyxDQUFDO1NBQ0g7YUFBTTtZQUNMLE9BQU8sT0FBZ0IsQ0FBQztTQUN6QjtJQUNILENBQUM7SUFFTyxhQUFhLENBQ25CLE1BQVMsRUFDVCxjQUErQztRQUUvQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxFQUFFLFNBQVMsRUFBRSxFQUFFO1lBQ3JFLE9BQU8sU0FBUyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDM0MsQ0FBQyxFQUFFLFNBQWMsQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNuQyxDQUFDOzs7O1lBM0dGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7O1lBeEJRLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3Rpb25Ub2tlbiwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBPcGVyYXRvckZ1bmN0aW9uLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgVW5pZmllZEluamVjdG9yIH0gZnJvbSAnLi4vbGF6eS1sb2FkaW5nL3VuaWZpZWQtaW5qZWN0b3InO1xuaW1wb3J0IHsgZ2V0TGFzdFZhbHVlU3luYyB9IGZyb20gJy4vZ2V0LWxhc3QtdmFsdWUtc3luYyc7XG5cbi8qKlxuICogQ29udmVydGVyIGlzIHVzZWQgdG8gY29udmVydCBzb3VyY2UgZGF0YSBtb2RlbCB0byB0YXJnZXQgZGF0YSBtb2RlbC5cbiAqIEJ5IGNvbnZlbnRpb24sIHdlIGRpc3Rpbmd1aXNoIHR3byBmbG93czpcbiAqICAgLSAqTm9ybWFsaXplKiBpcyB0aGUgY29udmVyc2lvbiBmcm9tIGJhY2tlbmQgbW9kZWxzIHRvIFVJIG1vZGVsc1xuICogICAtICpTZXJpYWxpemUqIGlzIHRoZSBjb252ZXJzaW9uIG9mIFVJIG1vZGVscyB0byBiYWNrZW5kIG1vZGVscyAoaW4gY2FzZSBvZiBzdWJtaXR0aW5nIGRhdGEgdG8gdGhlIGJhY2tlbmQpLlxuICpcbiAqIENvbnZlcnRlcnMgY2FuIGJlIHN0YWNrZWQgdG9nZXRoZXIgdG8gdG8gYXBwbHkgZGVjb3VwbGVkIGN1c3RvbWl6YXRpb25zXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ29udmVydGVyPFMsIFQ+IHtcbiAgLyoqXG4gICAqIENvbnZlcnQgY29udmVydHMgc291cmNlIG1vZGVsIHRvIHRhcmdldCBtb2RlbC4gQ2FuIHVzZSBvcHRpb25hbCB0YXJnZXQgcGFyYW1ldGVyLFxuICAgKiB1c2VkIGluIGNhc2Ugb2Ygc3RhY2tpbmcgbXVsdGlwbGUgY29udmVydGVycyAoZm9yIGV4YW1wbGUsIHRvIGltcGxlbWVudCBwb3B1bGF0b3IgcGF0dGVybikuXG4gICAqXG4gICAqIEBwYXJhbSBzb3VyY2UgU291cmNlIGRhdGEgbW9kZWxcbiAgICogQHBhcmFtIHRhcmdldCBPcHRpb25hbCwgcGFydGlhbGx5IGNvbnZlcnRlZCB0YXJnZXQgbW9kZWxcbiAgICovXG4gIGNvbnZlcnQoc291cmNlOiBTLCB0YXJnZXQ/OiBUKTogVDtcbn1cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENvbnZlcnRlclNlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwcm90ZWN0ZWQgc3Vic2NyaXB0aW9ucyA9IG5ldyBTdWJzY3JpcHRpb24oKTtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgdW5pZmllZEluamVjdG9yOiBVbmlmaWVkSW5qZWN0b3IpIHtcbiAgICAvLyBDbGVhciBjYWNoZWQgY29udmVydGVycyB3aGVuIG5ldyBpbmplY3RvcnMgYXBwZWFyXG4gICAgY29uc3QgY2FjaGVSZXNldExvZ2ljID0gdGhpcy51bmlmaWVkSW5qZWN0b3IuaW5qZWN0b3JzJC5waXBlKFxuICAgICAgdGFwKCgpID0+IHRoaXMuY29udmVydGVycy5jbGVhcigpKVxuICAgICk7XG5cbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMuYWRkKGNhY2hlUmVzZXRMb2dpYy5zdWJzY3JpYmUoKSk7XG4gIH1cblxuICBwcml2YXRlIGNvbnZlcnRlcnM6IE1hcDxcbiAgICBJbmplY3Rpb25Ub2tlbjxDb252ZXJ0ZXI8YW55LCBhbnk+PixcbiAgICBDb252ZXJ0ZXI8YW55LCBhbnk+W11cbiAgPiA9IG5ldyBNYXAoKTtcblxuICBwcml2YXRlIGdldENvbnZlcnRlcnM8UywgVD4oXG4gICAgaW5qZWN0aW9uVG9rZW46IEluamVjdGlvblRva2VuPENvbnZlcnRlcjxTLCBUPj5cbiAgKTogQ29udmVydGVyPFMsIFQ+W10ge1xuICAgIGlmICghdGhpcy5jb252ZXJ0ZXJzLmhhcyhpbmplY3Rpb25Ub2tlbikpIHtcbiAgICAgIGNvbnN0IGNvbnZlcnRlcnMgPSBnZXRMYXN0VmFsdWVTeW5jKFxuICAgICAgICB0aGlzLnVuaWZpZWRJbmplY3Rvci5nZXQ8Q29udmVydGVyPFMsIFQ+W10+KGluamVjdGlvblRva2VuLCBbXSlcbiAgICAgICk7XG4gICAgICB0aGlzLmNvbnZlcnRlcnMuc2V0KGluamVjdGlvblRva2VuLCBjb252ZXJ0ZXJzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5jb252ZXJ0ZXJzLmdldChpbmplY3Rpb25Ub2tlbik7XG4gIH1cblxuICAvKipcbiAgICogV2lsbCByZXR1cm4gdHJ1ZSBpZiBjb252ZXJ0ZXJzIGZvciBzcGVjaWZpZWQgdG9rZW4gd2VyZSBwcm92aWRlZFxuICAgKi9cbiAgaGFzQ29udmVydGVyczxTLCBUPihcbiAgICBpbmplY3Rpb25Ub2tlbjogSW5qZWN0aW9uVG9rZW48Q29udmVydGVyPFMsIFQ+PlxuICApOiBib29sZWFuIHtcbiAgICBjb25zdCBjb252ZXJ0ZXJzID0gdGhpcy5nZXRDb252ZXJ0ZXJzKGluamVjdGlvblRva2VuKTtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheShjb252ZXJ0ZXJzKSAmJiBjb252ZXJ0ZXJzLmxlbmd0aCA+IDA7XG4gIH1cblxuICAvKipcbiAgICogUGlwZWFibGUgb3BlcmF0b3IgdG8gYXBwbHkgY29udmVydGVyIGxvZ2ljIGluIGEgb2JzZXJ2YWJsZSBzdHJlYW1cbiAgICovXG4gIHBpcGVhYmxlPFMsIFQ+KFxuICAgIGluamVjdGlvblRva2VuOiBJbmplY3Rpb25Ub2tlbjxDb252ZXJ0ZXI8UywgVD4+XG4gICk6IE9wZXJhdG9yRnVuY3Rpb248UywgVD4ge1xuICAgIGlmICh0aGlzLmhhc0NvbnZlcnRlcnMoaW5qZWN0aW9uVG9rZW4pKSB7XG4gICAgICByZXR1cm4gbWFwKChtb2RlbDogUykgPT4gdGhpcy5jb252ZXJ0U291cmNlKG1vZGVsLCBpbmplY3Rpb25Ub2tlbikpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKG9ic2VydmFibGU6IE9ic2VydmFibGU8YW55PikgPT4gb2JzZXJ2YWJsZSBhcyBPYnNlcnZhYmxlPFQ+O1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBQaXBlYWJsZSBvcGVyYXRvciB0byBhcHBseSBjb252ZXJ0ZXIgbG9naWMgaW4gYSBvYnNlcnZhYmxlIHN0cmVhbSB0byBjb2xsZWN0aW9uIG9mIGl0ZW1zXG4gICAqL1xuICBwaXBlYWJsZU1hbnk8UywgVD4oXG4gICAgaW5qZWN0aW9uVG9rZW46IEluamVjdGlvblRva2VuPENvbnZlcnRlcjxTLCBUPj5cbiAgKTogT3BlcmF0b3JGdW5jdGlvbjxTW10sIFRbXT4ge1xuICAgIGlmICh0aGlzLmhhc0NvbnZlcnRlcnMoaW5qZWN0aW9uVG9rZW4pKSB7XG4gICAgICByZXR1cm4gbWFwKChtb2RlbDogU1tdKSA9PiB0aGlzLmNvbnZlcnRNYW55KG1vZGVsLCBpbmplY3Rpb25Ub2tlbikpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKG9ic2VydmFibGU6IE9ic2VydmFibGU8YW55W10+KSA9PiBvYnNlcnZhYmxlIGFzIE9ic2VydmFibGU8VFtdPjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQXBwbHkgY29udmVydGVyIGxvZ2ljIHNwZWNpZmllZCBieSBpbmplY3Rpb24gdG9rZW4gdG8gc291cmNlIGRhdGFcbiAgICovXG4gIGNvbnZlcnQ8UywgVD4oc291cmNlOiBTLCBpbmplY3Rpb25Ub2tlbjogSW5qZWN0aW9uVG9rZW48Q29udmVydGVyPFMsIFQ+Pik6IFQge1xuICAgIGlmICh0aGlzLmhhc0NvbnZlcnRlcnMoaW5qZWN0aW9uVG9rZW4pKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb252ZXJ0U291cmNlKHNvdXJjZSwgaW5qZWN0aW9uVG9rZW4pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gc291cmNlIGFzIGFueTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQXBwbHkgY29udmVydGVyIGxvZ2ljIHNwZWNpZmllZCBieSBpbmplY3Rpb24gdG9rZW4gdG8gYSBjb2xsZWN0aW9uXG4gICAqL1xuICBjb252ZXJ0TWFueTxTLCBUPihcbiAgICBzb3VyY2VzOiBTW10sXG4gICAgaW5qZWN0aW9uVG9rZW46IEluamVjdGlvblRva2VuPENvbnZlcnRlcjxTLCBUPj5cbiAgKTogVFtdIHtcbiAgICBpZiAodGhpcy5oYXNDb252ZXJ0ZXJzKGluamVjdGlvblRva2VuKSAmJiBBcnJheS5pc0FycmF5KHNvdXJjZXMpKSB7XG4gICAgICByZXR1cm4gc291cmNlcy5tYXAoKHNvdXJjZSkgPT5cbiAgICAgICAgdGhpcy5jb252ZXJ0U291cmNlKHNvdXJjZSwgaW5qZWN0aW9uVG9rZW4pXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gc291cmNlcyBhcyBhbnlbXTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNvbnZlcnRTb3VyY2U8UywgVD4oXG4gICAgc291cmNlOiBTLFxuICAgIGluamVjdGlvblRva2VuOiBJbmplY3Rpb25Ub2tlbjxDb252ZXJ0ZXI8UywgVD4+XG4gICk6IFQge1xuICAgIHJldHVybiB0aGlzLmdldENvbnZlcnRlcnMoaW5qZWN0aW9uVG9rZW4pLnJlZHVjZSgodGFyZ2V0LCBjb252ZXJ0ZXIpID0+IHtcbiAgICAgIHJldHVybiBjb252ZXJ0ZXIuY29udmVydChzb3VyY2UsIHRhcmdldCk7XG4gICAgfSwgdW5kZWZpbmVkIGFzIFQpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==