/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { Config, ConfigModule } from '../config/config.module';
import { AsmConfig } from './config/asm-config';
import { defaultAsmConfig } from './config/default-asm-config';
import { AsmStoreModule } from './store/asm-store.module';
import { interceptors } from './http-interceptors/index';
export class AsmModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: AsmModule,
            providers: [{ provide: AsmConfig, useExisting: Config }, ...interceptors],
        };
    }
}
AsmModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    HttpClientModule,
                    AsmStoreModule,
                    ConfigModule.withConfig(defaultAsmConfig),
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNtLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9hc20vYXNtLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDL0QsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFVekQsTUFBTSxPQUFPLFNBQVM7Ozs7SUFDcEIsTUFBTSxDQUFDLE9BQU87UUFDWixPQUFPO1lBQ0wsUUFBUSxFQUFFLFNBQVM7WUFDbkIsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsRUFBRSxHQUFHLFlBQVksQ0FBQztTQUMxRSxDQUFDO0lBQ0osQ0FBQzs7O1lBZEYsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLGdCQUFnQjtvQkFDaEIsY0FBYztvQkFDZCxZQUFZLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDO2lCQUMxQzthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29uZmlnLCBDb25maWdNb2R1bGUgfSBmcm9tICcuLi9jb25maWcvY29uZmlnLm1vZHVsZSc7XG5pbXBvcnQgeyBBc21Db25maWcgfSBmcm9tICcuL2NvbmZpZy9hc20tY29uZmlnJztcbmltcG9ydCB7IGRlZmF1bHRBc21Db25maWcgfSBmcm9tICcuL2NvbmZpZy9kZWZhdWx0LWFzbS1jb25maWcnO1xuaW1wb3J0IHsgQXNtU3RvcmVNb2R1bGUgfSBmcm9tICcuL3N0b3JlL2FzbS1zdG9yZS5tb2R1bGUnO1xuaW1wb3J0IHsgaW50ZXJjZXB0b3JzIH0gZnJvbSAnLi9odHRwLWludGVyY2VwdG9ycy9pbmRleCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBBc21TdG9yZU1vZHVsZSxcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZyhkZWZhdWx0QXNtQ29uZmlnKSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQXNtTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxBc21Nb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEFzbU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW3sgcHJvdmlkZTogQXNtQ29uZmlnLCB1c2VFeGlzdGluZzogQ29uZmlnIH0sIC4uLmludGVyY2VwdG9yc10sXG4gICAgfTtcbiAgfVxufVxuIl19