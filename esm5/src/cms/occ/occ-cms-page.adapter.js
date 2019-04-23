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
var OccCmsPageAdapter = /** @class */ (function () {
    function OccCmsPageAdapter(http, occEndpoints, converter) {
        this.http = http;
        this.occEndpoints = occEndpoints;
        this.converter = converter;
        this.headers = new HttpHeaders().set('Content-Type', 'application/json');
    }
    /**
     * @protected
     * @return {?}
     */
    OccCmsPageAdapter.prototype.getBaseEndPoint = /**
     * @protected
     * @return {?}
     */
    function () {
        return this.occEndpoints.getEndpoint('cms');
    };
    /**
     * @param {?} pageContext
     * @param {?=} fields
     * @return {?}
     */
    OccCmsPageAdapter.prototype.load = /**
     * @param {?} pageContext
     * @param {?=} fields
     * @return {?}
     */
    function (pageContext, fields) {
        /** @type {?} */
        var httpStringParams = '';
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
            .get(this.getBaseEndPoint() + "/pages", {
            headers: this.headers,
            params: new HttpParams({
                fromString: httpStringParams,
            }),
        })
            .pipe(this.converter.pipeable(CMS_PAGE_NORMALIZE));
    };
    OccCmsPageAdapter.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    OccCmsPageAdapter.ctorParameters = function () { return [
        { type: HttpClient },
        { type: OccEndpointsService },
        { type: ConverterService }
    ]; };
    return OccCmsPageAdapter;
}());
export { OccCmsPageAdapter };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNtcy1wYWdlLmFkYXB0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL29jYy9vY2MtY21zLXBhZ2UuYWRhcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDM0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDdEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFHL0UsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDbkUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFHaEU7SUFJRSwyQkFDVSxJQUFnQixFQUNoQixZQUFpQyxFQUMvQixTQUEyQjtRQUY3QixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLGlCQUFZLEdBQVosWUFBWSxDQUFxQjtRQUMvQixjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUw3QixZQUFPLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7SUFNM0UsQ0FBQzs7Ozs7SUFFTSwyQ0FBZTs7OztJQUF6QjtRQUNFLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDOUMsQ0FBQzs7Ozs7O0lBRUQsZ0NBQUk7Ozs7O0lBQUosVUFDRSxXQUF3QixFQUN4QixNQUFlOztZQUVYLGdCQUFnQixHQUFHLEVBQUU7UUFFekIsSUFBSSxXQUFXLENBQUMsRUFBRSxLQUFLLG1CQUFtQixFQUFFO1lBQzFDLGdCQUFnQixHQUFHLFdBQVcsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDO1lBRWxELElBQUksV0FBVyxDQUFDLElBQUksS0FBSyxRQUFRLENBQUMsWUFBWSxFQUFFO2dCQUM5QyxnQkFBZ0I7b0JBQ2QsZ0JBQWdCLEdBQUcsaUJBQWlCLEdBQUcsV0FBVyxDQUFDLEVBQUUsQ0FBQzthQUN6RDtpQkFBTTtnQkFDTCxnQkFBZ0IsR0FBRyxnQkFBZ0IsR0FBRyxRQUFRLEdBQUcsV0FBVyxDQUFDLEVBQUUsQ0FBQzthQUNqRTtTQUNGO1FBRUQsSUFBSSxNQUFNLEtBQUssU0FBUyxFQUFFO1lBQ3hCLGdCQUFnQixHQUFHLGdCQUFnQixHQUFHLFVBQVUsR0FBRyxNQUFNLENBQUM7U0FDM0Q7UUFFRCxPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2IsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsR0FBRyxRQUFRLEVBQUU7WUFDdEMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1lBQ3JCLE1BQU0sRUFBRSxJQUFJLFVBQVUsQ0FBQztnQkFDckIsVUFBVSxFQUFFLGdCQUFnQjthQUM3QixDQUFDO1NBQ0gsQ0FBQzthQUNELElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7SUFDdkQsQ0FBQzs7Z0JBM0NGLFVBQVU7Ozs7Z0JBWEYsVUFBVTtnQkFJVixtQkFBbUI7Z0JBSW5CLGdCQUFnQjs7SUErQ3pCLHdCQUFDO0NBQUEsQUE1Q0QsSUE0Q0M7U0EzQ1ksaUJBQWlCOzs7Ozs7SUFDNUIsb0NBQThFOzs7OztJQUc1RSxpQ0FBd0I7Ozs7O0lBQ3hCLHlDQUF5Qzs7Ozs7SUFDekMsc0NBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMsIEh0dHBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBQYWdlVHlwZSB9IGZyb20gJy4uLy4uL29jYy9vY2MtbW9kZWxzL2luZGV4JztcbmltcG9ydCB7IE9jY0VuZHBvaW50c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9vY2Mvc2VydmljZXMvb2NjLWVuZHBvaW50cy5zZXJ2aWNlJztcbmltcG9ydCB7IFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vLi4vcm91dGluZy9pbmRleCc7XG5pbXBvcnQgeyBDbXNQYWdlQWRhcHRlciB9IGZyb20gJy4uL2Nvbm5lY3RvcnMvcGFnZS9jbXMtcGFnZS5hZGFwdGVyJztcbmltcG9ydCB7IENNU19QQUdFX05PUk1BTElaRSB9IGZyb20gJy4uL2Nvbm5lY3RvcnMvcGFnZS9jb252ZXJ0ZXJzJztcbmltcG9ydCB7IENvbnZlcnRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi91dGlsL2NvbnZlcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7IENtc1N0cnVjdHVyZU1vZGVsIH0gZnJvbSAnLi4vbW9kZWwvcGFnZS5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBPY2NDbXNQYWdlQWRhcHRlciBpbXBsZW1lbnRzIENtc1BhZ2VBZGFwdGVyIHtcbiAgcHJvdGVjdGVkIGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoKS5zZXQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByaXZhdGUgb2NjRW5kcG9pbnRzOiBPY2NFbmRwb2ludHNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjb252ZXJ0ZXI6IENvbnZlcnRlclNlcnZpY2VcbiAgKSB7fVxuXG4gIHByb3RlY3RlZCBnZXRCYXNlRW5kUG9pbnQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5vY2NFbmRwb2ludHMuZ2V0RW5kcG9pbnQoJ2NtcycpO1xuICB9XG5cbiAgbG9hZChcbiAgICBwYWdlQ29udGV4dDogUGFnZUNvbnRleHQsXG4gICAgZmllbGRzPzogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8Q21zU3RydWN0dXJlTW9kZWw+IHtcbiAgICBsZXQgaHR0cFN0cmluZ1BhcmFtcyA9ICcnO1xuXG4gICAgaWYgKHBhZ2VDb250ZXh0LmlkICE9PSAnc21hcnRlZGl0LXByZXZpZXcnKSB7XG4gICAgICBodHRwU3RyaW5nUGFyYW1zID0gJ3BhZ2VUeXBlPScgKyBwYWdlQ29udGV4dC50eXBlO1xuXG4gICAgICBpZiAocGFnZUNvbnRleHQudHlwZSA9PT0gUGFnZVR5cGUuQ09OVEVOVF9QQUdFKSB7XG4gICAgICAgIGh0dHBTdHJpbmdQYXJhbXMgPVxuICAgICAgICAgIGh0dHBTdHJpbmdQYXJhbXMgKyAnJnBhZ2VMYWJlbE9ySWQ9JyArIHBhZ2VDb250ZXh0LmlkO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaHR0cFN0cmluZ1BhcmFtcyA9IGh0dHBTdHJpbmdQYXJhbXMgKyAnJmNvZGU9JyArIHBhZ2VDb250ZXh0LmlkO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChmaWVsZHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaHR0cFN0cmluZ1BhcmFtcyA9IGh0dHBTdHJpbmdQYXJhbXMgKyAnJmZpZWxkcz0nICsgZmllbGRzO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5nZXQodGhpcy5nZXRCYXNlRW5kUG9pbnQoKSArIGAvcGFnZXNgLCB7XG4gICAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVycyxcbiAgICAgICAgcGFyYW1zOiBuZXcgSHR0cFBhcmFtcyh7XG4gICAgICAgICAgZnJvbVN0cmluZzogaHR0cFN0cmluZ1BhcmFtcyxcbiAgICAgICAgfSksXG4gICAgICB9KVxuICAgICAgLnBpcGUodGhpcy5jb252ZXJ0ZXIucGlwZWFibGUoQ01TX1BBR0VfTk9STUFMSVpFKSk7XG4gIH1cbn1cbiJdfQ==