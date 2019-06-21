/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmluZC1zdG9yZXMuYWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3N0b3JlLWZpbmRlci9zdG9yZS9hY3Rpb25zL2ZpbmQtc3RvcmVzLmFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUNMLGdCQUFnQixFQUNoQixnQkFBZ0IsRUFDaEIsbUJBQW1CLEdBQ3BCLE1BQU0sMkNBQTJDLENBQUM7QUFDbkQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7O0FBRzFELE1BQU0sT0FBTyxPQUFPLEdBQUcsdUJBQXVCOztBQUM5QyxNQUFNLE9BQU8sV0FBVyxHQUFHLDJCQUEyQjs7QUFDdEQsTUFBTSxPQUFPLGdCQUFnQixHQUFHLGdDQUFnQzs7QUFDaEUsTUFBTSxPQUFPLG1CQUFtQixHQUFHLG1DQUFtQzs7QUFFdEUsTUFBTSxPQUFPLGdCQUFnQixHQUFHLGtDQUFrQzs7QUFDbEUsTUFBTSxPQUFPLHFCQUFxQixHQUFHLHVDQUF1Qzs7QUFDNUUsTUFBTSxPQUFPLHdCQUF3QixHQUNuQywwQ0FBMEM7QUFFNUMsTUFBTSxPQUFPLE1BQU8sU0FBUSxnQkFBZ0I7SUFFMUM7UUFDRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUZsQixTQUFJLEdBQUcsT0FBTyxDQUFDO0lBR3hCLENBQUM7Q0FDRjs7O0lBSkMsc0JBQXdCOztBQU0xQixNQUFNLE9BQU8sVUFBVyxTQUFRLGdCQUFnQjs7OztJQUU5QyxZQUNTLE9BTU47UUFFRCxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQVJsQixZQUFPLEdBQVAsT0FBTyxDQU1iO1FBUk0sU0FBSSxHQUFHLFdBQVcsQ0FBQztJQVc1QixDQUFDO0NBQ0Y7OztJQVpDLDBCQUE0Qjs7SUFFMUIsNkJBTUM7O0FBTUwsTUFBTSxPQUFPLGNBQWUsU0FBUSxnQkFBZ0I7Ozs7SUFFbEQsWUFBbUIsT0FBWTtRQUM3QixLQUFLLENBQUMsaUJBQWlCLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFEakIsWUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixTQUFJLEdBQUcsZ0JBQWdCLENBQUM7SUFHakMsQ0FBQztDQUNGOzs7SUFKQyw4QkFBaUM7O0lBQ3JCLGlDQUFtQjs7QUFLakMsTUFBTSxPQUFPLGlCQUFrQixTQUFRLG1CQUFtQjs7OztJQUV4RCxZQUFtQixPQUFZO1FBQzdCLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBRFIsWUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixTQUFJLEdBQUcsbUJBQW1CLENBQUM7SUFHcEMsQ0FBQztDQUNGOzs7SUFKQyxpQ0FBb0M7O0lBQ3hCLG9DQUFtQjs7QUFLakMsTUFBTSxPQUFPLGFBQWMsU0FBUSxnQkFBZ0I7Ozs7SUFFakQsWUFBbUIsT0FBNEI7UUFDN0MsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFEUixZQUFPLEdBQVAsT0FBTyxDQUFxQjtRQUR0QyxTQUFJLEdBQUcsZ0JBQWdCLENBQUM7SUFHakMsQ0FBQztDQUNGOzs7SUFKQyw2QkFBaUM7O0lBQ3JCLGdDQUFtQzs7QUFLakQsTUFBTSxPQUFPLGlCQUFrQixTQUFRLGdCQUFnQjs7OztJQUVyRCxZQUFtQixPQUFZO1FBQzdCLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxPQUFPLENBQUMsQ0FBQztRQURqQixZQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFNBQUksR0FBRyxxQkFBcUIsQ0FBQztJQUd0QyxDQUFDO0NBQ0Y7OztJQUpDLGlDQUFzQzs7SUFDMUIsb0NBQW1COztBQUtqQyxNQUFNLE9BQU8sb0JBQXFCLFNBQVEsbUJBQW1COzs7O0lBRTNELFlBQW1CLE9BQVk7UUFDN0IsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFEUixZQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFNBQUksR0FBRyx3QkFBd0IsQ0FBQztJQUd6QyxDQUFDO0NBQ0Y7OztJQUpDLG9DQUF5Qzs7SUFDN0IsdUNBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RvcmVGaW5kZXJTZWFyY2hDb25maWcgfSBmcm9tICcuLi8uLi9tb2RlbC9zZWFyY2gtY29uZmlnJztcbmltcG9ydCB7XG4gIExvYWRlckxvYWRBY3Rpb24sXG4gIExvYWRlckZhaWxBY3Rpb24sXG4gIExvYWRlclN1Y2Nlc3NBY3Rpb24sXG59IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2xvYWRlci9sb2FkZXIuYWN0aW9uJztcbmltcG9ydCB7IFNUT1JFX0ZJTkRFUl9EQVRBIH0gZnJvbSAnLi4vc3RvcmUtZmluZGVyLXN0YXRlJztcbmltcG9ydCB7IEdlb1BvaW50IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvbWlzYy5tb2RlbCc7XG5cbmV4cG9ydCBjb25zdCBPTl9IT0xEID0gJ1tTdG9yZUZpbmRlcl0gT24gSG9sZCc7XG5leHBvcnQgY29uc3QgRklORF9TVE9SRVMgPSAnW1N0b3JlRmluZGVyXSBGaW5kIFN0b3Jlcyc7XG5leHBvcnQgY29uc3QgRklORF9TVE9SRVNfRkFJTCA9ICdbU3RvcmVGaW5kZXJdIEZpbmQgU3RvcmVzIEZhaWwnO1xuZXhwb3J0IGNvbnN0IEZJTkRfU1RPUkVTX1NVQ0NFU1MgPSAnW1N0b3JlRmluZGVyXSBGaW5kIFN0b3JlcyBTdWNjZXNzJztcblxuZXhwb3J0IGNvbnN0IEZJTkRfU1RPUkVfQllfSUQgPSAnW1N0b3JlRmluZGVyXSBGaW5kIGEgU3RvcmUgYnkgSWQnO1xuZXhwb3J0IGNvbnN0IEZJTkRfU1RPUkVfQllfSURfRkFJTCA9ICdbU3RvcmVGaW5kZXJdIEZpbmQgYSBTdG9yZSBieSBJZCBGYWlsJztcbmV4cG9ydCBjb25zdCBGSU5EX1NUT1JFX0JZX0lEX1NVQ0NFU1MgPVxuICAnW1N0b3JlRmluZGVyXSBGaW5kIGEgU3RvcmUgYnkgSWQgU3VjY2Vzcyc7XG5cbmV4cG9ydCBjbGFzcyBPbkhvbGQgZXh0ZW5kcyBMb2FkZXJMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IE9OX0hPTEQ7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKFNUT1JFX0ZJTkRFUl9EQVRBKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRmluZFN0b3JlcyBleHRlbmRzIExvYWRlckxvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRklORF9TVE9SRVM7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBwYXlsb2FkOiB7XG4gICAgICBxdWVyeVRleHQ6IHN0cmluZztcbiAgICAgIGxvbmdpdHVkZUxhdGl0dWRlPzogR2VvUG9pbnQ7XG4gICAgICB1c2VNeUxvY2F0aW9uPzogYm9vbGVhbjtcbiAgICAgIHNlYXJjaENvbmZpZz86IFN0b3JlRmluZGVyU2VhcmNoQ29uZmlnO1xuICAgICAgY291bnRyeUlzb0NvZGU/OiBzdHJpbmc7XG4gICAgfVxuICApIHtcbiAgICBzdXBlcihTVE9SRV9GSU5ERVJfREFUQSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZpbmRTdG9yZXNGYWlsIGV4dGVuZHMgTG9hZGVyRmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBGSU5EX1NUT1JFU19GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoU1RPUkVfRklOREVSX0RBVEEsIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGaW5kU3RvcmVzU3VjY2VzcyBleHRlbmRzIExvYWRlclN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRklORF9TVE9SRVNfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKFNUT1JFX0ZJTkRFUl9EQVRBKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRmluZFN0b3JlQnlJZCBleHRlbmRzIExvYWRlckxvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRklORF9TVE9SRV9CWV9JRDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgc3RvcmVJZDogc3RyaW5nIH0pIHtcbiAgICBzdXBlcihTVE9SRV9GSU5ERVJfREFUQSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZpbmRTdG9yZUJ5SWRGYWlsIGV4dGVuZHMgTG9hZGVyRmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBGSU5EX1NUT1JFX0JZX0lEX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihTVE9SRV9GSU5ERVJfREFUQSwgcGF5bG9hZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZpbmRTdG9yZUJ5SWRTdWNjZXNzIGV4dGVuZHMgTG9hZGVyU3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBGSU5EX1NUT1JFX0JZX0lEX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihTVE9SRV9GSU5ERVJfREFUQSk7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgRmluZFN0b3Jlc0FjdGlvbiA9XG4gIHwgT25Ib2xkXG4gIHwgRmluZFN0b3Jlc1xuICB8IEZpbmRTdG9yZXNGYWlsXG4gIHwgRmluZFN0b3Jlc1N1Y2Nlc3NcbiAgfCBGaW5kU3RvcmVCeUlkXG4gIHwgRmluZFN0b3JlQnlJZEZhaWxcbiAgfCBGaW5kU3RvcmVCeUlkU3VjY2VzcztcbiJdfQ==