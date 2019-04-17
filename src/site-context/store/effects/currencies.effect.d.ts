import { Observable } from 'rxjs';
import { Actions } from '@ngrx/effects';
import { OccSiteService } from '../../occ/occ-site.service';
import { WindowRef } from '../../../window/window-ref';
export declare class CurrenciesEffects {
    private actions$;
    private occSiteService;
    private winRef;
    loadCurrencies$: Observable<any>;
    activateCurrency$: Observable<any>;
    constructor(actions$: Actions, occSiteService: OccSiteService, winRef: WindowRef);
}
