import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import * as fromAction from '../actions/delivery-countries.action';
import { SiteConnector } from '../../../site-context/connectors/site.connector';
export declare class DeliveryCountriesEffects {
    private actions$;
    private siteConnector;
    loadDeliveryCountries$: Observable<fromAction.DeliveryCountriesAction>;
    constructor(actions$: Actions, siteConnector: SiteConnector);
}
