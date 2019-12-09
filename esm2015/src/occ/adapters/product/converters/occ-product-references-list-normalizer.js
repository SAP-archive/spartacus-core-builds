/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { PRODUCT_NORMALIZER } from '../../../../product/connectors/product/converters';
import { ConverterService, } from '../../../../util/converter.service';
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
    { type: Injectable }
];
/** @nocollapse */
OccProductReferencesListNormalizer.ctorParameters = () => [
    { type: ConverterService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    OccProductReferencesListNormalizer.prototype.converter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXByb2R1Y3QtcmVmZXJlbmNlcy1saXN0LW5vcm1hbGl6ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvb2NjL2FkYXB0ZXJzL3Byb2R1Y3QvY29udmVydGVycy9vY2MtcHJvZHVjdC1yZWZlcmVuY2VzLWxpc3Qtbm9ybWFsaXplci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUN2RixPQUFPLEVBRUwsZ0JBQWdCLEdBQ2pCLE1BQU0sb0NBQW9DLENBQUM7QUFHNUMsTUFBTSxPQUFPLGtDQUFrQzs7OztJQUU3QyxZQUFvQixTQUEyQjtRQUEzQixjQUFTLEdBQVQsU0FBUyxDQUFrQjtJQUFHLENBQUM7Ozs7OztJQUVuRCxPQUFPLENBQ0wsTUFBZ0MsRUFDaEMsU0FBNkIsRUFBRTtRQUUvQixJQUFJLE1BQU0sS0FBSyxTQUFTLEVBQUU7WUFDeEIsTUFBTSxxQkFBUSxDQUFDLG1CQUFBLE1BQU0sRUFBTyxDQUFDLENBQUUsQ0FBQztTQUNqQztRQUVELElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxVQUFVLEVBQUU7WUFDL0IsTUFBTSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRzs7OztZQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsbUJBQ3ZDLFNBQVMsSUFDWixNQUFNLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxrQkFBa0IsQ0FBQyxJQUNwRSxFQUFDLENBQUM7WUFFSixPQUFPLE1BQU0sQ0FBQztTQUNmO0lBQ0gsQ0FBQzs7O1lBckJGLFVBQVU7Ozs7WUFIVCxnQkFBZ0I7Ozs7Ozs7SUFNSix1REFBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcm9kdWN0UmVmZXJlbmNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vbW9kZWwvcHJvZHVjdC5tb2RlbCc7XG5pbXBvcnQgeyBPY2MgfSBmcm9tICcuLi8uLi8uLi9vY2MtbW9kZWxzL29jYy5tb2RlbHMnO1xuaW1wb3J0IHsgUFJPRFVDVF9OT1JNQUxJWkVSIH0gZnJvbSAnLi4vLi4vLi4vLi4vcHJvZHVjdC9jb25uZWN0b3JzL3Byb2R1Y3QvY29udmVydGVycyc7XG5pbXBvcnQge1xuICBDb252ZXJ0ZXIsXG4gIENvbnZlcnRlclNlcnZpY2UsXG59IGZyb20gJy4uLy4uLy4uLy4uL3V0aWwvY29udmVydGVyLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT2NjUHJvZHVjdFJlZmVyZW5jZXNMaXN0Tm9ybWFsaXplclxuICBpbXBsZW1lbnRzIENvbnZlcnRlcjxPY2MuUHJvZHVjdFJlZmVyZW5jZUxpc3QsIFByb2R1Y3RSZWZlcmVuY2VbXT4ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbnZlcnRlcjogQ29udmVydGVyU2VydmljZSkge31cblxuICBjb252ZXJ0KFxuICAgIHNvdXJjZTogT2NjLlByb2R1Y3RSZWZlcmVuY2VMaXN0LFxuICAgIHRhcmdldDogUHJvZHVjdFJlZmVyZW5jZVtdID0gW11cbiAgKTogUHJvZHVjdFJlZmVyZW5jZVtdIHtcbiAgICBpZiAodGFyZ2V0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRhcmdldCA9IHsgLi4uKHNvdXJjZSBhcyBhbnkpIH07XG4gICAgfVxuXG4gICAgaWYgKHNvdXJjZSAmJiBzb3VyY2UucmVmZXJlbmNlcykge1xuICAgICAgdGFyZ2V0ID0gc291cmNlLnJlZmVyZW5jZXMubWFwKHJlZmVyZW5jZSA9PiAoe1xuICAgICAgICAuLi5yZWZlcmVuY2UsXG4gICAgICAgIHRhcmdldDogdGhpcy5jb252ZXJ0ZXIuY29udmVydChyZWZlcmVuY2UudGFyZ2V0LCBQUk9EVUNUX05PUk1BTElaRVIpLFxuICAgICAgfSkpO1xuXG4gICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH1cbiAgfVxufVxuIl19