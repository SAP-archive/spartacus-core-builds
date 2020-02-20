import { __decorate, __read, __spread } from "tslib";
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { Config, ConfigModule } from '../config/config.module';
import { AsmConfig } from './config/asm-config';
import { defaultAsmConfig } from './config/default-asm-config';
import { AsmStoreModule } from './store/asm-store.module';
import { interceptors } from './http-interceptors/index';
var AsmModule = /** @class */ (function () {
    function AsmModule() {
    }
    AsmModule_1 = AsmModule;
    AsmModule.forRoot = function () {
        return {
            ngModule: AsmModule_1,
            providers: __spread([{ provide: AsmConfig, useExisting: Config }], interceptors),
        };
    };
    var AsmModule_1;
    AsmModule = AsmModule_1 = __decorate([
        NgModule({
            imports: [
                CommonModule,
                HttpClientModule,
                AsmStoreModule,
                ConfigModule.withConfig(defaultAsmConfig),
            ],
        })
    ], AsmModule);
    return AsmModule;
}());
export { AsmModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNtLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9hc20vYXNtLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDL0QsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFVekQ7SUFBQTtJQU9BLENBQUM7a0JBUFksU0FBUztJQUNiLGlCQUFPLEdBQWQ7UUFDRSxPQUFPO1lBQ0wsUUFBUSxFQUFFLFdBQVM7WUFDbkIsU0FBUyxZQUFHLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLEdBQUssWUFBWSxDQUFDO1NBQzFFLENBQUM7SUFDSixDQUFDOztJQU5VLFNBQVM7UUFSckIsUUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLFlBQVk7Z0JBQ1osZ0JBQWdCO2dCQUNoQixjQUFjO2dCQUNkLFlBQVksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUM7YUFDMUM7U0FDRixDQUFDO09BQ1csU0FBUyxDQU9yQjtJQUFELGdCQUFDO0NBQUEsQUFQRCxJQU9DO1NBUFksU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbmZpZywgQ29uZmlnTW9kdWxlIH0gZnJvbSAnLi4vY29uZmlnL2NvbmZpZy5tb2R1bGUnO1xuaW1wb3J0IHsgQXNtQ29uZmlnIH0gZnJvbSAnLi9jb25maWcvYXNtLWNvbmZpZyc7XG5pbXBvcnQgeyBkZWZhdWx0QXNtQ29uZmlnIH0gZnJvbSAnLi9jb25maWcvZGVmYXVsdC1hc20tY29uZmlnJztcbmltcG9ydCB7IEFzbVN0b3JlTW9kdWxlIH0gZnJvbSAnLi9zdG9yZS9hc20tc3RvcmUubW9kdWxlJztcbmltcG9ydCB7IGludGVyY2VwdG9ycyB9IGZyb20gJy4vaHR0cC1pbnRlcmNlcHRvcnMvaW5kZXgnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgQXNtU3RvcmVNb2R1bGUsXG4gICAgQ29uZmlnTW9kdWxlLndpdGhDb25maWcoZGVmYXVsdEFzbUNvbmZpZyksXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIEFzbU1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8QXNtTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBBc21Nb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IEFzbUNvbmZpZywgdXNlRXhpc3Rpbmc6IENvbmZpZyB9LCAuLi5pbnRlcmNlcHRvcnNdLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==