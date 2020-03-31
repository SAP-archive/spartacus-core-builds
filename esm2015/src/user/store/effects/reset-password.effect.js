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
            ]), catchError((error) => {
                var _a;
                const actions = [new UserActions.ResetPasswordFail(makeErrorSerializable(error))];
                if ((_a = error === null || error === void 0 ? void 0 : error.error) === null || _a === void 0 ? void 0 : _a.errors) {
                    error.error.errors.forEach((err) => {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzZXQtcGFzc3dvcmQuZWZmZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvc3RvcmUvZWZmZWN0cy9yZXNldC1wYXNzd29yZC5lZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxJQUFJLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDeEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDeEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDbkYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDMUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUcvQyxJQUFhLG9CQUFvQixHQUFqQyxNQUFhLG9CQUFvQjtJQXdDL0IsWUFDVSxRQUFpQixFQUNqQixvQkFBbUM7UUFEbkMsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQWU7UUF4QzdDLG1CQUFjLEdBSVYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLEVBQ2xDLEdBQUcsQ0FBQyxDQUFDLE1BQWlDLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFDMUQsU0FBUyxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRTtZQUNoQyxPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FDbEUsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDO2dCQUNkLElBQUksV0FBVyxDQUFDLG9CQUFvQixFQUFFO2dCQUN0QyxJQUFJLG9CQUFvQixDQUFDLFVBQVUsQ0FBQztvQkFDbEMsSUFBSSxFQUFFLEVBQUUsR0FBRyxFQUFFLHdDQUF3QyxFQUFFO29CQUN2RCxJQUFJLEVBQUUsaUJBQWlCLENBQUMscUJBQXFCO2lCQUM5QyxDQUFDO2FBQ0gsQ0FBQyxFQUNGLFVBQVUsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFOztnQkFDbkIsTUFBTSxPQUFPLEdBRVQsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RFLFVBQUksS0FBSyxhQUFMLEtBQUssdUJBQUwsS0FBSyxDQUFFLEtBQUssMENBQUUsTUFBTSxFQUFFO29CQUN4QixLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTt3QkFDakMsSUFBSSxHQUFHLENBQUMsT0FBTyxFQUFFOzRCQUNmLE9BQU8sQ0FBQyxJQUFJLENBQ1YsSUFBSSxvQkFBb0IsQ0FBQyxVQUFVLENBQUM7Z0NBQ2xDLElBQUksRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsT0FBTyxFQUFFO2dDQUMxQixJQUFJLEVBQUUsaUJBQWlCLENBQUMsY0FBYzs2QkFDdkMsQ0FBQyxDQUNILENBQUM7eUJBQ0g7b0JBQ0gsQ0FBQyxDQUFDLENBQUM7aUJBQ0o7Z0JBQ0QsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDdkIsQ0FBQyxDQUFDLENBQ0gsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUNILENBQUM7SUFLQyxDQUFDO0NBQ0wsQ0FBQTs7WUFIcUIsT0FBTztZQUNLLGFBQWE7O0FBeEM3QztJQURDLE1BQU0sRUFBRTs0REFxQ1A7QUF0Q1Msb0JBQW9CO0lBRGhDLFVBQVUsRUFBRTtHQUNBLG9CQUFvQixDQTRDaEM7U0E1Q1ksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IGZyb20sIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgR2xvYmFsTWVzc2FnZVR5cGUgfSBmcm9tICcuLi8uLi8uLi9nbG9iYWwtbWVzc2FnZS9tb2RlbHMvZ2xvYmFsLW1lc3NhZ2UubW9kZWwnO1xuaW1wb3J0IHsgR2xvYmFsTWVzc2FnZUFjdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9nbG9iYWwtbWVzc2FnZS9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IG1ha2VFcnJvclNlcmlhbGl6YWJsZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvc2VyaWFsaXphdGlvbi11dGlscyc7XG5pbXBvcnQgeyBVc2VyQ29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy91c2VyL3VzZXIuY29ubmVjdG9yJztcbmltcG9ydCB7IFVzZXJBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBSZXNldFBhc3N3b3JkRWZmZWN0cyB7XG4gIEBFZmZlY3QoKVxuICByZXNldFBhc3N3b3JkJDogT2JzZXJ2YWJsZTxcbiAgICB8IFVzZXJBY3Rpb25zLlJlc2V0UGFzc3dvcmRTdWNjZXNzXG4gICAgfCBHbG9iYWxNZXNzYWdlQWN0aW9ucy5BZGRNZXNzYWdlXG4gICAgfCBVc2VyQWN0aW9ucy5SZXNldFBhc3N3b3JkRmFpbFxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShVc2VyQWN0aW9ucy5SRVNFVF9QQVNTV09SRCksXG4gICAgbWFwKChhY3Rpb246IFVzZXJBY3Rpb25zLlJlc2V0UGFzc3dvcmQpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBzd2l0Y2hNYXAoKHsgdG9rZW4sIHBhc3N3b3JkIH0pID0+IHtcbiAgICAgIHJldHVybiB0aGlzLnVzZXJBY2NvdW50Q29ubmVjdG9yLnJlc2V0UGFzc3dvcmQodG9rZW4sIHBhc3N3b3JkKS5waXBlKFxuICAgICAgICBzd2l0Y2hNYXAoKCkgPT4gW1xuICAgICAgICAgIG5ldyBVc2VyQWN0aW9ucy5SZXNldFBhc3N3b3JkU3VjY2VzcygpLFxuICAgICAgICAgIG5ldyBHbG9iYWxNZXNzYWdlQWN0aW9ucy5BZGRNZXNzYWdlKHtcbiAgICAgICAgICAgIHRleHQ6IHsga2V5OiAnZm9yZ290dGVuUGFzc3dvcmQucGFzc3dvcmRSZXNldFN1Y2Nlc3MnIH0sXG4gICAgICAgICAgICB0eXBlOiBHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9DT05GSVJNQVRJT04sXG4gICAgICAgICAgfSksXG4gICAgICAgIF0pLFxuICAgICAgICBjYXRjaEVycm9yKChlcnJvcikgPT4ge1xuICAgICAgICAgIGNvbnN0IGFjdGlvbnM6IEFycmF5PFxuICAgICAgICAgICAgVXNlckFjdGlvbnMuUmVzZXRQYXNzd29yZEZhaWwgfCBHbG9iYWxNZXNzYWdlQWN0aW9ucy5BZGRNZXNzYWdlXG4gICAgICAgICAgPiA9IFtuZXcgVXNlckFjdGlvbnMuUmVzZXRQYXNzd29yZEZhaWwobWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKSldO1xuICAgICAgICAgIGlmIChlcnJvcj8uZXJyb3I/LmVycm9ycykge1xuICAgICAgICAgICAgZXJyb3IuZXJyb3IuZXJyb3JzLmZvckVhY2goKGVycikgPT4ge1xuICAgICAgICAgICAgICBpZiAoZXJyLm1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICBhY3Rpb25zLnB1c2goXG4gICAgICAgICAgICAgICAgICBuZXcgR2xvYmFsTWVzc2FnZUFjdGlvbnMuQWRkTWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IHsgcmF3OiBlcnIubWVzc2FnZSB9LFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9FUlJPUixcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBmcm9tKGFjdGlvbnMpO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSB1c2VyQWNjb3VudENvbm5lY3RvcjogVXNlckNvbm5lY3RvclxuICApIHt9XG59XG4iXX0=