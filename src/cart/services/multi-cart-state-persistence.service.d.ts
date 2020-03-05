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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktY2FydC1zdGF0ZS1wZXJzaXN0ZW5jZS5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbIm11bHRpLWNhcnQtc3RhdGUtcGVyc2lzdGVuY2Uuc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFLQTs7Ozs7Ozs7Ozs7OztBQVlBOyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHRQYXJhbXNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2l0ZS1jb250ZXh0L3NlcnZpY2VzL3NpdGUtY29udGV4dC1wYXJhbXMuc2VydmljZSc7XG5pbXBvcnQgeyBTdGF0ZVBlcnNpc3RlbmNlU2VydmljZSB9IGZyb20gJy4uLy4uL3N0YXRlL3NlcnZpY2VzL3N0YXRlLXBlcnNpc3RlbmNlLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RhdGVXaXRoTXVsdGlDYXJ0IH0gZnJvbSAnLi4vc3RvcmUvbXVsdGktY2FydC1zdGF0ZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBNdWx0aUNhcnRTdGF0ZVBlcnNpc3RlbmNlU2VydmljZSB7XG4gICAgcHJvdGVjdGVkIHN0YXRlUGVyc2lzdGVuY2VTZXJ2aWNlOiBTdGF0ZVBlcnNpc3RlbmNlU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgc3RvcmU6IFN0b3JlPFN0YXRlV2l0aE11bHRpQ2FydD47XG4gICAgcHJvdGVjdGVkIHNpdGVDb250ZXh0UGFyYW1zU2VydmljZTogU2l0ZUNvbnRleHRQYXJhbXNTZXJ2aWNlO1xuICAgIGNvbnN0cnVjdG9yKHN0YXRlUGVyc2lzdGVuY2VTZXJ2aWNlOiBTdGF0ZVBlcnNpc3RlbmNlU2VydmljZSwgc3RvcmU6IFN0b3JlPFN0YXRlV2l0aE11bHRpQ2FydD4sIHNpdGVDb250ZXh0UGFyYW1zU2VydmljZTogU2l0ZUNvbnRleHRQYXJhbXNTZXJ2aWNlKTtcbiAgICBzeW5jKCk6IHZvaWQ7XG4gICAgcHJvdGVjdGVkIGdldENhcnRTdGF0ZSgpOiBPYnNlcnZhYmxlPHtcbiAgICAgICAgYWN0aXZlOiBzdHJpbmc7XG4gICAgfT47XG4gICAgcHJvdGVjdGVkIG9uUmVhZChzdGF0ZToge1xuICAgICAgICBhY3RpdmU6IHN0cmluZztcbiAgICB9KTogdm9pZDtcbn1cbiJdfQ==