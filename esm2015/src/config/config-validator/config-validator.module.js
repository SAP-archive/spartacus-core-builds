/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { APP_INITIALIZER, isDevMode, NgModule, Optional, } from '@angular/core';
import { ConfigInitializerService } from '../config-initializer/config-initializer.service';
import { ConfigValidatorToken, validateConfig, } from './config-validator';
/**
 * @param {?} configInitializer
 * @param {?} validators
 * @return {?}
 */
export function configValidatorFactory(configInitializer, validators) {
    /** @type {?} */
    const validate = (/**
     * @return {?}
     */
    () => {
        if (isDevMode()) {
            configInitializer
                .getStableConfig()
                .then((/**
             * @param {?} config
             * @return {?}
             */
            config => validateConfig(config, validators || [])));
        }
    });
    return validate;
}
export class ConfigValidatorModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: ConfigValidatorModule,
            providers: [
                {
                    provide: APP_INITIALIZER,
                    multi: true,
                    useFactory: configValidatorFactory,
                    deps: [
                        ConfigInitializerService,
                        [new Optional(), ConfigValidatorToken],
                    ],
                },
            ],
        };
    }
}
ConfigValidatorModule.decorators = [
    { type: NgModule }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLXZhbGlkYXRvci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY29uZmlnL2NvbmZpZy12YWxpZGF0b3IvY29uZmlnLXZhbGlkYXRvci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxlQUFlLEVBQ2YsU0FBUyxFQUVULFFBQVEsRUFDUixRQUFRLEdBQ1QsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDNUYsT0FBTyxFQUVMLG9CQUFvQixFQUNwQixjQUFjLEdBQ2YsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7O0FBRTVCLE1BQU0sVUFBVSxzQkFBc0IsQ0FDcEMsaUJBQTJDLEVBQzNDLFVBQTZCOztVQUV2QixRQUFROzs7SUFBRyxHQUFHLEVBQUU7UUFDcEIsSUFBSSxTQUFTLEVBQUUsRUFBRTtZQUNmLGlCQUFpQjtpQkFDZCxlQUFlLEVBQUU7aUJBQ2pCLElBQUk7Ozs7WUFBQyxNQUFNLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsVUFBVSxJQUFJLEVBQUUsQ0FBQyxFQUFDLENBQUM7U0FDN0Q7SUFDSCxDQUFDLENBQUE7SUFDRCxPQUFPLFFBQVEsQ0FBQztBQUNsQixDQUFDO0FBR0QsTUFBTSxPQUFPLHFCQUFxQjs7OztJQUNoQyxNQUFNLENBQUMsT0FBTztRQUNaLE9BQU87WUFDTCxRQUFRLEVBQUUscUJBQXFCO1lBQy9CLFNBQVMsRUFBRTtnQkFDVDtvQkFDRSxPQUFPLEVBQUUsZUFBZTtvQkFDeEIsS0FBSyxFQUFFLElBQUk7b0JBQ1gsVUFBVSxFQUFFLHNCQUFzQjtvQkFDbEMsSUFBSSxFQUFFO3dCQUNKLHdCQUF3Qjt3QkFDeEIsQ0FBQyxJQUFJLFFBQVEsRUFBRSxFQUFFLG9CQUFvQixDQUFDO3FCQUN2QztpQkFDRjthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7OztZQWpCRixRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQVBQX0lOSVRJQUxJWkVSLFxuICBpc0Rldk1vZGUsXG4gIE1vZHVsZVdpdGhQcm92aWRlcnMsXG4gIE5nTW9kdWxlLFxuICBPcHRpb25hbCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb25maWdJbml0aWFsaXplclNlcnZpY2UgfSBmcm9tICcuLi9jb25maWctaW5pdGlhbGl6ZXIvY29uZmlnLWluaXRpYWxpemVyLnNlcnZpY2UnO1xuaW1wb3J0IHtcbiAgQ29uZmlnVmFsaWRhdG9yLFxuICBDb25maWdWYWxpZGF0b3JUb2tlbixcbiAgdmFsaWRhdGVDb25maWcsXG59IGZyb20gJy4vY29uZmlnLXZhbGlkYXRvcic7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25maWdWYWxpZGF0b3JGYWN0b3J5KFxuICBjb25maWdJbml0aWFsaXplcjogQ29uZmlnSW5pdGlhbGl6ZXJTZXJ2aWNlLFxuICB2YWxpZGF0b3JzOiBDb25maWdWYWxpZGF0b3JbXVxuKSB7XG4gIGNvbnN0IHZhbGlkYXRlID0gKCkgPT4ge1xuICAgIGlmIChpc0Rldk1vZGUoKSkge1xuICAgICAgY29uZmlnSW5pdGlhbGl6ZXJcbiAgICAgICAgLmdldFN0YWJsZUNvbmZpZygpXG4gICAgICAgIC50aGVuKGNvbmZpZyA9PiB2YWxpZGF0ZUNvbmZpZyhjb25maWcsIHZhbGlkYXRvcnMgfHwgW10pKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB2YWxpZGF0ZTtcbn1cblxuQE5nTW9kdWxlKClcbmV4cG9ydCBjbGFzcyBDb25maWdWYWxpZGF0b3JNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPENvbmZpZ1ZhbGlkYXRvck1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQ29uZmlnVmFsaWRhdG9yTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBBUFBfSU5JVElBTElaRVIsXG4gICAgICAgICAgbXVsdGk6IHRydWUsXG4gICAgICAgICAgdXNlRmFjdG9yeTogY29uZmlnVmFsaWRhdG9yRmFjdG9yeSxcbiAgICAgICAgICBkZXBzOiBbXG4gICAgICAgICAgICBDb25maWdJbml0aWFsaXplclNlcnZpY2UsXG4gICAgICAgICAgICBbbmV3IE9wdGlvbmFsKCksIENvbmZpZ1ZhbGlkYXRvclRva2VuXSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG4iXX0=