import { Injector, OnDestroy } from '@angular/core';
import { SiteContextParamsService } from './site-context-params.service';
import { SiteContextUrlSerializer } from './site-context-url-serializer';
import * as ɵngcc0 from '@angular/core';
export declare class SiteContextRoutesHandler implements OnDestroy {
    private siteContextParams;
    private serializer;
    private injector;
    constructor(siteContextParams: SiteContextParamsService, serializer: SiteContextUrlSerializer, injector: Injector);
    private subscription;
    private contextValues;
    private router;
    private location;
    private isNavigating;
    init(): void;
    private subscribeChanges;
    private subscribeRouting;
    private setContextParamsFromRoute;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SiteContextRoutesHandler>;
}

//# sourceMappingURL=site-context-routes-handler.d.ts.map