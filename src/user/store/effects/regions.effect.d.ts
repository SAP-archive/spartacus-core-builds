import { Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromActions from '../actions/index';
import { SiteConnector } from '../../../site-context/connectors/site.connector';
export declare class RegionsEffects {
    private actions$;
    private siteConnector;
    loadRegions$: Observable<fromActions.RegionsAction>;
    resetRegions$: Observable<Action>;
    constructor(actions$: Actions, siteConnector: SiteConnector);
}
