/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpResponse, } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iif } from 'rxjs';
import { switchMap, take, tap, withLatestFrom } from 'rxjs/operators';
import { AuthService } from '../../auth/index';
import { ANONYMOUS_CONSENTS_FEATURE, isFeatureEnabled, } from '../../features-config/index';
import { ANONYMOUS_CONSENT_STATUS } from '../../model/index';
import { OccEndpointsService } from '../../occ/index';
import { AnonymousConsentsConfig } from '../config/anonymous-consents-config';
import { AnonymousConsentsService } from '../facade/anonymous-consents.service';
import * as i0 from "@angular/core";
import * as i1 from "../facade/anonymous-consents.service";
import * as i2 from "../../auth/facade/auth.service";
import * as i3 from "../../occ/services/occ-endpoints.service";
import * as i4 from "../config/anonymous-consents-config";
/** @type {?} */
export const ANONYMOUS_CONSENTS_HEADER = 'X-Anonymous-Consents';
export class AnonymousConsentsInterceptor {
    /**
     * @param {?} anonymousConsentsService
     * @param {?} authService
     * @param {?} occEndpoints
     * @param {?} config
     */
    constructor(anonymousConsentsService, authService, occEndpoints, config) {
        this.anonymousConsentsService = anonymousConsentsService;
        this.authService = authService;
        this.occEndpoints = occEndpoints;
        this.config = config;
    }
    /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    intercept(request, next) {
        return iif((/**
         * @return {?}
         */
        () => isFeatureEnabled(this.config, ANONYMOUS_CONSENTS_FEATURE)), this.anonymousConsentsService.getConsents().pipe(take(1), withLatestFrom(this.authService.isUserLoggedIn()), switchMap((/**
         * @param {?} __0
         * @return {?}
         */
        ([consents, isUserLoggedIn]) => {
            if (!this.isOccUrl(request.url)) {
                return next.handle(request);
            }
            /** @type {?} */
            const clonedRequest = this.handleRequest(consents, request);
            return next.handle(clonedRequest).pipe(tap((/**
             * @param {?} event
             * @return {?}
             */
            event => {
                if (event instanceof HttpResponse) {
                    this.handleResponse(isUserLoggedIn, event.headers.get(ANONYMOUS_CONSENTS_HEADER), consents);
                }
            })));
        }))), next.handle(request));
    }
    /**
     * @private
     * @param {?} isUserLoggedIn
     * @param {?} newRawConsents
     * @param {?} previousConsents
     * @return {?}
     */
    handleResponse(isUserLoggedIn, newRawConsents, previousConsents) {
        if (!isUserLoggedIn && newRawConsents) {
            /** @type {?} */
            let newConsents = [];
            newConsents = this.anonymousConsentsService.decodeAndDeserialize(newRawConsents);
            newConsents = this.giveRequiredConsents(newConsents);
            if (this.anonymousConsentsService.consentsUpdated(newConsents, previousConsents)) {
                this.anonymousConsentsService.setConsents(newConsents);
            }
        }
    }
    /**
     * @private
     * @param {?} consents
     * @param {?} request
     * @return {?}
     */
    handleRequest(consents, request) {
        if (!consents) {
            return request;
        }
        /** @type {?} */
        const rawConsents = this.anonymousConsentsService.serializeAndEncode(consents);
        return request.clone({
            setHeaders: {
                [ANONYMOUS_CONSENTS_HEADER]: rawConsents,
            },
        });
    }
    /**
     * @private
     * @param {?} url
     * @return {?}
     */
    isOccUrl(url) {
        return url.includes(this.occEndpoints.getBaseEndpoint());
    }
    /**
     * @private
     * @param {?} consents
     * @return {?}
     */
    giveRequiredConsents(consents) {
        /** @type {?} */
        const givenConsents = [...consents];
        if (Boolean(this.config.anonymousConsents) &&
            Boolean(this.config.anonymousConsents.requiredConsents)) {
            for (const consent of givenConsents) {
                if (this.config.anonymousConsents.requiredConsents.includes(consent.templateCode)) {
                    consent.consentState = ANONYMOUS_CONSENT_STATUS.GIVEN;
                }
            }
        }
        return givenConsents;
    }
}
AnonymousConsentsInterceptor.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
AnonymousConsentsInterceptor.ctorParameters = () => [
    { type: AnonymousConsentsService },
    { type: AuthService },
    { type: OccEndpointsService },
    { type: AnonymousConsentsConfig }
];
/** @nocollapse */ AnonymousConsentsInterceptor.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function AnonymousConsentsInterceptor_Factory() { return new AnonymousConsentsInterceptor(i0.ɵɵinject(i1.AnonymousConsentsService), i0.ɵɵinject(i2.AuthService), i0.ɵɵinject(i3.OccEndpointsService), i0.ɵɵinject(i4.AnonymousConsentsConfig)); }, token: AnonymousConsentsInterceptor, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    AnonymousConsentsInterceptor.prototype.anonymousConsentsService;
    /**
     * @type {?}
     * @private
     */
    AnonymousConsentsInterceptor.prototype.authService;
    /**
     * @type {?}
     * @private
     */
    AnonymousConsentsInterceptor.prototype.occEndpoints;
    /**
     * @type {?}
     * @private
     */
    AnonymousConsentsInterceptor.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnRzLWludGVyY2VwdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2Fub255bW91cy1jb25zZW50cy9odHRwLWludGVyY2VwdG9ycy9hbm9ueW1vdXMtY29uc2VudHMtaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFLTCxZQUFZLEdBQ2IsTUFBTSxzQkFBc0IsQ0FBQztBQUM5QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxHQUFHLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDdkMsT0FBTyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUMvQyxPQUFPLEVBQ0wsMEJBQTBCLEVBQzFCLGdCQUFnQixHQUNqQixNQUFNLDZCQUE2QixDQUFDO0FBQ3JDLE9BQU8sRUFBb0Isd0JBQXdCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQzs7Ozs7OztBQUVoRixNQUFNLE9BQU8seUJBQXlCLEdBQUcsc0JBQXNCO0FBRy9ELE1BQU0sT0FBTyw0QkFBNEI7Ozs7Ozs7SUFDdkMsWUFDVSx3QkFBa0QsRUFDbEQsV0FBd0IsRUFDeEIsWUFBaUMsRUFDakMsTUFBK0I7UUFIL0IsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUNsRCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixpQkFBWSxHQUFaLFlBQVksQ0FBcUI7UUFDakMsV0FBTSxHQUFOLE1BQU0sQ0FBeUI7SUFDdEMsQ0FBQzs7Ozs7O0lBRUosU0FBUyxDQUNQLE9BQXlCLEVBQ3pCLElBQWlCO1FBRWpCLE9BQU8sR0FBRzs7O1FBQ1IsR0FBRyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSwwQkFBMEIsQ0FBQyxHQUMvRCxJQUFJLENBQUMsd0JBQXdCLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUM5QyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQ1AsY0FBYyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFLENBQUMsRUFDakQsU0FBUzs7OztRQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsY0FBYyxDQUFDLEVBQUUsRUFBRTtZQUN2QyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQy9CLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUM3Qjs7a0JBRUssYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQztZQUMzRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUNwQyxHQUFHOzs7O1lBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ1YsSUFBSSxLQUFLLFlBQVksWUFBWSxFQUFFO29CQUNqQyxJQUFJLENBQUMsY0FBYyxDQUNqQixjQUFjLEVBQ2QsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsRUFDNUMsUUFBUSxDQUNULENBQUM7aUJBQ0g7WUFDSCxDQUFDLEVBQUMsQ0FDSCxDQUFDO1FBQ0osQ0FBQyxFQUFDLENBQ0gsRUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUNyQixDQUFDO0lBQ0osQ0FBQzs7Ozs7Ozs7SUFFTyxjQUFjLENBQ3BCLGNBQXVCLEVBQ3ZCLGNBQXNCLEVBQ3RCLGdCQUFvQztRQUVwQyxJQUFJLENBQUMsY0FBYyxJQUFJLGNBQWMsRUFBRTs7Z0JBQ2pDLFdBQVcsR0FBdUIsRUFBRTtZQUN4QyxXQUFXLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLG9CQUFvQixDQUM5RCxjQUFjLENBQ2YsQ0FBQztZQUNGLFdBQVcsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsV0FBVyxDQUFDLENBQUM7WUFFckQsSUFDRSxJQUFJLENBQUMsd0JBQXdCLENBQUMsZUFBZSxDQUMzQyxXQUFXLEVBQ1gsZ0JBQWdCLENBQ2pCLEVBQ0Q7Z0JBQ0EsSUFBSSxDQUFDLHdCQUF3QixDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUN4RDtTQUNGO0lBQ0gsQ0FBQzs7Ozs7OztJQUVPLGFBQWEsQ0FDbkIsUUFBNEIsRUFDNUIsT0FBeUI7UUFFekIsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNiLE9BQU8sT0FBTyxDQUFDO1NBQ2hCOztjQUVLLFdBQVcsR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsa0JBQWtCLENBQ2xFLFFBQVEsQ0FDVDtRQUNELE9BQU8sT0FBTyxDQUFDLEtBQUssQ0FBQztZQUNuQixVQUFVLEVBQUU7Z0JBQ1YsQ0FBQyx5QkFBeUIsQ0FBQyxFQUFFLFdBQVc7YUFDekM7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7SUFFTyxRQUFRLENBQUMsR0FBVztRQUMxQixPQUFPLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDO0lBQzNELENBQUM7Ozs7OztJQUVPLG9CQUFvQixDQUMxQixRQUE0Qjs7Y0FFdEIsYUFBYSxHQUFHLENBQUMsR0FBRyxRQUFRLENBQUM7UUFFbkMsSUFDRSxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQztZQUN0QyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUN2RDtZQUNBLEtBQUssTUFBTSxPQUFPLElBQUksYUFBYSxFQUFFO2dCQUNuQyxJQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUNyRCxPQUFPLENBQUMsWUFBWSxDQUNyQixFQUNEO29CQUNBLE9BQU8sQ0FBQyxZQUFZLEdBQUcsd0JBQXdCLENBQUMsS0FBSyxDQUFDO2lCQUN2RDthQUNGO1NBQ0Y7UUFDRCxPQUFPLGFBQWEsQ0FBQztJQUN2QixDQUFDOzs7WUExR0YsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7OztZQUp6Qix3QkFBd0I7WUFSeEIsV0FBVztZQU1YLG1CQUFtQjtZQUNuQix1QkFBdUI7Ozs7Ozs7O0lBUTVCLGdFQUEwRDs7Ozs7SUFDMUQsbURBQWdDOzs7OztJQUNoQyxvREFBeUM7Ozs7O0lBQ3pDLDhDQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEh0dHBFdmVudCxcbiAgSHR0cEhhbmRsZXIsXG4gIEh0dHBJbnRlcmNlcHRvcixcbiAgSHR0cFJlcXVlc3QsXG4gIEh0dHBSZXNwb25zZSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaWlmLCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBzd2l0Y2hNYXAsIHRha2UsIHRhcCwgd2l0aExhdGVzdEZyb20gfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL2F1dGgvaW5kZXgnO1xuaW1wb3J0IHtcbiAgQU5PTllNT1VTX0NPTlNFTlRTX0ZFQVRVUkUsXG4gIGlzRmVhdHVyZUVuYWJsZWQsXG59IGZyb20gJy4uLy4uL2ZlYXR1cmVzLWNvbmZpZy9pbmRleCc7XG5pbXBvcnQgeyBBbm9ueW1vdXNDb25zZW50LCBBTk9OWU1PVVNfQ09OU0VOVF9TVEFUVVMgfSBmcm9tICcuLi8uLi9tb2RlbC9pbmRleCc7XG5pbXBvcnQgeyBPY2NFbmRwb2ludHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vb2NjL2luZGV4JztcbmltcG9ydCB7IEFub255bW91c0NvbnNlbnRzQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL2Fub255bW91cy1jb25zZW50cy1jb25maWcnO1xuaW1wb3J0IHsgQW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlIH0gZnJvbSAnLi4vZmFjYWRlL2Fub255bW91cy1jb25zZW50cy5zZXJ2aWNlJztcblxuZXhwb3J0IGNvbnN0IEFOT05ZTU9VU19DT05TRU5UU19IRUFERVIgPSAnWC1Bbm9ueW1vdXMtQ29uc2VudHMnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIEFub255bW91c0NvbnNlbnRzSW50ZXJjZXB0b3IgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFub255bW91c0NvbnNlbnRzU2VydmljZTogQW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLFxuICAgIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgIHByaXZhdGUgb2NjRW5kcG9pbnRzOiBPY2NFbmRwb2ludHNTZXJ2aWNlLFxuICAgIHByaXZhdGUgY29uZmlnOiBBbm9ueW1vdXNDb25zZW50c0NvbmZpZ1xuICApIHt9XG5cbiAgaW50ZXJjZXB0KFxuICAgIHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4sXG4gICAgbmV4dDogSHR0cEhhbmRsZXJcbiAgKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xuICAgIHJldHVybiBpaWYoXG4gICAgICAoKSA9PiBpc0ZlYXR1cmVFbmFibGVkKHRoaXMuY29uZmlnLCBBTk9OWU1PVVNfQ09OU0VOVFNfRkVBVFVSRSksXG4gICAgICB0aGlzLmFub255bW91c0NvbnNlbnRzU2VydmljZS5nZXRDb25zZW50cygpLnBpcGUoXG4gICAgICAgIHRha2UoMSksXG4gICAgICAgIHdpdGhMYXRlc3RGcm9tKHRoaXMuYXV0aFNlcnZpY2UuaXNVc2VyTG9nZ2VkSW4oKSksXG4gICAgICAgIHN3aXRjaE1hcCgoW2NvbnNlbnRzLCBpc1VzZXJMb2dnZWRJbl0pID0+IHtcbiAgICAgICAgICBpZiAoIXRoaXMuaXNPY2NVcmwocmVxdWVzdC51cmwpKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxdWVzdCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgY2xvbmVkUmVxdWVzdCA9IHRoaXMuaGFuZGxlUmVxdWVzdChjb25zZW50cywgcmVxdWVzdCk7XG4gICAgICAgICAgcmV0dXJuIG5leHQuaGFuZGxlKGNsb25lZFJlcXVlc3QpLnBpcGUoXG4gICAgICAgICAgICB0YXAoZXZlbnQgPT4ge1xuICAgICAgICAgICAgICBpZiAoZXZlbnQgaW5zdGFuY2VvZiBIdHRwUmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVJlc3BvbnNlKFxuICAgICAgICAgICAgICAgICAgaXNVc2VyTG9nZ2VkSW4sXG4gICAgICAgICAgICAgICAgICBldmVudC5oZWFkZXJzLmdldChBTk9OWU1PVVNfQ09OU0VOVFNfSEVBREVSKSxcbiAgICAgICAgICAgICAgICAgIGNvbnNlbnRzXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICApO1xuICAgICAgICB9KVxuICAgICAgKSxcbiAgICAgIG5leHQuaGFuZGxlKHJlcXVlc3QpXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlUmVzcG9uc2UoXG4gICAgaXNVc2VyTG9nZ2VkSW46IGJvb2xlYW4sXG4gICAgbmV3UmF3Q29uc2VudHM6IHN0cmluZyxcbiAgICBwcmV2aW91c0NvbnNlbnRzOiBBbm9ueW1vdXNDb25zZW50W11cbiAgKTogdm9pZCB7XG4gICAgaWYgKCFpc1VzZXJMb2dnZWRJbiAmJiBuZXdSYXdDb25zZW50cykge1xuICAgICAgbGV0IG5ld0NvbnNlbnRzOiBBbm9ueW1vdXNDb25zZW50W10gPSBbXTtcbiAgICAgIG5ld0NvbnNlbnRzID0gdGhpcy5hbm9ueW1vdXNDb25zZW50c1NlcnZpY2UuZGVjb2RlQW5kRGVzZXJpYWxpemUoXG4gICAgICAgIG5ld1Jhd0NvbnNlbnRzXG4gICAgICApO1xuICAgICAgbmV3Q29uc2VudHMgPSB0aGlzLmdpdmVSZXF1aXJlZENvbnNlbnRzKG5ld0NvbnNlbnRzKTtcblxuICAgICAgaWYgKFxuICAgICAgICB0aGlzLmFub255bW91c0NvbnNlbnRzU2VydmljZS5jb25zZW50c1VwZGF0ZWQoXG4gICAgICAgICAgbmV3Q29uc2VudHMsXG4gICAgICAgICAgcHJldmlvdXNDb25zZW50c1xuICAgICAgICApXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5hbm9ueW1vdXNDb25zZW50c1NlcnZpY2Uuc2V0Q29uc2VudHMobmV3Q29uc2VudHMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlUmVxdWVzdChcbiAgICBjb25zZW50czogQW5vbnltb3VzQ29uc2VudFtdLFxuICAgIHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT5cbiAgKTogSHR0cFJlcXVlc3Q8YW55PiB7XG4gICAgaWYgKCFjb25zZW50cykge1xuICAgICAgcmV0dXJuIHJlcXVlc3Q7XG4gICAgfVxuXG4gICAgY29uc3QgcmF3Q29uc2VudHMgPSB0aGlzLmFub255bW91c0NvbnNlbnRzU2VydmljZS5zZXJpYWxpemVBbmRFbmNvZGUoXG4gICAgICBjb25zZW50c1xuICAgICk7XG4gICAgcmV0dXJuIHJlcXVlc3QuY2xvbmUoe1xuICAgICAgc2V0SGVhZGVyczoge1xuICAgICAgICBbQU5PTllNT1VTX0NPTlNFTlRTX0hFQURFUl06IHJhd0NvbnNlbnRzLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgaXNPY2NVcmwodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdXJsLmluY2x1ZGVzKHRoaXMub2NjRW5kcG9pbnRzLmdldEJhc2VFbmRwb2ludCgpKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2l2ZVJlcXVpcmVkQ29uc2VudHMoXG4gICAgY29uc2VudHM6IEFub255bW91c0NvbnNlbnRbXVxuICApOiBBbm9ueW1vdXNDb25zZW50W10ge1xuICAgIGNvbnN0IGdpdmVuQ29uc2VudHMgPSBbLi4uY29uc2VudHNdO1xuXG4gICAgaWYgKFxuICAgICAgQm9vbGVhbih0aGlzLmNvbmZpZy5hbm9ueW1vdXNDb25zZW50cykgJiZcbiAgICAgIEJvb2xlYW4odGhpcy5jb25maWcuYW5vbnltb3VzQ29uc2VudHMucmVxdWlyZWRDb25zZW50cylcbiAgICApIHtcbiAgICAgIGZvciAoY29uc3QgY29uc2VudCBvZiBnaXZlbkNvbnNlbnRzKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICB0aGlzLmNvbmZpZy5hbm9ueW1vdXNDb25zZW50cy5yZXF1aXJlZENvbnNlbnRzLmluY2x1ZGVzKFxuICAgICAgICAgICAgY29uc2VudC50ZW1wbGF0ZUNvZGVcbiAgICAgICAgICApXG4gICAgICAgICkge1xuICAgICAgICAgIGNvbnNlbnQuY29uc2VudFN0YXRlID0gQU5PTllNT1VTX0NPTlNFTlRfU1RBVFVTLkdJVkVOO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBnaXZlbkNvbnNlbnRzO1xuICB9XG59XG4iXX0=