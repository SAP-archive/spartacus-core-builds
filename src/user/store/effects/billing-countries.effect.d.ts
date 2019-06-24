import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { SiteConnector } from '../../../site-context/connectors/site.connector';
import * as fromAction from '../actions/billing-countries.action';
export declare class BillingCountriesEffect {
    private actions$;
    private siteConnector;
    loadBillingCountries$: Observable<fromAction.BillingCountriesAction>;
    constructor(actions$: Actions, siteConnector: SiteConnector);
}
