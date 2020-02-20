var FeaturesConfigModule_1;
import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { FeaturesConfig } from './config/features-config';
import { Config, provideConfig } from '../config/config.module';
import { FeatureLevelDirective } from './directives/feature-level.directive';
import { FeatureDirective } from './directives/feature.directive';
let FeaturesConfigModule = FeaturesConfigModule_1 = class FeaturesConfigModule {
    static forRoot(defaultLevel) {
        return {
            ngModule: FeaturesConfigModule_1,
            providers: [
                provideConfig({
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZXMtY29uZmlnLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9mZWF0dXJlcy1jb25maWcvZmVhdHVyZXMtY29uZmlnLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBTWxFLElBQWEsb0JBQW9CLDRCQUFqQyxNQUFhLG9CQUFvQjtJQUMvQixNQUFNLENBQUMsT0FBTyxDQUNaLFlBQXFCO1FBRXJCLE9BQU87WUFDTCxRQUFRLEVBQUUsc0JBQW9CO1lBQzlCLFNBQVMsRUFBRTtnQkFDVCxhQUFhLENBQWlCO29CQUM1QixRQUFRLEVBQUU7d0JBQ1IsS0FBSyxFQUFFLFlBQVksSUFBSSxHQUFHO3FCQUMzQjtpQkFDRixDQUFDO2dCQUNGO29CQUNFLE9BQU8sRUFBRSxjQUFjO29CQUN2QixXQUFXLEVBQUUsTUFBTTtpQkFDcEI7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDO0NBQ0YsQ0FBQTtBQW5CWSxvQkFBb0I7SUFKaEMsUUFBUSxDQUFDO1FBQ1IsWUFBWSxFQUFFLENBQUMscUJBQXFCLEVBQUUsZ0JBQWdCLENBQUM7UUFDdkQsT0FBTyxFQUFFLENBQUMscUJBQXFCLEVBQUUsZ0JBQWdCLENBQUM7S0FDbkQsQ0FBQztHQUNXLG9CQUFvQixDQW1CaEM7U0FuQlksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZlYXR1cmVzQ29uZmlnIH0gZnJvbSAnLi9jb25maWcvZmVhdHVyZXMtY29uZmlnJztcbmltcG9ydCB7IENvbmZpZywgcHJvdmlkZUNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9jb25maWcubW9kdWxlJztcbmltcG9ydCB7IEZlYXR1cmVMZXZlbERpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9mZWF0dXJlLWxldmVsLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBGZWF0dXJlRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2ZlYXR1cmUuZGlyZWN0aXZlJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbRmVhdHVyZUxldmVsRGlyZWN0aXZlLCBGZWF0dXJlRGlyZWN0aXZlXSxcbiAgZXhwb3J0czogW0ZlYXR1cmVMZXZlbERpcmVjdGl2ZSwgRmVhdHVyZURpcmVjdGl2ZV0sXG59KVxuZXhwb3J0IGNsYXNzIEZlYXR1cmVzQ29uZmlnTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoXG4gICAgZGVmYXVsdExldmVsPzogc3RyaW5nXG4gICk6IE1vZHVsZVdpdGhQcm92aWRlcnM8RmVhdHVyZXNDb25maWdNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEZlYXR1cmVzQ29uZmlnTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHByb3ZpZGVDb25maWcoPEZlYXR1cmVzQ29uZmlnPntcbiAgICAgICAgICBmZWF0dXJlczoge1xuICAgICAgICAgICAgbGV2ZWw6IGRlZmF1bHRMZXZlbCB8fCAnKicsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSksXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBGZWF0dXJlc0NvbmZpZyxcbiAgICAgICAgICB1c2VFeGlzdGluZzogQ29uZmlnLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG4iXX0=