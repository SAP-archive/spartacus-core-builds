import { Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { RoutingService } from '../../../routing/index';
import { CmsPageConnector } from '../../connectors/page/cms-page.connector';
import * as ɵngcc0 from '@angular/core';
export declare class PageEffects {
    private actions$;
    private cmsPageConnector;
    private routingService;
    refreshPage$: Observable<Action>;
    loadPageData$: Observable<Action>;
    constructor(actions$: Actions, cmsPageConnector: CmsPageConnector, routingService: RoutingService);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<PageEffects>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<PageEffects>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5lZmZlY3QuZC50cyIsInNvdXJjZXMiOlsicGFnZS5lZmZlY3QuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBS0E7Ozs7Ozs7OztBQU9BOyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbnMgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFJvdXRpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vcm91dGluZy9pbmRleCc7XG5pbXBvcnQgeyBDbXNQYWdlQ29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9wYWdlL2Ntcy1wYWdlLmNvbm5lY3Rvcic7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBQYWdlRWZmZWN0cyB7XG4gICAgcHJpdmF0ZSBhY3Rpb25zJDtcbiAgICBwcml2YXRlIGNtc1BhZ2VDb25uZWN0b3I7XG4gICAgcHJpdmF0ZSByb3V0aW5nU2VydmljZTtcbiAgICByZWZyZXNoUGFnZSQ6IE9ic2VydmFibGU8QWN0aW9uPjtcbiAgICBsb2FkUGFnZURhdGEkOiBPYnNlcnZhYmxlPEFjdGlvbj47XG4gICAgY29uc3RydWN0b3IoYWN0aW9ucyQ6IEFjdGlvbnMsIGNtc1BhZ2VDb25uZWN0b3I6IENtc1BhZ2VDb25uZWN0b3IsIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSk7XG59XG4iXX0=