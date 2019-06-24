import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { SiteConnector } from '../../../site-context/connectors/site.connector';
import * as fromAction from '../actions/delivery-countries.action';
export declare class DeliveryCountriesEffects {
    private actions$;
    private siteConnector;
    loadDeliveryCountries$: Observable<fromAction.DeliveryCountriesAction>;
    constructor(actions$: Actions, siteConnector: SiteConnector);
}
