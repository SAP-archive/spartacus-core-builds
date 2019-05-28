/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
import { catchError, map } from 'rxjs/operators';
import { ConverterService } from '../../../util/converter.service';
import { CURRENCY_NORMALIZER, LANGUAGE_NORMALIZER, } from '../../../site-context/connectors/converters';
var OccSiteAdapter = /** @class */ (function () {
    function OccSiteAdapter(http, occEndpoints, converter) {
        this.http = http;
        this.occEndpoints = occEndpoints;
        this.converter = converter;
    }
    /**
     * @return {?}
     */
    OccSiteAdapter.prototype.loadLanguages = /**
     * @return {?}
     */
    function () {
        return this.http
            .get(this.occEndpoints.getEndpoint('languages'))
            .pipe(catchError(function (error) { return throwError(error.json()); }), map(function (languageList) { return languageList.languages; }), this.converter.pipeableMany(LANGUAGE_NORMALIZER));
    };
    /**
     * @return {?}
     */
    OccSiteAdapter.prototype.loadCurrencies = /**
     * @return {?}
     */
    function () {
        return this.http
            .get(this.occEndpoints.getEndpoint('currencies'))
            .pipe(catchError(function (error) { return throwError(error.json()); }), map(function (currencyList) { return currencyList.currencies; }), this.converter.pipeableMany(CURRENCY_NORMALIZER));
    };
    /**
     * @return {?}
     */
    OccSiteAdapter.prototype.loadBaseSite = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var baseUrl = this.occEndpoints.getBaseEndpoint();
        /** @type {?} */
        var urlSplits = baseUrl.split('/');
        /** @type {?} */
        var activeSite = urlSplits.pop();
        /** @type {?} */
        var url = urlSplits.join('/') + '/basesites';
        /** @type {?} */
        var params = new HttpParams({
            fromString: 'fields=FULL',
        });
        return this.http
            .get(url, { params: params })
            .pipe(catchError(function (error) { return throwError(error); }), map(function (siteList) {
            return siteList.baseSites.find(function (site) { return site.uid === activeSite; });
        }));
    };
    OccSiteAdapter.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    OccSiteAdapter.ctorParameters = function () { return [
        { type: HttpClient },
        { type: OccEndpointsService },
        { type: ConverterService }
    ]; };
    return OccSiteAdapter;
}());
export { OccSiteAdapter };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    OccSiteAdapter.prototype.http;
    /**
     * @type {?}
     * @protected
     */
    OccSiteAdapter.prototype.occEndpoints;
    /**
     * @type {?}
     * @protected
     */
    OccSiteAdapter.prototype.converter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXNpdGUuYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9vY2MvYWRhcHRlcnMvc2l0ZS1jb250ZXh0L29jYy1zaXRlLmFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBYyxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFOUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzlELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFakQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDbkUsT0FBTyxFQUNMLG1CQUFtQixFQUNuQixtQkFBbUIsR0FDcEIsTUFBTSw2Q0FBNkMsQ0FBQztBQUVyRDtJQUVFLHdCQUNZLElBQWdCLEVBQ2hCLFlBQWlDLEVBQ2pDLFNBQTJCO1FBRjNCLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsaUJBQVksR0FBWixZQUFZLENBQXFCO1FBQ2pDLGNBQVMsR0FBVCxTQUFTLENBQWtCO0lBQ3BDLENBQUM7Ozs7SUFFSixzQ0FBYTs7O0lBQWI7UUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2IsR0FBRyxDQUFtQixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUNqRSxJQUFJLENBQ0gsVUFBVSxDQUFDLFVBQUMsS0FBVSxJQUFLLE9BQUEsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUF4QixDQUF3QixDQUFDLEVBQ3BELEdBQUcsQ0FBQyxVQUFBLFlBQVksSUFBSSxPQUFBLFlBQVksQ0FBQyxTQUFTLEVBQXRCLENBQXNCLENBQUMsRUFDM0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsbUJBQW1CLENBQUMsQ0FDakQsQ0FBQztJQUNOLENBQUM7Ozs7SUFFRCx1Q0FBYzs7O0lBQWQ7UUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2IsR0FBRyxDQUFtQixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUNsRSxJQUFJLENBQ0gsVUFBVSxDQUFDLFVBQUMsS0FBVSxJQUFLLE9BQUEsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUF4QixDQUF3QixDQUFDLEVBQ3BELEdBQUcsQ0FBQyxVQUFBLFlBQVksSUFBSSxPQUFBLFlBQVksQ0FBQyxVQUFVLEVBQXZCLENBQXVCLENBQUMsRUFDNUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsbUJBQW1CLENBQUMsQ0FDakQsQ0FBQztJQUNOLENBQUM7Ozs7SUFFRCxxQ0FBWTs7O0lBQVo7O1lBQ1EsT0FBTyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsZUFBZSxFQUFFOztZQUM3QyxTQUFTLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7O1lBQzlCLFVBQVUsR0FBRyxTQUFTLENBQUMsR0FBRyxFQUFFOztZQUM1QixHQUFHLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxZQUFZOztZQUV4QyxNQUFNLEdBQUcsSUFBSSxVQUFVLENBQUM7WUFDNUIsVUFBVSxFQUFFLGFBQWE7U0FDMUIsQ0FBQztRQUVGLE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDYixHQUFHLENBQTRCLEdBQUcsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQzthQUN2RCxJQUFJLENBQ0gsVUFBVSxDQUFDLFVBQUMsS0FBVSxJQUFLLE9BQUEsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFqQixDQUFpQixDQUFDLEVBQzdDLEdBQUcsQ0FBQyxVQUFBLFFBQVE7WUFDVixPQUFPLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLEdBQUcsS0FBSyxVQUFVLEVBQXZCLENBQXVCLENBQUMsQ0FBQztRQUNsRSxDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ04sQ0FBQzs7Z0JBOUNGLFVBQVU7Ozs7Z0JBVkYsVUFBVTtnQkFDVixtQkFBbUI7Z0JBR25CLGdCQUFnQjs7SUFxRHpCLHFCQUFDO0NBQUEsQUEvQ0QsSUErQ0M7U0E5Q1ksY0FBYzs7Ozs7O0lBRXZCLDhCQUEwQjs7Ozs7SUFDMUIsc0NBQTJDOzs7OztJQUMzQyxtQ0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTaXRlQWRhcHRlciB9IGZyb20gJy4uLy4uLy4uL3NpdGUtY29udGV4dC9jb25uZWN0b3JzL3NpdGUuYWRhcHRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDdXJyZW5jeSwgTGFuZ3VhZ2UsIEJhc2VTaXRlIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvbWlzYy5tb2RlbCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2NjRW5kcG9pbnRzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL29jYy1lbmRwb2ludHMuc2VydmljZSc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBPY2MgfSBmcm9tICcuLi8uLi9vY2MtbW9kZWxzL29jYy5tb2RlbHMnO1xuaW1wb3J0IHsgQ29udmVydGVyU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvY29udmVydGVyLnNlcnZpY2UnO1xuaW1wb3J0IHtcbiAgQ1VSUkVOQ1lfTk9STUFMSVpFUixcbiAgTEFOR1VBR0VfTk9STUFMSVpFUixcbn0gZnJvbSAnLi4vLi4vLi4vc2l0ZS1jb250ZXh0L2Nvbm5lY3RvcnMvY29udmVydGVycyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBPY2NTaXRlQWRhcHRlciBpbXBsZW1lbnRzIFNpdGVBZGFwdGVyIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgcHJvdGVjdGVkIG9jY0VuZHBvaW50czogT2NjRW5kcG9pbnRzU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY29udmVydGVyOiBDb252ZXJ0ZXJTZXJ2aWNlXG4gICkge31cblxuICBsb2FkTGFuZ3VhZ2VzKCk6IE9ic2VydmFibGU8TGFuZ3VhZ2VbXT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5nZXQ8T2NjLkxhbmd1YWdlTGlzdD4odGhpcy5vY2NFbmRwb2ludHMuZ2V0RW5kcG9pbnQoJ2xhbmd1YWdlcycpKVxuICAgICAgLnBpcGUoXG4gICAgICAgIGNhdGNoRXJyb3IoKGVycm9yOiBhbnkpID0+IHRocm93RXJyb3IoZXJyb3IuanNvbigpKSksXG4gICAgICAgIG1hcChsYW5ndWFnZUxpc3QgPT4gbGFuZ3VhZ2VMaXN0Lmxhbmd1YWdlcyksXG4gICAgICAgIHRoaXMuY29udmVydGVyLnBpcGVhYmxlTWFueShMQU5HVUFHRV9OT1JNQUxJWkVSKVxuICAgICAgKTtcbiAgfVxuXG4gIGxvYWRDdXJyZW5jaWVzKCk6IE9ic2VydmFibGU8Q3VycmVuY3lbXT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5nZXQ8T2NjLkN1cnJlbmN5TGlzdD4odGhpcy5vY2NFbmRwb2ludHMuZ2V0RW5kcG9pbnQoJ2N1cnJlbmNpZXMnKSlcbiAgICAgIC5waXBlKFxuICAgICAgICBjYXRjaEVycm9yKChlcnJvcjogYW55KSA9PiB0aHJvd0Vycm9yKGVycm9yLmpzb24oKSkpLFxuICAgICAgICBtYXAoY3VycmVuY3lMaXN0ID0+IGN1cnJlbmN5TGlzdC5jdXJyZW5jaWVzKSxcbiAgICAgICAgdGhpcy5jb252ZXJ0ZXIucGlwZWFibGVNYW55KENVUlJFTkNZX05PUk1BTElaRVIpXG4gICAgICApO1xuICB9XG5cbiAgbG9hZEJhc2VTaXRlKCk6IE9ic2VydmFibGU8QmFzZVNpdGU+IHtcbiAgICBjb25zdCBiYXNlVXJsID0gdGhpcy5vY2NFbmRwb2ludHMuZ2V0QmFzZUVuZHBvaW50KCk7XG4gICAgY29uc3QgdXJsU3BsaXRzID0gYmFzZVVybC5zcGxpdCgnLycpO1xuICAgIGNvbnN0IGFjdGl2ZVNpdGUgPSB1cmxTcGxpdHMucG9wKCk7XG4gICAgY29uc3QgdXJsID0gdXJsU3BsaXRzLmpvaW4oJy8nKSArICcvYmFzZXNpdGVzJztcblxuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKHtcbiAgICAgIGZyb21TdHJpbmc6ICdmaWVsZHM9RlVMTCcsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0PHsgYmFzZVNpdGVzOiBCYXNlU2l0ZVtdIH0+KHVybCwgeyBwYXJhbXM6IHBhcmFtcyB9KVxuICAgICAgLnBpcGUoXG4gICAgICAgIGNhdGNoRXJyb3IoKGVycm9yOiBhbnkpID0+IHRocm93RXJyb3IoZXJyb3IpKSxcbiAgICAgICAgbWFwKHNpdGVMaXN0ID0+IHtcbiAgICAgICAgICByZXR1cm4gc2l0ZUxpc3QuYmFzZVNpdGVzLmZpbmQoc2l0ZSA9PiBzaXRlLnVpZCA9PT0gYWN0aXZlU2l0ZSk7XG4gICAgICAgIH0pXG4gICAgICApO1xuICB9XG59XG4iXX0=