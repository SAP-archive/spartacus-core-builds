/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { OccConfig } from '../../../occ/config/occ-config';
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
        var e_1, _a;
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
                    /**
                     * Traditionally, in an on-prem world, medias and other backend related calls
                     * are hosted at the same platform, but in a cloud setup, applications are are
                     * typically distributed cross different environments. For media, we use the
                     * `backend.media.baseUrl` by default, but fallback to `backend.occ.baseUrl`
                     * if none provided.
                     */
                    image.url =
                        (this.config.backend.media.baseUrl ||
                            this.config.backend.occ.baseUrl ||
                            '') + image.url;
                    imageContainer[image.format] = image;
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (source_1_1 && !source_1_1.done && (_a = source_1.return)) _a.call(source_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        return images;
    };
    ProductImageNormalizer.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ProductImageNormalizer.ctorParameters = function () { return [
        { type: OccConfig }
    ]; };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1pbWFnZS1ub3JtYWxpemVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3Byb2R1Y3Qvb2NjL2NvbnZlcnRlcnMvcHJvZHVjdC1pbWFnZS1ub3JtYWxpemVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFNM0Q7SUFFRSxnQ0FBc0IsTUFBaUI7UUFBakIsV0FBTSxHQUFOLE1BQU0sQ0FBVztJQUFHLENBQUM7Ozs7OztJQUUzQyx3Q0FBTzs7Ozs7SUFBUCxVQUFRLE1BQWUsRUFBRSxNQUFrQjtRQUN6QyxJQUFJLE1BQU0sS0FBSyxTQUFTLEVBQUU7WUFDeEIsTUFBTSx3QkFBUSxDQUFDLG1CQUFBLE1BQU0sRUFBTyxDQUFDLENBQUUsQ0FBQztTQUNqQztRQUNELElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRTtZQUNqQixNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQy9DO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVEOzs7Ozs7O09BT0c7Ozs7Ozs7Ozs7O0lBQ0gsMENBQVM7Ozs7Ozs7Ozs7SUFBVCxVQUFVLE1BQWU7OztZQUNqQixNQUFNLEdBQUcsRUFBRTtRQUNqQixJQUFJLE1BQU0sRUFBRTs7Z0JBQ1YsS0FBb0IsSUFBQSxXQUFBLGlCQUFBLE1BQU0sQ0FBQSw4QkFBQSxrREFBRTtvQkFBdkIsSUFBTSxLQUFLLG1CQUFBOzt3QkFDUixNQUFNLEdBQUcsS0FBSyxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUM7b0JBQ25ELElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFBRTt3QkFDM0MsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO3FCQUM1Qzs7d0JBRUcsY0FBYyxTQUFBO29CQUNsQixJQUFJLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxFQUFFO3dCQUMxRCxNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLENBQUM7cUJBQ2xEO29CQUVELElBQUksTUFBTSxFQUFFO3dCQUNWLGNBQWMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztxQkFDOUQ7eUJBQU07d0JBQ0wsY0FBYyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7cUJBQzFDO29CQUVEOzs7Ozs7dUJBTUc7b0JBQ0gsS0FBSyxDQUFDLEdBQUc7d0JBQ1AsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTzs0QkFDaEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU87NEJBQy9CLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUM7b0JBRXBCLGNBQWMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsS0FBSyxDQUFDO2lCQUN0Qzs7Ozs7Ozs7O1NBQ0Y7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOztnQkExREYsVUFBVTs7OztnQkFORixTQUFTOztJQWlFbEIsNkJBQUM7Q0FBQSxBQTNERCxJQTJEQztTQTFEWSxzQkFBc0I7Ozs7OztJQUNyQix3Q0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPY2NDb25maWcgfSBmcm9tICcuLi8uLi8uLi9vY2MvY29uZmlnL29jYy1jb25maWcnO1xuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tICcuLi8uLi8uLi9vY2Mvb2NjLW1vZGVscyc7XG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSAnLi4vLi4vLi4vb2NjL29jYy1tb2RlbHMvb2NjLm1vZGVscyc7XG5pbXBvcnQgeyBDb252ZXJ0ZXIgfSBmcm9tICcuLi8uLi8uLi91dGlsL2NvbnZlcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7IFVJSW1hZ2VzLCBVSVByb2R1Y3QgfSBmcm9tICcuLi8uLi9tb2RlbC9wcm9kdWN0JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RJbWFnZU5vcm1hbGl6ZXIgaW1wbGVtZW50cyBDb252ZXJ0ZXI8UHJvZHVjdCwgVUlQcm9kdWN0PiB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBjb25maWc6IE9jY0NvbmZpZykge31cblxuICBjb252ZXJ0KHNvdXJjZTogUHJvZHVjdCwgdGFyZ2V0PzogVUlQcm9kdWN0KTogVUlQcm9kdWN0IHtcbiAgICBpZiAodGFyZ2V0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRhcmdldCA9IHsgLi4uKHNvdXJjZSBhcyBhbnkpIH07XG4gICAgfVxuICAgIGlmIChzb3VyY2UuaW1hZ2VzKSB7XG4gICAgICB0YXJnZXQuaW1hZ2VzID0gdGhpcy5ub3JtYWxpemUoc291cmNlLmltYWdlcyk7XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NcbiAgICogQ3JlYXRlcyB0aGUgaW1hZ2Ugc3RydWN0dXJlIHdlJ2QgbGlrZSB0byBoYXZlLiBJbnN0ZWFkIG9mXG4gICAqIGhhdmluZyBhIHNpbmdsZSBsaXN0IHdpdGggYWxsIGltYWdlcyBkZXNwaXRlIHR5cGUgYW5kIGZvcm1hdFxuICAgKiB3ZSBjcmVhdGUgYSBwcm9wZXIgc3RydWN0dXJlLiBXaXRoIHRoYXQgd2UgY2FuIGRvOlxuICAgKiAtIGltYWdlcy5wcmltYXJ5LnRodW1uYWlsLnVybFxuICAgKiAtIGltYWdlcy5HQUxMRVJZWzBdLnRodW1uYWlsLnVybFxuICAgKi9cbiAgbm9ybWFsaXplKHNvdXJjZTogSW1hZ2VbXSk6IFVJSW1hZ2VzIHtcbiAgICBjb25zdCBpbWFnZXMgPSB7fTtcbiAgICBpZiAoc291cmNlKSB7XG4gICAgICBmb3IgKGNvbnN0IGltYWdlIG9mIHNvdXJjZSkge1xuICAgICAgICBjb25zdCBpc0xpc3QgPSBpbWFnZS5oYXNPd25Qcm9wZXJ0eSgnZ2FsbGVyeUluZGV4Jyk7XG4gICAgICAgIGlmICghaW1hZ2VzLmhhc093blByb3BlcnR5KGltYWdlLmltYWdlVHlwZSkpIHtcbiAgICAgICAgICBpbWFnZXNbaW1hZ2UuaW1hZ2VUeXBlXSA9IGlzTGlzdCA/IFtdIDoge307XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgaW1hZ2VDb250YWluZXI7XG4gICAgICAgIGlmIChpc0xpc3QgJiYgIWltYWdlc1tpbWFnZS5pbWFnZVR5cGVdW2ltYWdlLmdhbGxlcnlJbmRleF0pIHtcbiAgICAgICAgICBpbWFnZXNbaW1hZ2UuaW1hZ2VUeXBlXVtpbWFnZS5nYWxsZXJ5SW5kZXhdID0ge307XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNMaXN0KSB7XG4gICAgICAgICAgaW1hZ2VDb250YWluZXIgPSBpbWFnZXNbaW1hZ2UuaW1hZ2VUeXBlXVtpbWFnZS5nYWxsZXJ5SW5kZXhdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGltYWdlQ29udGFpbmVyID0gaW1hZ2VzW2ltYWdlLmltYWdlVHlwZV07XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogVHJhZGl0aW9uYWxseSwgaW4gYW4gb24tcHJlbSB3b3JsZCwgbWVkaWFzIGFuZCBvdGhlciBiYWNrZW5kIHJlbGF0ZWQgY2FsbHNcbiAgICAgICAgICogYXJlIGhvc3RlZCBhdCB0aGUgc2FtZSBwbGF0Zm9ybSwgYnV0IGluIGEgY2xvdWQgc2V0dXAsIGFwcGxpY2F0aW9ucyBhcmUgYXJlXG4gICAgICAgICAqIHR5cGljYWxseSBkaXN0cmlidXRlZCBjcm9zcyBkaWZmZXJlbnQgZW52aXJvbm1lbnRzLiBGb3IgbWVkaWEsIHdlIHVzZSB0aGVcbiAgICAgICAgICogYGJhY2tlbmQubWVkaWEuYmFzZVVybGAgYnkgZGVmYXVsdCwgYnV0IGZhbGxiYWNrIHRvIGBiYWNrZW5kLm9jYy5iYXNlVXJsYFxuICAgICAgICAgKiBpZiBub25lIHByb3ZpZGVkLlxuICAgICAgICAgKi9cbiAgICAgICAgaW1hZ2UudXJsID1cbiAgICAgICAgICAodGhpcy5jb25maWcuYmFja2VuZC5tZWRpYS5iYXNlVXJsIHx8XG4gICAgICAgICAgICB0aGlzLmNvbmZpZy5iYWNrZW5kLm9jYy5iYXNlVXJsIHx8XG4gICAgICAgICAgICAnJykgKyBpbWFnZS51cmw7XG5cbiAgICAgICAgaW1hZ2VDb250YWluZXJbaW1hZ2UuZm9ybWF0XSA9IGltYWdlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaW1hZ2VzO1xuICB9XG59XG4iXX0=