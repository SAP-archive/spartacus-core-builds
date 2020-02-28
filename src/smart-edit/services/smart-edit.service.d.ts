import { NgZone } from '@angular/core';
import { CmsService } from '../../cms/facade/cms.service';
import { Page } from '../../cms/model/page.model';
import { RoutingService } from '../../routing/facade/routing.service';
import { BaseSiteService } from '../../site-context/facade/base-site.service';
import { WindowRef } from '../../window/window-ref';
import * as ɵngcc0 from '@angular/core';
export declare class SmartEditService {
    protected cmsService: CmsService;
    protected routingService: RoutingService;
    protected baseSiteService: BaseSiteService;
    protected zone: NgZone;
    protected winRef: WindowRef;
    private _cmsTicketId;
    private isPreviewPage;
    private _currentPageId;
    private defaultPreviewProductCode;
    private defaultPreviewCategoryCode;
    constructor(cmsService: CmsService, routingService: RoutingService, baseSiteService: BaseSiteService, zone: NgZone, winRef: WindowRef);
    get cmsTicketId(): string;
    protected getCmsTicket(): void;
    protected getDefaultPreviewCode(): void;
    protected addPageContract(): void;
    protected goToPreviewPage(cmsPage: Page): void;
    protected renderComponent(componentId: string, componentType?: string, parentId?: string): boolean;
    protected reprocessPage(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SmartEditService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtZWRpdC5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbInNtYXJ0LWVkaXQuc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBTUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUJBOyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ21zU2VydmljZSB9IGZyb20gJy4uLy4uL2Ntcy9mYWNhZGUvY21zLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJy4uLy4uL2Ntcy9tb2RlbC9wYWdlLm1vZGVsJztcbmltcG9ydCB7IFJvdXRpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vcm91dGluZy9mYWNhZGUvcm91dGluZy5zZXJ2aWNlJztcbmltcG9ydCB7IEJhc2VTaXRlU2VydmljZSB9IGZyb20gJy4uLy4uL3NpdGUtY29udGV4dC9mYWNhZGUvYmFzZS1zaXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgV2luZG93UmVmIH0gZnJvbSAnLi4vLi4vd2luZG93L3dpbmRvdy1yZWYnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgU21hcnRFZGl0U2VydmljZSB7XG4gICAgcHJvdGVjdGVkIGNtc1NlcnZpY2U6IENtc1NlcnZpY2U7XG4gICAgcHJvdGVjdGVkIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgYmFzZVNpdGVTZXJ2aWNlOiBCYXNlU2l0ZVNlcnZpY2U7XG4gICAgcHJvdGVjdGVkIHpvbmU6IE5nWm9uZTtcbiAgICBwcm90ZWN0ZWQgd2luUmVmOiBXaW5kb3dSZWY7XG4gICAgcHJpdmF0ZSBfY21zVGlja2V0SWQ7XG4gICAgcHJpdmF0ZSBpc1ByZXZpZXdQYWdlO1xuICAgIHByaXZhdGUgX2N1cnJlbnRQYWdlSWQ7XG4gICAgcHJpdmF0ZSBkZWZhdWx0UHJldmlld1Byb2R1Y3RDb2RlO1xuICAgIHByaXZhdGUgZGVmYXVsdFByZXZpZXdDYXRlZ29yeUNvZGU7XG4gICAgY29uc3RydWN0b3IoY21zU2VydmljZTogQ21zU2VydmljZSwgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlLCBiYXNlU2l0ZVNlcnZpY2U6IEJhc2VTaXRlU2VydmljZSwgem9uZTogTmdab25lLCB3aW5SZWY6IFdpbmRvd1JlZik7XG4gICAgZ2V0IGNtc1RpY2tldElkKCk6IHN0cmluZztcbiAgICBwcm90ZWN0ZWQgZ2V0Q21zVGlja2V0KCk6IHZvaWQ7XG4gICAgcHJvdGVjdGVkIGdldERlZmF1bHRQcmV2aWV3Q29kZSgpOiB2b2lkO1xuICAgIHByb3RlY3RlZCBhZGRQYWdlQ29udHJhY3QoKTogdm9pZDtcbiAgICBwcm90ZWN0ZWQgZ29Ub1ByZXZpZXdQYWdlKGNtc1BhZ2U6IFBhZ2UpOiB2b2lkO1xuICAgIHByb3RlY3RlZCByZW5kZXJDb21wb25lbnQoY29tcG9uZW50SWQ6IHN0cmluZywgY29tcG9uZW50VHlwZT86IHN0cmluZywgcGFyZW50SWQ/OiBzdHJpbmcpOiBib29sZWFuO1xuICAgIHByb3RlY3RlZCByZXByb2Nlc3NQYWdlKCk6IHZvaWQ7XG59XG4iXX0=