/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { reducerToken, reducerProvider } from './reducers/index';
import { GLOBAL_MESSAGE_FEATURE } from './global-message-state';
import { StateModule } from '../../state/state.module';
export class GlobalMessageStoreModule {
}
GlobalMessageStoreModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    StateModule,
                    StoreModule.forFeature(GLOBAL_MESSAGE_FEATURE, reducerToken),
                ],
                providers: [reducerProvider],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLW1lc3NhZ2Utc3RvcmUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2dsb2JhbC1tZXNzYWdlL3N0b3JlL2dsb2JhbC1tZXNzYWdlLXN0b3JlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRTFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDaEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBU3ZELE1BQU0sT0FBTyx3QkFBd0I7OztZQVBwQyxRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFdBQVc7b0JBQ1gsV0FBVyxDQUFDLFVBQVUsQ0FBQyxzQkFBc0IsRUFBRSxZQUFZLENBQUM7aUJBQzdEO2dCQUNELFNBQVMsRUFBRSxDQUFDLGVBQWUsQ0FBQzthQUM3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdG9yZU1vZHVsZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcblxuaW1wb3J0IHsgcmVkdWNlclRva2VuLCByZWR1Y2VyUHJvdmlkZXIgfSBmcm9tICcuL3JlZHVjZXJzL2luZGV4JztcbmltcG9ydCB7IEdMT0JBTF9NRVNTQUdFX0ZFQVRVUkUgfSBmcm9tICcuL2dsb2JhbC1tZXNzYWdlLXN0YXRlJztcbmltcG9ydCB7IFN0YXRlTW9kdWxlIH0gZnJvbSAnLi4vLi4vc3RhdGUvc3RhdGUubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIFN0YXRlTW9kdWxlLFxuICAgIFN0b3JlTW9kdWxlLmZvckZlYXR1cmUoR0xPQkFMX01FU1NBR0VfRkVBVFVSRSwgcmVkdWNlclRva2VuKSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbcmVkdWNlclByb3ZpZGVyXSxcbn0pXG5leHBvcnQgY2xhc3MgR2xvYmFsTWVzc2FnZVN0b3JlTW9kdWxlIHt9XG4iXX0=