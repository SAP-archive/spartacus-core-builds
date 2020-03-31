import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { distinctUntilKeyChanged, filter, map } from 'rxjs/operators';
import { BASE_SITE_CONTEXT_ID } from '../../site-context';
import { SiteContextParamsService } from '../../site-context/services/site-context-params.service';
import { StatePersistenceService } from '../../state/services/state-persistence.service';
import { CartActions, MultiCartSelectors } from '../store';
import * as i0 from "@angular/core";
import * as i1 from "../../state/services/state-persistence.service";
import * as i2 from "@ngrx/store";
import * as i3 from "../../site-context/services/site-context-params.service";
let MultiCartStatePersistenceService = class MultiCartStatePersistenceService {
    constructor(statePersistenceService, store, siteContextParamsService) {
        this.statePersistenceService = statePersistenceService;
        this.store = store;
        this.siteContextParamsService = siteContextParamsService;
    }
    sync() {
        this.statePersistenceService.syncWithStorage({
            key: 'cart',
            state$: this.getCartState(),
            context$: this.siteContextParamsService.getValues([BASE_SITE_CONTEXT_ID]),
            onRead: (state) => this.onRead(state),
        });
    }
    getCartState() {
        return this.store.pipe(select(MultiCartSelectors.getMultiCartState), filter((state) => !!state), distinctUntilKeyChanged('active'), map((state) => {
            return {
                active: state.active,
            };
        }));
    }
    onRead(state) {
        this.store.dispatch(new CartActions.ClearCart());
        this.store.dispatch(new CartActions.ClearMultiCartState());
        if (state) {
            this.store.dispatch(new CartActions.SetActiveCartId(state.active));
        }
    }
};
MultiCartStatePersistenceService.ctorParameters = () => [
    { type: StatePersistenceService },
    { type: Store },
    { type: SiteContextParamsService }
];
MultiCartStatePersistenceService.ɵprov = i0.ɵɵdefineInjectable({ factory: function MultiCartStatePersistenceService_Factory() { return new MultiCartStatePersistenceService(i0.ɵɵinject(i1.StatePersistenceService), i0.ɵɵinject(i2.Store), i0.ɵɵinject(i3.SiteContextParamsService)); }, token: MultiCartStatePersistenceService, providedIn: "root" });
MultiCartStatePersistenceService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], MultiCartStatePersistenceService);
export { MultiCartStatePersistenceService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktY2FydC1zdGF0ZS1wZXJzaXN0ZW5jZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NhcnQvc2VydmljZXMvbXVsdGktY2FydC1zdGF0ZS1wZXJzaXN0ZW5jZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRTVDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDMUQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0seURBQXlELENBQUM7QUFDbkcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDekYsT0FBTyxFQUFFLFdBQVcsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLFVBQVUsQ0FBQzs7Ozs7QUFNM0QsSUFBYSxnQ0FBZ0MsR0FBN0MsTUFBYSxnQ0FBZ0M7SUFDM0MsWUFDWSx1QkFBZ0QsRUFDaEQsS0FBZ0MsRUFDaEMsd0JBQWtEO1FBRmxELDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7UUFDaEQsVUFBSyxHQUFMLEtBQUssQ0FBMkI7UUFDaEMsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtJQUMzRCxDQUFDO0lBRUcsSUFBSTtRQUNULElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxlQUFlLENBQUM7WUFDM0MsR0FBRyxFQUFFLE1BQU07WUFDWCxNQUFNLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUMzQixRQUFRLEVBQUUsSUFBSSxDQUFDLHdCQUF3QixDQUFDLFNBQVMsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUM7WUFDekUsTUFBTSxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztTQUN0QyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRVMsWUFBWTtRQUNwQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsa0JBQWtCLENBQUMsaUJBQWlCLENBQUMsRUFDNUMsTUFBTSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQzFCLHVCQUF1QixDQUFDLFFBQVEsQ0FBQyxFQUNqQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUNaLE9BQU87Z0JBQ0wsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNO2FBQ3JCLENBQUM7UUFDSixDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQUVTLE1BQU0sQ0FBQyxLQUF5QjtRQUN4QyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksV0FBVyxDQUFDLG1CQUFtQixFQUFFLENBQUMsQ0FBQztRQUMzRCxJQUFJLEtBQUssRUFBRTtZQUNULElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksV0FBVyxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUNwRTtJQUNILENBQUM7Q0FDRixDQUFBOztZQWxDc0MsdUJBQXVCO1lBQ3pDLEtBQUs7WUFDYyx3QkFBd0I7OztBQUpuRCxnQ0FBZ0M7SUFINUMsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztHQUNXLGdDQUFnQyxDQW9DNUM7U0FwQ1ksZ0NBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgc2VsZWN0LCBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxLZXlDaGFuZ2VkLCBmaWx0ZXIsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEJBU0VfU0lURV9DT05URVhUX0lEIH0gZnJvbSAnLi4vLi4vc2l0ZS1jb250ZXh0JztcbmltcG9ydCB7IFNpdGVDb250ZXh0UGFyYW1zU2VydmljZSB9IGZyb20gJy4uLy4uL3NpdGUtY29udGV4dC9zZXJ2aWNlcy9zaXRlLWNvbnRleHQtcGFyYW1zLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RhdGVQZXJzaXN0ZW5jZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zdGF0ZS9zZXJ2aWNlcy9zdGF0ZS1wZXJzaXN0ZW5jZS5zZXJ2aWNlJztcbmltcG9ydCB7IENhcnRBY3Rpb25zLCBNdWx0aUNhcnRTZWxlY3RvcnMgfSBmcm9tICcuLi9zdG9yZSc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhNdWx0aUNhcnQgfSBmcm9tICcuLi9zdG9yZS9tdWx0aS1jYXJ0LXN0YXRlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIE11bHRpQ2FydFN0YXRlUGVyc2lzdGVuY2VTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHN0YXRlUGVyc2lzdGVuY2VTZXJ2aWNlOiBTdGF0ZVBlcnNpc3RlbmNlU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgc3RvcmU6IFN0b3JlPFN0YXRlV2l0aE11bHRpQ2FydD4sXG4gICAgcHJvdGVjdGVkIHNpdGVDb250ZXh0UGFyYW1zU2VydmljZTogU2l0ZUNvbnRleHRQYXJhbXNTZXJ2aWNlXG4gICkge31cblxuICBwdWJsaWMgc3luYygpIHtcbiAgICB0aGlzLnN0YXRlUGVyc2lzdGVuY2VTZXJ2aWNlLnN5bmNXaXRoU3RvcmFnZSh7XG4gICAgICBrZXk6ICdjYXJ0JyxcbiAgICAgIHN0YXRlJDogdGhpcy5nZXRDYXJ0U3RhdGUoKSxcbiAgICAgIGNvbnRleHQkOiB0aGlzLnNpdGVDb250ZXh0UGFyYW1zU2VydmljZS5nZXRWYWx1ZXMoW0JBU0VfU0lURV9DT05URVhUX0lEXSksXG4gICAgICBvblJlYWQ6IChzdGF0ZSkgPT4gdGhpcy5vblJlYWQoc3RhdGUpLFxuICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldENhcnRTdGF0ZSgpOiBPYnNlcnZhYmxlPHsgYWN0aXZlOiBzdHJpbmcgfT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoTXVsdGlDYXJ0U2VsZWN0b3JzLmdldE11bHRpQ2FydFN0YXRlKSxcbiAgICAgIGZpbHRlcigoc3RhdGUpID0+ICEhc3RhdGUpLFxuICAgICAgZGlzdGluY3RVbnRpbEtleUNoYW5nZWQoJ2FjdGl2ZScpLFxuICAgICAgbWFwKChzdGF0ZSkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGFjdGl2ZTogc3RhdGUuYWN0aXZlLFxuICAgICAgICB9O1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIG9uUmVhZChzdGF0ZTogeyBhY3RpdmU6IHN0cmluZyB9KSB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQ2FydEFjdGlvbnMuQ2xlYXJDYXJ0KCkpO1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IENhcnRBY3Rpb25zLkNsZWFyTXVsdGlDYXJ0U3RhdGUoKSk7XG4gICAgaWYgKHN0YXRlKSB7XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBDYXJ0QWN0aW9ucy5TZXRBY3RpdmVDYXJ0SWQoc3RhdGUuYWN0aXZlKSk7XG4gICAgfVxuICB9XG59XG4iXX0=