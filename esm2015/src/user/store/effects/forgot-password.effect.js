/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { concatMap, switchMap, map, catchError } from 'rxjs/operators';
import { GlobalMessageType, AddMessage } from '../../../global-message/index';
import * as fromActions from '../actions/index';
import { OccUserService } from '../../occ/user.service';
export class ForgotPasswordEffects {
    /**
     * @param {?} actions$
     * @param {?} occUserService
     */
    constructor(actions$, occUserService) {
        this.actions$ = actions$;
        this.occUserService = occUserService;
        this.requestForgotPasswordEmail$ = this.actions$.pipe(ofType(fromActions.FORGOT_PASSWORD_EMAIL_REQUEST), map((action) => {
            return action.payload;
        }), concatMap(userEmailAddress => {
            return this.occUserService
                .requestForgotPasswordEmail(userEmailAddress)
                .pipe(switchMap(() => [
                new fromActions.ForgotPasswordEmailRequestSuccess(),
                new AddMessage({
                    text: 'An email has been sent to you with information on how to reset your password.',
                    type: GlobalMessageType.MSG_TYPE_CONFIRMATION,
                }),
            ]), catchError(error => of(new fromActions.ForgotPasswordEmailRequestFail(error))));
        }));
    }
}
ForgotPasswordEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ForgotPasswordEffects.ctorParameters = () => [
    { type: Actions },
    { type: OccUserService }
];
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], ForgotPasswordEffects.prototype, "requestForgotPasswordEmail$", void 0);
if (false) {
    /** @type {?} */
    ForgotPasswordEffects.prototype.requestForgotPasswordEmail$;
    /**
     * @type {?}
     * @private
     */
    ForgotPasswordEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    ForgotPasswordEffects.prototype.occUserService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9yZ290LXBhc3N3b3JkLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL3N0b3JlL2VmZmVjdHMvZm9yZ290LXBhc3N3b3JkLmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXhELE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN2RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsVUFBVSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFOUUsT0FBTyxLQUFLLFdBQVcsTUFBTSxrQkFBa0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFHeEQsTUFBTSxPQUFPLHFCQUFxQjs7Ozs7SUE4QmhDLFlBQ1UsUUFBaUIsRUFDakIsY0FBOEI7UUFEOUIsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUE5QnhDLGdDQUEyQixHQUl2QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLFdBQVcsQ0FBQyw2QkFBNkIsQ0FBQyxFQUNqRCxHQUFHLENBQUMsQ0FBQyxNQUE4QyxFQUFFLEVBQUU7WUFDckQsT0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxFQUNGLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFO1lBQzNCLE9BQU8sSUFBSSxDQUFDLGNBQWM7aUJBQ3ZCLDBCQUEwQixDQUFDLGdCQUFnQixDQUFDO2lCQUM1QyxJQUFJLENBQ0gsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDO2dCQUNkLElBQUksV0FBVyxDQUFDLGlDQUFpQyxFQUFFO2dCQUNuRCxJQUFJLFVBQVUsQ0FBQztvQkFDYixJQUFJLEVBQ0YsK0VBQStFO29CQUNqRixJQUFJLEVBQUUsaUJBQWlCLENBQUMscUJBQXFCO2lCQUM5QyxDQUFDO2FBQ0gsQ0FBQyxFQUNGLFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUNqQixFQUFFLENBQUMsSUFBSSxXQUFXLENBQUMsOEJBQThCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FDMUQsQ0FDRixDQUFDO1FBQ04sQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUtDLENBQUM7OztZQWxDTCxVQUFVOzs7O1lBVE0sT0FBTztZQU9mLGNBQWM7O0FBS3JCO0lBREMsTUFBTSxFQUFFO3NDQUNvQixVQUFVOzBFQTBCckM7OztJQTNCRiw0REEyQkU7Ozs7O0lBR0EseUNBQXlCOzs7OztJQUN6QiwrQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEVmZmVjdCwgQWN0aW9ucywgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjb25jYXRNYXAsIHN3aXRjaE1hcCwgbWFwLCBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgR2xvYmFsTWVzc2FnZVR5cGUsIEFkZE1lc3NhZ2UgfSBmcm9tICcuLi8uLi8uLi9nbG9iYWwtbWVzc2FnZS9pbmRleCc7XG5cbmltcG9ydCAqIGFzIGZyb21BY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgT2NjVXNlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9vY2MvdXNlci5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZvcmdvdFBhc3N3b3JkRWZmZWN0cyB7XG4gIEBFZmZlY3QoKVxuICByZXF1ZXN0Rm9yZ290UGFzc3dvcmRFbWFpbCQ6IE9ic2VydmFibGU8XG4gICAgfCBmcm9tQWN0aW9ucy5Gb3Jnb3RQYXNzd29yZEVtYWlsUmVxdWVzdFN1Y2Nlc3NcbiAgICB8IEFkZE1lc3NhZ2VcbiAgICB8IGZyb21BY3Rpb25zLkZvcmdvdFBhc3N3b3JkRW1haWxSZXF1ZXN0RmFpbFxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShmcm9tQWN0aW9ucy5GT1JHT1RfUEFTU1dPUkRfRU1BSUxfUkVRVUVTVCksXG4gICAgbWFwKChhY3Rpb246IGZyb21BY3Rpb25zLkZvcmdvdFBhc3N3b3JkRW1haWxSZXF1ZXN0KSA9PiB7XG4gICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWQ7XG4gICAgfSksXG4gICAgY29uY2F0TWFwKHVzZXJFbWFpbEFkZHJlc3MgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMub2NjVXNlclNlcnZpY2VcbiAgICAgICAgLnJlcXVlc3RGb3Jnb3RQYXNzd29yZEVtYWlsKHVzZXJFbWFpbEFkZHJlc3MpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIHN3aXRjaE1hcCgoKSA9PiBbXG4gICAgICAgICAgICBuZXcgZnJvbUFjdGlvbnMuRm9yZ290UGFzc3dvcmRFbWFpbFJlcXVlc3RTdWNjZXNzKCksXG4gICAgICAgICAgICBuZXcgQWRkTWVzc2FnZSh7XG4gICAgICAgICAgICAgIHRleHQ6XG4gICAgICAgICAgICAgICAgJ0FuIGVtYWlsIGhhcyBiZWVuIHNlbnQgdG8geW91IHdpdGggaW5mb3JtYXRpb24gb24gaG93IHRvIHJlc2V0IHlvdXIgcGFzc3dvcmQuJyxcbiAgICAgICAgICAgICAgdHlwZTogR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfQ09ORklSTUFUSU9OLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgXSksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgICAgb2YobmV3IGZyb21BY3Rpb25zLkZvcmdvdFBhc3N3b3JkRW1haWxSZXF1ZXN0RmFpbChlcnJvcikpXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIG9jY1VzZXJTZXJ2aWNlOiBPY2NVc2VyU2VydmljZVxuICApIHt9XG59XG4iXX0=