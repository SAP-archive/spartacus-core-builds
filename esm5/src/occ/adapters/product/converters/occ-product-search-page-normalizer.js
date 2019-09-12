/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ConverterService, } from '../../../../util/converter.service';
import { Injectable } from '@angular/core';
import { PRODUCT_NORMALIZER } from '../../../../product/connectors/product/converters';
var OccProductSearchPageNormalizer = /** @class */ (function () {
    function OccProductSearchPageNormalizer(converterService) {
        this.converterService = converterService;
    }
    /**
     * @param {?} source
     * @param {?=} target
     * @return {?}
     */
    OccProductSearchPageNormalizer.prototype.convert = /**
     * @param {?} source
     * @param {?=} target
     * @return {?}
     */
    function (source, target) {
        var _this = this;
        if (target === void 0) { target = {}; }
        target = tslib_1.__assign({}, target, ((/** @type {?} */ (source))));
        if (source.products) {
            target.products = source.products.map((/**
             * @param {?} product
             * @return {?}
             */
            function (product) {
                return _this.converterService.convert(product, PRODUCT_NORMALIZER);
            }));
        }
        return target;
    };
    OccProductSearchPageNormalizer.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    OccProductSearchPageNormalizer.ctorParameters = function () { return [
        { type: ConverterService }
    ]; };
    return OccProductSearchPageNormalizer;
}());
export { OccProductSearchPageNormalizer };
if (false) {
    /**
     * @type {?}
     * @private
     */
    OccProductSearchPageNormalizer.prototype.converterService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXByb2R1Y3Qtc2VhcmNoLXBhZ2Utbm9ybWFsaXplci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9vY2MvYWRhcHRlcnMvcHJvZHVjdC9jb252ZXJ0ZXJzL29jYy1wcm9kdWN0LXNlYXJjaC1wYWdlLW5vcm1hbGl6ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBRUwsZ0JBQWdCLEdBQ2pCLE1BQU0sb0NBQW9DLENBQUM7QUFDNUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUd2RjtJQUdFLHdDQUFvQixnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUFHLENBQUM7Ozs7OztJQUUxRCxnREFBTzs7Ozs7SUFBUCxVQUNFLE1BQTZCLEVBQzdCLE1BQThCO1FBRmhDLGlCQWNDO1FBWkMsdUJBQUEsRUFBQSxXQUE4QjtRQUU5QixNQUFNLHdCQUNELE1BQU0sRUFDTixDQUFDLG1CQUFBLE1BQU0sRUFBTyxDQUFDLENBQ25CLENBQUM7UUFDRixJQUFJLE1BQU0sQ0FBQyxRQUFRLEVBQUU7WUFDbkIsTUFBTSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUc7Ozs7WUFBQyxVQUFBLE9BQU87Z0JBQzNDLE9BQUEsS0FBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsa0JBQWtCLENBQUM7WUFBMUQsQ0FBMEQsRUFDM0QsQ0FBQztTQUNIO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7Z0JBbkJGLFVBQVU7Ozs7Z0JBTlQsZ0JBQWdCOztJQTBCbEIscUNBQUM7Q0FBQSxBQXBCRCxJQW9CQztTQW5CWSw4QkFBOEI7Ozs7OztJQUU3QiwwREFBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPY2MgfSBmcm9tICcuLi8uLi8uLi9vY2MtbW9kZWxzL29jYy5tb2RlbHMnO1xuaW1wb3J0IHtcbiAgQ29udmVydGVyLFxuICBDb252ZXJ0ZXJTZXJ2aWNlLFxufSBmcm9tICcuLi8uLi8uLi8uLi91dGlsL2NvbnZlcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBST0RVQ1RfTk9STUFMSVpFUiB9IGZyb20gJy4uLy4uLy4uLy4uL3Byb2R1Y3QvY29ubmVjdG9ycy9wcm9kdWN0L2NvbnZlcnRlcnMnO1xuaW1wb3J0IHsgUHJvZHVjdFNlYXJjaFBhZ2UgfSBmcm9tICcuLi8uLi8uLi8uLi9tb2RlbC9wcm9kdWN0LXNlYXJjaC5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBPY2NQcm9kdWN0U2VhcmNoUGFnZU5vcm1hbGl6ZXJcbiAgaW1wbGVtZW50cyBDb252ZXJ0ZXI8T2NjLlByb2R1Y3RTZWFyY2hQYWdlLCBQcm9kdWN0U2VhcmNoUGFnZT4ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbnZlcnRlclNlcnZpY2U6IENvbnZlcnRlclNlcnZpY2UpIHt9XG5cbiAgY29udmVydChcbiAgICBzb3VyY2U6IE9jYy5Qcm9kdWN0U2VhcmNoUGFnZSxcbiAgICB0YXJnZXQ6IFByb2R1Y3RTZWFyY2hQYWdlID0ge31cbiAgKTogUHJvZHVjdFNlYXJjaFBhZ2Uge1xuICAgIHRhcmdldCA9IHtcbiAgICAgIC4uLnRhcmdldCxcbiAgICAgIC4uLihzb3VyY2UgYXMgYW55KSxcbiAgICB9O1xuICAgIGlmIChzb3VyY2UucHJvZHVjdHMpIHtcbiAgICAgIHRhcmdldC5wcm9kdWN0cyA9IHNvdXJjZS5wcm9kdWN0cy5tYXAocHJvZHVjdCA9PlxuICAgICAgICB0aGlzLmNvbnZlcnRlclNlcnZpY2UuY29udmVydChwcm9kdWN0LCBQUk9EVUNUX05PUk1BTElaRVIpXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9XG59XG4iXX0=