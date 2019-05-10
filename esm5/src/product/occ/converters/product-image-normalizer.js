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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1pbWFnZS1ub3JtYWxpemVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3Byb2R1Y3Qvb2NjL2NvbnZlcnRlcnMvcHJvZHVjdC1pbWFnZS1ub3JtYWxpemVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFNM0Q7SUFFRSxnQ0FBc0IsTUFBaUI7UUFBakIsV0FBTSxHQUFOLE1BQU0sQ0FBVztJQUFHLENBQUM7Ozs7OztJQUUzQyx3Q0FBTzs7Ozs7SUFBUCxVQUFRLE1BQW1CLEVBQUUsTUFBZ0I7UUFDM0MsSUFBSSxNQUFNLEtBQUssU0FBUyxFQUFFO1lBQ3hCLE1BQU0sd0JBQVEsQ0FBQyxtQkFBQSxNQUFNLEVBQU8sQ0FBQyxDQUFFLENBQUM7U0FDakM7UUFDRCxJQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQUU7WUFDakIsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUMvQztRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFRDs7Ozs7OztPQU9HOzs7Ozs7Ozs7OztJQUNILDBDQUFTOzs7Ozs7Ozs7O0lBQVQsVUFBVSxNQUFtQjs7O1lBQ3JCLE1BQU0sR0FBRyxFQUFFO1FBQ2pCLElBQUksTUFBTSxFQUFFOztnQkFDVixLQUFvQixJQUFBLFdBQUEsaUJBQUEsTUFBTSxDQUFBLDhCQUFBLGtEQUFFO29CQUF2QixJQUFNLEtBQUssbUJBQUE7O3dCQUNSLE1BQU0sR0FBRyxLQUFLLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQztvQkFDbkQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFO3dCQUMzQyxNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7cUJBQzVDOzt3QkFFRyxjQUFjLFNBQUE7b0JBQ2xCLElBQUksTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLEVBQUU7d0JBQzFELE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsQ0FBQztxQkFDbEQ7b0JBRUQsSUFBSSxNQUFNLEVBQUU7d0JBQ1YsY0FBYyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO3FCQUM5RDt5QkFBTTt3QkFDTCxjQUFjLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztxQkFDMUM7b0JBRUQ7Ozs7Ozt1QkFNRztvQkFDSCxLQUFLLENBQUMsR0FBRzt3QkFDUCxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPOzRCQUNoQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTzs0QkFDL0IsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQztvQkFFcEIsY0FBYyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxLQUFLLENBQUM7aUJBQ3RDOzs7Ozs7Ozs7U0FDRjtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7O2dCQTFERixVQUFVOzs7O2dCQU5GLFNBQVM7O0lBaUVsQiw2QkFBQztDQUFBLEFBM0RELElBMkRDO1NBMURZLHNCQUFzQjs7Ozs7O0lBQ3JCLHdDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9jY0NvbmZpZyB9IGZyb20gJy4uLy4uLy4uL29jYy9jb25maWcvb2NjLWNvbmZpZyc7XG5pbXBvcnQgeyBPY2MgfSBmcm9tICcuLi8uLi8uLi9vY2Mvb2NjLW1vZGVscy9vY2MubW9kZWxzJztcbmltcG9ydCB7IENvbnZlcnRlciB9IGZyb20gJy4uLy4uLy4uL3V0aWwvY29udmVydGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL3Byb2R1Y3QubW9kZWwnO1xuaW1wb3J0IHsgSW1hZ2VzIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvaW1hZ2UubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUHJvZHVjdEltYWdlTm9ybWFsaXplciBpbXBsZW1lbnRzIENvbnZlcnRlcjxPY2MuUHJvZHVjdCwgUHJvZHVjdD4ge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgY29uZmlnOiBPY2NDb25maWcpIHt9XG5cbiAgY29udmVydChzb3VyY2U6IE9jYy5Qcm9kdWN0LCB0YXJnZXQ/OiBQcm9kdWN0KTogUHJvZHVjdCB7XG4gICAgaWYgKHRhcmdldCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0YXJnZXQgPSB7IC4uLihzb3VyY2UgYXMgYW55KSB9O1xuICAgIH1cbiAgICBpZiAoc291cmNlLmltYWdlcykge1xuICAgICAgdGFyZ2V0LmltYWdlcyA9IHRoaXMubm9ybWFsaXplKHNvdXJjZS5pbWFnZXMpO1xuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjXG4gICAqIENyZWF0ZXMgdGhlIGltYWdlIHN0cnVjdHVyZSB3ZSdkIGxpa2UgdG8gaGF2ZS4gSW5zdGVhZCBvZlxuICAgKiBoYXZpbmcgYSBzaW5nbGUgbGlzdCB3aXRoIGFsbCBpbWFnZXMgZGVzcGl0ZSB0eXBlIGFuZCBmb3JtYXRcbiAgICogd2UgY3JlYXRlIGEgcHJvcGVyIHN0cnVjdHVyZS4gV2l0aCB0aGF0IHdlIGNhbiBkbzpcbiAgICogLSBpbWFnZXMucHJpbWFyeS50aHVtbmFpbC51cmxcbiAgICogLSBpbWFnZXMuR0FMTEVSWVswXS50aHVtbmFpbC51cmxcbiAgICovXG4gIG5vcm1hbGl6ZShzb3VyY2U6IE9jYy5JbWFnZVtdKTogSW1hZ2VzIHtcbiAgICBjb25zdCBpbWFnZXMgPSB7fTtcbiAgICBpZiAoc291cmNlKSB7XG4gICAgICBmb3IgKGNvbnN0IGltYWdlIG9mIHNvdXJjZSkge1xuICAgICAgICBjb25zdCBpc0xpc3QgPSBpbWFnZS5oYXNPd25Qcm9wZXJ0eSgnZ2FsbGVyeUluZGV4Jyk7XG4gICAgICAgIGlmICghaW1hZ2VzLmhhc093blByb3BlcnR5KGltYWdlLmltYWdlVHlwZSkpIHtcbiAgICAgICAgICBpbWFnZXNbaW1hZ2UuaW1hZ2VUeXBlXSA9IGlzTGlzdCA/IFtdIDoge307XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgaW1hZ2VDb250YWluZXI7XG4gICAgICAgIGlmIChpc0xpc3QgJiYgIWltYWdlc1tpbWFnZS5pbWFnZVR5cGVdW2ltYWdlLmdhbGxlcnlJbmRleF0pIHtcbiAgICAgICAgICBpbWFnZXNbaW1hZ2UuaW1hZ2VUeXBlXVtpbWFnZS5nYWxsZXJ5SW5kZXhdID0ge307XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNMaXN0KSB7XG4gICAgICAgICAgaW1hZ2VDb250YWluZXIgPSBpbWFnZXNbaW1hZ2UuaW1hZ2VUeXBlXVtpbWFnZS5nYWxsZXJ5SW5kZXhdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGltYWdlQ29udGFpbmVyID0gaW1hZ2VzW2ltYWdlLmltYWdlVHlwZV07XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogVHJhZGl0aW9uYWxseSwgaW4gYW4gb24tcHJlbSB3b3JsZCwgbWVkaWFzIGFuZCBvdGhlciBiYWNrZW5kIHJlbGF0ZWQgY2FsbHNcbiAgICAgICAgICogYXJlIGhvc3RlZCBhdCB0aGUgc2FtZSBwbGF0Zm9ybSwgYnV0IGluIGEgY2xvdWQgc2V0dXAsIGFwcGxpY2F0aW9ucyBhcmUgYXJlXG4gICAgICAgICAqIHR5cGljYWxseSBkaXN0cmlidXRlZCBjcm9zcyBkaWZmZXJlbnQgZW52aXJvbm1lbnRzLiBGb3IgbWVkaWEsIHdlIHVzZSB0aGVcbiAgICAgICAgICogYGJhY2tlbmQubWVkaWEuYmFzZVVybGAgYnkgZGVmYXVsdCwgYnV0IGZhbGxiYWNrIHRvIGBiYWNrZW5kLm9jYy5iYXNlVXJsYFxuICAgICAgICAgKiBpZiBub25lIHByb3ZpZGVkLlxuICAgICAgICAgKi9cbiAgICAgICAgaW1hZ2UudXJsID1cbiAgICAgICAgICAodGhpcy5jb25maWcuYmFja2VuZC5tZWRpYS5iYXNlVXJsIHx8XG4gICAgICAgICAgICB0aGlzLmNvbmZpZy5iYWNrZW5kLm9jYy5iYXNlVXJsIHx8XG4gICAgICAgICAgICAnJykgKyBpbWFnZS51cmw7XG5cbiAgICAgICAgaW1hZ2VDb250YWluZXJbaW1hZ2UuZm9ybWF0XSA9IGltYWdlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaW1hZ2VzO1xuICB9XG59XG4iXX0=