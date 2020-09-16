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
export class MultiCartStatePersistenceService {
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
        this.store.dispatch(new CartActions.ClearCartState());
        if (state) {
            this.store.dispatch(new CartActions.SetActiveCartId(state.active));
        }
    }
}
MultiCartStatePersistenceService.ɵprov = i0.ɵɵdefineInjectable({ factory: function MultiCartStatePersistenceService_Factory() { return new MultiCartStatePersistenceService(i0.ɵɵinject(i1.StatePersistenceService), i0.ɵɵinject(i2.Store), i0.ɵɵinject(i3.SiteContextParamsService)); }, token: MultiCartStatePersistenceService, providedIn: "root" });
MultiCartStatePersistenceService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
MultiCartStatePersistenceService.ctorParameters = () => [
    { type: StatePersistenceService },
    { type: Store },
    { type: SiteContextParamsService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktY2FydC1zdGF0ZS1wZXJzaXN0ZW5jZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS9zcmMvY2FydC9zZXJ2aWNlcy9tdWx0aS1jYXJ0LXN0YXRlLXBlcnNpc3RlbmNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUU1QyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzFELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQ25HLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxXQUFXLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxVQUFVLENBQUM7Ozs7O0FBTTNELE1BQU0sT0FBTyxnQ0FBZ0M7SUFDM0MsWUFDWSx1QkFBZ0QsRUFDaEQsS0FBZ0MsRUFDaEMsd0JBQWtEO1FBRmxELDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7UUFDaEQsVUFBSyxHQUFMLEtBQUssQ0FBMkI7UUFDaEMsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtJQUMzRCxDQUFDO0lBRUcsSUFBSTtRQUNULElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxlQUFlLENBQUM7WUFDM0MsR0FBRyxFQUFFLE1BQU07WUFDWCxNQUFNLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUMzQixRQUFRLEVBQUUsSUFBSSxDQUFDLHdCQUF3QixDQUFDLFNBQVMsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUM7WUFDekUsTUFBTSxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztTQUN0QyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRVMsWUFBWTtRQUNwQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsa0JBQWtCLENBQUMsaUJBQWlCLENBQUMsRUFDNUMsTUFBTSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQzFCLHVCQUF1QixDQUFDLFFBQVEsQ0FBQyxFQUNqQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUNaLE9BQU87Z0JBQ0wsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNO2FBQ3JCLENBQUM7UUFDSixDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQUVTLE1BQU0sQ0FBQyxLQUF5QjtRQUN4QyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO1FBQ3RELElBQUksS0FBSyxFQUFFO1lBQ1QsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxXQUFXLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQ3BFO0lBQ0gsQ0FBQzs7OztZQXJDRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7OztZQU5RLHVCQUF1QjtZQUxmLEtBQUs7WUFJYix3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGlzdGluY3RVbnRpbEtleUNoYW5nZWQsIGZpbHRlciwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQkFTRV9TSVRFX0NPTlRFWFRfSUQgfSBmcm9tICcuLi8uLi9zaXRlLWNvbnRleHQnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHRQYXJhbXNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2l0ZS1jb250ZXh0L3NlcnZpY2VzL3NpdGUtY29udGV4dC1wYXJhbXMuc2VydmljZSc7XG5pbXBvcnQgeyBTdGF0ZVBlcnNpc3RlbmNlU2VydmljZSB9IGZyb20gJy4uLy4uL3N0YXRlL3NlcnZpY2VzL3N0YXRlLXBlcnNpc3RlbmNlLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2FydEFjdGlvbnMsIE11bHRpQ2FydFNlbGVjdG9ycyB9IGZyb20gJy4uL3N0b3JlJztcbmltcG9ydCB7IFN0YXRlV2l0aE11bHRpQ2FydCB9IGZyb20gJy4uL3N0b3JlL211bHRpLWNhcnQtc3RhdGUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgTXVsdGlDYXJ0U3RhdGVQZXJzaXN0ZW5jZVNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgc3RhdGVQZXJzaXN0ZW5jZVNlcnZpY2U6IFN0YXRlUGVyc2lzdGVuY2VTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBzdG9yZTogU3RvcmU8U3RhdGVXaXRoTXVsdGlDYXJ0PixcbiAgICBwcm90ZWN0ZWQgc2l0ZUNvbnRleHRQYXJhbXNTZXJ2aWNlOiBTaXRlQ29udGV4dFBhcmFtc1NlcnZpY2VcbiAgKSB7fVxuXG4gIHB1YmxpYyBzeW5jKCkge1xuICAgIHRoaXMuc3RhdGVQZXJzaXN0ZW5jZVNlcnZpY2Uuc3luY1dpdGhTdG9yYWdlKHtcbiAgICAgIGtleTogJ2NhcnQnLFxuICAgICAgc3RhdGUkOiB0aGlzLmdldENhcnRTdGF0ZSgpLFxuICAgICAgY29udGV4dCQ6IHRoaXMuc2l0ZUNvbnRleHRQYXJhbXNTZXJ2aWNlLmdldFZhbHVlcyhbQkFTRV9TSVRFX0NPTlRFWFRfSURdKSxcbiAgICAgIG9uUmVhZDogKHN0YXRlKSA9PiB0aGlzLm9uUmVhZChzdGF0ZSksXG4gICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0Q2FydFN0YXRlKCk6IE9ic2VydmFibGU8eyBhY3RpdmU6IHN0cmluZyB9PiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChNdWx0aUNhcnRTZWxlY3RvcnMuZ2V0TXVsdGlDYXJ0U3RhdGUpLFxuICAgICAgZmlsdGVyKChzdGF0ZSkgPT4gISFzdGF0ZSksXG4gICAgICBkaXN0aW5jdFVudGlsS2V5Q2hhbmdlZCgnYWN0aXZlJyksXG4gICAgICBtYXAoKHN0YXRlKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgYWN0aXZlOiBzdGF0ZS5hY3RpdmUsXG4gICAgICAgIH07XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgb25SZWFkKHN0YXRlOiB7IGFjdGl2ZTogc3RyaW5nIH0pIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBDYXJ0QWN0aW9ucy5DbGVhckNhcnRTdGF0ZSgpKTtcbiAgICBpZiAoc3RhdGUpIHtcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IENhcnRBY3Rpb25zLlNldEFjdGl2ZUNhcnRJZChzdGF0ZS5hY3RpdmUpKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==