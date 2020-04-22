import { __decorate, __extends } from "tslib";
import { OccConfig } from '../../occ/config/occ-config';
import { Injectable } from '@angular/core';
import { Config } from '../../config/config.module';
import * as i0 from "@angular/core";
import * as i1 from "../../config/config.module";
var AsmConfig = /** @class */ (function (_super) {
    __extends(AsmConfig, _super);
    function AsmConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AsmConfig.ɵprov = i0.ɵɵdefineInjectable({ factory: function AsmConfig_Factory() { return i0.ɵɵinject(i1.Config); }, token: AsmConfig, providedIn: "root" });
    AsmConfig = __decorate([
        Injectable({
            providedIn: 'root',
            useExisting: Config,
        })
    ], AsmConfig);
    return AsmConfig;
}(OccConfig));
export { AsmConfig };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNtLWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9hc20vY29uZmlnL2FzbS1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7O0FBTXBEO0lBQXdDLDZCQUFTO0lBQWpEOztLQVNDOztJQVRxQixTQUFTO1FBSjlCLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1lBQ2xCLFdBQVcsRUFBRSxNQUFNO1NBQ3BCLENBQUM7T0FDb0IsU0FBUyxDQVM5QjtvQkFqQkQ7Q0FpQkMsQUFURCxDQUF3QyxTQUFTLEdBU2hEO1NBVHFCLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPY2NDb25maWcgfSBmcm9tICcuLi8uLi9vY2MvY29uZmlnL29jYy1jb25maWcnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnL2NvbmZpZy5tb2R1bGUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290JyxcbiAgdXNlRXhpc3Rpbmc6IENvbmZpZyxcbn0pXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQXNtQ29uZmlnIGV4dGVuZHMgT2NjQ29uZmlnIHtcbiAgYXNtPzoge1xuICAgIGFnZW50U2Vzc2lvblRpbWVyPzoge1xuICAgICAgc3RhcnRpbmdEZWxheUluU2Vjb25kcz86IG51bWJlcjtcbiAgICB9O1xuICAgIGN1c3RvbWVyU2VhcmNoPzoge1xuICAgICAgbWF4UmVzdWx0cz86IG51bWJlcjtcbiAgICB9O1xuICB9O1xufVxuIl19