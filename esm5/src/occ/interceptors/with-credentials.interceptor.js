import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { OccConfig } from '../config/occ-config';
import * as i0 from "@angular/core";
import * as i1 from "../config/occ-config";
/**
 * Http interceptor to add cookies to all cross-site requests.
 */
var WithCredentialsInterceptor = /** @class */ (function () {
    function WithCredentialsInterceptor(config) {
        this.config = config;
    }
    /**
     * Intercepts each request and adds the `withCredential` flag to it
     * if it hasn't been added already.
     */
    WithCredentialsInterceptor.prototype.intercept = function (request, next) {
        if (this.requiresWithCredentials(request)) {
            request = request.clone({
                withCredentials: true,
            });
        }
        return next.handle(request);
    };
    /**
     * indicates whether the request should use the WithCredentials flag.
     */
    WithCredentialsInterceptor.prototype.requiresWithCredentials = function (request) {
        var _a, _b;
        return (((_a = this.occConfig) === null || _a === void 0 ? void 0 : _a.useWithCredentials) &&
            request.url.indexOf((_b = this.occConfig) === null || _b === void 0 ? void 0 : _b.prefix) > -1);
    };
    Object.defineProperty(WithCredentialsInterceptor.prototype, "occConfig", {
        get: function () {
            return this.config.backend.occ;
        },
        enumerable: true,
        configurable: true
    });
    WithCredentialsInterceptor.ctorParameters = function () { return [
        { type: OccConfig }
    ]; };
    WithCredentialsInterceptor.ɵprov = i0.ɵɵdefineInjectable({ factory: function WithCredentialsInterceptor_Factory() { return new WithCredentialsInterceptor(i0.ɵɵinject(i1.OccConfig)); }, token: WithCredentialsInterceptor, providedIn: "root" });
    WithCredentialsInterceptor = __decorate([
        Injectable({ providedIn: 'root' })
    ], WithCredentialsInterceptor);
    return WithCredentialsInterceptor;
}());
export { WithCredentialsInterceptor };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l0aC1jcmVkZW50aWFscy5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9vY2MvaW50ZXJjZXB0b3JzL3dpdGgtY3JlZGVudGlhbHMuaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQU1BLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7QUFFakQ7O0dBRUc7QUFFSDtJQUNFLG9DQUFzQixNQUFpQjtRQUFqQixXQUFNLEdBQU4sTUFBTSxDQUFXO0lBQUcsQ0FBQztJQUUzQzs7O09BR0c7SUFDSCw4Q0FBUyxHQUFULFVBQ0UsT0FBeUIsRUFDekIsSUFBaUI7UUFFakIsSUFBSSxJQUFJLENBQUMsdUJBQXVCLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDekMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7Z0JBQ3RCLGVBQWUsRUFBRSxJQUFJO2FBQ3RCLENBQUMsQ0FBQztTQUNKO1FBQ0QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRDs7T0FFRztJQUNPLDREQUF1QixHQUFqQyxVQUFrQyxPQUF5Qjs7UUFDekQsT0FBTyxDQUNMLE9BQUEsSUFBSSxDQUFDLFNBQVMsMENBQUUsa0JBQWtCO1lBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxPQUFDLElBQUksQ0FBQyxTQUFTLDBDQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUNqRCxDQUFDO0lBQ0osQ0FBQztJQUVELHNCQUFZLGlEQUFTO2FBQXJCO1lBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7UUFDakMsQ0FBQzs7O09BQUE7O2dCQTlCNkIsU0FBUzs7O0lBRDVCLDBCQUEwQjtRQUR0QyxVQUFVLENBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLENBQUM7T0FDdEIsMEJBQTBCLENBZ0N0QztxQ0E5Q0Q7Q0E4Q0MsQUFoQ0QsSUFnQ0M7U0FoQ1ksMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgSHR0cEV2ZW50LFxuICBIdHRwSGFuZGxlcixcbiAgSHR0cEludGVyY2VwdG9yLFxuICBIdHRwUmVxdWVzdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgT2NjQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL29jYy1jb25maWcnO1xuXG4vKipcbiAqIEh0dHAgaW50ZXJjZXB0b3IgdG8gYWRkIGNvb2tpZXMgdG8gYWxsIGNyb3NzLXNpdGUgcmVxdWVzdHMuXG4gKi9cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgV2l0aENyZWRlbnRpYWxzSW50ZXJjZXB0b3IgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgY29uZmlnOiBPY2NDb25maWcpIHt9XG5cbiAgLyoqXG4gICAqIEludGVyY2VwdHMgZWFjaCByZXF1ZXN0IGFuZCBhZGRzIHRoZSBgd2l0aENyZWRlbnRpYWxgIGZsYWcgdG8gaXRcbiAgICogaWYgaXQgaGFzbid0IGJlZW4gYWRkZWQgYWxyZWFkeS5cbiAgICovXG4gIGludGVyY2VwdChcbiAgICByZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+LFxuICAgIG5leHQ6IEh0dHBIYW5kbGVyXG4gICk6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcbiAgICBpZiAodGhpcy5yZXF1aXJlc1dpdGhDcmVkZW50aWFscyhyZXF1ZXN0KSkge1xuICAgICAgcmVxdWVzdCA9IHJlcXVlc3QuY2xvbmUoe1xuICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcXVlc3QpO1xuICB9XG5cbiAgLyoqXG4gICAqIGluZGljYXRlcyB3aGV0aGVyIHRoZSByZXF1ZXN0IHNob3VsZCB1c2UgdGhlIFdpdGhDcmVkZW50aWFscyBmbGFnLlxuICAgKi9cbiAgcHJvdGVjdGVkIHJlcXVpcmVzV2l0aENyZWRlbnRpYWxzKHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4pOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5vY2NDb25maWc/LnVzZVdpdGhDcmVkZW50aWFscyAmJlxuICAgICAgcmVxdWVzdC51cmwuaW5kZXhPZih0aGlzLm9jY0NvbmZpZz8ucHJlZml4KSA+IC0xXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IG9jY0NvbmZpZygpIHtcbiAgICByZXR1cm4gdGhpcy5jb25maWcuYmFja2VuZC5vY2M7XG4gIH1cbn1cbiJdfQ==