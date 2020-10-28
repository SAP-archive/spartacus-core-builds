import { CommonModule } from '@angular/common';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { AuthHeaderService } from '../auth/user-auth/services/auth-header.service';
import { AuthStorageService } from '../auth/user-auth/services/auth-storage.service';
import { BasicAuthService } from '../auth/user-auth/services/basic-auth.service';
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
                    provide: BasicAuthService,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNtLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL2FzbS9hc20ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZUFBZSxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDbkYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDckYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDakYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDL0QsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDNUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDMUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzdELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUUxRCxNQUFNLFVBQVUsMEJBQTBCLENBQ3hDLDBCQUFzRDtJQUV0RCxNQUFNLE1BQU0sR0FBRyxHQUFHLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMzRCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDO0FBS0QsTUFBTSxPQUFPLFNBQVM7SUFDcEIsTUFBTSxDQUFDLE9BQU87UUFDWixPQUFPO1lBQ0wsUUFBUSxFQUFFLFNBQVM7WUFDbkIsU0FBUyxFQUFFO2dCQUNULG9CQUFvQixDQUFDLGdCQUFnQixDQUFDO2dCQUN0QztvQkFDRSxPQUFPLEVBQUUsa0JBQWtCO29CQUMzQixXQUFXLEVBQUUscUJBQXFCO2lCQUNuQztnQkFDRDtvQkFDRSxPQUFPLEVBQUUsZ0JBQWdCO29CQUN6QixXQUFXLEVBQUUsY0FBYztpQkFDNUI7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjtvQkFDMUIsV0FBVyxFQUFFLG9CQUFvQjtpQkFDbEM7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLGVBQWU7b0JBQ3hCLFVBQVUsRUFBRSwwQkFBMEI7b0JBQ3RDLElBQUksRUFBRSxDQUFDLDBCQUEwQixDQUFDO29CQUNsQyxLQUFLLEVBQUUsSUFBSTtpQkFDWjthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7OztZQTdCRixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGNBQWMsQ0FBQzthQUN4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBBUFBfSU5JVElBTElaRVIsIE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBdXRoSGVhZGVyU2VydmljZSB9IGZyb20gJy4uL2F1dGgvdXNlci1hdXRoL3NlcnZpY2VzL2F1dGgtaGVhZGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXV0aFN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vYXV0aC91c2VyLWF1dGgvc2VydmljZXMvYXV0aC1zdG9yYWdlLnNlcnZpY2UnO1xuaW1wb3J0IHsgQmFzaWNBdXRoU2VydmljZSB9IGZyb20gJy4uL2F1dGgvdXNlci1hdXRoL3NlcnZpY2VzL2Jhc2ljLWF1dGguc2VydmljZSc7XG5pbXBvcnQgeyBwcm92aWRlRGVmYXVsdENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9jb25maWctcHJvdmlkZXJzJztcbmltcG9ydCB7IGRlZmF1bHRBc21Db25maWcgfSBmcm9tICcuL2NvbmZpZy9kZWZhdWx0LWFzbS1jb25maWcnO1xuaW1wb3J0IHsgQXNtQXV0aFN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9hc20tYXV0aC1zdG9yYWdlLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXNtQXV0aEhlYWRlclNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2FzbS1hdXRoLmhlYWRlci5zZXJ2aWNlJztcbmltcG9ydCB7IEFzbUF1dGhTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9hc20tYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IEFzbVN0YXRlUGVyc2lzdGVuY2VTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9hc20tc3RhdGUtcGVyc2lzdGVuY2Uuc2VydmljZSc7XG5pbXBvcnQgeyBBc21TdG9yZU1vZHVsZSB9IGZyb20gJy4vc3RvcmUvYXNtLXN0b3JlLm1vZHVsZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBhc21TdGF0ZVBlcnNpc3RlbmNlRmFjdG9yeShcbiAgYXNtU3RhdGVQZXJzaXN0ZW5jZVNlcnZpY2U6IEFzbVN0YXRlUGVyc2lzdGVuY2VTZXJ2aWNlXG4pIHtcbiAgY29uc3QgcmVzdWx0ID0gKCkgPT4gYXNtU3RhdGVQZXJzaXN0ZW5jZVNlcnZpY2UuaW5pdFN5bmMoKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgQXNtU3RvcmVNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBBc21Nb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPEFzbU1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQXNtTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHByb3ZpZGVEZWZhdWx0Q29uZmlnKGRlZmF1bHRBc21Db25maWcpLFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogQXV0aFN0b3JhZ2VTZXJ2aWNlLFxuICAgICAgICAgIHVzZUV4aXN0aW5nOiBBc21BdXRoU3RvcmFnZVNlcnZpY2UsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBCYXNpY0F1dGhTZXJ2aWNlLFxuICAgICAgICAgIHVzZUV4aXN0aW5nOiBBc21BdXRoU2VydmljZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IEF1dGhIZWFkZXJTZXJ2aWNlLFxuICAgICAgICAgIHVzZUV4aXN0aW5nOiBBc21BdXRoSGVhZGVyU2VydmljZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IEFQUF9JTklUSUFMSVpFUixcbiAgICAgICAgICB1c2VGYWN0b3J5OiBhc21TdGF0ZVBlcnNpc3RlbmNlRmFjdG9yeSxcbiAgICAgICAgICBkZXBzOiBbQXNtU3RhdGVQZXJzaXN0ZW5jZVNlcnZpY2VdLFxuICAgICAgICAgIG11bHRpOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG4iXX0=