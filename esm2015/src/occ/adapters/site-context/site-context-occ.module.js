import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { provideDefaultConfig } from '../../../config/config.module';
import { SiteAdapter } from '../../../site-context/connectors/site.adapter';
import { defaultOccSiteContextConfig } from './default-occ-site-context-config';
import { OccSiteAdapter } from './occ-site.adapter';
import { SiteContextInterceptor } from './site-context.interceptor';
let SiteContextOccModule = class SiteContextOccModule {
};
SiteContextOccModule = __decorate([
    NgModule({
        imports: [CommonModule, HttpClientModule],
        providers: [
            provideDefaultConfig(defaultOccSiteContextConfig),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZS1jb250ZXh0LW9jYy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvb2NjL2FkYXB0ZXJzL3NpdGUtY29udGV4dC9zaXRlLWNvbnRleHQtb2NjLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzNFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDckUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQWlCcEUsSUFBYSxvQkFBb0IsR0FBakMsTUFBYSxvQkFBb0I7Q0FBRyxDQUFBO0FBQXZCLG9CQUFvQjtJQWZoQyxRQUFRLENBQUM7UUFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsZ0JBQWdCLENBQUM7UUFDekMsU0FBUyxFQUFFO1lBQ1Qsb0JBQW9CLENBQUMsMkJBQTJCLENBQUM7WUFDakQ7Z0JBQ0UsT0FBTyxFQUFFLFdBQVc7Z0JBQ3BCLFFBQVEsRUFBRSxjQUFjO2FBQ3pCO1lBQ0Q7Z0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjtnQkFDMUIsV0FBVyxFQUFFLHNCQUFzQjtnQkFDbkMsS0FBSyxFQUFFLElBQUk7YUFDWjtTQUNGO0tBQ0YsQ0FBQztHQUNXLG9CQUFvQixDQUFHO1NBQXZCLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIVFRQX0lOVEVSQ0VQVE9SUywgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBwcm92aWRlRGVmYXVsdENvbmZpZyB9IGZyb20gJy4uLy4uLy4uL2NvbmZpZy9jb25maWcubW9kdWxlJztcbmltcG9ydCB7IFNpdGVBZGFwdGVyIH0gZnJvbSAnLi4vLi4vLi4vc2l0ZS1jb250ZXh0L2Nvbm5lY3RvcnMvc2l0ZS5hZGFwdGVyJztcbmltcG9ydCB7IGRlZmF1bHRPY2NTaXRlQ29udGV4dENvbmZpZyB9IGZyb20gJy4vZGVmYXVsdC1vY2Mtc2l0ZS1jb250ZXh0LWNvbmZpZyc7XG5pbXBvcnQgeyBPY2NTaXRlQWRhcHRlciB9IGZyb20gJy4vb2NjLXNpdGUuYWRhcHRlcic7XG5pbXBvcnQgeyBTaXRlQ29udGV4dEludGVyY2VwdG9yIH0gZnJvbSAnLi9zaXRlLWNvbnRleHQuaW50ZXJjZXB0b3InO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBIdHRwQ2xpZW50TW9kdWxlXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgcHJvdmlkZURlZmF1bHRDb25maWcoZGVmYXVsdE9jY1NpdGVDb250ZXh0Q29uZmlnKSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBTaXRlQWRhcHRlcixcbiAgICAgIHVzZUNsYXNzOiBPY2NTaXRlQWRhcHRlcixcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLFxuICAgICAgdXNlRXhpc3Rpbmc6IFNpdGVDb250ZXh0SW50ZXJjZXB0b3IsXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBTaXRlQ29udGV4dE9jY01vZHVsZSB7fVxuIl19