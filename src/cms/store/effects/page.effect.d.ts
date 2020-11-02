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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<PageEffects, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<PageEffects>;
}

//# sourceMappingURL=page.effect.d.ts.map