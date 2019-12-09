/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SAVE_CART_NORMALIZER } from '../../../cart/connectors/save-cart/converters';
import { ConverterService } from '../../../util/converter.service';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
export class OccSaveCartAdapter {
    /**
     * @param {?} http
     * @param {?} occEndpointsService
     * @param {?} converterService
     */
    constructor(http, occEndpointsService, converterService) {
        this.http = http;
        this.occEndpointsService = occEndpointsService;
        this.converterService = converterService;
    }
    /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?=} saveCartName
     * @param {?=} saveCartDescription
     * @return {?}
     */
    saveCart(userId, cartId, saveCartName, saveCartDescription) {
        /** @type {?} */
        let httpParams = new HttpParams();
        if (Boolean(saveCartName)) {
            httpParams = httpParams.set('saveCartName', saveCartName);
        }
        if (Boolean(saveCartDescription)) {
            httpParams = httpParams.set('saveCartDescription', saveCartDescription);
        }
        /** @type {?} */
        const headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        return this.http
            .patch(this.occEndpointsService.getUrl('saveCart', { userId, cartId }), httpParams, { headers })
            .pipe(this.converterService.pipeable(SAVE_CART_NORMALIZER));
    }
}
OccSaveCartAdapter.decorators = [
    { type: Injectable }
];
/** @nocollapse */
OccSaveCartAdapter.ctorParameters = () => [
    { type: HttpClient },
    { type: OccEndpointsService },
    { type: ConverterService }
];
if (false) {
    /**
     * @type {?}
     * @protected
     */
    OccSaveCartAdapter.prototype.http;
    /**
     * @type {?}
     * @protected
     */
    OccSaveCartAdapter.prototype.occEndpointsService;
    /**
     * @type {?}
     * @protected
     */
    OccSaveCartAdapter.prototype.converterService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXNhdmUtY2FydC5hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL29jYy9hZGFwdGVycy9jYXJ0L29jYy1zYXZlLWNhcnQuYWRhcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDM0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUdyRixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUVuRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUczRSxNQUFNLE9BQU8sa0JBQWtCOzs7Ozs7SUFDN0IsWUFDWSxJQUFnQixFQUNoQixtQkFBd0MsRUFDeEMsZ0JBQWtDO1FBRmxDLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUN4QyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBQzNDLENBQUM7Ozs7Ozs7O0lBRUcsUUFBUSxDQUNiLE1BQWMsRUFDZCxNQUFjLEVBQ2QsWUFBcUIsRUFDckIsbUJBQTRCOztZQUV4QixVQUFVLEdBQUcsSUFBSSxVQUFVLEVBQUU7UUFFakMsSUFBSSxPQUFPLENBQUMsWUFBWSxDQUFDLEVBQUU7WUFDekIsVUFBVSxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLFlBQVksQ0FBQyxDQUFDO1NBQzNEO1FBRUQsSUFBSSxPQUFPLENBQUMsbUJBQW1CLENBQUMsRUFBRTtZQUNoQyxVQUFVLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO1NBQ3pFOztjQUVLLE9BQU8sR0FBRyxJQUFJLFdBQVcsQ0FBQztZQUM5QixjQUFjLEVBQUUsbUNBQW1DO1NBQ3BELENBQUM7UUFFRixPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2IsS0FBSyxDQUNKLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQy9ELFVBQVUsRUFDVixFQUFFLE9BQU8sRUFBRSxDQUNaO2FBQ0EsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7OztZQW5DRixVQUFVOzs7O1lBVkYsVUFBVTtZQVFWLG1CQUFtQjtZQUZuQixnQkFBZ0I7Ozs7Ozs7SUFPckIsa0NBQTBCOzs7OztJQUMxQixpREFBa0Q7Ozs7O0lBQ2xELDhDQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzLCBIdHRwUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgU0FWRV9DQVJUX05PUk1BTElaRVIgfSBmcm9tICcuLi8uLi8uLi9jYXJ0L2Nvbm5lY3RvcnMvc2F2ZS1jYXJ0L2NvbnZlcnRlcnMnO1xuaW1wb3J0IHsgU2F2ZUNhcnRBZGFwdGVyIH0gZnJvbSAnLi4vLi4vLi4vY2FydC9jb25uZWN0b3JzL3NhdmUtY2FydC9zYXZlLWNhcnQuYWRhcHRlcic7XG5pbXBvcnQgeyBTYXZlQ2FydFJlc3VsdCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2NhcnQubW9kZWwnO1xuaW1wb3J0IHsgQ29udmVydGVyU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvY29udmVydGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgT2NjIH0gZnJvbSAnLi4vLi4vb2NjLW1vZGVscy9vY2MubW9kZWxzJztcbmltcG9ydCB7IE9jY0VuZHBvaW50c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9vY2MtZW5kcG9pbnRzLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT2NjU2F2ZUNhcnRBZGFwdGVyIGltcGxlbWVudHMgU2F2ZUNhcnRBZGFwdGVyIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgcHJvdGVjdGVkIG9jY0VuZHBvaW50c1NlcnZpY2U6IE9jY0VuZHBvaW50c1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNvbnZlcnRlclNlcnZpY2U6IENvbnZlcnRlclNlcnZpY2VcbiAgKSB7fVxuXG4gIHB1YmxpYyBzYXZlQ2FydChcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBjYXJ0SWQ6IHN0cmluZyxcbiAgICBzYXZlQ2FydE5hbWU/OiBzdHJpbmcsXG4gICAgc2F2ZUNhcnREZXNjcmlwdGlvbj86IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPFNhdmVDYXJ0UmVzdWx0PiB7XG4gICAgbGV0IGh0dHBQYXJhbXMgPSBuZXcgSHR0cFBhcmFtcygpO1xuXG4gICAgaWYgKEJvb2xlYW4oc2F2ZUNhcnROYW1lKSkge1xuICAgICAgaHR0cFBhcmFtcyA9IGh0dHBQYXJhbXMuc2V0KCdzYXZlQ2FydE5hbWUnLCBzYXZlQ2FydE5hbWUpO1xuICAgIH1cblxuICAgIGlmIChCb29sZWFuKHNhdmVDYXJ0RGVzY3JpcHRpb24pKSB7XG4gICAgICBodHRwUGFyYW1zID0gaHR0cFBhcmFtcy5zZXQoJ3NhdmVDYXJ0RGVzY3JpcHRpb24nLCBzYXZlQ2FydERlc2NyaXB0aW9uKTtcbiAgICB9XG5cbiAgICBjb25zdCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5wYXRjaDxPY2MuU2F2ZUNhcnRSZXN1bHQ+KFxuICAgICAgICB0aGlzLm9jY0VuZHBvaW50c1NlcnZpY2UuZ2V0VXJsKCdzYXZlQ2FydCcsIHsgdXNlcklkLCBjYXJ0SWQgfSksXG4gICAgICAgIGh0dHBQYXJhbXMsXG4gICAgICAgIHsgaGVhZGVycyB9XG4gICAgICApXG4gICAgICAucGlwZSh0aGlzLmNvbnZlcnRlclNlcnZpY2UucGlwZWFibGUoU0FWRV9DQVJUX05PUk1BTElaRVIpKTtcbiAgfVxufVxuIl19