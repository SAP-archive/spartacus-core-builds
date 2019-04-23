/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PageType } from '../../occ/occ-models/index';
import { OccEndpointsService } from '../../occ/services/occ-endpoints.service';
import { CMS_PAGE_NORMALIZE } from '../connectors/page/converters';
import { ConverterService } from '../../util/converter.service';
export class OccCmsPageAdapter {
    /**
     * @param {?} http
     * @param {?} occEndpoints
     * @param {?} converter
     */
    constructor(http, occEndpoints, converter) {
        this.http = http;
        this.occEndpoints = occEndpoints;
        this.converter = converter;
        this.headers = new HttpHeaders().set('Content-Type', 'application/json');
    }
    /**
     * @protected
     * @return {?}
     */
    getBaseEndPoint() {
        return this.occEndpoints.getEndpoint('cms');
    }
    /**
     * @param {?} pageContext
     * @param {?=} fields
     * @return {?}
     */
    load(pageContext, fields) {
        /** @type {?} */
        let httpStringParams = '';
        if (pageContext.id !== 'smartedit-preview') {
            httpStringParams = 'pageType=' + pageContext.type;
            if (pageContext.type === PageType.CONTENT_PAGE) {
                httpStringParams =
                    httpStringParams + '&pageLabelOrId=' + pageContext.id;
            }
            else {
                httpStringParams = httpStringParams + '&code=' + pageContext.id;
            }
        }
        if (fields !== undefined) {
            httpStringParams = httpStringParams + '&fields=' + fields;
        }
        return this.http
            .get(this.getBaseEndPoint() + `/pages`, {
            headers: this.headers,
            params: new HttpParams({
                fromString: httpStringParams,
            }),
        })
            .pipe(this.converter.pipeable(CMS_PAGE_NORMALIZE));
    }
}
OccCmsPageAdapter.decorators = [
    { type: Injectable }
];
/** @nocollapse */
OccCmsPageAdapter.ctorParameters = () => [
    { type: HttpClient },
    { type: OccEndpointsService },
    { type: ConverterService }
];
if (false) {
    /**
     * @type {?}
     * @protected
     */
    OccCmsPageAdapter.prototype.headers;
    /**
     * @type {?}
     * @private
     */
    OccCmsPageAdapter.prototype.http;
    /**
     * @type {?}
     * @private
     */
    OccCmsPageAdapter.prototype.occEndpoints;
    /**
     * @type {?}
     * @protected
     */
    OccCmsPageAdapter.prototype.converter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNtcy1wYWdlLmFkYXB0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL29jYy9vY2MtY21zLXBhZ2UuYWRhcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDM0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDdEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFHL0UsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDbkUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFJaEUsTUFBTSxPQUFPLGlCQUFpQjs7Ozs7O0lBRzVCLFlBQ1UsSUFBZ0IsRUFDaEIsWUFBaUMsRUFDL0IsU0FBMkI7UUFGN0IsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixpQkFBWSxHQUFaLFlBQVksQ0FBcUI7UUFDL0IsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFMN0IsWUFBTyxHQUFHLElBQUksV0FBVyxFQUFFLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO0lBTTNFLENBQUM7Ozs7O0lBRU0sZUFBZTtRQUN2QixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlDLENBQUM7Ozs7OztJQUVELElBQUksQ0FDRixXQUF3QixFQUN4QixNQUFlOztZQUVYLGdCQUFnQixHQUFHLEVBQUU7UUFFekIsSUFBSSxXQUFXLENBQUMsRUFBRSxLQUFLLG1CQUFtQixFQUFFO1lBQzFDLGdCQUFnQixHQUFHLFdBQVcsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDO1lBRWxELElBQUksV0FBVyxDQUFDLElBQUksS0FBSyxRQUFRLENBQUMsWUFBWSxFQUFFO2dCQUM5QyxnQkFBZ0I7b0JBQ2QsZ0JBQWdCLEdBQUcsaUJBQWlCLEdBQUcsV0FBVyxDQUFDLEVBQUUsQ0FBQzthQUN6RDtpQkFBTTtnQkFDTCxnQkFBZ0IsR0FBRyxnQkFBZ0IsR0FBRyxRQUFRLEdBQUcsV0FBVyxDQUFDLEVBQUUsQ0FBQzthQUNqRTtTQUNGO1FBRUQsSUFBSSxNQUFNLEtBQUssU0FBUyxFQUFFO1lBQ3hCLGdCQUFnQixHQUFHLGdCQUFnQixHQUFHLFVBQVUsR0FBRyxNQUFNLENBQUM7U0FDM0Q7UUFFRCxPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2IsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsR0FBRyxRQUFRLEVBQUU7WUFDdEMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1lBQ3JCLE1BQU0sRUFBRSxJQUFJLFVBQVUsQ0FBQztnQkFDckIsVUFBVSxFQUFFLGdCQUFnQjthQUM3QixDQUFDO1NBQ0gsQ0FBQzthQUNELElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7SUFDdkQsQ0FBQzs7O1lBM0NGLFVBQVU7Ozs7WUFYRixVQUFVO1lBSVYsbUJBQW1CO1lBSW5CLGdCQUFnQjs7Ozs7OztJQUt2QixvQ0FBOEU7Ozs7O0lBRzVFLGlDQUF3Qjs7Ozs7SUFDeEIseUNBQXlDOzs7OztJQUN6QyxzQ0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycywgSHR0cFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFBhZ2VUeXBlIH0gZnJvbSAnLi4vLi4vb2NjL29jYy1tb2RlbHMvaW5kZXgnO1xuaW1wb3J0IHsgT2NjRW5kcG9pbnRzU2VydmljZSB9IGZyb20gJy4uLy4uL29jYy9zZXJ2aWNlcy9vY2MtZW5kcG9pbnRzLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGFnZUNvbnRleHQgfSBmcm9tICcuLi8uLi9yb3V0aW5nL2luZGV4JztcbmltcG9ydCB7IENtc1BhZ2VBZGFwdGVyIH0gZnJvbSAnLi4vY29ubmVjdG9ycy9wYWdlL2Ntcy1wYWdlLmFkYXB0ZXInO1xuaW1wb3J0IHsgQ01TX1BBR0VfTk9STUFMSVpFIH0gZnJvbSAnLi4vY29ubmVjdG9ycy9wYWdlL2NvbnZlcnRlcnMnO1xuaW1wb3J0IHsgQ29udmVydGVyU2VydmljZSB9IGZyb20gJy4uLy4uL3V0aWwvY29udmVydGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ21zU3RydWN0dXJlTW9kZWwgfSBmcm9tICcuLi9tb2RlbC9wYWdlLm1vZGVsJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE9jY0Ntc1BhZ2VBZGFwdGVyIGltcGxlbWVudHMgQ21zUGFnZUFkYXB0ZXIge1xuICBwcm90ZWN0ZWQgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpLnNldCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgcHJpdmF0ZSBvY2NFbmRwb2ludHM6IE9jY0VuZHBvaW50c1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNvbnZlcnRlcjogQ29udmVydGVyU2VydmljZVxuICApIHt9XG5cbiAgcHJvdGVjdGVkIGdldEJhc2VFbmRQb2ludCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLm9jY0VuZHBvaW50cy5nZXRFbmRwb2ludCgnY21zJyk7XG4gIH1cblxuICBsb2FkKFxuICAgIHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dCxcbiAgICBmaWVsZHM/OiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxDbXNTdHJ1Y3R1cmVNb2RlbD4ge1xuICAgIGxldCBodHRwU3RyaW5nUGFyYW1zID0gJyc7XG5cbiAgICBpZiAocGFnZUNvbnRleHQuaWQgIT09ICdzbWFydGVkaXQtcHJldmlldycpIHtcbiAgICAgIGh0dHBTdHJpbmdQYXJhbXMgPSAncGFnZVR5cGU9JyArIHBhZ2VDb250ZXh0LnR5cGU7XG5cbiAgICAgIGlmIChwYWdlQ29udGV4dC50eXBlID09PSBQYWdlVHlwZS5DT05URU5UX1BBR0UpIHtcbiAgICAgICAgaHR0cFN0cmluZ1BhcmFtcyA9XG4gICAgICAgICAgaHR0cFN0cmluZ1BhcmFtcyArICcmcGFnZUxhYmVsT3JJZD0nICsgcGFnZUNvbnRleHQuaWQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBodHRwU3RyaW5nUGFyYW1zID0gaHR0cFN0cmluZ1BhcmFtcyArICcmY29kZT0nICsgcGFnZUNvbnRleHQuaWQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGZpZWxkcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBodHRwU3RyaW5nUGFyYW1zID0gaHR0cFN0cmluZ1BhcmFtcyArICcmZmllbGRzPScgKyBmaWVsZHM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmdldCh0aGlzLmdldEJhc2VFbmRQb2ludCgpICsgYC9wYWdlc2AsIHtcbiAgICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJzLFxuICAgICAgICBwYXJhbXM6IG5ldyBIdHRwUGFyYW1zKHtcbiAgICAgICAgICBmcm9tU3RyaW5nOiBodHRwU3RyaW5nUGFyYW1zLFxuICAgICAgICB9KSxcbiAgICAgIH0pXG4gICAgICAucGlwZSh0aGlzLmNvbnZlcnRlci5waXBlYWJsZShDTVNfUEFHRV9OT1JNQUxJWkUpKTtcbiAgfVxufVxuIl19