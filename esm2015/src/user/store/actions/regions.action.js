/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { StateLoaderActions } from '../../../state/index';
import { REGIONS } from '../user-state';
/** @type {?} */
export const LOAD_REGIONS = '[User] Load Regions';
/** @type {?} */
export const LOAD_REGIONS_SUCCESS = '[User] Load Regions Success';
/** @type {?} */
export const LOAD_REGIONS_FAIL = '[User] Load Regions Fail';
/** @type {?} */
export const CLEAR_REGIONS = '[User] Clear Regions';
export class LoadRegions extends StateLoaderActions.LoaderLoadAction {
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
export class LoadRegionsFail extends StateLoaderActions.LoaderFailAction {
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
export class LoadRegionsSuccess extends StateLoaderActions.LoaderSuccessAction {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaW9ucy5hY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9zdG9yZS9hY3Rpb25zL3JlZ2lvbnMuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUV4QyxNQUFNLE9BQU8sWUFBWSxHQUFHLHFCQUFxQjs7QUFDakQsTUFBTSxPQUFPLG9CQUFvQixHQUFHLDZCQUE2Qjs7QUFDakUsTUFBTSxPQUFPLGlCQUFpQixHQUFHLDBCQUEwQjs7QUFDM0QsTUFBTSxPQUFPLGFBQWEsR0FBRyxzQkFBc0I7QUFFbkQsTUFBTSxPQUFPLFdBQVksU0FBUSxrQkFBa0IsQ0FBQyxnQkFBZ0I7Ozs7SUFFbEUsWUFBbUIsT0FBZTtRQUNoQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFERSxZQUFPLEdBQVAsT0FBTyxDQUFRO1FBRHpCLFNBQUksR0FBRyxZQUFZLENBQUM7SUFHN0IsQ0FBQztDQUNGOzs7SUFKQywyQkFBNkI7O0lBQ2pCLDhCQUFzQjs7QUFLcEMsTUFBTSxPQUFPLGVBQWdCLFNBQVEsa0JBQWtCLENBQUMsZ0JBQWdCOzs7O0lBRXRFLFlBQW1CLE9BQVk7UUFDN0IsS0FBSyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztRQURQLFlBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsU0FBSSxHQUFHLGlCQUFpQixDQUFDO0lBR2xDLENBQUM7Q0FDRjs7O0lBSkMsK0JBQWtDOztJQUN0QixrQ0FBbUI7O0FBS2pDLE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxrQkFBa0IsQ0FBQyxtQkFBbUI7Ozs7SUFFNUUsWUFBbUIsT0FBZ0Q7UUFDakUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBREUsWUFBTyxHQUFQLE9BQU8sQ0FBeUM7UUFEMUQsU0FBSSxHQUFHLG9CQUFvQixDQUFDO0lBR3JDLENBQUM7Q0FDRjs7O0lBSkMsa0NBQXFDOztJQUN6QixxQ0FBdUQ7O0FBS3JFLE1BQU0sT0FBTyxZQUFZO0lBRXZCO1FBRFMsU0FBSSxHQUFHLGFBQWEsQ0FBQztJQUNmLENBQUM7Q0FDakI7OztJQUZDLDRCQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IFJlZ2lvbiB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2FkZHJlc3MubW9kZWwnO1xuaW1wb3J0IHsgU3RhdGVMb2FkZXJBY3Rpb25zIH0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvaW5kZXgnO1xuaW1wb3J0IHsgUkVHSU9OUyB9IGZyb20gJy4uL3VzZXItc3RhdGUnO1xuXG5leHBvcnQgY29uc3QgTE9BRF9SRUdJT05TID0gJ1tVc2VyXSBMb2FkIFJlZ2lvbnMnO1xuZXhwb3J0IGNvbnN0IExPQURfUkVHSU9OU19TVUNDRVNTID0gJ1tVc2VyXSBMb2FkIFJlZ2lvbnMgU3VjY2Vzcyc7XG5leHBvcnQgY29uc3QgTE9BRF9SRUdJT05TX0ZBSUwgPSAnW1VzZXJdIExvYWQgUmVnaW9ucyBGYWlsJztcbmV4cG9ydCBjb25zdCBDTEVBUl9SRUdJT05TID0gJ1tVc2VyXSBDbGVhciBSZWdpb25zJztcblxuZXhwb3J0IGNsYXNzIExvYWRSZWdpb25zIGV4dGVuZHMgU3RhdGVMb2FkZXJBY3Rpb25zLkxvYWRlckxvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9SRUdJT05TO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogc3RyaW5nKSB7XG4gICAgc3VwZXIoUkVHSU9OUyk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRSZWdpb25zRmFpbCBleHRlbmRzIFN0YXRlTG9hZGVyQWN0aW9ucy5Mb2FkZXJGYWlsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfUkVHSU9OU19GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoUkVHSU9OUywgcGF5bG9hZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRSZWdpb25zU3VjY2VzcyBleHRlbmRzIFN0YXRlTG9hZGVyQWN0aW9ucy5Mb2FkZXJTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfUkVHSU9OU19TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyBlbnRpdGllczogUmVnaW9uW107IGNvdW50cnk6IHN0cmluZyB9KSB7XG4gICAgc3VwZXIoUkVHSU9OUyk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENsZWFyUmVnaW9ucyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDTEVBUl9SRUdJT05TO1xuICBjb25zdHJ1Y3RvcigpIHt9XG59XG5cbmV4cG9ydCB0eXBlIFJlZ2lvbnNBY3Rpb24gPVxuICB8IExvYWRSZWdpb25zXG4gIHwgTG9hZFJlZ2lvbnNGYWlsXG4gIHwgTG9hZFJlZ2lvbnNTdWNjZXNzXG4gIHwgQ2xlYXJSZWdpb25zO1xuIl19