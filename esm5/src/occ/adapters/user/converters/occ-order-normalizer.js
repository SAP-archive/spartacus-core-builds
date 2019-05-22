/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { ConverterService, } from '../../../../util/converter.service';
import { PRODUCT_NORMALIZER } from '../../../../product/connectors/product/converters';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLW9yZGVyLW5vcm1hbGl6ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvb2NjL2FkYXB0ZXJzL3VzZXIvY29udmVydGVycy9vY2Mtb3JkZXItbm9ybWFsaXplci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUVMLGdCQUFnQixHQUNqQixNQUFNLG9DQUFvQyxDQUFDO0FBRTVDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBRXZGO0lBRUUsNEJBQW9CLFNBQTJCO1FBQTNCLGNBQVMsR0FBVCxTQUFTLENBQWtCO0lBQUcsQ0FBQzs7Ozs7O0lBRW5ELG9DQUFPOzs7OztJQUFQLFVBQVEsTUFBaUIsRUFBRSxNQUFjO1FBQXpDLGlCQTRCQztRQTNCQyxJQUFJLE1BQU0sS0FBSyxTQUFTLEVBQUU7WUFDeEIsTUFBTSx3QkFBUSxDQUFDLG1CQUFBLE1BQU0sRUFBTyxDQUFDLENBQUUsQ0FBQztTQUNqQztRQUVELElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRTtZQUNsQixNQUFNLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQUEsS0FBSztnQkFDdkMsT0FBQSxLQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDO1lBQTdCLENBQTZCLENBQzlCLENBQUM7U0FDSDtRQUVELElBQUksTUFBTSxDQUFDLFlBQVksRUFBRTtZQUN2QixNQUFNLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLFVBQUEsV0FBVyxJQUFJLE9BQUEsc0JBQ3hELFdBQVcsSUFDZCxPQUFPLEVBQUUsV0FBVyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxzQkFDckMsS0FBSyxJQUNSLFVBQVUsRUFBRSxLQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxJQUNwRCxFQUh3QyxDQUd4QyxDQUFDLElBQ0gsRUFOMkQsQ0FNM0QsQ0FBQyxDQUFDO1NBQ0w7UUFFRCxJQUFJLE1BQU0sQ0FBQyxrQkFBa0IsRUFBRTtZQUM3QixNQUFNLENBQUMsa0JBQWtCLEdBQUcsTUFBTSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxVQUFBLEtBQUs7Z0JBQzdELE9BQUEsS0FBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQztZQUE3QixDQUE2QixDQUM5QixDQUFDO1NBQ0g7UUFFRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOzs7Ozs7SUFFTyw4Q0FBaUI7Ozs7O0lBQXpCLFVBQTBCLE1BQXNCO1FBQzlDLDRCQUNLLE1BQU0sSUFDVCxPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxrQkFBa0IsQ0FBQyxJQUNuRTtJQUNKLENBQUM7O2dCQXZDRixVQUFVOzs7O2dCQUxULGdCQUFnQjs7SUE2Q2xCLHlCQUFDO0NBQUEsQUF4Q0QsSUF3Q0M7U0F2Q1ksa0JBQWtCOzs7Ozs7SUFDakIsdUNBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2NjIH0gZnJvbSAnLi4vLi4vLi4vb2NjLW1vZGVscy9vY2MubW9kZWxzJztcbmltcG9ydCB7XG4gIENvbnZlcnRlcixcbiAgQ29udmVydGVyU2VydmljZSxcbn0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbC9jb252ZXJ0ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBPcmRlciwgT3JkZXJFbnRyeSB9IGZyb20gJy4uLy4uLy4uLy4uL21vZGVsL29yZGVyLm1vZGVsJztcbmltcG9ydCB7IFBST0RVQ1RfTk9STUFMSVpFUiB9IGZyb20gJy4uLy4uLy4uLy4uL3Byb2R1Y3QvY29ubmVjdG9ycy9wcm9kdWN0L2NvbnZlcnRlcnMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT2NjT3JkZXJOb3JtYWxpemVyIGltcGxlbWVudHMgQ29udmVydGVyPE9jYy5PcmRlciwgT3JkZXI+IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb252ZXJ0ZXI6IENvbnZlcnRlclNlcnZpY2UpIHt9XG5cbiAgY29udmVydChzb3VyY2U6IE9jYy5PcmRlciwgdGFyZ2V0PzogT3JkZXIpOiBPcmRlciB7XG4gICAgaWYgKHRhcmdldCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0YXJnZXQgPSB7IC4uLihzb3VyY2UgYXMgYW55KSB9O1xuICAgIH1cblxuICAgIGlmIChzb3VyY2UuZW50cmllcykge1xuICAgICAgdGFyZ2V0LmVudHJpZXMgPSBzb3VyY2UuZW50cmllcy5tYXAoZW50cnkgPT5cbiAgICAgICAgdGhpcy5jb252ZXJ0T3JkZXJFbnRyeShlbnRyeSlcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKHNvdXJjZS5jb25zaWdubWVudHMpIHtcbiAgICAgIHRhcmdldC5jb25zaWdubWVudHMgPSBzb3VyY2UuY29uc2lnbm1lbnRzLm1hcChjb25zaWdubWVudCA9PiAoe1xuICAgICAgICAuLi5jb25zaWdubWVudCxcbiAgICAgICAgZW50cmllczogY29uc2lnbm1lbnQuZW50cmllcy5tYXAoZW50cnkgPT4gKHtcbiAgICAgICAgICAuLi5lbnRyeSxcbiAgICAgICAgICBvcmRlckVudHJ5OiB0aGlzLmNvbnZlcnRPcmRlckVudHJ5KGVudHJ5Lm9yZGVyRW50cnkpLFxuICAgICAgICB9KSksXG4gICAgICB9KSk7XG4gICAgfVxuXG4gICAgaWYgKHNvdXJjZS51bmNvbnNpZ25lZEVudHJpZXMpIHtcbiAgICAgIHRhcmdldC51bmNvbnNpZ25lZEVudHJpZXMgPSBzb3VyY2UudW5jb25zaWduZWRFbnRyaWVzLm1hcChlbnRyeSA9PlxuICAgICAgICB0aGlzLmNvbnZlcnRPcmRlckVudHJ5KGVudHJ5KVxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9XG5cbiAgcHJpdmF0ZSBjb252ZXJ0T3JkZXJFbnRyeShzb3VyY2U6IE9jYy5PcmRlckVudHJ5KTogT3JkZXJFbnRyeSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnNvdXJjZSxcbiAgICAgIHByb2R1Y3Q6IHRoaXMuY29udmVydGVyLmNvbnZlcnQoc291cmNlLnByb2R1Y3QsIFBST0RVQ1RfTk9STUFMSVpFUiksXG4gICAgfTtcbiAgfVxufVxuIl19