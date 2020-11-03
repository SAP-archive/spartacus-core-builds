import { CommonModule } from '@angular/common';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { AuthService } from '../auth/user-auth/facade/auth.service';
import { AuthHeaderService } from '../auth/user-auth/services/auth-header.service';
import { AuthStorageService } from '../auth/user-auth/services/auth-storage.service';
import { provideDefaultConfig } from '../config/config-providers';
import { defaultAsmConfig } from './config/default-asm-config';
import { AsmAuthStorageService } from './services/asm-auth-storage.service';
import { AsmAuthHeaderService } from './services/asm-auth.header.service';
import { AsmAuthService } from './services/asm-auth.service';
import { AsmStatePersistenceService } from './services/asm-state-persistence.service';
import { AsmStoreModule } from './store/asm-store.module';
export function asmStatePersistenceFactory(asmStatePersistenceService) {
    const result = () => asmStatePersistenceService.initSync();
    return result;
}
export class AsmModule {
    static forRoot() {
        return {
            ngModule: AsmModule,
            providers: [
                provideDefaultConfig(defaultAsmConfig),
                {
                    provide: AuthStorageService,
                    useExisting: AsmAuthStorageService,
                },
                {
                    provide: AuthService,
                    useExisting: AsmAuthService,
                },
                {
                    provide: AuthHeaderService,
                    useExisting: AsmAuthHeaderService,
                },
                {
                    provide: APP_INITIALIZER,
                    useFactory: asmStatePersistenceFactory,
                    deps: [AsmStatePersistenceService],
                    multi: true,
                },
            ],
        };
    }
}
AsmModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, AsmStoreModule],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNtLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL2FzbS9hc20ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZUFBZSxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ25GLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUN0RixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFMUQsTUFBTSxVQUFVLDBCQUEwQixDQUN4QywwQkFBc0Q7SUFFdEQsTUFBTSxNQUFNLEdBQUcsR0FBRyxFQUFFLENBQUMsMEJBQTBCLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDM0QsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQztBQUtELE1BQU0sT0FBTyxTQUFTO0lBQ3BCLE1BQU0sQ0FBQyxPQUFPO1FBQ1osT0FBTztZQUNMLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFNBQVMsRUFBRTtnQkFDVCxvQkFBb0IsQ0FBQyxnQkFBZ0IsQ0FBQztnQkFDdEM7b0JBQ0UsT0FBTyxFQUFFLGtCQUFrQjtvQkFDM0IsV0FBVyxFQUFFLHFCQUFxQjtpQkFDbkM7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLFdBQVc7b0JBQ3BCLFdBQVcsRUFBRSxjQUFjO2lCQUM1QjtnQkFDRDtvQkFDRSxPQUFPLEVBQUUsaUJBQWlCO29CQUMxQixXQUFXLEVBQUUsb0JBQW9CO2lCQUNsQztnQkFDRDtvQkFDRSxPQUFPLEVBQUUsZUFBZTtvQkFDeEIsVUFBVSxFQUFFLDBCQUEwQjtvQkFDdEMsSUFBSSxFQUFFLENBQUMsMEJBQTBCLENBQUM7b0JBQ2xDLEtBQUssRUFBRSxJQUFJO2lCQUNaO2FBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQzs7O1lBN0JGLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsY0FBYyxDQUFDO2FBQ3hDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEFQUF9JTklUSUFMSVpFUiwgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vYXV0aC91c2VyLWF1dGgvZmFjYWRlL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoSGVhZGVyU2VydmljZSB9IGZyb20gJy4uL2F1dGgvdXNlci1hdXRoL3NlcnZpY2VzL2F1dGgtaGVhZGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXV0aFN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vYXV0aC91c2VyLWF1dGgvc2VydmljZXMvYXV0aC1zdG9yYWdlLnNlcnZpY2UnO1xuaW1wb3J0IHsgcHJvdmlkZURlZmF1bHRDb25maWcgfSBmcm9tICcuLi9jb25maWcvY29uZmlnLXByb3ZpZGVycyc7XG5pbXBvcnQgeyBkZWZhdWx0QXNtQ29uZmlnIH0gZnJvbSAnLi9jb25maWcvZGVmYXVsdC1hc20tY29uZmlnJztcbmltcG9ydCB7IEFzbUF1dGhTdG9yYWdlU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvYXNtLWF1dGgtc3RvcmFnZS5zZXJ2aWNlJztcbmltcG9ydCB7IEFzbUF1dGhIZWFkZXJTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9hc20tYXV0aC5oZWFkZXIuc2VydmljZSc7XG5pbXBvcnQgeyBBc21BdXRoU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvYXNtLWF1dGguc2VydmljZSc7XG5pbXBvcnQgeyBBc21TdGF0ZVBlcnNpc3RlbmNlU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvYXNtLXN0YXRlLXBlcnNpc3RlbmNlLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXNtU3RvcmVNb2R1bGUgfSBmcm9tICcuL3N0b3JlL2FzbS1zdG9yZS5tb2R1bGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gYXNtU3RhdGVQZXJzaXN0ZW5jZUZhY3RvcnkoXG4gIGFzbVN0YXRlUGVyc2lzdGVuY2VTZXJ2aWNlOiBBc21TdGF0ZVBlcnNpc3RlbmNlU2VydmljZVxuKSB7XG4gIGNvbnN0IHJlc3VsdCA9ICgpID0+IGFzbVN0YXRlUGVyc2lzdGVuY2VTZXJ2aWNlLmluaXRTeW5jKCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEFzbVN0b3JlTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgQXNtTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxBc21Nb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEFzbU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICBwcm92aWRlRGVmYXVsdENvbmZpZyhkZWZhdWx0QXNtQ29uZmlnKSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IEF1dGhTdG9yYWdlU2VydmljZSxcbiAgICAgICAgICB1c2VFeGlzdGluZzogQXNtQXV0aFN0b3JhZ2VTZXJ2aWNlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogQXV0aFNlcnZpY2UsXG4gICAgICAgICAgdXNlRXhpc3Rpbmc6IEFzbUF1dGhTZXJ2aWNlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogQXV0aEhlYWRlclNlcnZpY2UsXG4gICAgICAgICAgdXNlRXhpc3Rpbmc6IEFzbUF1dGhIZWFkZXJTZXJ2aWNlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogQVBQX0lOSVRJQUxJWkVSLFxuICAgICAgICAgIHVzZUZhY3Rvcnk6IGFzbVN0YXRlUGVyc2lzdGVuY2VGYWN0b3J5LFxuICAgICAgICAgIGRlcHM6IFtBc21TdGF0ZVBlcnNpc3RlbmNlU2VydmljZV0sXG4gICAgICAgICAgbXVsdGk6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==