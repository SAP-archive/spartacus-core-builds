import { __decorate, __extends } from "tslib";
import { OccConfig } from '../../occ/config/occ-config';
import { Injectable } from '@angular/core';
import { Config } from '../../config/config-tokens';
import * as i0 from "@angular/core";
import * as i1 from "../../config/config-tokens";
var AuthConfig = /** @class */ (function (_super) {
    __extends(AuthConfig, _super);
    function AuthConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AuthConfig.ɵprov = i0.ɵɵdefineInjectable({ factory: function AuthConfig_Factory() { return i0.ɵɵinject(i1.Config); }, token: AuthConfig, providedIn: "root" });
    AuthConfig = __decorate([
        Injectable({
            providedIn: 'root',
            useExisting: Config,
        })
    ], AuthConfig);
    return AuthConfig;
}(OccConfig));
export { AuthConfig };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvYXV0aC9jb25maWcvYXV0aC1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7O0FBTXBEO0lBQXlDLDhCQUFTO0lBQWxEOztLQUtDOztJQUxxQixVQUFVO1FBSi9CLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1lBQ2xCLFdBQVcsRUFBRSxNQUFNO1NBQ3BCLENBQUM7T0FDb0IsVUFBVSxDQUsvQjtxQkFiRDtDQWFDLEFBTEQsQ0FBeUMsU0FBUyxHQUtqRDtTQUxxQixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2NjQ29uZmlnIH0gZnJvbSAnLi4vLi4vb2NjL2NvbmZpZy9vY2MtY29uZmlnJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4uLy4uL2NvbmZpZy9jb25maWctdG9rZW5zJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG4gIHVzZUV4aXN0aW5nOiBDb25maWcsXG59KVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEF1dGhDb25maWcgZXh0ZW5kcyBPY2NDb25maWcge1xuICBhdXRoZW50aWNhdGlvbj86IHtcbiAgICBjbGllbnRfaWQ/OiBzdHJpbmc7XG4gICAgY2xpZW50X3NlY3JldD86IHN0cmluZztcbiAgfTtcbn1cbiJdfQ==