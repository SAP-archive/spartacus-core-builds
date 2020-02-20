var AsmModule_1;
import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { Config, ConfigModule } from '../config/config.module';
import { AsmConfig } from './config/asm-config';
import { defaultAsmConfig } from './config/default-asm-config';
import { AsmStoreModule } from './store/asm-store.module';
import { interceptors } from './http-interceptors/index';
let AsmModule = AsmModule_1 = class AsmModule {
    static forRoot() {
        return {
            ngModule: AsmModule_1,
            providers: [{ provide: AsmConfig, useExisting: Config }, ...interceptors],
        };
    }
};
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
export { AsmModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNtLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9hc20vYXNtLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBVXpELElBQWEsU0FBUyxpQkFBdEIsTUFBYSxTQUFTO0lBQ3BCLE1BQU0sQ0FBQyxPQUFPO1FBQ1osT0FBTztZQUNMLFFBQVEsRUFBRSxXQUFTO1lBQ25CLFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLEVBQUUsR0FBRyxZQUFZLENBQUM7U0FDMUUsQ0FBQztJQUNKLENBQUM7Q0FDRixDQUFBO0FBUFksU0FBUztJQVJyQixRQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCxZQUFZO1lBQ1osZ0JBQWdCO1lBQ2hCLGNBQWM7WUFDZCxZQUFZLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDO1NBQzFDO0tBQ0YsQ0FBQztHQUNXLFNBQVMsQ0FPckI7U0FQWSxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29uZmlnLCBDb25maWdNb2R1bGUgfSBmcm9tICcuLi9jb25maWcvY29uZmlnLm1vZHVsZSc7XG5pbXBvcnQgeyBBc21Db25maWcgfSBmcm9tICcuL2NvbmZpZy9hc20tY29uZmlnJztcbmltcG9ydCB7IGRlZmF1bHRBc21Db25maWcgfSBmcm9tICcuL2NvbmZpZy9kZWZhdWx0LWFzbS1jb25maWcnO1xuaW1wb3J0IHsgQXNtU3RvcmVNb2R1bGUgfSBmcm9tICcuL3N0b3JlL2FzbS1zdG9yZS5tb2R1bGUnO1xuaW1wb3J0IHsgaW50ZXJjZXB0b3JzIH0gZnJvbSAnLi9odHRwLWludGVyY2VwdG9ycy9pbmRleCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBBc21TdG9yZU1vZHVsZSxcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZyhkZWZhdWx0QXNtQ29uZmlnKSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQXNtTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxBc21Nb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEFzbU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW3sgcHJvdmlkZTogQXNtQ29uZmlnLCB1c2VFeGlzdGluZzogQ29uZmlnIH0sIC4uLmludGVyY2VwdG9yc10sXG4gICAgfTtcbiAgfVxufVxuIl19