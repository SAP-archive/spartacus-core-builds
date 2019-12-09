/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { OccConfig } from '../../../config/occ-config';
import * as i0 from "@angular/core";
import * as i1 from "../../../config/occ-config";
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
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    ProductNameNormalizer.ctorParameters = function () { return [
        { type: OccConfig }
    ]; };
    /** @nocollapse */ ProductNameNormalizer.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ProductNameNormalizer_Factory() { return new ProductNameNormalizer(i0.ɵɵinject(i1.OccConfig)); }, token: ProductNameNormalizer, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1uYW1lLW5vcm1hbGl6ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvb2NjL2FkYXB0ZXJzL3Byb2R1Y3QvY29udmVydGVycy9wcm9kdWN0LW5hbWUtbm9ybWFsaXplci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLDRCQUE0QixDQUFDOzs7QUFLdkQ7SUFFRSwrQkFBc0IsTUFBaUI7UUFBakIsV0FBTSxHQUFOLE1BQU0sQ0FBVztJQUFHLENBQUM7Ozs7OztJQUUzQyx1Q0FBTzs7Ozs7SUFBUCxVQUFRLE1BQW1CLEVBQUUsTUFBZ0I7UUFDM0MsSUFBSSxNQUFNLEtBQUssU0FBUyxFQUFFO1lBQ3hCLE1BQU0sd0JBQVEsQ0FBQyxtQkFBQSxNQUFNLEVBQU8sQ0FBQyxDQUFFLENBQUM7U0FDakM7UUFDRCxJQUFJLE1BQU0sQ0FBQyxJQUFJLEVBQUU7WUFDZixNQUFNLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztTQUMvQjtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7Ozs7OztJQUVTLHlDQUFTOzs7OztJQUFuQixVQUFvQixJQUFZO1FBQzlCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7Z0JBakJGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7Z0JBTHpCLFNBQVM7OztnQ0FEbEI7Q0F3QkMsQUFsQkQsSUFrQkM7U0FqQlkscUJBQXFCOzs7Ozs7SUFDcEIsdUNBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2NjQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vY29uZmlnL29jYy1jb25maWcnO1xuaW1wb3J0IHsgT2NjIH0gZnJvbSAnLi4vLi4vLi4vb2NjLW1vZGVscy9vY2MubW9kZWxzJztcbmltcG9ydCB7IENvbnZlcnRlciB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWwvY29udmVydGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gJy4uLy4uLy4uLy4uL21vZGVsL3Byb2R1Y3QubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3ROYW1lTm9ybWFsaXplciBpbXBsZW1lbnRzIENvbnZlcnRlcjxPY2MuUHJvZHVjdCwgUHJvZHVjdD4ge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgY29uZmlnOiBPY2NDb25maWcpIHt9XG5cbiAgY29udmVydChzb3VyY2U6IE9jYy5Qcm9kdWN0LCB0YXJnZXQ/OiBQcm9kdWN0KTogUHJvZHVjdCB7XG4gICAgaWYgKHRhcmdldCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0YXJnZXQgPSB7IC4uLihzb3VyY2UgYXMgYW55KSB9O1xuICAgIH1cbiAgICBpZiAoc291cmNlLm5hbWUpIHtcbiAgICAgIHRhcmdldC5uYW1lID0gdGhpcy5ub3JtYWxpemUoc291cmNlLm5hbWUpO1xuICAgICAgdGFyZ2V0Lm5hbWVIdG1sID0gc291cmNlLm5hbWU7XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH1cblxuICBwcm90ZWN0ZWQgbm9ybWFsaXplKG5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIG5hbWUucmVwbGFjZSgvPFtePl0qPi9nLCAnJyk7XG4gIH1cbn1cbiJdfQ==