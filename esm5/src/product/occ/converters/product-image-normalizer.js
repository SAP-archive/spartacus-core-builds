/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { OccConfig } from '../../../occ';
import * as i0 from "@angular/core";
import * as i1 from "../../../occ/config/occ-config";
var ProductImageNormalizer = /** @class */ (function () {
    function ProductImageNormalizer(config) {
        this.config = config;
    }
    /**
     * @param {?} source
     * @param {?=} target
     * @return {?}
     */
    ProductImageNormalizer.prototype.convert = /**
     * @param {?} source
     * @param {?=} target
     * @return {?}
     */
    function (source, target) {
        if (target === undefined) {
            target = tslib_1.__assign({}, ((/** @type {?} */ (source))));
        }
        if (source.images) {
            target.images = this.normalize(source.images);
        }
        return target;
    };
    /**
     * @deprecated Use `convert(source, target?) => target` instead
     *
     * TODO: Should be removed when all use cases will be refactored
     */
    /**
     * @deprecated Use `convert(source, target?) => target` instead
     *
     * TODO: Should be removed when all use cases will be refactored
     * @param {?} list
     * @return {?}
     */
    ProductImageNormalizer.prototype.convertList = /**
     * @deprecated Use `convert(source, target?) => target` instead
     *
     * TODO: Should be removed when all use cases will be refactored
     * @param {?} list
     * @return {?}
     */
    function (list) {
        var e_1, _a;
        if (!list) {
            return;
        }
        try {
            for (var list_1 = tslib_1.__values(list), list_1_1 = list_1.next(); !list_1_1.done; list_1_1 = list_1.next()) {
                var product = list_1_1.value;
                this.convertProduct(product);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (list_1_1 && !list_1_1.done && (_a = list_1.return)) _a.call(list_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /**
     * @deprecated Use `convert(source, target?) => target` instead
     *
     * TODO: Should be removed when all use cases will be refactored
     */
    /**
     * @deprecated Use `convert(source, target?) => target` instead
     *
     * TODO: Should be removed when all use cases will be refactored
     * @param {?} product
     * @return {?}
     */
    ProductImageNormalizer.prototype.convertProduct = /**
     * @deprecated Use `convert(source, target?) => target` instead
     *
     * TODO: Should be removed when all use cases will be refactored
     * @param {?} product
     * @return {?}
     */
    function (product) {
        if (product.images) {
            product.images = this.normalize(product.images);
        }
    };
    /**
     * @desc
     * Creates the image structure we'd like to have. Instead of
     * having a single list with all images despite type and format
     * we create a proper structure. With that we can do:
     * - images.primary.thumnail.url
     * - images.GALLERY[0].thumnail.url
     */
    /**
     * @desc
     * Creates the image structure we'd like to have. Instead of
     * having a single list with all images despite type and format
     * we create a proper structure. With that we can do:
     * - images.primary.thumnail.url
     * - images.GALLERY[0].thumnail.url
     * @param {?} source
     * @return {?}
     */
    ProductImageNormalizer.prototype.normalize = /**
     * @desc
     * Creates the image structure we'd like to have. Instead of
     * having a single list with all images despite type and format
     * we create a proper structure. With that we can do:
     * - images.primary.thumnail.url
     * - images.GALLERY[0].thumnail.url
     * @param {?} source
     * @return {?}
     */
    function (source) {
        var e_2, _a;
        /** @type {?} */
        var images = {};
        if (source) {
            try {
                for (var source_1 = tslib_1.__values(source), source_1_1 = source_1.next(); !source_1_1.done; source_1_1 = source_1.next()) {
                    var image = source_1_1.value;
                    /** @type {?} */
                    var isList = image.hasOwnProperty('galleryIndex');
                    if (!images.hasOwnProperty(image.imageType)) {
                        images[image.imageType] = isList ? [] : {};
                    }
                    /** @type {?} */
                    var imageContainer = void 0;
                    if (isList && !images[image.imageType][image.galleryIndex]) {
                        images[image.imageType][image.galleryIndex] = {};
                    }
                    if (isList) {
                        imageContainer = images[image.imageType][image.galleryIndex];
                    }
                    else {
                        imageContainer = images[image.imageType];
                    }
                    // set full image URL path
                    image.url = (this.config.backend.occ.baseUrl || '') + image.url;
                    imageContainer[image.format] = image;
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (source_1_1 && !source_1_1.done && (_a = source_1.return)) _a.call(source_1);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
        return images;
    };
    ProductImageNormalizer.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    ProductImageNormalizer.ctorParameters = function () { return [
        { type: OccConfig }
    ]; };
    /** @nocollapse */ ProductImageNormalizer.ngInjectableDef = i0.defineInjectable({ factory: function ProductImageNormalizer_Factory() { return new ProductImageNormalizer(i0.inject(i1.OccConfig)); }, token: ProductImageNormalizer, providedIn: "root" });
    return ProductImageNormalizer;
}());
export { ProductImageNormalizer };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    ProductImageNormalizer.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1pbWFnZS1ub3JtYWxpemVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3Byb2R1Y3Qvb2NjL2NvbnZlcnRlcnMvcHJvZHVjdC1pbWFnZS1ub3JtYWxpemVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQVMsU0FBUyxFQUFFLE1BQU0sY0FBYyxDQUFDOzs7QUFLaEQ7SUFJRSxnQ0FBc0IsTUFBaUI7UUFBakIsV0FBTSxHQUFOLE1BQU0sQ0FBVztJQUFHLENBQUM7Ozs7OztJQUUzQyx3Q0FBTzs7Ozs7SUFBUCxVQUFRLE1BQWUsRUFBRSxNQUFrQjtRQUN6QyxJQUFJLE1BQU0sS0FBSyxTQUFTLEVBQUU7WUFDeEIsTUFBTSx3QkFBUSxDQUFDLG1CQUFBLE1BQU0sRUFBTyxDQUFDLENBQUUsQ0FBQztTQUNqQztRQUNELElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRTtZQUNqQixNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQy9DO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVEOzs7O09BSUc7Ozs7Ozs7O0lBQ0gsNENBQVc7Ozs7Ozs7SUFBWCxVQUFZLElBQW9COztRQUM5QixJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1QsT0FBTztTQUNSOztZQUNELEtBQXNCLElBQUEsU0FBQSxpQkFBQSxJQUFJLENBQUEsMEJBQUEsNENBQUU7Z0JBQXZCLElBQU0sT0FBTyxpQkFBQTtnQkFDaEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUM5Qjs7Ozs7Ozs7O0lBQ0gsQ0FBQztJQUVEOzs7O09BSUc7Ozs7Ozs7O0lBQ0gsK0NBQWM7Ozs7Ozs7SUFBZCxVQUFlLE9BQVk7UUFDekIsSUFBSSxPQUFPLENBQUMsTUFBTSxFQUFFO1lBQ2xCLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDakQ7SUFDSCxDQUFDO0lBRUQ7Ozs7Ozs7T0FPRzs7Ozs7Ozs7Ozs7SUFDSCwwQ0FBUzs7Ozs7Ozs7OztJQUFULFVBQVUsTUFBZTs7O1lBQ2pCLE1BQU0sR0FBRyxFQUFFO1FBQ2pCLElBQUksTUFBTSxFQUFFOztnQkFDVixLQUFvQixJQUFBLFdBQUEsaUJBQUEsTUFBTSxDQUFBLDhCQUFBLGtEQUFFO29CQUF2QixJQUFNLEtBQUssbUJBQUE7O3dCQUNSLE1BQU0sR0FBRyxLQUFLLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQztvQkFDbkQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFO3dCQUMzQyxNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7cUJBQzVDOzt3QkFFRyxjQUFjLFNBQUE7b0JBQ2xCLElBQUksTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLEVBQUU7d0JBQzFELE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsQ0FBQztxQkFDbEQ7b0JBRUQsSUFBSSxNQUFNLEVBQUU7d0JBQ1YsY0FBYyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO3FCQUM5RDt5QkFBTTt3QkFDTCxjQUFjLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztxQkFDMUM7b0JBRUQsMEJBQTBCO29CQUMxQixLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDO29CQUVoRSxjQUFjLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEtBQUssQ0FBQztpQkFDdEM7Ozs7Ozs7OztTQUNGO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7Z0JBNUVGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBUGUsU0FBUzs7O2lDQUR6QjtDQW1GQyxBQTdFRCxJQTZFQztTQTFFWSxzQkFBc0I7Ozs7OztJQUNyQix3Q0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJbWFnZSwgT2NjQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vb2NjJztcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tICcuLi8uLi8uLi9vY2Mvb2NjLW1vZGVscy9vY2MubW9kZWxzJztcbmltcG9ydCB7IENvbnZlcnRlciB9IGZyb20gJy4uLy4uLy4uL3V0aWwvY29udmVydGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgVUlJbWFnZXMsIFVJUHJvZHVjdCB9IGZyb20gJy4uLy4uL21vZGVsL3Byb2R1Y3QtbW9kZWwnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdEltYWdlTm9ybWFsaXplciBpbXBsZW1lbnRzIENvbnZlcnRlcjxQcm9kdWN0LCBVSVByb2R1Y3Q+IHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGNvbmZpZzogT2NjQ29uZmlnKSB7fVxuXG4gIGNvbnZlcnQoc291cmNlOiBQcm9kdWN0LCB0YXJnZXQ/OiBVSVByb2R1Y3QpOiBVSVByb2R1Y3Qge1xuICAgIGlmICh0YXJnZXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGFyZ2V0ID0geyAuLi4oc291cmNlIGFzIGFueSkgfTtcbiAgICB9XG4gICAgaWYgKHNvdXJjZS5pbWFnZXMpIHtcbiAgICAgIHRhcmdldC5pbWFnZXMgPSB0aGlzLm5vcm1hbGl6ZShzb3VyY2UuaW1hZ2VzKTtcbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBVc2UgYGNvbnZlcnQoc291cmNlLCB0YXJnZXQ/KSA9PiB0YXJnZXRgIGluc3RlYWRcbiAgICpcbiAgICogVE9ETzogU2hvdWxkIGJlIHJlbW92ZWQgd2hlbiBhbGwgdXNlIGNhc2VzIHdpbGwgYmUgcmVmYWN0b3JlZFxuICAgKi9cbiAgY29udmVydExpc3QobGlzdDogQXJyYXk8UHJvZHVjdD4pOiB2b2lkIHtcbiAgICBpZiAoIWxpc3QpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZm9yIChjb25zdCBwcm9kdWN0IG9mIGxpc3QpIHtcbiAgICAgIHRoaXMuY29udmVydFByb2R1Y3QocHJvZHVjdCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIFVzZSBgY29udmVydChzb3VyY2UsIHRhcmdldD8pID0+IHRhcmdldGAgaW5zdGVhZFxuICAgKlxuICAgKiBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlZCB3aGVuIGFsbCB1c2UgY2FzZXMgd2lsbCBiZSByZWZhY3RvcmVkXG4gICAqL1xuICBjb252ZXJ0UHJvZHVjdChwcm9kdWN0OiBhbnkpOiB2b2lkIHtcbiAgICBpZiAocHJvZHVjdC5pbWFnZXMpIHtcbiAgICAgIHByb2R1Y3QuaW1hZ2VzID0gdGhpcy5ub3JtYWxpemUocHJvZHVjdC5pbWFnZXMpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY1xuICAgKiBDcmVhdGVzIHRoZSBpbWFnZSBzdHJ1Y3R1cmUgd2UnZCBsaWtlIHRvIGhhdmUuIEluc3RlYWQgb2ZcbiAgICogaGF2aW5nIGEgc2luZ2xlIGxpc3Qgd2l0aCBhbGwgaW1hZ2VzIGRlc3BpdGUgdHlwZSBhbmQgZm9ybWF0XG4gICAqIHdlIGNyZWF0ZSBhIHByb3BlciBzdHJ1Y3R1cmUuIFdpdGggdGhhdCB3ZSBjYW4gZG86XG4gICAqIC0gaW1hZ2VzLnByaW1hcnkudGh1bW5haWwudXJsXG4gICAqIC0gaW1hZ2VzLkdBTExFUllbMF0udGh1bW5haWwudXJsXG4gICAqL1xuICBub3JtYWxpemUoc291cmNlOiBJbWFnZVtdKTogVUlJbWFnZXMge1xuICAgIGNvbnN0IGltYWdlcyA9IHt9O1xuICAgIGlmIChzb3VyY2UpIHtcbiAgICAgIGZvciAoY29uc3QgaW1hZ2Ugb2Ygc291cmNlKSB7XG4gICAgICAgIGNvbnN0IGlzTGlzdCA9IGltYWdlLmhhc093blByb3BlcnR5KCdnYWxsZXJ5SW5kZXgnKTtcbiAgICAgICAgaWYgKCFpbWFnZXMuaGFzT3duUHJvcGVydHkoaW1hZ2UuaW1hZ2VUeXBlKSkge1xuICAgICAgICAgIGltYWdlc1tpbWFnZS5pbWFnZVR5cGVdID0gaXNMaXN0ID8gW10gOiB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBpbWFnZUNvbnRhaW5lcjtcbiAgICAgICAgaWYgKGlzTGlzdCAmJiAhaW1hZ2VzW2ltYWdlLmltYWdlVHlwZV1baW1hZ2UuZ2FsbGVyeUluZGV4XSkge1xuICAgICAgICAgIGltYWdlc1tpbWFnZS5pbWFnZVR5cGVdW2ltYWdlLmdhbGxlcnlJbmRleF0gPSB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc0xpc3QpIHtcbiAgICAgICAgICBpbWFnZUNvbnRhaW5lciA9IGltYWdlc1tpbWFnZS5pbWFnZVR5cGVdW2ltYWdlLmdhbGxlcnlJbmRleF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaW1hZ2VDb250YWluZXIgPSBpbWFnZXNbaW1hZ2UuaW1hZ2VUeXBlXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHNldCBmdWxsIGltYWdlIFVSTCBwYXRoXG4gICAgICAgIGltYWdlLnVybCA9ICh0aGlzLmNvbmZpZy5iYWNrZW5kLm9jYy5iYXNlVXJsIHx8ICcnKSArIGltYWdlLnVybDtcblxuICAgICAgICBpbWFnZUNvbnRhaW5lcltpbWFnZS5mb3JtYXRdID0gaW1hZ2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBpbWFnZXM7XG4gIH1cbn1cbiJdfQ==