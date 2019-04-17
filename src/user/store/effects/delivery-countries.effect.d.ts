import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import * as fromAction from '../actions/delivery-countries.action';
import { OccMiscsService } from '../../../occ/miscs/miscs.service';
export declare class DeliveryCountriesEffects {
    private actions$;
    private occMiscsService;
    loadDeliveryCountries$: Observable<fromAction.DeliveryCountriesAction>;
    constructor(actions$: Actions, occMiscsService: OccMiscsService);
}
