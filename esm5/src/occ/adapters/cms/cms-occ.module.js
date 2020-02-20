import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CmsPageAdapter } from '../../../cms/connectors/page/cms-page.adapter';
import { OccCmsComponentAdapter } from './occ-cms-component.adapter';
import { OccCmsPageNormalizer } from './converters/occ-cms-page-normalizer';
import { OccCmsPageAdapter } from './occ-cms-page.adapter';
import { CMS_PAGE_NORMALIZER } from '../../../cms/connectors/page/converters';
import { CmsComponentAdapter } from '../../../cms/connectors/component/cms-component.adapter';
var CmsOccModule = /** @class */ (function () {
    function CmsOccModule() {
    }
    CmsOccModule = __decorate([
        NgModule({
            imports: [CommonModule, HttpClientModule],
            providers: [
                {
                    provide: CmsPageAdapter,
                    useClass: OccCmsPageAdapter,
                },
                {
                    provide: CMS_PAGE_NORMALIZER,
                    useExisting: OccCmsPageNormalizer,
                    multi: true,
                },
                {
                    provide: CmsComponentAdapter,
                    useClass: OccCmsComponentAdapter,
                },
            ],
        })
    ], CmsOccModule);
    return CmsOccModule;
}());
export { CmsOccModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLW9jYy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvb2NjL2FkYXB0ZXJzL2Ntcy9jbXMtb2NjLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzNELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBb0I5RjtJQUFBO0lBQTJCLENBQUM7SUFBZixZQUFZO1FBbEJ4QixRQUFRLENBQUM7WUFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsZ0JBQWdCLENBQUM7WUFDekMsU0FBUyxFQUFFO2dCQUNUO29CQUNFLE9BQU8sRUFBRSxjQUFjO29CQUN2QixRQUFRLEVBQUUsaUJBQWlCO2lCQUM1QjtnQkFDRDtvQkFDRSxPQUFPLEVBQUUsbUJBQW1CO29CQUM1QixXQUFXLEVBQUUsb0JBQW9CO29CQUNqQyxLQUFLLEVBQUUsSUFBSTtpQkFDWjtnQkFDRDtvQkFDRSxPQUFPLEVBQUUsbUJBQW1CO29CQUM1QixRQUFRLEVBQUUsc0JBQXNCO2lCQUNqQzthQUNGO1NBQ0YsQ0FBQztPQUNXLFlBQVksQ0FBRztJQUFELG1CQUFDO0NBQUEsQUFBNUIsSUFBNEI7U0FBZixZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ21zUGFnZUFkYXB0ZXIgfSBmcm9tICcuLi8uLi8uLi9jbXMvY29ubmVjdG9ycy9wYWdlL2Ntcy1wYWdlLmFkYXB0ZXInO1xuaW1wb3J0IHsgT2NjQ21zQ29tcG9uZW50QWRhcHRlciB9IGZyb20gJy4vb2NjLWNtcy1jb21wb25lbnQuYWRhcHRlcic7XG5pbXBvcnQgeyBPY2NDbXNQYWdlTm9ybWFsaXplciB9IGZyb20gJy4vY29udmVydGVycy9vY2MtY21zLXBhZ2Utbm9ybWFsaXplcic7XG5pbXBvcnQgeyBPY2NDbXNQYWdlQWRhcHRlciB9IGZyb20gJy4vb2NjLWNtcy1wYWdlLmFkYXB0ZXInO1xuaW1wb3J0IHsgQ01TX1BBR0VfTk9STUFMSVpFUiB9IGZyb20gJy4uLy4uLy4uL2Ntcy9jb25uZWN0b3JzL3BhZ2UvY29udmVydGVycyc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnRBZGFwdGVyIH0gZnJvbSAnLi4vLi4vLi4vY21zL2Nvbm5lY3RvcnMvY29tcG9uZW50L2Ntcy1jb21wb25lbnQuYWRhcHRlcic7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEh0dHBDbGllbnRNb2R1bGVdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBDbXNQYWdlQWRhcHRlcixcbiAgICAgIHVzZUNsYXNzOiBPY2NDbXNQYWdlQWRhcHRlcixcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IENNU19QQUdFX05PUk1BTElaRVIsXG4gICAgICB1c2VFeGlzdGluZzogT2NjQ21zUGFnZU5vcm1hbGl6ZXIsXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IENtc0NvbXBvbmVudEFkYXB0ZXIsXG4gICAgICB1c2VDbGFzczogT2NjQ21zQ29tcG9uZW50QWRhcHRlcixcbiAgICB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBDbXNPY2NNb2R1bGUge31cbiJdfQ==