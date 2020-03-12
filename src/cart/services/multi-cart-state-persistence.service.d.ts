import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SiteContextParamsService } from '../../site-context/services/site-context-params.service';
import { StatePersistenceService } from '../../state/services/state-persistence.service';
import { StateWithMultiCart } from '../store/multi-cart-state';
import * as ɵngcc0 from '@angular/core';
export declare class MultiCartStatePersistenceService {
    protected statePersistenceService: StatePersistenceService;
    protected store: Store<StateWithMultiCart>;
    protected siteContextParamsService: SiteContextParamsService;
    constructor(statePersistenceService: StatePersistenceService, store: Store<StateWithMultiCart>, siteContextParamsService: SiteContextParamsService);
    sync(): void;
    protected getCartState(): Observable<{
        active: string;
    }>;
    protected onRead(state: {
        active: string;
    }): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MultiCartStatePersistenceService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktY2FydC1zdGF0ZS1wZXJzaXN0ZW5jZS5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbIm11bHRpLWNhcnQtc3RhdGUtcGVyc2lzdGVuY2Uuc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFLQTs7Ozs7Ozs7Ozs7OztBQVlBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dFBhcmFtc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zaXRlLWNvbnRleHQvc2VydmljZXMvc2l0ZS1jb250ZXh0LXBhcmFtcy5zZXJ2aWNlJztcbmltcG9ydCB7IFN0YXRlUGVyc2lzdGVuY2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc3RhdGUvc2VydmljZXMvc3RhdGUtcGVyc2lzdGVuY2Uuc2VydmljZSc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhNdWx0aUNhcnQgfSBmcm9tICcuLi9zdG9yZS9tdWx0aS1jYXJ0LXN0YXRlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE11bHRpQ2FydFN0YXRlUGVyc2lzdGVuY2VTZXJ2aWNlIHtcbiAgICBwcm90ZWN0ZWQgc3RhdGVQZXJzaXN0ZW5jZVNlcnZpY2U6IFN0YXRlUGVyc2lzdGVuY2VTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBzdG9yZTogU3RvcmU8U3RhdGVXaXRoTXVsdGlDYXJ0PjtcbiAgICBwcm90ZWN0ZWQgc2l0ZUNvbnRleHRQYXJhbXNTZXJ2aWNlOiBTaXRlQ29udGV4dFBhcmFtc1NlcnZpY2U7XG4gICAgY29uc3RydWN0b3Ioc3RhdGVQZXJzaXN0ZW5jZVNlcnZpY2U6IFN0YXRlUGVyc2lzdGVuY2VTZXJ2aWNlLCBzdG9yZTogU3RvcmU8U3RhdGVXaXRoTXVsdGlDYXJ0Piwgc2l0ZUNvbnRleHRQYXJhbXNTZXJ2aWNlOiBTaXRlQ29udGV4dFBhcmFtc1NlcnZpY2UpO1xuICAgIHN5bmMoKTogdm9pZDtcbiAgICBwcm90ZWN0ZWQgZ2V0Q2FydFN0YXRlKCk6IE9ic2VydmFibGU8e1xuICAgICAgICBhY3RpdmU6IHN0cmluZztcbiAgICB9PjtcbiAgICBwcm90ZWN0ZWQgb25SZWFkKHN0YXRlOiB7XG4gICAgICAgIGFjdGl2ZTogc3RyaW5nO1xuICAgIH0pOiB2b2lkO1xufVxuIl19