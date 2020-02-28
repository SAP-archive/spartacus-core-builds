import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { SiteConnector } from '../../connectors/site.connector';
import { SiteContextActions } from '../actions/index';
import * as ɵngcc0 from '@angular/core';
export declare class BaseSiteEffects {
    private actions$;
    private siteConnector;
    loadBaseSite$: Observable<SiteContextActions.LoadBaseSiteSuccess | SiteContextActions.LoadBaseSiteFail>;
    constructor(actions$: Actions, siteConnector: SiteConnector);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<BaseSiteEffects>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<BaseSiteEffects>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1zaXRlLmVmZmVjdC5kLnRzIiwic291cmNlcyI6WyJiYXNlLXNpdGUuZWZmZWN0LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FBSUE7Ozs7Ozs7QUFLQTsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb25zIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTaXRlQ29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9zaXRlLmNvbm5lY3Rvcic7XG5pbXBvcnQgeyBTaXRlQ29udGV4dEFjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEJhc2VTaXRlRWZmZWN0cyB7XG4gICAgcHJpdmF0ZSBhY3Rpb25zJDtcbiAgICBwcml2YXRlIHNpdGVDb25uZWN0b3I7XG4gICAgbG9hZEJhc2VTaXRlJDogT2JzZXJ2YWJsZTxTaXRlQ29udGV4dEFjdGlvbnMuTG9hZEJhc2VTaXRlU3VjY2VzcyB8IFNpdGVDb250ZXh0QWN0aW9ucy5Mb2FkQmFzZVNpdGVGYWlsPjtcbiAgICBjb25zdHJ1Y3RvcihhY3Rpb25zJDogQWN0aW9ucywgc2l0ZUNvbm5lY3RvcjogU2l0ZUNvbm5lY3Rvcik7XG59XG4iXX0=