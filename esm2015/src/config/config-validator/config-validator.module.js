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
/**
 * Should stay private in 1.x
 * as forRoot() is used internally by ConfigInitializerModule
 *
 * issue: #5279
 */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLXZhbGlkYXRvci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY29uZmlnL2NvbmZpZy12YWxpZGF0b3IvY29uZmlnLXZhbGlkYXRvci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxlQUFlLEVBQ2YsU0FBUyxFQUVULFFBQVEsRUFDUixRQUFRLEdBQ1QsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDNUYsT0FBTyxFQUVMLG9CQUFvQixFQUNwQixjQUFjLEdBQ2YsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7O0FBRTVCLE1BQU0sVUFBVSxzQkFBc0IsQ0FDcEMsaUJBQTJDLEVBQzNDLFVBQTZCOztVQUV2QixRQUFROzs7SUFBRyxHQUFHLEVBQUU7UUFDcEIsSUFBSSxTQUFTLEVBQUUsRUFBRTtZQUNmLGlCQUFpQjtpQkFDZCxlQUFlLEVBQUU7aUJBQ2pCLElBQUk7Ozs7WUFBQyxNQUFNLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsVUFBVSxJQUFJLEVBQUUsQ0FBQyxFQUFDLENBQUM7U0FDN0Q7SUFDSCxDQUFDLENBQUE7SUFDRCxPQUFPLFFBQVEsQ0FBQztBQUNsQixDQUFDOzs7Ozs7O0FBU0QsTUFBTSxPQUFPLHFCQUFxQjs7OztJQUNoQyxNQUFNLENBQUMsT0FBTztRQUNaLE9BQU87WUFDTCxRQUFRLEVBQUUscUJBQXFCO1lBQy9CLFNBQVMsRUFBRTtnQkFDVDtvQkFDRSxPQUFPLEVBQUUsZUFBZTtvQkFDeEIsS0FBSyxFQUFFLElBQUk7b0JBQ1gsVUFBVSxFQUFFLHNCQUFzQjtvQkFDbEMsSUFBSSxFQUFFO3dCQUNKLHdCQUF3Qjt3QkFDeEIsQ0FBQyxJQUFJLFFBQVEsRUFBRSxFQUFFLG9CQUFvQixDQUFDO3FCQUN2QztpQkFDRjthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7OztZQWpCRixRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQVBQX0lOSVRJQUxJWkVSLFxuICBpc0Rldk1vZGUsXG4gIE1vZHVsZVdpdGhQcm92aWRlcnMsXG4gIE5nTW9kdWxlLFxuICBPcHRpb25hbCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb25maWdJbml0aWFsaXplclNlcnZpY2UgfSBmcm9tICcuLi9jb25maWctaW5pdGlhbGl6ZXIvY29uZmlnLWluaXRpYWxpemVyLnNlcnZpY2UnO1xuaW1wb3J0IHtcbiAgQ29uZmlnVmFsaWRhdG9yLFxuICBDb25maWdWYWxpZGF0b3JUb2tlbixcbiAgdmFsaWRhdGVDb25maWcsXG59IGZyb20gJy4vY29uZmlnLXZhbGlkYXRvcic7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25maWdWYWxpZGF0b3JGYWN0b3J5KFxuICBjb25maWdJbml0aWFsaXplcjogQ29uZmlnSW5pdGlhbGl6ZXJTZXJ2aWNlLFxuICB2YWxpZGF0b3JzOiBDb25maWdWYWxpZGF0b3JbXVxuKSB7XG4gIGNvbnN0IHZhbGlkYXRlID0gKCkgPT4ge1xuICAgIGlmIChpc0Rldk1vZGUoKSkge1xuICAgICAgY29uZmlnSW5pdGlhbGl6ZXJcbiAgICAgICAgLmdldFN0YWJsZUNvbmZpZygpXG4gICAgICAgIC50aGVuKGNvbmZpZyA9PiB2YWxpZGF0ZUNvbmZpZyhjb25maWcsIHZhbGlkYXRvcnMgfHwgW10pKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB2YWxpZGF0ZTtcbn1cblxuLyoqXG4gKiBTaG91bGQgc3RheSBwcml2YXRlIGluIDEueFxuICogYXMgZm9yUm9vdCgpIGlzIHVzZWQgaW50ZXJuYWxseSBieSBDb25maWdJbml0aWFsaXplck1vZHVsZVxuICpcbiAqIGlzc3VlOiAjNTI3OVxuICovXG5ATmdNb2R1bGUoKVxuZXhwb3J0IGNsYXNzIENvbmZpZ1ZhbGlkYXRvck1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8Q29uZmlnVmFsaWRhdG9yTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBDb25maWdWYWxpZGF0b3JNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IEFQUF9JTklUSUFMSVpFUixcbiAgICAgICAgICBtdWx0aTogdHJ1ZSxcbiAgICAgICAgICB1c2VGYWN0b3J5OiBjb25maWdWYWxpZGF0b3JGYWN0b3J5LFxuICAgICAgICAgIGRlcHM6IFtcbiAgICAgICAgICAgIENvbmZpZ0luaXRpYWxpemVyU2VydmljZSxcbiAgICAgICAgICAgIFtuZXcgT3B0aW9uYWwoKSwgQ29uZmlnVmFsaWRhdG9yVG9rZW5dLFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==