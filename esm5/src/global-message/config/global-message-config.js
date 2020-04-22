import { __decorate } from "tslib";
import { GlobalMessageType } from '../models/global-message.model';
import { Injectable } from '@angular/core';
import { Config } from '../../config/config.module';
import * as i0 from "@angular/core";
import * as i1 from "../../config/config.module";
var GlobalMessageConfig = /** @class */ (function () {
    function GlobalMessageConfig() {
    }
    GlobalMessageConfig.ɵprov = i0.ɵɵdefineInjectable({ factory: function GlobalMessageConfig_Factory() { return i0.ɵɵinject(i1.Config); }, token: GlobalMessageConfig, providedIn: "root" });
    GlobalMessageConfig = __decorate([
        Injectable({
            providedIn: 'root',
            useExisting: Config,
        })
    ], GlobalMessageConfig);
    return GlobalMessageConfig;
}());
export { GlobalMessageConfig };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLW1lc3NhZ2UtY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2dsb2JhbC1tZXNzYWdlL2NvbmZpZy9nbG9iYWwtbWVzc2FnZS1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLDRCQUE0QixDQUFDOzs7QUFVcEQ7SUFBQTtLQU9DOztJQVBxQixtQkFBbUI7UUFKeEMsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07WUFDbEIsV0FBVyxFQUFFLE1BQU07U0FDcEIsQ0FBQztPQUNvQixtQkFBbUIsQ0FPeEM7OEJBbkJEO0NBbUJDLEFBUEQsSUFPQztTQVBxQixtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHbG9iYWxNZXNzYWdlVHlwZSB9IGZyb20gJy4uL21vZGVscy9nbG9iYWwtbWVzc2FnZS5tb2RlbCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcvY29uZmlnLm1vZHVsZSc7XG5cbmV4cG9ydCB0eXBlIEdsb2JhbE1lc3NhZ2VUeXBlQ29uZmlnID0ge1xuICB0aW1lb3V0PzogbnVtYmVyO1xufTtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG4gIHVzZUV4aXN0aW5nOiBDb25maWcsXG59KVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEdsb2JhbE1lc3NhZ2VDb25maWcge1xuICBnbG9iYWxNZXNzYWdlczoge1xuICAgIFtHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9DT05GSVJNQVRJT05dPzogR2xvYmFsTWVzc2FnZVR5cGVDb25maWc7XG4gICAgW0dsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0lORk9dPzogR2xvYmFsTWVzc2FnZVR5cGVDb25maWc7XG4gICAgW0dsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0VSUk9SXT86IEdsb2JhbE1lc3NhZ2VUeXBlQ29uZmlnO1xuICAgIFtHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9XQVJOSU5HXT86IEdsb2JhbE1lc3NhZ2VUeXBlQ29uZmlnO1xuICB9O1xufVxuIl19