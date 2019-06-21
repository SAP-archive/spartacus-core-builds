import { Observable } from 'rxjs';
import { Actions } from '@ngrx/effects';
import { SiteConnector } from '../../connectors/site.connector';
export declare class BaseSiteEffects {
    private actions$;
    private siteConnector;
    loadBaseSite$: Observable<any>;
    constructor(actions$: Actions, siteConnector: SiteConnector);
}
