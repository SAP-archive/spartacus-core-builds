import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { SiteConnector } from '../../connectors/site.connector';
import { SiteContextActions } from '../actions/index';
export declare class BaseSiteEffects {
    private actions$;
    private siteConnector;
    loadBaseSite$: Observable<SiteContextActions.LoadBaseSiteSuccess | SiteContextActions.LoadBaseSiteFail>;
    loadBaseSites$: Observable<SiteContextActions.LoadBaseSitesSuccess | SiteContextActions.LoadBaseSitesFail>;
    constructor(actions$: Actions, siteConnector: SiteConnector);
}
