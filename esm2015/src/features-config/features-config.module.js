var FeaturesConfigModule_1;
import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { FeaturesConfig } from './config/features-config';
import { Config, provideDefaultConfig } from '../config/config.module';
import { FeatureLevelDirective } from './directives/feature-level.directive';
import { FeatureDirective } from './directives/feature.directive';
let FeaturesConfigModule = FeaturesConfigModule_1 = class FeaturesConfigModule {
    static forRoot(defaultLevel) {
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
    }
};
FeaturesConfigModule = FeaturesConfigModule_1 = __decorate([
    NgModule({
        declarations: [FeatureLevelDirective, FeatureDirective],
        exports: [FeatureLevelDirective, FeatureDirective],
    })
], FeaturesConfigModule);
export { FeaturesConfigModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZXMtY29uZmlnLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9mZWF0dXJlcy1jb25maWcvZmVhdHVyZXMtY29uZmlnLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsTUFBTSxFQUFFLG9CQUFvQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDdkUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDN0UsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFNbEUsSUFBYSxvQkFBb0IsNEJBQWpDLE1BQWEsb0JBQW9CO0lBQy9CLE1BQU0sQ0FBQyxPQUFPLENBQ1osWUFBcUI7UUFFckIsT0FBTztZQUNMLFFBQVEsRUFBRSxzQkFBb0I7WUFDOUIsU0FBUyxFQUFFO2dCQUNULG9CQUFvQixDQUFpQjtvQkFDbkMsUUFBUSxFQUFFO3dCQUNSLEtBQUssRUFBRSxZQUFZLElBQUksR0FBRztxQkFDM0I7aUJBQ0YsQ0FBQztnQkFDRjtvQkFDRSxPQUFPLEVBQUUsY0FBYztvQkFDdkIsV0FBVyxFQUFFLE1BQU07aUJBQ3BCO2FBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQztDQUNGLENBQUE7QUFuQlksb0JBQW9CO0lBSmhDLFFBQVEsQ0FBQztRQUNSLFlBQVksRUFBRSxDQUFDLHFCQUFxQixFQUFFLGdCQUFnQixDQUFDO1FBQ3ZELE9BQU8sRUFBRSxDQUFDLHFCQUFxQixFQUFFLGdCQUFnQixDQUFDO0tBQ25ELENBQUM7R0FDVyxvQkFBb0IsQ0FtQmhDO1NBbkJZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGZWF0dXJlc0NvbmZpZyB9IGZyb20gJy4vY29uZmlnL2ZlYXR1cmVzLWNvbmZpZyc7XG5pbXBvcnQgeyBDb25maWcsIHByb3ZpZGVEZWZhdWx0Q29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL2NvbmZpZy5tb2R1bGUnO1xuaW1wb3J0IHsgRmVhdHVyZUxldmVsRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2ZlYXR1cmUtbGV2ZWwuZGlyZWN0aXZlJztcbmltcG9ydCB7IEZlYXR1cmVEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvZmVhdHVyZS5kaXJlY3RpdmUnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtGZWF0dXJlTGV2ZWxEaXJlY3RpdmUsIEZlYXR1cmVEaXJlY3RpdmVdLFxuICBleHBvcnRzOiBbRmVhdHVyZUxldmVsRGlyZWN0aXZlLCBGZWF0dXJlRGlyZWN0aXZlXSxcbn0pXG5leHBvcnQgY2xhc3MgRmVhdHVyZXNDb25maWdNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdChcbiAgICBkZWZhdWx0TGV2ZWw/OiBzdHJpbmdcbiAgKTogTW9kdWxlV2l0aFByb3ZpZGVyczxGZWF0dXJlc0NvbmZpZ01vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogRmVhdHVyZXNDb25maWdNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgcHJvdmlkZURlZmF1bHRDb25maWcoPEZlYXR1cmVzQ29uZmlnPntcbiAgICAgICAgICBmZWF0dXJlczoge1xuICAgICAgICAgICAgbGV2ZWw6IGRlZmF1bHRMZXZlbCB8fCAnKicsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSksXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBGZWF0dXJlc0NvbmZpZyxcbiAgICAgICAgICB1c2VFeGlzdGluZzogQ29uZmlnLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG4iXX0=