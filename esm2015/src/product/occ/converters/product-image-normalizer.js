/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { OccConfig } from '../../../occ/config/occ-config';
import * as i0 from "@angular/core";
import * as i1 from "../../../occ/config/occ-config";
export class ProductImageNormalizer {
    /**
     * @param {?} config
     */
    constructor(config) {
        this.config = config;
    }
    /**
     * @param {?} source
     * @param {?=} target
     * @return {?}
     */
    convert(source, target) {
        if (target === undefined) {
            target = Object.assign({}, ((/** @type {?} */ (source))));
        }
        if (source.images) {
            target.images = this.normalize(source.images);
        }
        return target;
    }
    /**
     * @deprecated Use `convert(source, target?) => target` instead
     *
     * TODO: Should be removed when all use cases will be refactored
     * @param {?} list
     * @return {?}
     */
    convertList(list) {
        if (!list) {
            return;
        }
        for (const product of list) {
            this.convertProduct(product);
        }
    }
    /**
     * @deprecated Use `convert(source, target?) => target` instead
     *
     * TODO: Should be removed when all use cases will be refactored
     * @param {?} product
     * @return {?}
     */
    convertProduct(product) {
        if (product.images) {
            product.images = this.normalize(product.images);
        }
    }
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
    normalize(source) {
        /** @type {?} */
        const images = {};
        if (source) {
            for (const image of source) {
                /** @type {?} */
                const isList = image.hasOwnProperty('galleryIndex');
                if (!images.hasOwnProperty(image.imageType)) {
                    images[image.imageType] = isList ? [] : {};
                }
                /** @type {?} */
                let imageContainer;
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
        return images;
    }
}
ProductImageNormalizer.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
ProductImageNormalizer.ctorParameters = () => [
    { type: OccConfig }
];
/** @nocollapse */ ProductImageNormalizer.ngInjectableDef = i0.defineInjectable({ factory: function ProductImageNormalizer_Factory() { return new ProductImageNormalizer(i0.inject(i1.OccConfig)); }, token: ProductImageNormalizer, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @protected
     */
    ProductImageNormalizer.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1pbWFnZS1ub3JtYWxpemVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3Byb2R1Y3Qvb2NjL2NvbnZlcnRlcnMvcHJvZHVjdC1pbWFnZS1ub3JtYWxpemVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7O0FBUzNELE1BQU0sT0FBTyxzQkFBc0I7Ozs7SUFDakMsWUFBc0IsTUFBaUI7UUFBakIsV0FBTSxHQUFOLE1BQU0sQ0FBVztJQUFHLENBQUM7Ozs7OztJQUUzQyxPQUFPLENBQUMsTUFBZSxFQUFFLE1BQWtCO1FBQ3pDLElBQUksTUFBTSxLQUFLLFNBQVMsRUFBRTtZQUN4QixNQUFNLHFCQUFRLENBQUMsbUJBQUEsTUFBTSxFQUFPLENBQUMsQ0FBRSxDQUFDO1NBQ2pDO1FBQ0QsSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFO1lBQ2pCLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDL0M7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOzs7Ozs7OztJQU9ELFdBQVcsQ0FBQyxJQUFvQjtRQUM5QixJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1QsT0FBTztTQUNSO1FBQ0QsS0FBSyxNQUFNLE9BQU8sSUFBSSxJQUFJLEVBQUU7WUFDMUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUM5QjtJQUNILENBQUM7Ozs7Ozs7O0lBT0QsY0FBYyxDQUFDLE9BQVk7UUFDekIsSUFBSSxPQUFPLENBQUMsTUFBTSxFQUFFO1lBQ2xCLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDakQ7SUFDSCxDQUFDOzs7Ozs7Ozs7OztJQVVELFNBQVMsQ0FBQyxNQUFlOztjQUNqQixNQUFNLEdBQUcsRUFBRTtRQUNqQixJQUFJLE1BQU0sRUFBRTtZQUNWLEtBQUssTUFBTSxLQUFLLElBQUksTUFBTSxFQUFFOztzQkFDcEIsTUFBTSxHQUFHLEtBQUssQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDO2dCQUNuRCxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEVBQUU7b0JBQzNDLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztpQkFDNUM7O29CQUVHLGNBQWM7Z0JBQ2xCLElBQUksTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLEVBQUU7b0JBQzFELE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsQ0FBQztpQkFDbEQ7Z0JBRUQsSUFBSSxNQUFNLEVBQUU7b0JBQ1YsY0FBYyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO2lCQUM5RDtxQkFBTTtvQkFDTCxjQUFjLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztpQkFDMUM7Z0JBRUQsMEJBQTBCO2dCQUMxQixLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDO2dCQUVoRSxjQUFjLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEtBQUssQ0FBQzthQUN0QztTQUNGO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7O1lBNUVGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQVJRLFNBQVM7Ozs7Ozs7O0lBVUosd0NBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2NjQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vb2NjL2NvbmZpZy9vY2MtY29uZmlnJztcbmltcG9ydCB7IEltYWdlIH0gZnJvbSAnLi4vLi4vLi4vb2NjL29jYy1tb2RlbHMnO1xuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gJy4uLy4uLy4uL29jYy9vY2MtbW9kZWxzL29jYy5tb2RlbHMnO1xuaW1wb3J0IHsgQ29udmVydGVyIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9jb252ZXJ0ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBVSUltYWdlcywgVUlQcm9kdWN0IH0gZnJvbSAnLi4vLi4vbW9kZWwvcHJvZHVjdCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0SW1hZ2VOb3JtYWxpemVyIGltcGxlbWVudHMgQ29udmVydGVyPFByb2R1Y3QsIFVJUHJvZHVjdD4ge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgY29uZmlnOiBPY2NDb25maWcpIHt9XG5cbiAgY29udmVydChzb3VyY2U6IFByb2R1Y3QsIHRhcmdldD86IFVJUHJvZHVjdCk6IFVJUHJvZHVjdCB7XG4gICAgaWYgKHRhcmdldCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0YXJnZXQgPSB7IC4uLihzb3VyY2UgYXMgYW55KSB9O1xuICAgIH1cbiAgICBpZiAoc291cmNlLmltYWdlcykge1xuICAgICAgdGFyZ2V0LmltYWdlcyA9IHRoaXMubm9ybWFsaXplKHNvdXJjZS5pbWFnZXMpO1xuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIFVzZSBgY29udmVydChzb3VyY2UsIHRhcmdldD8pID0+IHRhcmdldGAgaW5zdGVhZFxuICAgKlxuICAgKiBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlZCB3aGVuIGFsbCB1c2UgY2FzZXMgd2lsbCBiZSByZWZhY3RvcmVkXG4gICAqL1xuICBjb252ZXJ0TGlzdChsaXN0OiBBcnJheTxQcm9kdWN0Pik6IHZvaWQge1xuICAgIGlmICghbGlzdCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IHByb2R1Y3Qgb2YgbGlzdCkge1xuICAgICAgdGhpcy5jb252ZXJ0UHJvZHVjdChwcm9kdWN0KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgVXNlIGBjb252ZXJ0KHNvdXJjZSwgdGFyZ2V0PykgPT4gdGFyZ2V0YCBpbnN0ZWFkXG4gICAqXG4gICAqIFRPRE86IFNob3VsZCBiZSByZW1vdmVkIHdoZW4gYWxsIHVzZSBjYXNlcyB3aWxsIGJlIHJlZmFjdG9yZWRcbiAgICovXG4gIGNvbnZlcnRQcm9kdWN0KHByb2R1Y3Q6IGFueSk6IHZvaWQge1xuICAgIGlmIChwcm9kdWN0LmltYWdlcykge1xuICAgICAgcHJvZHVjdC5pbWFnZXMgPSB0aGlzLm5vcm1hbGl6ZShwcm9kdWN0LmltYWdlcyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjXG4gICAqIENyZWF0ZXMgdGhlIGltYWdlIHN0cnVjdHVyZSB3ZSdkIGxpa2UgdG8gaGF2ZS4gSW5zdGVhZCBvZlxuICAgKiBoYXZpbmcgYSBzaW5nbGUgbGlzdCB3aXRoIGFsbCBpbWFnZXMgZGVzcGl0ZSB0eXBlIGFuZCBmb3JtYXRcbiAgICogd2UgY3JlYXRlIGEgcHJvcGVyIHN0cnVjdHVyZS4gV2l0aCB0aGF0IHdlIGNhbiBkbzpcbiAgICogLSBpbWFnZXMucHJpbWFyeS50aHVtbmFpbC51cmxcbiAgICogLSBpbWFnZXMuR0FMTEVSWVswXS50aHVtbmFpbC51cmxcbiAgICovXG4gIG5vcm1hbGl6ZShzb3VyY2U6IEltYWdlW10pOiBVSUltYWdlcyB7XG4gICAgY29uc3QgaW1hZ2VzID0ge307XG4gICAgaWYgKHNvdXJjZSkge1xuICAgICAgZm9yIChjb25zdCBpbWFnZSBvZiBzb3VyY2UpIHtcbiAgICAgICAgY29uc3QgaXNMaXN0ID0gaW1hZ2UuaGFzT3duUHJvcGVydHkoJ2dhbGxlcnlJbmRleCcpO1xuICAgICAgICBpZiAoIWltYWdlcy5oYXNPd25Qcm9wZXJ0eShpbWFnZS5pbWFnZVR5cGUpKSB7XG4gICAgICAgICAgaW1hZ2VzW2ltYWdlLmltYWdlVHlwZV0gPSBpc0xpc3QgPyBbXSA6IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGltYWdlQ29udGFpbmVyO1xuICAgICAgICBpZiAoaXNMaXN0ICYmICFpbWFnZXNbaW1hZ2UuaW1hZ2VUeXBlXVtpbWFnZS5nYWxsZXJ5SW5kZXhdKSB7XG4gICAgICAgICAgaW1hZ2VzW2ltYWdlLmltYWdlVHlwZV1baW1hZ2UuZ2FsbGVyeUluZGV4XSA9IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzTGlzdCkge1xuICAgICAgICAgIGltYWdlQ29udGFpbmVyID0gaW1hZ2VzW2ltYWdlLmltYWdlVHlwZV1baW1hZ2UuZ2FsbGVyeUluZGV4XTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpbWFnZUNvbnRhaW5lciA9IGltYWdlc1tpbWFnZS5pbWFnZVR5cGVdO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gc2V0IGZ1bGwgaW1hZ2UgVVJMIHBhdGhcbiAgICAgICAgaW1hZ2UudXJsID0gKHRoaXMuY29uZmlnLmJhY2tlbmQub2NjLmJhc2VVcmwgfHwgJycpICsgaW1hZ2UudXJsO1xuXG4gICAgICAgIGltYWdlQ29udGFpbmVyW2ltYWdlLmZvcm1hdF0gPSBpbWFnZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGltYWdlcztcbiAgfVxufVxuIl19