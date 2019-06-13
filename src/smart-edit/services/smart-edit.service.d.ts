import { NgZone } from '@angular/core';
import { RoutingService } from '../../routing/facade/routing.service';
import { CmsService } from '../../cms/facade/cms.service';
import { BaseSiteService } from '../../site-context/facade/base-site.service';
import { Page } from '../../cms/model/page.model';
import { WindowRef } from '../../window/window-ref';
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
    readonly cmsTicketId: string;
    protected getCmsTicket(): void;
    protected getDefaultPreviewCode(): void;
    protected addPageContract(): void;
    protected goToPreviewPage(cmsPage: Page): void;
    protected renderComponent(componentId: string, componentType?: string, parentId?: string): boolean;
    protected reprocessPage(): void;
}
