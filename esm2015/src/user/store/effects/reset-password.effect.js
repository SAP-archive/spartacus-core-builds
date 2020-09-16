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
export class ResetPasswordEffects {
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
}
ResetPasswordEffects.decorators = [
    { type: Injectable }
];
ResetPasswordEffects.ctorParameters = () => [
    { type: Actions },
    { type: UserConnector }
];
__decorate([
    Effect()
], ResetPasswordEffects.prototype, "resetPassword$", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzZXQtcGFzc3dvcmQuZWZmZWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS9zcmMvdXNlci9zdG9yZS9lZmZlY3RzL3Jlc2V0LXBhc3N3b3JkLmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLElBQUksRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUN4QyxPQUFPLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUN4RixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNuRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDckUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRy9DLE1BQU0sT0FBTyxvQkFBb0I7SUF3Qy9CLFlBQ1UsUUFBaUIsRUFDakIsb0JBQW1DO1FBRG5DLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFlO1FBeEM3QyxtQkFBYyxHQUlWLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxFQUNsQyxHQUFHLENBQUMsQ0FBQyxNQUFpQyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQzFELFNBQVMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUU7WUFDaEMsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQ2xFLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztnQkFDZCxJQUFJLFdBQVcsQ0FBQyxvQkFBb0IsRUFBRTtnQkFDdEMsSUFBSSxvQkFBb0IsQ0FBQyxVQUFVLENBQUM7b0JBQ2xDLElBQUksRUFBRSxFQUFFLEdBQUcsRUFBRSx3Q0FBd0MsRUFBRTtvQkFDdkQsSUFBSSxFQUFFLGlCQUFpQixDQUFDLHFCQUFxQjtpQkFDOUMsQ0FBQzthQUNILENBQUMsRUFDRixVQUFVLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTs7Z0JBQ25CLE1BQU0sT0FBTyxHQUVULENBQUMsSUFBSSxXQUFXLENBQUMsaUJBQWlCLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN0RSxVQUFJLEtBQUssYUFBTCxLQUFLLHVCQUFMLEtBQUssQ0FBRSxLQUFLLDBDQUFFLE1BQU0sRUFBRTtvQkFDeEIsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7d0JBQ2pDLElBQUksR0FBRyxDQUFDLE9BQU8sRUFBRTs0QkFDZixPQUFPLENBQUMsSUFBSSxDQUNWLElBQUksb0JBQW9CLENBQUMsVUFBVSxDQUFDO2dDQUNsQyxJQUFJLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLE9BQU8sRUFBRTtnQ0FDMUIsSUFBSSxFQUFFLGlCQUFpQixDQUFDLGNBQWM7NkJBQ3ZDLENBQUMsQ0FDSCxDQUFDO3lCQUNIO29CQUNILENBQUMsQ0FBQyxDQUFDO2lCQUNKO2dCQUNELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3ZCLENBQUMsQ0FBQyxDQUNILENBQUM7UUFDSixDQUFDLENBQUMsQ0FDSCxDQUFDO0lBS0MsQ0FBQzs7O1lBNUNMLFVBQVU7OztZQVRGLE9BQU87WUFNUCxhQUFhOztBQU1wQjtJQURDLE1BQU0sRUFBRTs0REFxQ1AiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgZnJvbSwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBHbG9iYWxNZXNzYWdlVHlwZSB9IGZyb20gJy4uLy4uLy4uL2dsb2JhbC1tZXNzYWdlL21vZGVscy9nbG9iYWwtbWVzc2FnZS5tb2RlbCc7XG5pbXBvcnQgeyBHbG9iYWxNZXNzYWdlQWN0aW9ucyB9IGZyb20gJy4uLy4uLy4uL2dsb2JhbC1tZXNzYWdlL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgbWFrZUVycm9yU2VyaWFsaXphYmxlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9zZXJpYWxpemF0aW9uLXV0aWxzJztcbmltcG9ydCB7IFVzZXJDb25uZWN0b3IgfSBmcm9tICcuLi8uLi9jb25uZWN0b3JzL3VzZXIvdXNlci5jb25uZWN0b3InO1xuaW1wb3J0IHsgVXNlckFjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFJlc2V0UGFzc3dvcmRFZmZlY3RzIHtcbiAgQEVmZmVjdCgpXG4gIHJlc2V0UGFzc3dvcmQkOiBPYnNlcnZhYmxlPFxuICAgIHwgVXNlckFjdGlvbnMuUmVzZXRQYXNzd29yZFN1Y2Nlc3NcbiAgICB8IEdsb2JhbE1lc3NhZ2VBY3Rpb25zLkFkZE1lc3NhZ2VcbiAgICB8IFVzZXJBY3Rpb25zLlJlc2V0UGFzc3dvcmRGYWlsXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFVzZXJBY3Rpb25zLlJFU0VUX1BBU1NXT1JEKSxcbiAgICBtYXAoKGFjdGlvbjogVXNlckFjdGlvbnMuUmVzZXRQYXNzd29yZCkgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIHN3aXRjaE1hcCgoeyB0b2tlbiwgcGFzc3dvcmQgfSkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMudXNlckFjY291bnRDb25uZWN0b3IucmVzZXRQYXNzd29yZCh0b2tlbiwgcGFzc3dvcmQpLnBpcGUoXG4gICAgICAgIHN3aXRjaE1hcCgoKSA9PiBbXG4gICAgICAgICAgbmV3IFVzZXJBY3Rpb25zLlJlc2V0UGFzc3dvcmRTdWNjZXNzKCksXG4gICAgICAgICAgbmV3IEdsb2JhbE1lc3NhZ2VBY3Rpb25zLkFkZE1lc3NhZ2Uoe1xuICAgICAgICAgICAgdGV4dDogeyBrZXk6ICdmb3Jnb3R0ZW5QYXNzd29yZC5wYXNzd29yZFJlc2V0U3VjY2VzcycgfSxcbiAgICAgICAgICAgIHR5cGU6IEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0NPTkZJUk1BVElPTixcbiAgICAgICAgICB9KSxcbiAgICAgICAgXSksXG4gICAgICAgIGNhdGNoRXJyb3IoKGVycm9yKSA9PiB7XG4gICAgICAgICAgY29uc3QgYWN0aW9uczogQXJyYXk8XG4gICAgICAgICAgICBVc2VyQWN0aW9ucy5SZXNldFBhc3N3b3JkRmFpbCB8IEdsb2JhbE1lc3NhZ2VBY3Rpb25zLkFkZE1lc3NhZ2VcbiAgICAgICAgICA+ID0gW25ldyBVc2VyQWN0aW9ucy5SZXNldFBhc3N3b3JkRmFpbChtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpKV07XG4gICAgICAgICAgaWYgKGVycm9yPy5lcnJvcj8uZXJyb3JzKSB7XG4gICAgICAgICAgICBlcnJvci5lcnJvci5lcnJvcnMuZm9yRWFjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChlcnIubWVzc2FnZSkge1xuICAgICAgICAgICAgICAgIGFjdGlvbnMucHVzaChcbiAgICAgICAgICAgICAgICAgIG5ldyBHbG9iYWxNZXNzYWdlQWN0aW9ucy5BZGRNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogeyByYXc6IGVyci5tZXNzYWdlIH0sXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0VSUk9SLFxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGZyb20oYWN0aW9ucyk7XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIHVzZXJBY2NvdW50Q29ubmVjdG9yOiBVc2VyQ29ubmVjdG9yXG4gICkge31cbn1cbiJdfQ==