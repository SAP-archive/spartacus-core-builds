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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5lZmZlY3QuZC50cyIsInNvdXJjZXMiOlsicGFnZS5lZmZlY3QuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBS0E7Ozs7Ozs7OztBQU9BIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9ucyB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUm91dGluZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9yb3V0aW5nL2luZGV4JztcbmltcG9ydCB7IENtc1BhZ2VDb25uZWN0b3IgfSBmcm9tICcuLi8uLi9jb25uZWN0b3JzL3BhZ2UvY21zLXBhZ2UuY29ubmVjdG9yJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFBhZ2VFZmZlY3RzIHtcbiAgICBwcml2YXRlIGFjdGlvbnMkO1xuICAgIHByaXZhdGUgY21zUGFnZUNvbm5lY3RvcjtcbiAgICBwcml2YXRlIHJvdXRpbmdTZXJ2aWNlO1xuICAgIHJlZnJlc2hQYWdlJDogT2JzZXJ2YWJsZTxBY3Rpb24+O1xuICAgIGxvYWRQYWdlRGF0YSQ6IE9ic2VydmFibGU8QWN0aW9uPjtcbiAgICBjb25zdHJ1Y3RvcihhY3Rpb25zJDogQWN0aW9ucywgY21zUGFnZUNvbm5lY3RvcjogQ21zUGFnZUNvbm5lY3Rvciwgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlKTtcbn1cbiJdfQ==