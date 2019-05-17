import { NgZone } from '@angular/core';
import { RoutingService } from '../../routing/facade/routing.service';
import { CmsService } from '../../cms/facade/cms.service';
import { Page } from '../../cms/model/page.model';
import { WindowRef } from '../../window/window-ref';
export declare class SmartEditService {
    protected cmsService: CmsService;
    protected routingService: RoutingService;
    protected zone: NgZone;
    private _cmsTicketId;
    private getPreviewPage;
    private _currentPageId;
    constructor(cmsService: CmsService, routingService: RoutingService, zone: NgZone, winRef: WindowRef);
    readonly cmsTicketId: string;
    protected getCmsTicket(): void;
    protected addPageContract(): void;
    protected goToPreviewPage(cmsPage: Page): void;
    protected renderComponent(componentId: string, componentType?: string, parentId?: string): boolean;
    protected reprocessPage(): void;
}
