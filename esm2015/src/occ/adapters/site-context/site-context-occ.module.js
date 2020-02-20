import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ConfigModule } from '../../../config/config.module';
import { SiteAdapter } from '../../../site-context/connectors/site.adapter';
import { defaultOccSiteContextConfig } from './default-occ-site-context-config';
import { OccSiteAdapter } from './occ-site.adapter';
import { SiteContextInterceptor } from './site-context.interceptor';
let SiteContextOccModule = class SiteContextOccModule {
};
SiteContextOccModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            HttpClientModule,
            ConfigModule.withConfig(defaultOccSiteContextConfig),
        ],
        providers: [
            {
                provide: SiteAdapter,
                useClass: OccSiteAdapter,
            },
            {
                provide: HTTP_INTERCEPTORS,
                useExisting: SiteContextInterceptor,
                multi: true,
            },
        ],
    })
], SiteContextOccModule);
export { SiteContextOccModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZS1jb250ZXh0LW9jYy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvb2NjL2FkYXB0ZXJzL3NpdGUtY29udGV4dC9zaXRlLWNvbnRleHQtb2NjLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzNFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzdELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUM1RSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNoRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDcEQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFvQnBFLElBQWEsb0JBQW9CLEdBQWpDLE1BQWEsb0JBQW9CO0NBQUcsQ0FBQTtBQUF2QixvQkFBb0I7SUFsQmhDLFFBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLFlBQVk7WUFDWixnQkFBZ0I7WUFDaEIsWUFBWSxDQUFDLFVBQVUsQ0FBQywyQkFBMkIsQ0FBQztTQUNyRDtRQUNELFNBQVMsRUFBRTtZQUNUO2dCQUNFLE9BQU8sRUFBRSxXQUFXO2dCQUNwQixRQUFRLEVBQUUsY0FBYzthQUN6QjtZQUNEO2dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7Z0JBQzFCLFdBQVcsRUFBRSxzQkFBc0I7Z0JBQ25DLEtBQUssRUFBRSxJQUFJO2FBQ1o7U0FDRjtLQUNGLENBQUM7R0FDVyxvQkFBb0IsQ0FBRztTQUF2QixvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSwgSFRUUF9JTlRFUkNFUFRPUlMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29uZmlnTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vY29uZmlnL2NvbmZpZy5tb2R1bGUnO1xuaW1wb3J0IHsgU2l0ZUFkYXB0ZXIgfSBmcm9tICcuLi8uLi8uLi9zaXRlLWNvbnRleHQvY29ubmVjdG9ycy9zaXRlLmFkYXB0ZXInO1xuaW1wb3J0IHsgZGVmYXVsdE9jY1NpdGVDb250ZXh0Q29uZmlnIH0gZnJvbSAnLi9kZWZhdWx0LW9jYy1zaXRlLWNvbnRleHQtY29uZmlnJztcbmltcG9ydCB7IE9jY1NpdGVBZGFwdGVyIH0gZnJvbSAnLi9vY2Mtc2l0ZS5hZGFwdGVyJztcbmltcG9ydCB7IFNpdGVDb250ZXh0SW50ZXJjZXB0b3IgfSBmcm9tICcuL3NpdGUtY29udGV4dC5pbnRlcmNlcHRvcic7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZyhkZWZhdWx0T2NjU2l0ZUNvbnRleHRDb25maWcpLFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBTaXRlQWRhcHRlcixcbiAgICAgIHVzZUNsYXNzOiBPY2NTaXRlQWRhcHRlcixcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLFxuICAgICAgdXNlRXhpc3Rpbmc6IFNpdGVDb250ZXh0SW50ZXJjZXB0b3IsXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBTaXRlQ29udGV4dE9jY01vZHVsZSB7fVxuIl19