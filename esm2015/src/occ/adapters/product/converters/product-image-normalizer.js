/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { OccConfig } from '../../../config/occ-config';
import * as i0 from "@angular/core";
import * as i1 from "../../../config/occ-config";
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
                /** @type {?} */
                const targetImage = Object.assign({}, image);
                /**
                 * Traditionally, in an on-prem world, medias and other backend related calls
                 * are hosted at the same platform, but in a cloud setup, applications are are
                 * typically distributed cross different environments. For media, we use the
                 * `backend.media.baseUrl` by default, but fallback to `backend.occ.baseUrl`
                 * if none provided.
                 */
                targetImage.url =
                    (this.config.backend.media.baseUrl ||
                        this.config.backend.occ.baseUrl ||
                        '') + image.url;
                imageContainer[image.format] = targetImage;
            }
        }
        return images;
    }
}
ProductImageNormalizer.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
ProductImageNormalizer.ctorParameters = () => [
    { type: OccConfig }
];
/** @nocollapse */ ProductImageNormalizer.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ProductImageNormalizer_Factory() { return new ProductImageNormalizer(i0.ɵɵinject(i1.OccConfig)); }, token: ProductImageNormalizer, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @protected
     */
    ProductImageNormalizer.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1pbWFnZS1ub3JtYWxpemVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL29jYy9hZGFwdGVycy9wcm9kdWN0L2NvbnZlcnRlcnMvcHJvZHVjdC1pbWFnZS1ub3JtYWxpemVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7O0FBT3ZELE1BQU0sT0FBTyxzQkFBc0I7Ozs7SUFDakMsWUFBc0IsTUFBaUI7UUFBakIsV0FBTSxHQUFOLE1BQU0sQ0FBVztJQUFHLENBQUM7Ozs7OztJQUUzQyxPQUFPLENBQUMsTUFBbUIsRUFBRSxNQUFnQjtRQUMzQyxJQUFJLE1BQU0sS0FBSyxTQUFTLEVBQUU7WUFDeEIsTUFBTSxxQkFBUSxDQUFDLG1CQUFBLE1BQU0sRUFBTyxDQUFDLENBQUUsQ0FBQztTQUNqQztRQUNELElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRTtZQUNqQixNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQy9DO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7Ozs7Ozs7Ozs7SUFVRCxTQUFTLENBQUMsTUFBbUI7O2NBQ3JCLE1BQU0sR0FBRyxFQUFFO1FBQ2pCLElBQUksTUFBTSxFQUFFO1lBQ1YsS0FBSyxNQUFNLEtBQUssSUFBSSxNQUFNLEVBQUU7O3NCQUNwQixNQUFNLEdBQUcsS0FBSyxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUM7Z0JBQ25ELElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFBRTtvQkFDM0MsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO2lCQUM1Qzs7b0JBRUcsY0FBYztnQkFDbEIsSUFBSSxNQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsRUFBRTtvQkFDMUQsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxDQUFDO2lCQUNsRDtnQkFFRCxJQUFJLE1BQU0sRUFBRTtvQkFDVixjQUFjLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7aUJBQzlEO3FCQUFNO29CQUNMLGNBQWMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2lCQUMxQzs7c0JBRUssV0FBVyxxQkFBUSxLQUFLLENBQUU7Z0JBQ2hDOzs7Ozs7bUJBTUc7Z0JBQ0gsV0FBVyxDQUFDLEdBQUc7b0JBQ2IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTzt3QkFDaEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU87d0JBQy9CLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUM7Z0JBRXBCLGNBQWMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsV0FBVyxDQUFDO2FBQzVDO1NBQ0Y7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOzs7WUEzREYsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7OztZQU56QixTQUFTOzs7Ozs7OztJQVFKLHdDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9jY0NvbmZpZyB9IGZyb20gJy4uLy4uLy4uL2NvbmZpZy9vY2MtY29uZmlnJztcbmltcG9ydCB7IE9jYyB9IGZyb20gJy4uLy4uLy4uL29jYy1tb2RlbHMvb2NjLm1vZGVscyc7XG5pbXBvcnQgeyBDb252ZXJ0ZXIgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlsL2NvbnZlcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tICcuLi8uLi8uLi8uLi9tb2RlbC9wcm9kdWN0Lm1vZGVsJztcbmltcG9ydCB7IEltYWdlcyB9IGZyb20gJy4uLy4uLy4uLy4uL21vZGVsL2ltYWdlLm1vZGVsJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0SW1hZ2VOb3JtYWxpemVyIGltcGxlbWVudHMgQ29udmVydGVyPE9jYy5Qcm9kdWN0LCBQcm9kdWN0PiB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBjb25maWc6IE9jY0NvbmZpZykge31cblxuICBjb252ZXJ0KHNvdXJjZTogT2NjLlByb2R1Y3QsIHRhcmdldD86IFByb2R1Y3QpOiBQcm9kdWN0IHtcbiAgICBpZiAodGFyZ2V0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRhcmdldCA9IHsgLi4uKHNvdXJjZSBhcyBhbnkpIH07XG4gICAgfVxuICAgIGlmIChzb3VyY2UuaW1hZ2VzKSB7XG4gICAgICB0YXJnZXQuaW1hZ2VzID0gdGhpcy5ub3JtYWxpemUoc291cmNlLmltYWdlcyk7XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NcbiAgICogQ3JlYXRlcyB0aGUgaW1hZ2Ugc3RydWN0dXJlIHdlJ2QgbGlrZSB0byBoYXZlLiBJbnN0ZWFkIG9mXG4gICAqIGhhdmluZyBhIHNpbmdsZSBsaXN0IHdpdGggYWxsIGltYWdlcyBkZXNwaXRlIHR5cGUgYW5kIGZvcm1hdFxuICAgKiB3ZSBjcmVhdGUgYSBwcm9wZXIgc3RydWN0dXJlLiBXaXRoIHRoYXQgd2UgY2FuIGRvOlxuICAgKiAtIGltYWdlcy5wcmltYXJ5LnRodW1uYWlsLnVybFxuICAgKiAtIGltYWdlcy5HQUxMRVJZWzBdLnRodW1uYWlsLnVybFxuICAgKi9cbiAgbm9ybWFsaXplKHNvdXJjZTogT2NjLkltYWdlW10pOiBJbWFnZXMge1xuICAgIGNvbnN0IGltYWdlcyA9IHt9O1xuICAgIGlmIChzb3VyY2UpIHtcbiAgICAgIGZvciAoY29uc3QgaW1hZ2Ugb2Ygc291cmNlKSB7XG4gICAgICAgIGNvbnN0IGlzTGlzdCA9IGltYWdlLmhhc093blByb3BlcnR5KCdnYWxsZXJ5SW5kZXgnKTtcbiAgICAgICAgaWYgKCFpbWFnZXMuaGFzT3duUHJvcGVydHkoaW1hZ2UuaW1hZ2VUeXBlKSkge1xuICAgICAgICAgIGltYWdlc1tpbWFnZS5pbWFnZVR5cGVdID0gaXNMaXN0ID8gW10gOiB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBpbWFnZUNvbnRhaW5lcjtcbiAgICAgICAgaWYgKGlzTGlzdCAmJiAhaW1hZ2VzW2ltYWdlLmltYWdlVHlwZV1baW1hZ2UuZ2FsbGVyeUluZGV4XSkge1xuICAgICAgICAgIGltYWdlc1tpbWFnZS5pbWFnZVR5cGVdW2ltYWdlLmdhbGxlcnlJbmRleF0gPSB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc0xpc3QpIHtcbiAgICAgICAgICBpbWFnZUNvbnRhaW5lciA9IGltYWdlc1tpbWFnZS5pbWFnZVR5cGVdW2ltYWdlLmdhbGxlcnlJbmRleF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaW1hZ2VDb250YWluZXIgPSBpbWFnZXNbaW1hZ2UuaW1hZ2VUeXBlXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRhcmdldEltYWdlID0geyAuLi5pbWFnZSB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogVHJhZGl0aW9uYWxseSwgaW4gYW4gb24tcHJlbSB3b3JsZCwgbWVkaWFzIGFuZCBvdGhlciBiYWNrZW5kIHJlbGF0ZWQgY2FsbHNcbiAgICAgICAgICogYXJlIGhvc3RlZCBhdCB0aGUgc2FtZSBwbGF0Zm9ybSwgYnV0IGluIGEgY2xvdWQgc2V0dXAsIGFwcGxpY2F0aW9ucyBhcmUgYXJlXG4gICAgICAgICAqIHR5cGljYWxseSBkaXN0cmlidXRlZCBjcm9zcyBkaWZmZXJlbnQgZW52aXJvbm1lbnRzLiBGb3IgbWVkaWEsIHdlIHVzZSB0aGVcbiAgICAgICAgICogYGJhY2tlbmQubWVkaWEuYmFzZVVybGAgYnkgZGVmYXVsdCwgYnV0IGZhbGxiYWNrIHRvIGBiYWNrZW5kLm9jYy5iYXNlVXJsYFxuICAgICAgICAgKiBpZiBub25lIHByb3ZpZGVkLlxuICAgICAgICAgKi9cbiAgICAgICAgdGFyZ2V0SW1hZ2UudXJsID1cbiAgICAgICAgICAodGhpcy5jb25maWcuYmFja2VuZC5tZWRpYS5iYXNlVXJsIHx8XG4gICAgICAgICAgICB0aGlzLmNvbmZpZy5iYWNrZW5kLm9jYy5iYXNlVXJsIHx8XG4gICAgICAgICAgICAnJykgKyBpbWFnZS51cmw7XG5cbiAgICAgICAgaW1hZ2VDb250YWluZXJbaW1hZ2UuZm9ybWF0XSA9IHRhcmdldEltYWdlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaW1hZ2VzO1xuICB9XG59XG4iXX0=