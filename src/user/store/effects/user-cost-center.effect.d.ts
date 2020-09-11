import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { UserCostCenterConnector } from '../../connectors/cost-center/user-cost-center.connector';
import { UserActions } from '../actions/index';
import * as ɵngcc0 from '@angular/core';
export declare class UserCostCenterEffects {
    private actions$;
    private userCostCenterConnector;
    loadActiveCostCenters$: Observable<UserActions.UserCostCenterAction>;
    constructor(actions$: Actions, userCostCenterConnector: UserCostCenterConnector);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<UserCostCenterEffects, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<UserCostCenterEffects>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1jb3N0LWNlbnRlci5lZmZlY3QuZC50cyIsInNvdXJjZXMiOlsidXNlci1jb3N0LWNlbnRlci5lZmZlY3QuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUFJQTs7Ozs7OztBQUtBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9ucyB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgVXNlckNvc3RDZW50ZXJDb25uZWN0b3IgfSBmcm9tICcuLi8uLi9jb25uZWN0b3JzL2Nvc3QtY2VudGVyL3VzZXItY29zdC1jZW50ZXIuY29ubmVjdG9yJztcbmltcG9ydCB7IFVzZXJBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBVc2VyQ29zdENlbnRlckVmZmVjdHMge1xuICAgIHByaXZhdGUgYWN0aW9ucyQ7XG4gICAgcHJpdmF0ZSB1c2VyQ29zdENlbnRlckNvbm5lY3RvcjtcbiAgICBsb2FkQWN0aXZlQ29zdENlbnRlcnMkOiBPYnNlcnZhYmxlPFVzZXJBY3Rpb25zLlVzZXJDb3N0Q2VudGVyQWN0aW9uPjtcbiAgICBjb25zdHJ1Y3RvcihhY3Rpb25zJDogQWN0aW9ucywgdXNlckNvc3RDZW50ZXJDb25uZWN0b3I6IFVzZXJDb3N0Q2VudGVyQ29ubmVjdG9yKTtcbn1cbiJdfQ==