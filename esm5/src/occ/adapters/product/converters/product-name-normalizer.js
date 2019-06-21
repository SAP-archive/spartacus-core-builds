/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { OccConfig } from '../../../config/occ-config';
var ProductNameNormalizer = /** @class */ (function () {
    function ProductNameNormalizer(config) {
        this.config = config;
    }
    /**
     * @param {?} source
     * @param {?=} target
     * @return {?}
     */
    ProductNameNormalizer.prototype.convert = /**
     * @param {?} source
     * @param {?=} target
     * @return {?}
     */
    function (source, target) {
        if (target === undefined) {
            target = tslib_1.__assign({}, ((/** @type {?} */ (source))));
        }
        if (source.name) {
            target.name = this.normalize(source.name);
            target.nameHtml = source.name;
        }
        return target;
    };
    /**
     * @protected
     * @param {?} name
     * @return {?}
     */
    ProductNameNormalizer.prototype.normalize = /**
     * @protected
     * @param {?} name
     * @return {?}
     */
    function (name) {
        return name.replace(/<[^>]*>/g, '');
    };
    ProductNameNormalizer.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ProductNameNormalizer.ctorParameters = function () { return [
        { type: OccConfig }
    ]; };
    return ProductNameNormalizer;
}());
export { ProductNameNormalizer };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    ProductNameNormalizer.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1uYW1lLW5vcm1hbGl6ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvb2NjL2FkYXB0ZXJzL3Byb2R1Y3QvY29udmVydGVycy9wcm9kdWN0LW5hbWUtbm9ybWFsaXplci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBS3ZEO0lBRUUsK0JBQXNCLE1BQWlCO1FBQWpCLFdBQU0sR0FBTixNQUFNLENBQVc7SUFBRyxDQUFDOzs7Ozs7SUFFM0MsdUNBQU87Ozs7O0lBQVAsVUFBUSxNQUFtQixFQUFFLE1BQWdCO1FBQzNDLElBQUksTUFBTSxLQUFLLFNBQVMsRUFBRTtZQUN4QixNQUFNLHdCQUFRLENBQUMsbUJBQUEsTUFBTSxFQUFPLENBQUMsQ0FBRSxDQUFDO1NBQ2pDO1FBQ0QsSUFBSSxNQUFNLENBQUMsSUFBSSxFQUFFO1lBQ2YsTUFBTSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMxQyxNQUFNLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7U0FDL0I7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOzs7Ozs7SUFFUyx5Q0FBUzs7Ozs7SUFBbkIsVUFBb0IsSUFBWTtRQUM5QixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7O2dCQWpCRixVQUFVOzs7O2dCQUxGLFNBQVM7O0lBdUJsQiw0QkFBQztDQUFBLEFBbEJELElBa0JDO1NBakJZLHFCQUFxQjs7Ozs7O0lBQ3BCLHVDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9jY0NvbmZpZyB9IGZyb20gJy4uLy4uLy4uL2NvbmZpZy9vY2MtY29uZmlnJztcbmltcG9ydCB7IE9jYyB9IGZyb20gJy4uLy4uLy4uL29jYy1tb2RlbHMvb2NjLm1vZGVscyc7XG5pbXBvcnQgeyBDb252ZXJ0ZXIgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlsL2NvbnZlcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tICcuLi8uLi8uLi8uLi9tb2RlbC9wcm9kdWN0Lm1vZGVsJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFByb2R1Y3ROYW1lTm9ybWFsaXplciBpbXBsZW1lbnRzIENvbnZlcnRlcjxPY2MuUHJvZHVjdCwgUHJvZHVjdD4ge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgY29uZmlnOiBPY2NDb25maWcpIHt9XG5cbiAgY29udmVydChzb3VyY2U6IE9jYy5Qcm9kdWN0LCB0YXJnZXQ/OiBQcm9kdWN0KTogUHJvZHVjdCB7XG4gICAgaWYgKHRhcmdldCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0YXJnZXQgPSB7IC4uLihzb3VyY2UgYXMgYW55KSB9O1xuICAgIH1cbiAgICBpZiAoc291cmNlLm5hbWUpIHtcbiAgICAgIHRhcmdldC5uYW1lID0gdGhpcy5ub3JtYWxpemUoc291cmNlLm5hbWUpO1xuICAgICAgdGFyZ2V0Lm5hbWVIdG1sID0gc291cmNlLm5hbWU7XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH1cblxuICBwcm90ZWN0ZWQgbm9ybWFsaXplKG5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIG5hbWUucmVwbGFjZSgvPFtePl0qPi9nLCAnJyk7XG4gIH1cbn1cbiJdfQ==