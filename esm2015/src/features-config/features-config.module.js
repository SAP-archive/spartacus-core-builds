import { NgModule } from '@angular/core';
import { FeatureLevelDirective } from './directives/feature-level.directive';
import { FeatureDirective } from './directives/feature.directive';
import { provideDefaultConfig } from '../config/config-providers';
export class FeaturesConfigModule {
    static forRoot(defaultLevel) {
        return {
            ngModule: FeaturesConfigModule,
            providers: [
                provideDefaultConfig({
                    features: {
                        level: defaultLevel || '*',
                    },
                }),
            ],
        };
    }
}
FeaturesConfigModule.decorators = [
    { type: NgModule, args: [{
                declarations: [FeatureLevelDirective, FeatureDirective],
                exports: [FeatureLevelDirective, FeatureDirective],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZXMtY29uZmlnLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL2ZlYXR1cmVzLWNvbmZpZy9mZWF0dXJlcy1jb25maWcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTlELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBTWxFLE1BQU0sT0FBTyxvQkFBb0I7SUFDL0IsTUFBTSxDQUFDLE9BQU8sQ0FDWixZQUFxQjtRQUVyQixPQUFPO1lBQ0wsUUFBUSxFQUFFLG9CQUFvQjtZQUM5QixTQUFTLEVBQUU7Z0JBQ1Qsb0JBQW9CLENBQWlCO29CQUNuQyxRQUFRLEVBQUU7d0JBQ1IsS0FBSyxFQUFFLFlBQVksSUFBSSxHQUFHO3FCQUMzQjtpQkFDRixDQUFDO2FBQ0g7U0FDRixDQUFDO0lBQ0osQ0FBQzs7O1lBbEJGLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSxnQkFBZ0IsQ0FBQztnQkFDdkQsT0FBTyxFQUFFLENBQUMscUJBQXFCLEVBQUUsZ0JBQWdCLENBQUM7YUFDbkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmVhdHVyZXNDb25maWcgfSBmcm9tICcuL2NvbmZpZy9mZWF0dXJlcy1jb25maWcnO1xuaW1wb3J0IHsgRmVhdHVyZUxldmVsRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2ZlYXR1cmUtbGV2ZWwuZGlyZWN0aXZlJztcbmltcG9ydCB7IEZlYXR1cmVEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvZmVhdHVyZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgcHJvdmlkZURlZmF1bHRDb25maWcgfSBmcm9tICcuLi9jb25maWcvY29uZmlnLXByb3ZpZGVycyc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0ZlYXR1cmVMZXZlbERpcmVjdGl2ZSwgRmVhdHVyZURpcmVjdGl2ZV0sXG4gIGV4cG9ydHM6IFtGZWF0dXJlTGV2ZWxEaXJlY3RpdmUsIEZlYXR1cmVEaXJlY3RpdmVdLFxufSlcbmV4cG9ydCBjbGFzcyBGZWF0dXJlc0NvbmZpZ01vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KFxuICAgIGRlZmF1bHRMZXZlbD86IHN0cmluZ1xuICApOiBNb2R1bGVXaXRoUHJvdmlkZXJzPEZlYXR1cmVzQ29uZmlnTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBGZWF0dXJlc0NvbmZpZ01vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICBwcm92aWRlRGVmYXVsdENvbmZpZyg8RmVhdHVyZXNDb25maWc+e1xuICAgICAgICAgIGZlYXR1cmVzOiB7XG4gICAgICAgICAgICBsZXZlbDogZGVmYXVsdExldmVsIHx8ICcqJyxcbiAgICAgICAgICB9LFxuICAgICAgICB9KSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl19