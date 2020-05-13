import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';
import { ProductActions } from '../store/actions/index';
import { ProductSelectors } from '../store/selectors/index';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
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
    ProductReferenceService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ProductReferenceService_Factory() { return new ProductReferenceService(i0.ɵɵinject(i1.Store)); }, token: ProductReferenceService, providedIn: "root" });
    ProductReferenceService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], ProductReferenceService);
    return ProductReferenceService;
}());
export { ProductReferenceService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZWZlcmVuY2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9wcm9kdWN0L2ZhY2FkZS9wcm9kdWN0LXJlZmVyZW5jZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRTVDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFeEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7OztBQUs1RDtJQUNFLGlDQUFzQixLQUE4QjtRQUE5QixVQUFLLEdBQUwsS0FBSyxDQUF5QjtJQUFHLENBQUM7SUFFeEQscUNBQUcsR0FBSCxVQUNFLFdBQW1CLEVBQ25CLGFBQXNCLEVBQ3RCLFFBQWlCO1FBSG5CLGlCQXdCQztRQW5CQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQ0osZ0JBQWdCLENBQUMsbUNBQW1DLENBQ2xELFdBQVcsRUFDWCxhQUFhLENBQ2QsQ0FDRixFQUNELEdBQUcsQ0FBQyxVQUFDLFVBQVU7WUFDYixJQUFJLFVBQVUsS0FBSyxTQUFTLElBQUksV0FBVyxLQUFLLFNBQVMsRUFBRTtnQkFDekQsS0FBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ2pCLElBQUksY0FBYyxDQUFDLHFCQUFxQixDQUFDO29CQUN2QyxXQUFXLGFBQUE7b0JBQ1gsYUFBYSxlQUFBO29CQUNiLFFBQVEsVUFBQTtpQkFDVCxDQUFDLENBQ0gsQ0FBQzthQUNIO1FBQ0gsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFFRCxpREFBZSxHQUFmO1FBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxjQUFjLENBQUMsc0JBQXNCLEVBQUUsQ0FBQyxDQUFDO0lBQ25FLENBQUM7O2dCQTlCNEIsS0FBSzs7O0lBRHZCLHVCQUF1QjtRQUhuQyxVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO09BQ1csdUJBQXVCLENBZ0NuQztrQ0E1Q0Q7Q0E0Q0MsQUFoQ0QsSUFnQ0M7U0FoQ1ksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgc2VsZWN0LCBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFByb2R1Y3RSZWZlcmVuY2UgfSBmcm9tICcuLi8uLi9tb2RlbC9wcm9kdWN0Lm1vZGVsJztcbmltcG9ydCB7IFByb2R1Y3RBY3Rpb25zIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhQcm9kdWN0IH0gZnJvbSAnLi4vc3RvcmUvcHJvZHVjdC1zdGF0ZSc7XG5pbXBvcnQgeyBQcm9kdWN0U2VsZWN0b3JzIH0gZnJvbSAnLi4vc3RvcmUvc2VsZWN0b3JzL2luZGV4JztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RSZWZlcmVuY2VTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhQcm9kdWN0Pikge31cblxuICBnZXQoXG4gICAgcHJvZHVjdENvZGU6IHN0cmluZyxcbiAgICByZWZlcmVuY2VUeXBlPzogc3RyaW5nLFxuICAgIHBhZ2VTaXplPzogbnVtYmVyXG4gICk6IE9ic2VydmFibGU8UHJvZHVjdFJlZmVyZW5jZVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChcbiAgICAgICAgUHJvZHVjdFNlbGVjdG9ycy5nZXRTZWxlY3RlZFByb2R1Y3RSZWZlcmVuY2VzRmFjdG9yeShcbiAgICAgICAgICBwcm9kdWN0Q29kZSxcbiAgICAgICAgICByZWZlcmVuY2VUeXBlXG4gICAgICAgIClcbiAgICAgICksXG4gICAgICB0YXAoKHJlZmVyZW5jZXMpID0+IHtcbiAgICAgICAgaWYgKHJlZmVyZW5jZXMgPT09IHVuZGVmaW5lZCAmJiBwcm9kdWN0Q29kZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgICAgICAgIG5ldyBQcm9kdWN0QWN0aW9ucy5Mb2FkUHJvZHVjdFJlZmVyZW5jZXMoe1xuICAgICAgICAgICAgICBwcm9kdWN0Q29kZSxcbiAgICAgICAgICAgICAgcmVmZXJlbmNlVHlwZSxcbiAgICAgICAgICAgICAgcGFnZVNpemUsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIGNsZWFuUmVmZXJlbmNlcygpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBQcm9kdWN0QWN0aW9ucy5DbGVhblByb2R1Y3RSZWZlcmVuY2VzKCkpO1xuICB9XG59XG4iXX0=