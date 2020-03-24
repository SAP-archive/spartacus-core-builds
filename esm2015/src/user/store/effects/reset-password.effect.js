import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { from } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { GlobalMessageType } from '../../../global-message/models/global-message.model';
import { GlobalMessageActions } from '../../../global-message/store/actions/index';
import { makeErrorSerializable } from '../../../util/serialization-utils';
import { UserConnector } from '../../connectors/user/user.connector';
import { UserActions } from '../actions/index';
let ResetPasswordEffects = class ResetPasswordEffects {
    constructor(actions$, userAccountConnector) {
        this.actions$ = actions$;
        this.userAccountConnector = userAccountConnector;
        this.resetPassword$ = this.actions$.pipe(ofType(UserActions.RESET_PASSWORD), map((action) => action.payload), switchMap(({ token, password }) => {
            return this.userAccountConnector.resetPassword(token, password).pipe(switchMap(() => [
                new UserActions.ResetPasswordSuccess(),
                new GlobalMessageActions.AddMessage({
                    text: { key: 'forgottenPassword.passwordResetSuccess' },
                    type: GlobalMessageType.MSG_TYPE_CONFIRMATION,
                }),
            ]), catchError(error => {
                var _a, _b;
                const actions = [new UserActions.ResetPasswordFail(makeErrorSerializable(error))];
                if ((_b = (_a = error) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 ? void 0 : _b.errors) {
                    error.error.errors.forEach(err => {
                        if (err.message) {
                            actions.push(new GlobalMessageActions.AddMessage({
                                text: { raw: err.message },
                                type: GlobalMessageType.MSG_TYPE_ERROR,
                            }));
                        }
                    });
                }
                return from(actions);
            }));
        }));
    }
};
ResetPasswordEffects.ctorParameters = () => [
    { type: Actions },
    { type: UserConnector }
];
__decorate([
    Effect()
], ResetPasswordEffects.prototype, "resetPassword$", void 0);
ResetPasswordEffects = __decorate([
    Injectable()
], ResetPasswordEffects);
export { ResetPasswordEffects };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzZXQtcGFzc3dvcmQuZWZmZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvc3RvcmUvZWZmZWN0cy9yZXNldC1wYXNzd29yZC5lZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxJQUFJLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDeEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDeEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDbkYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDMUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUcvQyxJQUFhLG9CQUFvQixHQUFqQyxNQUFhLG9CQUFvQjtJQXdDL0IsWUFDVSxRQUFpQixFQUNqQixvQkFBbUM7UUFEbkMsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQWU7UUF4QzdDLG1CQUFjLEdBSVYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLEVBQ2xDLEdBQUcsQ0FBQyxDQUFDLE1BQWlDLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFDMUQsU0FBUyxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRTtZQUNoQyxPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FDbEUsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDO2dCQUNkLElBQUksV0FBVyxDQUFDLG9CQUFvQixFQUFFO2dCQUN0QyxJQUFJLG9CQUFvQixDQUFDLFVBQVUsQ0FBQztvQkFDbEMsSUFBSSxFQUFFLEVBQUUsR0FBRyxFQUFFLHdDQUF3QyxFQUFFO29CQUN2RCxJQUFJLEVBQUUsaUJBQWlCLENBQUMscUJBQXFCO2lCQUM5QyxDQUFDO2FBQ0gsQ0FBQyxFQUNGLFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBRTs7Z0JBQ2pCLE1BQU0sT0FBTyxHQUVULENBQUMsSUFBSSxXQUFXLENBQUMsaUJBQWlCLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN0RSxnQkFBSSxLQUFLLDBDQUFFLEtBQUssMENBQUUsTUFBTSxFQUFFO29CQUN4QixLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7d0JBQy9CLElBQUksR0FBRyxDQUFDLE9BQU8sRUFBRTs0QkFDZixPQUFPLENBQUMsSUFBSSxDQUNWLElBQUksb0JBQW9CLENBQUMsVUFBVSxDQUFDO2dDQUNsQyxJQUFJLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLE9BQU8sRUFBRTtnQ0FDMUIsSUFBSSxFQUFFLGlCQUFpQixDQUFDLGNBQWM7NkJBQ3ZDLENBQUMsQ0FDSCxDQUFDO3lCQUNIO29CQUNILENBQUMsQ0FBQyxDQUFDO2lCQUNKO2dCQUNELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3ZCLENBQUMsQ0FBQyxDQUNILENBQUM7UUFDSixDQUFDLENBQUMsQ0FDSCxDQUFDO0lBS0MsQ0FBQztDQUNMLENBQUE7O1lBSHFCLE9BQU87WUFDSyxhQUFhOztBQXhDN0M7SUFEQyxNQUFNLEVBQUU7NERBcUNQO0FBdENTLG9CQUFvQjtJQURoQyxVQUFVLEVBQUU7R0FDQSxvQkFBb0IsQ0E0Q2hDO1NBNUNZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBmcm9tLCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEdsb2JhbE1lc3NhZ2VUeXBlIH0gZnJvbSAnLi4vLi4vLi4vZ2xvYmFsLW1lc3NhZ2UvbW9kZWxzL2dsb2JhbC1tZXNzYWdlLm1vZGVsJztcbmltcG9ydCB7IEdsb2JhbE1lc3NhZ2VBY3Rpb25zIH0gZnJvbSAnLi4vLi4vLi4vZ2xvYmFsLW1lc3NhZ2Uvc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBtYWtlRXJyb3JTZXJpYWxpemFibGUgfSBmcm9tICcuLi8uLi8uLi91dGlsL3NlcmlhbGl6YXRpb24tdXRpbHMnO1xuaW1wb3J0IHsgVXNlckNvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvdXNlci91c2VyLmNvbm5lY3Rvcic7XG5pbXBvcnQgeyBVc2VyQWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUmVzZXRQYXNzd29yZEVmZmVjdHMge1xuICBARWZmZWN0KClcbiAgcmVzZXRQYXNzd29yZCQ6IE9ic2VydmFibGU8XG4gICAgfCBVc2VyQWN0aW9ucy5SZXNldFBhc3N3b3JkU3VjY2Vzc1xuICAgIHwgR2xvYmFsTWVzc2FnZUFjdGlvbnMuQWRkTWVzc2FnZVxuICAgIHwgVXNlckFjdGlvbnMuUmVzZXRQYXNzd29yZEZhaWxcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoVXNlckFjdGlvbnMuUkVTRVRfUEFTU1dPUkQpLFxuICAgIG1hcCgoYWN0aW9uOiBVc2VyQWN0aW9ucy5SZXNldFBhc3N3b3JkKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgc3dpdGNoTWFwKCh7IHRva2VuLCBwYXNzd29yZCB9KSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy51c2VyQWNjb3VudENvbm5lY3Rvci5yZXNldFBhc3N3b3JkKHRva2VuLCBwYXNzd29yZCkucGlwZShcbiAgICAgICAgc3dpdGNoTWFwKCgpID0+IFtcbiAgICAgICAgICBuZXcgVXNlckFjdGlvbnMuUmVzZXRQYXNzd29yZFN1Y2Nlc3MoKSxcbiAgICAgICAgICBuZXcgR2xvYmFsTWVzc2FnZUFjdGlvbnMuQWRkTWVzc2FnZSh7XG4gICAgICAgICAgICB0ZXh0OiB7IGtleTogJ2ZvcmdvdHRlblBhc3N3b3JkLnBhc3N3b3JkUmVzZXRTdWNjZXNzJyB9LFxuICAgICAgICAgICAgdHlwZTogR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfQ09ORklSTUFUSU9OLFxuICAgICAgICAgIH0pLFxuICAgICAgICBdKSxcbiAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiB7XG4gICAgICAgICAgY29uc3QgYWN0aW9uczogQXJyYXk8XG4gICAgICAgICAgICBVc2VyQWN0aW9ucy5SZXNldFBhc3N3b3JkRmFpbCB8IEdsb2JhbE1lc3NhZ2VBY3Rpb25zLkFkZE1lc3NhZ2VcbiAgICAgICAgICA+ID0gW25ldyBVc2VyQWN0aW9ucy5SZXNldFBhc3N3b3JkRmFpbChtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpKV07XG4gICAgICAgICAgaWYgKGVycm9yPy5lcnJvcj8uZXJyb3JzKSB7XG4gICAgICAgICAgICBlcnJvci5lcnJvci5lcnJvcnMuZm9yRWFjaChlcnIgPT4ge1xuICAgICAgICAgICAgICBpZiAoZXJyLm1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICBhY3Rpb25zLnB1c2goXG4gICAgICAgICAgICAgICAgICBuZXcgR2xvYmFsTWVzc2FnZUFjdGlvbnMuQWRkTWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IHsgcmF3OiBlcnIubWVzc2FnZSB9LFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9FUlJPUixcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBmcm9tKGFjdGlvbnMpO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSB1c2VyQWNjb3VudENvbm5lY3RvcjogVXNlckNvbm5lY3RvclxuICApIHt9XG59XG4iXX0=