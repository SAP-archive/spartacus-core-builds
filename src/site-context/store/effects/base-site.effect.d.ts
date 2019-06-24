import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { SiteConnector } from '../../connectors/site.connector';
import * as actions from '../actions/base-site.action';
export declare class BaseSiteEffects {
    private actions$;
    private siteConnector;
    loadBaseSite$: Observable<actions.LoadBaseSiteSuccess | actions.LoadBaseSiteFail>;
    constructor(actions$: Actions, siteConnector: SiteConnector);
}
