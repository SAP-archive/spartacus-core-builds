/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as fromAction from '../actions/address-verification.action';
import { OccUserService } from '../../../user/occ/user.service';
export class AddressVerificationEffect {
    /**
     * @param {?} actions$
     * @param {?} occUserService
     */
    constructor(actions$, occUserService) {
        this.actions$ = actions$;
        this.occUserService = occUserService;
        this.verifyAddress$ = this.actions$.pipe(ofType(fromAction.VERIFY_ADDRESS), map((action) => action.payload), mergeMap(payload => this.occUserService.verifyAddress(payload.userId, payload.address).pipe(map(data => {
            return new fromAction.VerifyAddressSuccess(data);
        }), catchError(error => of(new fromAction.VerifyAddressFail(error))))));
    }
}
AddressVerificationEffect.decorators = [
    { type: Injectable }
];
/** @nocollapse */
AddressVerificationEffect.ctorParameters = () => [
    { type: Actions },
    { type: OccUserService }
];
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], AddressVerificationEffect.prototype, "verifyAddress$", void 0);
if (false) {
    /** @type {?} */
    AddressVerificationEffect.prototype.verifyAddress$;
    /**
     * @type {?}
     * @private
     */
    AddressVerificationEffect.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    AddressVerificationEffect.prototype.occUserService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy12ZXJpZmljYXRpb24uZWZmZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NoZWNrb3V0L3N0b3JlL2VmZmVjdHMvYWRkcmVzcy12ZXJpZmljYXRpb24uZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0QsT0FBTyxLQUFLLFVBQVUsTUFBTSx3Q0FBd0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFHaEUsTUFBTSxPQUFPLHlCQUF5Qjs7Ozs7SUFpQnBDLFlBQ1UsUUFBaUIsRUFDakIsY0FBOEI7UUFEOUIsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFqQnhDLG1CQUFjLEdBRVYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLEVBQ2pDLEdBQUcsQ0FBQyxDQUFDLE1BQVcsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUNwQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FDakIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUNyRSxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDVCxPQUFPLElBQUksVUFBVSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25ELENBQUMsQ0FBQyxFQUNGLFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQ2pFLENBQ0YsQ0FDRixDQUFDO0lBS0MsQ0FBQzs7O1lBckJMLFVBQVU7Ozs7WUFSRixPQUFPO1lBTVAsY0FBYzs7QUFLckI7SUFEQyxNQUFNLEVBQUU7c0NBQ08sVUFBVTtpRUFheEI7OztJQWRGLG1EQWNFOzs7OztJQUdBLDZDQUF5Qjs7Ozs7SUFDekIsbURBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwLCBtZXJnZU1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0ICogYXMgZnJvbUFjdGlvbiBmcm9tICcuLi9hY3Rpb25zL2FkZHJlc3MtdmVyaWZpY2F0aW9uLmFjdGlvbic7XG5pbXBvcnQgeyBPY2NVc2VyU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3VzZXIvb2NjL3VzZXIuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBZGRyZXNzVmVyaWZpY2F0aW9uRWZmZWN0IHtcbiAgQEVmZmVjdCgpXG4gIHZlcmlmeUFkZHJlc3MkOiBPYnNlcnZhYmxlPFxuICAgIGZyb21BY3Rpb24uVmVyaWZ5QWRkcmVzc1N1Y2Nlc3MgfCBmcm9tQWN0aW9uLlZlcmlmeUFkZHJlc3NGYWlsXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKGZyb21BY3Rpb24uVkVSSUZZX0FERFJFU1MpLFxuICAgIG1hcCgoYWN0aW9uOiBhbnkpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtZXJnZU1hcChwYXlsb2FkID0+XG4gICAgICB0aGlzLm9jY1VzZXJTZXJ2aWNlLnZlcmlmeUFkZHJlc3MocGF5bG9hZC51c2VySWQsIHBheWxvYWQuYWRkcmVzcykucGlwZShcbiAgICAgICAgbWFwKGRhdGEgPT4ge1xuICAgICAgICAgIHJldHVybiBuZXcgZnJvbUFjdGlvbi5WZXJpZnlBZGRyZXNzU3VjY2VzcyhkYXRhKTtcbiAgICAgICAgfSksXG4gICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4gb2YobmV3IGZyb21BY3Rpb24uVmVyaWZ5QWRkcmVzc0ZhaWwoZXJyb3IpKSlcbiAgICAgIClcbiAgICApXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIG9jY1VzZXJTZXJ2aWNlOiBPY2NVc2VyU2VydmljZVxuICApIHt9XG59XG4iXX0=