import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import * as fromAction from '../actions/billing-countries.action';
import { OccMiscsService } from '../../../occ/miscs/miscs.service';
export declare class BillingCountriesEffect {
    private actions$;
    private occMiscsService;
    loadBillingCountries$: Observable<fromAction.BillingCountriesAction>;
    constructor(actions$: Actions, occMiscsService: OccMiscsService);
}
