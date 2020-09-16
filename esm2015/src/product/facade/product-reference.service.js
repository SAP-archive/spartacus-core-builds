import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';
import { ProductActions } from '../store/actions/index';
import { ProductSelectors } from '../store/selectors/index';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
export class ProductReferenceService {
    constructor(store) {
        this.store = store;
    }
    get(productCode, referenceType, pageSize) {
        return this.store.pipe(select(ProductSelectors.getSelectedProductReferencesFactory(productCode, referenceType)), tap((references) => {
            if (references === undefined && productCode !== undefined) {
                this.store.dispatch(new ProductActions.LoadProductReferences({
                    productCode,
                    referenceType,
                    pageSize,
                }));
            }
        }));
    }
    cleanReferences() {
        this.store.dispatch(new ProductActions.CleanProductReferences());
    }
}
ProductReferenceService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ProductReferenceService_Factory() { return new ProductReferenceService(i0.ɵɵinject(i1.Store)); }, token: ProductReferenceService, providedIn: "root" });
ProductReferenceService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
ProductReferenceService.ctorParameters = () => [
    { type: Store }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZWZlcmVuY2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL3Byb2R1Y3QvZmFjYWRlL3Byb2R1Y3QtcmVmZXJlbmNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUU1QyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXhELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7QUFLNUQsTUFBTSxPQUFPLHVCQUF1QjtJQUNsQyxZQUFzQixLQUE4QjtRQUE5QixVQUFLLEdBQUwsS0FBSyxDQUF5QjtJQUFHLENBQUM7SUFFeEQsR0FBRyxDQUNELFdBQW1CLEVBQ25CLGFBQXNCLEVBQ3RCLFFBQWlCO1FBRWpCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FDSixnQkFBZ0IsQ0FBQyxtQ0FBbUMsQ0FDbEQsV0FBVyxFQUNYLGFBQWEsQ0FDZCxDQUNGLEVBQ0QsR0FBRyxDQUFDLENBQUMsVUFBVSxFQUFFLEVBQUU7WUFDakIsSUFBSSxVQUFVLEtBQUssU0FBUyxJQUFJLFdBQVcsS0FBSyxTQUFTLEVBQUU7Z0JBQ3pELElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUNqQixJQUFJLGNBQWMsQ0FBQyxxQkFBcUIsQ0FBQztvQkFDdkMsV0FBVztvQkFDWCxhQUFhO29CQUNiLFFBQVE7aUJBQ1QsQ0FBQyxDQUNILENBQUM7YUFDSDtRQUNILENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksY0FBYyxDQUFDLHNCQUFzQixFQUFFLENBQUMsQ0FBQztJQUNuRSxDQUFDOzs7O1lBbENGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7O1lBVmdCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUHJvZHVjdFJlZmVyZW5jZSB9IGZyb20gJy4uLy4uL21vZGVsL3Byb2R1Y3QubW9kZWwnO1xuaW1wb3J0IHsgUHJvZHVjdEFjdGlvbnMgfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IFN0YXRlV2l0aFByb2R1Y3QgfSBmcm9tICcuLi9zdG9yZS9wcm9kdWN0LXN0YXRlJztcbmltcG9ydCB7IFByb2R1Y3RTZWxlY3RvcnMgfSBmcm9tICcuLi9zdG9yZS9zZWxlY3RvcnMvaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdFJlZmVyZW5jZVNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgc3RvcmU6IFN0b3JlPFN0YXRlV2l0aFByb2R1Y3Q+KSB7fVxuXG4gIGdldChcbiAgICBwcm9kdWN0Q29kZTogc3RyaW5nLFxuICAgIHJlZmVyZW5jZVR5cGU/OiBzdHJpbmcsXG4gICAgcGFnZVNpemU/OiBudW1iZXJcbiAgKTogT2JzZXJ2YWJsZTxQcm9kdWN0UmVmZXJlbmNlW10+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KFxuICAgICAgICBQcm9kdWN0U2VsZWN0b3JzLmdldFNlbGVjdGVkUHJvZHVjdFJlZmVyZW5jZXNGYWN0b3J5KFxuICAgICAgICAgIHByb2R1Y3RDb2RlLFxuICAgICAgICAgIHJlZmVyZW5jZVR5cGVcbiAgICAgICAgKVxuICAgICAgKSxcbiAgICAgIHRhcCgocmVmZXJlbmNlcykgPT4ge1xuICAgICAgICBpZiAocmVmZXJlbmNlcyA9PT0gdW5kZWZpbmVkICYmIHByb2R1Y3RDb2RlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgICAgICAgbmV3IFByb2R1Y3RBY3Rpb25zLkxvYWRQcm9kdWN0UmVmZXJlbmNlcyh7XG4gICAgICAgICAgICAgIHByb2R1Y3RDb2RlLFxuICAgICAgICAgICAgICByZWZlcmVuY2VUeXBlLFxuICAgICAgICAgICAgICBwYWdlU2l6ZSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgY2xlYW5SZWZlcmVuY2VzKCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFByb2R1Y3RBY3Rpb25zLkNsZWFuUHJvZHVjdFJlZmVyZW5jZXMoKSk7XG4gIH1cbn1cbiJdfQ==