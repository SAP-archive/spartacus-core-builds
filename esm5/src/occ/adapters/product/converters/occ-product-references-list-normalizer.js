/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { PRODUCT_NORMALIZER } from '../../../../product/connectors/product/converters';
import { ConverterService, } from '../../../../util/converter.service';
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
        { type: Injectable }
    ];
    /** @nocollapse */
    OccProductReferencesListNormalizer.ctorParameters = function () { return [
        { type: ConverterService }
    ]; };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXByb2R1Y3QtcmVmZXJlbmNlcy1saXN0LW5vcm1hbGl6ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvb2NjL2FkYXB0ZXJzL3Byb2R1Y3QvY29udmVydGVycy9vY2MtcHJvZHVjdC1yZWZlcmVuY2VzLWxpc3Qtbm9ybWFsaXplci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDdkYsT0FBTyxFQUVMLGdCQUFnQixHQUNqQixNQUFNLG9DQUFvQyxDQUFDO0FBRTVDO0lBR0UsNENBQW9CLFNBQTJCO1FBQTNCLGNBQVMsR0FBVCxTQUFTLENBQWtCO0lBQUcsQ0FBQzs7Ozs7O0lBRW5ELG9EQUFPOzs7OztJQUFQLFVBQ0UsTUFBZ0MsRUFDaEMsTUFBK0I7UUFGakMsaUJBZ0JDO1FBZEMsdUJBQUEsRUFBQSxXQUErQjtRQUUvQixJQUFJLE1BQU0sS0FBSyxTQUFTLEVBQUU7WUFDeEIsTUFBTSx3QkFBUSxDQUFDLG1CQUFBLE1BQU0sRUFBTyxDQUFDLENBQUUsQ0FBQztTQUNqQztRQUVELElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxVQUFVLEVBQUU7WUFDL0IsTUFBTSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRzs7OztZQUFDLFVBQUEsU0FBUyxJQUFJLE9BQUEsc0JBQ3ZDLFNBQVMsSUFDWixNQUFNLEVBQUUsS0FBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxrQkFBa0IsQ0FBQyxJQUNwRSxFQUgwQyxDQUcxQyxFQUFDLENBQUM7WUFFSixPQUFPLE1BQU0sQ0FBQztTQUNmO0lBQ0gsQ0FBQzs7Z0JBckJGLFVBQVU7Ozs7Z0JBSFQsZ0JBQWdCOztJQXlCbEIseUNBQUM7Q0FBQSxBQXRCRCxJQXNCQztTQXJCWSxrQ0FBa0M7Ozs7OztJQUVqQyx1REFBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcm9kdWN0UmVmZXJlbmNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vbW9kZWwvcHJvZHVjdC5tb2RlbCc7XG5pbXBvcnQgeyBPY2MgfSBmcm9tICcuLi8uLi8uLi9vY2MtbW9kZWxzL29jYy5tb2RlbHMnO1xuaW1wb3J0IHsgUFJPRFVDVF9OT1JNQUxJWkVSIH0gZnJvbSAnLi4vLi4vLi4vLi4vcHJvZHVjdC9jb25uZWN0b3JzL3Byb2R1Y3QvY29udmVydGVycyc7XG5pbXBvcnQge1xuICBDb252ZXJ0ZXIsXG4gIENvbnZlcnRlclNlcnZpY2UsXG59IGZyb20gJy4uLy4uLy4uLy4uL3V0aWwvY29udmVydGVyLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT2NjUHJvZHVjdFJlZmVyZW5jZXNMaXN0Tm9ybWFsaXplclxuICBpbXBsZW1lbnRzIENvbnZlcnRlcjxPY2MuUHJvZHVjdFJlZmVyZW5jZUxpc3QsIFByb2R1Y3RSZWZlcmVuY2VbXT4ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbnZlcnRlcjogQ29udmVydGVyU2VydmljZSkge31cblxuICBjb252ZXJ0KFxuICAgIHNvdXJjZTogT2NjLlByb2R1Y3RSZWZlcmVuY2VMaXN0LFxuICAgIHRhcmdldDogUHJvZHVjdFJlZmVyZW5jZVtdID0gW11cbiAgKTogUHJvZHVjdFJlZmVyZW5jZVtdIHtcbiAgICBpZiAodGFyZ2V0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRhcmdldCA9IHsgLi4uKHNvdXJjZSBhcyBhbnkpIH07XG4gICAgfVxuXG4gICAgaWYgKHNvdXJjZSAmJiBzb3VyY2UucmVmZXJlbmNlcykge1xuICAgICAgdGFyZ2V0ID0gc291cmNlLnJlZmVyZW5jZXMubWFwKHJlZmVyZW5jZSA9PiAoe1xuICAgICAgICAuLi5yZWZlcmVuY2UsXG4gICAgICAgIHRhcmdldDogdGhpcy5jb252ZXJ0ZXIuY29udmVydChyZWZlcmVuY2UudGFyZ2V0LCBQUk9EVUNUX05PUk1BTElaRVIpLFxuICAgICAgfSkpO1xuXG4gICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH1cbiAgfVxufVxuIl19