import { Injectable } from '@angular/core';
import { AsmAdapter } from './asm.adapter';
import * as i0 from "@angular/core";
import * as i1 from "./asm.adapter";
export class AsmConnector {
    constructor(asmAdapter) {
        this.asmAdapter = asmAdapter;
    }
    customerSearch(options) {
        return this.asmAdapter.customerSearch(options);
    }
}
AsmConnector.ɵprov = i0.ɵɵdefineInjectable({ factory: function AsmConnector_Factory() { return new AsmConnector(i0.ɵɵinject(i1.AsmAdapter)); }, token: AsmConnector, providedIn: "root" });
AsmConnector.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
AsmConnector.ctorParameters = () => [
    { type: AsmAdapter }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNtLmNvbm5lY3Rvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL2FzbS9jb25uZWN0b3JzL2FzbS5jb25uZWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU0zQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFLM0MsTUFBTSxPQUFPLFlBQVk7SUFDdkIsWUFBc0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtJQUFHLENBQUM7SUFFaEQsY0FBYyxDQUNaLE9BQThCO1FBRTlCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDakQsQ0FBQzs7OztZQVZGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7O1lBSlEsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIEN1c3RvbWVyU2VhcmNoT3B0aW9ucyxcbiAgQ3VzdG9tZXJTZWFyY2hQYWdlLFxufSBmcm9tICcuLi9tb2RlbHMvYXNtLm1vZGVscyc7XG5pbXBvcnQgeyBBc21BZGFwdGVyIH0gZnJvbSAnLi9hc20uYWRhcHRlcic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBBc21Db25uZWN0b3Ige1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgYXNtQWRhcHRlcjogQXNtQWRhcHRlcikge31cblxuICBjdXN0b21lclNlYXJjaChcbiAgICBvcHRpb25zOiBDdXN0b21lclNlYXJjaE9wdGlvbnNcbiAgKTogT2JzZXJ2YWJsZTxDdXN0b21lclNlYXJjaFBhZ2U+IHtcbiAgICByZXR1cm4gdGhpcy5hc21BZGFwdGVyLmN1c3RvbWVyU2VhcmNoKG9wdGlvbnMpO1xuICB9XG59XG4iXX0=