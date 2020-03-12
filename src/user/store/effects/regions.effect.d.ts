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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<RegionsEffects>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<RegionsEffects>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaW9ucy5lZmZlY3QuZC50cyIsInNvdXJjZXMiOlsicmVnaW9ucy5lZmZlY3QuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBS0E7Ozs7Ozs7O0FBTUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb25zIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTaXRlQ29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vLi4vc2l0ZS1jb250ZXh0L2Nvbm5lY3RvcnMvc2l0ZS5jb25uZWN0b3InO1xuaW1wb3J0IHsgVXNlckFjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFJlZ2lvbnNFZmZlY3RzIHtcbiAgICBwcml2YXRlIGFjdGlvbnMkO1xuICAgIHByaXZhdGUgc2l0ZUNvbm5lY3RvcjtcbiAgICBsb2FkUmVnaW9ucyQ6IE9ic2VydmFibGU8VXNlckFjdGlvbnMuUmVnaW9uc0FjdGlvbj47XG4gICAgcmVzZXRSZWdpb25zJDogT2JzZXJ2YWJsZTxBY3Rpb24+O1xuICAgIGNvbnN0cnVjdG9yKGFjdGlvbnMkOiBBY3Rpb25zLCBzaXRlQ29ubmVjdG9yOiBTaXRlQ29ubmVjdG9yKTtcbn1cbiJdfQ==