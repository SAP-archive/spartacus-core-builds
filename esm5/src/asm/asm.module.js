import { __decorate, __read, __spread } from "tslib";
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { provideDefaultConfig } from '../config/config.module';
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
            providers: __spread(interceptors, [provideDefaultConfig(defaultAsmConfig)]),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNtLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9hc20vYXNtLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFLekQ7SUFBQTtJQU9BLENBQUM7a0JBUFksU0FBUztJQUNiLGlCQUFPLEdBQWQ7UUFDRSxPQUFPO1lBQ0wsUUFBUSxFQUFFLFdBQVM7WUFDbkIsU0FBUyxXQUFNLFlBQVksR0FBRSxvQkFBb0IsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFDO1NBQ3JFLENBQUM7SUFDSixDQUFDOztJQU5VLFNBQVM7UUFIckIsUUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGdCQUFnQixFQUFFLGNBQWMsQ0FBQztTQUMxRCxDQUFDO09BQ1csU0FBUyxDQU9yQjtJQUFELGdCQUFDO0NBQUEsQUFQRCxJQU9DO1NBUFksU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHByb3ZpZGVEZWZhdWx0Q29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL2NvbmZpZy5tb2R1bGUnO1xuaW1wb3J0IHsgZGVmYXVsdEFzbUNvbmZpZyB9IGZyb20gJy4vY29uZmlnL2RlZmF1bHQtYXNtLWNvbmZpZyc7XG5pbXBvcnQgeyBBc21TdG9yZU1vZHVsZSB9IGZyb20gJy4vc3RvcmUvYXNtLXN0b3JlLm1vZHVsZSc7XG5pbXBvcnQgeyBpbnRlcmNlcHRvcnMgfSBmcm9tICcuL2h0dHAtaW50ZXJjZXB0b3JzL2luZGV4JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgSHR0cENsaWVudE1vZHVsZSwgQXNtU3RvcmVNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBBc21Nb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPEFzbU1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQXNtTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbLi4uaW50ZXJjZXB0b3JzLCBwcm92aWRlRGVmYXVsdENvbmZpZyhkZWZhdWx0QXNtQ29uZmlnKV0sXG4gICAgfTtcbiAgfVxufVxuIl19