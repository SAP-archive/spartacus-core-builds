import { __decorate } from "tslib";
import { OccConfig } from '../../occ/config/occ-config';
import { Injectable } from '@angular/core';
import { Config } from '../../config/config-tokens';
import * as i0 from "@angular/core";
import * as i1 from "../../config/config-tokens";
let KymaConfig = class KymaConfig extends OccConfig {
};
KymaConfig.ɵprov = i0.ɵɵdefineInjectable({ factory: function KymaConfig_Factory() { return i0.ɵɵinject(i1.Config); }, token: KymaConfig, providedIn: "root" });
KymaConfig = __decorate([
    Injectable({
        providedIn: 'root',
        useExisting: Config,
    })
], KymaConfig);
export { KymaConfig };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia3ltYS1jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMva3ltYS9jb25maWcva3ltYS1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7O0FBTXBELElBQXNCLFVBQVUsR0FBaEMsTUFBc0IsVUFBVyxTQUFRLFNBQVM7Q0FLakQsQ0FBQTs7QUFMcUIsVUFBVTtJQUovQixVQUFVLENBQUM7UUFDVixVQUFVLEVBQUUsTUFBTTtRQUNsQixXQUFXLEVBQUUsTUFBTTtLQUNwQixDQUFDO0dBQ29CLFVBQVUsQ0FLL0I7U0FMcUIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9jY0NvbmZpZyB9IGZyb20gJy4uLy4uL29jYy9jb25maWcvb2NjLWNvbmZpZyc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcvY29uZmlnLXRva2Vucyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxuICB1c2VFeGlzdGluZzogQ29uZmlnLFxufSlcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBLeW1hQ29uZmlnIGV4dGVuZHMgT2NjQ29uZmlnIHtcbiAgYXV0aGVudGljYXRpb24/OiB7XG4gICAga3ltYV9jbGllbnRfaWQ/OiBzdHJpbmc7XG4gICAga3ltYV9jbGllbnRfc2VjcmV0Pzogc3RyaW5nO1xuICB9O1xufVxuIl19