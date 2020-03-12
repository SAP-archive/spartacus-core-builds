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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZS1jb250ZXh0LmludGVyY2VwdG9yLmQudHMiLCJzb3VyY2VzIjpbInNpdGUtY29udGV4dC5pbnRlcmNlcHRvci5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBTUE7Ozs7Ozs7Ozs7QUFTQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBFdmVudCwgSHR0cEhhbmRsZXIsIEh0dHBJbnRlcmNlcHRvciwgSHR0cFJlcXVlc3QgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDdXJyZW5jeVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zaXRlLWNvbnRleHQvZmFjYWRlL2N1cnJlbmN5LnNlcnZpY2UnO1xuaW1wb3J0IHsgTGFuZ3VhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2l0ZS1jb250ZXh0L2ZhY2FkZS9sYW5ndWFnZS5zZXJ2aWNlJztcbmltcG9ydCB7IE9jY0VuZHBvaW50c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9vY2MtZW5kcG9pbnRzLnNlcnZpY2UnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHRDb25maWcgfSBmcm9tICcuLi8uLi8uLi9zaXRlLWNvbnRleHQvY29uZmlnL3NpdGUtY29udGV4dC1jb25maWcnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgU2l0ZUNvbnRleHRJbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XG4gICAgcHJpdmF0ZSBsYW5ndWFnZVNlcnZpY2U7XG4gICAgcHJpdmF0ZSBjdXJyZW5jeVNlcnZpY2U7XG4gICAgcHJpdmF0ZSBvY2NFbmRwb2ludHM7XG4gICAgcHJpdmF0ZSBjb25maWc7XG4gICAgYWN0aXZlTGFuZzogc3RyaW5nO1xuICAgIGFjdGl2ZUN1cnI6IHN0cmluZztcbiAgICBjb25zdHJ1Y3RvcihsYW5ndWFnZVNlcnZpY2U6IExhbmd1YWdlU2VydmljZSwgY3VycmVuY3lTZXJ2aWNlOiBDdXJyZW5jeVNlcnZpY2UsIG9jY0VuZHBvaW50czogT2NjRW5kcG9pbnRzU2VydmljZSwgY29uZmlnOiBTaXRlQ29udGV4dENvbmZpZyk7XG4gICAgaW50ZXJjZXB0KHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4sIG5leHQ6IEh0dHBIYW5kbGVyKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj47XG59XG4iXX0=