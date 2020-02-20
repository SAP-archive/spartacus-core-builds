import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { SiteConnector } from '../../../site-context/connectors/site.connector';
import { UserActions } from '../actions/index';
import * as ɵngcc0 from '@angular/core';
export declare class DeliveryCountriesEffects {
    private actions$;
    private siteConnector;
    loadDeliveryCountries$: Observable<UserActions.DeliveryCountriesAction>;
    constructor(actions$: Actions, siteConnector: SiteConnector);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DeliveryCountriesEffects>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<DeliveryCountriesEffects>;
}

//# sourceMappingURL=delivery-countries.effect.d.ts.map