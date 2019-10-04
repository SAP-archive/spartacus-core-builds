/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { AsmAdapter } from './asm.adapter';
import * as i0 from "@angular/core";
import * as i1 from "./asm.adapter";
export class AsmConnector {
    /**
     * @param {?} asmAdapter
     */
    constructor(asmAdapter) {
        this.asmAdapter = asmAdapter;
    }
    /**
     * @param {?} options
     * @return {?}
     */
    customerSearch(options) {
        return this.asmAdapter.customerSearch(options);
    }
}
AsmConnector.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
AsmConnector.ctorParameters = () => [
    { type: AsmAdapter }
];
/** @nocollapse */ AsmConnector.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function AsmConnector_Factory() { return new AsmConnector(i0.ɵɵinject(i1.AsmAdapter)); }, token: AsmConnector, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AsmConnector.prototype.asmAdapter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNtLmNvbm5lY3Rvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9hc20vY29ubmVjdG9ycy9hc20uY29ubmVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTTNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQUszQyxNQUFNLE9BQU8sWUFBWTs7OztJQUN2QixZQUFzQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO0lBQUcsQ0FBQzs7Ozs7SUFFaEQsY0FBYyxDQUNaLE9BQThCO1FBRTlCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDakQsQ0FBQzs7O1lBVkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBSlEsVUFBVTs7Ozs7Ozs7SUFNTCxrQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBDdXN0b21lclNlYXJjaE9wdGlvbnMsXG4gIEN1c3RvbWVyU2VhcmNoUGFnZSxcbn0gZnJvbSAnLi4vbW9kZWxzL2FzbS5tb2RlbHMnO1xuaW1wb3J0IHsgQXNtQWRhcHRlciB9IGZyb20gJy4vYXNtLmFkYXB0ZXInO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQXNtQ29ubmVjdG9yIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGFzbUFkYXB0ZXI6IEFzbUFkYXB0ZXIpIHt9XG5cbiAgY3VzdG9tZXJTZWFyY2goXG4gICAgb3B0aW9uczogQ3VzdG9tZXJTZWFyY2hPcHRpb25zXG4gICk6IE9ic2VydmFibGU8Q3VzdG9tZXJTZWFyY2hQYWdlPiB7XG4gICAgcmV0dXJuIHRoaXMuYXNtQWRhcHRlci5jdXN0b21lclNlYXJjaChvcHRpb25zKTtcbiAgfVxufVxuIl19