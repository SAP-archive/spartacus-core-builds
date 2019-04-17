/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { LoaderLoadAction, LoaderFailAction, LoaderSuccessAction, } from '../../../state/utils/loader/loader.action';
import { STORE_FINDER_DATA } from '../store-finder-state';
/** @type {?} */
export const ON_HOLD = '[StoreFinder] On Hold';
/** @type {?} */
export const FIND_STORES = '[StoreFinder] Find Stores';
/** @type {?} */
export const FIND_STORES_FAIL = '[StoreFinder] Find Stores Fail';
/** @type {?} */
export const FIND_STORES_SUCCESS = '[StoreFinder] Find Stores Success';
/** @type {?} */
export const FIND_STORE_BY_ID = '[StoreFinder] Find a Store by Id';
/** @type {?} */
export const FIND_STORE_BY_ID_FAIL = '[StoreFinder] Find a Store by Id Fail';
/** @type {?} */
export const FIND_STORE_BY_ID_SUCCESS = '[StoreFinder] Find a Store by Id Success';
export class OnHold extends LoaderLoadAction {
    constructor() {
        super(STORE_FINDER_DATA);
        this.type = ON_HOLD;
    }
}
if (false) {
    /** @type {?} */
    OnHold.prototype.type;
}
export class FindStores extends LoaderLoadAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(STORE_FINDER_DATA);
        this.payload = payload;
        this.type = FIND_STORES;
    }
}
if (false) {
    /** @type {?} */
    FindStores.prototype.type;
    /** @type {?} */
    FindStores.prototype.payload;
}
export class FindStoresFail extends LoaderFailAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(STORE_FINDER_DATA, payload);
        this.payload = payload;
        this.type = FIND_STORES_FAIL;
    }
}
if (false) {
    /** @type {?} */
    FindStoresFail.prototype.type;
    /** @type {?} */
    FindStoresFail.prototype.payload;
}
export class FindStoresSuccess extends LoaderSuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(STORE_FINDER_DATA);
        this.payload = payload;
        this.type = FIND_STORES_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    FindStoresSuccess.prototype.type;
    /** @type {?} */
    FindStoresSuccess.prototype.payload;
}
export class FindStoreById extends LoaderLoadAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(STORE_FINDER_DATA);
        this.payload = payload;
        this.type = FIND_STORE_BY_ID;
    }
}
if (false) {
    /** @type {?} */
    FindStoreById.prototype.type;
    /** @type {?} */
    FindStoreById.prototype.payload;
}
export class FindStoreByIdFail extends LoaderFailAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(STORE_FINDER_DATA, payload);
        this.payload = payload;
        this.type = FIND_STORE_BY_ID_FAIL;
    }
}
if (false) {
    /** @type {?} */
    FindStoreByIdFail.prototype.type;
    /** @type {?} */
    FindStoreByIdFail.prototype.payload;
}
export class FindStoreByIdSuccess extends LoaderSuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(STORE_FINDER_DATA);
        this.payload = payload;
        this.type = FIND_STORE_BY_ID_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    FindStoreByIdSuccess.prototype.type;
    /** @type {?} */
    FindStoreByIdSuccess.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmluZC1zdG9yZXMuYWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3N0b3JlLWZpbmRlci9zdG9yZS9hY3Rpb25zL2ZpbmQtc3RvcmVzLmFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUNMLGdCQUFnQixFQUNoQixnQkFBZ0IsRUFDaEIsbUJBQW1CLEdBQ3BCLE1BQU0sMkNBQTJDLENBQUM7QUFDbkQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7O0FBRTFELE1BQU0sT0FBTyxPQUFPLEdBQUcsdUJBQXVCOztBQUM5QyxNQUFNLE9BQU8sV0FBVyxHQUFHLDJCQUEyQjs7QUFDdEQsTUFBTSxPQUFPLGdCQUFnQixHQUFHLGdDQUFnQzs7QUFDaEUsTUFBTSxPQUFPLG1CQUFtQixHQUFHLG1DQUFtQzs7QUFFdEUsTUFBTSxPQUFPLGdCQUFnQixHQUFHLGtDQUFrQzs7QUFDbEUsTUFBTSxPQUFPLHFCQUFxQixHQUFHLHVDQUF1Qzs7QUFDNUUsTUFBTSxPQUFPLHdCQUF3QixHQUNuQywwQ0FBMEM7QUFFNUMsTUFBTSxPQUFPLE1BQU8sU0FBUSxnQkFBZ0I7SUFFMUM7UUFDRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUZsQixTQUFJLEdBQUcsT0FBTyxDQUFDO0lBR3hCLENBQUM7Q0FDRjs7O0lBSkMsc0JBQXdCOztBQU0xQixNQUFNLE9BQU8sVUFBVyxTQUFRLGdCQUFnQjs7OztJQUU5QyxZQUNTLE9BTU47UUFFRCxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQVJsQixZQUFPLEdBQVAsT0FBTyxDQU1iO1FBUk0sU0FBSSxHQUFHLFdBQVcsQ0FBQztJQVc1QixDQUFDO0NBQ0Y7OztJQVpDLDBCQUE0Qjs7SUFFMUIsNkJBTUM7O0FBTUwsTUFBTSxPQUFPLGNBQWUsU0FBUSxnQkFBZ0I7Ozs7SUFFbEQsWUFBbUIsT0FBWTtRQUM3QixLQUFLLENBQUMsaUJBQWlCLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFEakIsWUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixTQUFJLEdBQUcsZ0JBQWdCLENBQUM7SUFHakMsQ0FBQztDQUNGOzs7SUFKQyw4QkFBaUM7O0lBQ3JCLGlDQUFtQjs7QUFLakMsTUFBTSxPQUFPLGlCQUFrQixTQUFRLG1CQUFtQjs7OztJQUV4RCxZQUFtQixPQUFZO1FBQzdCLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBRFIsWUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixTQUFJLEdBQUcsbUJBQW1CLENBQUM7SUFHcEMsQ0FBQztDQUNGOzs7SUFKQyxpQ0FBb0M7O0lBQ3hCLG9DQUFtQjs7QUFLakMsTUFBTSxPQUFPLGFBQWMsU0FBUSxnQkFBZ0I7Ozs7SUFFakQsWUFBbUIsT0FBNEI7UUFDN0MsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFEUixZQUFPLEdBQVAsT0FBTyxDQUFxQjtRQUR0QyxTQUFJLEdBQUcsZ0JBQWdCLENBQUM7SUFHakMsQ0FBQztDQUNGOzs7SUFKQyw2QkFBaUM7O0lBQ3JCLGdDQUFtQzs7QUFLakQsTUFBTSxPQUFPLGlCQUFrQixTQUFRLGdCQUFnQjs7OztJQUVyRCxZQUFtQixPQUFZO1FBQzdCLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxPQUFPLENBQUMsQ0FBQztRQURqQixZQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFNBQUksR0FBRyxxQkFBcUIsQ0FBQztJQUd0QyxDQUFDO0NBQ0Y7OztJQUpDLGlDQUFzQzs7SUFDMUIsb0NBQW1COztBQUtqQyxNQUFNLE9BQU8sb0JBQXFCLFNBQVEsbUJBQW1COzs7O0lBRTNELFlBQW1CLE9BQVk7UUFDN0IsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFEUixZQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFNBQUksR0FBRyx3QkFBd0IsQ0FBQztJQUd6QyxDQUFDO0NBQ0Y7OztJQUpDLG9DQUF5Qzs7SUFDN0IsdUNBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RvcmVGaW5kZXJTZWFyY2hDb25maWcgfSBmcm9tICcuLi8uLi9tb2RlbC9zZWFyY2gtY29uZmlnJztcbmltcG9ydCB7IExvbmdpdHVkZUxhdGl0dWRlIH0gZnJvbSAnLi4vLi4vbW9kZWwvbG9uZ2l0dWRlLWxhdGl0dWRlJztcbmltcG9ydCB7XG4gIExvYWRlckxvYWRBY3Rpb24sXG4gIExvYWRlckZhaWxBY3Rpb24sXG4gIExvYWRlclN1Y2Nlc3NBY3Rpb24sXG59IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2xvYWRlci9sb2FkZXIuYWN0aW9uJztcbmltcG9ydCB7IFNUT1JFX0ZJTkRFUl9EQVRBIH0gZnJvbSAnLi4vc3RvcmUtZmluZGVyLXN0YXRlJztcblxuZXhwb3J0IGNvbnN0IE9OX0hPTEQgPSAnW1N0b3JlRmluZGVyXSBPbiBIb2xkJztcbmV4cG9ydCBjb25zdCBGSU5EX1NUT1JFUyA9ICdbU3RvcmVGaW5kZXJdIEZpbmQgU3RvcmVzJztcbmV4cG9ydCBjb25zdCBGSU5EX1NUT1JFU19GQUlMID0gJ1tTdG9yZUZpbmRlcl0gRmluZCBTdG9yZXMgRmFpbCc7XG5leHBvcnQgY29uc3QgRklORF9TVE9SRVNfU1VDQ0VTUyA9ICdbU3RvcmVGaW5kZXJdIEZpbmQgU3RvcmVzIFN1Y2Nlc3MnO1xuXG5leHBvcnQgY29uc3QgRklORF9TVE9SRV9CWV9JRCA9ICdbU3RvcmVGaW5kZXJdIEZpbmQgYSBTdG9yZSBieSBJZCc7XG5leHBvcnQgY29uc3QgRklORF9TVE9SRV9CWV9JRF9GQUlMID0gJ1tTdG9yZUZpbmRlcl0gRmluZCBhIFN0b3JlIGJ5IElkIEZhaWwnO1xuZXhwb3J0IGNvbnN0IEZJTkRfU1RPUkVfQllfSURfU1VDQ0VTUyA9XG4gICdbU3RvcmVGaW5kZXJdIEZpbmQgYSBTdG9yZSBieSBJZCBTdWNjZXNzJztcblxuZXhwb3J0IGNsYXNzIE9uSG9sZCBleHRlbmRzIExvYWRlckxvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gT05fSE9MRDtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoU1RPUkVfRklOREVSX0RBVEEpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGaW5kU3RvcmVzIGV4dGVuZHMgTG9hZGVyTG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBGSU5EX1NUT1JFUztcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHBheWxvYWQ6IHtcbiAgICAgIHF1ZXJ5VGV4dDogc3RyaW5nO1xuICAgICAgbG9uZ2l0dWRlTGF0aXR1ZGU/OiBMb25naXR1ZGVMYXRpdHVkZTtcbiAgICAgIHVzZU15TG9jYXRpb24/OiBib29sZWFuO1xuICAgICAgc2VhcmNoQ29uZmlnPzogU3RvcmVGaW5kZXJTZWFyY2hDb25maWc7XG4gICAgICBjb3VudHJ5SXNvQ29kZT86IHN0cmluZztcbiAgICB9XG4gICkge1xuICAgIHN1cGVyKFNUT1JFX0ZJTkRFUl9EQVRBKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRmluZFN0b3Jlc0ZhaWwgZXh0ZW5kcyBMb2FkZXJGYWlsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEZJTkRfU1RPUkVTX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihTVE9SRV9GSU5ERVJfREFUQSwgcGF5bG9hZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZpbmRTdG9yZXNTdWNjZXNzIGV4dGVuZHMgTG9hZGVyU3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBGSU5EX1NUT1JFU19TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoU1RPUkVfRklOREVSX0RBVEEpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGaW5kU3RvcmVCeUlkIGV4dGVuZHMgTG9hZGVyTG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBGSU5EX1NUT1JFX0JZX0lEO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyBzdG9yZUlkOiBzdHJpbmcgfSkge1xuICAgIHN1cGVyKFNUT1JFX0ZJTkRFUl9EQVRBKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRmluZFN0b3JlQnlJZEZhaWwgZXh0ZW5kcyBMb2FkZXJGYWlsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEZJTkRfU1RPUkVfQllfSURfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKFNUT1JFX0ZJTkRFUl9EQVRBLCBwYXlsb2FkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRmluZFN0b3JlQnlJZFN1Y2Nlc3MgZXh0ZW5kcyBMb2FkZXJTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEZJTkRfU1RPUkVfQllfSURfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKFNUT1JFX0ZJTkRFUl9EQVRBKTtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBGaW5kU3RvcmVzQWN0aW9uID1cbiAgfCBPbkhvbGRcbiAgfCBGaW5kU3RvcmVzXG4gIHwgRmluZFN0b3Jlc0ZhaWxcbiAgfCBGaW5kU3RvcmVzU3VjY2Vzc1xuICB8IEZpbmRTdG9yZUJ5SWRcbiAgfCBGaW5kU3RvcmVCeUlkRmFpbFxuICB8IEZpbmRTdG9yZUJ5SWRTdWNjZXNzO1xuIl19