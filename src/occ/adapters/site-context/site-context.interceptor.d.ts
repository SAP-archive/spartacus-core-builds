import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CurrencyService } from '../../../site-context/facade/currency.service';
import { LanguageService } from '../../../site-context/facade/language.service';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
import { SiteContextConfig } from '../../../site-context/config/site-context-config';
import * as ɵngcc0 from '@angular/core';
export declare class SiteContextInterceptor implements HttpInterceptor {
    private languageService;
    private currencyService;
    private occEndpoints;
    private config;
    activeLang: string;
    activeCurr: string;
    constructor(languageService: LanguageService, currencyService: CurrencyService, occEndpoints: OccEndpointsService, config: SiteContextConfig);
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SiteContextInterceptor>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZS1jb250ZXh0LmludGVyY2VwdG9yLmQudHMiLCJzb3VyY2VzIjpbInNpdGUtY29udGV4dC5pbnRlcmNlcHRvci5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBTUE7Ozs7Ozs7Ozs7QUFTQTsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwRXZlbnQsIEh0dHBIYW5kbGVyLCBIdHRwSW50ZXJjZXB0b3IsIEh0dHBSZXF1ZXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ3VycmVuY3lTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2l0ZS1jb250ZXh0L2ZhY2FkZS9jdXJyZW5jeS5zZXJ2aWNlJztcbmltcG9ydCB7IExhbmd1YWdlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NpdGUtY29udGV4dC9mYWNhZGUvbGFuZ3VhZ2Uuc2VydmljZSc7XG5pbXBvcnQgeyBPY2NFbmRwb2ludHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvb2NjLWVuZHBvaW50cy5zZXJ2aWNlJztcbmltcG9ydCB7IFNpdGVDb250ZXh0Q29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vc2l0ZS1jb250ZXh0L2NvbmZpZy9zaXRlLWNvbnRleHQtY29uZmlnJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFNpdGVDb250ZXh0SW50ZXJjZXB0b3IgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xuICAgIHByaXZhdGUgbGFuZ3VhZ2VTZXJ2aWNlO1xuICAgIHByaXZhdGUgY3VycmVuY3lTZXJ2aWNlO1xuICAgIHByaXZhdGUgb2NjRW5kcG9pbnRzO1xuICAgIHByaXZhdGUgY29uZmlnO1xuICAgIGFjdGl2ZUxhbmc6IHN0cmluZztcbiAgICBhY3RpdmVDdXJyOiBzdHJpbmc7XG4gICAgY29uc3RydWN0b3IobGFuZ3VhZ2VTZXJ2aWNlOiBMYW5ndWFnZVNlcnZpY2UsIGN1cnJlbmN5U2VydmljZTogQ3VycmVuY3lTZXJ2aWNlLCBvY2NFbmRwb2ludHM6IE9jY0VuZHBvaW50c1NlcnZpY2UsIGNvbmZpZzogU2l0ZUNvbnRleHRDb25maWcpO1xuICAgIGludGVyY2VwdChyZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+LCBuZXh0OiBIdHRwSGFuZGxlcik6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+O1xufVxuIl19