import { Injectable, InjectFlags, Injector, } from '@angular/core';
import { LazyModulesService } from './lazy-modules.service';
import { filter, map, scan, startWith } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "./lazy-modules.service";
const NOT_FOUND_SYMBOL = {};
/**
 * UnifiedInjector provides a way to get instances of tokens not only once, from the root injector,
 * but also from lazy loaded module injectors that can be initialized over time.
 */
export class UnifiedInjector {
    constructor(rootInjector, lazyModules) {
        this.rootInjector = rootInjector;
        this.lazyModules = lazyModules;
        /**
         * Gather all the injectors, with the root injector as a first one
         *
         * @private
         */
        this.injectors$ = this.lazyModules.modules$.pipe(map((moduleRef) => moduleRef.injector), startWith(this.rootInjector));
    }
    /**
     * Gen instances for specified tokens.
     *
     * When notFoundValue is provided, it will consistently emit once per injector,
     * even if injector doesn't contain instances for specified token.
     * Otherwise, emissions will only involve cases, where new instances will be found.
     *
     * @param token
     * @param notFoundValue
     */
    get(token, notFoundValue) {
        return this.injectors$.pipe(map((injector, index) => injector.get(token, notFoundValue !== null && notFoundValue !== void 0 ? notFoundValue : NOT_FOUND_SYMBOL, 
        // we want to get only Self instances from all injectors except the
        // first one, which is a root injector
        index ? InjectFlags.Self : undefined)), filter((instance) => instance !== NOT_FOUND_SYMBOL));
    }
    getMulti(token) {
        return this.get(token, []).pipe(filter((instances) => {
            if (!Array.isArray(instances)) {
                throw new Error(`Multi-providers mixed with single providers for ${token.toString()}!`);
            }
            return instances.length > 0;
        }), scan((acc, services) => [...acc, ...services], []));
    }
}
UnifiedInjector.ɵprov = i0.ɵɵdefineInjectable({ factory: function UnifiedInjector_Factory() { return new UnifiedInjector(i0.ɵɵinject(i0.INJECTOR), i0.ɵɵinject(i1.LazyModulesService)); }, token: UnifiedInjector, providedIn: "root" });
UnifiedInjector.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
UnifiedInjector.ctorParameters = () => [
    { type: Injector },
    { type: LazyModulesService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pZmllZC1pbmplY3Rvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL2xhenktbG9hZGluZy91bmlmaWVkLWluamVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFFTCxVQUFVLEVBQ1YsV0FBVyxFQUVYLFFBQVEsR0FFVCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUU1RCxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQUU5RCxNQUFNLGdCQUFnQixHQUFRLEVBQUUsQ0FBQztBQUVqQzs7O0dBR0c7QUFJSCxNQUFNLE9BQU8sZUFBZTtJQVcxQixZQUNZLFlBQXNCLEVBQ3RCLFdBQStCO1FBRC9CLGlCQUFZLEdBQVosWUFBWSxDQUFVO1FBQ3RCLGdCQUFXLEdBQVgsV0FBVyxDQUFvQjtRQVozQzs7OztXQUlHO1FBQ0ssZUFBVSxHQUF5QixJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3ZFLEdBQUcsQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxFQUN0QyxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUM3QixDQUFDO0lBS0MsQ0FBQztJQUVKOzs7Ozs7Ozs7T0FTRztJQUNILEdBQUcsQ0FDRCxLQUFvRCxFQUNwRCxhQUFpQjtRQUVqQixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUN6QixHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FDdEIsUUFBUSxDQUFDLEdBQUcsQ0FDVixLQUFLLEVBQ0wsYUFBYSxhQUFiLGFBQWEsY0FBYixhQUFhLEdBQUksZ0JBQWdCO1FBQ2pDLG1FQUFtRTtRQUNuRSxzQ0FBc0M7UUFDdEMsS0FBSyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQ3JDLENBQ0YsRUFDRCxNQUFNLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLFFBQVEsS0FBSyxnQkFBZ0IsQ0FBQyxDQUNwRCxDQUFDO0lBQ0osQ0FBQztJQVdELFFBQVEsQ0FDTixLQUEwRDtRQUUxRCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FDN0IsTUFBTSxDQUFDLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFDbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUU7Z0JBQzdCLE1BQU0sSUFBSSxLQUFLLENBQ2IsbURBQW1ELEtBQUssQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUN2RSxDQUFDO2FBQ0g7WUFDRCxPQUFPLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQzlCLENBQUMsQ0FBQyxFQUNGLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUUsR0FBRyxRQUFRLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FDbkQsQ0FBQztJQUNKLENBQUM7Ozs7WUF0RUYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7WUFmQyxRQUFRO1lBR0Qsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWJzdHJhY3RUeXBlLFxuICBJbmplY3RhYmxlLFxuICBJbmplY3RGbGFncyxcbiAgSW5qZWN0aW9uVG9rZW4sXG4gIEluamVjdG9yLFxuICBUeXBlLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExhenlNb2R1bGVzU2VydmljZSB9IGZyb20gJy4vbGF6eS1tb2R1bGVzLnNlcnZpY2UnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHNjYW4sIHN0YXJ0V2l0aCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuY29uc3QgTk9UX0ZPVU5EX1NZTUJPTDogYW55ID0ge307XG5cbi8qKlxuICogVW5pZmllZEluamVjdG9yIHByb3ZpZGVzIGEgd2F5IHRvIGdldCBpbnN0YW5jZXMgb2YgdG9rZW5zIG5vdCBvbmx5IG9uY2UsIGZyb20gdGhlIHJvb3QgaW5qZWN0b3IsXG4gKiBidXQgYWxzbyBmcm9tIGxhenkgbG9hZGVkIG1vZHVsZSBpbmplY3RvcnMgdGhhdCBjYW4gYmUgaW5pdGlhbGl6ZWQgb3ZlciB0aW1lLlxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgVW5pZmllZEluamVjdG9yIHtcbiAgLyoqXG4gICAqIEdhdGhlciBhbGwgdGhlIGluamVjdG9ycywgd2l0aCB0aGUgcm9vdCBpbmplY3RvciBhcyBhIGZpcnN0IG9uZVxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcHJpdmF0ZSBpbmplY3RvcnMkOiBPYnNlcnZhYmxlPEluamVjdG9yPiA9IHRoaXMubGF6eU1vZHVsZXMubW9kdWxlcyQucGlwZShcbiAgICBtYXAoKG1vZHVsZVJlZikgPT4gbW9kdWxlUmVmLmluamVjdG9yKSxcbiAgICBzdGFydFdpdGgodGhpcy5yb290SW5qZWN0b3IpXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHJvb3RJbmplY3RvcjogSW5qZWN0b3IsXG4gICAgcHJvdGVjdGVkIGxhenlNb2R1bGVzOiBMYXp5TW9kdWxlc1NlcnZpY2VcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBHZW4gaW5zdGFuY2VzIGZvciBzcGVjaWZpZWQgdG9rZW5zLlxuICAgKlxuICAgKiBXaGVuIG5vdEZvdW5kVmFsdWUgaXMgcHJvdmlkZWQsIGl0IHdpbGwgY29uc2lzdGVudGx5IGVtaXQgb25jZSBwZXIgaW5qZWN0b3IsXG4gICAqIGV2ZW4gaWYgaW5qZWN0b3IgZG9lc24ndCBjb250YWluIGluc3RhbmNlcyBmb3Igc3BlY2lmaWVkIHRva2VuLlxuICAgKiBPdGhlcndpc2UsIGVtaXNzaW9ucyB3aWxsIG9ubHkgaW52b2x2ZSBjYXNlcywgd2hlcmUgbmV3IGluc3RhbmNlcyB3aWxsIGJlIGZvdW5kLlxuICAgKlxuICAgKiBAcGFyYW0gdG9rZW5cbiAgICogQHBhcmFtIG5vdEZvdW5kVmFsdWVcbiAgICovXG4gIGdldDxUPihcbiAgICB0b2tlbjogVHlwZTxUPiB8IEluamVjdGlvblRva2VuPFQ+IHwgQWJzdHJhY3RUeXBlPFQ+LFxuICAgIG5vdEZvdW5kVmFsdWU/OiBUXG4gICk6IE9ic2VydmFibGU8VD4ge1xuICAgIHJldHVybiB0aGlzLmluamVjdG9ycyQucGlwZShcbiAgICAgIG1hcCgoaW5qZWN0b3IsIGluZGV4KSA9PlxuICAgICAgICBpbmplY3Rvci5nZXQ8VD4oXG4gICAgICAgICAgdG9rZW4sXG4gICAgICAgICAgbm90Rm91bmRWYWx1ZSA/PyBOT1RfRk9VTkRfU1lNQk9MLFxuICAgICAgICAgIC8vIHdlIHdhbnQgdG8gZ2V0IG9ubHkgU2VsZiBpbnN0YW5jZXMgZnJvbSBhbGwgaW5qZWN0b3JzIGV4Y2VwdCB0aGVcbiAgICAgICAgICAvLyBmaXJzdCBvbmUsIHdoaWNoIGlzIGEgcm9vdCBpbmplY3RvclxuICAgICAgICAgIGluZGV4ID8gSW5qZWN0RmxhZ3MuU2VsZiA6IHVuZGVmaW5lZFxuICAgICAgICApXG4gICAgICApLFxuICAgICAgZmlsdGVyKChpbnN0YW5jZSkgPT4gaW5zdGFuY2UgIT09IE5PVF9GT1VORF9TWU1CT0wpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgbXVsdGkgcHJvdmlkZWQgaW5zdGFuY2VzIGZvciBhIHNwZWNpZmllZCB0b2tlblxuICAgKlxuICAgKiBAcGFyYW0gdG9rZW5cbiAgICovXG4gIGdldE11bHRpPFQ+KFxuICAgIHRva2VuOiBUeXBlPFQ+IHwgSW5qZWN0aW9uVG9rZW48VD4gfCBBYnN0cmFjdFR5cGU8VD5cbiAgKTogT2JzZXJ2YWJsZTxUW10+O1xuICBnZXRNdWx0aTxUPih0b2tlbjogYW55KTogT2JzZXJ2YWJsZTxUPjtcbiAgZ2V0TXVsdGk8VD4oXG4gICAgdG9rZW46IFR5cGU8VD4gfCBJbmplY3Rpb25Ub2tlbjxUPiB8IEFic3RyYWN0VHlwZTxUPiB8IGFueVxuICApOiBPYnNlcnZhYmxlPFRbXT4ge1xuICAgIHJldHVybiB0aGlzLmdldCh0b2tlbiwgW10pLnBpcGUoXG4gICAgICBmaWx0ZXIoKGluc3RhbmNlcykgPT4ge1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoaW5zdGFuY2VzKSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBNdWx0aS1wcm92aWRlcnMgbWl4ZWQgd2l0aCBzaW5nbGUgcHJvdmlkZXJzIGZvciAke3Rva2VuLnRvU3RyaW5nKCl9IWBcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbnN0YW5jZXMubGVuZ3RoID4gMDtcbiAgICAgIH0pLFxuICAgICAgc2NhbigoYWNjLCBzZXJ2aWNlcykgPT4gWy4uLmFjYywgLi4uc2VydmljZXNdLCBbXSlcbiAgICApO1xuICB9XG59XG4iXX0=