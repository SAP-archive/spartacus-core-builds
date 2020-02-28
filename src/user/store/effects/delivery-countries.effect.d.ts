import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { SiteConnector } from '../../../site-context/connectors/site.connector';
import { UserActions } from '../actions/index';
import * as ɵngcc0 from '@angular/core';
export declare class DeliveryCountriesEffects {
    private actions$;
    private siteConnector;
    loadDeliveryCountries$: Observable<UserActions.DeliveryCountriesAction>;
    constructor(actions$: Actions, siteConnector: SiteConnector);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DeliveryCountriesEffects>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<DeliveryCountriesEffects>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsaXZlcnktY291bnRyaWVzLmVmZmVjdC5kLnRzIiwic291cmNlcyI6WyJkZWxpdmVyeS1jb3VudHJpZXMuZWZmZWN0LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FBSUE7Ozs7Ozs7QUFLQTsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb25zIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTaXRlQ29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vLi4vc2l0ZS1jb250ZXh0L2Nvbm5lY3RvcnMvc2l0ZS5jb25uZWN0b3InO1xuaW1wb3J0IHsgVXNlckFjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIERlbGl2ZXJ5Q291bnRyaWVzRWZmZWN0cyB7XG4gICAgcHJpdmF0ZSBhY3Rpb25zJDtcbiAgICBwcml2YXRlIHNpdGVDb25uZWN0b3I7XG4gICAgbG9hZERlbGl2ZXJ5Q291bnRyaWVzJDogT2JzZXJ2YWJsZTxVc2VyQWN0aW9ucy5EZWxpdmVyeUNvdW50cmllc0FjdGlvbj47XG4gICAgY29uc3RydWN0b3IoYWN0aW9ucyQ6IEFjdGlvbnMsIHNpdGVDb25uZWN0b3I6IFNpdGVDb25uZWN0b3IpO1xufVxuIl19