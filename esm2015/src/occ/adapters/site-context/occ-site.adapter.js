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
export class OccSiteAdapter {
    /**
     * @param {?} http
     * @param {?} occEndpoints
     * @param {?} converter
     */
    constructor(http, occEndpoints, converter) {
        this.http = http;
        this.occEndpoints = occEndpoints;
        this.converter = converter;
    }
    /**
     * @return {?}
     */
    loadLanguages() {
        return this.http
            .get(this.occEndpoints.getEndpoint('languages'))
            .pipe(catchError((error) => throwError(error.json())), map(languageList => languageList.languages), this.converter.pipeableMany(LANGUAGE_NORMALIZER));
    }
    /**
     * @return {?}
     */
    loadCurrencies() {
        return this.http
            .get(this.occEndpoints.getEndpoint('currencies'))
            .pipe(catchError((error) => throwError(error.json())), map(currencyList => currencyList.currencies), this.converter.pipeableMany(CURRENCY_NORMALIZER));
    }
    /**
     * @return {?}
     */
    loadBaseSite() {
        /** @type {?} */
        const baseUrl = this.occEndpoints.getBaseEndpoint();
        /** @type {?} */
        const urlSplits = baseUrl.split('/');
        /** @type {?} */
        const activeSite = urlSplits.pop();
        /** @type {?} */
        const url = urlSplits.join('/') + '/basesites';
        /** @type {?} */
        const params = new HttpParams({
            fromString: 'fields=FULL',
        });
        return this.http
            .get(url, { params: params })
            .pipe(catchError((error) => throwError(error)), map(siteList => {
            return siteList.baseSites.find(site => site.uid === activeSite);
        }));
    }
}
OccSiteAdapter.decorators = [
    { type: Injectable }
];
/** @nocollapse */
OccSiteAdapter.ctorParameters = () => [
    { type: HttpClient },
    { type: OccEndpointsService },
    { type: ConverterService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXNpdGUuYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9vY2MvYWRhcHRlcnMvc2l0ZS1jb250ZXh0L29jYy1zaXRlLmFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBYyxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFOUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzlELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFakQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDbkUsT0FBTyxFQUNMLG1CQUFtQixFQUNuQixtQkFBbUIsR0FDcEIsTUFBTSw2Q0FBNkMsQ0FBQztBQUdyRCxNQUFNLE9BQU8sY0FBYzs7Ozs7O0lBQ3pCLFlBQ1ksSUFBZ0IsRUFDaEIsWUFBaUMsRUFDakMsU0FBMkI7UUFGM0IsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixpQkFBWSxHQUFaLFlBQVksQ0FBcUI7UUFDakMsY0FBUyxHQUFULFNBQVMsQ0FBa0I7SUFDcEMsQ0FBQzs7OztJQUVKLGFBQWE7UUFDWCxPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2IsR0FBRyxDQUFtQixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUNqRSxJQUFJLENBQ0gsVUFBVSxDQUFDLENBQUMsS0FBVSxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsRUFDcEQsR0FBRyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxFQUMzQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxtQkFBbUIsQ0FBQyxDQUNqRCxDQUFDO0lBQ04sQ0FBQzs7OztJQUVELGNBQWM7UUFDWixPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2IsR0FBRyxDQUFtQixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUNsRSxJQUFJLENBQ0gsVUFBVSxDQUFDLENBQUMsS0FBVSxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsRUFDcEQsR0FBRyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxFQUM1QyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxtQkFBbUIsQ0FBQyxDQUNqRCxDQUFDO0lBQ04sQ0FBQzs7OztJQUVELFlBQVk7O2NBQ0osT0FBTyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsZUFBZSxFQUFFOztjQUM3QyxTQUFTLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7O2NBQzlCLFVBQVUsR0FBRyxTQUFTLENBQUMsR0FBRyxFQUFFOztjQUM1QixHQUFHLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxZQUFZOztjQUV4QyxNQUFNLEdBQUcsSUFBSSxVQUFVLENBQUM7WUFDNUIsVUFBVSxFQUFFLGFBQWE7U0FDMUIsQ0FBQztRQUVGLE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDYixHQUFHLENBQTRCLEdBQUcsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQzthQUN2RCxJQUFJLENBQ0gsVUFBVSxDQUFDLENBQUMsS0FBVSxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsRUFDN0MsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ2IsT0FBTyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssVUFBVSxDQUFDLENBQUM7UUFDbEUsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNOLENBQUM7OztZQTlDRixVQUFVOzs7O1lBVkYsVUFBVTtZQUNWLG1CQUFtQjtZQUduQixnQkFBZ0I7Ozs7Ozs7SUFTckIsOEJBQTBCOzs7OztJQUMxQixzQ0FBMkM7Ozs7O0lBQzNDLG1DQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNpdGVBZGFwdGVyIH0gZnJvbSAnLi4vLi4vLi4vc2l0ZS1jb250ZXh0L2Nvbm5lY3RvcnMvc2l0ZS5hZGFwdGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUsIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEN1cnJlbmN5LCBMYW5ndWFnZSwgQmFzZVNpdGUgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9taXNjLm1vZGVsJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPY2NFbmRwb2ludHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvb2NjLWVuZHBvaW50cy5zZXJ2aWNlJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE9jYyB9IGZyb20gJy4uLy4uL29jYy1tb2RlbHMvb2NjLm1vZGVscyc7XG5pbXBvcnQgeyBDb252ZXJ0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9jb252ZXJ0ZXIuc2VydmljZSc7XG5pbXBvcnQge1xuICBDVVJSRU5DWV9OT1JNQUxJWkVSLFxuICBMQU5HVUFHRV9OT1JNQUxJWkVSLFxufSBmcm9tICcuLi8uLi8uLi9zaXRlLWNvbnRleHQvY29ubmVjdG9ycy9jb252ZXJ0ZXJzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE9jY1NpdGVBZGFwdGVyIGltcGxlbWVudHMgU2l0ZUFkYXB0ZXIge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgaHR0cDogSHR0cENsaWVudCxcbiAgICBwcm90ZWN0ZWQgb2NjRW5kcG9pbnRzOiBPY2NFbmRwb2ludHNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjb252ZXJ0ZXI6IENvbnZlcnRlclNlcnZpY2VcbiAgKSB7fVxuXG4gIGxvYWRMYW5ndWFnZXMoKTogT2JzZXJ2YWJsZTxMYW5ndWFnZVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmdldDxPY2MuTGFuZ3VhZ2VMaXN0Pih0aGlzLm9jY0VuZHBvaW50cy5nZXRFbmRwb2ludCgnbGFuZ3VhZ2VzJykpXG4gICAgICAucGlwZShcbiAgICAgICAgY2F0Y2hFcnJvcigoZXJyb3I6IGFueSkgPT4gdGhyb3dFcnJvcihlcnJvci5qc29uKCkpKSxcbiAgICAgICAgbWFwKGxhbmd1YWdlTGlzdCA9PiBsYW5ndWFnZUxpc3QubGFuZ3VhZ2VzKSxcbiAgICAgICAgdGhpcy5jb252ZXJ0ZXIucGlwZWFibGVNYW55KExBTkdVQUdFX05PUk1BTElaRVIpXG4gICAgICApO1xuICB9XG5cbiAgbG9hZEN1cnJlbmNpZXMoKTogT2JzZXJ2YWJsZTxDdXJyZW5jeVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmdldDxPY2MuQ3VycmVuY3lMaXN0Pih0aGlzLm9jY0VuZHBvaW50cy5nZXRFbmRwb2ludCgnY3VycmVuY2llcycpKVxuICAgICAgLnBpcGUoXG4gICAgICAgIGNhdGNoRXJyb3IoKGVycm9yOiBhbnkpID0+IHRocm93RXJyb3IoZXJyb3IuanNvbigpKSksXG4gICAgICAgIG1hcChjdXJyZW5jeUxpc3QgPT4gY3VycmVuY3lMaXN0LmN1cnJlbmNpZXMpLFxuICAgICAgICB0aGlzLmNvbnZlcnRlci5waXBlYWJsZU1hbnkoQ1VSUkVOQ1lfTk9STUFMSVpFUilcbiAgICAgICk7XG4gIH1cblxuICBsb2FkQmFzZVNpdGUoKTogT2JzZXJ2YWJsZTxCYXNlU2l0ZT4ge1xuICAgIGNvbnN0IGJhc2VVcmwgPSB0aGlzLm9jY0VuZHBvaW50cy5nZXRCYXNlRW5kcG9pbnQoKTtcbiAgICBjb25zdCB1cmxTcGxpdHMgPSBiYXNlVXJsLnNwbGl0KCcvJyk7XG4gICAgY29uc3QgYWN0aXZlU2l0ZSA9IHVybFNwbGl0cy5wb3AoKTtcbiAgICBjb25zdCB1cmwgPSB1cmxTcGxpdHMuam9pbignLycpICsgJy9iYXNlc2l0ZXMnO1xuXG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoe1xuICAgICAgZnJvbVN0cmluZzogJ2ZpZWxkcz1GVUxMJyxcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5nZXQ8eyBiYXNlU2l0ZXM6IEJhc2VTaXRlW10gfT4odXJsLCB7IHBhcmFtczogcGFyYW1zIH0pXG4gICAgICAucGlwZShcbiAgICAgICAgY2F0Y2hFcnJvcigoZXJyb3I6IGFueSkgPT4gdGhyb3dFcnJvcihlcnJvcikpLFxuICAgICAgICBtYXAoc2l0ZUxpc3QgPT4ge1xuICAgICAgICAgIHJldHVybiBzaXRlTGlzdC5iYXNlU2l0ZXMuZmluZChzaXRlID0+IHNpdGUudWlkID09PSBhY3RpdmVTaXRlKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gIH1cbn1cbiJdfQ==