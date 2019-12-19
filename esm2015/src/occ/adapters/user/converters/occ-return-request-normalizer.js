/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ConverterService, } from '../../../../util/converter.service';
import { PRODUCT_NORMALIZER } from '../../../../product/connectors/product/converters';
import * as i0 from "@angular/core";
import * as i1 from "../../../../util/converter.service";
export class OccReturnRequestNormalizer {
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
    convert(source, target) {
        if (target === undefined) {
            target = Object.assign({}, ((/** @type {?} */ (source))));
        }
        if (source.returnEntries) {
            target.returnEntries = source.returnEntries.map((/**
             * @param {?} entry
             * @return {?}
             */
            entry => (Object.assign({}, entry, { orderEntry: this.convertOrderEntry(entry.orderEntry) }))));
        }
        return target;
    }
    /**
     * @private
     * @param {?} source
     * @return {?}
     */
    convertOrderEntry(source) {
        return Object.assign({}, source, { product: this.converter.convert(source.product, PRODUCT_NORMALIZER) });
    }
}
OccReturnRequestNormalizer.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
OccReturnRequestNormalizer.ctorParameters = () => [
    { type: ConverterService }
];
/** @nocollapse */ OccReturnRequestNormalizer.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function OccReturnRequestNormalizer_Factory() { return new OccReturnRequestNormalizer(i0.ɵɵinject(i1.ConverterService)); }, token: OccReturnRequestNormalizer, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    OccReturnRequestNormalizer.prototype.converter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXJldHVybi1yZXF1ZXN0LW5vcm1hbGl6ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvb2NjL2FkYXB0ZXJzL3VzZXIvY29udmVydGVycy9vY2MtcmV0dXJuLXJlcXVlc3Qtbm9ybWFsaXplci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBRUwsZ0JBQWdCLEdBQ2pCLE1BQU0sb0NBQW9DLENBQUM7QUFFNUMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbURBQW1ELENBQUM7OztBQUd2RixNQUFNLE9BQU8sMEJBQTBCOzs7O0lBRXJDLFlBQW9CLFNBQTJCO1FBQTNCLGNBQVMsR0FBVCxTQUFTLENBQWtCO0lBQUcsQ0FBQzs7Ozs7O0lBRW5ELE9BQU8sQ0FBQyxNQUF5QixFQUFFLE1BQXNCO1FBQ3ZELElBQUksTUFBTSxLQUFLLFNBQVMsRUFBRTtZQUN4QixNQUFNLHFCQUFRLENBQUMsbUJBQUEsTUFBTSxFQUFPLENBQUMsQ0FBRSxDQUFDO1NBQ2pDO1FBRUQsSUFBSSxNQUFNLENBQUMsYUFBYSxFQUFFO1lBQ3hCLE1BQU0sQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQyxHQUFHOzs7O1lBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxtQkFDcEQsS0FBSyxJQUNSLFVBQVUsRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxJQUNwRCxFQUFDLENBQUM7U0FDTDtRQUVELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7Ozs7OztJQUVPLGlCQUFpQixDQUFDLE1BQXNCO1FBQzlDLHlCQUNLLE1BQU0sSUFDVCxPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxrQkFBa0IsQ0FBQyxJQUNuRTtJQUNKLENBQUM7OztZQXpCRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7O1lBTGhDLGdCQUFnQjs7Ozs7Ozs7SUFRSiwrQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPY2MgfSBmcm9tICcuLi8uLi8uLi9vY2MtbW9kZWxzL29jYy5tb2RlbHMnO1xuaW1wb3J0IHtcbiAgQ29udmVydGVyLFxuICBDb252ZXJ0ZXJTZXJ2aWNlLFxufSBmcm9tICcuLi8uLi8uLi8uLi91dGlsL2NvbnZlcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7IE9yZGVyRW50cnksIFJldHVyblJlcXVlc3QgfSBmcm9tICcuLi8uLi8uLi8uLi9tb2RlbC9vcmRlci5tb2RlbCc7XG5pbXBvcnQgeyBQUk9EVUNUX05PUk1BTElaRVIgfSBmcm9tICcuLi8uLi8uLi8uLi9wcm9kdWN0L2Nvbm5lY3RvcnMvcHJvZHVjdC9jb252ZXJ0ZXJzJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBPY2NSZXR1cm5SZXF1ZXN0Tm9ybWFsaXplclxuICBpbXBsZW1lbnRzIENvbnZlcnRlcjxPY2MuUmV0dXJuUmVxdWVzdCwgUmV0dXJuUmVxdWVzdD4ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbnZlcnRlcjogQ29udmVydGVyU2VydmljZSkge31cblxuICBjb252ZXJ0KHNvdXJjZTogT2NjLlJldHVyblJlcXVlc3QsIHRhcmdldD86IFJldHVyblJlcXVlc3QpOiBSZXR1cm5SZXF1ZXN0IHtcbiAgICBpZiAodGFyZ2V0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRhcmdldCA9IHsgLi4uKHNvdXJjZSBhcyBhbnkpIH07XG4gICAgfVxuXG4gICAgaWYgKHNvdXJjZS5yZXR1cm5FbnRyaWVzKSB7XG4gICAgICB0YXJnZXQucmV0dXJuRW50cmllcyA9IHNvdXJjZS5yZXR1cm5FbnRyaWVzLm1hcChlbnRyeSA9PiAoe1xuICAgICAgICAuLi5lbnRyeSxcbiAgICAgICAgb3JkZXJFbnRyeTogdGhpcy5jb252ZXJ0T3JkZXJFbnRyeShlbnRyeS5vcmRlckVudHJ5KSxcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9XG5cbiAgcHJpdmF0ZSBjb252ZXJ0T3JkZXJFbnRyeShzb3VyY2U6IE9jYy5PcmRlckVudHJ5KTogT3JkZXJFbnRyeSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnNvdXJjZSxcbiAgICAgIHByb2R1Y3Q6IHRoaXMuY29udmVydGVyLmNvbnZlcnQoc291cmNlLnByb2R1Y3QsIFBST0RVQ1RfTk9STUFMSVpFUiksXG4gICAgfTtcbiAgfVxufVxuIl19