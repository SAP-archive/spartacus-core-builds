import { StateUtils } from '../../../state/utils/index';
import { USER_REPLENISHMENT_ORDERS } from '../user-state';
export const LOAD_USER_REPLENISHMENT_ORDERS = '[User] Load User Replenishment Orders';
export const LOAD_USER_REPLENISHMENT_ORDERS_FAIL = '[User] Load User Replenishment Orders Fail';
export const LOAD_USER_REPLENISHMENT_ORDERS_SUCCESS = '[User] Load User Replenishment Orders Success';
export const CLEAR_USER_REPLENISHMENT_ORDERS = '[User] Clear User Replenishment Orders';
export class LoadUserReplenishmentOrders extends StateUtils.LoaderLoadAction {
    constructor(payload) {
        super(USER_REPLENISHMENT_ORDERS);
        this.payload = payload;
        this.type = LOAD_USER_REPLENISHMENT_ORDERS;
    }
}
export class LoadUserReplenishmentOrdersFail extends StateUtils.LoaderFailAction {
    constructor(payload) {
        super(USER_REPLENISHMENT_ORDERS, payload);
        this.payload = payload;
        this.type = LOAD_USER_REPLENISHMENT_ORDERS_FAIL;
    }
}
export class LoadUserReplenishmentOrdersSuccess extends StateUtils.LoaderSuccessAction {
    constructor(payload) {
        super(USER_REPLENISHMENT_ORDERS);
        this.payload = payload;
        this.type = LOAD_USER_REPLENISHMENT_ORDERS_SUCCESS;
    }
}
export class ClearUserReplenishmentOrders extends StateUtils.LoaderResetAction {
    constructor() {
        super(USER_REPLENISHMENT_ORDERS);
        this.type = CLEAR_USER_REPLENISHMENT_ORDERS;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1yZXBsZW5pc2htZW50LW9yZGVycy5hY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL3NyYy91c2VyL3N0b3JlL2FjdGlvbnMvdXNlci1yZXBsZW5pc2htZW50LW9yZGVycy5hY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3hELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxRCxNQUFNLENBQUMsTUFBTSw4QkFBOEIsR0FDekMsdUNBQXVDLENBQUM7QUFDMUMsTUFBTSxDQUFDLE1BQU0sbUNBQW1DLEdBQzlDLDRDQUE0QyxDQUFDO0FBQy9DLE1BQU0sQ0FBQyxNQUFNLHNDQUFzQyxHQUNqRCwrQ0FBK0MsQ0FBQztBQUNsRCxNQUFNLENBQUMsTUFBTSwrQkFBK0IsR0FDMUMsd0NBQXdDLENBQUM7QUFFM0MsTUFBTSxPQUFPLDJCQUE0QixTQUFRLFVBQVUsQ0FBQyxnQkFBZ0I7SUFFMUUsWUFDUyxPQUtOO1FBRUQsS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7UUFQMUIsWUFBTyxHQUFQLE9BQU8sQ0FLYjtRQVBNLFNBQUksR0FBRyw4QkFBOEIsQ0FBQztJQVUvQyxDQUFDO0NBQ0Y7QUFFRCxNQUFNLE9BQU8sK0JBQWdDLFNBQVEsVUFBVSxDQUFDLGdCQUFnQjtJQUU5RSxZQUFtQixPQUFZO1FBQzdCLEtBQUssQ0FBQyx5QkFBeUIsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUR6QixZQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFNBQUksR0FBRyxtQ0FBbUMsQ0FBQztJQUdwRCxDQUFDO0NBQ0Y7QUFFRCxNQUFNLE9BQU8sa0NBQW1DLFNBQVEsVUFBVSxDQUFDLG1CQUFtQjtJQUVwRixZQUFtQixPQUErQjtRQUNoRCxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztRQURoQixZQUFPLEdBQVAsT0FBTyxDQUF3QjtRQUR6QyxTQUFJLEdBQUcsc0NBQXNDLENBQUM7SUFHdkQsQ0FBQztDQUNGO0FBRUQsTUFBTSxPQUFPLDRCQUE2QixTQUFRLFVBQVUsQ0FBQyxpQkFBaUI7SUFFNUU7UUFDRSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztRQUYxQixTQUFJLEdBQUcsK0JBQStCLENBQUM7SUFHaEQsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVwbGVuaXNobWVudE9yZGVyTGlzdCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL3JlcGxlbmlzaG1lbnQtb3JkZXIubW9kZWwnO1xuaW1wb3J0IHsgU3RhdGVVdGlscyB9IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2luZGV4JztcbmltcG9ydCB7IFVTRVJfUkVQTEVOSVNITUVOVF9PUkRFUlMgfSBmcm9tICcuLi91c2VyLXN0YXRlJztcblxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9SRVBMRU5JU0hNRU5UX09SREVSUyA9XG4gICdbVXNlcl0gTG9hZCBVc2VyIFJlcGxlbmlzaG1lbnQgT3JkZXJzJztcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfUkVQTEVOSVNITUVOVF9PUkRFUlNfRkFJTCA9XG4gICdbVXNlcl0gTG9hZCBVc2VyIFJlcGxlbmlzaG1lbnQgT3JkZXJzIEZhaWwnO1xuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9SRVBMRU5JU0hNRU5UX09SREVSU19TVUNDRVNTID1cbiAgJ1tVc2VyXSBMb2FkIFVzZXIgUmVwbGVuaXNobWVudCBPcmRlcnMgU3VjY2Vzcyc7XG5leHBvcnQgY29uc3QgQ0xFQVJfVVNFUl9SRVBMRU5JU0hNRU5UX09SREVSUyA9XG4gICdbVXNlcl0gQ2xlYXIgVXNlciBSZXBsZW5pc2htZW50IE9yZGVycyc7XG5cbmV4cG9ydCBjbGFzcyBMb2FkVXNlclJlcGxlbmlzaG1lbnRPcmRlcnMgZXh0ZW5kcyBTdGF0ZVV0aWxzLkxvYWRlckxvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9VU0VSX1JFUExFTklTSE1FTlRfT1JERVJTO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcGF5bG9hZDoge1xuICAgICAgdXNlcklkOiBzdHJpbmc7XG4gICAgICBwYWdlU2l6ZT86IG51bWJlcjtcbiAgICAgIGN1cnJlbnRQYWdlPzogbnVtYmVyO1xuICAgICAgc29ydD86IHN0cmluZztcbiAgICB9XG4gICkge1xuICAgIHN1cGVyKFVTRVJfUkVQTEVOSVNITUVOVF9PUkRFUlMpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkVXNlclJlcGxlbmlzaG1lbnRPcmRlcnNGYWlsIGV4dGVuZHMgU3RhdGVVdGlscy5Mb2FkZXJGYWlsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfVVNFUl9SRVBMRU5JU0hNRU5UX09SREVSU19GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoVVNFUl9SRVBMRU5JU0hNRU5UX09SREVSUywgcGF5bG9hZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRVc2VyUmVwbGVuaXNobWVudE9yZGVyc1N1Y2Nlc3MgZXh0ZW5kcyBTdGF0ZVV0aWxzLkxvYWRlclN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9VU0VSX1JFUExFTklTSE1FTlRfT1JERVJTX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBSZXBsZW5pc2htZW50T3JkZXJMaXN0KSB7XG4gICAgc3VwZXIoVVNFUl9SRVBMRU5JU0hNRU5UX09SREVSUyk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENsZWFyVXNlclJlcGxlbmlzaG1lbnRPcmRlcnMgZXh0ZW5kcyBTdGF0ZVV0aWxzLkxvYWRlclJlc2V0QWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENMRUFSX1VTRVJfUkVQTEVOSVNITUVOVF9PUkRFUlM7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKFVTRVJfUkVQTEVOSVNITUVOVF9PUkRFUlMpO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIFVzZXJSZXBsZW5pc2htZW50T3JkZXJzQWN0aW9uID1cbiAgfCBMb2FkVXNlclJlcGxlbmlzaG1lbnRPcmRlcnNcbiAgfCBMb2FkVXNlclJlcGxlbmlzaG1lbnRPcmRlcnNGYWlsXG4gIHwgTG9hZFVzZXJSZXBsZW5pc2htZW50T3JkZXJzU3VjY2Vzc1xuICB8IENsZWFyVXNlclJlcGxlbmlzaG1lbnRPcmRlcnM7XG4iXX0=