/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EntityFailAction, EntityLoadAction, EntitySuccessAction, } from '../../../state';
/** @type {?} */
export const LOAD_PAGE_DATA = '[Cms] Load Page Data';
/** @type {?} */
export const LOAD_PAGE_DATA_FAIL = '[Cms] Load Page Data Fail';
/** @type {?} */
export const LOAD_PAGE_DATA_SUCCESS = '[Cms] Load Page Data Success';
/** @type {?} */
export const SET_PAGE_FAIL_INDEX = '[Cms] Set Page Fail Index';
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
export class SetPageFailIndex extends EntityFailAction {
    /**
     * @param {?} pageContext
     * @param {?} payload
     */
    constructor(pageContext, payload) {
        super(pageContext.type, pageContext.id);
        this.payload = payload;
        this.type = SET_PAGE_FAIL_INDEX;
    }
}
if (false) {
    /** @type {?} */
    SetPageFailIndex.prototype.type;
    /** @type {?} */
    SetPageFailIndex.prototype.payload;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5hY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL3N0b3JlL2FjdGlvbnMvcGFnZS5hY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxnQkFBZ0IsRUFDaEIsZ0JBQWdCLEVBQ2hCLG1CQUFtQixHQUNwQixNQUFNLGdCQUFnQixDQUFDOztBQUl4QixNQUFNLE9BQU8sY0FBYyxHQUFHLHNCQUFzQjs7QUFDcEQsTUFBTSxPQUFPLG1CQUFtQixHQUFHLDJCQUEyQjs7QUFDOUQsTUFBTSxPQUFPLHNCQUFzQixHQUFHLDhCQUE4Qjs7QUFDcEUsTUFBTSxPQUFPLG1CQUFtQixHQUFHLDJCQUEyQjtBQUU5RCxNQUFNLE9BQU8sWUFBYSxTQUFRLGdCQUFnQjs7OztJQUVoRCxZQUFtQixPQUFvQjtRQUNyQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7UUFEZixZQUFPLEdBQVAsT0FBTyxDQUFhO1FBRDlCLFNBQUksR0FBRyxjQUFjLENBQUM7SUFHL0IsQ0FBQztDQUNGOzs7SUFKQyw0QkFBK0I7O0lBQ25CLCtCQUEyQjs7QUFLekMsTUFBTSxPQUFPLGdCQUFpQixTQUFRLGdCQUFnQjs7Ozs7SUFFcEQsWUFBWSxXQUF3QixFQUFFLEtBQVU7UUFDOUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsV0FBVyxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUZ4QyxTQUFJLEdBQUcsbUJBQW1CLENBQUM7SUFHcEMsQ0FBQztDQUNGOzs7SUFKQyxnQ0FBb0M7O0FBTXRDLE1BQU0sT0FBTyxnQkFBaUIsU0FBUSxnQkFBZ0I7Ozs7O0lBRXBELFlBQVksV0FBd0IsRUFBUyxPQUFlO1FBQzFELEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQURHLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFEbkQsU0FBSSxHQUFHLG1CQUFtQixDQUFDO0lBR3BDLENBQUM7Q0FDRjs7O0lBSkMsZ0NBQW9DOztJQUNFLG1DQUFzQjs7QUFLOUQsTUFBTSxPQUFPLG1CQUFvQixTQUFRLG1CQUFtQjs7Ozs7SUFFMUQsWUFBWSxXQUF3QixFQUFFLE9BQWE7UUFDakQsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsV0FBVyxDQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUYxQyxTQUFJLEdBQUcsc0JBQXNCLENBQUM7SUFHdkMsQ0FBQztDQUNGOzs7SUFKQyxtQ0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBFbnRpdHlGYWlsQWN0aW9uLFxuICBFbnRpdHlMb2FkQWN0aW9uLFxuICBFbnRpdHlTdWNjZXNzQWN0aW9uLFxufSBmcm9tICcuLi8uLi8uLi9zdGF0ZSc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAnLi4vLi4vbW9kZWwvcGFnZS5tb2RlbCc7XG5pbXBvcnQgeyBQYWdlQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uL3JvdXRpbmcvaW5kZXgnO1xuXG5leHBvcnQgY29uc3QgTE9BRF9QQUdFX0RBVEEgPSAnW0Ntc10gTG9hZCBQYWdlIERhdGEnO1xuZXhwb3J0IGNvbnN0IExPQURfUEFHRV9EQVRBX0ZBSUwgPSAnW0Ntc10gTG9hZCBQYWdlIERhdGEgRmFpbCc7XG5leHBvcnQgY29uc3QgTE9BRF9QQUdFX0RBVEFfU1VDQ0VTUyA9ICdbQ21zXSBMb2FkIFBhZ2UgRGF0YSBTdWNjZXNzJztcbmV4cG9ydCBjb25zdCBTRVRfUEFHRV9GQUlMX0lOREVYID0gJ1tDbXNdIFNldCBQYWdlIEZhaWwgSW5kZXgnO1xuXG5leHBvcnQgY2xhc3MgTG9hZFBhZ2VEYXRhIGV4dGVuZHMgRW50aXR5TG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX1BBR0VfREFUQTtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFBhZ2VDb250ZXh0KSB7XG4gICAgc3VwZXIocGF5bG9hZC50eXBlLCBwYXlsb2FkLmlkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZFBhZ2VEYXRhRmFpbCBleHRlbmRzIEVudGl0eUZhaWxBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9QQUdFX0RBVEFfRkFJTDtcbiAgY29uc3RydWN0b3IocGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0LCBlcnJvcjogYW55KSB7XG4gICAgc3VwZXIocGFnZUNvbnRleHQudHlwZSwgcGFnZUNvbnRleHQuaWQsIGVycm9yKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2V0UGFnZUZhaWxJbmRleCBleHRlbmRzIEVudGl0eUZhaWxBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gU0VUX1BBR0VfRkFJTF9JTkRFWDtcbiAgY29uc3RydWN0b3IocGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0LCBwdWJsaWMgcGF5bG9hZDogc3RyaW5nKSB7XG4gICAgc3VwZXIocGFnZUNvbnRleHQudHlwZSwgcGFnZUNvbnRleHQuaWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkUGFnZURhdGFTdWNjZXNzIGV4dGVuZHMgRW50aXR5U3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX1BBR0VfREFUQV9TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwYWdlQ29udGV4dDogUGFnZUNvbnRleHQsIHBheWxvYWQ6IFBhZ2UpIHtcbiAgICBzdXBlcihwYWdlQ29udGV4dC50eXBlLCBwYWdlQ29udGV4dC5pZCwgcGF5bG9hZCk7XG4gIH1cbn1cblxuLy8gYWN0aW9uIHR5cGVzXG5leHBvcnQgdHlwZSBQYWdlQWN0aW9uID1cbiAgfCBMb2FkUGFnZURhdGFcbiAgfCBMb2FkUGFnZURhdGFGYWlsXG4gIHwgTG9hZFBhZ2VEYXRhU3VjY2Vzc1xuICB8IFNldFBhZ2VGYWlsSW5kZXg7XG4iXX0=