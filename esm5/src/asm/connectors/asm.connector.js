/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { AsmAdapter } from './asm.adapter';
import * as i0 from "@angular/core";
import * as i1 from "./asm.adapter";
var AsmConnector = /** @class */ (function () {
    function AsmConnector(asmAdapter) {
        this.asmAdapter = asmAdapter;
    }
    /**
     * @param {?} options
     * @return {?}
     */
    AsmConnector.prototype.customerSearch = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        return this.asmAdapter.customerSearch(options);
    };
    AsmConnector.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    AsmConnector.ctorParameters = function () { return [
        { type: AsmAdapter }
    ]; };
    /** @nocollapse */ AsmConnector.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function AsmConnector_Factory() { return new AsmConnector(i0.ɵɵinject(i1.AsmAdapter)); }, token: AsmConnector, providedIn: "root" });
    return AsmConnector;
}());
export { AsmConnector };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AsmConnector.prototype.asmAdapter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNtLmNvbm5lY3Rvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9hc20vY29ubmVjdG9ycy9hc20uY29ubmVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTTNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQUUzQztJQUlFLHNCQUFzQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO0lBQUcsQ0FBQzs7Ozs7SUFFaEQscUNBQWM7Ozs7SUFBZCxVQUNFLE9BQThCO1FBRTlCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDakQsQ0FBQzs7Z0JBVkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFKUSxVQUFVOzs7dUJBTm5CO0NBbUJDLEFBWEQsSUFXQztTQVJZLFlBQVk7Ozs7OztJQUNYLGtDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIEN1c3RvbWVyU2VhcmNoT3B0aW9ucyxcbiAgQ3VzdG9tZXJTZWFyY2hQYWdlLFxufSBmcm9tICcuLi9tb2RlbHMvYXNtLm1vZGVscyc7XG5pbXBvcnQgeyBBc21BZGFwdGVyIH0gZnJvbSAnLi9hc20uYWRhcHRlcic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBBc21Db25uZWN0b3Ige1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgYXNtQWRhcHRlcjogQXNtQWRhcHRlcikge31cblxuICBjdXN0b21lclNlYXJjaChcbiAgICBvcHRpb25zOiBDdXN0b21lclNlYXJjaE9wdGlvbnNcbiAgKTogT2JzZXJ2YWJsZTxDdXN0b21lclNlYXJjaFBhZ2U+IHtcbiAgICByZXR1cm4gdGhpcy5hc21BZGFwdGVyLmN1c3RvbWVyU2VhcmNoKG9wdGlvbnMpO1xuICB9XG59XG4iXX0=