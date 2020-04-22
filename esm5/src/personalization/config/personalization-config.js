import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Config } from '../../config/config.module';
import * as i0 from "@angular/core";
import * as i1 from "../../config/config.module";
var PersonalizationConfig = /** @class */ (function () {
    function PersonalizationConfig() {
    }
    PersonalizationConfig.ɵprov = i0.ɵɵdefineInjectable({ factory: function PersonalizationConfig_Factory() { return i0.ɵɵinject(i1.Config); }, token: PersonalizationConfig, providedIn: "root" });
    PersonalizationConfig = __decorate([
        Injectable({
            providedIn: 'root',
            useExisting: Config,
        })
    ], PersonalizationConfig);
    return PersonalizationConfig;
}());
export { PersonalizationConfig };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc29uYWxpemF0aW9uLWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9wZXJzb25hbGl6YXRpb24vY29uZmlnL3BlcnNvbmFsaXphdGlvbi1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLDRCQUE0QixDQUFDOzs7QUFNcEQ7SUFBQTtLQVlDOztJQVpxQixxQkFBcUI7UUFKMUMsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07WUFDbEIsV0FBVyxFQUFFLE1BQU07U0FDcEIsQ0FBQztPQUNvQixxQkFBcUIsQ0FZMUM7Z0NBbkJEO0NBbUJDLEFBWkQsSUFZQztTQVpxQixxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcvY29uZmlnLm1vZHVsZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxuICB1c2VFeGlzdGluZzogQ29uZmlnLFxufSlcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBQZXJzb25hbGl6YXRpb25Db25maWcge1xuICBwZXJzb25hbGl6YXRpb246IHtcbiAgICBlbmFibGVkPzogYm9vbGVhbjtcbiAgICBodHRwSGVhZGVyTmFtZT86IHtcbiAgICAgIGlkOiBzdHJpbmc7XG4gICAgICB0aW1lc3RhbXA6IHN0cmluZztcbiAgICB9O1xuICAgIGNvbnRleHQ/OiB7XG4gICAgICBzbG90UG9zaXRpb24/OiBzdHJpbmc7XG4gICAgICBjb21wb25lbnRJZD86IHN0cmluZztcbiAgICB9O1xuICB9O1xufVxuIl19