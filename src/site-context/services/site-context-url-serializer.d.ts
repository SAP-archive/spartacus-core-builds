import { DefaultUrlSerializer, UrlTree } from '@angular/router';
import { SiteContextParamsService } from './site-context-params.service';
import * as ɵngcc0 from '@angular/core';
export interface ParamValuesMap {
    [name: string]: string;
}
export interface UrlTreeWithSiteContext extends UrlTree {
    siteContext?: ParamValuesMap;
}
export declare class SiteContextUrlSerializer extends DefaultUrlSerializer {
    private siteContextParams;
    private get urlEncodingParameters();
    get hasContextInRoutes(): boolean;
    constructor(siteContextParams: SiteContextParamsService);
    parse(url: string): UrlTreeWithSiteContext;
    urlExtractContextParameters(url: string): {
        url: string;
        params: ParamValuesMap;
    };
    private urlTreeIncludeContextParameters;
    serialize(tree: UrlTreeWithSiteContext): string;
    urlTreeExtractContextParameters(urlTree: UrlTreeWithSiteContext): ParamValuesMap;
    private urlIncludeContextParameters;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SiteContextUrlSerializer>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<SiteContextUrlSerializer>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZS1jb250ZXh0LXVybC1zZXJpYWxpemVyLmQudHMiLCJzb3VyY2VzIjpbInNpdGUtY29udGV4dC11cmwtc2VyaWFsaXplci5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEZWZhdWx0VXJsU2VyaWFsaXplciwgVXJsVHJlZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTaXRlQ29udGV4dFBhcmFtc1NlcnZpY2UgfSBmcm9tICcuL3NpdGUtY29udGV4dC1wYXJhbXMuc2VydmljZSc7XG5leHBvcnQgaW50ZXJmYWNlIFBhcmFtVmFsdWVzTWFwIHtcbiAgICBbbmFtZTogc3RyaW5nXTogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBVcmxUcmVlV2l0aFNpdGVDb250ZXh0IGV4dGVuZHMgVXJsVHJlZSB7XG4gICAgc2l0ZUNvbnRleHQ/OiBQYXJhbVZhbHVlc01hcDtcbn1cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFNpdGVDb250ZXh0VXJsU2VyaWFsaXplciBleHRlbmRzIERlZmF1bHRVcmxTZXJpYWxpemVyIHtcbiAgICBwcml2YXRlIHNpdGVDb250ZXh0UGFyYW1zO1xuICAgIHByaXZhdGUgZ2V0IHVybEVuY29kaW5nUGFyYW1ldGVycygpO1xuICAgIGdldCBoYXNDb250ZXh0SW5Sb3V0ZXMoKTogYm9vbGVhbjtcbiAgICBjb25zdHJ1Y3RvcihzaXRlQ29udGV4dFBhcmFtczogU2l0ZUNvbnRleHRQYXJhbXNTZXJ2aWNlKTtcbiAgICBwYXJzZSh1cmw6IHN0cmluZyk6IFVybFRyZWVXaXRoU2l0ZUNvbnRleHQ7XG4gICAgdXJsRXh0cmFjdENvbnRleHRQYXJhbWV0ZXJzKHVybDogc3RyaW5nKToge1xuICAgICAgICB1cmw6IHN0cmluZztcbiAgICAgICAgcGFyYW1zOiBQYXJhbVZhbHVlc01hcDtcbiAgICB9O1xuICAgIHByaXZhdGUgdXJsVHJlZUluY2x1ZGVDb250ZXh0UGFyYW1ldGVycztcbiAgICBzZXJpYWxpemUodHJlZTogVXJsVHJlZVdpdGhTaXRlQ29udGV4dCk6IHN0cmluZztcbiAgICB1cmxUcmVlRXh0cmFjdENvbnRleHRQYXJhbWV0ZXJzKHVybFRyZWU6IFVybFRyZWVXaXRoU2l0ZUNvbnRleHQpOiBQYXJhbVZhbHVlc01hcDtcbiAgICBwcml2YXRlIHVybEluY2x1ZGVDb250ZXh0UGFyYW1ldGVycztcbn1cbiJdfQ==