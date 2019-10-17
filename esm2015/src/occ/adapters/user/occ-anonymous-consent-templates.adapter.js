/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { CONSENT_TEMPLATE_NORMALIZER } from '../../../user/connectors/consent/converters';
import { ConverterService } from '../../../util/converter.service';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
export class OccAnonymousConsentTemplatesAdapter {
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
    loadAnonymousConsentTemplates() {
        /** @type {?} */
        const url = this.occEndpoints.getUrl('anonymousConsentTemplates');
        return this.http.get(url).pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => throwError(error))), map((/**
         * @param {?} consentList
         * @return {?}
         */
        consentList => consentList.consentTemplates)), this.converter.pipeableMany(CONSENT_TEMPLATE_NORMALIZER));
    }
}
OccAnonymousConsentTemplatesAdapter.decorators = [
    { type: Injectable }
];
/** @nocollapse */
OccAnonymousConsentTemplatesAdapter.ctorParameters = () => [
    { type: HttpClient },
    { type: OccEndpointsService },
    { type: ConverterService }
];
if (false) {
    /**
     * @type {?}
     * @protected
     */
    OccAnonymousConsentTemplatesAdapter.prototype.http;
    /**
     * @type {?}
     * @protected
     */
    OccAnonymousConsentTemplatesAdapter.prototype.occEndpoints;
    /**
     * @type {?}
     * @protected
     */
    OccAnonymousConsentTemplatesAdapter.prototype.converter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWFub255bW91cy1jb25zZW50LXRlbXBsYXRlcy5hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL29jYy9hZGFwdGVycy91c2VyL29jYy1hbm9ueW1vdXMtY29uc2VudC10ZW1wbGF0ZXMuYWRhcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM5QyxPQUFPLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR2pELE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQzFGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRW5FLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRzNFLE1BQU0sT0FBTyxtQ0FBbUM7Ozs7OztJQUU5QyxZQUNZLElBQWdCLEVBQ2hCLFlBQWlDLEVBQ2pDLFNBQTJCO1FBRjNCLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsaUJBQVksR0FBWixZQUFZLENBQXFCO1FBQ2pDLGNBQVMsR0FBVCxTQUFTLENBQWtCO0lBQ3BDLENBQUM7Ozs7SUFFSiw2QkFBNkI7O2NBQ3JCLEdBQUcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQywyQkFBMkIsQ0FBQztRQUNqRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUEwQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQ3JELFVBQVU7Ozs7UUFBQyxLQUFLLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBQyxFQUN0QyxHQUFHOzs7O1FBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLEVBQUMsRUFDaEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsMkJBQTJCLENBQUMsQ0FDekQsQ0FBQztJQUNKLENBQUM7OztZQWhCRixVQUFVOzs7O1lBWEYsVUFBVTtZQVNWLG1CQUFtQjtZQUZuQixnQkFBZ0I7Ozs7Ozs7SUFRckIsbURBQTBCOzs7OztJQUMxQiwyREFBMkM7Ozs7O0lBQzNDLHdEQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzQWRhcHRlciB9IGZyb20gJy4uLy4uLy4uL2Fub255bW91cy1jb25zZW50cy9jb25uZWN0b3JzL2Fub255bW91cy1jb25zZW50LXRlbXBsYXRlcy5hZGFwdGVyJztcbmltcG9ydCB7IENvbnNlbnRUZW1wbGF0ZSB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2NvbnNlbnQubW9kZWwnO1xuaW1wb3J0IHsgQ09OU0VOVF9URU1QTEFURV9OT1JNQUxJWkVSIH0gZnJvbSAnLi4vLi4vLi4vdXNlci9jb25uZWN0b3JzL2NvbnNlbnQvY29udmVydGVycyc7XG5pbXBvcnQgeyBDb252ZXJ0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9jb252ZXJ0ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBPY2MgfSBmcm9tICcuLi8uLi9vY2MtbW9kZWxzL29jYy5tb2RlbHMnO1xuaW1wb3J0IHsgT2NjRW5kcG9pbnRzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL29jYy1lbmRwb2ludHMuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBPY2NBbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzQWRhcHRlclxuICBpbXBsZW1lbnRzIEFub255bW91c0NvbnNlbnRUZW1wbGF0ZXNBZGFwdGVyIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgcHJvdGVjdGVkIG9jY0VuZHBvaW50czogT2NjRW5kcG9pbnRzU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY29udmVydGVyOiBDb252ZXJ0ZXJTZXJ2aWNlXG4gICkge31cblxuICBsb2FkQW5vbnltb3VzQ29uc2VudFRlbXBsYXRlcygpOiBPYnNlcnZhYmxlPENvbnNlbnRUZW1wbGF0ZVtdPiB7XG4gICAgY29uc3QgdXJsID0gdGhpcy5vY2NFbmRwb2ludHMuZ2V0VXJsKCdhbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzJyk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8T2NjLkNvbnNlbnRUZW1wbGF0ZUxpc3Q+KHVybCkucGlwZShcbiAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4gdGhyb3dFcnJvcihlcnJvcikpLFxuICAgICAgbWFwKGNvbnNlbnRMaXN0ID0+IGNvbnNlbnRMaXN0LmNvbnNlbnRUZW1wbGF0ZXMpLFxuICAgICAgdGhpcy5jb252ZXJ0ZXIucGlwZWFibGVNYW55KENPTlNFTlRfVEVNUExBVEVfTk9STUFMSVpFUilcbiAgICApO1xuICB9XG59XG4iXX0=