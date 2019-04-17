import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { OccUserService } from '../../occ/index';
export declare class UserPaymentMethodsEffects {
    private actions$;
    private occUserService;
    loadUserPaymentMethods$: Observable<any>;
    setDefaultUserPaymentMethod$: Observable<any>;
    deleteUserPaymentMethod$: Observable<any>;
    constructor(actions$: Actions, occUserService: OccUserService);
}
