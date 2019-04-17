import { Observable } from 'rxjs';
import { Actions } from '@ngrx/effects';
import { OccCartService } from '../../occ/cart.service';
export declare class CartEntryEffects {
    private actions$;
    private cartService;
    addEntry$: Observable<any>;
    removeEntry$: Observable<any>;
    updateEntry$: Observable<any>;
    constructor(actions$: Actions, cartService: OccCartService);
}
