import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import * as fromAction from '../actions/billing-countries.action';
import { SiteConnector } from '../../../site-context/connectors/site.connector';
export declare class BillingCountriesEffect {
    private actions$;
    private siteConnector;
    loadBillingCountries$: Observable<fromAction.BillingCountriesAction>;
    constructor(actions$: Actions, siteConnector: SiteConnector);
}
