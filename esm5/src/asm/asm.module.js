import { __decorate, __read, __spread } from "tslib";
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { Config, provideDefaultConfig } from '../config/config.module';
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
            providers: __spread([
                { provide: AsmConfig, useExisting: Config }
            ], interceptors, [
                provideDefaultConfig(defaultAsmConfig),
            ]),
        };
    };
    var AsmModule_1;
    AsmModule = AsmModule_1 = __decorate([
        NgModule({
            imports: [CommonModule, HttpClientModule, AsmStoreModule],
        })
    ], AsmModule);
    return AsmModule;
}());
export { AsmModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNtLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9hc20vYXNtLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxNQUFNLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDaEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzFELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUt6RDtJQUFBO0lBV0EsQ0FBQztrQkFYWSxTQUFTO0lBQ2IsaUJBQU8sR0FBZDtRQUNFLE9BQU87WUFDTCxRQUFRLEVBQUUsV0FBUztZQUNuQixTQUFTO2dCQUNQLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFO2VBQ3hDLFlBQVk7Z0JBQ2Ysb0JBQW9CLENBQUMsZ0JBQWdCLENBQUM7Y0FDdkM7U0FDRixDQUFDO0lBQ0osQ0FBQzs7SUFWVSxTQUFTO1FBSHJCLFFBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxnQkFBZ0IsRUFBRSxjQUFjLENBQUM7U0FDMUQsQ0FBQztPQUNXLFNBQVMsQ0FXckI7SUFBRCxnQkFBQztDQUFBLEFBWEQsSUFXQztTQVhZLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb25maWcsIHByb3ZpZGVEZWZhdWx0Q29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL2NvbmZpZy5tb2R1bGUnO1xuaW1wb3J0IHsgQXNtQ29uZmlnIH0gZnJvbSAnLi9jb25maWcvYXNtLWNvbmZpZyc7XG5pbXBvcnQgeyBkZWZhdWx0QXNtQ29uZmlnIH0gZnJvbSAnLi9jb25maWcvZGVmYXVsdC1hc20tY29uZmlnJztcbmltcG9ydCB7IEFzbVN0b3JlTW9kdWxlIH0gZnJvbSAnLi9zdG9yZS9hc20tc3RvcmUubW9kdWxlJztcbmltcG9ydCB7IGludGVyY2VwdG9ycyB9IGZyb20gJy4vaHR0cC1pbnRlcmNlcHRvcnMvaW5kZXgnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBIdHRwQ2xpZW50TW9kdWxlLCBBc21TdG9yZU1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIEFzbU1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8QXNtTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBBc21Nb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgeyBwcm92aWRlOiBBc21Db25maWcsIHVzZUV4aXN0aW5nOiBDb25maWcgfSxcbiAgICAgICAgLi4uaW50ZXJjZXB0b3JzLFxuICAgICAgICBwcm92aWRlRGVmYXVsdENvbmZpZyhkZWZhdWx0QXNtQ29uZmlnKSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl19