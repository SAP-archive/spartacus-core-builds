import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { SiteConnector } from '../../../site-context/connectors/site.connector';
import { UserActions } from '../actions/index';
import * as ɵngcc0 from '@angular/core';
export declare class BillingCountriesEffect {
    private actions$;
    private siteConnector;
    loadBillingCountries$: Observable<UserActions.BillingCountriesAction>;
    constructor(actions$: Actions, siteConnector: SiteConnector);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<BillingCountriesEffect, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<BillingCountriesEffect>;
}

//# sourceMappingURL=billing-countries.effect.d.ts.map