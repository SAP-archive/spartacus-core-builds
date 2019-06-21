/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { LoaderLoadAction, LoaderFailAction, LoaderSuccessAction, } from '../../../state/utils/loader/loader.action';
import { STORE_FINDER_DATA } from '../store-finder-state';
/** @type {?} */
export const VIEW_ALL_STORES = '[StoreFinder] View All Stores';
/** @type {?} */
export const VIEW_ALL_STORES_FAIL = '[StoreFinder] View All Stores Fail';
/** @type {?} */
export const VIEW_ALL_STORES_SUCCESS = '[StoreFinder] View All Stores Success';
export class ViewAllStores extends LoaderLoadAction {
    constructor() {
        super(STORE_FINDER_DATA);
        this.type = VIEW_ALL_STORES;
    }
}
if (false) {
    /** @type {?} */
    ViewAllStores.prototype.type;
}
export class ViewAllStoresFail extends LoaderFailAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(STORE_FINDER_DATA, payload);
        this.payload = payload;
        this.type = VIEW_ALL_STORES_FAIL;
    }
}
if (false) {
    /** @type {?} */
    ViewAllStoresFail.prototype.type;
    /** @type {?} */
    ViewAllStoresFail.prototype.payload;
}
export class ViewAllStoresSuccess extends LoaderSuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(STORE_FINDER_DATA);
        this.payload = payload;
        this.type = VIEW_ALL_STORES_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    ViewAllStoresSuccess.prototype.type;
    /** @type {?} */
    ViewAllStoresSuccess.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy1hbGwtc3RvcmVzLmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zdG9yZS1maW5kZXIvc3RvcmUvYWN0aW9ucy92aWV3LWFsbC1zdG9yZXMuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsZ0JBQWdCLEVBQ2hCLGdCQUFnQixFQUNoQixtQkFBbUIsR0FDcEIsTUFBTSwyQ0FBMkMsQ0FBQztBQUNuRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7QUFFMUQsTUFBTSxPQUFPLGVBQWUsR0FBRywrQkFBK0I7O0FBQzlELE1BQU0sT0FBTyxvQkFBb0IsR0FBRyxvQ0FBb0M7O0FBQ3hFLE1BQU0sT0FBTyx1QkFBdUIsR0FBRyx1Q0FBdUM7QUFFOUUsTUFBTSxPQUFPLGFBQWMsU0FBUSxnQkFBZ0I7SUFFakQ7UUFDRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUZsQixTQUFJLEdBQUcsZUFBZSxDQUFDO0lBR2hDLENBQUM7Q0FDRjs7O0lBSkMsNkJBQWdDOztBQU1sQyxNQUFNLE9BQU8saUJBQWtCLFNBQVEsZ0JBQWdCOzs7O0lBRXJELFlBQW1CLE9BQVk7UUFDN0IsS0FBSyxDQUFDLGlCQUFpQixFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRGpCLFlBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsU0FBSSxHQUFHLG9CQUFvQixDQUFDO0lBR3JDLENBQUM7Q0FDRjs7O0lBSkMsaUNBQXFDOztJQUN6QixvQ0FBbUI7O0FBS2pDLE1BQU0sT0FBTyxvQkFBcUIsU0FBUSxtQkFBbUI7Ozs7SUFFM0QsWUFBbUIsT0FBWTtRQUM3QixLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQURSLFlBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsU0FBSSxHQUFHLHVCQUF1QixDQUFDO0lBR3hDLENBQUM7Q0FDRjs7O0lBSkMsb0NBQXdDOztJQUM1Qix1Q0FBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBMb2FkZXJMb2FkQWN0aW9uLFxuICBMb2FkZXJGYWlsQWN0aW9uLFxuICBMb2FkZXJTdWNjZXNzQWN0aW9uLFxufSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9sb2FkZXIvbG9hZGVyLmFjdGlvbic7XG5pbXBvcnQgeyBTVE9SRV9GSU5ERVJfREFUQSB9IGZyb20gJy4uL3N0b3JlLWZpbmRlci1zdGF0ZSc7XG5cbmV4cG9ydCBjb25zdCBWSUVXX0FMTF9TVE9SRVMgPSAnW1N0b3JlRmluZGVyXSBWaWV3IEFsbCBTdG9yZXMnO1xuZXhwb3J0IGNvbnN0IFZJRVdfQUxMX1NUT1JFU19GQUlMID0gJ1tTdG9yZUZpbmRlcl0gVmlldyBBbGwgU3RvcmVzIEZhaWwnO1xuZXhwb3J0IGNvbnN0IFZJRVdfQUxMX1NUT1JFU19TVUNDRVNTID0gJ1tTdG9yZUZpbmRlcl0gVmlldyBBbGwgU3RvcmVzIFN1Y2Nlc3MnO1xuXG5leHBvcnQgY2xhc3MgVmlld0FsbFN0b3JlcyBleHRlbmRzIExvYWRlckxvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gVklFV19BTExfU1RPUkVTO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihTVE9SRV9GSU5ERVJfREFUQSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFZpZXdBbGxTdG9yZXNGYWlsIGV4dGVuZHMgTG9hZGVyRmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBWSUVXX0FMTF9TVE9SRVNfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKFNUT1JFX0ZJTkRFUl9EQVRBLCBwYXlsb2FkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVmlld0FsbFN0b3Jlc1N1Y2Nlc3MgZXh0ZW5kcyBMb2FkZXJTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFZJRVdfQUxMX1NUT1JFU19TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoU1RPUkVfRklOREVSX0RBVEEpO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIFZpZXdBbGxTdG9yZXNBY3Rpb24gPVxuICB8IFZpZXdBbGxTdG9yZXNcbiAgfCBWaWV3QWxsU3RvcmVzRmFpbFxuICB8IFZpZXdBbGxTdG9yZXNTdWNjZXNzO1xuIl19