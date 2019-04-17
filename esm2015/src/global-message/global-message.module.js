/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { GlobalMessageService } from './facade/global-message.service';
import { httpErrorInterceptors, errorHandlers, } from './http-interceptors/index';
import { GlobalMessageStoreModule } from './store/global-message-store.module';
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
                imports: [GlobalMessageStoreModule],
                providers: [GlobalMessageService],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLW1lc3NhZ2UubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2dsb2JhbC1tZXNzYWdlL2dsb2JhbC1tZXNzYWdlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDdkUsT0FBTyxFQUNMLHFCQUFxQixFQUNyQixhQUFhLEdBQ2QsTUFBTSwyQkFBMkIsQ0FBQztBQUNuQyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQU0vRSxNQUFNLE9BQU8sbUJBQW1COzs7O0lBQzlCLE1BQU0sQ0FBQyxPQUFPO1FBQ1osT0FBTztZQUNMLFFBQVEsRUFBRSxtQkFBbUI7WUFDN0IsU0FBUyxFQUFFLENBQUMsR0FBRyxhQUFhLEVBQUUsR0FBRyxxQkFBcUIsQ0FBQztTQUN4RCxDQUFDO0lBQ0osQ0FBQzs7O1lBVkYsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLHdCQUF3QixDQUFDO2dCQUNuQyxTQUFTLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQzthQUNsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAnLi9mYWNhZGUvZ2xvYmFsLW1lc3NhZ2Uuc2VydmljZSc7XG5pbXBvcnQge1xuICBodHRwRXJyb3JJbnRlcmNlcHRvcnMsXG4gIGVycm9ySGFuZGxlcnMsXG59IGZyb20gJy4vaHR0cC1pbnRlcmNlcHRvcnMvaW5kZXgnO1xuaW1wb3J0IHsgR2xvYmFsTWVzc2FnZVN0b3JlTW9kdWxlIH0gZnJvbSAnLi9zdG9yZS9nbG9iYWwtbWVzc2FnZS1zdG9yZS5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbR2xvYmFsTWVzc2FnZVN0b3JlTW9kdWxlXSxcbiAgcHJvdmlkZXJzOiBbR2xvYmFsTWVzc2FnZVNlcnZpY2VdLFxufSlcbmV4cG9ydCBjbGFzcyBHbG9iYWxNZXNzYWdlTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBHbG9iYWxNZXNzYWdlTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbLi4uZXJyb3JIYW5kbGVycywgLi4uaHR0cEVycm9ySW50ZXJjZXB0b3JzXSxcbiAgICB9O1xuICB9XG59XG4iXX0=