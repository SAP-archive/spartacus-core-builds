import { Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserActions } from '../actions/index';
import { UserInterestsConnector } from '../../connectors/interests/user-interests.connector';
import * as ɵngcc0 from '@angular/core';
export declare class ProductInterestsEffect {
    private actions$;
    private userInterestsConnector;
    constructor(actions$: Actions, userInterestsConnector: UserInterestsConnector);
    loadProductInteres$: Observable<UserActions.ProductInterestsAction>;
    removeProductInterest$: Observable<Action>;
    addProductInterest$: Observable<Action>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ProductInterestsEffect>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<ProductInterestsEffect>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1pbnRlcmVzdHMuZWZmZWN0LmQudHMiLCJzb3VyY2VzIjpbInByb2R1Y3QtaW50ZXJlc3RzLmVmZmVjdC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFLQTs7Ozs7Ozs7O0FBT0E7Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9ucyB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgVXNlckFjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IFVzZXJJbnRlcmVzdHNDb25uZWN0b3IgfSBmcm9tICcuLi8uLi9jb25uZWN0b3JzL2ludGVyZXN0cy91c2VyLWludGVyZXN0cy5jb25uZWN0b3InO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgUHJvZHVjdEludGVyZXN0c0VmZmVjdCB7XG4gICAgcHJpdmF0ZSBhY3Rpb25zJDtcbiAgICBwcml2YXRlIHVzZXJJbnRlcmVzdHNDb25uZWN0b3I7XG4gICAgY29uc3RydWN0b3IoYWN0aW9ucyQ6IEFjdGlvbnMsIHVzZXJJbnRlcmVzdHNDb25uZWN0b3I6IFVzZXJJbnRlcmVzdHNDb25uZWN0b3IpO1xuICAgIGxvYWRQcm9kdWN0SW50ZXJlcyQ6IE9ic2VydmFibGU8VXNlckFjdGlvbnMuUHJvZHVjdEludGVyZXN0c0FjdGlvbj47XG4gICAgcmVtb3ZlUHJvZHVjdEludGVyZXN0JDogT2JzZXJ2YWJsZTxBY3Rpb24+O1xuICAgIGFkZFByb2R1Y3RJbnRlcmVzdCQ6IE9ic2VydmFibGU8QWN0aW9uPjtcbn1cbiJdfQ==