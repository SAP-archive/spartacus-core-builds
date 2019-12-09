/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { ConverterService, } from '../../../../util/converter.service';
import { PRODUCT_NORMALIZER } from '../../../../product/connectors/product/converters';
import * as i0 from "@angular/core";
import * as i1 from "../../../../util/converter.service";
var OccOrderNormalizer = /** @class */ (function () {
    function OccOrderNormalizer(converter) {
        this.converter = converter;
    }
    /**
     * @param {?} source
     * @param {?=} target
     * @return {?}
     */
    OccOrderNormalizer.prototype.convert = /**
     * @param {?} source
     * @param {?=} target
     * @return {?}
     */
    function (source, target) {
        var _this = this;
        if (target === undefined) {
            target = tslib_1.__assign({}, ((/** @type {?} */ (source))));
        }
        if (source.entries) {
            target.entries = source.entries.map((/**
             * @param {?} entry
             * @return {?}
             */
            function (entry) {
                return _this.convertOrderEntry(entry);
            }));
        }
        if (source.consignments) {
            target.consignments = source.consignments.map((/**
             * @param {?} consignment
             * @return {?}
             */
            function (consignment) { return (tslib_1.__assign({}, consignment, { entries: consignment.entries.map((/**
                 * @param {?} entry
                 * @return {?}
                 */
                function (entry) { return (tslib_1.__assign({}, entry, { orderEntry: _this.convertOrderEntry(entry.orderEntry) })); })) })); }));
        }
        if (source.unconsignedEntries) {
            target.unconsignedEntries = source.unconsignedEntries.map((/**
             * @param {?} entry
             * @return {?}
             */
            function (entry) {
                return _this.convertOrderEntry(entry);
            }));
        }
        return target;
    };
    /**
     * @private
     * @param {?} source
     * @return {?}
     */
    OccOrderNormalizer.prototype.convertOrderEntry = /**
     * @private
     * @param {?} source
     * @return {?}
     */
    function (source) {
        return tslib_1.__assign({}, source, { product: this.converter.convert(source.product, PRODUCT_NORMALIZER) });
    };
    OccOrderNormalizer.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    OccOrderNormalizer.ctorParameters = function () { return [
        { type: ConverterService }
    ]; };
    /** @nocollapse */ OccOrderNormalizer.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function OccOrderNormalizer_Factory() { return new OccOrderNormalizer(i0.ɵɵinject(i1.ConverterService)); }, token: OccOrderNormalizer, providedIn: "root" });
    return OccOrderNormalizer;
}());
export { OccOrderNormalizer };
if (false) {
    /**
     * @type {?}
     * @private
     */
    OccOrderNormalizer.prototype.converter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLW9yZGVyLW5vcm1hbGl6ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvb2NjL2FkYXB0ZXJzL2NoZWNrb3V0L2NvbnZlcnRlcnMvb2NjLW9yZGVyLW5vcm1hbGl6ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFFTCxnQkFBZ0IsR0FDakIsTUFBTSxvQ0FBb0MsQ0FBQztBQUU1QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQzs7O0FBRXZGO0lBRUUsNEJBQW9CLFNBQTJCO1FBQTNCLGNBQVMsR0FBVCxTQUFTLENBQWtCO0lBQUcsQ0FBQzs7Ozs7O0lBRW5ELG9DQUFPOzs7OztJQUFQLFVBQVEsTUFBaUIsRUFBRSxNQUFjO1FBQXpDLGlCQTRCQztRQTNCQyxJQUFJLE1BQU0sS0FBSyxTQUFTLEVBQUU7WUFDeEIsTUFBTSx3QkFBUSxDQUFDLG1CQUFBLE1BQU0sRUFBTyxDQUFDLENBQUUsQ0FBQztTQUNqQztRQUVELElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRTtZQUNsQixNQUFNLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRzs7OztZQUFDLFVBQUEsS0FBSztnQkFDdkMsT0FBQSxLQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDO1lBQTdCLENBQTZCLEVBQzlCLENBQUM7U0FDSDtRQUVELElBQUksTUFBTSxDQUFDLFlBQVksRUFBRTtZQUN2QixNQUFNLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsR0FBRzs7OztZQUFDLFVBQUEsV0FBVyxJQUFJLE9BQUEsc0JBQ3hELFdBQVcsSUFDZCxPQUFPLEVBQUUsV0FBVyxDQUFDLE9BQU8sQ0FBQyxHQUFHOzs7O2dCQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsc0JBQ3JDLEtBQUssSUFDUixVQUFVLEVBQUUsS0FBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsSUFDcEQsRUFId0MsQ0FHeEMsRUFBQyxJQUNILEVBTjJELENBTTNELEVBQUMsQ0FBQztTQUNMO1FBRUQsSUFBSSxNQUFNLENBQUMsa0JBQWtCLEVBQUU7WUFDN0IsTUFBTSxDQUFDLGtCQUFrQixHQUFHLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHOzs7O1lBQUMsVUFBQSxLQUFLO2dCQUM3RCxPQUFBLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUM7WUFBN0IsQ0FBNkIsRUFDOUIsQ0FBQztTQUNIO1FBRUQsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7Ozs7O0lBRU8sOENBQWlCOzs7OztJQUF6QixVQUEwQixNQUFzQjtRQUM5Qyw0QkFDSyxNQUFNLElBQ1QsT0FBTyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsa0JBQWtCLENBQUMsSUFDbkU7SUFDSixDQUFDOztnQkF2Q0YsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7OztnQkFMaEMsZ0JBQWdCOzs7NkJBSmxCO0NBaURDLEFBeENELElBd0NDO1NBdkNZLGtCQUFrQjs7Ozs7O0lBQ2pCLHVDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9jYyB9IGZyb20gJy4uLy4uLy4uL29jYy1tb2RlbHMvb2NjLm1vZGVscyc7XG5pbXBvcnQge1xuICBDb252ZXJ0ZXIsXG4gIENvbnZlcnRlclNlcnZpY2UsXG59IGZyb20gJy4uLy4uLy4uLy4uL3V0aWwvY29udmVydGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgT3JkZXIsIE9yZGVyRW50cnkgfSBmcm9tICcuLi8uLi8uLi8uLi9tb2RlbC9vcmRlci5tb2RlbCc7XG5pbXBvcnQgeyBQUk9EVUNUX05PUk1BTElaRVIgfSBmcm9tICcuLi8uLi8uLi8uLi9wcm9kdWN0L2Nvbm5lY3RvcnMvcHJvZHVjdC9jb252ZXJ0ZXJzJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBPY2NPcmRlck5vcm1hbGl6ZXIgaW1wbGVtZW50cyBDb252ZXJ0ZXI8T2NjLk9yZGVyLCBPcmRlcj4ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbnZlcnRlcjogQ29udmVydGVyU2VydmljZSkge31cblxuICBjb252ZXJ0KHNvdXJjZTogT2NjLk9yZGVyLCB0YXJnZXQ/OiBPcmRlcik6IE9yZGVyIHtcbiAgICBpZiAodGFyZ2V0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRhcmdldCA9IHsgLi4uKHNvdXJjZSBhcyBhbnkpIH07XG4gICAgfVxuXG4gICAgaWYgKHNvdXJjZS5lbnRyaWVzKSB7XG4gICAgICB0YXJnZXQuZW50cmllcyA9IHNvdXJjZS5lbnRyaWVzLm1hcChlbnRyeSA9PlxuICAgICAgICB0aGlzLmNvbnZlcnRPcmRlckVudHJ5KGVudHJ5KVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoc291cmNlLmNvbnNpZ25tZW50cykge1xuICAgICAgdGFyZ2V0LmNvbnNpZ25tZW50cyA9IHNvdXJjZS5jb25zaWdubWVudHMubWFwKGNvbnNpZ25tZW50ID0+ICh7XG4gICAgICAgIC4uLmNvbnNpZ25tZW50LFxuICAgICAgICBlbnRyaWVzOiBjb25zaWdubWVudC5lbnRyaWVzLm1hcChlbnRyeSA9PiAoe1xuICAgICAgICAgIC4uLmVudHJ5LFxuICAgICAgICAgIG9yZGVyRW50cnk6IHRoaXMuY29udmVydE9yZGVyRW50cnkoZW50cnkub3JkZXJFbnRyeSksXG4gICAgICAgIH0pKSxcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBpZiAoc291cmNlLnVuY29uc2lnbmVkRW50cmllcykge1xuICAgICAgdGFyZ2V0LnVuY29uc2lnbmVkRW50cmllcyA9IHNvdXJjZS51bmNvbnNpZ25lZEVudHJpZXMubWFwKGVudHJ5ID0+XG4gICAgICAgIHRoaXMuY29udmVydE9yZGVyRW50cnkoZW50cnkpXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH1cblxuICBwcml2YXRlIGNvbnZlcnRPcmRlckVudHJ5KHNvdXJjZTogT2NjLk9yZGVyRW50cnkpOiBPcmRlckVudHJ5IHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uc291cmNlLFxuICAgICAgcHJvZHVjdDogdGhpcy5jb252ZXJ0ZXIuY29udmVydChzb3VyY2UucHJvZHVjdCwgUFJPRFVDVF9OT1JNQUxJWkVSKSxcbiAgICB9O1xuICB9XG59XG4iXX0=