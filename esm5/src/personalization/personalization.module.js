/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { Config, ConfigModule } from '../config/config.module';
import { PersonalizationConfig } from './config/personalization-config';
import { defaultPersonalizationConfig } from './config/default-personalization-config';
import { interceptors } from './http-interceptors/index';
var PersonalizationModule = /** @class */ (function () {
    function PersonalizationModule() {
    }
    /**
     * @return {?}
     */
    PersonalizationModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: PersonalizationModule,
            providers: tslib_1.__spread(interceptors),
        };
    };
    PersonalizationModule.decorators = [
        { type: NgModule, args: [{
                    imports: [ConfigModule.withConfig(defaultPersonalizationConfig)],
                    providers: [{ provide: PersonalizationConfig, useExisting: Config }],
                },] }
    ];
    return PersonalizationModule;
}());
export { PersonalizationModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc29uYWxpemF0aW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9wZXJzb25hbGl6YXRpb24vcGVyc29uYWxpemF0aW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDL0QsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDeEUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFFdkYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRXpEO0lBQUE7SUFXQSxDQUFDOzs7O0lBTlEsNkJBQU87OztJQUFkO1FBQ0UsT0FBTztZQUNMLFFBQVEsRUFBRSxxQkFBcUI7WUFDL0IsU0FBUyxtQkFBTSxZQUFZLENBQUM7U0FDN0IsQ0FBQztJQUNKLENBQUM7O2dCQVZGLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLDRCQUE0QixDQUFDLENBQUM7b0JBQ2hFLFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsQ0FBQztpQkFDckU7O0lBUUQsNEJBQUM7Q0FBQSxBQVhELElBV0M7U0FQWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29uZmlnLCBDb25maWdNb2R1bGUgfSBmcm9tICcuLi9jb25maWcvY29uZmlnLm1vZHVsZSc7XG5pbXBvcnQgeyBQZXJzb25hbGl6YXRpb25Db25maWcgfSBmcm9tICcuL2NvbmZpZy9wZXJzb25hbGl6YXRpb24tY29uZmlnJztcbmltcG9ydCB7IGRlZmF1bHRQZXJzb25hbGl6YXRpb25Db25maWcgfSBmcm9tICcuL2NvbmZpZy9kZWZhdWx0LXBlcnNvbmFsaXphdGlvbi1jb25maWcnO1xuXG5pbXBvcnQgeyBpbnRlcmNlcHRvcnMgfSBmcm9tICcuL2h0dHAtaW50ZXJjZXB0b3JzL2luZGV4JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbmZpZ01vZHVsZS53aXRoQ29uZmlnKGRlZmF1bHRQZXJzb25hbGl6YXRpb25Db25maWcpXSxcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBQZXJzb25hbGl6YXRpb25Db25maWcsIHVzZUV4aXN0aW5nOiBDb25maWcgfV0sXG59KVxuZXhwb3J0IGNsYXNzIFBlcnNvbmFsaXphdGlvbk1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8UGVyc29uYWxpemF0aW9uTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBQZXJzb25hbGl6YXRpb25Nb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFsuLi5pbnRlcmNlcHRvcnNdLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==