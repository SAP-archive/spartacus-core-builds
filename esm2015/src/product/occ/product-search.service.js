/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { OccEndpointsService } from '../../occ/services/occ-endpoints.service';
/** @type {?} */
const DEFAULT_SEARCH_CONFIG = {
    pageSize: 20,
};
export class ProductSearchLoaderService {
    /**
     * @param {?} http
     * @param {?} occEndpoints
     */
    constructor(http, occEndpoints) {
        this.http = http;
        this.occEndpoints = occEndpoints;
    }
    /**
     * @param {?} fullQuery
     * @param {?=} searchConfig
     * @return {?}
     */
    loadSearch(fullQuery, searchConfig = DEFAULT_SEARCH_CONFIG) {
        return this.http
            .get(this.getSearchEndpoint(fullQuery, searchConfig))
            .pipe(catchError((error) => throwError(error.json())));
    }
    /**
     * @param {?} term
     * @param {?=} pageSize
     * @return {?}
     */
    loadSuggestions(term, pageSize = 3) {
        return this.http
            .get(this.getSuggestionEndpoint(term, pageSize.toString()))
            .pipe(catchError((error) => throwError(error.json())));
    }
    /**
     * @protected
     * @param {?} query
     * @param {?} searchConfig
     * @return {?}
     */
    getSearchEndpoint(query, searchConfig) {
        return this.occEndpoints.getUrl('productSearch', {
            query,
        }, {
            pageSize: searchConfig.pageSize,
            currentPage: searchConfig.currentPage,
            sort: searchConfig.sortCode,
        });
    }
    /**
     * @protected
     * @param {?} term
     * @param {?} max
     * @return {?}
     */
    getSuggestionEndpoint(term, max) {
        return this.occEndpoints.getUrl('productSuggestions', {
            term,
            max,
        });
    }
}
ProductSearchLoaderService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ProductSearchLoaderService.ctorParameters = () => [
    { type: HttpClient },
    { type: OccEndpointsService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ProductSearchLoaderService.prototype.http;
    /**
     * @type {?}
     * @private
     */
    ProductSearchLoaderService.prototype.occEndpoints;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1zZWFyY2guc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9wcm9kdWN0L29jYy9wcm9kdWN0LXNlYXJjaC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVsRCxPQUFPLEVBQUUsVUFBVSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQVE1QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQzs7TUFFekUscUJBQXFCLEdBQWlCO0lBQzFDLFFBQVEsRUFBRSxFQUFFO0NBQ2I7QUFHRCxNQUFNLE9BQU8sMEJBQTBCOzs7OztJQUNyQyxZQUNVLElBQWdCLEVBQ2hCLFlBQWlDO1FBRGpDLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsaUJBQVksR0FBWixZQUFZLENBQXFCO0lBQ3hDLENBQUM7Ozs7OztJQUVKLFVBQVUsQ0FDUixTQUFpQixFQUNqQixlQUE2QixxQkFBcUI7UUFFbEQsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLEdBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxFQUFFLFlBQVksQ0FBQyxDQUFDO2FBQ3BELElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFVLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEUsQ0FBQzs7Ozs7O0lBRUQsZUFBZSxDQUFDLElBQVksRUFBRSxRQUFRLEdBQUcsQ0FBQztRQUN4QyxPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2IsR0FBRyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7YUFDMUQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQVUsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoRSxDQUFDOzs7Ozs7O0lBRVMsaUJBQWlCLENBQ3pCLEtBQWEsRUFDYixZQUEwQjtRQUUxQixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUM3QixlQUFlLEVBQ2Y7WUFDRSxLQUFLO1NBQ04sRUFDRDtZQUNFLFFBQVEsRUFBRSxZQUFZLENBQUMsUUFBUTtZQUMvQixXQUFXLEVBQUUsWUFBWSxDQUFDLFdBQVc7WUFDckMsSUFBSSxFQUFFLFlBQVksQ0FBQyxRQUFRO1NBQzVCLENBQ0YsQ0FBQztJQUNKLENBQUM7Ozs7Ozs7SUFFUyxxQkFBcUIsQ0FBQyxJQUFZLEVBQUUsR0FBVztRQUN2RCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLG9CQUFvQixFQUFFO1lBQ3BELElBQUk7WUFDSixHQUFHO1NBQ0osQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBNUNGLFVBQVU7Ozs7WUFqQkYsVUFBVTtZQVdWLG1CQUFtQjs7Ozs7OztJQVN4QiwwQ0FBd0I7Ozs7O0lBQ3hCLGtEQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmltcG9ydCB7IHRocm93RXJyb3IsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFNlYXJjaENvbmZpZyB9IGZyb20gJy4uL21vZGVsL3NlYXJjaC1jb25maWcnO1xuaW1wb3J0IHtcbiAgU3VnZ2VzdGlvbkxpc3QsXG4gIFByb2R1Y3RTZWFyY2hQYWdlLFxufSBmcm9tICcuLi8uLi9vY2Mvb2NjLW1vZGVscy9vY2MubW9kZWxzJztcblxuaW1wb3J0IHsgT2NjRW5kcG9pbnRzU2VydmljZSB9IGZyb20gJy4uLy4uL29jYy9zZXJ2aWNlcy9vY2MtZW5kcG9pbnRzLnNlcnZpY2UnO1xuXG5jb25zdCBERUZBVUxUX1NFQVJDSF9DT05GSUc6IFNlYXJjaENvbmZpZyA9IHtcbiAgcGFnZVNpemU6IDIwLFxufTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RTZWFyY2hMb2FkZXJTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByaXZhdGUgb2NjRW5kcG9pbnRzOiBPY2NFbmRwb2ludHNTZXJ2aWNlXG4gICkge31cblxuICBsb2FkU2VhcmNoKFxuICAgIGZ1bGxRdWVyeTogc3RyaW5nLFxuICAgIHNlYXJjaENvbmZpZzogU2VhcmNoQ29uZmlnID0gREVGQVVMVF9TRUFSQ0hfQ09ORklHXG4gICk6IE9ic2VydmFibGU8UHJvZHVjdFNlYXJjaFBhZ2U+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0KHRoaXMuZ2V0U2VhcmNoRW5kcG9pbnQoZnVsbFF1ZXJ5LCBzZWFyY2hDb25maWcpKVxuICAgICAgLnBpcGUoY2F0Y2hFcnJvcigoZXJyb3I6IGFueSkgPT4gdGhyb3dFcnJvcihlcnJvci5qc29uKCkpKSk7XG4gIH1cblxuICBsb2FkU3VnZ2VzdGlvbnModGVybTogc3RyaW5nLCBwYWdlU2l6ZSA9IDMpOiBPYnNlcnZhYmxlPFN1Z2dlc3Rpb25MaXN0PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmdldCh0aGlzLmdldFN1Z2dlc3Rpb25FbmRwb2ludCh0ZXJtLCBwYWdlU2l6ZS50b1N0cmluZygpKSlcbiAgICAgIC5waXBlKGNhdGNoRXJyb3IoKGVycm9yOiBhbnkpID0+IHRocm93RXJyb3IoZXJyb3IuanNvbigpKSkpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldFNlYXJjaEVuZHBvaW50KFxuICAgIHF1ZXJ5OiBzdHJpbmcsXG4gICAgc2VhcmNoQ29uZmlnOiBTZWFyY2hDb25maWdcbiAgKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5vY2NFbmRwb2ludHMuZ2V0VXJsKFxuICAgICAgJ3Byb2R1Y3RTZWFyY2gnLFxuICAgICAge1xuICAgICAgICBxdWVyeSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhZ2VTaXplOiBzZWFyY2hDb25maWcucGFnZVNpemUsXG4gICAgICAgIGN1cnJlbnRQYWdlOiBzZWFyY2hDb25maWcuY3VycmVudFBhZ2UsXG4gICAgICAgIHNvcnQ6IHNlYXJjaENvbmZpZy5zb3J0Q29kZSxcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldFN1Z2dlc3Rpb25FbmRwb2ludCh0ZXJtOiBzdHJpbmcsIG1heDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5vY2NFbmRwb2ludHMuZ2V0VXJsKCdwcm9kdWN0U3VnZ2VzdGlvbnMnLCB7XG4gICAgICB0ZXJtLFxuICAgICAgbWF4LFxuICAgIH0pO1xuICB9XG59XG4iXX0=