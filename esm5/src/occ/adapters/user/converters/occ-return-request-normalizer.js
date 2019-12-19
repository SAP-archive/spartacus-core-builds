/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { ConverterService, } from '../../../../util/converter.service';
import { PRODUCT_NORMALIZER } from '../../../../product/connectors/product/converters';
import * as i0 from "@angular/core";
import * as i1 from "../../../../util/converter.service";
var OccReturnRequestNormalizer = /** @class */ (function () {
    function OccReturnRequestNormalizer(converter) {
        this.converter = converter;
    }
    /**
     * @param {?} source
     * @param {?=} target
     * @return {?}
     */
    OccReturnRequestNormalizer.prototype.convert = /**
     * @param {?} source
     * @param {?=} target
     * @return {?}
     */
    function (source, target) {
        var _this = this;
        if (target === undefined) {
            target = tslib_1.__assign({}, ((/** @type {?} */ (source))));
        }
        if (source.returnEntries) {
            target.returnEntries = source.returnEntries.map((/**
             * @param {?} entry
             * @return {?}
             */
            function (entry) { return (tslib_1.__assign({}, entry, { orderEntry: _this.convertOrderEntry(entry.orderEntry) })); }));
        }
        return target;
    };
    /**
     * @private
     * @param {?} source
     * @return {?}
     */
    OccReturnRequestNormalizer.prototype.convertOrderEntry = /**
     * @private
     * @param {?} source
     * @return {?}
     */
    function (source) {
        return tslib_1.__assign({}, source, { product: this.converter.convert(source.product, PRODUCT_NORMALIZER) });
    };
    OccReturnRequestNormalizer.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    OccReturnRequestNormalizer.ctorParameters = function () { return [
        { type: ConverterService }
    ]; };
    /** @nocollapse */ OccReturnRequestNormalizer.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function OccReturnRequestNormalizer_Factory() { return new OccReturnRequestNormalizer(i0.ɵɵinject(i1.ConverterService)); }, token: OccReturnRequestNormalizer, providedIn: "root" });
    return OccReturnRequestNormalizer;
}());
export { OccReturnRequestNormalizer };
if (false) {
    /**
     * @type {?}
     * @private
     */
    OccReturnRequestNormalizer.prototype.converter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXJldHVybi1yZXF1ZXN0LW5vcm1hbGl6ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvb2NjL2FkYXB0ZXJzL3VzZXIvY29udmVydGVycy9vY2MtcmV0dXJuLXJlcXVlc3Qtbm9ybWFsaXplci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUVMLGdCQUFnQixHQUNqQixNQUFNLG9DQUFvQyxDQUFDO0FBRTVDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1EQUFtRCxDQUFDOzs7QUFFdkY7SUFHRSxvQ0FBb0IsU0FBMkI7UUFBM0IsY0FBUyxHQUFULFNBQVMsQ0FBa0I7SUFBRyxDQUFDOzs7Ozs7SUFFbkQsNENBQU87Ozs7O0lBQVAsVUFBUSxNQUF5QixFQUFFLE1BQXNCO1FBQXpELGlCQWFDO1FBWkMsSUFBSSxNQUFNLEtBQUssU0FBUyxFQUFFO1lBQ3hCLE1BQU0sd0JBQVEsQ0FBQyxtQkFBQSxNQUFNLEVBQU8sQ0FBQyxDQUFFLENBQUM7U0FDakM7UUFFRCxJQUFJLE1BQU0sQ0FBQyxhQUFhLEVBQUU7WUFDeEIsTUFBTSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDLEdBQUc7Ozs7WUFBQyxVQUFBLEtBQUssSUFBSSxPQUFBLHNCQUNwRCxLQUFLLElBQ1IsVUFBVSxFQUFFLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLElBQ3BELEVBSHVELENBR3ZELEVBQUMsQ0FBQztTQUNMO1FBRUQsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7Ozs7O0lBRU8sc0RBQWlCOzs7OztJQUF6QixVQUEwQixNQUFzQjtRQUM5Qyw0QkFDSyxNQUFNLElBQ1QsT0FBTyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsa0JBQWtCLENBQUMsSUFDbkU7SUFDSixDQUFDOztnQkF6QkYsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7OztnQkFMaEMsZ0JBQWdCOzs7cUNBSmxCO0NBbUNDLEFBMUJELElBMEJDO1NBekJZLDBCQUEwQjs7Ozs7O0lBRXpCLCtDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9jYyB9IGZyb20gJy4uLy4uLy4uL29jYy1tb2RlbHMvb2NjLm1vZGVscyc7XG5pbXBvcnQge1xuICBDb252ZXJ0ZXIsXG4gIENvbnZlcnRlclNlcnZpY2UsXG59IGZyb20gJy4uLy4uLy4uLy4uL3V0aWwvY29udmVydGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgT3JkZXJFbnRyeSwgUmV0dXJuUmVxdWVzdCB9IGZyb20gJy4uLy4uLy4uLy4uL21vZGVsL29yZGVyLm1vZGVsJztcbmltcG9ydCB7IFBST0RVQ1RfTk9STUFMSVpFUiB9IGZyb20gJy4uLy4uLy4uLy4uL3Byb2R1Y3QvY29ubmVjdG9ycy9wcm9kdWN0L2NvbnZlcnRlcnMnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIE9jY1JldHVyblJlcXVlc3ROb3JtYWxpemVyXG4gIGltcGxlbWVudHMgQ29udmVydGVyPE9jYy5SZXR1cm5SZXF1ZXN0LCBSZXR1cm5SZXF1ZXN0PiB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29udmVydGVyOiBDb252ZXJ0ZXJTZXJ2aWNlKSB7fVxuXG4gIGNvbnZlcnQoc291cmNlOiBPY2MuUmV0dXJuUmVxdWVzdCwgdGFyZ2V0PzogUmV0dXJuUmVxdWVzdCk6IFJldHVyblJlcXVlc3Qge1xuICAgIGlmICh0YXJnZXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGFyZ2V0ID0geyAuLi4oc291cmNlIGFzIGFueSkgfTtcbiAgICB9XG5cbiAgICBpZiAoc291cmNlLnJldHVybkVudHJpZXMpIHtcbiAgICAgIHRhcmdldC5yZXR1cm5FbnRyaWVzID0gc291cmNlLnJldHVybkVudHJpZXMubWFwKGVudHJ5ID0+ICh7XG4gICAgICAgIC4uLmVudHJ5LFxuICAgICAgICBvcmRlckVudHJ5OiB0aGlzLmNvbnZlcnRPcmRlckVudHJ5KGVudHJ5Lm9yZGVyRW50cnkpLFxuICAgICAgfSkpO1xuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH1cblxuICBwcml2YXRlIGNvbnZlcnRPcmRlckVudHJ5KHNvdXJjZTogT2NjLk9yZGVyRW50cnkpOiBPcmRlckVudHJ5IHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uc291cmNlLFxuICAgICAgcHJvZHVjdDogdGhpcy5jb252ZXJ0ZXIuY29udmVydChzb3VyY2UucHJvZHVjdCwgUFJPRFVDVF9OT1JNQUxJWkVSKSxcbiAgICB9O1xuICB9XG59XG4iXX0=