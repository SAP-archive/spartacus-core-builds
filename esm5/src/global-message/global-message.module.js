import { __decorate, __read, __spread } from "tslib";
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { errorHandlers, httpErrorInterceptors, } from './http-interceptors/index';
import { GlobalMessageStoreModule } from './store/global-message-store.module';
import { GlobalMessageEffect } from './store/effects/global-message.effect';
import { provideDefaultConfigFactory } from '../config/config.module';
import { defaultGlobalMessageConfigFactory } from './config/default-global-message-config';
var GlobalMessageModule = /** @class */ (function () {
    function GlobalMessageModule() {
    }
    GlobalMessageModule_1 = GlobalMessageModule;
    GlobalMessageModule.forRoot = function () {
        return {
            ngModule: GlobalMessageModule_1,
            providers: __spread(errorHandlers, httpErrorInterceptors),
        };
    };
    var GlobalMessageModule_1;
    GlobalMessageModule = GlobalMessageModule_1 = __decorate([
        NgModule({
            imports: [
                GlobalMessageStoreModule,
                EffectsModule.forFeature([GlobalMessageEffect]),
            ],
            providers: [provideDefaultConfigFactory(defaultGlobalMessageConfigFactory)],
        })
    ], GlobalMessageModule);
    return GlobalMessageModule;
}());
export { GlobalMessageModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLW1lc3NhZ2UubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2dsb2JhbC1tZXNzYWdlL2dsb2JhbC1tZXNzYWdlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5QyxPQUFPLEVBQ0wsYUFBYSxFQUNiLHFCQUFxQixHQUN0QixNQUFNLDJCQUEyQixDQUFDO0FBQ25DLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBRTVFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBUzNGO0lBQUE7SUFPQSxDQUFDOzRCQVBZLG1CQUFtQjtJQUN2QiwyQkFBTyxHQUFkO1FBQ0UsT0FBTztZQUNMLFFBQVEsRUFBRSxxQkFBbUI7WUFDN0IsU0FBUyxXQUFNLGFBQWEsRUFBSyxxQkFBcUIsQ0FBQztTQUN4RCxDQUFDO0lBQ0osQ0FBQzs7SUFOVSxtQkFBbUI7UUFQL0IsUUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLHdCQUF3QjtnQkFDeEIsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUM7YUFDaEQ7WUFDRCxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO1NBQzVFLENBQUM7T0FDVyxtQkFBbUIsQ0FPL0I7SUFBRCwwQkFBQztDQUFBLEFBUEQsSUFPQztTQVBZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFZmZlY3RzTW9kdWxlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQge1xuICBlcnJvckhhbmRsZXJzLFxuICBodHRwRXJyb3JJbnRlcmNlcHRvcnMsXG59IGZyb20gJy4vaHR0cC1pbnRlcmNlcHRvcnMvaW5kZXgnO1xuaW1wb3J0IHsgR2xvYmFsTWVzc2FnZVN0b3JlTW9kdWxlIH0gZnJvbSAnLi9zdG9yZS9nbG9iYWwtbWVzc2FnZS1zdG9yZS5tb2R1bGUnO1xuaW1wb3J0IHsgR2xvYmFsTWVzc2FnZUVmZmVjdCB9IGZyb20gJy4vc3RvcmUvZWZmZWN0cy9nbG9iYWwtbWVzc2FnZS5lZmZlY3QnO1xuXG5pbXBvcnQgeyBwcm92aWRlRGVmYXVsdENvbmZpZ0ZhY3RvcnkgfSBmcm9tICcuLi9jb25maWcvY29uZmlnLm1vZHVsZSc7XG5pbXBvcnQgeyBkZWZhdWx0R2xvYmFsTWVzc2FnZUNvbmZpZ0ZhY3RvcnkgfSBmcm9tICcuL2NvbmZpZy9kZWZhdWx0LWdsb2JhbC1tZXNzYWdlLWNvbmZpZyc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBHbG9iYWxNZXNzYWdlU3RvcmVNb2R1bGUsXG4gICAgRWZmZWN0c01vZHVsZS5mb3JGZWF0dXJlKFtHbG9iYWxNZXNzYWdlRWZmZWN0XSksXG4gIF0sXG4gIHByb3ZpZGVyczogW3Byb3ZpZGVEZWZhdWx0Q29uZmlnRmFjdG9yeShkZWZhdWx0R2xvYmFsTWVzc2FnZUNvbmZpZ0ZhY3RvcnkpXSxcbn0pXG5leHBvcnQgY2xhc3MgR2xvYmFsTWVzc2FnZU1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8R2xvYmFsTWVzc2FnZU1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogR2xvYmFsTWVzc2FnZU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogWy4uLmVycm9ySGFuZGxlcnMsIC4uLmh0dHBFcnJvckludGVyY2VwdG9yc10sXG4gICAgfTtcbiAgfVxufVxuIl19