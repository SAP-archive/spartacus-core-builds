/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { FeaturesConfig } from './config/features-config';
import { Config, provideConfig } from '../config/config.module';
import { FeatureLevelDirective } from './directives/feature-level.directive';
import { FeatureDirective } from './directives/feature.directive';
export class FeaturesConfigModule {
    /**
     * @param {?=} defaultLevel
     * @return {?}
     */
    static forRoot(defaultLevel) {
        return {
            ngModule: FeaturesConfigModule,
            providers: [
                provideConfig((/** @type {?} */ ({
                    features: {
                        level: defaultLevel || '999',
                    },
                }))),
                {
                    provide: FeaturesConfig,
                    useExisting: Config,
                },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZXMtY29uZmlnLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9mZWF0dXJlcy1jb25maWcvZmVhdHVyZXMtY29uZmlnLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzFELE9BQU8sRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDaEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDN0UsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFNbEUsTUFBTSxPQUFPLG9CQUFvQjs7Ozs7SUFDL0IsTUFBTSxDQUFDLE9BQU8sQ0FDWixZQUFxQjtRQUVyQixPQUFPO1lBQ0wsUUFBUSxFQUFFLG9CQUFvQjtZQUM5QixTQUFTLEVBQUU7Z0JBQ1QsYUFBYSxDQUFDLG1CQUFnQjtvQkFDNUIsUUFBUSxFQUFFO3dCQUNSLEtBQUssRUFBRSxZQUFZLElBQUksS0FBSztxQkFDN0I7aUJBQ0YsRUFBQSxDQUFDO2dCQUNGO29CQUNFLE9BQU8sRUFBRSxjQUFjO29CQUN2QixXQUFXLEVBQUUsTUFBTTtpQkFDcEI7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDOzs7WUF0QkYsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLHFCQUFxQixFQUFFLGdCQUFnQixDQUFDO2dCQUN2RCxPQUFPLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSxnQkFBZ0IsQ0FBQzthQUNuRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGZWF0dXJlc0NvbmZpZyB9IGZyb20gJy4vY29uZmlnL2ZlYXR1cmVzLWNvbmZpZyc7XG5pbXBvcnQgeyBDb25maWcsIHByb3ZpZGVDb25maWcgfSBmcm9tICcuLi9jb25maWcvY29uZmlnLm1vZHVsZSc7XG5pbXBvcnQgeyBGZWF0dXJlTGV2ZWxEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvZmVhdHVyZS1sZXZlbC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRmVhdHVyZURpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9mZWF0dXJlLmRpcmVjdGl2ZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0ZlYXR1cmVMZXZlbERpcmVjdGl2ZSwgRmVhdHVyZURpcmVjdGl2ZV0sXG4gIGV4cG9ydHM6IFtGZWF0dXJlTGV2ZWxEaXJlY3RpdmUsIEZlYXR1cmVEaXJlY3RpdmVdLFxufSlcbmV4cG9ydCBjbGFzcyBGZWF0dXJlc0NvbmZpZ01vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KFxuICAgIGRlZmF1bHRMZXZlbD86IHN0cmluZ1xuICApOiBNb2R1bGVXaXRoUHJvdmlkZXJzPEZlYXR1cmVzQ29uZmlnTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBGZWF0dXJlc0NvbmZpZ01vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICBwcm92aWRlQ29uZmlnKDxGZWF0dXJlc0NvbmZpZz57XG4gICAgICAgICAgZmVhdHVyZXM6IHtcbiAgICAgICAgICAgIGxldmVsOiBkZWZhdWx0TGV2ZWwgfHwgJzk5OScsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSksXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBGZWF0dXJlc0NvbmZpZyxcbiAgICAgICAgICB1c2VFeGlzdGluZzogQ29uZmlnLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG4iXX0=