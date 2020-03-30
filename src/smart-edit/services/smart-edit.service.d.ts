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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SmartEditService, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtZWRpdC5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbInNtYXJ0LWVkaXQuc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBTUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUJBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDbXNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY21zL2ZhY2FkZS9jbXMuc2VydmljZSc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAnLi4vLi4vY21zL21vZGVsL3BhZ2UubW9kZWwnO1xuaW1wb3J0IHsgUm91dGluZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9yb3V0aW5nL2ZhY2FkZS9yb3V0aW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgQmFzZVNpdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2l0ZS1jb250ZXh0L2ZhY2FkZS9iYXNlLXNpdGUuc2VydmljZSc7XG5pbXBvcnQgeyBXaW5kb3dSZWYgfSBmcm9tICcuLi8uLi93aW5kb3cvd2luZG93LXJlZic7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBTbWFydEVkaXRTZXJ2aWNlIHtcbiAgICBwcm90ZWN0ZWQgY21zU2VydmljZTogQ21zU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBiYXNlU2l0ZVNlcnZpY2U6IEJhc2VTaXRlU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgem9uZTogTmdab25lO1xuICAgIHByb3RlY3RlZCB3aW5SZWY6IFdpbmRvd1JlZjtcbiAgICBwcml2YXRlIF9jbXNUaWNrZXRJZDtcbiAgICBwcml2YXRlIGlzUHJldmlld1BhZ2U7XG4gICAgcHJpdmF0ZSBfY3VycmVudFBhZ2VJZDtcbiAgICBwcml2YXRlIGRlZmF1bHRQcmV2aWV3UHJvZHVjdENvZGU7XG4gICAgcHJpdmF0ZSBkZWZhdWx0UHJldmlld0NhdGVnb3J5Q29kZTtcbiAgICBjb25zdHJ1Y3RvcihjbXNTZXJ2aWNlOiBDbXNTZXJ2aWNlLCByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UsIGJhc2VTaXRlU2VydmljZTogQmFzZVNpdGVTZXJ2aWNlLCB6b25lOiBOZ1pvbmUsIHdpblJlZjogV2luZG93UmVmKTtcbiAgICBnZXQgY21zVGlja2V0SWQoKTogc3RyaW5nO1xuICAgIHByb3RlY3RlZCBnZXRDbXNUaWNrZXQoKTogdm9pZDtcbiAgICBwcm90ZWN0ZWQgZ2V0RGVmYXVsdFByZXZpZXdDb2RlKCk6IHZvaWQ7XG4gICAgcHJvdGVjdGVkIGFkZFBhZ2VDb250cmFjdCgpOiB2b2lkO1xuICAgIHByb3RlY3RlZCBnb1RvUHJldmlld1BhZ2UoY21zUGFnZTogUGFnZSk6IHZvaWQ7XG4gICAgcHJvdGVjdGVkIHJlbmRlckNvbXBvbmVudChjb21wb25lbnRJZDogc3RyaW5nLCBjb21wb25lbnRUeXBlPzogc3RyaW5nLCBwYXJlbnRJZD86IHN0cmluZyk6IGJvb2xlYW47XG4gICAgcHJvdGVjdGVkIHJlcHJvY2Vzc1BhZ2UoKTogdm9pZDtcbn1cbiJdfQ==