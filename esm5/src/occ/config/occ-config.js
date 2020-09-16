import { __decorate, __extends } from "tslib";
import { SiteContextConfig } from '../../site-context/config/site-context-config';
import { Injectable } from '@angular/core';
import { Config } from '../../config/config-tokens';
import * as i0 from "@angular/core";
import * as i1 from "../../config/config-tokens";
var OccConfig = /** @class */ (function (_super) {
    __extends(OccConfig, _super);
    function OccConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OccConfig.ɵprov = i0.ɵɵdefineInjectable({ factory: function OccConfig_Factory() { return i0.ɵɵinject(i1.Config); }, token: OccConfig, providedIn: "root" });
    OccConfig = __decorate([
        Injectable({
            providedIn: 'root',
            useExisting: Config,
        })
    ], OccConfig);
    return OccConfig;
}(SiteContextConfig));
export { OccConfig };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9vY2MvY29uZmlnL29jYy1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBR2xGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLDRCQUE0QixDQUFDOzs7QUFNcEQ7SUFBd0MsNkJBQWlCO0lBQXpEOztLQXdCQzs7SUF4QnFCLFNBQVM7UUFKOUIsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07WUFDbEIsV0FBVyxFQUFFLE1BQU07U0FDcEIsQ0FBQztPQUNvQixTQUFTLENBd0I5QjtvQkFsQ0Q7Q0FrQ0MsQUF4QkQsQ0FBd0MsaUJBQWlCLEdBd0J4RDtTQXhCcUIsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNpdGVDb250ZXh0Q29uZmlnIH0gZnJvbSAnLi4vLi4vc2l0ZS1jb250ZXh0L2NvbmZpZy9zaXRlLWNvbnRleHQtY29uZmlnJztcbmltcG9ydCB7IE9jY0VuZHBvaW50cyB9IGZyb20gJy4uL29jYy1tb2RlbHMvb2NjLWVuZHBvaW50cy5tb2RlbCc7XG5pbXBvcnQgeyBMb2FkaW5nU2NvcGVzIH0gZnJvbSAnLi9sb2FkaW5nLXNjb3Blcy1jb25maWcnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnL2NvbmZpZy10b2tlbnMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290JyxcbiAgdXNlRXhpc3Rpbmc6IENvbmZpZyxcbn0pXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgT2NjQ29uZmlnIGV4dGVuZHMgU2l0ZUNvbnRleHRDb25maWcge1xuICBiYWNrZW5kPzoge1xuICAgIG9jYz86IHtcbiAgICAgIGJhc2VVcmw/OiBzdHJpbmc7XG4gICAgICBwcmVmaXg/OiBzdHJpbmc7XG4gICAgICAvKipcbiAgICAgICAqIEluZGljYXRlcyB3aGV0aGVyIG9yIG5vdCBjcm9zcy1zaXRlIEFjY2Vzcy1Db250cm9sIHJlcXVlc3RzIHNob3VsZCBiZSBtYWRlXG4gICAgICAgKiB1c2luZyBjcmVkZW50aWFscyBzdWNoIGFzIGNvb2tpZXMsIGF1dGhvcml6YXRpb24gaGVhZGVycyBvciBUTFMgY2xpZW50IGNlcnRpZmljYXRlc1xuICAgICAgICovXG4gICAgICB1c2VXaXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xuXG4gICAgICBlbmRwb2ludHM/OiBPY2NFbmRwb2ludHM7XG4gICAgICBsZWdhY3k/OiBib29sZWFuO1xuICAgIH07XG4gICAgbWVkaWE/OiB7XG4gICAgICAvKipcbiAgICAgICAqIE1lZGlhIFVSTHMgYXJlIHR5cGljYWxseSByZWxhdGl2ZSwgc28gdGhhdCB0aGUgaG9zdCBjYW4gYmUgY29uZmlndXJlZC5cbiAgICAgICAqIENvbmZpZ3VyYWJsZSBtZWRpYSBiYXNlVVJMcyBhcmUgdXNlZnVsIGZvciBTRU8sIG11bHRpLXNpdGUsXG4gICAgICAgKiBzd2l0Y2hpbmcgZW52aXJvbm1lbnRzLCBldGMuXG4gICAgICAgKi9cbiAgICAgIGJhc2VVcmw/OiBzdHJpbmc7XG4gICAgfTtcbiAgICBsb2FkaW5nU2NvcGVzPzogTG9hZGluZ1Njb3BlcztcbiAgfTtcbn1cbiJdfQ==