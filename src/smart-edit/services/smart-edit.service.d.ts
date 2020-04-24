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
    private _launchedInSmartEdit;
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
    /**
     * Whether the app launched in smart edit
     */
    isLaunchedInSmartEdit(): boolean;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SmartEditService, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtZWRpdC5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbInNtYXJ0LWVkaXQuc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBTUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3QkEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENtc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9jbXMvZmFjYWRlL2Ntcy5zZXJ2aWNlJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICcuLi8uLi9jbXMvbW9kZWwvcGFnZS5tb2RlbCc7XG5pbXBvcnQgeyBSb3V0aW5nU2VydmljZSB9IGZyb20gJy4uLy4uL3JvdXRpbmcvZmFjYWRlL3JvdXRpbmcuc2VydmljZSc7XG5pbXBvcnQgeyBCYXNlU2l0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaXRlLWNvbnRleHQvZmFjYWRlL2Jhc2Utc2l0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IFdpbmRvd1JlZiB9IGZyb20gJy4uLy4uL3dpbmRvdy93aW5kb3ctcmVmJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFNtYXJ0RWRpdFNlcnZpY2Uge1xuICAgIHByb3RlY3RlZCBjbXNTZXJ2aWNlOiBDbXNTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2U7XG4gICAgcHJvdGVjdGVkIGJhc2VTaXRlU2VydmljZTogQmFzZVNpdGVTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCB6b25lOiBOZ1pvbmU7XG4gICAgcHJvdGVjdGVkIHdpblJlZjogV2luZG93UmVmO1xuICAgIHByaXZhdGUgX2Ntc1RpY2tldElkO1xuICAgIHByaXZhdGUgaXNQcmV2aWV3UGFnZTtcbiAgICBwcml2YXRlIF9jdXJyZW50UGFnZUlkO1xuICAgIHByaXZhdGUgX2xhdW5jaGVkSW5TbWFydEVkaXQ7XG4gICAgcHJpdmF0ZSBkZWZhdWx0UHJldmlld1Byb2R1Y3RDb2RlO1xuICAgIHByaXZhdGUgZGVmYXVsdFByZXZpZXdDYXRlZ29yeUNvZGU7XG4gICAgY29uc3RydWN0b3IoY21zU2VydmljZTogQ21zU2VydmljZSwgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlLCBiYXNlU2l0ZVNlcnZpY2U6IEJhc2VTaXRlU2VydmljZSwgem9uZTogTmdab25lLCB3aW5SZWY6IFdpbmRvd1JlZik7XG4gICAgZ2V0IGNtc1RpY2tldElkKCk6IHN0cmluZztcbiAgICBwcm90ZWN0ZWQgZ2V0Q21zVGlja2V0KCk6IHZvaWQ7XG4gICAgcHJvdGVjdGVkIGdldERlZmF1bHRQcmV2aWV3Q29kZSgpOiB2b2lkO1xuICAgIHByb3RlY3RlZCBhZGRQYWdlQ29udHJhY3QoKTogdm9pZDtcbiAgICBwcm90ZWN0ZWQgZ29Ub1ByZXZpZXdQYWdlKGNtc1BhZ2U6IFBhZ2UpOiB2b2lkO1xuICAgIHByb3RlY3RlZCByZW5kZXJDb21wb25lbnQoY29tcG9uZW50SWQ6IHN0cmluZywgY29tcG9uZW50VHlwZT86IHN0cmluZywgcGFyZW50SWQ/OiBzdHJpbmcpOiBib29sZWFuO1xuICAgIHByb3RlY3RlZCByZXByb2Nlc3NQYWdlKCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogV2hldGhlciB0aGUgYXBwIGxhdW5jaGVkIGluIHNtYXJ0IGVkaXRcbiAgICAgKi9cbiAgICBpc0xhdW5jaGVkSW5TbWFydEVkaXQoKTogYm9vbGVhbjtcbn1cbiJdfQ==