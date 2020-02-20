import { __decorate, __param } from "tslib";
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { HttpResponse, } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { OccEndpointsService } from '../../occ/services/occ-endpoints.service';
import { PersonalizationConfig } from '../config/personalization-config';
import { WindowRef } from '../../window/window-ref';
import { isPlatformBrowser } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "../config/personalization-config";
import * as i2 from "../../occ/services/occ-endpoints.service";
import * as i3 from "../../window/window-ref";
const PERSONALIZATION_TIME_KEY = 'personalization-time';
let OccPersonalizationTimeInterceptor = class OccPersonalizationTimeInterceptor {
    constructor(config, occEndpoints, winRef, platform) {
        this.config = config;
        this.occEndpoints = occEndpoints;
        this.winRef = winRef;
        this.platform = platform;
        this.enabled = false;
        if (isPlatformBrowser(this.platform)) {
            this.enabled =
                (this.winRef.localStorage && this.config.personalization.enabled) ||
                    false;
            if (this.enabled) {
                this.requestHeader = this.config.personalization.httpHeaderName.timestamp.toLowerCase();
                this.timestamp = this.winRef.localStorage.getItem(PERSONALIZATION_TIME_KEY);
            }
            else if (this.winRef.localStorage.getItem(PERSONALIZATION_TIME_KEY)) {
                this.winRef.localStorage.removeItem(PERSONALIZATION_TIME_KEY);
            }
        }
    }
    intercept(request, next) {
        if (!this.enabled) {
            return next.handle(request);
        }
        if (this.timestamp &&
            request.url.includes(this.occEndpoints.getBaseEndpoint())) {
            request = request.clone({
                setHeaders: {
                    [this.requestHeader]: this.timestamp,
                },
            });
        }
        return next.handle(request).pipe(tap(event => {
            if (event instanceof HttpResponse) {
                if (event.headers.keys().includes(this.requestHeader)) {
                    const receivedTimestamp = event.headers.get(this.requestHeader);
                    if (this.timestamp !== receivedTimestamp) {
                        this.timestamp = receivedTimestamp;
                        this.winRef.localStorage.setItem(PERSONALIZATION_TIME_KEY, this.timestamp);
                    }
                }
            }
        }));
    }
};
OccPersonalizationTimeInterceptor.ctorParameters = () => [
    { type: PersonalizationConfig },
    { type: OccEndpointsService },
    { type: WindowRef },
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
OccPersonalizationTimeInterceptor.ɵprov = i0.ɵɵdefineInjectable({ factory: function OccPersonalizationTimeInterceptor_Factory() { return new OccPersonalizationTimeInterceptor(i0.ɵɵinject(i1.PersonalizationConfig), i0.ɵɵinject(i2.OccEndpointsService), i0.ɵɵinject(i3.WindowRef), i0.ɵɵinject(i0.PLATFORM_ID)); }, token: OccPersonalizationTimeInterceptor, providedIn: "root" });
OccPersonalizationTimeInterceptor = __decorate([
    Injectable({ providedIn: 'root' }),
    __param(3, Inject(PLATFORM_ID))
], OccPersonalizationTimeInterceptor);
export { OccPersonalizationTimeInterceptor };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXBlcnNvbmFsaXphdGlvbi10aW1lLmludGVyY2VwdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3BlcnNvbmFsaXphdGlvbi9odHRwLWludGVyY2VwdG9ycy9vY2MtcGVyc29uYWxpemF0aW9uLXRpbWUuaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRSxPQUFPLEVBS0wsWUFBWSxHQUNiLE1BQU0sc0JBQXNCLENBQUM7QUFFOUIsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7Ozs7QUFFcEQsTUFBTSx3QkFBd0IsR0FBRyxzQkFBc0IsQ0FBQztBQUd4RCxJQUFhLGlDQUFpQyxHQUE5QyxNQUFhLGlDQUFpQztJQUs1QyxZQUNVLE1BQTZCLEVBQzdCLFlBQWlDLEVBQ2pDLE1BQWlCLEVBQ0ksUUFBYTtRQUhsQyxXQUFNLEdBQU4sTUFBTSxDQUF1QjtRQUM3QixpQkFBWSxHQUFaLFlBQVksQ0FBcUI7UUFDakMsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQUNJLGFBQVEsR0FBUixRQUFRLENBQUs7UUFOcEMsWUFBTyxHQUFHLEtBQUssQ0FBQztRQVF0QixJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNwQyxJQUFJLENBQUMsT0FBTztnQkFDVixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQztvQkFDakUsS0FBSyxDQUFDO1lBRVIsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNoQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQ3hGLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUMvQyx3QkFBd0IsQ0FDekIsQ0FBQzthQUNIO2lCQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLHdCQUF3QixDQUFDLEVBQUU7Z0JBQ3JFLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO2FBQy9EO1NBQ0Y7SUFDSCxDQUFDO0lBRUQsU0FBUyxDQUNQLE9BQXlCLEVBQ3pCLElBQWlCO1FBRWpCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2pCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUM3QjtRQUVELElBQ0UsSUFBSSxDQUFDLFNBQVM7WUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsRUFBRSxDQUFDLEVBQ3pEO1lBQ0EsT0FBTyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7Z0JBQ3RCLFVBQVUsRUFBRTtvQkFDVixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxJQUFJLENBQUMsU0FBUztpQkFDckM7YUFDRixDQUFDLENBQUM7U0FDSjtRQUVELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQzlCLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNWLElBQUksS0FBSyxZQUFZLFlBQVksRUFBRTtnQkFDakMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUU7b0JBQ3JELE1BQU0saUJBQWlCLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO29CQUNoRSxJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssaUJBQWlCLEVBQUU7d0JBQ3hDLElBQUksQ0FBQyxTQUFTLEdBQUcsaUJBQWlCLENBQUM7d0JBQ25DLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FDOUIsd0JBQXdCLEVBQ3hCLElBQUksQ0FBQyxTQUFTLENBQ2YsQ0FBQztxQkFDSDtpQkFDRjthQUNGO1FBQ0gsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7Q0FDRixDQUFBOztZQXpEbUIscUJBQXFCO1lBQ2YsbUJBQW1CO1lBQ3pCLFNBQVM7NENBQ3hCLE1BQU0sU0FBQyxXQUFXOzs7QUFUVixpQ0FBaUM7SUFEN0MsVUFBVSxDQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxDQUFDO0lBVTlCLFdBQUEsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFBO0dBVFgsaUNBQWlDLENBK0Q3QztTQS9EWSxpQ0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIFBMQVRGT1JNX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBIdHRwRXZlbnQsXG4gIEh0dHBIYW5kbGVyLFxuICBIdHRwSW50ZXJjZXB0b3IsXG4gIEh0dHBSZXF1ZXN0LFxuICBIdHRwUmVzcG9uc2UsXG59IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgT2NjRW5kcG9pbnRzU2VydmljZSB9IGZyb20gJy4uLy4uL29jYy9zZXJ2aWNlcy9vY2MtZW5kcG9pbnRzLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGVyc29uYWxpemF0aW9uQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL3BlcnNvbmFsaXphdGlvbi1jb25maWcnO1xuaW1wb3J0IHsgV2luZG93UmVmIH0gZnJvbSAnLi4vLi4vd2luZG93L3dpbmRvdy1yZWYnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5jb25zdCBQRVJTT05BTElaQVRJT05fVElNRV9LRVkgPSAncGVyc29uYWxpemF0aW9uLXRpbWUnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIE9jY1BlcnNvbmFsaXphdGlvblRpbWVJbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XG4gIHByaXZhdGUgdGltZXN0YW1wOiBzdHJpbmc7XG4gIHByaXZhdGUgcmVxdWVzdEhlYWRlcjogc3RyaW5nO1xuICBwcml2YXRlIGVuYWJsZWQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNvbmZpZzogUGVyc29uYWxpemF0aW9uQ29uZmlnLFxuICAgIHByaXZhdGUgb2NjRW5kcG9pbnRzOiBPY2NFbmRwb2ludHNTZXJ2aWNlLFxuICAgIHByaXZhdGUgd2luUmVmOiBXaW5kb3dSZWYsXG4gICAgQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybTogYW55XG4gICkge1xuICAgIGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtKSkge1xuICAgICAgdGhpcy5lbmFibGVkID1cbiAgICAgICAgKHRoaXMud2luUmVmLmxvY2FsU3RvcmFnZSAmJiB0aGlzLmNvbmZpZy5wZXJzb25hbGl6YXRpb24uZW5hYmxlZCkgfHxcbiAgICAgICAgZmFsc2U7XG5cbiAgICAgIGlmICh0aGlzLmVuYWJsZWQpIHtcbiAgICAgICAgdGhpcy5yZXF1ZXN0SGVhZGVyID0gdGhpcy5jb25maWcucGVyc29uYWxpemF0aW9uLmh0dHBIZWFkZXJOYW1lLnRpbWVzdGFtcC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB0aGlzLnRpbWVzdGFtcCA9IHRoaXMud2luUmVmLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFxuICAgICAgICAgIFBFUlNPTkFMSVpBVElPTl9USU1FX0tFWVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLndpblJlZi5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShQRVJTT05BTElaQVRJT05fVElNRV9LRVkpKSB7XG4gICAgICAgIHRoaXMud2luUmVmLmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFBFUlNPTkFMSVpBVElPTl9USU1FX0tFWSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaW50ZXJjZXB0KFxuICAgIHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4sXG4gICAgbmV4dDogSHR0cEhhbmRsZXJcbiAgKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xuICAgIGlmICghdGhpcy5lbmFibGVkKSB7XG4gICAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxdWVzdCk7XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgdGhpcy50aW1lc3RhbXAgJiZcbiAgICAgIHJlcXVlc3QudXJsLmluY2x1ZGVzKHRoaXMub2NjRW5kcG9pbnRzLmdldEJhc2VFbmRwb2ludCgpKVxuICAgICkge1xuICAgICAgcmVxdWVzdCA9IHJlcXVlc3QuY2xvbmUoe1xuICAgICAgICBzZXRIZWFkZXJzOiB7XG4gICAgICAgICAgW3RoaXMucmVxdWVzdEhlYWRlcl06IHRoaXMudGltZXN0YW1wLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcXVlc3QpLnBpcGUoXG4gICAgICB0YXAoZXZlbnQgPT4ge1xuICAgICAgICBpZiAoZXZlbnQgaW5zdGFuY2VvZiBIdHRwUmVzcG9uc2UpIHtcbiAgICAgICAgICBpZiAoZXZlbnQuaGVhZGVycy5rZXlzKCkuaW5jbHVkZXModGhpcy5yZXF1ZXN0SGVhZGVyKSkge1xuICAgICAgICAgICAgY29uc3QgcmVjZWl2ZWRUaW1lc3RhbXAgPSBldmVudC5oZWFkZXJzLmdldCh0aGlzLnJlcXVlc3RIZWFkZXIpO1xuICAgICAgICAgICAgaWYgKHRoaXMudGltZXN0YW1wICE9PSByZWNlaXZlZFRpbWVzdGFtcCkge1xuICAgICAgICAgICAgICB0aGlzLnRpbWVzdGFtcCA9IHJlY2VpdmVkVGltZXN0YW1wO1xuICAgICAgICAgICAgICB0aGlzLndpblJlZi5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgICAgICAgICBQRVJTT05BTElaQVRJT05fVElNRV9LRVksXG4gICAgICAgICAgICAgICAgdGhpcy50aW1lc3RhbXBcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgfVxufVxuIl19