/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { PRODUCT_NORMALIZER } from '../../../product/connectors/product/converters';
import { ConverterService } from '../../../util/converter.service';
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
            target = source.references.map(function (reference) { return (tslib_1.__assign({}, reference, { target: _this.converter.convert(reference.target, PRODUCT_NORMALIZER) })); });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXByb2R1Y3QtcmVmZXJlbmNlcy1saXN0LW5vcm1hbGl6ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcHJvZHVjdC9vY2MvY29udmVydGVycy9vY2MtcHJvZHVjdC1yZWZlcmVuY2VzLWxpc3Qtbm9ybWFsaXplci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDcEYsT0FBTyxFQUFhLGdCQUFnQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFOUU7SUFHRSw0Q0FBb0IsU0FBMkI7UUFBM0IsY0FBUyxHQUFULFNBQVMsQ0FBa0I7SUFBRyxDQUFDOzs7Ozs7SUFFbkQsb0RBQU87Ozs7O0lBQVAsVUFDRSxNQUFnQyxFQUNoQyxNQUErQjtRQUZqQyxpQkFnQkM7UUFkQyx1QkFBQSxFQUFBLFdBQStCO1FBRS9CLElBQUksTUFBTSxLQUFLLFNBQVMsRUFBRTtZQUN4QixNQUFNLHdCQUFRLENBQUMsbUJBQUEsTUFBTSxFQUFPLENBQUMsQ0FBRSxDQUFDO1NBQ2pDO1FBRUQsSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLFVBQVUsRUFBRTtZQUMvQixNQUFNLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsVUFBQSxTQUFTLElBQUksT0FBQSxzQkFDdkMsU0FBUyxJQUNaLE1BQU0sRUFBRSxLQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLGtCQUFrQixDQUFDLElBQ3BFLEVBSDBDLENBRzFDLENBQUMsQ0FBQztZQUVKLE9BQU8sTUFBTSxDQUFDO1NBQ2Y7SUFDSCxDQUFDOztnQkFyQkYsVUFBVTs7OztnQkFGUyxnQkFBZ0I7O0lBd0JwQyx5Q0FBQztDQUFBLEFBdEJELElBc0JDO1NBckJZLGtDQUFrQzs7Ozs7O0lBRWpDLHVEQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFByb2R1Y3RSZWZlcmVuY2UgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9wcm9kdWN0Lm1vZGVsJztcbmltcG9ydCB7IE9jYyB9IGZyb20gJy4uLy4uLy4uL29jYy9vY2MtbW9kZWxzL29jYy5tb2RlbHMnO1xuaW1wb3J0IHsgUFJPRFVDVF9OT1JNQUxJWkVSIH0gZnJvbSAnLi4vLi4vLi4vcHJvZHVjdC9jb25uZWN0b3JzL3Byb2R1Y3QvY29udmVydGVycyc7XG5pbXBvcnQgeyBDb252ZXJ0ZXIsIENvbnZlcnRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi91dGlsL2NvbnZlcnRlci5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE9jY1Byb2R1Y3RSZWZlcmVuY2VzTGlzdE5vcm1hbGl6ZXJcbiAgaW1wbGVtZW50cyBDb252ZXJ0ZXI8T2NjLlByb2R1Y3RSZWZlcmVuY2VMaXN0LCBQcm9kdWN0UmVmZXJlbmNlW10+IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb252ZXJ0ZXI6IENvbnZlcnRlclNlcnZpY2UpIHt9XG5cbiAgY29udmVydChcbiAgICBzb3VyY2U6IE9jYy5Qcm9kdWN0UmVmZXJlbmNlTGlzdCxcbiAgICB0YXJnZXQ6IFByb2R1Y3RSZWZlcmVuY2VbXSA9IFtdXG4gICk6IFByb2R1Y3RSZWZlcmVuY2VbXSB7XG4gICAgaWYgKHRhcmdldCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0YXJnZXQgPSB7IC4uLihzb3VyY2UgYXMgYW55KSB9O1xuICAgIH1cblxuICAgIGlmIChzb3VyY2UgJiYgc291cmNlLnJlZmVyZW5jZXMpIHtcbiAgICAgIHRhcmdldCA9IHNvdXJjZS5yZWZlcmVuY2VzLm1hcChyZWZlcmVuY2UgPT4gKHtcbiAgICAgICAgLi4ucmVmZXJlbmNlLFxuICAgICAgICB0YXJnZXQ6IHRoaXMuY29udmVydGVyLmNvbnZlcnQocmVmZXJlbmNlLnRhcmdldCwgUFJPRFVDVF9OT1JNQUxJWkVSKSxcbiAgICAgIH0pKTtcblxuICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9XG4gIH1cbn1cbiJdfQ==