import { Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SiteConnector } from '../../../site-context/connectors/site.connector';
import * as fromActions from '../actions/index';
export declare class RegionsEffects {
    private actions$;
    private siteConnector;
    loadRegions$: Observable<fromActions.RegionsAction>;
    resetRegions$: Observable<Action>;
    constructor(actions$: Actions, siteConnector: SiteConnector);
}
