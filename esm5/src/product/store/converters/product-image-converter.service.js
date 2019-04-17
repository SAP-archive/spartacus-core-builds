/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { OccConfig } from '../../../occ/index';
var ProductImageConverterService = /** @class */ (function () {
    function ProductImageConverterService(config) {
        this.config = config;
    }
    /**
     * @param {?} list
     * @return {?}
     */
    ProductImageConverterService.prototype.convertList = /**
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
     * @param {?} product
     * @return {?}
     */
    ProductImageConverterService.prototype.convertProduct = /**
     * @param {?} product
     * @return {?}
     */
    function (product) {
        if (product.images) {
            product.images = this.populate(product.images);
        }
    };
    /**
     * @desc
     * Creates the image structue we'd like to have. Instead of
     * having a singel list with all images despite type and format
     * we create a proper structure. With that we can do:
     * - images.primary.thumnail.url
     * - images.GALLERY[0].thumnail.url
     */
    /**
     * @desc
     * Creates the image structue we'd like to have. Instead of
     * having a singel list with all images despite type and format
     * we create a proper structure. With that we can do:
     * - images.primary.thumnail.url
     * - images.GALLERY[0].thumnail.url
     * @param {?} source
     * @return {?}
     */
    ProductImageConverterService.prototype.populate = /**
     * @desc
     * Creates the image structue we'd like to have. Instead of
     * having a singel list with all images despite type and format
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
    ProductImageConverterService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ProductImageConverterService.ctorParameters = function () { return [
        { type: OccConfig }
    ]; };
    return ProductImageConverterService;
}());
export { ProductImageConverterService };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    ProductImageConverterService.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1pbWFnZS1jb252ZXJ0ZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9wcm9kdWN0L3N0b3JlL2NvbnZlcnRlcnMvcHJvZHVjdC1pbWFnZS1jb252ZXJ0ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRy9DO0lBRUUsc0NBQXNCLE1BQWlCO1FBQWpCLFdBQU0sR0FBTixNQUFNLENBQVc7SUFBRyxDQUFDOzs7OztJQUUzQyxrREFBVzs7OztJQUFYLFVBQVksSUFBb0I7O1FBQzlCLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDVCxPQUFPO1NBQ1I7O1lBQ0QsS0FBc0IsSUFBQSxTQUFBLGlCQUFBLElBQUksQ0FBQSwwQkFBQSw0Q0FBRTtnQkFBdkIsSUFBTSxPQUFPLGlCQUFBO2dCQUNoQixJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQzlCOzs7Ozs7Ozs7SUFDSCxDQUFDOzs7OztJQUVELHFEQUFjOzs7O0lBQWQsVUFBZSxPQUFnQjtRQUM3QixJQUFJLE9BQU8sQ0FBQyxNQUFNLEVBQUU7WUFDbEIsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNoRDtJQUNILENBQUM7SUFFRDs7Ozs7OztPQU9HOzs7Ozs7Ozs7OztJQUNILCtDQUFROzs7Ozs7Ozs7O0lBQVIsVUFBUyxNQUFrQjs7O1lBQ25CLE1BQU0sR0FBRyxFQUFFO1FBQ2pCLElBQUksTUFBTSxFQUFFOztnQkFDVixLQUFvQixJQUFBLFdBQUEsaUJBQUEsTUFBTSxDQUFBLDhCQUFBLGtEQUFFO29CQUF2QixJQUFNLEtBQUssbUJBQUE7O3dCQUNSLE1BQU0sR0FBRyxLQUFLLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQztvQkFDbkQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFO3dCQUMzQyxNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7cUJBQzVDOzt3QkFFRyxjQUFjLFNBQUE7b0JBQ2xCLElBQUksTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLEVBQUU7d0JBQzFELE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsQ0FBQztxQkFDbEQ7b0JBRUQsSUFBSSxNQUFNLEVBQUU7d0JBQ1YsY0FBYyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO3FCQUM5RDt5QkFBTTt3QkFDTCxjQUFjLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztxQkFDMUM7b0JBRUQsMEJBQTBCO29CQUMxQixLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDO29CQUVoRSxjQUFjLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEtBQUssQ0FBQztpQkFDdEM7Ozs7Ozs7OztTQUNGO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7Z0JBdERGLFVBQVU7Ozs7Z0JBSEYsU0FBUzs7SUEwRGxCLG1DQUFDO0NBQUEsQUF2REQsSUF1REM7U0F0RFksNEJBQTRCOzs7Ozs7SUFDM0IsOENBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBPY2NDb25maWcgfSBmcm9tICcuLi8uLi8uLi9vY2MvaW5kZXgnO1xuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gJy4uLy4uLy4uL29jYy9vY2MtbW9kZWxzL29jYy5tb2RlbHMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUHJvZHVjdEltYWdlQ29udmVydGVyU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBjb25maWc6IE9jY0NvbmZpZykge31cblxuICBjb252ZXJ0TGlzdChsaXN0OiBBcnJheTxQcm9kdWN0Pik6IHZvaWQge1xuICAgIGlmICghbGlzdCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IHByb2R1Y3Qgb2YgbGlzdCkge1xuICAgICAgdGhpcy5jb252ZXJ0UHJvZHVjdChwcm9kdWN0KTtcbiAgICB9XG4gIH1cblxuICBjb252ZXJ0UHJvZHVjdChwcm9kdWN0OiBQcm9kdWN0KTogdm9pZCB7XG4gICAgaWYgKHByb2R1Y3QuaW1hZ2VzKSB7XG4gICAgICBwcm9kdWN0LmltYWdlcyA9IHRoaXMucG9wdWxhdGUocHJvZHVjdC5pbWFnZXMpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY1xuICAgKiBDcmVhdGVzIHRoZSBpbWFnZSBzdHJ1Y3R1ZSB3ZSdkIGxpa2UgdG8gaGF2ZS4gSW5zdGVhZCBvZlxuICAgKiBoYXZpbmcgYSBzaW5nZWwgbGlzdCB3aXRoIGFsbCBpbWFnZXMgZGVzcGl0ZSB0eXBlIGFuZCBmb3JtYXRcbiAgICogd2UgY3JlYXRlIGEgcHJvcGVyIHN0cnVjdHVyZS4gV2l0aCB0aGF0IHdlIGNhbiBkbzpcbiAgICogLSBpbWFnZXMucHJpbWFyeS50aHVtbmFpbC51cmxcbiAgICogLSBpbWFnZXMuR0FMTEVSWVswXS50aHVtbmFpbC51cmxcbiAgICovXG4gIHBvcHVsYXRlKHNvdXJjZTogQXJyYXk8YW55Pik6IGFueSB7XG4gICAgY29uc3QgaW1hZ2VzID0ge307XG4gICAgaWYgKHNvdXJjZSkge1xuICAgICAgZm9yIChjb25zdCBpbWFnZSBvZiBzb3VyY2UpIHtcbiAgICAgICAgY29uc3QgaXNMaXN0ID0gaW1hZ2UuaGFzT3duUHJvcGVydHkoJ2dhbGxlcnlJbmRleCcpO1xuICAgICAgICBpZiAoIWltYWdlcy5oYXNPd25Qcm9wZXJ0eShpbWFnZS5pbWFnZVR5cGUpKSB7XG4gICAgICAgICAgaW1hZ2VzW2ltYWdlLmltYWdlVHlwZV0gPSBpc0xpc3QgPyBbXSA6IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGltYWdlQ29udGFpbmVyO1xuICAgICAgICBpZiAoaXNMaXN0ICYmICFpbWFnZXNbaW1hZ2UuaW1hZ2VUeXBlXVtpbWFnZS5nYWxsZXJ5SW5kZXhdKSB7XG4gICAgICAgICAgaW1hZ2VzW2ltYWdlLmltYWdlVHlwZV1baW1hZ2UuZ2FsbGVyeUluZGV4XSA9IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzTGlzdCkge1xuICAgICAgICAgIGltYWdlQ29udGFpbmVyID0gaW1hZ2VzW2ltYWdlLmltYWdlVHlwZV1baW1hZ2UuZ2FsbGVyeUluZGV4XTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpbWFnZUNvbnRhaW5lciA9IGltYWdlc1tpbWFnZS5pbWFnZVR5cGVdO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gc2V0IGZ1bGwgaW1hZ2UgVVJMIHBhdGhcbiAgICAgICAgaW1hZ2UudXJsID0gKHRoaXMuY29uZmlnLmJhY2tlbmQub2NjLmJhc2VVcmwgfHwgJycpICsgaW1hZ2UudXJsO1xuXG4gICAgICAgIGltYWdlQ29udGFpbmVyW2ltYWdlLmZvcm1hdF0gPSBpbWFnZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGltYWdlcztcbiAgfVxufVxuIl19