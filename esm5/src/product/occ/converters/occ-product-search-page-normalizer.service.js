/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ConverterService } from '../../../util/converter.service';
import { Injectable } from '@angular/core';
import { PRODUCT_NORMALIZER } from '../../connectors/product/converters';
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
            target.products = source.products.map(function (product) {
                return _this.converterService.convert(product, PRODUCT_NORMALIZER);
            });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXByb2R1Y3Qtc2VhcmNoLXBhZ2Utbm9ybWFsaXplci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3Byb2R1Y3Qvb2NjL2NvbnZlcnRlcnMvb2NjLXByb2R1Y3Qtc2VhcmNoLXBhZ2Utbm9ybWFsaXplci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFhLGdCQUFnQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDOUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUd6RTtJQUdFLHdDQUFvQixnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUFHLENBQUM7Ozs7OztJQUUxRCxnREFBTzs7Ozs7SUFBUCxVQUNFLE1BQTZCLEVBQzdCLE1BQThCO1FBRmhDLGlCQWNDO1FBWkMsdUJBQUEsRUFBQSxXQUE4QjtRQUU5QixNQUFNLHdCQUNELE1BQU0sRUFDTixDQUFDLG1CQUFBLE1BQU0sRUFBTyxDQUFDLENBQ25CLENBQUM7UUFDRixJQUFJLE1BQU0sQ0FBQyxRQUFRLEVBQUU7WUFDbkIsTUFBTSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFBLE9BQU87Z0JBQzNDLE9BQUEsS0FBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsa0JBQWtCLENBQUM7WUFBMUQsQ0FBMEQsQ0FDM0QsQ0FBQztTQUNIO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7Z0JBbkJGLFVBQVU7Ozs7Z0JBTFMsZ0JBQWdCOztJQXlCcEMscUNBQUM7Q0FBQSxBQXBCRCxJQW9CQztTQW5CWSw4QkFBOEI7Ozs7OztJQUU3QiwwREFBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPY2MgfSBmcm9tICcuLi8uLi8uLi9vY2Mvb2NjLW1vZGVscy9vY2MubW9kZWxzJztcbmltcG9ydCB7IENvbnZlcnRlciwgQ29udmVydGVyU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvY29udmVydGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUFJPRFVDVF9OT1JNQUxJWkVSIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9wcm9kdWN0L2NvbnZlcnRlcnMnO1xuaW1wb3J0IHsgUHJvZHVjdFNlYXJjaFBhZ2UgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9wcm9kdWN0LXNlYXJjaC5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBPY2NQcm9kdWN0U2VhcmNoUGFnZU5vcm1hbGl6ZXJcbiAgaW1wbGVtZW50cyBDb252ZXJ0ZXI8T2NjLlByb2R1Y3RTZWFyY2hQYWdlLCBQcm9kdWN0U2VhcmNoUGFnZT4ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbnZlcnRlclNlcnZpY2U6IENvbnZlcnRlclNlcnZpY2UpIHt9XG5cbiAgY29udmVydChcbiAgICBzb3VyY2U6IE9jYy5Qcm9kdWN0U2VhcmNoUGFnZSxcbiAgICB0YXJnZXQ6IFByb2R1Y3RTZWFyY2hQYWdlID0ge31cbiAgKTogUHJvZHVjdFNlYXJjaFBhZ2Uge1xuICAgIHRhcmdldCA9IHtcbiAgICAgIC4uLnRhcmdldCxcbiAgICAgIC4uLihzb3VyY2UgYXMgYW55KSxcbiAgICB9O1xuICAgIGlmIChzb3VyY2UucHJvZHVjdHMpIHtcbiAgICAgIHRhcmdldC5wcm9kdWN0cyA9IHNvdXJjZS5wcm9kdWN0cy5tYXAocHJvZHVjdCA9PlxuICAgICAgICB0aGlzLmNvbnZlcnRlclNlcnZpY2UuY29udmVydChwcm9kdWN0LCBQUk9EVUNUX05PUk1BTElaRVIpXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9XG59XG4iXX0=