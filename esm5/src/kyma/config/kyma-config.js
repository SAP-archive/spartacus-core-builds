import { __decorate, __extends } from "tslib";
import { OccConfig } from '../../occ/config/occ-config';
import { Injectable } from '@angular/core';
import { Config } from '../../config/config.module';
import * as i0 from "@angular/core";
import * as i1 from "../../config/config.module";
var KymaConfig = /** @class */ (function (_super) {
    __extends(KymaConfig, _super);
    function KymaConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    KymaConfig.ɵprov = i0.ɵɵdefineInjectable({ factory: function KymaConfig_Factory() { return i0.ɵɵinject(i1.Config); }, token: KymaConfig, providedIn: "root" });
    KymaConfig = __decorate([
        Injectable({
            providedIn: 'root',
            useExisting: Config,
        })
    ], KymaConfig);
    return KymaConfig;
}(OccConfig));
export { KymaConfig };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia3ltYS1jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMva3ltYS9jb25maWcva3ltYS1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7O0FBTXBEO0lBQXlDLDhCQUFTO0lBQWxEOztLQUtDOztJQUxxQixVQUFVO1FBSi9CLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1lBQ2xCLFdBQVcsRUFBRSxNQUFNO1NBQ3BCLENBQUM7T0FDb0IsVUFBVSxDQUsvQjtxQkFiRDtDQWFDLEFBTEQsQ0FBeUMsU0FBUyxHQUtqRDtTQUxxQixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2NjQ29uZmlnIH0gZnJvbSAnLi4vLi4vb2NjL2NvbmZpZy9vY2MtY29uZmlnJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4uLy4uL2NvbmZpZy9jb25maWcubW9kdWxlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG4gIHVzZUV4aXN0aW5nOiBDb25maWcsXG59KVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEt5bWFDb25maWcgZXh0ZW5kcyBPY2NDb25maWcge1xuICBhdXRoZW50aWNhdGlvbj86IHtcbiAgICBreW1hX2NsaWVudF9pZD86IHN0cmluZztcbiAgICBreW1hX2NsaWVudF9zZWNyZXQ/OiBzdHJpbmc7XG4gIH07XG59XG4iXX0=