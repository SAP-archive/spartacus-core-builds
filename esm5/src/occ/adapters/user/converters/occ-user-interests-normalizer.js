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
var OccUserInterestsNormalizer = /** @class */ (function () {
    function OccUserInterestsNormalizer(converter) {
        this.converter = converter;
    }
    /**
     * @param {?} source
     * @param {?=} target
     * @return {?}
     */
    OccUserInterestsNormalizer.prototype.convert = /**
     * @param {?} source
     * @param {?=} target
     * @return {?}
     */
    function (source, target) {
        var _this = this;
        if (target === undefined) {
            target = tslib_1.__assign({}, ((/** @type {?} */ (source))));
        }
        if (source && source.results) {
            target.results = source.results.map((/**
             * @param {?} result
             * @return {?}
             */
            function (result) { return (tslib_1.__assign({}, result, { product: _this.converter.convert(result.product, PRODUCT_NORMALIZER) })); }));
        }
        return target;
    };
    OccUserInterestsNormalizer.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    OccUserInterestsNormalizer.ctorParameters = function () { return [
        { type: ConverterService }
    ]; };
    /** @nocollapse */ OccUserInterestsNormalizer.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function OccUserInterestsNormalizer_Factory() { return new OccUserInterestsNormalizer(i0.ɵɵinject(i1.ConverterService)); }, token: OccUserInterestsNormalizer, providedIn: "root" });
    return OccUserInterestsNormalizer;
}());
export { OccUserInterestsNormalizer };
if (false) {
    /**
     * @type {?}
     * @private
     */
    OccUserInterestsNormalizer.prototype.converter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXVzZXItaW50ZXJlc3RzLW5vcm1hbGl6ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvb2NjL2FkYXB0ZXJzL3VzZXIvY29udmVydGVycy9vY2MtdXNlci1pbnRlcmVzdHMtbm9ybWFsaXplci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDdkYsT0FBTyxFQUVMLGdCQUFnQixHQUNqQixNQUFNLG9DQUFvQyxDQUFDOzs7QUFHNUM7SUFJRSxvQ0FBb0IsU0FBMkI7UUFBM0IsY0FBUyxHQUFULFNBQVMsQ0FBa0I7SUFBRyxDQUFDOzs7Ozs7SUFFbkQsNENBQU87Ozs7O0lBQVAsVUFDRSxNQUF1QyxFQUN2QyxNQUFvQztRQUZ0QyxpQkFlQztRQVhDLElBQUksTUFBTSxLQUFLLFNBQVMsRUFBRTtZQUN4QixNQUFNLHdCQUFRLENBQUMsbUJBQUEsTUFBTSxFQUFPLENBQUMsQ0FBRSxDQUFDO1NBQ2pDO1FBQ0QsSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRTtZQUM1QixNQUFNLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRzs7OztZQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsc0JBQ3pDLE1BQU0sSUFDVCxPQUFPLEVBQUUsS0FBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxrQkFBa0IsQ0FBQyxJQUNuRSxFQUg0QyxDQUc1QyxFQUFDLENBQUM7U0FDTDtRQUVELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7O2dCQXJCRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7O2dCQUpoQyxnQkFBZ0I7OztxQ0FMbEI7Q0ErQkMsQUF0QkQsSUFzQkM7U0FyQlksMEJBQTBCOzs7Ozs7SUFHekIsK0NBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2NjIH0gZnJvbSAnLi4vLi4vLi4vb2NjLW1vZGVscy9vY2MubW9kZWxzJztcbmltcG9ydCB7IFBST0RVQ1RfTk9STUFMSVpFUiB9IGZyb20gJy4uLy4uLy4uLy4uL3Byb2R1Y3QvY29ubmVjdG9ycy9wcm9kdWN0L2NvbnZlcnRlcnMnO1xuaW1wb3J0IHtcbiAgQ29udmVydGVyLFxuICBDb252ZXJ0ZXJTZXJ2aWNlLFxufSBmcm9tICcuLi8uLi8uLi8uLi91dGlsL2NvbnZlcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7IFByb2R1Y3RJbnRlcmVzdFNlYXJjaFJlc3VsdCB9IGZyb20gJy4uLy4uLy4uLy4uL21vZGVsL3Byb2R1Y3QtaW50ZXJlc3QubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIE9jY1VzZXJJbnRlcmVzdHNOb3JtYWxpemVyXG4gIGltcGxlbWVudHNcbiAgICBDb252ZXJ0ZXI8T2NjLlByb2R1Y3RJbnRlcmVzdFNlYXJjaFJlc3VsdCwgUHJvZHVjdEludGVyZXN0U2VhcmNoUmVzdWx0PiB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29udmVydGVyOiBDb252ZXJ0ZXJTZXJ2aWNlKSB7fVxuXG4gIGNvbnZlcnQoXG4gICAgc291cmNlOiBPY2MuUHJvZHVjdEludGVyZXN0U2VhcmNoUmVzdWx0LFxuICAgIHRhcmdldD86IFByb2R1Y3RJbnRlcmVzdFNlYXJjaFJlc3VsdFxuICApOiBQcm9kdWN0SW50ZXJlc3RTZWFyY2hSZXN1bHQge1xuICAgIGlmICh0YXJnZXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGFyZ2V0ID0geyAuLi4oc291cmNlIGFzIGFueSkgfTtcbiAgICB9XG4gICAgaWYgKHNvdXJjZSAmJiBzb3VyY2UucmVzdWx0cykge1xuICAgICAgdGFyZ2V0LnJlc3VsdHMgPSBzb3VyY2UucmVzdWx0cy5tYXAocmVzdWx0ID0+ICh7XG4gICAgICAgIC4uLnJlc3VsdCxcbiAgICAgICAgcHJvZHVjdDogdGhpcy5jb252ZXJ0ZXIuY29udmVydChyZXN1bHQucHJvZHVjdCwgUFJPRFVDVF9OT1JNQUxJWkVSKSxcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9XG59XG4iXX0=