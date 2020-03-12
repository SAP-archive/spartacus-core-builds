import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseSite } from '../../model/misc.model';
import { OccConfig } from '../config/occ-config';
import * as ɵngcc0 from '@angular/core';
export declare class OccSitesConfigLoader {
    protected config: OccConfig;
    protected http: HttpClient;
    constructor(config: OccConfig, http: HttpClient);
    protected readonly endpoint = "basesites?fields=baseSites(uid,defaultLanguage(isocode),urlEncodingAttributes,urlPatterns,stores(currencies(isocode),defaultCurrency(isocode),languages(isocode),defaultLanguage(isocode)))";
    private get baseEndpoint();
    private get url();
    load(): Observable<BaseSite[]>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OccSitesConfigLoader>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXNpdGVzLWNvbmZpZy1sb2FkZXIuZC50cyIsInNvdXJjZXMiOlsib2NjLXNpdGVzLWNvbmZpZy1sb2FkZXIuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUFJQTs7Ozs7Ozs7O0FBUUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQmFzZVNpdGUgfSBmcm9tICcuLi8uLi9tb2RlbC9taXNjLm1vZGVsJztcbmltcG9ydCB7IE9jY0NvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9vY2MtY29uZmlnJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE9jY1NpdGVzQ29uZmlnTG9hZGVyIHtcbiAgICBwcm90ZWN0ZWQgY29uZmlnOiBPY2NDb25maWc7XG4gICAgcHJvdGVjdGVkIGh0dHA6IEh0dHBDbGllbnQ7XG4gICAgY29uc3RydWN0b3IoY29uZmlnOiBPY2NDb25maWcsIGh0dHA6IEh0dHBDbGllbnQpO1xuICAgIHByb3RlY3RlZCByZWFkb25seSBlbmRwb2ludCA9IFwiYmFzZXNpdGVzP2ZpZWxkcz1iYXNlU2l0ZXModWlkLGRlZmF1bHRMYW5ndWFnZShpc29jb2RlKSx1cmxFbmNvZGluZ0F0dHJpYnV0ZXMsdXJsUGF0dGVybnMsc3RvcmVzKGN1cnJlbmNpZXMoaXNvY29kZSksZGVmYXVsdEN1cnJlbmN5KGlzb2NvZGUpLGxhbmd1YWdlcyhpc29jb2RlKSxkZWZhdWx0TGFuZ3VhZ2UoaXNvY29kZSkpKVwiO1xuICAgIHByaXZhdGUgZ2V0IGJhc2VFbmRwb2ludCgpO1xuICAgIHByaXZhdGUgZ2V0IHVybCgpO1xuICAgIGxvYWQoKTogT2JzZXJ2YWJsZTxCYXNlU2l0ZVtdPjtcbn1cbiJdfQ==