import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { FeaturesConfig } from './config/features-config';
import { Config, provideDefaultConfig } from '../config/config.module';
import { FeatureLevelDirective } from './directives/feature-level.directive';
import { FeatureDirective } from './directives/feature.directive';
var FeaturesConfigModule = /** @class */ (function () {
    function FeaturesConfigModule() {
    }
    FeaturesConfigModule_1 = FeaturesConfigModule;
    FeaturesConfigModule.forRoot = function (defaultLevel) {
        return {
            ngModule: FeaturesConfigModule_1,
            providers: [
                provideDefaultConfig({
                    features: {
                        level: defaultLevel || '*',
                    },
                }),
                {
                    provide: FeaturesConfig,
                    useExisting: Config,
                },
            ],
        };
    };
    var FeaturesConfigModule_1;
    FeaturesConfigModule = FeaturesConfigModule_1 = __decorate([
        NgModule({
            declarations: [FeatureLevelDirective, FeatureDirective],
            exports: [FeatureLevelDirective, FeatureDirective],
        })
    ], FeaturesConfigModule);
    return FeaturesConfigModule;
}());
export { FeaturesConfigModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZXMtY29uZmlnLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9mZWF0dXJlcy1jb25maWcvZmVhdHVyZXMtY29uZmlnLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzFELE9BQU8sRUFBRSxNQUFNLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUM3RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQU1sRTtJQUFBO0lBbUJBLENBQUM7NkJBbkJZLG9CQUFvQjtJQUN4Qiw0QkFBTyxHQUFkLFVBQ0UsWUFBcUI7UUFFckIsT0FBTztZQUNMLFFBQVEsRUFBRSxzQkFBb0I7WUFDOUIsU0FBUyxFQUFFO2dCQUNULG9CQUFvQixDQUFpQjtvQkFDbkMsUUFBUSxFQUFFO3dCQUNSLEtBQUssRUFBRSxZQUFZLElBQUksR0FBRztxQkFDM0I7aUJBQ0YsQ0FBQztnQkFDRjtvQkFDRSxPQUFPLEVBQUUsY0FBYztvQkFDdkIsV0FBVyxFQUFFLE1BQU07aUJBQ3BCO2FBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQzs7SUFsQlUsb0JBQW9CO1FBSmhDLFFBQVEsQ0FBQztZQUNSLFlBQVksRUFBRSxDQUFDLHFCQUFxQixFQUFFLGdCQUFnQixDQUFDO1lBQ3ZELE9BQU8sRUFBRSxDQUFDLHFCQUFxQixFQUFFLGdCQUFnQixDQUFDO1NBQ25ELENBQUM7T0FDVyxvQkFBb0IsQ0FtQmhDO0lBQUQsMkJBQUM7Q0FBQSxBQW5CRCxJQW1CQztTQW5CWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmVhdHVyZXNDb25maWcgfSBmcm9tICcuL2NvbmZpZy9mZWF0dXJlcy1jb25maWcnO1xuaW1wb3J0IHsgQ29uZmlnLCBwcm92aWRlRGVmYXVsdENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9jb25maWcubW9kdWxlJztcbmltcG9ydCB7IEZlYXR1cmVMZXZlbERpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9mZWF0dXJlLWxldmVsLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBGZWF0dXJlRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2ZlYXR1cmUuZGlyZWN0aXZlJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbRmVhdHVyZUxldmVsRGlyZWN0aXZlLCBGZWF0dXJlRGlyZWN0aXZlXSxcbiAgZXhwb3J0czogW0ZlYXR1cmVMZXZlbERpcmVjdGl2ZSwgRmVhdHVyZURpcmVjdGl2ZV0sXG59KVxuZXhwb3J0IGNsYXNzIEZlYXR1cmVzQ29uZmlnTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoXG4gICAgZGVmYXVsdExldmVsPzogc3RyaW5nXG4gICk6IE1vZHVsZVdpdGhQcm92aWRlcnM8RmVhdHVyZXNDb25maWdNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEZlYXR1cmVzQ29uZmlnTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHByb3ZpZGVEZWZhdWx0Q29uZmlnKDxGZWF0dXJlc0NvbmZpZz57XG4gICAgICAgICAgZmVhdHVyZXM6IHtcbiAgICAgICAgICAgIGxldmVsOiBkZWZhdWx0TGV2ZWwgfHwgJyonLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pLFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogRmVhdHVyZXNDb25maWcsXG4gICAgICAgICAgdXNlRXhpc3Rpbmc6IENvbmZpZyxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl19