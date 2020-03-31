import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';
import { ProductActions } from '../store/actions/index';
import { ProductSelectors } from '../store/selectors/index';
var ProductReferenceService = /** @class */ (function () {
    function ProductReferenceService(store) {
        this.store = store;
    }
    ProductReferenceService.prototype.get = function (productCode, referenceType, pageSize) {
        var _this = this;
        return this.store.pipe(select(ProductSelectors.getSelectedProductReferencesFactory(productCode, referenceType)), tap(function (references) {
            if (references === undefined && productCode !== undefined) {
                _this.store.dispatch(new ProductActions.LoadProductReferences({
                    productCode: productCode,
                    referenceType: referenceType,
                    pageSize: pageSize,
                }));
            }
        }));
    };
    ProductReferenceService.prototype.cleanReferences = function () {
        this.store.dispatch(new ProductActions.CleanProductReferences());
    };
    ProductReferenceService.ctorParameters = function () { return [
        { type: Store }
    ]; };
    ProductReferenceService = __decorate([
        Injectable()
    ], ProductReferenceService);
    return ProductReferenceService;
}());
export { ProductReferenceService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZWZlcmVuY2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9wcm9kdWN0L2ZhY2FkZS9wcm9kdWN0LXJlZmVyZW5jZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRTVDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFeEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFHNUQ7SUFDRSxpQ0FBc0IsS0FBOEI7UUFBOUIsVUFBSyxHQUFMLEtBQUssQ0FBeUI7SUFBRyxDQUFDO0lBRXhELHFDQUFHLEdBQUgsVUFDRSxXQUFtQixFQUNuQixhQUFzQixFQUN0QixRQUFpQjtRQUhuQixpQkF3QkM7UUFuQkMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUNKLGdCQUFnQixDQUFDLG1DQUFtQyxDQUNsRCxXQUFXLEVBQ1gsYUFBYSxDQUNkLENBQ0YsRUFDRCxHQUFHLENBQUMsVUFBQyxVQUFVO1lBQ2IsSUFBSSxVQUFVLEtBQUssU0FBUyxJQUFJLFdBQVcsS0FBSyxTQUFTLEVBQUU7Z0JBQ3pELEtBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUNqQixJQUFJLGNBQWMsQ0FBQyxxQkFBcUIsQ0FBQztvQkFDdkMsV0FBVyxhQUFBO29CQUNYLGFBQWEsZUFBQTtvQkFDYixRQUFRLFVBQUE7aUJBQ1QsQ0FBQyxDQUNILENBQUM7YUFDSDtRQUNILENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBRUQsaURBQWUsR0FBZjtRQUNFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksY0FBYyxDQUFDLHNCQUFzQixFQUFFLENBQUMsQ0FBQztJQUNuRSxDQUFDOztnQkE5QjRCLEtBQUs7O0lBRHZCLHVCQUF1QjtRQURuQyxVQUFVLEVBQUU7T0FDQSx1QkFBdUIsQ0FnQ25DO0lBQUQsOEJBQUM7Q0FBQSxBQWhDRCxJQWdDQztTQWhDWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUHJvZHVjdFJlZmVyZW5jZSB9IGZyb20gJy4uLy4uL21vZGVsL3Byb2R1Y3QubW9kZWwnO1xuaW1wb3J0IHsgUHJvZHVjdEFjdGlvbnMgfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IFN0YXRlV2l0aFByb2R1Y3QgfSBmcm9tICcuLi9zdG9yZS9wcm9kdWN0LXN0YXRlJztcbmltcG9ydCB7IFByb2R1Y3RTZWxlY3RvcnMgfSBmcm9tICcuLi9zdG9yZS9zZWxlY3RvcnMvaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUHJvZHVjdFJlZmVyZW5jZVNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgc3RvcmU6IFN0b3JlPFN0YXRlV2l0aFByb2R1Y3Q+KSB7fVxuXG4gIGdldChcbiAgICBwcm9kdWN0Q29kZTogc3RyaW5nLFxuICAgIHJlZmVyZW5jZVR5cGU/OiBzdHJpbmcsXG4gICAgcGFnZVNpemU/OiBudW1iZXJcbiAgKTogT2JzZXJ2YWJsZTxQcm9kdWN0UmVmZXJlbmNlW10+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KFxuICAgICAgICBQcm9kdWN0U2VsZWN0b3JzLmdldFNlbGVjdGVkUHJvZHVjdFJlZmVyZW5jZXNGYWN0b3J5KFxuICAgICAgICAgIHByb2R1Y3RDb2RlLFxuICAgICAgICAgIHJlZmVyZW5jZVR5cGVcbiAgICAgICAgKVxuICAgICAgKSxcbiAgICAgIHRhcCgocmVmZXJlbmNlcykgPT4ge1xuICAgICAgICBpZiAocmVmZXJlbmNlcyA9PT0gdW5kZWZpbmVkICYmIHByb2R1Y3RDb2RlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgICAgICAgbmV3IFByb2R1Y3RBY3Rpb25zLkxvYWRQcm9kdWN0UmVmZXJlbmNlcyh7XG4gICAgICAgICAgICAgIHByb2R1Y3RDb2RlLFxuICAgICAgICAgICAgICByZWZlcmVuY2VUeXBlLFxuICAgICAgICAgICAgICBwYWdlU2l6ZSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgY2xlYW5SZWZlcmVuY2VzKCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFByb2R1Y3RBY3Rpb25zLkNsZWFuUHJvZHVjdFJlZmVyZW5jZXMoKSk7XG4gIH1cbn1cbiJdfQ==