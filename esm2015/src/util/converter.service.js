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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udmVydGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL3NyYy91dGlsL2NvbnZlcnRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQTZCLE1BQU0sZUFBZSxDQUFDO0FBQ3RFLE9BQU8sRUFBZ0MsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDMUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7QUF3QnpELE1BQU0sT0FBTyxnQkFBZ0I7SUFHM0IsWUFBc0IsZUFBZ0M7UUFBaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBRjVDLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQVdyQyxlQUFVLEdBR2QsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQVhaLG9EQUFvRDtRQUNwRCxNQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQzFELEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQ25DLENBQUM7UUFFRixJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBT08sYUFBYSxDQUNuQixjQUErQztRQUUvQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLEVBQUU7WUFDeEMsTUFBTSxVQUFVLEdBQUcsZ0JBQWdCLENBQ2pDLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUM5QyxDQUFDO1lBQ0YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1NBQ2pEO1FBRUQsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxhQUFhLENBQ1gsY0FBK0M7UUFFL0MsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUN0RCxPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVEOztPQUVHO0lBQ0gsUUFBUSxDQUNOLGNBQStDO1FBRS9DLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsRUFBRTtZQUN0QyxPQUFPLEdBQUcsQ0FBQyxDQUFDLEtBQVEsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsY0FBYyxDQUFDLENBQUMsQ0FBQztTQUNyRTthQUFNO1lBQ0wsT0FBTyxDQUFDLFVBQTJCLEVBQUUsRUFBRSxDQUFDLFVBQTJCLENBQUM7U0FDckU7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxZQUFZLENBQ1YsY0FBK0M7UUFFL0MsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxFQUFFO1lBQ3RDLE9BQU8sR0FBRyxDQUFDLENBQUMsS0FBVSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxjQUFjLENBQUMsQ0FBQyxDQUFDO1NBQ3JFO2FBQU07WUFDTCxPQUFPLENBQUMsVUFBNkIsRUFBRSxFQUFFLENBQUMsVUFBNkIsQ0FBQztTQUN6RTtJQUNILENBQUM7SUFFRDs7T0FFRztJQUNILE9BQU8sQ0FBTyxNQUFTLEVBQUUsY0FBK0M7UUFDdEUsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxFQUFFO1lBQ3RDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsY0FBYyxDQUFDLENBQUM7U0FDbkQ7YUFBTTtZQUNMLE9BQU8sTUFBYSxDQUFDO1NBQ3RCO0lBQ0gsQ0FBQztJQUVEOztPQUVHO0lBQ0gsV0FBVyxDQUNULE9BQVksRUFDWixjQUErQztRQUUvQyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUNoRSxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUM1QixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxjQUFjLENBQUMsQ0FDM0MsQ0FBQztTQUNIO2FBQU07WUFDTCxPQUFPLE9BQWdCLENBQUM7U0FDekI7SUFDSCxDQUFDO0lBRU8sYUFBYSxDQUNuQixNQUFTLEVBQ1QsY0FBK0M7UUFFL0MsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsRUFBRTtZQUNyRSxPQUFPLFNBQVMsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzNDLENBQUMsRUFBRSxTQUFjLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbkMsQ0FBQzs7OztZQTNHRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7OztZQXhCUSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0aW9uVG9rZW4sIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgT3BlcmF0b3JGdW5jdGlvbiwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFVuaWZpZWRJbmplY3RvciB9IGZyb20gJy4uL2xhenktbG9hZGluZy91bmlmaWVkLWluamVjdG9yJztcbmltcG9ydCB7IGdldExhc3RWYWx1ZVN5bmMgfSBmcm9tICcuL2dldC1sYXN0LXZhbHVlLXN5bmMnO1xuXG4vKipcbiAqIENvbnZlcnRlciBpcyB1c2VkIHRvIGNvbnZlcnQgc291cmNlIGRhdGEgbW9kZWwgdG8gdGFyZ2V0IGRhdGEgbW9kZWwuXG4gKiBCeSBjb252ZW50aW9uLCB3ZSBkaXN0aW5ndWlzaCB0d28gZmxvd3M6XG4gKiAgIC0gKk5vcm1hbGl6ZSogaXMgdGhlIGNvbnZlcnNpb24gZnJvbSBiYWNrZW5kIG1vZGVscyB0byBVSSBtb2RlbHNcbiAqICAgLSAqU2VyaWFsaXplKiBpcyB0aGUgY29udmVyc2lvbiBvZiBVSSBtb2RlbHMgdG8gYmFja2VuZCBtb2RlbHMgKGluIGNhc2Ugb2Ygc3VibWl0dGluZyBkYXRhIHRvIHRoZSBiYWNrZW5kKS5cbiAqXG4gKiBDb252ZXJ0ZXJzIGNhbiBiZSBzdGFja2VkIHRvZ2V0aGVyIHRvIHRvIGFwcGx5IGRlY291cGxlZCBjdXN0b21pemF0aW9uc1xuICovXG5leHBvcnQgaW50ZXJmYWNlIENvbnZlcnRlcjxTLCBUPiB7XG4gIC8qKlxuICAgKiBDb252ZXJ0IGNvbnZlcnRzIHNvdXJjZSBtb2RlbCB0byB0YXJnZXQgbW9kZWwuIENhbiB1c2Ugb3B0aW9uYWwgdGFyZ2V0IHBhcmFtZXRlcixcbiAgICogdXNlZCBpbiBjYXNlIG9mIHN0YWNraW5nIG11bHRpcGxlIGNvbnZlcnRlcnMgKGZvciBleGFtcGxlLCB0byBpbXBsZW1lbnQgcG9wdWxhdG9yIHBhdHRlcm4pLlxuICAgKlxuICAgKiBAcGFyYW0gc291cmNlIFNvdXJjZSBkYXRhIG1vZGVsXG4gICAqIEBwYXJhbSB0YXJnZXQgT3B0aW9uYWwsIHBhcnRpYWxseSBjb252ZXJ0ZWQgdGFyZ2V0IG1vZGVsXG4gICAqL1xuICBjb252ZXJ0KHNvdXJjZTogUywgdGFyZ2V0PzogVCk6IFQ7XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDb252ZXJ0ZXJTZXJ2aWNlIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcHJvdGVjdGVkIHN1YnNjcmlwdGlvbnMgPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHVuaWZpZWRJbmplY3RvcjogVW5pZmllZEluamVjdG9yKSB7XG4gICAgLy8gQ2xlYXIgY2FjaGVkIGNvbnZlcnRlcnMgd2hlbiBuZXcgaW5qZWN0b3JzIGFwcGVhclxuICAgIGNvbnN0IGNhY2hlUmVzZXRMb2dpYyA9IHRoaXMudW5pZmllZEluamVjdG9yLmluamVjdG9ycyQucGlwZShcbiAgICAgIHRhcCgoKSA9PiB0aGlzLmNvbnZlcnRlcnMuY2xlYXIoKSlcbiAgICApO1xuXG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLmFkZChjYWNoZVJlc2V0TG9naWMuc3Vic2NyaWJlKCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBjb252ZXJ0ZXJzOiBNYXA8XG4gICAgSW5qZWN0aW9uVG9rZW48Q29udmVydGVyPGFueSwgYW55Pj4sXG4gICAgQ29udmVydGVyPGFueSwgYW55PltdXG4gID4gPSBuZXcgTWFwKCk7XG5cbiAgcHJpdmF0ZSBnZXRDb252ZXJ0ZXJzPFMsIFQ+KFxuICAgIGluamVjdGlvblRva2VuOiBJbmplY3Rpb25Ub2tlbjxDb252ZXJ0ZXI8UywgVD4+XG4gICk6IENvbnZlcnRlcjxTLCBUPltdIHtcbiAgICBpZiAoIXRoaXMuY29udmVydGVycy5oYXMoaW5qZWN0aW9uVG9rZW4pKSB7XG4gICAgICBjb25zdCBjb252ZXJ0ZXJzID0gZ2V0TGFzdFZhbHVlU3luYyhcbiAgICAgICAgdGhpcy51bmlmaWVkSW5qZWN0b3IuZ2V0TXVsdGkoaW5qZWN0aW9uVG9rZW4pXG4gICAgICApO1xuICAgICAgdGhpcy5jb252ZXJ0ZXJzLnNldChpbmplY3Rpb25Ub2tlbiwgY29udmVydGVycyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuY29udmVydGVycy5nZXQoaW5qZWN0aW9uVG9rZW4pO1xuICB9XG5cbiAgLyoqXG4gICAqIFdpbGwgcmV0dXJuIHRydWUgaWYgY29udmVydGVycyBmb3Igc3BlY2lmaWVkIHRva2VuIHdlcmUgcHJvdmlkZWRcbiAgICovXG4gIGhhc0NvbnZlcnRlcnM8UywgVD4oXG4gICAgaW5qZWN0aW9uVG9rZW46IEluamVjdGlvblRva2VuPENvbnZlcnRlcjxTLCBUPj5cbiAgKTogYm9vbGVhbiB7XG4gICAgY29uc3QgY29udmVydGVycyA9IHRoaXMuZ2V0Q29udmVydGVycyhpbmplY3Rpb25Ub2tlbik7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoY29udmVydGVycykgJiYgY29udmVydGVycy5sZW5ndGggPiAwO1xuICB9XG5cbiAgLyoqXG4gICAqIFBpcGVhYmxlIG9wZXJhdG9yIHRvIGFwcGx5IGNvbnZlcnRlciBsb2dpYyBpbiBhIG9ic2VydmFibGUgc3RyZWFtXG4gICAqL1xuICBwaXBlYWJsZTxTLCBUPihcbiAgICBpbmplY3Rpb25Ub2tlbjogSW5qZWN0aW9uVG9rZW48Q29udmVydGVyPFMsIFQ+PlxuICApOiBPcGVyYXRvckZ1bmN0aW9uPFMsIFQ+IHtcbiAgICBpZiAodGhpcy5oYXNDb252ZXJ0ZXJzKGluamVjdGlvblRva2VuKSkge1xuICAgICAgcmV0dXJuIG1hcCgobW9kZWw6IFMpID0+IHRoaXMuY29udmVydFNvdXJjZShtb2RlbCwgaW5qZWN0aW9uVG9rZW4pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChvYnNlcnZhYmxlOiBPYnNlcnZhYmxlPGFueT4pID0+IG9ic2VydmFibGUgYXMgT2JzZXJ2YWJsZTxUPjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUGlwZWFibGUgb3BlcmF0b3IgdG8gYXBwbHkgY29udmVydGVyIGxvZ2ljIGluIGEgb2JzZXJ2YWJsZSBzdHJlYW0gdG8gY29sbGVjdGlvbiBvZiBpdGVtc1xuICAgKi9cbiAgcGlwZWFibGVNYW55PFMsIFQ+KFxuICAgIGluamVjdGlvblRva2VuOiBJbmplY3Rpb25Ub2tlbjxDb252ZXJ0ZXI8UywgVD4+XG4gICk6IE9wZXJhdG9yRnVuY3Rpb248U1tdLCBUW10+IHtcbiAgICBpZiAodGhpcy5oYXNDb252ZXJ0ZXJzKGluamVjdGlvblRva2VuKSkge1xuICAgICAgcmV0dXJuIG1hcCgobW9kZWw6IFNbXSkgPT4gdGhpcy5jb252ZXJ0TWFueShtb2RlbCwgaW5qZWN0aW9uVG9rZW4pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChvYnNlcnZhYmxlOiBPYnNlcnZhYmxlPGFueVtdPikgPT4gb2JzZXJ2YWJsZSBhcyBPYnNlcnZhYmxlPFRbXT47XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFwcGx5IGNvbnZlcnRlciBsb2dpYyBzcGVjaWZpZWQgYnkgaW5qZWN0aW9uIHRva2VuIHRvIHNvdXJjZSBkYXRhXG4gICAqL1xuICBjb252ZXJ0PFMsIFQ+KHNvdXJjZTogUywgaW5qZWN0aW9uVG9rZW46IEluamVjdGlvblRva2VuPENvbnZlcnRlcjxTLCBUPj4pOiBUIHtcbiAgICBpZiAodGhpcy5oYXNDb252ZXJ0ZXJzKGluamVjdGlvblRva2VuKSkge1xuICAgICAgcmV0dXJuIHRoaXMuY29udmVydFNvdXJjZShzb3VyY2UsIGluamVjdGlvblRva2VuKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHNvdXJjZSBhcyBhbnk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFwcGx5IGNvbnZlcnRlciBsb2dpYyBzcGVjaWZpZWQgYnkgaW5qZWN0aW9uIHRva2VuIHRvIGEgY29sbGVjdGlvblxuICAgKi9cbiAgY29udmVydE1hbnk8UywgVD4oXG4gICAgc291cmNlczogU1tdLFxuICAgIGluamVjdGlvblRva2VuOiBJbmplY3Rpb25Ub2tlbjxDb252ZXJ0ZXI8UywgVD4+XG4gICk6IFRbXSB7XG4gICAgaWYgKHRoaXMuaGFzQ29udmVydGVycyhpbmplY3Rpb25Ub2tlbikgJiYgQXJyYXkuaXNBcnJheShzb3VyY2VzKSkge1xuICAgICAgcmV0dXJuIHNvdXJjZXMubWFwKChzb3VyY2UpID0+XG4gICAgICAgIHRoaXMuY29udmVydFNvdXJjZShzb3VyY2UsIGluamVjdGlvblRva2VuKVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHNvdXJjZXMgYXMgYW55W107XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjb252ZXJ0U291cmNlPFMsIFQ+KFxuICAgIHNvdXJjZTogUyxcbiAgICBpbmplY3Rpb25Ub2tlbjogSW5qZWN0aW9uVG9rZW48Q29udmVydGVyPFMsIFQ+PlxuICApOiBUIHtcbiAgICByZXR1cm4gdGhpcy5nZXRDb252ZXJ0ZXJzKGluamVjdGlvblRva2VuKS5yZWR1Y2UoKHRhcmdldCwgY29udmVydGVyKSA9PiB7XG4gICAgICByZXR1cm4gY29udmVydGVyLmNvbnZlcnQoc291cmNlLCB0YXJnZXQpO1xuICAgIH0sIHVuZGVmaW5lZCBhcyBUKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=