var FeaturesConfigModule_1;
import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { provideDefaultConfig } from '../config/config.module';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZXMtY29uZmlnLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9mZWF0dXJlcy1jb25maWcvZmVhdHVyZXMtY29uZmlnLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTlELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBTWxFLElBQWEsb0JBQW9CLDRCQUFqQyxNQUFhLG9CQUFvQjtJQUMvQixNQUFNLENBQUMsT0FBTyxDQUNaLFlBQXFCO1FBRXJCLE9BQU87WUFDTCxRQUFRLEVBQUUsc0JBQW9CO1lBQzlCLFNBQVMsRUFBRTtnQkFDVCxvQkFBb0IsQ0FBaUI7b0JBQ25DLFFBQVEsRUFBRTt3QkFDUixLQUFLLEVBQUUsWUFBWSxJQUFJLEdBQUc7cUJBQzNCO2lCQUNGLENBQUM7YUFDSDtTQUNGLENBQUM7SUFDSixDQUFDO0NBQ0YsQ0FBQTtBQWZZLG9CQUFvQjtJQUpoQyxRQUFRLENBQUM7UUFDUixZQUFZLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSxnQkFBZ0IsQ0FBQztRQUN2RCxPQUFPLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSxnQkFBZ0IsQ0FBQztLQUNuRCxDQUFDO0dBQ1csb0JBQW9CLENBZWhDO1NBZlksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZlYXR1cmVzQ29uZmlnIH0gZnJvbSAnLi9jb25maWcvZmVhdHVyZXMtY29uZmlnJztcbmltcG9ydCB7IHByb3ZpZGVEZWZhdWx0Q29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL2NvbmZpZy5tb2R1bGUnO1xuaW1wb3J0IHsgRmVhdHVyZUxldmVsRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2ZlYXR1cmUtbGV2ZWwuZGlyZWN0aXZlJztcbmltcG9ydCB7IEZlYXR1cmVEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvZmVhdHVyZS5kaXJlY3RpdmUnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtGZWF0dXJlTGV2ZWxEaXJlY3RpdmUsIEZlYXR1cmVEaXJlY3RpdmVdLFxuICBleHBvcnRzOiBbRmVhdHVyZUxldmVsRGlyZWN0aXZlLCBGZWF0dXJlRGlyZWN0aXZlXSxcbn0pXG5leHBvcnQgY2xhc3MgRmVhdHVyZXNDb25maWdNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdChcbiAgICBkZWZhdWx0TGV2ZWw/OiBzdHJpbmdcbiAgKTogTW9kdWxlV2l0aFByb3ZpZGVyczxGZWF0dXJlc0NvbmZpZ01vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogRmVhdHVyZXNDb25maWdNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgcHJvdmlkZURlZmF1bHRDb25maWcoPEZlYXR1cmVzQ29uZmlnPntcbiAgICAgICAgICBmZWF0dXJlczoge1xuICAgICAgICAgICAgbGV2ZWw6IGRlZmF1bHRMZXZlbCB8fCAnKicsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSksXG4gICAgICBdLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==