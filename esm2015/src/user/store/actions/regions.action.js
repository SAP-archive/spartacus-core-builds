/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { LoaderLoadAction, LoaderFailAction, LoaderSuccessAction, } from '../../../state/utils/loader/loader.action';
import { REGIONS } from '../user-state';
/** @type {?} */
export const LOAD_REGIONS = '[User] Load Regions';
/** @type {?} */
export const LOAD_REGIONS_SUCCESS = '[User] Load Regions Success';
/** @type {?} */
export const LOAD_REGIONS_FAIL = '[User] Load Regions Fail';
/** @type {?} */
export const CLEAR_REGIONS = '[User] Clear Regions';
export class LoadRegions extends LoaderLoadAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(REGIONS);
        this.payload = payload;
        this.type = LOAD_REGIONS;
    }
}
if (false) {
    /** @type {?} */
    LoadRegions.prototype.type;
    /** @type {?} */
    LoadRegions.prototype.payload;
}
export class LoadRegionsFail extends LoaderFailAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(REGIONS, payload);
        this.payload = payload;
        this.type = LOAD_REGIONS_FAIL;
    }
}
if (false) {
    /** @type {?} */
    LoadRegionsFail.prototype.type;
    /** @type {?} */
    LoadRegionsFail.prototype.payload;
}
export class LoadRegionsSuccess extends LoaderSuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(REGIONS);
        this.payload = payload;
        this.type = LOAD_REGIONS_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    LoadRegionsSuccess.prototype.type;
    /** @type {?} */
    LoadRegionsSuccess.prototype.payload;
}
export class ClearRegions {
    constructor() {
        this.type = CLEAR_REGIONS;
    }
}
if (false) {
    /** @type {?} */
    ClearRegions.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaW9ucy5hY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9zdG9yZS9hY3Rpb25zL3JlZ2lvbnMuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQ0wsZ0JBQWdCLEVBQ2hCLGdCQUFnQixFQUNoQixtQkFBbUIsR0FDcEIsTUFBTSwyQ0FBMkMsQ0FBQztBQUNuRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUd4QyxNQUFNLE9BQU8sWUFBWSxHQUFHLHFCQUFxQjs7QUFDakQsTUFBTSxPQUFPLG9CQUFvQixHQUFHLDZCQUE2Qjs7QUFDakUsTUFBTSxPQUFPLGlCQUFpQixHQUFHLDBCQUEwQjs7QUFDM0QsTUFBTSxPQUFPLGFBQWEsR0FBRyxzQkFBc0I7QUFFbkQsTUFBTSxPQUFPLFdBQVksU0FBUSxnQkFBZ0I7Ozs7SUFFL0MsWUFBbUIsT0FBZTtRQUNoQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFERSxZQUFPLEdBQVAsT0FBTyxDQUFRO1FBRHpCLFNBQUksR0FBRyxZQUFZLENBQUM7SUFHN0IsQ0FBQztDQUNGOzs7SUFKQywyQkFBNkI7O0lBQ2pCLDhCQUFzQjs7QUFLcEMsTUFBTSxPQUFPLGVBQWdCLFNBQVEsZ0JBQWdCOzs7O0lBRW5ELFlBQW1CLE9BQVk7UUFDN0IsS0FBSyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztRQURQLFlBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsU0FBSSxHQUFHLGlCQUFpQixDQUFDO0lBR2xDLENBQUM7Q0FDRjs7O0lBSkMsK0JBQWtDOztJQUN0QixrQ0FBbUI7O0FBS2pDLE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxtQkFBbUI7Ozs7SUFFekQsWUFBbUIsT0FBZ0Q7UUFDakUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBREUsWUFBTyxHQUFQLE9BQU8sQ0FBeUM7UUFEMUQsU0FBSSxHQUFHLG9CQUFvQixDQUFDO0lBR3JDLENBQUM7Q0FDRjs7O0lBSkMsa0NBQXFDOztJQUN6QixxQ0FBdUQ7O0FBS3JFLE1BQU0sT0FBTyxZQUFZO0lBRXZCO1FBRFMsU0FBSSxHQUFHLGFBQWEsQ0FBQztJQUNmLENBQUM7Q0FDakI7OztJQUZDLDRCQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlZ2lvbiB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2FkZHJlc3MubW9kZWwnO1xuXG5pbXBvcnQge1xuICBMb2FkZXJMb2FkQWN0aW9uLFxuICBMb2FkZXJGYWlsQWN0aW9uLFxuICBMb2FkZXJTdWNjZXNzQWN0aW9uLFxufSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9sb2FkZXIvbG9hZGVyLmFjdGlvbic7XG5pbXBvcnQgeyBSRUdJT05TIH0gZnJvbSAnLi4vdXNlci1zdGF0ZSc7XG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbmV4cG9ydCBjb25zdCBMT0FEX1JFR0lPTlMgPSAnW1VzZXJdIExvYWQgUmVnaW9ucyc7XG5leHBvcnQgY29uc3QgTE9BRF9SRUdJT05TX1NVQ0NFU1MgPSAnW1VzZXJdIExvYWQgUmVnaW9ucyBTdWNjZXNzJztcbmV4cG9ydCBjb25zdCBMT0FEX1JFR0lPTlNfRkFJTCA9ICdbVXNlcl0gTG9hZCBSZWdpb25zIEZhaWwnO1xuZXhwb3J0IGNvbnN0IENMRUFSX1JFR0lPTlMgPSAnW1VzZXJdIENsZWFyIFJlZ2lvbnMnO1xuXG5leHBvcnQgY2xhc3MgTG9hZFJlZ2lvbnMgZXh0ZW5kcyBMb2FkZXJMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfUkVHSU9OUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHN0cmluZykge1xuICAgIHN1cGVyKFJFR0lPTlMpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkUmVnaW9uc0ZhaWwgZXh0ZW5kcyBMb2FkZXJGYWlsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfUkVHSU9OU19GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoUkVHSU9OUywgcGF5bG9hZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRSZWdpb25zU3VjY2VzcyBleHRlbmRzIExvYWRlclN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9SRUdJT05TX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IGVudGl0aWVzOiBSZWdpb25bXTsgY291bnRyeTogc3RyaW5nIH0pIHtcbiAgICBzdXBlcihSRUdJT05TKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2xlYXJSZWdpb25zIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENMRUFSX1JFR0lPTlM7XG4gIGNvbnN0cnVjdG9yKCkge31cbn1cblxuZXhwb3J0IHR5cGUgUmVnaW9uc0FjdGlvbiA9XG4gIHwgTG9hZFJlZ2lvbnNcbiAgfCBMb2FkUmVnaW9uc0ZhaWxcbiAgfCBMb2FkUmVnaW9uc1N1Y2Nlc3NcbiAgfCBDbGVhclJlZ2lvbnM7XG4iXX0=