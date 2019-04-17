import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CurrencyService } from '../facade/currency.service';
import { LanguageService } from '../facade/language.service';
import { OccConfig } from '../../occ/config/occ-config';
import { OccEndpointsService } from '../../occ/services/occ-endpoints.service';
export declare class SiteContextInterceptor implements HttpInterceptor {
    private languageService;
    private currencyService;
    private occEndpoints;
    private config;
    activeLang: string;
    activeCurr: string;
    constructor(languageService: LanguageService, currencyService: CurrencyService, occEndpoints: OccEndpointsService, config: OccConfig);
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
}
