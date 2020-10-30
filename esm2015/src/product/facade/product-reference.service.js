import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ProductSelectors } from '../store';
import { ProductActions } from '../store/actions/index';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
export class ProductReferenceService {
    constructor(store) {
        this.store = store;
    }
    loadProductReferences(productCode, referenceType, pageSize) {
        this.store.dispatch(new ProductActions.LoadProductReferences({
            productCode,
            referenceType,
            pageSize,
        }));
    }
    getProductReferences(productCode, referenceType) {
        return this.store.pipe(select(ProductSelectors.getSelectedProductReferencesFactory(productCode, referenceType)));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZWZlcmVuY2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL3Byb2R1Y3QvZmFjYWRlL3Byb2R1Y3QtcmVmZXJlbmNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUc1QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDNUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7QUFNeEQsTUFBTSxPQUFPLHVCQUF1QjtJQUNsQyxZQUFzQixLQUE4QjtRQUE5QixVQUFLLEdBQUwsS0FBSyxDQUF5QjtJQUFHLENBQUM7SUFFeEQscUJBQXFCLENBQ25CLFdBQW1CLEVBQ25CLGFBQXNCLEVBQ3RCLFFBQWlCO1FBRWpCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUNqQixJQUFJLGNBQWMsQ0FBQyxxQkFBcUIsQ0FBQztZQUN2QyxXQUFXO1lBQ1gsYUFBYTtZQUNiLFFBQVE7U0FDVCxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFFRCxvQkFBb0IsQ0FDbEIsV0FBbUIsRUFDbkIsYUFBcUI7UUFFckIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUNKLGdCQUFnQixDQUFDLG1DQUFtQyxDQUNsRCxXQUFXLEVBQ1gsYUFBYSxDQUNkLENBQ0YsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLGNBQWMsQ0FBQyxzQkFBc0IsRUFBRSxDQUFDLENBQUM7SUFDbkUsQ0FBQzs7OztZQXBDRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7OztZQVRnQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgc2VsZWN0LCBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFByb2R1Y3RSZWZlcmVuY2UgfSBmcm9tICcuLi8uLi9tb2RlbC9wcm9kdWN0Lm1vZGVsJztcbmltcG9ydCB7IFByb2R1Y3RTZWxlY3RvcnMgfSBmcm9tICcuLi9zdG9yZSc7XG5pbXBvcnQgeyBQcm9kdWN0QWN0aW9ucyB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgU3RhdGVXaXRoUHJvZHVjdCB9IGZyb20gJy4uL3N0b3JlL3Byb2R1Y3Qtc3RhdGUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdFJlZmVyZW5jZVNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgc3RvcmU6IFN0b3JlPFN0YXRlV2l0aFByb2R1Y3Q+KSB7fVxuXG4gIGxvYWRQcm9kdWN0UmVmZXJlbmNlcyhcbiAgICBwcm9kdWN0Q29kZTogc3RyaW5nLFxuICAgIHJlZmVyZW5jZVR5cGU/OiBzdHJpbmcsXG4gICAgcGFnZVNpemU/OiBudW1iZXJcbiAgKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBQcm9kdWN0QWN0aW9ucy5Mb2FkUHJvZHVjdFJlZmVyZW5jZXMoe1xuICAgICAgICBwcm9kdWN0Q29kZSxcbiAgICAgICAgcmVmZXJlbmNlVHlwZSxcbiAgICAgICAgcGFnZVNpemUsXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBnZXRQcm9kdWN0UmVmZXJlbmNlcyhcbiAgICBwcm9kdWN0Q29kZTogc3RyaW5nLFxuICAgIHJlZmVyZW5jZVR5cGU6IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPFByb2R1Y3RSZWZlcmVuY2VbXT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoXG4gICAgICAgIFByb2R1Y3RTZWxlY3RvcnMuZ2V0U2VsZWN0ZWRQcm9kdWN0UmVmZXJlbmNlc0ZhY3RvcnkoXG4gICAgICAgICAgcHJvZHVjdENvZGUsXG4gICAgICAgICAgcmVmZXJlbmNlVHlwZVxuICAgICAgICApXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIGNsZWFuUmVmZXJlbmNlcygpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBQcm9kdWN0QWN0aW9ucy5DbGVhblByb2R1Y3RSZWZlcmVuY2VzKCkpO1xuICB9XG59XG4iXX0=