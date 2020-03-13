var AsmModule_1;
import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { Config, provideDefaultConfig } from '../config/config.module';
import { AsmConfig } from './config/asm-config';
import { defaultAsmConfig } from './config/default-asm-config';
import { AsmStoreModule } from './store/asm-store.module';
import { interceptors } from './http-interceptors/index';
let AsmModule = AsmModule_1 = class AsmModule {
    static forRoot() {
        return {
            ngModule: AsmModule_1,
            providers: [
                { provide: AsmConfig, useExisting: Config },
                ...interceptors,
                provideDefaultConfig(defaultAsmConfig),
            ],
        };
    }
};
AsmModule = AsmModule_1 = __decorate([
    NgModule({
        imports: [CommonModule, HttpClientModule, AsmStoreModule],
    })
], AsmModule);
export { AsmModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNtLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9hc20vYXNtLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsTUFBTSxFQUFFLG9CQUFvQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDdkUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFLekQsSUFBYSxTQUFTLGlCQUF0QixNQUFhLFNBQVM7SUFDcEIsTUFBTSxDQUFDLE9BQU87UUFDWixPQUFPO1lBQ0wsUUFBUSxFQUFFLFdBQVM7WUFDbkIsU0FBUyxFQUFFO2dCQUNULEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFO2dCQUMzQyxHQUFHLFlBQVk7Z0JBQ2Ysb0JBQW9CLENBQUMsZ0JBQWdCLENBQUM7YUFDdkM7U0FDRixDQUFDO0lBQ0osQ0FBQztDQUNGLENBQUE7QUFYWSxTQUFTO0lBSHJCLFFBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxnQkFBZ0IsRUFBRSxjQUFjLENBQUM7S0FDMUQsQ0FBQztHQUNXLFNBQVMsQ0FXckI7U0FYWSxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29uZmlnLCBwcm92aWRlRGVmYXVsdENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9jb25maWcubW9kdWxlJztcbmltcG9ydCB7IEFzbUNvbmZpZyB9IGZyb20gJy4vY29uZmlnL2FzbS1jb25maWcnO1xuaW1wb3J0IHsgZGVmYXVsdEFzbUNvbmZpZyB9IGZyb20gJy4vY29uZmlnL2RlZmF1bHQtYXNtLWNvbmZpZyc7XG5pbXBvcnQgeyBBc21TdG9yZU1vZHVsZSB9IGZyb20gJy4vc3RvcmUvYXNtLXN0b3JlLm1vZHVsZSc7XG5pbXBvcnQgeyBpbnRlcmNlcHRvcnMgfSBmcm9tICcuL2h0dHAtaW50ZXJjZXB0b3JzL2luZGV4JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgSHR0cENsaWVudE1vZHVsZSwgQXNtU3RvcmVNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBBc21Nb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPEFzbU1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQXNtTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHsgcHJvdmlkZTogQXNtQ29uZmlnLCB1c2VFeGlzdGluZzogQ29uZmlnIH0sXG4gICAgICAgIC4uLmludGVyY2VwdG9ycyxcbiAgICAgICAgcHJvdmlkZURlZmF1bHRDb25maWcoZGVmYXVsdEFzbUNvbmZpZyksXG4gICAgICBdLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==