import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { OccConfig } from '../config/occ-config';
import * as i0 from "@angular/core";
import * as i1 from "../config/occ-config";
/**
 * Http interceptor to add cookies to all cross-site requests.
 */
let WithCredentialsInterceptor = class WithCredentialsInterceptor {
    constructor(config) {
        this.config = config;
    }
    /**
     * Intercepts each request and adds the `withCredential` flag to it
     * if it hasn't been added already.
     */
    intercept(request, next) {
        if (this.requiresWithCredentials(request)) {
            request = request.clone({
                withCredentials: true,
            });
        }
        return next.handle(request);
    }
    /**
     * indicates whether the request should use the WithCredentials flag.
     */
    requiresWithCredentials(request) {
        var _a, _b;
        return (((_a = this.occConfig) === null || _a === void 0 ? void 0 : _a.useWithCredentials) &&
            request.url.indexOf((_b = this.occConfig) === null || _b === void 0 ? void 0 : _b.prefix) > -1);
    }
    get occConfig() {
        return this.config.backend.occ;
    }
};
WithCredentialsInterceptor.ctorParameters = () => [
    { type: OccConfig }
];
WithCredentialsInterceptor.ɵprov = i0.ɵɵdefineInjectable({ factory: function WithCredentialsInterceptor_Factory() { return new WithCredentialsInterceptor(i0.ɵɵinject(i1.OccConfig)); }, token: WithCredentialsInterceptor, providedIn: "root" });
WithCredentialsInterceptor = __decorate([
    Injectable({ providedIn: 'root' })
], WithCredentialsInterceptor);
export { WithCredentialsInterceptor };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l0aC1jcmVkZW50aWFscy5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9vY2MvaW50ZXJjZXB0b3JzL3dpdGgtY3JlZGVudGlhbHMuaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQU1BLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7QUFFakQ7O0dBRUc7QUFFSCxJQUFhLDBCQUEwQixHQUF2QyxNQUFhLDBCQUEwQjtJQUNyQyxZQUFzQixNQUFpQjtRQUFqQixXQUFNLEdBQU4sTUFBTSxDQUFXO0lBQUcsQ0FBQztJQUUzQzs7O09BR0c7SUFDSCxTQUFTLENBQ1AsT0FBeUIsRUFDekIsSUFBaUI7UUFFakIsSUFBSSxJQUFJLENBQUMsdUJBQXVCLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDekMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7Z0JBQ3RCLGVBQWUsRUFBRSxJQUFJO2FBQ3RCLENBQUMsQ0FBQztTQUNKO1FBQ0QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRDs7T0FFRztJQUNPLHVCQUF1QixDQUFDLE9BQXlCOztRQUN6RCxPQUFPLENBQ0wsT0FBQSxJQUFJLENBQUMsU0FBUywwQ0FBRSxrQkFBa0I7WUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLE9BQUMsSUFBSSxDQUFDLFNBQVMsMENBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQ2pELENBQUM7SUFDSixDQUFDO0lBRUQsSUFBWSxTQUFTO1FBQ25CLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO0lBQ2pDLENBQUM7Q0FDRixDQUFBOztZQS9CK0IsU0FBUzs7O0FBRDVCLDBCQUEwQjtJQUR0QyxVQUFVLENBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLENBQUM7R0FDdEIsMEJBQTBCLENBZ0N0QztTQWhDWSwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBIdHRwRXZlbnQsXG4gIEh0dHBIYW5kbGVyLFxuICBIdHRwSW50ZXJjZXB0b3IsXG4gIEh0dHBSZXF1ZXN0LFxufSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBPY2NDb25maWcgfSBmcm9tICcuLi9jb25maWcvb2NjLWNvbmZpZyc7XG5cbi8qKlxuICogSHR0cCBpbnRlcmNlcHRvciB0byBhZGQgY29va2llcyB0byBhbGwgY3Jvc3Mtc2l0ZSByZXF1ZXN0cy5cbiAqL1xuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBXaXRoQ3JlZGVudGlhbHNJbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBjb25maWc6IE9jY0NvbmZpZykge31cblxuICAvKipcbiAgICogSW50ZXJjZXB0cyBlYWNoIHJlcXVlc3QgYW5kIGFkZHMgdGhlIGB3aXRoQ3JlZGVudGlhbGAgZmxhZyB0byBpdFxuICAgKiBpZiBpdCBoYXNuJ3QgYmVlbiBhZGRlZCBhbHJlYWR5LlxuICAgKi9cbiAgaW50ZXJjZXB0KFxuICAgIHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4sXG4gICAgbmV4dDogSHR0cEhhbmRsZXJcbiAgKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xuICAgIGlmICh0aGlzLnJlcXVpcmVzV2l0aENyZWRlbnRpYWxzKHJlcXVlc3QpKSB7XG4gICAgICByZXF1ZXN0ID0gcmVxdWVzdC5jbG9uZSh7XG4gICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxdWVzdCk7XG4gIH1cblxuICAvKipcbiAgICogaW5kaWNhdGVzIHdoZXRoZXIgdGhlIHJlcXVlc3Qgc2hvdWxkIHVzZSB0aGUgV2l0aENyZWRlbnRpYWxzIGZsYWcuXG4gICAqL1xuICBwcm90ZWN0ZWQgcmVxdWlyZXNXaXRoQ3JlZGVudGlhbHMocmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55Pik6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLm9jY0NvbmZpZz8udXNlV2l0aENyZWRlbnRpYWxzICYmXG4gICAgICByZXF1ZXN0LnVybC5pbmRleE9mKHRoaXMub2NjQ29uZmlnPy5wcmVmaXgpID4gLTFcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgb2NjQ29uZmlnKCkge1xuICAgIHJldHVybiB0aGlzLmNvbmZpZy5iYWNrZW5kLm9jYztcbiAgfVxufVxuIl19