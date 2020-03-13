import { __decorate, __read, __spread } from "tslib";
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { GlobalMessageService } from './facade/global-message.service';
import { errorHandlers, httpErrorInterceptors, } from './http-interceptors/index';
import { GlobalMessageStoreModule } from './store/global-message-store.module';
import { GlobalMessageEffect } from './store/effects/global-message.effect';
import { Config, provideDefaultConfigFactory } from '../config/config.module';
import { defaultGlobalMessageConfigFactory } from './config/default-global-message-config';
import { GlobalMessageConfig } from './config/global-message-config';
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
            providers: [
                provideDefaultConfigFactory(defaultGlobalMessageConfigFactory),
                GlobalMessageService,
                { provide: GlobalMessageConfig, useExisting: Config },
            ],
        })
    ], GlobalMessageModule);
    return GlobalMessageModule;
}());
export { GlobalMessageModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLW1lc3NhZ2UubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2dsb2JhbC1tZXNzYWdlL2dsb2JhbC1tZXNzYWdlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU5QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUN2RSxPQUFPLEVBQ0wsYUFBYSxFQUNiLHFCQUFxQixHQUN0QixNQUFNLDJCQUEyQixDQUFDO0FBQ25DLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBRTVFLE9BQU8sRUFBRSxNQUFNLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RSxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUMzRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQWFyRTtJQUFBO0lBT0EsQ0FBQzs0QkFQWSxtQkFBbUI7SUFDdkIsMkJBQU8sR0FBZDtRQUNFLE9BQU87WUFDTCxRQUFRLEVBQUUscUJBQW1CO1lBQzdCLFNBQVMsV0FBTSxhQUFhLEVBQUsscUJBQXFCLENBQUM7U0FDeEQsQ0FBQztJQUNKLENBQUM7O0lBTlUsbUJBQW1CO1FBWC9CLFFBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCx3QkFBd0I7Z0JBQ3hCLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO2FBQ2hEO1lBQ0QsU0FBUyxFQUFFO2dCQUNULDJCQUEyQixDQUFDLGlDQUFpQyxDQUFDO2dCQUM5RCxvQkFBb0I7Z0JBQ3BCLEVBQUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUU7YUFDdEQ7U0FDRixDQUFDO09BQ1csbUJBQW1CLENBTy9CO0lBQUQsMEJBQUM7Q0FBQSxBQVBELElBT0M7U0FQWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRWZmZWN0c01vZHVsZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuXG5pbXBvcnQgeyBHbG9iYWxNZXNzYWdlU2VydmljZSB9IGZyb20gJy4vZmFjYWRlL2dsb2JhbC1tZXNzYWdlLnNlcnZpY2UnO1xuaW1wb3J0IHtcbiAgZXJyb3JIYW5kbGVycyxcbiAgaHR0cEVycm9ySW50ZXJjZXB0b3JzLFxufSBmcm9tICcuL2h0dHAtaW50ZXJjZXB0b3JzL2luZGV4JztcbmltcG9ydCB7IEdsb2JhbE1lc3NhZ2VTdG9yZU1vZHVsZSB9IGZyb20gJy4vc3RvcmUvZ2xvYmFsLW1lc3NhZ2Utc3RvcmUubW9kdWxlJztcbmltcG9ydCB7IEdsb2JhbE1lc3NhZ2VFZmZlY3QgfSBmcm9tICcuL3N0b3JlL2VmZmVjdHMvZ2xvYmFsLW1lc3NhZ2UuZWZmZWN0JztcblxuaW1wb3J0IHsgQ29uZmlnLCBwcm92aWRlRGVmYXVsdENvbmZpZ0ZhY3RvcnkgfSBmcm9tICcuLi9jb25maWcvY29uZmlnLm1vZHVsZSc7XG5pbXBvcnQgeyBkZWZhdWx0R2xvYmFsTWVzc2FnZUNvbmZpZ0ZhY3RvcnkgfSBmcm9tICcuL2NvbmZpZy9kZWZhdWx0LWdsb2JhbC1tZXNzYWdlLWNvbmZpZyc7XG5pbXBvcnQgeyBHbG9iYWxNZXNzYWdlQ29uZmlnIH0gZnJvbSAnLi9jb25maWcvZ2xvYmFsLW1lc3NhZ2UtY29uZmlnJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIEdsb2JhbE1lc3NhZ2VTdG9yZU1vZHVsZSxcbiAgICBFZmZlY3RzTW9kdWxlLmZvckZlYXR1cmUoW0dsb2JhbE1lc3NhZ2VFZmZlY3RdKSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgcHJvdmlkZURlZmF1bHRDb25maWdGYWN0b3J5KGRlZmF1bHRHbG9iYWxNZXNzYWdlQ29uZmlnRmFjdG9yeSksXG4gICAgR2xvYmFsTWVzc2FnZVNlcnZpY2UsXG4gICAgeyBwcm92aWRlOiBHbG9iYWxNZXNzYWdlQ29uZmlnLCB1c2VFeGlzdGluZzogQ29uZmlnIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIEdsb2JhbE1lc3NhZ2VNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPEdsb2JhbE1lc3NhZ2VNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEdsb2JhbE1lc3NhZ2VNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFsuLi5lcnJvckhhbmRsZXJzLCAuLi5odHRwRXJyb3JJbnRlcmNlcHRvcnNdLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==