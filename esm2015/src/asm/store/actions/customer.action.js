/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { StateLoaderActions } from '../../../state/utils/index';
import { CUSTOMER_SEARCH_DATA } from '../asm-state';
/** @type {?} */
export const CUSTOMER_SEARCH = '[Asm] Customer Search';
/** @type {?} */
export const CUSTOMER_SEARCH_FAIL = '[Asm] Customer Search Fail';
/** @type {?} */
export const CUSTOMER_SEARCH_SUCCESS = '[Asm] Customer Search Success';
/** @type {?} */
export const CUSTOMER_SEARCH_RESET = '[Asm] Customer Search Reset';
export class CustomerSearch extends StateLoaderActions.LoaderLoadAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(CUSTOMER_SEARCH_DATA);
        this.payload = payload;
        this.type = CUSTOMER_SEARCH;
    }
}
if (false) {
    /** @type {?} */
    CustomerSearch.prototype.type;
    /** @type {?} */
    CustomerSearch.prototype.payload;
}
export class CustomerSearchFail extends StateLoaderActions.LoaderFailAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(CUSTOMER_SEARCH_DATA);
        this.payload = payload;
        this.type = CUSTOMER_SEARCH_FAIL;
    }
}
if (false) {
    /** @type {?} */
    CustomerSearchFail.prototype.type;
    /** @type {?} */
    CustomerSearchFail.prototype.payload;
}
export class CustomerSearchSuccess extends StateLoaderActions.LoaderSuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(CUSTOMER_SEARCH_DATA);
        this.payload = payload;
        this.type = CUSTOMER_SEARCH_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    CustomerSearchSuccess.prototype.type;
    /** @type {?} */
    CustomerSearchSuccess.prototype.payload;
}
export class CustomerSearchReset extends StateLoaderActions.LoaderResetAction {
    constructor() {
        super(CUSTOMER_SEARCH_DATA);
        this.type = CUSTOMER_SEARCH_RESET;
    }
}
if (false) {
    /** @type {?} */
    CustomerSearchReset.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXIuYWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2FzbS9zdG9yZS9hY3Rpb25zL2N1c3RvbWVyLmFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFLaEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sY0FBYyxDQUFDOztBQUVwRCxNQUFNLE9BQU8sZUFBZSxHQUFHLHVCQUF1Qjs7QUFDdEQsTUFBTSxPQUFPLG9CQUFvQixHQUFHLDRCQUE0Qjs7QUFDaEUsTUFBTSxPQUFPLHVCQUF1QixHQUFHLCtCQUErQjs7QUFDdEUsTUFBTSxPQUFPLHFCQUFxQixHQUFHLDZCQUE2QjtBQUVsRSxNQUFNLE9BQU8sY0FBZSxTQUFRLGtCQUFrQixDQUFDLGdCQUFnQjs7OztJQUVyRSxZQUFtQixPQUE4QjtRQUMvQyxLQUFLLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQURYLFlBQU8sR0FBUCxPQUFPLENBQXVCO1FBRHhDLFNBQUksR0FBRyxlQUFlLENBQUM7SUFHaEMsQ0FBQztDQUNGOzs7SUFKQyw4QkFBZ0M7O0lBQ3BCLGlDQUFxQzs7QUFLbkQsTUFBTSxPQUFPLGtCQUFtQixTQUFRLGtCQUFrQixDQUFDLGdCQUFnQjs7OztJQUV6RSxZQUFtQixPQUFZO1FBQzdCLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBRFgsWUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixTQUFJLEdBQUcsb0JBQW9CLENBQUM7SUFHckMsQ0FBQztDQUNGOzs7SUFKQyxrQ0FBcUM7O0lBQ3pCLHFDQUFtQjs7QUFLakMsTUFBTSxPQUFPLHFCQUFzQixTQUFRLGtCQUFrQixDQUFDLG1CQUFtQjs7OztJQUUvRSxZQUFtQixPQUEyQjtRQUM1QyxLQUFLLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQURYLFlBQU8sR0FBUCxPQUFPLENBQW9CO1FBRHJDLFNBQUksR0FBRyx1QkFBdUIsQ0FBQztJQUd4QyxDQUFDO0NBQ0Y7OztJQUpDLHFDQUF3Qzs7SUFDNUIsd0NBQWtDOztBQUtoRCxNQUFNLE9BQU8sbUJBQW9CLFNBQVEsa0JBQWtCLENBQUMsaUJBQWlCO0lBRTNFO1FBQ0UsS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFGckIsU0FBSSxHQUFHLHFCQUFxQixDQUFDO0lBR3RDLENBQUM7Q0FDRjs7O0lBSkMsbUNBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RhdGVMb2FkZXJBY3Rpb25zIH0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvaW5kZXgnO1xuaW1wb3J0IHtcbiAgQ3VzdG9tZXJTZWFyY2hPcHRpb25zLFxuICBDdXN0b21lclNlYXJjaFBhZ2UsXG59IGZyb20gJy4uLy4uL21vZGVscy9hc20ubW9kZWxzJztcbmltcG9ydCB7IENVU1RPTUVSX1NFQVJDSF9EQVRBIH0gZnJvbSAnLi4vYXNtLXN0YXRlJztcblxuZXhwb3J0IGNvbnN0IENVU1RPTUVSX1NFQVJDSCA9ICdbQXNtXSBDdXN0b21lciBTZWFyY2gnO1xuZXhwb3J0IGNvbnN0IENVU1RPTUVSX1NFQVJDSF9GQUlMID0gJ1tBc21dIEN1c3RvbWVyIFNlYXJjaCBGYWlsJztcbmV4cG9ydCBjb25zdCBDVVNUT01FUl9TRUFSQ0hfU1VDQ0VTUyA9ICdbQXNtXSBDdXN0b21lciBTZWFyY2ggU3VjY2Vzcyc7XG5leHBvcnQgY29uc3QgQ1VTVE9NRVJfU0VBUkNIX1JFU0VUID0gJ1tBc21dIEN1c3RvbWVyIFNlYXJjaCBSZXNldCc7XG5cbmV4cG9ydCBjbGFzcyBDdXN0b21lclNlYXJjaCBleHRlbmRzIFN0YXRlTG9hZGVyQWN0aW9ucy5Mb2FkZXJMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENVU1RPTUVSX1NFQVJDSDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEN1c3RvbWVyU2VhcmNoT3B0aW9ucykge1xuICAgIHN1cGVyKENVU1RPTUVSX1NFQVJDSF9EQVRBKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ3VzdG9tZXJTZWFyY2hGYWlsIGV4dGVuZHMgU3RhdGVMb2FkZXJBY3Rpb25zLkxvYWRlckZhaWxBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ1VTVE9NRVJfU0VBUkNIX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihDVVNUT01FUl9TRUFSQ0hfREFUQSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEN1c3RvbWVyU2VhcmNoU3VjY2VzcyBleHRlbmRzIFN0YXRlTG9hZGVyQWN0aW9ucy5Mb2FkZXJTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENVU1RPTUVSX1NFQVJDSF9TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogQ3VzdG9tZXJTZWFyY2hQYWdlKSB7XG4gICAgc3VwZXIoQ1VTVE9NRVJfU0VBUkNIX0RBVEEpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDdXN0b21lclNlYXJjaFJlc2V0IGV4dGVuZHMgU3RhdGVMb2FkZXJBY3Rpb25zLkxvYWRlclJlc2V0QWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENVU1RPTUVSX1NFQVJDSF9SRVNFVDtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoQ1VTVE9NRVJfU0VBUkNIX0RBVEEpO1xuICB9XG59XG5cbi8vIGFjdGlvbiB0eXBlc1xuZXhwb3J0IHR5cGUgQ3VzdG9tZXJBY3Rpb24gPVxuICB8IEN1c3RvbWVyU2VhcmNoXG4gIHwgQ3VzdG9tZXJTZWFyY2hGYWlsXG4gIHwgQ3VzdG9tZXJTZWFyY2hTdWNjZXNzXG4gIHwgQ3VzdG9tZXJTZWFyY2hSZXNldDtcbiJdfQ==