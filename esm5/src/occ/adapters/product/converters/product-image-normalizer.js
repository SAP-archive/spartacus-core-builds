import { __assign, __decorate, __values } from "tslib";
import { Injectable } from '@angular/core';
import { OccConfig } from '../../../config/occ-config';
import * as i0 from "@angular/core";
import * as i1 from "../../../config/occ-config";
var ProductImageNormalizer = /** @class */ (function () {
    function ProductImageNormalizer(config) {
        this.config = config;
    }
    ProductImageNormalizer.prototype.convert = function (source, target) {
        if (target === undefined) {
            target = __assign({}, source);
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
    ProductImageNormalizer.prototype.normalize = function (source) {
        var e_1, _a;
        var images = {};
        if (source) {
            try {
                for (var source_1 = __values(source), source_1_1 = source_1.next(); !source_1_1.done; source_1_1 = source_1.next()) {
                    var image = source_1_1.value;
                    var isList = image.hasOwnProperty('galleryIndex');
                    if (!images.hasOwnProperty(image.imageType)) {
                        images[image.imageType] = isList ? [] : {};
                    }
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
                    var targetImage = __assign({}, image);
                    targetImage.url = this.normalizeImageUrl(targetImage.url);
                    imageContainer[image.format] = targetImage;
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
    /**
     * Traditionally, in an on-prem world, medias and other backend related calls
     * are hosted at the same platform, but in a cloud setup, applications are are
     * typically distributed cross different environments. For media, we use the
     * `backend.media.baseUrl` by default, but fallback to `backend.occ.baseUrl`
     * if none provided.
     */
    ProductImageNormalizer.prototype.normalizeImageUrl = function (url) {
        if (new RegExp(/^(http|data:image|\/\/)/i).test(url)) {
            return url;
        }
        return ((this.config.backend.media.baseUrl ||
            this.config.backend.occ.baseUrl ||
            '') + url);
    };
    ProductImageNormalizer.ctorParameters = function () { return [
        { type: OccConfig }
    ]; };
    ProductImageNormalizer.ɵprov = i0.ɵɵdefineInjectable({ factory: function ProductImageNormalizer_Factory() { return new ProductImageNormalizer(i0.ɵɵinject(i1.OccConfig)); }, token: ProductImageNormalizer, providedIn: "root" });
    ProductImageNormalizer = __decorate([
        Injectable({ providedIn: 'root' })
    ], ProductImageNormalizer);
    return ProductImageNormalizer;
}());
export { ProductImageNormalizer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1pbWFnZS1ub3JtYWxpemVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL29jYy9hZGFwdGVycy9wcm9kdWN0L2NvbnZlcnRlcnMvcHJvZHVjdC1pbWFnZS1ub3JtYWxpemVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7O0FBT3ZEO0lBQ0UsZ0NBQXNCLE1BQWlCO1FBQWpCLFdBQU0sR0FBTixNQUFNLENBQVc7SUFBRyxDQUFDO0lBRTNDLHdDQUFPLEdBQVAsVUFBUSxNQUFtQixFQUFFLE1BQWdCO1FBQzNDLElBQUksTUFBTSxLQUFLLFNBQVMsRUFBRTtZQUN4QixNQUFNLGdCQUFTLE1BQWMsQ0FBRSxDQUFDO1NBQ2pDO1FBQ0QsSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFO1lBQ2pCLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDL0M7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUNILDBDQUFTLEdBQVQsVUFBVSxNQUFtQjs7UUFDM0IsSUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLElBQUksTUFBTSxFQUFFOztnQkFDVixLQUFvQixJQUFBLFdBQUEsU0FBQSxNQUFNLENBQUEsOEJBQUEsa0RBQUU7b0JBQXZCLElBQU0sS0FBSyxtQkFBQTtvQkFDZCxJQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDO29CQUNwRCxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEVBQUU7d0JBQzNDLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztxQkFDNUM7b0JBRUQsSUFBSSxjQUFjLFNBQUEsQ0FBQztvQkFDbkIsSUFBSSxNQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsRUFBRTt3QkFDMUQsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxDQUFDO3FCQUNsRDtvQkFFRCxJQUFJLE1BQU0sRUFBRTt3QkFDVixjQUFjLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7cUJBQzlEO3lCQUFNO3dCQUNMLGNBQWMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO3FCQUMxQztvQkFFRCxJQUFNLFdBQVcsZ0JBQVEsS0FBSyxDQUFFLENBQUM7b0JBQ2pDLFdBQVcsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDMUQsY0FBYyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxXQUFXLENBQUM7aUJBQzVDOzs7Ozs7Ozs7U0FDRjtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFDRDs7Ozs7O09BTUc7SUFDSyxrREFBaUIsR0FBekIsVUFBMEIsR0FBVztRQUNuQyxJQUFJLElBQUksTUFBTSxDQUFDLDBCQUEwQixDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3BELE9BQU8sR0FBRyxDQUFDO1NBQ1o7UUFDRCxPQUFPLENBQ0wsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTztZQUNoQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTztZQUMvQixFQUFFLENBQUMsR0FBRyxHQUFHLENBQ1osQ0FBQztJQUNKLENBQUM7O2dCQS9ENkIsU0FBUzs7O0lBRDVCLHNCQUFzQjtRQURsQyxVQUFVLENBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLENBQUM7T0FDdEIsc0JBQXNCLENBaUVsQztpQ0F6RUQ7Q0F5RUMsQUFqRUQsSUFpRUM7U0FqRVksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2NjQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vY29uZmlnL29jYy1jb25maWcnO1xuaW1wb3J0IHsgT2NjIH0gZnJvbSAnLi4vLi4vLi4vb2NjLW1vZGVscy9vY2MubW9kZWxzJztcbmltcG9ydCB7IENvbnZlcnRlciB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWwvY29udmVydGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gJy4uLy4uLy4uLy4uL21vZGVsL3Byb2R1Y3QubW9kZWwnO1xuaW1wb3J0IHsgSW1hZ2VzIH0gZnJvbSAnLi4vLi4vLi4vLi4vbW9kZWwvaW1hZ2UubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RJbWFnZU5vcm1hbGl6ZXIgaW1wbGVtZW50cyBDb252ZXJ0ZXI8T2NjLlByb2R1Y3QsIFByb2R1Y3Q+IHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGNvbmZpZzogT2NjQ29uZmlnKSB7fVxuXG4gIGNvbnZlcnQoc291cmNlOiBPY2MuUHJvZHVjdCwgdGFyZ2V0PzogUHJvZHVjdCk6IFByb2R1Y3Qge1xuICAgIGlmICh0YXJnZXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGFyZ2V0ID0geyAuLi4oc291cmNlIGFzIGFueSkgfTtcbiAgICB9XG4gICAgaWYgKHNvdXJjZS5pbWFnZXMpIHtcbiAgICAgIHRhcmdldC5pbWFnZXMgPSB0aGlzLm5vcm1hbGl6ZShzb3VyY2UuaW1hZ2VzKTtcbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY1xuICAgKiBDcmVhdGVzIHRoZSBpbWFnZSBzdHJ1Y3R1cmUgd2UnZCBsaWtlIHRvIGhhdmUuIEluc3RlYWQgb2ZcbiAgICogaGF2aW5nIGEgc2luZ2xlIGxpc3Qgd2l0aCBhbGwgaW1hZ2VzIGRlc3BpdGUgdHlwZSBhbmQgZm9ybWF0XG4gICAqIHdlIGNyZWF0ZSBhIHByb3BlciBzdHJ1Y3R1cmUuIFdpdGggdGhhdCB3ZSBjYW4gZG86XG4gICAqIC0gaW1hZ2VzLnByaW1hcnkudGh1bW5haWwudXJsXG4gICAqIC0gaW1hZ2VzLkdBTExFUllbMF0udGh1bW5haWwudXJsXG4gICAqL1xuICBub3JtYWxpemUoc291cmNlOiBPY2MuSW1hZ2VbXSk6IEltYWdlcyB7XG4gICAgY29uc3QgaW1hZ2VzID0ge307XG4gICAgaWYgKHNvdXJjZSkge1xuICAgICAgZm9yIChjb25zdCBpbWFnZSBvZiBzb3VyY2UpIHtcbiAgICAgICAgY29uc3QgaXNMaXN0ID0gaW1hZ2UuaGFzT3duUHJvcGVydHkoJ2dhbGxlcnlJbmRleCcpO1xuICAgICAgICBpZiAoIWltYWdlcy5oYXNPd25Qcm9wZXJ0eShpbWFnZS5pbWFnZVR5cGUpKSB7XG4gICAgICAgICAgaW1hZ2VzW2ltYWdlLmltYWdlVHlwZV0gPSBpc0xpc3QgPyBbXSA6IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGltYWdlQ29udGFpbmVyO1xuICAgICAgICBpZiAoaXNMaXN0ICYmICFpbWFnZXNbaW1hZ2UuaW1hZ2VUeXBlXVtpbWFnZS5nYWxsZXJ5SW5kZXhdKSB7XG4gICAgICAgICAgaW1hZ2VzW2ltYWdlLmltYWdlVHlwZV1baW1hZ2UuZ2FsbGVyeUluZGV4XSA9IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzTGlzdCkge1xuICAgICAgICAgIGltYWdlQ29udGFpbmVyID0gaW1hZ2VzW2ltYWdlLmltYWdlVHlwZV1baW1hZ2UuZ2FsbGVyeUluZGV4XTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpbWFnZUNvbnRhaW5lciA9IGltYWdlc1tpbWFnZS5pbWFnZVR5cGVdO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdGFyZ2V0SW1hZ2UgPSB7IC4uLmltYWdlIH07XG4gICAgICAgIHRhcmdldEltYWdlLnVybCA9IHRoaXMubm9ybWFsaXplSW1hZ2VVcmwodGFyZ2V0SW1hZ2UudXJsKTtcbiAgICAgICAgaW1hZ2VDb250YWluZXJbaW1hZ2UuZm9ybWF0XSA9IHRhcmdldEltYWdlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaW1hZ2VzO1xuICB9XG4gIC8qKlxuICAgKiBUcmFkaXRpb25hbGx5LCBpbiBhbiBvbi1wcmVtIHdvcmxkLCBtZWRpYXMgYW5kIG90aGVyIGJhY2tlbmQgcmVsYXRlZCBjYWxsc1xuICAgKiBhcmUgaG9zdGVkIGF0IHRoZSBzYW1lIHBsYXRmb3JtLCBidXQgaW4gYSBjbG91ZCBzZXR1cCwgYXBwbGljYXRpb25zIGFyZSBhcmVcbiAgICogdHlwaWNhbGx5IGRpc3RyaWJ1dGVkIGNyb3NzIGRpZmZlcmVudCBlbnZpcm9ubWVudHMuIEZvciBtZWRpYSwgd2UgdXNlIHRoZVxuICAgKiBgYmFja2VuZC5tZWRpYS5iYXNlVXJsYCBieSBkZWZhdWx0LCBidXQgZmFsbGJhY2sgdG8gYGJhY2tlbmQub2NjLmJhc2VVcmxgXG4gICAqIGlmIG5vbmUgcHJvdmlkZWQuXG4gICAqL1xuICBwcml2YXRlIG5vcm1hbGl6ZUltYWdlVXJsKHVybDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAobmV3IFJlZ0V4cCgvXihodHRwfGRhdGE6aW1hZ2V8XFwvXFwvKS9pKS50ZXN0KHVybCkpIHtcbiAgICAgIHJldHVybiB1cmw7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAodGhpcy5jb25maWcuYmFja2VuZC5tZWRpYS5iYXNlVXJsIHx8XG4gICAgICAgIHRoaXMuY29uZmlnLmJhY2tlbmQub2NjLmJhc2VVcmwgfHxcbiAgICAgICAgJycpICsgdXJsXG4gICAgKTtcbiAgfVxufVxuIl19