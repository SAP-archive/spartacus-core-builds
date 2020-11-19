import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { UserConnector } from '../../connectors/user/user.connector';
import { UserActions } from '../actions/index';
import * as ɵngcc0 from '@angular/core';
export declare class TitlesEffects {
    private actions$;
    private userAccountConnector;
    loadTitles$: Observable<UserActions.TitlesAction>;
    constructor(actions$: Actions, userAccountConnector: UserConnector);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<TitlesEffects, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<TitlesEffects>;
}

//# sourceMappingURL=titles.effect.d.ts.map