import { Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SiteConnector } from '../../../site-context/connectors/site.connector';
import { UserActions } from '../actions/index';
import * as ɵngcc0 from '@angular/core';
export declare class RegionsEffects {
    private actions$;
    private siteConnector;
    loadRegions$: Observable<UserActions.RegionsAction>;
    resetRegions$: Observable<Action>;
    constructor(actions$: Actions, siteConnector: SiteConnector);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<RegionsEffects, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<RegionsEffects>;
}

//# sourceMappingURL=regions.effect.d.ts.map