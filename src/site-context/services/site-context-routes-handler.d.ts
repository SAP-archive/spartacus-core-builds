import { Injector, OnDestroy } from '@angular/core';
import { SiteContextParamsService } from './site-context-params.service';
import { SiteContextUrlSerializer } from './site-context-url-serializer';
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
}
