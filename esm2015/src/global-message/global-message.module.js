/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { GlobalMessageService } from './facade/global-message.service';
import { httpErrorInterceptors, errorHandlers, } from './http-interceptors/index';
import { GlobalMessageStoreModule } from './store/global-message-store.module';
import { GlobalMessageEffect } from './store/effects/global-message.effect';
import { Config, ConfigModule } from '../config/config.module';
import { defaultGlobalMessageConfigFactory } from './config/default-global-message-config';
import { GlobalMessageConfig } from './config/global-message-config';
export class GlobalMessageModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: GlobalMessageModule,
            providers: [...errorHandlers, ...httpErrorInterceptors],
        };
    }
}
GlobalMessageModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    GlobalMessageStoreModule,
                    EffectsModule.forFeature([GlobalMessageEffect]),
                    ConfigModule.withConfigFactory(defaultGlobalMessageConfigFactory),
                ],
                providers: [
                    GlobalMessageService,
                    { provide: GlobalMessageConfig, useExisting: Config },
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLW1lc3NhZ2UubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2dsb2JhbC1tZXNzYWdlL2dsb2JhbC1tZXNzYWdlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU5QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUN2RSxPQUFPLEVBQ0wscUJBQXFCLEVBQ3JCLGFBQWEsR0FDZCxNQUFNLDJCQUEyQixDQUFDO0FBQ25DLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBRTVFLE9BQU8sRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDM0YsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFhckUsTUFBTSxPQUFPLG1CQUFtQjs7OztJQUM5QixNQUFNLENBQUMsT0FBTztRQUNaLE9BQU87WUFDTCxRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLFNBQVMsRUFBRSxDQUFDLEdBQUcsYUFBYSxFQUFFLEdBQUcscUJBQXFCLENBQUM7U0FDeEQsQ0FBQztJQUNKLENBQUM7OztZQWpCRixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLHdCQUF3QjtvQkFDeEIsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUM7b0JBQy9DLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxpQ0FBaUMsQ0FBQztpQkFDbEU7Z0JBQ0QsU0FBUyxFQUFFO29CQUNULG9CQUFvQjtvQkFDcEIsRUFBRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRTtpQkFDdEQ7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFZmZlY3RzTW9kdWxlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5cbmltcG9ydCB7IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAnLi9mYWNhZGUvZ2xvYmFsLW1lc3NhZ2Uuc2VydmljZSc7XG5pbXBvcnQge1xuICBodHRwRXJyb3JJbnRlcmNlcHRvcnMsXG4gIGVycm9ySGFuZGxlcnMsXG59IGZyb20gJy4vaHR0cC1pbnRlcmNlcHRvcnMvaW5kZXgnO1xuaW1wb3J0IHsgR2xvYmFsTWVzc2FnZVN0b3JlTW9kdWxlIH0gZnJvbSAnLi9zdG9yZS9nbG9iYWwtbWVzc2FnZS1zdG9yZS5tb2R1bGUnO1xuaW1wb3J0IHsgR2xvYmFsTWVzc2FnZUVmZmVjdCB9IGZyb20gJy4vc3RvcmUvZWZmZWN0cy9nbG9iYWwtbWVzc2FnZS5lZmZlY3QnO1xuXG5pbXBvcnQgeyBDb25maWcsIENvbmZpZ01vZHVsZSB9IGZyb20gJy4uL2NvbmZpZy9jb25maWcubW9kdWxlJztcbmltcG9ydCB7IGRlZmF1bHRHbG9iYWxNZXNzYWdlQ29uZmlnRmFjdG9yeSB9IGZyb20gJy4vY29uZmlnL2RlZmF1bHQtZ2xvYmFsLW1lc3NhZ2UtY29uZmlnJztcbmltcG9ydCB7IEdsb2JhbE1lc3NhZ2VDb25maWcgfSBmcm9tICcuL2NvbmZpZy9nbG9iYWwtbWVzc2FnZS1jb25maWcnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgR2xvYmFsTWVzc2FnZVN0b3JlTW9kdWxlLFxuICAgIEVmZmVjdHNNb2R1bGUuZm9yRmVhdHVyZShbR2xvYmFsTWVzc2FnZUVmZmVjdF0pLFxuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnRmFjdG9yeShkZWZhdWx0R2xvYmFsTWVzc2FnZUNvbmZpZ0ZhY3RvcnkpLFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgICB7IHByb3ZpZGU6IEdsb2JhbE1lc3NhZ2VDb25maWcsIHVzZUV4aXN0aW5nOiBDb25maWcgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgR2xvYmFsTWVzc2FnZU1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8R2xvYmFsTWVzc2FnZU1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogR2xvYmFsTWVzc2FnZU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogWy4uLmVycm9ySGFuZGxlcnMsIC4uLmh0dHBFcnJvckludGVyY2VwdG9yc10sXG4gICAgfTtcbiAgfVxufVxuIl19