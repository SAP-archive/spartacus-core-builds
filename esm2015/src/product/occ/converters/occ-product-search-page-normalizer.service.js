/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ConverterService } from '../../../util/converter.service';
import { Injectable } from '@angular/core';
import { PRODUCT_NORMALIZER } from '../../connectors/product/converters';
export class OccProductSearchPageNormalizer {
    /**
     * @param {?} converterService
     */
    constructor(converterService) {
        this.converterService = converterService;
    }
    /**
     * @param {?} source
     * @param {?=} target
     * @return {?}
     */
    convert(source, target = {}) {
        target = Object.assign({}, target, ((/** @type {?} */ (source))));
        if (source.products) {
            target.products = source.products.map(product => this.converterService.convert(product, PRODUCT_NORMALIZER));
        }
        return target;
    }
}
OccProductSearchPageNormalizer.decorators = [
    { type: Injectable }
];
/** @nocollapse */
OccProductSearchPageNormalizer.ctorParameters = () => [
    { type: ConverterService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    OccProductSearchPageNormalizer.prototype.converterService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXByb2R1Y3Qtc2VhcmNoLXBhZ2Utbm9ybWFsaXplci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3Byb2R1Y3Qvb2NjL2NvbnZlcnRlcnMvb2NjLXByb2R1Y3Qtc2VhcmNoLXBhZ2Utbm9ybWFsaXplci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQWEsZ0JBQWdCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBSXpFLE1BQU0sT0FBTyw4QkFBOEI7Ozs7SUFFekMsWUFBb0IsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFBRyxDQUFDOzs7Ozs7SUFFMUQsT0FBTyxDQUNMLE1BQTZCLEVBQzdCLFNBQTRCLEVBQUU7UUFFOUIsTUFBTSxxQkFDRCxNQUFNLEVBQ04sQ0FBQyxtQkFBQSxNQUFNLEVBQU8sQ0FBQyxDQUNuQixDQUFDO1FBQ0YsSUFBSSxNQUFNLENBQUMsUUFBUSxFQUFFO1lBQ25CLE1BQU0sQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FDOUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsa0JBQWtCLENBQUMsQ0FDM0QsQ0FBQztTQUNIO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7O1lBbkJGLFVBQVU7Ozs7WUFMUyxnQkFBZ0I7Ozs7Ozs7SUFRdEIsMERBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2NjIH0gZnJvbSAnLi4vLi4vLi4vb2NjL29jYy1tb2RlbHMvb2NjLm1vZGVscyc7XG5pbXBvcnQgeyBDb252ZXJ0ZXIsIENvbnZlcnRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi91dGlsL2NvbnZlcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBST0RVQ1RfTk9STUFMSVpFUiB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvcHJvZHVjdC9jb252ZXJ0ZXJzJztcbmltcG9ydCB7IFByb2R1Y3RTZWFyY2hQYWdlIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvcHJvZHVjdC1zZWFyY2gubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT2NjUHJvZHVjdFNlYXJjaFBhZ2VOb3JtYWxpemVyXG4gIGltcGxlbWVudHMgQ29udmVydGVyPE9jYy5Qcm9kdWN0U2VhcmNoUGFnZSwgUHJvZHVjdFNlYXJjaFBhZ2U+IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb252ZXJ0ZXJTZXJ2aWNlOiBDb252ZXJ0ZXJTZXJ2aWNlKSB7fVxuXG4gIGNvbnZlcnQoXG4gICAgc291cmNlOiBPY2MuUHJvZHVjdFNlYXJjaFBhZ2UsXG4gICAgdGFyZ2V0OiBQcm9kdWN0U2VhcmNoUGFnZSA9IHt9XG4gICk6IFByb2R1Y3RTZWFyY2hQYWdlIHtcbiAgICB0YXJnZXQgPSB7XG4gICAgICAuLi50YXJnZXQsXG4gICAgICAuLi4oc291cmNlIGFzIGFueSksXG4gICAgfTtcbiAgICBpZiAoc291cmNlLnByb2R1Y3RzKSB7XG4gICAgICB0YXJnZXQucHJvZHVjdHMgPSBzb3VyY2UucHJvZHVjdHMubWFwKHByb2R1Y3QgPT5cbiAgICAgICAgdGhpcy5jb252ZXJ0ZXJTZXJ2aWNlLmNvbnZlcnQocHJvZHVjdCwgUFJPRFVDVF9OT1JNQUxJWkVSKVxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfVxufVxuIl19