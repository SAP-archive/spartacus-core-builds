/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { ConverterService } from '../../../util/converter.service';
import { PRODUCT_NORMALIZER } from '../../../product/connectors/product/converters';
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
            target.entries = source.entries.map(function (entry) {
                return _this.convertOrderEntry(entry);
            });
        }
        if (source.consignments) {
            target.consignments = source.consignments.map(function (consignment) { return (tslib_1.__assign({}, consignment, { entries: consignment.entries.map(function (entry) { return (tslib_1.__assign({}, entry, { orderEntry: _this.convertOrderEntry(entry.orderEntry) })); }) })); });
        }
        if (source.unconsignedEntries) {
            target.unconsignedEntries = source.unconsignedEntries.map(function (entry) {
                return _this.convertOrderEntry(entry);
            });
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
        { type: Injectable }
    ];
    /** @nocollapse */
    OccOrderNormalizer.ctorParameters = function () { return [
        { type: ConverterService }
    ]; };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLW9yZGVyLW5vcm1hbGl6ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9vY2MvY29udmVydGVycy9vY2Mtb3JkZXItbm9ybWFsaXplci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFhLGdCQUFnQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFOUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFFcEY7SUFFRSw0QkFBb0IsU0FBMkI7UUFBM0IsY0FBUyxHQUFULFNBQVMsQ0FBa0I7SUFBRyxDQUFDOzs7Ozs7SUFFbkQsb0NBQU87Ozs7O0lBQVAsVUFBUSxNQUFpQixFQUFFLE1BQWM7UUFBekMsaUJBNEJDO1FBM0JDLElBQUksTUFBTSxLQUFLLFNBQVMsRUFBRTtZQUN4QixNQUFNLHdCQUFRLENBQUMsbUJBQUEsTUFBTSxFQUFPLENBQUMsQ0FBRSxDQUFDO1NBQ2pDO1FBRUQsSUFBSSxNQUFNLENBQUMsT0FBTyxFQUFFO1lBQ2xCLE1BQU0sQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBQSxLQUFLO2dCQUN2QyxPQUFBLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUM7WUFBN0IsQ0FBNkIsQ0FDOUIsQ0FBQztTQUNIO1FBRUQsSUFBSSxNQUFNLENBQUMsWUFBWSxFQUFFO1lBQ3ZCLE1BQU0sQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsVUFBQSxXQUFXLElBQUksT0FBQSxzQkFDeEQsV0FBVyxJQUNkLE9BQU8sRUFBRSxXQUFXLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLHNCQUNyQyxLQUFLLElBQ1IsVUFBVSxFQUFFLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLElBQ3BELEVBSHdDLENBR3hDLENBQUMsSUFDSCxFQU4yRCxDQU0zRCxDQUFDLENBQUM7U0FDTDtRQUVELElBQUksTUFBTSxDQUFDLGtCQUFrQixFQUFFO1lBQzdCLE1BQU0sQ0FBQyxrQkFBa0IsR0FBRyxNQUFNLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLFVBQUEsS0FBSztnQkFDN0QsT0FBQSxLQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDO1lBQTdCLENBQTZCLENBQzlCLENBQUM7U0FDSDtRQUVELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7Ozs7OztJQUVPLDhDQUFpQjs7Ozs7SUFBekIsVUFBMEIsTUFBc0I7UUFDOUMsNEJBQ0ssTUFBTSxJQUNULE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLGtCQUFrQixDQUFDLElBQ25FO0lBQ0osQ0FBQzs7Z0JBdkNGLFVBQVU7Ozs7Z0JBSlMsZ0JBQWdCOztJQTRDcEMseUJBQUM7Q0FBQSxBQXhDRCxJQXdDQztTQXZDWSxrQkFBa0I7Ozs7OztJQUNqQix1Q0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPY2MgfSBmcm9tICcuLi8uLi8uLi9vY2Mvb2NjLW1vZGVscy9vY2MubW9kZWxzJztcbmltcG9ydCB7IENvbnZlcnRlciwgQ29udmVydGVyU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvY29udmVydGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgT3JkZXIsIE9yZGVyRW50cnkgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9vcmRlci5tb2RlbCc7XG5pbXBvcnQgeyBQUk9EVUNUX05PUk1BTElaRVIgfSBmcm9tICcuLi8uLi8uLi9wcm9kdWN0L2Nvbm5lY3RvcnMvcHJvZHVjdC9jb252ZXJ0ZXJzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE9jY09yZGVyTm9ybWFsaXplciBpbXBsZW1lbnRzIENvbnZlcnRlcjxPY2MuT3JkZXIsIE9yZGVyPiB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29udmVydGVyOiBDb252ZXJ0ZXJTZXJ2aWNlKSB7fVxuXG4gIGNvbnZlcnQoc291cmNlOiBPY2MuT3JkZXIsIHRhcmdldD86IE9yZGVyKTogT3JkZXIge1xuICAgIGlmICh0YXJnZXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGFyZ2V0ID0geyAuLi4oc291cmNlIGFzIGFueSkgfTtcbiAgICB9XG5cbiAgICBpZiAoc291cmNlLmVudHJpZXMpIHtcbiAgICAgIHRhcmdldC5lbnRyaWVzID0gc291cmNlLmVudHJpZXMubWFwKGVudHJ5ID0+XG4gICAgICAgIHRoaXMuY29udmVydE9yZGVyRW50cnkoZW50cnkpXG4gICAgICApO1xuICAgIH1cblxuICAgIGlmIChzb3VyY2UuY29uc2lnbm1lbnRzKSB7XG4gICAgICB0YXJnZXQuY29uc2lnbm1lbnRzID0gc291cmNlLmNvbnNpZ25tZW50cy5tYXAoY29uc2lnbm1lbnQgPT4gKHtcbiAgICAgICAgLi4uY29uc2lnbm1lbnQsXG4gICAgICAgIGVudHJpZXM6IGNvbnNpZ25tZW50LmVudHJpZXMubWFwKGVudHJ5ID0+ICh7XG4gICAgICAgICAgLi4uZW50cnksXG4gICAgICAgICAgb3JkZXJFbnRyeTogdGhpcy5jb252ZXJ0T3JkZXJFbnRyeShlbnRyeS5vcmRlckVudHJ5KSxcbiAgICAgICAgfSkpLFxuICAgICAgfSkpO1xuICAgIH1cblxuICAgIGlmIChzb3VyY2UudW5jb25zaWduZWRFbnRyaWVzKSB7XG4gICAgICB0YXJnZXQudW5jb25zaWduZWRFbnRyaWVzID0gc291cmNlLnVuY29uc2lnbmVkRW50cmllcy5tYXAoZW50cnkgPT5cbiAgICAgICAgdGhpcy5jb252ZXJ0T3JkZXJFbnRyeShlbnRyeSlcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfVxuXG4gIHByaXZhdGUgY29udmVydE9yZGVyRW50cnkoc291cmNlOiBPY2MuT3JkZXJFbnRyeSk6IE9yZGVyRW50cnkge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5zb3VyY2UsXG4gICAgICBwcm9kdWN0OiB0aGlzLmNvbnZlcnRlci5jb252ZXJ0KHNvdXJjZS5wcm9kdWN0LCBQUk9EVUNUX05PUk1BTElaRVIpLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==