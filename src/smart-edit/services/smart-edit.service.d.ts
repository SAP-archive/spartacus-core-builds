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

//# sourceMappingURL=smart-edit.service.d.ts.map