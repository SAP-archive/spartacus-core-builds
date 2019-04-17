/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EntitySuccessAction, EntityLoadAction, EntityFailAction, } from '../../../state';
/** @type {?} */
export const LOAD_PAGE_DATA = '[Cms] Load Page Data';
/** @type {?} */
export const LOAD_PAGE_DATA_FAIL = '[Cms] Load Page Data Fail';
/** @type {?} */
export const LOAD_PAGE_DATA_SUCCESS = '[Cms] Load Page Data Success';
export class LoadPageData extends EntityLoadAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(payload.type, payload.id);
        this.payload = payload;
        this.type = LOAD_PAGE_DATA;
    }
}
if (false) {
    /** @type {?} */
    LoadPageData.prototype.type;
    /** @type {?} */
    LoadPageData.prototype.payload;
}
export class LoadPageDataFail extends EntityFailAction {
    /**
     * @param {?} pageContext
     * @param {?} error
     */
    constructor(pageContext, error) {
        super(pageContext.type, pageContext.id, error);
        this.type = LOAD_PAGE_DATA_FAIL;
    }
}
if (false) {
    /** @type {?} */
    LoadPageDataFail.prototype.type;
}
export class LoadPageDataSuccess extends EntitySuccessAction {
    /**
     * @param {?} pageContext
     * @param {?} payload
     */
    constructor(pageContext, payload) {
        super(pageContext.type, pageContext.id, payload);
        this.type = LOAD_PAGE_DATA_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    LoadPageDataSuccess.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5hY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL3N0b3JlL2FjdGlvbnMvcGFnZS5hY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxtQkFBbUIsRUFDbkIsZ0JBQWdCLEVBQ2hCLGdCQUFnQixHQUNqQixNQUFNLGdCQUFnQixDQUFDOztBQUl4QixNQUFNLE9BQU8sY0FBYyxHQUFHLHNCQUFzQjs7QUFDcEQsTUFBTSxPQUFPLG1CQUFtQixHQUFHLDJCQUEyQjs7QUFDOUQsTUFBTSxPQUFPLHNCQUFzQixHQUFHLDhCQUE4QjtBQUVwRSxNQUFNLE9BQU8sWUFBYSxTQUFRLGdCQUFnQjs7OztJQUVoRCxZQUFtQixPQUFvQjtRQUNyQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7UUFEZixZQUFPLEdBQVAsT0FBTyxDQUFhO1FBRDlCLFNBQUksR0FBRyxjQUFjLENBQUM7SUFHL0IsQ0FBQztDQUNGOzs7SUFKQyw0QkFBK0I7O0lBQ25CLCtCQUEyQjs7QUFLekMsTUFBTSxPQUFPLGdCQUFpQixTQUFRLGdCQUFnQjs7Ozs7SUFFcEQsWUFBWSxXQUF3QixFQUFFLEtBQVU7UUFDOUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsV0FBVyxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUZ4QyxTQUFJLEdBQUcsbUJBQW1CLENBQUM7SUFHcEMsQ0FBQztDQUNGOzs7SUFKQyxnQ0FBb0M7O0FBTXRDLE1BQU0sT0FBTyxtQkFBb0IsU0FBUSxtQkFBbUI7Ozs7O0lBRTFELFlBQVksV0FBd0IsRUFBRSxPQUFhO1FBQ2pELEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLFdBQVcsQ0FBQyxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFGMUMsU0FBSSxHQUFHLHNCQUFzQixDQUFDO0lBR3ZDLENBQUM7Q0FDRjs7O0lBSkMsbUNBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRW50aXR5U3VjY2Vzc0FjdGlvbixcbiAgRW50aXR5TG9hZEFjdGlvbixcbiAgRW50aXR5RmFpbEFjdGlvbixcbn0gZnJvbSAnLi4vLi4vLi4vc3RhdGUnO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJy4uLy4uL21vZGVsL3BhZ2UubW9kZWwnO1xuaW1wb3J0IHsgUGFnZUNvbnRleHQgfSBmcm9tICcuLi8uLi8uLi9yb3V0aW5nL2luZGV4JztcblxuZXhwb3J0IGNvbnN0IExPQURfUEFHRV9EQVRBID0gJ1tDbXNdIExvYWQgUGFnZSBEYXRhJztcbmV4cG9ydCBjb25zdCBMT0FEX1BBR0VfREFUQV9GQUlMID0gJ1tDbXNdIExvYWQgUGFnZSBEYXRhIEZhaWwnO1xuZXhwb3J0IGNvbnN0IExPQURfUEFHRV9EQVRBX1NVQ0NFU1MgPSAnW0Ntc10gTG9hZCBQYWdlIERhdGEgU3VjY2Vzcyc7XG5cbmV4cG9ydCBjbGFzcyBMb2FkUGFnZURhdGEgZXh0ZW5kcyBFbnRpdHlMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfUEFHRV9EQVRBO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogUGFnZUNvbnRleHQpIHtcbiAgICBzdXBlcihwYXlsb2FkLnR5cGUsIHBheWxvYWQuaWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkUGFnZURhdGFGYWlsIGV4dGVuZHMgRW50aXR5RmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX1BBR0VfREFUQV9GQUlMO1xuICBjb25zdHJ1Y3RvcihwYWdlQ29udGV4dDogUGFnZUNvbnRleHQsIGVycm9yOiBhbnkpIHtcbiAgICBzdXBlcihwYWdlQ29udGV4dC50eXBlLCBwYWdlQ29udGV4dC5pZCwgZXJyb3IpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkUGFnZURhdGFTdWNjZXNzIGV4dGVuZHMgRW50aXR5U3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX1BBR0VfREFUQV9TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwYWdlQ29udGV4dDogUGFnZUNvbnRleHQsIHBheWxvYWQ6IFBhZ2UpIHtcbiAgICBzdXBlcihwYWdlQ29udGV4dC50eXBlLCBwYWdlQ29udGV4dC5pZCwgcGF5bG9hZCk7XG4gIH1cbn1cblxuLy8gYWN0aW9uIHR5cGVzXG5leHBvcnQgdHlwZSBQYWdlQWN0aW9uID0gTG9hZFBhZ2VEYXRhIHwgTG9hZFBhZ2VEYXRhRmFpbCB8IExvYWRQYWdlRGF0YVN1Y2Nlc3M7XG4iXX0=