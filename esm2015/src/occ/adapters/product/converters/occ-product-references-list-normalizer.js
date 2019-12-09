/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { PRODUCT_NORMALIZER } from '../../../../product/connectors/product/converters';
import { ConverterService, } from '../../../../util/converter.service';
import * as i0 from "@angular/core";
import * as i1 from "../../../../util/converter.service";
export class OccProductReferencesListNormalizer {
    /**
     * @param {?} converter
     */
    constructor(converter) {
        this.converter = converter;
    }
    /**
     * @param {?} source
     * @param {?=} target
     * @return {?}
     */
    convert(source, target = []) {
        if (target === undefined) {
            target = Object.assign({}, ((/** @type {?} */ (source))));
        }
        if (source && source.references) {
            target = source.references.map((/**
             * @param {?} reference
             * @return {?}
             */
            reference => (Object.assign({}, reference, { target: this.converter.convert(reference.target, PRODUCT_NORMALIZER) }))));
            return target;
        }
    }
}
OccProductReferencesListNormalizer.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
OccProductReferencesListNormalizer.ctorParameters = () => [
    { type: ConverterService }
];
/** @nocollapse */ OccProductReferencesListNormalizer.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function OccProductReferencesListNormalizer_Factory() { return new OccProductReferencesListNormalizer(i0.ɵɵinject(i1.ConverterService)); }, token: OccProductReferencesListNormalizer, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    OccProductReferencesListNormalizer.prototype.converter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXByb2R1Y3QtcmVmZXJlbmNlcy1saXN0LW5vcm1hbGl6ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvb2NjL2FkYXB0ZXJzL3Byb2R1Y3QvY29udmVydGVycy9vY2MtcHJvZHVjdC1yZWZlcmVuY2VzLWxpc3Qtbm9ybWFsaXplci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUN2RixPQUFPLEVBRUwsZ0JBQWdCLEdBQ2pCLE1BQU0sb0NBQW9DLENBQUM7OztBQUc1QyxNQUFNLE9BQU8sa0NBQWtDOzs7O0lBRTdDLFlBQW9CLFNBQTJCO1FBQTNCLGNBQVMsR0FBVCxTQUFTLENBQWtCO0lBQUcsQ0FBQzs7Ozs7O0lBRW5ELE9BQU8sQ0FDTCxNQUFnQyxFQUNoQyxTQUE2QixFQUFFO1FBRS9CLElBQUksTUFBTSxLQUFLLFNBQVMsRUFBRTtZQUN4QixNQUFNLHFCQUFRLENBQUMsbUJBQUEsTUFBTSxFQUFPLENBQUMsQ0FBRSxDQUFDO1NBQ2pDO1FBRUQsSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLFVBQVUsRUFBRTtZQUMvQixNQUFNLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHOzs7O1lBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxtQkFDdkMsU0FBUyxJQUNaLE1BQU0sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLGtCQUFrQixDQUFDLElBQ3BFLEVBQUMsQ0FBQztZQUVKLE9BQU8sTUFBTSxDQUFDO1NBQ2Y7SUFDSCxDQUFDOzs7WUFyQkYsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7OztZQUhoQyxnQkFBZ0I7Ozs7Ozs7O0lBTUosdURBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHJvZHVjdFJlZmVyZW5jZSB9IGZyb20gJy4uLy4uLy4uLy4uL21vZGVsL3Byb2R1Y3QubW9kZWwnO1xuaW1wb3J0IHsgT2NjIH0gZnJvbSAnLi4vLi4vLi4vb2NjLW1vZGVscy9vY2MubW9kZWxzJztcbmltcG9ydCB7IFBST0RVQ1RfTk9STUFMSVpFUiB9IGZyb20gJy4uLy4uLy4uLy4uL3Byb2R1Y3QvY29ubmVjdG9ycy9wcm9kdWN0L2NvbnZlcnRlcnMnO1xuaW1wb3J0IHtcbiAgQ29udmVydGVyLFxuICBDb252ZXJ0ZXJTZXJ2aWNlLFxufSBmcm9tICcuLi8uLi8uLi8uLi91dGlsL2NvbnZlcnRlci5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBPY2NQcm9kdWN0UmVmZXJlbmNlc0xpc3ROb3JtYWxpemVyXG4gIGltcGxlbWVudHMgQ29udmVydGVyPE9jYy5Qcm9kdWN0UmVmZXJlbmNlTGlzdCwgUHJvZHVjdFJlZmVyZW5jZVtdPiB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29udmVydGVyOiBDb252ZXJ0ZXJTZXJ2aWNlKSB7fVxuXG4gIGNvbnZlcnQoXG4gICAgc291cmNlOiBPY2MuUHJvZHVjdFJlZmVyZW5jZUxpc3QsXG4gICAgdGFyZ2V0OiBQcm9kdWN0UmVmZXJlbmNlW10gPSBbXVxuICApOiBQcm9kdWN0UmVmZXJlbmNlW10ge1xuICAgIGlmICh0YXJnZXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGFyZ2V0ID0geyAuLi4oc291cmNlIGFzIGFueSkgfTtcbiAgICB9XG5cbiAgICBpZiAoc291cmNlICYmIHNvdXJjZS5yZWZlcmVuY2VzKSB7XG4gICAgICB0YXJnZXQgPSBzb3VyY2UucmVmZXJlbmNlcy5tYXAocmVmZXJlbmNlID0+ICh7XG4gICAgICAgIC4uLnJlZmVyZW5jZSxcbiAgICAgICAgdGFyZ2V0OiB0aGlzLmNvbnZlcnRlci5jb252ZXJ0KHJlZmVyZW5jZS50YXJnZXQsIFBST0RVQ1RfTk9STUFMSVpFUiksXG4gICAgICB9KSk7XG5cbiAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfVxuICB9XG59XG4iXX0=