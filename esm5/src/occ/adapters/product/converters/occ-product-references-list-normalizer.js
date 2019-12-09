/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { PRODUCT_NORMALIZER } from '../../../../product/connectors/product/converters';
import { ConverterService, } from '../../../../util/converter.service';
import * as i0 from "@angular/core";
import * as i1 from "../../../../util/converter.service";
var OccProductReferencesListNormalizer = /** @class */ (function () {
    function OccProductReferencesListNormalizer(converter) {
        this.converter = converter;
    }
    /**
     * @param {?} source
     * @param {?=} target
     * @return {?}
     */
    OccProductReferencesListNormalizer.prototype.convert = /**
     * @param {?} source
     * @param {?=} target
     * @return {?}
     */
    function (source, target) {
        var _this = this;
        if (target === void 0) { target = []; }
        if (target === undefined) {
            target = tslib_1.__assign({}, ((/** @type {?} */ (source))));
        }
        if (source && source.references) {
            target = source.references.map((/**
             * @param {?} reference
             * @return {?}
             */
            function (reference) { return (tslib_1.__assign({}, reference, { target: _this.converter.convert(reference.target, PRODUCT_NORMALIZER) })); }));
            return target;
        }
    };
    OccProductReferencesListNormalizer.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    OccProductReferencesListNormalizer.ctorParameters = function () { return [
        { type: ConverterService }
    ]; };
    /** @nocollapse */ OccProductReferencesListNormalizer.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function OccProductReferencesListNormalizer_Factory() { return new OccProductReferencesListNormalizer(i0.ɵɵinject(i1.ConverterService)); }, token: OccProductReferencesListNormalizer, providedIn: "root" });
    return OccProductReferencesListNormalizer;
}());
export { OccProductReferencesListNormalizer };
if (false) {
    /**
     * @type {?}
     * @private
     */
    OccProductReferencesListNormalizer.prototype.converter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXByb2R1Y3QtcmVmZXJlbmNlcy1saXN0LW5vcm1hbGl6ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvb2NjL2FkYXB0ZXJzL3Byb2R1Y3QvY29udmVydGVycy9vY2MtcHJvZHVjdC1yZWZlcmVuY2VzLWxpc3Qtbm9ybWFsaXplci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDdkYsT0FBTyxFQUVMLGdCQUFnQixHQUNqQixNQUFNLG9DQUFvQyxDQUFDOzs7QUFFNUM7SUFHRSw0Q0FBb0IsU0FBMkI7UUFBM0IsY0FBUyxHQUFULFNBQVMsQ0FBa0I7SUFBRyxDQUFDOzs7Ozs7SUFFbkQsb0RBQU87Ozs7O0lBQVAsVUFDRSxNQUFnQyxFQUNoQyxNQUErQjtRQUZqQyxpQkFnQkM7UUFkQyx1QkFBQSxFQUFBLFdBQStCO1FBRS9CLElBQUksTUFBTSxLQUFLLFNBQVMsRUFBRTtZQUN4QixNQUFNLHdCQUFRLENBQUMsbUJBQUEsTUFBTSxFQUFPLENBQUMsQ0FBRSxDQUFDO1NBQ2pDO1FBRUQsSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLFVBQVUsRUFBRTtZQUMvQixNQUFNLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHOzs7O1lBQUMsVUFBQSxTQUFTLElBQUksT0FBQSxzQkFDdkMsU0FBUyxJQUNaLE1BQU0sRUFBRSxLQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLGtCQUFrQixDQUFDLElBQ3BFLEVBSDBDLENBRzFDLEVBQUMsQ0FBQztZQUVKLE9BQU8sTUFBTSxDQUFDO1NBQ2Y7SUFDSCxDQUFDOztnQkFyQkYsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7OztnQkFIaEMsZ0JBQWdCOzs7NkNBTmxCO0NBK0JDLEFBdEJELElBc0JDO1NBckJZLGtDQUFrQzs7Ozs7O0lBRWpDLHVEQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFByb2R1Y3RSZWZlcmVuY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9tb2RlbC9wcm9kdWN0Lm1vZGVsJztcbmltcG9ydCB7IE9jYyB9IGZyb20gJy4uLy4uLy4uL29jYy1tb2RlbHMvb2NjLm1vZGVscyc7XG5pbXBvcnQgeyBQUk9EVUNUX05PUk1BTElaRVIgfSBmcm9tICcuLi8uLi8uLi8uLi9wcm9kdWN0L2Nvbm5lY3RvcnMvcHJvZHVjdC9jb252ZXJ0ZXJzJztcbmltcG9ydCB7XG4gIENvbnZlcnRlcixcbiAgQ29udmVydGVyU2VydmljZSxcbn0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbC9jb252ZXJ0ZXIuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgT2NjUHJvZHVjdFJlZmVyZW5jZXNMaXN0Tm9ybWFsaXplclxuICBpbXBsZW1lbnRzIENvbnZlcnRlcjxPY2MuUHJvZHVjdFJlZmVyZW5jZUxpc3QsIFByb2R1Y3RSZWZlcmVuY2VbXT4ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbnZlcnRlcjogQ29udmVydGVyU2VydmljZSkge31cblxuICBjb252ZXJ0KFxuICAgIHNvdXJjZTogT2NjLlByb2R1Y3RSZWZlcmVuY2VMaXN0LFxuICAgIHRhcmdldDogUHJvZHVjdFJlZmVyZW5jZVtdID0gW11cbiAgKTogUHJvZHVjdFJlZmVyZW5jZVtdIHtcbiAgICBpZiAodGFyZ2V0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRhcmdldCA9IHsgLi4uKHNvdXJjZSBhcyBhbnkpIH07XG4gICAgfVxuXG4gICAgaWYgKHNvdXJjZSAmJiBzb3VyY2UucmVmZXJlbmNlcykge1xuICAgICAgdGFyZ2V0ID0gc291cmNlLnJlZmVyZW5jZXMubWFwKHJlZmVyZW5jZSA9PiAoe1xuICAgICAgICAuLi5yZWZlcmVuY2UsXG4gICAgICAgIHRhcmdldDogdGhpcy5jb252ZXJ0ZXIuY29udmVydChyZWZlcmVuY2UudGFyZ2V0LCBQUk9EVUNUX05PUk1BTElaRVIpLFxuICAgICAgfSkpO1xuXG4gICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH1cbiAgfVxufVxuIl19