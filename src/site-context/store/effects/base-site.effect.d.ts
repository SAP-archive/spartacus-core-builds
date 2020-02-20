import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { SiteConnector } from '../../connectors/site.connector';
import { SiteContextActions } from '../actions/index';
import * as ɵngcc0 from '@angular/core';
export declare class BaseSiteEffects {
    private actions$;
    private siteConnector;
    loadBaseSite$: Observable<SiteContextActions.LoadBaseSiteSuccess | SiteContextActions.LoadBaseSiteFail>;
    constructor(actions$: Actions, siteConnector: SiteConnector);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<BaseSiteEffects>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<BaseSiteEffects>;
}

//# sourceMappingURL=base-site.effect.d.ts.map