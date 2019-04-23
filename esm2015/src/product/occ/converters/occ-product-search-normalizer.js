/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ConverterService } from '../../../util/converter.service';
import { Injectable } from '@angular/core';
import { PRODUCT_NORMALIZER } from '../../connectors/product/converters';
export class OccProductSearchNormalizer {
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
OccProductSearchNormalizer.decorators = [
    { type: Injectable }
];
/** @nocollapse */
OccProductSearchNormalizer.ctorParameters = () => [
    { type: ConverterService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    OccProductSearchNormalizer.prototype.converterService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXByb2R1Y3Qtc2VhcmNoLW5vcm1hbGl6ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcHJvZHVjdC9vY2MvY29udmVydGVycy9vY2MtcHJvZHVjdC1zZWFyY2gtbm9ybWFsaXplci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFhLGdCQUFnQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDOUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUd6RSxNQUFNLE9BQU8sMEJBQTBCOzs7O0lBRXJDLFlBQW9CLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBQUcsQ0FBQzs7Ozs7O0lBRTFELE9BQU8sQ0FDTCxNQUF5QixFQUN6QixTQUE4QixFQUFFO1FBRWhDLE1BQU0scUJBQ0QsTUFBTSxFQUNOLENBQUMsbUJBQUEsTUFBTSxFQUFPLENBQUMsQ0FDbkIsQ0FBQztRQUNGLElBQUksTUFBTSxDQUFDLFFBQVEsRUFBRTtZQUNuQixNQUFNLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQzlDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLGtCQUFrQixDQUFDLENBQzNELENBQUM7U0FDSDtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7OztZQW5CRixVQUFVOzs7O1lBTFMsZ0JBQWdCOzs7Ozs7O0lBUXRCLHNEQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb2R1Y3RTZWFyY2hQYWdlIH0gZnJvbSAnLi4vLi4vLi4vb2NjL29jYy1tb2RlbHMvb2NjLm1vZGVscyc7XG5pbXBvcnQgeyBDb252ZXJ0ZXIsIENvbnZlcnRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi91dGlsL2NvbnZlcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFVJUHJvZHVjdFNlYXJjaFBhZ2UgfSBmcm9tICcuLi8uLi9tb2RlbC9wcm9kdWN0LXNlYXJjaC1wYWdlJztcbmltcG9ydCB7IFBST0RVQ1RfTk9STUFMSVpFUiB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvcHJvZHVjdC9jb252ZXJ0ZXJzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE9jY1Byb2R1Y3RTZWFyY2hOb3JtYWxpemVyXG4gIGltcGxlbWVudHMgQ29udmVydGVyPFByb2R1Y3RTZWFyY2hQYWdlLCBVSVByb2R1Y3RTZWFyY2hQYWdlPiB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29udmVydGVyU2VydmljZTogQ29udmVydGVyU2VydmljZSkge31cblxuICBjb252ZXJ0KFxuICAgIHNvdXJjZTogUHJvZHVjdFNlYXJjaFBhZ2UsXG4gICAgdGFyZ2V0OiBVSVByb2R1Y3RTZWFyY2hQYWdlID0ge31cbiAgKTogVUlQcm9kdWN0U2VhcmNoUGFnZSB7XG4gICAgdGFyZ2V0ID0ge1xuICAgICAgLi4udGFyZ2V0LFxuICAgICAgLi4uKHNvdXJjZSBhcyBhbnkpLFxuICAgIH07XG4gICAgaWYgKHNvdXJjZS5wcm9kdWN0cykge1xuICAgICAgdGFyZ2V0LnByb2R1Y3RzID0gc291cmNlLnByb2R1Y3RzLm1hcChwcm9kdWN0ID0+XG4gICAgICAgIHRoaXMuY29udmVydGVyU2VydmljZS5jb252ZXJ0KHByb2R1Y3QsIFBST0RVQ1RfTk9STUFMSVpFUilcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH1cbn1cbiJdfQ==