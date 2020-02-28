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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaW9ucy5lZmZlY3QuZC50cyIsInNvdXJjZXMiOlsicmVnaW9ucy5lZmZlY3QuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBS0E7Ozs7Ozs7O0FBTUE7Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9ucyB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgU2l0ZUNvbm5lY3RvciB9IGZyb20gJy4uLy4uLy4uL3NpdGUtY29udGV4dC9jb25uZWN0b3JzL3NpdGUuY29ubmVjdG9yJztcbmltcG9ydCB7IFVzZXJBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBSZWdpb25zRWZmZWN0cyB7XG4gICAgcHJpdmF0ZSBhY3Rpb25zJDtcbiAgICBwcml2YXRlIHNpdGVDb25uZWN0b3I7XG4gICAgbG9hZFJlZ2lvbnMkOiBPYnNlcnZhYmxlPFVzZXJBY3Rpb25zLlJlZ2lvbnNBY3Rpb24+O1xuICAgIHJlc2V0UmVnaW9ucyQ6IE9ic2VydmFibGU8QWN0aW9uPjtcbiAgICBjb25zdHJ1Y3RvcihhY3Rpb25zJDogQWN0aW9ucywgc2l0ZUNvbm5lY3RvcjogU2l0ZUNvbm5lY3Rvcik7XG59XG4iXX0=