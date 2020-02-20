import { __assign, __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { PRODUCT_NORMALIZER } from '../../../../product/connectors/product/converters';
import { Converter, ConverterService, } from '../../../../util/converter.service';
import * as i0 from "@angular/core";
import * as i1 from "../../../../util/converter.service";
var OccCartNormalizer = /** @class */ (function () {
    function OccCartNormalizer(converter) {
        this.converter = converter;
    }
    OccCartNormalizer.prototype.convert = function (source, target) {
        var _this = this;
        if (target === undefined) {
            target = __assign({}, source);
        }
        if (source && source.entries) {
            target.entries = source.entries.map(function (entry) { return (__assign(__assign({}, entry), { product: _this.converter.convert(entry.product, PRODUCT_NORMALIZER) })); });
        }
        this.removeDuplicatePromotions(source, target);
        return target;
    };
    /**
     * Remove all duplicate promotions
     */
    OccCartNormalizer.prototype.removeDuplicatePromotions = function (source, target) {
        if (source && source.potentialOrderPromotions) {
            target.potentialOrderPromotions = this.removeDuplicateItems(source.potentialOrderPromotions);
        }
        if (source && source.potentialProductPromotions) {
            target.potentialProductPromotions = this.removeDuplicateItems(source.potentialProductPromotions);
        }
        if (source && source.appliedOrderPromotions) {
            target.appliedOrderPromotions = this.removeDuplicateItems(source.appliedOrderPromotions);
        }
        if (source && source.appliedProductPromotions) {
            target.appliedProductPromotions = this.removeDuplicateItems(source.appliedProductPromotions);
        }
    };
    OccCartNormalizer.prototype.removeDuplicateItems = function (itemList) {
        return itemList.filter(function (p, i, a) {
            var b = a.map(function (el) { return JSON.stringify(el); });
            return i === b.indexOf(JSON.stringify(p));
        });
    };
    OccCartNormalizer.ctorParameters = function () { return [
        { type: ConverterService }
    ]; };
    OccCartNormalizer.ɵprov = i0.ɵɵdefineInjectable({ factory: function OccCartNormalizer_Factory() { return new OccCartNormalizer(i0.ɵɵinject(i1.ConverterService)); }, token: OccCartNormalizer, providedIn: "root" });
    OccCartNormalizer = __decorate([
        Injectable({ providedIn: 'root' })
    ], OccCartNormalizer);
    return OccCartNormalizer;
}());
export { OccCartNormalizer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNhcnQtbm9ybWFsaXplci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9vY2MvYWRhcHRlcnMvY2FydC9jb252ZXJ0ZXJzL29jYy1jYXJ0LW5vcm1hbGl6ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDdkYsT0FBTyxFQUNMLFNBQVMsRUFDVCxnQkFBZ0IsR0FDakIsTUFBTSxvQ0FBb0MsQ0FBQzs7O0FBSTVDO0lBQ0UsMkJBQW9CLFNBQTJCO1FBQTNCLGNBQVMsR0FBVCxTQUFTLENBQWtCO0lBQUcsQ0FBQztJQUVuRCxtQ0FBTyxHQUFQLFVBQVEsTUFBZ0IsRUFBRSxNQUFhO1FBQXZDLGlCQWNDO1FBYkMsSUFBSSxNQUFNLEtBQUssU0FBUyxFQUFFO1lBQ3hCLE1BQU0sZ0JBQVMsTUFBYyxDQUFFLENBQUM7U0FDakM7UUFFRCxJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsT0FBTyxFQUFFO1lBQzVCLE1BQU0sQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSx1QkFDeEMsS0FBSyxLQUNSLE9BQU8sRUFBRSxLQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLGtCQUFrQixDQUFDLElBQ2xFLEVBSDJDLENBRzNDLENBQUMsQ0FBQztTQUNMO1FBRUQsSUFBSSxDQUFDLHlCQUF5QixDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUMvQyxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBRUQ7O09BRUc7SUFDSyxxREFBeUIsR0FBakMsVUFBa0MsTUFBVyxFQUFFLE1BQVk7UUFDekQsSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLHdCQUF3QixFQUFFO1lBQzdDLE1BQU0sQ0FBQyx3QkFBd0IsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQ3pELE1BQU0sQ0FBQyx3QkFBd0IsQ0FDaEMsQ0FBQztTQUNIO1FBRUQsSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLDBCQUEwQixFQUFFO1lBQy9DLE1BQU0sQ0FBQywwQkFBMEIsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQzNELE1BQU0sQ0FBQywwQkFBMEIsQ0FDbEMsQ0FBQztTQUNIO1FBRUQsSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLHNCQUFzQixFQUFFO1lBQzNDLE1BQU0sQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQ3ZELE1BQU0sQ0FBQyxzQkFBc0IsQ0FDOUIsQ0FBQztTQUNIO1FBRUQsSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLHdCQUF3QixFQUFFO1lBQzdDLE1BQU0sQ0FBQyx3QkFBd0IsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQ3pELE1BQU0sQ0FBQyx3QkFBd0IsQ0FDaEMsQ0FBQztTQUNIO0lBQ0gsQ0FBQztJQUVPLGdEQUFvQixHQUE1QixVQUE2QixRQUFlO1FBQzFDLE9BQU8sUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUM3QixJQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUEsRUFBRSxJQUFJLE9BQUEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFBbEIsQ0FBa0IsQ0FBQyxDQUFDO1lBQzFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBcEQ4QixnQkFBZ0I7OztJQURwQyxpQkFBaUI7UUFEN0IsVUFBVSxDQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxDQUFDO09BQ3RCLGlCQUFpQixDQXNEN0I7NEJBaEVEO0NBZ0VDLEFBdERELElBc0RDO1NBdERZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhcnQgfSBmcm9tICcuLi8uLi8uLi8uLi9tb2RlbC9jYXJ0Lm1vZGVsJztcbmltcG9ydCB7IFBST0RVQ1RfTk9STUFMSVpFUiB9IGZyb20gJy4uLy4uLy4uLy4uL3Byb2R1Y3QvY29ubmVjdG9ycy9wcm9kdWN0L2NvbnZlcnRlcnMnO1xuaW1wb3J0IHtcbiAgQ29udmVydGVyLFxuICBDb252ZXJ0ZXJTZXJ2aWNlLFxufSBmcm9tICcuLi8uLi8uLi8uLi91dGlsL2NvbnZlcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7IE9jYyB9IGZyb20gJy4uLy4uLy4uL29jYy1tb2RlbHMvb2NjLm1vZGVscyc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgT2NjQ2FydE5vcm1hbGl6ZXIgaW1wbGVtZW50cyBDb252ZXJ0ZXI8T2NjLkNhcnQsIENhcnQ+IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb252ZXJ0ZXI6IENvbnZlcnRlclNlcnZpY2UpIHt9XG5cbiAgY29udmVydChzb3VyY2U6IE9jYy5DYXJ0LCB0YXJnZXQ/OiBDYXJ0KTogQ2FydCB7XG4gICAgaWYgKHRhcmdldCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0YXJnZXQgPSB7IC4uLihzb3VyY2UgYXMgYW55KSB9O1xuICAgIH1cblxuICAgIGlmIChzb3VyY2UgJiYgc291cmNlLmVudHJpZXMpIHtcbiAgICAgIHRhcmdldC5lbnRyaWVzID0gc291cmNlLmVudHJpZXMubWFwKGVudHJ5ID0+ICh7XG4gICAgICAgIC4uLmVudHJ5LFxuICAgICAgICBwcm9kdWN0OiB0aGlzLmNvbnZlcnRlci5jb252ZXJ0KGVudHJ5LnByb2R1Y3QsIFBST0RVQ1RfTk9STUFMSVpFUiksXG4gICAgICB9KSk7XG4gICAgfVxuXG4gICAgdGhpcy5yZW1vdmVEdXBsaWNhdGVQcm9tb3Rpb25zKHNvdXJjZSwgdGFyZ2V0KTtcbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhbGwgZHVwbGljYXRlIHByb21vdGlvbnNcbiAgICovXG4gIHByaXZhdGUgcmVtb3ZlRHVwbGljYXRlUHJvbW90aW9ucyhzb3VyY2U6IGFueSwgdGFyZ2V0OiBDYXJ0KTogdm9pZCB7XG4gICAgaWYgKHNvdXJjZSAmJiBzb3VyY2UucG90ZW50aWFsT3JkZXJQcm9tb3Rpb25zKSB7XG4gICAgICB0YXJnZXQucG90ZW50aWFsT3JkZXJQcm9tb3Rpb25zID0gdGhpcy5yZW1vdmVEdXBsaWNhdGVJdGVtcyhcbiAgICAgICAgc291cmNlLnBvdGVudGlhbE9yZGVyUHJvbW90aW9uc1xuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoc291cmNlICYmIHNvdXJjZS5wb3RlbnRpYWxQcm9kdWN0UHJvbW90aW9ucykge1xuICAgICAgdGFyZ2V0LnBvdGVudGlhbFByb2R1Y3RQcm9tb3Rpb25zID0gdGhpcy5yZW1vdmVEdXBsaWNhdGVJdGVtcyhcbiAgICAgICAgc291cmNlLnBvdGVudGlhbFByb2R1Y3RQcm9tb3Rpb25zXG4gICAgICApO1xuICAgIH1cblxuICAgIGlmIChzb3VyY2UgJiYgc291cmNlLmFwcGxpZWRPcmRlclByb21vdGlvbnMpIHtcbiAgICAgIHRhcmdldC5hcHBsaWVkT3JkZXJQcm9tb3Rpb25zID0gdGhpcy5yZW1vdmVEdXBsaWNhdGVJdGVtcyhcbiAgICAgICAgc291cmNlLmFwcGxpZWRPcmRlclByb21vdGlvbnNcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKHNvdXJjZSAmJiBzb3VyY2UuYXBwbGllZFByb2R1Y3RQcm9tb3Rpb25zKSB7XG4gICAgICB0YXJnZXQuYXBwbGllZFByb2R1Y3RQcm9tb3Rpb25zID0gdGhpcy5yZW1vdmVEdXBsaWNhdGVJdGVtcyhcbiAgICAgICAgc291cmNlLmFwcGxpZWRQcm9kdWN0UHJvbW90aW9uc1xuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJlbW92ZUR1cGxpY2F0ZUl0ZW1zKGl0ZW1MaXN0OiBhbnlbXSk6IGFueVtdIHtcbiAgICByZXR1cm4gaXRlbUxpc3QuZmlsdGVyKChwLCBpLCBhKSA9PiB7XG4gICAgICBjb25zdCBiID0gYS5tYXAoZWwgPT4gSlNPTi5zdHJpbmdpZnkoZWwpKTtcbiAgICAgIHJldHVybiBpID09PSBiLmluZGV4T2YoSlNPTi5zdHJpbmdpZnkocCkpO1xuICAgIH0pO1xuICB9XG59XG4iXX0=