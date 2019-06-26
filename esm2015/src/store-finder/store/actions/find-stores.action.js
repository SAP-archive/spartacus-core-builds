/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { StateLoaderActions } from '../../../state/index';
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
export class OnHold extends StateLoaderActions.LoaderLoadAction {
    constructor() {
        super(STORE_FINDER_DATA);
        this.type = ON_HOLD;
    }
}
if (false) {
    /** @type {?} */
    OnHold.prototype.type;
}
export class FindStores extends StateLoaderActions.LoaderLoadAction {
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
export class FindStoresFail extends StateLoaderActions.LoaderFailAction {
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
export class FindStoresSuccess extends StateLoaderActions.LoaderSuccessAction {
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
export class FindStoreById extends StateLoaderActions.LoaderLoadAction {
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
export class FindStoreByIdFail extends StateLoaderActions.LoaderFailAction {
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
export class FindStoreByIdSuccess extends StateLoaderActions.LoaderSuccessAction {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmluZC1zdG9yZXMuYWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3N0b3JlLWZpbmRlci9zdG9yZS9hY3Rpb25zL2ZpbmQtc3RvcmVzLmFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFMUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7O0FBRTFELE1BQU0sT0FBTyxPQUFPLEdBQUcsdUJBQXVCOztBQUM5QyxNQUFNLE9BQU8sV0FBVyxHQUFHLDJCQUEyQjs7QUFDdEQsTUFBTSxPQUFPLGdCQUFnQixHQUFHLGdDQUFnQzs7QUFDaEUsTUFBTSxPQUFPLG1CQUFtQixHQUFHLG1DQUFtQzs7QUFFdEUsTUFBTSxPQUFPLGdCQUFnQixHQUFHLGtDQUFrQzs7QUFDbEUsTUFBTSxPQUFPLHFCQUFxQixHQUFHLHVDQUF1Qzs7QUFDNUUsTUFBTSxPQUFPLHdCQUF3QixHQUNuQywwQ0FBMEM7QUFFNUMsTUFBTSxPQUFPLE1BQU8sU0FBUSxrQkFBa0IsQ0FBQyxnQkFBZ0I7SUFFN0Q7UUFDRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUZsQixTQUFJLEdBQUcsT0FBTyxDQUFDO0lBR3hCLENBQUM7Q0FDRjs7O0lBSkMsc0JBQXdCOztBQU0xQixNQUFNLE9BQU8sVUFBVyxTQUFRLGtCQUFrQixDQUFDLGdCQUFnQjs7OztJQUVqRSxZQUNTLE9BTU47UUFFRCxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQVJsQixZQUFPLEdBQVAsT0FBTyxDQU1iO1FBUk0sU0FBSSxHQUFHLFdBQVcsQ0FBQztJQVc1QixDQUFDO0NBQ0Y7OztJQVpDLDBCQUE0Qjs7SUFFMUIsNkJBTUM7O0FBTUwsTUFBTSxPQUFPLGNBQWUsU0FBUSxrQkFBa0IsQ0FBQyxnQkFBZ0I7Ozs7SUFFckUsWUFBbUIsT0FBWTtRQUM3QixLQUFLLENBQUMsaUJBQWlCLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFEakIsWUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixTQUFJLEdBQUcsZ0JBQWdCLENBQUM7SUFHakMsQ0FBQztDQUNGOzs7SUFKQyw4QkFBaUM7O0lBQ3JCLGlDQUFtQjs7QUFLakMsTUFBTSxPQUFPLGlCQUFrQixTQUFRLGtCQUFrQixDQUFDLG1CQUFtQjs7OztJQUUzRSxZQUFtQixPQUFZO1FBQzdCLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBRFIsWUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixTQUFJLEdBQUcsbUJBQW1CLENBQUM7SUFHcEMsQ0FBQztDQUNGOzs7SUFKQyxpQ0FBb0M7O0lBQ3hCLG9DQUFtQjs7QUFLakMsTUFBTSxPQUFPLGFBQWMsU0FBUSxrQkFBa0IsQ0FBQyxnQkFBZ0I7Ozs7SUFFcEUsWUFBbUIsT0FBNEI7UUFDN0MsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFEUixZQUFPLEdBQVAsT0FBTyxDQUFxQjtRQUR0QyxTQUFJLEdBQUcsZ0JBQWdCLENBQUM7SUFHakMsQ0FBQztDQUNGOzs7SUFKQyw2QkFBaUM7O0lBQ3JCLGdDQUFtQzs7QUFLakQsTUFBTSxPQUFPLGlCQUFrQixTQUFRLGtCQUFrQixDQUFDLGdCQUFnQjs7OztJQUV4RSxZQUFtQixPQUFZO1FBQzdCLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxPQUFPLENBQUMsQ0FBQztRQURqQixZQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFNBQUksR0FBRyxxQkFBcUIsQ0FBQztJQUd0QyxDQUFDO0NBQ0Y7OztJQUpDLGlDQUFzQzs7SUFDMUIsb0NBQW1COztBQUtqQyxNQUFNLE9BQU8sb0JBQXFCLFNBQVEsa0JBQWtCLENBQUMsbUJBQW1COzs7O0lBRTlFLFlBQW1CLE9BQVk7UUFDN0IsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFEUixZQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFNBQUksR0FBRyx3QkFBd0IsQ0FBQztJQUd6QyxDQUFDO0NBQ0Y7OztJQUpDLG9DQUF5Qzs7SUFDN0IsdUNBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2VvUG9pbnQgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9taXNjLm1vZGVsJztcbmltcG9ydCB7IFN0YXRlTG9hZGVyQWN0aW9ucyB9IGZyb20gJy4uLy4uLy4uL3N0YXRlL2luZGV4JztcbmltcG9ydCB7IFN0b3JlRmluZGVyU2VhcmNoQ29uZmlnIH0gZnJvbSAnLi4vLi4vbW9kZWwvc2VhcmNoLWNvbmZpZyc7XG5pbXBvcnQgeyBTVE9SRV9GSU5ERVJfREFUQSB9IGZyb20gJy4uL3N0b3JlLWZpbmRlci1zdGF0ZSc7XG5cbmV4cG9ydCBjb25zdCBPTl9IT0xEID0gJ1tTdG9yZUZpbmRlcl0gT24gSG9sZCc7XG5leHBvcnQgY29uc3QgRklORF9TVE9SRVMgPSAnW1N0b3JlRmluZGVyXSBGaW5kIFN0b3Jlcyc7XG5leHBvcnQgY29uc3QgRklORF9TVE9SRVNfRkFJTCA9ICdbU3RvcmVGaW5kZXJdIEZpbmQgU3RvcmVzIEZhaWwnO1xuZXhwb3J0IGNvbnN0IEZJTkRfU1RPUkVTX1NVQ0NFU1MgPSAnW1N0b3JlRmluZGVyXSBGaW5kIFN0b3JlcyBTdWNjZXNzJztcblxuZXhwb3J0IGNvbnN0IEZJTkRfU1RPUkVfQllfSUQgPSAnW1N0b3JlRmluZGVyXSBGaW5kIGEgU3RvcmUgYnkgSWQnO1xuZXhwb3J0IGNvbnN0IEZJTkRfU1RPUkVfQllfSURfRkFJTCA9ICdbU3RvcmVGaW5kZXJdIEZpbmQgYSBTdG9yZSBieSBJZCBGYWlsJztcbmV4cG9ydCBjb25zdCBGSU5EX1NUT1JFX0JZX0lEX1NVQ0NFU1MgPVxuICAnW1N0b3JlRmluZGVyXSBGaW5kIGEgU3RvcmUgYnkgSWQgU3VjY2Vzcyc7XG5cbmV4cG9ydCBjbGFzcyBPbkhvbGQgZXh0ZW5kcyBTdGF0ZUxvYWRlckFjdGlvbnMuTG9hZGVyTG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBPTl9IT0xEO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihTVE9SRV9GSU5ERVJfREFUQSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZpbmRTdG9yZXMgZXh0ZW5kcyBTdGF0ZUxvYWRlckFjdGlvbnMuTG9hZGVyTG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBGSU5EX1NUT1JFUztcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHBheWxvYWQ6IHtcbiAgICAgIHF1ZXJ5VGV4dDogc3RyaW5nO1xuICAgICAgbG9uZ2l0dWRlTGF0aXR1ZGU/OiBHZW9Qb2ludDtcbiAgICAgIHVzZU15TG9jYXRpb24/OiBib29sZWFuO1xuICAgICAgc2VhcmNoQ29uZmlnPzogU3RvcmVGaW5kZXJTZWFyY2hDb25maWc7XG4gICAgICBjb3VudHJ5SXNvQ29kZT86IHN0cmluZztcbiAgICB9XG4gICkge1xuICAgIHN1cGVyKFNUT1JFX0ZJTkRFUl9EQVRBKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRmluZFN0b3Jlc0ZhaWwgZXh0ZW5kcyBTdGF0ZUxvYWRlckFjdGlvbnMuTG9hZGVyRmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBGSU5EX1NUT1JFU19GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoU1RPUkVfRklOREVSX0RBVEEsIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGaW5kU3RvcmVzU3VjY2VzcyBleHRlbmRzIFN0YXRlTG9hZGVyQWN0aW9ucy5Mb2FkZXJTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEZJTkRfU1RPUkVTX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihTVE9SRV9GSU5ERVJfREFUQSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZpbmRTdG9yZUJ5SWQgZXh0ZW5kcyBTdGF0ZUxvYWRlckFjdGlvbnMuTG9hZGVyTG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBGSU5EX1NUT1JFX0JZX0lEO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyBzdG9yZUlkOiBzdHJpbmcgfSkge1xuICAgIHN1cGVyKFNUT1JFX0ZJTkRFUl9EQVRBKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRmluZFN0b3JlQnlJZEZhaWwgZXh0ZW5kcyBTdGF0ZUxvYWRlckFjdGlvbnMuTG9hZGVyRmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBGSU5EX1NUT1JFX0JZX0lEX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihTVE9SRV9GSU5ERVJfREFUQSwgcGF5bG9hZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZpbmRTdG9yZUJ5SWRTdWNjZXNzIGV4dGVuZHMgU3RhdGVMb2FkZXJBY3Rpb25zLkxvYWRlclN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRklORF9TVE9SRV9CWV9JRF9TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoU1RPUkVfRklOREVSX0RBVEEpO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIEZpbmRTdG9yZXNBY3Rpb24gPVxuICB8IE9uSG9sZFxuICB8IEZpbmRTdG9yZXNcbiAgfCBGaW5kU3RvcmVzRmFpbFxuICB8IEZpbmRTdG9yZXNTdWNjZXNzXG4gIHwgRmluZFN0b3JlQnlJZFxuICB8IEZpbmRTdG9yZUJ5SWRGYWlsXG4gIHwgRmluZFN0b3JlQnlJZFN1Y2Nlc3M7XG4iXX0=