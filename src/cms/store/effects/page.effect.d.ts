import { Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { RoutingService } from '../../../routing/index';
import { CmsPageLoader } from '../../services/cms-page.loader';
export declare class PageEffects {
    private actions$;
    private cmsPageLoader;
    private routingService;
    refreshPage$: Observable<Action>;
    loadPageData$: Observable<Action>;
    constructor(actions$: Actions, cmsPageLoader: CmsPageLoader<any>, routingService: RoutingService);
}
