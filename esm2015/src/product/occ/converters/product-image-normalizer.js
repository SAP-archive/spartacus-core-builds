/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { OccConfig } from '../../../occ';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1pbWFnZS1ub3JtYWxpemVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3Byb2R1Y3Qvb2NjL2NvbnZlcnRlcnMvcHJvZHVjdC1pbWFnZS1ub3JtYWxpemVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBUyxTQUFTLEVBQUUsTUFBTSxjQUFjLENBQUM7OztBQVFoRCxNQUFNLE9BQU8sc0JBQXNCOzs7O0lBQ2pDLFlBQXNCLE1BQWlCO1FBQWpCLFdBQU0sR0FBTixNQUFNLENBQVc7SUFBRyxDQUFDOzs7Ozs7SUFFM0MsT0FBTyxDQUFDLE1BQWUsRUFBRSxNQUFrQjtRQUN6QyxJQUFJLE1BQU0sS0FBSyxTQUFTLEVBQUU7WUFDeEIsTUFBTSxxQkFBUSxDQUFDLG1CQUFBLE1BQU0sRUFBTyxDQUFDLENBQUUsQ0FBQztTQUNqQztRQUNELElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRTtZQUNqQixNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQy9DO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7Ozs7Ozs7SUFPRCxXQUFXLENBQUMsSUFBb0I7UUFDOUIsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNULE9BQU87U0FDUjtRQUNELEtBQUssTUFBTSxPQUFPLElBQUksSUFBSSxFQUFFO1lBQzFCLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDOUI7SUFDSCxDQUFDOzs7Ozs7OztJQU9ELGNBQWMsQ0FBQyxPQUFZO1FBQ3pCLElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRTtZQUNsQixPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2pEO0lBQ0gsQ0FBQzs7Ozs7Ozs7Ozs7SUFVRCxTQUFTLENBQUMsTUFBZTs7Y0FDakIsTUFBTSxHQUFHLEVBQUU7UUFDakIsSUFBSSxNQUFNLEVBQUU7WUFDVixLQUFLLE1BQU0sS0FBSyxJQUFJLE1BQU0sRUFBRTs7c0JBQ3BCLE1BQU0sR0FBRyxLQUFLLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQztnQkFDbkQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFO29CQUMzQyxNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7aUJBQzVDOztvQkFFRyxjQUFjO2dCQUNsQixJQUFJLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxFQUFFO29CQUMxRCxNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLENBQUM7aUJBQ2xEO2dCQUVELElBQUksTUFBTSxFQUFFO29CQUNWLGNBQWMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztpQkFDOUQ7cUJBQU07b0JBQ0wsY0FBYyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7aUJBQzFDO2dCQUVELDBCQUEwQjtnQkFDMUIsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQztnQkFFaEUsY0FBYyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxLQUFLLENBQUM7YUFDdEM7U0FDRjtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7OztZQTVFRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFQZSxTQUFTOzs7Ozs7OztJQVNYLHdDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEltYWdlLCBPY2NDb25maWcgfSBmcm9tICcuLi8uLi8uLi9vY2MnO1xuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gJy4uLy4uLy4uL29jYy9vY2MtbW9kZWxzL29jYy5tb2RlbHMnO1xuaW1wb3J0IHsgQ29udmVydGVyIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9jb252ZXJ0ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBVSUltYWdlcywgVUlQcm9kdWN0IH0gZnJvbSAnLi4vLi4vbW9kZWwvcHJvZHVjdC1tb2RlbCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0SW1hZ2VOb3JtYWxpemVyIGltcGxlbWVudHMgQ29udmVydGVyPFByb2R1Y3QsIFVJUHJvZHVjdD4ge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgY29uZmlnOiBPY2NDb25maWcpIHt9XG5cbiAgY29udmVydChzb3VyY2U6IFByb2R1Y3QsIHRhcmdldD86IFVJUHJvZHVjdCk6IFVJUHJvZHVjdCB7XG4gICAgaWYgKHRhcmdldCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0YXJnZXQgPSB7IC4uLihzb3VyY2UgYXMgYW55KSB9O1xuICAgIH1cbiAgICBpZiAoc291cmNlLmltYWdlcykge1xuICAgICAgdGFyZ2V0LmltYWdlcyA9IHRoaXMubm9ybWFsaXplKHNvdXJjZS5pbWFnZXMpO1xuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIFVzZSBgY29udmVydChzb3VyY2UsIHRhcmdldD8pID0+IHRhcmdldGAgaW5zdGVhZFxuICAgKlxuICAgKiBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlZCB3aGVuIGFsbCB1c2UgY2FzZXMgd2lsbCBiZSByZWZhY3RvcmVkXG4gICAqL1xuICBjb252ZXJ0TGlzdChsaXN0OiBBcnJheTxQcm9kdWN0Pik6IHZvaWQge1xuICAgIGlmICghbGlzdCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IHByb2R1Y3Qgb2YgbGlzdCkge1xuICAgICAgdGhpcy5jb252ZXJ0UHJvZHVjdChwcm9kdWN0KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgVXNlIGBjb252ZXJ0KHNvdXJjZSwgdGFyZ2V0PykgPT4gdGFyZ2V0YCBpbnN0ZWFkXG4gICAqXG4gICAqIFRPRE86IFNob3VsZCBiZSByZW1vdmVkIHdoZW4gYWxsIHVzZSBjYXNlcyB3aWxsIGJlIHJlZmFjdG9yZWRcbiAgICovXG4gIGNvbnZlcnRQcm9kdWN0KHByb2R1Y3Q6IGFueSk6IHZvaWQge1xuICAgIGlmIChwcm9kdWN0LmltYWdlcykge1xuICAgICAgcHJvZHVjdC5pbWFnZXMgPSB0aGlzLm5vcm1hbGl6ZShwcm9kdWN0LmltYWdlcyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjXG4gICAqIENyZWF0ZXMgdGhlIGltYWdlIHN0cnVjdHVyZSB3ZSdkIGxpa2UgdG8gaGF2ZS4gSW5zdGVhZCBvZlxuICAgKiBoYXZpbmcgYSBzaW5nbGUgbGlzdCB3aXRoIGFsbCBpbWFnZXMgZGVzcGl0ZSB0eXBlIGFuZCBmb3JtYXRcbiAgICogd2UgY3JlYXRlIGEgcHJvcGVyIHN0cnVjdHVyZS4gV2l0aCB0aGF0IHdlIGNhbiBkbzpcbiAgICogLSBpbWFnZXMucHJpbWFyeS50aHVtbmFpbC51cmxcbiAgICogLSBpbWFnZXMuR0FMTEVSWVswXS50aHVtbmFpbC51cmxcbiAgICovXG4gIG5vcm1hbGl6ZShzb3VyY2U6IEltYWdlW10pOiBVSUltYWdlcyB7XG4gICAgY29uc3QgaW1hZ2VzID0ge307XG4gICAgaWYgKHNvdXJjZSkge1xuICAgICAgZm9yIChjb25zdCBpbWFnZSBvZiBzb3VyY2UpIHtcbiAgICAgICAgY29uc3QgaXNMaXN0ID0gaW1hZ2UuaGFzT3duUHJvcGVydHkoJ2dhbGxlcnlJbmRleCcpO1xuICAgICAgICBpZiAoIWltYWdlcy5oYXNPd25Qcm9wZXJ0eShpbWFnZS5pbWFnZVR5cGUpKSB7XG4gICAgICAgICAgaW1hZ2VzW2ltYWdlLmltYWdlVHlwZV0gPSBpc0xpc3QgPyBbXSA6IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGltYWdlQ29udGFpbmVyO1xuICAgICAgICBpZiAoaXNMaXN0ICYmICFpbWFnZXNbaW1hZ2UuaW1hZ2VUeXBlXVtpbWFnZS5nYWxsZXJ5SW5kZXhdKSB7XG4gICAgICAgICAgaW1hZ2VzW2ltYWdlLmltYWdlVHlwZV1baW1hZ2UuZ2FsbGVyeUluZGV4XSA9IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzTGlzdCkge1xuICAgICAgICAgIGltYWdlQ29udGFpbmVyID0gaW1hZ2VzW2ltYWdlLmltYWdlVHlwZV1baW1hZ2UuZ2FsbGVyeUluZGV4XTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpbWFnZUNvbnRhaW5lciA9IGltYWdlc1tpbWFnZS5pbWFnZVR5cGVdO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gc2V0IGZ1bGwgaW1hZ2UgVVJMIHBhdGhcbiAgICAgICAgaW1hZ2UudXJsID0gKHRoaXMuY29uZmlnLmJhY2tlbmQub2NjLmJhc2VVcmwgfHwgJycpICsgaW1hZ2UudXJsO1xuXG4gICAgICAgIGltYWdlQ29udGFpbmVyW2ltYWdlLmZvcm1hdF0gPSBpbWFnZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGltYWdlcztcbiAgfVxufVxuIl19