import { RoutingService } from '../../routing/facade/routing.service';
import { CmsService } from '../../cms/facade/cms.service';
import { WindowRef } from '../../window/window-ref';
export declare class SmartEditService {
    private cmsService;
    private routingService;
    private _cmsTicketId;
    private getPreviewPage;
    private _currentPageId;
    constructor(cmsService: CmsService, routingService: RoutingService, winRef: WindowRef);
    readonly cmsTicketId: string;
    protected getCmsTicket(): void;
    protected addPageContract(): void;
    private goToPreviewPage;
    protected renderComponent(componentId: string, componentType?: string, parentId?: string): boolean;
    protected reprocessPage(): void;
}
