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

//# sourceMappingURL=site-context.interceptor.d.ts.map