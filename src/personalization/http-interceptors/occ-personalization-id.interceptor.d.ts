import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OccEndpointsService } from '../../occ/services/occ-endpoints.service';
import { PersonalizationConfig } from '../config/personalization-config';
import { WindowRef } from '../../window/window-ref';
import * as ɵngcc0 from '@angular/core';
export declare class OccPersonalizationIdInterceptor implements HttpInterceptor {
    private config;
    private occEndpoints;
    private winRef;
    private platform;
    private personalizationId;
    private requestHeader;
    private enabled;
    constructor(config: PersonalizationConfig, occEndpoints: OccEndpointsService, winRef: WindowRef, platform: any);
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OccPersonalizationIdInterceptor, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXBlcnNvbmFsaXphdGlvbi1pZC5pbnRlcmNlcHRvci5kLnRzIiwic291cmNlcyI6WyJvY2MtcGVyc29uYWxpemF0aW9uLWlkLmludGVyY2VwdG9yLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUtBOzs7Ozs7Ozs7OztBQVVBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cEV2ZW50LCBIdHRwSGFuZGxlciwgSHR0cEludGVyY2VwdG9yLCBIdHRwUmVxdWVzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE9jY0VuZHBvaW50c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9vY2Mvc2VydmljZXMvb2NjLWVuZHBvaW50cy5zZXJ2aWNlJztcbmltcG9ydCB7IFBlcnNvbmFsaXphdGlvbkNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9wZXJzb25hbGl6YXRpb24tY29uZmlnJztcbmltcG9ydCB7IFdpbmRvd1JlZiB9IGZyb20gJy4uLy4uL3dpbmRvdy93aW5kb3ctcmVmJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE9jY1BlcnNvbmFsaXphdGlvbklkSW50ZXJjZXB0b3IgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xuICAgIHByaXZhdGUgY29uZmlnO1xuICAgIHByaXZhdGUgb2NjRW5kcG9pbnRzO1xuICAgIHByaXZhdGUgd2luUmVmO1xuICAgIHByaXZhdGUgcGxhdGZvcm07XG4gICAgcHJpdmF0ZSBwZXJzb25hbGl6YXRpb25JZDtcbiAgICBwcml2YXRlIHJlcXVlc3RIZWFkZXI7XG4gICAgcHJpdmF0ZSBlbmFibGVkO1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZzogUGVyc29uYWxpemF0aW9uQ29uZmlnLCBvY2NFbmRwb2ludHM6IE9jY0VuZHBvaW50c1NlcnZpY2UsIHdpblJlZjogV2luZG93UmVmLCBwbGF0Zm9ybTogYW55KTtcbiAgICBpbnRlcmNlcHQocmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55PiwgbmV4dDogSHR0cEhhbmRsZXIpOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+Pjtcbn1cbiJdfQ==