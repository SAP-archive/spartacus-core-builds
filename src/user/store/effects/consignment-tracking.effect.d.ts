import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { UserOrderConnector } from '../../connectors/order/user-order.connector';
import { UserActions } from '../actions/index';
import * as ɵngcc0 from '@angular/core';
export declare class ConsignmentTrackingEffects {
    private actions$;
    private userOrderConnector;
    loadConsignmentTracking$: Observable<UserActions.ConsignmentTrackingAction>;
    constructor(actions$: Actions, userOrderConnector: UserOrderConnector);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ConsignmentTrackingEffects>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<ConsignmentTrackingEffects>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc2lnbm1lbnQtdHJhY2tpbmcuZWZmZWN0LmQudHMiLCJzb3VyY2VzIjpbImNvbnNpZ25tZW50LXRyYWNraW5nLmVmZmVjdC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUlBOzs7Ozs7O0FBS0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb25zIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBVc2VyT3JkZXJDb25uZWN0b3IgfSBmcm9tICcuLi8uLi9jb25uZWN0b3JzL29yZGVyL3VzZXItb3JkZXIuY29ubmVjdG9yJztcbmltcG9ydCB7IFVzZXJBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDb25zaWdubWVudFRyYWNraW5nRWZmZWN0cyB7XG4gICAgcHJpdmF0ZSBhY3Rpb25zJDtcbiAgICBwcml2YXRlIHVzZXJPcmRlckNvbm5lY3RvcjtcbiAgICBsb2FkQ29uc2lnbm1lbnRUcmFja2luZyQ6IE9ic2VydmFibGU8VXNlckFjdGlvbnMuQ29uc2lnbm1lbnRUcmFja2luZ0FjdGlvbj47XG4gICAgY29uc3RydWN0b3IoYWN0aW9ucyQ6IEFjdGlvbnMsIHVzZXJPcmRlckNvbm5lY3RvcjogVXNlck9yZGVyQ29ubmVjdG9yKTtcbn1cbiJdfQ==