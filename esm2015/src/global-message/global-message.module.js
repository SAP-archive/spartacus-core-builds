import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { errorHandlers, httpErrorInterceptors, } from './http-interceptors/index';
import { GlobalMessageStoreModule } from './store/global-message-store.module';
import { GlobalMessageEffect } from './store/effects/global-message.effect';
import { defaultGlobalMessageConfigFactory } from './config/default-global-message-config';
import { provideDefaultConfigFactory } from '../config/config-providers';
export class GlobalMessageModule {
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
                ],
                providers: [provideDefaultConfigFactory(defaultGlobalMessageConfigFactory)],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLW1lc3NhZ2UubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS9zcmMvZ2xvYmFsLW1lc3NhZ2UvZ2xvYmFsLW1lc3NhZ2UubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUMsT0FBTyxFQUNMLGFBQWEsRUFDYixxQkFBcUIsR0FDdEIsTUFBTSwyQkFBMkIsQ0FBQztBQUNuQyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUU1RSxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUMzRixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQVN6RSxNQUFNLE9BQU8sbUJBQW1CO0lBQzlCLE1BQU0sQ0FBQyxPQUFPO1FBQ1osT0FBTztZQUNMLFFBQVEsRUFBRSxtQkFBbUI7WUFDN0IsU0FBUyxFQUFFLENBQUMsR0FBRyxhQUFhLEVBQUUsR0FBRyxxQkFBcUIsQ0FBQztTQUN4RCxDQUFDO0lBQ0osQ0FBQzs7O1lBYkYsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCx3QkFBd0I7b0JBQ3hCLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO2lCQUNoRDtnQkFDRCxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO2FBQzVFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEVmZmVjdHNNb2R1bGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7XG4gIGVycm9ySGFuZGxlcnMsXG4gIGh0dHBFcnJvckludGVyY2VwdG9ycyxcbn0gZnJvbSAnLi9odHRwLWludGVyY2VwdG9ycy9pbmRleCc7XG5pbXBvcnQgeyBHbG9iYWxNZXNzYWdlU3RvcmVNb2R1bGUgfSBmcm9tICcuL3N0b3JlL2dsb2JhbC1tZXNzYWdlLXN0b3JlLm1vZHVsZSc7XG5pbXBvcnQgeyBHbG9iYWxNZXNzYWdlRWZmZWN0IH0gZnJvbSAnLi9zdG9yZS9lZmZlY3RzL2dsb2JhbC1tZXNzYWdlLmVmZmVjdCc7XG5cbmltcG9ydCB7IGRlZmF1bHRHbG9iYWxNZXNzYWdlQ29uZmlnRmFjdG9yeSB9IGZyb20gJy4vY29uZmlnL2RlZmF1bHQtZ2xvYmFsLW1lc3NhZ2UtY29uZmlnJztcbmltcG9ydCB7IHByb3ZpZGVEZWZhdWx0Q29uZmlnRmFjdG9yeSB9IGZyb20gJy4uL2NvbmZpZy9jb25maWctcHJvdmlkZXJzJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIEdsb2JhbE1lc3NhZ2VTdG9yZU1vZHVsZSxcbiAgICBFZmZlY3RzTW9kdWxlLmZvckZlYXR1cmUoW0dsb2JhbE1lc3NhZ2VFZmZlY3RdKSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbcHJvdmlkZURlZmF1bHRDb25maWdGYWN0b3J5KGRlZmF1bHRHbG9iYWxNZXNzYWdlQ29uZmlnRmFjdG9yeSldLFxufSlcbmV4cG9ydCBjbGFzcyBHbG9iYWxNZXNzYWdlTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxHbG9iYWxNZXNzYWdlTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBHbG9iYWxNZXNzYWdlTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbLi4uZXJyb3JIYW5kbGVycywgLi4uaHR0cEVycm9ySW50ZXJjZXB0b3JzXSxcbiAgICB9O1xuICB9XG59XG4iXX0=